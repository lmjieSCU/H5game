var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var kula_jiejie_char = (function () {
    function kula_jiejie_char() {
    }
    kula_jiejie_char.addSprite18626 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, kula_jiejie_char.frame1, 2, kula_jiejie_char.frame2, 4, kula_jiejie_char.frame4, 7, kula_jiejie_char.frame7]);
        mc["own_role"] = own_role;
        return;
    };
    kula_jiejie_char.frame1 = function (mc) {
        var hero_flyingobj = Hero_flyingObj.getInstance(mc);
        hero_flyingobj.obj_Vx = 0;
        hero_flyingobj.obj_Vy = 0;
        hero_flyingobj.obj_level = 1;
        hero_flyingobj.hurtBack = "";
        hero_flyingobj.hurtAway = "hurt3";
        hero_flyingobj.flag = 1;
        hero_flyingobj.end_status = "";
        hero_flyingobj.Vx = 0;
        hero_flyingobj.Vy = 33;
        hero_flyingobj.a = 3;
        hero_flyingobj.g = 3;
        hero_flyingobj.freezeTime2 = 0;
        hero_flyingobj.freezeTime = 4;
        hero_flyingobj.slowTime = 0;
        hero_flyingobj.shake = 0;
        hero_flyingobj.d_rate = 1;
        hero_flyingobj.isObj = true;
        hero_flyingobj.hitType = "hitFire_cut";
        hero_flyingobj.hitEff = "";
        hero_flyingobj.reCheck = true;
        hero_flyingobj.checkTimes = 1;
        hero_flyingobj.hitPos = "";
        hero_flyingobj.doaction_params = [];
        mc.addWaitingCallFun(mc, ['onHit', kula_jiejie_char.frame1_onHit, [mc]]);
    };
    kula_jiejie_char.frame1_onHit = function (mc) {
        mc.resetFrameStop();
    };
    kula_jiejie_char.frame2 = function (mc) {
        mc["flyingobj"].moveX(60, mc["own_role"].dir);
    };
    kula_jiejie_char.frame4 = function (mc) {
        mc.stop();
    };
    kula_jiejie_char.frame7 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return kula_jiejie_char;
}());
__reflect(kula_jiejie_char.prototype, "kula_jiejie_char");
//# sourceMappingURL=kula_jiejie_char.js.map