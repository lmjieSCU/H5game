class Type2_K_AI_Lv3 extends Type2_K_AI
{
    var combo_rate0, attack_rate0, hold_rate0, attack_s0, wait_frame0, combo_risk, dis_array, skill_dis, skill2_dis, dis_num, combo_1, combo_land, combo_auto, combo_burst, delay_frames, combo_oppOnEgde, action_1;
    function Type2_K_AI_Lv3()
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
        dis_array[2] = 200;
        dis_array[3] = 250;
        dis_array[4] = 300;
        dis_array[5] = 400;
        dis_array[6] = 1000;
        skill_dis[0] = ["punch_l", "punch_s1", "kick_l", "kick_s2", "sk_dfp", "walk_f"];
        skill_dis[1] = ["squatKick", "sk_dfp", "sk_fdfp", "sk_fdfp2", "heavyHit"];
        skill_dis[2] = ["sk_dfp", "sk_fdfp", "jump_f"];
        skill_dis[3] = ["sk_dfp", "sk_dfk", "walk_f", "jump_f"];
        skill_dis[4] = ["sk_dfp", "sk_dbp", "sk_dfk", "sk_dbk_2", "walk_f", "dash_f", "jump_f"];
        skill_dis[5] = ["sk_dfp", "sk_dbp", "dash_f", "dash_f"];
        skill_dis[6] = ["sk_dfp", "dash_f", "dash_f"];
        skill2_dis[0] = ["punch", "kick"];
        skill2_dis[1] = ["kick", "squatKick", "sk_dfp", "sk_fdfp"];
        skill2_dis[2] = ["sk_dfk", "sk_dbk_2", "jump_f"];
        skill2_dis[3] = ["sk_dfk", "sk_dbk_2", "jump_f"];
        skill2_dis[4] = ["sk_dfk", "sk_dbk_2", "dash_f"];
        skill2_dis[5] = ["sk_dbk_2", "dash_f"];
        skill2_dis[6] = ["sk_dbk_2", "dash_f"];
        dis_num = dis_array.length;
    } // End of the function
    function combo_init()
    {
        combo_1 = new Object();
        combo_land = new Object();
        combo_auto = new Object();
        combo_burst = new Object();
        delay_frames = new Object();
        combo_1.punch = ["sk_dbk_2", "sk_dfp", "sk_fdfp"];
        combo_1.punch2 = ["sk_dfp", "sk_dfp", "sk_dfk", "punch_s1", "kick_s2", "kick_s2", "sk_fdfp", "sk_s1", "sk_menghuti"];
        combo_1.punch_l = ["punch_l", "kick_l", "squatKick_l", "punch"];
        combo_1.kick = ["sk_dbk_2", "sk_dfp"];
        combo_1.kick2 = ["sk_dfp", "sk_dfp", "sk_dfk", "punch_s1", "kick_s2", "kick_s2", "sk_fdfp", "sk_s1", "sk_menghuti"];
        combo_1.kick_s2 = ["sk_dbk_2", "sk_dfp", "sk_dfp", "sk_fdfp", "sk_menghuti"];
        combo_1.squatPunch = ["sk_dfp", "sk_dbk_2"];
        combo_1.squatPunch_l = ["squatPunch_l", "squatKick_l"];
        combo_1.squatKick_l = ["squatKick_l"];
        combo_1.sk_fdfp = ["sk_fdfp_s2"];
        combo_burst.punch2 = ["sk_dfp", "kick_s2", "sk_s1", "sk_menghuti", "sk_liandong", "sk_xiangdong"];
        combo_burst.kick2 = ["sk_dfp", "kick_s2", "sk_s1", "sk_menghuti", "sk_liandong", "sk_xiangdong"];
        combo_burst.kick_s2 = ["sk_dfp"];
        combo_burst.sk_fdfp2 = ["sk_dbk_2"];
        combo_land.jump_f = ["punch", "kick"];
        combo_land.sk_dfp_s3 = ["sk_dbk_2", "sk_s1", "sk_sanduan_2"];
        combo_oppOnEgde.sk_dfp_s3 = [false, false, true];
        combo_1.dash_f = ["roll_f", "attack", "attack", "attack", "attack"];
        delay_frames.dash_f = [120, 150, 200, 250, 300];
        combo_1.walk_f = ["pitch", "punch_l", "kick_l", "jump_f", "dash_f"];
        delay_frames.walk_f = [100, 150, 180, 230, 400];
        combo_1.walk_b = ["punch_l", "kick_l", "jump", "jump_f", "sk_dbk_2"];
        delay_frames.walk_b = [100, 150, 200, 260, 300];
        action_1 = new Object();
        action_1.down = [["dash_b", "roll_b", "jump_b"], ["walk_f", "dash_f"]];
        delay_frames.down = [200, 1000];
        action_1.oppRoll = [["punch_l", "squatPunch_l"], ["squatKick_l", "kick_l"]];
        delay_frames.oppRoll = [150, 300];
        action_1.oppJump = [["sk_fdfp", "sk_fdfp2", "sk_sanduan_2"], ["sk_fdfp", "jump"]];
        delay_frames.oppJump = [150, 300];
        action_1.wander = [["roll_b", "jump_b"], ["wait", "jump_b", "walk_f", "dash_b"], ["dash_f", "wait"]];
        delay_frames.wander = [150, 300, 1000];
        action_1.defend = [["walk_b", "walk_b"], ["walk_b", "roll_b"], ["walk_b", "dash_b", "jump_b", "roll_b"], ["walk_b", "wait"]];
        delay_frames.defend = [130, 200, 400, 1000];
        action_1.defendAttack = [["sk_fdfp", "sk_fdfp2", "sk_menghuti", "hold_u"], ["sk_s1", "hold_u", "hold_u"]];
        delay_frames.defendAttack = [150, 400];
        action_1.defend_f = [["roll_f"], ["hold_u"]];
        delay_frames.defend_f = [150, 1000];
        action_1.defend_h = [["hold_u", "hold_u", "roll_f"], ["hold_u", "roll_b"], ["hold_u"]];
        delay_frames.defend_h = [130, 200, 1000];
        action_1.onEgde = [["attack", "roll_f"], ["attack"], ["attack", "dash_f"], ["walk_f", "dash_f"]];
        delay_frames.onEgde = [150, 250, 400, 1000];
        action_1.pos_down = [["squatKick_l"], ["squatKick"]];
        delay_frames.pos_down = [150, 200];
        action_1.pos_up = [["pitch"], ["jump_f"], ["jump_f"]];
        delay_frames.pos_up = [100, 250, 350];
        action_1.super = [["sk_s1", "sk_menghuti"], ["sk_s1"]];
        delay_frames.super = [200, 500];
        action_1.busrt = [["sk_liandong", "sk_xiangdong"], ["sk_liandong"]];
        delay_frames.busrt = [200, 500];
    } // End of the function
    function actionDefend()
    {
    } // End of the function
} // End of Class
