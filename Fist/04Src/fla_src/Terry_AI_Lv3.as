class Terry_AI_Lv3 extends Terry_AI
{
    var combo_rate0, attack_rate0, hold_rate0, attack_s0, wait_frame0, combo_risk, dis_array, skill_dis, skill2_dis, dis_num, combo_1, combo_land, combo_auto, combo_burst, delay_frames, combo_oppOnEgde, action_1;
    function Terry_AI_Lv3()
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
        skill_dis[0] = ["punch_l", "kick_l", "kick", "f_p", "walk_f"];
        skill_dis[1] = ["squatKick", "punch_l", "kick_l", "kick", "f_p", "df_ph", "heavyHit"];
        skill_dis[2] = ["db_k", "df_k_EX", "df_p_EX", "jump_f"];
        skill_dis[3] = ["walk_f", "dash_f", "jump_f"];
        skill_dis[4] = ["dash_f", "walk_f"];
        skill_dis[5] = ["dash_f", "walk_f"];
        skill2_dis[0] = ["punch", "punch", "kick"];
        skill2_dis[1] = ["squatKick", "kick"];
        skill2_dis[2] = ["dbdf_p", "dfdf_k", "jump_f"];
        skill2_dis[3] = ["jump_f"];
        skill2_dis[4] = ["db_p", "dash_f"];
        skill2_dis[5] = ["db_p", "dash_f"];
        dis_num = dis_array.length;
    } // End of the function
    function combo_init()
    {
        combo_1 = new Object();
        combo_land = new Object();
        combo_auto = new Object();
        combo_burst = new Object();
        delay_frames = new Object();
        combo_1.punch = ["df_k_EX", "fdf_p", "db_p", "db_k", "fdf_kl", "dfdf_k", "dbdf_p"];
        combo_1.punch2 = ["f_p", "f_p", "f_p", "df_k_EX", "fdf_p", "fdf_kl", "dfdf_k", "dbdf_p"];
        combo_1.punch_l = ["punch", "kick", "kick_l"];
        combo_1.kick_l = ["punch", "kick"];
        combo_1.f_p = ["df_k_EX", "fdf_p", "db_p", "db_k", "fdf_kl", "dfdf_k", "dbdf_p"];
        combo_1.kick = ["df_k_EX", "fdf_p", "db_p", "db_k", "fdf_kl", "dfdf_k", "dbdf_p"];
        combo_1.kick2 = ["f_p", "f_p", "f_p", "df_k_EX", "fdf_p", "fdf_kl", "dfdf_k", "dbdf_p"];
        combo_1.squatPunch = ["df_k_EX", "fdf_p", "db_p", "db_k", "fdf_kl", "dfdf_k", "dbdf_p"];
        combo_1.squatKick_l = ["punch_l"];
        combo_1.squatPunch_l = ["punch_l", "squatKick_l"];
        combo_1.df_k_EX = ["fdf_p", "db_p", "db_k", "fdf_kl", "dfdf_k", "dbdf_p"];
        combo_land.jump_f = ["punch", "kick"];
        combo_burst.punch2 = ["f_p", "df_k_EX", "dfdf_k", "dbdf_p", "df_o", "db_o"];
        combo_burst.punch2 = ["df_k_EX", "dfdf_k", "dbdf_p", "df_o", "db_o"];
        combo_burst.kick2 = ["df_k_EX", "dfdf_k", "dbdf_p", "df_o", "db_o"];
        combo_burst.squatPunch = combo_burst.punch2;
        combo_burst.df_k_EX = ["dbdf_p", "dfdf_k", "df_o"];
        combo_burst.dbdf_p = ["dfdf_k", "df_o"];
        combo_burst.dbdf_k = ["dfdf_p", "df_o"];
        combo_oppOnEgde.dbdf_p = [true, true];
        combo_oppOnEgde.dbdf_k = [true, true];
        combo_1.dash_f = ["squatKick_l", "squatPunch_l", "roll_f", "jump_f"];
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
        action_1.wander = [["roll_b", "jump_b"], ["wait", "jump_b", "walk_f", "dash_b"], ["dash_f", "wait"]];
        delay_frames.wander = [150, 300, 1000];
        action_1.defend = [["walk_b", "walk_b"], ["walk_b", "roll_b"], ["walk_b", "dash_b", "jump_b", "roll_b"], ["walk_b", "wait"]];
        delay_frames.defend = [130, 200, 400, 1000];
        action_1.defend_f = [["roll_f"], ["hold_u"]];
        delay_frames.defend_f = [150, 1000];
        action_1.defend_h = [["hold_u", "hold_u", "roll_f"], ["hold_u", "roll_b"], ["hold_u"]];
        delay_frames.defend_h = [130, 200, 1000];
        action_1.onEgde = [["attack", "roll_f"], ["attack"], ["attack", "dash_f"], ["walk_f", "dash_f"]];
        delay_frames.onEgde = [150, 250, 400, 1000];
        action_1.pos_down = [["squatKick_l", "squatKick"], ["squatKick"]];
        delay_frames.pos_down = [150, 250];
        action_1.pos_up = [["pitch"], ["jump_f"]];
        delay_frames.pos_up = [100, 250];
        action_1.oppJump = [["fdf_p", "walk_b", "dbdf_p"], ["dbdf_p", "db_o", "jump"]];
        delay_frames.oppJump = [200, 300];
        action_1.defendAttack = [["fdf_p", "dfdf_k", "dbdf_p", "db_o"], ["df_o"]];
        delay_frames.defendAttack = [200, 400];
        action_1.super = [["dfdf_k", "dbdf_p"], ["dfdf_k"]];
        delay_frames.super = [200, 300];
        action_1.busrt = [["df_o", "db_o"], ["df_o"]];
        delay_frames.busrt = [200, 350];
    } // End of the function
    function actionDefend()
    {
    } // End of the function
} // End of Class
