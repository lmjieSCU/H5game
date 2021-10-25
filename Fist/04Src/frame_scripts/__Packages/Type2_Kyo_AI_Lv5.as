class Type2_Kyo_AI_Lv5 extends Type2_Kyo_AI
{
   function Type2_Kyo_AI_Lv5()
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
      this.dis_array[2] = 200;
      this.dis_array[3] = 250;
      this.dis_array[4] = 300;
      this.dis_array[5] = 400;
      this.dis_array[6] = 1000;
      this.skill_dis[0] = ["punch_l","kick_l","walk_f","squatKick","squatPunch"];
      this.skill_dis[1] = ["kick_l","sk1","sk0","heavyHit","sk43_l","squatKick","squatKick_s"];
      this.skill_dis[2] = ["kick_l","sk43","jump_f"];
      this.skill_dis[3] = ["sk43","walk_f","jump_f"];
      this.skill_dis[4] = ["sk30","walk_f","dash_f","jump_f"];
      this.skill_dis[5] = ["dash_f","walk_f","sk30"];
      this.skill_dis[6] = ["dash_f","dash_f","sk30"];
      this.skill2_dis[0] = ["punch","kick","squatPunch"];
      this.skill2_dis[1] = ["kick","sk43_l","squatKick","squatKick_s"];
      this.skill2_dis[2] = ["sk30","sk43","jump_f"];
      this.skill2_dis[3] = ["sk30","sk43","sk_canggui","jump_f"];
      this.skill2_dis[4] = ["sk30","sk_canggui","dash_f"];
      this.skill2_dis[5] = ["dash_f","sk30"];
      this.skill2_dis[6] = ["dash_f","sk30"];
      this.dis_num = this.dis_array.length;
   }
   function combo_init()
   {
      this.combo_1 = new Object();
      this.combo_land = new Object();
      this.combo_auto = new Object();
      this.combo_burst = new Object();
      this.delay_frames = new Object();
      this.combo_oppOnEgde = new Object();
      this.combo_auto.sk1 = ["sk1_2"];
      this.combo_1.punch = ["sk43","sk_longche"];
      this.combo_1.punch2 = ["kick2","sk1","sk43_l","sk43","sk_canggui","sk_longche","sk31","sk_s_120"];
      this.combo_1.kick = ["sk1","sk1","sk43","sk_canggui","sk_longche"];
      this.combo_1.kick1 = ["sk1","sk1","sk43_l","sk43","sk_canggui","sk_longche","sk_s_120"];
      this.combo_1.kick2 = ["sk1","sk1","sk43_l","sk43","sk_canggui","sk_longche","sk31","sk_s_120"];
      this.combo_1.squatPunch = ["squatKick_s","sk1","sk43","sk_canggui","sk_longche"];
      this.combo_land.sk1_2 = ["sk43","sk0","sk_longche","sk2","sk31","sk_s_120"];
      this.delay_frames.sk1_2 = [0,0,6,0,2,2,0];
      this.combo_land.jump_f = ["punch","kick","kick2"];
      this.combo_land.punch_l = ["punch_l","kick_l","squatKick_l","punch"];
      this.combo_land.squatKick_l = ["squatKick_l","squatKick_s","kick2"];
      this.combo_land.squatPunch_l = ["squatPunch_l","squatKick_l","squatKick_s","kick2"];
      this.combo_1.dash_f = ["roll_f","punch","attack","jump_f","attack"];
      this.delay_frames.dash_f = [120,150,200,250,300];
      this.combo_1.walk_f = ["pitch","punch","kick_l","jump_f","dash_f"];
      this.delay_frames.walk_f = [100,120,180,230,400];
      this.combo_1.walk_b = ["punch","kick","kick_l","jump_f","sk43"];
      this.delay_frames.walk_b = [100,100,180,260,300];
      this.combo_burst.heavyHit = ["sk0","sk_longche","sk31","sk_s_120","sk34","sk35"];
      this.combo_burst.sk43 = ["sk1","heavyHit","sk31","sk_s_120","sk34","sk35"];
      this.combo_oppOnEgde.sk28 = [true,true,true,true,true,true];
      this.combo_burst.sk43_l = ["sk1","heavyHit","sk31","sk_s_120","sk34","sk35"];
      this.combo_oppOnEgde.sk28 = [true,true,true,true,true,true];
      this.combo_burst.sk_s_120 = ["sk34","sk34","sk35","sk31"];
      this.combo_oppOnEgde.sk_s_120 = [false,false,true,true];
      this.combo_burst.sk31 = ["sk_s_120","sk34","sk35"];
      this.action_1 = new Object();
      this.action_1.down = [["dash_b","roll_b","jump_b"],["walk_f","dash_f"]];
      this.delay_frames.down = [200,1000];
      this.action_1.oppRoll = [["punch_l","squatPunch_l"],["squatKick_l","kick_l"]];
      this.delay_frames.oppRoll = [150,300];
      this.action_1.oppJump = [["sk0","squatPunch"],["sk0"]];
      this.delay_frames.oppJump = [150,300];
      this.action_1.wander = [["roll_b","jump_b"],["wait","jump_b","walk_f"],["dash_f","wait"]];
      this.delay_frames.wander = [150,300,1000];
      this.action_1.defend = [["walk_b","walk_b","roll_f"],["walk_b","roll_b"],["walk_b","dash_b","jump_b","roll_b"],["walk_b","wait"]];
      this.delay_frames.defend = [130,200,400,1000];
      this.action_1.defendAttack = [["sk0","hold_u","hold_u"]];
      this.delay_frames.defendAttack = [150];
      this.action_1.defend_f = [["roll_f"],["hold_u"]];
      this.delay_frames.defend_f = [150,1000];
      this.action_1.defend_h = [["hold_u","hold_u","roll_f"],["hold_u","roll_b"],["hold_u"]];
      this.delay_frames.defend_h = [130,200,1000];
      this.action_1.onEgde = [["attack","roll_f"],["attack"],["attack"],["walk_f","dash_f"]];
      this.delay_frames.onEgde = [150,250,400,1000];
      this.action_1.pos_down = [["squatKick_l","squatKick_s"],["squatKick","squatKick_s"]];
      this.delay_frames.pos_down = [150,200];
      this.action_1.pos_up = [["pitch"],["kick2"],["jump_f"]];
      this.delay_frames.pos_up = [100,150,250];
      this.action_1.super = [["sk_s_120","sk31"],["sk31"]];
      this.delay_frames.super = [180,250];
      this.action_1.busrt = [["sk35","sk_s34"],["sk_s34"]];
      this.delay_frames.busrt = [250,500];
   }
}
