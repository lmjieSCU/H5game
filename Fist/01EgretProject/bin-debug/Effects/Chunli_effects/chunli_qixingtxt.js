var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var chunli_qixingtxt = (function () {
    function chunli_qixingtxt() {
    }
    chunli_qixingtxt.addSprite16045 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, chunli_qixingtxt.frame1, 35, chunli_qixingtxt.frame35]);
        mc.visible = false;
        mc["own_role"] = own_role;
        return;
    };
    chunli_qixingtxt.frame1 = function (mc) {
        mc.visible = true;
        mc.x = (mc.parent.globalToLocal(GameConfig.FightWidth / 2)).x;
        if (mc["own_role"].dir == -1) {
            mc.scaleX = mc.scaleX * -1;
        }
    };
    chunli_qixingtxt.frame35 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return chunli_qixingtxt;
}());
__reflect(chunli_qixingtxt.prototype, "chunli_qixingtxt");
//# sourceMappingURL=chunli_qixingtxt.js.map