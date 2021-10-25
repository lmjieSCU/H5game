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
var IceBombEffect = (function (_super) {
    __extends(IceBombEffect, _super);
    function IceBombEffect() {
        var _this = _super.call(this) || this;
        var data = RES.getRes("Iceboom_json");
        var txtr = RES.getRes("Iceboom_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        _this.animation = new egret.MovieClip(mcFactory.generateMovieClipData("Bomb"));
        _this.animation.frameRate = 10;
        _this.animation.scaleY = 1.5;
        _this.animation.scaleX = 1.5;
        // this.animation.anchorOffsetX = this.animation.width / 2;
        // this.animation.anchorOffsetY = this.animation.height / 2;
        _this.addChild(_this.animation);
        return _this;
    }
    IceBombEffect.prototype.play = function () {
        this.animation.addEventListener(egret.Event.COMPLETE, this.onAnimationEnd, this);
        this.animation.gotoAndPlay(1);
        return;
    };
    IceBombEffect.prototype.onAnimationEnd = function (arg1) {
        this.animation.removeEventListener(egret.Event.COMPLETE, this.onAnimationEnd, this);
        this.parent.removeChild(this);
        IceBombEffect.pool.put(this);
        return;
    };
    IceBombEffect.pool = new BasePool(IceBombEffect, 10);
    return IceBombEffect;
}(Elements));
__reflect(IceBombEffect.prototype, "IceBombEffect");
//# sourceMappingURL=IceBombEffect.js.map