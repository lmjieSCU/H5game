var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_sk_long_u = (function () {
    function Moriya_sk_long_u() {
    }
    Moriya_sk_long_u.addSprite3824 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Moriya_sk_long_u.frame3, 10, Moriya_sk_long_u.frame10, 52, Moriya_sk_long_u.frame52, 55, Moriya_sk_long_u.frame55, 66, Moriya_sk_long_u.frame66, 68, Moriya_sk_long_u.frame68, 71, Moriya_sk_long_u.frame71, 87, Moriya_sk_long_u.frame87]);
        mc['own_role'] = own_role;
        return;
    };
    Moriya_sk_long_u.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    };
    Moriya_sk_long_u.frame10 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3800 = Moriya_a3800.getInstance(_parentRole);
        a3800.keyArray = [];
        a3800.keyArray[0] = _parentRole._punch_lButton;
        a3800.holdFunc = function () { };
        a3800.releaseFunc = function (MC, own_role) {
            if (mc.getCurrFrame() > 20) {
                own_role.bodyMC.gotoAndStop("attack2");
            }
            else {
                own_role.bodyMC.gotoAndStop("attack");
            }
        };
        a3800.endFunc = function (MC, own_role) {
            own_role.bodyMC.gotoAndStop("attack2");
        };
    };
    Moriya_sk_long_u.frame52 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt1";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 22;
        htcheck.Vy = 30;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 6;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1.5;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb2";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_long_u.frame55 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt1";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 22;
        htcheck.Vy = 30;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 6;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1.5;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb2";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = false;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_long_u.frame66 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Moriya_sk_long_u.frame68 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt1";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 25;
        htcheck.Vy = 30;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 6;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1.5;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb2";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_long_u.frame71 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 25;
        htcheck.Vy = 30;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 6;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1.5;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb2";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = false;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_long_u.frame87 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_sk_long_u;
}());
__reflect(Moriya_sk_long_u.prototype, "Moriya_sk_long_u");
//# sourceMappingURL=Moriya_sk_long_u.js.map