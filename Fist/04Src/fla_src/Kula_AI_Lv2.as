class Kula_AI_Lv2 extends Kula_AI
{
    var combo_rate0, attack_rate0, hold_rate0, attack_s0, wait_frame0, combo_risk, dis_array, skill_dis, dis_num, combo_1, combo_land, combo_auto, combo_burst, delay_frames, combo_oppOnEgde, action_1, checkDefend, checkAttack, checkWait, combo_check2, opp, checkBurst, action_select, toSkill, onEgde;
    function Kula_AI_Lv2()
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
        skill_dis[0] = ["punch_l", "punch_s1", "kick_l", "kick", "walk_f"];
        skill_dis[1] = ["squatKick", "punch_l", "kick_l", "kick", "heavyHit"];
        skill_dis[2] = ["sk_dfp", "sk_dbk", "sk_dbk_l", "sk_huaxing", "sk_bingdian", "jump_f"];
        skill_dis[3] = ["sk_dbk", "walk_f", "dash_f", "jump_f"];
        skill_dis[4] = ["dash_f", "walk_f"];
        skill_dis[5] = ["dash_f"];
        dis_num = dis_array.length;
    } // End of the function
    function combo_init()
    {
        combo_1 = new Object();
        combo_land = new Object();
        combo_auto = new Object();
        combo_burst = new Object();
        delay_frames = new Object();
        combo_1.punch = ["sk_dbk", "sk_dfp", "sk_fdfp", "sk_bingdian", "sk_tibing"];
        combo_1.punch2 = ["sk_dbk", "sk_dfp", "sk_fdfp", "sk_bingdian", "sk_s_bingren", "sk_s_luanwu", "sk_tibing"];
        combo_1.punch_l = ["punch_l", "kick_l"];
        combo_1.kick = ["sk_dbk", "sk_dfp", "sk_fdfp", "sk_bingdian", "sk_tibing", "sk_s_luanwu"];
        combo_1.kick2 = ["sk_dbk", "sk_dfp", "sk_fdfp", "sk_bingdian", "sk_s_bingren", "sk_s_luanwu", "sk_tibing"];
        combo_1.squatPunch = ["sk_dfp", "sk_dbk"];
        combo_1.squatKick_l = ["squatKick_l", "squatPunch_l"];
        combo_1.squatPunch_l = ["squatPunch_l", "squatKick_l"];
        combo_land.jump_f = ["punch", "kick"];
        combo_burst.sk_dfp = ["sk_fdfp", "sk_dbk", "sk_bingdian"];
        combo_burst.sk_s_bingren = ["sk_fdfp", "sk_dbk", "sk_bingdian"];
        combo_burst.sk_tibing = ["sk_fdfp", "sk_dbk"];
        combo_oppOnEgde.sk_tibing = [true, true];
        combo_1.dash_f = ["kick", "punch", "jump_f"];
        delay_frames.dash_f = [130, 130, 250];
        combo_1.walk_f = ["pitch", "punch", "kick", "jump_f", "dash_f"];
        delay_frames.walk_f = [100, 150, 180, 250, 400];
        combo_1.walk_b = ["punch", "kick", "jump", "jump_f"];
        delay_frames.walk_b = [100, 150, 200, 260];
        action_1 = new Object();
        action_1.down = [["walk_b", "jump_b"], ["walk_f"]];
        delay_frames.down = [200, 1000];
        action_1.oppRoll = [["punch_l", "squatPunch_l"], ["squatKick_l", "kick_l"]];
        delay_frames.oppRoll = [150, 300];
        action_1.super = [["sk_s_bingren", "sk_s_luanwu"], ["sk_s_bingren"]];
        delay_frames.super = [250, 300];
        action_1.busrt = [["sk_s_xingchen", "sk_s_jiejie"]];
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
