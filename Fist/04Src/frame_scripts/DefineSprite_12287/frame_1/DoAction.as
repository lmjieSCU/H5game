function init(bgInf)
{
   stageArray = bgInf.场景.split(",");
   _level0.bgArray = stageArray.concat();
   var _loc5_ = 0;
   while(_loc5_ < _level0.char_list.length)
   {
      var _loc3_ = _level0.char_list[_loc5_];
      var _loc2_ = bgInf[_loc3_];
      trace("bgID::::" + _loc2_ + "  " + _loc3_);
      if(typeof _loc2_ == "string")
      {
         _level0.bgMapping[_loc3_] = _loc2_;
         var _loc1_ = 0;
         while(_loc1_ < stageArray.length)
         {
            if(stageArray[_loc1_] == _loc2_)
            {
               stageArray.splice(_loc1_,1);
               break;
            }
            _loc1_ = _loc1_ + 1;
         }
      }
      else
      {
         _level0.bgMapping[_loc3_] = getRandomBg();
      }
      _loc5_ = _loc5_ + 1;
   }
   for(var _loc5_ in _level0.bgMapping)
   {
      trace("场景映射:" + _loc5_ + "  " + _level0.bgMapping[_loc5_]);
   }
   trace("_level0.char_list:" + _level0.char_list);
}
function getDefault()
{
   bgInf = _root.bgMappingDefault;
   init(bgInf);
}
function getRandomBg()
{
   var _loc3_ = stageArray.length;
   var _loc2_ = int(Math.random() * _loc3_);
   var _loc1_ = stageArray[_loc2_];
   stageArray.splice(_loc2_,1);
   if(!_loc1_)
   {
      _loc1_ = _level0.bgArray[0];
   }
   return _loc1_;
}
var bgInf = new LoadVars();
var stageArray = new Array();
var bgMapping = new Object();
_level0.bgArray = [];
_level0.bgMapping = {};
bgInf.onLoad = function(success)
{
   if(success)
   {
      init(this);
   }
   else
   {
      trace("Error loading/parsing LoadVars.");
      getDefault();
   }
};
