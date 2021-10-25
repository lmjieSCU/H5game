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
var Lock = (function (_super) {
    __extends(Lock, _super);
    function Lock() {
        var _this = _super.call(this) || this;
        _this.icon = UI.addPic("lock_png", true, _this);
        _this.icon.scaleX = 1.25;
        _this.icon.scaleY = 1.25;
        return _this;
    }
    Lock.prototype.doAnimation = function () {
        SoundCtrl.I.playmusic("lockboom");
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
        return;
    };
    Lock.prototype.update = function () {
        this.x = this.x + this._vx;
        this.y = this.y + this._vy;
        this._vy = this._vy + 0.5;
        this.rotation = this.rotation + this._vr;
        this._count = this._count + 1;
        if (this._count > 60) {
            GameRender.I.Remove(this);
            Lock.pool.put(this);
            this.parent.removeChild(this);
        }
        return;
    };
    Lock.pool = new BasePool(Lock, 10);
    return Lock;
}(Elements));
__reflect(Lock.prototype, "Lock");
//# sourceMappingURL=Lock.js.map