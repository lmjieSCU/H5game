/**火焰子骨骼 */
///帧事件索引，人为命名错误，为a6917非a6914
class Mai_a6914 {


    public name: string;
    public firstCall: boolean = true;
    public static Firstowner: Role;
    public static instance_First: Mai_a6914;
    public static instance_Second: Mai_a6914;

    constructor() {
        return;
    }

    public static getInstance(owner: Role, firstCall: boolean = true): Mai_a6914 {
        if (Mai_a6914.Firstowner == null) {
            Mai_a6914.Firstowner = owner;
            Mai_a6914.instance_First = new Mai_a6914();
            _level0.instance_First.push(this);
            return Mai_a6914.instance_First;
        } else if (Mai_a6914.Firstowner == owner) {
            if (firstCall) {
                Mai_a6914.instance_First.firstCall = true;
            }
            return Mai_a6914.instance_First;
        } else {
            if (Mai_a6914.instance_Second == null) {
                Mai_a6914.instance_Second = new Mai_a6914();
            }
            if (firstCall) {
                Mai_a6914.instance_Second.firstCall = true;
            }
            return Mai_a6914.instance_Second;
        }
    }


    public static addEventa6914(MC: zmovie.ZMovieClip, own_role: Role) {
        let a6914 = Mai_a6914.getInstance(own_role, false);
        if (!a6914.firstCall) {
            return;
        }
        a6914.firstCall = false;
        MC.stop();
        MC.visible = false;
        // console.log(a6914.name);
        own_role.addSkill(a6914.name, MC, own_role.Vx, own_role.Va);
    }
}