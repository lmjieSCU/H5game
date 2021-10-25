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
var Chunli_role = (function (_super) {
    __extends(Chunli_role, _super);
    function Chunli_role() {
        var _this = _super.call(this) || this;
        _this._roleName = "roleChunli";
        _this.scale = 1;
        _this.Vwalk = 11;
        _this.Vdash = 28;
        _this.Vjump_x = 13;
        _this.Vjump_y = 43;
        _this.Vjump_far = 20;
        _this.opp_width2 = 60;
        _this.superList = { sk_s_bo: 1, sk_s_fengyi: 1 };
        _this.burstList = { sk_s_bo_ss: 1, sk_s_qixing: 1 };
        _this.superMaxList = { sk_s_bo_s: 1, sk_s_fengyi_s: 1 };
        _this.skillSuperMapping = { sk_s_bo: "sk_s_bo_s", sk_s_fengyi: "sk_s_fengyi_s" };
        _this.winPoseArray = ["end", "end2"];
        _this.skillObj.s1 = "sk_s_bo";
        _this.skillObj.s2 = "sk_s_fengyi";
        _this.skillObj.busrt_a = "sk_s_qixing";
        _this.skillObj.busrt_d = "sk_s_bo_ss";
        _this.skillObj.toAir = "sk_shengtian";
        _this.comboClass = new Chunli_Combo(_this);
        _this.preCheck();
        _this.colorObj.fire_red1 = { ra: "100", rb: "255", ga: "-70", gb: "255", ba: "100", bb: "-255", aa: "100", ab: "0" };
        _this.colorObj.fire_red2 = { ra: "100", rb: "255", ga: "-100", gb: "255", ba: "100", bb: "-255", aa: "100", ab: "0" };
        _this.colorObj.fire_blue1 = { ra: "-100", rb: "255", ga: "-100", gb: "255", ba: "100", bb: "255", aa: "100", ab: "0" };
        _this.colorObj.fire_blue2 = { ra: "-100", rb: "255", ga: "-100", gb: "190", ba: "100", bb: "255", aa: "100", ab: "0" };
        _this.colorObj.ice1 = { ra: "-100", rb: "255", ga: "-50", gb: "255", ba: "100", bb: "255", aa: "100", ab: "0" };
        _this.CommonSeries = ["punch", "punch_l", "kick_l", "sk_xuanyuan"];
        return _this;
    } // End of the function
    Chunli_role.prototype.preCheck = function () {
        this.input_pre.roll_f = 10;
        this.input_pre.roll_b = 10;
        this.input_pre.land = 0;
        this.input_pre.land2 = 0;
        this.input_pre.sk_huixuan_s2 = 10;
        this.input_pre.sk_huixuan_s3 = 10;
        this.input_pre.sk_dfk = 19;
    }; // End of the function
    Chunli_role.prototype.sk_huixuan = function () {
        if (this.status_2 != "land") {
            return (false);
        } // end if
        this.status_1 = "sk_huixuan";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    }; // End of the function
    Chunli_role.prototype.sk_huixuan2 = function () {
        if (this.status_2 != "land") {
            return (false);
        } // end if
        this.status_1 = "sk_huixuan2";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    }; // End of the function
    Chunli_role.prototype.sk_bailietui = function () {
        if (this.status_2 == "air") {
            this.sk_bailietui_air();
            return;
        } // end if
        if (this.status_2 != "land") {
            return (false);
        } // end if
        this.status_1 = "sk_bailietui";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    }; // End of the function
    Chunli_role.prototype.sk_bailietui_air = function () {
        this.status_1 = "sk_bailietui_air";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    }; // End of the function
    Chunli_role.prototype.jump = function () {
        if (this.status_1 == "dash_f") {
            if (this.status_2 != "land" || this.holdFreeze || this.status_3 != "normal") {
                return (false);
            } // end if
            this.status_2 = "air";
            this.Vx = this.Vjump_far;
            this.Vy = this.Vjump_y;
            this.mc.gotoAndStop("jump_f");
            this.status_1 = "jump_f";
        }
        else if (this.keyCtrl.key.isDown(this._frontButton)) {
            if (this.dir == 1) {
                this.jump_f();
            }
            else {
                this.jump_b();
            } // end else if
        }
        else if (this.keyCtrl.key.isDown(this._backButton)) {
            if (this.dir == -1) {
                this.jump_f();
            }
            else {
                this.jump_b();
            } // end else if
        }
        else {
            this.jump_u();
        } // end else if
    }; // End of the function
    Chunli_role.prototype.jump_f = function () {
        if (this.status_2 == "air" && this.status_3 == "normal" && this.status_1 != "jump_f") {
            //var _loc2 = _level0.char_mc._x + _x;
            var _loc2 = this.parent.localToGlobal().x;
            if (_loc2 < 80) {
                this.Vx = 17;
                this.Vy = 42;
            }
            else if (_loc2 > 580) {
                if (this.status_1 == "jump") {
                    this.Vx = -17;
                }
                else {
                    this.Vx = 17;
                } // end else if
                this.Vy = 42;
            }
            else {
                return (false);
            } // end else if
        }
        else {
            if (this.status_2 != "land" || this.holdFreeze || this.status_3 != "normal") {
                return (false);
            } // end if
            this.Vx = this.Vjump_x;
            this.Vy = this.Vjump_y;
        } // end else if
        this.status_2 = "air";
        if (this.inRecord) {
            this.skill_record("jump_f");
        } // end if
        this.mc.gotoAndStop("jump_f");
        this.status_1 = "jump_f";
    }; // End of the function
    Chunli_role.prototype.jump_air = function () {
        if (this.status_2 == "air" && this.onEdge && this.status_3 == "normal") {
            // var _loc2 = _level0.char_mc._x + _x;
            var _loc2 = this.parent.localToGlobal().x;
            if (_loc2 < 80 || _loc2 > 580) {
            }
            else {
                return (false);
            } // end else if
        }
        else if (this.status_2 != "land" || this.holdFreeze || this.status_3 != "normal") {
            return (false);
        } // end else if
        this.status_2 = "air";
        if (this.inRecord) {
            this.skill_record("jump_f");
        } // end if
        this.Vx = this.Vjump_x;
        this.Vy = this.Vjump_y;
        this.mc.gotoAndStop("jump_f");
        this.status_1 = "jump_f";
    }; // End of the function
    Chunli_role.prototype.to_kick = function () {
        var _loc2;
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            if (this.keyCtrl.key.isDown(this._downButton)) {
                this.jumpSkill("kick_d");
            }
            else {
                this.jumpSkill("kick");
            } // end else if
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
    Chunli_role.prototype.to_kick_l = function () {
        var _loc2;
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            _loc2 = "kick_l";
            this.jumpSkill(_loc2);
            return;
        } // end if
        if (this.keyCtrl.key.isDown(this._downButton)) {
            if (this.keyCtrl.key.isDown(this._frontButton) && this.dir == 1) {
                _loc2 = "kick_s1";
            }
            else if (this.keyCtrl.key.isDown(this._backButton) && this.dir == -1) {
                _loc2 = "kick_s1";
            }
            else {
                _loc2 = "squatKick_l";
            } // end else if
        }
        else if (this.keyCtrl.key.isDown(this._frontButton) && this.dir == 1) {
            _loc2 = "kick_s1";
        }
        else if (this.keyCtrl.key.isDown(this._backButton) && this.dir == -1) {
            _loc2 = "kick_s1";
        }
        else if (this.mode_key == "easy") {
            _loc2 = "sk_bo2";
        }
        else {
            _loc2 = "kick_l";
        } // end else if
        this.toSkill(_loc2);
    }; // End of the function
    Chunli_role.prototype.to_punch = function () {
        var _loc2;
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            this.jumpSkill("punch");
            return;
        } // end if
        if (this.keyCtrl.key.isDown(this._downButton)) {
            _loc2 = "squatPunch";
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
    Chunli_role.prototype.to_punch_l = function () {
        var _loc2;
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            this.jumpSkill("punch_l");
            return;
        }
        else if (this.keyCtrl.key.isDown(this._downButton)) {
            _loc2 = "squatPunch_l";
        }
        else if (this.mode_key == "easy") {
            _loc2 = "heavyHit";
        }
        else {
            _loc2 = "punch_l";
        } // end else if
        this.toSkill(_loc2);
    }; // End of the function
    return Chunli_role;
}(Role)); // End of Class
__reflect(Chunli_role.prototype, "Chunli_role");
//# sourceMappingURL=Chunli_role.js.map