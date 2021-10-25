var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_a20799 = (function () {
    function Ryu_a20799() {
        this.firstCall = true;
        return;
    }
    Ryu_a20799.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Ryu_a20799.Firstowner == null) {
            Ryu_a20799.Firstowner = owner;
            Ryu_a20799.instance_First = new Ryu_a20799();
            _level0.instance_First.push(this);
            return Ryu_a20799.instance_First;
        }
        else if (Ryu_a20799.Firstowner == owner) {
            if (firstCall) {
                Ryu_a20799.instance_First.firstCall = true;
            }
            return Ryu_a20799.instance_First;
        }
        else {
            if (Ryu_a20799.instance_Second == null) {
                Ryu_a20799.instance_Second = new Ryu_a20799();
            }
            if (firstCall) {
                Ryu_a20799.instance_Second.firstCall = true;
            }
            return Ryu_a20799.instance_Second;
        }
    };
    Ryu_a20799.addEventa20799 = function (MC, own_role) {
        var a20799 = Ryu_a20799.getInstance(own_role, false);
        if (!a20799.firstCall) {
            return;
        }
        a20799.firstCall = false;
        MC.visible = false;
        own_role.move_HitTest(MC, a20799.attFrame, a20799.endFrame, a20799.S, a20799.Vx);
    };
    return Ryu_a20799;
}());
__reflect(Ryu_a20799.prototype, "Ryu_a20799");
//# sourceMappingURL=Ryu_a20799.js.map