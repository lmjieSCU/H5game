var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Chunli_sk_bo = (function () {
    function Chunli_sk_bo() {
    }
    Chunli_sk_bo.addSprite15094 = function (mc, own_role) {
        mc.addFrameScript(mc, [11, Chunli_sk_bo.frame11, 30, Chunli_sk_bo.frame30]);
        return;
    };
    Chunli_sk_bo.frame11 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Chunli_a4196.getInstance(_parentRole).name = "chunli_shanzi1";
    };
    Chunli_sk_bo.frame30 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Chunli_sk_bo;
}());
__reflect(Chunli_sk_bo.prototype, "Chunli_sk_bo");
//# sourceMappingURL=Chunli_sk_bo.js.map