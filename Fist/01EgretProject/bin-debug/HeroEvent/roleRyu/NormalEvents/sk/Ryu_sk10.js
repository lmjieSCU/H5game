var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_sk10 = (function () {
    function Ryu_sk10() {
    }
    Ryu_sk10.addSprite20720 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Ryu_sk10.frame3, 7, Ryu_sk10.frame7, 34, Ryu_sk10.frame34]);
        return;
    };
    Ryu_sk10.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20717 = Ryu_a20717.getInstance(_parentRole);
        a20717.s_type = "s1";
        a20717.f_time = 20;
        a20717.bgType = "1";
        a20717.roleName = "Ryu";
        a20717.faceName = "";
    };
    Ryu_sk10.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20657.getInstance(_parentRole).name = "wave_s";
    };
    Ryu_sk10.frame34 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Ryu_sk10;
}());
__reflect(Ryu_sk10.prototype, "Ryu_sk10");
//# sourceMappingURL=Ryu_sk10.js.map