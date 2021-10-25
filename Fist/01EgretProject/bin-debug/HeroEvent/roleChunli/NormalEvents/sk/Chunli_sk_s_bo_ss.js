var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_sk_s_bo_ss = (function () {
    function Chunli_sk_s_bo_ss() {
    }
    Chunli_sk_s_bo_ss.addSprite15528 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Chunli_sk_s_bo_ss.frame3, 4, Chunli_sk_s_bo_ss.frame4, 5, Chunli_sk_s_bo_ss.frame5, 41, Chunli_sk_s_bo_ss.frame41, 42, Chunli_sk_s_bo_ss.frame42, 47, Chunli_sk_s_bo_ss.frame47, 65, Chunli_sk_s_bo_ss.frame65]);
        return;
    };
    Chunli_sk_s_bo_ss.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4178 = Chunli_a4178.getInstance(_parentRole);
        a4178.bgType = "2";
        a4178.f_time = 20;
        a4178.roleName = "Chunli";
        a4178.s_type = "s2";
        a4178.faceName = "";
    };
    Chunli_sk_s_bo_ss.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a3196.getInstance(_parentRole).effName = "bgEff_speed1";
    };
    Chunli_sk_s_bo_ss.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        // continueHit = true;
    };
    Chunli_sk_s_bo_ss.frame41 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = false;
    };
    Chunli_sk_s_bo_ss.frame42 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 10;
        htcheck.isObj = true;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire_h";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt4";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 1;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 35;
        htcheck.a = 0;
        htcheck.Vx = 30;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_s_bo_ss.frame47 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a3196.getInstance(_parentRole).effName = "";
    };
    Chunli_sk_s_bo_ss.frame65 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_sk_s_bo_ss;
}());
__reflect(Chunli_sk_s_bo_ss.prototype, "Chunli_sk_s_bo_ss");
//# sourceMappingURL=Chunli_sk_s_bo_ss.js.map