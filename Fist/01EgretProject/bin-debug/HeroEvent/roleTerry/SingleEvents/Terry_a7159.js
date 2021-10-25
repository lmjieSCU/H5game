var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_a7159 = (function () {
    function Terry_a7159() {
        this.firstCall = true;
        return;
    }
    Terry_a7159.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Terry_a7159.Firstowner == null) {
            Terry_a7159.Firstowner = owner;
            Terry_a7159.instance_First = new Terry_a7159();
            _level0.instance_First.push(this);
            return Terry_a7159.instance_First;
        }
        else if (Terry_a7159.Firstowner == owner) {
            if (firstCall) {
                Terry_a7159.instance_First.firstCall = true;
            }
            return Terry_a7159.instance_First;
        }
        else {
            if (Terry_a7159.instance_Second == null) {
                Terry_a7159.instance_Second = new Terry_a7159();
            }
            if (firstCall) {
                Terry_a7159.instance_Second.firstCall = true;
            }
            return Terry_a7159.instance_Second;
        }
    };
    Terry_a7159.addEventa7159 = function (MC, own_role) {
        var a7159 = Terry_a7159.getInstance(own_role, false);
        if (!a7159.firstCall) {
            return;
        }
        a7159.firstCall = false;
        MC.visible = false;
        _level0.effect_mc.bgEff_start(a7159.effName, own_role);
    };
    return Terry_a7159;
}());
__reflect(Terry_a7159.prototype, "Terry_a7159");
//# sourceMappingURL=Terry_a7159.js.map