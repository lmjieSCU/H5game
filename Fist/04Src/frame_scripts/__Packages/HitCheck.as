class HitCheck extends MovieClip
{
   function HitCheck()
   {
      super();
      trace("HitCheck: " + HitCheck);
      this._name = "area";
   }
   function start_hitCheck(obj, r)
   {
      this.hitValue = obj;
      this.beatArea = this;
      this.role = r;
      this.opp = this.role.opp;
      if(!this.hitValue.reCheck && this.opp.status_3 == "hurt")
      {
         return undefined;
      }
      if(this.hitValue.isObj)
      {
         this.role.flyingObj = this._parent;
      }
      this.role.onHit = false;
      if(this.opp.status_3 == "down" && this.hitValue.hitPos != "land")
      {
         return undefined;
      }
      if(this.hitValue.nohit_status.length > 0)
      {
         for(var _loc4_ in this.hitValue.nohit_status)
         {
            var _loc2_ = this.hitValue.nohit_status[_loc4_];
            if(this.opp.status_1 == _loc2_)
            {
               return undefined;
            }
         }
      }
      if(this.hitValue.nohit_skills.length > 0)
      {
         for(var _loc4_ in this.hitValue.nohit_skills)
         {
            var _loc3_ = String(this.hitValue.nohit_skills[_loc4_]);
            if(String(this.opp.mc.hitSkillName) == _loc3_ && this.opp.status_3 == "hurt")
            {
               return undefined;
            }
         }
      }
      this.onEnterFrame = this.do_hitCheck;
      this.do_hitCheck();
   }
   function do_hitCheck()
   {
      if(_level0.inPause)
      {
         return undefined;
      }
      if(_level0.inFreeze)
      {
         return undefined;
      }
      if(this.beatArea.hitTest(this.opp.mc.body))
      {
         this.hitValue.checkTimes = this.hitValue.checkTimes - 1;
         if(this.hitValue.checkTimes == 0)
         {
            this.stop_hitCheck();
         }
         if(this.hitValue.isObj)
         {
            this._parent.play();
         }
         this.role.doHit(this.hitValue);
         this.opp.doHurt(this.hitValue);
      }
   }
   function stop_hitCheck()
   {
      delete this.onEnterFrame;
   }
   function getPosY()
   {
      var _loc2_ = new Object();
      _loc2_.x = this._x;
      _loc2_.y = this._y;
      this._parent.localToGlobal(_loc2_);
      return _loc2_.y;
   }
}
