var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var UI = (function () {
    function UI() {
    }
    UI.getEffectStr = function (str2, num) {
        if (num === void 0) { num = 6; }
        var str = [];
        for (var i = 0; i <= num; i++) {
            str.push(str2 + i + "_json");
        }
        return str;
    };
    //
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
    UI.numberBetween = function (param1, param2, param3) {
        if (param3 === void 0) { param3 = false; }
        var _loc_4;
        if (!param3) {
            _loc_4 = param1 + Math.random() * (param2 - param1);
        }
        else {
            if (param2 >= param1) {
                _loc_4 = param1 + Math.random() * ((param2 + 1) - param1);
            }
            else {
                _loc_4 = param2 + Math.random() * ((param1 + 1) - param2);
            }
            _loc_4 = Math.floor(_loc_4);
        }
        return _loc_4;
    }; // end function
    UI.getEffectMovie = function (param) {
        var effect_lst = [
            "chunli", "Igniz", "iori", "k_", "kula", "kyo", "mai", "moriya", "orochi", "ryu", "terry",
            "fire", "hit", "wave", "bgEff", "superface"
        ];
        for (var i = 0; i < effect_lst.length; i++) {
            if (param.substr(0, effect_lst[i].length) == effect_lst[i]) {
                var str = effect_lst[i];
                if (str == "k_") {
                    str = "k";
                }
                var effectNmbb = "effect_" + str;
                var effect_mc_1 = new zmovie.ZMovieClip(this.getEffectStr(effectNmbb), RES.getRes(effectNmbb + "_json"), param);
                return effect_mc_1;
            }
        }
        var effectNm = "effect_other";
        var effect_mc = new zmovie.ZMovieClip(this.getEffectStr(effectNm), RES.getRes(effectNm + "_json"), param);
        return effect_mc;
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
    UI.getAtan_angleOfLine = function (x1, y1, x2, y2) {
        var der_x = x2 - x1;
        var der_y = y2 - y1;
        return Math.atan(der_y / der_x);
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
    UI.setUIImageColor = function (image, color) {
        // 将16进制颜色分割成rgb值, 小游戏太耗资源
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
    UI.setNormal = function (image) {
        image.filters = null;
    };
    UI.setGray = function (image) {
        var colorMatrix = [
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0, 0, 0, 1, 0
        ];
        var colorFilter = new egret.ColorMatrixFilter(colorMatrix);
        image.filters = [colorFilter];
    };
    //增加按钮
    UI.addBtn = function (node, path, x, y, anchorCenterFlag, listener, mc, scale, sound) {
        if (anchorCenterFlag === void 0) { anchorCenterFlag = false; }
        if (mc === void 0) { mc = null; }
        if (scale === void 0) { scale = 1; }
        if (sound === void 0) { sound = 'click'; }
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
            btn.scaleX = 1.05 * scale;
            btn.scaleY = 1.05 * scale;
        }, node);
        btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (arg) {
            btn.scaleX = 1 * scale;
            btn.scaleY = 1 * scale;
        }, node);
        btn.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
            btn.scaleX = 1 * scale;
            btn.scaleY = 1 * scale;
            if (listener != null) {
                if (mc)
                    listener.call(mc, mc);
                else
                    listener.call(node, node);
            }
            Sound.getInstance().oneTimesPlay(sound);
        }, node);
        btn.scaleX = scale;
        btn.scaleY = scale;
        btn.$setTouchEnabled(true);
        return btn;
    };
    //
    UI.addBtnTouch = function (node, path, x, y, anchorCenterFlag, listenerTouch, listenerRelease, scale) {
        if (anchorCenterFlag === void 0) { anchorCenterFlag = false; }
        if (scale === void 0) { scale = 1; }
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
            btn.scaleX = 1.1 * scale;
            btn.scaleY = 1.1 * scale;
            if (listenerTouch)
                listenerTouch.call(node, node);
        }, node);
        btn.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (arg) {
            btn.scaleX = 1 * scale;
            btn.scaleY = 1 * scale;
            if (listenerRelease)
                listenerRelease.call(node, node);
        }, node);
        btn.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
            btn.scaleX = 1 * scale;
            btn.scaleY = 1 * scale;
            if (listenerRelease)
                listenerRelease.call(node, node);
        }, node);
        btn.scaleX = scale;
        btn.scaleY = scale;
        btn.$setTouchEnabled(true);
        return btn;
    };
    UI.addPicPath = function (node, path, x, y, bottormFlag, scale) {
        if (bottormFlag === void 0) { bottormFlag = true; }
        if (scale === void 0) { scale = 1; }
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
            image.scaleX = scale;
            image.scaleY = scale;
            return image;
        }, this);
        loader.load(path);
    };
    //增加图片
    UI.addPic = function (node, path, x, y, anchorCenterFlag, scale) {
        if (anchorCenterFlag === void 0) { anchorCenterFlag = false; }
        if (scale === void 0) { scale = 1; }
        var image = new egret.Bitmap;
        image.texture = RES.getRes(path);
        node.addChild(image);
        image.x = x;
        image.y = y;
        image.scaleX = scale;
        image.scaleY = scale;
        if (anchorCenterFlag) {
            image.anchorOffsetX = image.width / 2;
            image.anchorOffsetY = image.height / 2;
        }
        return image;
    };
    UI.addJsonPic = function (node, json, path, x, y, anchorCenterFlag, scale) {
        if (anchorCenterFlag === void 0) { anchorCenterFlag = false; }
        if (scale === void 0) { scale = 1; }
        var image = new egret.Bitmap;
        image.texture = RES.getRes(json).getTexture(path);
        node.addChild(image);
        image.x = x;
        image.y = y;
        image.scaleX = scale;
        image.scaleY = scale;
        if (anchorCenterFlag) {
            image.anchorOffsetX = image.width / 2;
            image.anchorOffsetY = image.height / 2;
        }
        return image;
    };
    UI.addIconsPic = function (node, path, x, y, anchorCenterFlag, scale) {
        if (anchorCenterFlag === void 0) { anchorCenterFlag = false; }
        if (scale === void 0) { scale = 1; }
        var image = new egret.Bitmap;
        image.texture = RES.getRes("icons_json").getTexture(path);
        node.addChild(image);
        image.x = x;
        image.y = y;
        image.scaleX = scale;
        image.scaleY = scale;
        if (anchorCenterFlag) {
            image.anchorOffsetX = image.width / 2;
            image.anchorOffsetY = image.height / 2;
        }
        return image;
    };
    UI.setText = function (t, size, color) {
        t.textColor = color;
        t.size = size;
    };
    //增加文本
    UI.addText = function (node, desc, x, y, anchorCenterFlag, size, color) {
        if (anchorCenterFlag === void 0) { anchorCenterFlag = false; }
        if (size === void 0) { size = 0; }
        if (color === void 0) { color = 0; }
        var label = new egret.TextField();
        label.text = desc;
        label.textColor = 0x000000;
        node.addChild(label);
        label.x = x;
        label.y = y;
        if (size != 0) {
            label.size = size;
        }
        if (color != 0) {
            label.textColor = color;
        }
        if (anchorCenterFlag) {
            label.anchorOffsetX = label.width / 2;
            label.anchorOffsetY = label.height / 2;
        }
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
    UI.addClickAction = function (node, bb, listenerTouch, mc, sound) {
        if (mc === void 0) { mc = null; }
        if (sound === void 0) { sound = 'click'; }
        var scaleX = bb.scaleX;
        var scaleY = bb.scaleY;
        bb.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function (arg) {
            bb.scaleX = scaleX * 1.2;
            bb.scaleX = scaleY * 1.2;
        }, this);
        bb.addEventListener(egret.TouchEvent.TOUCH_RELEASE_OUTSIDE, function (arg) {
            bb.scaleX = 1;
            bb.scaleY = 1;
            if (mc != null)
                listenerTouch.apply(mc, mc);
            else
                listenerTouch.apply(node, node);
        }, node);
        bb.addEventListener(egret.TouchEvent.TOUCH_END, function (arg) {
            bb.scaleX = 1;
            bb.scaleY = 1;
            if (mc != null)
                listenerTouch.apply(mc, mc);
            else
                listenerTouch.apply(node, node);
            Sound.getInstance().oneTimesPlay(sound);
        }, node);
        bb.$setTouchEnabled(true);
    };
    UI.addBg = function (node, path) {
        // UI.addPic(node, "bg_jpg", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        // let black: egret.Bitmap = UI.addPic(node, "background_png", UI.WINSIZE_W / 2, UI.WINSIZE_H);
        // black.scaleX = 30;
        // black.scaleY = 170 / 40;
        // black.anchorOffsetX = 20;
        // black.anchorOffsetY = 40;
        var bg = UI.addPic(node, path, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        var scale = (UI.WINSIZE_W / bg.width, UI.WINSIZE_H / bg.height);
        bg.scaleX = scale;
        bg.scaleY = scale;
        return bg;
    };
    //添加网络图片
    UI.addIconPic = function (node, url, x, y, scale) {
        var imgLoader = new egret.ImageLoader();
        egret.ImageLoader.crossOrigin = "anonymous";
        imgLoader.load(url);
        imgLoader.once(egret.Event.COMPLETE, function (e) {
            var texture = new egret.Texture();
            texture.bitmapData = e.currentTarget.data;
            //
            var img = new egret.Bitmap;
            img.texture = texture;
            node.addChild(img);
            img.x = x;
            img.y = y;
            img.scaleX = 62 / img.width;
            img.scaleY = 58 / img.height;
        }, this);
    };
    UI.WINSIZE_H = 0;
    UI.WINSIZE_W = 0;
    return UI;
}());
__reflect(UI.prototype, "UI");
//# sourceMappingURL=UI.js.map