class Hero_HitCheck_obj {

    public obj_Vx: number;
    public obj_Vy: number;
    public obj_level: number;
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


    public static HHOs: Array<Hero_HitCheck_obj> = [];
    public static called_HHCOs: Array<boolean> = [];
    private constructor() {
        return;
    }



    public static getInstance(mc: any, initlize: boolean = true): Hero_HitCheck_obj {
        if (Hero_HitCheck_obj.HHOs[mc.hashCode] == undefined) {
            Hero_HitCheck_obj.HHOs[mc.hashCode] = new Hero_HitCheck_obj();
            Hero_HitCheck_obj.called_HHCOs[mc.hashCode] = false;
        } else if (initlize) {
            Hero_HitCheck_obj.called_HHCOs[mc.hashCode] = false;
        }
        return Hero_HitCheck_obj.HHOs[mc.hashCode];

    }

    public static clearInstance(mc: any) {
        let hashindex: number;
        if (mc instanceof zmovie.ZMovieClip) {
            hashindex = mc.hashCode;
        } else {
            hashindex = mc;
        }
        if (Hero_HitCheck_obj.HHOs[hashindex] != undefined) {
            delete Hero_HitCheck_obj.HHOs[hashindex];
            delete Hero_HitCheck_obj.called_HHCOs[hashindex];
        }
    }

    public static addEventHitCheck_obj(MC: zmovie.ZMovieClip, own_role: Role) {
        let hero_HitCheck_obj = Hero_HitCheck_obj.getInstance(MC.parent, false);
        if (Hero_HitCheck_obj.called_HHCOs[MC.parent.hashCode] == undefined
            || Hero_HitCheck_obj.called_HHCOs[MC.parent.hashCode] == true) {
            return;
        }
        if (hero_HitCheck_obj.hurtBack == undefined) {
            Hero_HitCheck_obj.clearInstance(MC.parent);
            return;
        }
        Hero_HitCheck_obj.called_HHCOs[MC.parent.hashCode] = true;
        MC.stop();
        MC.visible = false;
        let hitValue = new HitValue();
        hitValue.area = MC;
        hitValue.hurtBack = hero_HitCheck_obj.hurtBack;
        hitValue.hurtAway = hero_HitCheck_obj.hurtAway;
        hitValue.flag = hero_HitCheck_obj.flag;
        hitValue.end_status = hero_HitCheck_obj.end_status;
        hitValue.Vx = hero_HitCheck_obj.Vx;
        hitValue.Vy = hero_HitCheck_obj.Vy;
        hitValue.a = hero_HitCheck_obj.a;
        hitValue.g = hero_HitCheck_obj.g;
        hitValue.freezeTime2 = hero_HitCheck_obj.freezeTime2;
        hitValue.freezeTime = hero_HitCheck_obj.freezeTime;
        hitValue.slowTime = hero_HitCheck_obj.slowTime;
        hitValue.shake = hero_HitCheck_obj.shake;
        hitValue.d_rate = hero_HitCheck_obj.d_rate;
        hitValue.isObj = hero_HitCheck_obj.isObj;
        hitValue.hitType = hero_HitCheck_obj.hitType;
        hitValue.hitEff = hero_HitCheck_obj.hitEff;
        hitValue.hitShinning = hero_HitCheck_obj.hitShinning;
        hitValue.reCheck = hero_HitCheck_obj.reCheck;
        hitValue.checkTimes = hero_HitCheck_obj.checkTimes;
        hitValue.hitPos = hero_HitCheck_obj.hitPos;
        hitValue.nohit_skills = hero_HitCheck_obj.nohit_skills;
        hitValue.nohit_status = hero_HitCheck_obj.nohit_status;
        // hitV = {area: s1, Vx: Vx, Vy: Vy, a: a, g: g, hitShinning: hitShinning, reCheck: reCheck, checkTimes: checkTimes, hitPos: hitPos, hurtBack: hurtBack, hurtAway: hurtAway, freezeTime: freezeTime, freezeTime2: freezeTime2, slowTime: slowTime, hitType: hitType, hitEff: hitEff, d_rate: d_rate, flag: flag, shake: shake, end_status: end_status, isObj: isObj, nohit_status: nohit_status, nohit_skills: nohit_skills};
        let hitcheck_obj = new HitCheck_obj();
        (MC.parent)["hitcheck_obj"] = hitcheck_obj;
        hitcheck_obj.start_hitCheck(hitValue, own_role);
    }


}