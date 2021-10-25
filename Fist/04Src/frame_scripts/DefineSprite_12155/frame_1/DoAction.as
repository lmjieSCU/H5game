function init()
{
   var _loc2_ = 0;
   while(true)
   {
      var _loc1_ = soundInf["stage" + _loc2_];
      if(_loc1_ == undefined)
      {
         break;
      }
      trace(_loc1_);
      soundArray[_loc2_] = _loc1_;
      _loc2_ = _loc2_ + 1;
   }
}
function loadSound(char)
{
   var _loc2_ = soundInf[char];
   if(_loc2_ == undefined)
   {
      for(var _loc3_ in soundArray)
      {
         if(soundArray[_loc3_] != undefined)
         {
            _loc2_ = soundArray[_loc3_];
            break;
         }
      }
   }
   stageSound.onLoad = function(success)
   {
      trace("stageSound loaded");
      if(success != true)
      {
         this.loadSound("sound/Kyo.MP3",false);
      }
   };
   stageSound.loadSound("sound/" + _loc2_,false);
}
function playSound()
{
   stageSound.start(0,1000);
}
var soundInf = new LoadVars();
var soundArray = new Array();
var stageSound = new Sound();
soundInf.onLoad = function(success)
{
   if(success)
   {
      _level0.out("soundInf:" + soundInf);
   }
   else
   {
      trace("Error loading/parsing LoadVars.");
   }
};
