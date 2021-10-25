class Stage_shake extends MovieClip
{
   var inShake = false;
   function Stage_shake()
   {
      super();
      this.shake_v0 = 13;
      this.shake_v = this.shake_v0;
      this.dir_x = 1;
      this.dir_y = 1;
      this.seg = 0;
   }
   function shakeStart(s_t, s_rage)
   {
      if(this.inShake)
      {
         return undefined;
      }
      this.shake_times = s_t;
      if(s_rage != undefined)
      {
         this.shake_v = s_rage;
      }
      else
      {
         this.shake_v = this.shake_v0;
      }
      if(this.shake_times == null)
      {
         this.shake_times = 0;
      }
      if(this.shake_times == 0)
      {
         return undefined;
      }
      this.inShake = true;
      this.onEnterFrame = function()
      {
         if(_level0.inPause)
         {
            return undefined;
         }
         this.shake();
      };
      this.shake();
   }
   function shake()
   {
      this.seg = this.seg + 1;
      if(this.seg == 2)
      {
         _level0._y = this.shake_v;
         _level0.element_mc._y = _level0.element_mc._y - this.shake_v;
      }
      else if(this.seg == 4)
      {
         this.seg = 0;
         _level0._y = 0;
         _level0.element_mc._y = 0;
         this.shake_times = this.shake_times - 1;
         if(this.shake_times <= 0)
         {
            this.shake_v = this.shake_v - 3;
            if(this.shake_v <= 0)
            {
               this.shake_v = 0;
               this.inShake = false;
               delete this.onEnterFrame;
            }
         }
      }
   }
}
