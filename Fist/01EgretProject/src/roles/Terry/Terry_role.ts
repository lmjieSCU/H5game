class Terry_role extends Role
{
   constructor ()
   {
      super();
      this._roleName = "roleTerry";
      this.scale = 1;
      this.Vwalk = 11;
      this.Vdash = 28;
      this.Vjump_x = 13;
      this.Vjump_y = 43;
      this.Vjump_far = 20;
      this.opp_width2 = 60;
      this.superList = {dbdf_p:1,dfdf_k:1};
      this.burstList = {df_o:1,db_o:1};
      this.superMaxList = {dbdf_p_max:1,dfdf_k_max:1};
      this.skillSuperMapping = {dbdf_p:"dbdf_p_max",dfdf_k:"dfdf_k_max"};
      this.winPoseArray = ["end","end2"];
      let _loc3_ = Math.random();
      this.skillObj.s1 = "dbdf_p";
      this.skillObj.s2 = "dfdf_k";
      this.skillObj.busrt_a = "df_o";
      this.skillObj.busrt_d = "db_o";
      this.skillObj.toAir = "fdf_p";
      this.comboClass = new Terry_Combo(this);
      this.preCheck();
      this.colorObj.fire_red1 = {ra:"100",rb:"255",ga:"-70",gb:"255",ba:"100",bb:"-255",aa:"100",ab:"0"};
      this.colorObj.fire_red2 = {ra:"100",rb:"255",ga:"-100",gb:"255",ba:"100",bb:"-255",aa:"100",ab:"0"};
      this.colorObj.fire_blue1 = {ra:"-100",rb:"255",ga:"-100",gb:"255",ba:"100",bb:"255",aa:"100",ab:"0"};
      this.colorObj.fire_blue2 = {ra:"-100",rb:"255",ga:"-100",gb:"190",ba:"100",bb:"255",aa:"100",ab:"0"};
      this.colorObj.ice1 = {ra:"-100",rb:"255",ga:"-50",gb:"255",ba:"100",bb:"255",aa:"100",ab:"0"};
      this.CommonSeries=["punch","f_p","df_k_EX","fdf_kl"];
   }
   public preCheck()
   {
      this.input_pre.roll_f = 10;
      this.input_pre.roll_b = 10;
      this.input_pre.land = 0;
      this.input_pre.land2 = 0;
   }
   public jump_f()
   {
      if(this.status_2 == "air" && this.status_3 == "normal" && this.status_1 != "jump_f")
      {
         //var _loc2_ = _level0.char_mc._x + this._x;
         let _loc2_= this.parent.localToGlobal().x
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
      this.mc.gotoAndStop("jump_f");
      this.status_1 = "jump_f";
   }
   public jump_air()
   {
      if(this.status_2 == "air" && this.onEdge && this.status_3 == "normal")
      {
         //var _loc2_ = _level0.char_mc._x + this._x;
         let _loc2_= this.parent.localToGlobal().x
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
      this.mc.gotoAndStop("jump_f");
      this.status_1 = "jump_f";
   }
   
   public to_kick()
   {
      let _loc2_ = undefined;
      if(this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b")
      {
         //if(Key.isDown(this.d))
         if (this.keyCtrl.key.isDown(this._downButton))
         {
            this.jumpSkill("kick_d");
         }
         else
         {
            this.jumpSkill("kick");
         }
         return undefined;
      }
      //if(Key.isDown(this.d))
      if (this.keyCtrl.key.isDown(this._downButton))
      {
         _loc2_ = "squatKick";
      }
      else
      {
         _loc2_ = "kick";
      }
      this.toSkill(_loc2_);
   }
   public to_kick_l()
   {
      var _loc2_ = undefined;
      if(this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b")
      {
         _loc2_ = "kick_l";
         this.jumpSkill(_loc2_);
         return undefined;
      }
      //if(Key.isDown(this.d))
      if (this.keyCtrl.key.isDown(this._downButton))
      {
         _loc2_ = "squatKick_l";
      }
      else if(this.mode_key == "easy")
      {
         _loc2_ = "df_k3";
      }
      else
      {
         _loc2_ = "kick_l";
      }
      this.toSkill(_loc2_);
   }
   public to_punch()
   {
      var _loc2_ = undefined;
      if(this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b")
      {
         this.jumpSkill("punch");
         return undefined;
      }
      //if(Key.isDown(this.d))
      if (this.keyCtrl.key.isDown(this._downButton))
      {
         //if(Key.isDown(this.f) && this.dir == 1)
         if (this.keyCtrl.key.isDown(this._frontButton)&&this.dir == 1)
         {
            _loc2_ = "df_p";
         }
         //else if(Key.isDown(this.b) && this.dir == -1)
         else if (this.keyCtrl.key.isDown(this._backButton)&&this.dir == 1)
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
         _loc2_ = "punch";
      }
      //else if(Key.isDown(this.f) && this.dir == 1 || Key.isDown(this.b) && this.dir == -1)
      else if (this.keyCtrl.key.isDown(this._frontButton)&&this.dir == 1||this.keyCtrl.key.isDown(this._backButton) && this.dir == -1)
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
   public to_punch_l()
   {
      var _loc2_ = undefined;
      if(this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b")
      {
         this.jumpSkill("punch_l");
         return undefined;
      }
      //if(Key.isDown(this.d))
      if (this.keyCtrl.key.isDown(this._downButton))
      {
         _loc2_ = "squatPunch_l";
      }
      //else if(Key.isDown(this.f) && this.dir == 1)
      else if (this.keyCtrl.key.isDown(this._frontButton)&& this.dir == 1)
      {
         _loc2_ = "f_p";
      }
      //d
      else if(this.keyCtrl.key.isDown(this._downButton) && this.dir == -1)
      {
         _loc2_ = "f_p";
      }
      else if(this.mode_key == "easy")
      {
         _loc2_ = "heavyHit";
      }
      else
      {
         _loc2_ = "punch_l";
      }
      this.toSkill(_loc2_);
   }
}
