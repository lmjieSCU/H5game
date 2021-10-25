var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var m_slash_3_2 = (function () {
    function m_slash_3_2() {
    }
    m_slash_3_2.addSprite3197 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, m_slash_3_2.frame1, 5, m_slash_3_2.frame5, 17, m_slash_3_2.frame17, 18, m_slash_3_2.frame18]);
        mc["own_role"] = own_role;
        return;
    };
    m_slash_3_2.frame1 = function (mc) {
        mc.x = mc["own_role"].opp.x;
    };
    m_slash_3_2.frame5 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "getup2";
        htcheck.Vx = 13;
        htcheck.Vy = 32;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 15;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 2.5;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb1";
        htcheck.hitEff = "";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
        // ColorEffect.setColor(_root.role_mc,"black");
        // ColorEffect.setColor(_root.role_mc.opp,"black");
        var a3196 = Moriya_a3196.getInstance(mc["own_role"]);
        a3196.effName = "bgEff_red";
    };
    m_slash_3_2.frame17 = function (mc) {
        var a3196 = Moriya_a3196.getInstance(mc["own_role"]);
        a3196.effName = "";
    };
    m_slash_3_2.frame18 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return m_slash_3_2;
}());
__reflect(m_slash_3_2.prototype, "m_slash_3_2");
//# sourceMappingURL=m_slash_3_2.js.map