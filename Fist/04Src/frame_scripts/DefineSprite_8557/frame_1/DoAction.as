_visible = false;
if(_root.role_mc.isKO)
{
   return undefined;
}
var num = soundArray.length;
var id = int(Math.random() * num);
var soundName = soundArray[id];
if(soundName == "none")
{
   return undefined;
}
var sound_snd = new Sound(this);
sound_snd.attachSound(soundName);
sound_snd.start(startPos,loop);
this.onUnload = function()
{
   sound_snd.stop();
};
