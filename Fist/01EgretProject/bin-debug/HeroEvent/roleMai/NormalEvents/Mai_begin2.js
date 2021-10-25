var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_begin2 = (function () {
    function Mai_begin2() {
    }
    Mai_begin2.addSprite6242 = function (mc, own_role) {
        mc.addFrameScript(mc, [102, Mai_begin2.frame102]);
        return;
    };
    Mai_begin2.frame102 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.gotoAndStop("ready");
        // _parentRole.toStatus_switch("stand");
    };
    return Mai_begin2;
}());
__reflect(Mai_begin2.prototype, "Mai_begin2");
//# sourceMappingURL=Mai_begin2.js.map