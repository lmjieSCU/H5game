class K_Combo extends role_corn.Combo_listener
{
    var role, combo1, combo2, skill_over, beCancled, notTOcancle, s_cancle;
    function K_Combo(r)
    {
        super();
        role = r;
        this.init();
    } // End of the function
    function init()
    {
        combo1 = new Object();
        combo1.sk_dfp = {kick: "sk_dfp_s3", kick_l: "sk_dfp_s2", kick_s2: "sk_dfp_s2"};
        combo1.sk_fdfp = {kick: "sk_fdfp_s2", kick_l: "sk_fdfp_s2"};
        combo2 = new Object();
        combo2.punch = 7;
        combo2.punch2 = 6;
        combo2.punch_s1 = 10;
        combo2.kick = 10;
        combo2.kick2 = 13;
        combo2.kick_s2 = 13;
        combo2.squatPunch = 8;
        combo2.heavyHit = 12;
        combo2.sk_dfp = 10;
        combo2.sk_dfp_s2 = 10;
        combo2.sk_dfp_s3 = 11;
        combo2.sk_fdfp = 18;
        combo2.sk_fdfp2 = 11;
        combo2.sk_dfk = 13;
        combo2.sk_sanduan_2 = 14;
        combo2.sk_dfk = 13;
        combo2.sk_dfk_hit = 13;
        skill_over = new Object();
        skill_over.punch = 11;
        skill_over.punch2 = 10;
        skill_over.punch_s1 = 14;
        skill_over.kick = 11;
        skill_over.kick2 = 10;
        skill_over.kick_s1 = 15;
        skill_over.kick_s2 = 15;
        skill_over.squatPunch = 10;
        skill_over.squatKick = 10;
        skill_over.heavyHit = 15;
        skill_over.sk_dfp = 18;
        skill_over.sk_fdfp = 18;
        skill_over.sk_fdfp2 = 13;
        skill_over.sk_dfk = 32;
        skill_over.sk_dbk = 18;
        skill_over.sk_s1 = 57;
        skill_over.sk_s2 = 24;
        skill_over.sk_s1_2 = 60;
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
