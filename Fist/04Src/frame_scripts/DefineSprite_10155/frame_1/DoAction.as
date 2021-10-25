function checkGetChar()
{
   var _loc3_ = _level0.charSelect_P1;
   var _loc2_ = _level0.charPassObj;
   var _loc1_ = _level0.charGetObj;
   trace("通关角色111:" + _level0.passCharArray);
   _loc2_[_loc3_ + _level0.mode_role_P1] = true;
   _level0.saveFunc("charPassObj",_loc2_);
   if(!_loc1_.Orochi)
   {
      _loc1_.Orochi = true;
      _level0.saveFunc("charGetObj",_loc1_);
      trace("出现大蛇:" + _loc1_.Orochi);
      gotoAndStop("Orochi");
      return "Orochi";
   }
   if(!_loc1_.Iori3 && _loc2_.Iori1 && _loc2_.Iori2)
   {
      _loc1_.Iori3 = true;
      _level0.saveFunc("charGetObj",_loc1_);
      trace("暴走八神:" + _loc1_.Orochi);
      gotoAndStop("Iori3");
      return "Iori3";
   }
   if(checkExist_pass(_loc3_) != true)
   {
      _level0.passCharArray.push(_loc3_);
      _level0.saveFunc("passCharArray",_level0.passCharArray);
      trace("通关角色222:" + _level0.passCharArray);
   }
   return false;
}
function checkExist_pass(char)
{
   for(var _loc3_ in _level0.passCharArray)
   {
      var _loc1_ = _level0.passCharArray[_loc3_];
      if(char == _loc1_)
      {
         return true;
      }
   }
}
function checkExist_hidden(char)
{
   for(var _loc3_ in _level0.hiddenCharArray)
   {
      var _loc1_ = _level0.hiddenCharArray[_loc3_];
      if(char == _loc1_)
      {
         return true;
      }
   }
}
stop();
return undefined;
