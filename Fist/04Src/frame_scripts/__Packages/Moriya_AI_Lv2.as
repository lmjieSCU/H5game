class Moriya_AI_Lv2 extends Moriya_AI
{
   function Moriya_AI_Lv2()
   {
      super();
      this.skill_init();
      this.combo_init();
      this.combo_rate0 = 25;
      this.attack_rate0 = 30;
      this.hold_rate0 = 20;
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
      this.combo_1.punch2 = ["sk_long_m","sk_long_d","sk_yueying_a1","sk_yueying_c1"];
      this.combo_1.punch_l = ["punch_l","kick_l"];
      this.combo_1.kick = ["sk_long_m","sk_long_d","sk_yueying_a1","sk_yueying_c1"];
      this.combo_1.squatPunch = ["sk_long_m","sk_long_d","sk_yueying_a1","sk_yueying_c1"];
      this.combo_1.squatKick_l = ["squatKick_l","squatPunch_l"];
      this.combo_1.squatPunch_l = ["squatPunch_l","squatKick_l"];
      this.combo_land.jump_f = ["punch"];
      this.combo_1.sk_yueying_a1 = ["sk_yueying_a2"];
      this.combo_1.sk_yueying_a2 = ["sk_yueying_a3"];
      this.combo_1.sk_yueying_c1 = ["sk_yueying_c2"];
      this.combo_1.sk_yueying_c2 = ["sk_yueying_c3"];
      this.combo_1.sk_yueying_c3 = ["sk_yueying_c4"];
      this.combo_1.sk_yuedu1 = ["punch"];
      this.combo_1.sk_yuedu2 = ["punch"];
      this.combo_burst.sk_long_u = ["sk_long_d","sk_yueying_a1"];
      this.combo_burst.sk_long_m = ["sk_long_d","sk_yueying_a1","sk_yueying_c1"];
      this.combo_burst.sk_long_d = ["sk_long_m","sk_yueying_a1","sk_yueying_c1"];
      this.combo_burst.sk_yueying_a1 = ["sk_yueying_a2","sk_yueying_c1","sk_xinyue","sk_xinyue2"];
      this.combo_burst.sk_yueying_a2 = ["sk_yueying_a3","sk_yueying_c1","sk_xinyue","sk_xinyue2"];
      this.combo_burst.sk_yueying_c1 = ["sk_yueying_c2","sk_yueying_a1","sk_xinyue","sk_xinyue2"];
      this.combo_burst.sk_yueying_c2 = ["sk_yueying_c3","sk_yueying_a1","sk_xinyue","sk_xinyue2"];
      this.combo_burst.sk_yueying_c3 = ["sk_yueying_c4","sk_yueying_a1","sk_xinyue","sk_xinyue2"];
      this.combo_1.dash_f = ["squatKick_l","squatPunch_l","roll_f","jump_f"];
      this.delay_frames.dash_f = [130,130,130,250,250];
      this.combo_1.walk_f = ["pitch","punch_l","kick","jump_f","dash_f"];
      this.delay_frames.walk_f = [100,150,180,250,400];
      this.combo_1.walk_b = ["punch_l","kick","jump","jump_f"];
      this.delay_frames.walk_b = [100,150,200,260];
      this.action_1 = new Object();
      this.action_1.down = [["walk_b","jump_b"],["walk_f"]];
      this.delay_frames.down = [200,1000];
      this.action_1.oppRoll = [["punch_l","squatPunch_l"],["squatKick_l","kick_l"]];
      this.delay_frames.oppRoll = [150,300];
      this.action_1.super = [["sk_s1","sk_s2"]];
      this.delay_frames.super = [300];
      this.action_1.busrt = [["sk_s4"],["sk_s3"]];
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
