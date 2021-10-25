/**火焰子骨骼 */

class Terry_a6914 {
    public name: string;
    public firstCall:boolean = true;
    public static Firstowner: Role;
    public static instance_First: Terry_a6914;
    public static instance_Second: Terry_a6914;

    constructor() {
        return;
    }



     public static getInstance(owner: Role, firstCall: boolean = true): Terry_a6914 {
        if (Terry_a6914.Firstowner == null) {
            Terry_a6914.Firstowner = owner;
            Terry_a6914.instance_First = new Terry_a6914();
            _level0.instance_First.push(this);
            return Terry_a6914.instance_First;
        } else if (Terry_a6914.Firstowner == owner) {
            if (firstCall) {
                Terry_a6914.instance_First.firstCall = true;
            }
            return Terry_a6914.instance_First;
        } else {
            if (Terry_a6914.instance_Second == null) {
                Terry_a6914.instance_Second = new Terry_a6914();
            }
            if (firstCall) {
                Terry_a6914.instance_Second.firstCall = true;
            }
            return Terry_a6914.instance_Second;
        }
    }

    public static addEventa6914(MC: zmovie.ZMovieClip, own_role: Role) {
        let a6914 = Terry_a6914.getInstance(own_role,false);
        if(!a6914.firstCall){
            return;
        }
        a6914.firstCall = false;
        MC.stop();
        MC.visible = false;
        // var pt = new egret.DisplayObject();
        // pt.x = MC.x;
        // pt.y = MC.y;
        // own_role.localToGlobal(pt);
        own_role.addSkill(a6914.name,MC,own_role.Vx,own_role.Va);
    }
}