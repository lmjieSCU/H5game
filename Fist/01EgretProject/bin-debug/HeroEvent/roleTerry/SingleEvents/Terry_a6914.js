/**火焰子骨骼 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_a6914 = (function () {
    function Terry_a6914() {
        this.firstCall = true;
        return;
    }
    Terry_a6914.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Terry_a6914.Firstowner == null) {
            Terry_a6914.Firstowner = owner;
            Terry_a6914.instance_First = new Terry_a6914();
            _level0.instance_First.push(this);
            return Terry_a6914.instance_First;
        }
        else if (Terry_a6914.Firstowner == owner) {
            if (firstCall) {
                Terry_a6914.instance_First.firstCall = true;
            }
            return Terry_a6914.instance_First;
        }
        else {
            if (Terry_a6914.instance_Second == null) {
                Terry_a6914.instance_Second = new Terry_a6914();
            }
            if (firstCall) {
                Terry_a6914.instance_Second.firstCall = true;
            }
            return Terry_a6914.instance_Second;
        }
    };
    Terry_a6914.addEventa6914 = function (MC, own_role) {
        var a6914 = Terry_a6914.getInstance(own_role, false);
        if (!a6914.firstCall) {
            return;
        }
        a6914.firstCall = false;
        MC.stop();
        MC.visible = false;
        // var pt = new egret.DisplayObject();
        // pt.x = MC.x;
        // pt.y = MC.y;
        // own_role.localToGlobal(pt);
        own_role.addSkill(a6914.name, MC, own_role.Vx, own_role.Va);
    };
    return Terry_a6914;
}());
__reflect(Terry_a6914.prototype, "Terry_a6914");
//# sourceMappingURL=Terry_a6914.js.map