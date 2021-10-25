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
var ChooseMap = (function (_super) {
    __extends(ChooseMap, _super);
    function ChooseMap(map, x, y, width, height, listener, node) {
        if (listener === void 0) { listener = null; }
        if (node === void 0) { node = null; }
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        _this.listener = listener;
        _this.node = node;
        return _this;
    }
    ChooseMap.prototype.onEnter = function () {
        var _this = this;
        var wid = this.width;
        var high = this.height;
        var last = UI.addText(this, "last", 0, high / 2, true, 30, 0x000000);
        last.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.changeMap(-1);
        }, this);
        last.touchEnabled = true;
        var next = UI.addText(this, "next", wid, high / 2, true, 30, 0x000000);
        next.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            _this.changeMap(1);
        }, this);
        next.touchEnabled = true;
        var map = UI.addPic(this, "bg_" + this.map + "_1_png", wid / 2, high / 2, true);
        map.scaleX = wid / map.width;
        map.scaleY = high / map.height;
    };
    ChooseMap.prototype.changeMap = function (num) {
        this.map += num;
        if (this.map < 1)
            this.map = 1;
        if (this.map > 9)
            this.map = 9;
        var map = this.getChildAt(this.numChildren - 1);
        map.$setTexture(RES.getRes("bg_" + this.map + "_1_png"));
        map.scaleX = this.width / map.width;
        map.scaleY = this.height / map.height;
        map.anchorOffsetX = map.width / 2;
        map.anchorOffsetY = map.height / 2;
        // this._parent.playInfo.map = this.map;
        if (this.listener) {
            if (this.node) {
                this.listener.call(this.node, [this.map]);
            }
            else {
                this.listener.call(this, this, [this.map]);
            }
        }
        return this.map;
    };
    return ChooseMap;
}(egret.DisplayObjectContainer));
__reflect(ChooseMap.prototype, "ChooseMap", ["egret.DisplayObject"]);
//# sourceMappingURL=ChooseMap.js.map