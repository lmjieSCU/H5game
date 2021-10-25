class Mai_a6541 {

    public soundArray: Array<any>;
    public loop:number;
    public startPos:number;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Mai_a6541;
    public static instance_Second: Mai_a6541;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Mai_a6541 {
        if (Mai_a6541.Firstowner == null) {
            Mai_a6541.Firstowner = owner;
            Mai_a6541.instance_First = new Mai_a6541();
            _level0.instance_First.push(this);
            return Mai_a6541.instance_First;
        } else if (Mai_a6541.Firstowner == owner) {
            if (firstCall) {
                Mai_a6541.instance_First.firstCall = true;
            }
            return Mai_a6541.instance_First;
        } else {
            if (Mai_a6541.instance_Second == null) {
                Mai_a6541.instance_Second = new Mai_a6541();
            }
            if (firstCall) {
                Mai_a6541.instance_Second.firstCall = true;
            }
            return Mai_a6541.instance_Second;
        }
    }

    public static addEventa6541(MC: zmovie.ZMovieClip, own_role: Role) {
        let a6541 = Mai_a6541.getInstance(own_role, false);
        if(!a6541.firstCall){
            return;
        }
        a6541.firstCall = false;
        MC.visible = false;
        if(a6541.soundArray==undefined){
            return;
        }
        let num = a6541.soundArray.length;
        let id = Math.floor(Math.random() * num);
        let soundName = a6541.soundArray[id];
        if(soundName == "none"){
            return undefined;
        }
        let music = new egret.Sound();
        if(RES.getRes(soundName)!=null){
            music = RES.getRes(soundName);
            music.play(a6541.startPos,a6541.loop);
        }
    }
}