class Ryo_AI_Lv1 extends Ryo_AI
{
   function Ryo_AI_Lv1()
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
      this.skill_dis[0] = ["punch","punch_l","kick_l","kick","walk_f","squatKick","squatPunch","sk14"];
      this.skill_dis[1] = ["kick","sk2",this.skillObj.toAir,"squatKick","sk14",this.skillObj.heavyHit];
      this.skill_dis[2] = ["kick","sk2","jump_f"];
      this.skill_dis[3] = ["sk1","sk2","jump_f"];
      this.skill_dis[4] = ["sk1","sk2","dash_f","jump_f"];
      this.skill_dis[5] = ["dash_f","walk_f","sk1"];
      this.skill_dis[6] = ["dash_f","sk1"];
      this.dis_num = this.dis_array.length;
   }
   function combo_init()
   {
      this.combo_1 = new Object();
      this.combo_land = new Object();
      this.combo_auto = new Object();
      this.combo_burst = new Object();
      this.delay_frames = new Object();
      this.combo_1.punch = ["kick1","kick2","sk1","sk2",this.skillObj.toAir,"sk10","squatKick"];
      this.combo_1.punch2 = ["kick1","kick2","sk1","sk2",this.skillObj.toAir,"sk10","sk14","squatKick"];
      this.combo_1.kick = ["sk1","sk2"];
      this.combo_1.kick2 = ["sk1","sk2",this.skillObj.toAir,"sk10","sk14"];
      this.combo_1.squatPunch = ["sk1","sk2","sk10","sk14"];
      this.combo_land.kick1 = ["squatKick","sk1","sk2",this.skillObj.toAir,"sk14"];
      this.combo_land.jump_f = ["punch","kick","squatPunch","squatKick"];
      this.combo_land.punch_l = ["punch_l","kick_l"];
      this.combo_land.squatKick_l = ["squatKick_l"];
      this.combo_land.squatPunch_l = ["squatPunch_l","squatKick_l"];
      this.combo_1.dash_f = ["punch","kick1","jump_f","jump_f"];
      this.delay_frames.dash_f = [120,150,120,230,300];
      this.combo_1.walk_f = ["pitch","punch","kick_l","jump_f","dash_f"];
      this.delay_frames.walk_f = [100,120,180,230,400];
      this.combo_1.walk_b = ["punch","kick","kick_l","jump_f"];
      this.delay_frames.walk_b = [100,100,180,260,300,250];
      this.combo_burst.sk2 = ["sk1","sk3","sk10","sk14"];
      this.combo_burst.sk3 = ["sk4"];
      this.action_1 = new Object();
      this.action_1.down = [["walk_b","jump_b"],["walk_f"]];
      this.delay_frames.down = [200,1000];
      this.action_1.oppRoll = [["punch_l","squatPunch_l"],["squatKick_l","kick_l"]];
      this.delay_frames.oppRoll = [150,300];
      this.action_1.super = [["sk14"],["sk10"]];
      this.delay_frames.super = [160,300];
      this.action_1.busrt = [["burst_ad"],["burst_a"]];
      this.delay_frames.busrt = [180,600];
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
