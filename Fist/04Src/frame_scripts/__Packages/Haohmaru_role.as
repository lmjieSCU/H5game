class Haohmaru_role extends role_corn.Role
{
   function Haohmaru_role()
   {
      super();
      this._roleName = "Haohmaru";
      this.scale = 100;
      this.Vwalk = 11;
      this.Vdash = 28;
      this.Vjump_x = 13;
      this.Vjump_y = 43;
      this.Vjump_far = 20;
      this.opp_width2 = 60;
      this.superList = {dfdf_p:1,fdbf_p:1};
      this.burstList = {df_o:1,db_o:1};
      this.superMaxList = {dfdf_p_max:1,fdbf_p_max:1};
      this.skillSuperMapping = {dfdf_p:"dfdf_p_max",fdbf_p:"fdbf_p_max"};
      this.winPoseArray = ["end","end2"];
      var _loc3_ = Math.random();
      if(_loc3_ > 0.5)
      {
         this.gotoAndStop("begin");
      }
      else
      {
         this.gotoAndStop("begin2");
      }
      this.skillObj.s1 = "dfdf_p";
      this.skillObj.s2 = "fdbf_p";
      this.skillObj.busrt_a = "df_o";
      this.skillObj.busrt_d = "db_o";
      this.skillObj.toAir = "fdf_p";
      this.comboClass = new Haohmaru_Combo(this);
      this.preCheck();
      this.colorObj.fire_red1 = {ra:"100",rb:"255",ga:"-70",gb:"255",ba:"100",bb:"-255",aa:"100",ab:"0"};
      this.colorObj.fire_red2 = {ra:"100",rb:"255",ga:"-100",gb:"255",ba:"100",bb:"-255",aa:"100",ab:"0"};
      this.colorObj.fire_blue1 = {ra:"-100",rb:"255",ga:"-100",gb:"255",ba:"100",bb:"255",aa:"100",ab:"0"};
      this.colorObj.fire_blue2 = {ra:"-100",rb:"255",ga:"-100",gb:"190",ba:"100",bb:"255",aa:"100",ab:"0"};
      this.colorObj.ice1 = {ra:"-100",rb:"255",ga:"-50",gb:"255",ba:"100",bb:"255",aa:"100",ab:"0"};
   }
   function preCheck()
   {
      this.input_pre.roll_f = 10;
      this.input_pre.roll_b = 10;
      this.input_pre.land = 0;
      this.input_pre.land2 = 0;
   }
   function jump_f()
   {
      if(this.status_2 == "air" && this.status_3 == "normal" && this.status_1 != "jump_f")
      {
         var _loc2_ = _level0.char_mc._x + this._x;
         if(_loc2_ < 80)
         {
            this.Vx = 17;
            this.Vy = 42;
         }
         else if(_loc2_ > 580)
         {
            if(this.status_1 == "jump")
            {
               this.Vx = -17;
            }
            else
            {
               this.Vx = 17;
            }
            this.Vy = 42;
         }
         else
         {
            return false;
         }
      }
      else
      {
         if(this.status_2 != "land" || this.holdFreeze || this.status_3 != "normal")
         {
            return false;
         }
         this.Vx = this.Vjump_x;
         this.Vy = this.Vjump_y;
      }
      this.status_2 = "air";
      if(this.inRecord)
      {
         this.skill_record("jump_f");
      }
      this.gotoAndStop("jump_f");
      this.status_1 = "jump_f";
   }
   function jump_air()
   {
      if(this.status_2 == "air" && this.onEgde && this.status_3 == "normal")
      {
         var _loc2_ = _level0.char_mc._x + this._x;
         if(!(_loc2_ < 80 || _loc2_ > 580))
         {
            return false;
         }
      }
      else if(this.status_2 != "land" || this.holdFreeze || this.status_3 != "normal")
      {
         return false;
      }
      this.status_2 = "air";
      if(this.inRecord)
      {
         this.skill_record("jump_f");
      }
      this.Vx = this.Vjump_x;
      this.Vy = this.Vjump_y;
      this.gotoAndStop("jump_f");
      this.status_1 = "jump_f";
   }
   function fdf_p()
   {
      if(this.status_2 != "land")
      {
         return false;
      }
      if(this.status_1 == "dash_f")
      {
         this.status_1 = "rfdf_p";
      }
      else
      {
         this.status_1 = "fdf_p";
      }
      this.status_3 = "attack";
      this.gotoAndStop(this.status_1);
   }
   function fdf_k_l()
   {
      if(this.status_2 != "land")
      {
         return false;
      }
      if(this.status_1 == "dash_f")
      {
         this.status_1 = "rfdf_kl";
      }
      else
      {
         this.status_1 = "fdf_kl";
      }
      this.status_3 = "attack";
      this.gotoAndStop(this.status_1);
   }
   function fdf_p_l()
   {
      if(this.status_2 != "land")
      {
         return false;
      }
      if(this.status_1 == "dash_f")
      {
         this.status_1 = "rfdf_pl";
      }
      else
      {
         this.status_1 = "fdf_pl";
      }
      this.status_3 = "attack";
      this.gotoAndStop(this.status_1);
   }
   function to_kick()
   {
      var _loc2_ = undefined;
      if(this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b")
      {
         if(Key.isDown(this.d))
         {
            this.jumpSkill("kick_d");
         }
         else
         {
            this.jumpSkill("kick");
         }
         return undefined;
      }
      if(Key.isDown(this.d))
      {
         if(Key.isDown(this.f) && this.dir == 1)
         {
            _loc2_ = "dash_k";
         }
         else if(Key.isDown(this.b) && this.dir == -1)
         {
            _loc2_ = "dash_k";
         }
         else
         {
            _loc2_ = "squatKick";
         }
      }
      else if(this.status_1 == "dash_f")
      {
         _loc2_ = "dash_k";
      }
      else
      {
         _loc2_ = "kick";
      }
      this.toSkill(_loc2_);
   }
   function to_kick_l()
   {
      var _loc2_ = undefined;
      if(this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b")
      {
         _loc2_ = "kick_l";
         this.jumpSkill(_loc2_);
         return undefined;
      }
      if(Key.isDown(this.d))
      {
         if(Key.isDown(this.f) && this.dir == -1)
         {
            _loc2_ = "bd_k";
         }
         else if(Key.isDown(this.b) && this.dir == 1)
         {
            _loc2_ = "bd_k";
         }
         else
         {
            _loc2_ = "squatKick_l";
         }
      }
      else if(this.status_1 == "dash_f")
      {
         _loc2_ = "dash_kl";
      }
      else if(Key.isDown(this.f) && this.dir == 1 || Key.isDown(this.b) && this.dir == -1)
      {
         _loc2_ = "f_kl";
      }
      else if(this.mode_key == "easy")
      {
         _loc2_ = this.skillObj.s2;
      }
      else
      {
         _loc2_ = "kick_l";
      }
      this.toSkill(_loc2_);
   }
   function to_punch()
   {
      var _loc2_ = undefined;
      if(this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b")
      {
         this.jumpSkill("punch");
         return undefined;
      }
      if(Key.isDown(this.d))
      {
         if(Key.isDown(this.f) && this.dir == 1)
         {
            _loc2_ = "df_p";
         }
         else if(Key.isDown(this.b) && this.dir == -1)
         {
            _loc2_ = "df_p";
         }
         else
         {
            _loc2_ = "squatPunch";
         }
      }
      else if(this.status_1 == "dash_f")
      {
         _loc2_ = "dash_p";
      }
      else if(Key.isDown(this.f) && this.dir == 1 || Key.isDown(this.b) && this.dir == -1)
      {
         if(this.pitch())
         {
            return undefined;
         }
         _loc2_ = "punch";
      }
      else
      {
         _loc2_ = "punch";
      }
      this.toSkill(_loc2_);
   }
   function to_punch_l()
   {
      var _loc2_ = undefined;
      if(this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b")
      {
         this.jumpSkill("punch_l");
         return undefined;
      }
      if(Key.isDown(this.d))
      {
         _loc2_ = "squatPunch_l";
      }
      else if(this.status_1 == "dash_f")
      {
         _loc2_ = "dash_pl";
      }
      else if(Key.isDown(this.f) && this.dir == 1)
      {
         _loc2_ = "f_pl";
      }
      else if(Key.isDown(this.b) && this.dir == -1)
      {
         _loc2_ = "f_pl";
      }
      else if(this.mode_key == "easy")
      {
         _loc2_ = this.skillObj.s1;
      }
      else
      {
         _loc2_ = "punch_l";
      }
      this.toSkill(_loc2_);
   }
   function df_pl()
   {
      if(this.status_2 == "air")
      {
         this.airdf_pl();
         return undefined;
      }
      if(this.status_2 != "land")
      {
         return false;
      }
      this.status_1 = "df_pl";
      this.status_3 = "attack";
      this.gotoAndStop(this.status_1);
   }
   function airdf_pl()
   {
      this.status_1 = "airdf_pl";
      this.status_3 = "attack";
      this.gotoAndStop(this.status_1);
   }
   function df_kl()
   {
      if(this.status_2 == "air")
      {
         this.airdf_kl();
         return undefined;
      }
      if(this.status_2 != "land")
      {
         return false;
      }
      this.status_1 = "df_kl";
      this.status_3 = "attack";
      this.gotoAndStop(this.status_1);
   }
   function airdf_kl()
   {
      this.status_1 = "airdf_kl";
      this.status_3 = "attack";
      this.gotoAndStop(this.status_1);
   }
   function df_p()
   {
      if(this.status_2 == "air")
      {
         this.airdf_p();
         return undefined;
      }
      if(this.status_2 != "land")
      {
         return false;
      }
      this.status_1 = "df_p";
      this.status_3 = "attack";
      this.gotoAndStop(this.status_1);
   }
   function airdf_p()
   {
      this.status_1 = "airdf_p";
      this.status_3 = "attack";
      this.gotoAndStop(this.status_1);
   }
}
