class Kyo_AI_Lv5 extends Kyo_AI
{
    var combo_rate0, attack_rate0, hold_rate0, attack_s0, wait_frame0, combo_risk, dis_array, skill_dis, skill2_dis, dis_num, combo_1, combo_land, combo_auto, combo_burst, delay_frames, combo_oppOnEgde, action_1;
    function Kyo_AI_Lv5()
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
        skill_dis[0] = ["punch_l", "kick_l", "walk_f", "squatKick", "squatPunch"];
        skill_dis[1] = ["kick_l", "sk1", "sk0", "heavyHit", "sk_hezhai", "squatKick", "squatKick_s"];
        skill_dis[2] = ["kick_l", "sk15", "sk19", "jump_f"];
        skill_dis[3] = ["sk19", "sk2", "sk15", "jump_f", "walk_f"];
        skill_dis[4] = ["sk19", "sk2", "dash_f", "jump_f"];
        skill_dis[5] = ["dash_f", "dash_f", "sk15"];
        skill_dis[6] = ["dash_f", "dash_f", "walk_f"];
        skill2_dis[0] = ["punch", "kick", "squatPunch"];
        skill2_dis[1] = ["kick", "squatKick", "squatKick_s"];
        skill2_dis[2] = ["sk15", "sk28", "jump_f"];
        skill2_dis[3] = ["sk15", "sk19", "sk2", "sk28", "jump_f"];
        skill2_dis[4] = ["sk2", "sk28", "jump_f"];
        skill2_dis[5] = ["sk28", "dash_f"];
        skill2_dis[6] = ["dash_f"];
        dis_num = dis_array.length;
    } // End of the function
    function combo_init()
    {
        combo_1 = new Object();
        combo_land = new Object();
        combo_auto = new Object();
        combo_burst = new Object();
        delay_frames = new Object();
        combo_oppOnEgde = new Object();
        combo_1.sk15 = ["sk16"];
        combo_1.sk16 = ["sk17"];
        combo_1.sk19 = ["sk20", "sk21_2"];
        combo_1.sk20 = ["sk21", "sk14"];
        combo_1.sk21 = ["sk13"];
        combo_1.sk21_2 = ["sk13"];
        combo_auto.sk1 = ["sk1_2"];
        combo_1.punch = ["sk15", "sk19"];
        combo_1.punch2 = ["kick2", "sk1", "sk15", "sk19", "sk28"];
        combo_1.kick = ["sk15", "sk19"];
        combo_1.kick1 = ["sk1", "sk15", "sk19", "sk28", "sk29", "sk31"];
        combo_1.kick2 = ["sk1", "sk15", "sk19", "sk28", "sk29", "sk31"];
        combo_1.squatPunch = ["squatKick_s", "sk1", "sk15", "sk19", "sk28", "sk29"];
        combo_land.sk1_2 = ["sk15", "sk19", "sk0", "sk2", "heavyHit", "sk31"];
        delay_frames.sk1_2 = [1, 3, 0, 2, 0, 2];
        combo_land.jump_f = ["punch", "kick", "kick2"];
        combo_land.punch_l = ["punch_l", "kick_l", "squatKick_l", "punch"];
        combo_land.squatKick_l = ["squatKick_l", "squatKick_s", "kick2"];
        combo_land.squatPunch_l = ["squatPunch_l", "squatKick_l", "squatKick_s", "kick2"];
        combo_1.dash_f = ["roll_f", "punch", "attack", "jump_f", "attack"];
        delay_frames.dash_f = [120, 150, 200, 250, 300];
        combo_1.walk_f = ["pitch", "punch", "kick_l", "jump_f", "dash_f"];
        delay_frames.walk_f = [100, 120, 180, 230, 400];
        combo_1.walk_b = ["punch", "kick", "kick_l", "jump_f", "sk15", "sk19"];
        delay_frames.walk_b = [100, 100, 180, 260, 300, 250];
        combo_burst.heavyHit = ["sk29", "sk31", "sk3"];
        combo_burst.sk15 = ["sk16", "sk16", "sk19", "sk28", "sk1"];
        combo_burst.sk16 = ["sk19", "sk19", "sk1", "heavyHit", "sk28", "sk29", "sk31"];
        combo_burst.sk19 = ["sk20", "sk20", "heavyHit", "sk1", "sk28"];
        combo_burst.sk20 = ["sk1", "heavyHit", "sk29", "sk31", "sk3"];
        combo_burst.sk28 = ["sk29", "sk31", "sk3"];
        combo_oppOnEgde.sk28 = [true, true, true];
        combo_burst.sk29 = ["sk31", "sk3", "sk0", "sk_s3"];
        combo_burst.sk31 = ["sk29", "sk3", "sk0", "sk_s3"];
        combo_oppOnEgde.sk31 = [true, true, true, true];
        action_1 = new Object();
        action_1.down = [["dash_b", "roll_b", "jump_b"], ["walk_f", "dash_f"]];
        delay_frames.down = [200, 1000];
        action_1.oppRoll = [["punch_l", "squatPunch_l"], ["squatKick_l", "kick_l"]];
        delay_frames.oppRoll = [150, 300];
        action_1.oppJump = [["sk0", "squatPunch"], ["sk0", "sk2"], ["sk2"]];
        delay_frames.oppJump = [150, 300, 400];
        action_1.wander = [["roll_b", "jump_b"], ["wait", "jump_b", "walk_f"], ["dash_f", "wait"]];
        delay_frames.wander = [150, 300, 1000];
        action_1.defend = [["walk_b", "walk_b", "roll_f"], ["walk_b", "roll_b"], ["walk_b", "dash_b", "jump_b", "roll_b"], ["walk_b", "wait"]];
        delay_frames.defend = [130, 200, 400, 1000];
        action_1.defendAttack = [["sk_hezhai", "sk0", "hold_u", "hold_u"]];
        delay_frames.defendAttack = [150];
        action_1.defend_f = [["roll_f"], ["hold_u"]];
        delay_frames.defend_f = [150, 1000];
        action_1.defend_h = [["hold_u", "hold_u", "roll_f"], ["hold_u", "roll_b"], ["hold_u"]];
        delay_frames.defend_h = [130, 200, 1000];
        action_1.onEgde = [["attack", "roll_f"], ["attack"], ["attack"], ["walk_f", "dash_f"]];
        delay_frames.onEgde = [150, 250, 400, 1000];
        action_1.pos_down = [["squatKick_l", "squatKick_s"], ["squatKick", "squatKick_s"]];
        delay_frames.pos_down = [150, 200];
        action_1.pos_up = [["pitch"], ["kick2"], ["jump_f"]];
        delay_frames.pos_up = [100, 150, 250];
        action_1.super = [["sk29", "sk31"], ["sk31"]];
        delay_frames.super = [180, 250];
        action_1.busrt = [["sk3"], ["sk_s3"]];
        delay_frames.busrt = [250, 400];
    } // End of the function
} // End of Class
