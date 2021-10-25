var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var kula_ice_qixi = (function () {
    function kula_ice_qixi() {
    }
    kula_ice_qixi.addSprite18616 = function (mc, own_role) {
        mc.addFrameScript(mc, [4, kula_ice_qixi.frame4, 18, kula_ice_qixi.frame23]);
        return;
    };
    kula_ice_qixi.frame4 = function (mc) {
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "hurt2";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "";
        htcheck.Vx = 17;
        htcheck.Vy = 15;
        htcheck.a = 0;
        htcheck.g = 0;
        htcheck.freezeTime2 = 5;
        htcheck.freezeTime = 5;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1.7;
        htcheck.isObj = true;
        htcheck.hitType = "";
        htcheck.hitEff = "hitEff_ice1";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    kula_ice_qixi.frame23 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return kula_ice_qixi;
}());
__reflect(kula_ice_qixi.prototype, "kula_ice_qixi");
//# sourceMappingURL=kula_ice_qixi.js.map