stop();
var combo_num;
function ready()
{
   if(_currentframe > 1)
   {
      return undefined;
   }
   _root.P1_role.skill_record_ready();
   gotoAndStop("ready");
}
if(combo_num == undefeined)
{
   combo_num = 0;
}
num_txt.text = combo_num;
