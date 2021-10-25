var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FighterVoice = (function () {
    function FighterVoice() {
        return;
    } // end function
    FighterVoice.HURT = 0;
    FighterVoice.HURT_FLY = 1;
    FighterVoice.DIE = 2;
    return FighterVoice;
}());
__reflect(FighterVoice.prototype, "FighterVoice");
//# sourceMappingURL=FighterVoice.js.map