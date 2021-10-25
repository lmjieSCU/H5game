var opp = _root.role_mc.opp;
this.onEnterFrame = function()
{
   if(opp.status_5 == "89bEnd" && opp.mc.in89b != true)
   {
      delete this.onEnterFrame;
      gotoAndStop("end");
      play();
   }
};
