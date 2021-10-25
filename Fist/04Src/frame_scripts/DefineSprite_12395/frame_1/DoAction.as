stop();
btn_help._visible = false;
function loadOKFunc()
{
   note_mc._visible = false;
   btn_help._visible = true;
}
function hideAd()
{
   note_mc._visible = true;
   ad_mc._visible = false;
}
if(_level0.get_playedTimes() > 1 && _root.ifShowMenuAd)
{
   nextFrame();
}
