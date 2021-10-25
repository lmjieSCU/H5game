class Chunli_a14552 {

    public soundArray:Array<string>;
    public startPos:number;
    public loop:number;;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Chunli_a14552;
    public static instance_Second: Chunli_a14552;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Chunli_a14552 {
        if (Chunli_a14552.Firstowner == null) {
            Chunli_a14552.Firstowner = owner;
            Chunli_a14552.instance_First = new Chunli_a14552();
            _level0.instance_First.push(this);
            return Chunli_a14552.instance_First;
        } else if (Chunli_a14552.Firstowner == owner) {
            if (firstCall) {
                Chunli_a14552.instance_First.firstCall = true;
            }
            return Chunli_a14552.instance_First;
        } else {
            if (Chunli_a14552.instance_Second == null) {
                Chunli_a14552.instance_Second = new Chunli_a14552();
            }
            if (firstCall) {
                Chunli_a14552.instance_Second.firstCall = true;
            }
            return Chunli_a14552.instance_Second;
        }
    }

    public static addEventa14552(MC: zmovie.ZMovieClip, own_role: Role) {
        let a14552 = Chunli_a14552.getInstance(own_role, false);
        if (!a14552.firstCall) {
            return;
        }
        a14552.firstCall = false;
        MC.visible = false;
        // var num = a14552.soundArray.length;
        // var id = Math.floor(Math.random() * num);
        // var soundName = a14552.soundArray[id];
        // if(soundName == "none")
        // {
        // return undefined;
        // }
        // var sound_snd = new Sound(this);
        // sound_snd.attachSound(soundName);
        // sound_snd.start(startPos,loop);
        // return;
    }
}