var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**生成特效 */
var Mai_a7078 = (function () {
    function Mai_a7078() {
        this.firstCall = true;
        return;
    }
    Mai_a7078.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Mai_a7078.Firstowner == null) {
            Mai_a7078.Firstowner = owner;
            Mai_a7078.instance_First = new Mai_a7078();
            _level0.instance_First.push(this);
            return Mai_a7078.instance_First;
        }
        else if (Mai_a7078.Firstowner == owner) {
            if (firstCall) {
                Mai_a7078.instance_First.firstCall = true;
            }
            return Mai_a7078.instance_First;
        }
        else {
            if (Mai_a7078.instance_Second == null) {
                Mai_a7078.instance_Second = new Mai_a7078();
            }
            if (firstCall) {
                Mai_a7078.instance_Second.firstCall = true;
            }
            return Mai_a7078.instance_Second;
        }
    };
    Mai_a7078.addEventa7078 = function (MC, own_role) {
        var a7078 = Mai_a7078.getInstance(own_role, false);
        if (!a7078.firstCall) {
            return;
        }
        a7078.firstCall = false;
        MC.stop();
        MC.visible = false;
        var num = MC.parent.localToGlobal(MC.x + MC.width / 2, MC.y + MC.height / 2);
        var dx = (SplashScene.hero_layer.globalToLocal(num.x)).x;
        var dy = (SplashScene.hero_layer.globalToLocal(0, num.y)).y;
        _level0.effect_mc.superStart(a7078.s_type, a7078.f_time, dx, dy, a7078.bgType, a7078.roleName, own_role.dir, this, own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
        //for testii
    };
    return Mai_a7078;
}());
__reflect(Mai_a7078.prototype, "Mai_a7078");
//# sourceMappingURL=Mai_a7078.js.map