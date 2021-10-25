var opp = _root.role_mc.opp;
var role = _root.role_mc;
if((opp.status_3 == "hurt" || opp.status_3 == "") && role.onHit)
{
   hit = true;
   opp.hurtValue.hurtAway = "aaa";
   opp.stop_hurtBack();
   opp.mc.in89b = true;
   opp.gotoAndStop("hurt2");
   opp.mc.gotoAndStop(2);
   this.onEnterFrame = function()
   {
      if(_level0.inPause)
      {
         return undefined;
      }
      if(opp.hurtValue.hurtAway != "aaa" || opp.mc.catched)
      {
         delete this.onEnterFrame;
         gotoAndStop("end");
         play();
         return undefined;
      }
      if(opp.life == 0)
      {
         delete this.onEnterFrame;
         gotoAndStop("hit2");
         play();
         return undefined;
      }
      opp.gotoAndStop("hurt2");
      opp.mc.gotoAndStop(2);
   };
}
