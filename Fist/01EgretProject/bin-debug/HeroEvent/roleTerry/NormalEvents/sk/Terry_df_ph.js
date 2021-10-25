var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_df_ph = (function () {
    function Terry_df_ph() {
    }
    Terry_df_ph.addSprite8916 = function (mc, own_role) {
        mc.addFrameScript(mc, [10, Terry_df_ph.frame10, 28, Terry_df_ph.frame28]);
        return;
    };
    Terry_df_ph.frame10 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a6914.getInstance(_parentRole).name = "terry_shanzi3";
    };
    Terry_df_ph.frame28 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_df_ph;
}());
__reflect(Terry_df_ph.prototype, "Terry_df_ph");
//# sourceMappingURL=Terry_df_ph.js.map