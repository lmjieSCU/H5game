stop();
var type;
var selectOK = false;
var menu_now;
var menu_all = 7;
function gotoMenu(dir)
{
   if(dir == "up")
   {
      menu_now--;
   }
   else if(dir == "down")
   {
      menu_now++;
   }
   if(menu_now < 1)
   {
      menu_now = menu_all;
   }
   else if(menu_now > menu_all)
   {
      menu_now = 1;
   }
   showIcon(menu_now);
   _level0.select_snd.start();
}
function select()
{
   if(selectOK)
   {
      return undefined;
   }
   _level0.ok_snd.start();
   selectOK = true;
   if(menu_now == 1)
   {
      _level0.player_type = "1PVSCOM";
      _level0.P1_type = "player";
      _level0.P2_type = "cpu";
      type = "";
      play();
   }
   else if(menu_now == 2)
   {
      _level0.player_type = "1PVS2P";
      _level0.P1_type = "player";
      _level0.P2_type = "player";
      type = "";
      play();
   }
   else if(menu_now == 3)
   {
      _level0.player_type = "COMVSCOM";
      _level0.P1_type = "cpu";
      _level0.P2_type = "cpu";
      type = "";
      play();
   }
   else if(menu_now == 4)
   {
      _level0.player_type = "trainning";
      _level0.P1_type = "player";
      _level0.P2_type = "player";
      _level0.lifeBar_num = -1;
      _level0.playTime = -1;
      type = "";
      play();
   }
   else if(menu_now == 5)
   {
      type = "intro";
      play();
   }
   else if(menu_now == 6)
   {
      type = "key";
      play();
   }
   else if(menu_now == 7)
   {
      type = "credits";
      play();
   }
}
function showIcon(id)
{
   var _loc1_ = 1;
   while(_loc1_ < 8)
   {
      mc["option" + _loc1_ + "_mc"].gotoAndStop(1);
      _loc1_ = _loc1_ + 1;
   }
   mc["option" + id + "_mc"].gotoAndStop(2);
}
if(menu_now == undefined)
{
   menu_now = 1;
}
showIcon(menu_now);
