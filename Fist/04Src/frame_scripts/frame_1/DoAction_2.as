function gotoWeb()
{
}
function gotoWeb_kof()
{
}
function gotoWeb_en()
{
}
function getLan()
{
   if(System.capabilities.language == "zh-CN")
   {
      lan = "cn";
   }
   else if(System.capabilities.language == "zh-TW")
   {
      lan = "cn2";
   }
   else
   {
      lan = "cn";
   }
}
function getAdPath()
{
   var _loc1_ = undefined;
   if(System.capabilities.language == "zh-CN")
   {
      _loc1_ = "http://gamecfg.flashwing.net";
   }
   else if(System.capabilities.language == "zh-TW")
   {
      _loc1_ = "http://gamecfg.flashwing.net";
   }
   else
   {
      _loc1_ = "http://gamecfg.flashwing.net";
   }
   return _loc1_;
}
play();
var adShowedNum = 0;
_root.reserved.swapDepths(-2);
_root.focusManager.swapDepths(-1);
return undefined;
