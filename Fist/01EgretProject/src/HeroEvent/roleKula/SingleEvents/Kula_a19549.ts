class Kula_a19549 {

    public soundArray: Array<any>;
    public loop:number;
    public startPos:number;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Kula_a19549;
    public static instance_Second: Kula_a19549;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Kula_a19549 {
        if (Kula_a19549.Firstowner == null) {
            Kula_a19549.Firstowner = owner;
            Kula_a19549.instance_First = new Kula_a19549();
            _level0.instance_First.push(this);
            return Kula_a19549.instance_First;
        } else if (Kula_a19549.Firstowner == owner) {
            if (firstCall) {
                Kula_a19549.instance_First.firstCall = true;
            }
            return Kula_a19549.instance_First;
        } else {
            if (Kula_a19549.instance_Second == null) {
                Kula_a19549.instance_Second = new Kula_a19549();
            }
            if (firstCall) {
                Kula_a19549.instance_Second.firstCall = true;
            }
            return Kula_a19549.instance_Second;
        }
    }

    public static addEventa19549(MC: zmovie.ZMovieClip, own_role: Role) {
        let a19549 = Kula_a19549.getInstance(own_role, false);
        if(!a19549.firstCall){
            return;
        }
        a19549.firstCall = false;
        MC.visible = false;
        if(a19549.soundArray==undefined){
            return;
        }
        let num = a19549.soundArray.length;
        let id = Math.floor(Math.random() * num);
        let soundName = a19549.soundArray[id];
        if(soundName == "none"){
            return undefined;
        }
        let music = new egret.Sound();
        if(RES.getRes(soundName)!=null){
            music = RES.getRes(soundName);
            music.play(a19549.startPos,a19549.loop);
        }
    }
}