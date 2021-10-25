function init_time()
{
   if(_level0.playTime == -1)
   {
      gotoAndStop(2);
   }
   else
   {
      gotoAndStop(1);
      time_txt.text = _level0.playTime;
   }
}
function timeStart()
{
   clearInterval(time_timer);
   time_timer = setInterval(this,"time_dec",1000);
}
function time_dec()
{
   if(_level0.inPause)
   {
      return undefined;
   }
   if(_level0.inFreeze)
   {
      return undefined;
   }
   time_txt.text--;
   if(time_txt.text == 0)
   {
      _level0.timeOut();
      clearInterval(time_timer);
   }
}
function timeOut()
{
}
function timeStop()
{
   clearInterval(time_timer);
}
stop();
var time_timer;
init_time();
