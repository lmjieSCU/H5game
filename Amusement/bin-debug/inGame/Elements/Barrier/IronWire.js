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
/**铁丝 */
var IronWire = (function (_super) {
    __extends(IronWire, _super);
    function IronWire() {
        var _this = _super.call(this) || this;
        _this.img1 = UI.addPic("ironWire_png", true, _this);
        UI.setXandY(_this.img1, -37, -24);
        _this.img2 = UI.addPic("ironWire_png2", true, _this);
        UI.setXandY(_this.img2, -32, 30);
        return _this;
    }
    Object.defineProperty(IronWire.prototype, "dir", {
        get: function () {
            return this._dir;
        },
        set: function (arg1) {
            this._dir = arg1;
            this.img1.visible = arg1 == 1;
            this.img2.visible = arg1 == 2;
            return;
        },
        enumerable: true,
        configurable: true
    });
    IronWire.pool = new BasePool(IronWire, 20);
    return IronWire;
}(Elements));
__reflect(IronWire.prototype, "IronWire");
//# sourceMappingURL=IronWire.js.map