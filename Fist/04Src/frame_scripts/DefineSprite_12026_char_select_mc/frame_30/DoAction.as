function getData()
{
   char_p1 = select_mc.p1.selectRole;
   char_p2 = select_mc.p2.selectRole;
   mode_p1 = select_mc.p1.selectMode;
   mode_p2 = select_mc.p2.selectMode;
   trace("mode_p1::" + mode_p1);
   var _loc1_ = {char_p1:char_p1,char_p2:char_p2,mode_p1:mode_p1,mode_p2:mode_p2,mode2_p1:mode2_p1,mode2_p2:mode2_p2};
   return _loc1_;
}
face_p1.play();
face_p2.play();
up_mc.play();
down_mc.play();
var char_p1;
var char_p2;
var mode_p1;
var mode_p2;
var selectData = getData();
