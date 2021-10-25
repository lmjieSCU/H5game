class Orochi_AI_Lv2 extends Orochi_AI
{
    var combo_rate0, attack_rate0, hold_rate0, attack_s0, wait_frame0, combo_risk, dis_array, skill_dis, dis_num, combo_1, combo_land, combo_auto, combo_burst, delay_frames, action_1, actionType, cpu_attack, cpu_control2;
    function Orochi_AI_Lv2()
    {
        super();
        this.skill_init();
        this.combo_init();
        combo_rate0 = 30;
        attack_rate0 = 40;
        hold_rate0 = 40;
        attack_s0 = 15;
        wait_frame0 = 25;
        combo_risk = 50;
    } // End of the function
    function skill_init()
    {
        dis_array[0] = 100;
        dis_array[1] = 150;
        dis_array[2] = 200;
        dis_array[3] = 300;
        dis_array[4] = 1000;
        skill_dis[0] = ["punch_l", "kick_l", "kick"];
        skill_dis[1] = ["punch", "kick_l", "kick", "squatPunch", "heavyHit"];
        skill_dis[2] = ["kick", "sk_dfp", "sk_dfk_l", "sk_dbp"];
        skill_dis[3] = ["sk_dfp", "sk_dfk_l", "dash_f", "walk_f", "jump_f"];
        skill_dis[4] = ["sk_dfp", "sk_dfk", "walk_f", "dash_f"];
        dis_num = dis_array.length;
    } // End of the function
    function combo_init()
    {
        combo_1 = new Object();
        combo_land = new Object();
        combo_auto = new Object();
        combo_burst = new Object();
        delay_frames = new Object();
        combo_1.punch = ["sk_dfp", "sk_dbp_l", "sk_dfk_l", "sk_s_guangzhu", "sk_s_yangguang"];
        combo_1.kick_l = ["sk_dfp", "sk_dbp_l", "sk_dfk_l", "sk_s_guangzhu", "sk_s_yangguang"];
        combo_1.kick = ["sk_dfp", "sk_dfk_l", "sk_s_guangzhu", "sk_s_yangguang"];
        combo_1.sk_dfp = ["sk_s_guangzhu", "sk_s_yangguang"];
        combo_land.jump_f = ["kick"];
        combo_burst.punch = ["sk_dfp", "sk_dbp_l", "sk_dfk_l", "sk_s_guangzhu", "sk_s_yangguang", "sk_s_taoxin", "sk_s_qianshou1", "sk_s_qianshou1", "sk_s_qianshou1"];
        combo_burst.kick_l = ["sk_dfp", "sk_dbp_l", "sk_dfk_l", "sk_s_guangzhu", "sk_s_yangguang", "sk_s_taoxin", "sk_s_qianshou1", "sk_s_qianshou1", "sk_s_qianshou1"];
        combo_burst.kick = ["sk_dfp", "sk_dbp_l", "sk_dfk_l", "sk_s_guangzhu", "sk_s_yangguang", "sk_s_taoxin"];
        combo_burst.sk_dfp = ["sk_s_guangzhu", "sk_s_yangguang", "sk_s_taoxin"];
        combo_burst.sk_dbp_l = ["sk_s_guangzhu", "sk_s_yangguang", "sk_s_taoxin"];
        combo_burst.sk_dbp = ["sk_s_guangzhu", "sk_s_yangguang", "sk_s_taoxin"];
        combo_burst.sk_dfk = ["sk_s_guangzhu", "sk_s_yangguang", "sk_s_taoxin"];
        combo_burst.sk_dfk_l = ["sk_s_guangzhu", "sk_s_yangguang", "sk_s_taoxin"];
        combo_1.dash_f = ["punch", "kick", "roll_f", "jump_f"];
        delay_frames.dash_f = [120, 150, 120, 200];
        combo_1.walk_f = ["pitch", "punch", "kick", "jump_f"];
        delay_frames.walk_f = [100, 150, 180, 230];
        combo_1.walk_b = ["punch", "kick", "jump", "jump_f"];
        delay_frames.walk_b = [100, 150, 200, 260];
        action_1 = new Object();
        action_1.down = [["dash_b", "roll_b", "jump_b"], ["walk_f", "dash_f"]];
        delay_frames.down = [200, 1000];
        action_1.oppRoll = [["punch_l"], ["kick_l"]];
        delay_frames.oppRoll = [150, 300];
        action_1.oppJump = [["sk_dbp_l", "kick"], ["sk_dbp"]];
        delay_frames.oppJump = [150, 300];
        action_1.wander = [["walk_f", "dash_f", "roll_b"], ["dash_f", "wait"]];
        delay_frames.wander = [300, 1000];
        action_1.defend = [["walk_b", "roll_b"], ["walk_b", "dash_b", "jump_b", "roll_b"], ["walk_b", "wait"]];
        delay_frames.defend = [200, 400, 1000];
        action_1.defendAttack = [["sk_dbp", "sk_s_qianshou1"], ["sk_s_yangguang", "sk_s_taoxin"]];
        delay_frames.defendAttack = [150, 600];
        action_1.defend_f = [["roll_f"], ["hold_u"]];
        delay_frames.defend_f = [150, 1000];
        action_1.defend_h = [["hold_u", "hold_u", "roll_f"], ["hold_u", "roll_b"], ["hold_u"]];
        delay_frames.defend_h = [130, 200, 1000];
        action_1.onEgde = [["attack", "roll_f"], ["jump_f", "attack", "attack"], ["attack", "dash_f"], ["walk_f", "dash_f"]];
        delay_frames.onEgde = [150, 250, 400, 1000];
        action_1.pos_down = [["squatPunch", "pitch"], ["squatPunch"]];
        delay_frames.pos_down = [150, 200];
        action_1.pos_up = [["pitch", "kick_l"], ["jump_f", "kick_l"]];
        delay_frames.pos_up = [100, 250];
        action_1.super = [["sk_s_guangzhu", "sk_s_yangguang"]];
        delay_frames.super = [600];
        (action_1.busrt = [["sk_s_qianshou1", "sk_s_taoxin"]]);
        [["sk_s_taoxin"]];
        delay_frames.busrt = [150, 600];
    } // End of the function
    function checkStrage()
    {
        actionType = "attack";
        cpu_control2 = cpu_attack;
    } // End of the function
} // End of Class
