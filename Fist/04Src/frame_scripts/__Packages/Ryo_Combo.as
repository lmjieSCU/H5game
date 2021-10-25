class Ryo_Combo extends role_corn.Combo_listener
{
   function Ryo_Combo(r)
   {
      super();
      this.role = r;
      this.init();
   }
   function init()
   {
      this.combo1 = new Object();
      this.combo1.sk_BGX = {punch:"sk_BGX_s3",kick:"sk_BGX_s2"};
      this.combo2 = new Object();
      this.combo2.punch = 9;
      this.combo2.punch2 = 5;
      this.combo2.kick = 10;
      this.combo2.kick1 = 9;
      this.combo2.kick2 = 11;
      this.combo2.squatPunch = 7;
      this.combo2.sk1 = 25;
      this.combo2.sk3 = 5;
      this.combo2.sk_BGX = 5;
      this.combo2.sk10 = 8;
      this.combo2.sk14 = 52;
      this.combo2.heavyHit = 10;
      this.combo2.sk_s3 = 80;
      this.skill_over = new Object();
      this.skill_over.punch = 10;
      this.skill_over.punch2 = 6;
      this.skill_over.kick = 10;
      this.skill_over.kick2 = 13;
      this.skill_over.squatKick = 10;
      this.skill_over.squatPunch = 11;
      this.skill_over.heavyHit = 13;
      this.skill_over.sk1 = 55;
      this.skill_over.sk2 = 33;
      this.skill_over.sk3 = 14;
      this.skill_over.sk_BGX = 17;
      this.skill_over.sk10 = 27;
      this.skill_over.sk12 = 44;
      this.skill_over.sk13 = 47;
      this.skill_over.sk_s3 = 48;
      this.skill_over.sk_s3_s = 48;
      this.skill_over.sk_s_q1 = 50;
      this.skill_over.sk_s_q2 = 20;
      this.beCancled = new Object();
      this.beCancled.punch = 1;
      this.beCancled.punch2 = 1;
      this.beCancled.kick = 1;
      this.beCancled.kick1 = 1;
      this.beCancled.kick2 = 1;
      this.beCancled.punch_l = 1;
      this.beCancled.kick_l = 1;
      this.beCancled.squatPunch = 1;
      this.beCancled.squatPunch_l = 1;
      this.beCancled.squatKick_l = 1;
      this.notTOcancle = new Object();
      this.notTOcancle.punch = 1;
      this.notTOcancle.punch2 = 1;
      this.notTOcancle.kick = 1;
      this.notTOcancle.kick2 = 1;
      this.notTOcancle.punch_l = 1;
      this.notTOcancle.kick_l = 1;
      this.notTOcancle.squatPunch_l = 1;
      this.notTOcancle.squatKick_l = 1;
      this.notTOcancle.squatKick = 1;
      this.notTOcancle.pitch = 1;
      this.noCancle = new Object();
      this.noCancle.punch = "punch2";
      this.noCancle.punch2 = "punch";
      this.noCancle.kick = "kick2";
      this.noCancle.kick2 = "kick";
      this.s_cancle = new Object();
   }
}
