var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_a3511 = (function () {
    function Moriya_a3511() {
        this.firstCall = true;
        return;
    }
    Moriya_a3511.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Moriya_a3511.Firstowner == null) {
            Moriya_a3511.Firstowner = owner;
            Moriya_a3511.instance_First = new Moriya_a3511();
            _level0.instance_First.push(this);
            return Moriya_a3511.instance_First;
        }
        else if (Moriya_a3511.Firstowner == owner) {
            if (firstCall) {
                Moriya_a3511.instance_First.firstCall = true;
            }
            return Moriya_a3511.instance_First;
        }
        else {
            if (Moriya_a3511.instance_Second == null) {
                Moriya_a3511.instance_Second = new Moriya_a3511();
            }
            if (firstCall) {
                Moriya_a3511.instance_Second.firstCall = true;
            }
            return Moriya_a3511.instance_Second;
        }
    };
    Moriya_a3511.addEventa3511 = function (MC, own_role) {
        var a3511 = Moriya_a3511.getInstance(own_role, false);
        if (!a3511.firstCall) {
            return;
        }
        a3511.firstCall = false;
        MC.visible = false;
        own_role.hurtAway_self(a3511.Vx, a3511.Vy, a3511.end_status);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return Moriya_a3511;
}());
__reflect(Moriya_a3511.prototype, "Moriya_a3511");
//# sourceMappingURL=Moriya_a3511.js.map