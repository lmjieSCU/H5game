﻿class Ryo_AI_Lv4 extends Ryo_AI
{
    var combo_rate0, attack_rate0, hold_rate0, attack_s0, wait_frame0, combo_risk, dis_array, skill_dis, skillObj, dis_num, combo_1, combo_land, combo_auto, combo_burst, delay_frames, action_1;
    function Ryo_AI_Lv4()
    {
        super();
        this.skill_init();
        this.combo_init();
        combo_rate0 = 80;
        attack_rate0 = 70;
        hold_rate0 = 100;
        attack_s0 = 50;
        wait_frame0 = 10;
        combo_risk = 40;
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
        skill_dis[0] = ["punch", "punch_l", "kick_l", "kick", "walk_f", "squatKick", "squatPunch", "sk14"];
        skill_dis[1] = ["kick", "sk2", skillObj.toAir, "squatKick", "sk14", skillObj.heavyHit];
        skill_dis[2] = ["kick", "sk2", "jump_f"];
        skill_dis[3] = ["sk1", "sk2", "jump_f"];
        skill_dis[4] = ["sk1", "sk2", "dash_f", "jump_f"];
        skill_dis[5] = ["dash_f", "walk_f", "sk1"];
        skill_dis[6] = ["dash_f", "sk1"];
        dis_num = dis_array.length;
    } // End of the function
    function combo_init()
    {
        combo_1 = new Object();
        combo_land = new Object();
        combo_auto = new Object();
        combo_burst = new Object();
        delay_frames = new Object();
        combo_1.punch = ["kick1", "kick2", "sk1", "sk2", skillObj.toAir, "sk10", "squatKick"];
        combo_1.punch2 = ["kick1", "kick2", "sk1", "sk2", skillObj.toAir, "sk10", "sk14", "squatKick"];
        combo_1.kick = ["sk1", "sk2"];
        combo_1.kick2 = ["sk1", "sk2", skillObj.toAir, "sk10", "sk14"];
        combo_1.squatPunch = ["sk1", "sk2", "sk10", "sk14"];
        combo_land.kick1 = ["squatKick", "sk1", "sk2", skillObj.toAir, "sk14"];
        combo_land.jump_f = ["punch", "kick", "squatPunch", "squatKick"];
        combo_land.punch_l = ["punch_l", "kick_l"];
        combo_land.squatKick_l = ["squatKick_l"];
        combo_land.squatPunch_l = ["squatPunch_l", "squatKick_l"];
        combo_1.dash_f = ["punch", "kick1", "jump_f", "jump_f"];
        delay_frames.dash_f = [120, 150, 120, 230, 300];
        combo_1.walk_f = ["pitch", "punch", "kick_l", "jump_f", "dash_f"];
        delay_frames.walk_f = [100, 120, 180, 230, 400];
        combo_1.walk_b = ["punch", "kick", "kick_l", "jump_f"];
        delay_frames.walk_b = [100, 100, 180, 260, 300, 250];
        combo_burst.sk2 = ["sk1", "sk3", "sk10", "sk14"];
        combo_burst.sk3 = ["sk4"];
        action_1 = new Object();
        action_1.down = [["walk_b", "jump_b", "dash_b"], ["walk_b"], ["walk_f", "dash_f"]];
        delay_frames.down = [200, 400, 1000];
        action_1.oppRoll = [["punch_l", "squatPunch_l"], ["squatKick_l", "kick_l"]];
        delay_frames.oppRoll = [150, 300];
        action_1.oppJump = [[skillObj.toAir, "squatPunch"], [skillObj.toAir]];
        delay_frames.oppJump = [150, 300];
        action_1.wander = [["walk_b", "jump_b"], ["wait", "jump_b", "walk_f"], ["walk_f", "dash_f", "wait", skillObj.flyingObj]];
        delay_frames.wander = [150, 300, 1000];
        action_1.defend = [["walk_b"], ["walk_b", "jump_b"], ["walk_b", skillObj.flyingObj], ["walk_b", "wait", skillObj.flyingObj]];
        delay_frames.defend = [130, 200, 400, 1000];
        action_1.defendAttack = [[skillObj.toAir, skillObj.heavyHit], [skillObj.heavyHit]];
        delay_frames.defendAttack = [150, 200];
        action_1.defend_f = [["hold_u"], ["hold_u"]];
        delay_frames.defend_f = [150, 1000];
        action_1.defend_h = [["hold_u"], ["hold_u"], ["hold_u"]];
        delay_frames.defend_h = [130, 200, 1000];
        action_1.onEgde = [["attack", "jump_f"], ["jump_f", "attack", "attack"], ["attack"], ["walk_f", "dash_f"]];
        delay_frames.onEgde = [150, 250, 400, 1000];
        action_1.pos_down = [["squatKick_l", "squatKick"], ["squatKick"]];
        delay_frames.pos_down = [150, 200];
        action_1.pos_up = [["pitch"], ["kick2"], ["jump_f"]];
        delay_frames.pos_up = [100, 150, 250];
        action_1.super = [["sk14"], ["sk10"]];
        delay_frames.super = [160, 300];
        action_1.busrt = [["burst_ad"], ["burst_a"]];
        delay_frames.busrt = [180, 600];
    } // End of the function
} // End of Class
