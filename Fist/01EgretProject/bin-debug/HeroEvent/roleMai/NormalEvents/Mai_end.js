var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_end = (function () {
    function Mai_end() {
    }
    Mai_end.addSprite6287 = function (mc, own_role) {
        mc.addFrameScript(mc, [80, Mai_end.frame80]);
        return;
    };
    Mai_end.frame80 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.stop();
        // _parentRole.toStatus_switch("stand");
    };
    return Mai_end;
}());
__reflect(Mai_end.prototype, "Mai_end");
//# sourceMappingURL=Mai_end.js.map