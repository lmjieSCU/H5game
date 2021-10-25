var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_sk12 = (function () {
    function Ryu_sk12() {
    }
    Ryu_sk12.addSprite20738 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Ryu_sk12.frame3, 7, Ryu_sk12.frame7, 34, Ryu_sk12.frame34]);
        return;
    };
    Ryu_sk12.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20717 = Ryu_a20717.getInstance(_parentRole);
        a20717.s_type = "s1_s";
        a20717.f_time = 20;
        a20717.bgType = "1";
        a20717.roleName = "Ryu";
        a20717.faceName = "";
    };
    Ryu_sk12.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Ryu_a20657.getInstance(_parentRole).name = "wave_ss";
    };
    Ryu_sk12.frame34 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Ryu_sk12;
}());
__reflect(Ryu_sk12.prototype, "Ryu_sk12");
//# sourceMappingURL=Ryu_sk12.js.map