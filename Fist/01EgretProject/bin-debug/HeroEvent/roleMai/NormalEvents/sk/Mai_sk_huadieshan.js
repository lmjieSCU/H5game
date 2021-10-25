var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_sk_huadieshan = (function () {
    function Mai_sk_huadieshan() {
    }
    Mai_sk_huadieshan.addSprite6927 = function (mc, own_role) {
        mc.addFrameScript(mc, [9, Mai_sk_huadieshan.frame9, 27, Mai_sk_huadieshan.frame27]);
        return;
    };
    Mai_sk_huadieshan.frame9 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a6914 = Mai_a6914.getInstance(_parentRole);
        a6914.name = "mai_shanzi1";
    };
    Mai_sk_huadieshan.frame27 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Mai_sk_huadieshan;
}());
__reflect(Mai_sk_huadieshan.prototype, "Mai_sk_huadieshan");
//# sourceMappingURL=Mai_sk_huadieshan.js.map