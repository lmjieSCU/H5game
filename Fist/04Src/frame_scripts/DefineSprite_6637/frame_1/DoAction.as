stop();
this._visible = 0;
role = _root.role_mc;
if(role.do_hitTest(this))
{
   if(flag.indexOf("frame_") != -1)
   {
      _parent.gotoAndPlay(flag);
   }
   else
   {
      role.switchSkill(flag);
   }
}
