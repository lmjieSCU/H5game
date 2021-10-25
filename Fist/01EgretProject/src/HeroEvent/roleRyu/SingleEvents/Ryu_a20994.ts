class Ryu_a20994 {

    public shadow_name: string;
    public start_alpha: number;
    public end_alpha: number;
    public d_alpha: number;
    public add_interval: number;
    public _rb: number;
    public _gb: number;
    public _bb: number;
    public  mc :zmovie.ZMovieClip;
    public static Firstowner: Role;
    public static instance_First: Ryu_a20994;
    public static instance_Second: Ryu_a20994;

    constructor() {
        return;
    }

    public static getInstance(owner: Role): Ryu_a20994 {
        if (Ryu_a20994.Firstowner == null) {
            Ryu_a20994.Firstowner = owner;
            Ryu_a20994.instance_First = new Ryu_a20994();
            _level0.instance_First.push(this);
            return Ryu_a20994.instance_First;
        } else if (Ryu_a20994.Firstowner == owner) {
            return Ryu_a20994.instance_First;
        } else {
            if (Ryu_a20994.instance_Second == null) {
                Ryu_a20994.instance_Second = new Ryu_a20994();
            }
            return Ryu_a20994.instance_Second;
        }
    }

    public static addEventa20994(MC: zmovie.ZMovieClip, own_role: Role) {
        
        MC.stop();
        MC.visible = false;
        let a5765 = Ryu_a20994.getInstance(own_role);
        a5765.mc = MC;
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

    

