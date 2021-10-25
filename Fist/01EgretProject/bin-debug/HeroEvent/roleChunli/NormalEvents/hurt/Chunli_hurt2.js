var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_hurt2 = (function () {
    function Chunli_hurt2() {
    }
    Chunli_hurt2.addSprite14570 = function (mc, own_role) {
        mc.addFrameScript(mc, [2, Chunli_hurt2.frame2, 13, Chunli_hurt2.frame13, 14, Chunli_hurt2.frame14, 20, Chunli_hurt2.frame20, 21, Chunli_hurt2.frame21, 22, Chunli_hurt2.frame22, 23, Chunli_hurt2.frame23]);
        return;
    };
    Chunli_hurt2.frame2 = function (mc) {
        // soundArray = [];
        // soundArray[0] = "mai_hurt1";
        // soundArray[1] = "mai_hurt2";
        // soundArray[2] = "none";
        // soundArray[3] = "none";
        // startPos = 0;
        // loop = 1;
    };
    Chunli_hurt2.frame13 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Chunli_hurt2.frame14 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Chunli_hurt2.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.status_3 = "";
    };
    Chunli_hurt2.frame21 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    Chunli_hurt2.frame22 = function (mc) {
        mc.stop();
    };
    Chunli_hurt2.frame23 = function (mc) {
        mc.prevFrame();
    };
    return Chunli_hurt2;
}());
__reflect(Chunli_hurt2.prototype, "Chunli_hurt2");
//# sourceMappingURL=Chunli_hurt2.js.map