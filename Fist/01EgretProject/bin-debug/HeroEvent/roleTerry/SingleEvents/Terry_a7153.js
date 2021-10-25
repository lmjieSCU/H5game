var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_a7153 = (function () {
    function Terry_a7153() {
        this.firstCall = true;
        return;
    }
    Terry_a7153.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Terry_a7153.Firstowner == null) {
            Terry_a7153.Firstowner = owner;
            Terry_a7153.instance_First = new Terry_a7153();
            _level0.instance_First.push(this);
            return Terry_a7153.instance_First;
        }
        else if (Terry_a7153.Firstowner == owner) {
            if (firstCall) {
                Terry_a7153.instance_First.firstCall = true;
            }
            return Terry_a7153.instance_First;
        }
        else {
            if (Terry_a7153.instance_Second == null) {
                Terry_a7153.instance_Second = new Terry_a7153();
            }
            if (firstCall) {
                Terry_a7153.instance_Second.firstCall = true;
            }
            return Terry_a7153.instance_Second;
        }
    };
    Terry_a7153.addEventa7153 = function (MC, own_role) {
        var a7153 = Terry_a7153.getInstance(own_role, false);
        if (!a7153.firstCall) {
            return;
        }
        a7153.firstCall = false;
        MC.visible = false;
        if (own_role.onHit != true || own_role.opp.status_3 != "hurt") {
            own_role.bodyMC.gotoAndStop(a7153.nohitFrame);
        }
    };
    return Terry_a7153;
}());
__reflect(Terry_a7153.prototype, "Terry_a7153");
//# sourceMappingURL=Terry_a7153.js.map