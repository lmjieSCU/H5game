var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_begin = (function () {
    function Mai_begin() {
    }
    Mai_begin.addSprite6200 = function (mc, own_role) {
        mc.addFrameScript(mc, [65, Mai_begin.frame65]);
        return;
    };
    Mai_begin.frame65 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.gotoAndStop("ready");
        // _parentRole.toStatus_switch("stand");
    };
    return Mai_begin;
}());
__reflect(Mai_begin.prototype, "Mai_begin");
//# sourceMappingURL=Mai_begin.js.map