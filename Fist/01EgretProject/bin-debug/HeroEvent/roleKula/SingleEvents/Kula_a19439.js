/**火焰子骨骼 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_a19439 = (function () {
    function Kula_a19439() {
        this.firstCall = true;
        return;
    }
    Kula_a19439.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Kula_a19439.Firstowner == null) {
            Kula_a19439.Firstowner = owner;
            Kula_a19439.instance_First = new Kula_a19439();
            _level0.instance_First.push(this);
            return Kula_a19439.instance_First;
        }
        else if (Kula_a19439.Firstowner == owner) {
            if (firstCall) {
                Kula_a19439.instance_First.firstCall = true;
            }
            return Kula_a19439.instance_First;
        }
        else {
            if (Kula_a19439.instance_Second == null) {
                Kula_a19439.instance_Second = new Kula_a19439();
            }
            if (firstCall) {
                Kula_a19439.instance_Second.firstCall = true;
            }
            return Kula_a19439.instance_Second;
        }
    };
    Kula_a19439.addEventa19439 = function (MC, own_role) {
        var a19439 = Kula_a19439.getInstance(own_role, false);
        if (!a19439.firstCall) {
            return;
        }
        a19439.firstCall = false;
        MC.stop();
        MC.visible = false;
        // console.log("特效:"+a19439.name);
        own_role.addSkill(a19439.name, MC, own_role.Vx, own_role.Va);
        EventUtil.printMC(MC, a19439.name + ":" + String(own_role.FrameEvent_change_location()));
    };
    return Kula_a19439;
}());
__reflect(Kula_a19439.prototype, "Kula_a19439");
//# sourceMappingURL=Kula_a19439.js.map