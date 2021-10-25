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
var ChooseNumber = (function (_super) {
    __extends(ChooseNumber, _super);
    function ChooseNumber(length, x, y, anchorCenterFlag) {
        if (anchorCenterFlag === void 0) { anchorCenterFlag = false; }
        var _this = _super.call(this) || this;
        _this.choose = [];
        _this.scroll = [];
        _this.len = length;
        _this.x = x;
        _this.y = y;
        _this.anchorCenterFlag = anchorCenterFlag;
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        return _this;
    }
    ChooseNumber.prototype.onEnter = function () {
        for (var i = 0; i < this.len; i++) {
            this.choose.push(0);
            var num = new egret.DisplayObjectContainer();
            for (var j = 1; j <= 9; j++) {
                var i_1 = UI.addPic(num, "number" + j + "_png", 0, 0, true);
                i_1.y = (9.5 - j) * i_1.height;
                i_1.anchorOffsetX = 0;
                this.picWidth = i_1.width;
                this.picHeight = i_1.height;
            }
            // this.addChild(num)
            num.height += this.picHeight;
            var scroll_1 = new ScrollView(num, this.picWidth, this.picHeight, (i + 0.5) * this.picWidth, 0, 1, 1, true, true);
            this.scroll.push(scroll_1);
            this.addChild(scroll_1);
            scroll_1.changeChild(0, 0);
        }
        if (this.anchorCenterFlag) {
            this.anchorOffsetX = this.width / 2;
            this.anchorOffsetY = this.height / 4;
        }
    };
    ChooseNumber.prototype.getNumber = function () {
        var _this = this;
        var count = 0;
        var len = this.choose.length;
        this.choose.map(function (data, index) {
            var i = _this.scroll[index].getChildNow();
            count += Math.pow(10, len - index - 1) * (i + 1);
        });
        return count;
    };
    return ChooseNumber;
}(egret.DisplayObjectContainer));
__reflect(ChooseNumber.prototype, "ChooseNumber", ["egret.DisplayObject"]);
//# sourceMappingURL=ChooseNumber.js.map