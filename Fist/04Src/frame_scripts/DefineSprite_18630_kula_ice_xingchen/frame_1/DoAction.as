stop();
_xscale = _yscale = int(Math.random() * 40) + 20;
var pos_obj = Func.lToG(this);
var pos_target = {x:pos_obj.x + 600 * _root.role_mc.dir,y:pos_obj.y - int(Math.random() * 200 - 100)};
area.moveAim_pos(60,pos_obj.x,pos_obj.y,pos_target.x,pos_target.y);
onLand = function()
{
   gotoAndStop("hit");
   play();
};
