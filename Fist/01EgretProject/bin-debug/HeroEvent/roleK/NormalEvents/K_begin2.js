var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_begin2 = (function () {
    function K_begin2() {
    }
    K_begin2.addSprite4969 = function (mc, own_role) {
        mc.addFrameScript(mc, [70, K_begin2.frame70]);
        mc["own_role"] = own_role;
        return;
    };
    K_begin2.frame70 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.gotoAndStop("ready");
        // _parentRole.toStatus_switch("stand");
    };
    return K_begin2;
}());
__reflect(K_begin2.prototype, "K_begin2");
//# sourceMappingURL=K_begin2.js.map