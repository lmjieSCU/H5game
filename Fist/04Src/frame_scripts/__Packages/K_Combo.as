class K_Combo extends role_corn.Combo_listener
{
   function K_Combo(r)
   {
      super();
      this.role = r;
      this.init();
   }
   function init()
   {
      this.combo1 = new Object();
      this.combo1.sk_dfp = {kick:"sk_dfp_s3",kick_l:"sk_dfp_s2",kick_s2:"sk_dfp_s2"};
      this.combo1.sk_fdfp = {kick:"sk_fdfp_s2",kick_l:"sk_fdfp_s2"};
      this.combo2 = new Object();
      this.combo2.punch = 7;
      this.combo2.punch2 = 6;
      this.combo2.punch_s1 = 10;
      this.combo2.kick = 10;
      this.combo2.kick2 = 13;
      this.combo2.kick_s2 = 13;
      this.combo2.squatPunch = 8;
      this.combo2.heavyHit = 12;
      this.combo2.sk_dfp = 10;
      this.combo2.sk_dfp_s2 = 10;
      this.combo2.sk_dfp_s3 = 11;
      this.combo2.sk_fdfp = 18;
      this.combo2.sk_fdfp2 = 11;
      this.combo2.sk_dfk = 13;
      this.combo2.sk_sanduan_2 = 14;
      this.combo2.sk_dfk = 13;
      this.combo2.sk_dfk_hit = 13;
      this.skill_over = new Object();
      this.skill_over.punch = 11;
      this.skill_over.punch2 = 10;
      this.skill_over.punch_s1 = 14;
      this.skill_over.kick = 11;
      this.skill_over.kick2 = 10;
      this.skill_over.kick_s1 = 15;
      this.skill_over.kick_s2 = 15;
      this.skill_over.squatPunch = 10;
      this.skill_over.squatKick = 10;
      this.skill_over.heavyHit = 15;
      this.skill_over.sk_dfp = 18;
      this.skill_over.sk_fdfp = 18;
      this.skill_over.sk_fdfp2 = 13;
      this.skill_over.sk_dfk = 32;
      this.skill_over.sk_dbk = 18;
      this.skill_over.sk_s1 = 57;
      this.skill_over.sk_s2 = 24;
      this.skill_over.sk_s1_2 = 60;
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
