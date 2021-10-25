stop();
var type;
this.onEnterFrame = function()
{
   if(_level0.timeOver)
   {
      if(_level0.P1_role.life == _level0.P2_role.life)
      {
         type = "draw";
         play();
      }
      else if(_level0.P1_role.status_2 == "land" && _level0.P1_role.status_3 == "normal" && (_level0.P2_role.status_2 == "land" && _level0.P2_role.status_3 == "normal"))
      {
         type = "win";
         play();
      }
      else if(_level0.P1_role.isKO || _level0.P2_role.isKO)
      {
         type = "win";
         play();
      }
   }
   else if(_level0.winner.status_2 == "land" && _level0.winner.status_3 == "normal")
   {
      type = "win";
      play();
   }
   else if(_level0.P1_role.isKO && _level0.P2_role.isKO)
   {
      type = "draw";
      play();
   }
   else if(_level0.winner.status_1 == "walk_f" || _level0.winner.status_1 == "dash_f")
   {
      type = "win";
      play();
   }
};
