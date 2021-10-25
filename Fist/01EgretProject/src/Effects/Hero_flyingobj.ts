class Hero_flyingObj {

    public doaction: string;
    public doaction_params: Array<any> = [];
    public obj_level: number;
    public obj_Vx: number;
    public obj_Vy: number;
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

    public static HHs: Array<Hero_flyingObj> = [];
    public static called_HHCs: Array<boolean> = [];

    constructor() {
        return;
    }

    public static getInstance(owner: any, initlize: boolean = true): Hero_flyingObj {
        if (Hero_flyingObj.HHs[owner.hashCode] == undefined) {
            Hero_flyingObj.HHs[owner.hashCode] = new Hero_flyingObj();
            Hero_flyingObj.called_HHCs[owner.hashCode] = false;
        } else if (initlize) {
            Hero_flyingObj.called_HHCs[owner.hashCode] = false;
        }
        return Hero_flyingObj.HHs[owner.hashCode];
    }


    public static clearInstance(owner: any) {
        let hashindex: number;
        if (owner instanceof zmovie.ZMovieClip) {
            hashindex = owner.hashCode;
        } else {
            hashindex = owner;
        }
        if (Hero_flyingObj.HHs[hashindex] != undefined) {
            delete Hero_flyingObj.HHs[hashindex];
            delete Hero_flyingObj.called_HHCs[hashindex];
        }
    }


    public static addEventflyingObj(MC: zmovie.ZMovieClip, own_role: Role) {
        let hero_flyingobj = Hero_flyingObj.getInstance(MC.parent, false);
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
        let hitValue = new HitValue();
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
        let flyingobj = new flyingObj();
        (MC.parent)["flyingobj"] = flyingobj;
        //赋值flyingobj
        flyingobj.init_hit(hitValue, own_role, hero_flyingobj.obj_level);
        if (flyingobj[hero_flyingobj.doaction]) {
            flyingobj[hero_flyingobj.doaction].call(flyingobj, ...hero_flyingobj.doaction_params);
        }
    }
}