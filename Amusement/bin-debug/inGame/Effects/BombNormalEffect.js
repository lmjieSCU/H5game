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
var BombNormalEffect = (function (_super) {
    __extends(BombNormalEffect, _super);
    function BombNormalEffect() {
        var _this = _super.call(this) || this;
        var data = RES.getRes("Bomb_json");
        var txtr = RES.getRes("Bomb_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        _this.animation = new egret.MovieClip(mcFactory.generateMovieClipData("Bomb"));
        _this.animation.frameRate = 10;
        _this.animation.scaleY = 1.5;
        _this.animation.scaleX = 1.5;
        _this.animation.anchorOffsetX = _this.animation.width * 1.1;
        _this.animation.anchorOffsetY = _this.animation.height * 1.1;
        _this.addChild(_this.animation);
        return _this;
    }
    BombNormalEffect.prototype.play = function () {
        this.animation.addEventListener(egret.Event.COMPLETE, this.onAnimationEnd, this);
        this.animation.gotoAndPlay(1);
        return;
    };
    BombNormalEffect.prototype.onAnimationEnd = function (arg1) {
        this.animation.removeEventListener(egret.Event.COMPLETE, this.onAnimationEnd, this);
        this.parent.removeChild(this);
        BombNormalEffect.pool.put(this);
        return;
    };
    BombNormalEffect.pool = new BasePool(BombNormalEffect, 10);
    return BombNormalEffect;
}(Elements));
__reflect(BombNormalEffect.prototype, "BombNormalEffect");
//# sourceMappingURL=BombNormalEffect.js.map