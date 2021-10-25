class Moriya_a4186 {

    public _name: string;
    public MC: zmovie.ZMovieClip;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Moriya_a4186;
    public static instance_Second: Moriya_a4186;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Moriya_a4186 {
        if (Moriya_a4186.Firstowner == null) {
            Moriya_a4186.Firstowner = owner;
            Moriya_a4186.instance_First = new Moriya_a4186();
            _level0.instance_First.push(this);
            return Moriya_a4186.instance_First;
        } else if (Moriya_a4186.Firstowner == owner) {
            if (firstCall) {
                Moriya_a4186.instance_First.firstCall = true;
            }
            return Moriya_a4186.instance_First;
        } else {
            if (Moriya_a4186.instance_Second == null) {
                Moriya_a4186.instance_Second = new Moriya_a4186();
            }
            if (firstCall) {
                Moriya_a4186.instance_Second.firstCall = true;
            }
            return Moriya_a4186.instance_Second;
        }
    }

    public static addEventa4186(MC: zmovie.ZMovieClip, own_role: Role) {
        let a4186 = Moriya_a4186.getInstance(own_role,false);
        if (!a4186.firstCall) {
            return;
        }
        //a4186.firstCall = false;
        a4186.MC = MC;
        MC.visible = false;
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));      
    }
}