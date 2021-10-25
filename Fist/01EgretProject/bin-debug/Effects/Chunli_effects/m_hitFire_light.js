var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var m_hitFire_light = (function () {
    function m_hitFire_light() {
    }
    m_hitFire_light.addSprite4427 = function (mc, own_role) {
        mc.addFrameScript(mc, [1, m_hitFire_light.frame1, 24, m_hitFire_light.frame24]);
        return;
    };
    m_hitFire_light.frame1 = function (mc) {
        // numMax = 2;
        // color1 = "light1";
        // color2 = "light2";
        var dx = Math.floor(Math.random() * 40 - 80);
        var dy = Math.floor(Math.random() * 100);
        mc.rotation = Math.floor(Math.random() * 360);
        // onEnterFrame = function()
        // {
        // _X = _root.role.opp._x + dx;
        // _Y = _root.role.opp._y - dy;
        // };
    };
    m_hitFire_light.frame24 = function (mc) {
        mc.parent.removeChild(mc);
    };
    return m_hitFire_light;
}());
__reflect(m_hitFire_light.prototype, "m_hitFire_light");
//# sourceMappingURL=m_hitFire_light.js.map