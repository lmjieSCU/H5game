class Type2_Chunli_AI_Lv2 extends Type2_Chunli_AI
{
    var combo_rate0, attack_rate0, hold_rate0, attack_s0, wait_frame0, combo_risk, dis_array, skill_dis, skill2_dis, dis_num, combo_1, combo_land, combo_auto, combo_burst, delay_frames, action_1;
    function Type2_Chunli_AI_Lv2()
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
        skill_dis[0] = ["sk_bo2", "punch_l", "kick_s1", "kick_l", "kick", "walk_f"];
        skill_dis[1] = ["sk_bo2", "squatKick", "punch_l", "kick_l", "kick", "heavyHit", "sk_huixuan2", "sk_bailietui2"];
        skill_dis[2] = ["sk_xuanyuan", "jump_f"];
        skill_dis[3] = ["walk_f", "dash_f", "jump_f"];
        skill_dis[4] = ["dash_f", "walk_f"];
        skill_dis[5] = ["dash_f", "walk_f"];
        skill2_dis[0] = ["sk_bailietui2", "sk_bo2", "punch", "punch", "kick"];
        skill2_dis[1] = ["sk_bo2", "squatKick", "kick"];
        skill2_dis[2] = ["sk_huixuan2", "sk_xuanyuan", "jump_f"];
        skill2_dis[3] = ["jump_f"];
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
        combo_1.punch = ["sk_bailietui2", "sk_huixuan2", "sk_xuanyuan", "sk_bo2", "sk_huixuan2"];
        combo_1.punch2 = ["sk_bailietui2", "sk_huixuan2", "sk_xuanyuan", "sk_bo2", "sk_s_bo2", "sk_s_qianlie_air"];
        combo_1.punch_l = ["punch", "kick", "kick_l"];
        combo_1.kick_l = ["punch", "kick"];
        combo_1.kick = ["sk_bailietui2", "sk_huixuan2", "sk_xuanyuan", "sk_huixuan2"];
        combo_1.kick2 = ["sk_bailietui2", "sk_huixuan2", "sk_xuanyuan", "sk_huixuan2", "sk_s_bo2", "sk_s_qianlie_air"];
        combo_1.squatPunch = ["sk_huixuan2", "sk_xuanyuan", "sk_bailietui2", "sk_huixuan2"];
        combo_1.squatKick_l = ["punch_l"];
        combo_1.squatPunch_l = ["punch_l", "squatKick_l"];
        combo_land.jump_f = ["punch", "kick"];
        combo_burst.punch2 = ["sk_bailietui2", "sk_huixuan2", "sk_huixuan2", "sk_s_bo2", "sk_s_qianlie_air", "sk_s_zuhe", "sk_s_tianxing"];
        combo_burst.squatPunch = combo_burst.punch2;
        combo_burst.sk_bailietui2 = ["sk_xuanyuan", "sk_huixuan2", "sk_huixuan2", "sk_s_bo2", "sk_s_qianlie_air", "sk_s_zuhe", "sk_s_tianxing"];
        combo_burst.sk_s_bo2 = ["sk_bailietui2", "sk_s_qianlie_air", "sk_s_zuhe", "sk_s_tianxing"];
        combo_land.sk_huixuan2 = ["sk_s_qianlie_air"];
        combo_1.dash_f = [["sk_bailietui2", "squatPunch_l"], "squatKick_l", "sk_bo2", "roll_f", "jump_f"];
        delay_frames.dash_f = [130, 140, 150, 250, 300];
        combo_1.walk_f = [["sk_bailietui2", "sk_bo2", "pitch"], "punch_l", "kick", "jump_f", "dash_f"];
        delay_frames.walk_f = [100, 150, 180, 250, 400];
        combo_1.walk_b = [["sk_bailietui2", "sk_bo2", "punch_l"], "kick", "jump", "jump_f"];
        delay_frames.walk_b = [100, 150, 200, 260];
        action_1 = new Object();
        action_1.down = [["dash_b", "roll_b", "jump_b"], ["walk_f", "dash_f"]];
        delay_frames.down = [200, 1000];
        action_1.oppRoll = [["punch_l", "squatPunch_l"], ["squatKick_l", "kick_l"]];
        delay_frames.oppRoll = [150, 300];
        action_1.oppJump = [["sk_huixuan2", "walk_b", "sk_s_qianlie_air"], ["sk_huixuan2", "sk_s_qianlie_air", "jump"]];
        delay_frames.oppJump = [150, 250];
        action_1.wander = [["roll_b", "jump_b"], ["wait", "jump_b", "walk_f", "dash_b"], ["dash_f", "wait"]];
        delay_frames.wander = [150, 300, 1000];
        action_1.defend = [["walk_b", "walk_b"], ["walk_b", "roll_b"], ["walk_b", "dash_b", "jump_b", "roll_b"], ["walk_b", "wait"]];
        delay_frames.defend = [130, 200, 400, 1000];
        action_1.defendAttack = [["sk_s_bo2", "sk_s_qianlie_air"]];
        delay_frames.defendAttack = [200];
        action_1.defend_f = [["roll_f"], ["hold_u"]];
        delay_frames.defend_f = [150, 1000];
        action_1.defend_h = [["hold_u", "hold_u", "roll_f"], ["hold_u", "roll_b"], ["hold_u"]];
        delay_frames.defend_h = [130, 200, 1000];
        action_1.onEgde = [["attack", "roll_f"], ["attack"], ["attack", "dash_f"], ["walk_f", "dash_f"]];
        delay_frames.onEgde = [150, 250, 400, 1000];
        action_1.pos_down = [["squatKick_l", "squatKick"], ["squatKick"]];
        delay_frames.pos_down = [150, 250];
        action_1.pos_up = [["pitch", "kick_s1"], ["jump_f", "kick_s1"]];
        delay_frames.pos_up = [100, 250];
        action_1.super = [["sk_s_bo2", "sk_s_qianlie_air"]];
        delay_frames.super = [250];
        action_1.busrt = [["sk_s_zuhe", "sk_s_tianxing"], ["sk_s_zuhe"]];
        delay_frames.busrt = [200, 250];
    } // End of the function
} // End of Class
