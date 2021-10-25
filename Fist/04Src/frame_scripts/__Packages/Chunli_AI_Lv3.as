class Chunli_AI_Lv3 extends Chunli_AI
{
   function Chunli_AI_Lv3()
   {
      super();
      this.skill_init();
      this.combo_init();
      this.combo_rate0 = 50;
      this.attack_rate0 = 70;
      this.hold_rate0 = 70;
      this.attack_s0 = 30;
      this.wait_frame0 = 20;
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
      this.skill_dis[0] = ["punch_l","kick_s1","kick_l","kick","walk_f"];
      this.skill_dis[1] = ["squatKick","punch_l","kick_l","kick","heavyHit","sk_bailietui"];
      this.skill_dis[2] = ["sk_huixuan","sk_xuanyuan","sk_bailietui","jump_f"];
      this.skill_dis[3] = ["walk_f","dash_f","jump_f"];
      this.skill_dis[4] = ["sk_bo","dash_f","walk_f"];
      this.skill_dis[5] = ["dash_f","walk_f","sk_bo"];
      this.skill2_dis[0] = ["punch","punch","kick"];
      this.skill2_dis[1] = ["squatKick","kick","sk_bailietui"];
      this.skill2_dis[2] = ["sk_huixuan","sk_xuanyuan","sk_bailietui","jump_f"];
      this.skill2_dis[3] = ["sk_bailietui","sk_bo","jump_f"];
      this.skill2_dis[4] = ["sk_bo","dash_f"];
      this.skill2_dis[5] = ["sk_bo","dash_f"];
      this.dis_num = this.dis_array.length;
   }
   function combo_init()
   {
      this.combo_1 = new Object();
      this.combo_land = new Object();
      this.combo_auto = new Object();
      this.combo_burst = new Object();
      this.delay_frames = new Object();
      this.combo_1.punch = ["sk_bailietui","sk_huixuan","sk_xuanyuan","sk_bo","sk_shengtian"];
      this.combo_1.punch2 = ["sk_bailietui","sk_huixuan","sk_xuanyuan","sk_bo","sk_s_bo","sk_s_fengyi"];
      this.combo_1.punch_l = ["punch","kick","kick_l"];
      this.combo_1.kick_l = ["punch","kick"];
      this.combo_1.kick = ["sk_bailietui","sk_huixuan","sk_xuanyuan","sk_shengtian"];
      this.combo_1.kick2 = ["sk_bailietui","sk_huixuan","sk_xuanyuan","sk_shengtian","sk_s_bo","sk_s_fengyi"];
      this.combo_1.squatPunch = ["sk_huixuan","sk_xuanyuan","sk_bailietui","sk_shengtian"];
      this.combo_1.squatKick_l = ["punch_l"];
      this.combo_1.squatPunch_l = ["punch_l","squatKick_l"];
      this.combo_land.jump_f = ["punch","kick"];
      this.combo_burst.punch2 = ["sk_bailietui","sk_huixuan","sk_shengtian","sk_s_bo","sk_s_fengyi","sk_s_qixing","sk_s_bo_ss"];
      this.combo_burst.squatPunch = this.combo_burst.punch2;
      this.combo_burst.sk_huixuan = ["sk_xuanyuan","sk_bailietui","sk_xuanyuan","sk_shengtian","sk_s_bo","sk_s_fengyi","sk_s_qixing","sk_s_bo_ss"];
      this.combo_burst.sk_bailietui = ["sk_xuanyuan","sk_huixuan","sk_shengtian","sk_s_bo","sk_s_fengyi","sk_s_qixing","sk_s_bo_ss"];
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
      this.action_1.oppJump = [["sk_shengtian","walk_b"],["sk_shengtian","jump"]];
      this.delay_frames.oppJump = [150,250];
      this.action_1.wander = [["roll_b","jump_b"],["wait","jump_b","walk_f","dash_b"],["dash_f","wait"]];
      this.delay_frames.wander = [150,300,1000];
      this.action_1.defend = [["walk_b","walk_b"],["walk_b","roll_b"],["walk_b","dash_b","jump_b","roll_b"],["walk_b","wait"]];
      this.delay_frames.defend = [130,200,400,1000];
      this.action_1.defendAttack = [["sk_s_bo","sk_s_fengyi"]];
      this.delay_frames.defendAttack = [200];
      this.action_1.defend_f = [["roll_f"],["hold_u"]];
      this.delay_frames.defend_f = [150,1000];
      this.action_1.defend_h = [["hold_u","hold_u","roll_f"],["hold_u","roll_b"],["hold_u"]];
      this.delay_frames.defend_h = [130,200,1000];
      this.action_1.onEgde = [["attack","roll_f"],["attack"],["attack","dash_f"],["walk_f","dash_f"]];
      this.delay_frames.onEgde = [150,250,400,1000];
      this.action_1.pos_down = [["squatKick_l","squatKick"],["squatKick"]];
      this.delay_frames.pos_down = [150,250];
      this.action_1.pos_up = [["pitch","kick_s1"],["jump_f","kick_s1"]];
      this.delay_frames.pos_up = [100,250];
      this.action_1.super = [["sk_s_bo","sk_s_fengyi"],["sk_s_fengyi"]];
      this.delay_frames.super = [250,350];
      this.action_1.busrt = [["sk_s_qixing","sk_s_bo_ss"],["sk_s_bo_ss"]];
      this.delay_frames.busrt = [200,300];
   }
   function actionDefend()
   {
   }
}
