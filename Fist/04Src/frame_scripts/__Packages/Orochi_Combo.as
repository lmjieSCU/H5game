class Orochi_Combo extends role_corn.Combo_listener
{
   function Orochi_Combo(r)
   {
      super();
      this.role = r;
      this.init();
   }
   function init()
   {
      this.combo1 = new Object();
      this.combo2 = new Object();
      this.combo2.punch_l = 5;
      this.combo2.punch = 8;
      this.combo2.kick_l = 13;
      this.combo2.kick = 10;
      this.combo2.heavyHit = 20;
      this.combo2.sk_dfp = 16;
      this.combo2.sk_dbp = 25;
      this.combo2.sk_dbp_l = 23;
      this.combo2.sk_dfk_l = 20;
      this.combo2.sk_dfk = 20;
      this.combo2.sk_s_lunhui = 18;
      this.skill_over = new Object();
      this.skill_over.punch_l = 7;
      this.skill_over.punch = 10;
      this.skill_over.kick_l = 14;
      this.skill_over.kick = 12;
      this.skill_over.heavyHit = 20;
      this.skill_over.sk_s_zhuanpan = 36;
      this.skill_over.sk_s_qianshou1 = 33;
      this.skill_over.sk_s_jiguang = 72;
      this.skill_over.sk_s_sanhua = 185;
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
   }
}
