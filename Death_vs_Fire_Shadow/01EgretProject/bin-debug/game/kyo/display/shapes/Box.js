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
var Box = (function (_super) {
    __extends(Box, _super);
    function Box(param1, param2, param3, param4, param5) {
        if (param3 === void 0) { param3 = 0; }
        if (param4 === void 0) { param4 = 1; }
        if (param5 === void 0) { param5 = null; }
        var _this = _super.call(this) || this;
        var temp = new egret.Graphics();
        temp.beginFill(param3, param4);
        temp.drawRect(param5 ? (-param5.x) : (0), param5 ? (-param5.y) : (0), param1, param2);
        temp.endFill();
        return _this;
    } // end function
    return Box;
}(egret.Sprite));
__reflect(Box.prototype, "Box");
//# sourceMappingURL=Box.js.map