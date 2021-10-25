var owner = this;
hold_mc.holdFunc = function()
{
};
hold_mc.releaseFunc = function()
{
   if(owner._currentframe > 30)
   {
      owner.gotoAndPlay("attack");
   }
};
hold_mc.endFunc = function()
{
};
