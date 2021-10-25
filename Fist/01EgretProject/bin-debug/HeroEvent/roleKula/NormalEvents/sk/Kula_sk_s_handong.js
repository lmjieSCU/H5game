var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_sk_s_handong = (function () {
    function Kula_sk_s_handong() {
    }
    Kula_sk_s_handong.addSprite19698 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Kula_sk_s_handong.frame2, 4, Kula_sk_s_handong.frame4, 6, Kula_sk_s_handong.frame6, 7, Kula_sk_s_handong.frame7, 8, Kula_sk_s_handong.frame8, 9, Kula_sk_s_handong.frame9, 12, Kula_sk_s_handong.frame12, 16, Kula_sk_s_handong.frame16, 17, Kula_sk_s_handong.frame17, 20, Kula_sk_s_handong.frame20, 26, Kula_sk_s_handong.frame26, 29, Kula_sk_s_handong.frame29, 54, Kula_sk_s_handong.frame54, 62, Kula_sk_s_handong.frame62]);
        return;
    };
    Kula_sk_s_handong.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a19530 = Kula_a19530.getInstance(_parentRole);
        a19530.s_type = "s1";
        a19530.f_time = 20;
        a19530.bgType = "1";
        a19530.roleName = "Kula";
        a19530.faceName = "";
    };
    Kula_sk_s_handong.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a7159 = Kula_a7159.getInstance(_parentRole);
        a7159.effName = "bgEff_speed1";
        _parentRole.checkTouch_stop = true;
    };
    Kula_sk_s_handong.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a18962 = Kula_a18962.getInstance(_parentRole);
        a18962.Vx = 60;
        a18962.flag = "";
        a18962.target = "";
    };
    Kula_sk_s_handong.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_iceFire";
    };
    Kula_sk_s_handong.frame8 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt2";
        htcheck.flag = 1;
        htcheck.end_status = "getup2";
        htcheck.Vx = 15;
        htcheck.Vy = 30;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 30;
        htcheck.freezeTime = 5;
        htcheck.slowTime = 0;
        htcheck.shake = 1;
        htcheck.d_rate = 0.5;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "kula_hit_m4";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Kula_sk_s_handong.frame9 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.visible = false;
        FightMainRender.getInstance().Add(_parentRole, Kula_sk_s_handong.onEnterFrame, [_parentRole]);
    };
    Kula_sk_s_handong.onEnterFrame = function (_parentRole) {
        if (_level0.inPause) {
            return undefined;
        }
        if (_parentRole.onHit) {
            _parentRole.visible = true;
            FightMainRender.getInstance().Remove(_parentRole, Kula_sk_s_handong.onEnterFrame);
        }
        else if (_parentRole.opp.onHit) {
            _parentRole.visible = true;
            FightMainRender.getInstance().Remove(_parentRole, Kula_sk_s_handong.onEnterFrame);
        }
    };
    Kula_sk_s_handong.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
    };
    Kula_sk_s_handong.frame16 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.visible = true;
        FightMainRender.getInstance().Remove(_parentRole, Kula_sk_s_handong.onEnterFrame);
    };
    Kula_sk_s_handong.frame17 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a7155.getInstance(_parentRole)._name = "Kula_a7155";
        var a7156 = Kula_a7156.getInstance(_parentRole);
        a7156.status_1 = "hurt2";
        a7156.flag = "s_catch";
        a7156.hurt = true;
        a7156.land = true;
        a7156.downHit = false;
        a7156.func = null;
        a7156.posObj = "Kula_a7155";
    };
    Kula_sk_s_handong.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.checkTouch_stop = false;
        _parentRole.bodyTouch();
    };
    Kula_sk_s_handong.frame26 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a7159.getInstance(_parentRole).effName = "bgEff_black";
    };
    Kula_sk_s_handong.frame29 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        if (!(_parentRole.onHit && _parentRole.opp.status_3 == "hurt")) {
            mc.gotoAndStop("nohit");
            //play();
        }
    };
    Kula_sk_s_handong.frame54 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Kula_sk_s_handong.frame62 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Kula_sk_s_handong;
}());
__reflect(Kula_sk_s_handong.prototype, "Kula_sk_s_handong");
//# sourceMappingURL=Kula_sk_s_handong.js.map