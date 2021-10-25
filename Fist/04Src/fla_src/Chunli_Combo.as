class Chunli_Combo extends role_corn.Combo_listener
{
    var role, combo1, combo2, skill_over, beCancled, notTOcancle, s_cancle;
    function Chunli_Combo(r)
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
        combo2.punch = 8;
        skill_over.punch = 10;
        combo2.punch2 = 6;
        skill_over.punch2 = 19;
        combo2.kick_s1 = 10;
        skill_over.kick_s1 = 21;
        combo2.kick = 8;
        skill_over.kick = 10;
        combo2.kick2 = 6;
        skill_over.kick2 = 10;
        combo2.squatPunch = 6;
        skill_over.squatPunch = 8;
        combo2.squatKick = 5;
        skill_over.squatKick = 10;
        combo2.heavyHit = 9;
        skill_over.heavyHit = 13;
        combo2.sk_bailietui = 20;
        skill_over.sk_bailietui = 33;
        combo2.sk_bailietui2 = 17;
        skill_over.sk_bailietui2 = 52;
        combo2.sk_huixuan = 25;
        skill_over.sk_huixuan = 34;
        combo2.sk_huixuan2 = 20;
        skill_over.sk_huixuan2 = 27;
        combo2.sk_xuanyuan = 12;
        skill_over.sk_xuanyuan = 31;
        combo2.sk_s_bo = 20;
        skill_over.sk_s_bo = 30;
        combo2.sk_s_fengyi = 50;
        skill_over.sk_s_fengyi = 66;
        combo2.sk_s_bo2 = 23;
        skill_over.sk_s_bo2 = 30;
        combo2.sk_s_qianlie_air = 67;
        skill_over.sk_s_qianlie_air = 67;
        combo2.sk_shengtian = 10;
        skill_over.sk_shengtian = 25;
        combo2.punch_l = 5;
        combo2.squatPunch_l = 5;
        combo2.kick_l = 6;
        combo2.squatKick_l = 5;
        combo2.sk_bo = 11;
        combo2.sk_bo2 = 11;
        skill_over.sk_s_bo_s = 48;
        skill_over.sk_s_bo2_s = 42;
        skill_over.sk_s_fengyi_s = 75;
        skill_over.sk_s_qianlie_air_s = 35;
        skill_over.sk_s_qixing = 12;
        skill_over.sk_s_bo_ss = 51;
        skill_over.sk_s_zuhe = 15;
        skill_over.sk_s_tianxing = 16;
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
        s_cancle.jumpSkill_punch = {sk_huixuan: 1};
    } // End of the function
} // End of Class
