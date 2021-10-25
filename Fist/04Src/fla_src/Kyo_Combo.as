class Kyo_Combo extends role_corn.Combo_listener
{
    var role, combo1, combo2, skill_over, beCancled, notTOcancle;
    function Kyo_Combo(r)
    {
        super();
        role = r;
        this.init();
    } // End of the function
    function init()
    {
        combo1 = new Object();
        combo1.sk15 = {punch: "sk16", punch_l: "sk16", sk_hezhai: "sk16"};
        combo1.sk16 = {punch: "sk17", punch_l: "sk17"};
        combo1.sk19 = {punch_l: "sk20", punch: "sk20", sk19: "sk20", sk_hezhai: "sk21_2"};
        combo1.sk20 = {punch_l: "sk21", punch: "sk21", kick_l: "sk14", kick: "sk14"};
        combo1.sk21 = {punch_l: "sk13", punch: "sk13"};
        combo1.sk21_2 = {punch_l: "sk13", punch: "sk13", sk28: "sk00"};
        combo1.sk1 = {kick: "sk1_2", kick_l: "sk1_2"};
        combo2 = new Object();
        combo2.punch = 9;
        combo2.punch2 = 5;
        combo2.kick = 10;
        combo2.kick1 = 6;
        combo2.kick2 = 13;
        combo2.squatPunch = 4;
        combo2.heavyHit = 11;
        combo2.squatKick_s = 3;
        combo2.sk0 = 6;
        combo2.sk15 = 11;
        combo2.sk16 = 13;
        combo2.sk19 = 9;
        combo2.sk20 = 10;
        combo2.sk21 = 10;
        combo2.sk21_2 = 14;
        combo2.sk28 = 53;
        combo2.sk29 = 28;
        combo2.sk31 = 115;
        combo2.sk1 = 12;
        combo2.sk43 = 15;
        combo2.sk43_l = 11;
        combo2.sk30 = 8;
        combo2.sk_s_120 = 105;
        skill_over = new Object();
        skill_over.punch = 10;
        skill_over.punch2 = 6;
        skill_over.kick = 10;
        skill_over.kick1 = 10;
        skill_over.kick2 = 13;
        skill_over.squatKick = 10;
        skill_over.heavyHit = 15;
        skill_over.sk15 = 13;
        skill_over.sk16 = 15;
        skill_over.sk17 = 13;
        skill_over.sk19 = 11;
        skill_over.sk20 = 10;
        skill_over.sk21 = 16;
        skill_over.sk21_2 = 15;
        skill_over.sk13 = 17;
        skill_over.sk0 = 15;
        skill_over.sk28 = 75;
        skill_over.sk3 = 124;
        skill_over.sk31 = 125;
        skill_over.sk31_s = 125;
        skill_over.sk29 = 45;
        skill_over.sk29_s = 99;
        skill_over.sk1 = 17;
        skill_over.sk2 = 14;
        skill_over.sk28 = 76;
        skill_over.sk14 = 9;
        skill_over.sk34 = 25;
        skill_over.sk43 = 16;
        skill_over.sk43_l = 12;
        skill_over.sk_s_120 = 50;
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
        notTOcancle.punch_l = 1;
        notTOcancle.kick_l = 1;
        notTOcancle.squatPunch = 1;
        notTOcancle.squatPunch_l = 1;
        notTOcancle.squatKick_l = 1;
        notTOcancle.squatKick = 1;
        notTOcancle.pitch = 1;
    } // End of the function
} // End of Class
