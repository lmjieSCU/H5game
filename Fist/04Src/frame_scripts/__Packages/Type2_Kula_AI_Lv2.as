class Type2_Kula_AI_Lv2 extends Type2_Kula_AI
{
   function Type2_Kula_AI_Lv2()
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
      this.dis_array[2] = 250;
      this.dis_array[3] = 300;
      this.dis_array[4] = 400;
      this.dis_array[5] = 1000;
      this.skill_dis[0] = ["punch_l","punch_s1","kick_l","kick","walk_f"];
      this.skill_dis[1] = ["squatKick","punch_l","kick_l","kick","heavyHit","sk_tibing2"];
      this.skill_dis[2] = ["sk_dfp","sk_flyKick","sk_bingdian","sk_tibing2","jump_f"];
      this.skill_dis[3] = ["sk_flyKick","sk_flyKick","walk_f","dash_f","jump_f"];
      this.skill_dis[4] = ["dash_f","walk_f"];
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
      this.combo_1.punch = ["sk_flyKick","sk_dfp","sk_fdfp","sk_bingdian","sk_tibing2"];
      this.combo_1.punch2 = ["sk_flyKick","sk_dfp","sk_fdfp","sk_bingdian","sk_s_handong","sk_tibing2"];
      this.combo_1.punch_l = ["punch_l","kick_l"];
      this.combo_1.kick = ["sk_flyKick","sk_dfp","sk_fdfp","sk_bingdian","sk_tibing2","sk_s_xiangdong","sk_s_luobing"];
      this.combo_1.kick2 = ["sk_flyKick","sk_dfp","sk_fdfp","sk_bingdian","sk_tibing2","sk_s_xiangdong","sk_s_luobing"];
      this.combo_1.squatPunch = ["sk_dfp","sk_flyKick"];
      this.combo_1.squatKick_l = ["squatKick_l","squatPunch_l"];
      this.combo_1.squatPunch_l = ["squatPunch_l","squatKick_l"];
      this.combo_land.jump_f = ["punch","kick"];
      this.combo_burst.punch2 = ["sk_s_handong","sk_s_luobing","sk_s_storm","sk_s_luanren"];
      this.combo_burst.kick2 = ["sk_s_handong","sk_s_luobing","sk_s_storm","sk_s_luanren"];
      this.combo_burst.sk_dfp = ["sk_s_handong","sk_s_luobing","sk_s_storm","sk_s_luanren"];
      this.combo_burst.sk_tibing2 = ["sk_fdfp","sk_flyKick","sk_s_luobing","sk_s_storm","sk_s_luanren"];
      this.combo_1.dash_f = ["punch","kick","jump_f"];
      this.delay_frames.dash_f = [130,200,250];
      this.combo_1.walk_f = ["pitch","punch","kick","jump_f","dash_f"];
      this.delay_frames.walk_f = [100,150,180,250,400];
      this.combo_1.walk_b = ["punch","kick","jump","jump_f"];
      this.delay_frames.walk_b = [100,150,200,260];
      this.action_1 = new Object();
      this.action_1.down = [["dash_b","roll_b","jump_b"],["walk_f","dash_f"]];
      this.delay_frames.down = [200,1000];
      this.action_1.oppRoll = [["punch_l","squatPunch_l"],["squatKick_l","kick_l"]];
      this.delay_frames.oppRoll = [150,300];
      this.action_1.oppJump = [["sk_fdfp","sk_fdfp_l"],["sk_fdfp","jump"]];
      this.delay_frames.oppJump = [150,250];
      this.action_1.wander = [["roll_b","jump_b"],["wait","jump_b","walk_f","dash_b"],["dash_f","wait"]];
      this.delay_frames.wander = [150,300,1000];
      this.action_1.defend = [["walk_b","walk_b"],["walk_b","roll_b"],["walk_b","dash_b","jump_b","roll_b"],["walk_b","wait"]];
      this.delay_frames.defend = [130,200,400,1000];
      this.action_1.defendAttack = [["sk_fdfp"]];
      this.delay_frames.defendAttack = [250];
      this.action_1.defend_f = [["roll_f"],["hold_u"]];
      this.delay_frames.defend_f = [150,1000];
      this.action_1.defend_h = [["hold_u","hold_u","roll_f"],["hold_u","roll_b"],["hold_u"]];
      this.delay_frames.defend_h = [130,200,1000];
      this.action_1.onEgde = [["attack","roll_f"],["attack"],["attack","dash_f"],["walk_f","dash_f"]];
      this.delay_frames.onEgde = [150,250,400,1000];
      this.action_1.pos_down = [["squatKick_l","squatKick"],["squatKick","sk_huaxing"]];
      this.delay_frames.pos_down = [150,250];
      this.action_1.pos_up = [["pitch"],["jump_f"]];
      this.delay_frames.pos_up = [100,250];
      this.action_1.super = [["sk_s_handong","sk_s_luobing","sk_s_xiangdong"],["sk_s_handong","sk_s_luobing"]];
      this.delay_frames.super = [250,700];
      this.action_1.busrt = [["sk_s_storm","sk_s_luanren"]];
      this.delay_frames.busrt = [500];
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
