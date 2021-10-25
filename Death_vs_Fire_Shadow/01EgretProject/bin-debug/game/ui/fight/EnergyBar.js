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
var EnergyBar = (function (_super) {
    __extends(EnergyBar, _super);
    function EnergyBar(param1) {
        var _this = _super.call(this) || this;
        _this._ui = param1;
        _this._bar = new InsBar(_this._ui.getChildMovie("barmc").getChildMovie("bar"));
        _this._txt = new InsTxt(_this._ui.getChildMovie("txtmc"));
        _this._ui.getChildMovie("barmc").getChildMovie("bar").gotoAndStop(1);
        return _this;
    } // end function
    EnergyBar.prototype.getui = function () {
        return this._ui;
    }; // end function
    EnergyBar.prototype.destory = function () {
        this._fighter = null;
        return;
    }; // end function
    EnergyBar.prototype.setFighter = function (param1) {
        this._fighter = param1;
        if (param1.data) {
            this._txt.setType(param1.data.comicType);
        }
        return;
    }; // end function
    EnergyBar.prototype.setDirect = function (param1) {
        this._txt.setDirect(param1);
        return;
    }; // end function
    EnergyBar.prototype.render = function () {
        this._bar.rate = this._fighter.energy / this._fighter.energyMax;
        if (this._fighter.energyOverLoad) {
            this._bar.overLoad();
            this._txt.overLoad();
        }
        else if (this._bar.rate < 0.3) {
            this._bar.flash();
            this._txt.flash();
        }
        else {
            this._bar.normal();
            this._txt.normal();
        }
        this._bar.render();
        this._txt.render();
        return;
    }; // end function
    return EnergyBar;
}(egret.DisplayObject));
__reflect(EnergyBar.prototype, "EnergyBar");
var InsTxt = (function (_super) {
    __extends(InsTxt, _super);
    function InsTxt(param1) {
        var _this = _super.call(this) || this;
        _this._mc = param1;
        return _this;
    } // end function
    InsTxt.prototype.setDirect = function (param1) {
        this._mc.scaleX = param1 > 0 ? (1) : (-1);
        return;
    }; // end function
    InsTxt.prototype.setType = function (param1) {
        //switch(param1) branch count is:<1>[11, 24] default offset is:<33>;
        this._mc.gotoAndStop(1);
        //this._mc.gotoAndStop(2);
        return;
    }; // end function
    InsTxt.prototype.render = function () {
        if (this._isFlash) {
            this.renderFlash();
        }
        return;
    }; // end function
    InsTxt.prototype.renderFlash = function () {
        if (!this._mc.getChildMovie("mc")) {
            return;
        }
        (this._renderFlashInt + 1);
        if ((this._renderFlashInt + 1) > 2) {
            this._renderFlashInt = 0;
            this._mc.getChildMovie("mc").gotoAndStop(this._renderFlashFrame);
            this._renderFlashFrame = this._renderFlashFrame == 1 ? (2) : (1);
        }
        return;
    }; // end function
    InsTxt.prototype.normal = function () {
        if (!this._isOverLoad && !this._isFlash) {
            return;
        }
        this._isOverLoad = false;
        this._isFlash = false;
        if (this._mc.getChildMovie("mc")) {
            this._mc.getChildMovie("mc").gotoAndStop(1);
        }
        return;
    }; // end function
    InsTxt.prototype.flash = function () {
        if (this._isFlash) {
            return;
        }
        this._isFlash = true;
        this._renderFlashInt = 0;
        this._renderFlashFrame = 2;
        return;
    }; // end function
    InsTxt.prototype.overLoad = function () {
        if (this._isOverLoad) {
            return;
        }
        this._isOverLoad = true;
        this._isFlash = false;
        if (this._mc.getChildMovie("mc")) {
            this._mc.getChildMovie("mc").gotoAndStop(2);
        }
        return;
    }; // end function
    return InsTxt;
}(egret.DisplayObject));
__reflect(InsTxt.prototype, "InsTxt");
//# sourceMappingURL=EnergyBar.js.map