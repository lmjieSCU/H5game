var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var kula_ice_xingchen = (function () {
    function kula_ice_xingchen() {
    }
    kula_ice_xingchen.addSprite18630 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, kula_ice_xingchen.frame1, 5, kula_ice_xingchen.frame8]);
        mc["own_role"] = own_role;
        return;
    };
    kula_ice_xingchen.frame1 = function (mc) {
        mc.stop();
        var scale = Math.floor(Math.random() * 2) + 0.4;
        mc.scaleX = scale;
        mc.scaleY = scale;
        var hero_flyingobj = Hero_flyingObj.getInstance(mc);
        hero_flyingobj.obj_Vx = 0;
        hero_flyingobj.obj_Vy = 0;
        hero_flyingobj.obj_level = 0;
        hero_flyingobj.hurtBack = "hurt1";
        hero_flyingobj.hurtAway = "hurt1";
        hero_flyingobj.flag = 1;
        hero_flyingobj.end_status = "";
        hero_flyingobj.Vx = 1;
        hero_flyingobj.Vy = 5;
        hero_flyingobj.a = 3;
        hero_flyingobj.g = 3;
        hero_flyingobj.freezeTime2 = 0;
        hero_flyingobj.freezeTime = 0;
        hero_flyingobj.slowTime = 0;
        hero_flyingobj.shake = 0;
        hero_flyingobj.d_rate = 0.14;
        hero_flyingobj.isObj = true;
        hero_flyingobj.hitType = "hitFire1";
        hero_flyingobj.hitEff = "hitEff_ice1";
        hero_flyingobj.reCheck = true;
        hero_flyingobj.checkTimes = 1;
        hero_flyingobj.hitPos = "";
        var pos_obj = mc.localToGlobal();
        var pos_target = { x: pos_obj.x + 600 * mc["own_role"].dir, y: pos_obj.y - Math.floor(Math.random() * 200 - 100) };
        hero_flyingobj.doaction_params = [60, pos_obj.x, pos_obj.y, pos_target.x, pos_target.y];
        mc.addWaitingCallFun(mc, ['onLand', kula_ice_xingchen.frame1_onLand, [mc]]);
    };
    kula_ice_xingchen.frame1_onLand = function (mc) {
        mc.gotoAndStop('hit');
        mc.resetFrameStop();
    };
    kula_ice_xingchen.frame8 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return kula_ice_xingchen;
}());
__reflect(kula_ice_xingchen.prototype, "kula_ice_xingchen");
//# sourceMappingURL=kula_ice_xingchen.js.map