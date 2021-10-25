function selectOK(data)
{
   charSelect_P1 = data.char_p1;
   mode_role_P1 = data.mode_p1;
   mode_key_P1 = data.mode2_p1;
   charSelect_P2 = data.char_p2;
   mode_role_P2 = data.mode_p2;
   mode_key_P2 = data.mode2_p2;
   if(P2_type == "cpu" && player_type == "1PVSCOM")
   {
      if(cpu_list[stageID].indexOf("_") != -1)
      {
         var _loc3_ = cpu_list[stageID].split("_");
         charSelect_P2 = _loc3_[0];
         mode_role_P2 = _loc3_[1];
      }
      else
      {
         charSelect_P2 = cpu_list[stageID];
         var _loc4_ = Math.random();
         mode_role_P2 = _loc4_ >= 0.5?2:1;
      }
   }
   _root.setting.data.mode_key_P1 = mode_key_P1;
   _root.setting.data.mode_key_P2 = mode_key_P2;
   if(!mode_role_P1)
   {
      mode_role_P1 = 1;
   }
   if(!mode_role_P2)
   {
      mode_role_P2 = 1;
   }
   trace("选择角色:" + [charSelect_P1,mode_role_P1]);
   if(!isLoadRole)
   {
      if(roleImportAll)
      {
         charSelect_mc.removeMovieClip();
         gotoAndStop("vs");
         play();
      }
      else
      {
         gotoAndStop("roleImport");
         play();
      }
   }
   else
   {
      charSelect_mc.removeMovieClip();
      gotoAndStop("vs");
      play();
   }
}
function getCpuMode(charName)
{
   var _loc1_ = 1;
   if(_level0.player_type == "1PVSCOM")
   {
      if(charName == "Orochi")
      {
         if(_level0.stageID == _level0.cpu_list.length - 2)
         {
            _loc1_ = 1;
         }
         else if(_level0.stageID == _level0.cpu_list.length - 1)
         {
            _loc1_ = 2;
         }
      }
      else if(charName == "Kyo" || charName == "Iori" || charName == "K")
      {
         if(Math.random() < 0.5)
         {
            _loc1_ = 1;
         }
         else
         {
            _loc1_ = 2;
         }
      }
   }
   trace("getCpuMode:" + charName + "   " + _loc1_);
   mode_role_P2 = _loc1_;
   return _loc1_;
}
stop();
_quality = quality1;
attachMovie("char_select_mc","charSelect_mc",depth_select);
trace("charSelect_mc:::::::" + charSelect_mc);
var roleLoaded = 0;
