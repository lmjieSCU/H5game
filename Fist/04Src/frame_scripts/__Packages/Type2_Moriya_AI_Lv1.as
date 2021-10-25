class Type2_Moriya_AI_Lv1 extends Type2_Moriya_AI
{
   function Type2_Moriya_AI_Lv1()
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
      this.dis_array[3] = 300;
      this.dis_array[4] = 400;
      this.dis_array[5] = 1000;
      this.skill_dis[0] = ["punch_l","kick_l","squatKick","walk_f"];
      this.skill_dis[1] = ["punch","punch3","squatPunch"];
      this.skill_dis[2] = ["punch","punch3","squatPunch","sk_long_u","sk_long_m","sk_long_d","sk_xinyue","sk_xinyue2","sk_yueying_a1"];
      this.skill_dis[3] = ["sk_long_m","sk_long_d","sk_yueying_a1","sk_yueying_c1","jump_f"];
      this.skill_dis[4] = ["sk_yueying_c1","walk_f","dash_f","jump_f"];
      this.skill_dis[5] = ["sk_buyue1","sk_buyue2","dash_f","walk_f","dash_f","walk_f"];
      this.skill2_dis[0] = ["punch","kick"];
      this.skill2_dis[1] = ["punch","squatPunch","kick","sk_yueying_a1"];
      this.skill2_dis[2] = ["sk_long_m","sk_long_d","sk_xinyue","sk_xinyue2","sk_yueying_a1","sk_yueying_c1"];
      this.skill2_dis[3] = ["sk_long_m","sk_long_d","sk_yueying_a1","sk_yueying_c1"];
      this.skill2_dis[4] = ["sk_yueying_c1","dash_f","sk_long_d","jump_f"];
      this.skill2_dis[5] = ["sk_buyue1","sk_buyue2","dash_f"];
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
      this.combo_1.punch2 = ["sk_long_m","sk_long_d","sk_yueying_a1","sk_yueying_c1","sk_sk_feng","sk_xue"];
      this.combo_1.punch_l = ["punch_l","kick_l"];
      this.combo_1.kick = ["sk_long_m","sk_long_d","sk_yueying_a1","sk_yueying_c1"];
      this.combo_1.squatPunch = ["sk_long_m","sk_long_d","sk_yueying_a1","sk_yueying_c1","sk_feng","sk_xue"];
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
      this.combo_burst.sk_long_m = ["sk_long_d","sk_yueying_a1","sk_yueying_c1","sk_feng","sk_xue"];
      this.combo_burst.sk_long_d = ["sk_long_m","sk_yueying_a1","sk_yueying_c1","sk_feng","sk_xue"];
      this.combo_burst.sk_yueying_a1 = ["sk_yueying_a2","sk_yueying_c1","sk_xinyue","sk_xinyue2","sk_feng","sk_xue","sk_s_q1","sk_s_q2"];
      this.combo_burst.sk_yueying_a2 = ["sk_yueying_a3","sk_yueying_c1","sk_xinyue","sk_xinyue2","sk_feng","sk_xue","sk_s_q1","sk_s_q2"];
      this.combo_burst.sk_yueying_c1 = ["sk_yueying_c2","sk_yueying_a1","sk_xinyue","sk_xinyue2","sk_feng","sk_xue","sk_s_q1","sk_s_q2"];
      this.combo_burst.sk_yueying_c2 = ["sk_yueying_c3","sk_yueying_a1","sk_xinyue","sk_xinyue2","sk_feng","sk_xue","sk_s_q1","sk_s_q2"];
      this.combo_burst.sk_yueying_c3 = ["sk_yueying_c4","sk_yueying_a1","sk_xinyue","sk_xinyue2","sk_feng","sk_xue","sk_s_q1","sk_s_q2"];
      this.combo_burst.sk_feng = ["sk_s_q1"];
      this.combo_burst.sk_xue = ["sk_feng","sk_s_q1","sk_s_q2"];
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
      this.action_1.defendAttack = [["sk_xinyue","sk_feng","sk_yuedu1","sk_yuedu2"]];
      this.delay_frames.defendAttack = [200];
      this.action_1.defend_f = [["roll_f"],["hold_u"]];
      this.delay_frames.defend_f = [150,1000];
      this.action_1.defend_h = [["hold_u","hold_u","roll_f"],["hold_u","roll_b"],["hold_u"]];
      this.delay_frames.defend_h = [130,200,1000];
      this.action_1.onEgde = [["attack","roll_f"],["attack"],["attack","dash_f"],["walk_f","dash_f"]];
      this.delay_frames.onEgde = [150,250,400,1000];
      this.action_1.pos_down = [["squatKick_l","squatPunch_l","squatKick"],["sk_long_d"]];
      this.delay_frames.pos_down = [150,250];
      this.action_1.pos_up = [["pitch"],["jump_f","punch3"]];
      this.delay_frames.pos_up = [100,250];
      this.action_1.super = [["sk_feng","sk_xue"],["sk_feng"]];
      this.delay_frames.super = [300,500];
      this.action_1.busrt = [["sk_s_q1","sk_s_q2"],["sk_s_q1"]];
      this.delay_frames.busrt = [250,400];
   }
   function actionDefend()
   {
   }
   function cpu_control()
   {
      if(this.checkDefend())
      {
         return true;
      }
      if(this.checkAction())
      {
         return true;
      }
      if(this.checkAttack())
      {
         return true;
      }
      this.checkWait();
   }
   function checkAction()
   {
      var _loc2_ = undefined;
      if(this.combo_check2())
      {
         return true;
      }
      if(this.opp.status_3 == "down")
      {
         if(this.checkBurst())
         {
            return true;
         }
         _loc2_ = this.action_select("action_1","down");
         this.toSkill(_loc2_);
         return true;
      }
      if(this.onEgde)
      {
         var _loc3_ = this.action_select("action_1","onEgde");
         this.toSkill(_loc3_);
         return true;
      }
   }
}
