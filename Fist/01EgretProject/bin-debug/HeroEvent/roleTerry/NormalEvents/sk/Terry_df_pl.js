var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_df_pl = (function () {
    function Terry_df_pl() {
    }
    Terry_df_pl.addSprite8919 = function (mc, own_role) {
        mc.addFrameScript(mc, [14, Terry_df_pl.frame14, 28, Terry_df_pl.frame28]);
        return;
    };
    Terry_df_pl.frame14 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a6914.getInstance(_parentRole).name = "terry_shanzi2";
    };
    Terry_df_pl.frame28 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_df_pl;
}());
__reflect(Terry_df_pl.prototype, "Terry_df_pl");
//# sourceMappingURL=Terry_df_pl.js.map