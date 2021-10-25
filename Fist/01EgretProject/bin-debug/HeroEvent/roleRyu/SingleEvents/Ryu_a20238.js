var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_a20238 = (function () {
    function Ryu_a20238() {
        this.firstCall = true;
        return;
    }
    Ryu_a20238.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Ryu_a20238.Firstowner == null) {
            Ryu_a20238.Firstowner = owner;
            Ryu_a20238.instance_First = new Ryu_a20238();
            _level0.instance_First.push(this);
            return Ryu_a20238.instance_First;
        }
        else if (Ryu_a20238.Firstowner == owner) {
            if (firstCall) {
                Ryu_a20238.instance_First.firstCall = true;
            }
            return Ryu_a20238.instance_First;
        }
        else {
            if (Ryu_a20238.instance_Second == null) {
                Ryu_a20238.instance_Second = new Ryu_a20238();
            }
            if (firstCall) {
                Ryu_a20238.instance_Second.firstCall = true;
            }
            return Ryu_a20238.instance_Second;
        }
    };
    Ryu_a20238.addEventa20238 = function (MC, own_role) {
        var a20238 = Ryu_a20238.getInstance(own_role, false);
        if (!a20238.firstCall) {
            return;
        }
        //a20238.firstCall = false;
        MC.visible = false;
        if (a20238.Vy != 0) {
            own_role.start_move_Y1(a20238.Vy, a20238.Vx, a20238.end_status, a20238.Vg);
        }
        else {
            own_role.start_move_X2(a20238.Vx);
        }
    };
    return Ryu_a20238;
}());
__reflect(Ryu_a20238.prototype, "Ryu_a20238");
//# sourceMappingURL=Ryu_a20238.js.map