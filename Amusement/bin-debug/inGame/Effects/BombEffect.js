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
var BombEffect = (function (_super) {
    __extends(BombEffect, _super);
    function BombEffect() {
        var _this = _super.call(this) || this;
        var data = RES.getRes("candybomb_json");
        var txtr = RES.getRes("candybomb_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        _this.animation = new egret.MovieClip(mcFactory.generateMovieClipData("candybomb"));
        _this.animation.frameRate = 10;
        _this.animation.scaleY = 1.5;
        _this.animation.scaleX = 1.5;
        _this.animation.anchorOffsetX = _this.animation.width * 1.1;
        _this.animation.anchorOffsetY = _this.animation.height * 1.1;
        _this.addChild(_this.animation);
        return _this;
    }
    BombEffect.prototype.play = function () {
        this.animation.addEventListener(egret.Event.COMPLETE, this.onAnimationEnd, this);
        this.animation.gotoAndPlay(1);
        return;
    };
    BombEffect.prototype.onAnimationEnd = function (arg1) {
        this.animation.removeEventListener(egret.Event.COMPLETE, this.onAnimationEnd, this);
        this.parent.removeChild(this);
        BombEffect.pool.put(this);
        return;
    };
    BombEffect.pool = new BasePool(BombEffect, 10);
    return BombEffect;
}(Elements));
__reflect(BombEffect.prototype, "BombEffect");
//# sourceMappingURL=BombEffect.js.map