class ZoomControl extends MovieClip
{
   static var inZoom = false;
   function ZoomControl()
   {
      super();
      this.v_scale = 5;
   }
   function zoomIn(_loader, _mc, rate, v)
   {
      ZoomControl.inZoom = true;
      this.loader = _loader;
      this.mc = _mc;
      this.scaleTo = rate * 100;
      this.pos0_x = this.loader._x;
      this.pos0_y = this.loader._y;
      this.scale0 = this.loader._xscale;
      this.doZoom(this.scaleTo,v);
   }
   function zoomOut(loader)
   {
      this.doZoom(this.scale0);
   }
   function zoomBack(v_rate)
   {
      var _loc2_ = 100;
      if(this.loader._xscale == _loc2_)
      {
         return undefined;
      }
      this.loader._xscale = this.loader._yscale = _loc2_;
      this.loader._x = this.pos0_x;
      this.loader._y = this.pos0_y;
      delete this.onEnterFrame;
      ZoomControl.inZoom = false;
   }
   function doZoom(scaleTo, v_rate)
   {
      this.onEnterFrame = function()
      {
         var _loc2_ = (scaleTo - this.loader._xscale) * v_rate;
         this.loader._xscale = this.loader._xscale + _loc2_;
         this.loader._yscale = this.loader._yscale + _loc2_;
         var _loc4_ = this.mc._x - this.mc._x * (this.loader._xscale / 100);
         var _loc3_ = this.mc._y - this.mc._y * (this.loader._yscale / 100);
         this.loader._x = this.pos0_x + _loc4_;
         this.loader._y = this.pos0_y + _loc3_;
         trace(_loc2_ + "    " + this.loader._xscale + "   " + scaleTo);
         if(Math.abs(_loc2_) < 0.1)
         {
            this.loader._xscale = this.loader._yscale = scaleTo;
            delete this.onEnterFrame;
         }
      };
   }
}
