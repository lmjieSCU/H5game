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
var Ryu_Player = (function (_super) {
    __extends(Ryu_Player, _super);
    function Ryu_Player() {
        var _this = _super.call(this) || this;
        _this.toSkill_temp = _this.toSkill;
        _this.toAction_temp = _this.toAction;
        _this.toStatus_temp = _this.toStatus;
        _this.toSkill = _this.noAct;
        _this.toAction = _this.noAct;
        var hero = new zmovie.ZMovieClip(["roleRyu0_json", "roleRyu1_json"], RES.getRes("roleRyu_json"), "root");
        _this.addChild(hero);
        _this.mc = hero.$children[0];
        if (Math.random() > 0.5) {
            _this.mc.gotoAndStop("begin");
        }
        else {
            _this.mc.gotoAndStop("begin2");
        }
        _this.bodyMC = _this.mc.$children[0]; //二级骨骼,已经进入到每一个动作中 name:punch/kick/...
        return _this;
    }
    Ryu_Player.prototype.init = function (keybuttons, _mode_key, controltype) {
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
    Ryu_Player.prototype.setKey = function () {
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
    Ryu_Player.prototype.skill_code = function () {
        this.skill_array.push([this._downButton, this._backButton, this._burstButton]);
        this.skill_mapping.push(["sk_s_swms"]);
        this.skill_array.push([this._downButton, this._frontButton, this._burstButton]);
        this.skill_mapping.push(["sk_s_sys"]);
        this.skill_array.push([this._downButton, this._frontButton, this._downButton, this._frontButton, this._punchButton]);
        this.skill_mapping.push(["sk10"]);
        this.skill_array.push([this._downButton, this._backButton, this._downButton, this._backButton, this._kickButton]);
        this.skill_mapping.push(["sk14"]);
        this.skill_array.push([this._downButton, this._backButton, this._downButton, this._backButton, this._punchButton]);
        this.skill_mapping.push(["sk13"]);
        this.skill_array.push([this._frontButton, this._downButton, this._frontButton, this._punch_lButton]);
        this.skill_mapping.push(["sk3_l"]);
        this.skill_array.push([this._frontButton, this._downButton, this._frontButton, this._punchButton]);
        this.skill_mapping.push(["sk3"]);
        //this.skill_array.push([this._frontButton,this._kickButton]);
        this.skill_array.push([this._frontButton, this._downButton, this._frontButton, this._kickButton]);
        this.skill_mapping.push(["sk_SKF"]);
        this.skill_array.push([this._backButton, this._downButton, this._backButton, this._kickButton]);
        this.skill_mapping.push(["sk_SKB"]);
        this.skill_array.push([this._downButton, this._frontButton, this._punch_lButton]);
        this.skill_mapping.push(["sk1_l"]);
        this.skill_array.push([this._downButton, this._frontButton, this._punchButton]);
        this.skill_mapping.push(["sk1"]);
        this.skill_array.push([this._downButton, this._backButton, this._punchButton]);
        this.skill_mapping.push(["sk_bodong_air"]);
        this.skill_array.push([this._downButton, this._backButton, this._kickButton]);
        this.skill_mapping.push(["sk2"]);
    };
    Ryu_Player.prototype.skill_code_easy = function () {
        this.skill_array.push([this._frontButton, this._punch_lButton]);
        this.skill_mapping.push(["sk1"]);
        this.skill_array.push([this._backButton, this._punch_lButton]);
        this.skill_mapping.push(["sk1_l"]);
        this.skill_array.push([this._downButton, this._punch_lButton]);
        this.skill_mapping.push(["sk10"]);
        this.skill_array.push([this._upButton, this._punch_lButton]);
        this.skill_mapping.push(["sk_bodong_air"]);
        this.skill_array.push([this._frontButton, this._kick_lButton]);
        this.skill_mapping.push(["sk13"]);
        this.skill_array.push([this._backButton, this._kick_lButton]);
        this.skill_mapping.push(["sk3"]);
        this.skill_array.push([this._downButton, this._kick_lButton]);
        this.skill_mapping.push(["sk14"]);
        this.skill_array.push([this._upButton, this._kick_lButton]);
        this.skill_mapping.push(["sk_bodong_air"]);
        // this.skill_array.push([this._downButton, this._frontButton, this._punch_lButton]);
        // this.skill_mapping.push(["sk3_l"]);
        // this.skill_array.push([this._downButton, this._frontButton, this._punchButton]);
        // this.skill_mapping.push(["sk3"]);
        // this.skill_array.push([this._frontButton, this._punch_lButton]);
        // this.skill_mapping.push(["sk1_l"]);
        // this.skill_array.push([this._frontButton, this._punchButton]);
        // this.skill_mapping.push(["sk1"]);
        // this.skill_array.push([this._backButton, this._punchButton]);
        // this.skill_mapping.push(["sk_bodong_air"]);
        // this.skill_array.push([this._backButton, this._kickButton]);
        // this.skill_mapping.push(["sk2"]);
        // this.skill_array.push([this._downButton, this._punch_lButton]);
        // this.skill_mapping.push(["punch_s"]);
        // this.skill_array.push([this._downButton, this._kick_lButton]);
        // this.skill_mapping.push(["sk13"]);
    };
    return Ryu_Player;
}(Ryu_role));
__reflect(Ryu_Player.prototype, "Ryu_Player");
//# sourceMappingURL=Ryu_Player.js.map