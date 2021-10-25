if(_level0.player_type == "1PVSCOM")
{
   gotoAndStop("option1");
   play();
}
else if(_level0.player_type == "trainning")
{
   gotoAndStop("option2");
   play();
}
else if(_level0.player_type == "1PVS2P")
{
   gotoAndStop("option_vs_human");
   play();
}
else
{
   gotoAndStop("option_vs");
   play();
}
