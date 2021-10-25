var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_sk_bd_air = (function () {
    function Ryu_sk_bd_air() {
    }
    Ryu_sk_bd_air.addSprite21016 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Ryu_sk_bd_air.frame1, 6, Ryu_sk_bd_air.frame6, 51, Ryu_sk_bd_air.frame51, 52, Ryu_sk_bd_air.frame52, 53, Ryu_sk_bd_air.frame53]);
        return;
    };
    Ryu_sk_bd_air.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20238 = Ryu_a20238.getInstance(_parentRole);
        a20238.Vx = -5;
        a20238.Vy = 34;
        a20238.Va = 0;
        a20238.Vg = 4;
        a20238.Vx_min = 0;
        a20238.posY2 = "";
        a20238.flag = "";
        a20238.end_status = "land2";
    };
    Ryu_sk_bd_air.frame6 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20238 = Ryu_a20238.getInstance(_parentRole);
        a20238.Vx = -5;
        a20238.Vy = 5;
        a20238.Va = 0;
        a20238.Vg = 0.2;
        a20238.Vx_min = 0;
        a20238.posY2 = "";
        a20238.flag = "";
        a20238.end_status = "land2";
        var a20717 = Ryu_a20717.getInstance(_parentRole);
        a20717.s_type = "s1";
        a20717.f_time = 20;
        a20717.bgType = "1";
        a20717.roleName = "Ryu";
        a20717.faceName = "";
    };
    Ryu_sk_bd_air.frame51 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20238 = Ryu_a20238.getInstance(_parentRole);
        a20238.Vx = -5;
        a20238.Vy = 5;
        a20238.Va = 0;
        a20238.Vg = 4;
        a20238.Vx_min = 0;
        a20238.posY2 = "";
        a20238.flag = "";
        a20238.end_status = "land2";
    };
    Ryu_sk_bd_air.frame52 = function (mc) {
        mc.stop();
    };
    Ryu_sk_bd_air.frame53 = function (mc) {
        mc.prevFrame();
    };
    return Ryu_sk_bd_air;
}());
__reflect(Ryu_sk_bd_air.prototype, "Ryu_sk_bd_air");
//# sourceMappingURL=Ryu_sk_bd_air.js.map