var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_a4186 = (function () {
    function Chunli_a4186() {
        this.firstCall = true;
        return;
    }
    Chunli_a4186.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Chunli_a4186.Firstowner == null) {
            Chunli_a4186.Firstowner = owner;
            Chunli_a4186.instance_First = new Chunli_a4186();
            _level0.instance_First.push(this);
            return Chunli_a4186.instance_First;
        }
        else if (Chunli_a4186.Firstowner == owner) {
            if (firstCall) {
                Chunli_a4186.instance_First.firstCall = true;
            }
            return Chunli_a4186.instance_First;
        }
        else {
            if (Chunli_a4186.instance_Second == null) {
                Chunli_a4186.instance_Second = new Chunli_a4186();
            }
            if (firstCall) {
                Chunli_a4186.instance_Second.firstCall = true;
            }
            return Chunli_a4186.instance_Second;
        }
    };
    Chunli_a4186.addEventa4186 = function (MC, own_role) {
        var a825 = Chunli_a4186.getInstance(own_role, false);
        if (!a825.firstCall) {
            return;
        }
        //a825.firstCall = false;
        a825.MC = MC;
        MC.visible = false;
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return Chunli_a4186;
}());
__reflect(Chunli_a4186.prototype, "Chunli_a4186");
//# sourceMappingURL=Chunli_a4186.js.map