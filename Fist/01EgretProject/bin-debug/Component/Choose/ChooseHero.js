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
var ChooseHero = (function (_super) {
    __extends(ChooseHero, _super);
    function ChooseHero(resouce, x, y, wid, high) {
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.width = wid;
        _this.height = high;
        _this.heroResouce = resouce;
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        return _this;
    }
    ChooseHero.prototype.onEnter = function () {
        this.hero = UI.addPic(this, this.heroResouce, this.width / 2, this.height / 2, true);
        // this.hero.scaleX = this.width/this.hero.width;
        // this.hero.scaleY = this.height/this.hero.height;
    };
    ChooseHero.prototype.changeHero = function (resouce) {
        this.hero.$setTexture(RES.getRes(resouce));
        // this.hero.scaleX = this.width/this.hero.width;
        // this.hero.scaleY = this.height/this.hero.height;
        this.hero.anchorOffsetX = this.hero.width / 2;
        this.hero.anchorOffsetY = this.hero.height / 2;
        this.hero.x = -this.hero.width / 2;
        egret.Tween.get(this.hero).to({ x: this.width / 2 }, 300, egret.Ease.sineIn);
    };
    return ChooseHero;
}(egret.DisplayObjectContainer));
__reflect(ChooseHero.prototype, "ChooseHero", ["egret.DisplayObject"]);
//# sourceMappingURL=ChooseHero.js.map