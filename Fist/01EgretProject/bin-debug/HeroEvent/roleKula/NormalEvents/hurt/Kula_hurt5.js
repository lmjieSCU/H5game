var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_hurt5 = (function () {
    function Kula_hurt5() {
    }
    Kula_hurt5.addSprite19076 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Kula_hurt5.frame1, 12, Kula_hurt5.frame12]);
        return;
    };
    Kula_hurt5.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6519 = Kula_a6519.getInstance(_parentRole);
        a6519.soundArray = [];
        a6519.soundArray[0] = "kula_hurt1";
        a6519.soundArray[1] = "kula_hurt2";
        a6519.soundArray[2] = "none";
        a6519.soundArray[3] = "none";
        a6519.startPos = 0;
        a6519.loop = 1;
    };
    Kula_hurt5.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Kula_hurt5;
}());
__reflect(Kula_hurt5.prototype, "Kula_hurt5");
//# sourceMappingURL=Kula_hurt5.js.map