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
var Eat = (function (_super) {
    __extends(Eat, _super);
    function Eat() {
        var _this = _super.call(this) || this;
        UI.addPic("eat_png", true, _this);
        return _this;
    }
    Eat.prototype.doAnimation = function () {
        var loc1 = -1;
        if (this.col >= 4) {
            loc1 = 1;
        }
        this._vx = 3;
        this._vr = 0.1;
        if (loc1 == -1) {
            this._vx = -3;
            this._vr = -0.1;
        }
        this._count = 0;
        this._vy = Math.random() * -4;
        GameRender.I.Add(this, this.update);
        SoundCtrl.I.playmusic("brickthrow");
        return;
    };
    Eat.prototype.zoom = function () {
        return;
    };
    Eat.prototype.zoomOutIn = function () {
        this.scaleX = 0;
        this.scaleY = 0;
        egret.Tween.get(this).to({ "scaleX": 1, "scaleY": 1 }, 100);
        return;
    };
    Eat.prototype.zoomIn = function () {
        this.scaleX = 0;
        this.scaleY = 0;
        egret.Tween.get(this).to({ "scaleX": 1, "scaleY": 1 }, 200);
        return;
    };
    Eat.prototype.update = function () {
        var loc = 0;
        while (loc < 2) {
            this.x = this.x + this._vx;
            this.y = this.y + this._vy;
            this._vy = this._vy + 0.5;
            this.rotation = this.rotation + this._vr;
            loc++;
        }
        this._count = this._count + 1;
        if (this._count > 60) {
            GameRender.I.Remove(this);
            Eat.pool.put(this);
            this.parent.removeChild(this);
        }
        return;
    };
    Eat.prototype.reset = function () {
        this.rotation = 0;
        return;
    };
    Eat.pool = new BasePool(Eat, 10);
    return Eat;
}(Elements));
__reflect(Eat.prototype, "Eat");
//# sourceMappingURL=Eat.js.map