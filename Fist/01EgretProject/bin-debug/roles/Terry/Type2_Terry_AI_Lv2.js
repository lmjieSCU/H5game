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
var Type2_Terry_AI_Lv2 = (function (_super) {
    __extends(Type2_Terry_AI_Lv2, _super);
    function Type2_Terry_AI_Lv2() {
        var _this = _super.call(this) || this;
        _this.skill_init();
        _this.combo_init();
        _this.combo_rate0 = 25;
        _this.attack_rate0 = 30;
        _this.hold_rate0 = 20;
        _this.attack_s0 = 10;
        _this.wait_frame0 = 30;
        _this.combo_risk = 30;
        return _this;
    } // End of the function
    Type2_Terry_AI_Lv2.prototype.skill_init = function () {
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
        this.skill_dis[0] = ["punch_l", "kick_l", "kick", "f_p_EX", "walk_f"];
        this.skill_dis[1] = ["squatKick", "punch_l", "kick_l", "kick", "f_p_EX", "df_k1", "fdb_p_EX", "heavyHit"];
        this.skill_dis[2] = ["df_k1", "bdf_k", "df_pl", "fdf_p_EX", "fdf_k_EX", "jump_f"];
        this.skill_dis[3] = ["walk_f", "dash_f", "jump_f"];
        this.skill_dis[4] = ["df_pl", "dash_f", "walk_f"];
        this.skill_dis[5] = ["df_pl", "dash_f", "walk_f"];
        this.skill2_dis[0] = ["punch", "punch", "kick"];
        this.skill2_dis[1] = ["squatKick", "kick"];
        this.skill2_dis[2] = ["dbdf_p", "dfdf_k", "jump_f"];
        this.skill2_dis[3] = ["jump_f"];
        this.skill2_dis[4] = ["db_p", "dash_f"];
        this.skill2_dis[5] = ["db_p", "dash_f"];
        this.dis_num = this.dis_array.length;
    }; // End of the function
    Type2_Terry_AI_Lv2.prototype.combo_init = function () {
        this.combo_1.punch = ["f_p_EX", "bdf_k", "fdf_kh", "fdb_p_EX", "df_k1", "fdf_p_EX", "fdf_k_EX", "dfdf_k_EX", "dbdf_p"];
        this.combo_1.punch2 = ["f_p_EX", "f_p_EX", "f_p_EX", "bdf_k", "fdf_kh", "fdb_p_EX", "fdf_k_EX", "df_k1"];
        this.combo_1.punch_l = ["punch", "kick", "kick_l"];
        this.combo_1.kick_l = ["punch", "kick"];
        this.combo_1.f_p_EX = ["bdf_k", "fdf_kh", "fdb_p_EX", "df_k1", "fdf_p_EX", "fdf_k_EX", "dfdf_k_EX", "dbdf_p"];
        this.combo_1.kick = ["bdf_k", "fdf_kh", "fdb_p_EX", "df_k1", "fdf_p_EX", "fdf_k_EX", "dfdf_k_EX", "dbdf_p"];
        this.combo_1.kick2 = ["bdf_k", "fdf_kh", "fdb_p_EX", "df_k1", "fdf_p_EX", "fdf_k_EX", "dfdf_k_EX", "dbdf_p"];
        this.combo_1.squatPunch = ["bdf_k", "fdf_kh", "fdb_p_EX", "df_k1", "fdf_p_EX", "fdf_k_EX", "dfdf_k_EX", "dbdf_p"];
        this.combo_1.squatKick_l = ["punch_l"];
        this.combo_1.squatPunch_l = ["punch_l", "squatKick_l"];
        this.combo_1.bdf_k = ["fdf_p_EX", "fdb_p_EX", "fdf_kl", "dfdf_k", "dbdf_p"];
        this.combo_1.df_k1 = ["df_k2"];
        this.combo_1.df_k2 = ["df_k3"];
        this.combo_land.jump_f = ["punch", "kick"];
        this.combo_burst.punch2 = ["bdf_k", "fdf_kl", "fdb_p_EX", "dfdf_k_EX", "dbdf_p", "df_o_EX", "db_o_EX"];
        this.combo_burst.kick2 = ["bdf_k", "fdf_kl", "fdb_p_EX", "dfdf_k_EX", "dbdf_p", "df_o_EX", "db_o_EX"];
        this.combo_burst.squatPunch = this.combo_burst.punch2;
        this.combo_1.bdf_k = ["fdf_p_EX", "fdb_p_EX", "fdf_kl", "dfdf_k", "dbdf_p", "df_o_EX", "db_o_EX"];
        this.combo_burst.dbdf_p = ["dfdf_k", "df_o_EX"];
        this.combo_burst.df_k1 = ["df_k2"];
        this.combo_burst.df_k2 = ["df_k3", "fdf_p_EX", "fdb_p_EX", "fdf_kl", "dfdf_k", "dbdf_p", "df_o_EX", "db_o_EX"];
        this.combo_oppOnEgde.dbdf_p = [true, true];
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
        this.action_1.oppJump = [["fdf_kh", "walk_b", "dbdf_p"], ["dbdf_p", "dfdf_k_EX", "jump"]];
        this.delay_frames.oppJump = [200, 300];
        this.action_1.defendAttack = [["db_o_EX", "dfdf_k_EX", "dfdf_p"], ["df_o_EX"]];
        this.delay_frames.defendAttack = [250, 700];
        this.action_1.super = [["dfdf_k_EX", "dbdf_p"], ["dfdf_k_EX"]];
        this.delay_frames.super = [200, 300];
        this.action_1.busrt = [["df_o_EX", "db_o_EX"], ["df_o_EX"]];
        this.delay_frames.busrt = [250, 700];
    }; // End of the function
    Type2_Terry_AI_Lv2.prototype.cpu_control = function () {
        //??????render_delay_action??????cpu_control,?????????????????????????????????combo_Delay
        this.render_AI_control = undefined;
        if (this.render_mc_action == this.render_combo_delay) {
            this.render_mc_action = undefined;
        }
        if (this.checkDefend()) {
            return true;
        }
        if (this.checkAction()) {
            return true;
        }
        if (this.checkAttack()) {
            return true;
        }
        this.checkWait();
    };
    Type2_Terry_AI_Lv2.prototype.checkAction = function () {
        var action = undefined;
        if (this.combo_check_land()) {
            return true;
        }
        if (this.opp.status_3 == "down") {
            if (this.checkBurst()) {
                return true;
            }
            action = this.action_select("action_1", "down");
            this.toSkill(action);
            return true;
        }
        if (this.onEdge) {
            action = this.action_select("action_1", "onEgde");
            this.toSkill(action);
            return true;
        }
        return false;
    };
    return Type2_Terry_AI_Lv2;
}(Type2_Terry_AI)); // End of Class
__reflect(Type2_Terry_AI_Lv2.prototype, "Type2_Terry_AI_Lv2");
//# sourceMappingURL=Type2_Terry_AI_Lv2.js.map