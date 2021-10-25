var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_begin = (function () {
    function K_begin() {
    }
    K_begin.addSprite4954 = function (mc, own_role) {
        mc.addFrameScript(mc, [70, K_begin.frame70]);
        mc["own_role"] = own_role;
        return;
    };
    K_begin.frame70 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.gotoAndStop("ready");
        // _parentRole.toStatus_switch("stand");
    };
    return K_begin;
}());
__reflect(K_begin.prototype, "K_begin");
//# sourceMappingURL=K_begin1.js.map