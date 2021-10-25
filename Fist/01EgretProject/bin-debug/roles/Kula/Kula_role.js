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
var Kula_role = (function (_super) {
    __extends(Kula_role, _super);
    function Kula_role() {
        var _this = _super.call(this) || this;
        _this._roleName = "roleKula";
        _this.scale = 1;
        _this.Vwalk = 11;
        _this.Vdash = 28;
        _this.Vjump_x = 13;
        _this.Vjump_y = 39;
        _this.Vjump_far = 20;
        _this.opp_width2 = 60;
        _this.superList = { sk_s_bingren: 1, sk_s_luanwu: 1, sk_tibing: 1 };
        _this.burstList = { sk_s_xingchen: 1, sk_s_jiejie: 1 };
        _this.superMaxList = { sk_s_bingren_s: 1, sk_s_luanwu_s: 1, sk_tibing_s: 1 };
        _this.skillSuperMapping = { sk_s_bingren: "sk_s_bingren_s", sk_s_luanwu: "sk_s_luanwu_s", sk_tibing: "sk_tibing_s" };
        _this.winPoseArray = ["end", "end2"];
        _this.skillObj.s1 = "sk_s_bingren";
        _this.skillObj.s2 = "sk_s_luanwu";
        _this.skillObj.s3 = "sk_tibing";
        _this.skillObj.busrt_a = "sk_s_xingchen";
        _this.skillObj.busrt_d = "sk_s_jiejie";
        _this.skillObj.toAir = "sk_fdfp";
        _this.comboClass = new Kula_Combo(_this);
        _this.preCheck();
        _this.colorObj.fire_red1 = { ra: "100", rb: "255", ga: "100", gb: "110", ba: "100", bb: "0", aa: "100", ab: "0" };
        _this.colorObj.fire_red2 = { ra: "100", rb: "255", ga: "100", gb: "210", ba: "100", bb: "0", aa: "100", ab: "0" };
        _this.colorObj.fire_blue1 = { ra: "100", rb: "0", ga: "100", gb: "0", ba: "100", bb: "255", aa: "100", ab: "0" };
        _this.colorObj.fire_blue2 = { ra: "100", rb: "-100", ga: "100", gb: "-50", ba: "100", bb: "255", aa: "100", ab: "0" };
        _this.colorObj.ice1 = { ra: "-100", rb: "255", ga: "-50", gb: "255", ba: "100", bb: "255", aa: "100", ab: "0" };
        _this.CommonSeries = ["punch"];
        return _this;
    } // End of the function
    Kula_role.prototype.preCheck = function () {
        this.input_pre.roll_f = 10;
        this.input_pre.roll_b = 10;
        this.input_pre.land = 0;
        this.input_pre.land2 = 0;
        this.input_pre.sk_dfp_s2 = 10;
        this.input_pre.sk_dfp_s3 = 10;
        this.input_pre.sk_dfk = 19;
    }; // End of the function
    Kula_role.prototype.sk_dfp_s2 = function () {
    }; // End of the function
    Kula_role.prototype.sk_dfp_s3 = function () {
    }; // End of the function
    Kula_role.prototype.kick4 = function () {
        if (this.status_2 == "air") {
            this.sk_ZSSJ2();
            return;
        } // end if
        if (this.status_2 != "land") {
            return (false);
        } // end if
        this.status_1 = "kick_l";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    }; // End of the function
    Kula_role.prototype.kick5 = function () {
        if (this.status_2 == "air") {
            this.sk_ZSSJ();
            return;
        } // end if
        if (this.status_2 != "land") {
            return (false);
        } // end if
        this.status_1 = "kick";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    }; // End of the function
    Kula_role.prototype.sk_ZSSJ = function () {
        this.status_1 = "sk_ZSSJ";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    }; // End of the function
    Kula_role.prototype.sk_ZSSJ2 = function () {
        this.status_1 = "sk_ZSSJ2";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    }; // End of the function
    Kula_role.prototype.to_kick = function () {
        var _loc2;
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            this.jumpSkill("kick");
            return;
        } // end if
        if (this.keyCtrl.key.isDown(this._downButton)) {
            _loc2 = "squatKick";
        }
        else {
            _loc2 = "kick";
        } // end else if
        this.toSkill(_loc2);
    }; // End of the function
    Kula_role.prototype.to_kick_l = function () {
        var _loc2;
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            _loc2 = "kick_l";
            this.jumpSkill(_loc2);
            return;
        } // end if
        if (this.keyCtrl.key.isDown(this._downButton)) {
            if (this.keyCtrl.key.isDown(this._frontButton) && this.dir == 1) {
                _loc2 = "sk_huaxing";
            }
            else if (this.keyCtrl.key.isDown(this._backButton) && this.dir == -1) {
                _loc2 = "sk_huaxing";
            }
            else {
                _loc2 = "squatKick_l";
            } // end else if
        }
        else if (this.mode_key == "easy") {
            _loc2 = this.skillObj.s2;
        }
        else {
            _loc2 = "kick_l";
        } // end else if
        this.toSkill(_loc2);
    }; // End of the function
    Kula_role.prototype.to_punch = function () {
        var _loc2;
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            this.jumpSkill("punch");
            return;
        } // end if
        if (this.keyCtrl.key.isDown(this._downButton)) {
            if (this.keyCtrl.key.isDown(this._frontButton) && this.dir == 1) {
                _loc2 = "sk_bingdian";
            }
            else if (this.keyCtrl.key.isDown(this._backButton) && this.dir == -1) {
                _loc2 = "sk_bingdian";
            }
            else {
                _loc2 = "squatPunch";
            } // end else if
        }
        else if (this.status_1 == "dash_f") {
            _loc2 = "punch";
        }
        else if (this.keyCtrl.key.isDown(this._frontButton) && this.dir == 1 || this.keyCtrl.key.isDown(this._backButton) && this.dir == -1) {
            if (this.pitch()) {
                return;
            }
            else {
                _loc2 = "punch";
            } // end else if
        }
        else {
            _loc2 = "punch";
        } // end else if
        this.toSkill(_loc2);
    }; // End of the function
    Kula_role.prototype.to_punch_l = function () {
        var _loc2;
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            this.jumpSkill("punch_l");
            return;
        }
        else if (this.keyCtrl.key.isDown(this._downButton)) {
            _loc2 = "squatPunch_l";
        }
        else if (this.keyCtrl.key.isDown(this._frontButton) && this.dir == 1) {
            _loc2 = "punch_s1";
        }
        else if (this.keyCtrl.key.isDown(this._backButton) && this.dir == -1) {
            _loc2 = "punch_s1";
        }
        else if (this.mode_key == "easy") {
            _loc2 = this.skillObj.s1;
        }
        else {
            _loc2 = "punch_l";
        } // end else if
        this.toSkill(_loc2);
    }; // End of the function
    return Kula_role;
}(Role)); // End of Class
__reflect(Kula_role.prototype, "Kula_role");
//# sourceMappingURL=Kula_role.js.map