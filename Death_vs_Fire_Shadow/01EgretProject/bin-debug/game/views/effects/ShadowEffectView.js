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
var ShadowEffectView = (function (_super) {
    __extends(ShadowEffectView, _super);
    function ShadowEffectView(param1, param2, param3, param4) {
        if (param2 === void 0) { param2 = 0; }
        if (param3 === void 0) { param3 = 0; }
        if (param4 === void 0) { param4 = 0; }
        var _this = _super.call(this) || this;
        _this.r = 0;
        _this.g = 0;
        _this.b = 0;
        _this._alphaLose = 0.1;
        _this._alphaStart = 0.8;
        _this._addBpGap = 1;
        _this._addBpFrame = 0;
        _this._bps = new Array();
        _this.target = param1;
        _this.r = param2;
        _this.g = param3;
        _this.b = param4;
        _this._addBpFrame = 0;
        return _this;
    } // end function
    ShadowEffectView.prototype.destory = function () {
        var _loc_2 = 0;
        var _loc_1 = null;
        this.target = null;
        while (_loc_2 < this._bps.length) {
            _loc_1 = this._bps[_loc_2];
            _loc_1.$bitmapData.$dispose();
            try {
                this.container.removeChild(_loc_1);
            }
            catch (error) {
            }
            _loc_2++;
        }
        this._bps = null;
        return;
    }; // end function
    ShadowEffectView.prototype.render = function () {
        var _loc_2 = 0;
        var _loc_1 = null;
        if (this.stopShadow) {
            if (this._bps.length <= 0) {
                this.removeSelf();
            }
        }
        else {
            this._addBpFrame = this._addBpFrame + 1;
            if (this._addBpFrame > this._addBpGap) {
                this.addShadowBp();
                this._addBpFrame = 0;
            }
        }
        while (_loc_2 < this._bps.length) {
            _loc_1 = this._bps[_loc_2];
            _loc_1.alpha = _loc_1.alpha - this._alphaLose;
            if (_loc_1.alpha <= 0) {
                this.removeBitmap(_loc_1);
            }
            _loc_2++;
        }
        return;
    }; // end function
    ShadowEffectView.prototype.addShadowBp = function () {
        var _loc_3 = null;
        if (this.r != 0 || this.g != 0 || this.b != 0) {
            _loc_3 = new ColorTransform();
            _loc_3.r = this.r;
            _loc_3.g = this.g;
            _loc_3.b = this.b;
        }
        var _loc_2 = this.target.getBounds();
        var aa = new egret.Bitmap();
        var _loc_1 = KyoUtils.drawDisplay(this.target, true, true, 0, _loc_3);
        if (_loc_1 == null) {
            return;
        }
        _loc_1.alpha = this._alphaStart;
        _loc_1.x = this.target.x;
        _loc_1.y = this.target.y;
        _loc_1.width = this.target.width;
        _loc_1.height = this.target.height;
        _loc_1.anchorOffsetX = this.target.anchorOffsetX;
        _loc_1.anchorOffsetY = this.target.anchorOffsetY;
        _loc_1.scaleX = this.target.scaleX;
        _loc_1.scaleY = this.target.scaleY;
        //this.container.addChildAt(_loc_1, 0);
        this.target.parent.addChild(_loc_1);
        this._bps.push(_loc_1);
        return;
    }; // end function
    ShadowEffectView.prototype.removeBitmap = function (param1) {
        var _loc_2 = this._bps.indexOf(param1);
        if (_loc_2 != -1) {
            this._bps.splice(_loc_2, 1);
        }
        try {
            this.target.parent.removeChild(param1);
        }
        catch (e) {
        }
        if (param1.$bitmapData) {
            //param1.$bitmapData.$dispose();
        }
        return;
    }; // end function
    ShadowEffectView.prototype.removeSelf = function () {
        if (this.onRemove != null) {
            this.onRemove(this);
        }
        return;
    }; // end function
    return ShadowEffectView;
}(egret.DisplayObjectContainer));
__reflect(ShadowEffectView.prototype, "ShadowEffectView");
//# sourceMappingURL=ShadowEffectView.js.map