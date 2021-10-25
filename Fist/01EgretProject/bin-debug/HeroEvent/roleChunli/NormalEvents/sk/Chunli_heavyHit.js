var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_heavyHit = (function () {
    function Chunli_heavyHit() {
    }
    Chunli_heavyHit.addSprite14919 = function (mc, own_role) {
        mc.addFrameScript(mc, [7, Chunli_heavyHit.frame7, 22, Chunli_heavyHit.frame22]);
        return;
    };
    Chunli_heavyHit.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt4";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = 17;
        hitcheck.Vy = 40;
        hitcheck.a = 0;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 5;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 2;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire0";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = false;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
        // soundArray = [];
        // soundArray[0] = "chunli_att_l2";
        // startPos = 0;
        // loop = 1;
    };
    Chunli_heavyHit.frame22 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_heavyHit;
}());
__reflect(Chunli_heavyHit.prototype, "Chunli_heavyHit");
//# sourceMappingURL=Chunli_heavyHit.js.map