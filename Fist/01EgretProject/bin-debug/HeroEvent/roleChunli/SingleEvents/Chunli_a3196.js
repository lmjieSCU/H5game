var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_a3196 = (function () {
    function Chunli_a3196() {
        this.firstCall = true;
        return;
    }
    Chunli_a3196.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Chunli_a3196.Firstowner == null) {
            Chunli_a3196.Firstowner = owner;
            Chunli_a3196.instance_First = new Chunli_a3196();
            _level0.instance_First.push(this);
            return Chunli_a3196.instance_First;
        }
        else if (Chunli_a3196.Firstowner == owner) {
            if (firstCall) {
                Chunli_a3196.instance_First.firstCall = true;
            }
            return Chunli_a3196.instance_First;
        }
        else {
            if (Chunli_a3196.instance_Second == null) {
                Chunli_a3196.instance_Second = new Chunli_a3196();
            }
            if (firstCall) {
                Chunli_a3196.instance_Second.firstCall = true;
            }
            return Chunli_a3196.instance_Second;
        }
    };
    Chunli_a3196.addEventa3196 = function (MC, own_role) {
        var a3196 = Chunli_a3196.getInstance(own_role, false);
        if (!a3196.firstCall) {
            return;
        }
        a3196.firstCall = false;
        MC.visible = false;
        _level0.effect_mc.bgEff_start(a3196.effName, own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return Chunli_a3196;
}());
__reflect(Chunli_a3196.prototype, "Chunli_a3196");
//# sourceMappingURL=Chunli_a3196.js.map