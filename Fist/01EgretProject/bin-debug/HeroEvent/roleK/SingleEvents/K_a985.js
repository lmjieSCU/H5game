var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**生成特效 */
var K_a985 = (function () {
    function K_a985() {
        this.firstCall = true;
        return;
    }
    K_a985.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (K_a985.Firstowner == null) {
            K_a985.Firstowner = owner;
            K_a985.instance_First = new K_a985();
            _level0.instance_First.push(this);
            return K_a985.instance_First;
        }
        else if (K_a985.Firstowner == owner) {
            if (firstCall) {
                K_a985.instance_First.firstCall = true;
            }
            return K_a985.instance_First;
        }
        else {
            if (K_a985.instance_Second == null) {
                K_a985.instance_Second = new K_a985();
            }
            if (firstCall) {
                K_a985.instance_Second.firstCall = true;
            }
            return K_a985.instance_Second;
        }
    };
    K_a985.addEventa985 = function (MC, own_role) {
        var a985 = K_a985.getInstance(own_role, false);
        if (!a985.firstCall) {
            return;
        }
        a985.firstCall = false;
        MC.stop();
        MC.visible = false;
        var num = MC.parent.localToGlobal(MC.x + MC.width / 2, MC.y + MC.height / 2);
        var dx = (SplashScene.hero_layer.globalToLocal(num.x)).x;
        var dy = (SplashScene.hero_layer.globalToLocal(0, num.y)).y;
        _level0.effect_mc.superStart(a985.s_type, a985.f_time, dx, dy, a985.bgType, a985.roleName, own_role.dir, this, own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
        //for testii
    };
    return K_a985;
}());
__reflect(K_a985.prototype, "K_a985");
//# sourceMappingURL=K_a985.js.map