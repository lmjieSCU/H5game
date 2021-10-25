class Ryo_Combo extends role_corn.Combo_listener
{
    var role, combo1, combo2, skill_over, beCancled, notTOcancle, noCancle, s_cancle;
    function Ryo_Combo(r)
    {
        super();
        role = r;
        this.init();
    } // End of the function
    function init()
    {
        combo1 = new Object();
        combo1.sk_BGX = {punch: "sk_BGX_s3", kick: "sk_BGX_s2"};
        combo2 = new Object();
        combo2.punch = 9;
        combo2.punch2 = 5;
        combo2.kick = 10;
        combo2.kick1 = 9;
        combo2.kick2 = 11;
        combo2.squatPunch = 7;
        combo2.sk1 = 25;
        combo2.sk3 = 5;
        combo2.sk_BGX = 5;
        combo2.sk10 = 8;
        combo2.sk14 = 52;
        combo2.heavyHit = 10;
        combo2.sk_s3 = 80;
        skill_over = new Object();
        skill_over.punch = 10;
        skill_over.punch2 = 6;
        skill_over.kick = 10;
        skill_over.kick2 = 13;
        skill_over.squatKick = 10;
        skill_over.squatPunch = 11;
        skill_over.heavyHit = 13;
        skill_over.sk1 = 55;
        skill_over.sk2 = 33;
        skill_over.sk3 = 14;
        skill_over.sk_BGX = 17;
        skill_over.sk10 = 27;
        skill_over.sk12 = 44;
        skill_over.sk13 = 47;
        skill_over.sk_s3 = 48;
        skill_over.sk_s3_s = 48;
        skill_over.sk_s_q1 = 50;
        skill_over.sk_s_q2 = 20;
        beCancled = new Object();
        beCancled.punch = 1;
        beCancled.punch2 = 1;
        beCancled.kick = 1;
        beCancled.kick1 = 1;
        beCancled.kick2 = 1;
        beCancled.punch_l = 1;
        beCancled.kick_l = 1;
        beCancled.squatPunch = 1;
        beCancled.squatPunch_l = 1;
        beCancled.squatKick_l = 1;
        notTOcancle = new Object();
        notTOcancle.punch = 1;
        notTOcancle.punch2 = 1;
        notTOcancle.kick = 1;
        notTOcancle.kick2 = 1;
        notTOcancle.punch_l = 1;
        notTOcancle.kick_l = 1;
        notTOcancle.squatPunch_l = 1;
        notTOcancle.squatKick_l = 1;
        notTOcancle.squatKick = 1;
        notTOcancle.pitch = 1;
        noCancle = new Object();
        noCancle.punch = "punch2";
        noCancle.punch2 = "punch";
        noCancle.kick = "kick2";
        noCancle.kick2 = "kick";
        s_cancle = new Object();
    } // End of the function
} // End of Class
