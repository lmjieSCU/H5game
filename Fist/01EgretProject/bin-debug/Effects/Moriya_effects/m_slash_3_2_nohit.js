var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var m_slash_3_2_nohit = (function () {
    function m_slash_3_2_nohit() {
    }
    m_slash_3_2_nohit.addSprite4304 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, m_slash_3_2_nohit.frame1, 5, m_slash_3_2_nohit.frame5, 17, m_slash_3_2_nohit.frame17, 18, m_slash_3_2_nohit.frame18]);
        mc["own_role"] = own_role;
        return;
    };
    m_slash_3_2_nohit.frame1 = function (mc) {
        mc.x = mc["own_role"].opp.x;
    };
    m_slash_3_2_nohit.frame5 = function (mc) {
        Moriya_a3196.getInstance(mc["own_role"]).effName = "bgEff_red";
        // ColorEffect.setColor(_root.role_mc, "black");
        // ColorEffect.setColor(_root.role_mc.opp, "black");
    };
    m_slash_3_2_nohit.frame17 = function (mc) {
        Moriya_a3196.getInstance(mc["own_role"]).effName = "";
    };
    m_slash_3_2_nohit.frame18 = function (mc) {
        // ColorEffect.setColor(_root.role_mc,"normal");
        // ColorEffect.setColor(_root.role_mc.opp,"normal");
        mc.parent.removeChild(mc);
    };
    return m_slash_3_2_nohit;
}());
__reflect(m_slash_3_2_nohit.prototype, "m_slash_3_2_nohit");
//# sourceMappingURL=m_slash_3_2_nohit.js.map