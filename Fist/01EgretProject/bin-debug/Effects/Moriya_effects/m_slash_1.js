var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var m_slash_1 = (function () {
    function m_slash_1() {
    }
    m_slash_1.addSprite11415 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, m_slash_1.frame1, 8, m_slash_1.frame8]);
        return;
    };
    m_slash_1.frame1 = function (mc) {
        //_level0.effect_mc.fgEff_start("fgEff_black");
    };
    m_slash_1.frame8 = function (mc) {
        //_level0.effect_mc.fgEff_start("");
        mc.parent.removeChild(mc);
    };
    return m_slash_1;
}());
__reflect(m_slash_1.prototype, "m_slash_1");
//# sourceMappingURL=m_slash_1.js.map