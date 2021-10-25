class Kula_a6519 {
    public startPos:number;
    public loop:number;
    public soundArray: Array<any>;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Kula_a6519;
    public static instance_Second: Kula_a6519;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Kula_a6519 {
        if (Kula_a6519.Firstowner == null) {
            Kula_a6519.Firstowner = owner;
            Kula_a6519.instance_First = new Kula_a6519();
            _level0.instance_First.push(this);
            return Kula_a6519.instance_First;
        } else if (Kula_a6519.Firstowner == owner) {
            if (firstCall) {
                Kula_a6519.instance_First.firstCall = true;
            }
            return Kula_a6519.instance_First;
        } else {
            if (Kula_a6519.instance_Second == null) {
                Kula_a6519.instance_Second = new Kula_a6519();
            }
            if (firstCall) {
                Kula_a6519.instance_Second.firstCall = true;
            }
            return Kula_a6519.instance_Second;
        }
    }

    public static addEventa6519(MC: zmovie.ZMovieClip, own_role: Role) {
        let a6519 = Kula_a6519.getInstance(own_role, false);
        if(!a6519.firstCall){
            return;
        }
        if(own_role.isKO){
            return undefined;
        }
        a6519.firstCall = false;
        MC.visible = false;
        let num = a6519.soundArray.length;
        let id = Math.floor(Math.random() * num);
        let soundName = a6519.soundArray[id];
        if(soundName == "none"){
            return undefined;
        }
        let music = new egret.Sound();
        if(RES.getRes(soundName)!=null){
            music = RES.getRes(soundName+"_mp3");
            music.play(a6519.startPos,a6519.loop);
        }
    }
}