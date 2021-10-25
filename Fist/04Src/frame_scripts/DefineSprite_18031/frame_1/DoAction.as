stop();
this._visible = false;
role = _parent._parent;
trace("role::::::::::::" + role);
role.addShadow(shadow_name,this,start_alpha,end_alpha,d_alpha,_rb,_gb,_bb);
if(add_interval > 0)
{
   var i = 0;
   onEnterFrame = function()
   {
      if(role.inFreeze)
      {
         return undefined;
      }
      i++;
      if(i == add_interval)
      {
         i = 0;
         role.addShadow(shadow_name,this,start_alpha,end_alpha,d_alpha,_rb,_gb,_bb);
      }
   };
}
