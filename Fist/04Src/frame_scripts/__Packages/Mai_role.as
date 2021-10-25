class Mai_role extends role_corn.Role
{
   function Mai_role()
   {
      super();
      this._roleName = "Mai";
      this.scale = 100;
      this.Vwalk = 11;
      this.Vdash = 28;
      this.Vjump_x = 13;
      this.Vjump_y = 39;
      this.Vjump_far = 20;
      this.opp_width2 = 60;
      this.superList = {sk_s_shuiniao:1,sk_s_renfeng:1};
      this.burstList = {sk_s_heti:1,sk_s_qianzai1:1};
      this.superMaxList = {sk_s_shuiniao_s:1,sk_s_renfeng_s:1};
      this.skillSuperMapping = {sk_s_shuiniao:"sk_s_shuiniao_s",sk_s_renfeng:"sk_s_renfeng_s"};
      this.winPoseArray = ["end","end2"];
      this.skillObj.s1 = "sk_s_shuiniao";
      this.skillObj.s2 = "sk_s_renfeng";
      this.skillObj.busrt_a = "sk_s_heti";
      this.skillObj.busrt_d = "sk_s_qianzai1";
      this.skillObj.toAir = "sk_feixiang";
      this.comboClass = new Mai_Combo(this);
      this.preCheck();
      this.colorObj.fire_red1 = {ra:"100",rb:"255",ga:"-70",gb:"255",ba:"-100",bb:"-100",aa:"100",ab:"0"};
      this.colorObj.fire_red2 = {ra:"100",rb:"255",ga:"-100",gb:"255",ba:"-100",bb:"-100",aa:"100",ab:"0"};
      this.colorObj.fire_blue1 = {ra:"100",rb:"0",ga:"100",gb:"0",ba:"100",bb:"255",aa:"100",ab:"0"};
      this.colorObj.fire_blue2 = {ra:"-100",rb:"178",ga:"-100",gb:"96",ba:"-100",bb:"239",aa:"100",ab:"0"};
      this.colorObj.ice1 = {ra:"-100",rb:"255",ga:"-50",gb:"255",ba:"100",bb:"255",aa:"100",ab:"0"};
   }
   function stageVar(l_max, s_Point, p_max, opponent, burst)
   {
      super.stageVar(l_max,s_Point,p_max,opponent,burst);
      if(opponent.roleName == "Chunli")
      {
         this.gotoAndStop("begin2");
      }
      else
      {
         var _loc3_ = Math.random();
         if(_loc3_ > 0.5)
         {
            this.gotoAndStop("begin");
         }
         else
         {
            this.gotoAndStop("begin");
         }
      }
   }
   function preCheck()
   {
      this.input_pre.roll_f = 10;
      this.input_pre.roll_b = 10;
      this.input_pre.land = 0;
      this.input_pre.land2 = 0;
      this.input_pre.sk_qianniao_s2 = 10;
      this.input_pre.sk_qianniao_s3 = 10;
      this.input_pre.sk_dfk = 19;
   }
   function sk_longyanwu()
   {
      if(this.status_2 == "air")
      {
         this.sk_feishu();
         return undefined;
      }
      if(this.status_2 != "land")
      {
         return false;
      }
      this.status_1 = "sk_longyanwu";
      this.gotoAndStop(this.status_1);
      this.status_3 = "attack";
   }
   function sk_longyanwu2()
   {
      if(this.status_2 == "air")
      {
         this.sk_feishu();
         return undefined;
      }
      if(this.status_2 != "land")
      {
         return false;
      }
      this.status_1 = "sk_longyanwu2";
      this.gotoAndStop(this.status_1);
      this.status_3 = "attack";
   }
   function sk_feishu()
   {
      this.status_1 = "sk_feishu";
      this.gotoAndStop(this.status_1);
      this.status_3 = "attack";
   }
   function sk_d1()
   {
      this.status_1 = "sk_d1";
      this.gotoAndStop(this.status_1);
      this.status_3 = "attack";
   }
   function sk_d2()
   {
      this.status_1 = "sk_d2";
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
            this.toSkill("sk_d1");
            return undefined;
         }
         _loc2_ = "kick";
         this.jumpSkill(_loc2_);
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
         if(Key.isDown(this.d))
         {
            this.toSkill("sk_d2");
            return undefined;
         }
         _loc2_ = "kick_l";
         this.jumpSkill(_loc2_);
         return undefined;
      }
      if(Key.isDown(this.d))
      {
         if(Key.isDown(this.f) && this.dir == 1)
         {
            _loc2_ = "sk_huaxing";
         }
         else if(Key.isDown(this.b) && this.dir == -1)
         {
            _loc2_ = "sk_huaxing";
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
         if(Key.isDown(this.d))
         {
            this.jumpSkill("punch_s");
         }
         else
         {
            this.jumpSkill("punch_l");
         }
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
