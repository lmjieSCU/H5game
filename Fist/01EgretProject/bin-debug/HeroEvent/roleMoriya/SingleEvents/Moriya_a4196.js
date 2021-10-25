/**火焰子骨骼 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_a4196 = (function () {
    function Moriya_a4196() {
        this.firstCall = true;
        return;
    }
    Moriya_a4196.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Moriya_a4196.Firstowner == null) {
            Moriya_a4196.Firstowner = owner;
            Moriya_a4196.instance_First = new Moriya_a4196();
            _level0.instance_First.push(this);
            return Moriya_a4196.instance_First;
        }
        else if (Moriya_a4196.Firstowner == owner) {
            if (firstCall) {
                Moriya_a4196.instance_First.firstCall = true;
            }
            return Moriya_a4196.instance_First;
        }
        else {
            if (Moriya_a4196.instance_Second == null) {
                Moriya_a4196.instance_Second = new Moriya_a4196();
            }
            if (firstCall) {
                Moriya_a4196.instance_Second.firstCall = true;
            }
            return Moriya_a4196.instance_Second;
        }
    };
    Moriya_a4196.addEventa4196 = function (MC, own_role) {
        var a4196 = Moriya_a4196.getInstance(own_role, false);
        if (!a4196.firstCall) {
            return;
        }
        a4196.firstCall = false;
        MC.stop();
        MC.visible = false;
        // console.log(a4196.name);
        own_role.addSkill(a4196.name, MC, own_role.Vx, own_role.Va);
        EventUtil.printMC(MC, a4196.name + ":" + String(own_role.FrameEvent_change_location()));
    };
    return Moriya_a4196;
}());
__reflect(Moriya_a4196.prototype, "Moriya_a4196");
//# sourceMappingURL=Moriya_a4196.js.map