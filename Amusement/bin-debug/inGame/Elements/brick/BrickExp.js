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
/**Brick掉落动画
 * brick移去时生成brickExp
*/
var BrickExp = (function (_super) {
    __extends(BrickExp, _super);
    function BrickExp() {
        var _this = _super.call(this) || this;
        _this.img = new egret.Bitmap();
        return _this;
    }
    BrickExp.prototype.setInfo = function (life, arg2) {
        switch (life) {
            case 2:
                this.img.texture = RES.getRes("brick2_png");
                this.img.anchorOffsetX = this.img.width / 2;
                this.img.anchorOffsetY = this.img.height / 2;
                break;
            case 1:
                this.img.texture = RES.getRes("brick1_png");
                this.img.anchorOffsetX = this.img.width / 2;
                this.img.anchorOffsetY = this.img.height / 2;
                break;
        }
        this.addChild(this.img);
        this._vx = 6;
        this._vr = 0.1;
        if (arg2 == -1) {
            this._vx = -6;
            this._vr = -0.1;
        }
        this._count = 0;
        this._vy = Math.random() * -6;
        GameRender.I.Add(this, this.update);
        SoundCtrl.I.playmusic("brickthrow");
        return;
    };
    BrickExp.prototype.update = function () {
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
            BrickExp.pool.put(this);
            this.parent.removeChild(this);
        }
        return;
    };
    BrickExp.pool = new BasePool(BrickExp, 81);
    return BrickExp;
}(Elements));
__reflect(BrickExp.prototype, "BrickExp");
//# sourceMappingURL=BrickExp.js.map