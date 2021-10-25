class Hero_HitCheck {

    public hurtBack: string;
    public hurtAway: string;
    public flag: any;
    public end_status: string;
    public Vx: number;
    public Vy: number;
    public a: number;
    public g: number;
    public freezeTime2: number;
    public freezeTime: number;
    public slowTime: number;
    public shake: number;
    public d_rate: number;
    public isObj: boolean;
    public hitType: string;
    public hitEff: string;
    public hitShinning;
    public reCheck: boolean;
    public checkTimes: number;
    public hitPos: string;
    public nohit_status: Array<string> = [];
    public nohit_skills: Array<string> = [];

    public static HHs: Array<Hero_HitCheck> = [];
    public static called_HHCs: Array<boolean> = [];

    constructor() {
        return;
    }

    public static getInstance(owner: any, initlize: boolean = true): Hero_HitCheck {
        if (Hero_HitCheck.HHs[owner.hashCode] == undefined) {
            Hero_HitCheck.HHs[owner.hashCode] = new Hero_HitCheck();
            Hero_HitCheck.called_HHCs[owner.hashCode] = false;
        } else if (initlize) {
            Hero_HitCheck.called_HHCs[owner.hashCode] = false;
        }
        return Hero_HitCheck.HHs[owner.hashCode];
    }


    public static clearInstance(owner: any) {
        let hashindex: number;
        if (owner instanceof zmovie.ZMovieClip) {
            hashindex = owner.hashCode;
        } else {
            hashindex = owner;
        }
        if (Hero_HitCheck.HHs[hashindex] != undefined) {
            delete Hero_HitCheck.HHs[hashindex];
            delete Hero_HitCheck.called_HHCs[hashindex];
        }
    }


    public static addEventHitCheck(MC: zmovie.ZMovieClip, own_role: Role) {
        let hero_HitCheck = Hero_HitCheck.getInstance(MC.parent, false);
        if (Hero_HitCheck.called_HHCs[MC.parent.hashCode] == undefined
            || Hero_HitCheck.called_HHCs[MC.parent.hashCode] == true) {//帧事件重复调用
            return;
        }
        if (hero_HitCheck.hurtBack == undefined) {
            Hero_HitCheck.clearInstance(MC.parent);//帧事件已完成调用
            return;
        }
        Hero_HitCheck.called_HHCs[MC.parent.hashCode] = true;
        MC.stop();
        MC.visible = false;
        let hitValue = new HitValue();
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
        let hitcheck = new HitCheck();
        hitcheck.start_hitCheck(hitValue, own_role);
    }
}