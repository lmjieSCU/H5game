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
/**更改指定星星颜色 */
var ItemPaint = (function (_super) {
    __extends(ItemPaint, _super);
    function ItemPaint(star) {
        var _this = _super.call(this) || this;
        _this.father = star;
        star.stage.addChild(_this);
        _this.bg = UI.addPic(_this, "background_png", UI.WINSIZE_W / 2, star.y - 65, true);
        _this.red = UI.addPic(_this, "red_png", UI.WINSIZE_W * 2.5 / 10, star.y - 70, true);
        _this.yellow = UI.addPic(_this, "yellow_png", UI.WINSIZE_W * 3.5 / 10, star.y - 70, true);
        _this.green = UI.addPic(_this, "green_png", UI.WINSIZE_W * 4.5 / 10, star.y - 70, true);
        _this.blue = UI.addPic(_this, "blue_png", UI.WINSIZE_W * 5.5 / 10, star.y - 70, true);
        _this.purple = UI.addPic(_this, "purple_png", UI.WINSIZE_W * 6.5 / 10, star.y - 70, true);
        _this.returns = UI.addPic(_this, "return_png", UI.WINSIZE_W * 7.5 / 10, star.y - 70, true);
        _this.colorFun = {};
        for (var i = 0; i < _this.numChildren; i++) {
            _this.$children[i].$setTouchEnabled(true);
        }
        _this.addBtn();
        return _this;
    }
    ItemPaint.prototype.addBtn = function () {
        this.colorFun["red"] = this.TurnColor.bind(this, 2);
        this.colorFun["yellow"] = this.TurnColor.bind(this, 3);
        this.colorFun["green"] = this.TurnColor.bind(this, 4);
        this.colorFun["blue"] = this.TurnColor.bind(this, 5);
        this.colorFun["purple"] = this.TurnColor.bind(this, 6);
        this.red.addEventListener(egret.TouchEvent.TOUCH_END, this.colorFun["red"], this);
        this.yellow.addEventListener(egret.TouchEvent.TOUCH_END, this.colorFun["yellow"], this);
        this.green.addEventListener(egret.TouchEvent.TOUCH_END, this.colorFun["green"], this);
        this.blue.addEventListener(egret.TouchEvent.TOUCH_END, this.colorFun["blue"], this);
        this.purple.addEventListener(egret.TouchEvent.TOUCH_END, this.colorFun["purple"], this);
        this.returns.addEventListener(egret.TouchEvent.TOUCH_END, this.ReturnBack, this);
    };
    ItemPaint.prototype.TurnColor = function (color) {
        this.father.color = color;
        this.father.getChildBymcName("mv").getChildBymcName("mc").gotoAndStop(color);
        MainMoive.instance.caidan.DeleteJinbi(2, 2);
        this.ReturnBack();
    };
    ItemPaint.prototype.ReturnBack = function () {
        ItemModel.currentMode = ItemModel.NO_ITEM;
        MainMoive.instance.touchEnbled = true;
        MainMoive.instance.caidan.Animation("Paint", true);
        this.red.removeEventListener(egret.TouchEvent.TOUCH_END, this.colorFun["red"], this);
        this.yellow.removeEventListener(egret.TouchEvent.TOUCH_END, this.colorFun["yellow"], this);
        this.green.removeEventListener(egret.TouchEvent.TOUCH_END, this.colorFun["green"], this);
        this.blue.removeEventListener(egret.TouchEvent.TOUCH_END, this.colorFun["blue"], this);
        this.purple.removeEventListener(egret.TouchEvent.TOUCH_END, this.colorFun["purple"], this);
        this.returns.removeEventListener(egret.TouchEvent.TOUCH_END, this.ReturnBack, this);
        this.parent.removeChild(this);
    };
    return ItemPaint;
}(egret.DisplayObjectContainer));
__reflect(ItemPaint.prototype, "ItemPaint");
//# sourceMappingURL=ItemPaints.js.map