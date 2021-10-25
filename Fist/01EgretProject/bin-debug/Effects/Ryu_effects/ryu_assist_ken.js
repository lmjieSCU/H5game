var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var ryu_assist_ken = (function () {
    function ryu_assist_ken() {
    }
    ryu_assist_ken.addSprite21272 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, ryu_assist_ken.frame1, 21, ryu_assist_ken.frame21, 39, ryu_assist_ken.frame39, 91, ryu_assist_ken.frame91,
        ]);
        mc['own_role'] = own_role;
        return;
    };
    ryu_assist_ken.frame1 = function (mc) {
        mc.x = mc['own_role'].opp.x;
    };
    ryu_assist_ken.frame21 = function (mc) {
        var a20745 = Ryu_a20745.getInstance(mc['own_role']);
        a20745.status_1 = "hurt3";
        a20745.flag = "3";
        a20745.hurt = true;
        a20745.land = false;
        a20745.downHit = false;
        a20745.func = null;
        a20745.posObj = "Ryu_a20744";
        Ryu_a20744.getInstance(mc['own_role'])._name = "Ryu_a20744";
        var hitcheck = Hero_HitCheck.getInstance(mc);
        hitcheck.hurtBack = "";
        hitcheck.hurtAway = "hurt4";
        hitcheck.flag = 1;
        hitcheck.end_status = "getup2";
        hitcheck.Vx = -8;
        hitcheck.Vy = 42;
        hitcheck.a = 0;
        hitcheck.g = 0;
        hitcheck.freezeTime2 = 0;
        hitcheck.freezeTime = 10;
        hitcheck.slowTime = 0;
        hitcheck.shake = 1;
        hitcheck.d_rate = 1;
        hitcheck.isObj = false;
        hitcheck.hitType = "hitFire_h";
        hitcheck.hitEff = "";
        hitcheck.hitShinning = true;
        hitcheck.reCheck = true;
        hitcheck.checkTimes = 1;
        hitcheck.hitPos = "";
    };
    ryu_assist_ken.frame39 = function (mc) {
        Ryu_a20657.getInstance(mc['own_role']).name = "wave_s3";
    };
    ryu_assist_ken.frame91 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return ryu_assist_ken;
}());
__reflect(ryu_assist_ken.prototype, "ryu_assist_ken");
//# sourceMappingURL=ryu_assist_ken.js.map