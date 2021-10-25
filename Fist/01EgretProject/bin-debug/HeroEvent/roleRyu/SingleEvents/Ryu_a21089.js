/**火焰子骨骼 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_a21089 = (function () {
    function Ryu_a21089() {
        this.firstCall = true;
        return;
    }
    Ryu_a21089.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Ryu_a21089.Firstowner == null) {
            Ryu_a21089.Firstowner = owner;
            Ryu_a21089.instance_First = new Ryu_a21089();
            _level0.instance_First.push(this);
            return Ryu_a21089.instance_First;
        }
        else if (Ryu_a21089.Firstowner == owner) {
            if (firstCall) {
                Ryu_a21089.instance_First.firstCall = true;
            }
            return Ryu_a21089.instance_First;
        }
        else {
            if (Ryu_a21089.instance_Second == null) {
                Ryu_a21089.instance_Second = new Ryu_a21089();
            }
            if (firstCall) {
                Ryu_a21089.instance_Second.firstCall = true;
            }
            return Ryu_a21089.instance_Second;
        }
    };
    Ryu_a21089.addEventa21089 = function (MC, own_role) {
        var a21089 = Ryu_a21089.getInstance(own_role, false);
        if (!a21089.firstCall) {
            return;
        }
        a21089.firstCall = false;
        MC.stop();
        MC.visible = false;
        console.log(a21089.name);
        own_role.addSkill2(a21089.name, MC, own_role.Vx, own_role.Va);
    };
    return Ryu_a21089;
}());
__reflect(Ryu_a21089.prototype, "Ryu_a21089");
//# sourceMappingURL=Ryu_a21089.js.map