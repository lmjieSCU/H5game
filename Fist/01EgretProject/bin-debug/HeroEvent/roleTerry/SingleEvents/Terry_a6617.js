var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_a6617 = (function () {
    function Terry_a6617() {
        this.firstCall = true;
        return;
    }
    Terry_a6617.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Terry_a6617.Firstowner == null) {
            Terry_a6617.Firstowner = owner;
            Terry_a6617.instance_First = new Terry_a6617();
            _level0.instance_First.push(this);
            return Terry_a6617.instance_First;
        }
        else if (Terry_a6617.Firstowner == owner) {
            if (firstCall) {
                Terry_a6617.instance_First.firstCall = true;
            }
            return Terry_a6617.instance_First;
        }
        else {
            if (Terry_a6617.instance_Second == null) {
                Terry_a6617.instance_Second = new Terry_a6617();
            }
            if (firstCall) {
                Terry_a6617.instance_Second.firstCall = true;
            }
            return Terry_a6617.instance_Second;
        }
    };
    Terry_a6617.addEventa6617 = function (MC, own_role) {
        var a6617 = Terry_a6617.getInstance(own_role, false);
        if (!a6617.firstCall) {
            return;
        }
        //a6617.firstCall = false;
        MC.visible = false;
        if (a6617.Vy != 0) {
            own_role.start_move_Y1(a6617.Vy, a6617.Vx, a6617.end_status, a6617.Vg);
        }
        else {
            own_role.start_move_X2(a6617.Vx);
        }
    };
    return Terry_a6617;
}());
__reflect(Terry_a6617.prototype, "Terry_a6617");
//# sourceMappingURL=Terry_a6617.js.map