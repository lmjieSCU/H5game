class Iori_AI_Lv2 extends Iori_AI
{
    var combo_rate0, attack_rate0, hold_rate0, attack_s0, wait_frame0, combo_risk, dis_array, skill_dis, dis_num, combo_1, combo_land, combo_auto, combo_burst, delay_frames, action_1, checkDefend, checkAttack, checkWait, combo_check2, getDis, checkBurst, opp, action_select, toSkill, onEgde;
    function Iori_AI_Lv2()
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
        skill_dis[0] = ["punch", "punch_l", "punch_s1", "kick_l", "kick", "walk_f", "squatPunch"];
        skill_dis[1] = ["kick", "punch", "squatKick", "sk1_1", "sk0", "heavyHit"];
        skill_dis[2] = ["kick", "squatKick", "sk1_1", "sk2", "jump_f"];
        skill_dis[3] = ["sk2", "sk3", "jump_f", "walk_f"];
        skill_dis[4] = ["sk2", "sk3", "walk_f", "jump_f"];
        skill_dis[5] = ["walk_f", "sk2"];
        skill_dis[6] = ["dash_f", "walk_f", "sk2"];
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
        combo_1.punch_s2 = ["sk1_1", "sk_s1"];
        combo_1.kick_s2 = ["punch_s1", "punch", "sk4"];
        combo_1.squatPunch = ["sk2", "sk3"];
        combo_1.punch = ["sk1_1", "sk2"];
        combo_1.punch2 = ["sk1_1", "sk2", "sk3", "sk_s1", "sk_s_89b"];
        combo_1.kick = ["sk2"];
        combo_1.kick2 = ["sk1_1", "sk2", "sk3", "sk_s1", "sk_s_89b"];
        combo_1.punch_l = ["punch_l", "kick_l"];
        combo_1.squatKick_l = ["squatKick_l"];
        combo_1.squatPunch_l = ["squatPunch_l", "squatKick_l"];
        combo_1.sk1_1 = ["sk1_2"];
        combo_1.sk1_2 = ["sk1_3"];
        combo_burst.punch = ["sk1_1", "sk_s1", "sk_s_qianzai1"];
        combo_burst.punch2 = ["sk1_1", "sk_s1", "sk_s_89b", "sk_s_3shenji2", "sk_s_qianzai1"];
        combo_burst.kick2 = ["sk1_1", "sk_s1", "sk_s_89b", "sk_s_3shenji2", "sk_s_qianzai1"];
        combo_burst.heavyHit = ["sk_s1", "sk_s_89b", "sk_s_qianzai1"];
        combo_burst.sk1_1 = ["sk1_2", "sk1_2", "sk3", "sk4"];
        combo_burst.sk1_2 = ["sk0", "sk_s1", "sk_s_89b", "sk_s_3shenji2", "sk_s_qianzai1"];
        combo_burst.sk_s1 = ["sk_s_89b", "sk_s_3shenji2", "sk_s_qianzai1"];
        combo_1.dash_f = ["punch", "kick", "roll_f", "punch_s1", "jump_f", "jump"];
        delay_frames.dash_f = [120, 120, 120, 180, 230, 300, 300];
        combo_1.walk_f = ["pitch", "punch", "kick", "punch_s1", "jump_f", "dash_f"];
        delay_frames.walk_f = [100, 120, 120, 180, 230, 400];
        combo_1.walk_b = ["punch", "kick", "punch_s1", "jump", "jump_f"];
        delay_frames.walk_b = [130, 130, 180, 260, 300];
        combo_land.jump_f = ["punch", "kick", "punch_s1", "kick_s2", "kick_l"];
        action_1 = new Object();
        action_1.down = [["walk_b", "jump_b"], ["walk_f"]];
        delay_frames.down = [200, 1000];
        action_1.oppRoll = [["punch_l", "squatPunch_l"], ["squatKick_l", "kick_l"]];
        delay_frames.oppRoll = [150, 300];
        action_1.oppJump = [["sk0"], ["sk0", "jump"], ["sk_s1"]];
        delay_frames.oppJump = [150, 300, 350];
        action_1.super = [["sk_s1", "sk_s_89b"], ["sk_s1", "sk_s_89b"]];
        delay_frames.super = [200, 500];
        action_1.busrt = [["sk_s_3shenji2"], ["sk_s_qianzai1"]];
        delay_frames.busrt = [150, 350];
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
        else if (this.getDis() > 300 && !_level0.KO)
        {
            if (this.checkBurst())
            {
                return (true);
            } // end if
        }
        else if (opp.status_3 == "down" && !_level0.KO)
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
