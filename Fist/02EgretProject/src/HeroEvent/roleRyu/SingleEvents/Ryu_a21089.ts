/**火焰子骨骼 */

class Ryu_a21089 {
    public name: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Ryu_a21089;
    public static instance_Second: Ryu_a21089;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Ryu_a21089 {
        if (Ryu_a21089.Firstowner == null) {
            Ryu_a21089.Firstowner = owner;
            Ryu_a21089.instance_First = new Ryu_a21089();
            _level0.instance_First.push(this);
            return Ryu_a21089.instance_First;
        } else if (Ryu_a21089.Firstowner == owner) {
            if (firstCall) {
                Ryu_a21089.instance_First.firstCall = true;
            }
            return Ryu_a21089.instance_First;
        } else {
            if (Ryu_a21089.instance_Second == null) {
                Ryu_a21089.instance_Second = new Ryu_a21089();
            }
            if (firstCall) {
                Ryu_a21089.instance_Second.firstCall = true;
            }
            return Ryu_a21089.instance_Second;
        }
    }

    public static addEventa21089(MC: zmovie.ZMovieClip, own_role: Role) {
        let a21089 = Ryu_a21089.getInstance(own_role, false);
        if (!a21089.firstCall) {
            return;
        }
        a21089.firstCall = false;
        MC.stop();
        MC.visible = false;
        console.log(a21089.name);
        own_role.addSkill2(a21089.name, MC, own_role.Vx, own_role.Va);

    }
}