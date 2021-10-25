var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Hero_HitCheck = (function () {
    function Hero_HitCheck() {
        this.nohit_status = [];
        this.nohit_skills = [];
        return;
    }
    Hero_HitCheck.getInstance = function (owner, initlize) {
        if (initlize === void 0) { initlize = true; }
        if (Hero_HitCheck.HHs[owner.hashCode] == undefined) {
            Hero_HitCheck.HHs[owner.hashCode] = new Hero_HitCheck();
            Hero_HitCheck.called_HHCs[owner.hashCode] = false;
        }
        else if (initlize) {
            Hero_HitCheck.called_HHCs[owner.hashCode] = false;
        }
        return Hero_HitCheck.HHs[owner.hashCode];
    };
    Hero_HitCheck.clearInstance = function (owner) {
        var hashindex;
        if (owner instanceof zmovie.ZMovieClip) {
            hashindex = owner.hashCode;
        }
        else {
            hashindex = owner;
        }
        if (Hero_HitCheck.HHs[hashindex] != undefined) {
            delete Hero_HitCheck.HHs[hashindex];
            delete Hero_HitCheck.called_HHCs[hashindex];
        }
    };
    Hero_HitCheck.addEventHitCheck = function (MC, own_role) {
        var hero_HitCheck = Hero_HitCheck.getInstance(MC.parent, false);
        if (Hero_HitCheck.called_HHCs[MC.parent.hashCode] == undefined
            || Hero_HitCheck.called_HHCs[MC.parent.hashCode] == true) {
            return;
        }
        if (hero_HitCheck.hurtBack == undefined) {
            Hero_HitCheck.clearInstance(MC.parent); //帧事件已完成调用
            return;
        }
        Hero_HitCheck.called_HHCs[MC.parent.hashCode] = true;
        MC.stop();
        MC.visible = false;
        var hitValue = new HitValue();
        hitValue.area = MC;
        hitValue.hurtBack = hero_HitCheck.hurtBack;
        hitValue.hurtAway = hero_HitCheck.hurtAway;
        hitValue.flag = hero_HitCheck.flag;
        hitValue.end_status = hero_HitCheck.end_status;
        hitValue.Vx = hero_HitCheck.Vx;
        hitValue.Vy = hero_HitCheck.Vy;
        hitValue.a = hero_HitCheck.a;
        hitValue.g = hero_HitCheck.g;
        hitValue.freezeTime2 = hero_HitCheck.freezeTime2;
        hitValue.freezeTime = hero_HitCheck.freezeTime;
        hitValue.slowTime = hero_HitCheck.slowTime;
        hitValue.shake = hero_HitCheck.shake;
        hitValue.d_rate = hero_HitCheck.d_rate;
        hitValue.isObj = hero_HitCheck.isObj;
        hitValue.hitType = hero_HitCheck.hitType;
        hitValue.hitEff = hero_HitCheck.hitEff;
        hitValue.hitShinning = hero_HitCheck.hitShinning;
        hitValue.reCheck = hero_HitCheck.reCheck;
        hitValue.checkTimes = hero_HitCheck.checkTimes;
        hitValue.hitPos = hero_HitCheck.hitPos;
        hitValue.nohit_skills = hero_HitCheck.nohit_skills;
        hitValue.nohit_status = hero_HitCheck.nohit_status;
        // console.log(MC.getCurrFrame(), (<zmovie.ZMovieClip>MC.parent)._mcName);
        // hitV = {area: this, Vx: Vx, Vy: Vy, a: a, g: g, hitShinning: hitShinning, reCheck: reCheck, checkTimes: checkTimes, hitPos: hitPos, hurtBack: hurtBack, hurtAway: hurtAway, freezeTime: freezeTime, freezeTime2: freezeTime2, slowTime: slowTime, hitType: hitType, hitEff: hitEff, d_rate: d_rate, flag: flag, shake: shake, end_status: end_status, isObj: isObj, nohit_status: nohit_status, nohit_skills: nohit_skills};
        var hitcheck = new HitCheck();
        hitcheck.start_hitCheck(hitValue, own_role);
    };
    Hero_HitCheck.HHs = [];
    Hero_HitCheck.called_HHCs = [];
    return Hero_HitCheck;
}());
__reflect(Hero_HitCheck.prototype, "Hero_HitCheck");
//# sourceMappingURL=Hero_HitCheck.js.map