class Moriya_a3565 {

    public soundArray: Array<any>;
    public loop:number;
    public startPos:number;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Moriya_a3565;
    public static instance_Second: Moriya_a3565;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Moriya_a3565 {
        if (Moriya_a3565.Firstowner == null) {
            Moriya_a3565.Firstowner = owner;
            Moriya_a3565.instance_First = new Moriya_a3565();
            _level0.instance_First.push(this);
            return Moriya_a3565.instance_First;
        } else if (Moriya_a3565.Firstowner == owner) {
            if (firstCall) {
                Moriya_a3565.instance_First.firstCall = true;
            }
            return Moriya_a3565.instance_First;
        } else {
            if (Moriya_a3565.instance_Second == null) {
                Moriya_a3565.instance_Second = new Moriya_a3565();
            }
            if (firstCall) {
                Moriya_a3565.instance_Second.firstCall = true;
            }
            return Moriya_a3565.instance_Second;
        }
    }

    public static addEventa3565(MC: zmovie.ZMovieClip, own_role: Role) {
        let a3565 = Moriya_a3565.getInstance(own_role, false);
        if(!a3565.firstCall){
            return;
        }
        a3565.firstCall = false;
        MC.visible = false;
        if(a3565.soundArray==undefined){
            return;
        }
        let num = a3565.soundArray.length;
        let id = Math.floor(Math.random() * num);
        let soundName = a3565.soundArray[id];
        if(soundName == "none"){
            return undefined;
        }
        let music = new egret.Sound();
        if(RES.getRes(soundName)!=null){
            music = RES.getRes(soundName);
            music.play(a3565.startPos,a3565.loop);
        }
    }
}