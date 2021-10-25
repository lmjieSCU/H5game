class role_corn.Combo_listener extends MovieClip
{
   function Combo_listener()
   {
      super();
   }
   function check_combo(status_1, skill)
   {
      this.superCancle = false;
      if(this.noCancle[status_1] == skill)
      {
         return undefined;
      }
      if(this.check_combo1(status_1,skill))
      {
         return true;
      }
      if(this.role.opp.inCount != true)
      {
         if(this.check_combo2(status_1,skill))
         {
            return true;
         }
         if(this.check_combo3(status_1,skill))
         {
            return true;
         }
         if(this.check_combo4(status_1,skill))
         {
            return true;
         }
      }
   }
   function check_combo1(status_1, skill)
   {
      var _loc2_ = undefined;
      _loc2_ = this.combo1[status_1][skill];
      if(_loc2_ != undefined)
      {
         if(this.start_combo(status_1,_loc2_))
         {
            return true;
         }
      }
   }
   function check_combo2(status_1, skill)
   {
      if(this.beCancled[status_1] != 1)
      {
         return false;
      }
      if(this.s_cancle[status_1][skill] != 1)
      {
         if(this.notTOcancle[skill] == 1)
         {
            return false;
         }
      }
      if(this.start_combo(status_1,skill))
      {
         return true;
      }
   }
   function check_combo3(status_1, skill)
   {
      if(this.role.superCancle() && this.notTOcancle[skill] != 1 && status_1 != skill)
      {
         this.superCancle = true;
         if(this.start_combo(status_1,skill))
         {
            return true;
         }
      }
   }
   function check_combo4(status_1, skill)
   {
      if(this.role.superCancle() && this.notTOcancle[skill] != 1 && status_1 != skill)
      {
         this.superCancle = true;
         if(this.role.status_2 == "toLand")
         {
            this.role.status_2 = "land";
            this.role.powerDecType2 = "cancle";
            this.role.skill_start(skill);
            return true;
         }
      }
   }
   function start_combo(status_1, skill)
   {
      var role_mc = this.role;
      var _loc2_ = this.role.mc;
      var start_frame = this.combo2[status_1];
      if(isNaN(start_frame))
      {
         return false;
      }
      var SC = this.superCancle;
      if(_loc2_._currentframe < start_frame - 5)
      {
         return false;
      }
      _loc2_.onEnterFrame = function()
      {
         if(_level0.inPause)
         {
            return undefined;
         }
         if(role_mc.inFreeze)
         {
            return undefined;
         }
         if(this._currentframe >= start_frame)
         {
            if(SC)
            {
               role_mc.powerDecType2 = "cancle";
            }
            role_mc.skill_start(skill);
            delete this.onEnterFrame;
         }
      };
      return true;
   }
}
