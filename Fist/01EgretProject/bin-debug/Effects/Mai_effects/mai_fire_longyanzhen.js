var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var mai_fire_longyanzhen = (function () {
    function mai_fire_longyanzhen() {
    }
    mai_fire_longyanzhen.addSprite7848 = function (mc, own_role) {
        mc.addFrameScript(mc, [16, mai_fire_longyanzhen.frame16]);
        return;
    };
    mai_fire_longyanzhen.frame16 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return mai_fire_longyanzhen;
}());
__reflect(mai_fire_longyanzhen.prototype, "mai_fire_longyanzhen");
//# sourceMappingURL=mai_fire_longyanzhen.js.map