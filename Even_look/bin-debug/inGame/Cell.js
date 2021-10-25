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
/**供点击的水果单元 */
var Cell = (function (_super) {
    __extends(Cell, _super);
    function Cell() {
        var _this = this;
        var data = RES.getRes("Fruit_json");
        var txtr = RES.getRes("Fruit_png");
        var mcFactory = new egret.MovieClipDataFactory(data, txtr);
        _this = _super.call(this, mcFactory.generateMovieClipData("Fruit")) || this;
        _this.anchorOffsetX = _this.width / 2;
        _this.anchorOffsetY = _this.height / 2;
        _this.addEventListener(egret.TouchEvent.TOUCH_END, _this.focusOn, _this);
        _this.$setTouchEnabled(true);
        return _this;
    }
    Cell.prototype.init = function (dx, dy, typeid) {
        if (dx === void 0) { dx = 0; }
        if (dy === void 0) { dy = 0; }
        if (typeid === void 0) { typeid = 0; }
        this._dx = dx;
        this._dy = dy;
        this._typeid = typeid;
        GameCtrl.I.setposition(this, dx, dy);
        this.gotoAndStop(this._typeid);
    };
    Cell.prototype.getNPoint = function () {
        return new NPoint(this._dx, this._dy);
    };
    Object.defineProperty(Cell.prototype, "dx", {
        get: function () {
            return this._dx;
        },
        set: function (x) {
            this._dx = x;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "dy", {
        get: function () {
            return this._dy;
        },
        set: function (y) {
            this._dy = y;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Cell.prototype, "typeid", {
        get: function () {
            return this._typeid;
        },
        enumerable: true,
        configurable: true
    });
    Cell.prototype.focusOn = function () {
        if (this.stage == null) {
            return;
        }
        GameCtrl.I._gridCtrl.clickOneCell(this);
    };
    return Cell;
}(egret.MovieClip));
__reflect(Cell.prototype, "Cell");
//# sourceMappingURL=Cell.js.map