var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_a7078 = (function () {
    function Terry_a7078() {
        this.firstCall = true;
        return;
    }
    Terry_a7078.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Terry_a7078.Firstowner == null) {
            Terry_a7078.Firstowner = owner;
            Terry_a7078.instance_First = new Terry_a7078();
            _level0.instance_First.push(this);
            return Terry_a7078.instance_First;
        }
        else if (Terry_a7078.Firstowner == owner) {
            if (firstCall) {
                Terry_a7078.instance_First.firstCall = true;
            }
            return Terry_a7078.instance_First;
        }
        else {
            if (Terry_a7078.instance_Second == null) {
                Terry_a7078.instance_Second = new Terry_a7078();
            }
            if (firstCall) {
                Terry_a7078.instance_Second.firstCall = true;
            }
            return Terry_a7078.instance_Second;
        }
    };
    Terry_a7078.addEventa7078 = function (MC, own_role) {
        var a7078 = Terry_a7078.getInstance(own_role, false);
        if (!a7078.firstCall) {
            return;
        }
        a7078.firstCall = false;
        MC.visible = false;
        MC.stop();
        MC.visible = false;
        var num = MC.parent.localToGlobal(MC.x + MC.width / 2, MC.y + MC.height / 2);
        var dx = (SplashScene.hero_layer.globalToLocal(num.x)).x;
        var dy = (SplashScene.hero_layer.globalToLocal(0, num.y)).y;
        _level0.effect_mc.superStart(a7078.s_type, a7078.f_time, dx, dy, a7078.bgType, a7078.roleName, own_role.dir, this, own_role);
    };
    return Terry_a7078;
}());
__reflect(Terry_a7078.prototype, "Terry_a7078");
//# sourceMappingURL=Terry_a7078.js.map