/**火焰子骨骼 */

class Moriya_a4290 {
    public name: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Moriya_a4290;
    public static instance_Second: Moriya_a4290;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Moriya_a4290 {
        if (Moriya_a4290.Firstowner == null) {
            Moriya_a4290.Firstowner = owner;
            Moriya_a4290.instance_First = new Moriya_a4290();
            _level0.instance_First.push(this);
            return Moriya_a4290.instance_First;
        } else if (Moriya_a4290.Firstowner == owner) {
            if (firstCall) {
                Moriya_a4290.instance_First.firstCall = true;
            }
            return Moriya_a4290.instance_First;
        } else {
            if (Moriya_a4290.instance_Second == null) {
                Moriya_a4290.instance_Second = new Moriya_a4290();
            }
            if (firstCall) {
                Moriya_a4290.instance_Second.firstCall = true;
            }
            return Moriya_a4290.instance_Second;
        }
    }

    public static addEventa4290(MC: zmovie.ZMovieClip, own_role: Role) {
        let a4290 = Moriya_a4290.getInstance(own_role, false);
        if (!a4290.firstCall) {
            return;
        }
        a4290.firstCall = false;
        MC.stop();
        MC.visible = false;
        console.log(a4290.name);
        own_role.addSkill2(a4290.name, MC, own_role.Vx, own_role.Va);
    }
}