class Kula_AI_Lv1 extends Kula_AI
{
   function Kula_AI_Lv1()
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
      this.skill_dis[0] = ["punch_l","punch_s1","kick_l","kick","walk_f"];
      this.skill_dis[1] = ["squatKick","punch_l","kick_l","kick","heavyHit"];
      this.skill_dis[2] = ["sk_dfp","sk_dbk","sk_dbk_l","sk_huaxing","sk_bingdian","jump_f"];
      this.skill_dis[3] = ["sk_dbk","walk_f","dash_f","jump_f"];
      this.skill_dis[4] = ["dash_f","walk_f"];
      this.skill_dis[5] = ["dash_f"];
      this.dis_num = this.dis_array.length;
   }
   function combo_init()
   {
      this.combo_1 = new Object();
      this.combo_land = new Object();
      this.combo_auto = new Object();
      this.combo_burst = new Object();
      this.delay_frames = new Object();
      this.combo_1.punch = ["sk_dbk","sk_dfp","sk_fdfp","sk_bingdian","sk_tibing"];
      this.combo_1.punch2 = ["sk_dbk","sk_dfp","sk_fdfp","sk_bingdian","sk_s_bingren","sk_s_luanwu","sk_tibing"];
      this.combo_1.punch_l = ["punch_l","kick_l"];
      this.combo_1.kick = ["sk_dbk","sk_dfp","sk_fdfp","sk_bingdian","sk_tibing","sk_s_luanwu"];
      this.combo_1.kick2 = ["sk_dbk","sk_dfp","sk_fdfp","sk_bingdian","sk_s_bingren","sk_s_luanwu","sk_tibing"];
      this.combo_1.squatPunch = ["sk_dfp","sk_dbk"];
      this.combo_1.squatKick_l = ["squatKick_l","squatPunch_l"];
      this.combo_1.squatPunch_l = ["squatPunch_l","squatKick_l"];
      this.combo_land.jump_f = ["punch","kick"];
      this.combo_burst.sk_dfp = ["sk_fdfp","sk_dbk","sk_bingdian"];
      this.combo_burst.sk_s_bingren = ["sk_fdfp","sk_dbk","sk_bingdian"];
      this.combo_burst.sk_tibing = ["sk_fdfp","sk_dbk"];
      this.combo_oppOnEgde.sk_tibing = [true,true];
      this.combo_1.dash_f = ["kick","punch","jump_f"];
      this.delay_frames.dash_f = [130,130,250];
      this.combo_1.walk_f = ["pitch","punch","kick","jump_f","dash_f"];
      this.delay_frames.walk_f = [100,150,180,250,400];
      this.combo_1.walk_b = ["punch","kick","jump","jump_f"];
      this.delay_frames.walk_b = [100,150,200,260];
      this.action_1 = new Object();
      this.action_1.down = [["walk_b","jump_b"],["walk_f"]];
      this.delay_frames.down = [200,1000];
      this.action_1.oppRoll = [["punch_l","squatPunch_l"],["squatKick_l","kick_l"]];
      this.delay_frames.oppRoll = [150,300];
      this.action_1.super = [["sk_s_bingren","sk_s_luanwu"],["sk_s_bingren"]];
      this.delay_frames.super = [250,300];
      this.action_1.busrt = [["sk_s_xingchen","sk_s_jiejie"]];
      this.delay_frames.busrt = [600];
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
