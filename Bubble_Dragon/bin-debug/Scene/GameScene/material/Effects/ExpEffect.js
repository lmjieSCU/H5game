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
var ExpEffect = (function (_super) {
    __extends(ExpEffect, _super);
    function ExpEffect() {
        var _this = _super.call(this) || this;
        _this.scale = [0.1, 0.2, 0.1, 0.1, 0.2, 0.2, 0.3, 0.3];
        _this.vx = [1, 1, 2, 1, 2, 1, 0.5, 2];
        _this.vy = [0.5, 2, 1, 2, 1, 0.6, 2, 1];
        _this.speed = 7;
        _this.renderFrame = 0;
        _this.imgs = [];
        for (var i = 0; i < 16; i++) {
            _this.imgs[i] = UI.addPic("res.exp1_res", true, _this);
            UI.setscalXandY(_this.imgs[i], _this.scale[i % 8] * 3, _this.scale[i % 8] * 3);
        }
        _this.Animation();
        return _this;
    }
    ExpEffect.prototype.Animation = function () {
        GameRender.I.Add(this, this.render);
        return;
    };
    ExpEffect.prototype.render = function () {
        this.renderFrame = this.renderFrame + 1;
        if (this.renderFrame >= 10) {
            GameRender.I.Remove(this);
            this.parent.removeChild(this);
        }
        for (var i = 0; i < 16; i++) {
            this.imgs[i].x = this.imgs[i].x + Math.cos(i / 8 * Math.PI) * this.speed * this.vx[i % 8];
            this.imgs[i].y = this.imgs[i].y + Math.sin(i / 8 * Math.PI) * this.speed * this.vy[i % 8];
        }
    };
    return ExpEffect;
}(Elements));
__reflect(ExpEffect.prototype, "ExpEffect");
//# sourceMappingURL=ExpEffect.js.map