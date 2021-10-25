var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_a4202 = (function () {
    function Moriya_a4202() {
        this.firstCall = true;
        return;
    }
    Moriya_a4202.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Moriya_a4202.Firstowner == null) {
            Moriya_a4202.Firstowner = owner;
            Moriya_a4202.instance_First = new Moriya_a4202();
            _level0.instance_First.push(this);
            return Moriya_a4202.instance_First;
        }
        else if (Moriya_a4202.Firstowner == owner) {
            if (firstCall) {
                Moriya_a4202.instance_First.firstCall = true;
            }
            return Moriya_a4202.instance_First;
        }
        else {
            if (Moriya_a4202.instance_Second == null) {
                Moriya_a4202.instance_Second = new Moriya_a4202();
            }
            if (firstCall) {
                Moriya_a4202.instance_Second.firstCall = true;
            }
            return Moriya_a4202.instance_Second;
        }
    };
    Moriya_a4202.addEventa4202 = function (MC, own_role) {
        var a4202 = Moriya_a4202.getInstance(own_role, false);
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
    return Moriya_a4202;
}());
__reflect(Moriya_a4202.prototype, "Moriya_a4202");
//# sourceMappingURL=Moriya_a4202.js.map