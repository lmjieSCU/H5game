class Type2_Iori_AI_Lv5 extends Type2_Iori_AI
{
    var combo_rate0, attack_rate0, hold_rate0, attack_s0, wait_frame0, combo_risk, dis_array, skill_dis, dis_num, combo_1, combo_land, combo_auto, combo_burst, delay_frames, action_1;
    function Type2_Iori_AI_Lv5()
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
        dis_array[2] = 200;
        dis_array[3] = 250;
        dis_array[4] = 300;
        dis_array[5] = 400;
        dis_array[6] = 1000;
        skill_dis[0] = ["punch_l", "punch_s1", "kick_l", "dash_f", "kick_l", "squatPunch", "walk_f", "sk_CChun", "sk_YTao"];
        skill_dis[1] = ["sk_CYue", "sk_MNiao", "sk_YTao", "punch_l", "dash_f"];
        skill_dis[2] = ["sk_CYue", "sk_MNiao", "sk_YTao", "walk_f"];
        skill_dis[3] = ["jump_f", "walk_f", "sk_YTao", "dash_f", "sk5_1", "dash_b"];
        skill_dis[4] = ["sk_MNiao", "walk_f", "dash_f", "jump_f"];
        skill_dis[5] = ["dash_f", "dash_f", "sk_YJue"];
        skill_dis[6] = ["dash_f", "dash_f", "roll_f"];
        dis_num = dis_array.length;
    } // End of the function
    function combo_init()
    {
        combo_1 = new Object();
        combo_land = new Object();
        combo_auto = new Object();
        combo_burst = new Object();
        delay_frames = new Object();
        combo_1.punch_s1 = ["punch_s2"];
        combo_1.punch_s2 = ["sk_YJue", "sk_MNiao", "sk_s1xiii"];
        combo_1.kick_s2 = ["punch_s1", "punch", "sk_CChun", "sk_s1xiii"];
        combo_1.squatPunch = ["punch_s1", "sk_s1xiii", "sk_CChun", "sk_MNiao", "sk_YTao", "sk_CYue"];
        combo_1.punch = ["sk_MNiao", "sk_CYue"];
        combo_1.punch2 = ["sk_CChun", "sk_MNiao", "sk_CYue"];
        combo_1.kick = ["sk_MNiao", "sk_YJue"];
        combo_1.kick2 = ["sk_MNiao", "sk_CChun", "sk_YJue", "sk_YTao", "sk_s1xiii"];
        combo_land.punch_l = ["punch_l", "kick_l", "squatKick_l", "punch_s1"];
        combo_land.squatKick_l = ["squatKick_l", "punch_s1"];
        combo_land.squatPunch_l = ["squatPunch_l", "squatKick_l", "punch_s1"];
        combo_1.sk5_1 = ["sk_CChun", "sk_MNiao", "sk_YTao", "sk_s1xiii", "sk_8ZW"];
        combo_1.sk_CChun = ["sk5_1", "sk_YJue", "sk_CYue", "sk_sixiii", "sk_8ZW", "sk_8ZW", "sk_YTao"];
        combo_1.sk_YTao = ["sk_MNiao", "sk5_1", "sk_s1xiii", "sk_8ZW", "sk_8ZW"];
        combo_burst.punch = ["sk5_1", "sk_s1xiii", "sk_8ZW", "sk_s_zhuangqiang"];
        combo_burst.punch2 = ["sk_YTao", "sk_s1xiii", "sk_8ZW", "sk_s_zhuangqiang"];
        combo_burst.kick2 = ["sk_CYue", "sk_s1xiii", "sk_8ZW", "sk_s_zhuangqiang"];
        combo_burst.heavyHit = ["sk_s1xiii", "sk_s_qianzai1", "sk_s_zhuangqiang"];
        combo_burst.sk_hang = ["sk_CChun", "sk_MNiao", "sk_YTao", "sk_s1xiii", "sk_8ZW"];
        combo_burst.sk_YTao = ["sk_MNiao", "sk_CChun", "sk5_1", "sk_s1xiii", "sk_8ZW"];
        combo_burst.sk_CChun = ["sk_s1xiii", "sk_s1xiii", "sk_s_qianzai1", "sk_YTao", "sk_s_zhuangqiang", "sk_8ZW", "sk_8ZW", "sk_8ZW"];
        combo_burst.sk_YJue = ["sk_CYue", "sk_s1xiii", "sk_8ZW"];
        combo_burst.sk_s1xiii = ["sk_8ZW", "sk_8ZW", "sk_8ZW", "sk_s_qianzai1", "sk_s_zhuangqiang"];
        combo_1.dash_f = ["roll_f", "attack", "attack", "attack", "attack"];
        delay_frames.dash_f = [120, 150, 200, 250, 300];
        combo_1.walk_f = ["pitch", "punch_l", "kick_l", "punch_s1", "jump_f", "dash_f"];
        delay_frames.walk_f = [100, 120, 120, 180, 230, 400];
        combo_1.walk_b = ["punch_l", "kick_l", "punch_s1", "jump", "jump_f"];
        delay_frames.walk_b = [130, 130, 180, 260, 300];
        combo_land.jump_f = ["punch", "kick", "punch_s1", "kick_s2", "kick_l"];
        combo_land.sk_CChun = ["sk5_1", "sk_YTao", "sk_YJue", "sk_s1xiii", "sk_8ZW"];
        action_1 = new Object();
        action_1.down = [["dash_b", "roll_b", "jump_b"], ["walk_f", "dash_f"]];
        delay_frames.down = [200, 1000];
        action_1.oppRoll = [["punch_l", "squatPunch_l"], ["squatKick_l", "kick_l"]];
        delay_frames.oppRoll = [150, 300];
        action_1.oppJump = [["sk_YTao"], ["sk_CYue", "jump"], ["sk_8ZW"]];
        delay_frames.oppJump = [150, 300, 350];
        action_1.wander = [["roll_b", "dash_b"], ["jump_b", "walk_f", "dash_b"], ["dash_f"]];
        delay_frames.wander = [150, 300, 1000];
        action_1.defend = [["walk_b", "walk_b", "roll_f"], ["walk_b", "roll_b"], ["walk_b", "dash_b", "jump_b", "roll_b"], ["walk_b"]];
        delay_frames.defend = [130, 200, 400, 1000];
        action_1.defendAttack = [["hold_u", "sk_CYue", "sk_YTao", "sk_s1xiii"], ["hold_u", "sk_YJue"]];
        delay_frames.defendAttack = [150, 250];
        action_1.defend_f = [["roll_f"], ["hold_u"]];
        delay_frames.defend_f = [150, 1000];
        action_1.defend_h = [["hold_u", "hold_u", "roll_f"], ["hold_u", "roll_b"], ["hold_u"]];
        delay_frames.defend_h = [130, 200, 1000];
        action_1.onEgde = [["attack", "roll_f", "kick_s1"], ["attack"], ["attack", "dash_f"], ["walk_f", "dash_f"]];
        delay_frames.onEgde = [150, 250, 400, 1000];
        action_1.pos_down = [["squatKick_l"], ["squatKick"]];
        delay_frames.pos_down = [150, 200];
        action_1.pos_up = [["pitch"], ["sk_hang"], ["jump_f"]];
        delay_frames.pos_up = [100, 150, 250];
    } // End of the function
} // End of Class
