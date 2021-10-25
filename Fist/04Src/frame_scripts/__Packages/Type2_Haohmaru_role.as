class Type2_Haohmaru_role extends Haohmaru_role
{
   function Type2_Haohmaru_role()
   {
      super();
      this.roleMode = 2;
      this.superList = {fdbf_p_EX:1,dfdf_k_EX:1};
      this.burstList = {df_o_EX:1,db_o_EX:1};
      this.superMaxList = {fdbf_p_EXmax:1,dfdf_k_EX_max:1};
      this.skillSuperMapping = {fdbf_p_EX:"fdbf_p_EXmax",dfdf_k_EX:"dfdf_k_EX_max"};
      this.skillObj.s1 = "fdbf_p_EX";
      this.skillObj.s2 = "dfdf_k_EX";
      this.skillObj.busrt_a = "db_o_EX";
      this.skillObj.busrt_d = "df_o_EX";
      this.skillObj.toAir = "fdf_kl";
   }
   function pitch()
   {
      if(this.status_3 != "normal")
      {
         return false;
      }
      if(this.catch_check())
      {
         this.status_1 = "pitch2";
         this.gotoAndStop(this.status_1);
         this.status_3 = "attack";
         this.opp.status_3 = "hurt";
         return true;
      }
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
            _loc2_ = "df_pEX";
         }
         else if(Key.isDown(this.b) && this.dir == -1)
         {
            _loc2_ = "df_pEX";
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
         _loc2_ = "punch3";
      }
      else
      {
         _loc2_ = "punch3";
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
         _loc2_ = "f_pl_EX";
      }
      else if(Key.isDown(this.b) && this.dir == -1)
      {
         _loc2_ = "f_pl_EX";
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
