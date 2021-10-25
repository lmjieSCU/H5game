class Ryo_role extends role_corn.Role
{
   function Ryo_role()
   {
      super();
      this._roleName = "Ryu";
      this.scale = 100;
      this.Vwalk = 11;
      this.Vdash = 28;
      this.Vjump_x = 13;
      this.Vjump_y = 39;
      this.Vjump_far = 20;
      this.opp_width2 = 60;
      this.superList = {sk10:1,sk14:1,sk13:1};
      this.burstList = {sk_s_sys:1,sk_s_swms:1};
      this.skillSuperMapping = {sk10:"sk12",sk14:"sk14_s",sk13:"sk13_s"};
      this.skillObj.s1 = "sk10";
      this.skillObj.s2 = "sk14";
      this.skillObj.s3 = "sk13";
      this.skillObj.busrt_a = "sk_s_sys";
      this.skillObj.busrt_d = "sk_s_swms";
      this.skillObj.toAir = "sk3";
      this.skillObj.heavyHit = "heavyHit";
      this.skillObj.flyingObj = "sk1";
      this.comboClass = new Ryo_Combo(this);
      this.preCheck();
      this.colorObj.fire_red1 = {ra:"100",rb:"255",ga:"80",gb:"110",ba:"-100",bb:"0",aa:"100",ab:"0"};
      this.colorObj.fire_red2 = {ra:"80",rb:"255",ga:"-80",gb:"255",ba:"-100",bb:"0",aa:"100",ab:"0"};
      this.colorObj.fire_blue1 = {ra:"-65",rb:"200",ga:"-65",gb:"200",ba:"100",bb:"255",aa:"100",ab:"0"};
      this.colorObj.fire_blue2 = {ra:"-65",rb:"200",ga:"-65",gb:"200",ba:"-100",bb:"255",aa:"100",ab:"0"};
      this.colorObj.ice1 = {ra:"-100",rb:"255",ga:"-50",gb:"255",ba:"100",bb:"255",aa:"100",ab:"0"};
   }
   function preCheck()
   {
      this.input_pre.kick1 = 9;
   }
   function kick1()
   {
      this.gotoAndStop("kick1");
      this.status_1 = "kick1";
      this.status_3 = "attack";
   }
   function kick2()
   {
      if(this.status_2 != "land")
      {
         return false;
      }
      this.gotoAndStop("kick2");
      this.status_1 = "kick2";
      this.status_3 = "attack";
   }
   function sk_d1()
   {
      this.status_1 = "sk_d1";
      this.gotoAndStop(this.status_1);
      this.status_3 = "attack";
   }
   function punch2()
   {
      if(this.status_2 != "land")
      {
         return false;
      }
      this.status_1 = "punch2";
      this.gotoAndStop(this.status_1);
      this.status_3 = "attack";
   }
   function heavyHit()
   {
      if(this.status_2 != "land")
      {
         return false;
      }
      this.status_1 = "heavyHit";
      this.status_3 = "attack";
      this.gotoAndStop(this.status_1);
   }
   function sk_bodong_air()
   {
      if(this.status_2 == "air")
      {
         this.sk_bodong_air2();
         return undefined;
      }
      if(this.status_2 != "land")
      {
         return false;
      }
      this.status_1 = "sk_bodong_air";
      this.status_3 = "attack";
      this.gotoAndStop(this.status_1);
   }
   function sk_bodong_air2()
   {
      this.status_1 = "sk_bodong_air2";
      this.status_3 = "attack";
      this.gotoAndStop(this.status_1);
   }
   function sk2()
   {
      if(this.status_2 == "air")
      {
         this.sk4();
         return undefined;
      }
      if(this.status_2 != "land")
      {
         return false;
      }
      this.status_1 = "sk2";
      this.status_3 = "attack";
      this.gotoAndStop(this.status_1);
   }
   function sk4()
   {
      this.status_1 = "sk4";
      this.status_3 = "attack";
      this.gotoAndStop(this.status_1);
   }
   function sk12()
   {
      if(this.status_2 != "land")
      {
         return false;
      }
      this.status_1 = "sk12";
      this.status_3 = "attack";
      this.gotoAndStop(this.status_1);
   }
   function sk13()
   {
      if(this.status_2 != "land")
      {
         return false;
      }
      this.status_1 = "sk13";
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
         if(Key.isDown(this.d) && this.status_1 == "jump_f")
         {
            this.toSkill("sk_d1");
            return undefined;
         }
         _loc2_ = "kick_l";
         this.jumpSkill(_loc2_);
         return undefined;
      }
      if(this.status_1 == "dash_f")
      {
         _loc2_ = "kick1";
      }
      else if(Key.isDown(this.d))
      {
         _loc2_ = "squatKick_l";
      }
      else if(Key.isDown(this.f) && this.dir == 1)
      {
         _loc2_ = "kick1";
      }
      else if(Key.isDown(this.b) && this.dir == -1)
      {
         _loc2_ = "kick1";
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
      else if(Key.isDown(this.f) && this.dir == 1)
      {
         _loc2_ = "punch_s";
      }
      else if(Key.isDown(this.b) && this.dir == -1)
      {
         _loc2_ = "punch_s";
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
