var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Terry_df_p_EX = (function () {
    function Terry_df_p_EX() {
    }
    Terry_df_p_EX.addSprite8920 = function (mc, own_role) {
        mc.addFrameScript(mc, [15, Terry_df_p_EX.frame15, 29, Terry_df_p_EX.frame29]);
        return;
    };
    Terry_df_p_EX.frame15 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Terry_a6914.getInstance(_parentRole).name = "terry_shanzi1";
    };
    Terry_df_p_EX.frame29 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Terry_df_p_EX;
}());
__reflect(Terry_df_p_EX.prototype, "Terry_df_p_EX");
//# sourceMappingURL=Terry_df_p_EX.js.map