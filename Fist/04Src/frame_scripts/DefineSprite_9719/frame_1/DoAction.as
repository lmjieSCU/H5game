function checkCloseAd()
{
   try
   {
      FWAd_AS2.showStartBtn();
   }
   catch(e)
   {
   }
}
var frameLoaded = false;
onEnterFrame = function()
{
   var _loc5_ = _root._framesloaded;
   var _loc4_ = 32;
   var _loc3_ = int(_root.getBytesLoaded() / _root.getBytesTotal() * 100);
   if(_loc3_ > 100)
   {
      _loc3_ = 100;
   }
   num_txt.text = _loc3_ + "%";
   if(_root.getBytesLoaded() == _root.getBytesTotal())
   {
      delete this.onEnterFrame;
   }
   if(_loc5_ >= _loc4_ && !frameLoaded)
   {
      frameLoaded = true;
      if(_root.getBytesLoaded() < _root.getBytesTotal())
      {
         checkCloseAd();
      }
   }
};
