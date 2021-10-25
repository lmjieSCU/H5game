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
var Ryu_role = (function (_super) {
    __extends(Ryu_role, _super);
    function Ryu_role() {
        var _this = _super.call(this) || this;
        _this._roleName = "roleRyu";
        _this.scale = 1;
        _this.Vwalk = 11;
        _this.Vdash = 28;
        _this.Vjump_x = 13;
        _this.Vjump_y = 39;
        _this.Vjump_far = 20;
        _this.opp_width2 = 60;
        _this.superList = { sk10: 1, sk14: 1, sk13: 1 };
        _this.burstList = { sk_s_sys: 1, sk_s_swms: 1 };
        _this.superMaxList = {};
        _this.skillSuperMapping = { sk10: "sk12", sk14: "sk14_s", sk13: "sk13_s" };
        _this.skillObj.s1 = "sk10";
        _this.skillObj.s2 = "sk14";
        _this.skillObj.s3 = "sk13";
        _this.skillObj.busrt_a = "sk_s_sys";
        _this.skillObj.busrt_d = "sk_s_swms";
        _this.skillObj.toAir = "sk3";
        _this.skillObj.heavyHit = "heavyHit";
        _this.skillObj.flyingObj = "sk1";
        _this.comboClass = new Ryu_Combo(_this);
        _this.preCheck();
        _this.colorObj.fire_red1 = { ra: "100", rb: "255", ga: "80", gb: "110", ba: "-100", bb: "0", aa: "100", ab: "0" };
        _this.colorObj.fire_red2 = { ra: "80", rb: "255", ga: "-80", gb: "255", ba: "-100", bb: "0", aa: "100", ab: "0" };
        _this.colorObj.fire_blue1 = { ra: "-65", rb: "200", ga: "-65", gb: "200", ba: "100", bb: "255", aa: "100", ab: "0" };
        _this.colorObj.fire_blue2 = { ra: "-65", rb: "200", ga: "-65", gb: "200", ba: "-100", bb: "255", aa: "100", ab: "0" };
        _this.colorObj.ice1 = { ra: "-100", rb: "255", ga: "-50", gb: "255", ba: "100", bb: "255", aa: "100", ab: "0" };
        _this.winPoseArray = ["end2"];
        _this.CommonSeries = ["punch", "kick1", "kick", "sk2"];
        return _this;
    }
    Ryu_role.prototype.preCheck = function () {
        this.input_pre.kick1 = 9;
    };
    Ryu_role.prototype.kick1 = function () {
        this.mc.gotoAndStop("kick1");
        this.status_1 = "kick1";
        this.status_3 = "attack";
    };
    Ryu_role.prototype.kick2 = function () {
        if (this.status_2 != "land") {
            return false;
        }
        this.mc.gotoAndStop("kick2");
        this.status_1 = "kick2";
        this.status_3 = "attack";
    };
    Ryu_role.prototype.sk_d1 = function () {
        this.status_1 = "sk_d1";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    };
    Ryu_role.prototype.punch2 = function () {
        if (this.status_2 != "land") {
            return false;
        }
        this.status_1 = "punch2";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    };
    Ryu_role.prototype.heavyHit = function () {
        if (this.status_2 != "land") {
            return false;
        }
        this.status_1 = "heavyHit";
        this.status_3 = "attack";
        this.mc.gotoAndStop(this.status_1);
    };
    Ryu_role.prototype.sk_bodong_air = function () {
        if (this.status_2 == "air") {
            this.sk_bodong_air2();
            return undefined;
        }
        if (this.status_2 != "land") {
            return false;
        }
        this.status_1 = "sk_bodong_air";
        this.status_3 = "attack";
        this.mc.gotoAndStop(this.status_1);
    };
    Ryu_role.prototype.sk_bodong_air2 = function () {
        this.status_1 = "sk_bodong_air2";
        this.status_3 = "attack";
        this.mc.gotoAndStop(this.status_1);
        this.DEBUG_LOG("sk_bodong_air2:" + this.bodyMC.getCurrFrame());
    };
    Ryu_role.prototype.sk2 = function () {
        if (this.status_2 == "air") {
            this.sk4();
            return undefined;
        }
        if (this.status_2 != "land") {
            return false;
        }
        this.status_1 = "sk2";
        this.status_3 = "attack";
        this.mc.gotoAndStop(this.status_1);
    };
    Ryu_role.prototype.sk_s3 = function () {
        if (this.status_2 == "air") {
            if (this.status_1 == "jump_f") {
                this.status_1 = "sk_d1";
                this.mc.gotoAndStop(this.status_1);
            }
            else {
                return false;
            }
        }
        if (this.status_2 != "land") {
            return false;
        }
        this.status_1 = "sk_s3";
        this.status_3 = "attack";
        this.mc.gotoAndStop(this.status_1);
    };
    Ryu_role.prototype.sk4 = function () {
        this.status_1 = "sk4";
        this.status_3 = "attack";
        this.mc.gotoAndStop(this.status_1);
    };
    Ryu_role.prototype.sk12 = function () {
        if (this.status_2 != "land") {
            return false;
        }
        this.status_1 = "sk12";
        this.status_3 = "attack";
        this.mc.gotoAndStop(this.status_1);
    };
    Ryu_role.prototype.sk13 = function () {
        if (this.status_2 != "land") {
            return false;
        }
        this.status_1 = "sk13";
        this.status_3 = "attack";
        this.mc.gotoAndStop(this.status_1);
    };
    Ryu_role.prototype.to_kick = function () {
        var _loc2_ = undefined;
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            this.jumpSkill("kick");
            return undefined;
        }
        if (this.keyCtrl.key.isDown(this._downButton)) {
            _loc2_ = "squatKick";
        }
        else {
            _loc2_ = "kick";
        }
        this.toSkill(_loc2_);
    };
    Ryu_role.prototype.to_kick_l = function () {
        var _loc2_ = undefined;
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            // if (this.keyCtrl.key.isDown(this._downButton) && this.status_1 == "jump_f") {
            //     this.toSkill("sk_d1");
            //     return undefined;
            // }
            _loc2_ = "kick_l";
            this.jumpSkill(_loc2_);
            return undefined;
        }
        if (this.status_1 == "dash_f") {
            _loc2_ = "kick1";
        }
        else if (this.keyCtrl.key.isDown(this._downButton)) {
            _loc2_ = "squatKick_l";
        }
        else if (this.mode_key == "easy") {
            _loc2_ = "punch_s";
        }
        else {
            _loc2_ = "kick_l";
        }
        this.toSkill(_loc2_);
    };
    Ryu_role.prototype.to_punch = function () {
        var _loc2_ = undefined;
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            if (this.keyCtrl.key.isDown(this._downButton)) {
                this.jumpSkill("punch_s");
            }
            else {
                this.jumpSkill("punch");
            }
            return undefined;
        }
        if (this.keyCtrl.key.isDown(this._downButton)) {
            _loc2_ = "squatPunch";
        }
        else if (this.status_1 == "dash_f") {
            _loc2_ = "punch";
        }
        else if (this.keyCtrl.key.isDown(this._frontButton) && this.dir == 1 || this.keyCtrl.key.isDown(this._backButton) && this.dir == -1) {
            if (this.pitch()) {
                return undefined;
            }
            _loc2_ = "punch";
        }
        else {
            _loc2_ = "punch";
        }
        this.toSkill(_loc2_);
    };
    Ryu_role.prototype.to_punch_l = function () {
        var _loc2_ = undefined;
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            this.jumpSkill("punch_l");
            return undefined;
        }
        if (this.keyCtrl.key.isDown(this._downButton)) {
            _loc2_ = "squatPunch_l";
        }
        else if (this.mode_key == "easy") {
            _loc2_ = "heavyHit";
        }
        else {
            _loc2_ = "punch_l";
        }
        this.toSkill(_loc2_);
    };
    return Ryu_role;
}(Role));
__reflect(Ryu_role.prototype, "Ryu_role");
//# sourceMappingURL=Ryu_role.js.map