var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_a7155 = (function () {
    function Kula_a7155() {
        this.firstCall = true;
        return;
    }
    Kula_a7155.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Kula_a7155.Firstowner == null) {
            Kula_a7155.Firstowner = owner;
            Kula_a7155.instance_First = new Kula_a7155();
            _level0.instance_First.push(this);
            return Kula_a7155.instance_First;
        }
        else if (Kula_a7155.Firstowner == owner) {
            if (firstCall) {
                Kula_a7155.instance_First.firstCall = true;
            }
            return Kula_a7155.instance_First;
        }
        else {
            if (Kula_a7155.instance_Second == null) {
                Kula_a7155.instance_Second = new Kula_a7155();
            }
            if (firstCall) {
                Kula_a7155.instance_Second.firstCall = true;
            }
            return Kula_a7155.instance_Second;
        }
    };
    Kula_a7155.addEventa7155 = function (MC, own_role) {
        var a7155 = Kula_a7155.getInstance(own_role, false);
        if (!a7155.firstCall) {
            return;
        }
        //a7155.firstCall = false;
        a7155.MC = MC;
        MC.visible = false;
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return Kula_a7155;
}());
__reflect(Kula_a7155.prototype, "Kula_a7155");
//# sourceMappingURL=Kula_a7155.js.map