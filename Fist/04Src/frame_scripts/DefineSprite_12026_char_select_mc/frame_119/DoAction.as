var mcName1 = mc_list[_level0.charSelect_P1];
var mc1 = select_mc[mcName1];
select_mc.p1._x = mc1._x;
select_mc.p1._y = mc1._y;
select_mc.p1.gotoAndStop(2);
if(_level0.mode_role_P1 == 1)
{
   faceMc1.gotoAndStop(_level0.charSelect_P1);
}
else
{
   faceMc1.gotoAndStop(_level0.charSelect_P1 + _level0.mode_role_P1);
}
face_p2.gotoAndStop(1);
name_mc1.gotoAndStop(_level0.charSelect_P1);
