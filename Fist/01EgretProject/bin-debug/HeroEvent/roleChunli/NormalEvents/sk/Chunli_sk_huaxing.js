var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_sk_huaxing = (function () {
    function Chunli_sk_huaxing() {
    }
    Chunli_sk_huaxing.addSprite14971 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Chunli_sk_huaxing.frame1, 3, Chunli_sk_huaxing.frame3, 5, Chunli_sk_huaxing.frame5, 8, Chunli_sk_huaxing.frame8, 10, Chunli_sk_huaxing.frame10, 21, Chunli_sk_huaxing.frame21]);
        return;
    };
    Chunli_sk_huaxing.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.hitPos = "down";
    };
    Chunli_sk_huaxing.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3395 = Chunli_a3395.getInstance(_parentRole);
        a3395.Vx = 15;
        a3395.flag = "";
        a3395.target = "";
        // soundArray = [];
        // soundArray[0] = "mai_att_m1";
        // startPos = 0;
        // loop = 1;
    };
    Chunli_sk_huaxing.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 3;
        htcheck.isObj = false;
        htcheck.hitPos = "down";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "getup1";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.5;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 25;
        htcheck.a = 0;
        htcheck.Vx = 12;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_huaxing.frame8 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.p_snd.start();
    };
    Chunli_sk_huaxing.frame10 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 6;
        htcheck.isObj = false;
        htcheck.hitPos = "down";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "getup1";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 1;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 25;
        htcheck.a = 0;
        htcheck.Vx = 12;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_huaxing.frame21 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_sk_huaxing;
}());
__reflect(Chunli_sk_huaxing.prototype, "Chunli_sk_huaxing");
//# sourceMappingURL=Chunli_sk_huaxing.js.map