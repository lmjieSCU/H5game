var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_a7155 = (function () {
    function Mai_a7155() {
        this.firstCall = true;
        return;
    }
    Mai_a7155.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Mai_a7155.Firstowner == null) {
            Mai_a7155.Firstowner = owner;
            Mai_a7155.instance_First = new Mai_a7155();
            _level0.instance_First.push(this);
            return Mai_a7155.instance_First;
        }
        else if (Mai_a7155.Firstowner == owner) {
            if (firstCall) {
                Mai_a7155.instance_First.firstCall = true;
            }
            return Mai_a7155.instance_First;
        }
        else {
            if (Mai_a7155.instance_Second == null) {
                Mai_a7155.instance_Second = new Mai_a7155();
            }
            if (firstCall) {
                Mai_a7155.instance_Second.firstCall = true;
            }
            return Mai_a7155.instance_Second;
        }
    };
    Mai_a7155.addEventa7155 = function (MC, own_role) {
        var a7155 = Mai_a7155.getInstance(own_role, false);
        if (!a7155.firstCall) {
            return;
        }
        //a7155.firstCall = false;
        a7155.MC = MC;
        MC.visible = false;
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return Mai_a7155;
}());
__reflect(Mai_a7155.prototype, "Mai_a7155");
//# sourceMappingURL=Mai_a7155.js.map