var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FighterActionState = (function () {
    function FighterActionState() {
        return;
    } // end function
    FighterActionState.isAllowWinState = function (param1) {
        return param1 != 12 && param1 != 13 && param1 != 50;
    }; // end function
    FighterActionState.isAttacking = function (param1) {
        return [10, 11, 12, 13].indexOf(param1) != -1;
    }; // end function
    FighterActionState.allowGhostStep = function (param1) {
        return param1 != 12 && param1 != 13 && param1 != 50;
    }; // end function
    FighterActionState.isHurting = function (param1) {
        return [21, 22, 23, 24].indexOf(param1) != -1;
    }; // end function
    FighterActionState.NORMAL = 0;
    FighterActionState.FREEZE = 40;
    FighterActionState.ATTACK_ING = 10;
    FighterActionState.SKILL_ING = 11;
    FighterActionState.BISHA_ING = 12;
    FighterActionState.BISHA_SUPER_ING = 13;
    FighterActionState.JUMP_ING = 14;
    FighterActionState.DASH_ING = 15;
    FighterActionState.HURT_ACT_ING = 16;
    FighterActionState.DEFENCE_ING = 20;
    FighterActionState.HURT_ING = 21;
    FighterActionState.HURT_FLYING = 22;
    FighterActionState.HURT_DOWN = 23;
    FighterActionState.HURT_DOWN_TAN = 24;
    FighterActionState.DEAD = 30;
    FighterActionState.WAN_KAI_ING = 50;
    FighterActionState.KAI_CHANG = 60;
    FighterActionState.WIN = 61;
    FighterActionState.LOSE = 62;
    return FighterActionState;
}());
__reflect(FighterActionState.prototype, "FighterActionState");
//# sourceMappingURL=FighterActionState.js.map