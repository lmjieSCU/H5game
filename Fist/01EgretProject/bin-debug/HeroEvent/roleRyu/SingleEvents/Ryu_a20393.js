var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_a20393 = (function () {
    function Ryu_a20393() {
        this.firstCall = true;
        return;
    }
    Ryu_a20393.getInstance = function (owner, firstCall) {
        if (firstCall === void 0) { firstCall = true; }
        if (Ryu_a20393.Firstowner == null) {
            Ryu_a20393.Firstowner = owner;
            Ryu_a20393.instance_First = new Ryu_a20393();
            _level0.instance_First.push(this);
            return Ryu_a20393.instance_First;
        }
        else if (Ryu_a20393.Firstowner == owner) {
            if (firstCall) {
                Ryu_a20393.instance_First.firstCall = true;
            }
            return Ryu_a20393.instance_First;
        }
        else {
            if (Ryu_a20393.instance_Second == null) {
                Ryu_a20393.instance_Second = new Ryu_a20393();
            }
            if (firstCall) {
                Ryu_a20393.instance_Second.firstCall = true;
            }
            return Ryu_a20393.instance_Second;
        }
    };
    Ryu_a20393.addEventa20393 = function (MC, own_role) {
        var a20393 = Ryu_a20393.getInstance(own_role, false);
        if (!a20393.firstCall) {
            return;
        }
        a20393.firstCall = false;
        MC.stop();
        MC.visible = false;
        var dx = own_role.x + MC.x * own_role.dir;
        var dy = own_role.y + MC.y;
        var f_time = 10;
        var bgType = "0";
        _level0.effect_mc.superStart(a20393.s_type, f_time, dx, dy, bgType, "", own_role.dir, this, own_role);
        EventUtil.printMC(MC, String(own_role.FrameEvent_change_location()));
    };
    return Ryu_a20393;
}());
__reflect(Ryu_a20393.prototype, "Ryu_a20393");
//# sourceMappingURL=Ryu_a20393.js.map