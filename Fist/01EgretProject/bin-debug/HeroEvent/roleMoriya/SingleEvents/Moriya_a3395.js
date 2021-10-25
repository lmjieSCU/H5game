var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_a3395 = (function () {
    function Moriya_a3395() {
        this.firstCall = true;
        return;
    }
    Moriya_a3395.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Moriya_a3395.Firstowner == null) {
            Moriya_a3395.Firstowner = owner;
            Moriya_a3395.instance_First = new Moriya_a3395();
            _level0.instance_First.push(this);
            return Moriya_a3395.instance_First;
        }
        else if (Moriya_a3395.Firstowner == owner) {
            if (firstCall) {
                Moriya_a3395.instance_First.firstCall = true;
            }
            return Moriya_a3395.instance_First;
        }
        else {
            if (Moriya_a3395.instance_Second == null) {
                Moriya_a3395.instance_Second = new Moriya_a3395();
            }
            if (firstCall) {
                Moriya_a3395.instance_Second.firstCall = true;
            }
            return Moriya_a3395.instance_Second;
        }
    };
    Moriya_a3395.addEventa3395 = function (MC, own_role) {
        var a3395 = Moriya_a3395.getInstance(own_role, false);
        if (!a3395.firstCall) {
            return;
        }
        //a3395.firstCall = false;
        MC.visible = false;
        own_role.start_move_X1(a3395.Vx, a3395);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return Moriya_a3395;
}());
__reflect(Moriya_a3395.prototype, "Moriya_a3395");
//# sourceMappingURL=Moriya_a3395.js.map