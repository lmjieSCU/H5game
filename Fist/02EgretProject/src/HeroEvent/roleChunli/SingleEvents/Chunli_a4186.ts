class Chunli_a4186 {

    public _name: string;
    public MC: zmovie.ZMovieClip;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Chunli_a4186;
    public static instance_Second: Chunli_a4186;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Chunli_a4186 {
        if (Chunli_a4186.Firstowner == null) {
            Chunli_a4186.Firstowner = owner;
            Chunli_a4186.instance_First = new Chunli_a4186();
            _level0.instance_First.push(this);
            return Chunli_a4186.instance_First;
        } else if (Chunli_a4186.Firstowner == owner) {
            if (firstCall) {
                Chunli_a4186.instance_First.firstCall = true;
            }
            return Chunli_a4186.instance_First;
        } else {
            if (Chunli_a4186.instance_Second == null) {
                Chunli_a4186.instance_Second = new Chunli_a4186();
            }
            if (firstCall) {
                Chunli_a4186.instance_Second.firstCall = true;
            }
            return Chunli_a4186.instance_Second;
        }
    }

    public static addEventa4186(MC: zmovie.ZMovieClip, own_role: Role) {
        let a825 = Chunli_a4186.getInstance(own_role,false);
        if (!a825.firstCall) {
            return;
        }
        //a825.firstCall = false;
        a825.MC = MC;
        MC.visible = false;
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));      
    }
}