var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_a4202 = (function () {
    function Chunli_a4202() {
        this.firstCall = true;
        return;
    }
    Chunli_a4202.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Chunli_a4202.Firstowner == null) {
            Chunli_a4202.Firstowner = owner;
            Chunli_a4202.instance_First = new Chunli_a4202();
            _level0.instance_First.push(this);
            return Chunli_a4202.instance_First;
        }
        else if (Chunli_a4202.Firstowner == owner) {
            if (firstCall) {
                Chunli_a4202.instance_First.firstCall = true;
            }
            return Chunli_a4202.instance_First;
        }
        else {
            if (Chunli_a4202.instance_Second == null) {
                Chunli_a4202.instance_Second = new Chunli_a4202();
            }
            if (firstCall) {
                Chunli_a4202.instance_Second.firstCall = true;
            }
            return Chunli_a4202.instance_Second;
        }
    };
    Chunli_a4202.addEventa4202 = function (MC, own_role) {
        var a4202 = Chunli_a4202.getInstance(own_role, false);
        if (!a4202.firstCall) {
            return;
        }
        a4202.firstCall = false;
        MC.visible = false;
        if (own_role.onHit != true || own_role.opp.status_3 != "hurt") {
            own_role.bodyMC.gotoAndStop(a4202.nohitFrame);
        }
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return Chunli_a4202;
}());
__reflect(Chunli_a4202.prototype, "Chunli_a4202");
//# sourceMappingURL=Chunli_a4202.js.map