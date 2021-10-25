class Type2_Ryo_AI_Lv2 extends Type2_Ryo_AI
{
    var combo_rate0, attack_rate0, hold_rate0, attack_s0, wait_frame0, combo_risk, dis_array, skill_dis, skillObj, skill2_dis, dis_num, combo_1, combo_land, combo_auto, combo_burst, delay_frames, combo_oppOnEgde, action_1, checkDefend, checkAttack, checkWait, combo_check2, opp, checkBurst, action_select, toSkill, onEgde;
    function Type2_Ryo_AI_Lv2()
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
        dis_array[2] = 200;
        dis_array[3] = 250;
        dis_array[4] = 300;
        dis_array[5] = 400;
        dis_array[6] = 1000;
        skill_dis[0] = ["punch", "punch_l", "kick_l", "kick", "walk_f", "squatKick"];
        skill_dis[1] = ["kick", "sk_xf2", skillObj.toAir, "squatKick", skillObj.heavyHit];
        skill_dis[2] = ["sk_xf2", "jump_f", "jump_b"];
        skill_dis[3] = ["sk1", "sk_xf2", "walk_f", "jump_f"];
        skill_dis[4] = ["sk1", "sk_xf2", "walk_f", "dash_f", "jump_f"];
        skill_dis[5] = ["dash_f", "walk_f", "sk1", "sk_bodong_air"];
        skill_dis[6] = ["dash_f", "walk_f", "sk1", "sk_bodong_air"];
        skill2_dis[0] = ["punch", "kick", skillObj.toAir];
        skill2_dis[1] = ["kick", "sk_xf2", skillObj.toAir, "squatKick"];
        skill2_dis[2] = ["sk_xf2", "jump_f"];
        skill2_dis[3] = ["sk1", "sk_xf2", "jump_f"];
        skill2_dis[4] = ["sk1", "sk_xf2", "jump_f"];
        skill2_dis[5] = ["dash_f", "sk1", "sk_bodong_air"];
        skill2_dis[6] = ["dash_f", "sk1"];
        dis_num = dis_array.length;
    } // End of the function
    function combo_init()
    {
        combo_1 = new Object();
        combo_land = new Object();
        combo_auto = new Object();
        combo_burst = new Object();
        delay_frames = new Object();
        combo_1.punch = ["kick1", "kick2", "sk1", "sk_xf2", skillObj.toAir, "sk10", "sk_s3"];
        combo_1.punch2 = ["kick1", "kick2", "sk1", "sk_xf2", skillObj.toAir, "sk10", "sk_bd_air", "sk_s3"];
        combo_1.kick = ["sk1", "sk_xf2", "sk10", "sk_s3"];
        combo_1.kick2 = ["sk1", "sk_xf2", skillObj.toAir, "sk10", "sk_bd_air", "sk_s3"];
        combo_1.squatPunch = ["sk1", "sk_xf2", "sk10", "sk_s3"];
        combo_land.jump_f = ["punch", "kick"];
        combo_land.punch_l = ["punch_l", "kick_l"];
        combo_land.squatKick_l = ["squatKick_l"];
        combo_land.squatPunch_l = ["squatPunch_l", "squatKick_l"];
        combo_land.kick1 = ["squatKick", "sk1", "sk_xf2", skillObj.toAir, "sk_s3"];
        combo_land.sk_xf2 = ["sk3", "sk_xf2", "sk10", "sk_s3", "sk_s_q1"];
        combo_1.dash_f = ["punch", "kick1", "jump_f", "jump_f"];
        delay_frames.dash_f = [120, 150, 120, 230, 300];
        combo_1.walk_f = ["pitch", "punch", "kick_l", "jump_f", "dash_f"];
        delay_frames.walk_f = [100, 120, 180, 230, 400];
        combo_1.walk_b = ["punch", "kick", "kick_l", "jump_f"];
        delay_frames.walk_b = [100, 100, 180, 260, 300, 250];
        combo_burst.sk_xf2 = ["sk3", "sk_xf2", "sk10", "sk_s3", "sk_s_q1"];
        combo_oppOnEgde.sk10 = [true, false, false, false, false];
        combo_burst.sk3 = ["sk4"];
        delay_frames.sk3 = [5];
        combo_burst.punch2 = ["sk_xf2", "sk10", "sk_bd_air", "sk_s3", "sk_s_q1", "sk_s_q2"];
        combo_burst.kick2 = ["sk_xf2", "sk10", "sk_bd_air", "sk_s3", "sk_s_q1", "sk_s_q2"];
        combo_burst.sk10 = ["sk_s3", "sk_s_q1", "sk_s_q2"];
        action_1 = new Object();
        action_1.down = [["walk_b", "jump_b", "dash_b"], ["walk_f", "dash_f"]];
        delay_frames.down = [200, 1000];
        action_1.oppRoll = [["punch_l", "squatPunch_l"], ["squatKick_l", "kick_l"]];
        delay_frames.oppRoll = [150, 300];
        action_1.oppJump = [[skillObj.toAir, "squatPunch"], [skillObj.toAir]];
        delay_frames.oppJump = [150, 300];
        action_1.wander = [["walk_b", "jump_b"], ["wait", "jump_b", "walk_f"], ["walk_f", "dash_f", "wait", skillObj.flyingObj]];
        delay_frames.wander = [150, 300, 1000];
        action_1.defend = [["walk_b"], ["walk_b", "jump_b"], ["walk_b", skillObj.flyingObj], ["walk_b", "wait", skillObj.flyingObj]];
        delay_frames.defend = [130, 200, 400, 1000];
        action_1.defendAttack = [[skillObj.toAir]];
        delay_frames.defendAttack = [150];
        action_1.defend_f = [["hold_u"], ["hold_u"]];
        delay_frames.defend_f = [150, 1000];
        action_1.defend_h = [["hold_u"], ["hold_u"], ["hold_u"]];
        delay_frames.defend_h = [130, 200, 1000];
        action_1.onEgde = [["attack", "jump_f"], ["attack"], ["attack"], ["walk_f", "dash_f"]];
        delay_frames.onEgde = [150, 250, 400, 1000];
        action_1.pos_down = [["squatKick_l", "squatKick"], ["squatKick"]];
        delay_frames.pos_down = [150, 200];
        action_1.pos_up = [["pitch", "punch_s"], ["kick2", "punch_s"], ["jump_f"]];
        delay_frames.pos_up = [100, 150, 250];
        action_1.super = [["sk10", "sk_bd_air", "sk_s3"], ["sk10"]];
        delay_frames.super = [300, 500];
        action_1.busrt = [["sk_q1", "sk_s_q2"]];
        delay_frames.busrt = [600];
    } // End of the function
    function actionDefend()
    {
    } // End of the function
    function cpu_control()
    {
        if (this.checkDefend())
        {
            return (true);
        } // end if
        if (this.checkAction())
        {
            return (true);
        } // end if
        if (this.checkAttack())
        {
            return (true);
        } // end if
        this.checkWait();
    } // End of the function
    function checkAction()
    {
        var _loc2;
        if (this.combo_check2())
        {
            return (true);
        }
        else if (opp.status_3 == "down")
        {
            if (this.checkBurst())
            {
                return (true);
            } // end if
            _loc2 = this.action_select("action_1", "down");
            this.toSkill(_loc2);
            return (true);
        }
        else if (onEgde)
        {
            var _loc3 = this.action_select("action_1", "onEgde");
            this.toSkill(_loc3);
            return (true);
        } // end else if
    } // End of the function
} // End of Class
