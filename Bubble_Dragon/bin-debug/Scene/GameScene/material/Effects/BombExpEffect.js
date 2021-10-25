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
var BombExpEffect = (function (_super) {
    __extends(BombExpEffect, _super);
    function BombExpEffect() {
        var _this = _super.call(this) || this;
        _this.index = 0;
        _this.bombwidth = 696;
        _this.bombheight = 587;
        _this.renderframe = 0;
        _this.image = UI.addPic("effect.bombexp_0", true, _this);
        GameRender.I.Add(_this, _this.playBomb);
        return _this;
    }
    BombExpEffect.prototype.playBomb = function () {
        this.renderframe = this.renderframe + 1;
        if (this.renderframe % 3 != 0) {
            return;
        }
        this.index = this.index + 1;
        if (this.index > 6) {
            this.index = 0;
            this.renderframe = 0;
            this.parent.removeChild(this);
            GameRender.I.Remove(this);
            return;
        }
        this.image.texture = RES.getRes("effect.bombexp_" + this.index);
        this.FreshLocation();
    };
    BombExpEffect.prototype.FreshLocation = function () {
        this.image.anchorOffsetX = this.image.width / 2;
        this.image.anchorOffsetY = this.image.height / 2;
        this.image.scaleX = this.bombwidth / this.image.width;
        this.image.scaleY = this.bombheight / this.image.height;
        return;
    };
    return BombExpEffect;
}(Elements));
__reflect(BombExpEffect.prototype, "BombExpEffect");
//# sourceMappingURL=BombExpEffect.js.map