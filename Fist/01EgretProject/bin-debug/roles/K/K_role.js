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
var K_role = (function (_super) {
    __extends(K_role, _super);
    function K_role() {
        var _this = _super.call(this) || this;
        _this._roleName = "roleK";
        _this.scale = 1;
        _this.Vwalk = 11;
        _this.Vdash = 28;
        _this.Vjump_x = 13;
        _this.Vjump_y = 39;
        _this.Vjump_far = 20;
        _this.opp_width2 = 60;
        _this.superList = { sk_s1: 1, sk_s2: 1, sk_s3: 1 };
        _this.burstList = { sk_s4: 1, sk_s5: 1 };
        _this.superMaxList = { sk_s1_s: 1, sk_s3_s: 1 };
        _this.skillSuperMapping = { sk_s1: "sk_s1_s", sk_s3: "sk_s3_s" };
        _this.record_skill_totalFrame = ["sk_s4"];
        _this.skillObj.s1 = "sk_s1";
        _this.skillObj.s2 = "sk_s3";
        _this.skillObj.s3 = "sk_s2";
        _this.skillObj.busrt_a = "sk_s4";
        _this.skillObj.busrt_d = "sk_s5";
        _this.skillObj.toAir = "sk_fdfp";
        _this.comboClass = new K_Combo(_this);
        _this.preCheck();
        _this.colorObj.fire_red1 = { ra: "100", rb: "255", ga: "100", gb: "80", ba: "100", bb: "0", aa: "100", ab: "0" };
        _this.colorObj.fire_red2 = { ra: "-100", rb: "255", ga: "-100", gb: "180", ba: "-100", bb: "0", aa: "100", ab: "0" };
        _this.colorObj.fire_blue1 = { ra: "100", rb: "0", ga: "100", gb: "0", ba: "100", bb: "255", aa: "100", ab: "0" };
        _this.colorObj.fire_blue2 = { ra: "-100", rb: "-100", ga: "-100", gb: "180", ba: "-100", bb: "255", aa: "100", ab: "0" };
        _this.colorObj.ice1 = { ra: "-100", rb: "255", ga: "-50", gb: "255", ba: "100", bb: "255", aa: "100", ab: "0" };
        _this.CommonSeries = ["punch", "kick_s2", "sk_dfp", "sk_dfp_s3"];
        return _this;
    }
    K_role.prototype.preCheck = function () {
        this.input_pre.roll_f = 10;
        this.input_pre.roll_b = 10;
        this.input_pre.land = 0;
        this.input_pre.land2 = 0;
        this.input_pre.sk_dfp_s2 = 10;
        this.input_pre.sk_dfp_s3 = 10;
        this.input_pre.sk_dfk = 19;
    };
    K_role.prototype.sk_dfp_s2 = function () {
        if (this.status_2 != "land") {
            return false;
        }
        this.status_3 = "attack";
        this.status_1 = "sk_dfp_s2";
        this.mc.gotoAndStop(this.status_1);
    };
    K_role.prototype.sk_dfp_s3 = function () {
        if (this.status_2 != "land") {
            return false;
        }
        this.status_3 = "attack";
        this.status_1 = "sk_dfp_s3";
        this.mc.gotoAndStop(this.status_1);
    };
    K_role.prototype.sk_fdfp_s2 = function () {
        if (this.played) {
            return false;
        }
        this.played = true;
        this.status_3 = "attack";
        this.mc.gotoAndStop("s2");
    };
    K_role.prototype.sk_fdfp2 = function () {
        if (this.status_2 != "land") {
            return false;
        }
        this.status_3 = "attack";
        this.status_1 = "sk_fdfp2";
        this.mc.gotoAndStop(this.status_1);
    };
    K_role.prototype.sk_dbk = function () {
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
        this.status_1 = "sk_dbk";
        this.mc.gotoAndStop(this.status_1);
    };
    K_role.prototype.sk_dbk2 = function () {
        this.status_3 = "attack";
        this.status_1 = "sk_dbk2";
        this.mc.gotoAndStop(this.status_1);
    };
    K_role.prototype.sk_dbk_2 = function () {
        if (this.status_1 == "kick_s2") {
            this.sk_dbk_2_air();
            return undefined;
        }
        if (this.status_2 == "air") {
            this.sk_dbk_2_air();
            return undefined;
        }
        if (this.status_2 != "land") {
            return false;
        }
        this.status_3 = "attack";
        this.status_1 = "sk_dbk_2";
        this.mc.gotoAndStop(this.status_1);
    };
    K_role.prototype.sk_dbk_2_air = function () {
        this.status_3 = "attack";
        this.status_1 = "sk_dbk_2_air";
        this.mc.gotoAndStop(this.status_1);
    };
    K_role.prototype.sk_dbp = function () {
        this.status_3 = "attack";
        this.status_1 = "sk_dbp";
        this.mc.gotoAndStop(this.status_1);
        return;
    };
    K_role.prototype.sk_s3 = function () {
        this.status_3 = "attack";
        this.status_1 = "sk_s3";
        this.mc.gotoAndStop(this.status_1);
    };
    K_role.prototype.sk_s4 = function () {
        if (this.status_2 != "land") {
            return false;
        }
        this.status_3 = "attack";
        this.status_1 = "sk_s4";
        this.mc.gotoAndStop(this.status_1);
    };
    K_role.prototype.sk_s5 = function () {
        if (this.status_2 != "land") {
            return false;
        }
        this.status_3 = "attack";
        this.status_1 = "sk_s5";
        this.mc.gotoAndStop(this.status_1);
    };
    //kick键K
    K_role.prototype.to_kick = function () {
        var action = "";
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            this.jumpSkill("kick");
            return;
        }
        if (this.keyCtrl.key.isDown(this._downButton)) {
            action = "squatKick";
        }
        else {
            action = "kick";
        }
        this.toSkill(action);
    };
    //kick_l键I
    K_role.prototype.to_kick_l = function () {
        var action = "";
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            action = "kick_l";
            this.jumpSkill(action);
            return;
        }
        if (this.keyCtrl.key.isDown(this._downButton)) {
            action = "squatKick_l";
        }
        else if (this.keyCtrl.key.isDown(this._frontButton) && this.dir == 1) {
            action = "kick_s2";
        }
        else if (this.keyCtrl.key.isDown(this._backButton) && this.dir == -1) {
            action = "kick_s2";
        }
        else if (this.mode_key == "easy") {
            action = "sk_dbk";
        }
        else {
            action = "kick_l";
        }
        this.toSkill(action);
    };
    K_role.prototype.to_punch = function () {
        var _loc2_ = undefined;
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            this.jumpSkill("punch");
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
    //punch_l键U
    K_role.prototype.to_punch_l = function () {
        var _loc2_ = undefined;
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            this.jumpSkill("punch_l");
            return undefined;
        }
        if (this.keyCtrl.key.isDown(this._downButton)) {
            _loc2_ = "squatPunch_l";
        }
        else if (this.keyCtrl.key.isDown(this._frontButton) && this.dir == 1) {
            _loc2_ = "punch_s1";
        }
        else if (this.keyCtrl.key.isDown(this._backButton) && this.dir == -1) {
            _loc2_ = "punch_s1";
        }
        else if (this.mode_key == "easy") {
            _loc2_ = "heavyHit";
        }
        else {
            _loc2_ = "punch_l";
        }
        this.toSkill(_loc2_);
    };
    return K_role;
}(Role));
__reflect(K_role.prototype, "K_role");
//# sourceMappingURL=K_role.js.map