var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_punch_l = (function () {
    function K_punch_l() {
    }
    K_punch_l.addSprite5326 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, K_punch_l.frame2, 3, K_punch_l.frame3, 5, K_punch_l.frame6]);
        return;
    };
    K_punch_l.frame2 = function () {
        // _level0.pl_snd.start();
        return;
    };
    K_punch_l.frame3 = function (mc) {
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "hurt1";
        hitcheck.hurtAway = "hurt6";
        hitcheck.flag = "s2";
        hitcheck.end_status = "";
        hitcheck.Vx = 16;
        hitcheck.Vy = 0;
        hitcheck.a = 3;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 2;
        hitcheck.freezeTime = 4;
        hitcheck.slowTime = 0;
        hitcheck.shake = 0;
        hitcheck.d_rate = 0.5;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitfire_l";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    K_punch_l.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
        return;
    };
    return K_punch_l;
}());
__reflect(K_punch_l.prototype, "K_punch_l");
//# sourceMappingURL=K_punch_l.js.map