var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_a20744 = (function () {
    function Ryu_a20744() {
        this.firstCall = true;
        return;
    }
    Ryu_a20744.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Ryu_a20744.Firstowner == null) {
            Ryu_a20744.Firstowner = owner;
            Ryu_a20744.instance_First = new Ryu_a20744();
            _level0.instance_First.push(this);
            return Ryu_a20744.instance_First;
        }
        else if (Ryu_a20744.Firstowner == owner) {
            if (firstCall) {
                Ryu_a20744.instance_First.firstCall = true;
            }
            return Ryu_a20744.instance_First;
        }
        else {
            if (Ryu_a20744.instance_Second == null) {
                Ryu_a20744.instance_Second = new Ryu_a20744();
            }
            if (firstCall) {
                Ryu_a20744.instance_Second.firstCall = true;
            }
            return Ryu_a20744.instance_Second;
        }
    };
    Ryu_a20744.addEventa20744 = function (MC, own_role) {
        var a20744 = Ryu_a20744.getInstance(own_role, false);
        if (!a20744.firstCall) {
            return;
        }
        a20744.firstCall = false;
        Ryu_a20744.getInstance(own_role).MC = MC;
        MC.visible = false;
    };
    return Ryu_a20744;
}());
__reflect(Ryu_a20744.prototype, "Ryu_a20744");
//# sourceMappingURL=Ryu_a20744.js.map