class Terry_AI_Lv1 extends Terry_AI
{
    constructor()
    {
        super();
        this.skill_init();
        this.combo_init();
        this.combo_rate0 = 0;
        this.attack_rate0 = 20;
        this.hold_rate0 = 15;
        this.attack_s0 = 5;
        this.wait_frame0 = 30;
        this.combo_risk = 0;
    } // End of the function
    public skill_init()
    {
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
    } // End of the function
    public combo_init()
    {
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
    } // End of the function
        public cpu_control() {
        //使用render_delay_action调用cpu_control,同时清空上一过程判断的combo_Delay
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
    }

    public checkAction(): boolean {
        let action = undefined;
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
    }
} // End of Class