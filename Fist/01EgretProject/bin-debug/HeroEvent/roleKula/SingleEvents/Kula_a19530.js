var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**生成特效 */
var Kula_a19530 = (function () {
    function Kula_a19530() {
        this.firstCall = true;
        return;
    }
    Kula_a19530.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Kula_a19530.Firstowner == null) {
            Kula_a19530.Firstowner = owner;
            Kula_a19530.instance_First = new Kula_a19530();
            _level0.instance_First.push(this);
            return Kula_a19530.instance_First;
        }
        else if (Kula_a19530.Firstowner == owner) {
            if (firstCall) {
                Kula_a19530.instance_First.firstCall = true;
            }
            return Kula_a19530.instance_First;
        }
        else {
            if (Kula_a19530.instance_Second == null) {
                Kula_a19530.instance_Second = new Kula_a19530();
            }
            if (firstCall) {
                Kula_a19530.instance_Second.firstCall = true;
            }
            return Kula_a19530.instance_Second;
        }
    };
    Kula_a19530.addEventa19530 = function (MC, own_role) {
        var a19530 = Kula_a19530.getInstance(own_role, false);
        if (!a19530.firstCall) {
            return;
        }
        a19530.firstCall = false;
        MC.stop();
        MC.visible = false;
        var num = MC.parent.localToGlobal(MC.x + MC.width / 2, MC.y + MC.height / 2);
        var dx = (SplashScene.hero_layer.globalToLocal(num.x)).x;
        var dy = (SplashScene.hero_layer.globalToLocal(0, num.y)).y;
        _level0.effect_mc.superStart(a19530.s_type, a19530.f_time, dx, dy, a19530.bgType, a19530.roleName, own_role.dir, this, own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
        //for testii
    };
    return Kula_a19530;
}());
__reflect(Kula_a19530.prototype, "Kula_a19530");
//# sourceMappingURL=Kula_a19530.js.map