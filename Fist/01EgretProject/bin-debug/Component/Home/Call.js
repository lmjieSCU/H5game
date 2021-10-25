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
var Call = (function (_super) {
    __extends(Call, _super);
    function Call(node, listener) {
        if (node === void 0) { node = null; }
        if (listener === void 0) { listener = null; }
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.listener = listener;
        _this.node = node;
        return _this;
    }
    Call.prototype.onEnter = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var _loop_2 = function (j) {
                var number = UI.addBtn(this_1, "number" + (i * 3 + j) + "_png", 0, 0, true, function () { return _this.touchTap(i * 3 + j); });
                number.x = number.width / 2 + (number.width + 5) * (j - 1);
                number.y = number.height / 2 + (number.height + 5) * i;
            };
            for (var j = 1; j <= 3; j++) {
                _loop_2(j);
            }
        };
        var this_1 = this;
        for (var i = 0; i <= 2; i++) {
            _loop_1(i);
        }
        var number0 = UI.addBtn(this, "dial_box_png", 0, 0, true, function () { return _this.touchTap(0); });
        number0.x = (number0.width + 19) / 2 * 3 + 5;
        number0.y = (number0.height + 10) * 3.5 + 5;
        UI.addPic(this, "roma0_png", number0.x, number0.y, true);
        var delet = UI.addBtn(this, "button_delet_png", number0.x + number0.width + 5 + 19, number0.y, true, function () { return _this.touchTap(-1); });
    };
    Call.prototype.touchTap = function (num) {
        if (this.listener) {
            if (this.node) {
                this.listener.call(this.node, num);
            }
            else {
                this.listener.call(this, num);
            }
        }
    };
    Call.prototype.clear = function () { };
    return Call;
}(egret.DisplayObjectContainer));
__reflect(Call.prototype, "Call", ["egret.DisplayObject"]);
//# sourceMappingURL=Call.js.map