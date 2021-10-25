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
var FightResultSuccess = (function (_super) {
    __extends(FightResultSuccess, _super);
    function FightResultSuccess() {
        var _this = _super.call(this) || this;
        _this._yellowStar = [];
        _this._grayStar = [];
        player1id = null;
        player2id = null;
        return _this;
    }
    FightResultSuccess.prototype.onEnter = function () {
        FightResultSuccess.instance = this;
        //深色背景图
        UI.addPic(this, "settlement_background_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        //胜利图
        UI.addPic(this, "logo_vicotry_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2 - 25, true);
        //星星
        this._grayStar[0] = UI.addPic(this, "defeat_star_png", UI.WINSIZE_W / 2 - 48, UI.WINSIZE_H / 3 - 94, true);
        this._grayStar[1] = UI.addPic(this, "defeat_star_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 3 - 111, true);
        this._grayStar[2] = UI.addPic(this, "defeat_star_png", UI.WINSIZE_W / 2 + 48, UI.WINSIZE_H / 3 - 94, true);
        this._yellowStar[0] = UI.addPic(this, "logo_star_png", UI.WINSIZE_W / 2 - 48, UI.WINSIZE_H / 3 - 94, true);
        this._yellowStar[1] = UI.addPic(this, "logo_star_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 3 - 111, true);
        this._yellowStar[2] = UI.addPic(this, "logo_star_png", UI.WINSIZE_W / 2 + 48, UI.WINSIZE_H / 3 - 94, true);
        for (var i = 0; i < 3; i++) {
            this._yellowStar[i].alpha = 0;
            this._yellowStar[i].scaleX = 4;
            this._yellowStar[i].scaleY = 4;
        }
        //奖励块
        UI.addPic(this, "box_award_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2 + 100, true);
        UI.addPic(this, "logo_gold_png", UI.WINSIZE_W / 2 - 110, UI.WINSIZE_H / 2 + 100, true);
        UI.addPic(this, "with_png", UI.WINSIZE_W / 2 - 80, UI.WINSIZE_H / 2 + 100, true);
        UI.addPic(this, "logo_diamonds_png", UI.WINSIZE_W / 2 + 45, UI.WINSIZE_H / 2 + 100, true);
        UI.addPic(this, "with_png", UI.WINSIZE_W / 2 + 75, UI.WINSIZE_H / 2 + 100, true);
        //选择按钮
        UI.addBtn(this, "button_getreward_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2 + 162, true, function (arg) {
            SceneManager.Instance.changeScene(new FightloadScene(1));
        });
        UI.addBtn(this, "Direct_collection_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2 + 213, true, function (arg) {
        });
        //星星动画
        var tw1 = egret.Tween.get(this._yellowStar[0]);
        tw1.to({ scaleX: 1, scaleY: 1, alpha: 1 }, 500);
        var tw2 = egret.Tween.get(this._yellowStar[1]).wait(300);
        tw2.to({ scaleX: 1, scaleY: 1, alpha: 1 }, 500);
        var tw3 = egret.Tween.get(this._yellowStar[2]).wait(600);
        tw3.to({ scaleX: 1, scaleY: 1, alpha: 1 }, 500);
    };
    FightResultSuccess.prototype.onExit = function () {
    };
    return FightResultSuccess;
}(Scene));
__reflect(FightResultSuccess.prototype, "FightResultSuccess");
//# sourceMappingURL=FightResultSuccess.js.map