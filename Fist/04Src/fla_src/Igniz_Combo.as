class Igniz_Combo extends role_corn.Combo_listener
{
    var role, combo1, combo2, skill_over, beCancled, notTOcancle, s_cancle;
    function Igniz_Combo(r)
    {
        super();
        role = r;
        this.init();
    } // End of the function
    function init()
    {
        combo1 = new Object();
        combo2 = new Object();
        skill_over = new Object();
        combo2.punch_l = 3;
        skill_over.punch_l = 5;
        combo2.punch = 6;
        skill_over.punch = 14;
        combo2.punch2 = 10;
        skill_over.punch2 = 12;
        combo2.kick_l = 4;
        skill_over.kick_l = 6;
        combo2.kick = 3;
        skill_over.kick = 8;
        combo2.kick2 = 3;
        skill_over.kick2 = 8;
        combo2.squatPunch = 5;
        skill_over.squatPunch = 12;
        combo2.squatPunch_l = 2;
        skill_over.squatPunch_l = 6;
        combo2.squatKick = 5;
        skill_over.squatKick = 7;
        combo2.squatKick_l = 3;
        skill_over.squatKick_l = 5;
        combo2.heavyHit = 13;
        skill_over.heavyHit = 22;
        combo2.df_ph = 11;
        skill_over.df_ph = 26;
        combo2.df_pl = 13;
        skill_over.df_pl = 26;
        combo2.df_k = 11;
        skill_over.df_k = 16;
        combo2.db_k = 11;
        skill_over.db_k = 17;
        combo2.db_p = 11;
        skill_over.db_p = 19;
        combo2.db_pl = 13;
        skill_over.db_pl = 17;
        combo2.fdf_p = 7;
        skill_over.db_pl = 33;
        combo2.fdf_pl = 7;
        skill_over.db_pl = 20;
        combo2.dfdf_p = 25;
        skill_over.dfdf_p = 30;
        combo2.dbdf_p = 24;
        skill_over.dbdf_p = 222;
        skill_over.dbdf_p_max = 222;
        combo2.dfdf_k = 16;
        skill_over.dfdf_k = 26;
        skill_over.dfdf_k_max = 39;
        skill_over.df_o = 102;
        skill_over.db_o = 6;
        beCancled = new Object();
        beCancled.punch = 1;
        beCancled.punch2 = 1;
        beCancled.kick_s1 = 1;
        beCancled.punch_l = 1;
        beCancled.kick = 1;
        beCancled.kick2 = 1;
        beCancled.kick_s1 = 1;
        beCancled.kick_s2 = 1;
        beCancled.kick_l = 1;
        beCancled.df_p = 1;
        beCancled.squatPunch = 1;
        beCancled.squatPunch_l = 1;
        beCancled.squatKick_l = 1;
        beCancled.jumpSkill_punch = 1;
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
        s_cancle.punch_l = {kick_l: 1, squatPunch_l: 1, squatKick_l: 1, punch: 1, kick: 1};
        s_cancle.kick_l = {punch: 1, kick: 1};
        s_cancle.squatPunch_l = {punch_l: 1, kick_l: 1, squatKick_l: 1, punch: 1, kick: 1};
        s_cancle.squatKick_l = {punch_l: 1, kick_l: 1, punch: 1, kick: 1};
    } // End of the function
} // End of Class
