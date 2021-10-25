class HitCheck_obj extends MovieClip
{
   function HitCheck_obj()
   {
      super();
      this._name = "area";
      this.dir = this._parent.dir;
   }
   function start_hitCheck(obj, r)
   {
      this.hitValue = obj;
      this.beatArea = this;
      this._parent.obj_level = this.obj_level;
      this.role = r;
      this.opp = this.role.opp;
      if(this.opp.status_3 == "hurt" && !this.hitValue.reCheck)
      {
         return undefined;
      }
      if(this.hitValue.isObj)
      {
         this.role.flyingObj = this._parent;
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
      if(this.obj_Vx != 0 || this.obj_Vy != 0)
      {
         this.do_move();
      }
      if(this.opp.status_3 == "down" && this.hitValue.hitPos != "land")
      {
         return undefined;
      }
      if(this.hitValue.nohit_status.length > 0)
      {
         for(var _loc6_ in this.hitValue.nohit_status)
         {
            var _loc3_ = this.hitValue.nohit_status[_loc6_];
            if(this.opp.status_1 == _loc3_)
            {
               return undefined;
            }
         }
      }
      if(this.hitValue.nohit_skills.length > 0)
      {
         for(var _loc6_ in this.hitValue.nohit_skills)
         {
            var _loc4_ = this.hitValue.nohit_skills[_loc6_];
            if(this.role.skill_last == _loc4_ && this.opp.status_3 == "hurt")
            {
               return undefined;
            }
         }
      }
      if(this.beatArea.hitTest(this.opp.mc.body))
      {
         this.role.onHit = true;
         this.hitValue.checkTimes = this.hitValue.checkTimes - 1;
         this.role.doHit(this.hitValue);
         this.opp.doHurt(this.hitValue);
         if(this.hitValue.checkTimes == 0)
         {
            this.stop_hitCheck();
         }
         if(this.hitValue.isObj)
         {
            this.do_hitOpp();
         }
      }
      else if(this.hitValue.isObj)
      {
         var _loc5_ = this.opp._parent.skill_loader;
         if(_loc5_.getNextHighestDepth() > 0)
         {
            for(var _loc6_ in _loc5_)
            {
               var _loc2_ = _loc5_[_loc6_].area;
               if(_loc2_ != this)
               {
                  if(_loc2_.hitTest(this))
                  {
                     if(this.obj_level > _loc2_.obj_level)
                     {
                        _loc2_.do_hitObj();
                     }
                     else if(this.obj_level == _loc2_.obj_level)
                     {
                        _loc2_.do_hitObj();
                        this.do_hitObj();
                     }
                     else
                     {
                        this.do_hitObj();
                     }
                  }
               }
            }
         }
      }
      else
      {
         this.role.onHit = false;
      }
   }
   function do_move()
   {
      if(this.obj_Vx != 0)
      {
         this._parent._x = this._parent._x + this.obj_Vx * this.dir;
      }
      if(this.obj_Vy != 0)
      {
         this._parent._y = this._parent._y + this.obj_Vy;
      }
      var _loc2_ = this._parent._x + _level0.char_mc._x;
      var _loc3_ = this._parent._y + _level0.char_mc._y;
      if(_loc2_ > 700 || _loc2_ < -50)
      {
         this._parent.removeMovieClip();
      }
      if(this._parent._y >= _level0.land_Y && this.obj_Vy > 0)
      {
         this._parent._y = _level0.land_Y;
         this.do_hitOpp();
      }
      _level0.out("_parent._y:" + this._parent._y + "   " + _level0.land_Y + "   " + this.obj_Vy);
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
   function do_hitOpp()
   {
      this.stop_hitCheck();
      if(this._parent.hit != undefined)
      {
         this._parent.hit();
      }
      else
      {
         this._parent.play();
      }
   }
   function do_hitObj()
   {
      this.stop_hitCheck();
      if(this._parent.hit != undefined)
      {
         this._parent.hit();
      }
      else
      {
         this._parent.play();
      }
   }
   function hitBack()
   {
      this.dir = - this.dir;
      this._parent._xscale = - this._parent._xscale;
      this.start_hitCheck(this.hitValue,this.opp);
   }
}
