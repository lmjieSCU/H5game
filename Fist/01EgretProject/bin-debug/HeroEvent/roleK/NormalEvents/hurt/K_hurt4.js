var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var K_hurt4 = (function () {
    function K_hurt4() {
    }
    K_hurt4.addSprite5248 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, K_hurt4.frame1, 10, K_hurt4.frame10]);
        mc['own_role'] = own_role;
        return;
    };
    K_hurt4.frame1 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.hurtAway();
    };
    K_hurt4.frame10 = function (mc) {
        mc.gotoAndStop("s2");
    };
    return K_hurt4;
}());
__reflect(K_hurt4.prototype, "K_hurt4");
//# sourceMappingURL=K_hurt4.js.map