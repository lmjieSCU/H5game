var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var k_lastFire2 = (function () {
    function k_lastFire2() {
    }
    k_lastFire2.addSprite6038 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, k_lastFire2.frame1, 42, k_lastFire2.frame42,]);
        mc.addWaitingCallFun(mc, ['frame1Call', k_lastFire2.frame1Call, [mc, own_role]]);
        return;
    };
    k_lastFire2.frame1Call = function (mc, own_role) {
        mc.x = own_role.opp.x;
        mc.y = own_role.opp.y;
    };
    k_lastFire2.frame1 = function (mc) {
        // numMax = 15;
        //color1 = "fire_red1";
        // color2 = "fire_red2";
        // k_lastFire2.role_mc.changeColor("fire",1000);
        mc.checkWaitingCallFun('frame1Call');
    };
    k_lastFire2.frame42 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return k_lastFire2;
}());
__reflect(k_lastFire2.prototype, "k_lastFire2");
//# sourceMappingURL=k_lastFire2.js.map