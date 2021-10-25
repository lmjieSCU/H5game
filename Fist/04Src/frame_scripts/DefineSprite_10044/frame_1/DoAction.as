stop();
function getAvg(array)
{
   var _loc2_ = 0;
   for(var _loc3_ in array)
   {
      if(!array[_loc3_])
      {
         array[_loc3_] = 0;
      }
      _loc2_ = _loc2_ + array[_loc3_];
   }
   var _loc4_ = _loc2_ / array.length;
   return _loc4_;
}
if(_level0.lan == "en")
{
   nextFrame();
}
else if(_level0.lan == "cn2")
{
   gotoAndStop(3);
}
if(_level0.player_type != "1PVSCOM")
{
   this._visible = false;
}
var lifeArray = _level0.life_rate_array_battle;
var timeArray = _level0.time_lifeBar_array_battle;
var hitsArray = _level0.hits_array;
var lifeRate = int(getAvg(lifeArray) * 10000) / 100;
var timeRate = int(getAvg(timeArray) / 60 * 10000) / 100;
var hits = int(hitsArray[hitsArray.length - 1] * 100) / 100;
var winRate = int(_level0.roundNum_win / _level0.roundNum_played * 10000) / 100;
lifeRate_txt.text = lifeRate + "%";
timeRate_txt.text = timeRate + "%";
hits_txt.text = hits;
var score = (lifeRate * 100 + timeRate * 70 + hits * 50) * (_level0.level / 5);
score = int(score);
_level0.score = _level0.score + score;
score_stage_txt.text = score;
score_txt.text = _level0.score;
