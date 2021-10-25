class Igniz_Combo extends role_corn.Combo_listener
{
   function Igniz_Combo(r)
   {
      super();
      this.role = r;
      this.init();
   }
   function init()
   {
      this.combo1 = new Object();
      this.combo2 = new Object();
      this.skill_over = new Object();
      this.combo2.punch_l = 3;
      this.skill_over.punch_l = 5;
      this.combo2.punch = 6;
      this.skill_over.punch = 14;
      this.combo2.punch2 = 10;
      this.skill_over.punch2 = 12;
      this.combo2.kick_l = 4;
      this.skill_over.kick_l = 6;
      this.combo2.kick = 3;
      this.skill_over.kick = 8;
      this.combo2.kick2 = 3;
      this.skill_over.kick2 = 8;
      this.combo2.squatPunch = 5;
      this.skill_over.squatPunch = 12;
      this.combo2.squatPunch_l = 2;
      this.skill_over.squatPunch_l = 6;
      this.combo2.squatKick = 5;
      this.skill_over.squatKick = 7;
      this.combo2.squatKick_l = 3;
      this.skill_over.squatKick_l = 5;
      this.combo2.heavyHit = 13;
      this.skill_over.heavyHit = 22;
      this.combo2.df_ph = 11;
      this.skill_over.df_ph = 26;
      this.combo2.df_pl = 13;
      this.skill_over.df_pl = 26;
      this.combo2.df_k = 11;
      this.skill_over.df_k = 16;
      this.combo2.db_k = 11;
      this.skill_over.db_k = 17;
      this.combo2.db_p = 11;
      this.skill_over.db_p = 19;
      this.combo2.db_pl = 13;
      this.skill_over.db_pl = 17;
      this.combo2.fdf_p = 7;
      this.skill_over.db_pl = 33;
      this.combo2.fdf_pl = 7;
      this.skill_over.db_pl = 20;
      this.combo2.dfdf_p = 25;
      this.skill_over.dfdf_p = 30;
      this.combo2.dbdf_p = 24;
      this.skill_over.dbdf_p = 222;
      this.skill_over.dbdf_p_max = 222;
      this.combo2.dfdf_k = 16;
      this.skill_over.dfdf_k = 26;
      this.skill_over.dfdf_k_max = 39;
      this.skill_over.df_o = 102;
      this.skill_over.db_o = 6;
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
      this.beCancled.df_p = 1;
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
   }
}
