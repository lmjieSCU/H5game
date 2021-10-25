var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UI = (function () {
    function UI() {
    }
    UI.BitmapData = function (width, height, trans, color) {
        var btn = new egret.Bitmap;
        btn.texture = RES.getRes("white_png");
        btn.width = width;
        btn.height = height;
        if (trans)
            btn.alpha = 0;
        else
            btn.alpha = 1;
        UI.setImageColor(btn, color);
        return btn;
    };
    UI.RGB2HEX16 = function (R, G, B) {
        var result_string = new Array();
        var Map = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        result_string.push("0x");
        result_string.push(Map[(R / 16)]);
        result_string.push(Map[(R % 16)]);
        result_string.push(Map[(G / 16)]);
        result_string.push(Map[(G % 16)]);
        result_string.push(Map[(B / 16)]);
        result_string.push(Map[(B % 16)]);
        return Number(result_string);
    };
    //  public static setMovieColor(image: egret.DisplayObject, color: ColorTransform) {
    // 	 let colorMatrix = [
    // 		 1, 0, 0, 0, 0,
    // 		 0, 1, 0, 0, 0,
    // 		 0, 0, 1, 0, 0,
    // 		 0, 0, 0, 1, 0
    // 	 ];
    // 	 if(!color){
    // 		 return
    // 	 }
    // 	 colorMatrix[0] = color.r / 255;
    // 	 colorMatrix[6] = color.g / 255;
    // 	 colorMatrix[12] = color.b / 255;
    // 	 let colorFilter = new egret.ColorMatrixFilter(colorMatrix);
    // 	 image.filters = [colorFilter];
    //  }
    UI.setImageColor = function (image, color) {
        // 将16进制颜色分割成rgb值
        var spliceColor = function (color) {
            var result = { r: -1, g: -1, b: -1 };
            result.b = color % 256;
            result.g = Math.floor((color / 256)) % 256;
            result.r = Math.floor((color / 256) / 256);
            return result;
        };
        var result = spliceColor(color);
        var colorMatrix = [
            1, 0, 0, 0, 0,
            0, 1, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 1, 0
        ];
        colorMatrix[0] = result.r / 255;
        colorMatrix[6] = result.g / 255;
        colorMatrix[12] = result.b / 255;
        var colorFilter = new egret.ColorMatrixFilter(colorMatrix);
        image.filters = [colorFilter];
    };
    //增加按钮
    UI.addBtn = function (node, path, x, y, anchorCenterFlag, listener) {
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
        var scalex = btn.scaleX;
        var scaley = btn.scaleY;
        btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (arg) {
            btn.scaleX = 1.05 * scalex;
            btn.scaleY = 1.05 * scaley;
        }, node);
        btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (arg) {
            btn.scaleX = 1 * scalex;
            btn.scaleY = 1 * scaley;
        }, node);
        btn.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
            btn.scaleX = 1 * scalex;
            btn.scaleY = 1 * scaley;
            if (listener != null)
                listener.call(node);
        }, node);
        btn.$setTouchEnabled(true);
        return btn;
    };
    UI.addBtnTouch = function (node, path, x, y, anchorCenterFlag, listenerTouch, listenerRelease) {
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
        btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (arg) {
            btn.scaleX = 1.1;
            btn.scaleY = 1.1;
            listenerTouch.apply(0);
        }, node);
        btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (arg) {
            btn.scaleX = 1;
            btn.scaleY = 1;
            listenerRelease.apply(0);
        }, node);
        btn.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
            btn.scaleX = 1;
            btn.scaleY = 1;
            listenerRelease.apply(0);
        }, node);
        return btn;
    };
    UI.addPicPath = function (node, path, x, y, bottormFlag) {
        if (bottormFlag === void 0) { bottormFlag = true; }
        var loader = new egret.ImageLoader();
        loader.addEventListener(egret.Event.COMPLETE, function (arg) {
            var bitmapData = loader.data;
            var tt = new egret.Texture();
            tt.bitmapData = bitmapData;
            //
            var image = new egret.Bitmap;
            image.texture = tt;
            node.addChild(image);
            image.x = x;
            image.y = y;
            image.anchorOffsetX = 1068 / 2;
            image.anchorOffsetY = 480 / 2;
            if (bottormFlag) {
                node.setChildIndex(image, 0);
            }
            return image;
        }, this);
        loader.load(path);
    };
    //增加图片
    UI.addPic = function (node, path, x, y, anchorCenterFlag) {
        if (anchorCenterFlag === void 0) { anchorCenterFlag = false; }
        var image = new egret.Bitmap;
        image.texture = RES.getRes(path);
        node.addChild(image);
        image.x = x;
        image.y = y;
        if (anchorCenterFlag) {
            image.anchorOffsetX = image.width / 2;
            image.anchorOffsetY = image.height / 2;
        }
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
    //增加文本
    UI.addText = function (node, desc, x, y, tag) {
        if (tag === void 0) { tag = false; }
        var label = new egret.TextField();
        label.text = desc;
        label.textColor = 0xffffff;
        // label.fontFamily = "HeiTi";
        node.addChild(label);
        if (tag) {
            label.anchorOffsetX = label.width / 2;
            label.anchorOffsetY = label.height / 2;
        }
        label.x = x;
        label.y = y;
        return label;
    };
    UI.removeSelf = function (node) {
        node.parent.removeChild(node);
    };
    UI.addClickAction = function (node, bb, listenerTouch) {
        var scaleX = bb.scaleX;
        var scaleY = bb.scaleY;
        bb.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (arg) {
            bb.scaleX = scaleX * 1.2;
            bb.scaleX = scaleY * 1.2;
        }, this);
        bb.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (arg) {
            bb.scaleX = scaleX;
            bb.scaleY = scaleY;
            listenerTouch.apply(0);
        }, node);
        bb.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
            bb.scaleX = scaleX;
            bb.scaleY = scaleY;
            listenerTouch.apply(0);
        }, node);
        bb.$setTouchEnabled(true);
    };
    UI.playSound = function (name) {
        var sound = new egret.Sound();
        sound.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
            sound.play(0, 1); //播放一次， 0， 0背景音乐 
        }, this);
        sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event) {
            console.log("loaded error!");
        }, this);
        sound.load("resource/sounds/" + name + ".wav");
    };
    UI.playMusic = function (name) {
        var sound = new egret.Sound();
        sound.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
            sound.play(0, 0); //播放一次， 0， 0背景音乐 
        }, this);
        sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event) {
            console.log("loaded error!");
        }, this);
        sound.load("resource/assets/sound/" + name + ".mp3");
    };
    UI.saveItem = function (key, value) {
        egret.localStorage.setItem(key, value.toString());
    };
    UI.getItem = function (key) {
        var score = egret.localStorage.getItem(key);
        return Number(score);
    };
    UI.isFirstEntry = function () {
        var score = egret.localStorage.getItem("firstFlag_lian");
        UI.saveItem("firstFlag_lian", 1);
        var first = Number(score);
        if (first == 0)
            return true;
        else
            return false;
    };
    UI.WINSIZE_H = 0;
    UI.WINSIZE_W = 0;
    return UI;
}());
__reflect(UI.prototype, "UI");
//# sourceMappingURL=UI.js.map