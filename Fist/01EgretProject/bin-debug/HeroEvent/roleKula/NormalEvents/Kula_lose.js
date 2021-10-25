var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_lose = (function () {
    function Kula_lose() {
    }
    Kula_lose.addSprite18855 = function (mc, own_role) {
        mc.addFrameScript(mc, [63, Kula_lose.frame63]);
        return;
    };
    Kula_lose.frame63 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Kula_lose;
}());
__reflect(Kula_lose.prototype, "Kula_lose");
//# sourceMappingURL=Kula_lose.js.map