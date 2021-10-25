/**负责对战开始时从开始到结束时的渲染
 * 其余部分与其无关
 * 例如人物移动\子骨骼渲染、特效、计时读秒等
 */
class FightMainRender {
    public static instance: FightMainRender;
    public renderMc: Array<renderFrameScript> = [];
    private _framememoryid: number = 0; //从第1帧开始存储
    private _framerunid: number = 1;    //从第1帧开始执行
    public renderPause: boolean = false;


    private constructor() {
        return;
    }

    public getRunID(): number {
        return this._framerunid;
    }


    public static getInstance(): FightMainRender {
        if (FightMainRender.instance == null) {
            FightMainRender.instance = new FightMainRender;
        }
        return FightMainRender.instance;
    }

    public Add(mc: any, _fun: Function, params: Array<any> = null): void {
        for (let i in this.renderMc) {
            if (this.renderMc[i].mc == mc && this.renderMc[i].fun == _fun) {
                return;
            }
        }
        let param1 = new renderFrameScript(_fun, mc, params);
        this.renderMc.push(param1);
    }

    public Remove(mc: any, _fun: Function): void {
        for (let i in this.renderMc) {
            if (this.renderMc[i].mc == mc && this.renderMc[i].fun == _fun) {
                this.renderMc.splice(Number(i), 1);
                return;
            }
        }
    }


    /**整局对战开始时调用而非切换回合时调用 */
    //未调用
    public initlize(): void {
        if (GameModel.currentMode != GameModel.VS_PERSON) {
            GameRender.I.Add(this, this.render);
        } else {
            GameRender.I.Add(this, this.Netrender);
            this.onRecvFrame();
        }
        return;
    }


    //存储服务端发来数据至缓存区
    private onRecvFrame() {
        if (RoomManager.getInstance().room) {
            RoomManager.getInstance().room.onRecvFrame = event => {
                if (event.data.frame.id > this._framememoryid + 1) {    //丢包处理
                    this.requestFrame(this._framememoryid + 1, event.data.frame.id - 1);
                }
                this._framememoryid = event.data.frame.id;
                FromServer.getInstance().CacheOperFromServer(event.data.frame.id, event.data.frame.items);//帧数与对应的帧包
            };
        }
    }

    //拥塞检测,若包数量较多,则加速处理
    private CongestionTest(): number {
        let _addnum: number = 1;
        switch (FromServer.getInstance()._length() > 5) {
            case true:
                _addnum = 4;
                break;
            case false:
                _addnum = 1;
                break;
        }
        return _addnum;
    }





    //补帧处理
    private requestFrame(begin: number, end: number) {
        const requestFramePara = {
            beginFrameId: begin,
            endFrameId: end,
        };
        if (RoomManager.getInstance().room) {
            // console.log("requestFrame", requestFramePara)
            RoomManager.getInstance().room.requestFrame(requestFramePara, event => {
                if (event.code == 0) {
                    for (let i = 0; i < event.data.frames.length; i++) {
                        FromServer.getInstance().CacheOperFromServer(event.data.frames[i].id, event.data.frames[i].items);
                        // console.log(event.data.frames.length, event.data.frames[i].id);
                    }
                    return;
                }
            });
        }
    }

    //网络驱动模式
    public Netrender() {
        //自身掉线
        if (RoomManager.getInstance().offline_self) {
            egret.MainContext.instance.stage.addChild(new TipsLayer("自身已掉线,即将结算"))
            RoomManager.getInstance().playerOutGame(false);
            GameRender.I.Remove(this, this.Netrender);
            return;
        }
        //-------------------由于网络问题,新包未到达,此时停止本地的render并检测自身是否掉线
        if (this._framerunid > this._framememoryid) {
            RoomManager.getInstance().OfflineTest_self();
            return;
        }
        //-------------------for循环执行包,SetValueFromServer,若网络拥塞则一帧执行2个包
        let _addnum: number = this.CongestionTest();
        for (let param = 0; param < _addnum; param++) {
            let order = FromServer.getInstance().GetOperFromServer(this._framerunid);
            if (order == null) { //丢包,等待补帧
                // console.log("seconde return :,runid: " + this._framerunid + ",memoryid: " + this._framememoryid);
                return;
            }
            for (let i = 0; i < order.length; i++) {
                if(order[i].data.chooseHero) {
                    if(order[i].data.type == 'hero') {//选择点击英雄时
                        order[i].data.player == ChooseScene.instance.playInfo.player?ChooseScene.instance.hero.changeHero(`Choose_hero${order[i].data.name}_png`):ChooseScene.instance.anotherHero.changeHero(`Choose_hero${order[i].data.name}_png`);
                        order[i].data.player == 1?ChooseScene.instance.playInfo.p1 = order[i].data.resouce:ChooseScene.instance.playInfo.p2 = order[i].data.resouce;
                        order[i].data.player == 1?ChooseScene.instance.playInfo.p1SkillList = order[i].data.skillLsit:ChooseScene.instance.playInfo.p2SkillList = order[i].data.skillLsit;
                    } else if(order[i].data.type == 'fight') {//准备
                        order[i].data.player == 1?ChooseScene.instance.p1Fight = order[i].data.fight:ChooseScene.instance.p2Fight = order[i].data.fight
                        if(ChooseScene.instance.p1Fight && ChooseScene.instance.p2Fight) {
                            // const d = {
                            //     chooseHero: true,
                            //     type: 'start',
                            //     start: true
                            // }
                            // const sendFramePara = { data: d };
                            // RoomManager.instance.room.sendFrame(sendFramePara);
                            ChooseScene.instance.goFight();
                        }
                    }
                } else if(order[i].data.type == 'waitSuccess') {//资源加载完成时
                    if(order[i].data.player == 1) FightLoading.instace.p1Success = order[i].data.status;
                    else FightLoading.instace.p2Success = order[i].data.status;
                    if(FightLoading.instace.p1Success && FightLoading.instace.p2Success) {
                        const playInfo = LoadResScene.Instance.playInfo;
                        SceneManager.getInstance().ChangeScene(new SplashScene(playInfo));
                    }
                } 
                else {//战斗界面
                    let FighterGroup = order[i].playerId == RoomManager.player1id ? _level0.P1_role : _level0.P2_role;
                    FighterGroup.keyCtrl.key.setPacket(order[i].data);
                    let test = order[i].data["isKeyDown"] == true ? "按键按下:" : "按键弹起";
                }
                // console.log(test)
            }
            this._framerunid++;
            this.render();  //本地驱动模式下render启动器
        }
    }

    public render(): void {
        for (let i in this.renderMc) {
            if (this.renderMc[i].mc == "static" && !this.renderPause) {
                this.renderMc[i].fun();
            } else if (!this.renderPause) {
                this.renderMc[i].fun.call(this.renderMc[i].mc, ...this.renderMc[i].args);
            }
        }
    }

    /**整局对战结束时,进入结算页面时调用而非切换回合时调用 */
    public destroy(): void {
        this.renderMc = null;
        GameRender.I.Remove(this, this.Netrender);
        GameRender.I.Remove(this, this.render);
        FightMainRender.instance = null;
        if (GameModel.currentMode == GameModel.VS_PERSON) {
            RoomManager.getInstance().Destory();
            return;
        }
    }



}







