var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UI = (function () {
    function UI() {
    }
    UI.BitmapData = function (width, height, trans, color) {
        var btn = new egret.Bitmap;
        btn.texture = RES.getRes("white_png");
        // btn.texture = RES.getRes("map_pubu_sky_jpg")
        btn.width = width;
        btn.height = height;
        if (trans)
            btn.alpha = 0;
        else
            btn.alpha = 1;
        UI.setImageColor(btn, color);
        return btn;
    };
    UI.getHeroMovieJson = function (heroName) {
        var Js_object = [];
        for (var i = 0; i < 8; i++) {
            var nm = heroName + i + "_json";
            if (RES.getRes(nm)) {
                Js_object.push(nm);
            }
            else {
                break;
            }
        }
        return Js_object;
    };
    //人物跟踪虚影
    UI.MovedShadow = function (param1, trans, color) {
        var hero = new zmovie.ZMovieClip(UI.getHeroMovieJson(param1._name), RES.getRes(param1._name + "_json"), "root");
        hero.gotoAndStop(param1.currFrame + 1);
        var hero1 = hero.$children[0];
        hero1.gotoAndStop(param1.$children[0].currFrame);
        if (trans) {
            hero.alpha = 0;
        }
        else {
            hero.alpha = 1;
        }
        UI.setImageColor(hero, color);
        return hero;
    };
    UI.RGB2HEX16 = function (R, G, B) {
        var result_string = new Array();
        var Map = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
        //result_string.push("0x");
        result_string.push(Map[(R / 16)]);
        result_string.push(Map[(R % 16)]);
        result_string.push(Map[(G / 16)]);
        result_string.push(Map[(G % 16)]);
        result_string.push(Map[(B / 16)]);
        result_string.push(Map[(B % 16)]);
        return Number(result_string);
    };
    UI.setMovieColor = function (image, color) {
        var colorMatrix = [
            1, 0, 0, 0, 0,
            0, 1, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 1, 0
        ];
        if (!color) {
            return;
        }
        colorMatrix[0] = color.r / 255;
        colorMatrix[6] = color.g / 255;
        colorMatrix[12] = color.b / 255;
        var colorFilter = new egret.ColorMatrixFilter(colorMatrix);
        image.filters = [colorFilter];
    };
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
        btn.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (arg) {
            btn.scaleX = 1.05;
            btn.scaleY = 1.05;
        }, node);
        btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (arg) {
            btn.scaleX = 1;
            btn.scaleY = 1;
        }, node);
        btn.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
            btn.scaleX = 1;
            btn.scaleY = 1;
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
    //增加文本
    UI.addText = function (node, desc, x, y) {
        var label = new egret.TextField();
        label.text = desc;
        label.textColor = 0x000000;
        node.addChild(label);
        label.x = x;
        label.y = y;
        return label;
    };
    UI.removeSelf = function (node) {
        node.parent.removeChild(node);
    };
    UI.addMovie = function (node, name, x, y, rootName) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        var movie = new zmovie.ZMovieClip(name + "0_json", RES.getRes(name + "_json"), rootName);
        node.addChild(movie);
        movie.x = x;
        movie.y = y;
        return movie;
    };
    UI.addClickAction = function (node, bb, listenerTouch) {
        var scaleX = bb.scaleX;
        var scaleY = bb.scaleY;
        bb.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (arg) {
            bb.scaleX = scaleX * 1.2;
            bb.scaleX = scaleY * 1.2;
        }, this);
        bb.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (arg) {
            bb.scaleX = 1;
            bb.scaleY = 1;
            listenerTouch.apply(0);
        }, node);
        bb.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
            bb.scaleX = 1;
            bb.scaleY = 1;
            listenerTouch.apply(0);
        }, node);
        bb.$setTouchEnabled(true);
    };
    UI.addStarling = function (node, name, x1, y1) {
        if (x1 === void 0) { x1 = 0; }
        if (y1 === void 0) { y1 = 0; }
        var swfData = RES.getRes(name + "_swf_json");
        var spriteSheet = RES.getRes(name + "_json");
        var assetsManager = new starlingswf.SwfAssetManager();
        assetsManager.addSpriteSheet("gamebg", spriteSheet);
        var swf = new starlingswf.Swf(swfData, assetsManager, 30);
        var sprite = swf.createMovie("mc_" + name);
        node.addChild(sprite);
        sprite.stop();
        sprite.x = x1;
        sprite.y = y1;
        return sprite;
    };
    UI.playSound = function (name) {
        var sound = new egret.Sound();
        sound.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
            sound.play(0, 1); //播放一次， 0， 0背景音乐 
        }, this);
        sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event) {
            // console.log("loaded error!");
        }, this);
        sound.load("resource/assets/sound/" + name + ".mp3");
    };
    UI.playMusic = function (name) {
        var sound = new egret.Sound();
        sound.addEventListener(egret.Event.COMPLETE, function loadOver(event) {
            sound.play(0, 0); //播放一次， 0， 0背景音乐 
        }, this);
        sound.addEventListener(egret.IOErrorEvent.IO_ERROR, function loadError(event) {
            // console.log("loaded error!");
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