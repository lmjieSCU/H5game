var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_a3196 = (function () {
    function Moriya_a3196() {
        this.firstCall = true;
        return;
    }
    Moriya_a3196.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Moriya_a3196.Firstowner == null) {
            Moriya_a3196.Firstowner = owner;
            Moriya_a3196.instance_First = new Moriya_a3196();
            _level0.instance_First.push(this);
            return Moriya_a3196.instance_First;
        }
        else if (Moriya_a3196.Firstowner == owner) {
            if (firstCall) {
                Moriya_a3196.instance_First.firstCall = true;
            }
            return Moriya_a3196.instance_First;
        }
        else {
            if (Moriya_a3196.instance_Second == null) {
                Moriya_a3196.instance_Second = new Moriya_a3196();
            }
            if (firstCall) {
                Moriya_a3196.instance_Second.firstCall = true;
            }
            return Moriya_a3196.instance_Second;
        }
    };
    Moriya_a3196.addEventa3196 = function (MC, own_role) {
        var a3196 = Moriya_a3196.getInstance(own_role, false);
        if (!a3196.firstCall) {
            return;
        }
        a3196.firstCall = false;
        MC.visible = false;
        _level0.effect_mc.bgEff_start(a3196.effName, own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return Moriya_a3196;
}());
__reflect(Moriya_a3196.prototype, "Moriya_a3196");
//# sourceMappingURL=Moriya_a3196.js.map