var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_sk_s_shuiniao_s = (function () {
    function Mai_sk_s_shuiniao_s() {
    }
    Mai_sk_s_shuiniao_s.addSprite7107 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Mai_sk_s_shuiniao_s.frame3, 7, Mai_sk_s_shuiniao_s.frame7, 11, Mai_sk_s_shuiniao_s.frame11, 15, Mai_sk_s_shuiniao_s.frame15, 20, Mai_sk_s_shuiniao_s.frame20, 24, Mai_sk_s_shuiniao_s.frame24, 28, Mai_sk_s_shuiniao_s.frame28, 41, Mai_sk_s_shuiniao_s.frame41]);
        return;
    };
    Mai_sk_s_shuiniao_s.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a7078 = Mai_a7078.getInstance(_parentRole);
        a7078.s_type = "s1_s";
        a7078.f_time = 20;
        a7078.bgType = "1";
        a7078.roleName = "Mai";
        a7078.faceName = "";
    };
    Mai_sk_s_shuiniao_s.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a6914.getInstance(_parentRole).name = "mai_shanzi2_s";
    };
    Mai_sk_s_shuiniao_s.frame11 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a6914.getInstance(_parentRole).name = "mai_shanzi2_s";
    };
    Mai_sk_s_shuiniao_s.frame15 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a6914.getInstance(_parentRole).name = "mai_shanzi2_s";
    };
    Mai_sk_s_shuiniao_s.frame20 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a6914.getInstance(_parentRole).name = "mai_shanzi2_s";
    };
    Mai_sk_s_shuiniao_s.frame24 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a6914.getInstance(_parentRole).name = "mai_shanzi2_s";
    };
    Mai_sk_s_shuiniao_s.frame28 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a6914.getInstance(_parentRole).name = "mai_shanzi3_s";
    };
    Mai_sk_s_shuiniao_s.frame41 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Mai_sk_s_shuiniao_s;
}());
__reflect(Mai_sk_s_shuiniao_s.prototype, "Mai_sk_s_shuiniao_s");
//# sourceMappingURL=Mai_sk_s_shuiniao_s.js.map