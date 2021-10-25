var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_a18537 = (function () {
    function Kula_a18537() {
    }
    Kula_a18537.addEventa18537 = function (MC, own_role) {
        var hitcheck_obj = Hero_HitCheck_obj.getInstance(MC);
        hitcheck_obj.obj_Vx = 0;
        hitcheck_obj.obj_Vy = 0;
        hitcheck_obj.obj_level = 0;
        hitcheck_obj.hurtBack = "hurt3";
        hitcheck_obj.hurtAway = "hurt3";
        hitcheck_obj.flag = 1;
        hitcheck_obj.end_status = "";
        hitcheck_obj.Vx = 25;
        hitcheck_obj.Vy = 20;
        hitcheck_obj.a = 3;
        hitcheck_obj.g = 0;
        hitcheck_obj.freezeTime2 = 0;
        hitcheck_obj.freezeTime = 1;
        hitcheck_obj.slowTime = 0;
        hitcheck_obj.shake = 0;
        hitcheck_obj.d_rate = 0.4;
        hitcheck_obj.isObj = true;
        hitcheck_obj.hitType = "hitFire1";
        hitcheck_obj.hitEff = "hitEff_ice1";
        hitcheck_obj.hitShinning = true;
        hitcheck_obj.reCheck = true;
        hitcheck_obj.checkTimes = 1;
        hitcheck_obj.hitPos = "";
        console.log(MC.getCurrFrame());
        // MC['own_role'] = own_role;
        // MC.addFrameScript(MC, [1, Kula_a18537.frame1, 4, Kula_a18537.frame4]);
    };
    Kula_a18537.frame1 = function (MC) {
        EventroleKula_skill.singleFrameEvent["HitCheck_obj"].call(Hero_HitCheck_obj, MC.$children[0], MC['own_role']);
    };
    Kula_a18537.frame4 = function (MC) {
        console.log("is in frame4");
    };
    return Kula_a18537;
}());
__reflect(Kula_a18537.prototype, "Kula_a18537");
//# sourceMappingURL=Kula_a18537.js.map