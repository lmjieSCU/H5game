var mcName2 = mc_list[_level0.charSelect_P2];
var mc2 = select_mc[mcName2];
select_mc.p2._x = mc2._x;
select_mc.p2._y = mc2._y;
select_mc.p2.gotoAndStop(2);
if(!_level0.mode_role_P2)
{
   _level0.mode_role_P2 = 1;
}
if(_level0.mode_role_P2 == 1)
{
   face_p2.head_loader.mc.gotoAndStop(_level0.charSelect_P2);
   face_p2.play();
}
else
{
   face_p2.head_loader.mc.gotoAndStop(_level0.charSelect_P2 + "2");
   face_p2.play();
}
name_mc2.gotoAndStop(_level0.charSelect_P2);
_level0.ok_snd.start();
