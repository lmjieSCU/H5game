class K_a5765 {

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
    public static instance_First: K_a5765;
    public static instance_Second: K_a5765;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): K_a5765 {
        if (K_a5765.Firstowner == null) {
            K_a5765.Firstowner = owner;
            K_a5765.instance_First = new K_a5765();
            _level0.instance_First.push(this);
            return K_a5765.instance_First;
        } else if (K_a5765.Firstowner == owner) {
            if (firstCall) {
                K_a5765.instance_First.firstCall = true;
            }
            return K_a5765.instance_First;
        } else {
            if (K_a5765.instance_Second == null) {
                K_a5765.instance_Second = new K_a5765();
            }
            if (firstCall) {
                K_a5765.instance_Second.firstCall = true;
            }
            return K_a5765.instance_Second;
        }
    }

    public static addEventa5765(MC: zmovie.ZMovieClip, own_role: Role) {
        let a5765 = K_a5765.getInstance(own_role);
        if (!a5765.firstCall) {
            return;
        }
        a5765.firstCall = false;
        MC.stop();
        MC.visible = false;
        a5765.mc = MC;
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
        // own_role.addShadow(shadow_name,this,start_alpha,end_alpha,d_alpha,_rb,_gb,_bb);
        // if(a5765.add_interval > 0)
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
        //       if(i == a5765.add_interval)
        //       {
        //          i = 0;
        //         //  role.addShadow(shadow_name,this,start_alpha,end_alpha,d_alpha,_rb,_gb,_bb);
        //       }
        //    };
    }

}



