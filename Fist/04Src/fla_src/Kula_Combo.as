class Kula_Combo extends role_corn.Combo_listener
{
    var role, combo1, combo2, skill_over, beCancled, notTOcancle, s_cancle;
    function Kula_Combo(r)
    {
        super();
        role = r;
        this.init();
    } // End of the function
    function init()
    {
        combo1 = new Object();
        if (role instanceof Type2_Kula_role)
        {
            combo1.sk_dfp = {kick: "sk_tibing2", kick_l: "sk_tibing1"};
        } // end if
        combo2 = new Object();
        combo2.punch = 11;
        combo2.punch2 = 7;
        combo2.punch_s1 = 10;
        combo2.sk_tibing1 = 4;
        combo2.sk_tibing0 = 4;
        combo2.sk_bingdian = 10;
        combo2.kick = 11;
        combo2.kick2 = 11;
        combo2.kick_s2 = 13;
        combo2.squatPunch = 9;
        combo2.heavyHit = 14;
        combo2.sk_dfp = 10;
        combo2.sk_beike = 15;
        combo2.sk_s_bingren = 15;
        combo2.sk_tibing = 28;
        combo2.sk_tibing2 = 10;
        combo2.punch_l = 6;
        combo2.kick_l = 7;
        skill_over = new Object();
        skill_over.punch = 15;
        skill_over.punch2 = 17;
        skill_over.punch_s1 = 14;
        skill_over.sk_tibing0 = 11;
        skill_over.sk_tibing0 = 11;
        skill_over.kick_l = 7;
        skill_over.punch_l = 6;
        skill_over.kick = 13;
        skill_over.kick2 = 11;
        skill_over.squatPunch = 12;
        skill_over.squatKick = 10;
        skill_over.heavyHit = 15;
        skill_over.sk_huaxing = 15;
        skill_over.sk_bingdian = 17;
        skill_over.sk_dbk = 20;
        skill_over.sk_dbk_l = 15;
        skill_over.sk_dfp = 19;
        skill_over.sk_fdfp = 15;
        skill_over.sk_fdfp_l = 10;
        skill_over.sk_beike = 17;
        skill_over.sk_s_bingren = 29;
        skill_over.sk_s_luanwu = 115;
        skill_over.sk_s_handong = 20;
        skill_over.sk_s_xingchen = 100;
        skill_over.sk_s_jiejie = 50;
        skill_over.sk_flyKick = 15;
        skill_over.sk_tibing2 = 10;
        skill_over.sk_s_luobing = 35;
        skill_over.sk_s_luanren = 15;
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
