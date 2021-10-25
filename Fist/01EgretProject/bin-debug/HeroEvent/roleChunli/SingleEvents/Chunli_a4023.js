var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_a4023 = (function () {
    function Chunli_a4023() {
        this.firstCall = true;
        return;
    }
    Chunli_a4023.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Chunli_a4023.Firstowner == null) {
            Chunli_a4023.Firstowner = owner;
            Chunli_a4023.instance_First = new Chunli_a4023();
            _level0.instance_First.push(this);
            return Chunli_a4023.instance_First;
        }
        else if (Chunli_a4023.Firstowner == owner) {
            if (firstCall) {
                Chunli_a4023.instance_First.firstCall = true;
            }
            return Chunli_a4023.instance_First;
        }
        else {
            if (Chunli_a4023.instance_Second == null) {
                Chunli_a4023.instance_Second = new Chunli_a4023();
            }
            if (firstCall) {
                Chunli_a4023.instance_Second.firstCall = true;
            }
            return Chunli_a4023.instance_Second;
        }
    };
    Chunli_a4023.addEventa4023 = function (MC, own_role) {
        var a4023 = Chunli_a4023.getInstance(own_role, false);
        if (!a4023.firstCall) {
            return;
        }
        //a4023.firstCall = false;
        MC.visible = false;
        if (a4023.Vy != 0) {
            own_role.start_move_Y1(a4023.Vy, a4023.Vx, a4023.end_status, a4023.Vg);
        }
        else {
            own_role.start_move_X2(a4023.Vx);
        }
    };
    return Chunli_a4023;
}());
__reflect(Chunli_a4023.prototype, "Chunli_a4023");
//# sourceMappingURL=Chunli_a4023.js.map