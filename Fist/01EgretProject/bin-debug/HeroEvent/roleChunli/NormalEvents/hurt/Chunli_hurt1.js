var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_hurt1 = (function () {
    function Chunli_hurt1() {
    }
    Chunli_hurt1.addSprite14559 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Chunli_hurt1.frame2, 13, Chunli_hurt1.frame13, 14, Chunli_hurt1.frame14, 19, Chunli_hurt1.frame19, 20, Chunli_hurt1.frame20]);
        return;
    };
    Chunli_hurt1.frame2 = function (mc) {
        // soundArray = [];
        // soundArray[0] = "mai_hurt1";
        // soundArray[1] = "mai_hurt2";
        // soundArray[2] = "none";
        // soundArray[3] = "none";
        // startPos = 0;
        // loop = 1;
    };
    Chunli_hurt1.frame13 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Chunli_hurt1.frame14 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Chunli_hurt1.frame19 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Chunli_hurt1.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_hurt1;
}());
__reflect(Chunli_hurt1.prototype, "Chunli_hurt1");
//# sourceMappingURL=Chunli_hurt1.js.map