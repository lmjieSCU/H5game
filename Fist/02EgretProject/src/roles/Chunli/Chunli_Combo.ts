class Chunli_Combo extends Combo_listener
{
    constructor(r)
   {
      super();
      this.role = r;
      this.init();
   }
   public init()
   {
      this.combo1 = new Object();
      this.combo2 = new Object();
      this.skill_over = new Object();
      this.combo2.punch = 8;
      this.skill_over.punch = 10;
      this.combo2.punch2 = 6;
      this.skill_over.punch2 = 19;
      this.combo2.kick_s1 = 10;
      this.skill_over.kick_s1 = 21;
      this.combo2.kick = 8;
      this.skill_over.kick = 10;
      this.combo2.kick2 = 6;
      this.skill_over.kick2 = 10;
      this.combo2.squatPunch = 6;
      this.skill_over.squatPunch = 8;
      this.combo2.squatKick = 5;
      this.skill_over.squatKick = 10;
      this.combo2.heavyHit = 9;
      this.skill_over.heavyHit = 13;
      this.combo2.sk_bailietui = 20;
      this.skill_over.sk_bailietui = 33;
      this.combo2.sk_bailietui2 = 17;
      this.skill_over.sk_bailietui2 = 52;
      this.combo2.sk_huixuan = 25;
      this.skill_over.sk_huixuan = 34;
      this.combo2.sk_huixuan2 = 20;
      this.skill_over.sk_huixuan2 = 27;
      this.combo2.sk_xuanyuan = 12;
      this.skill_over.sk_xuanyuan = 31;
      this.combo2.sk_s_bo = 20;
      this.skill_over.sk_s_bo = 30;
      this.combo2.sk_s_fengyi = 50;
      this.skill_over.sk_s_fengyi = 66;
      this.combo2.sk_s_bo2 = 23;
      this.skill_over.sk_s_bo2 = 30;
      this.combo2.sk_s_qianlie_air = 67;
      this.skill_over.sk_s_qianlie_air = 67;
      this.combo2.sk_shengtian = 10;
      this.skill_over.sk_shengtian = 25;
      this.combo2.punch_l = 5;
      this.combo2.squatPunch_l = 5;
      this.combo2.kick_l = 6;
      this.combo2.squatKick_l = 5;
      this.combo2.sk_bo = 11;
      this.combo2.sk_bo2 = 11;
      this.skill_over.sk_s_bo_s = 48;
      this.skill_over.sk_s_bo2_s = 42;
      this.skill_over.sk_s_fengyi_s = 75;
      this.skill_over.sk_s_qianlie_air_s = 35;
      this.skill_over.sk_s_qixing = 12;
      this.skill_over.sk_s_bo_ss = 51;
      this.skill_over.sk_s_zuhe = 15;
      this.skill_over.sk_s_tianxing = 16;
      this.beCancled = new Object();
      this.beCancled.punch = 1;
      this.beCancled.punch2 = 1;
      this.beCancled.kick_s1 = 1;
      this.beCancled.punch_l = 1;
      this.beCancled.kick = 1;
      this.beCancled.kick2 = 1;
      this.beCancled.kick_s1 = 1;
      this.beCancled.kick_s2 = 1;
      this.beCancled.kick_l = 1;
      this.beCancled.squatPunch = 1;
      this.beCancled.squatPunch_l = 1;
      this.beCancled.squatKick_l = 1;
      this.beCancled.jumpSkill_punch = 1;
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
      this.s_cancle.punch_l = {kick_l:1,squatPunch_l:1,squatKick_l:1,punch:1,kick:1};
      this.s_cancle.kick_l = {punch:1,kick:1};
      this.s_cancle.squatPunch_l = {punch_l:1,kick_l:1,squatKick_l:1,punch:1,kick:1};
      this.s_cancle.squatKick_l = {punch_l:1,kick_l:1,punch:1,kick:1};
      this.s_cancle.jumpSkill_punch = {sk_huixuan:1};
   }
}