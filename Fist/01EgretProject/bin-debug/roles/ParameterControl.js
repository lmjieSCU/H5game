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
var ParameterControl = (function (_super) {
    __extends(ParameterControl, _super);
    function ParameterControl(data, obj) {
        var _this = _super.call(this) || this;
        _this._Y = 0;
        _this.width = 400;
        _this.height = 400;
        _this.x = UI.WINSIZE_W - 200;
        _this.y = 0;
        for (var i in data) {
            _this.createShuru(data[i], i, obj);
        }
        return _this;
    }
    ParameterControl.prototype.createShuru = function (value, index, obj) {
        // console.log(obj[`${index}`]);
        if (value === void 0) { value = 100; }
        var text = new egret.TextField();
        text.width = 70;
        text.height = 30;
        text.y = this._Y;
        text.text = "" + value;
        this.addChild(text);
        var text2 = new egret.TextField();
        text2.width = 150;
        text2.height = 30;
        text2.x = -260;
        text2.y = this._Y;
        text2.text = "" + index;
        this.addChild(text2);
        var add1 = this.addBtn(this, "A_png", -100, this._Y);
        add1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.increase.bind(this, text, -1, index, obj, false), this);
        var add10 = this.addBtn(this, "B_png", -66, this._Y);
        add10.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.increase.bind(this, text, -10, index, obj, false), this);
        var add50 = this.addBtn(this, "C_png", -33, this._Y);
        add50.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.increase.bind(this, text, -50, index, obj, false), this);
        var reduce1 = this.addBtn(this, "C_png", 73, this._Y);
        reduce1.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.increase.bind(this, text, 1, index, obj, false), this);
        var reduce10 = this.addBtn(this, "B_png", 106, this._Y);
        reduce10.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.increase.bind(this, text, 10, index, obj, false), this);
        var reduce50 = this.addBtn(this, "A_png", 139, this._Y);
        reduce50.addEventListener(egret.TouchEvent.TOUCH_BEGIN, this.increase.bind(this, text, 50, index, obj, false), this);
        this._Y += 40;
    };
    ParameterControl.prototype.addBtn = function (node, path, x, y, anchorCenterFlag) {
        if (anchorCenterFlag === void 0) { anchorCenterFlag = false; }
        var btn = new egret.Bitmap;
        btn.texture = RES.getRes(path);
        node.addChild(btn);
        if (anchorCenterFlag) {
            btn.anchorOffsetX = btn.width / 2;
            btn.anchorOffsetY = btn.height / 2;
        }
        btn.x = x;
        btn.y = y;
        btn.scaleX = 30 / btn.width;
        btn.scaleY = 30 / btn.height;
        btn.$setTouchEnabled(true);
        return btn;
    };
    ParameterControl.prototype.increase = function (value, addNum, index, obj) {
        var num = parseInt(value.text) + addNum;
        if (num > 500) {
            num = 500;
        }
        else if (num < 0) {
            num = 0;
        }
        value.text = num;
        obj["" + index] = num;
        obj.initPlus();
    };
    return ParameterControl;
}(egret.DisplayObjectContainer));
__reflect(ParameterControl.prototype, "ParameterControl");
//# sourceMappingURL=ParameterControl.js.map