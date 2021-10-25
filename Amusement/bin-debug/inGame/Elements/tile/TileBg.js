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
/**糖果阴影背景 */
var TileBg = (function (_super) {
    __extends(TileBg, _super);
    function TileBg() {
        var _this = _super.call(this) || this;
        _this.img = UI.addPic("cube_png", true, _this);
        return _this;
    }
    TileBg.prototype.reset = function () {
        return;
    };
    TileBg.pool = new BasePool(TileBg, 81);
    return TileBg;
}(Elements));
__reflect(TileBg.prototype, "TileBg");
//# sourceMappingURL=TileBg.js.map