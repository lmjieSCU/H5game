class Type2_Mai_AI_Lv1 extends Type2_Mai_AI
{
   function Type2_Mai_AI_Lv1()
   {
      super();
      this.skill_init();
      this.combo_init();
      this.combo_rate0 = 0;
      this.attack_rate0 = 20;
      this.hold_rate0 = 15;
      this.attack_s0 = 5;
      this.wait_frame0 = 30;
      this.combo_risk = 0;
   }
   function skill_init()
   {
      this.dis_array[0] = 100;
      this.dis_array[1] = 150;
      this.dis_array[2] = 250;
      this.dis_array[3] = 300;
      this.dis_array[4] = 400;
      this.dis_array[5] = 1000;
      this.skill_dis[0] = ["punch_l","kick_s1","kick_l","kick","walk_f","sk_luan1"];
      this.skill_dis[1] = ["sk_luan1","squatKick","punch_l","kick_l","kick","heavyHit"];
      this.skill_dis[2] = ["sk_hulu","sk_longyanwu2","jump_f"];
      this.skill_dis[3] = ["sk_hulu","walk_f","dash_f","jump_f"];
      this.skill_dis[4] = ["sk_huadieshan","dash_f","walk_f"];
      this.skill_dis[5] = ["dash_f","walk_f","sk_huadieshan"];
      this.skill2_dis[0] = ["punch","punch","kick","sk_luan1"];
      this.skill2_dis[1] = ["squatKick","kick","sk_huaxing"];
      this.skill2_dis[2] = ["sk_luan1","sk_longyanwu2","sk_hulu","sk_bailu2","jump_f"];
      this.skill2_dis[3] = ["sk_hulu","sk_huadieshan","jump_f"];
      this.skill2_dis[4] = ["sk_hulu","sk_huadieshan","dash_f"];
      this.skill2_dis[5] = ["sk_huadieshan","dash_f"];
      this.dis_num = this.dis_array.length;
   }
   function combo_init()
   {
      this.combo_1 = new Object();
      this.combo_land = new Object();
      this.combo_auto = new Object();
      this.combo_burst = new Object();
      this.delay_frames = new Object();
      this.combo_1.punch = ["sk_hulu","sk_luan1","sk_bailu2","sk_longyanwu2"];
      this.combo_1.punch2 = ["sk_hulu","sk_luan1","sk_bailu2","sk_longyanwu2","sk_s_fenghuang","sk_s_hualan"];
      this.combo_1.punch_l = ["punch","kick","kick_l"];
      this.combo_1.kick_l = ["punch","kick"];
      this.combo_1.kick = ["sk_hulu","sk_luan1","sk_bailu2","sk_longyanwu2"];
      this.combo_1.kick2 = ["sk_hulu","sk_luan1","sk_bailu2","sk_longyanwu2","sk_s_fenghuang","sk_s_hualan"];
      this.combo_1.squatPunch = ["sk_luan1","sk_longyanwu2","sk_hulu","sk_bailu2"];
      this.combo_1.squatKick_l = ["punch_l"];
      this.combo_1.squatPunch_l = ["punch_l","squatKick_l"];
      this.combo_land.jump_f = ["punch","kick"];
      this.combo_1.sk_hulu = ["sk_tibing0"];
      this.combo_1.sk_luan1 = ["sk_luan2","sk_luan2","sk_luan","punch","kick","punch_l","kick_l","squatPunch","squatKick_l","squatPunch_l","sk_huaxing"];
      this.combo_1.sk_luan2 = ["sk_luan3"];
      this.combo_1.sk_luan3 = ["sk_luan4"];
      this.combo_1.sk_luan4 = ["sk_luan5"];
      this.combo_1.sk_hulu = ["sk_longyanwu2","sk_luan1","sk_bailu2","sk_huaxing"];
      this.combo_burst.punch2 = ["sk_s_fenghuang","sk_s_hualan","sk_s_fenshen","sk_s_heti2"];
      this.combo_burst.squatPunch = this.combo_burst.punch2;
      this.combo_burst.sk_luan1 = ["sk_bailu2","sk_s_hualan","sk_longyanwu2","sk_s_fenshen","sk_s_heti2"];
      this.combo_burst.sk_longyanwu2 = ["sk_bailu2","sk_luan1","sk_hulu","sk_s_fenshen","sk_s_fenghuang"];
      this.combo_burst.sk_bailu2 = ["sk_luan1","sk_hulu","sk_s_fenghuang","sk_s_hualan"];
      this.combo_burst.sk_s_fenghuang = ["sk_s_hualan","sk_s_fenshen","sk_s_heti"];
      this.combo_1.dash_f = ["squatKick_l","squatPunch_l","roll_f","jump_f","sk_huaxing"];
      this.delay_frames.dash_f = [130,130,130,250,250];
      this.combo_1.walk_f = ["pitch","punch_l","kick","jump_f","dash_f"];
      this.delay_frames.walk_f = [100,150,180,250,400];
      this.combo_1.walk_b = ["punch_l","kick","jump","jump_f"];
      this.delay_frames.walk_b = [100,150,200,260];
      this.action_1 = new Object();
      this.action_1.down = [["dash_b","roll_b","jump_b"],["walk_f","dash_f"]];
      this.delay_frames.down = [200,1000];
      this.action_1.oppRoll = [["punch_l","squatPunch_l"],["squatKick_l","kick_l"]];
      this.delay_frames.oppRoll = [150,300];
      this.action_1.oppJump = [["sk_bailu2","walk_b"],["sk_bailu2","jump"]];
      this.delay_frames.oppJump = [150,250];
      this.action_1.wander = [["roll_b","jump_b"],["wait","jump_b","walk_f","dash_b"],["dash_f","wait"]];
      this.delay_frames.wander = [150,300,1000];
      this.action_1.defend = [["walk_b","walk_b"],["walk_b","roll_b"],["walk_b","dash_b","jump_b","roll_b"],["walk_b","wait"]];
      this.delay_frames.defend = [130,200,400,1000];
      this.action_1.defendAttack = [["sk_bailu2",this.skillObj.s1,this.skillObj.s2]];
      this.delay_frames.defendAttack = [200];
      this.action_1.defend_f = [["roll_f"],["hold_u"]];
      this.delay_frames.defend_f = [150,1000];
      this.action_1.defend_h = [["hold_u","hold_u","roll_f"],["hold_u","roll_b"],["hold_u"]];
      this.delay_frames.defend_h = [130,200,1000];
      this.action_1.onEgde = [["attack","roll_f"],["attack"],["attack","dash_f"],["walk_f","dash_f"]];
      this.delay_frames.onEgde = [150,250,400,1000];
      this.action_1.pos_down = [["squatKick_l","squatKick"],["squatKick","sk_huaxing"]];
      this.delay_frames.pos_down = [150,250];
      this.action_1.pos_up = [["pitch","kick_s1"],["jump_f","kick_s1"]];
      this.delay_frames.pos_up = [100,250];
      this.action_1.super = [["sk_s_fenghuang","sk_s_hualan"],["sk_s_hualan"]];
      this.delay_frames.super = [250,300];
      this.action_1.busrt = [["sk_s_fenshen","sk_s_heti2"]];
      this.delay_frames.busrt = [300];
   }
}
