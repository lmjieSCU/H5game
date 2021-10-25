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
var FightResultFailor = (function (_super) {
    __extends(FightResultFailor, _super);
    function FightResultFailor() {
        var _this = _super.call(this) || this;
        player1id = null;
        player2id = null;
        return _this;
    }
    FightResultFailor.prototype.onEnter = function () {
        FightResultFailor.instance = this;
        //深色背景图
        this._overBg = UI.addPic(this, "settlement_background_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        //失败图
        UI.addPic(this, "logo_defeat_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2 - 25, true);
        //奖励块
        UI.addPic(this, "box_award_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2 + 100, true);
        UI.addPic(this, "logo_gold_png", UI.WINSIZE_W / 2 - 110, UI.WINSIZE_H / 2 + 100, true);
        UI.addPic(this, "with_png", UI.WINSIZE_W / 2 - 80, UI.WINSIZE_H / 2 + 100, true);
        UI.addPic(this, "logo_diamonds_png", UI.WINSIZE_W / 2 + 45, UI.WINSIZE_H / 2 + 100, true);
        UI.addPic(this, "with_png", UI.WINSIZE_W / 2 + 75, UI.WINSIZE_H / 2 + 100, true);
        //选择按钮
        UI.addBtn(this, "button_back_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2 + 182, true, function (arg) {
            SceneManager.Instance.changeScene(new FightloadScene(1));
        });
        //UI.addBtn(this, "button_restart_png", UI.WINSIZE_W / 2+155, UI.WINSIZE_H / 2+182, true, function(arg){
        //  });
    };
    FightResultFailor.prototype.onExit = function () {
    };
    return FightResultFailor;
}(Scene));
__reflect(FightResultFailor.prototype, "FightResultFailor");
//# sourceMappingURL=FightResultFailor.js.map