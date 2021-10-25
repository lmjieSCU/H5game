var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_sk_s_bo2_s = (function () {
    function Chunli_sk_s_bo2_s() {
    }
    Chunli_sk_s_bo2_s.addSprite15317 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Chunli_sk_s_bo2_s.frame3, 4, Chunli_sk_s_bo2_s.frame4, 12, Chunli_sk_s_bo2_s.frame12, 31, Chunli_sk_s_bo2_s.frame31, 52, Chunli_sk_s_bo2_s.frame52]);
        return;
    };
    Chunli_sk_s_bo2_s.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4178 = Chunli_a4178.getInstance(_parentRole);
        a4178.s_type = "s1_s";
        a4178.f_time = 20;
        a4178.bgType = "1";
        a4178.roleName = "Chunli";
        a4178.faceName = "";
    };
    Chunli_sk_s_bo2_s.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = true;
    };
    Chunli_sk_s_bo2_s.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a4196.getInstance(_parentRole).name = "chunlii_powerball";
    };
    Chunli_sk_s_bo2_s.frame31 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = false;
    };
    Chunli_sk_s_bo2_s.frame52 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_sk_s_bo2_s;
}());
__reflect(Chunli_sk_s_bo2_s.prototype, "Chunli_sk_s_bo2_s");
//# sourceMappingURL=Chunli_sk_s_bo2_s.js.map