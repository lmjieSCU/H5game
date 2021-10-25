var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_roll = (function () {
    function Ryu_roll() {
    }
    Ryu_roll.addSprite20239 = function (mc, own_role) {
        mc.addFrameScript(mc, [4, Ryu_roll.frame4, 7, Ryu_roll.frame7]);
        return;
    };
    Ryu_roll.addSprite20240 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Ryu_roll.frame3, 5, Ryu_roll.frame5]);
        return;
    };
    Ryu_roll.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20238 = Ryu_a20238.getInstance(_parentRole);
        a20238.Vx = -25;
        a20238.Vy = 17;
        a20238.Va = 0;
        a20238.Vg = 0;
        a20238.Vx_min = 0;
        a20238.posY2 = "";
        a20238.flag = "";
        a20238.end_status = "land2";
    };
    Ryu_roll.frame5 = function (mc) {
        mc.stop();
    };
    Ryu_roll.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a20238 = Ryu_a20238.getInstance(_parentRole);
        a20238.Vx = 25;
        a20238.Vy = 17;
        a20238.Va = 0;
        a20238.Vg = 0;
        a20238.Vx_min = 0;
        a20238.posY2 = "";
        a20238.flag = "";
        a20238.end_status = "land2";
    };
    Ryu_roll.frame7 = function (mc) {
        mc.stop();
    };
    return Ryu_roll;
}());
__reflect(Ryu_roll.prototype, "Ryu_roll");
//# sourceMappingURL=Ryu_roll.js.map