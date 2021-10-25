class Type2_Mai_AI_Lv3 extends Type2_Mai_AI
{
    var combo_rate0, attack_rate0, hold_rate0, attack_s0, wait_frame0, combo_risk, dis_array, skill_dis, skill2_dis, dis_num, combo_1, combo_land, combo_auto, combo_burst, delay_frames, action_1, skillObj;
    function Type2_Mai_AI_Lv3()
    {
        super();
        this.skill_init();
        this.combo_init();
        combo_rate0 = 50;
        attack_rate0 = 70;
        hold_rate0 = 70;
        attack_s0 = 30;
        wait_frame0 = 20;
        combo_risk = 50;
    } // End of the function
    function skill_init()
    {
        dis_array[0] = 100;
        dis_array[1] = 150;
        dis_array[2] = 250;
        dis_array[3] = 300;
        dis_array[4] = 400;
        dis_array[5] = 1000;
        skill_dis[0] = ["punch_l", "kick_s1", "kick_l", "kick", "walk_f", "sk_luan1"];
        skill_dis[1] = ["sk_luan1", "squatKick", "punch_l", "kick_l", "kick", "heavyHit"];
        skill_dis[2] = ["sk_hulu", "sk_longyanwu2", "jump_f"];
        skill_dis[3] = ["sk_hulu", "walk_f", "dash_f", "jump_f"];
        skill_dis[4] = ["sk_huadieshan", "dash_f", "walk_f"];
        skill_dis[5] = ["dash_f", "walk_f", "sk_huadieshan"];
        skill2_dis[0] = ["punch", "punch", "kick", "sk_luan1"];
        skill2_dis[1] = ["squatKick", "kick", "sk_huaxing"];
        skill2_dis[2] = ["sk_luan1", "sk_longyanwu2", "sk_hulu", "sk_bailu2", "jump_f"];
        skill2_dis[3] = ["sk_hulu", "sk_huadieshan", "jump_f"];
        skill2_dis[4] = ["sk_hulu", "sk_huadieshan", "dash_f"];
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
        combo_1.punch = ["sk_hulu", "sk_luan1", "sk_bailu2", "sk_longyanwu2"];
        combo_1.punch2 = ["sk_hulu", "sk_luan1", "sk_bailu2", "sk_longyanwu2", "sk_s_fenghuang", "sk_s_hualan"];
        combo_1.punch_l = ["punch", "kick", "kick_l"];
        combo_1.kick_l = ["punch", "kick"];
        combo_1.kick = ["sk_hulu", "sk_luan1", "sk_bailu2", "sk_longyanwu2"];
        combo_1.kick2 = ["sk_hulu", "sk_luan1", "sk_bailu2", "sk_longyanwu2", "sk_s_fenghuang", "sk_s_hualan"];
        combo_1.squatPunch = ["sk_luan1", "sk_longyanwu2", "sk_hulu", "sk_bailu2"];
        combo_1.squatKick_l = ["punch_l"];
        combo_1.squatPunch_l = ["punch_l", "squatKick_l"];
        combo_land.jump_f = ["punch", "kick"];
        combo_1.sk_hulu = ["sk_tibing0"];
        combo_1.sk_luan1 = ["sk_luan2", "sk_luan2", "sk_luan", "punch", "kick", "punch_l", "kick_l", "squatPunch", "squatKick_l", "squatPunch_l", "sk_huaxing"];
        combo_1.sk_luan2 = ["sk_luan3"];
        combo_1.sk_luan3 = ["sk_luan4"];
        combo_1.sk_luan4 = ["sk_luan5"];
        combo_1.sk_hulu = ["sk_longyanwu2", "sk_luan1", "sk_bailu2", "sk_huaxing"];
        combo_burst.punch2 = ["sk_s_fenghuang", "sk_s_hualan", "sk_s_fenshen", "sk_s_heti2"];
        combo_burst.squatPunch = combo_burst.punch2;
        combo_burst.sk_luan1 = ["sk_bailu2", "sk_s_hualan", "sk_longyanwu2", "sk_s_fenshen", "sk_s_heti2"];
        combo_burst.sk_longyanwu2 = ["sk_bailu2", "sk_luan1", "sk_hulu", "sk_s_fenshen", "sk_s_fenghuang"];
        combo_burst.sk_bailu2 = ["sk_luan1", "sk_hulu", "sk_s_fenghuang", "sk_s_hualan"];
        combo_burst.sk_s_fenghuang = ["sk_s_hualan", "sk_s_fenshen", "sk_s_heti"];
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
        action_1.oppJump = [["sk_bailu2", "walk_b"], ["sk_bailu2", "jump"]];
        delay_frames.oppJump = [150, 250];
        action_1.wander = [["roll_b", "jump_b"], ["wait", "jump_b", "walk_f", "dash_b"], ["dash_f", "wait"]];
        delay_frames.wander = [150, 300, 1000];
        action_1.defend = [["walk_b", "walk_b"], ["walk_b", "roll_b"], ["walk_b", "dash_b", "jump_b", "roll_b"], ["walk_b", "wait"]];
        delay_frames.defend = [130, 200, 400, 1000];
        action_1.defendAttack = [["sk_bailu2", skillObj.s1, skillObj.s2]];
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
        action_1.super = [["sk_s_fenghuang", "sk_s_hualan"], ["sk_s_hualan"]];
        delay_frames.super = [250, 300];
        action_1.busrt = [["sk_s_fenshen", "sk_s_heti2"]];
        delay_frames.busrt = [300];
    } // End of the function
} // End of Class
