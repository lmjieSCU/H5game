stop();
var pos_target = Func.lToG(_root.role_mc.opp);
_X = _root.role_mc._x;
var pos_obj = Func.lToG(this);
area.moveAim_pos(60,pos_obj.x,pos_obj.y,pos_target.x,pos_target.y - 50);
onHit = function()
{
   icebody.stop();
};
onLand = function()
{
   gotoAndStop("hit");
   play();
};
