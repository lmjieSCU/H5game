var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_a20717 = (function () {
    function Ryu_a20717() {
        this.firstCall = true;
        return;
    }
    Ryu_a20717.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Ryu_a20717.Firstowner == null) {
            Ryu_a20717.Firstowner = owner;
            Ryu_a20717.instance_First = new Ryu_a20717();
            _level0.instance_First.push(this);
            return Ryu_a20717.instance_First;
        }
        else if (Ryu_a20717.Firstowner == owner) {
            if (firstCall) {
                Ryu_a20717.instance_First.firstCall = true;
            }
            return Ryu_a20717.instance_First;
        }
        else {
            if (Ryu_a20717.instance_Second == null) {
                Ryu_a20717.instance_Second = new Ryu_a20717();
            }
            if (firstCall) {
                Ryu_a20717.instance_Second.firstCall = true;
            }
            return Ryu_a20717.instance_Second;
        }
    };
    Ryu_a20717.addEventa20717 = function (MC, own_role) {
        var a20717 = Ryu_a20717.getInstance(own_role, false);
        if (!a20717.firstCall) {
            return;
        }
        a20717.firstCall = false;
        MC.stop();
        MC.visible = false;
        var num = MC.parent.localToGlobal(MC.x + MC.width / 2, MC.y + MC.height / 2);
        var dx = (SplashScene.hero_layer.globalToLocal(num.x)).x;
        var dy = (SplashScene.hero_layer.globalToLocal(0, num.y)).y;
        _level0.effect_mc.superStart(a20717.s_type, a20717.f_time, dx, dy, a20717.bgType, a20717.roleName, own_role.dir, this, own_role);
    };
    return Ryu_a20717;
}());
__reflect(Ryu_a20717.prototype, "Ryu_a20717");
//# sourceMappingURL=Ryu_a20717.js.map