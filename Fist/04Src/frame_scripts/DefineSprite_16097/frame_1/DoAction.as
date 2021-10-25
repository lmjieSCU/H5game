function start()
{
   num = 0;
}
_visible = false;
var num = 0;
this.onUnload = function()
{
   if(num < numMax)
   {
      _root.role_mc.opp.colorNormal();
   }
};
