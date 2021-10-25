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
var Type2_K_role = (function (_super) {
    __extends(Type2_K_role, _super);
    function Type2_K_role() {
        var _this = _super.call(this) || this;
        _this.roleMode = 2;
        _this.superList = { sk_s1: 1, sk_menghuti: 1 };
        _this.burstList = { sk_liandong: 1, sk_xiangdong: 1 };
        _this.superMaxList = { sk_s1_s: 1, sk_menghuti_s: 1 };
        _this.skillSuperMapping = { sk_s1: "sk_s1_s", sk_menghuti: "sk_menghuti_s" };
        _this.skillObj.s1 = "sk_s1";
        _this.skillObj.s2 = "sk_menghuti";
        _this.skillObj.busrt_a = "sk_liandong";
        _this.skillObj.busrt_d = "sk_xiangdong";
        _this.skillObj.toAir = "sk_fdfp";
        _this.comboClass.combo1.sk_dfp = { kick: "sk_dfp_s3", kick_l: "sk_sanduan_2", kick_s2: "sk_sanduan_2" };
        _this.comboClass.combo1.sk_sanduan_2 = { kick_l: "sk_sanduan_3", kick: "sk_sanduan_3", kick_s2: "sk_sanduan_3" };
        return _this;
        //this.CommonSeries=["punch","kick_s2","sk_dfp","sk_dbk_2"];
    }
    Type2_K_role.prototype.sk_dbk = function () {
        if (this.status_1 == "kick_s2") {
            this.sk_dbk2();
            return undefined;
        }
        if (this.status_2 == "air") {
            this.sk_dbk2();
            return undefined;
        }
        if (this.status_2 != "land") {
            return false;
        }
        this.status_3 = "attack";
        this.status_1 = "sk_dbk_2";
        this.mc.gotoAndStop(this.status_1);
    };
    Type2_K_role.prototype.sk_s1 = function () {
        if (this.status_2 != "land") {
            return false;
        }
        this.status_3 = "attack";
        this.status_1 = "sk_s1_2";
        this.mc.gotoAndStop(this.status_1);
    };
    Type2_K_role.prototype.sk_s1_s = function () {
        if (this.status_2 != "land") {
            return false;
        }
        this.status_3 = "attack";
        this.status_1 = "sk_s1_2_s";
        this.mc.gotoAndStop(this.status_1);
    };
    Type2_K_role.prototype.sk_sanduan_2 = function () {
        if (this.status_2 != "land") {
            return false;
        }
        this.status_3 = "attack";
        this.status_1 = "sk_sanduan_2";
        this.mc.gotoAndStop(this.status_1);
    };
    Type2_K_role.prototype.sk_sanduan_3 = function () {
        if (this.played) {
            return false;
        }
        this.played = true;
        this.status_3 = "attack";
        this.status_1 = "sk_sanduan_3";
        this.mc.gotoAndStop(this.status_1);
    };
    return Type2_K_role;
}(K_role));
__reflect(Type2_K_role.prototype, "Type2_K_role");
//# sourceMappingURL=Type2_K_role.js.map