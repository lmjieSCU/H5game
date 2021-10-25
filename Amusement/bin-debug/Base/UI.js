var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**配置各显示对象显示属性 */
var UI = (function () {
    function UI() {
    }
    //增加图片
    UI.addPic = function (path, anchorCenterFlag, node, x, y) {
        if (anchorCenterFlag === void 0) { anchorCenterFlag = false; }
        if (node === void 0) { node = null; }
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        var image = new egret.Bitmap;
        image.texture = RES.getRes(path);
        if (node) {
            node.addChild(image);
        }
        if (anchorCenterFlag) {
            image.anchorOffsetX = image.width / 2;
            image.anchorOffsetY = image.height / 2;
        }
        image.x = x;
        image.y = y;
        return image;
    };
    UI.setXandY = function (image, x, y) {
        image.x = x;
        image.y = y;
    };
    UI.setscalXandY = function (image, x, y) {
        image.scaleX = x;
        image.scaleY = y;
    };
    UI.addBitText = function (node, desc, font, tag, x, y, scaleX, scaleY) {
        if (tag === void 0) { tag = false; }
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (scaleX === void 0) { scaleX = 1; }
        if (scaleY === void 0) { scaleY = 1; }
        var label = new egret.BitmapText();
        label.text = desc;
        label.font = RES.getRes(font);
        label.letterSpacing = -10;
        node.addChild(label);
        if (tag) {
            label.anchorOffsetX = label.width / 2;
            label.anchorOffsetY = label.height / 2;
        }
        label.x = x;
        label.y = y;
        label.scaleX = scaleX;
        label.scaleY = scaleY;
        return label;
    };
    //增加文本
    UI.addText = function (node, desc, tag, x, y) {
        if (tag === void 0) { tag = false; }
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        var label = new egret.TextField();
        label.text = desc;
        label.textColor = 0xffffff;
        label.fontFamily = "KaiTi";
        node.addChild(label);
        if (tag) {
            label.anchorOffsetX = label.width / 2;
            label.anchorOffsetY = label.height / 2;
        }
        label.x = x;
        label.y = y;
        return label;
    };
    UI.addClickAction = function (node, bb, listenerTouch) {
        var scaleX = bb.scaleX;
        var scaleY = bb.scaleY;
        bb.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (arg) {
            bb.scaleX = scaleX * 1.2;
            bb.scaleY = scaleY * 1.2;
        }, this);
        bb.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (arg) {
            bb.scaleX = scaleX;
            bb.scaleY = scaleY;
            listenerTouch.apply(node);
        }, node);
        bb.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
            bb.scaleX = scaleX;
            bb.scaleY = scaleY;
            listenerTouch.apply(node);
        }, node);
        bb.$setTouchEnabled(true);
    };
    UI.WINSIZE_H = 0;
    UI.WINSIZE_W = 0;
    return UI;
}());
__reflect(UI.prototype, "UI");
//# sourceMappingURL=UI.js.map