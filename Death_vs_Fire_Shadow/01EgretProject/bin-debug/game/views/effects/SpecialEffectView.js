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
var SpecialEffectView = (function (_super) {
    __extends(SpecialEffectView, _super);
    function SpecialEffectView(param1) {
        var _this = _super.call(this, param1) || this;
        return _this;
    } // end function
    SpecialEffectView.prototype.setTarget = function (param1) {
        var _loc_2 = null;
        this._target = param1;
        if (this._data.targetColorOffset) {
            _loc_2 = new ColorTransform();
            _loc_2.r = this._data.targetColorOffset[0];
            _loc_2.g = this._data.targetColorOffset[1];
            _loc_2.b = this._data.targetColorOffset[2];
            UI.setMovieColor(this._target.getDisplay(), _loc_2);
        }
        return;
    }; // end function
    SpecialEffectView.prototype.start = function (param1, param2, param3) {
        if (param1 === void 0) { param1 = 0; }
        if (param2 === void 0) { param2 = 0; }
        if (param3 === void 0) { param3 = 1; }
        _super.prototype.start.call(this, param1, param2, param3);
        this._finished = false;
        return;
    }; // end function
    SpecialEffectView.prototype.render = function () {
        _super.prototype.render.call(this);
        if (this._finished) {
            return;
        }
        var _loc1_ = this._target.actionState;
        if (23 !== _loc1_) {
            if (24 !== _loc1_) {
                if (0 !== _loc1_) {
                    this.setPos(this._target.x, this._target.y);
                }
                return;
            }
        }
        this.gotoAndPlay("finish");
        this._finished = true;
        if (this._data.targetColorOffset) {
            UI.setMovieColor(this._target.getDisplay(), _loc_2);
            var _loc_2 = new ColorTransform();
            _loc_2.r = this._data.targetColorOffset[0];
            _loc_2.g = this._data.targetColorOffset[1];
            _loc_2.b = this._data.targetColorOffset[2];
            UI.setMovieColor(this._target.getDisplay(), _loc_2);
        }
        return;
    }; // end function
    return SpecialEffectView;
}(EffectView));
__reflect(SpecialEffectView.prototype, "SpecialEffectView");
//# sourceMappingURL=SpecialEffectView.js.map