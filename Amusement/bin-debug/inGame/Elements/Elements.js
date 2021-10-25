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
var Elements = (function (_super) {
    __extends(Elements, _super);
    function Elements() {
        var _this = _super.call(this) || this;
        return _this;
    }
    Elements.prototype.reset = function () {
        return;
    };
    return Elements;
}(egret.DisplayObjectContainer));
__reflect(Elements.prototype, "Elements");
//# sourceMappingURL=Elements.js.map