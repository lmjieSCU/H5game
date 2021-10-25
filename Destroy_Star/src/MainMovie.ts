class MainMoive extends egret.DisplayObjectContainer {

    public static instance: MainMoive;
    public jiesu: boolean = false;
    public level: number = 1;  //等级
    public score: number = 0;  //分数
    public bushu: number = 60;  //步数
    public time: number = 60;    //时间
    public clickmode: boolean = true;  //true为单击,false为双击
    public living_gz: number = 100;   //剩余数量
    public touchEnbled: boolean = true;
    public gh: number = 0;
    public caidan: FightUI;
    public _RenderTimeFrame: number = 0;
    private Score_index: number = 0;
    private FivepointStar_index: number = 0;
    private FivepointStarFrame: number = 0;
    private Diamondsame_index: number = 0;   //遍历
    public mbiao: boolean = false;  //模式1达成目标
    public obScore: number = 1000;     //模式1目标分数
    public heighest1: number;//模式2最高分数
    public heighest2: number;//模式3最高分数
    private BeginLayer: BeginTip;
    private FinishLayer: FinishTip;
    public _map: Array<Array<Diamonds>>;  //以二维数组形式存放着100颗星星,不会改变
    private Score_Arr: Array<ScoreTip> = [];
    public my_diamond: Array<Diamonds> = [];   //以一维数组形式存放着100颗星星方块,不会改变
    public Diamondsame: Array<Diamonds> = [];  //存储着四周(上下左右四方向)与四周的四周颜色相同的星星
    private FivepointStar_Arr: Array<FivepointStar> = [];
    private _renderFun: Function;      //启动函数
    public PromptTag: boolean = false;         //刷新处理

    public constructor() {
        super();
        MainMoive.instance = this;
        this.caidan = new FightUI();
        this.addChild(this.caidan);
        this._map = new Array<Array<Diamonds>>();
        this.heighest1 = GameModel.heighest1;
        this.heighest2 = GameModel.heighest2;
        this.caidan.Jinbi = GameModel.jinbi;
        this.IntoBeginTip();
        this.$setTouchChildren(false);
    }

    public destroy(): void {
        console.log("destroy");
        this.removeEventListener(egret.Event.ENTER_FRAME, this._renderFun, this);
        this._map = null;
        this.FivepointStar_Arr = null;
        this.Diamondsame = null;
        this.my_diamond = null;
        this.Score_Arr = null;
        this.BeginLayer = null;
        this.FinishLayer = null;
        this.parent.removeChild(this);
        this.caidan = null;
        MainMoive.instance = null;
    }


    /**进入开始页面,播放背景音乐
     * ============ready阶段===================
    */
    public IntoBeginTip(): void {
        SoundCtrl.I.Effectplay("ready");
        switch (GameModel.currentMode) {
            case GameModel.NORMAL: SoundCtrl.I.BGplay("yinyue2"); break;
            case GameModel.TIMELIMIT: SoundCtrl.I.BGplay("yinyue3"); break;
            case GameModel.BULIMIT: SoundCtrl.I.BGplay("yinyue4"); break;
        }
        if (this._renderFun != null) {
            this.removeEventListener(egret.Event.ENTER_FRAME, this._renderFun, this);
        }
        this._renderFun = null;
        this.BeginLayer = new BeginTip(this.level, this.obScore);
        this.addChild(this.BeginLayer);
    }

    /**删除开始提示页面
     * 初始化游戏数据
     * 开始帧驱动
    */
    public OutFromBeginTip(): void {
        this.removeChild(this.BeginLayer);
        this._renderFun = this.render.bind(this);
        this.addEventListener(egret.Event.ENTER_FRAME, this._renderFun, this);
        this.StartGame();
    }

    /**闯关模式下本关总结 */
    public IntoFinishTip(): void {
        let t = this.living_gz < 10 ? Math.floor(10 - this.living_gz / 2) : 0;
        GameModel.jinbi = GameModel.jinbi + t;
        this.caidan.Jinbi = GameModel.jinbi;
        this.FinishLayer = new FinishTip(t, this.living_gz);
        this.addChild(this.FinishLayer);
    }

    /**闯关成功:继续下一关
     * 闯关失败:切换FinishScene
     */
    public OutFromFinishTip(): void {
        this.removeChild(this.FinishLayer);
        if (GameModel.currentMode == GameModel.NORMAL && this.mbiao == true) {    //成功闯关
            this.level = this.level + 1;
            if (this.level == 2) {
                this.obScore = this.score + 1500;
            }
            else if (this.level == 3) {
                this.obScore = this.score + 2000;
            }
            else if (this.level == 4) {
                this.obScore = this.score + 2400;
            }
            else {
                this.obScore = this.score + 2600;
            } // end else if
            this.caidan.obScore = this.obScore;
            this.caidan.level = this.level;
            this.IntoBeginTip();
            return;
        }
        let level = this.level;
        let score = this.score;
        console.log("normal")
        MainMoive.instance.destroy();
        SceneManager.Instance.changeScene(new FinishScene(level, score));
    }


    private render(): void {
        if (GameModel.currentMode == GameModel.TIMELIMIT && this.time >= -2) { //计时模式
            ++this._RenderTimeFrame;
            if (this._RenderTimeFrame == 35) {    //计时
                this.time = this.time - 1;
                this.caidan.time = Math.min(this.time + 2, 60);
                this._RenderTimeFrame = 0;
                // if (this.time < 10 && this.time >= 0) {
                //     this.mubiao.gotoAndPlay(2);//边框闪烁
                // } // end if
                if (this.time < -2 && this.jiesu == false) {    //结束游戏
                    this.jiesu = true;
                    this.FinishGame();
                    return;
                } // end if
            } // end if
        } // end if
        if (this.PromptTag == true) {
            this.GetPrompts();
        }
        if (GameModel.currentMode == GameModel.BULIMIT && this.bushu <= 0 && this.jiesu == false) {
            this.jiesu = true;
            this.FinishGame();
            return;
        }
    } // end else if

    public pause(): void {
        this.removeEventListener(egret.Event.ENTER_FRAME, this._renderFun, this);
        this.addChild(new PauseTip());
    }

    public begin(): void {
        this.addEventListener(egret.Event.ENTER_FRAME, this._renderFun, this);
    }


    /**开始游戏, 每次通关都需调用 */
    private StartGame(): void {
        egret.setTimeout(function () { this.$setTouchChildren(true) }, this, 2000);
        if (this.my_diamond.length == 0) {      //闯关模式第一关
            this.FirstStart();
        } else {
            this.NextStart();              //闯关模式第2,3,,,关
        } // end else if
    }


    /**星星监听事件 */
    private Star_Listen(gz: Diamonds): void {
        if (this.touchEnbled == false) {
            return;
        }
        this.touchEnbled = false;
        if (gz.currFrame > 0) {
            if (ItemModel.currentMode == ItemModel.NO_ITEM) {
                if (this.clickmode == true) {       //单击模式
                    this.DeleteGz(gz.dy, gz.dx);
                    this.PromptTag = true;
                } else {                            //双击模式
                    this.DeleteGz2(gz.dy, gz.dx);
                    this.DeleteGz(gz.dy, gz.dx);
                }
            } // end else if
            if (ItemModel.currentMode == ItemModel.BOMB) {
                ItemBomb.Item_Bomb(gz.dy, gz.dx);
                this.PromptTag = true;
            } // end if
            if (ItemModel.currentMode == ItemModel.PAINT) {
                this.addChild(new ItemPaint(gz));
                this.PromptTag = true;
            } // end if
            if (GameModel.currentMode == GameModel.BULIMIT) {     //步数模式
                this.bushu = this.bushu - 1;
                this.caidan.bushu = this.bushu;
                // if (this.bushu < 6 && this.bushu > 0) {
                //     this.mubiao.gotoAndPlay(2);//边框闪烁
                // } // end if
            } // end if
        }
    }



    /**初始化100颗星星mc,位置,属性.仅在第一关使用,之后使用NextStart()重置星星属性*/
    public FirstStart(): void {
        let color: number;
        let diamond: Diamonds; //星星mc
        this.gh = Math.floor(4 * Math.random());
        this.gh = this.gh * 20 + 4;
        for (let _loc2 = 0; _loc2 < 10; ++_loc2) {
            this._map[_loc2] = new Array<Diamonds>();
            for (let _loc3 = 0; _loc3 < 10; ++_loc3) {
                diamond = new Diamonds(["gz0_json"], RES.getRes("gz_json"), "mc_0");
                diamond.x = (_loc3 + 1) * UI.WINSIZE_W / 11;
                diamond.y = (_loc2 - 11) * UI.WINSIZE_W / 11 + UI.WINSIZE_H;
                diamond.scaleX = UI.WINSIZE_W / 11 / diamond.width;
                diamond.scaleY = UI.WINSIZE_W / 11 / diamond.height;
                color = Math.floor(5 * Math.random()) + 2;
                diamond.initlize(_loc3, _loc2, color, 0, false, Math.floor((10 - _loc2) * 6 + 8 * Math.random()), this);   //添加帧事件
                this.addChild(diamond);
                diamond.Animation(1);
                this._map[_loc2].push(diamond);
                this.my_diamond.push(diamond);
                let render_f = this.Star_Listen.bind(this, diamond);
                diamond.addEventListener(egret.TouchEvent.TOUCH_END, render_f, this);
                diamond.$setTouchEnabled(true);
            };
        } // end of for
    } // End of the function


    /** 闯关模式下若成功闯关,则初始化星星属性,目标积分等*/
    public NextStart(): void {
        this.mbiao = false;
        this.jiesu = false;
        this.Score_index = 0;
        this.FivepointStar_index = 0;
        this.Diamondsame_index = 0;
        this.living_gz = 100;
        this.gh = Math.floor(4 * Math.random());
        this.gh = this.gh * 20 + 4;
        // this.tongguo.gotoAndStop(1); //未通关
        let _loc4 = 0;
        let _loc5 = 0;
        for (let _loc3 = 0; _loc3 < this.my_diamond.length; ++_loc3) {   //重置颜色
            let color = Math.floor(5 * Math.random()) + 2;
            this.my_diamond[_loc3].color = color;
            this.my_diamond[_loc3].jg = Math.floor((10 - _loc5) * 6 + 8 * Math.random());
            ++_loc4;
            if (_loc4 == 10) {
                ++_loc5;
                _loc4 = 0;
            } // end if
            this.my_diamond[_loc3].Animation(1);
            this.my_diamond[_loc3].died = false;
        } // end of for
        this.mbiao = false;
        if (GameModel.currentMode == GameModel.NORMAL) {
            this.caidan.level = this.level;
            this.caidan.score = this.score;
            this.caidan.obScore = this.obScore;
        } // end if
        // if (GameModel.currentMode == GameModel.TIMELIMIT) {
        //     this.caidan.time = this.time;
        //     this.caidan.score = this.score;
        //     this.caidan.heighest = GameModel.heighest1;
        // } // end if
        // if (GameModel.currentMode == GameModel.BULIMIT) {
        //     this.caidan.bushu = this.bushu;
        //     this.caidan.score = this.score;
        //     this.caidan.heighest = GameModel.heighest2;
        // } // end if
    } // End of the function


    /**加入烟花、五角星、分数提示特效,此处将方块died置为true
     * 最后一块时调用UpdateLocation()函数
     */
    private GetPrompts(): void {
        this.FivepointStarFrame++;
        if (this.FivepointStarFrame % 3 != 0) {
            return;
        }
        this.FivepointStarFrame = 0;
        let num: number = this.Diamondsame_index * 10 + 5;
        if (this.Diamondsame_index < this.Diamondsame.length) {
            this.FivepointStar(this.Diamondsame[this.Diamondsame_index].x, this.Diamondsame[this.Diamondsame_index].y, this.Diamondsame[this.Diamondsame_index].color);
            this.GetScore(this.Diamondsame[this.Diamondsame_index].x, this.Diamondsame[this.Diamondsame_index].y + 100, num);
            this.Diamondsame[this.Diamondsame_index].color = 1;
            this.Diamondsame[this.Diamondsame_index].getChildBymcName("mv").getChildBymcName("mc").gotoAndStop(1);
            this.Diamondsame[this.Diamondsame_index].died = true;
            if (this.Diamondsame_index >= 7) {      //烟花
                // egret.setTimeout(this.FireWork, this, 500);
                if (this.Diamondsame_index == this.Diamondsame.length - 1) {
                    SoundCtrl.I.Effectplay("cheer");
                    this.FireWork();
                }
            }
            this.Diamondsame_index++;
        } else {
            this.PromptTag = false;
            this.Diamondsame_index = 0;
            this.UpdateLocation();
            let num: number = 0;
            for (let i: number = 0; i < this.Diamondsame.length; i++) { num += i * 10 + 5; }
            if (this.Diamondsame.length == 0) { return; }
            this.caidan.Notice = this.Diamondsame.length + "个方块: " + num;   //提示字段
            this.Diamondsame = [];
        }
    }



    /**消灭星星时产生加分项散开*/
    public GetScore(xx: number, yy: number, fen: number): void {       //加分
        if (this.Score_Arr[this.Score_index] != null && this.Score_Arr[this.Score_index].stage != null) { //最多100颗小五角星
            this.Score_Arr[this.Score_index].destroy();
        }
        this.AddScore(fen);
        this.Score_Arr[this.Score_index] = new ScoreTip();
        this.Score_Arr[this.Score_index].text = String(fen);
        UI.setXandY(this.Score_Arr[this.Score_index], xx, yy);
        UI.setscalXandY(this.Score_Arr[this.Score_index], 1.5, 1.5);
        this.addChild(this.Score_Arr[this.Score_index]);
        this.Score_Arr[this.Score_index].play();
        this.Score_index++;
        if (this.Score_index >= 20) {
            this.Score_index = 0;
        }
    } // End of the function


    /**消灭星星时产生五角星散开*/
    public FivepointStar(xx: number, yy: number, lx: number): void {  //复制星星
        SoundCtrl.I.Effectplay("click");
        for (let _loc2 = 0; _loc2 < 10; ++_loc2) {
            if (this.FivepointStar_Arr[this.FivepointStar_index] != null && this.FivepointStar_Arr[this.FivepointStar_index].stage != null) { //最多100颗小五角星
                this.FivepointStar_Arr[this.FivepointStar_index].destroy();
            }
            this.FivepointStar_Arr[this.FivepointStar_index] = new FivepointStar(["xing0_json"], RES.getRes("xing_json"), "mc_0", 1, "", lx - 2);
            UI.setXandY(this.FivepointStar_Arr[this.FivepointStar_index], xx, yy);
            UI.setscalXandY(this.FivepointStar_Arr[this.FivepointStar_index], 1.5, 1.5);
            this.FivepointStar_Arr[this.FivepointStar_index].rotation = 36 * _loc2;
            this.addChild(this.FivepointStar_Arr[this.FivepointStar_index]);
            this.FivepointStar_index++;
            if (this.FivepointStar_index >= 100) {
                this.FivepointStar_index = 0;
            }
        } // end of for
    } // End of the function


    /**消灭星星数量大于8时时产生烟花散开*/
    public FireWork(): void {
        for (let i = 1; i <= 2; i++) {
            for (let _loc2 = 0; _loc2 < 10; ++_loc2) {
                let firework = new FireWorks(["yanhua0_json"], RES.getRes("yanhua_json"), "mc_0", 1, "", Math.floor(5 * Math.random()));
                UI.setXandY(firework, UI.WINSIZE_W * i / 3, UI.WINSIZE_H * (i % 2 + 1) / 3);
                UI.setscalXandY(firework, 1.5, 1.5);
                firework.rotation = 36 * _loc2;
                this.addChild(firework);
            } // end of for
        }
    }

    /**消灭星星时加分*/
    public AddScore(_score: number): void {
        this.score = this.score + _score;
        this.living_gz = this.living_gz - 1;
        this.caidan.score = this.score;
        if (GameModel.currentMode == GameModel.NORMAL) {
            if (this.score >= this.obScore && this.mbiao == false) {
                this.mbiao = true;
                let pass = new Pass();
                this.addChild(pass.mc);
                pass.play();
                SoundCtrl.I.Effectplay("pass");
            } // end if
        } // end if
        if (GameModel.currentMode == GameModel.TIMELIMIT) {
            if (this.heighest1 < this.score) {
                this.heighest1 = this.score;
                this.caidan.heighest = this.heighest1;
                GameModel.heighest1 = this.heighest1;
            } // end if
        } // end if
        if (GameModel.currentMode == GameModel.BULIMIT) {
            if (this.heighest2 < this.score) {
                this.heighest2 = this.score;
                this.caidan.heighest = this.heighest2;
                GameModel.heighest2 = this.heighest2;
            } // end if
        } // end if
    }




    /**点击后判断四周是否相同
     * @dy:y坐标 
     * @dx:x坐标
     * 此处不修改died值
     */
    public DeleteGz(dy: number, dx: number): void {
        this.Diamondsame = [];
        let _loc_color = this._map[dy][dx].color;
        //左边位置
        if (dx != 0) {
            if (this._map[dy][dx - 1].died == false && this._map[dy][dx - 1].color == _loc_color) {
                this._map[dy][dx - 1].died = true;
                this.Diamondsame.push(this._map[dy][dx - 1]);
            } // end if
        }
        //右边位置
        if (dx != 9)
            if (this._map[dy][dx + 1].died == false && this._map[dy][dx + 1].color == _loc_color) {
                this._map[dy][dx + 1].died = true;
                this.Diamondsame.push(this._map[dy][dx + 1]);
            } // end if
        //上边位置
        if (dy != 0) {
            if (this._map[dy - 1][dx].died == false && this._map[dy - 1][dx].color == _loc_color) {
                this._map[dy - 1][dx].died = true;
                this.Diamondsame.push(this._map[dy - 1][dx]);
            } // end if
        }
        //下边位置
        if (dy != 9) {
            if (this._map[dy + 1][dx].died == false && this._map[dy + 1][dx].color == _loc_color) {
                this._map[dy + 1][dx].died = true;
                this.Diamondsame.push(this._map[dy + 1][dx]);
            } // end if
        }
        if (this.Diamondsame.length != 0) {
            this.Diamondsame.push(this._map[dy][dx]);
            this._map[dy][dx].died = true;
            for (let _loc2 = 0; _loc2 < this.Diamondsame.length; ++_loc2) {   //成块判断
                _loc_color = this.Diamondsame[_loc2].color;
                if (this.Diamondsame[_loc2].dx != 0) {
                    if (this._map[this.Diamondsame[_loc2].dy][this.Diamondsame[_loc2].dx - 1].died == false && this._map[this.Diamondsame[_loc2].dy][this.Diamondsame[_loc2].dx - 1].color == _loc_color) {
                        this._map[this.Diamondsame[_loc2].dy][this.Diamondsame[_loc2].dx - 1].died = true;
                        this.Diamondsame.push(this._map[this.Diamondsame[_loc2].dy][this.Diamondsame[_loc2].dx - 1]);
                    } // end if
                }
                if (this.Diamondsame[_loc2].dx != 9) {
                    if (this._map[this.Diamondsame[_loc2].dy][this.Diamondsame[_loc2].dx + 1].died == false && this._map[this.Diamondsame[_loc2].dy][this.Diamondsame[_loc2].dx + 1].color == _loc_color) {
                        this._map[this.Diamondsame[_loc2].dy][this.Diamondsame[_loc2].dx + 1].died = true;
                        this.Diamondsame.push(this._map[this.Diamondsame[_loc2].dy][this.Diamondsame[_loc2].dx + 1]);
                    } // end if
                }
                if (this.Diamondsame[_loc2].dy != 0) {
                    if (this._map[this.Diamondsame[_loc2].dy - 1][this.Diamondsame[_loc2].dx].died == false && this._map[this.Diamondsame[_loc2].dy - 1][this.Diamondsame[_loc2].dx].color == _loc_color) {
                        this._map[this.Diamondsame[_loc2].dy - 1][this.Diamondsame[_loc2].dx].died = true;
                        this.Diamondsame.push(this._map[this.Diamondsame[_loc2].dy - 1][this.Diamondsame[_loc2].dx]);
                    } // end if
                }
                if (this.Diamondsame[_loc2].dy != 9) {
                    if (this._map[this.Diamondsame[_loc2].dy + 1][this.Diamondsame[_loc2].dx].died == false && this._map[this.Diamondsame[_loc2].dy + 1][this.Diamondsame[_loc2].dx].color == _loc_color) {
                        this._map[this.Diamondsame[_loc2].dy + 1][this.Diamondsame[_loc2].dx].died = true;
                        this.Diamondsame.push(this._map[this.Diamondsame[_loc2].dy + 1][this.Diamondsame[_loc2].dx]);
                    } // end if
                }
            } // end of for
            if (this.Diamondsame.length != 0) {
                for (let _loc6: number = 0; _loc6 < this.Diamondsame.length; _loc6++) { //此次消除目标出现边框
                    this.Diamondsame[_loc6].getChildBymcName("mv").getChildBymcName("mc").gotoAndStop(this.Diamondsame[_loc6].color + 10);   //+10
                    this.Diamondsame[_loc6].died = false;
                } // end of for...in
            } // end if
        }
        if (this.clickmode == false) {
            this.touchEnbled = true;
        }
    } // end else if


    /**点击模式2 */
    public DeleteGz2(dy: number, dx: number): void {
        if (this.Diamondsame.length == 0) {
            return;
        }
        for (let i in this.Diamondsame) {
            if (this.Diamondsame[i].dy == dy && this.Diamondsame[i].dx == dx) {       //确认点击
                this.PromptTag = true;
                return;
            }
        }
        //取消点击
        for (let i in this.Diamondsame) {
            this.Diamondsame[i].getChildBymcName("mv").getChildBymcName("mc").gotoAndStop(this.Diamondsame[i].getChildBymcName("mv").getChildBymcName("mc").currFrame - 9);
        }
    }


    /**闯关模式下判断游戏是否结束 */
    private CheckFinish(): void {
        for (let i: number = 0; i < this.my_diamond.length; ++i) {
            let dy = this.my_diamond[i].dy;
            let dx = this.my_diamond[i].dx;
            if (dx != 0) {
                if (this._map[dy][dx - 1].died == false && this._map[dy][dx - 1].color == this.my_diamond[i].color) {
                    this.jiesu = false;
                    return;
                } // end if
            }
            if (dx != 9) {
                if (this._map[dy][dx + 1].died == false && this._map[dy][dx + 1].color == this.my_diamond[i].color) {
                    this.jiesu = false;
                    return;
                } // end if
            }
            if (dy != 0) {
                if (this._map[dy - 1][dx].died == false && this._map[dy - 1][dx].color == this.my_diamond[i].color) {
                    this.jiesu = false;
                    return;
                } // end if
            }
            if (dy != 9) {
                if (this._map[dy + 1][dx].died == false && this._map[dy + 1][dx].color == this.my_diamond[i].color) {
                    this.jiesu = false;
                    return;
                } // end if
            }
        } // End of the function
        this.jiesu = true;
        this.FinishGame();
        // this.shuoming.gotoAndPlay("完成");//通过

    }



    /**实现星星向下掉落,改变对应位置的died以及颜色
     * 实现星星向中靠拢,左侧向第5列靠拢,右侧向第6列靠拢
    */
    private UpdateLocation(): void {
        for (let dy: number = 8; dy >= 0; dy--) {
            for (let dx: number = 0; dx < 10; dx++) {
                if (this._map[dy][dx].died == false) {
                    let obdy: number = this.CheckDown(dy, dx);
                    if (obdy != -1) {
                        this.Switch(obdy, dx, dy, dx, "向下");
                    }
                }
            }
        }
        //左侧检查
        for (let dx = 4; dx >= 0; dx--) {
            let obdx = this.CheckClose_left(dx);
            if (obdx != -1) {
                for (let dy: number = 0; dy < 10; dy++) {
                    if (this._map[dy][dx].died == false) {
                        this.Switch(dy, obdx, dy, dx, "向右");
                    }
                }
            }
        }
        //右侧检查
        for (let dx = 7; dx < 10; dx++) {
            let obdx = this.CheckClose_right(dx);
            if (obdx != -1) {
                for (let dy: number = 0; dy < 10; dy++) {
                    if (this._map[dy][dx].died == false) {
                        this.Switch(dy, obdx, dy, dx, "向左");
                    }
                }
            }
        }
        egret.setTimeout(function () { this.touchEnbled = true;}, this, 300);
        if (GameModel.currentMode == GameModel.NORMAL && this.jiesu == false) {
            this.CheckFinish();
        }
        if (GameModel.currentMode == GameModel.BULIMIT && this.bushu > 0) {
            this.gz_reLiving();
        }
        if (GameModel.currentMode == GameModel.TIMELIMIT && this.time >= -2) {
            this.gz_reLiving();
        }
    }

    /**交换[dy_new][dx_new]与[dy_old][dx_old]*/
    private Switch(dy_new: number, dx_new: number, dy_old: number, dx_old: number, label: string) {
        this._map[dy_new][dx_new].color = this._map[dy_old][dx_old].color;
        this._map[dy_new][dx_new].getChildBymcName("mv").getChildBymcName("mc").gotoAndStop(this._map[dy_new][dx_new].color);
        this._map[dy_new][dx_new].died = false;
        this._map[dy_new][dx_new].MVAnimation(label);
        this._map[dy_old][dx_old].color = 1;
        this._map[dy_old][dx_old].getChildBymcName("mv").getChildBymcName("mc").gotoAndStop(1);
        this._map[dy_old][dx_old].died = true;
    }

    /**检查是否需要下降处理 */
    private CheckDown(dy: number, dx: number): number {
        for (let dyy: number = 9; dyy > dy; dyy--) {
            if (this._map[dyy][dx].died == true) {
                return dyy;
            }
        }
        return -1;
    }


    /**检查是否需要聚中处理 */
    private CheckClose_left(dx: number): number {
        for (let dxx: number = 5; dxx > dx; dxx--) {
            let diednum: number = 0;
            for (let dy: number = 0; dy < 10; dy++) {
                if (this._map[dy][dxx].died == true) {
                    diednum++;
                }
            }
            if (diednum == 10) {
                return dxx;
            } else {
                diednum = 0;
            }
        }
        return -1;
    }


    /**检查是否需要聚中处理 */
    private CheckClose_right(dx: number): number {
        for (let dxx: number = 6; dxx < dx; dxx++) {
            let diednum: number = 0;
            for (let dy: number = 0; dy < 10; dy++) {
                if (this._map[dy][dxx].died == true) {
                    diednum++;
                }
            }
            if (diednum == 10) {
                return dxx;
            }
        }
        return -1;
    }


    /** 复活,重置颜色 */
    private gz_reLiving(): void {
        for (let _loc1 = 0; _loc1 < this.my_diamond.length; ++_loc1) {
            if (this.my_diamond[_loc1].died == true) {
                let color = Math.floor(5 * Math.random()) + 2;
                this.my_diamond[_loc1].color = color;
                this.my_diamond[_loc1].Animation(this.gh);
                this.my_diamond[_loc1].died = false;
            } // end if
        } // end of for 
    } // End of the function


    private FinishGame(): void {
        SoundCtrl.I.Effectplay("finish");
        this.$setTouchChildren(false);
        if (GameModel.currentMode == GameModel.NORMAL) {
            this.IntoFinishTip();
        } else {
            let level = this.level;
            let score = this.score;
            MainMoive.instance.destroy();
            SceneManager.Instance.changeScene(new FinishScene(level, score));
        }
    }
}


