var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_sk_xuanyuan = (function () {
    function Chunli_sk_xuanyuan() {
    }
    Chunli_sk_xuanyuan.addSprite15218 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Chunli_sk_xuanyuan.frame3, 7, Chunli_sk_xuanyuan.frame7, 16, Chunli_sk_xuanyuan.frame16, 20, Chunli_sk_xuanyuan.frame20, 22, Chunli_sk_xuanyuan.frame22, 36, Chunli_sk_xuanyuan.frame36]);
        return;
    };
    Chunli_sk_xuanyuan.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4023 = Chunli_a4023.getInstance(_parentRole);
        a4023.Vx = 20;
        a4023.Vy = 0;
        a4023.Va = 0;
        a4023.Vg = 1;
        a4023.Vx_min = 0;
        a4023.posY2 = "";
        a4023.flag = "";
        a4023.end_status = "";
    };
    Chunli_sk_xuanyuan.frame7 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 3;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire1";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.5;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = 20;
        htcheck.a = 0;
        htcheck.Vx = 20;
        htcheck.freezeTime2 = 3;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_xuanyuan.frame16 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4023 = Chunli_a4023.getInstance(_parentRole);
        a4023.Vx = 20;
        a4023.Vy = 0;
        a4023.Va = 0;
        a4023.Vg = 1;
        a4023.Vx_min = 0;
        a4023.posY2 = "";
        a4023.flag = "";
        a4023.end_status = "";
    };
    Chunli_sk_xuanyuan.frame20 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 3;
        htcheck.isObj = false;
        htcheck.hitPos = "";
        htcheck.hitType = "hitFire_h";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "hurt2";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 0.5;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = -20;
        htcheck.a = 0;
        htcheck.Vx = 10;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_xuanyuan.frame22 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.freezeTime = 4;
        htcheck.isObj = false;
        htcheck.hitPos = "land";
        htcheck.hitType = "hitFire_h";
        htcheck.hitShinning = false;
        htcheck.hitEff = "";
        htcheck.hurtAway = "hurt3";
        htcheck.hurtBack = "";
        htcheck.end_status = "";
        htcheck.slowTime = 0;
        htcheck.checkTimes = 1;
        htcheck.d_rate = 1;
        htcheck.flag = 1;
        htcheck.g = 0;
        htcheck.Vy = -20;
        htcheck.a = 0;
        htcheck.Vx = 10;
        htcheck.freezeTime2 = 0;
        htcheck.shake = 0;
        htcheck.reCheck = true;
    };
    Chunli_sk_xuanyuan.frame36 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_sk_xuanyuan;
}());
__reflect(Chunli_sk_xuanyuan.prototype, "Chunli_sk_xuanyuan");
//# sourceMappingURL=Chunli_sk_xuanyuan.js.map