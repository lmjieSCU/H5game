var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_a3395 = (function () {
    function Chunli_a3395() {
        this.firstCall = true;
        return;
    }
    Chunli_a3395.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Chunli_a3395.Firstowner == null) {
            Chunli_a3395.Firstowner = owner;
            Chunli_a3395.instance_First = new Chunli_a3395();
            _level0.instance_First.push(this);
            return Chunli_a3395.instance_First;
        }
        else if (Chunli_a3395.Firstowner == owner) {
            if (firstCall) {
                Chunli_a3395.instance_First.firstCall = true;
            }
            return Chunli_a3395.instance_First;
        }
        else {
            if (Chunli_a3395.instance_Second == null) {
                Chunli_a3395.instance_Second = new Chunli_a3395();
            }
            if (firstCall) {
                Chunli_a3395.instance_Second.firstCall = true;
            }
            return Chunli_a3395.instance_Second;
        }
    };
    Chunli_a3395.addEventa3395 = function (MC, own_role) {
        var a3395 = Chunli_a3395.getInstance(own_role, false);
        if (!a3395.firstCall) {
            return;
        }
        //a3395.firstCall = false;
        MC.visible = false;
        own_role.start_move_X1(Chunli_a3395.getInstance(own_role).Vx, this);
    };
    return Chunli_a3395;
}());
__reflect(Chunli_a3395.prototype, "Chunli_a3395");
//# sourceMappingURL=Chunli_a3395.js.map