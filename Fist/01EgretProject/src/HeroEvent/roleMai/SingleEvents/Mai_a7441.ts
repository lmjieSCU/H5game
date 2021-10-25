class Mai_a7441 {

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
    public static instance_First: Mai_a7441;
    public static instance_Second: Mai_a7441;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Mai_a7441 {
        if (Mai_a7441.Firstowner == null) {
            Mai_a7441.Firstowner = owner;
            Mai_a7441.instance_First = new Mai_a7441();
            _level0.instance_First.push(this);
            return Mai_a7441.instance_First;
        } else if (Mai_a7441.Firstowner == owner) {
            if (firstCall) {
                Mai_a7441.instance_First.firstCall = true;
            }
            return Mai_a7441.instance_First;
        } else {
            if (Mai_a7441.instance_Second == null) {
                Mai_a7441.instance_Second = new Mai_a7441();
            }
            if (firstCall) {
                Mai_a7441.instance_Second.firstCall = true;
            }
            return Mai_a7441.instance_Second;
        }
    }

    public static addEventa7441(MC: zmovie.ZMovieClip, own_role: Role) {
        let a7441 = Mai_a7441.getInstance(own_role);
        if (!a7441.firstCall) {
            return;
        }
        a7441.firstCall = false;
        MC.stop();
        MC.visible = false;
        a7441.mc = MC;
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
        // own_role.addShadow(shadow_name,this,start_alpha,end_alpha,d_alpha,_rb,_gb,_bb);
        // if(a7441.add_interval > 0)
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
        //       if(i == a7441.add_interval)
        //       {
        //          i = 0;
        //         //  role.addShadow(shadow_name,this,start_alpha,end_alpha,d_alpha,_rb,_gb,_bb);
        //       }
        //    };
    }

}



