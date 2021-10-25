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
var ChooseScene = (function (_super) {
    __extends(ChooseScene, _super);
    function ChooseScene(player, type, AI) {
        if (player === void 0) { player = 1; }
        if (type === void 0) { type = Main.PVE; }
        if (AI === void 0) { AI = "K|1"; }
        var _this = _super.call(this) || this;
        _this.player2 = [
            { id: "roleK", name: "K", resouce: "new K_Player()" },
            { id: "roleTerry", name: "Terry", resouce: "new Terry_Player()" },
            { id: "roleRyu", name: "Ryu", resouce: "new Ryu_Player()" },
            { id: "roleChunli", name: "Chunli", resouce: "new Chunli_Player()" },
        ];
        _this.player1 = [
            { id: "roleK", name: "K", resouce: "new K_Player()" },
            { id: "roleTerry", name: "Terry", resouce: "new Terry_Player()" },
            { id: "roleRyu", name: "Ryu", resouce: "new Ryu_Player()" },
            { id: "roleChunli", name: "Chunli", resouce: "new Chunli_Player()" },
            { id: "roleMai", name: "Mai", resouce: "new Mai_Player()" },
        ];
        _this.allHero = [
            { id: "roleK", name: "K", resouce: "new K_Player()" },
            { id: "roleTerry", name: "Terry", resouce: "new Terry_Player()" },
            { id: "roleRyu", name: "Ryu", resouce: "new Ryu_Player()" },
            { id: "roleChunli", name: "Chunli", resouce: "new Chunli_Player()" },
            { id: "roleMai", name: "Mai", resouce: "new Mai_Player()" },
            { id: "Type2_roleTerry", name: "Terry", resouce: "" },
            { id: "Type2_roleRyu", name: "Ryu", resouce: "" },
            { id: "Type2_roleChunli", name: "Chunli", resouce: "" },
            { id: "roleTerry", name: "Terry", resouce: "" },
            { id: "roleRyu", name: "Ryu", resouce: "" },
            { id: "roleChunli", name: "Chunli", resouce: "" },
            { id: "roleChunli", name: "Chunli", resouce: "" },
        ];
        // private AI = [
        //     { id: "roleK", name: "k", resouce: "K"},
        //     { id: "roleTerry", name: "terry", resouce: "Terry"},
        //     { id: "roleRyu", name: "ryu", resouce: "Ryu"},
        //     // { id: "roleRyu", name: "ryu", resouce: "new Type2_Ryu_Player()"},
        //     { id: "roleChunli", name: "chunli", resouce: "Chunli"},
        // ]
        _this.playInfo = {
            map: 9, life: 300, powerMax: 3, p1: 'new K_Player()', p2: "new K_Player()", player: 1, time: 0, type: 'pve', p1SkillList: null, p2SkillList: null
        };
        _this.isType2 = false;
        _this.p1Fight = false;
        _this.p2Fight = false;
        ChooseScene.instance = _this;
        _this.playInfo.player = player;
        _this.playInfo.type = type;
        if (_this.playInfo.type == Main.PVE) {
            var ai = AI.split("|");
            _this.playInfo.p2 = "new " + ai[0] + "_AI_Lv5(" + ai[1] + ")";
            _this.AI = ai[0];
        }
        return _this;
    }
    ChooseScene.prototype.onEnter = function () {
        var _this = this;
        UI.addBg(this, "loadingChunli_png");
        var shape = new egret.Shape();
        shape.graphics.beginFill(0x000000, 0.5);
        shape.graphics.drawRect(0, 0, UI.WINSIZE_W, UI.WINSIZE_H);
        shape.graphics.endFill();
        this.addChild(shape);
        this.initChoose();
        UI.addPic(this, "Choose_button_backbg_png", 0, 0);
        UI.addBtn(this, "Button_back_png", 0, 0, false, function () {
            SceneManager.getInstance().ChangeScene(new Home());
        });
        var start = UI.addBtn(this, "Choose_button_begin_png", UI.WINSIZE_W / 2, UI.WINSIZE_H - 100, true, function () {
            if (_this.playInfo.p1.length > 0 && _this.playInfo.p2.length > 0) {
                // this.removeChild(bg);
                // this.p2 = "new K_Player()";
                // this.type = Main.PVP;
                // if (this.isType2) {
                //     const play = this.playInfo.p1.split(" ");
                //     this.playInfo.p1 = `new Type2_${play[1]}`;
                // }
                if (_this.playInfo.type == Main.PVP_online) {
                    // this.playerFight = true;
                    var d = {
                        chooseHero: true,
                        type: 'fight',
                        fight: true,
                        player: _this.playInfo.player
                    };
                    var sendFramePara = { data: d };
                    RoomManager.instance.room.sendFrame(sendFramePara);
                }
                else
                    _this.goFight();
                // this.addChild(new FightVS(this))
                // SceneManager.getInstance().ChangeScene(new ChooseScene())
                // let i = new egret.Shape();
                // i.graphics.beginFill(0x000000, 0);
                // i.graphics.drawRect(0, 0, UI.WINSIZE_W, UI.WINSIZE_H);
                // i.graphics.endFill();
                // this.addChild(i);
                // i.touchEnabled = true;
            }
        });
        // let type: egret.TextField = UI.addText(this, "type1", start.x - start.width - 10, start.y, true, 30);
        // type.touchEnabled = true;
        // type.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
        //     type.$setText(this.isType2 ? 'type1' : 'type2');
        //     this.isType2 = !this.isType2;
        // }, this)
        // const exit: egret.Bitmap = UI.addBtn(this, "exit_png", UI.WINSIZE_W / 8 * 7, 0, true, () => {
        //     SceneManager.getInstance().ChangeScene(new Home());
        // })
        // exit.y = exit.height + 5;
        // this.addChild(new ChooseMap(this, UI.WINSIZE_W / 5 * 3, UI.WINSIZE_H / 2, 200, 200));
        // let set: egret.Bitmap = UI.addBtn(this, "Home_button_set_png", UI.WINSIZE_W, UI.WINSIZE_H, true, () => {
        //     SceneManager.getInstance().AddLayer(new ChooseSet(this))
        // })
        // set.x -= set.width;
        // set.y -= set.height;
    };
    ChooseScene.prototype.initChoose = function () {
        var _this = this;
        var bg = UI.addPic(this, "select_bg_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        var player = this.playInfo.player == 1 ? this.player1 : this.player2;
        var anotherPlayer = this.playInfo.player == 1 ? this.player2 : this.player1;
        this.playInfo.p1 = this.player1[0].resouce;
        if (this.playInfo.type == Main.PVP_offline || this.playInfo.type == Main.PVP_online)
            this.playInfo.p2 = this.player2[0].resouce;
        this.hero = new ChooseHero("Choose_hero" + player[0].name + "_png", 0, 0, UI.WINSIZE_W / 4, UI.WINSIZE_H);
        this.anotherHero = new ChooseHero("Choose_hero" + ((this.playInfo.type == Main.PVP_offline || this.playInfo.type == Main.PVP_online) ? anotherPlayer[0].name : (this.AI.split("|")[0])) + "_png", UI.WINSIZE_W / 4 * 3, 0, UI.WINSIZE_W / 4, UI.WINSIZE_H);
        this.addChild(this.anotherHero);
        this.addChild(this.hero);
        var len = 12;
        var choose = UI.addPic(this, "Choose_rolebox_shadow_png", 0, 0, true);
        this.allHero.map(function (data, index) {
            var i = UI.addPic(_this, "select_boxbg_png", 0, 0, true);
            // i.x = i.width * (len + 5) * 0.25 + i.width * (-Math.floor(index / (len) * 2) * ((len + 1) / 2 - 0.125) + index - (len - 1) / 4);
            i.y = UI.WINSIZE_H / 2 - i.height + (i.height + 20) * Math.floor(index / (len) * 2);
            i.x = UI.WINSIZE_W / 4 + (i.width - 10) * (index % (len / 2)) - Math.floor(index / len * 2) * 10;
            if (index == 0) {
                choose.x = i.x;
                choose.y = i.y - 2;
            }
            if (data.resouce) {
                var hero = UI.addPic(_this, "Choose_rolebox" + data.name + "_png", i.x, i.y, true);
                var lock_1 = UI.addPic(_this, "Choose_rolebox_lock_png", i.x - 2, i.y - 1, true);
                lock_1.scaleX = i.width / lock_1.width;
                lock_1.scaleY = i.height / lock_1.height;
                lock_1.touchEnabled = true;
                lock_1.alpha = 0.8;
                player.map(function (d) {
                    if (d.id == data.id) {
                        lock_1.alpha = 0;
                        lock_1.touchEnabled = false;
                        i.touchEnabled = true;
                    }
                });
            }
            i.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                choose.x = i.x;
                choose.y = i.y - 2;
                var heroId = PropData.getHeroIdByName(data.id);
                var skillLsit = HeroData.getHeroSkillList(heroId);
                if (_this.playInfo.type == Main.PVP_online) {
                    var d = {
                        chooseHero: true,
                        type: 'hero',
                        name: data.name,
                        player: _this.playInfo.player,
                        resouce: data.resouce,
                        skillLsit: skillLsit
                    };
                    var sendFramePara = { data: d };
                    RoomManager.instance.room.sendFrame(sendFramePara);
                }
                else {
                    _this.playInfo.player == 1 ? _this.playInfo.p1 = data.resouce : _this.playInfo.p2 = data.resouce;
                    _this.hero.changeHero("Choose_hero" + data.name + "_png");
                    _this.playInfo.player == 1 ? _this.playInfo.p1SkillList = skillLsit : _this.playInfo.p2SkillList = skillLsit;
                }
            }, _this);
            // const t: egret.TextField = UI.addText(this, data.name, i.x, i.y + i.height / 2 + 30, true, 20)
        });
        this.setChildIndex(choose, this.numChildren - 1);
    };
    ChooseScene.prototype.onExit = function () {
        // ChooseScene.instance = null;
    };
    ChooseScene.prototype.goFight = function () {
        if (this.playInfo.type != Main.PVP_online)
            FightMainRender.getInstance().initlize();
        var playInfo = this.playInfo;
        SceneManager.getInstance().ChangeScene(new LoadResScene(playInfo));
        // SplashScene.instance.stage.addChild(new Round(1));
    };
    ChooseScene.prototype.choosePlyer = function () {
    };
    ChooseScene.prototype.chooseAnotherPlayer = function () {
    };
    return ChooseScene;
}(Scene));
__reflect(ChooseScene.prototype, "ChooseScene");
//# sourceMappingURL=ChooseScene.js.map