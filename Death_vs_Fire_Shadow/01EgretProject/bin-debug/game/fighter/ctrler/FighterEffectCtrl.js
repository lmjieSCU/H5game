var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FighterEffectCtrl = (function () {
    function FighterEffectCtrl(param1) {
        this._faceObj = {};
        this._target = param1;
        this._targetDisplay = param1.getDisplay();
        return;
    } // end function
    FighterEffectCtrl.prototype.destory = function () {
        this._target = null;
        this._targetDisplay = null;
        this._faceObj = null;
        return;
    }; // end function
    //
    FighterEffectCtrl.prototype.setBishaFace = function (param1, param2) {
        this._faceObj[param1] = param2;
        return;
    }; // end function
    //
    FighterEffectCtrl.prototype.getFace = function (param1) {
        if (!param1) {
            return null;
        }
        var _loc_4 = this._faceObj[param1];
        if (!this._faceObj[param1]) {
            //Debugger.errorMsg("未定义必杀特写:" + param1);
            return null;
        }
        var _loc_3 = _loc_4;
        var _loc_2 = new egret.Bitmap(_loc_3);
        _loc_2.smoothing = true;
        return _loc_2;
    }; // end function
    FighterEffectCtrl.prototype.shine = function (param1) {
        if (param1 === void 0) { param1 = 16777215; }
        var _loc_2 = param1 == 16777215 ? (0.3) : (0.2);
        EffectCtrl.I.shine(param1, _loc_2);
        return;
    }; // end function
    FighterEffectCtrl.prototype.shake = function (param1, param2, param3) {
        if (param1 === void 0) { param1 = 0; }
        if (param2 === void 0) { param2 = 3; }
        if (param3 === void 0) { param3 = 0; }
        EffectCtrl.I.shake(param1 * 2, param2 * 2, param3 * 1000);
        return;
    }; // end function
    FighterEffectCtrl.prototype.startShake = function (param1, param2) {
        if (param1 === void 0) { param1 = 0; }
        if (param2 === void 0) { param2 = 3; }
        this._isShakeIng = true;
        EffectCtrl.I.shake(param1 * 2, param2 * 2, -1);
        return;
    }; // end function
    FighterEffectCtrl.prototype.endShake = function () {
        if (this._isShakeIng) {
            EffectCtrl.I.shake(0, 0, 500);
        }
        return;
    }; // end function
    FighterEffectCtrl.prototype.shadow = function (param1, param2, param3) {
        if (param1 === void 0) { param1 = 0; }
        if (param2 === void 0) { param2 = 0; }
        if (param3 === void 0) { param3 = 0; }
        this._isShadowIng = true;
        EffectCtrl.I.startShadow(this._targetDisplay, param1, param2, param3);
        return;
    }; // end function
    FighterEffectCtrl.prototype.endShadow = function () {
        if (this._isShadowIng) {
            EffectCtrl.I.endShadow(this._targetDisplay);
        }
        return;
    }; // end function
    FighterEffectCtrl.prototype.dash = function () {
        if (this._target.isInAir) {
            EffectCtrl.I.doEffectById("dash_air", this._target.x, this._target.y, this._target.direct);
        }
        else {
            EffectCtrl.I.doEffectById("dash", this._target.x, this._target.y, this._target.direct);
        }
        return;
    }; // end function
    FighterEffectCtrl.prototype.bisha = function (param1, param2) {
        if (param1 === void 0) { param1 = false; }
        if (param2 === void 0) { param2 = null; }
        var _loc_3 = this.getFace(param2);
        EffectCtrl.I.bisha(this._target, param1, _loc_3);
        return;
    }; // end function
    FighterEffectCtrl.prototype.endBisha = function () {
        EffectCtrl.I.endBisha();
        return;
    }; // end function
    FighterEffectCtrl.prototype.startWanKai = function (param1) {
        if (param1 === void 0) { param1 = null; }
        var _loc_2 = param1 ? (this.getFace(param1)) : (null);
        EffectCtrl.I.wanKai(this._target, _loc_2);
        return;
    }; // end function
    FighterEffectCtrl.prototype.endWanKai = function () {
        if (this._target.actionState == 50) {
            EffectCtrl.I.endWanKai();
        }
        return;
    }; // end function
    FighterEffectCtrl.prototype.walk = function () {
        if (this._inGhostStep) {
            EffectCtrl.I.doEffectById("ghost_step", this._target.x, this._target.y, this._target.direct);
        }
        else {
            SoundCtrl.I.playWalk();
        }
        return;
    }; // end function
    FighterEffectCtrl.prototype.jump = function () {
        EffectCtrl.I.jumpEffect(this._targetDisplay.x, this._targetDisplay.y);
        return;
    }; // end function
    FighterEffectCtrl.prototype.jumpAir = function () {
        EffectCtrl.I.jumpAirEffect(this._targetDisplay.x, this._targetDisplay.y);
        return;
    }; // end function
    FighterEffectCtrl.prototype.touchFloor = function () {
        EffectCtrl.I.touchFloorEffect(this._targetDisplay.x, this._targetDisplay.y);
        return;
    }; // end function
    FighterEffectCtrl.prototype.hitFloor = function (param1) {
        EffectCtrl.I.hitFloorEffect(param1, this._targetDisplay.x, this._targetDisplay.y);
        return;
    }; // end function
    FighterEffectCtrl.prototype.slowDown = function (param1) {
        EffectCtrl.I.slowDown(1.5, param1 * 1000);
        return;
    }; // end function
    FighterEffectCtrl.prototype.energyExplode = function () {
        EffectCtrl.I.energyExplode(this._target);
        return;
    }; // end function
    FighterEffectCtrl.prototype.replaceSkill = function () {
        EffectCtrl.I.replaceSkill(this._target);
        return;
    }; // end function
    FighterEffectCtrl.prototype.ghostStep = function () {
        this._inGhostStep = true;
        this.shadow(0, 0, 255);
        EffectCtrl.I.ghostStep(this._target);
        return;
    }; // end function
    FighterEffectCtrl.prototype.endGhostStep = function () {
        this._inGhostStep = false;
        this.endShadow();
        EffectCtrl.I.endGhostStep();
        return;
    }; // end function
    return FighterEffectCtrl;
}());
__reflect(FighterEffectCtrl.prototype, "FighterEffectCtrl");
//# sourceMappingURL=FighterEffectCtrl.js.map