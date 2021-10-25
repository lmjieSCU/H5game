var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_hurt1 = (function () {
    function Terry_hurt1() {
    }
    Terry_hurt1.addSprite8564 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Terry_hurt1.frame2, 13, Terry_hurt1.frame13, 14, Terry_hurt1.frame14, 19, Terry_hurt1.frame19, 20, Terry_hurt1.frame20]);
        return;
    };
    Terry_hurt1.frame2 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        // soundArray = [];
        // soundArray[0] = "none";
        // soundArray[1] = "none";
        // startPos = 0;
        // loop = 1;
    };
    Terry_hurt1.frame13 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Terry_hurt1.frame14 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Terry_hurt1.frame19 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Terry_hurt1.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_hurt1;
}());
__reflect(Terry_hurt1.prototype, "Terry_hurt1");
//# sourceMappingURL=Terry_hurt1.js.map