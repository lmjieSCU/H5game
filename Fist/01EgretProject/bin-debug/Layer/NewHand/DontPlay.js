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
var DontPlay = (function (_super) {
    __extends(DontPlay, _super);
    function DontPlay() {
        return _super.call(this) || this;
    }
    DontPlay.prototype.onContent = function () {
        var _this = this;
        var bg = UI.addPic(this, "Popup_box_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        var title = UI.addText(this, "完成三次游戏后解锁匹配", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true, 20, 0xffffff);
        bg.scaleX = (title.width + 40) / bg.width;
        bg.scaleY = (title.height + 40) / bg.height;
        var remove = UI.addBtn(this, "Popup_close_png", bg.x + bg.width / 2 * bg.scaleX, bg.y - bg.height / 2 * bg.scaleY, true, function () {
            SceneManager.getInstance().RemoveLayer(_this);
        });
    };
    DontPlay.prototype.onClickBg = function () { };
    return DontPlay;
}(WindowLayer));
__reflect(DontPlay.prototype, "DontPlay");
//# sourceMappingURL=DontPlay.js.map