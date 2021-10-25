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
var Type2_Kula_Player = (function (_super) {
    __extends(Type2_Kula_Player, _super);
    function Type2_Kula_Player() {
        var _this = _super.call(this) || this;
        _this.toSkill_temp = _this.toSkill;
        _this.toAction_temp = _this.toAction;
        _this.toStatus_temp = _this.toStatus;
        _this.toSkill = _this.noAct;
        _this.toAction = _this.noAct;
        var hero = new zmovie.ZMovieClip(["roleKula0_json", "roleKula1_json"], RES.getRes("roleKula_json"), "root");
        _this.addChild(hero);
        // this.hero = hero;
        // this.Mask();
        _this.mc = hero.$children[0]; //name:role_K
        if (Math.random() > 0.5) {
            _this.mc.gotoAndStop("begin");
        }
        else {
            _this.mc.gotoAndStop("begin2");
        }
        _this.bodyMC = _this.mc.$children[0]; //二级骨骼,已经进入到每一个动作中 name:punch/kick/...
        return _this;
    }
    Type2_Kula_Player.prototype.init = function (keybuttons, _mode_key, controltype) {
        if (controltype === void 0) { controltype = 'KeyControl'; }
        this.keyButtons = keybuttons;
        this.mode_key = _mode_key;
        this.setKey();
        this.skill_array = new Array();
        this.skill_mapping = new Array();
        if (this.mode_key == "easy") {
            this.skill_code_easy();
        }
        else {
            this.skill_code();
        }
        if (controltype == 'KeyControl_btn') {
            this.keyCtrl = new KeyControl_btn();
        }
        else {
            this.keyCtrl = new KeyControl();
        }
        this.keyCtrl.init(this.keyButtons, this.skill_array, this.skill_mapping, this);
    };
    Type2_Kula_Player.prototype.setKey = function () {
        this._upButton = this.keyButtons.up;
        this._downButton = this.keyButtons.down;
        this._frontButton = this.keyButtons.front;
        this._backButton = this.keyButtons.back;
        this._punchButton = this.keyButtons.punch;
        this._kickButton = this.keyButtons.kick;
        this._punch_lButton = this.keyButtons.punch_l;
        this._kick_lButton = this.keyButtons.kick_l;
        this._burstButton = this.keyButtons.burst;
        this._rollButton = this.keyButtons.roll;
        return;
    };
    Type2_Kula_Player.prototype.skill_code = function () {
        this.skill_array.push([this._downButton, this._backButton, this._burstButton]);
        this.skill_mapping.push(["sk_s_storm"]);
        this.skill_array.push([this._downButton, this._frontButton, this._burstButton]);
        this.skill_mapping.push(["sk_s_luanren"]);
        this.skill_array.push([this._downButton, this._frontButton, this._downButton, this._frontButton, this._punchButton]);
        this.skill_mapping.push(["sk_s_handong"]);
        this.skill_array.push([this._downButton, this._frontButton, this._downButton, this._backButton, this._punchButton]);
        this.skill_mapping.push(["sk_s_xiangdong"]);
        this.skill_array.push([this._downButton, this._frontButton, this._backButton, this._punchButton]);
        this.skill_mapping.push(["sk_s_xiangdong"]);
        this.skill_array.push([this._downButton, this._frontButton, this._downButton, this._frontButton, this._kickButton]);
        this.skill_mapping.push(["sk_s_luobing"]);
        this.skill_array.push([this._frontButton, this._downButton, this._backButton, this._punchButton]);
        this.skill_mapping.push(["sk_bingdian"]);
        this.skill_array.push([this._frontButton, this._downButton, this._frontButton, this._punch_lButton]);
        this.skill_mapping.push(["sk_fdfp_l"]);
        this.skill_array.push([this._frontButton, this._downButton, this._frontButton, this._punchButton]);
        this.skill_mapping.push(["sk_fdfp"]);
        this.skill_array.push([this._downButton, this._frontButton, this._punchButton]);
        this.skill_mapping.push(["sk_dfp"]);
        this.skill_array.push([this._downButton, this._backButton, this._punchButton]);
        this.skill_mapping.push(["sk_bingdian"]);
        this.skill_array.push([this._downButton, this._backButton, this._kickButton]);
        this.skill_mapping.push(["sk_flyKick"]);
        this.skill_array.push([this._downButton, this._frontButton, this._kick_lButton]);
        this.skill_mapping.push(["sk_tibing1"]);
        this.skill_array.push([this._downButton, this._frontButton, this._kickButton]);
        this.skill_mapping.push(["sk_tibing2"]);
    }; // End of the function
    Type2_Kula_Player.prototype.skill_code_easy = function () {
        this.skill_array.push([this._downButton, this._frontButton, this._punch_lButton]);
        this.skill_mapping.push(["sk_fdfp_l"]);
        this.skill_array.push([this._downButton, this._frontButton, this._punchButton]);
        this.skill_mapping.push(["sk_fdfp"]);
        this.skill_array.push([this._frontButton, this._punchButton]);
        this.skill_mapping.push(["sk_dfp"]);
        this.skill_array.push([this._backButton, this._punchButton]);
        this.skill_mapping.push(["sk_bingdian"]);
        this.skill_array.push([this._backButton, this._kickButton]);
        this.skill_mapping.push(["sk_flyKick"]);
        this.skill_array.push([this._frontButton, this._kickButton]);
        this.skill_mapping.push(["sk_tibing2"]);
        this.skill_array.push([this._downButton, this._kick_lButton]);
        this.skill_mapping.push(["sk_s_luobing"]);
    }; // End of the function
    return Type2_Kula_Player;
}(Type2_Kula_role)); // End of Class
__reflect(Type2_Kula_Player.prototype, "Type2_Kula_Player");
//# sourceMappingURL=Type2_Kula_Player.js.map