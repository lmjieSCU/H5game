class HitCounter extends MovieClip
{
   var hits = 0;
   function HitCounter()
   {
      super();
      this._y = 200;
      this.offsetX = 30;
      this._visible = false;
   }
   function showHits(obj)
   {
      var _loc2_ = obj.x;
      this.hits = this.hits + 1;
      if(this.hits > 1)
      {
         this.gotoAndStop(1);
         this.hits_mc.gotoAndPlay(1);
         this.hits_mc.num_mc.hits_txt.text = this.hits;
         this.hits_mc.num_mc.hits2_txt.text = this.hits;
         this._x = _loc2_;
         if(_loc2_ + this.offsetX > _level0.egde_max)
         {
            this._x = _level0.egde_max - this.offsetX;
         }
         else if(_loc2_ - this.offsetX < _level0.egde_min)
         {
            this._x = _level0.egde_min + this.offsetX;
         }
         this._visible = true;
      }
   }
   function showHits_end()
   {
      if(this.hits > 1)
      {
         this.gotoAndPlay("showHits");
      }
      this.hits = 0;
   }
   function clearHits()
   {
      this.gotoAndStop(1);
      this._visible = false;
   }
}
