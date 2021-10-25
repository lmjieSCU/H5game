function go()
{
   _level0.ok_snd.start();
   play();
}
if(_level0.player_type == "1PVSCOM" && _level0.stageID == _level0.char_list.length - 1)
{
   gotoAndStop("winAll");
   play();
}
