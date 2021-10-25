class Mai_AI_Lv2 extends Mai_AI
{
    var combo_rate0, attack_rate0, hold_rate0, attack_s0, wait_frame0, combo_risk, dis_array, skill_dis, skill2_dis, dis_num, combo_1, combo_land, combo_auto, combo_burst, delay_frames, combo_oppOnEgde, action_1, checkDefend, checkAttack, checkWait, combo_check2, opp, checkBurst, action_select, toSkill, onEgde;
    function Mai_AI_Lv2()
    {
        super();
        this.skill_init();
        this.combo_init();
        combo_rate0 = 25;
        attack_rate0 = 30;
        hold_rate0 = 20;
        attack_s0 = 10;
        wait_frame0 = 30;
        combo_risk = 30;
    } // End of the function
    function skill_init()
    {
        dis_array[0] = 100;
        dis_array[1] = 150;
        dis_array[2] = 250;
        dis_array[3] = 300;
        dis_array[4] = 400;
        dis_array[5] = 1000;
        skill_dis[0] = ["punch_l", "kick_s1", "kick_l", "kick", "walk_f"];
        skill_dis[1] = ["squatKick", "punch_l", "kick_l", "kick", "heavyHit"];
        skill_dis[2] = ["sk_qianniao", "sk_longyanwu", "jump_f"];
        skill_dis[3] = ["walk_f", "dash_f", "jump_f"];
        skill_dis[4] = ["sk_huadieshan", "dash_f", "walk_f"];
        skill_dis[5] = ["dash_f", "walk_f", "sk_huadieshan"];
        skill2_dis[0] = ["punch", "punch", "kick"];
        skill2_dis[1] = ["squatKick", "kick", "sk_huaxing"];
        skill2_dis[2] = ["sk_qianniao", "sk_longyanwu", "sk_renfeng", "sk_bailu", "jump_f"];
        skill2_dis[3] = ["sk_renfeng", "sk_huadieshan", "jump_f"];
        skill2_dis[4] = ["sk_renfeng", "sk_huadieshan", "dash_f"];
        skill2_dis[5] = ["sk_huadieshan", "dash_f"];
        dis_num = dis_array.length;
    } // End of the function
    function combo_init()
    {
        combo_1 = new Object();
        combo_land = new Object();
        combo_auto = new Object();
        combo_burst = new Object();
        delay_frames = new Object();
        combo_1.punch = ["sk_renfeng", "sk_qianniao", "sk_bailu", "sk_longyanwu"];
        combo_1.punch2 = ["sk_renfeng", "sk_qianniao", "sk_bailu", "sk_longyanwu", "sk_s_shuiniao", "sk_s_renfeng"];
        combo_1.punch_l = ["punch", "kick", "kick_l"];
        combo_1.kick_l = ["punch", "kick"];
        combo_1.kick = ["sk_renfeng", "sk_qianniao", "sk_bailu", "sk_longyanwu"];
        combo_1.kick2 = ["sk_renfeng", "sk_qianniao", "sk_bailu", "sk_longyanwu", "sk_s_shuiniao", "sk_s_renfeng"];
        combo_1.squatPunch = ["sk_qianniao", "sk_longyanwu", "sk_renfeng", "sk_bailu"];
        combo_1.squatKick_l = ["punch_l"];
        combo_1.squatPunch_l = ["punch_l", "squatKick_l"];
        combo_land.jump_f = ["punch", "kick"];
        combo_burst.punch2 = ["sk_s_shuiniao", "sk_s_renfeng", "sk_s_qianzai1", "sk_s_heti"];
        combo_burst.squatPunch = combo_burst.punch2;
        combo_burst.sk_qianniao = ["sk_bailu", "sk_renfeng", "sk_longyanwu", "sk_s_renfeng"];
        combo_oppOnEgde.sk_qianniao = [true, true, true, true];
        combo_burst.sk_longyanwu = ["sk_bailu", "sk_qianniao", "sk_renfeng", "sk_s_shuiniao", "sk_s_renfeng"];
        combo_burst.sk_bailu = ["sk_qianniao", "sk_renfeng", "sk_s_shuiniao", "sk_s_renfeng"];
        combo_1.dash_f = ["squatKick_l", "squatPunch_l", "roll_f", "jump_f", "sk_huaxing"];
        delay_frames.dash_f = [130, 130, 130, 250, 250];
        combo_1.walk_f = ["pitch", "punch_l", "kick", "jump_f", "dash_f"];
        delay_frames.walk_f = [100, 150, 180, 250, 400];
        combo_1.walk_b = ["punch_l", "kick", "jump", "jump_f"];
        delay_frames.walk_b = [100, 150, 200, 260];
        action_1 = new Object();
        action_1.down = [["dash_b", "roll_b", "jump_b"], ["walk_f", "dash_f"]];
        delay_frames.down = [200, 1000];
        action_1.oppRoll = [["punch_l", "squatPunch_l"], ["squatKick_l", "kick_l"]];
        delay_frames.oppRoll = [150, 300];
        action_1.oppJump = [["sk_feixiang", "walk_b"], ["sk_feixiang", "jump"]];
        delay_frames.oppJump = [150, 250];
        action_1.wander = [["roll_b", "jump_b"], ["wait", "jump_b", "walk_f", "dash_b"], ["dash_f", "wait"]];
        delay_frames.wander = [150, 300, 1000];
        action_1.defend = [["walk_b", "walk_b"], ["walk_b", "roll_b"], ["walk_b", "dash_b", "jump_b", "roll_b"], ["walk_b", "wait"]];
        delay_frames.defend = [130, 200, 400, 1000];
        action_1.defendAttack = [["sk_bailu", "sk_s_shuiniao", "sk_s_renfeng"]];
        delay_frames.defendAttack = [200];
        action_1.defend_f = [["roll_f"], ["hold_u"]];
        delay_frames.defend_f = [150, 1000];
        action_1.defend_h = [["hold_u", "hold_u", "roll_f"], ["hold_u", "roll_b"], ["hold_u"]];
        delay_frames.defend_h = [130, 200, 1000];
        action_1.onEgde = [["attack", "roll_f"], ["attack"], ["attack", "dash_f"], ["walk_f", "dash_f"]];
        delay_frames.onEgde = [150, 250, 400, 1000];
        action_1.pos_down = [["squatKick_l", "squatKick"], ["squatKick", "sk_huaxing"]];
        delay_frames.pos_down = [150, 250];
        action_1.pos_up = [["pitch", "kick_s1"], ["jump_f", "kick_s1"]];
        delay_frames.pos_up = [100, 250];
        action_1.super = [["sk_s_shuiniao", "sk_s_renfeng"], ["sk_s_shuiniao"]];
        delay_frames.super = [250, 400];
        action_1.busrt = [["sk_s_qianzai1", "sk_s_heti"], ["sk_s_heti"]];
        delay_frames.busrt = [200, 400];
    } // End of the function
    function actionDefend()
    {
    } // End of the function
    function cpu_control()
    {
        if (this.checkDefend())
        {
            return (true);
        } // end if
        if (this.checkAction())
        {
            return (true);
        } // end if
        if (this.checkAttack())
        {
            return (true);
        } // end if
        this.checkWait();
    } // End of the function
    function checkAction()
    {
        var _loc2;
        if (this.combo_check2())
        {
            return (true);
        }
        else if (opp.status_3 == "down")
        {
            if (this.checkBurst())
            {
                return (true);
            } // end if
            _loc2 = this.action_select("action_1", "down");
            this.toSkill(_loc2);
            return (true);
        }
        else if (onEgde)
        {
            var _loc3 = this.action_select("action_1", "onEgde");
            this.toSkill(_loc3);
            return (true);
        } // end else if
    } // End of the function
} // End of Class
