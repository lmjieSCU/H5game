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
var FighterHpBar = (function (_super) {
    __extends(FighterHpBar, _super);
    function FighterHpBar(param1) {
        var _this = _super.call(this) || this;
        _this._hprate = 1;
        _this._ui = param1;
        _this._bar = _this._ui.getChildMovie("bar");
        _this._redbar = _this._ui.getChildMovie("redbar");
        return _this;
    } // end function
    FighterHpBar.prototype.getui = function () {
        return this._ui;
    }; // end function
    FighterHpBar.prototype.destory = function () {
        this._fighter = null;
        return;
    }; // end function
    FighterHpBar.prototype.setFighter = function (param1) {
        this._fighter = param1;
        return;
    }; // end function
    FighterHpBar.prototype.render = function () {
        var _loc_2 = NaN;
        var _loc_4 = NaN;
        var _loc_1 = this._fighter.hp / this._fighter.hpMax;
        if (this._redbarMoving && _loc_1 != this._hprate) {
            this._redbar.scaleX = this._hprate;
            this._redbarMoving = false;
        }
        this._hprate = _loc_1;
        var _loc_3 = this._hprate - this._bar.scaleX;
        var _loc_5 = _loc_3 < 0 ? (0.4) : (0.04);
        if (Math.abs(_loc_3) < 0.01) {
            this._bar.scaleX = this._hprate;
        }
        else {
            this._bar.scaleX = this._bar.scaleX + _loc_3 * _loc_5;
        }
        //switch(this._fighter.actionState - 21) branch count is:<2>[14, 27, 27] default offset is:<95>;
        this._redbarMoveDelay = 100;
        if (this._redbarMoveDelay > 0) {
            if (!this._justHurtFly) {
                this._redbarMoveDelay = 1.5 * GameConfig.FPS_GAME;
                this._justHurtFly = true;
            }
            else if (this._redbarMoveDelay > 0) {
                (this._redbarMoveDelay - 1);
            }
        }
        ;
        this._redbarMoveDelay = 0;
        this._justHurtFly = false;
        if (this._redbarMoveDelay <= 0) {
            _loc_2 = this._hprate - this._redbar.scaleX;
            _loc_4 = _loc_2 < 0 ? (0.1) : (0.02);
            if (Math.abs(_loc_2) < 0.01) {
                this._redbar.scaleX = this._hprate;
                this._redbarMoving = false;
            }
            else {
                this._redbar.scaleX = this._redbar.scaleX + _loc_2 * _loc_4;
                this._redbarMoving = true;
            }
        }
        return;
    }; // end function
    return FighterHpBar;
}(egret.DisplayObject));
__reflect(FighterHpBar.prototype, "FighterHpBar");
//# sourceMappingURL=FighterHpBar.js.map