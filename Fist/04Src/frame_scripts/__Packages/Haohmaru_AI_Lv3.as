class Haohmaru_AI_Lv3 extends Haohmaru_AI
{
   function Haohmaru_AI_Lv3()
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
      this.skill_dis[0] = ["punch_l","kick_l","kick","fdf_pl","walk_f"];
      this.skill_dis[1] = ["squatKick","punch_l","kick_l","kick","f_pl","fdf_pl","heavyHit"];
      this.skill_dis[2] = ["db_k","bdf_p","fdf_pl","df_p","jump_f"];
      this.skill_dis[3] = ["walk_f","dash_f","df_p","jump_f"];
      this.skill_dis[4] = ["dash_f","df_p","walk_f"];
      this.skill_dis[5] = ["dash_f","df_p","walk_f"];
      this.skill2_dis[0] = ["punch","punch","kick"];
      this.skill2_dis[1] = ["squatKick","kick"];
      this.skill2_dis[2] = ["fdbf_p","dfdf_p","jump_f"];
      this.skill2_dis[3] = ["jump_f"];
      this.skill2_dis[4] = ["db_p","dash_f"];
      this.skill2_dis[5] = ["db_p","dash_f"];
      this.dis_num = this.dis_array.length;
   }
   function combo_init()
   {
      this.combo_1 = new Object();
      this.combo_land = new Object();
      this.combo_auto = new Object();
      this.combo_burst = new Object();
      this.delay_frames = new Object();
      this.combo_1.punch = ["bdf_p","rfdf_p","db_p","db_k","fdb_p","dfdf_p","fdbf_p"];
      this.combo_1.punch2 = ["f_pl","bdf_p","rfdf_p","fdb_p","dfdf_p","fdbf_p"];
      this.combo_1.punch_l = ["punch","kick","kick_l"];
      this.combo_1.kick_l = ["punch","kick"];
      this.combo_1.f_pl = ["rfdf_pl","rfdf_p","bdb_pl","db_k","fdb_p","dfdf_p","fdbf_p"];
      this.combo_1.kick = ["bdf_p","rfdf_p","bdb_pl","db_k","fdb_p","dfdf_p","fdbf_p"];
      this.combo_1.kick2 = ["f_pl","bdf_p","rfdf_p","fdb_p","dfdf_p","fdbf_p"];
      this.combo_1.squatPunch = ["bdf_p","rfdf_p","bdb_pl","db_k","fdb_p","dfdf_p"];
      this.combo_1.squatKick_l = ["punch_l"];
      this.combo_1.squatPunch_l = ["punch_l","squatKick_l"];
      this.combo_1.bdf_p = ["rfdf_p","bdb_pl","db_k","fdb_p","dfdf_p","fdbf_p"];
      this.combo_land.jump_f = ["punch","kick"];
      this.combo_burst.punch2 = ["f_pl","bdf_p","dfdf_p","fdbf_p","df_o","db_o"];
      this.combo_burst.punch2 = ["bdf_p","dfdf_p","fdbf_p","df_o","db_o"];
      this.combo_burst.kick2 = ["bdf_pl","dfdf_p","fdbf_p","df_o","db_o"];
      this.combo_burst.squatPunch = this.combo_burst.punch2;
      this.combo_burst.bdf_p = ["dfdf_p","df_o"];
      this.combo_burst.fdbf_p = ["dfdf_p","df_o"];
      this.combo_burst.dbbdf_p = ["dfdf_p","df_o"];
      this.combo_oppOnEgde.fdbf_p = [true,true];
      this.combo_oppOnEgde.dbbdf_p = [true,true];
      this.combo_1.dash_f = ["squatKick_l","squatPunch_l","roll_f","jump_f"];
      this.delay_frames.dash_f = [130,130,130,250,250];
      this.combo_1.walk_f = ["pitch","punch_l","kick","jump_f","dash_f"];
      this.delay_frames.walk_f = [100,150,180,250,400];
      this.combo_1.walk_b = ["punch_l","kick","jump","jump_f","bdb_kl"];
      this.delay_frames.walk_b = [100,150,200,260];
      this.action_1 = new Object();
      this.action_1.down = [["dash_b","roll_b","jump_b"],["walk_f","dash_f","bdb_kl"]];
      this.delay_frames.down = [200,1000];
      this.action_1.oppRoll = [["punch_l","squatPunch_l"],["squatKick_l","kick_l"]];
      this.delay_frames.oppRoll = [150,300];
      this.action_1.wander = [["roll_b","jump_b"],["wait","jump_b","walk_f","dash_b"],["dash_f","wait"]];
      this.delay_frames.wander = [150,300,1000];
      this.action_1.defend = [["walk_b","walk_b"],["walk_b","roll_b"],["walk_b","dash_b","jump_b","roll_b"],["walk_b","wait"]];
      this.delay_frames.defend = [130,200,400,1000];
      this.action_1.defend_f = [["roll_f"],["hold_u"]];
      this.delay_frames.defend_f = [150,1000];
      this.action_1.defend_h = [["hold_u","hold_u","roll_f"],["hold_u","roll_b"],["hold_u"]];
      this.delay_frames.defend_h = [130,200,1000];
      this.action_1.onEgde = [["attack","roll_f"],["attack"],["attack","dash_f"],["walk_f","dash_f"]];
      this.delay_frames.onEgde = [150,250,400,1000];
      this.action_1.pos_down = [["squatKick_l","squatKick"],["squatKick"]];
      this.delay_frames.pos_down = [150,250];
      this.action_1.pos_up = [["pitch"],["jump_f"]];
      this.delay_frames.pos_up = [100,250];
      this.action_1.oppJump = [["rfdf_p","walk_b"],["db_o","jump","bdb_kl"]];
      this.delay_frames.oppJump = [200,300];
      this.action_1.defendAttack = [["rfdf_p","dfdf_p","df_o"],["df_o","bdb_p"]];
      this.delay_frames.defendAttack = [100,300];
      this.action_1.super = [["dfdf_p"],["dfdf_p"]];
      this.delay_frames.super = [200,300];
      this.action_1.busrt = [["db_o"],["df_o"]];
      this.delay_frames.busrt = [100,300];
   }
   function move_hold()
   {
      clearInterval(this.delayTimer);
      var opp = this.opp;
      var _loc5_ = this.dir;
      var owner = this;
      this.mc.onEnterFrame = function()
      {
         if(_level0.inPause)
         {
            return undefined;
         }
         if(owner.inFreeze)
         {
            return undefined;
         }
         if(owner.checkMustDefendSkill(opp.status_1))
         {
            return undefined;
         }
         var _loc1_ = undefined;
         if(opp.hasObj())
         {
            if(opp.getObjNum() > 1)
            {
               return undefined;
            }
            var _loc3_ = opp.getObjDis();
            var _loc2_ = opp.getObj();
            if(_loc3_ < 170 && _loc3_ > 100)
            {
               _loc1_ = Math.random();
               _level0.out("obj.obj_level111:" + _loc2_.obj_level);
               if(_loc1_ < 0.25 && _loc2_._width < 250)
               {
                  owner.roll_f();
               }
               else if(_loc1_ < 0.4 && _loc2_.obj_level <= 0)
               {
                  owner.toSkill("db_k");
               }
            }
            else if(_loc3_ < 250 && _loc3_ > 150)
            {
               _level0.out("obj.obj_level222:" + _loc2_.obj_level);
               _loc1_ = Math.random();
               if(_loc1_ < 0.5 && _loc2_.obj_level <= 0)
               {
                  owner.toSkill("db_k");
               }
            }
            return undefined;
         }
         if((opp.mc.hitPos == "up" || opp.status_2 == "air") && owner.status_1 != "hold_u")
         {
            if(_level0.level == 5)
            {
               owner.hold_u();
               return undefined;
            }
            _loc1_ = int(Math.random() * 100);
            if(_loc1_ < owner.attack_s)
            {
               owner.hold_u();
               return undefined;
            }
         }
         else if((opp.status_1.indexOf("squat") > -1 || opp.mc.hitPos == "down") && owner.status_1 != "hold_d")
         {
            owner.hold_d();
            return undefined;
         }
         if(opp.status_3 != "attack" && !opp.hasObj() && owner.holdFreeze == false)
         {
            if(owner.status_1 == "hold_d")
            {
               owner.squat();
            }
            else
            {
               owner.stand();
            }
         }
         else if(owner.holdFreeze == false && opp.hit_over())
         {
            if(!owner.checkAttack())
            {
               if(owner.status_1 == "hold_d")
               {
                  owner.squat();
               }
               else
               {
                  owner.stand();
               }
            }
         }
      };
   }
}
