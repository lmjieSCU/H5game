/*
*定义人物状态标志、技能标志
*
*/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FighterAction = (function () {
    function FighterAction() {
        this.touchFloorBreakAct = false;
        this.bishaQi = 100;
        this.bishaUPQi = 100;
        this.bishaSUPERQi = 300;
        this.bishaAIRQi = 100;
        this._cdObj = {};
        return;
    } // end function
    FighterAction.prototype.clear = function () {
        this.clearState();
        this.clearAction();
        return;
    }; // end function
    FighterAction.prototype.clearState = function () {
        this.isMoving = false;
        this.isJumping = false;
        this.isDefensing = false;
        this.isDashing = false;
        this.isHurting = false;
        this.isHurtFlying = false;
        this.isDefenseHiting = false;
        this.touchFloorBreakAct = false;
        return;
    }; // end function
    FighterAction.prototype.clearAction = function () {
        this.hitTarget = null;
        this.hitTargetChecker = null;
        this.moveLeft = null;
        this.moveRight = null;
        this.defense = null;
        this.jump = null;
        this.jumpQuick = null;
        this.jumpDown = null;
        this.dash = null;
        this.attack = null;
        this.skill1 = null;
        this.skill2 = null;
        this.zhao1 = null;
        this.zhao2 = null;
        this.zhao3 = null;
        this.catch1 = null;
        this.catch2 = null;
        this.bisha = null;
        this.bishaUP = null;
        this.bishaSUPER = null;
        this.bishaQi = 100;
        this.bishaUPQi = 100;
        this.bishaAIRQi = 100;
        this.bishaSUPERQi = 300;
        this.hurtAction = null;
        this.waiKai = null;
        this.attackAIR = null;
        this.skillAIR = null;
        this.bishaAIR = null;
        this.touchFloor = null;
        this.airMove = false;
        return;
    }; // end function
    FighterAction.prototype.render = function () {
        for (var _loc_1 in this._cdObj) {
            var _loc_2 = this._cdObj;
            var _loc_3 = _loc_1;
            _loc_2[_loc_1] = (_loc_2[_loc_1] - 1);
            _loc_2[_loc_3] = _loc_2[_loc_1] - 1;
            if (_loc_2[_loc_1] <= 0) {
                delete _loc_2[_loc_1];
            }
        }
        return;
    }; // end function
    FighterAction.prototype.setCD = function (param1, param2) {
        this._cdObj[param1] = param2 / GameConfig.FPS_GAME;
        return;
    }; // end function
    FighterAction.prototype.CDOK = function (param1) {
        return !this._cdObj[param1];
    }; // end function
    return FighterAction;
}());
__reflect(FighterAction.prototype, "FighterAction");
//# sourceMappingURL=FighterAction.js.map