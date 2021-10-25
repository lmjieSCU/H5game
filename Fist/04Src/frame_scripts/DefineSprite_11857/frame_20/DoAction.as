var mc_list = _level0.mc_list;
var stageID = _level0.stageID;
var cpu_list = _level0.cpu_list;
if(cpu_list[stageID].indexOf("_") != -1)
{
   var cpuChar = cpu_list[stageID].split("_");
   var char = cpuChar[0];
   var cpuMode = Number(cpuChar[1]);
}
else
{
   var char = cpu_list[stageID];
   var i = Math.random();
   var cpuMode = i >= 0.5?2:1;
}
var mcName = mc_list[char];
trace("mcName:" + mcName + "   " + cpuChar + "  " + char);
if(_root.onLine && _root.getBytesLoaded() < _root.getBytesTotal())
{
   stop();
   this.onEnterFrame = function()
   {
      if(_parent.select_mc[mcName].active)
      {
         _parent.select_mc.p2.selectNext(mcName);
         if(cpuMode != 1)
         {
            _parent.select_mc.p2.showFace(char + cpuMode);
            _parent.select_mc.p2.selectMode = cpuMode;
         }
         else
         {
            _parent.select_mc.p2.showFace(char);
            _parent.select_mc.p2.selectMode = cpuMode;
         }
         _level0.ok_snd.start();
         delete this.onEnterFrame;
         play();
      }
   };
}
else
{
   _parent.select_mc.p2.selectNext(mcName);
   if(cpuMode != 1)
   {
      _parent.select_mc.p2.showFace(char + cpuMode);
      _parent.select_mc.p2.selectMode = cpuMode;
   }
   else
   {
      _parent.select_mc.p2.showFace(char);
      _parent.select_mc.p2.selectMode = cpuMode;
   }
   _level0.ok_snd.start();
}
