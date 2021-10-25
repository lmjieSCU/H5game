var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_a20346 = (function () {
    function Ryu_a20346() {
        this.firstCall = true;
        return;
    }
    Ryu_a20346.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Ryu_a20346.Firstowner == null) {
            Ryu_a20346.Firstowner = owner;
            Ryu_a20346.instance_First = new Ryu_a20346();
            _level0.instance_First.push(this);
            return Ryu_a20346.instance_First;
        }
        else if (Ryu_a20346.Firstowner == owner) {
            if (firstCall) {
                Ryu_a20346.instance_First.firstCall = true;
            }
            return Ryu_a20346.instance_First;
        }
        else {
            if (Ryu_a20346.instance_Second == null) {
                Ryu_a20346.instance_Second = new Ryu_a20346();
            }
            if (firstCall) {
                Ryu_a20346.instance_Second.firstCall = true;
            }
            return Ryu_a20346.instance_Second;
        }
    };
    Ryu_a20346.addEventa20346 = function (MC, own_role) {
        var a20346 = Ryu_a20346.getInstance(own_role, false);
        if (!a20346.firstCall) {
            return;
        }
        a20346.firstCall = false;
        MC.visible = false;
        own_role.hurtAway_self(a20346.Vx, a20346.Vy, a20346.end_status);
    };
    return Ryu_a20346;
}());
__reflect(Ryu_a20346.prototype, "Ryu_a20346");
//# sourceMappingURL=Ryu_a20346.js.map