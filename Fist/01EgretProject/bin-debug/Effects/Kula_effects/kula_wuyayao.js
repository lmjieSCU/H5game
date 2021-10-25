var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var kula_wuyayao = (function () {
    function kula_wuyayao() {
    }
    kula_wuyayao.addSprite18690 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, kula_wuyayao.frame1, 20, kula_wuyayao.frame22]);
        mc["own_role"] = own_role;
        return;
    };
    kula_wuyayao.frame1 = function (mc) {
        FightMainRender.getInstance().Add(mc, kula_wuyayao.onEnterFrame, [mc, mc["own_role"]]);
    };
    kula_wuyayao.onEnterFrame = function (mc, role) {
        if (_level0.inPause) {
            return undefined;
        }
        if (role.status_3 == "hurt") {
            if (mc.parent) {
                mc.parent.removeChild(mc);
                FightMainRender.getInstance().Remove(mc, kula_wuyayao.onEnterFrame);
            }
        }
    };
    kula_wuyayao.frame22 = function (mc) {
        FightMainRender.getInstance().Remove(mc, kula_wuyayao.onEnterFrame);
        if (mc.parent) {
            mc.parent.removeChild(mc);
        }
    };
    return kula_wuyayao;
}());
__reflect(kula_wuyayao.prototype, "kula_wuyayao");
//# sourceMappingURL=kula_wuyayao.js.map