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
var NewHands = (function (_super) {
    __extends(NewHands, _super);
    function NewHands(x, y, wid, high, text, textX, textY, listener, node, point) {
        if (listener === void 0) { listener = null; }
        if (node === void 0) { node = null; }
        if (point === void 0) { point = 'lfet'; }
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.TouchEvent.REMOVED_FROM_STAGE, _this.destory, _this);
        _this.pointX = x;
        _this.pointY = y;
        _this.wid = wid;
        _this.high = high;
        _this.text = text;
        _this.listener = listener;
        _this.node = node;
        _this.textX = textX;
        _this.textY = textY;
        _this.point = point;
        return _this;
    }
    NewHands.prototype.onEnter = function () {
        this.createShape(0, 0, UI.WINSIZE_W, this.pointY);
        this.createShape(0, this.pointY, this.pointX, this.high);
        this.createShape(0, this.pointY + this.high, UI.WINSIZE_W, UI.WINSIZE_H - this.pointY - this.high);
        this.createShape(this.pointX + this.wid, this.pointY, UI.WINSIZE_W - this.pointX - this.wid, this.high);
        this.init();
    };
    NewHands.prototype.createShape = function (x, y, wid, high) {
        var shape = new egret.Shape();
        shape.graphics.beginFill(0x000000, 0.5);
        shape.graphics.drawRect(x, y, wid, high);
        shape.graphics.endFill();
        shape.touchEnabled = true;
        this.addChild(shape);
    };
    NewHands.prototype.init = function () {
        var text = UI.addText(this, this.text, this.textX, this.textY, true, 20, 0xffffff);
        var txt = UI.addPic(this, "Word_13_box_png", this.textX, this.textY, true);
        txt.scaleX = (text.width + 20) / txt.width;
        txt.scaleY = (text.height + 15) / txt.height;
        // if(this.pointY >= UI.WINSIZE_H - this.pointY - this.high) {
        //     txt.y = this.pointY - txt.height/2;
        // } else {
        //     txt.y = this.pointY + this.high + txt.height/2;
        // }
        // txt.x += txt.width/2;
        var doll = UI.addPic(this, "doll_png", this.pointX + this.wid / 2, this.pointY + this.high / 2, true);
        if (txt.x == doll.x || txt.y == doll.y) {
            var changeX = 0;
            var changeY = 0;
            if (doll.y == txt.y && doll.x < txt.x)
                changeX = -txt.width / 2 * txt.scaleX;
            else if (doll.y == txt.y && doll.x > txt.x)
                changeX = txt.width / 2 * txt.scaleX;
            else if (doll.x == txt.x && doll.y > txt.y)
                changeY = txt.height / 2 * txt.scaleY;
            else if (doll.x == txt.x && doll.y < txt.y)
                changeY = -txt.height / 2 * txt.scaleY;
            var line = UI.addPic(this, "line_png", (txt.x + doll.x + changeX) / 2, (txt.y + doll.y + changeY) / 2, true);
            line.scaleX = Math.abs(txt.x - doll.x + txt.y - doll.y + changeX + changeY) / line.width;
            line.rotation = txt.x == doll.x ? 90 : 0;
        }
        else {
            var centerX = void 0;
            var centerY = void 0;
            if (this.point == 'lfet') {
                centerX = txt.x > doll.x ? doll.x : txt.x;
                centerY = txt.x > doll.x ? txt.y : doll.y;
            }
            else {
                centerX = txt.x < doll.x ? doll.x : txt.x;
                centerY = txt.x < doll.x ? txt.y : doll.y;
            }
            var line1 = UI.addPic(this, "line_png", (centerX + doll.x) / 2, (centerY + doll.y) / 2, true);
            line1.scaleX = Math.abs(centerX - doll.x + centerY - doll.y) / line1.width;
            line1.rotation = centerX == doll.x ? 90 : 0;
            var changeX = 0;
            var changeY = 0;
            if (centerY == txt.y && centerX < txt.x)
                changeX = -txt.width / 2 * txt.scaleX;
            else if (centerY == txt.y && centerX > txt.x)
                changeX = txt.width / 2 * txt.scaleX;
            else if (centerX == txt.x && centerY > txt.y)
                changeY = txt.height / 2 * txt.scaleY;
            else if (centerX == txt.x && centerY < txt.y)
                changeY = -(txt.height - 10) / 2 * txt.scaleY;
            var line2 = UI.addPic(this, "line_png", (txt.x + centerX + changeX) / 2, (txt.y + centerY + changeY) / 2, true);
            line2.scaleX = Math.abs(txt.x - centerX + txt.y - centerY + changeX + changeY) / line2.width;
            line2.rotation = txt.x == centerX ? 90 : 0;
        }
        this.setChildIndex(doll, this.numChildren - 1);
        this.setChildIndex(txt, this.numChildren - 1);
    };
    NewHands.prototype.destory = function () {
        if (this.listener) {
            if (this.node) {
                this.listener.call(this.node, this.node);
            }
            else {
                this.listener.call(this, this);
            }
        }
    };
    return NewHands;
}(egret.DisplayObjectContainer));
__reflect(NewHands.prototype, "NewHands", ["egret.DisplayObject"]);
//# sourceMappingURL=NewHands.js.map