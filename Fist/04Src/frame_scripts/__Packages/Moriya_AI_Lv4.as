class Moriya_AI_Lv4 extends Moriya_AI
{
   function Moriya_AI_Lv4()
   {
      super();
      this.skill_init();
      this.combo_init();
      this.combo_rate0 = 80;
      this.attack_rate0 = 70;
      this.hold_rate0 = 100;
      this.attack_s0 = 50;
      this.wait_frame0 = 10;
      this.combo_risk = 40;
   }
   function skill_init()
   {
      this.dis_array[0] = 100;
      this.dis_array[1] = 150;
      this.dis_array[2] = 200;
      this.dis_array[3] = 300;
      this.dis_array[4] = 400;
      this.dis_array[5] = 1000;
      this.skill_dis[0] = ["punch_l","kick_l","squatKick","walk_f"];
      this.skill_dis[1] = ["punch","punch3","squatPunch","kick","heavyHit"];
      this.skill_dis[2] = ["punch","punch3","squatPunch","sk_long_u","sk_long_m","sk_long_d","sk_xinyue","sk_xinyue2","sk_yueying_a1"];
      this.skill_dis[3] = ["sk_long_m","sk_long_d","sk_yueying_a1","sk_yueying_c1","jump_f"];
      this.skill_dis[4] = ["sk_yueying_c1","walk_f","dash_f","jump_f"];
      this.skill_dis[5] = ["dash_f","walk_f"];
      this.dis_num = this.dis_array.length;
   }
   function combo_init()
   {
      this.combo_1 = new Object();
      this.combo_land = new Object();
      this.combo_auto = new Object();
      this.combo_burst = new Object();
      this.delay_frames = new Object();
      this.combo_1.punch = ["sk_long_m","sk_long_d","sk_yueying_a1","sk_yueying_c1"];
      this.combo_1.punch2 = ["sk_long_m","sk_long_d","sk_yueying_a1","sk_yueying_c1","sk_s1","sk_s2"];
      this.combo_1.punch_l = ["punch_l","kick_l"];
      this.combo_1.kick = ["sk_long_m","sk_long_d","sk_yueying_a1","sk_yueying_c1"];
      this.combo_1.squatPunch = ["sk_long_m","sk_long_d","sk_yueying_a1","sk_yueying_c1","sk_s1","sk_s2"];
      this.combo_1.squatKick_l = ["squatKick_l","squatPunch_l"];
      this.combo_1.squatPunch_l = ["squatPunch_l","squatKick_l"];
      this.combo_land.jump_f = ["punch"];
      this.combo_1.sk_yueying_a1 = ["sk_yueying_a2"];
      this.combo_1.sk_yueying_a2 = ["sk_yueying_a3"];
      this.combo_1.sk_yueying_c1 = ["sk_yueying_c2"];
      this.combo_1.sk_yueying_c2 = ["sk_yueying_c3"];
      this.combo_1.sk_yueying_c3 = ["sk_yueying_c4"];
      this.combo_1.sk_xinyue = ["sk_xinyue2"];
      this.combo_1.sk_yuedu1 = ["punch","sk_yueying_a1","sk_yueying_c1"];
      this.combo_1.sk_yuedu2 = ["punch","sk_yueying_a1","sk_yueying_c1"];
      this.combo_burst.sk_long_u = ["sk_long_d","sk_yueying_a1"];
      this.combo_burst.sk_long_m = ["sk_long_d","sk_yueying_a1","sk_yueying_c1"];
      this.combo_burst.sk_long_d = ["sk_long_m","sk_yueying_a1","sk_yueying_c1"];
      this.combo_burst.sk_yueying_a1 = ["sk_yueying_a2","sk_yueying_c1","sk_xinyue","sk_xinyue2","sk_s1","sk_s2","sk_s3","sk_s4"];
      this.combo_burst.sk_yueying_a2 = ["sk_yueying_a3","sk_yueying_c1","sk_xinyue","sk_xinyue2","sk_s1","sk_s2","sk_s3","sk_s4"];
      this.combo_burst.sk_yueying_c1 = ["sk_yueying_c2","sk_yueying_a1","sk_xinyue","sk_xinyue2","sk_s1","sk_s2","sk_s3","sk_s4"];
      this.combo_burst.sk_yueying_c2 = ["sk_yueying_c3","sk_yueying_a1","sk_xinyue","sk_xinyue2","sk_s1","sk_s2","sk_s3","sk_s4"];
      this.combo_burst.sk_yueying_c3 = ["sk_yueying_c4","sk_yueying_a1","sk_xinyue","sk_xinyue2","sk_s1","sk_s2","sk_s3","sk_s4"];
      this.combo_1.dash_f = ["squatKick_l","squatPunch_l","roll_f","jump_f"];
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
      this.action_1.oppJump = [["sk_xinyue"],["sk_xinyue2","jump"]];
      this.delay_frames.oppJump = [150,250];
      this.action_1.wander = [["roll_b","jump_b"],["wait","jump_b","walk_f","dash_b"],["dash_f","wait"]];
      this.delay_frames.wander = [150,300,1000];
      this.action_1.defend = [["walk_b","walk_b"],["walk_b","roll_b"],["walk_b","dash_b","jump_b","roll_b"],["walk_b","wait"]];
      this.delay_frames.defend = [130,200,400,1000];
      this.action_1.defendAttack = [["sk_xinyue","sk_s1","sk_yuedu1","sk_yuedu2"]];
      this.delay_frames.defendAttack = [200];
      this.action_1.defend_f = [["roll_f"],["hold_u"]];
      this.delay_frames.defend_f = [150,1000];
      this.action_1.defend_h = [["hold_u","hold_u","roll_f"],["hold_u","roll_b"],["hold_u"]];
      this.delay_frames.defend_h = [130,200,1000];
      this.action_1.onEgde = [["attack","roll_f"],["jump_f","attack","attack"],["attack","dash_f"],["walk_f","dash_f"]];
      this.delay_frames.onEgde = [150,250,400,1000];
      this.action_1.pos_down = [["squatKick_l","squatPunch_l","squatKick"],["sk_long_d"]];
      this.delay_frames.pos_down = [150,250];
      this.action_1.pos_up = [["pitch"],["jump_f","punch3"]];
      this.delay_frames.pos_up = [100,250];
      this.action_1.super = [["sk_s1","sk_s2"]];
      this.delay_frames.super = [300];
      this.action_1.busrt = [["sk_s4"],["sk_s3"]];
      this.delay_frames.busrt = [250,400];
   }
}
