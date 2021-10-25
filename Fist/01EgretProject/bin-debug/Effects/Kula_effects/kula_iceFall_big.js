var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var kula_iceFall_big = (function () {
    function kula_iceFall_big() {
    }
    kula_iceFall_big.addSprite18633 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, kula_iceFall_big.frame1, 11, kula_iceFall_big.frame11]);
        mc["own_role"] = own_role;
        return;
    };
    kula_iceFall_big.frame1 = function (mc) {
        var hero_flyingobj = Hero_flyingObj.getInstance(mc);
        hero_flyingobj.obj_Vx = 0;
        hero_flyingobj.obj_Vy = 0;
        hero_flyingobj.obj_level = 0;
        hero_flyingobj.hurtBack = "";
        hero_flyingobj.hurtAway = "hurt3";
        hero_flyingobj.flag = 1;
        hero_flyingobj.end_status = "";
        hero_flyingobj.Vx = 20;
        hero_flyingobj.Vy = -20;
        hero_flyingobj.a = 3;
        hero_flyingobj.g = 0;
        hero_flyingobj.freezeTime2 = 0;
        hero_flyingobj.freezeTime = 3;
        hero_flyingobj.slowTime = 0;
        hero_flyingobj.shake = 2;
        hero_flyingobj.d_rate = 2;
        hero_flyingobj.isObj = true;
        hero_flyingobj.hitType = "hitFire_h";
        hero_flyingobj.hitEff = "hitEff_ice1";
        hero_flyingobj.reCheck = true;
        hero_flyingobj.checkTimes = 1;
        hero_flyingobj.hitPos = "";
        mc.x = mc["own_role"].x;
        var pos_target = mc["own_role"].opp.localToGlobal();
        var pos_obj = mc.localToGlobal();
        hero_flyingobj.doaction_params = [60, pos_obj.x, pos_obj.y, pos_target.x, pos_target.y - 50];
        mc.addWaitingCallFun(mc, ['onLand', kula_iceFall_big.frame1_onLand, [mc], 'onHit', kula_iceFall_big.frame1_onHit, [mc]]);
    };
    kula_iceFall_big.frame1_onLand = function (mc) {
        mc.gotoAndStop('hit');
    };
    kula_iceFall_big.frame1_onHit = function (mc) {
        //icebody.stop();
    };
    kula_iceFall_big.frame11 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return kula_iceFall_big;
}());
__reflect(kula_iceFall_big.prototype, "kula_iceFall_big");
//# sourceMappingURL=kula_iceFall_big.js.map