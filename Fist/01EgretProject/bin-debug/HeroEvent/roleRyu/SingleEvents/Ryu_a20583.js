var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_a20583 = (function () {
    function Ryu_a20583() {
        this.firstCall = true;
        return;
    }
    Ryu_a20583.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Ryu_a20583.Firstowner == null) {
            Ryu_a20583.Firstowner = owner;
            Ryu_a20583.instance_First = new Ryu_a20583();
            _level0.instance_First.push(this);
            return Ryu_a20583.instance_First;
        }
        else if (Ryu_a20583.Firstowner == owner) {
            if (firstCall) {
                Ryu_a20583.instance_First.firstCall = true;
            }
            return Ryu_a20583.instance_First;
        }
        else {
            if (Ryu_a20583.instance_Second == null) {
                Ryu_a20583.instance_Second = new Ryu_a20583();
            }
            if (firstCall) {
                Ryu_a20583.instance_Second.firstCall = true;
            }
            return Ryu_a20583.instance_Second;
        }
    };
    Ryu_a20583.addEventa20583 = function (MC, own_role) {
        var a20583 = Ryu_a20583.getInstance(own_role, false);
        if (!a20583.firstCall) {
            return;
        }
        a20583.firstCall = false;
        MC.visible = false;
        MC.stop();
        own_role.catch_HitTest(MC, a20583.status_1, a20583.flag, a20583.land, a20583.hurt, a20583.downHit);
    };
    return Ryu_a20583;
}());
__reflect(Ryu_a20583.prototype, "Ryu_a20583");
//# sourceMappingURL=Ryu_a20583.js.map