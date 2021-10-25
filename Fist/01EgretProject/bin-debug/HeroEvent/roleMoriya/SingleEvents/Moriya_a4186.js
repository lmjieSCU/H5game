var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_a4186 = (function () {
    function Moriya_a4186() {
        this.firstCall = true;
        return;
    }
    Moriya_a4186.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Moriya_a4186.Firstowner == null) {
            Moriya_a4186.Firstowner = owner;
            Moriya_a4186.instance_First = new Moriya_a4186();
            _level0.instance_First.push(this);
            return Moriya_a4186.instance_First;
        }
        else if (Moriya_a4186.Firstowner == owner) {
            if (firstCall) {
                Moriya_a4186.instance_First.firstCall = true;
            }
            return Moriya_a4186.instance_First;
        }
        else {
            if (Moriya_a4186.instance_Second == null) {
                Moriya_a4186.instance_Second = new Moriya_a4186();
            }
            if (firstCall) {
                Moriya_a4186.instance_Second.firstCall = true;
            }
            return Moriya_a4186.instance_Second;
        }
    };
    Moriya_a4186.addEventa4186 = function (MC, own_role) {
        var a4186 = Moriya_a4186.getInstance(own_role, false);
        if (!a4186.firstCall) {
            return;
        }
        //a4186.firstCall = false;
        a4186.MC = MC;
        MC.visible = false;
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return Moriya_a4186;
}());
__reflect(Moriya_a4186.prototype, "Moriya_a4186");
//# sourceMappingURL=Moriya_a4186.js.map