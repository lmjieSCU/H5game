var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var k_fire_land = (function () {
    function k_fire_land() {
    }
    k_fire_land.addSprite4690 = function (mc, own_role) {
        mc.addFrameScript(mc, [25, k_fire_land.frame25,]);
        return;
    };
    k_fire_land.frame25 = function (mc) {
        mc.stop();
        mc.parent.removeChild(mc);
    };
    return k_fire_land;
}());
__reflect(k_fire_land.prototype, "k_fire_land");
//# sourceMappingURL=k_fire_land.js.map