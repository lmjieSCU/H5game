class Orochi_Combo extends role_corn.Combo_listener
{
    var role, combo1, combo2, skill_over, beCancled, notTOcancle, s_cancle;
    function Orochi_Combo(r)
    {
        super();
        role = r;
        this.init();
    } // End of the function
    function init()
    {
        combo1 = new Object();
        combo2 = new Object();
        combo2.punch_l = 5;
        combo2.punch = 8;
        combo2.kick_l = 13;
        combo2.kick = 10;
        combo2.heavyHit = 20;
        combo2.sk_dfp = 16;
        combo2.sk_dbp = 25;
        combo2.sk_dbp_l = 23;
        combo2.sk_dfk_l = 20;
        combo2.sk_dfk = 20;
        combo2.sk_s_lunhui = 18;
        skill_over = new Object();
        skill_over.punch_l = 7;
        skill_over.punch = 10;
        skill_over.kick_l = 14;
        skill_over.kick = 12;
        skill_over.heavyHit = 20;
        skill_over.sk_s_zhuanpan = 36;
        skill_over.sk_s_qianshou1 = 33;
        skill_over.sk_s_jiguang = 72;
        skill_over.sk_s_sanhua = 185;
        beCancled = new Object();
        beCancled.punch = 1;
        beCancled.punch2 = 1;
        beCancled.punch_s1 = 1;
        beCancled.punch_l = 1;
        beCancled.kick = 1;
        beCancled.kick2 = 1;
        beCancled.kick_s1 = 1;
        beCancled.kick_s2 = 1;
        beCancled.kick_l = 1;
        beCancled.squatPunch = 1;
        beCancled.squatPunch_l = 1;
        beCancled.squatKick_l = 1;
        notTOcancle = new Object();
        notTOcancle.punch = 1;
        notTOcancle.punch2 = 1;
        notTOcancle.punch_l = 1;
        notTOcancle.kick = 1;
        notTOcancle.kick_l = 1;
        notTOcancle.squatPunch = 1;
        notTOcancle.squatPunch_l = 1;
        notTOcancle.squatKick_l = 1;
        notTOcancle.squatKick = 1;
        notTOcancle.pitch = 1;
        s_cancle = new Object();
    } // End of the function
} // End of Class
