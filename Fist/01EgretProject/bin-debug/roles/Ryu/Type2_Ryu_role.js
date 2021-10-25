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
var Type2_Ryu_role = (function (_super) {
    __extends(Type2_Ryu_role, _super);
    function Type2_Ryu_role() {
        var _this = _super.call(this) || this;
        _this.superList = { sk10: 1, sk_bd_air: 1, sk_s3: 1 };
        _this.burstList = { sk_s_q1: 1, sk_s_q2: 1 };
        _this.skillSuperMapping = { sk10: "sk12", sk_bd_air: "sk_bd_air_s", sk_s3: "sk_s3_s" };
        _this.skillObj.s1 = "sk10";
        _this.skillObj.s2 = "sk_bd_air";
        _this.skillObj.s3 = "sk_s3";
        _this.skillObj.busrt_a = "sk_s_q1";
        _this.skillObj.busrt_d = "sk_s_q2";
        _this.skillObj.toAir = "sk3";
        _this.skillObj.heavyHit = "heavyHit";
        _this.skillObj.flyingObj = "sk1";
        _this.winPoseArray = ["end2"];
        return _this;
    } // End of the function
    Type2_Ryu_role.prototype.preCheck = function () {
        this.input_pre.kick1 = 9;
    }; // End of the function
    Type2_Ryu_role.prototype.sk1 = function () {
        if (this.status_2 == "air") {
            this.sk_bodong_air2other();
            return;
        }
        else if (this.status_2 != "land") {
            return (false);
        } // end else if
        this.status_1 = "sk1";
        this.status_3 = "attack";
        this.mc.gotoAndStop(this.status_1);
    }; // End of the function
    Type2_Ryu_role.prototype.sk1_l = function () {
        if (this.status_2 == "air") {
            this.sk_bodong_air2other();
            return;
        }
        else if (this.status_2 != "land") {
            return (false);
        } // end else if
        this.status_1 = "sk1_l";
        this.status_3 = "attack";
        this.mc.gotoAndStop(this.status_1);
    }; // End of the function
    Type2_Ryu_role.prototype.sk_bodong_airother = function () {
        if (this.status_2 == "air") {
            this.sk_bodong_air2other();
            return;
        }
        else if (this.status_2 != "land") {
            return (false);
        } // end else if
        this.status_1 = "sk_bodong_airother";
        this.status_3 = "attack";
        this.mc.gotoAndStop(this.status_1);
    }; // End of the function
    Type2_Ryu_role.prototype.sk_bodong_air2other = function () {
        this.status_1 = "sk_bodong_air2other";
        this.status_3 = "attack";
        this.mc.gotoAndStop(this.status_1);
    }; // End of the function
    Type2_Ryu_role.prototype.sk_xf2 = function () {
        if (this.status_1 == "jump_b") {
            this.sk4_2();
            return;
        }
        else if (this.status_2 == "air") {
            this.sk4_1();
            return;
        }
        else if (this.status_2 != "land") {
            return (false);
        } // end else if
        this.status_1 = "sk_xf2";
        this.status_3 = "attack";
        this.mc.gotoAndStop(this.status_1);
    }; // End of the function
    Type2_Ryu_role.prototype.sk4_1 = function () {
        this.status_1 = "sk4_1";
        this.status_3 = "attack";
        this.mc.gotoAndStop(this.status_1);
    }; // End of the function
    Type2_Ryu_role.prototype.sk4_2 = function () {
        this.status_1 = "sk4_2";
        this.status_3 = "attack";
        this.mc.gotoAndStop(this.status_1);
    }; // End of the function
    Type2_Ryu_role.prototype.sk_BGX_s2 = function () {
        if (this.played) {
            return (false);
        } // end if
        this.played = true;
        this.status_3 = "attack";
        //this.mc.gotoAndPlay("s2");
        this.mc.gotoAndStop("s2");
    }; // End of the function
    Type2_Ryu_role.prototype.sk_BGX_s3 = function () {
        if (this.played) {
            return (false);
        } // end if
        this.played = true;
        this.status_3 = "attack";
        //this.mc.gotoAndPlay("s3");
        this.mc.gotoAndStop("s3");
    }; // End of the function
    return Type2_Ryu_role;
}(Ryu_role)); // End of Class
__reflect(Type2_Ryu_role.prototype, "Type2_Ryu_role");
//# sourceMappingURL=Type2_Ryu_role.js.map