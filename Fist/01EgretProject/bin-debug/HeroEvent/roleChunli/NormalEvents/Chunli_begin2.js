var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_begin2 = (function () {
    function Chunli_begin2() {
    }
    Chunli_begin2.addSprite14121 = function (mc, own_role) {
        mc.addFrameScript(mc, [94, Chunli_begin2.frame94]);
        return;
    };
    Chunli_begin2.frame94 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        mc.gotoAndStop("ready");
    };
    return Chunli_begin2;
}());
__reflect(Chunli_begin2.prototype, "Chunli_begin2");
//# sourceMappingURL=Chunli_begin2.js.map