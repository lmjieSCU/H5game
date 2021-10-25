var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_a6754 = (function () {
    function Terry_a6754() {
        this.firstCall = true;
        return;
    }
    Terry_a6754.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Terry_a6754.Firstowner == null) {
            Terry_a6754.Firstowner = owner;
            Terry_a6754.instance_First = new Terry_a6754();
            _level0.instance_First.push(this);
            return Terry_a6754.instance_First;
        }
        else if (Terry_a6754.Firstowner == owner) {
            if (firstCall) {
                Terry_a6754.instance_First.firstCall = true;
            }
            return Terry_a6754.instance_First;
        }
        else {
            if (Terry_a6754.instance_Second == null) {
                Terry_a6754.instance_Second = new Terry_a6754();
            }
            if (firstCall) {
                Terry_a6754.instance_Second.firstCall = true;
            }
            return Terry_a6754.instance_Second;
        }
    };
    Terry_a6754.addEventa6754 = function (MC, own_role) {
        var a6754 = Terry_a6754.getInstance(own_role, false);
        if (!a6754.firstCall) {
            return;
        }
        a6754.firstCall = false;
        MC.visible = false;
        MC.stop();
        own_role.catch_HitTest(MC, a6754.status_1, a6754.flag, a6754.land, a6754.hurt, a6754.downHit);
    };
    return Terry_a6754;
}());
__reflect(Terry_a6754.prototype, "Terry_a6754");
//# sourceMappingURL=Terry_a6754.js.map