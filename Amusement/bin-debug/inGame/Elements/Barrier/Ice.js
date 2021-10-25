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
var Ice = (function (_super) {
    __extends(Ice, _super);
    function Ice() {
        var _this = _super.call(this) || this;
        _this.ice1 = UI.addPic("sprite2_png", true, _this);
        _this.ice2 = UI.addPic("spritemid_png", true, _this);
        _this.ice3 = UI.addPic("sprite1_png", true, _this);
        _this.ice1.scaleY = 1.2;
        _this.ice1.scaleX = 1.2;
        _this.ice2.scaleY = 1.2;
        _this.ice2.scaleX = 1.2;
        _this.ice3.scaleY = 1.2;
        _this.ice3.scaleX = 1.2;
        return _this;
    }
    Object.defineProperty(Ice.prototype, "tileID", {
        get: function () {
            return this._tileID;
        },
        set: function (arg1) {
            this._tileID = arg1;
            switch (arg1) {
                case TileConst.ICE1:
                    this.setLife(1);
                    break;
                case TileConst.ICE2:
                    this.setLife(2);
                    break;
                case TileConst.ICE3:
                    this.setLife(3);
                    break;
            }
            return;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ice.prototype, "life", {
        get: function () {
            return this._life;
        },
        enumerable: true,
        configurable: true
    });
    Ice.prototype.setLife = function (arg1, arg2) {
        if (arg2 === void 0) { arg2 = false; }
        var loc1 = null;
        this._life = arg1;
        if (this._life != 3) {
            if (this._life != 2) {
                if (this._life == 1) {
                    this.ice1.visible = true;
                    this.ice2.visible = false;
                    this.ice3.visible = false;
                }
            }
            else {
                this.ice1.visible = false;
                this.ice2.visible = true;
                this.ice3.visible = false;
            }
        }
        else {
            this.ice1.visible = false;
            this.ice2.visible = false;
            this.ice3.visible = true;
        }
        if (arg2) {
            loc1 = new IceBombEffect();
            loc1.x = this.x - loc1.width * 1.2;
            loc1.y = this.y - loc1.height * 1.2;
            this.parent.addChild(loc1);
            loc1.play();
        }
        return;
    };
    Ice.pool = new BasePool(Ice, 20);
    return Ice;
}(Elements));
__reflect(Ice.prototype, "Ice");
//# sourceMappingURL=Ice.js.map