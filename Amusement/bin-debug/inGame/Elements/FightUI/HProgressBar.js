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
/**进度条 */
var HProgressBar = (function (_super) {
    __extends(HProgressBar, _super);
    function HProgressBar() {
        var _this = _super.call(this) || this;
        _this.progressBar = UI.addPic("progressBar_png", true, _this);
        _this.progressBg = UI.addPic("progressBg_png", true, _this);
        _this._ratio = 0;
        _this.rect = new egret.Rectangle(0, 0, _this.progressBar.width, _this.progressBar.height);
        return _this;
    }
    Object.defineProperty(HProgressBar.prototype, "ratio", {
        get: function () {
            return this._ratio;
        },
        set: function (arg1) {
            if (arg1 > 1) {
                arg1 = 1;
            }
            this._ratio = arg1;
            this.rect.x = (arg1 - 1) * this.rect.width;
            this.progressBar.mask = this.rect;
            return;
        },
        enumerable: true,
        configurable: true
    });
    HProgressBar.prototype.dispose = function () {
        this.rect = null;
        this.removeChildren();
        return;
    };
    return HProgressBar;
}(Elements));
__reflect(HProgressBar.prototype, "HProgressBar");
//# sourceMappingURL=HProgressBar.js.map