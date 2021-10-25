var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_sk_feng_s = (function () {
    function Moriya_sk_feng_s() {
    }
    Moriya_sk_feng_s.addSprite4200 = function (mc, own_role) {
        mc.addFrameScript(mc, [5, Moriya_sk_feng_s.frame5, 55, Moriya_sk_feng_s.frame55]);
        return;
    };
    Moriya_sk_feng_s.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Moriya_a4196.getInstance(_parentRole).name = "moriya_fulong_s";
        var a4178 = Moriya_a4178.getInstance(_parentRole);
        a4178.s_type = "s1_s";
        a4178.f_time = 20;
        a4178.bgType = "1";
        a4178.roleName = "Moriya";
        a4178.faceName = "";
    };
    Moriya_sk_feng_s.frame55 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_sk_feng_s;
}());
__reflect(Moriya_sk_feng_s.prototype, "Moriya_sk_feng_s");
//# sourceMappingURL=Moriya_sk_feng_s.js.map