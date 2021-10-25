stop();
if(_level0.player_type == "1PVSCOM")
{
   if(_level0.stageID == _level0.char_list.length - 1)
   {
   }
   if(_level0.winner == _level0.P1_role)
   {
      gotoAndStop("player");
   }
   else
   {
      gotoAndStop("com");
   }
}
else if(_level0.winner == _level0.P1_role)
{
   gotoAndStop("1P");
}
else
{
   gotoAndStop("2P");
}
