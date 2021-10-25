class Type2_Kyo_AI_Lv1 extends Type2_Kyo_AI
{
    var combo_rate0, attack_rate0, hold_rate0, attack_s0, wait_frame0, combo_risk, dis_array, skill_dis, dis_num, combo_1, combo_land, combo_auto, combo_burst, delay_frames, combo_oppOnEgde, action_1, checkDefend, checkAttack, checkWait, combo_check2, opp, checkBurst, action_select, toSkill, onEgde;
    function Type2_Kyo_AI_Lv1()
    {
        super();
        this.skill_init();
        this.combo_init();
        combo_rate0 = 0;
        attack_rate0 = 20;
        hold_rate0 = 15;
        attack_s0 = 5;
        wait_frame0 = 30;
        combo_risk = 0;
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
        skill_dis[1] = ["kick_l", "sk1", "sk0", "heavyHit", "sk43_l", "squatKick", "squatKick_s"];
        skill_dis[2] = ["kick_l", "sk43", "jump_f"];
        skill_dis[3] = ["sk43", "jump_f"];
        skill_dis[4] = ["sk30", "dash_f", "jump_f"];
        skill_dis[5] = ["dash_f", "dash_f", "sk30"];
        skill_dis[6] = ["dash_f", "dash_f", "sk30"];
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
        combo_auto.sk1 = ["sk1_2"];
        combo_1.punch = ["sk43", "sk_longche"];
        combo_1.punch2 = ["kick2", "sk1", "sk43_l", "sk43", "sk_canggui", "sk_longche", "sk31", "sk_s_120"];
        combo_1.kick = ["sk1", "sk1", "sk43", "sk_canggui", "sk_longche"];
        combo_1.kick1 = ["sk1", "sk1", "sk43_l", "sk43", "sk_canggui", "sk_longche", "sk_s_120"];
        combo_1.kick2 = ["sk1", "sk1", "sk43_l", "sk43", "sk_canggui", "sk_longche", "sk31", "sk_s_120"];
        combo_1.squatPunch = ["squatKick_s", "sk1", "sk43", "sk_canggui", "sk_longche"];
        combo_land.sk1_2 = ["sk43", "sk0", "sk_longche", "sk31", "sk_s_120"];
        delay_frames.sk1_2 = [0, 2, 6, 0, 0];
        combo_land.jump_f = ["punch", "kick"];
        combo_land.punch_l = ["punch_l", "kick_l"];
        combo_land.squatKick_l = ["squatKick_l", "squatKick_s"];
        combo_land.squatPunch_l = ["squatPunch_l", "squatKick_l", "squatKick_s"];
        combo_1.dash_f = ["roll_f", "jump_f", "jump_f"];
        delay_frames.dash_f = [120, 230, 300];
        combo_1.walk_f = ["pitch", "punch", "kick_l", "jump_f", "dash_f"];
        delay_frames.walk_f = [100, 120, 180, 230, 400];
        combo_1.walk_b = ["punch", "kick", "kick_l", "jump_f", "sk43"];
        delay_frames.walk_b = [100, 100, 180, 260, 300];
        combo_burst.heavyHit = ["sk0", "sk_longche", "sk31", "sk_s_120", "sk34", "sk35"];
        combo_burst.sk43 = ["sk1", "heavyHit", "sk31", "sk_s_120", "sk34", "sk35"];
        combo_oppOnEgde.sk28 = [true, true, true, true, true, true];
        combo_burst.sk43_l = ["sk1", "heavyHit", "sk31", "sk_s_120", "sk34", "sk35"];
        combo_oppOnEgde.sk28 = [true, true, true, true, true, true];
        combo_burst.sk_s_120 = ["sk0", "sk34", "sk35", "sk31"];
        combo_oppOnEgde.sk_s_120 = [true, true, true, true];
        action_1 = new Object();
        action_1.down = [["walk_b", "jump_b"], ["walk_f"]];
        delay_frames.down = [200, 1000];
        action_1.oppRoll = [["punch_l", "squatPunch_l"], ["squatKick_l", "kick_l"]];
        delay_frames.oppRoll = [150, 300];
        action_1.super = [["sk_s_120", "sk31"], ["sk31"]];
        delay_frames.super = [180, 250];
        action_1.busrt = [["sk35"], ["sk_s34"]];
        delay_frames.busrt = [250, 400];
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
