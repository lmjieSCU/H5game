if(_level0.inPause)
{
   gotoAndPlay(_currentframe - 1);
}
else if(num > 6)
{
   play();
}
else
{
   num++;
   gotoAndStop("hit");
   play();
}
