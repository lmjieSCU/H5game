class Terry_a8585 {
    public soundArray:Array<string>;
    public startPos:number;
    public loop:number;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Terry_a8585;
    public static instance_Second: Terry_a8585;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Terry_a8585 {
        if (Terry_a8585.Firstowner == null) {
            Terry_a8585.Firstowner = owner;
            Terry_a8585.instance_First = new Terry_a8585();
            _level0.instance_First.push(this);
            return Terry_a8585.instance_First;
        } else if (Terry_a8585.Firstowner == owner) {
            if (firstCall) {
                Terry_a8585.instance_First.firstCall = true;
            }
            return Terry_a8585.instance_First;
        } else {
            if (Terry_a8585.instance_Second == null) {
                Terry_a8585.instance_Second = new Terry_a8585();
            }
            if (firstCall) {
                Terry_a8585.instance_Second.firstCall = true;
            }
            return Terry_a8585.instance_Second;
        }
    }


    public static addEventa8585(MC: zmovie.ZMovieClip, own_role: Role) {
        let a8669 = Terry_a8585.getInstance(own_role, false);
        if (!a8669.firstCall) {
            return;
        }
        a8669.firstCall = false;
        MC.visible = false;
        var num = a8669.soundArray.length;
        var id = Math.floor(Math.random() * num);
        var soundName = a8669.soundArray[id];
        if(soundName == "none")
        {
        return undefined;
        }
        // var sound_snd = new Sound(this);
        // sound_snd.attachSound(soundName);
        // sound_snd.start(startPos,loop);
        // return;
    }
}