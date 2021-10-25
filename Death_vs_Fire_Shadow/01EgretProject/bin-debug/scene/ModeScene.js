var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var ModeScene = (function (_super) {
    __extends(ModeScene, _super);
    function ModeScene() {
        var _this = _super.call(this) || this;
        _this._node = null;
        _this._num1Txt = [];
        _this._numCode = [0, 0, 0];
        return _this;
    } // end function
    ModeScene.initListen = function () {
        MGOBE.Listener.init(mgobe_conf.gameInfo, mgobe_conf.config, function (event) {
            if (event.code == 0) {
                console.log("hello success");
            }
            else {
                console.log("wrong", event);
                ModeScene.initListen();
            }
        });
    };
    ModeScene.getMatchStr = function () {
        for (var i = 0; i < 10; i++) {
            if (ModeScene.matchNum >= ModeScene.matchConf[i][0]
                && ModeScene.matchConf[i][1] >= ModeScene.matchNum) {
                return ModeScene.matchConf[i][2];
            }
        }
    };
    ModeScene.prototype.createUserID = function () {
        var firstFlag = "userID";
        var score = egret.localStorage.getItem(firstFlag);
        var first = Number(score);
        if (first == 0) {
            var code = Math.floor(Math2.numberBetween(1000000000, 9000000000, false));
            UI.saveItem(firstFlag, code);
            mgobe_conf.gameInfo.openId = "U" + code;
        }
        else {
            mgobe_conf.gameInfo.openId = "U" + score;
        }
        UserInfo.playerInfo.name = mgobe_conf.gameInfo.openId;
        ModeScene.initListen();
    };
    ModeScene.prototype.onEnter = function () {
        ModeScene.instance = this;
        this.createUserID();
        //
        this._ui = new egret.Sprite();
        this._ui.width = UI.WINSIZE_W;
        this._ui.height = UI.WINSIZE_H;
        // -----------------------------
        var bg = new egret.Bitmap(RES.getRes("assignment_bg_png"));
        this.addChild(bg);
        var pic1 = new egret.Bitmap(RES.getRes("statu_bar_png"));
        this.addChild(pic1);
        this.onCPU();
        var goldLayer = new GoldDiamondLayer(this);
        this.addChild(goldLayer);
        goldLayer.addReturn(function (arg) {
            SceneManager.Instance.changeScene(new TownScene);
        });
        return;
    }; // end function
    //
    ModeScene.prototype.onMatchMode = function () {
        var xStart = 30;
        var yStart = 90;
        var yInter = 95;
        var btnStr = ["Breakthrough_mode", "computer_fight", "training_mode", "people_fight"];
        for (var i = 0; i < 4; i++) {
            if (i == 3) {
                var mask = UI.addPic(this, "select_shadow_png", xStart - 25, yStart + yInter * i - 20, false);
                var sc = 0.95;
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
        xStart = 435;
        var xInter = 53;
        yStart = 130;
        for (var i = 0; i < 3; i++) {
            UI.addPic(this, "dial_box_png", xStart + i * xInter, yStart, false);
            this._num1Txt[i] = UI.addPic(this, "roma1_png", xStart + i * xInter + 11, yStart + 8, false);
        }
        //
        xStart = 430;
        xInter = 53;
        yStart = 180;
        yInter = 55;
        var posNum = 1;
        for (var i = 0; i < 3; i++) {
            var _loop_1 = function (j) {
                var Y = yStart + i * yInter;
                var nn = posNum;
                UI.addBtn(this_1, "number" + posNum + "_png", xStart + j * xInter, Y, false, function (arg) {
                    ModeScene.instance.clickNum(nn);
                });
                posNum++;
            };
            var this_1 = this;
            for (var j = 0; j < 3; j++) {
                _loop_1(j);
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
    };
    ModeScene.prototype.clickBtn = function (param) {
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
    };
    ModeScene.prototype.onCPU = function () {
        this.initBtn(0);
        var str = "这里有不同类型的对手供你选择，同时需要选择你要应战的英雄，选择不同的AI难度有不同的奖励！";
        var content = UI.addText(this._node, str, 320, 140);
        content.width = 400;
        content.textColor = 0xffffff;
        content.size = 24;
        UI.addBtn(this._node, "nextStepBtn_png", UI.WINSIZE_W - 200, UI.WINSIZE_H - 80, false, function (arg) {
            GameMode.currentMode = GameMode.SINGLE_VS_CPU;
            SceneManager.Instance.changeScene(new FightloadScene(0));
        });
    };
    ModeScene.prototype.onTraining = function () {
        this.initBtn(1);
        var str = "在这里你能够训练你的格斗技术，选择你拥有的英雄，没有生命值限制，没有时间限制，直接你拥有真正的格斗技术。";
        var content = UI.addText(this._node, str, 320, 140);
        content.width = 400;
        content.textColor = 0xffffff;
        content.size = 24;
        UI.addBtn(this._node, "nextStepBtn_png", UI.WINSIZE_W - 200, UI.WINSIZE_H - 80, false, function (arg) {
            GameMode.currentMode = GameMode.TRAINING;
            SceneManager.Instance.changeScene(new FightloadScene(0));
        });
        //  UI.addBtn(this._node, "assignment_button_back_png", UI.WINSIZE_W - 400, UI.WINSIZE_H - 80, false, function (arg) {
        //  });
    };
    ModeScene.prototype.initBtn = function (param) {
        if (this._node) {
            this.removeChild(this._node);
        }
        this._node = new egret.DisplayObjectContainer();
        this.addChild(this._node);
        this._node.x = 0;
        this._node.y = 0;
        //
        var xStart = 30;
        var yStart = 90;
        var yInter = 120;
        var btnStr = ["computer_fight", "training_mode", "people_fight"];
        var _loop_2 = function (i) {
            if (i == param) {
                var mask = UI.addPic(this_2._node, "select_shadow_png", xStart - 25, yStart + yInter * i - 20, false);
            }
            UI.addBtn(this_2._node, btnStr[i] + "_png", xStart, yStart + yInter * i, false, function (arg) {
                ModeScene.instance.clickBtn(i);
            });
        };
        var this_2 = this;
        for (var i = 0; i < 3; i++) {
            _loop_2(i);
        }
        UI.addPic(this._node, "blank_box_png", 240, 100, false);
    };
    //
    ModeScene.prototype.onMatchGame = function () {
        this.initBtn(2);
        var xStart = 30;
        var yStart = 90;
        var yInter = 95;
        UI.addPic(this, "room_number_png", 240 + 70, 100 + 30, false);
        UI.addText(this, "ID:" + mgobe_conf.gameInfo.openId, 240 + 45, 100 + 30 + 240);
        //
        xStart = 435;
        var xInter = 53;
        yStart = 130;
        for (var i = 0; i < 3; i++) {
            UI.addPic(this, "dial_box_png", xStart + i * xInter, yStart, false);
            this._num1Txt[i] = UI.addPic(this, "roma1_png", xStart + i * xInter + 11, yStart + 8, false);
        }
        //
        xStart = 430;
        xInter = 53;
        yStart = 180;
        yInter = 55;
        var posNum = 1;
        for (var i = 0; i < 3; i++) {
            var _loop_3 = function (j) {
                var Y = yStart + i * yInter;
                var nn = posNum;
                UI.addBtn(this_3, "number" + posNum + "_png", xStart + j * xInter, Y, false, function (arg) {
                    ModeScene.instance.clickNum(nn);
                });
                posNum++;
            };
            var this_3 = this;
            for (var j = 0; j < 3; j++) {
                _loop_3(j);
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
    };
    ModeScene.prototype.clickMatchBtn = function () {
        if (ModeScene.matchNumStr.length != 0) {
            if (ModeScene.matchNumStr.length != 3) {
                SceneManager.Instance.pushScene(new TipsLayer("数字不能够小于3位"));
                return;
            }
            else {
                console.log("开始房间号匹配!");
                SceneManager.Instance.pushScene(new MatchLayer("matchPlayers"));
            }
        }
        else {
            console.log("开始任意匹配!");
            SceneManager.Instance.pushScene(new MatchLayer("matchRoom"));
        }
    };
    ModeScene.prototype.deleteNum = function () {
        for (var i = 2; i >= 0; i--) {
            if (this._numCode[i] != 0) {
                this._numCode[i] = 0;
                break;
            }
        }
        this.refreshRoomCode();
    };
    ModeScene.prototype.clickNum = function (param) {
        for (var i = 0; i < 3; i++) {
            if (this._numCode[i] == 0) {
                this._numCode[i] = param;
                break;
            }
        }
        this.refreshRoomCode();
    };
    ModeScene.prototype.refreshRoomCode = function () {
        ModeScene.matchNumStr = "";
        for (var i = 0; i < 3; i++) {
            if (this._numCode[i] != 0) {
                this._num1Txt[i].visible = true;
                this._num1Txt[i].texture = RES.getRes("roma" + this._numCode[i] + "_png");
                ModeScene.matchNumStr = ModeScene.matchNumStr + this._numCode[i];
            }
            else {
                this._num1Txt[i].visible = false;
            }
        }
        ModeScene.matchNum = Number(ModeScene.matchNumStr);
    };
    //
    ModeScene.prototype.onExit = function () {
        return;
    }; // end function
    ModeScene.matchNum = 0;
    ModeScene.matchNumStr = "";
    ModeScene.matchConf = [
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
    return ModeScene;
}(Scene));
__reflect(ModeScene.prototype, "ModeScene");
//# sourceMappingURL=ModeScene.js.map