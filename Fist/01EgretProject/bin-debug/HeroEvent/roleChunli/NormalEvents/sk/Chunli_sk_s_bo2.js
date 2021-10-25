var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_sk_s_bo2 = (function () {
    function Chunli_sk_s_bo2() {
    }
    Chunli_sk_s_bo2.addSprite15316 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Chunli_sk_s_bo2.frame3, 4, Chunli_sk_s_bo2.frame4, 12, Chunli_sk_s_bo2.frame12, 24, Chunli_sk_s_bo2.frame24, 32, Chunli_sk_s_bo2.frame32]);
        return;
    };
    Chunli_sk_s_bo2.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a4178 = Chunli_a4178.getInstance(_parentRole);
        a4178.s_type = "s1";
        a4178.f_time = 20;
        a4178.bgType = "1";
        a4178.roleName = "Chunli";
        a4178.faceName = "";
    };
    Chunli_sk_s_bo2.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = true;
    };
    Chunli_sk_s_bo2.frame12 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a4196.getInstance(_parentRole).name = "chunlii_powerball1";
    };
    Chunli_sk_s_bo2.frame24 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        //continueHit = false;
    };
    Chunli_sk_s_bo2.frame32 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_sk_s_bo2;
}());
__reflect(Chunli_sk_s_bo2.prototype, "Chunli_sk_s_bo2");
//# sourceMappingURL=Chunli_sk_s_bo2.js.map