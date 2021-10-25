class Kyo_AI_Lv1 extends Kyo_AI
{
   function Kyo_AI_Lv1()
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
      this.skill_dis[0] = ["punch","kick","walk_f","squatKick","squatPunch"];
      this.skill_dis[1] = ["kick","sk1","sk0","heavyHit","sk_hezhai","squatKick","squatKick_s"];
      this.skill_dis[2] = ["kick_l","sk15","sk19","jump_f"];
      this.skill_dis[3] = ["sk19","sk2","walk_f","jump_f","sk15"];
      this.skill_dis[4] = ["sk19","sk2","walk_f","dash_f","jump_f"];
      this.skill_dis[5] = ["walk_f","dash_f","dash_f","sk15"];
      this.skill_dis[6] = ["walk_f","dash_f","dash_f"];
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
      this.combo_1.sk15 = ["sk16"];
      this.combo_1.sk16 = ["sk17"];
      this.combo_1.sk19 = ["sk20","sk21_2"];
      this.combo_1.sk20 = ["sk21","sk14"];
      this.combo_1.sk21 = ["sk13"];
      this.combo_1.sk21_2 = ["sk13"];
      this.combo_auto.sk1 = ["sk1_2"];
      this.combo_1.punch = ["sk15","sk19"];
      this.combo_1.punch2 = ["kick2","sk1","sk15","sk19","sk28"];
      this.combo_1.kick = ["sk15","sk19"];
      this.combo_1.kick1 = ["sk1","sk15","sk19","sk28","sk29","sk31"];
      this.combo_1.kick2 = ["sk1","sk15","sk19","sk28","sk29","sk31"];
      this.combo_1.squatPunch = ["squatKick_s","sk1","sk15","sk19","sk28","sk29"];
      this.combo_land.sk1_2 = ["sk19","sk19","sk0","sk2","heavyHit","sk31"];
      this.delay_frames.sk1_2 = [0,3,2,3];
      this.combo_land.jump_f = ["punch","kick"];
      this.combo_land.punch_l = ["punch_l","kick_l"];
      this.combo_land.squatKick_l = ["squatKick_l","squatKick_s"];
      this.combo_land.squatPunch_l = ["squatPunch_l","squatKick_l","squatKick_s"];
      this.combo_1.dash_f = ["punch","roll_f","jump_f","jump_f","sk14"];
      this.delay_frames.dash_f = [120,120,230,300,350];
      this.combo_1.walk_f = ["pitch","punch","kick_l","jump_f","dash_f"];
      this.delay_frames.walk_f = [100,120,180,230,350];
      this.combo_1.walk_b = ["punch","kick","kick_l","jump_f","sk15","sk19"];
      this.delay_frames.walk_b = [100,100,180,260,300,250];
      this.combo_burst.sk16 = ["sk19","sk19","sk1","heavyHit","sk28"];
      this.combo_burst.sk19 = ["sk20","sk20","heavyHit","sk1"];
      this.combo_burst.sk20 = ["sk1","sk1","heavyHit"];
      this.combo_burst.heavyHit = ["sk2","sk0"];
      this.action_1 = new Object();
      this.action_1.down = [["walk_b","jump_b"],["walk_f"]];
      this.delay_frames.down = [200,1000];
      this.action_1.oppRoll = [["punch_l","squatPunch_l"],["squatKick_l","kick_l"]];
      this.delay_frames.oppRoll = [150,300];
      this.action_1.super = [["sk29","sk31"],["sk31"]];
      this.delay_frames.super = [180,250];
      this.action_1.busrt = [["sk3"],["sk_s3"]];
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
