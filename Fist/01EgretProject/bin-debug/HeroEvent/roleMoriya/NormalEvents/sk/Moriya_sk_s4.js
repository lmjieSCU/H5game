var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_sk_s4 = (function () {
    function Moriya_sk_s4() {
    }
    Moriya_sk_s4.addSprite4198 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Moriya_sk_s4.frame2, 6, Moriya_sk_s4.frame6, 7, Moriya_sk_s4.frame7, 9, Moriya_sk_s4.frame9, 12, Moriya_sk_s4.frame12, 32, Moriya_sk_s4.frame32, 33, Moriya_sk_s4.frame33, 75, Moriya_sk_s4.frame75, 110, Moriya_sk_s4.frame110, 111, Moriya_sk_s4.frame111, 112, Moriya_sk_s4.frame112, 137, Moriya_sk_s4.frame137]);
        return;
    };
    Moriya_sk_s4.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4178 = Moriya_a4178.getInstance(_parentRole);
        a4178.s_type = "s2";
        a4178.f_time = 20;
        a4178.bgType = "2";
        a4178.roleName = "Moriya";
        a4178.faceName = "";
    };
    Moriya_sk_s4.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = true;
    };
    Moriya_sk_s4.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt2";
        htcheck.flag = "";
        htcheck.end_status = "";
        htcheck.Vx = 10;
        htcheck.Vy = 35;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 7;
        htcheck.freezeTime = 0;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 0.5;
        htcheck.isObj = false;
        htcheck.hitType = "";
        htcheck.hitEff = "";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_s4.frame9 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.opp.status_3 == "hurt" && _parentRole.onHit) {
            mc.gotoAndStop("hit");
            //play();
        }
    };
    Moriya_sk_s4.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (_parentRole.opp.status_3 == "hurt" && _parentRole.onHit) {
            mc.gotoAndStop("hit");
            //play();
        }
    };
    Moriya_sk_s4.frame32 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Moriya_sk_s4.frame33 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Moriya_a4186.getInstance(_parentRole)._name = "Moriya_a4186";
        var a4188 = Moriya_a4188.getInstance(_parentRole);
        a4188.status_1 = "hurt2";
        a4188.flag = "s_catch";
        a4188.hurt = true;
        a4188.land = false;
        a4188.downHit = false;
        a4188.func = null;
        a4188.posObj = "Moriya_a4186";
        Moriya_a4196.getInstance(_parentRole).name = "m_slash_3";
    };
    Moriya_sk_s4.frame75 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Moriya_a4186.getInstance(_parentRole)._name = "Moriya_a4186";
        var a4188 = Moriya_a4188.getInstance(_parentRole);
        a4188.status_1 = "hurt2";
        a4188.flag = "s_catch";
        a4188.hurt = true;
        a4188.land = false;
        a4188.downHit = false;
        a4188.func = null;
        a4188.posObj = "Moriya_a4186";
    };
    Moriya_sk_s4.frame110 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = false;
    };
    Moriya_sk_s4.frame111 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4178 = Moriya_a4178.getInstance(_parentRole);
        a4178.s_type = "s3";
        a4178.f_time = 20;
        a4178.bgType = "0";
        a4178.roleName = "";
        a4178.faceName = "";
    };
    Moriya_sk_s4.frame112 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Moriya_a4196.getInstance(_parentRole).name = "m_slash_3_2";
    };
    Moriya_sk_s4.frame137 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_sk_s4;
}());
__reflect(Moriya_sk_s4.prototype, "Moriya_sk_s4");
//# sourceMappingURL=Moriya_sk_s4.js.map