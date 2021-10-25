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
var Moriya_Player = (function (_super) {
    __extends(Moriya_Player, _super);
    function Moriya_Player() {
        var _this = _super.call(this) || this;
        _this.toSkill_temp = _this.toSkill;
        _this.toAction_temp = _this.toAction;
        _this.toStatus_temp = _this.toStatus;
        _this.toSkill = _this.noAct;
        _this.toAction = _this.noAct;
        var hero = new zmovie.ZMovieClip(["roleMoriya0_json", "roleMoriya1_json"], RES.getRes("roleMoriya_json"), "root");
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
    Moriya_Player.prototype.init = function (keybuttons, _mode_key, controltype) {
        if (controltype === void 0) { controltype = 'KeyControl'; }
        this.keyButtons = keybuttons;
        this.mode_key = _mode_key;
        this.setKey();
        this.skill_array = new Array();
        this.skill_mappin = new Array();
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
        this.keyCtrl.init(this.keyButtons, this.skill_array, this.skill_mappin, this);
        //   Object.registerClass("KeyControl",role_corn.KeyControl);
        //   this.attachMovie("KeyControl","newKeyControl",this.getNextHighestDepth());
        //   this.newKeyControl.init(this._kickButtoney_array,this.skill_array,this.skill_mappin,this);
    };
    Moriya_Player.prototype.setKey = function () {
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
    Moriya_Player.prototype.skill_code = function () {
        this.skill_array.push([this._downButton, this._frontButton, this._burstButton]);
        this.skill_mappin.push(["sk_s3"]);
        this.skill_array.push([this._downButton, this._backButton, this._burstButton]);
        this.skill_mappin.push(["sk_s4"]);
        this.skill_array.push([this._downButton, this._backButton, this._downButton, this._backButton, this._punchButton]);
        this.skill_mappin.push(["sk_s1"]);
        this.skill_array.push([this._downButton, this._frontButton, this._downButton, this._backButton, this._punchButton]);
        this.skill_mappin.push(["sk_s2"]);
        this.skill_array.push([this._downButton, this._frontButton, this._backButton, this._punchButton]);
        this.skill_mappin.push(["sk_s2"]);
        this.skill_array.push([this._backButton, this._downButton, this._frontButton, this._kickButton]);
        this.skill_mappin.push(["sk_buyue1"]);
        this.skill_array.push([this._backButton, this._downButton, this._frontButton, this._punch_lButton]);
        this.skill_mappin.push(["sk_buyue3"]);
        this.skill_array.push([this._backButton, this._downButton, this._frontButton, this._punchButton]);
        this.skill_mappin.push(["sk_buyue2"]);
        this.skill_array.push([this._frontButton, this._downButton, this._frontButton, this._punch_lButton]);
        this.skill_mappin.push(["sk_xinyue"]);
        this.skill_array.push([this._frontButton, this._downButton, this._frontButton, this._punchButton]);
        this.skill_mappin.push(["sk_xinyue2"]);
        this.skill_array.push([this._downButton, this._frontButton, this._punch_lButton]);
        this.skill_mappin.push(["sk_yueying_a1"]);
        this.skill_array.push([this._downButton, this._frontButton, this._punchButton]);
        this.skill_mappin.push(["sk_yueying_c1"]);
        this.skill_array.push([this._downButton, this._backButton, this._punch_lButton]);
        this.skill_mappin.push(["sk_long_u"]);
        this.skill_array.push([this._downButton, this._backButton, this._punchButton]);
        this.skill_mappin.push(["sk_long_m"]);
        this.skill_array.push([this._downButton, this._backButton, this._kickButton]);
        this.skill_mappin.push(["sk_long_d"]);
        this.skill_array.push([this._downButton, this._frontButton, this._kick_lButton]);
        this.skill_mappin.push(["sk_yuedu2"]);
        this.skill_array.push([this._downButton, this._frontButton, this._kickButton]);
        this.skill_mappin.push(["sk_yuedu1"]);
    }; // End of the function
    Moriya_Player.prototype.skill_code_easy = function () {
        this.skill_array.push([this._backButton, this._downButton, this._frontButton, this._kickButton]);
        this.skill_mappin.push(["sk_buyue1"]);
        this.skill_array.push([this._backButton, this._downButton, this._frontButton, this._punch_lButton]);
        this.skill_mappin.push(["sk_buyue3"]);
        this.skill_array.push([this._backButton, this._downButton, this._frontButton, this._punchButton]);
        this.skill_mappin.push(["sk_buyue2"]);
        this.skill_array.push([this._downButton, this._frontButton, this._punch_lButton]);
        this.skill_mappin.push(["sk_xinyue"]);
        this.skill_array.push([this._downButton, this._frontButton, this._punchButton]);
        this.skill_mappin.push(["sk_xinyue2"]);
        this.skill_array.push([this._frontButton, this._punch_lButton]);
        this.skill_mappin.push(["sk_yueying_a1"]);
        this.skill_array.push([this._frontButton, this._punchButton]);
        this.skill_mappin.push(["sk_yueying_c1"]);
        this.skill_array.push([this._backButton, this._punch_lButton]);
        this.skill_mappin.push(["sk_long_u"]);
        this.skill_array.push([this._backButton, this._punchButton]);
        this.skill_mappin.push(["sk_long_m"]);
        this.skill_array.push([this._backButton, this._kickButton]);
        this.skill_mappin.push(["sk_long_d"]);
        this.skill_array.push([this._frontButton, this._kick_lButton]);
        this.skill_mappin.push(["sk_yuedu2"]);
        this.skill_array.push([this._frontButton, this._kickButton]);
        this.skill_mappin.push(["sk_yuedu1"]);
        this.skill_array.push([this._downButton, this._punch_lButton]);
        this.skill_mappin.push(["punch3"]);
    }; // End of the function
    return Moriya_Player;
}(Moriya_role)); // End of Class
__reflect(Moriya_Player.prototype, "Moriya_Player");
//# sourceMappingURL=Moriya_Player.js.map