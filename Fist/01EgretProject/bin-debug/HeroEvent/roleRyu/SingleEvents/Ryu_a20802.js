var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_a20802 = (function () {
    function Ryu_a20802() {
        return;
    }
    Ryu_a20802.getInstance = function (owner) {
        if (Ryu_a20802.Firstowner == null) {
            Ryu_a20802.Firstowner = owner;
            Ryu_a20802.instance_First = new Ryu_a20802();
            _level0.instance_First.push(this);
            return Ryu_a20802.instance_First;
        }
        else if (Ryu_a20802.Firstowner == owner) {
            return Ryu_a20802.instance_First;
        }
        else {
            if (Ryu_a20802.instance_Second == null) {
                Ryu_a20802.instance_Second = new Ryu_a20802();
            }
            return Ryu_a20802.instance_Second;
        }
    };
    Ryu_a20802.addEventa20802 = function (MC, own_role) {
        MC.visible = false;
        var a20802 = Ryu_a20802.getInstance(own_role);
        if (own_role.onHit != true || own_role.opp.status_3 != "hurt") {
            if (own_role.opp.status_3 == "down" && own_role.onHit == true) {
                return;
            }
            own_role.bodyMC.gotoAndStop(a20802.nohitFrame);
        }
    };
    return Ryu_a20802;
}());
__reflect(Ryu_a20802.prototype, "Ryu_a20802");
//# sourceMappingURL=Ryu_a20802.js.map