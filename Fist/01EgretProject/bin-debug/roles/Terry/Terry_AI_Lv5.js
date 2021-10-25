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
var Terry_AI_Lv5 = (function (_super) {
    __extends(Terry_AI_Lv5, _super);
    function Terry_AI_Lv5(num) {
        if (num === void 0) { num = 1; }
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
        _this.strength = aiGrade["strength"];
        return _this;
    }
    Terry_AI_Lv5.prototype.skill_init = function () {
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
        this.skill_dis[0] = ["punch_l", "kick_l", "kick", "f_p", "walk_f"];
        this.skill_dis[1] = ["squatKick", "punch_l", "kick_l", "kick", "f_p", "df_ph", "heavyHit"];
        this.skill_dis[2] = ["db_k", "df_k_EX", "df_p_EX", "jump_f"];
        this.skill_dis[3] = ["walk_f", "dash_f", "jump_f"];
        this.skill_dis[4] = ["dash_f", "walk_f"];
        this.skill_dis[5] = ["dash_f", "walk_f"];
        this.skill2_dis[0] = ["punch", "punch", "kick"];
        this.skill2_dis[1] = ["squatKick", "kick"];
        this.skill2_dis[2] = ["dbdf_p", "dfdf_k", "jump_f"];
        this.skill2_dis[3] = ["jump_f"];
        this.skill2_dis[4] = ["db_p", "dash_f"];
        this.skill2_dis[5] = ["db_p", "dash_f"];
        this.dis_num = this.dis_array.length;
    }; // End of the function
    Terry_AI_Lv5.prototype.combo_init = function () {
        this.combo_1.punch = ["df_k_EX", "fdf_p", "db_p", "db_k", "fdf_kl", "dfdf_k", "dbdf_p"];
        this.combo_1.punch2 = ["f_p", "f_p", "f_p", "df_k_EX", "fdf_p", "fdf_kl", "dfdf_k", "dbdf_p"];
        this.combo_1.punch_l = ["punch", "kick", "kick_l"];
        this.combo_1.kick_l = ["punch", "kick"];
        this.combo_1.f_p = ["df_k_EX", "fdf_p", "db_p", "db_k", "fdf_kl", "dfdf_k", "dbdf_p"];
        this.combo_1.kick = ["df_k_EX", "fdf_p", "db_p", "db_k", "fdf_kl", "dfdf_k", "dbdf_p"];
        this.combo_1.kick2 = ["f_p", "f_p", "f_p", "df_k_EX", "fdf_p", "fdf_kl", "dfdf_k", "dbdf_p"];
        this.combo_1.squatPunch = ["df_k_EX", "fdf_p", "db_p", "db_k", "fdf_kl", "dfdf_k", "dbdf_p"];
        this.combo_1.squatKick_l = ["punch_l"];
        this.combo_1.squatPunch_l = ["punch_l", "squatKick_l"];
        this.combo_1.df_k_EX = ["fdf_p", "db_p", "db_k", "fdf_kl", "dfdf_k", "dbdf_p"];
        this.combo_land.jump_f = ["punch", "kick"];
        this.combo_burst.punch2 = ["f_p", "df_k_EX", "dfdf_k", "dbdf_p", "df_o", "db_o"];
        this.combo_burst.punch2 = ["df_k_EX", "dfdf_k", "dbdf_p", "df_o", "db_o"];
        this.combo_burst.kick2 = ["df_k_EX", "dfdf_k", "dbdf_p", "df_o", "db_o"];
        this.combo_burst.squatPunch = this.combo_burst.punch2;
        this.combo_burst.df_k_EX = ["dbdf_p", "dfdf_k", "df_o"];
        this.combo_burst.dbdf_p = ["dfdf_k", "df_o"];
        this.combo_burst.dbdf_k = ["dfdf_p", "df_o"];
        this.combo_oppOnEgde.dbdf_p = [true, true];
        this.combo_oppOnEgde.dbdf_k = [true, true];
        this.combo_1.dash_f = ["squatKick_l", "squatPunch_l", "roll_f", "jump_f"];
        this.delay_frames.dash_f = [130, 130, 130, 250, 250];
        this.combo_1.walk_f = ["pitch", "punch_l", "kick", "jump_f", "dash_f"];
        this.delay_frames.walk_f = [100, 150, 180, 250, 400];
        this.combo_1.walk_b = ["punch_l", "kick", "jump", "jump_f"];
        this.delay_frames.walk_b = [100, 150, 200, 260];
        this.action_1 = new Object();
        this.action_1.down = [["dash_b", "roll_b", "jump_b"], ["walk_f", "dash_f"]];
        this.delay_frames.down = [200, 1000];
        this.action_1.oppRoll = [["punch_l", "squatPunch_l"], ["squatKick_l", "kick_l"]];
        this.delay_frames.oppRoll = [150, 300];
        this.action_1.wander = [["roll_b", "jump_b"], ["wait", "jump_b", "walk_f", "dash_b"], ["dash_f", "wait"]];
        this.delay_frames.wander = [150, 300, 1000];
        this.action_1.defend = [["walk_b", "walk_b"], ["walk_b", "roll_b"], ["walk_b", "dash_b", "jump_b", "roll_b"], ["walk_b", "wait"]];
        this.delay_frames.defend = [130, 200, 400, 1000];
        this.action_1.defend_f = [["roll_f"], ["hold_u"]];
        this.delay_frames.defend_f = [150, 1000];
        this.action_1.defend_h = [["hold_u", "hold_u", "roll_f"], ["hold_u", "roll_b"], ["hold_u"]];
        this.delay_frames.defend_h = [130, 200, 1000];
        this.action_1.onEgde = [["attack", "roll_f"], ["attack"], ["attack", "dash_f"], ["walk_f", "dash_f"]];
        this.delay_frames.onEgde = [150, 250, 400, 1000];
        this.action_1.pos_down = [["squatKick_l", "squatKick"], ["squatKick"]];
        this.delay_frames.pos_down = [150, 250];
        this.action_1.pos_up = [["pitch"], ["jump_f"]];
        this.delay_frames.pos_up = [100, 250];
        this.action_1.oppJump = [["fdf_p", "walk_b", "dbdf_p"], ["dbdf_p", "db_o", "jump"]];
        this.delay_frames.oppJump = [200, 300];
        this.action_1.defendAttack = [["fdf_p", "dfdf_k", "dbdf_p", "db_o"], ["df_o"]];
        this.delay_frames.defendAttack = [200, 400];
        this.action_1.super = [["dfdf_k", "dbdf_p"], ["dfdf_k"]];
        this.delay_frames.super = [200, 300];
        this.action_1.busrt = [["df_o", "db_o"], ["df_o"]];
        this.delay_frames.busrt = [200, 350];
    }; // End of the function
    return Terry_AI_Lv5;
}(Terry_AI)); // End of Class
__reflect(Terry_AI_Lv5.prototype, "Terry_AI_Lv5");
//# sourceMappingURL=Terry_AI_Lv5.js.map