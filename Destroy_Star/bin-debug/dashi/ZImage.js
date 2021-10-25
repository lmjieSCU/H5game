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
        function ZImage(t, heroResName, picName) {
            if (heroResName === void 0) { heroResName = null; }
            if (picName === void 0) { picName = null; }
            var _this = _super.call(this) || this;
            _this.img = new egret.Bitmap();
            _this.addChild(_this.img);
            _this.setTexture(t, heroResName, picName);
            return _this;
        }
        ZImage.prototype.isReplaceBitmap = function () {
            if (!this.heroResHome) {
                return 0;
            }
            if (this.heroResHome.substr(0, 4) == "hero"
                && (this.heroResHome == "hero_sasuke_xz"
                    || this.heroResHome == "hero_kakashi"
                    || this.heroResHome == "hero_orihime"
                    || this.heroResHome == "hero_konan"
                    || this.heroResHome == "hero_killerbee"
                    || this.heroResHome == "hero_chad"
                    || this.heroResHome == "hero_renji"
                    || this.heroResHome == "hero_sakura")) {
                if (RES.getRes(this.heroResHome + "_body_json").getTexture(this.heroResHome + "_" + this.picResHome)) {
                    return 3;
                }
            }
            if (this.heroResHome.substr(0, 4) == "hero" && RES.getRes(this.heroResHome + "_" + this.picResHome + "_png")) {
                return 2;
            }
            if (this.heroResHome.substr(0, 6) == "assist" && RES.getRes(this.heroResHome + "_" + this.picResHome + "_png")) {
                return 1;
            }
            if (this.heroResHome.substr(0, 4) == "map_" && RES.getRes(this.heroResHome + "_" + this.picResHome + "_png")) {
                return 1;
            }
            return 0;
        };
        ZImage.prototype.setTexture = function (t, heroResName, picName) {
            if (heroResName === void 0) { heroResName = null; }
            if (picName === void 0) { picName = null; }
            this.heroResHome = heroResName;
            this.picResHome = picName;
            ;
            var result = this.isReplaceBitmap();
            if (result == 3) {
                this.img.texture = RES.getRes(this.heroResHome + "_body_json").getTexture(this.heroResHome + "_" + this.picResHome);
            }
            else if (result > 0)
                this.img.texture = RES.getRes(heroResName + "_" + picName + "_png");
            else {
                this.img.texture = t;
            }
        };
        ZImage.prototype.setScale = function (s) {
            var result = this.isReplaceBitmap();
            if (result == 1 || result == 3) {
                this.img.scaleX = 1 / s * 0.5;
                this.img.scaleY = 1 / s * 0.5;
            }
            else if (result == 2) {
                this.img.scaleX = 1 / s * 0.25;
                this.img.scaleY = 1 / s * 0.25;
            }
            else {
                this.img.scaleX = 1 / s;
                this.img.scaleY = 1 / s;
            }
        };
        return ZImage;
    }(egret.DisplayObjectContainer));
    zmovie.ZImage = ZImage;
    __reflect(ZImage.prototype, "zmovie.ZImage");
})(zmovie || (zmovie = {}));
//# sourceMappingURL=ZImage.js.map