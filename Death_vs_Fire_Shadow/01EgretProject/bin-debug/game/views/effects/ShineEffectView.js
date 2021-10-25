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
var ShineEffectView = (function (_super) {
    __extends(ShineEffectView, _super);
    function ShineEffectView() {
        var _this = _super.call(this) || this;
        _this.isActive = true;
        _this._loseAlpha = 1;
        _this._renderGap = 0;
        _this._skipFrameRate = 1.2;
        return _this;
    } // end function
    ShineEffectView.prototype.destory = function () {
        this._isDestoryed = true;
        if (this.isActive) {
            this.parent.removeChild(this);
        }
        return;
    }; // end function
    ShineEffectView.prototype.init = function (param1, param2) {
        if (param1 === void 0) { param1 = 16777215; }
        if (param2 === void 0) { param2 = 0.2; }
        if (this.$bitmapData) {
            //this.$bitmapData.$dispose();
            this.$setBitmapData(null);
        }
        this.texture = RES.getRes("white_png");
        UI.setImageColor(this, param1);
        // this.$setBitmapData(GameConfig.GApaME_SIZE.x / 10, GameConfig.GAME_SIZE.y / 10, false, param1);
        this.width = GameConfig.GAME_SIZE.x;
        this.height = GameConfig.GAME_SIZE.y;
        this.isActive = true;
        var _loc_3 = 8388607;
        if (param1 > _loc_3) {
            this.blendMode = egret.BlendMode.ADD;
        }
        else {
            this.blendMode = egret.BlendMode.ADD; // 原来是darken
            param2 = param2 * 0.8;
        }
        this.alpha = param2;
        this._alpha = param2 * 100;
        this._renderFrame = 0;
        this._renderGap = Math.ceil(GameConfig.FPS_GAME / GameConfig.FPS_SHINE_EFFECT) - 1;
        this._startTimer = 0;
        this._loseAlpha = this._renderGap + 1;
        this._frameTime = 1000 / GameConfig.FPS_SHINE_EFFECT;
        return;
    }; // end function
    ShineEffectView.prototype.render = function () {
        if (this._isDestoryed) {
            return;
        }
        if (this._renderGap > 0) {
            this._renderFrame = (this._renderFrame + 1);
            if (this._renderFrame % this._renderGap != 0) {
                return;
            }
        }
        this.skipFrame();
        this._alpha = this._alpha - this._loseAlpha;
        if (this._alpha <= 3) {
            if (this.parent) {
                this.removeSelf();
                //this.parent.removeChild(this);
            }
        }
        else {
            this.alpha = this._alpha * 0.01;
        }
        return;
    }; // end function
    ShineEffectView.prototype.skipFrame = function () {
        var _loc_3 = 0;
        var _loc_1 = NaN;
        var _loc_2 = 0;
        if (this._startTimer != 0) {
            _loc_3 = egret.getTimer() - this._startTimer;
            _loc_1 = _loc_3 / this._frameTime;
            if (_loc_1 > 1.2) {
                _loc_2 = Math.ceil(this._loseAlpha * _loc_1);
                if (this._loseAlpha < _loc_2) {
                    this._loseAlpha = _loc_2;
                }
            }
        }
        this._startTimer = egret.getTimer();
        return;
    }; // end function
    ShineEffectView.prototype.removeSelf = function () {
        this.isActive = false;
        //  if (this.$bitmapData)
        // {
        //     this.$bitmapData.$dispose();
        //     this.$bitmapData = null;
        // }
        if (this.parent) {
            try {
                this.parent.removeChild(this);
            }
            catch (e) {
            }
        }
        if (this.onRemove != null) {
            this.onRemove(this);
        }
        return;
    }; // end function
    return ShineEffectView;
}(egret.Bitmap));
__reflect(ShineEffectView.prototype, "ShineEffectView");
//# sourceMappingURL=ShineEffectView.js.map