var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_sk_s_q2 = (function () {
    function Ryu_sk_s_q2() {
    }
    Ryu_sk_s_q2.addSprite21068 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Ryu_sk_s_q2.frame2, 4, Ryu_sk_s_q2.frame4, 15, Ryu_sk_s_q2.frame15, 16, Ryu_sk_s_q2.frame16, 35, Ryu_sk_s_q2.frame35, 40, Ryu_sk_s_q2.frame40, 43, Ryu_sk_s_q2.frame43, 64, Ryu_sk_s_q2.frame64, 66, Ryu_sk_s_q2.frame66, 68, Ryu_sk_s_q2.frame68, 71, Ryu_sk_s_q2.frame71, 82, Ryu_sk_s_q2.frame82, 94, Ryu_sk_s_q2.frame94, 95, Ryu_sk_s_q2.frame95, 114, Ryu_sk_s_q2.frame114]);
        return;
    };
    Ryu_sk_s_q2.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20717 = Ryu_a20717.getInstance(_parentRole);
        a20717.s_type = "s2";
        a20717.f_time = 20;
        a20717.bgType = "2";
        a20717.roleName = "Ryu";
        a20717.faceName = "";
    };
    Ryu_sk_s_q2.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20657.getInstance(_parentRole).name = "ryu_exXie";
        Ryu_a20761.getInstance(_parentRole).effName = "bgEff_up2";
    };
    Ryu_sk_s_q2.frame15 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20802.getInstance(_parentRole).nohitFrame = "nohit";
    };
    Ryu_sk_s_q2.frame16 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20761.getInstance(_parentRole).effName = "bgEff_speed1";
        Ryu_a20657.getInstance(_parentRole).name = "ryu_assist_ken";
    };
    Ryu_sk_s_q2.frame35 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20401 = Ryu_a20401.getInstance(_parentRole);
        a20401.Vx = 35;
        a20401.flag = "";
        a20401.target = "";
    };
    Ryu_sk_s_q2.frame40 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.stop_move_X1();
        var pos = _parentRole.opp.x + 50 * _parentRole.dir;
        if ((_parentRole.parent.localToGlobal(pos)).x >= GameConfig.FightWidth) {
            pos = (_parentRole.parent.globalToLocal(GameConfig.FightWidth)).x;
        }
        else if ((_parentRole.parent.localToGlobal(pos)).x <= 0) {
            pos = (_parentRole.parent.globalToLocal(0)).x;
        }
        _parentRole.x = pos;
    };
    Ryu_sk_s_q2.frame43 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.checkSide_abs();
    };
    Ryu_sk_s_q2.frame64 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20761.getInstance(_parentRole).effName = "bgEff_up3";
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 25;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 2;
        hitcheck.freezeTime = 5;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "down";
    };
    Ryu_sk_s_q2.frame66 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 3;
        hitcheck.end_status = "";
        hitcheck.Vx = 5;
        hitcheck.Vy = 27;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 5;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Ryu_sk_s_q2.frame68 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 10;
        hitcheck.Vy = 25;
        hitcheck.a = 3;
        hitcheck.g = 4;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    Ryu_sk_s_q2.frame71 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt3";
        hitcheck.flag = 1;
        hitcheck.end_status = "";
        hitcheck.Vx = 17;
        hitcheck.Vy = 35;
        hitcheck.a = 3;
        hitcheck.g = 4;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 10;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire1";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
        var a20238 = Ryu_a20238.getInstance(_parentRole);
        a20238.Vx = 8;
        a20238.Vy = 38;
        a20238.Va = 0;
        a20238.Vg = 4.5;
        a20238.Vx_min = 0;
        a20238.posY2 = "";
        a20238.flag = "";
        a20238.end_status = "land2";
    };
    Ryu_sk_s_q2.frame82 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20761.getInstance(_parentRole).effName = "";
        mc.stop();
    };
    Ryu_sk_s_q2.frame94 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Ryu_sk_s_q2.frame95 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20761.getInstance(_parentRole).effName = "";
    };
    Ryu_sk_s_q2.frame114 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Ryu_sk_s_q2;
}());
__reflect(Ryu_sk_s_q2.prototype, "Ryu_sk_s_q2");
//# sourceMappingURL=Ryu_sk_s_q2.js.map