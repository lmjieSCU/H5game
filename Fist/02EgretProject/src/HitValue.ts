class HitValue {

    public hurtBack: string;
    public hurtAway: string;
    public flag: any;
    public end_status: string;
    public Vx: number;
    public Vy: number;
    public a: number;
    public g: number;
    public freezeTime2: number = 3;
    public freezeTime: number = 3;
    public slowTime: number;
    public shake: number;
    public d_rate: number;
    public isObj: boolean;
    public hitType: string;
    public hitEff: string;
    public hitShinning: boolean;
    public reCheck: boolean;
    public checkTimes: number;
    public hitPos: string;
    public area: zmovie.ZMovieClip;
    public nohit_status: Array<string> = [];
    public nohit_skills: Array<string> = [];


    constructor() {
    }

}