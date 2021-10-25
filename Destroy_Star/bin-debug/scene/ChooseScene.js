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
    //
    function ChooseScene() {
        var _this = _super.call(this) || this;
        _this.caidantag = false;
        _this.renderFrame = 0;
        SoundCtrl.I.BGplay("yinyue1");
        GameModel.currentMode = GameModel.NORMAL;
        return _this;
    }
    //
    ChooseScene.prototype.onEnter = function () {
        ChooseScene.instance = this;
        this._bg = UI.addPic(this, "bg_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        UI.setscalXandY(this._bg, UI.WINSIZE_W * 1.1 / this._bg.width, UI.WINSIZE_H * 1.1 / this._bg.height);
        this._town = UI.addPic(this, "town_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        var tw = egret.Tween.get(this._town, { loop: true }).to({ "rotation": 360 }, 18000);
        this._star = UI.addPic(this, "Star_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 4, true);
        UI.setscalXandY(this._star, 1.5, 1.5);
        this._button1 = UI.addPic(this, "button1_png", UI.WINSIZE_W * 1 / 6, UI.WINSIZE_H * 3 / 5, true);
        UI.setscalXandY(this._button1, 1.5, 1.5);
        this._button2 = UI.addPic(this, "button2_png", UI.WINSIZE_W * 3 / 6, UI.WINSIZE_H * 3 / 5, true);
        UI.setscalXandY(this._button2, 1.5, 1.5);
        this._button3 = UI.addPic(this, "button3_png", UI.WINSIZE_W * 5 / 6, UI.WINSIZE_H * 3 / 5, true);
        UI.setscalXandY(this._button3, 1.5, 1.5);
        this._begin = UI.addPic(this, "begingame_png", UI.WINSIZE_W / 2, UI.WINSIZE_H * 7 / 10, true);
        UI.setscalXandY(this._begin, 1.5, 1.5);
        var tw2 = egret.Tween.get(this._begin, { loop: true }).to({ "scaleX": 2, "scaleY": 2 }, 1000)
            .to({ "scaleX": 1.5, "scaleY": 1.5 }, 1000);
        this._logo = UI.addPic(this, "logo_png", UI.WINSIZE_W / 2, UI.WINSIZE_H * 9 / 10, true);
        UI.setscalXandY(this._logo, 1.5, 1.5);
        var tw3 = egret.Tween.get(this._logo, { loop: true }).to({ "scaleX": 2, "scaleY": 2 }, 1000)
            .to({ "scaleX": 1.5, "scaleY": 1.5 }, 1000);
        this._tip = UI.addPic(this, "tip1_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2.1, true);
        UI.setscalXandY(this._tip, 1.5, 1.5);
        this._tip.alpha = 0;
        this._bag = UI.addPic(this, "bagIco_png", 0, 0);
        UI.setXandY(this._bag, UI.WINSIZE_W - this._bag.width, 10);
        this._jinbi = UI.addText(this, GameModel.jinbi, 0, 0);
        // UI.setscalXandY(this._jinbi, 1.5, 1.5);
        UI.setXandY(this._jinbi, this._bag.x - this._jinbi.width, 20);
        this.caidanbg = UI.addPic(this, "caidanbg_png", 0, UI.WINSIZE_H);
        this.caidanbg.anchorOffsetY = this.caidanbg.height;
        UI.setscalXandY(this.caidanbg, 0, 0);
        this.addBtn();
    };
    ChooseScene.prototype.addBtn = function () {
        UI.addClickAction(this, this._button1, this.button1);
        UI.addClickAction(this, this._button2, this.button2);
        UI.addClickAction(this, this._button3, this.button3);
        UI.addClickAction(this, this._begin, this.beginGame);
        this._caidan = UI.addBtn(this, "caidan_png", 0, UI.WINSIZE_H, false, this.caidan);
        this._caidan.anchorOffsetY = this._caidan.height;
    };
    ChooseScene.prototype.button1 = function () {
        GameModel.currentMode = GameModel.NORMAL;
        ChooseScene.instance._tip.texture = RES.getRes("tip1_png");
        ChooseScene.instance._tip.alpha = 1;
        ChooseScene.instance.Animation();
    };
    ChooseScene.prototype.button2 = function () {
        ChooseScene.instance._tip.alpha = 1;
        if (GameModel.jinbi < 5) {
            ChooseScene.instance._tip.texture = RES.getRes("tip4_png");
        }
        else {
            ChooseScene.instance._tip.texture = RES.getRes("tip2_png");
            GameModel.currentMode = GameModel.TIMELIMIT;
        }
        ChooseScene.instance.Animation();
    };
    ChooseScene.prototype.button3 = function () {
        ChooseScene.instance._tip.alpha = 1;
        if (GameModel.jinbi < 5) {
            ChooseScene.instance._tip.texture = RES.getRes("tip4_png");
        }
        else {
            ChooseScene.instance._tip.texture = RES.getRes("tip3_png");
            GameModel.currentMode = GameModel.BULIMIT;
        }
        ChooseScene.instance.Animation();
    };
    ChooseScene.prototype.Animation = function () {
        if (this.renderFrame == 0) {
            this.addEventListener(egret.TouchEvent.ENTER_FRAME, this.render, this);
        }
        else {
            this.renderFrame = 0;
        }
    };
    ChooseScene.prototype.render = function () {
        ChooseScene.instance.renderFrame++;
        if (ChooseScene.instance.renderFrame == 90) {
            ChooseScene.instance.renderFrame = 0;
            ChooseScene.instance._tip.alpha = 0;
            ChooseScene.instance.removeEventListener(egret.TouchEvent.ENTER_FRAME, ChooseScene.instance.render, ChooseScene.instance);
        }
    };
    ChooseScene.prototype.caidan = function () {
        if (this.caidantag == false) {
            var tw = egret.Tween.get(this.caidanbg).to({ "scaleX": 1, "scaleY": 1 }, 300);
            egret.setTimeout(function () {
                var s = SoundCtrl.I.Bgtag == true ? "sound_png" : "nosound_png";
                this.sound = UI.addBtn(this, s, UI.WINSIZE_W / 20, UI.WINSIZE_H * 19.4 / 20, false, this.playSound);
                this.sound.anchorOffsetY = this.sound.height;
            }, this, 300);
        }
        else {
            var tw = egret.Tween.get(this.caidanbg).to({ "scaleX": 0, "scaleY": 0 }, 300);
            this.removeChild(this.sound);
        }
        this.caidantag = !this.caidantag;
    };
    ChooseScene.prototype.playSound = function () {
        SoundCtrl.I.Bgtag = !SoundCtrl.I.Bgtag;
        if (SoundCtrl.I.Bgtag == false) {
            this.sound.texture = RES.getRes("nosound_png");
            SoundCtrl.I.BGclose();
        }
        else {
            this.sound.texture = RES.getRes("sound_png");
            SoundCtrl.I.BGplay("yinyue1");
        }
    };
    ChooseScene.prototype.beginGame = function () {
        SceneManager.Instance.changeScene(new GameScene());
    };
    ChooseScene.prototype.onExit = function () {
    };
    return ChooseScene;
}(Scene));
__reflect(ChooseScene.prototype, "ChooseScene");
//# sourceMappingURL=ChooseScene.js.map