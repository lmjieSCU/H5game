var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_a6557 = (function () {
    function Terry_a6557() {
        this.firstCall = true;
        return;
    }
    Terry_a6557.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Terry_a6557.Firstowner == null) {
            Terry_a6557.Firstowner = owner;
            Terry_a6557.instance_First = new Terry_a6557();
            _level0.instance_First.push(this);
            return Terry_a6557.instance_First;
        }
        else if (Terry_a6557.Firstowner == owner) {
            if (firstCall) {
                Terry_a6557.instance_First.firstCall = true;
            }
            return Terry_a6557.instance_First;
        }
        else {
            if (Terry_a6557.instance_Second == null) {
                Terry_a6557.instance_Second = new Terry_a6557();
            }
            if (firstCall) {
                Terry_a6557.instance_Second.firstCall = true;
            }
            return Terry_a6557.instance_Second;
        }
    };
    Terry_a6557.addEventa6557 = function (MC, own_role) {
        var a6557 = Terry_a6557.getInstance(own_role, false);
        if (!a6557.firstCall) {
            return;
        }
        a6557.firstCall = false;
        MC.visible = false;
        own_role.hurtAway_self(a6557.Vx, a6557.Vy, a6557.end_status);
    };
    return Terry_a6557;
}());
__reflect(Terry_a6557.prototype, "Terry_a6557");
//# sourceMappingURL=Terry_a6557.js.map