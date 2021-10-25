class Chunli_a15606 {

    public shadow_name: string;
    public start_alpha: number;
    public end_alpha: number;
    public d_alpha: number;
    public add_interval: number;
    public _rb: number;
    public _gb: number;
    public _bb: number;
    public mc: zmovie.ZMovieClip;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Chunli_a15606;
    public static instance_Second: Chunli_a15606;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Chunli_a15606 {
        if (Chunli_a15606.Firstowner == null) {
            Chunli_a15606.Firstowner = owner;
            Chunli_a15606.instance_First = new Chunli_a15606();
            _level0.instance_First.push(this);
            return Chunli_a15606.instance_First;
        } else if (Chunli_a15606.Firstowner == owner) {
            if (firstCall) {
                Chunli_a15606.instance_First.firstCall = true;
            }
            return Chunli_a15606.instance_First;
        } else {
            if (Chunli_a15606.instance_Second == null) {
                Chunli_a15606.instance_Second = new Chunli_a15606();
            }
            if (firstCall) {
                Chunli_a15606.instance_Second.firstCall = true;
            }
            return Chunli_a15606.instance_Second;
        }
    }

    public static addEventa15606(MC: zmovie.ZMovieClip, own_role: Role) {
        let a15606 = Chunli_a15606.getInstance(own_role);
        if (!a15606.firstCall) {
            return;
        }
        a15606.firstCall = false;
        MC.stop();
        MC.visible = false;
        a15606.mc = MC;
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
        // own_role.addShadow(shadow_name,this,start_alpha,end_alpha,d_alpha,_rb,_gb,_bb);
        // if(a15606.add_interval > 0)
        // {
        //    var i = 0;
        //    onEnterFrame = function()
        //    {
        //       if(_level0.inPause)
        //       {
        //          return undefined;
        //       }
        //       if(own_role.inFreeze)
        //       {
        //          return undefined;
        //       }
        //       i++;
        //       if(i == a15606.add_interval)
        //       {
        //          i = 0;
        //         //  role.addShadow(shadow_name,this,start_alpha,end_alpha,d_alpha,_rb,_gb,_bb);
        //       }
        //    };
    }

}



