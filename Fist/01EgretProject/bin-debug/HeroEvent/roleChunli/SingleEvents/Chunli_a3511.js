var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_a3511 = (function () {
    function Chunli_a3511() {
        this.firstCall = true;
        return;
    }
    Chunli_a3511.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Chunli_a3511.Firstowner == null) {
            Chunli_a3511.Firstowner = owner;
            Chunli_a3511.instance_First = new Chunli_a3511();
            _level0.instance_First.push(this);
            return Chunli_a3511.instance_First;
        }
        else if (Chunli_a3511.Firstowner == owner) {
            if (firstCall) {
                Chunli_a3511.instance_First.firstCall = true;
            }
            return Chunli_a3511.instance_First;
        }
        else {
            if (Chunli_a3511.instance_Second == null) {
                Chunli_a3511.instance_Second = new Chunli_a3511();
            }
            if (firstCall) {
                Chunli_a3511.instance_Second.firstCall = true;
            }
            return Chunli_a3511.instance_Second;
        }
    };
    Chunli_a3511.addEventa3511 = function (MC, own_role) {
        var a3511 = Chunli_a3511.getInstance(own_role, false);
        if (!a3511.firstCall) {
            return;
        }
        a3511.firstCall = false;
        MC.visible = false;
        own_role.hurtAway_self(a3511.Vx, a3511.Vy, a3511.end_status);
    };
    return Chunli_a3511;
}());
__reflect(Chunli_a3511.prototype, "Chunli_a3511");
//# sourceMappingURL=Chunli_a3511.js.map