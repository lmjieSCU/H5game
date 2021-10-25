var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Moriya_sk_buyue1 = (function () {
    function Moriya_sk_buyue1() {
    }
    Moriya_sk_buyue1.addSprite4112 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Moriya_sk_buyue1.frame3, 4, Moriya_sk_buyue1.frame4, 9, Moriya_sk_buyue1.frame9, 17, Moriya_sk_buyue1.frame17]);
        return;
    };
    Moriya_sk_buyue1.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.checkTouch_stop = true;
    };
    Moriya_sk_buyue1.frame4 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3395 = Moriya_a3395.getInstance(_parentRole);
        a3395.Vx = 53;
        a3395.flag = "";
        a3395.target = "";
    };
    Moriya_sk_buyue1.frame9 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a3395 = Moriya_a3395.getInstance(_parentRole);
        a3395.Vx = 5;
        a3395.flag = "";
        a3395.target = "";
        // var pos =_parentRole.opp._x + 100 * _parentRole.dir + _level0.char_mc._x;
        // if(pos > _level0.egde_max)
        // {
        // pos = _level0.egde_max;
        // }
        // else if(pos < _level0.egde_min)
        // {
        // pos = _level0.egde_min;
        // }
        // _root.role_mc._x = pos - _level0.char_mc._x;
        // _parent.checkSide_abs();
        // _parent.checkTouch_stop = false;
        // _parent.checkTouch(0);
    };
    Moriya_sk_buyue1.frame17 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Moriya_sk_buyue1;
}());
__reflect(Moriya_sk_buyue1.prototype, "Moriya_sk_buyue1");
//# sourceMappingURL=Moriya_sk_buyue1.js.map