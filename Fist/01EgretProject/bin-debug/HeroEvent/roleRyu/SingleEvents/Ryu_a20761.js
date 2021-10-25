var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_a20761 = (function () {
    function Ryu_a20761() {
        this.firstCall = true;
        return;
    }
    Ryu_a20761.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Ryu_a20761.Firstowner == null) {
            Ryu_a20761.Firstowner = owner;
            Ryu_a20761.instance_First = new Ryu_a20761();
            _level0.instance_First.push(this);
            return Ryu_a20761.instance_First;
        }
        else if (Ryu_a20761.Firstowner == owner) {
            if (firstCall) {
                Ryu_a20761.instance_First.firstCall = true;
            }
            return Ryu_a20761.instance_First;
        }
        else {
            if (Ryu_a20761.instance_Second == null) {
                Ryu_a20761.instance_Second = new Ryu_a20761();
            }
            if (firstCall) {
                Ryu_a20761.instance_Second.firstCall = true;
            }
            return Ryu_a20761.instance_Second;
        }
    };
    Ryu_a20761.addEventa20761 = function (MC, own_role) {
        var a20761 = Ryu_a20761.getInstance(own_role, false);
        if (!a20761.firstCall) {
            return;
        }
        a20761.firstCall = false;
        MC.visible = false;
        _level0.effect_mc.bgEff_start(a20761.effName, own_role);
    };
    return Ryu_a20761;
}());
__reflect(Ryu_a20761.prototype, "Ryu_a20761");
//# sourceMappingURL=Ryu_a20761.js.map