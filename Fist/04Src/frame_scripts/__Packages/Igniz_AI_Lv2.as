class Igniz_AI_Lv2 extends Igniz_AI
{
   function Igniz_AI_Lv2()
   {
      super();
      this.skill_init();
      this.combo_init();
      this.combo_rate0 = 30;
      this.attack_rate0 = 40;
      this.hold_rate0 = 40;
      this.attack_s0 = 15;
      this.wait_frame0 = 25;
      this.combo_risk = 50;
   }
   function skill_init()
   {
      this.dis_array[0] = 100;
      this.dis_array[1] = 150;
      this.dis_array[2] = 250;
      this.dis_array[3] = 300;
      this.dis_array[4] = 400;
      this.dis_array[5] = 1000;
      this.skill_dis[0] = ["punch_l","squatPunch_l","punch","kick","db_k","db_p"];
      this.skill_dis[1] = ["squatKick","punch_l","kick_l","kick","df_pl","db_k","db_p"];
      this.skill_dis[2] = ["db_k","db_k","df_ph","db_p"];
      this.skill_dis[3] = ["walk_f","dash_f","db_p","db_pl"];
      this.skill_dis[4] = ["dash_f","db_pl","walk_f"];
      this.skill_dis[5] = ["dash_f","db_pl"];
      this.skill2_dis[0] = ["punch_l","squatPunch_l","punch"];
      this.skill2_dis[1] = ["db_p","squatKick","kick","db_p"];
      this.skill2_dis[2] = ["dfdf_p","fdf_ph","fdf_pl"];
      this.skill2_dis[3] = ["dfdf_k","db_k","df_pl","df_ph"];
      this.skill2_dis[4] = ["db_pl","walk_f","dash_f"];
      this.skill2_dis[5] = ["db_pl","dash_f"];
      this.dis_num = this.dis_array.length;
   }
   function combo_init()
   {
      this.combo_1 = new Object();
      this.combo_land = new Object();
      this.combo_auto = new Object();
      this.combo_burst = new Object();
      this.delay_frames = new Object();
      this.combo_1.punch = ["df_pl","df_ph","db_k","fdf_p","dfdf_p","dfdb_k","dfdb_p"];
      this.combo_burst.punch2 = this.combo_1.punch;
      this.combo_1.punch_l = ["punch_l","punch_l","kick_l"];
      this.combo_1.kick_l = ["kick_l"];
      this.combo_1.kick = this.combo_1.punch;
      this.combo_1.squatPunch = this.combo_1.punch;
      this.combo_1.squatKick_l = ["squatPunch_l"];
      this.combo_1.squatPunch_l = ["punch_l","squatPunch_l","squatPunch_l"];
      this.combo_1.df_ph = ["df_pl","db_k","fdf_p"];
      this.combo_land.jump_f = ["punch","kick"];
      this.combo_burst.punch2 = ["df_pl","df_ph","fdf_p","db_o"];
      this.combo_burst.kick = this.combo_burst.punch2;
      this.combo_burst.squatPunch = this.combo_burst.punch2;
      this.combo_burst.df_pl = ["df_ph","db_o"];
      this.combo_burst.df_ph = ["dfdf_k","dfdb_p","df_o"];
      this.combo_burst.dfdf_p = ["dfdf_k","dfdb_p","df_o"];
      this.combo_burst.dfdf_k = ["dfdf_p","df_o"];
      this.combo_oppOnEgde.dfdf_k = [true,true];
      this.combo_1.dash_f = ["squatKick_l","squatPunch_l","roll_f"];
      this.delay_frames.dash_f = [130,130,130,250,250];
      this.combo_1.walk_f = ["pitch","punch_l","kick","dash_f"];
      this.delay_frames.walk_f = [100,150,180,250,400];
      this.combo_1.walk_b = ["punch_l","kick"];
      this.delay_frames.walk_b = [100,150,200,260];
      this.action_1 = new Object();
      this.action_1.down = [["dash_b","roll_b","jump_b","dfdb_p"],["db_o","dash_f"]];
      this.delay_frames.down = [200,1000];
      this.action_1.oppRoll = [["punch_l","squatPunch_l","db_k"],["squatKick_l","kick_l","db_k"]];
      this.delay_frames.oppRoll = [150,300];
      this.action_1.wander = [["roll_b","jump_b"],["wait","jump_b","walk_f","dash_b"],["dash_f","wait"]];
      this.delay_frames.wander = [150,300,1000];
      this.action_1.defend = [["walk_b","walk_b"],["walk_b","roll_b"],["walk_b","dash_b","jump_b","roll_b"],["walk_b","wait"]];
      this.delay_frames.defend = [130,200,400,1000];
      this.action_1.defend_f = [["roll_f","hold_u"],["hold_u"]];
      this.delay_frames.defend_f = [150,1000];
      this.action_1.defend_h = [["hold_u","hold_u","roll_f"],["hold_u","roll_b"],["hold_u"]];
      this.delay_frames.defend_h = [130,200,1000];
      this.action_1.onEgde = [["attack","roll_f"],["attack"],["attack","dash_f"],["walk_f","dash_f"]];
      this.delay_frames.onEgde = [150,250,400,1000];
      this.action_1.pos_down = [["squatKick_l","squatKick"],["squatKick"]];
      this.delay_frames.pos_down = [150,250];
      this.action_1.pos_up = [["pitch"],["jump_f"]];
      this.delay_frames.pos_up = [100,250];
      this.action_1.oppJump = [["fdf_p","walk_b","dfdb_p"],["dfdb_p","db_o","jump"]];
      this.delay_frames.oppJump = [200,300];
      this.action_1.defendAttack = [["fdf_p","db_k","db_o"],["df_o","dfdf_k"]];
      this.delay_frames.defendAttack = [200,400];
      this.action_1.super = [["dfdf_k","dfdb_p"],["dfdb_p","dfdf_k"]];
      this.delay_frames.super = [300,450];
      this.action_1.busrt = [["df_o","db_o"],["db_o"]];
      this.delay_frames.busrt = [300,1000];
   }
   function checkStrage()
   {
      this.actionType = "attack";
      this.cpu_control2 = this.cpu_attack;
   }
}
