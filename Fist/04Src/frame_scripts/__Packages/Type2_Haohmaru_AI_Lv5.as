class Type2_Haohmaru_AI_Lv5 extends Type2_Haohmaru_AI
{
   function Type2_Haohmaru_AI_Lv5()
   {
      super();
      this.skill_init();
      this.combo_init();
      this.combo_rate0 = 100;
      this.attack_rate0 = 100;
      this.hold_rate0 = 100;
      this.attack_s0 = 70;
      this.wait_frame0 = 0;
      this.combo_risk = 20;
   }
   function skill_init()
   {
      this.dis_array[0] = 100;
      this.dis_array[1] = 150;
      this.dis_array[2] = 250;
      this.dis_array[3] = 300;
      this.dis_array[4] = 400;
      this.dis_array[5] = 1000;
      this.skill_dis[0] = ["squatPunch","punch2","f_pl_EX","kick_l","kick","f_pl_EX","walk_f","fdf_k","fdb_k"];
      this.skill_dis[1] = ["squatKick","punch2","kick_l","kick","f_pl_EX","df_k_EX","fdf_k","fdf_pl"];
      this.skill_dis[2] = ["punch3","df_k_EX","df_pEX","df_pEX","fdf_pl","fdf_k","jump_f"];
      this.skill_dis[3] = ["punch3","walk_f","dash_f","jump_f"];
      this.skill_dis[4] = ["df_pEX","dash_f","punch3","walk_f"];
      this.skill_dis[5] = ["df_pEX","dash_f","walk_f"];
      this.skill2_dis[0] = ["squatPunch","punch2","f_pl_EX","kick","fdb_k"];
      this.skill2_dis[1] = ["squatKick","punch2","f_pl_EX","kick","fdb_k"];
      this.skill2_dis[2] = ["fdbf_p_EX","fdf_k","punch2","dfdf_k_EX","jump_f"];
      this.skill2_dis[3] = ["punch2","jump_f","fdf_k","dash_f"];
      this.skill2_dis[4] = ["punch3","df_pEX","dash_f"];
      this.skill2_dis[5] = ["df_pEX","punch3","dash_f"];
      this.dis_num = this.dis_array.length;
   }
   function combo_init()
   {
      this.combo_1 = new Object();
      this.combo_land = new Object();
      this.combo_auto = new Object();
      this.combo_burst = new Object();
      this.delay_frames = new Object();
      this.combo_1.punch3 = ["f_pl_EX","df_pEX","fdf_k","fdf_pl","df_k_EX","fdf_pl","fdf_k","dfdf_k_EX","fdbf_p_EX"];
      this.combo_1.punch2 = ["punch3","kick_l","f_pl_EX","df_pEX","fdf_k","fdf_pl","df_k_EX"];
      this.combo_1.punch_l = ["punch3","kick","kick_l","kick_l"];
      this.combo_1.kick_l = ["punch3","kick_l","kick_l","kick"];
      this.combo_1.f_pl_EX = ["f_pl_EX","df_pEX","fdf_k","fdf_pl","df_k_EX","fdf_kl","dfdf_k_EX","fdbf_p_EX"];
      this.combo_1.kick = ["punch3","df_pEX","fdf_k","fdf_pl","df_k_EX","fdf_pl","fdf_kl","dfdf_k_EX","fdbf_p_EX"];
      this.combo_1.kick2 = ["df_pEX","fdf_k","fdf_pl","df_k_EX","fdf_kl","dfdf_k_EX","fdbf_p_EX"];
      this.combo_1.squatPunch = ["punch4","punch4","fdf_k","fdf_pl","df_k_EX","dfdf_k_EX","fdbf_p_EX"];
      this.combo_1.squatKick_l = ["punch_l","dash_k","squatKick_l"];
      this.combo_1.squatPunch_l = ["punch_l","squatKick_l"];
      this.combo_1.df_pEX = ["fdf_pl","fdf_k","df_k_EX","fdf_kl","dfdf_k_EX","fdbf_p_EX"];
      this.combo_1.df_k_EX = ["df_k_EX"];
      this.combo_1.fdb_k = ["fdb_k","punch4","punch4","fdf_k","fdf_pl","df_k_EX","dfdf_k_EX","fdbf_p_EX"];
      this.combo_1.fdf_k = ["fdb_k","punch4","punch4","fdf_k","fdf_pl","df_k_EX","dfdf_k_EX","fdbf_p_EX"];
      this.combo_land.jump_f = ["punch","kick"];
      this.combo_burst.punch = ["df_pEX","fdf_kl","fdf_pl","dfdf_k_EX","fdbf_p_EX","df_o_EX","db_o_EX"];
      this.combo_burst.kick2 = ["df_pEX","fdf_kl","fdf_pl","dfdf_k_EX","fdbf_p_EX","df_o_EX","db_o_EX"];
      this.combo_burst.squatPunch = this.combo_burst.punch2;
      this.combo_1.df_pEX = ["fdf_kl","dfdf_k_EX","fdbf_p_EX","df_o_EX","db_o_EX"];
      this.combo_burst.fdbf_p_EX = ["dfdf_k_EX","df_o_EX"];
      this.combo_burst.df_k_EX = ["df_k_EX","fdf_pl","fdf_kl","dfdf_k_EX","df_o_EX","db_o_EX"];
      this.combo_oppOnEgde.fdbf_p_EX = [true,true];
      this.combo_1.dash_f = ["squatKick_l","squatPunch_l","fdb_k","punch3"];
      this.delay_frames.dash_f = [100,130,200,250];
      this.combo_1.walk_f = ["punch_l","kick","punch2","jump_f","dash_f"];
      this.delay_frames.walk_f = [100,150,180,250,400];
      this.combo_1.walk_b = ["punch_l","kick","punch2","jump","jump_f"];
      this.delay_frames.walk_b = [100,150,200,260];
      this.action_1 = new Object();
      this.action_1.down = [["dash_f","roll_b","jump_b","fdf_k","punch2"],["walk_f","dash_f"]];
      this.delay_frames.down = [200,1000];
      this.action_1.oppRoll = [["punch_l","fdb_k","squatPunch","punch2"],["fdf_k","squatKick_l","punch3","kick_l"]];
      this.delay_frames.oppRoll = [150,300];
      this.action_1.wander = [["roll_b","fdb_k","jump_b","punch2"],["wait","jump_b","walk_f","dash_f"],["dash_f","wait"]];
      this.delay_frames.wander = [150,300,1000];
      this.action_1.defend = [["walk_b","fdb_k","punch2","walk_b"],["walk_b","roll_b"],["walk_b","dash_f","jump_b","roll_b"],["walk_b","wait"]];
      this.delay_frames.defend = [130,200,400,1000];
      this.action_1.defend_f = [["punch2","roll_f"],["hold_u"]];
      this.delay_frames.defend_f = [150,1000];
      this.action_1.defend_h = [["hold_u","hold_u","roll_f"],["hold_u","roll_b"],["hold_u"]];
      this.delay_frames.defend_h = [130,200,1000];
      this.action_1.onEgde = [["punch2","fdb_k","attack","roll_f"],["fdf_k","attack"],["attack","dash_f"],["walk_f","dash_f"]];
      this.delay_frames.onEgde = [100,250,400,1000];
      this.action_1.pos_down = [["squatPunch","squatKick"],["squatKick"]];
      this.delay_frames.pos_down = [150,250];
      this.action_1.pos_up = [["pitch","fdb_k"],["jump_f"]];
      this.delay_frames.pos_up = [100,250];
      this.action_1.oppJump = [["fdb_k","fdb_k","walk_b","fdbf_p_EX"],["fdbf_p_EX","dfdf_k_EX"]];
      this.delay_frames.oppJump = [100,150];
      this.action_1.defendAttack = [["db_o_EX"],["df_o_EX"]];
      this.delay_frames.defendAttack = [100,200];
      this.action_1.super = [["dfdf_k_EX","fdbf_p_EX"],["dfdf_k_EX"]];
      this.delay_frames.super = [100,150];
      this.action_1.busrt = [["db_o_EX","df_o_EX"],["df_o_EX"]];
      this.delay_frames.busrt = [100,200];
   }
}
