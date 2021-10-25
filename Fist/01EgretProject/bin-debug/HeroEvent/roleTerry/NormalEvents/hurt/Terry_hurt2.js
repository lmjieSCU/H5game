var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_hurt2 = (function () {
    function Terry_hurt2() {
    }
    Terry_hurt2.addSprite8573 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Terry_hurt2.frame2, 13, Terry_hurt2.frame13, 14, Terry_hurt2.frame14, 20, Terry_hurt2.frame20, 21, Terry_hurt2.frame21, 22, Terry_hurt2.frame22, 23, Terry_hurt2.frame23]);
        return;
    };
    Terry_hurt2.frame2 = function (mc) {
        // soundArray = [];
        // soundArray[0] = "none";
        // soundArray[1] = "none";
        // startPos = 0;
        // loop = 1;
    };
    Terry_hurt2.frame13 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Terry_hurt2.frame14 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Terry_hurt2.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Terry_hurt2.frame21 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Terry_hurt2.frame22 = function (mc) {
        mc.stop();
    };
    Terry_hurt2.frame23 = function (mc) {
        mc.prevFrame();
    };
    return Terry_hurt2;
}());
__reflect(Terry_hurt2.prototype, "Terry_hurt2");
//# sourceMappingURL=Terry_hurt2.js.map