class Life_Power extends MovieClip
{
   var inBurst = false;
   function Life_Power()
   {
      super();
      this.init_life();
      this.init_power();
   }
   function init_life()
   {
      this.life_max = _level0.life_max;
      this.lifeBar_num = _level0.lifeBar_num;
      if(this.lifeBar_num > 1)
      {
         this.life_num.gotoAndStop(this.lifeBar_num);
      }
      this.life_d = 30;
      this.d_p = 30;
      this.d_h = 2;
      this.life_now = this.life_max;
      this.life_mc = this.lifeBar_mc.bar;
      this.life2_mc = this.lifeBar_mc.bar2;
      this.lifeBar_length = this.life_mc._width;
      _level0.out("lifeBar_num:" + this.lifeBar_num + "   " + this.life_now);
   }
   function reset()
   {
      this.lifeBar_num = _level0.lifeBar_num;
      if(this.lifeBar_num > 1)
      {
         this.life_num.gotoAndStop(this.lifeBar_num);
      }
      this.life_now = this.life_max;
      this.life_mc._width = this.lifeBar_length;
      this.lifeBar_mc.lifeBg.gotoAndStop(1);
   }
   function lifeControl(Obj)
   {
      if(_level0.checkNoEnemyMode(this.role))
      {
         return undefined;
      }
      if(_level0.timeOver)
      {
         return undefined;
      }
      if(this.life_now == 0)
      {
         return undefined;
      }
      var _loc2_ = Obj.d_rate;
      if(_loc2_ == undefined)
      {
         _loc2_ = 1;
      }
      var _loc4_ = _loc2_ * this.d_p;
      this.life_now = this.life_now - _loc4_;
      Obj.target.life = Obj.target.life - _loc4_;
      if(this.role.opp.mc.continueHit && this.life_now <= 0 && this.lifeBar_num == 1)
      {
         this.life_now = 1;
      }
      else if(this.life_now <= 0)
      {
         this.lifeBar_num = this.lifeBar_num - 1;
         if(this.lifeBar_num > 0)
         {
            this.life_num.gotoAndStop(this.lifeBar_num);
         }
         _level0.out("lifeBar_num:" + this.lifeBar_num + "     " + this.life_now);
         if(_level0.player_type == "trainning" && this.lifeBar_num < -1)
         {
            this.life_now = this.life_now + this.life_max;
         }
         else if(this.lifeBar_num == 0)
         {
            this.life_now = 0;
            Obj.target.life = 0;
            this.do_KO(Obj.target);
         }
         else
         {
            this.life_now = this.life_now + this.life_max;
         }
      }
      this.life_length = this.life_now * this.lifeBar_length / this.life_max;
      this.life_mc._width = this.life_length;
      this.life_dec();
      this.redBlood();
   }
   function life_dec()
   {
      this.onEnterFrame = function()
      {
         if(_level0.inPause)
         {
            return undefined;
         }
         if(_level0.inFreeze)
         {
            return undefined;
         }
         this.life2_mc._width = this.life2_mc._width - 2;
         if(this.life2_mc._width <= this.life_mc._width)
         {
            this.life2_mc._width = this.life_mc._width;
            delete this.onEnterFrame;
         }
      };
   }
   function do_KO(role)
   {
      _level0.do_KO(role,role.opp);
      this.lifeBar_mc.lifeBg.gotoAndStop(1);
   }
   function redBlood()
   {
      if(_level0.checkPowerNoLimit(this.role))
      {
         if(this.life_mc._width < this.lifeBar_length / 4 && !this.role.redBlood)
         {
            this.lifeBar_mc.lifeBg.gotoAndPlay(2);
            this.role.redBlood = true;
         }
         else if(this.life_mc._width >= this.lifeBar_length / 4 && this.role.redBlood)
         {
            this.lifeBar_mc.lifeBg.gotoAndStop(1);
            this.role.redBlood = false;
         }
         return undefined;
      }
      if(this.role.redBlood)
      {
         return undefined;
      }
      if(this.role.life < this.role.life_max / 4)
      {
         this.lifeBar_mc.lifeBg.gotoAndPlay(2);
         this.role.redBlood = true;
      }
   }
   function init_power()
   {
      this.power_max = _level0.power_max;
      this.powerPoint_num = _level0.superPoint;
      this.powerBar_mc.point_mc.gotoAndStop(this.powerPoint_num + 1);
      this.powerPoint_max = _level0.powerPoint_max;
      if(this.powerPoint_num == this.powerPoint_max)
      {
         this.powerBar_mc.gotoAndStop("max");
      }
      this.power_now = 0;
      this.power_mc = this.powerBar_mc.bar;
      this.powerBar_length = this.power_mc._width;
      this.power_mc._width = this.power_now;
      this.burst_power = 0;
      this.burst_powerMax = 300;
      this.burst_len = this.burst_mc.burst_bar.mask._width;
   }
   function reset_power()
   {
      this.powerBar_mc.point_mc.gotoAndStop(this.powerPoint_num + 1);
      if(this.powerPoint_num == this.powerPoint_max)
      {
         this.powerBar_mc.gotoAndStop("max");
      }
      this.power_now = 0;
      this.burst_power = 0;
      this.burst_powerMax = 300;
   }
   function powerControl(Obj)
   {
      if(Obj.action == "dec")
      {
         if(_level0.checkPowerNoLimit(this.role))
         {
            return undefined;
         }
         if(this.powerPoint_num == 0)
         {
            return undefined;
         }
         this.powerPoint_num = this.powerPoint_num - 1;
         Obj.target.superPoint = this.powerPoint_num;
         this.point_dec();
         return undefined;
      }
      if(Obj.action == "burst")
      {
         trace("powerControl:burst");
         this.powerBurst();
         this.powerPoint_num = 0;
         Obj.target.superPoint = this.powerPoint_num;
         return undefined;
      }
      if(Obj.action == "burstdec")
      {
         this.burst_power = this.burst_power - Obj.decNum;
         return undefined;
      }
      if(this.powerPoint_num == this.powerPoint_max)
      {
         return undefined;
      }
      var _loc3_ = Obj.inc;
      if(this.inBurst)
      {
         _loc3_ = int(_loc3_ / 2);
      }
      this.power_now = this.power_now + _loc3_;
      if(this.power_now >= this.power_max)
      {
         this.powerPoint_num = this.powerPoint_num + 1;
         Obj.target.superPoint = this.powerPoint_num;
         this.point_add(Obj.target);
         if(this.powerPoint_num == this.powerPoint_max)
         {
            this.power_now = 0;
            this.powerBar_mc.gotoAndStop("max");
         }
         else
         {
            this.power_now = this.power_now - this.power_max;
         }
      }
      this.power_length = this.power_now / this.power_max * this.powerBar_length;
      this.power_mc._width = this.power_length;
   }
   function point_add()
   {
      this.powerBar_mc.point_mc.nextFrame();
   }
   function point_dec()
   {
      this.powerBar_mc.point_mc.prevFrame();
      this.powerBar_mc.gotoAndStop(1);
   }
   function powerBurst()
   {
      this.inBurst = true;
      this.burst_mc.gotoAndPlay(2);
      this.burst_mc.lv = this.powerPoint_num;
      this.burst_power = this.powerPoint_num * 100;
      this.powerLength();
      this.powerBar_mc.point_mc.gotoAndStop(1);
      this.powerBar_mc.gotoAndStop(1);
   }
   function startBurst()
   {
      if(this.role.burst_mode == "defend")
      {
         this.burst_mc.mode_cn.gotoAndStop("defend");
         this.burst_mc.mode_en.gotoAndStop("defend");
      }
      else if(this.role.burst_mode == "attack")
      {
         this.burst_mc.mode_cn.gotoAndStop("attack");
         this.burst_mc.mode_en.gotoAndStop("attack");
      }
      else
      {
         this.burst_mc.mode_cn.gotoAndStop("power");
         this.burst_mc.mode_en.gotoAndStop("power");
      }
      var owner = this;
      this.burst_mc.onEnterFrame = function()
      {
         if(_level0.inPause)
         {
            return undefined;
         }
         owner.burst_dec();
      };
   }
   function burst_dec()
   {
      this.burst_power = this.burst_power - 0.1;
      if(this.burst_power <= 0)
      {
         this.burst_power = 0;
         this.burst_end();
         delete this.burst_mc.onEnterFrame;
      }
      this.powerLength();
   }
   function burst_end()
   {
      if(!this.inBurst)
      {
         return undefined;
      }
      this.burst_mc.gotoAndPlay("end");
      this.role.burst_end();
      this.inBurst = false;
      if(_level0.checkPowerNoLimit(this.role))
      {
         this.powerPoint_num = 3;
         this.role.superPoint = this.powerPoint_num;
         this.reset_power();
      }
   }
   function showBurst_dec(num)
   {
      this.burst_mc.decNum_mc.play();
      this.burst_mc.decNum_mc.dec_num = num;
   }
   function powerLength()
   {
      var _loc2_ = this.burst_power / this.burst_powerMax * this.burst_len;
      this.burst_mc.burst_bar.mask._width = _loc2_;
      return _loc2_;
   }
}
