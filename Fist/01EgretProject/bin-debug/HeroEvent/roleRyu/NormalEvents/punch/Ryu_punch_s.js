var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_punch_s = (function () {
    function Ryu_punch_s() {
    }
    Ryu_punch_s.addSprite20416 = function (mc, own_role) {
        mc.addFrameScript(mc, [4, Ryu_punch_s.frame4, 7, Ryu_punch_s.frame7, 10, Ryu_punch_s.frame10, 21, Ryu_punch_s.frame21]);
        return;
    };
    Ryu_punch_s.frame4 = function (mc) {
        //_level0.pl_snd.start();
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20401 = Ryu_a20401.getInstance(_parentRole);
        a20401.Vx = 21;
        a20401.flag = "";
        a20401.target = "";
    };
    Ryu_punch_s.frame7 = function (mc) {
        var hitxheck = Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack = "hurt2";
        hitxheck.hurtAway = "hurt6";
        hitxheck.flag = 1;
        hitxheck.end_status = "";
        hitxheck.Vx = 10;
        hitxheck.Vy = 0;
        hitxheck.a = 3;
        hitxheck.g = 0;
        hitxheck.freezeTime2 = 0;
        hitxheck.freezeTime = 3;
        hitxheck.slowTime = 0;
        hitxheck.shake = 0;
        hitxheck.d_rate = 0.2;
        hitxheck.isObj = false;
        hitxheck.hitType = "hitFire1";
        hitxheck.hitEff = "";
        hitxheck.hitShinning = false;
        hitxheck.reCheck = true;
        hitxheck.checkTimes = 1;
        hitxheck.hitPos = "up";
    };
    Ryu_punch_s.frame10 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.stop_move_X1();
        var hitxheck = Hero_HitCheck.getInstance(mc);
        hitxheck.hurtBack = "hurt2";
        hitxheck.hurtAway = "hurt6";
        hitxheck.flag = 1;
        hitxheck.end_status = "";
        hitxheck.Vx = 18;
        hitxheck.Vy = 0;
        hitxheck.a = 3;
        hitxheck.g = 0;
        hitxheck.freezeTime2 = 0;
        hitxheck.freezeTime = 5;
        hitxheck.slowTime = 0;
        hitxheck.shake = 0;
        hitxheck.d_rate = 0.7;
        hitxheck.isObj = false;
        hitxheck.hitType = "hitFire1";
        hitxheck.hitEff = "";
        hitxheck.hitShinning = false;
        hitxheck.reCheck = true;
        hitxheck.checkTimes = 1;
        hitxheck.hitPos = "up";
    };
    Ryu_punch_s.frame21 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Ryu_punch_s;
}());
__reflect(Ryu_punch_s.prototype, "Ryu_punch_s");
//# sourceMappingURL=Ryu_punch_s.js.map