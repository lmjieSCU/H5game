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
var FinishScene = (function (_super) {
    __extends(FinishScene, _super);
    //
    function FinishScene(level, score) {
        if (level === void 0) { level = 1; }
        var _this = _super.call(this) || this;
        _this.Arrb = [];
        _this.level = level;
        _this.score = score;
        return _this;
    }
    //
    FinishScene.prototype.onEnter = function () {
        SoundCtrl.I.BGclose();
        FinishScene.instance = this;
        this._bg = UI.addPic(this, "bg_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        UI.setscalXandY(this._bg, UI.WINSIZE_W * 1.1 / this._bg.width, UI.WINSIZE_H * 1.1 / this._bg.height);
        this._town = UI.addPic(this, "town_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        var tw = egret.Tween.get(this._town, { loop: true }).to({ "rotation": 360 }, 12000);
        this._star = UI.addPic(this, "Star_png", UI.WINSIZE_W / 4, UI.WINSIZE_H / 6, true);
        this._bag = UI.addPic(this, "bagIco_png", 0, 0);
        UI.setXandY(this._bag, UI.WINSIZE_W - this._bag.width, 10);
        this._jinbi = UI.addText(this, GameModel.jinbi, 0, 0);
        // UI.setscalXandY(this._jinbi, 1.5, 1.5);
        UI.setXandY(this._jinbi, this._bag.x - 2 * this._jinbi.width, 20);
        switch (GameModel.currentMode) {
            case GameModel.NORMAL:
                this.modelText = UI.addText(this, "闯关模式: 第" + this.level + "关", UI.WINSIZE_W / 3, UI.WINSIZE_H / 3, true);
                break;
            case GameModel.TIMELIMIT:
                this.modelText = UI.addText(this, "限时60秒", UI.WINSIZE_W / 3, UI.WINSIZE_H / 3, true);
                break;
            case GameModel.BULIMIT:
                this.modelText = UI.addText(this, "限定60步", UI.WINSIZE_W / 3, UI.WINSIZE_H / 3, true);
                break;
        }
        // UI.setscalXandY(this.modelText, 1.3, 1.3);
        this.modelText.size = 45;
        this.ScoreText = UI.addText(this, this.score, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        this.ScoreText.size = 45;
        // UI.setscalXandY(this.ScoreText, 2, 2);
        this.FireWork();
        SoundCtrl.I.Effectplay("cheer");
        if (GameModel.currentMode != GameModel.NORMAL) {
            this.AddJinbi();
        }
        else {
            this.addBtn();
        }
    };
    FinishScene.prototype.addBtn = function () {
        this.ReturnChoose = UI.addBtn(this, "ReturntoChoose_png", UI.WINSIZE_W / 3, UI.WINSIZE_H / 1.5, true, this.ReturntoChoose);
        this.ReturnMod = UI.addBtn(this, "ReturntoMode_png", UI.WINSIZE_W / 1.5, UI.WINSIZE_H / 1.5, true, this.ReturntoMode);
    };
    FinishScene.prototype.FireWork = function () {
        for (var i = 1; i <= 4; i++) {
            for (var _loc2 = 0; _loc2 < 20; ++_loc2) {
                var firework = new FireWorks(["yanhua0_json"], RES.getRes("yanhua_json"), "mc_0", 1, "", Math.floor(5 * Math.random()));
                UI.setXandY(firework, UI.WINSIZE_W * i / 5, UI.WINSIZE_H * (i % 2 + 1) / 3);
                UI.setscalXandY(firework, 1.5, 1.5);
                firework.rotation = 18 * _loc2;
                this.addChild(firework);
            } // end of for
        }
    };
    FinishScene.prototype.AddJinbi = function () {
        var jinNum = this.score / 500;
        if (jinNum <= 0) {
            jinNum = 1;
        }
        else if (jinNum > 10) {
            jinNum = 10;
        }
        var _loc_;
        for (var i = 0; i < jinNum; i++) {
            _loc_ = new bi(i, jinNum);
            this.addChild(_loc_);
            this.Arrb.push(_loc_);
        }
        this.Arrb[0].play();
    };
    FinishScene.prototype.ReturntoChoose = function () {
        SceneManager.Instance.changeScene(new ChooseScene());
    };
    FinishScene.prototype.ReturntoMode = function () {
        if (GameModel.currentMode != GameModel.NORMAL && GameModel.jinbi < 5) {
            SceneManager.Instance.changeScene(new ChooseScene());
            return;
        }
        SceneManager.Instance.changeScene(new GameScene());
    };
    FinishScene.prototype.onExit = function () {
    };
    return FinishScene;
}(Scene));
__reflect(FinishScene.prototype, "FinishScene");
//# sourceMappingURL=FinishScene.js.map