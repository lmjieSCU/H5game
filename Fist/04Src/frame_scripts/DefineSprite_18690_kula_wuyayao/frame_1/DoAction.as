this.onEnterFrame = function()
{
   if(_level0.inPause)
   {
      return undefined;
   }
   if(_root.role_mc.status_3 == "hurt")
   {
      this.removeMovieClip();
   }
};
