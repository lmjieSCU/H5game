class Orochi_AI_Lv3 extends Orochi_AI
{
   function Orochi_AI_Lv3()
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
            var _loc2_ = opp.getObjDis();
            var _loc3_ = opp.getObj();
            if(_loc2_ < 170 && _loc2_ > 100)
            {
               _loc1_ = Math.random();
               if(_loc1_ < 0.25 && _loc3_._width < 250)
               {
                  owner.roll_f();
               }
               else if(_loc1_ < 0.4 && _loc3_.obj_level <= 0)
               {
                  owner.toSkill("sk_dbp");
               }
            }
            else if(_loc2_ < 250 && _loc2_ > 150)
            {
               _loc1_ = Math.random();
               if(_loc1_ < 0.5 && _loc3_.obj_level <= 0)
               {
                  owner.toSkill("sk_dbp");
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
