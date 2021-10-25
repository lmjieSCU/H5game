class Type2_Ryu_AI_Lv2 extends Type2_Ryu_AI
{
    constructor ()
    {
        super();
        this.skill_init();
        this.combo_init();
        this.combo_rate0 = 25;
        this.attack_rate0 = 30;
        this.hold_rate0 = 20;
        this.attack_s0 = 10;
        this.wait_frame0 = 30;
        this.combo_risk = 30;
    } // End of the function
    public skill_init()
    {
        this.dis_array[0] = 100;
        this.dis_array[1] = 150;
        this.dis_array[2] = 200;
        this.dis_array[3] = 250;
        this.dis_array[4] = 300;
        this.dis_array[5] = 400;
        this.dis_array[6] = 1000;
        this.skill_dis[0] = ["punch", "punch_l", "kick_l", "kick", "walk_f", "squatKick"];
        this.skill_dis[1] = ["kick", "sk_xf2", this.skillObj.toAir, "squatKick", this.skillObj.heavyHit];
        this.skill_dis[2] = ["sk_xf2", "jump_f", "jump_b"];
        this.skill_dis[3] = ["sk1", "sk_xf2", "walk_f", "jump_f"];
        this.skill_dis[4] = ["sk1", "sk_xf2", "walk_f", "dash_f", "jump_f"];
        this.skill_dis[5] = ["dash_f", "walk_f", "sk1", "sk_bodong_air"];
        this.skill_dis[6] = ["dash_f", "walk_f", "sk1", "sk_bodong_air"];
        this.skill2_dis[0] = ["punch", "kick", this.skillObj.toAir];
        this.skill2_dis[1] = ["kick", "sk_xf2", this.skillObj.toAir, "squatKick"];
        this.skill2_dis[2] = ["sk_xf2", "jump_f"];
        this.skill2_dis[3] = ["sk1", "sk_xf2", "jump_f"];
        this.skill2_dis[4] = ["sk1", "sk_xf2", "jump_f"];
        this.skill2_dis[5] = ["dash_f", "sk1", "sk_bodong_air"];
        this.skill2_dis[6] = ["dash_f", "sk1"];
        this.dis_num = this.dis_array.length;
    } // End of the function
    public combo_init()
    {
        this.combo_1 = new Object();
        this.combo_land = new Object();
        this.combo_auto = new Object();
        this.combo_burst = new Object();
        this.delay_frames = new Object();
        this.combo_1.punch = ["kick1", "kick2", "sk1", "sk_xf2", this.skillObj.toAir, "sk10", "sk_s3"];
        this.combo_1.punch2 = ["kick1", "kick2", "sk1", "sk_xf2", this.skillObj.toAir, "sk10", "sk_bd_air", "sk_s3"];
        this.combo_1.kick = ["sk1", "sk_xf2", "sk10", "sk_s3"];
        this.combo_1.kick2 = ["sk1", "sk_xf2", this.skillObj.toAir, "sk10", "sk_bd_air", "sk_s3"];
        this.combo_1.squatPunch = ["sk1", "sk_xf2", "sk10", "sk_s3"];
        this.combo_land.jump_f = ["punch", "kick"];
        this.combo_land.punch_l = ["punch_l", "kick_l"];
        this.combo_land.squatKick_l = ["squatKick_l"];
        this.combo_land.squatPunch_l = ["squatPunch_l", "squatKick_l"];
        this.combo_land.kick1 = ["squatKick", "sk1", "sk_xf2", this.skillObj.toAir, "sk_s3"];
        this.combo_land.sk_xf2 = ["sk3", "sk_xf2", "sk10", "sk_s3", "sk_s_q1"];
        this.combo_1.dash_f = ["punch", "kick1", "jump_f", "jump_f"];
        this.delay_frames.dash_f = [120, 150, 120, 230, 300];
        this.combo_1.walk_f = ["pitch", "punch", "kick_l", "jump_f", "dash_f"];
        this.delay_frames.walk_f = [100, 120, 180, 230, 400];
        this.combo_1.walk_b = ["punch", "kick", "kick_l", "jump_f"];
        this.delay_frames.walk_b = [100, 100, 180, 260, 300, 250];
        this.combo_burst.sk_xf2 = ["sk3", "sk_xf2", "sk10", "sk_s3", "sk_s_q1"];
        this.combo_oppOnEgde.sk10 = [true, false, false, false, false];
        this.combo_burst.sk3 = ["sk4"];
        this.delay_frames.sk3 = [5];
        this.combo_burst.punch2 = ["sk_xf2", "sk10", "sk_bd_air", "sk_s3", "sk_s_q1", "sk_s_q2"];
        this.combo_burst.kick2 = ["sk_xf2", "sk10", "sk_bd_air", "sk_s3", "sk_s_q1", "sk_s_q2"];
        this.combo_burst.sk10 = ["sk_s3", "sk_s_q1", "sk_s_q2"];
        this.action_1 = new Object();
        this.action_1.down = [["walk_b", "jump_b", "dash_b"], ["walk_f", "dash_f"]];
        this.delay_frames.down = [200, 1000];
        this.action_1.oppRoll = [["punch_l", "squatPunch_l"], ["squatKick_l", "kick_l"]];
        this.delay_frames.oppRoll = [150, 300];
        this.action_1.oppJump = [[this.skillObj.toAir, "squatPunch"], [this.skillObj.toAir]];
        this.delay_frames.oppJump = [150, 300];
        this.action_1.wander = [["walk_b", "jump_b"], ["wait", "jump_b", "walk_f"], ["walk_f", "dash_f", "wait", this.skillObj.flyingObj]];
        this.delay_frames.wander = [150, 300, 1000];
        this.action_1.defend = [["walk_b"], ["walk_b", "jump_b"], ["walk_b", this.skillObj.flyingObj], ["walk_b", "wait", this.skillObj.flyingObj]];
        this.delay_frames.defend = [130, 200, 400, 1000];
        this.action_1.defendAttack = [[this.skillObj.toAir]];
        this.delay_frames.defendAttack = [150];
        this.action_1.defend_f = [["hold_u"], ["hold_u"]];
        this.delay_frames.defend_f = [150, 1000];
        this.action_1.defend_h = [["hold_u"], ["hold_u"], ["hold_u"]];
        this.delay_frames.defend_h = [130, 200, 1000];
        this.action_1.onEgde = [["attack", "jump_f"], ["attack"], ["attack"], ["walk_f", "dash_f"]];
        this.delay_frames.onEgde = [150, 250, 400, 1000];
        this.action_1.pos_down = [["squatKick_l", "squatKick"], ["squatKick"]];
        this.delay_frames.pos_down = [150, 200];
        this.action_1.pos_up = [["pitch", "punch_s"], ["kick2", "punch_s"], ["jump_f"]];
        this.delay_frames.pos_up = [100, 150, 250];
        this.action_1.super = [["sk10", "sk_bd_air", "sk_s3"], ["sk10"]];
        this.delay_frames.super = [300, 500];
        this.action_1.busrt = [["sk_s_q1", "sk_s_q2"]];
        this.delay_frames.busrt = [600];
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