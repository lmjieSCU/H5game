var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_sk_buyue3 = (function () {
    function Moriya_sk_buyue3() {
    }
    Moriya_sk_buyue3.addSprite4115 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Moriya_sk_buyue3.frame3, 4, Moriya_sk_buyue3.frame4, 8, Moriya_sk_buyue3.frame8, 16, Moriya_sk_buyue3.frame16]);
        return;
    };
    Moriya_sk_buyue3.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.checkTouch_stop = true;
    };
    Moriya_sk_buyue3.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3395 = Moriya_a3395.getInstance(_parentRole);
        a3395.Vx = 53;
        a3395.flag = "";
        a3395.target = "";
    };
    Moriya_sk_buyue3.frame8 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.checkTouch_stop = false;
        var dir = _parentRole.dir;
        // if (dir > 0) {
        //     _parentRole.x = 50 - _level0.char_mc._x;
        // }
        // else {
        //    _parentRole.x = _level0.stage_with - 50 - _level0.char_mc._x;
        // }
    };
    Moriya_sk_buyue3.frame16 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_sk_buyue3;
}());
__reflect(Moriya_sk_buyue3.prototype, "Moriya_sk_buyue3");
//# sourceMappingURL=Moriya_sk_buyue3.js.map