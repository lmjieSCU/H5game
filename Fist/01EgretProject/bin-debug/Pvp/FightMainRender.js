var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**负责对战开始时从开始到结束时的渲染
 * 其余部分与其无关
 * 例如人物移动\子骨骼渲染、特效、计时读秒等
 */
var FightMainRender = (function () {
    function FightMainRender() {
        this.renderMc = [];
        this._framememoryid = 0; //从第1帧开始存储
        this._framerunid = 1; //从第1帧开始执行
        this.renderPause = false;
        return;
    }
    FightMainRender.prototype.getRunID = function () {
        return this._framerunid;
    };
    FightMainRender.getInstance = function () {
        if (FightMainRender.instance == null) {
            FightMainRender.instance = new FightMainRender;
        }
        return FightMainRender.instance;
    };
    FightMainRender.prototype.Add = function (mc, _fun, params) {
        if (params === void 0) { params = null; }
        for (var i in this.renderMc) {
            if (this.renderMc[i].mc == mc && this.renderMc[i].fun == _fun) {
                return;
            }
        }
        var param1 = new renderFrameScript(_fun, mc, params);
        this.renderMc.push(param1);
    };
    FightMainRender.prototype.Remove = function (mc, _fun) {
        for (var i in this.renderMc) {
            if (this.renderMc[i].mc == mc && this.renderMc[i].fun == _fun) {
                this.renderMc.splice(Number(i), 1);
                return;
            }
        }
    };
    /**整局对战开始时调用而非切换回合时调用 */
    //未调用
    FightMainRender.prototype.initlize = function () {
        if (GameModel.currentMode != GameModel.VS_PERSON) {
            GameRender.I.Add(this, this.render);
        }
        else {
            GameRender.I.Add(this, this.Netrender);
            this.onRecvFrame();
        }
        return;
    };
    //存储服务端发来数据至缓存区
    FightMainRender.prototype.onRecvFrame = function () {
        var _this = this;
        if (RoomManager.getInstance().room) {
            RoomManager.getInstance().room.onRecvFrame = function (event) {
                if (event.data.frame.id > _this._framememoryid + 1) {
                    _this.requestFrame(_this._framememoryid + 1, event.data.frame.id - 1);
                }
                _this._framememoryid = event.data.frame.id;
                FromServer.getInstance().CacheOperFromServer(event.data.frame.id, event.data.frame.items); //帧数与对应的帧包
            };
        }
    };
    //拥塞检测,若包数量较多,则加速处理
    FightMainRender.prototype.CongestionTest = function () {
        var _addnum = 1;
        switch (FromServer.getInstance()._length() > 5) {
            case true:
                _addnum = 4;
                break;
            case false:
                _addnum = 1;
                break;
        }
        return _addnum;
    };
    //补帧处理
    FightMainRender.prototype.requestFrame = function (begin, end) {
        var requestFramePara = {
            beginFrameId: begin,
            endFrameId: end,
        };
        if (RoomManager.getInstance().room) {
            // console.log("requestFrame", requestFramePara)
            RoomManager.getInstance().room.requestFrame(requestFramePara, function (event) {
                if (event.code == 0) {
                    for (var i = 0; i < event.data.frames.length; i++) {
                        FromServer.getInstance().CacheOperFromServer(event.data.frames[i].id, event.data.frames[i].items);
                        // console.log(event.data.frames.length, event.data.frames[i].id);
                    }
                    return;
                }
            });
        }
    };
    //网络驱动模式
    FightMainRender.prototype.Netrender = function () {
        //自身掉线
        if (RoomManager.getInstance().offline_self) {
            egret.MainContext.instance.stage.addChild(new TipsLayer("自身已掉线,即将结算"));
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
        var _addnum = this.CongestionTest();
        for (var param = 0; param < _addnum; param++) {
            var order = FromServer.getInstance().GetOperFromServer(this._framerunid);
            if (order == null) {
                // console.log("seconde return :,runid: " + this._framerunid + ",memoryid: " + this._framememoryid);
                return;
            }
            for (var i = 0; i < order.length; i++) {
                if (order[i].data.chooseHero) {
                    if (order[i].data.type == 'hero') {
                        order[i].data.player == ChooseScene.instance.playInfo.player ? ChooseScene.instance.hero.changeHero("Choose_hero" + order[i].data.name + "_png") : ChooseScene.instance.anotherHero.changeHero("Choose_hero" + order[i].data.name + "_png");
                        order[i].data.player == 1 ? ChooseScene.instance.playInfo.p1 = order[i].data.resouce : ChooseScene.instance.playInfo.p2 = order[i].data.resouce;
                        order[i].data.player == 1 ? ChooseScene.instance.playInfo.p1SkillList = order[i].data.skillLsit : ChooseScene.instance.playInfo.p2SkillList = order[i].data.skillLsit;
                    }
                    else if (order[i].data.type == 'fight') {
                        order[i].data.player == 1 ? ChooseScene.instance.p1Fight = order[i].data.fight : ChooseScene.instance.p2Fight = order[i].data.fight;
                        if (ChooseScene.instance.p1Fight && ChooseScene.instance.p2Fight) {
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
                }
                else if (order[i].data.type == 'waitSuccess') {
                    if (order[i].data.player == 1)
                        FightLoading.instace.p1Success = order[i].data.status;
                    else
                        FightLoading.instace.p2Success = order[i].data.status;
                    if (FightLoading.instace.p1Success && FightLoading.instace.p2Success) {
                        var playInfo = LoadResScene.Instance.playInfo;
                        SceneManager.getInstance().ChangeScene(new SplashScene(playInfo));
                    }
                }
                else {
                    var FighterGroup = order[i].playerId == RoomManager.player1id ? _level0.P1_role : _level0.P2_role;
                    FighterGroup.keyCtrl.key.setPacket(order[i].data);
                    var test = order[i].data["isKeyDown"] == true ? "按键按下:" : "按键弹起";
                }
                // console.log(test)
            }
            this._framerunid++;
            this.render(); //本地驱动模式下render启动器
        }
    };
    FightMainRender.prototype.render = function () {
        for (var i in this.renderMc) {
            if (this.renderMc[i].mc == "static" && !this.renderPause) {
                this.renderMc[i].fun();
            }
            else if (!this.renderPause) {
                (_a = this.renderMc[i].fun).call.apply(_a, [this.renderMc[i].mc].concat(this.renderMc[i].args));
            }
        }
        var _a;
    };
    /**整局对战结束时,进入结算页面时调用而非切换回合时调用 */
    FightMainRender.prototype.destroy = function () {
        this.renderMc = null;
        GameRender.I.Remove(this, this.Netrender);
        GameRender.I.Remove(this, this.render);
        FightMainRender.instance = null;
        if (GameModel.currentMode == GameModel.VS_PERSON) {
            RoomManager.getInstance().Destory();
            return;
        }
    };
    return FightMainRender;
}());
__reflect(FightMainRender.prototype, "FightMainRender");
//# sourceMappingURL=FightMainRender.js.map