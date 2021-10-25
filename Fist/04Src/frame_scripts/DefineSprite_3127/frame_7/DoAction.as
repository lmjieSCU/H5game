if(_level0.inPause)
{
   gotoAndPlay(_currentframe - 1);
}
else if(num > 10)
{
   _root.role_mc.mc.continueHit = false;
   play();
}
else
{
   num++;
   gotoAndStop("hit");
   play();
}
