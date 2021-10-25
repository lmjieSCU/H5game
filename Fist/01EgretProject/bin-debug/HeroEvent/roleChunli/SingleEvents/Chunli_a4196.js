/**火焰子骨骼 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_a4196 = (function () {
    function Chunli_a4196() {
        this.suspend = false;
        this.firstCall = true;
        return;
    }
    Chunli_a4196.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Chunli_a4196.Firstowner == null) {
            Chunli_a4196.Firstowner = owner;
            Chunli_a4196.instance_First = new Chunli_a4196();
            _level0.instance_First.push(this);
            return Chunli_a4196.instance_First;
        }
        else if (Chunli_a4196.Firstowner == owner) {
            if (firstCall) {
                Chunli_a4196.instance_First.firstCall = true;
            }
            return Chunli_a4196.instance_First;
        }
        else {
            if (Chunli_a4196.instance_Second == null) {
                Chunli_a4196.instance_Second = new Chunli_a4196();
            }
            if (firstCall) {
                Chunli_a4196.instance_Second.firstCall = true;
            }
            return Chunli_a4196.instance_Second;
        }
    };
    Chunli_a4196.addEventa4196 = function (MC, own_role) {
        var a4196 = Chunli_a4196.getInstance(own_role, false);
        if (!a4196.firstCall) {
            return;
        }
        a4196.firstCall = false;
        MC.stop();
        MC.visible = false;
        // console.log(a4196.name);
        own_role.addSkill(a4196.name, MC, own_role.Vx, own_role.Va, a4196.suspend);
        if (a4196.suspend) {
            a4196.suspend = false;
        }
        EventUtil.printMC(MC, a4196.name + ":" + String(own_role.FrameEvent_change_location()));
    };
    return Chunli_a4196;
}());
__reflect(Chunli_a4196.prototype, "Chunli_a4196");
//# sourceMappingURL=Chunli_a4196.js.map