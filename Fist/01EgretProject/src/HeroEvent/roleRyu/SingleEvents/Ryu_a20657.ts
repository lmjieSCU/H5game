/**火焰子骨骼 */

class Ryu_a20657 {


    public name: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Ryu_a20657;
    public static instance_Second: Ryu_a20657;

    constructor() {
        return;
    }


    public static getInstance(owner: Role, firstCall: boolean = true): Ryu_a20657 {
        if (Ryu_a20657.Firstowner == null) {
            Ryu_a20657.Firstowner = owner;
            Ryu_a20657.instance_First = new Ryu_a20657();
            _level0.instance_First.push(this);
            return Ryu_a20657.instance_First;
        } else if (Ryu_a20657.Firstowner == owner) {
            if (firstCall) {
                Ryu_a20657.instance_First.firstCall = true;
            }
            return Ryu_a20657.instance_First;
        } else {
            if (Ryu_a20657.instance_Second == null) {
                Ryu_a20657.instance_Second = new Ryu_a20657();
            }
            if (firstCall) {
                Ryu_a20657.instance_Second.firstCall = true;
            }
            return Ryu_a20657.instance_Second;
        }
    }

    public static addEventa20657(MC: zmovie.ZMovieClip, own_role: Role) {
        let a20657 = Ryu_a20657.getInstance(own_role, false);
        if (!a20657.firstCall) {
            return;
        }
        a20657.firstCall = false;
        MC.stop();
        MC.visible = false;
        // var pt = new egret.DisplayObject();
        // pt.x = MC.x;
        // pt.y = MC.y;
        // own_role.localToGlobal(pt);
        console.log(a20657.name);
        own_role.addSkill(a20657.name, MC, own_role.Vx, own_role.Va);

    }
}