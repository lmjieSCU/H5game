class Kula_Combo extends Combo_listener
{
    constructor(r)
    {
        super();
        this.role = r;
        this.init();
    } // End of the function
    public init()
    {
        this.combo1 = new Object();
        // if (this.role instanceof this.Type2_Kula_role)
        // {
        //     thiss.combo1.sk_dfp = {kick: "sk_tibing2", kick_l: "sk_tibing1"};
        // } // end if
        this.combo2 = new Object();
        this.combo2.punch = 11;
        this.combo2.punch2 = 7;
        this.combo2.punch_s1 = 10;
        this.combo2.sk_tibing1 = 4;
        this.combo2.sk_tibing0 = 4;
        this.combo2.sk_bingdian = 10;
        this.combo2.kick = 11;
        this.combo2.kick2 = 11;
        this.combo2.kick_s2 = 13;
        this.combo2.squatPunch = 9;
        this.combo2.heavyHit = 14;
        this.combo2.sk_dfp = 10;
        this.combo2.sk_beike = 15;
        this.combo2.sk_s_bingren = 15;
        this.combo2.sk_tibing = 28;
        this.combo2.sk_tibing2 = 10;
        this.combo2.punch_l = 6;
        this.combo2.kick_l = 7;
        this.skill_over = new Object();
        this.skill_over.punch = 15;
        this.skill_over.punch2 = 17;
        this.skill_over.punch_s1 = 14;
        this.skill_over.sk_tibing0 = 11;
        this.skill_over.sk_tibing0 = 11;
        this.skill_over.kick_l = 7;
        this.skill_over.punch_l = 6;
        this.skill_over.kick = 13;
        this.skill_over.kick2 = 11;
        this.skill_over.squatPunch = 12;
        this.skill_over.squatKick = 10;
        this.skill_over.heavyHit = 15;
        this.skill_over.sk_huaxing = 15;
        this.skill_over.sk_bingdian = 17;
        this.skill_over.sk_dbk = 20;
        this.skill_over.sk_dbk_l = 15;
        this.skill_over.sk_dfp = 19;
        this.skill_over.sk_fdfp = 15;
        this.skill_over.sk_fdfp_l = 10;
        this.skill_over.sk_beike = 17;
        this.skill_over.sk_s_bingren = 29;
        this.skill_over.sk_s_luanwu = 115;
        this.skill_over.sk_s_handong = 20;
        this.skill_over.sk_s_xingchen = 100;
        this.skill_over.sk_s_jiejie = 50;
        this.skill_over.sk_flyKick = 15;
        this.skill_over.sk_tibing2 = 10;
        this.skill_over.sk_s_luobing = 35;
        this.skill_over.sk_s_luanren = 15;
        this.beCancled = new Object();
        this.beCancled.punch = 1;
        this.beCancled.punch2 = 1;
        this.beCancled.punch_s1 = 1;
        this.beCancled.punch_l = 1;
        this.beCancled.kick = 1;
        this.beCancled.kick2 = 1;
        this.beCancled.kick_s1 = 1;
        this.beCancled.kick_s2 = 1;
        this.beCancled.kick_l = 1;
        this.beCancled.squatPunch = 1;
        this.beCancled.squatPunch_l = 1;
        this.beCancled.squatKick_l = 1;
        this.notTOcancle = new Object();
        this.notTOcancle.punch = 1;
        this.notTOcancle.punch2 = 1;
        this.notTOcancle.punch_l = 1;
        this.notTOcancle.kick = 1;
        this.notTOcancle.kick_l = 1;
        this.notTOcancle.squatPunch = 1;
        this.notTOcancle.squatPunch_l = 1;
        this.notTOcancle.squatKick_l = 1;
        this.notTOcancle.squatKick = 1;
        this.notTOcancle.pitch = 1;
        this.s_cancle = new Object();
    } // End of the function
} // End of Class
