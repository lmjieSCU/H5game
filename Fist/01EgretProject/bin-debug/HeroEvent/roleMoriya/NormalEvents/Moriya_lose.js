var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_lose = (function () {
    function Moriya_lose() {
    }
    Moriya_lose.addSprite3316 = function (mc, own_role) {
        mc.addFrameScript(mc, [55, Moriya_lose.frame55]);
        return;
    };
    Moriya_lose.frame55 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Moriya_lose;
}());
__reflect(Moriya_lose.prototype, "Moriya_lose");
//# sourceMappingURL=Moriya_lose.js.map