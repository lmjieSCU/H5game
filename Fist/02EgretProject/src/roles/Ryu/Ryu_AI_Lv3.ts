class Ryu_AI_Lv3 extends Ryu_AI
{
    constructor()
    {
        super();
        this.skill_init();
        this.combo_init();
        this.combo_rate0 = 50;
        this.attack_rate0 = 70;
        this.hold_rate0 = 70;
        this.attack_s0 = 30;
        this.wait_frame0 = 20;
        this.combo_risk = 50;
    } // End of the function
    public skill_init()
    {
        this.combo_1 = new Object();
        this.combo_land = new Object();
        this.combo_auto = new Object();
        this.combo_burst = new Object();
        this.delay_frames = new Object();
        this.dis_array[0] = 100;
        this.dis_array[1] = 150;
        this.dis_array[2] = 200;
        this.dis_array[3] = 250;
        this.dis_array[4] = 300;
        this.dis_array[5] = 400;
        this.dis_array[6] = 1000;
        this.skill_dis[0] = ["punch", "punch_l", "kick_l", "kick", "walk_f", "squatKick", "squatPunch", "sk14"];
        this.skill_dis[1] = ["kick", "sk2", this.skillObj.toAir, "squatKick", "sk14", this.skillObj.heavyHit];
        this.skill_dis[2] = ["kick", "sk2", "jump_f"];
        this.skill_dis[3] = ["sk1", "sk2", "jump_f"];
        this.skill_dis[4] = ["sk1", "sk2", "dash_f", "jump_f"];
        this.skill_dis[5] = ["dash_f", "walk_f", "sk1"];
        this.skill_dis[6] = ["dash_f", "sk1"];
        this.dis_num = this.dis_array.length;
    } // End of the function
    public combo_init()
    {
        this.combo_1.punch = ["kick1", "kick2", "sk1", "sk2", this.skillObj.toAir, "sk10", "squatKick"];
        this.combo_1.punch2 = ["kick1", "kick2", "sk1", "sk2", this.skillObj.toAir, "sk10", "sk14", "squatKick"];
        this.combo_1.kick = ["sk1", "sk2"];
        this.combo_1.kick2 = ["sk1", "sk2", this.skillObj.toAir, "sk10", "sk14"];
        this.combo_1.squatPunch = ["sk1", "sk2", "sk10", "sk14"];
        this.combo_land.kick1 = ["squatKick", "sk1", "sk2", this.skillObj.toAir, "sk14"];
        this.combo_land.jump_f = ["punch", "kick", "squatPunch", "squatKick"];
        this.combo_land.punch_l = ["punch_l", "kick_l"];
        this.combo_land.squatKick_l = ["squatKick_l"];
        this.combo_land.squatPunch_l = ["squatPunch_l", "squatKick_l"];
        this.combo_1.dash_f = ["punch", "kick1", "jump_f", "jump_f"];
        this.delay_frames.dash_f = [120, 150, 120, 230, 300];
        this.combo_1.walk_f = ["pitch", "punch", "kick_l", "jump_f", "dash_f"];
        this.delay_frames.walk_f = [100, 120, 180, 230, 400];
        this.combo_1.walk_b = ["punch", "kick", "kick_l", "jump_f"];
        this.delay_frames.walk_b = [100, 100, 180, 260, 300, 250];
        this.combo_burst.sk2 = ["sk1", "sk3", "sk10", "sk14"];
        this.combo_burst.sk3 = ["sk4"];
        this.action_1 = new Object();
        this.action_1.down = [["walk_b", "jump_b", "dash_b"], ["walk_b"], ["walk_f", "dash_f"]];
        this.delay_frames.down = [200, 400, 1000];
        this.action_1.oppRoll = [["punch_l", "squatPunch_l"], ["squatKick_l", "kick_l"]];
        this.delay_frames.oppRoll = [150, 300];
        this.action_1.oppJump = [[this.skillObj.toAir, "squatPunch"], [this.skillObj.toAir]];
        this.delay_frames.oppJump = [150, 300];
        this.action_1.wander = [["walk_b", "jump_b"], ["wait", "jump_b", "walk_f"], ["walk_f", "dash_f", "wait", this.skillObj.flyingObj]];
        this.delay_frames.wander = [150, 300, 1000];
        this.action_1.defend = [["walk_b"], ["walk_b", "jump_b"], ["walk_b", this.skillObj.flyingObj], ["walk_b", "wait", this.skillObj.flyingObj]];
        this.delay_frames.defend = [130, 200, 400, 1000];
        this.action_1.defendAttack = [[this.skillObj.toAir, this.skillObj.heavyHit], [this.skillObj.heavyHit]];
        this.delay_frames.defendAttack = [150, 200];
        this.action_1.defend_f = [["hold_u"], ["hold_u"]];
        this.delay_frames.defend_f = [150, 1000];
        this.action_1.defend_h = [["hold_u"], ["hold_u"], ["hold_u"]];
        this.delay_frames.defend_h = [130, 200, 1000];
        this.action_1.onEgde = [["attack", "jump_f"], ["jump_f", "attack", "attack"], ["attack"], ["walk_f", "dash_f"]];
        this.delay_frames.onEgde = [150, 250, 400, 1000];
        this.action_1.pos_down = [["squatKick_l", "squatKick"], ["squatKick"]];
        this.delay_frames.pos_down = [150, 200];
        this.action_1.pos_up = [["pitch"], ["kick2"], ["jump_f"]];
        this.delay_frames.pos_up = [100, 150, 250];
        this.action_1.super = [["sk14"], ["sk10"]];
        this.delay_frames.super = [160, 300];
        this.action_1.busrt = [["sk_s_swms"], ["sk_s_sys"]];
        this.delay_frames.busrt = [180, 600];
    } // End of the function
} // End of Class