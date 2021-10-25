var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_ready = (function () {
    function Mai_ready() {
    }
    Mai_ready.addSprite6347 = function (mc, own_role) {
        mc.addFrameScript(mc, [101, Mai_ready.frame101]);
        return;
    };
    Mai_ready.frame101 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
    };
    return Mai_ready;
}());
__reflect(Mai_ready.prototype, "Mai_ready");
//# sourceMappingURL=Mai_ready.js.map