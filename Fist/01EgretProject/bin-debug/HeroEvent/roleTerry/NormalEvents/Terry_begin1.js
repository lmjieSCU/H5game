var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_begin = (function () {
    function Terry_begin() {
    }
    Terry_begin.addSprite8338 = function (mc, own_role) {
        mc.addFrameScript(mc, [65, Terry_begin.frame65]);
        mc["own_role"] = own_role;
        return;
    };
    Terry_begin.frame65 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.gotoAndStop("ready");
        // _parentRole.toStatus_switch("stand");
    };
    return Terry_begin;
}());
__reflect(Terry_begin.prototype, "Terry_begin");
//# sourceMappingURL=Terry_begin1.js.map