var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_a20401 = (function () {
    function Ryu_a20401() {
        this.firstCall = true;
        return;
    }
    Ryu_a20401.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Ryu_a20401.Firstowner == null) {
            Ryu_a20401.Firstowner = owner;
            Ryu_a20401.instance_First = new Ryu_a20401();
            _level0.instance_First.push(this);
            return Ryu_a20401.instance_First;
        }
        else if (Ryu_a20401.Firstowner == owner) {
            if (firstCall) {
                Ryu_a20401.instance_First.firstCall = true;
            }
            return Ryu_a20401.instance_First;
        }
        else {
            if (Ryu_a20401.instance_Second == null) {
                Ryu_a20401.instance_Second = new Ryu_a20401();
            }
            if (firstCall) {
                Ryu_a20401.instance_Second.firstCall = true;
            }
            return Ryu_a20401.instance_Second;
        }
    };
    Ryu_a20401.addEventa20401 = function (MC, own_role) {
        var a20401 = Ryu_a20401.getInstance(own_role, false);
        if (!a20401.firstCall) {
            return;
        }
        //a20401.firstCall = false;
        MC.visible = false;
        own_role.start_move_X1(a20401.Vx, a20401);
    };
    return Ryu_a20401;
}());
__reflect(Ryu_a20401.prototype, "Ryu_a20401");
//# sourceMappingURL=Ryu_a20401.js.map