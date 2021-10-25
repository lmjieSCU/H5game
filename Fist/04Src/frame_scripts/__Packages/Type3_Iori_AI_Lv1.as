class Type3_Iori_AI_Lv1 extends Type3_Iori_AI
{
   function Type3_Iori_AI_Lv1()
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
      this.dis_array[2] = 200;
      this.dis_array[3] = 250;
      this.dis_array[4] = 300;
      this.dis_array[5] = 400;
      this.dis_array[6] = 1000;
      this.skill_dis[0] = ["punch_s1","punch2","squatPunch","walk_f","sk4"];
      this.skill_dis[1] = ["sk1_1","punch","jump_f"];
      this.skill_dis[2] = ["sk1_1","jump_f"];
      this.skill_dis[3] = ["jump_f","walk_f","dash_f","sk_s2"];
      this.skill_dis[4] = ["sk2","dash_f","jump_f","sk_s2"];
      this.skill_dis[5] = ["dash_f","dash_f","sk2","sk_s2"];
      this.skill_dis[6] = ["dash_f","dash_f","sk2"];
      this.dis_num = this.dis_array.length;
   }
   function combo_init()
   {
      this.combo_1 = new Object();
      this.combo_land = new Object();
      this.combo_auto = new Object();
      this.combo_burst = new Object();
      this.delay_frames = new Object();
      this.combo_1.punch_s1 = ["punch_s2"];
      this.combo_1.punch_s2 = ["sk1_1","sk3","sk_s1"];
      this.combo_1.kick_s2 = ["punch_s1","sk4"];
      this.combo_1.squatPunch = ["sk1_1","sk2","sk3"];
      this.combo_1.punch = ["sk1_1","sk3","sk_s1","sk_s_qianzai1"];
      this.combo_1.punch2 = ["sk1_1","sk_s1","sk_s_qianzai1"];
      this.combo_1.kick = ["sk2","sk3"];
      this.combo_1.kick2 = ["sk1_1","sk_s1","sk_s_qianzai1"];
      this.combo_land.punch_l = ["punch_l","kick_l","squatKick_l","punch_s1"];
      this.combo_land.squatKick_l = ["squatKick_l","punch_s1"];
      this.combo_land.squatPunch_l = ["squatPunch_l","squatKick_l","punch_s1"];
      this.combo_1.sk1_1 = ["sk1_2"];
      this.combo_1.sk1_2 = ["sk1_3"];
      this.combo_1.sk_s2 = ["sk_s1","sk0"];
      this.combo_oppOnEgde.sk_s2 = [false,true];
      this.combo_burst.punch = ["sk1_1","sk_s1"];
      this.combo_burst.punch2 = ["sk1_1","sk4"];
      this.combo_burst.kick = ["sk1_1","sk_s1","sk_s2"];
      this.combo_burst.kick2 = ["sk1_1"];
      this.combo_burst.heavyHit = ["sk_s1","sk_s2","sk_s_qianzai1"];
      this.combo_burst.sk1_1 = ["sk1_2","sk1_2","sk4"];
      this.combo_burst.sk1_2 = ["sk1_3","sk_s1","sk_s2","sk_s_qianzai1"];
      this.delay_frames.sk1_2 = [1,2,6,2];
      this.combo_burst.sk_s1 = ["sk_s_qianzai1","sk_s2"];
      this.combo_burst.sk_s2 = ["sk_s1","sk0","sk_s_qianzai1"];
      this.combo_oppOnEgde.sk_s2 = [true,true,true];
      this.delay_frames.sk_s2 = [8,6,8];
      this.combo_1.dash_f = ["roll_f","attack","attack","attack","attack"];
      this.delay_frames.dash_f = [120,150,200,250,300];
      this.combo_1.walk_f = ["pitch","punch","kick_l","punch_s1","jump_f","dash_f"];
      this.delay_frames.walk_f = [100,120,120,180,230,400];
      this.combo_1.walk_b = ["punch_l","kick_l","punch_s1","jump","jump_f"];
      this.delay_frames.walk_b = [130,130,180,260,300];
      this.combo_land.jump_f = ["punch","kick","punch_s1","kick_s2","kick_l"];
      this.combo_land.sk0 = ["sk_s2"];
      this.action_1 = new Object();
      this.action_1.down = [["dash_b","roll_b","jump_b"],["walk_f","dash_f"]];
      this.delay_frames.down = [200,1000];
      this.action_1.oppRoll = [["punch_l","squatPunch_l"],["squatKick_l","kick_l"]];
      this.delay_frames.oppRoll = [150,300];
      this.action_1.oppJump = [["sk0"],["sk0","jump","sk_s_qianzai2"],["sk_s1","sk_s_qianzai1"]];
      this.delay_frames.oppJump = [150,300,350];
      this.action_1.wander = [["jump_f","walk_f"],["jump_f","walk_f","dash_f"],["dash_f"]];
      this.delay_frames.wander = [150,300,1000];
      this.action_1.defend = [["roll_f"],["walk_b"],["walk_b","dash_b","jump_b","roll_b"],["walk_b","wait"]];
      this.delay_frames.defend = [130,200,400,1000];
      this.action_1.defendAttack = [["sk0","sk_s1","sk_s_qianzai2","hold_u"],["sk_s1","sk_s_qianzai2","hold_u"]];
      this.delay_frames.defendAttack = [150,250];
      this.action_1.defend_f = [["roll_f"],["hold_u"]];
      this.delay_frames.defend_f = [150,1000];
      this.action_1.defend_h = [["hold_u","hold_u","roll_f"],["hold_u","roll_b"],["hold_u"]];
      this.delay_frames.defend_h = [130,200,1000];
      this.action_1.onEgde = [["attack","roll_f"],["attack"],["attack","dash_f"],["dash_f"]];
      this.delay_frames.onEgde = [150,250,400,1000];
      this.action_1.pos_down = [["squatKick_l"],["squatKick"]];
      this.delay_frames.pos_down = [150,200];
      this.action_1.pos_up = [["pitch"],["kick_s1"],["jump_f"]];
      this.delay_frames.pos_up = [100,150,250];
      this.action_1.super = [["sk_s1"],["sk_s1","sk_s2","sk_s2"]];
      this.delay_frames.super = [150,400];
      this.action_1.busrt = [["sk_s_qianzai1","sk_s_qianzai2"],["sk_s_qianzai1"]];
      this.delay_frames.busrt = [200,400];
   }
   function initStrage()
   {
      this.initPlus();
      this.actionType = "attack";
      this.cpu_control2 = this.cpu_attack;
   }
}
