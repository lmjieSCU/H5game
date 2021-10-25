var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_sk_buyue2 = (function () {
    function Moriya_sk_buyue2() {
    }
    Moriya_sk_buyue2.addSprite4114 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Moriya_sk_buyue2.frame3, 4, Moriya_sk_buyue2.frame4, 8, Moriya_sk_buyue2.frame8, 15, Moriya_sk_buyue2.frame15]);
        return;
    };
    Moriya_sk_buyue2.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.checkTouch_stop = true;
    };
    Moriya_sk_buyue2.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3395 = Moriya_a3395.getInstance(_parentRole);
        a3395.Vx = 53;
        a3395.flag = "";
        a3395.target = "";
    };
    Moriya_sk_buyue2.frame8 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.checkTouch_stop = false;
        _parentRole.x = _parentRole.opp.x - 100 * _parentRole.dir;
    };
    Moriya_sk_buyue2.frame15 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_sk_buyue2;
}());
__reflect(Moriya_sk_buyue2.prototype, "Moriya_sk_buyue2");
//# sourceMappingURL=Moriya_sk_buyue2.js.map