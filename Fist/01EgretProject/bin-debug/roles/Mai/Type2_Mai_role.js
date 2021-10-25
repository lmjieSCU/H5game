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
var Type2_Mai_role = (function (_super) {
    __extends(Type2_Mai_role, _super);
    function Type2_Mai_role() {
        var _this = _super.call(this) || this;
        _this.roleMode = 2;
        _this.superList = { sk_s_fenghuang: 1, sk_s_hualan: 1 };
        _this.burstList = { sk_s_heti2: 1, sk_s_fenshen: 1 };
        _this.superMaxList = { sk_s_fenghuang_s: 1, sk_s_hualan_s: 1 };
        _this.skillSuperMapping = { sk_s_hualan: "sk_s_hualan_s", sk_s_fenghuang: "sk_s_fenghuang_s" };
        _this.skillObj.s1 = "sk_s_fenghuang";
        _this.skillObj.s2 = "sk_s_hualan";
        _this.skillObj.busrt_a = "sk_s_heti2";
        _this.skillObj.busrt_d = "sk_s_fenshen";
        _this.skillObj.toAir = "sk_bailu2";
        return _this;
    } // End of the function
    Type2_Mai_role.prototype.sk_luan1 = function () {
        if (this.status_2 == "air") {
            this.sk_feishu();
            return;
        } // end if
        if (this.status_2 != "land") {
            return (false);
        } // end if
        this.status_1 = "sk_luan1";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    }; // End of the function
    return Type2_Mai_role;
}(Mai_role)); // End of Class
__reflect(Type2_Mai_role.prototype, "Type2_Mai_role");
//# sourceMappingURL=Type2_Mai_role.js.map