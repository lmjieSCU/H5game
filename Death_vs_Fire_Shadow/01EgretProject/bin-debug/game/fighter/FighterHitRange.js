var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FighterHitRange = (function () {
    function FighterHitRange() {
        return;
    } // end function
    FighterHitRange.getALL = function () {
        return ["tkanmian", "tzmian", "kanmian", "kj1mian", "kj2mian", "zh1mian", "zh2mian", "zh3mian", "bsmian", "kbsmian", "sbsmian", "cbsmian"];
    }; // end function
    FighterHitRange.JUMP_ATTACK = "tkanmian";
    FighterHitRange.JUMP_SKILL = "tzmian";
    FighterHitRange.ATTACK = "kanmian";
    FighterHitRange.SKILL1 = "kj1mian";
    FighterHitRange.SKILL2 = "kj2mian";
    FighterHitRange.ZHAO1 = "zh1mian";
    FighterHitRange.ZHAO2 = "zh2mian";
    FighterHitRange.ZHAO3 = "zh3mian";
    FighterHitRange.BISHA = "bsmian";
    FighterHitRange.BISHA_AIR = "kbsmian";
    FighterHitRange.BISHA_UP = "sbsmian";
    FighterHitRange.BISHA_SUPER = "cbsmian";
    return FighterHitRange;
}());
__reflect(FighterHitRange //攻击类别
.prototype, "FighterHitRange");
//# sourceMappingURL=FighterHitRange.js.map