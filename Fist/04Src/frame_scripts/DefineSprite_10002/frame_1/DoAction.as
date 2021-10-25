stop();
var winner;
if(_level0.winner == _level0.P1_role)
{
   winner = _level0.charSelect_P1;
   if(_level0.charSelect_P1 == "Iori" && _level0.mode_role_P1 == 3)
   {
      winner = "Iori3";
   }
}
else if(_level0.winner == _level0.P2_role)
{
   winner = _level0.charSelect_P2;
   if(_level0.charSelect_P2 == "Iori" && _level0.mode_role_P2 == 3)
   {
      winner = "Iori3";
   }
}
gotoAndStop(winner);
