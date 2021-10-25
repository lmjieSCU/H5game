if(type == "draw")
{
   return undefined;
}
if(_level0.winner.mc._currentframe < _level0.winner.mc._totalframes)
{
   stop();
   this.onEnterFrame = function()
   {
      if(_level0.winner.mc._currentframe == _level0.winner.mc._totalframes)
      {
         play();
         delete this.onEnterFrame;
      }
   };
}
