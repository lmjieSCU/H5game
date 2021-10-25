var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_begin2 = (function () {
    function Terry_begin2() {
    }
    Terry_begin2.addSprite8349 = function (mc, own_role) {
        mc.addFrameScript(mc, [94, Terry_begin2.frame94]);
        mc["own_role"] = own_role;
        return;
    };
    Terry_begin2.frame94 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.gotoAndStop("ready");
        // _parentRole.toStatus_switch("stand");
    };
    return Terry_begin2;
}());
__reflect(Terry_begin2.prototype, "Terry_begin2");
//# sourceMappingURL=Terry_begin2.js.map