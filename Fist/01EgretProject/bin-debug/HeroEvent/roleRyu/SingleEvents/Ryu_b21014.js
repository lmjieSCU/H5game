var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Ryu_b21014 = (function () {
    function Ryu_b21014() {
    }
    Ryu_b21014.addSprite21014 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, Ryu_b21014.frame1, 5, Ryu_b21014.frame5, 9, Ryu_b21014.frame9]);
        mc["own_role"] = own_role;
        return;
    };
    Ryu_b21014.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.addSkill("wave_air2", mc, _parentRole.Vx, _parentRole.Va);
        //Ryu_a20657.getInstance(_parentRole).name = "wave_air2";
    };
    Ryu_b21014.frame5 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.addSkill("wave_air2", mc, _parentRole.Vx, _parentRole.Va);
        //Ryu_a20657.getInstance(_parentRole).name = "wave_air2";
    };
    Ryu_b21014.frame9 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.addSkill("wave_air2", mc, _parentRole.Vx, _parentRole.Va);
        //Ryu_a20657.getInstance(_parentRole).name = "wave_air2";
    };
    return Ryu_b21014;
}());
__reflect(Ryu_b21014.prototype, "Ryu_b21014");
//# sourceMappingURL=Ryu_b21014.js.map