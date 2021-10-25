class Mai_a6519 {
    public startPos:number;
    public loop:number;
    public soundArray: Array<any>;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Mai_a6519;
    public static instance_Second: Mai_a6519;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Mai_a6519 {
        if (Mai_a6519.Firstowner == null) {
            Mai_a6519.Firstowner = owner;
            Mai_a6519.instance_First = new Mai_a6519();
            _level0.instance_First.push(this);
            return Mai_a6519.instance_First;
        } else if (Mai_a6519.Firstowner == owner) {
            if (firstCall) {
                Mai_a6519.instance_First.firstCall = true;
            }
            return Mai_a6519.instance_First;
        } else {
            if (Mai_a6519.instance_Second == null) {
                Mai_a6519.instance_Second = new Mai_a6519();
            }
            if (firstCall) {
                Mai_a6519.instance_Second.firstCall = true;
            }
            return Mai_a6519.instance_Second;
        }
    }

    public static addEventa6519(MC: zmovie.ZMovieClip, own_role: Role) {
        let a6519 = Mai_a6519.getInstance(own_role, false);
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