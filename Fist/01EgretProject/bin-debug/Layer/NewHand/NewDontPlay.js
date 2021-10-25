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
var NewDontPlay = (function (_super) {
    __extends(NewDontPlay, _super);
    function NewDontPlay() {
        return _super.call(this) || this;
    }
    NewDontPlay.prototype.onEnter = function () {
        var _this = this;
        var text = UI.addText(this, "请先进行3次对局胜利之后解锁该模式!!", UI.WINSIZE_W / 2, UI.WINSIZE_H / 4 + 50, true, 20, 0xffffff);
        egret.Tween.get(text).to({ alpha: 0 }, 2000, egret.Ease.sineIn).call(function () {
            SceneManager.getInstance().RemoveLayer(_this);
        }, this);
    };
    NewDontPlay.prototype.onExit = function () { };
    NewDontPlay.titleNum = 0;
    return NewDontPlay;
}(Scene));
__reflect(NewDontPlay.prototype, "NewDontPlay");
//# sourceMappingURL=NewDontPlay.js.map