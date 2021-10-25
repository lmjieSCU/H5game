var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Hero_flyingObj = (function () {
    function Hero_flyingObj() {
        this.doaction_params = [];
        this.nohit_status = [];
        this.nohit_skills = [];
        return;
    }
    Hero_flyingObj.getInstance = function (owner, initlize) {
        if (initlize === void 0) { initlize = true; }
        if (Hero_flyingObj.HHs[owner.hashCode] == undefined) {
            Hero_flyingObj.HHs[owner.hashCode] = new Hero_flyingObj();
            Hero_flyingObj.called_HHCs[owner.hashCode] = false;
        }
        else if (initlize) {
            Hero_flyingObj.called_HHCs[owner.hashCode] = false;
        }
        return Hero_flyingObj.HHs[owner.hashCode];
    };
    Hero_flyingObj.clearInstance = function (owner) {
        var hashindex;
        if (owner instanceof zmovie.ZMovieClip) {
            hashindex = owner.hashCode;
        }
        else {
            hashindex = owner;
        }
        if (Hero_flyingObj.HHs[hashindex] != undefined) {
            delete Hero_flyingObj.HHs[hashindex];
            delete Hero_flyingObj.called_HHCs[hashindex];
        }
    };
    Hero_flyingObj.addEventflyingObj = function (MC, own_role) {
        var hero_flyingobj = Hero_flyingObj.getInstance(MC.parent, false);
        if (Hero_flyingObj.called_HHCs[MC.parent.hashCode] == undefined
            || Hero_flyingObj.called_HHCs[MC.parent.hashCode] == true) {
            return;
        }
        if (hero_flyingobj.hurtBack == undefined) {
            Hero_flyingObj.clearInstance(MC.parent);
            return;
        }
        Hero_flyingObj.called_HHCs[MC.parent.hashCode] = true;
        MC.stop();
        MC.visible = false;
        var hitValue = new HitValue();
        hitValue.area = MC;
        hitValue.hurtBack = hero_flyingobj.hurtBack;
        hitValue.hurtAway = hero_flyingobj.hurtAway;
        hitValue.flag = hero_flyingobj.flag;
        hitValue.end_status = hero_flyingobj.end_status;
        hitValue.Vx = hero_flyingobj.Vx;
        hitValue.Vy = hero_flyingobj.Vy;
        hitValue.a = hero_flyingobj.a;
        hitValue.g = hero_flyingobj.g;
        hitValue.freezeTime2 = hero_flyingobj.freezeTime2;
        hitValue.freezeTime = hero_flyingobj.freezeTime;
        hitValue.slowTime = hero_flyingobj.slowTime;
        hitValue.shake = hero_flyingobj.shake;
        hitValue.d_rate = hero_flyingobj.d_rate;
        hitValue.isObj = hero_flyingobj.isObj;
        hitValue.hitType = hero_flyingobj.hitType;
        hitValue.hitEff = hero_flyingobj.hitEff;
        hitValue.hitShinning = hero_flyingobj.hitShinning;
        hitValue.reCheck = hero_flyingobj.reCheck;
        hitValue.checkTimes = hero_flyingobj.checkTimes;
        hitValue.hitPos = hero_flyingobj.hitPos;
        hitValue.nohit_skills = hero_flyingobj.nohit_skills;
        hitValue.nohit_status = hero_flyingobj.nohit_status;
        var flyingobj = new flyingObj();
        (MC.parent)["flyingobj"] = flyingobj;
        //赋值flyingobj
        flyingobj.init_hit(hitValue, own_role, hero_flyingobj.obj_level);
        if (flyingobj[hero_flyingobj.doaction]) {
            (_a = flyingobj[hero_flyingobj.doaction]).call.apply(_a, [flyingobj].concat(hero_flyingobj.doaction_params));
        }
        var _a;
    };
    Hero_flyingObj.HHs = [];
    Hero_flyingObj.called_HHCs = [];
    return Hero_flyingObj;
}());
__reflect(Hero_flyingObj.prototype, "Hero_flyingObj");
//# sourceMappingURL=Hero_flyingobj.js.map