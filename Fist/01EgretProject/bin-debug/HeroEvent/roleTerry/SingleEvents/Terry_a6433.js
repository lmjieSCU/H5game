var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_a6433 = (function () {
    function Terry_a6433() {
        this.firstCall = true;
        return;
    }
    Terry_a6433.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Terry_a6433.Firstowner == null) {
            Terry_a6433.Firstowner = owner;
            Terry_a6433.instance_First = new Terry_a6433();
            _level0.instance_First.push(this);
            return Terry_a6433.instance_First;
        }
        else if (Terry_a6433.Firstowner == owner) {
            if (firstCall) {
                Terry_a6433.instance_First.firstCall = true;
            }
            return Terry_a6433.instance_First;
        }
        else {
            if (Terry_a6433.instance_Second == null) {
                Terry_a6433.instance_Second = new Terry_a6433();
            }
            if (firstCall) {
                Terry_a6433.instance_Second.firstCall = true;
            }
            return Terry_a6433.instance_Second;
        }
    };
    Terry_a6433.addEventa6433 = function (MC, own_role) {
        var a6433 = Terry_a6433.getInstance(own_role, false);
        if (!a6433.firstCall) {
            return;
        }
        //a6433.firstCall = false;
        MC.visible = false;
        own_role.start_move_X1(Terry_a6433.getInstance(own_role).Vx, this);
    };
    return Terry_a6433;
}());
__reflect(Terry_a6433.prototype, "Terry_a6433");
//# sourceMappingURL=Terry_a6433.js.map