var opp = _root.role_mc.opp;
var role = _root.role_mc;
if((opp.status_3 == "hurt" || opp.status_3 == "") && role.onHit)
{
   hit = true;
   if(opp.hurtValue.hurtAway == "aaa")
   {
      return undefined;
   }
   opp.hurtValue.hurtAway = "aaa";
   opp.gotoAndStop("hurt2");
   opp.mc.gotoAndStop(2);
   opp.mc.in89b = true;
   this.onEnterFrame = function()
   {
      if(_level0.inPause)
      {
         return undefined;
      }
      if(opp.hurtValue.hurtAway != "aaa" || opp.mc.catched)
      {
         delete this.onEnterFrame;
         opp.status_5 = "89bEnd";
         gotoAndStop("end");
         play();
         return undefined;
      }
      opp.gotoAndStop("hurt2");
      opp.mc.gotoAndStop(2);
   };
}
