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
var Brick = (function (_super) {
    __extends(Brick, _super);
    function Brick() {
        var _this = _super.call(this) || this;
        _this.img = new egret.Bitmap();
        return _this;
    }
    Object.defineProperty(Brick.prototype, "life", {
        get: function () {
            return this._life;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Brick.prototype, "brickID", {
        get: function () {
            return this._brickID;
        },
        set: function (arg1) {
            this._brickID = arg1;
            switch (arg1) {
                case TileConst.BRICK2:
                    this.img.texture = RES.getRes("brick2_png");
                    this.img.anchorOffsetX = this.img.width / 2;
                    this.img.anchorOffsetY = this.img.height / 2;
                    this._life = 2;
                    break;
                case TileConst.BRICK:
                    this.img.texture = RES.getRes("brick1_png");
                    this.img.anchorOffsetX = this.img.width / 2;
                    this.img.anchorOffsetY = this.img.height / 2;
                    this._life = 1;
                    break;
            }
            this.addChild(this.img);
            return;
        },
        enumerable: true,
        configurable: true
    });
    Brick.prototype.loseLife = function () {
        var loc2 = null;
        var loc1 = -1;
        if (this.col >= 4) {
            loc1 = 1;
        }
        if (this._life != 2) {
            if (this._life == 1) {
                loc2 = BrickExp.pool.take();
                loc2.setInfo(1, loc1);
                loc2.x = this.x;
                loc2.y = this.y;
                this.parent.parent.addChild(loc2);
            }
        }
        else {
            this.img.texture = RES.getRes("brick1_png");
            loc2 = BrickExp.pool.take();
            loc2.setInfo(2, loc1);
            loc2.x = this.x;
            loc2.y = this.y;
            this.parent.parent.addChild(loc2);
        }
        --this._life;
        return;
    };
    Brick.pool = new BasePool(Brick, 50);
    return Brick;
}(Elements));
__reflect(Brick.prototype, "Brick");
//# sourceMappingURL=Brick.js.map