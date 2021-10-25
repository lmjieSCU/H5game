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
var NineNumber = (function (_super) {
    __extends(NineNumber, _super);
    function NineNumber(count, x, y, callY) {
        var _this = _super.call(this) || this;
        _this.call = [];
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.count = count;
        _this.x = x;
        _this.y = y;
        _this.callY = callY;
        return _this;
    }
    NineNumber.prototype.onEnter = function () {
        var _this = this;
        for (var i = 0; i < 3; i++) {
            var _loop_1 = function (j) {
                var num = i * 3 + j;
                var call = UI.addBtn(this_1, "number" + num + "_png", 0, 0, false, function () { return _this.addNum(num); });
                call.x = (call.width + 5) * i;
                call.y = (call.height + 5) * (j - 1);
            };
            var this_1 = this;
            for (var j = 1; j <= 3; j++) {
                _loop_1(j);
            }
        }
        for (var i = 0; i < this.count; i++) {
            var call = UI.addPic(this, "dial_box_png", 0, this.callY);
            call.x = i * (call.width + 5);
        }
    };
    NineNumber.prototype.addNum = function (num) { };
    return NineNumber;
}(egret.DisplayObjectContainer));
__reflect(NineNumber.prototype, "NineNumber", ["egret.DisplayObject"]);
//# sourceMappingURL=NineNumber.js.map