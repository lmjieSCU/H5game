class Chunli_role extends role_corn.Role
{
   function Chunli_role()
   {
      super();
      this._roleName = "Chunli";
      this.scale = 100;
      this.Vwalk = 11;
      this.Vdash = 28;
      this.Vjump_x = 13;
      this.Vjump_y = 43;
      this.Vjump_far = 20;
      this.opp_width2 = 60;
      this.superList = {sk_s_bo:1,sk_s_fengyi:1};
      this.burstList = {sk_s_bo_ss:1,sk_s_qixing:1};
      this.superMaxList = {sk_s_bo_s:1,sk_s_fengyi_s:1};
      this.skillSuperMapping = {sk_s_bo:"sk_s_bo_s",sk_s_fengyi:"sk_s_fengyi_s"};
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
      this.skillObj.s1 = "sk_s_bo";
      this.skillObj.s2 = "sk_s_fengyi";
      this.skillObj.busrt_a = "sk_s_qixing";
      this.skillObj.busrt_d = "sk_s_bo_ss";
      this.skillObj.toAir = "sk_shengtian";
      this.comboClass = new Chunli_Combo(this);
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
      this.input_pre.sk_huixuan_s2 = 10;
      this.input_pre.sk_huixuan_s3 = 10;
      this.input_pre.sk_dfk = 19;
   }
   function sk_huixuan()
   {
      if(this.status_2 != "land")
      {
         return false;
      }
      this.status_1 = "sk_huixuan";
      this.gotoAndStop(this.status_1);
      this.status_3 = "attack";
   }
   function sk_huixuan2()
   {
      if(this.status_2 != "land")
      {
         return false;
      }
      this.status_1 = "sk_huixuan2";
      this.gotoAndStop(this.status_1);
      this.status_3 = "attack";
   }
   function sk_bailietui()
   {
      if(this.status_2 == "air")
      {
         this.sk_bailietui_air();
         return undefined;
      }
      if(this.status_2 != "land")
      {
         return false;
      }
      this.status_1 = "sk_bailietui";
      this.gotoAndStop(this.status_1);
      this.status_3 = "attack";
   }
   function sk_bailietui_air()
   {
      this.status_1 = "sk_bailietui_air";
      this.gotoAndStop(this.status_1);
      this.status_3 = "attack";
   }
   function jump()
   {
      if(this.status_1 == "dash_f")
      {
         if(this.status_2 != "land" || this.holdFreeze || this.status_3 != "normal")
         {
            return false;
         }
         this.status_2 = "air";
         this.Vx = this.Vjump_far;
         this.Vy = this.Vjump_y;
         this.gotoAndStop("jump_f");
         this.status_1 = "jump_f";
      }
      else if(Key.isDown(this.f))
      {
         if(this.dir == 1)
         {
            this.jump_f();
         }
         else
         {
            this.jump_b();
         }
      }
      else if(Key.isDown(this.b))
      {
         if(this.dir == -1)
         {
            this.jump_f();
         }
         else
         {
            this.jump_b();
         }
      }
      else
      {
         this.jump_u();
      }
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
         _loc2_ = "squatKick";
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
         if(Key.isDown(this.f) && this.dir == 1)
         {
            _loc2_ = "kick_s1";
         }
         else if(Key.isDown(this.b) && this.dir == -1)
         {
            _loc2_ = "kick_s1";
         }
         else
         {
            _loc2_ = "squatKick_l";
         }
      }
      else if(Key.isDown(this.f) && this.dir == 1)
      {
         _loc2_ = "kick_s1";
      }
      else if(Key.isDown(this.b) && this.dir == -1)
      {
         _loc2_ = "kick_s1";
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
         _loc2_ = "squatPunch";
      }
      else if(this.status_1 == "dash_f")
      {
         _loc2_ = "punch";
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
}
