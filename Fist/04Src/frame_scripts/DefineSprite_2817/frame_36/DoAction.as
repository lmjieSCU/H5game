if(!(_parent.opp.status_1 == "getup1" || _parent.opp.status_1 == "getup2"))
{
   if(_parent.onHit && _parent.opp.status_3 == "hurt")
   {
      gotoAndStop("hit");
      play();
   }
   else if(_parent.opp.status_3 != "hurt")
   {
   }
}