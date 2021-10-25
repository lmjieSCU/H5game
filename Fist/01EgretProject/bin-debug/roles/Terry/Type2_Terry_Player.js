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
var Type2_Terry_Player = (function (_super) {
    __extends(Type2_Terry_Player, _super);
    function Type2_Terry_Player() {
        var _this = _super.call(this) || this;
        _this.toSkill_temp = _this.toSkill;
        _this.toAction_temp = _this.toAction;
        _this.toStatus_temp = _this.toStatus;
        _this.toSkill = _this.noAct;
        _this.toAction = _this.noAct;
        var hero = new zmovie.ZMovieClip(["roleTerry0_json", "roleTerry1_json"], RES.getRes("roleTerry_json"), "root");
        _this.addChild(hero);
        _this.mc = hero.$children[0]; //name:mc_0
        if (Math.random() > 0.5) {
            _this.mc.gotoAndStop("begin");
        }
        else {
            _this.mc.gotoAndStop("begin2");
        }
        _this.bodyMC = _this.mc.$children[0]; //二级骨骼,已经进入到每一个动作中 name:punch/kick/...
        return _this;
    } // End of the function
    Type2_Terry_Player.prototype.init = function (keybuttons, _mode_key, controltype) {
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
        //   Object.registerClass("KeyControl",role_corn.KeyControl);
        //   this.attachMovie("KeyControl","newKeyControl",this.getNextHighestDepth());
        //   this.newKeyControl.init(this._kickButtoney_array,this.skill_array,this.skill_mapping,this);
    };
    Type2_Terry_Player.prototype.setKey = function () {
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
    Type2_Terry_Player.prototype.skill_code = function () {
        this.skill_array.push([this._downButton, this._backButton, this._burstButton]);
        this.skill_mapping.push(["db_o_EX"]);
        this.skill_array.push([this._downButton, this._frontButton, this._burstButton]);
        this.skill_mapping.push(["df_o_EX"]);
        this.skill_array.push([this._downButton, this._backButton, this._downButton, this._frontButton, this._punchButton]);
        this.skill_mapping.push(["dbdf_p"]);
        this.skill_array.push([this._downButton, this._backButton, this._frontButton, this._punchButton]);
        this.skill_mapping.push(["dbdf_p"]);
        this.skill_array.push([this._downButton, this._frontButton, this._downButton, this._frontButton, this._kickButton]);
        this.skill_mapping.push(["dfdf_k_EX"]);
        this.skill_array.push([this._frontButton, this._downButton, this._frontButton, this._punchButton]);
        this.skill_mapping.push(["fdf_kh"]);
        this.skill_array.push([this._frontButton, this._downButton, this._frontButton, this._kick_lButton]);
        this.skill_mapping.push(["fdf_p_EX"]);
        this.skill_array.push([this._frontButton, this._downButton, this._frontButton, this._kickButton]);
        this.skill_mapping.push(["fdf_k_EX"]);
        this.skill_array.push([this._downButton, this._frontButton, this._punch_lButton]);
        this.skill_mapping.push(["df_pl"]);
        this.skill_array.push([this._downButton, this._frontButton, this._punchButton]);
        this.skill_mapping.push(["df_ph"]);
        this.skill_array.push([this._downButton, this._frontButton, this._kickButton]);
        this.skill_mapping.push(["bdf_k"]);
        this.skill_array.push([this._downButton, this._backButton, this._kickButton]);
        this.skill_mapping.push(["df_k1"]);
        this.skill_array.push([this._downButton, this._backButton, this._punchButton]);
        this.skill_mapping.push(["fdb_p_EX"]);
    }; // End of the function
    Type2_Terry_Player.prototype.skill_code_easy = function () {
        this.skill_array.push([this._downButton, this._frontButton, this._punchButton]);
        this.skill_mapping.push(["fdf_kh"]);
        this.skill_array.push([this._downButton, this._frontButton, this._kickButton]);
        this.skill_mapping.push(["fdf_k_EX"]);
        this.skill_array.push([this._frontButton, this._kickButton]);
        this.skill_mapping.push(["bdf_k"]);
        this.skill_array.push([this._backButton, this._kickButton]);
        this.skill_mapping.push(["df_k1"]);
        this.skill_array.push([this._frontButton, this._punchButton]);
        this.skill_mapping.push(["df_pl"]);
        this.skill_array.push([this._frontButton, this._punchButton]);
        this.skill_mapping.push(["df_ph"]);
        this.skill_array.push([this._backButton, this._punchButton]);
        this.skill_mapping.push(["fdb_p_EX"]);
    }; // End of the function
    return Type2_Terry_Player;
}(Type2_Terry_role)); // End of Class
__reflect(Type2_Terry_Player.prototype, "Type2_Terry_Player");
//# sourceMappingURL=Type2_Terry_Player.js.map