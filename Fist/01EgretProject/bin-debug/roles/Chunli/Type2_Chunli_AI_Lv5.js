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
var Type2_Chunli_AI_Lv5 = (function (_super) {
    __extends(Type2_Chunli_AI_Lv5, _super);
    function Type2_Chunli_AI_Lv5(num) {
        if (num === void 0) { num = 5; }
        var _this = _super.call(this) || this;
        _this.skill_init();
        _this.combo_init();
        var aiGrade = RES.getRes("AI_dis_json")["LV" + num];
        console.log(aiGrade);
        _this.combo_rate0 = aiGrade["combo_rate0"];
        _this.attack_rate0 = aiGrade["attack_rate0"];
        _this.hold_rate0 = aiGrade["hold_rate0"];
        _this.attack_s0 = aiGrade["attack_s0"];
        _this.wait_frame0 = aiGrade["wait_frame0"];
        _this.combo_risk = aiGrade["combo_risk"];
        _this.skill_rate0 = aiGrade["skill_rate0"];
        if (num == 5) {
            var btn = new ParameterControl(aiGrade, _this);
            K_AI_Lv5.PlanningSwitch = btn;
        }
        return _this;
    }
    Type2_Chunli_AI_Lv5.prototype.skill_init = function () {
        this.combo_1 = new Object();
        this.combo_land = new Object();
        this.combo_auto = new Object();
        this.combo_burst = new Object();
        this.delay_frames = new Object();
        this.dis_array[0] = 100;
        this.dis_array[1] = 150;
        this.dis_array[2] = 250;
        this.dis_array[3] = 300;
        this.dis_array[4] = 400;
        this.dis_array[5] = 1000;
        this.skill_dis[0] = ["sk_bo2", "punch_l", "kick_s1", "kick_l", "kick", "walk_f"];
        this.skill_dis[1] = ["sk_bo2", "squatKick", "punch_l", "kick_l", "kick", "heavyHit", "sk_huixuan2", "sk_bailietui2"];
        this.skill_dis[2] = ["sk_xuanyuan", "jump_f"];
        this.skill_dis[3] = ["walk_f", "dash_f", "jump_f"];
        this.skill_dis[4] = ["dash_f", "walk_f"];
        this.skill_dis[5] = ["dash_f", "walk_f"];
        this.skill2_dis[0] = ["sk_bailietui2", "sk_bo2", "punch", "punch", "kick"];
        this.skill2_dis[1] = ["sk_bo2", "squatKick", "kick"];
        this.skill2_dis[2] = ["sk_huixuan2", "sk_xuanyuan", "jump_f"];
        this.skill2_dis[3] = ["jump_f"];
        this.skill2_dis[4] = ["dash_f"];
        this.skill2_dis[5] = ["dash_f"];
        this.dis_num = this.dis_array.length;
    }; // End of the function
    Type2_Chunli_AI_Lv5.prototype.combo_init = function () {
        this.combo_1.punch = ["sk_bailietui2", "sk_huixuan2", "sk_xuanyuan", "sk_bo2", "sk_huixuan2"];
        this.combo_1.punch2 = ["sk_bailietui2", "sk_huixuan2", "sk_xuanyuan", "sk_bo2", "sk_s_bo2", "sk_s_qianlie_air"];
        this.combo_1.punch_l = ["punch", "kick", "kick_l"];
        this.combo_1.kick_l = ["punch", "kick"];
        this.combo_1.kick = ["sk_bailietui2", "sk_huixuan2", "sk_xuanyuan", "sk_huixuan2"];
        this.combo_1.kick2 = ["sk_bailietui2", "sk_huixuan2", "sk_xuanyuan", "sk_huixuan2", "sk_s_bo2", "sk_s_qianlie_air"];
        this.combo_1.squatPunch = ["sk_huixuan2", "sk_xuanyuan", "sk_bailietui2", "sk_huixuan2"];
        this.combo_1.squatKick_l = ["punch_l"];
        this.combo_1.squatPunch_l = ["punch_l", "squatKick_l"];
        this.combo_land.jump_f = ["punch", "kick"];
        this.combo_burst.punch2 = ["sk_bailietui2", "sk_huixuan2", "sk_huixuan2", "sk_s_bo2", "sk_s_qianlie_air", "sk_s_zuhe", "sk_s_tianxing"];
        this.combo_burst.squatPunch = this.combo_burst.punch2;
        this.combo_burst.sk_bailietui2 = ["sk_xuanyuan", "sk_huixuan2", "sk_huixuan2", "sk_s_bo2", "sk_s_qianlie_air", "sk_s_zuhe", "sk_s_tianxing"];
        this.combo_burst.sk_s_bo2 = ["sk_bailietui2", "sk_s_qianlie_air", "sk_s_zuhe", "sk_s_tianxing"];
        this.combo_land.sk_huixuan2 = ["sk_s_qianlie_air"];
        this.combo_1.dash_f = [["sk_bailietui2", "squatPunch_l"], "squatKick_l", "sk_bo2", "roll_f", "jump_f"];
        this.delay_frames.dash_f = [130, 140, 150, 250, 300];
        this.combo_1.walk_f = [["sk_bailietui2", "sk_bo2", "pitch"], "punch_l", "kick", "jump_f", "dash_f"];
        this.delay_frames.walk_f = [100, 150, 180, 250, 400];
        this.combo_1.walk_b = [["sk_bailietui2", "sk_bo2", "punch_l"], "kick", "jump", "jump_f"];
        this.delay_frames.walk_b = [100, 150, 200, 260];
        this.action_1 = new Object();
        this.action_1.down = [["dash_b", "roll_b", "jump_b"], ["walk_f", "dash_f"]];
        this.delay_frames.down = [200, 1000];
        this.action_1.oppRoll = [["punch_l", "squatPunch_l"], ["squatKick_l", "kick_l"]];
        this.delay_frames.oppRoll = [150, 300];
        this.action_1.oppJump = [["sk_huixuan2", "walk_b", "sk_s_qianlie_air"], ["sk_huixuan2", "sk_s_qianlie_air", "jump"]];
        this.delay_frames.oppJump = [150, 250];
        this.action_1.wander = [["roll_b", "jump_b"], ["wait", "jump_b", "walk_f", "dash_b"], ["dash_f", "wait"]];
        this.delay_frames.wander = [150, 300, 1000];
        this.action_1.defend = [["walk_b", "walk_b"], ["walk_b", "roll_b"], ["walk_b", "dash_b", "jump_b", "roll_b"], ["walk_b", "wait"]];
        this.delay_frames.defend = [130, 200, 400, 1000];
        this.action_1.defendAttack = [["sk_s_bo2", "sk_s_qianlie_air"]];
        this.delay_frames.defendAttack = [200];
        this.action_1.defend_f = [["roll_f"], ["hold_u"]];
        this.delay_frames.defend_f = [150, 1000];
        this.action_1.defend_h = [["hold_u", "hold_u", "roll_f"], ["hold_u", "roll_b"], ["hold_u"]];
        this.delay_frames.defend_h = [130, 200, 1000];
        this.action_1.onEgde = [["attack", "roll_f"], ["attack"], ["attack", "dash_f"], ["walk_f", "dash_f"]];
        this.delay_frames.onEgde = [150, 250, 400, 1000];
        this.action_1.pos_down = [["squatKick_l", "squatKick"], ["squatKick"]];
        this.delay_frames.pos_down = [150, 250];
        this.action_1.pos_up = [["pitch", "kick_s1"], ["jump_f", "kick_s1"]];
        this.delay_frames.pos_up = [100, 250];
        this.action_1.super = [["sk_s_bo2", "sk_s_qianlie_air"]];
        this.delay_frames.super = [250];
        this.action_1.busrt = [["sk_s_zuhe", "sk_s_tianxing"], ["sk_s_zuhe"]];
        this.delay_frames.busrt = [200, 250];
    }; // End of the function
    return Type2_Chunli_AI_Lv5;
}(Type2_Chunli_AI)); // End of Class
__reflect(Type2_Chunli_AI_Lv5.prototype, "Type2_Chunli_AI_Lv5");
//# sourceMappingURL=Type2_Chunli_AI_Lv5.js.map