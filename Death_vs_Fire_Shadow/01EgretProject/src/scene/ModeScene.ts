class ModeScene extends Scene {
    private _ui: egret.Sprite;
    public static matchNum: number = 0;
    public static matchNumStr: string = "";
    public static matchConf: any = [
        [0, 0, "match-f3kf5d9p"],
        [100, 199, "match-om3br4pb"],
        [200, 299, "match-nnkazm97"],
        [300, 399, "match-pmtpfzq9"],
        [400, 499, "match-jsf2nm4h"],
        [500, 599, "match-ljswwqf7"],
        [600, 699, "match-5cu442el"],
        [700, 799, "match-niwb1wxb"],
        [800, 899, "match-n3tz076p"],
        [900, 999, "match-efub28ml"],
    ];
    public static instance: ModeScene;
    public _node: egret.DisplayObjectContainer = null;

    public _num1Txt: Array<egret.Bitmap> = [];
    public _numCode: Array<number> = [0, 0, 0];

    public constructor() {
        super();
        return;
    }// end function

    public static initListen() {
        MGOBE.Listener.init(mgobe_conf.gameInfo, mgobe_conf.config, event => {	//初始化Listener对象,只需初始化一次,不会多次初始化
            if (event.code == 0) {
                console.log("hello success");
            } else {
                console.log("wrong", event);
                ModeScene.initListen();
            }
        });
    }

    public static getMatchStr() {
        for (let i = 0; i < 10; i++) {
            if (ModeScene.matchNum >= ModeScene.matchConf[i][0]
                && ModeScene.matchConf[i][1] >= ModeScene.matchNum) {
                return ModeScene.matchConf[i][2];
            }
        }
    }

    public createUserID() {
        let firstFlag: string = "userID";
        var score: string = egret.localStorage.getItem(firstFlag);
        let first: number = Number(score);
        if (first == 0) {
            let code: number = Math.floor(Math2.numberBetween(1000000000, 9000000000, false));
            UI.saveItem(firstFlag, code);
            mgobe_conf.gameInfo.openId = "U" + code;
        }
        else {
            mgobe_conf.gameInfo.openId = "U" + score;
        }
        UserInfo.playerInfo.name = mgobe_conf.gameInfo.openId;
        ModeScene.initListen();
    }

    public onEnter(): void {
        ModeScene.instance = this;
        this.createUserID();
        //
        this._ui = new egret.Sprite();
        this._ui.width = UI.WINSIZE_W;
        this._ui.height = UI.WINSIZE_H;
        // -----------------------------
        let bg = new egret.Bitmap(RES.getRes("assignment_bg_png"))
        this.addChild(bg)

        let pic1 = new egret.Bitmap(RES.getRes("statu_bar_png"))
        this.addChild(pic1)

        this.onCPU();

        let goldLayer: GoldDiamondLayer =  new GoldDiamondLayer(this);
        this.addChild(goldLayer);
        goldLayer.addReturn(function(arg){
             SceneManager.Instance.changeScene(new TownScene);
        })
        return;
    }// end function



    //
    public onMatchMode() {
        let xStart = 30;
        let yStart = 90;
        let yInter = 95;
        let btnStr: Array<string> = ["Breakthrough_mode", "computer_fight", "training_mode", "people_fight"];
        for (let i = 0; i < 4; i++) {
            if (i == 3) {
                let mask = UI.addPic(this, "select_shadow_png", xStart - 25, yStart + yInter * i - 20, false);
                let sc = 0.95;
                mask.scaleX = sc;
                mask.scaleY = sc;
            }
            UI.addBtn(this, btnStr[i] + "_png", xStart, yStart + yInter * i, false, function (arg) {

            });
        }
        //
        UI.addPic(this, "blank_box_png", 240, 100, false);


        UI.addPic(this, "room_number_png", 240 + 70, 100 + 30, false);
        UI.addText(this, "ID:" + mgobe_conf.gameInfo.openId, 240 + 45, 100 + 30 + 240);
        //
        xStart = 435; let xInter = 53; yStart = 130;
        for (let i = 0; i < 3; i++) {
            UI.addPic(this, "dial_box_png", xStart + i * xInter, yStart, false);
            this._num1Txt[i] = UI.addPic(this, "roma1_png", xStart + i * xInter + 11, yStart + 8, false);
        }
        //
        xStart = 430; xInter = 53; yStart = 180; yInter = 55;
        let posNum: number = 1;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let Y = yStart + i * yInter;
                let nn = posNum;
                UI.addBtn(this, "number" + posNum + "_png", xStart + j * xInter, Y, false, function (arg) {
                    ModeScene.instance.clickNum(nn);
                });
                posNum++;
            }
        }

        //删除
        UI.addBtn(this, "button_delet_png", 600, 130, false, function (arg) {
            ModeScene.instance.deleteNum();
        });

        //匹配中
        UI.addBtn(this, "matching_button_startmatch_png", UI.WINSIZE_W - 200, UI.WINSIZE_H - 80, false, function (arg) {
            ModeScene.instance.clickMatchBtn();
        });
        //
        this.refreshRoomCode();

        //返回
        UI.addBtn(this, "return_png", 0, 0, false, function (arg) {
            //
            console.log("返回上一页");
        });

    }

    public clickBtn(param: number) {
        switch (param) {
            case 0:
                this.onCPU();
                break;
            case 1:
                this.onTraining();
                break;
            case 2:
                this.onMatchGame();
                break;
        }
    }
    public onCPU() {
        this.initBtn(0);
        let str: string = "这里有不同类型的对手供你选择，同时需要选择你要应战的英雄，选择不同的AI难度有不同的奖励！";
        let content: egret.TextField = UI.addText(this._node, str, 320, 140);
        content.width = 400;
        content.textColor = 0xffffff;
        content.size = 24;

        UI.addBtn(this._node, "nextStepBtn_png", UI.WINSIZE_W - 200, UI.WINSIZE_H - 80, false, function (arg) {
            GameMode.currentMode = GameMode.SINGLE_VS_CPU;
            SceneManager.Instance.changeScene(new FightloadScene(0));
        });
    }

    public onTraining() {
        this.initBtn(1);
        let str: string = "在这里你能够训练你的格斗技术，选择你拥有的英雄，没有生命值限制，没有时间限制，直接你拥有真正的格斗技术。";
        let content: egret.TextField = UI.addText(this._node, str, 320, 140);
        content.width = 400;
        content.textColor = 0xffffff;
        content.size = 24;

        UI.addBtn(this._node, "nextStepBtn_png", UI.WINSIZE_W - 200, UI.WINSIZE_H - 80, false, function (arg) {
            GameMode.currentMode = GameMode.TRAINING;
            SceneManager.Instance.changeScene(new FightloadScene(0));
        });
      //  UI.addBtn(this._node, "assignment_button_back_png", UI.WINSIZE_W - 400, UI.WINSIZE_H - 80, false, function (arg) {
           
      //  });
        
    }
    public initBtn(param: number) {
        if (this._node) {
            this.removeChild(this._node);
        }
        this._node = new egret.DisplayObjectContainer();
        this.addChild(this._node);
        this._node.x = 0;
        this._node.y = 0;
        //
        let xStart = 30;
        let yStart = 90;
        let yInter = 120;
        let btnStr: Array<string> = ["computer_fight", "training_mode", "people_fight"];
        for (let i = 0; i < 3; i++) {
            if (i == param) {
                let mask = UI.addPic(this._node, "select_shadow_png", xStart - 25, yStart + yInter * i - 20, false);
            }
            UI.addBtn(this._node, btnStr[i] + "_png", xStart, yStart + yInter * i, false, function (arg) {
                ModeScene.instance.clickBtn(i);
            });
        }
        UI.addPic(this._node, "blank_box_png", 240, 100, false);
    }

    //
    public onMatchGame() {

        this.initBtn(2);
        let xStart = 30;
        let yStart = 90;
        let yInter = 95;

        UI.addPic(this, "room_number_png", 240 + 70, 100 + 30, false);
        UI.addText(this, "ID:" + mgobe_conf.gameInfo.openId, 240 + 45, 100 + 30 + 240);
        //
        xStart = 435; let xInter = 53; yStart = 130;
        for (let i = 0; i < 3; i++) {
            UI.addPic(this, "dial_box_png", xStart + i * xInter, yStart, false);
            this._num1Txt[i] = UI.addPic(this, "roma1_png", xStart + i * xInter + 11, yStart + 8, false);
        }
        //
        xStart = 430; xInter = 53; yStart = 180; yInter = 55;
        let posNum: number = 1;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let Y = yStart + i * yInter;
                let nn = posNum;
                UI.addBtn(this, "number" + posNum + "_png", xStart + j * xInter, Y, false, function (arg) {
                    ModeScene.instance.clickNum(nn);
                });
                posNum++;
            }
        }

        //删除
        UI.addBtn(this._node, "button_delet_png", 600, 130, false, function (arg) {
            ModeScene.instance.deleteNum();
        });


        //删除
        UI.addBtn(this, "button_delet_png", 600, 130, false, function (arg) {
            ModeScene.instance.deleteNum();
        });

        UI.addBtn(this._node, "matching_button_startmatch_png", UI.WINSIZE_W - 200, UI.WINSIZE_H - 80, false, function (arg) {
            ModeScene.instance.clickMatchBtn();
        });
        //
        this.refreshRoomCode();

        this.refreshRoomCode();
        UI.addBtn(this._node, "matching_button_startmatch_png", UI.WINSIZE_W - 200, UI.WINSIZE_H - 80, false, function (arg) {
            ModeScene.instance.clickMatchBtn();
        });
        //
        this.refreshRoomCode();



    }




    public clickMatchBtn() {
        if (ModeScene.matchNumStr.length != 0) {
            if (ModeScene.matchNumStr.length != 3) {
                SceneManager.Instance.pushScene(new TipsLayer("数字不能够小于3位"))
                return;
            } else {
                console.log("开始房间号匹配!")
                SceneManager.Instance.pushScene(new MatchLayer("matchPlayers"));

            }
        } else {
            console.log("开始任意匹配!")
            SceneManager.Instance.pushScene(new MatchLayer("matchRoom"));
        }

    }
    public deleteNum() {
        for (let i = 2; i >= 0; i--) {
            if (this._numCode[i] != 0) {
                this._numCode[i] = 0;
                break;
            }
        }
        this.refreshRoomCode();
    }
    public clickNum(param: number) {
        for (let i = 0; i < 3; i++) {
            if (this._numCode[i] == 0) {
                this._numCode[i] = param;
                break;
            }
        }
        this.refreshRoomCode();
    }

    public refreshRoomCode() {
        ModeScene.matchNumStr = "";
        for (let i = 0; i < 3; i++) {
            if (this._numCode[i] != 0) {
                this._num1Txt[i].visible = true;
                this._num1Txt[i].texture = RES.getRes("roma" + this._numCode[i] + "_png");
                ModeScene.matchNumStr = ModeScene.matchNumStr + this._numCode[i];
            } else {
                this._num1Txt[i].visible = false;
            }
        }
        ModeScene.matchNum = Number(ModeScene.matchNumStr);
    }
    //
    public onExit() {

        return;
    }// end function

}