var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_sk_yuedu2 = (function () {
    function Moriya_sk_yuedu2() {
    }
    Moriya_sk_yuedu2.addSprite4172 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Moriya_sk_yuedu2.frame2, 14, Moriya_sk_yuedu2.frame14, 24, Moriya_sk_yuedu2.frame24, 28, Moriya_sk_yuedu2.frame28, 32, Moriya_sk_yuedu2.frame32, 38, Moriya_sk_yuedu2.frame38]);
        return;
    };
    Moriya_sk_yuedu2.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.countStart(20, "down");
        var a4116 = Moriya_a4116.getInstance(_parentRole);
        a4116.flag = "att";
        a4116.freeze = false;
        // function playSound() {
        //     var _loc2_ = new Sound(this);
        //     _loc2_.attachSound("defend.wav");
        //     _loc2_.start();
        // }
        // _parent.countStart(2, "down");
        // var owner = this;
        // s_mc.onHit = function () {
        //     owner.playSound();
        // };
    };
    Moriya_sk_yuedu2.frame14 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.countEnd();
    };
    Moriya_sk_yuedu2.frame24 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Moriya_sk_yuedu2.frame28 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 15;
        htcheck.Vy = 30;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 10;
        htcheck.freezeTime = 8;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire_cut_lb2";
        htcheck.hitEff = "";
        htcheck.hitShinning = true;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_sk_yuedu2.frame32 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.countEnd();
    };
    Moriya_sk_yuedu2.frame38 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_sk_yuedu2;
}());
__reflect(Moriya_sk_yuedu2.prototype, "Moriya_sk_yuedu2");
//# sourceMappingURL=Moriya_sk_yuedu2.js.map