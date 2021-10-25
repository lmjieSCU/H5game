var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_a8669 = (function () {
    function Kula_a8669() {
        this.firstCall = true;
        return;
    }
    Kula_a8669.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Kula_a8669.Firstowner == null) {
            Kula_a8669.Firstowner = owner;
            Kula_a8669.instance_First = new Kula_a8669();
            _level0.instance_First.push(this);
            return Kula_a8669.instance_First;
        }
        else if (Kula_a8669.Firstowner == owner) {
            if (firstCall) {
                Kula_a8669.instance_First.firstCall = true;
            }
            return Kula_a8669.instance_First;
        }
        else {
            if (Kula_a8669.instance_Second == null) {
                Kula_a8669.instance_Second = new Kula_a8669();
            }
            if (firstCall) {
                Kula_a8669.instance_Second.firstCall = true;
            }
            return Kula_a8669.instance_Second;
        }
    };
    Kula_a8669.addEventa8669 = function (MC, own_role) {
        var a8669 = Kula_a8669.getInstance(own_role, false);
        if (a8669.flag == null) {
            console.log("flag is null in a8669");
            return;
        }
        if (!a8669.firstCall) {
            return;
        }
        a8669.firstCall = false;
        MC.stop();
        MC.visible = false;
        if (own_role.do_hitTest(MC)) {
            own_role.switchSkill(a8669.flag);
        } // end if
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
        return;
    };
    return Kula_a8669;
}());
__reflect(Kula_a8669.prototype, "Kula_a8669");
//# sourceMappingURL=Kula_a8669.js.map