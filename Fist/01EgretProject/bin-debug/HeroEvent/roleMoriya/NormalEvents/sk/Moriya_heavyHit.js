var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_heavyHit = (function () {
    function Moriya_heavyHit() {
    }
    Moriya_heavyHit.addSprite3776 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Moriya_heavyHit.frame3, 4, Moriya_heavyHit.frame4, 9, Moriya_heavyHit.frame9, 23, Moriya_heavyHit.frame23]);
        return;
    };
    Moriya_heavyHit.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3565 = Moriya_a3565.getInstance(_parentRole);
        a3565.soundArray = [];
        a3565.soundArray[0] = "m_hit_v_h3";
        a3565.startPos = 0;
        a3565.loop = 1;
    };
    Moriya_heavyHit.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //_level0.k_snd.start();
    };
    Moriya_heavyHit.frame9 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var htcheck = Hero_HitCheck.getInstance(mc);
        htcheck.hurtBack = "";
        htcheck.hurtAway = "hurt3";
        htcheck.flag = 1;
        htcheck.end_status = "getup2";
        htcheck.Vx = 35;
        htcheck.Vy = 26;
        htcheck.a = 3;
        htcheck.g = 0;
        htcheck.freezeTime2 = 0;
        htcheck.freezeTime = 8;
        htcheck.slowTime = 0;
        htcheck.shake = 0;
        htcheck.d_rate = 1;
        htcheck.isObj = false;
        htcheck.hitType = "hitFire1";
        htcheck.hitEff = "";
        htcheck.hitShinning = false;
        htcheck.reCheck = true;
        htcheck.checkTimes = 1;
        htcheck.hitPos = "";
    };
    Moriya_heavyHit.frame23 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_heavyHit;
}());
__reflect(Moriya_heavyHit.prototype, "Moriya_heavyHit");
//# sourceMappingURL=Moriya_heavyHit.js.map