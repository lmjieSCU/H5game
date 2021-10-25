class Orochi_AI_Lv1 extends Orochi_AI
{
   function Orochi_AI_Lv1()
   {
      super();
      this.skill_init();
      this.combo_init();
      this.combo_rate0 = 15;
      this.attack_rate0 = 25;
      this.hold_rate0 = 25;
      this.attack_s0 = 10;
      this.wait_frame0 = 30;
      this.combo_risk = 30;
   }
   function skill_init()
   {
      this.dis_array[0] = 100;
      this.dis_array[1] = 150;
      this.dis_array[2] = 200;
      this.dis_array[3] = 300;
      this.dis_array[4] = 1000;
      this.skill_dis[0] = ["punch_l","kick_l","kick"];
      this.skill_dis[1] = ["punch","kick_l","kick","squatPunch","heavyHit"];
      this.skill_dis[2] = ["kick","sk_dfp","sk_dfk_l","sk_dbp"];
      this.skill_dis[3] = ["sk_dfp","sk_dfk_l","dash_f","walk_f","jump_f"];
      this.skill_dis[4] = ["sk_dfp","sk_dfk","walk_f","dash_f"];
      this.dis_num = this.dis_array.length;
   }
   function combo_init()
   {
      this.combo_1 = new Object();
      this.combo_land = new Object();
      this.combo_auto = new Object();
      this.combo_burst = new Object();
      this.delay_frames = new Object();
      this.combo_1.punch = ["sk_dfp","sk_dbp_l","sk_dfk_l","sk_s_guangzhu","sk_s_yangguang"];
      this.combo_1.kick_l = ["sk_dfp","sk_dbp_l","sk_dfk_l","sk_s_guangzhu","sk_s_yangguang"];
      this.combo_1.kick = ["sk_dfp","sk_dfk_l","sk_s_guangzhu","sk_s_yangguang"];
      this.combo_1.sk_dfp = ["sk_s_guangzhu","sk_s_yangguang"];
      this.combo_land.jump_f = ["kick"];
      this.combo_burst.punch = ["sk_dfp","sk_dbp_l","sk_dfk_l","sk_s_guangzhu","sk_s_yangguang","sk_s_taoxin","sk_s_qianshou1","sk_s_qianshou1","sk_s_qianshou1"];
      this.combo_burst.kick_l = ["sk_dfp","sk_dbp_l","sk_dfk_l","sk_s_guangzhu","sk_s_yangguang","sk_s_taoxin","sk_s_qianshou1","sk_s_qianshou1","sk_s_qianshou1"];
      this.combo_burst.kick = ["sk_dfp","sk_dbp_l","sk_dfk_l","sk_s_guangzhu","sk_s_yangguang","sk_s_taoxin"];
      this.combo_burst.sk_dfp = ["sk_s_guangzhu","sk_s_yangguang","sk_s_taoxin"];
      this.combo_burst.sk_dbp_l = ["sk_s_guangzhu","sk_s_yangguang","sk_s_taoxin"];
      this.combo_burst.sk_dbp = ["sk_s_guangzhu","sk_s_yangguang","sk_s_taoxin"];
      this.combo_burst.sk_dfk = ["sk_s_guangzhu","sk_s_yangguang","sk_s_taoxin"];
      this.combo_burst.sk_dfk_l = ["sk_s_guangzhu","sk_s_yangguang","sk_s_taoxin"];
      this.combo_1.dash_f = ["punch","kick","roll_f","jump_f"];
      this.delay_frames.dash_f = [120,150,120,200];
      this.combo_1.walk_f = ["pitch","punch","kick","jump_f"];
      this.delay_frames.walk_f = [100,150,180,230];
      this.combo_1.walk_b = ["punch","kick","jump","jump_f"];
      this.delay_frames.walk_b = [100,150,200,260];
      this.action_1 = new Object();
      this.action_1.down = [["dash_b","roll_b","jump_b"],["walk_f","dash_f"]];
      this.delay_frames.down = [200,1000];
      this.action_1.oppRoll = [["punch_l"],["kick_l"]];
      this.delay_frames.oppRoll = [150,300];
      this.action_1.oppJump = [["sk_dbp_l","kick"],["sk_dbp"]];
      this.delay_frames.oppJump = [150,300];
      this.action_1.wander = [["walk_f","dash_f","roll_b"],["dash_f","wait"]];
      this.delay_frames.wander = [300,1000];
      this.action_1.defend = [["walk_b","roll_b"],["walk_b","dash_b","jump_b","roll_b"],["walk_b","wait"]];
      this.delay_frames.defend = [200,400,1000];
      this.action_1.defendAttack = [["sk_dbp","sk_s_qianshou1"],["sk_s_yangguang","sk_s_taoxin"]];
      this.delay_frames.defendAttack = [150,600];
      this.action_1.defend_f = [["roll_f"],["hold_u"]];
      this.delay_frames.defend_f = [150,1000];
      this.action_1.defend_h = [["hold_u","hold_u","roll_f"],["hold_u","roll_b"],["hold_u"]];
      this.delay_frames.defend_h = [130,200,1000];
      this.action_1.onEgde = [["attack","roll_f"],["jump_f","attack","attack"],["attack","dash_f"],["walk_f","dash_f"]];
      this.delay_frames.onEgde = [150,250,400,1000];
      this.action_1.pos_down = [["squatPunch","pitch"],["squatPunch"]];
      this.delay_frames.pos_down = [150,200];
      this.action_1.pos_up = [["pitch","kick_l"],["jump_f","kick_l"]];
      this.delay_frames.pos_up = [100,250];
      this.action_1.super = [["sk_s_guangzhu","sk_s_yangguang"]];
      this.delay_frames.super = [600];
      this.action_1.busrt = [["sk_s_qianshou1","sk_s_taoxin"]];
      [["sk_s_taoxin"]];
      this.delay_frames.busrt = [150,600];
   }
   function checkStrage()
   {
      this.actionType = "attack";
      this.cpu_control2 = this.cpu_attack;
   }
}
