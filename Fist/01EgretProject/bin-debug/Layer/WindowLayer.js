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
var WindowLayer = (function (_super) {
    __extends(WindowLayer, _super);
    function WindowLayer() {
        return _super.call(this) || this;
    }
    WindowLayer.prototype.onEnter = function () {
        var _this = this;
        var bg = new egret.Shape();
        bg.graphics.beginFill(0x000000, 0.5);
        bg.graphics.drawRect(0, 0, UI.WINSIZE_W, UI.WINSIZE_H);
        bg.graphics.endFill();
        this.addChild(bg);
        UI.addClickAction(this, bg, function () {
            _this.onClickBg();
        });
        bg.touchEnabled = true;
        this.onContent();
    };
    WindowLayer.prototype.onExit = function () {
    };
    return WindowLayer;
}(Scene));
__reflect(WindowLayer.prototype, "WindowLayer");
//# sourceMappingURL=WindowLayer.js.map