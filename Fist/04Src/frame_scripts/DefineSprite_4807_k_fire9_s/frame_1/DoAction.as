stop();
var pos_obj = Func.lToG(this);
var pos_target = Func.lToG(_root.role_mc.opp);
var pos_target_x = pos_obj.x + 170 * _root.role_mc.dir;
area.moveAim_pos(80,pos_obj.x,pos_obj.y,pos_target_x,_level0.land_Y);
onLand = function()
{
   gotoAndStop("hit");
   play();
};
onHit = function()
{
   gotoAndStop("hit2");
   play();
};
