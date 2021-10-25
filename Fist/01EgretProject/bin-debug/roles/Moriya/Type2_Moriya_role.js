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
var Type2_Moriya_role = (function (_super) {
    __extends(Type2_Moriya_role, _super);
    function Type2_Moriya_role() {
        var _this = _super.call(this) || this;
        _this.superList = { sk_feng: 1, sk_xue: 1 };
        _this.burstList = { sk_s_q1: 1, sk_s_q2: 1 };
        _this.superMaxList = { sk_feng_s: 1, sk_xue_s: 1 };
        _this.skillSuperMapping = { sk_feng: "sk_feng_s", sk_xue: "sk_xue_s" };
        _this.winPoseArray = ["end2"];
        _this.skillObj.s1 = "sk_feng";
        _this.skillObj.s2 = "sk_xue";
        _this.skillObj.busrt_a = "sk_s_q1";
        _this.skillObj.busrt_d = "sk_s_q2";
        _this.skillObj.toAir = "sk_xinyue2";
        return _this;
    } // End of the function
    return Type2_Moriya_role;
}(Moriya_role)); // End of Class
__reflect(Type2_Moriya_role.prototype, "Type2_Moriya_role");
//# sourceMappingURL=Type2_Moriya_role.js.map