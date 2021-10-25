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
/**
 * Created by ASUS on 15-2-9.
 */
var zmovie;
(function (zmovie) {
    var ZImage = (function (_super) {
        __extends(ZImage, _super);
        function ZImage(t, heroResName, picName, isBodyFlag2) {
            if (heroResName === void 0) { heroResName = null; }
            if (picName === void 0) { picName = null; }
            var _this = _super.call(this) || this;
            _this.img = new egret.Bitmap();
            _this.addChild(_this.img);
            _this.isBodyFlag = isBodyFlag2;
            _this.setTexture(t, heroResName, picName, isBodyFlag2);
            return _this;
        }
        ZImage.prototype.setTexture = function (t, heroResName, picName, isBodyFlag2) {
            if (heroResName === void 0) { heroResName = null; }
            if (picName === void 0) { picName = null; }
            this.heroResHome = heroResName;
            this.picResHome = picName;
            this.isBodyFlag = isBodyFlag2;
            if (!isBodyFlag2) {
                this.img.texture = t;
                return;
            }
            if (heroResName.substr(0, 4) == "role") {
                var i = 0;
                var isChange = false;
                while (RES.getRes(heroResName + "00" + i + "_json")) {
                    if (RES.getRes(heroResName + "00" + i + "_json").getTexture(heroResName + "_" + picName)) {
                        this.img.texture = RES.getRes(heroResName + "00" + i + "_json").getTexture(heroResName + "_" + picName);
                        this.img.anchorOffsetY = 20;
                        this.img.anchorOffsetX = 20;
                        isChange = true;
                        break;
                    }
                    else if (RES.getRes(heroResName + "00" + i + "_json").getTexture(heroResName + "_e_" + picName)) {
                        this.img.texture = RES.getRes(heroResName + "00" + i + "_json").getTexture(heroResName + "_e_" + picName);
                        isChange = true;
                        break;
                    }
                    i++;
                }
                if (!isChange) {
                    this.img.texture = t;
                }
            }
            else if (heroResName.substr(0, 7) == "effect") {
                var i = 0;
                var isChange = false;
                while (RES.getRes(heroResName + "00" + i + "_json")) {
                    if (RES.getRes(heroResName + "00" + i + "_json").getTexture(heroResName + "_" + picName)) {
                        this.img.texture = RES.getRes(heroResName + "00" + i + "_json").getTexture(heroResName + "_" + picName);
                        this.img.anchorOffsetY = 20;
                        this.img.anchorOffsetX = 20;
                        isChange = true;
                        break;
                    }
                    else if (RES.getRes(heroResName + "00" + i + "_json").getTexture(heroResName + "_e_" + picName)) {
                        this.img.texture = RES.getRes(heroResName + "00" + i + "_json").getTexture(heroResName + "_e_" + picName);
                        isChange = true;
                        break;
                    }
                    i++;
                }
                if (!isChange) {
                    this.img.texture = t;
                }
            }
            else {
                if (heroResName.substr(0, 4) == "assi" && RES.getRes(heroResName + "_" + picName + "_png")) {
                    this.img.texture = RES.getRes(heroResName + "_" + picName + "_png");
                }
                else {
                    this.img.texture = t;
                }
            }
        };
        ZImage.prototype.setScale = function (s) {
            if (!this.isBodyFlag) {
                this.img.scaleX = 1 / s;
                this.img.scaleY = 1 / s;
                return;
            }
            if (this.heroResHome.substr(0, 4) == "role") {
                var i = 0;
                var isChange = false;
                while (RES.getRes(this.heroResHome + "00" + i + "_json")) {
                    if (RES.getRes(this.heroResHome + "00" + i + "_json").getTexture(this.heroResHome + "_" + this.picResHome)) {
                        this.img.scaleX = 1 / s * 0.5;
                        this.img.scaleY = 1 / s * 0.5;
                        isChange = true;
                        break;
                    }
                    else if (RES.getRes(this.heroResHome + "00" + i + "_json").getTexture(this.heroResHome + "_e_" + this.picResHome)) {
                        this.img.scaleX = 1 / s;
                        this.img.scaleY = 1 / s;
                        isChange = true;
                        break;
                    }
                    i++;
                }
                if (!isChange) {
                    this.img.scaleX = 1 / s;
                    this.img.scaleY = 1 / s;
                }
            }
            else {
                if (this.heroResHome.substr(0, 4) == "assi" && RES.getRes(this.heroResHome + "_" + this.picResHome + "_png")) {
                    this.img.scaleX = 1 / s * 0.25;
                    this.img.scaleY = 1 / s * 0.25;
                }
                else {
                    this.img.scaleX = 1 / s;
                    this.img.scaleY = 1 / s;
                }
            }
        };
        return ZImage;
    }(egret.DisplayObjectContainer));
    zmovie.ZImage = ZImage;
    __reflect(ZImage.prototype, "zmovie.ZImage");
})(zmovie || (zmovie = {}));
//# sourceMappingURL=ZImage.js.map