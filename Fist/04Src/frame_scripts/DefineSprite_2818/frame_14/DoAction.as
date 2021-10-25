var opp = _root.role_mc.opp;
this.onEnterFrame = function()
{
   if(_level0.inPause)
   {
      return undefined;
   }
   if(opp.status_1 == "getup1")
   {
      gotoAndStop("hit");
      play();
      delete this.onEnterFrame;
   }
};
