var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Type2_Kula_role = (function (_super) {
    __extends(Type2_Kula_role, _super);
    function Type2_Kula_role() {
        var _this = _super.call(this) || this;
        _this.roleMode = 2;
        _this.superList = { sk_s_handong: 1, sk_s_xiangdong: 1, sk_s_luobing: 1 };
        _this.burstList = { sk_s_luanren: 1, sk_s_storm: 1 };
        _this.superMaxList = { sk_s_handong_s: 1, sk_s_xiangdong_s: 1, sk_s_luobing_s: 1 };
        _this.skillSuperMapping = { sk_s_handong: "sk_s_handong_s", sk_s_xiangdong: "sk_s_xiangdong_s", sk_s_luobing: "sk_s_luobing_s" };
        _this.skillObj.s1 = "sk_s_handong";
        _this.skillObj.s2 = "sk_s_xiangdong";
        _this.skillObj.s3 = "sk_s_luobing";
        _this.skillObj.busrt_a = "sk_s_luanren";
        _this.skillObj.busrt_d = "sk_s_storm";
        return _this;
    } // End of the function
    return Type2_Kula_role;
}(Kula_role)); // End of Class
__reflect(Type2_Kula_role.prototype, "Type2_Kula_role");
//# sourceMappingURL=Type2_Kula_role.js.map