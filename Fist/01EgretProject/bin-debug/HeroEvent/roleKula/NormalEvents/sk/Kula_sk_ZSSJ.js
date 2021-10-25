var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Kula_sk_ZSSJ = (function () {
    function Kula_sk_ZSSJ() {
    }
    Kula_sk_ZSSJ.addSprite19678 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Kula_sk_ZSSJ.frame3, 19, Kula_sk_ZSSJ.frame19, 21, Kula_sk_ZSSJ.frame21, 30, Kula_sk_ZSSJ.frame30]);
        return;
    };
    Kula_sk_ZSSJ.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a19418 = Kula_a19418.getInstance(_parentRole);
        a19418.Vx = 0;
        a19418.Vy = 10;
        a19418.Va = 0;
        a19418.Vg = 1;
        a19418.Vx_min = 0;
        a19418.posY2 = "";
        a19418.flag = "";
        a19418.end_status = "land2";
    };
    Kula_sk_ZSSJ.frame19 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Kula_a19439.getInstance(_parentRole).name = "kula_snow_sheji1";
    };
    Kula_sk_ZSSJ.frame21 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a19418 = Kula_a19418.getInstance(_parentRole);
        a19418.Vx = 0;
        a19418.Vy = 1;
        a19418.Va = 0;
        a19418.Vg = 0;
        a19418.Vx_min = 0;
        a19418.posY2 = "";
        a19418.flag = "";
        a19418.end_status = "land2";
    };
    Kula_sk_ZSSJ.frame30 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Kula_sk_ZSSJ;
}());
__reflect(Kula_sk_ZSSJ.prototype, "Kula_sk_ZSSJ");
//# sourceMappingURL=Kula_sk_ZSSJ.js.map