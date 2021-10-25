class Kyo_role extends role_corn.Role
{
   function Kyo_role()
   {
      super();
      this._roleName = "Kyo";
      this.scale = 100;
      this.Vwalk = 11;
      this.Vdash = 28;
      this.Vjump_x = 13;
      this.Vjump_y = 38;
      this.Vjump_far = 20;
      this.opp_width2 = 60;
      this.frameOffset = 2;
      this.superList = {sk29:1,sk31:1};
      this.burstList = {sk_s3:1,sk3:1};
      this.superMaxList = {sk29_s:1,sk31_s:1};
      this.skillSuperMapping = {sk29:"sk29_s",sk31:"sk31_s"};
      this.skillObj.s1 = "sk29";
      this.skillObj.s2 = "sk31";
      this.skillObj.busrt_a = "sk_s3";
      this.skillObj.busrt_d = "sk3";
      this.skillObj.toAir = "sk0";
      this.winPoseArray = ["end","end2"];
      this.record_skill_totalFrame = ["sk1_2","sk28"];
      this.comboClass = new Kyo_Combo(this);
      this.preCheck();
      this.colorObj.fire_red1 = {ra:"100",rb:"255",ga:"100",gb:"80",ba:"100",bb:"0",aa:"100",ab:"0"};
      this.colorObj.fire_red2 = {ra:"-45",rb:"255",ga:"-100",gb:"200",ba:"-100",bb:"0",aa:"100",ab:"0"};
      this.colorObj.fire_blue1 = {ra:"100",rb:"0",ga:"100",gb:"0",ba:"100",bb:"255",aa:"100",ab:"0"};
      this.colorObj.fire_blue2 = {ra:"-100",rb:"178",ga:"-100",gb:"96",ba:"-100",bb:"239",aa:"100",ab:"0"};
      this.colorObj.ice1 = {ra:"-100",rb:"255",ga:"-50",gb:"255",ba:"100",bb:"255",aa:"100",ab:"0"};
   }
   function preCheck()
   {
      this.input_pre.roll_f = 10;
      this.input_pre.roll_b = 10;
      this.input_pre.land = 0;
      this.input_pre.land2 = 0;
   }
   function sk1_2()
   {
      this.status_1 = "sk1_2";
      this.mc.gotoAndPlay("s_2");
   }
   function sk32()
   {
      if(this.status_2 != "land")
      {
         return false;
      }
      this.status_1 = "sk32";
      this.status_3 = "attack";
      this.gotoAndStop(this.status_1);
   }
   function sk3()
   {
      if(this.status_2 != "land")
      {
         return false;
      }
      this.status_1 = "sk3";
      this.status_3 = "attack";
      this.gotoAndStop(this.status_1);
   }
   function sk34()
   {
      if(this.status_2 != "land")
      {
         return false;
      }
      this.status_1 = "sk34";
      this.status_3 = "attack";
      this.gotoAndStop(this.status_1);
   }
   function to_kick()
   {
      var _loc2_ = undefined;
      if(this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b")
      {
         this.jumpSkill("kick");
         return undefined;
      }
      if(this.status_1 == "dash_f")
      {
         _loc2_ = "sk14";
      }
      else if(Key.isDown(this.d))
      {
         if(Key.isDown(this.f) && this.dir == 1)
         {
            _loc2_ = "squatKick_s";
         }
         else if(Key.isDown(this.b) && this.dir == -1)
         {
            _loc2_ = "squatKick_s";
         }
         else
         {
            _loc2_ = "squatKick";
         }
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
         this.jumpSkill("kick_l");
         return undefined;
      }
      if(Key.isDown(this.d))
      {
         _loc2_ = "squatKick_l";
      }
      else if(Key.isDown(this.f) && this.dir == 1)
      {
         _loc2_ = "kick2";
      }
      else if(Key.isDown(this.b) && this.dir == -1)
      {
         _loc2_ = "kick2";
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
         if(Key.isDown(this.d))
         {
            this.jumpSkill("punch_s");
         }
         else
         {
            this.jumpSkill("punch");
         }
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
