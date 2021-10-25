var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var m_moonlight = (function () {
    function m_moonlight() {
    }
    m_moonlight.addSprite4263 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, m_moonlight.frame1, 13, m_moonlight.frame13]);
        return;
    };
    m_moonlight.frame1 = function (mc) {
        mc.x = mc.x + Math.floor(Math.random() * 100 - 50);
        mc.y = mc.y + Math.floor(Math.random() * 100 - 50);
    };
    m_moonlight.frame13 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return m_moonlight;
}());
__reflect(m_moonlight.prototype, "m_moonlight");
//# sourceMappingURL=m_moonlight.js.map