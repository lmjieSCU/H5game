class Haohmaru_Combo extends role_corn.Combo_listener
{
   function Haohmaru_Combo(r)
   {
      super();
      this.role = r;
      this.init();
   }
   function init()
   {
      this.combo1 = new Object();
      if(this.role instanceof Type2_Haohmaru_role)
      {
         this.combo1.punch2 = {punch3:"kick_l"};
         this.combo1.squatPunch = {punch3:"punch4"};
      }
      this.combo2 = new Object();
      this.skill_over = new Object();
      this.combo2.fdb_k = 20;
      this.skill_over.fdb_k = 26;
      this.combo2.dfdf_k_EX = 20;
      this.skill_over.dfdf_k_EX = 50;
      this.combo2.fdbf_p_EX = 16;
      this.skill_over.fdbf_p_EX = 87;
      this.combo2.dfdf_p = 20;
      this.skill_over.dfdf_p = 39;
      this.combo2.fdf_k = 10;
      this.skill_over.fdf_k = 17;
      this.combo2.db_k = 6;
      this.skill_over.db_k = 11;
      this.combo2.bdf_p = 5;
      this.skill_over.bdf_p = 24;
      this.combo2.f_kl = 6;
      this.skill_over.f_kl = 4;
      this.combo2.punch_l = 3;
      this.skill_over.punch_l = 5;
      this.combo2.punch = 7;
      this.skill_over.punch = 9;
      this.combo2.punch3 = 7;
      this.skill_over.punch3 = 9;
      this.combo2.f_pl = 11;
      this.skill_over.f_pl = 16;
      this.combo2.punch2 = 7;
      this.skill_over.punch2 = 12;
      this.combo2.kick_l = 7;
      this.skill_over.kick_l = 12;
      this.combo2.kick = 10;
      this.skill_over.kick = 14;
      this.combo2.kick2 = 6;
      this.skill_over.kick2 = 13;
      this.combo2.squatPunch = 5;
      this.skill_over.squatPunch = 8;
      this.combo2.squatPunch_l = 3;
      this.skill_over.squatPunch_l = 5;
      this.combo2.squatKick = 8;
      this.skill_over.squatKick = 13;
      this.combo2.squatKick_l = 3;
      this.skill_over.squatKick_l = 5;
      this.combo2.bdb_pl = 12;
      this.skill_over.bdb_pl = 22;
      this.combo2.bdb_kl = 12;
      this.skill_over.bdb_kl = 22;
      this.combo2.rfdf_pl = 8;
      this.skill_over.rfdf_pl = 20;
      this.combo2.rfdf_kl = 8;
      this.skill_over.rfdf_kl = 22;
      this.combo2.fdf_pl = 4;
      this.skill_over.fdf_pl = 18;
      this.combo2.fdf_kl = 4;
      this.skill_over.fdf_kl = 21;
      this.combo2.df_plEX = 9;
      this.skill_over.df_plEX = 15;
      this.combo2.df_klEX = 9;
      this.skill_over.df_klEX = 15;
      this.combo2.df_pEX = 7;
      this.skill_over.df_pEX = 15;
      this.combo2.heavyHit = 12;
      this.skill_over.heavyHit = 15;
      this.combo2.dash_pl = 8;
      this.skill_over.dash_pl = 9;
      this.combo2.dash_k = 8;
      this.skill_over.dash_k = 9;
      this.combo2.f_p = 9;
      this.skill_over.f_p = 13;
      this.combo2.f_p_EX = 8;
      this.skill_over.f_p_EX = 10;
      this.combo2.df_p = 9;
      this.skill_over.df_p = 25;
      this.combo2.bdf_k = 24;
      this.skill_over.bdf_k = 30;
      this.combo2.df_p = 14;
      this.skill_over.df_p = 35;
      this.combo2.df_pl = 6;
      this.skill_over.df_pl = 23;
      this.combo2.df_p_EX = 17;
      this.skill_over.df_p_EX = 32;
      this.skill_over.db_k = 18;
      this.combo2.fdb_p_EX = 16;
      this.skill_over.fdb_p_EX = 21;
      this.combo2.db_p = 28;
      this.skill_over.db_p = 28;
      this.combo2.fdf_p = 4;
      this.skill_over.fdf_p = 24;
      this.combo2.fdf_p_EX = 17;
      this.skill_over.fdf_p_EX = 29;
      this.combo2.fdf_kl = 3;
      this.skill_over.fdf_kl = 26;
      this.combo2.df_kl = 12;
      this.skill_over.df_kl = 26;
      this.skill_over.fdf_kh = 34;
      this.skill_over.fdf_k_EX = 30;
      this.combo2.df_k_EX = 9;
      this.skill_over.df_k_EX = 17;
      this.combo2.df_k1 = 11;
      this.skill_over.df_k1 = 16;
      this.combo2.df_k2 = 9;
      this.skill_over.df_k2 = 15;
      this.combo2.df_k3 = 5;
      this.skill_over.df_k3 = 10;
      this.combo2.db_k = 16;
      this.skill_over.db_k = 15;
      this.combo2.dbdf_p = 14;
      this.skill_over.dbdf_p = 25;
      this.skill_over.dbdf_p_max = 39;
      this.skill_over.dbdf_p_max_EX = 46;
      this.combo2.dfdf_k = 52;
      this.skill_over.dfdf_k = 46;
      this.skill_over.dfdf_k_max = 68;
      this.combo2.dfdf_k_EX = 26;
      this.skill_over.dfdf_k_EX = 56;
      this.skill_over.dfdf_k_EX_max = 59;
      this.skill_over.df_o = 110;
      this.skill_over.db_o = 49;
      this.skill_over.df_o_EX = 108;
      this.skill_over.db_o_EX = 130;
      this.beCancled = new Object();
      this.beCancled.punch = 1;
      this.beCancled.punch2 = 1;
      this.beCancled.punch3 = 1;
      this.beCancled.kick_s1 = 1;
      this.beCancled.punch_l = 1;
      this.beCancled.f_kl = 1;
      this.beCancled.kick = 1;
      this.beCancled.kick2 = 1;
      this.beCancled.kick_s1 = 1;
      this.beCancled.kick_s2 = 1;
      this.beCancled.kick_l = 1;
      this.beCancled.f_p = 1;
      this.beCancled.f_p_EX = 1;
      this.beCancled.f_pl = 1;
      this.beCancled.squatPunch = 1;
      this.beCancled.squatPunch_l = 1;
      this.beCancled.squatKick_l = 1;
      this.beCancled.jumpSkill_punch = 1;
      this.notTOcancle = new Object();
      this.notTOcancle.punch = 1;
      this.notTOcancle.punch_l = 1;
      this.notTOcancle.punch3 = 1;
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