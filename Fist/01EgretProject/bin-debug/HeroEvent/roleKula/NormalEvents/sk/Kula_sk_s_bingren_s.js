var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_sk_s_bingren_s = (function () {
    function Kula_sk_s_bingren_s() {
    }
    Kula_sk_s_bingren_s.addSprite19547 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Kula_sk_s_bingren_s.frame2, 5, Kula_sk_s_bingren_s.frame5, 37, Kula_sk_s_bingren_s.frame37]);
        return;
    };
    Kula_sk_s_bingren_s.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a19530 = Kula_a19530.getInstance(_parentRole);
        a19530.s_type = "s1_s";
        a19530.f_time = 20;
        a19530.bgType = "1";
        a19530.roleName = "Kula";
        a19530.faceName = "";
    };
    Kula_sk_s_bingren_s.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_ice2max";
    };
    Kula_sk_s_bingren_s.frame37 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Kula_sk_s_bingren_s;
}());
__reflect(Kula_sk_s_bingren_s.prototype, "Kula_sk_s_bingren_s");
//# sourceMappingURL=Kula_sk_s_bingren_s.js.map