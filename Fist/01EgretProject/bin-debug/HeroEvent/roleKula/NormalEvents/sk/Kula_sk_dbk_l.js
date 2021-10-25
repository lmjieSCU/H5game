var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_sk_dbk_l = (function () {
    function Kula_sk_dbk_l() {
    }
    Kula_sk_dbk_l.addSprite19429 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Kula_sk_dbk_l.frame3, 8, Kula_sk_dbk_l.frame8, 10, Kula_sk_dbk_l.frame10, 12, Kula_sk_dbk_l.frame12, 18, Kula_sk_dbk_l.frame18]);
        return;
    };
    Kula_sk_dbk_l.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a19418 = Kula_a19418.getInstance(_parentRole);
        a19418.Vx = 18;
        a19418.Vy = 25;
        a19418.Va = 0;
        a19418.Vg = 4.5;
        a19418.Vx_min = 0;
        a19418.posY2 = "";
        a19418.flag = "";
        a19418.end_status = "land2";
    };
    Kula_sk_dbk_l.frame8 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    };
    Kula_sk_dbk_l.frame10 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt1";
        htcheck.hurtAway = "hurt6";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 20;
        htcheck.Vy = 0;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 3;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1.3;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Kula_sk_dbk_l.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        // keyCode_dir = "f";
        // keyCode = "k";
        // keyCode_dir = "f";
        // keyCode = "k_l";
        // var onwer = this;
        // key_mc.pressFunc = function () {
        //     onwer.nextSkill = "sk_tibing0";
        // };
        // key2_mc.pressFunc = function () {
        //     onwer.nextSkill = "sk_huaxing";
        // };
        // _root.role_mc.CPU_check("xuanzhuan");
    };
    Kula_sk_dbk_l.frame18 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Kula_sk_dbk_l;
}());
__reflect(Kula_sk_dbk_l.prototype, "Kula_sk_dbk_l");
//# sourceMappingURL=Kula_sk_dbk_l.js.map