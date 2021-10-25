var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Mai_sk_s_shuiniao = (function () {
    function Mai_sk_s_shuiniao() {
    }
    Mai_sk_s_shuiniao.addSprite7106 = function (mc, own_role) {
        mc.addFrameScript(mc, [3, Mai_sk_s_shuiniao.frame3, 7, Mai_sk_s_shuiniao.frame7, 11, Mai_sk_s_shuiniao.frame11, 19, Mai_sk_s_shuiniao.frame19, 24, Mai_sk_s_shuiniao.frame24, 41, Mai_sk_s_shuiniao.frame41]);
        return;
    };
    Mai_sk_s_shuiniao.frame3 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        var a7078 = Mai_a7078.getInstance(_parentRole);
        a7078.s_type = "s1";
        a7078.f_time = 20;
        a7078.bgType = "1";
        a7078.roleName = "Mai";
        a7078.faceName = "";
    };
    Mai_sk_s_shuiniao.frame7 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a6914.getInstance(_parentRole).name = "mai_shanzi2";
    };
    Mai_sk_s_shuiniao.frame11 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a6914.getInstance(_parentRole).name = "mai_shanzi2";
    };
    Mai_sk_s_shuiniao.frame19 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a6914.getInstance(_parentRole).name = "mai_shanzi2";
    };
    Mai_sk_s_shuiniao.frame24 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        Mai_a6914.getInstance(_parentRole).name = "mai_shanzi3";
    };
    Mai_sk_s_shuiniao.frame41 = function (mc) {
        var _parentRole = EventUtil.getRole_Parent(mc);
        if (_parentRole == null) {
            return;
        }
        _parentRole.toStatus_switch("stand");
    };
    return Mai_sk_s_shuiniao;
}());
__reflect(Mai_sk_s_shuiniao.prototype, "Mai_sk_s_shuiniao");
//# sourceMappingURL=Mai_sk_s_shuiniao.js.map