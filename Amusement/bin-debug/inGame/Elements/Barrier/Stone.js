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
var Stone = (function (_super) {
    __extends(Stone, _super);
    function Stone() {
        var _this = _super.call(this) || this;
        _this.stone2 = UI.addPic("stone1_png", true, _this);
        _this.stone1 = UI.addPic("stone2_png", true, _this);
        return _this;
    }
    Object.defineProperty(Stone.prototype, "tileID", {
        get: function () {
            return this._tileID;
        },
        set: function (arg1) {
            this._tileID = arg1;
            this.setLife(2);
            return;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Stone.prototype, "life", {
        get: function () {
            return this._life;
        },
        enumerable: true,
        configurable: true
    });
    Stone.prototype.setLife = function (arg1, arg2) {
        if (arg2 === void 0) { arg2 = false; }
        this._life = arg1;
        if (this._life != 2) {
            if (this._life == 1) {
                this.stone1.visible = true;
                this.stone2.visible = false;
            }
        }
        else {
            this.stone1.visible = false;
            this.stone2.visible = true;
        }
        if (arg2) {
            var loc1 = new IceBombEffect();
            loc1.play();
            this.parent.addChild(loc1);
            loc1.x = this.x;
            loc1.y = this.y;
        }
        return;
    };
    Stone.pool = new BasePool(Stone, 20);
    return Stone;
}(Elements));
__reflect(Stone.prototype, "Stone");
//# sourceMappingURL=Stone.js.map