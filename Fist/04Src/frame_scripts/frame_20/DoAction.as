stopAllSounds();
firstPlay = false;
var slowSound_mc = createEmptyMovieClip("slowSound_mc",depth_slowSound);
trace("====载入场景====");
if(!isLoadStage)
{
   if(player_type == "1PVSCOM")
   {
      bgID = bgMapping[charSelect_P2];
   }
   stage_mc = attachMovie("stage_" + bgID,"stage_mc",depth_stage);
   trace("stage_mc000：" + stage_mc + "   " + bgID + "   " + (charSelect_P2 + "_" + mode_role_P2));
}
else
{
   stop();
   if(player_type == "1PVSCOM")
   {
      bgID = bgMapping[charSelect_P2];
   }
   stage_mc = createEmptyMovieClip("stage_mc",depth_stage);
   var stage_loader = new MovieClipLoader();
   var loadListener1 = new Object();
   loadListener1.onLoadInit = function(target_mc)
   {
      play();
   };
   stage_loader.addListener(loadListener1);
   stage_loader.loadClip("stage/" + bgID + ".swf",stage_mc);
   trace("stage_mc1111：" + stage_mc + "   " + bgID);
}
if(!isLoadMusic)
{
   if(stageID >= cpu_list.length - 2)
   {
      bgm_mc = attachMovie("bgm_boss","bgm_mc",101);
   }
   else
   {
      bgm_mc = attachMovie("bgm","bgm_mc",101);
   }
}
else
{
   bgmControl_mc.loadSound(charSelect_P2);
}
