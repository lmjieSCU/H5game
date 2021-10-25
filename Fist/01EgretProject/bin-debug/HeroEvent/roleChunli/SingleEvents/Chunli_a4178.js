var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**生成特效 */
var Chunli_a4178 = (function () {
    function Chunli_a4178() {
        this.firstCall = true;
        return;
    }
    Chunli_a4178.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Chunli_a4178.Firstowner == null) {
            Chunli_a4178.Firstowner = owner;
            Chunli_a4178.instance_First = new Chunli_a4178();
            _level0.instance_First.push(this);
            return Chunli_a4178.instance_First;
        }
        else if (Chunli_a4178.Firstowner == owner) {
            if (firstCall) {
                Chunli_a4178.instance_First.firstCall = true;
            }
            return Chunli_a4178.instance_First;
        }
        else {
            if (Chunli_a4178.instance_Second == null) {
                Chunli_a4178.instance_Second = new Chunli_a4178();
            }
            if (firstCall) {
                Chunli_a4178.instance_Second.firstCall = true;
            }
            return Chunli_a4178.instance_Second;
        }
    };
    Chunli_a4178.addEventa4178 = function (MC, own_role) {
        var a4178 = Chunli_a4178.getInstance(own_role, false);
        if (!a4178.firstCall) {
            return;
        }
        a4178.firstCall = false;
        MC.stop();
        MC.visible = false;
        var num = MC.parent.localToGlobal(MC.x + MC.width / 2, MC.y + MC.height / 2);
        var dx = (SplashScene.hero_layer.globalToLocal(num.x)).x;
        var dy = (SplashScene.hero_layer.globalToLocal(0, num.y)).y;
        _level0.effect_mc.superStart(a4178.s_type, a4178.f_time, dx, dy, a4178.bgType, a4178.roleName, own_role.dir, this, own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
        //for testii
    };
    return Chunli_a4178;
}());
__reflect(Chunli_a4178.prototype, "Chunli_a4178");
//# sourceMappingURL=Chunli_a4178.js.map