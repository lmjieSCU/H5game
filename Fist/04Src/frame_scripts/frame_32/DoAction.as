function checkImport()
{
   if(_currentframe >= _framesloaded)
   {
      charSelect_mc.removeMovieClip();
      gotoAndStop("vs");
      play();
   }
   trace("_root.roleLoaded222:" + _root.roleLoaded);
}
var roleImport = 1;
checkImport();
