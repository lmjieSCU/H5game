class Type2_Kula_AI_Lv5 extends Type2_Kula_AI
{
    var combo_rate0, attack_rate0, hold_rate0, attack_s0, wait_frame0, combo_risk, dis_array, skill_dis, skill2_dis, dis_num, combo_1, combo_land, combo_auto, combo_burst, delay_frames, action_1;
    function Type2_Kula_AI_Lv5()
    {
        super();
        this.skill_init();
        this.combo_init();
        combo_rate0 = 100;
        attack_rate0 = 100;
        hold_rate0 = 100;
        attack_s0 = 70;
        wait_frame0 = 0;
        combo_risk = 20;
    } // End of the function
    function skill_init()
    {
        dis_array[0] = 100;
        dis_array[1] = 150;
        dis_array[2] = 250;
        dis_array[3] = 300;
        dis_array[4] = 400;
        dis_array[5] = 1000;
        skill_dis[0] = ["punch_l", "punch_s1", "kick_l", "kick", "walk_f"];
        skill_dis[1] = ["squatKick", "punch_l", "kick_l", "kick", "heavyHit", "sk_tibing2"];
        skill_dis[2] = ["sk_dfp", "sk_flyKick", "sk_bingdian", "sk_tibing2", "jump_f"];
        skill_dis[3] = ["sk_flyKick", "sk_flyKick", "walk_f", "dash_f", "jump_f"];
        skill_dis[4] = ["dash_f", "walk_f"];
        skill_dis[5] = ["dash_f", "walk_f"];
        skill2_dis[0] = ["punch", "punch", "kick"];
        skill2_dis[1] = ["squatKick", "kick", "sk_tibing2"];
        skill2_dis[2] = ["sk_dfp", "sk_flyKick", "sk_bingdian", "sk_tibing2", "jump_f"];
        skill2_dis[3] = ["sk_flyKick", "sk_bingdian", "jump_f"];
        skill2_dis[4] = ["dash_f"];
        skill2_dis[5] = ["dash_f"];
        dis_num = dis_array.length;
    } // End of the function
    function combo_init()
    {
        combo_1 = new Object();
        combo_land = new Object();
        combo_auto = new Object();
        combo_burst = new Object();
        delay_frames = new Object();
        combo_1.punch = ["sk_flyKick", "sk_dfp", "sk_fdfp", "sk_bingdian", "sk_tibing2"];
        combo_1.punch2 = ["sk_flyKick", "sk_dfp", "sk_fdfp", "sk_bingdian", "sk_s_handong", "sk_tibing2", "sk_s_storm", "sk_s_luanren"];
        combo_1.punch_l = ["punch_l", "kick_l"];
        combo_1.kick = ["sk_flyKick", "sk_dfp", "sk_fdfp", "sk_bingdian", "sk_tibing2", "sk_s_xiangdong", "sk_s_luobing"];
        combo_1.kick2 = ["sk_flyKick", "sk_dfp", "sk_fdfp", "sk_bingdian", "sk_tibing2", "sk_s_xiangdong", "sk_s_luobing", "sk_s_storm", "sk_s_luanren"];
        combo_1.squatPunch = ["sk_dfp", "sk_flyKick"];
        combo_1.squatKick_l = ["squatKick_l", "squatPunch_l"];
        combo_1.squatPunch_l = ["squatPunch_l", "squatKick_l"];
        combo_land.jump_f = ["punch", "kick"];
        combo_burst.punch2 = ["sk_s_handong", "sk_s_luobing", "sk_s_storm", "sk_s_luanren"];
        combo_burst.kick2 = ["sk_s_handong", "sk_s_luobing", "sk_s_storm", "sk_s_luanren"];
        combo_burst.sk_dfp = ["sk_s_handong", "sk_s_luobing", "sk_s_storm", "sk_s_luanren"];
        combo_burst.sk_tibing2 = ["sk_fdfp", "sk_flyKick", "sk_s_luobing", "sk_s_storm", "sk_s_luanren"];
        combo_burst.sk_s_bingren = ["sk_s_luobing", "sk_s_storm", "sk_s_luanren"];
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
        action_1.oppJump = [["sk_fdfp", "sk_fdfp_l"], ["sk_fdfp", "jump"]];
        delay_frames.oppJump = [150, 250];
        action_1.wander = [["roll_b", "jump_b"], ["wait", "jump_b", "walk_f", "dash_b"], ["dash_f", "wait"]];
        delay_frames.wander = [150, 300, 1000];
        action_1.defend = [["walk_b", "walk_b"], ["walk_b", "roll_b"], ["walk_b", "dash_b", "jump_b", "roll_b"], ["walk_b", "wait"]];
        delay_frames.defend = [130, 200, 400, 1000];
        action_1.defendAttack = [["sk_fdfp", "sk_s_xiangdong", "sk_s_luanren"], ["sk_s_handong", "sk_s_luobing", "sk_s_storm", "sk_s_luanren"]];
        delay_frames.defendAttack = [250, 1000];
        action_1.defend_f = [["roll_f"], ["hold_u"]];
        delay_frames.defend_f = [150, 1000];
        action_1.defend_h = [["hold_u", "hold_u", "roll_f"], ["hold_u", "roll_b"], ["hold_u"]];
        delay_frames.defend_h = [130, 200, 1000];
        action_1.onEgde = [["attack", "roll_f"], ["attack"], ["attack", "dash_f"], ["walk_f", "dash_f"]];
        delay_frames.onEgde = [150, 250, 400, 1000];
        action_1.pos_down = [["squatKick_l", "squatKick"], ["squatKick", "sk_huaxing"]];
        delay_frames.pos_down = [150, 250];
        action_1.pos_up = [["pitch"], ["jump_f"]];
        delay_frames.pos_up = [100, 250];
        action_1.super = [["sk_s_handong", "sk_s_luobing", "sk_s_xiangdong"], ["sk_s_handong", "sk_s_luobing"]];
        delay_frames.super = [250, 700];
        action_1.busrt = [["sk_s_storm", "sk_s_luanren"]];
        delay_frames.busrt = [500];
    } // End of the function
} // End of Class
