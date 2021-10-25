var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_sk_tibing_s = (function () {
    function Kula_sk_tibing_s() {
    }
    Kula_sk_tibing_s.addSprite19621 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Kula_sk_tibing_s.frame1, 4, Kula_sk_tibing_s.frame4, 14, Kula_sk_tibing_s.frame14, 32, Kula_sk_tibing_s.frame32]);
        return;
    };
    Kula_sk_tibing_s.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a19530 = Kula_a19530.getInstance(_parentRole);
        a19530.s_type = "s1_s";
        a19530.f_time = 20;
        a19530.bgType = "1";
        a19530.roleName = "Kula";
        a19530.faceName = "";
    };
    Kula_sk_tibing_s.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "getup2";
        htcheck.Vx = 14;
        htcheck.Vy = 40;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 5;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "hitEff_ice1";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
        var a19498 = Kula_a19498.getInstance(_parentRole);
        a19498.flag = "att";
        a19498.defendSuper = true;
        a19498.obj_level = 1;
        // this.onEnterFrame = function () {
        //     if (_level0.inPause) {
        //         return undefined;
        //     }
        //     var _loc3_ = _root.role_mc.opp.getObj();
        //     if (s_mc.obj_level > _loc3_.area.obj_level) {
        //         if (s_mc.hitTest(_loc3_.area)) {
        //             _loc3_.area.do_hitObj();
        //             delete this.onEnterFrame;
        //             gotoAndStop("att");
        //             play();
        //         }
        //     }
        // };
    };
    Kula_sk_tibing_s.frame14 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_iceKick_big";
    };
    Kula_sk_tibing_s.frame32 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Kula_sk_tibing_s;
}());
__reflect(Kula_sk_tibing_s.prototype, "Kula_sk_tibing_s");
//# sourceMappingURL=Kula_sk_tibing_s.js.map