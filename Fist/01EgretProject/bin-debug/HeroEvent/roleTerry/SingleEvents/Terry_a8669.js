var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_a8669 = (function () {
    function Terry_a8669() {
        this.firstCall = true;
        return;
    }
    Terry_a8669.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Terry_a8669.Firstowner == null) {
            Terry_a8669.Firstowner = owner;
            Terry_a8669.instance_First = new Terry_a8669();
            _level0.instance_First.push(this);
            return Terry_a8669.instance_First;
        }
        else if (Terry_a8669.Firstowner == owner) {
            if (firstCall) {
                Terry_a8669.instance_First.firstCall = true;
            }
            return Terry_a8669.instance_First;
        }
        else {
            if (Terry_a8669.instance_Second == null) {
                Terry_a8669.instance_Second = new Terry_a8669();
            }
            if (firstCall) {
                Terry_a8669.instance_Second.firstCall = true;
            }
            return Terry_a8669.instance_Second;
        }
    };
    Terry_a8669.addEventa8669 = function (MC, own_role) {
        var a8669 = Terry_a8669.getInstance(own_role, false);
        if (!a8669.firstCall) {
            return;
        }
        a8669.firstCall = false;
        if (a8669.flag == null) {
            console.log("flag is null in a8669");
            return;
        }
        MC.stop();
        MC.visible = false;
        if (own_role.do_hitTest(MC)) {
            own_role.switchSkill(a8669.flag);
        } // end if
        return;
    };
    return Terry_a8669;
}());
__reflect(Terry_a8669.prototype, "Terry_a8669");
//# sourceMappingURL=Terry_a8669.js.map