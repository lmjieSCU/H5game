class Chunli_a3563 {

    public flag: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Chunli_a3563;
    public static instance_Second: Chunli_a3563;

    constructor() {
        return;
    }

   public static getInstance(owner: Role, firstCall: boolean = true): Chunli_a3563 {
        if (Chunli_a3563.Firstowner == null) {
            Chunli_a3563.Firstowner = owner;
            Chunli_a3563.instance_First = new Chunli_a3563();
            _level0.instance_First.push(this);
            return Chunli_a3563.instance_First;
        } else if (Chunli_a3563.Firstowner == owner) {
            if (firstCall) {
                Chunli_a3563.instance_First.firstCall = true;
            }
            return Chunli_a3563.instance_First;
        } else {
            if (Chunli_a3563.instance_Second == null) {
                Chunli_a3563.instance_Second = new Chunli_a3563();
            }
            if (firstCall) {
                Chunli_a3563.instance_Second.firstCall = true;
            }
            return Chunli_a3563.instance_Second;
        }
    }


    public static addEventa3563(MC: zmovie.ZMovieClip, own_role: Role) {
        let a3563 = Chunli_a3563.getInstance(own_role, false);
        if (!a3563.firstCall) {
            return;
        }
        a3563.firstCall = false;
        MC.stop();
        MC.visible = false;
        if (own_role.do_hitTest(MC)) {
            own_role.switchSkill(a3563.flag);
        } // end if
        return;
    }
}