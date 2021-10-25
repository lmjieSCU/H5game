continueHit = true;
this.onEnterFrame = function()
{
   if(_root.role_mc.onHit)
   {
      gotoAndStop("hit");
      play();
      delete this.onEnterFrame;
   }
};
