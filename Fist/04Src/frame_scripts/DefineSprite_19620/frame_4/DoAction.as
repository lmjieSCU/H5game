this.onEnterFrame = function()
{
   if(_level0.inPause)
   {
      return undefined;
   }
   var _loc3_ = _root.role_mc.opp.getObj();
   if(s_mc.obj_level > _loc3_.area.obj_level)
   {
      if(s_mc.hitTest(_loc3_.area))
      {
         _loc3_.area.hitBack();
         delete this.onEnterFrame;
         gotoAndStop("att");
         play();
      }
   }
};
