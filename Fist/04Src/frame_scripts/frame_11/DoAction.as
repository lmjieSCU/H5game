media_mc._visible = false;
_root.setMask(mask_mc);
_quality = quality1;
var isNoEnemyMode = false;
var player_type;
var P1_type;
var P2_type;
var mode_role_P1 = 1;
var mode_role_P2 = 1;
var mode_key_P1 = "normal";
var mode_key_P2 = "normal";
var mode_power_P1 = "";
var mode_power_P2 = "";
var charSelect_P1 = "";
var charSelect_P2 = "";
var inFullScreen;
var charID_P1;
var charID_P2;
var bgID = 0;
var attacker;
var hurter;
var winner;
var inFreeze = false;
var inPause = false;
var stage_with = 660;
var stage_height = 460;
var stage_c = int(stage_with / 2);
var center_x = int(stage_with / 2);
var center_y = int(stage_height / 2);
var egde_max = stage_with - 40;
var egde_min = 40;
var land_Y = 425;
var g = 5;
var KO = false;
var roundMax = 2;
var roundNum = 1;
var stageID = 0;
var lifeBar_num = 2;
var life_max = 300;
var superPoint = 3;
var power_max = 100;
var powerPoint_max = 3;
var level = 2;
var playTime = 60;
var timeOver = false;
var playedTimes;
var passTimes = 0;
var passCharArray = new Array();
var hiddenCharArray0 = new Array("Kyo","Iori","K","Kula","Orochi");
var hiddenCharArray = new Array();
hiddenCharArray = [];
var charGetObj = {};
var charPassObj = {};
var power_skillSuper = 60;
var power_skillBurst = 90;
var power_holdCounter = 30;
var power_holdRoll = 30;
var comboIndex;
var comboRecord_array = new Array();
var comboRecord_current;
var setting = SharedObject.getLocal(game,"/");
function setKey()
{
   u = key_P1[0].u;
   d = key_P1[0].d;
   f = key_P1[0].f;
   b = key_P1[0].b;
   p = key_P1[0].p;
   u2 = key_P2[0].u;
   d2 = key_P2[0].d;
   f2 = key_P2[0].f;
   b2 = key_P2[0].b;
   p2 = key_P2[0].p;
}
function resetData()
{
   inFreeze = false;
   inPause = false;
   KO = false;
   roundNum = 1;
   stageID = 0;
   timeOver = false;
}
function restScoreData()
{
   score = 0;
   roundNum_played = 0;
   roundNum_win = 0;
   time_lifeBar_array = [];
   life_rate_array = [];
   hits_array = [];
   life_rate_array_battle = [];
   time_lifeBar_array_battle = [];
}
function setSound(obj)
{
   if(soundOn == false)
   {
      soundControl.setVolume(volume);
      soundOn = true;
      obj.gotoAndStop(1);
   }
   else if(soundOn)
   {
      soundControl.setVolume(0);
      soundOn = false;
      obj.gotoAndStop(2);
   }
}
function musicStart()
{
   bgMusic_snd.stop();
   bgMusic_snd.start(0,100);
   bgMusic_snd.onSoundComplete = function()
   {
   };
}
function soundStart(obj)
{
   if(soundOn)
   {
      var sound;
      var fromMC;
      fromMC = obj.fromMC;
      if(fromMC instanceof MovieClip)
      {
         sound = new Sound();
         sound.attachSound(obj.sound);
         trace("obj.sound: " + obj.sound);
         sound.start(obj.startPos,obj.loop);
         trace("obj.loop: " + obj.loop + "  " + sound.getPosition());
         trace("obj.startPos: " + obj.startPos);
         trace("sound111: " + sound);
         fromMC.onUnload = function()
         {
            trace("fromMC.onUnload: " + fromMC.onUnload);
            sound.stop();
         };
      }
      else
      {
         sound = this[obj.sound];
         sound.start(obj.startPos,obj.loop);
         trace("sound222: " + sound);
      }
   }
}
function fullScreen()
{
   if(inFullScreen)
   {
      getUrl("FSCommand:exec", "changedisplay2.exe");
      getURL("FSCommand:fullscreen",false);
      inFullScreen = false;
      return undefined;
   }
   inFullScreen = true;
   getUrl("FSCommand:exec", "changedisplay1.exe");
   getURL("FSCommand:fullscreen",true);
}
function exitFullScreen()
{
   getUrl("FSCommand:exec", "changedisplay2.exe");
   getURL("FSCommand:fullscreen",false);
}
function game_setQuality(num)
{
   game_quality = num;
   menu_quality.mc_1.gotoAndStop(1);
   menu_quality.mc_2.gotoAndStop(1);
   menu_quality.mc_3.gotoAndStop(1);
   menu_quality["mc_" + game_quality].gotoAndStop(2);
   if(num == 1)
   {
      _quality = "LOW";
   }
   else if(num == 2)
   {
      _quality = "MEDIUM";
   }
   else
   {
      _quality = "HIGH";
   }
}
function game_getQuality(obj)
{
   if(_quality == "LOW")
   {
      game_quality = 1;
   }
   else if(_quality == "MEDIUM")
   {
      game_quality = 2;
   }
   else
   {
      game_quality = 3;
   }
   obj.mc1.gotoAndStop(1);
   obj.mc2.gotoAndStop(1);
   obj.mc3.gotoAndStop(1);
   obj["mc_" + game_quality].gotoAndStop(2);
   menu_quality = obj;
}
function transIn()
{
   trans = attachMovie("trans","trans",_level0.depth_trans);
   return trans;
}
function transOut()
{
   trans.gotoAndPlay("out");
}
function saveFunc(name, value)
{
   setting.data[name] = value;
   setting.flush();
   _level0.out("saveFunc:" + name + "   " + value + "   " + setting.data[name]);
}
function saveOption(lv, tm, lf, pw, _bgID)
{
   level = lv;
   playTime = tm;
   lifeBar_num = lf;
   superPoint = pw;
   setting.data.level = lv;
   setting.data.playTime = tm;
   setting.data.lifeBar_num = lf;
   setting.data.superPoint = pw;
   setting.data.passTimes = passTimes;
   setting.data.passCharArray = passCharArray;
   setting.data.hiddenCharArray = hiddenCharArray;
   setting.flush();
}
function saveKey()
{
   setting.data.key_P1 = key_P1;
   setting.data.key_P2 = key_P2;
}
function saveCombo()
{
   setting.data["comboRecord_array_" + charSelect_P1] = comboRecord_array;
}
function loadOption()
{
   if(setting.data.level == undefined)
   {
      return undefined;
   }
   level = setting.data.level;
   playTime = setting.data.playTime;
   lifeBar_num = setting.data.lifeBar_num;
   superPoint = setting.data.superPoint;
   if(!isNaN(setting.data.passTimes))
   {
      passTimes = setting.data.passTimes;
   }
   if(setting.data.passCharArray)
   {
      passCharArray = setting.data.passCharArray;
   }
   if(setting.data.hiddenCharArray)
   {
      hiddenCharArray = setting.data.hiddenCharArray;
   }
   if(setting.data.charGetObj)
   {
      charGetObj = setting.data.charGetObj;
   }
   if(setting.data.charPassObj)
   {
      charPassObj = setting.data.charPassObj;
   }
   _level0.out("setting.data.charGetObj:" + setting.data.charGetObj);
   _level0.out("setting.data.charPassObj:" + setting.data.charPassObj);
}
function get_playedTimes()
{
   if(!setting.data.playedTimes)
   {
      setting.data.playedTimes = 1;
      playedTimes = 1;
   }
   else
   {
      setting.data.playedTimes = setting.data.playedTimes + 1;
      playedTimes = setting.data.playedTimes;
   }
   return playedTimes;
}
function loadDefault()
{
   level = 2;
   playTime = 60;
   lifeBar_num = 1;
   superPoint = 1;
   passTimes = 0;
   passCharArray = [];
   hiddenCharArray = [];
   charGetObj = {};
   charPassObj = {};
}
function loadKey()
{
   if(setting.data.key_P1 == undefined)
   {
      return undefined;
   }
   key_P1 = setting.data.key_P1;
   key_P2 = setting.data.key_P2;
   if(key_P1_proto.f == 0)
   {
      key_P1_proto.f = 68;
   }
   setKey();
}
function loadCombo()
{
   trace("ssssssssssssss::" + setting.data["comboIndex_" + charSelect_P1]);
   if(setting.data["comboRecord_array_" + charSelect_P1] != undefined)
   {
      comboRecord_array = setting.data["comboRecord_array_" + charSelect_P1];
   }
}
function combo_new(combo)
{
   comboRecord_current = combo;
}
function getCPUList()
{
   var _loc4_ = new Array();
   var _loc3_ = 0;
   while(_loc3_ < cpuNormal_list.length)
   {
      var _loc7_ = Math.random();
      _loc4_.push({char:cpuNormal_list[_loc3_],order:_loc7_});
      _loc3_ = _loc3_ + 1;
   }
   _loc4_.sortOn("order",Array.NUMERIC);
   var _loc5_ = new Array();
   var _loc2_ = 0;
   while(_loc2_ < _loc4_.length)
   {
      _loc5_.push(_loc4_[_loc2_].char);
      _loc2_ = _loc2_ + 1;
   }
   trace("cpu_list: " + _loc5_);
   if(!_loc5_)
   {
      _loc5_ = [];
   }
   if(onLine && _root.getBytesLoaded() < _root.getBytesTotal())
   {
      _loc5_ = cpuNormal_list.concat(cpuBoss_list);
   }
   else
   {
      _loc5_ = _loc5_.concat(cpuBoss_list);
   }
   trace("cpu_list: " + _loc5_);
   return _loc5_;
}
function role_init()
{
   _level0.out("初始化角色1111:" + P2_mc + "   " + P2_mc.role_mc + "   " + charSelect_P2 + "  " + mode_role_P2);
   if(isNoEnemyMode)
   {
      superPoint = 3;
   }
   P1_mc.addPlayer(P1_type,mode_role_P1);
   P2_mc.addPlayer(P2_type,mode_role_P2);
   P1_role = P1_mc.role_mc;
   P2_role = P2_mc.role_mc;
   P1_role.init(key_P1,mode_key_P1);
   P2_role.init(key_P2,mode_key_P2);
   P1_role.roleName = charSelect_P1;
   P2_role.roleName = charSelect_P2;
   var _loc1_ = life_max * lifeBar_num;
   P1_role.stageVar(_loc1_,superPoint,powerPoint_max,P2_role,mode_P1);
   P2_role.stageVar(_loc1_,superPoint,powerPoint_max,P1_role,mode_P2);
   var _loc3_ = 150;
   var _loc2_ = 510;
   P1_role.stageInf(stage_with,egde_max,egde_min,_loc3_,land_Y,char);
   P2_role.stageInf(stage_with,egde_max,egde_min,_loc2_,land_Y,char);
   power_init();
   loadCombo();
   _level0.out("初始化角色2222:" + P2_role + "   " + P2_role._x);
}
function demo_init()
{
   P1_mc.addPlayer("demo");
   P2_mc.addPlayer("demo");
   P1_role = P1_mc.role_mc;
   P2_role = P2_mc.role_mc;
   var _loc1_ = life_max * lifeBar_num;
   P1_role.stageVar(_loc1_,superPoint,powerPoint_max,P2_role,mode_P1);
   P2_role.stageVar(_loc1_,superPoint,powerPoint_max,P1_role,mode_P2);
   P1_role.stageInf(stage_with,egde_max,egde_min,-100,370,char);
   P2_role.stageInf(stage_with,egde_max,egde_min,760,370,char);
   effect_mc = char_mc.attachMovie("effect","effect_mc",depth_effect);
}
function power_init()
{
   LP_P1 = life_power_mc.LP_P1;
   LP_P2 = life_power_mc.LP_P2;
   LP_P1.role = P1_role;
   LP_P2.role = P2_role;
   winTimes_P1 = life_power_mc.winTimes_P1;
   winTimes_P2 = life_power_mc.winTimes_P2;
   LP_P1.lifeBar_mc.face_mc.gotoAndStop(charSelect_P1);
   LP_P2.lifeBar_mc.face_mc.gotoAndStop(charSelect_P2);
   LP_P1.name_mc.gotoAndStop(charSelect_P1);
   LP_P2.name_mc.gotoAndStop(charSelect_P2);
}
function lifeControl(obj)
{
   if(obj.target == P1_role)
   {
      life_power_mc.LP_P1.lifeControl(obj);
   }
   else if(obj.target == P2_role)
   {
      life_power_mc.LP_P2.lifeControl(obj);
   }
}
function powerControl(obj)
{
   if(obj.target == P1_role)
   {
      life_power_mc.LP_P1.powerControl(obj);
   }
   else if(obj.target == P2_role)
   {
      life_power_mc.LP_P2.powerControl(obj);
   }
}
function showHits(obj)
{
   if(obj.target == P1_role)
   {
      hitCounter1.showHits(obj);
   }
   else if(obj.target == P2_role)
   {
      hitCounter2.showHits(obj);
   }
}
function showHits_end(obj)
{
   if(obj.target == P1_role)
   {
      hitCounter2.showHits_end();
   }
   else if(obj.target == P2_role)
   {
      hitCounter1.showHits_end();
   }
}
function burst_end(src)
{
   if(src == P1_role)
   {
      life_power_mc.LP_P1.burst_end();
   }
   else if(src == P2_role)
   {
      life_power_mc.LP_P1.burst_end();
   }
}
function showMsg(type, x)
{
   var _loc1_ = element_mc.attachMovie("showMsg","showMsg",element_mc.getNextHighestDepth());
   _loc1_._x = x;
   _loc1_._y = 200;
   _loc1_.gotoAndPlay(type);
}
function nextRound()
{
   if(player_type == "1PVSCOM")
   {
      roundNum_played++;
      life_rate = P1_role.life / P1_role.life_max;
      life_rate_array_battle.push(life_rate);
      life_rate_array.push(life_rate);
      if(P1_role.winTimes == roundMax)
      {
         var _loc2_ = 0;
         var _loc1_ = P1_role.hitsArray;
         for(var _loc3_ in _loc1_)
         {
            _loc2_ = _loc2_ + _loc1_[_loc3_];
         }
         var _loc4_ = _loc2_ / _loc1_.length;
         _loc4_ = int(_loc4_ * 100) / 100;
         hits_array.push(_loc4_);
         P1_role.hitsArray = [];
         if(life_rate_array_battle.length == 2)
         {
            life_rate_array_battle.push(1);
            life_rate_array.push(1);
         }
      }
      if(winner == P1_role)
      {
         roundNum_win++;
         var _loc6_ = (P2_role.life_max - P2_role.life) / life_max;
         var _loc5_ = (time_roundEnd - time_roundStart) / _loc6_ / 1000;
         time_lifeBar = int((60 - _loc5_) * 100) / 100;
         if(time_lifeBar < 0)
         {
            time_lifeBar = 0;
         }
         time_lifeBar_array.push(time_lifeBar);
         time_lifeBar_array_battle.push(time_lifeBar);
      }
      else
      {
         life_rate = 0;
         life_rate_array.push(life_rate);
      }
   }
   KO = false;
   timeOver = false;
   transOut();
   if(P1_role.winTimes == roundMax || P2_role.winTimes == roundMax)
   {
      roundNum = 1;
      win();
      return undefined;
   }
   role_reset();
   LP_P1.reset();
   LP_P2.reset();
   roundNum++;
   timer_start();
   life_power_mc.time_mc.init_time();
   stage_mc.bg_mc.startControl();
}
function timer_start()
{
   var _loc1_ = element_mc.attachMovie("battle_start","battle_start",_level0.depth_control);
}
function timer_end()
{
   var _loc1_ = element_mc.attachMovie("battle_end","battle_end",_level0.depth_control);
   life_power_mc.time_mc.timeStop();
}
function trainning_start()
{
   P1_role.gotoAndStop("stand");
   P2_role.gotoAndStop("stand");
   _level0.role_control();
}
function role_start()
{
   P1_role.start();
   P2_role.start();
}
function role_reset()
{
   P1_role.reset();
   P2_role.reset();
}
function role_control()
{
   P1_role.start_control();
   P2_role.start_control();
   if(layTime != -1)
   {
      life_power_mc.time_mc.timeStart();
   }
   time_roundStart = getTimer();
}
function showWinner()
{
   var _loc1_ = element_mc.attachMovie("winner","winner",_level0.depth_ko);
   P1_role.control = false;
   P2_role.control = false;
   LP_P1.burst_end();
   LP_P2.burst_end();
}
function showWintimes()
{
   life_power_mc.winTimes_P1.gotoAndStop(P1_role.winTimes + 1);
   life_power_mc.winTimes_P2.gotoAndStop(P2_role.winTimes + 1);
}
function showStart_txt()
{
   element_mc.attachMovie("start_mc","start_mc",_level0.depth_ko,{_x:330,_y:170});
}
function win()
{
   stopAllSounds();
   menu_bottom_mc.removeMovieClip();
   if(player_type == "1PVSCOM" && winner == P2_role)
   {
      element_mc.attachMovie("UI_gameOver","winResult",_level0.depth_ko);
   }
   else if(_level0.player_type == "1PVSCOM" && _level0.stageID == _level0.cpu_list.length - 1)
   {
      _quality = quality1;
      element_mc.attachMovie("winAll","winResult",_level0.depth_ko);
      passTimes = Number(passTimes) + 1;
      setting.data.passTimes = passTimes;
      setting.flush();
   }
   else
   {
      _quality = quality1;
      element_mc.attachMovie("winResult","winResult",_level0.depth_ko);
   }
}
function timeOut()
{
   if(KO)
   {
      return undefined;
   }
   KO = true;
   timeOver = true;
   element_mc.attachMovie("timeOut","timeOut_mc",_level0.depth_ko,{_x:330,_y:150});
   P1_role.do_end();
   P2_role.do_end();
   timer_end();
   time_roundEnd = getTimer();
   if(P1_role.life == P2_role.life)
   {
      winner = null;
      return undefined;
   }
   if(P1_role.life > P2_role.life)
   {
      winner = P1_role;
   }
   else if(P1_role.life < P2_role.life)
   {
      winner = P2_role;
   }
   winner.winTimes = winner.winTimes + 1;
}
function do_KO(_loser, _winner)
{
   if(KO)
   {
      return undefined;
   }
   KO = true;
   winner = _winner;
   winner.winTimes = winner.winTimes + 1;
   _loser.do_KO();
   P1_role.do_end();
   P2_role.do_end();
   timer_end();
   time_roundEnd = getTimer();
}
function do_win()
{
   winner.do_win();
   showWinner();
   var _loc1_ = winner.opp;
   if(timeOver)
   {
      if(_loc1_.status_1 != "getup1" && _loc1_.status_1 != "getup2")
      {
         _loc1_.isOK = true;
      }
      else if(_loc1_.life == 0)
      {
         _loc1_.isOK = true;
      }
      _loc1_.do_lose();
   }
}
function do_draw()
{
   var _loc1_ = element_mc.attachMovie("draw","draw",_level0.depth_ko);
   P1_role.control = false;
   P2_role.control = false;
   P1_role.showHits_end();
   P2_role.showHits_end();
   LP_P1.burst_end();
   LP_P2.burst_end();
   if(P1_role.life == P2_role.life && P2_role.life > 0)
   {
      P1_role.do_lose();
      P2_role.do_lose();
   }
}
function nextBattle()
{
   stage_mc.removeMovieClip();
   life_power_mc.removeMovieClip();
   char_mc.removeMovieClip();
   element_mc.removeMovieClip();
   ad_ship.removeMovieClip();
   _level0.bgm1_snd.start(0,1000);
   if(player_type == "1PVSCOM")
   {
      if(stageID == cpu_list.length - 1)
      {
         stageID = 0;
      }
      else
      {
         stageID++;
      }
      if(cpu_list[stageID].indexOf("_") > -1)
      {
         var _loc1_ = cpu_list[stageID].split("_");
         charSelect_P2 = _loc1_[0];
         mode_role_P2 = _loc1_[1];
      }
      else
      {
         charSelect_P2 = cpu_list[stageID];
         var _loc2_ = Math.random();
         mode_role_P2 = _loc2_ <= 0.5?2:1;
      }
      life_rate_array_battle = [];
      time_lifeBar_array_battle = [];
      gotoAndStop("charSelect");
   }
   else
   {
      gotoAndStop("menu");
      play();
   }
}
function playAgain()
{
   nextBattle();
}
function levelUp()
{
   level++;
   if(level > 5)
   {
      level = 5;
   }
   setting.data.level = level;
}
function gameOver(selection)
{
   stage_mc.removeMovieClip();
   life_power_mc.removeMovieClip();
   char_mc.removeMovieClip();
   element_mc.removeMovieClip();
   ad_ship.removeMovieClip();
   _level0.bgm1_snd.start(0,1000);
   life_rate_array_battle = [];
   time_lifeBar_array_battle = [];
   if(selection == "continue")
   {
      gotoAndStop("vs");
   }
   else
   {
      gotoAndPlay(11);
   }
}
function exitTo(type)
{
   var func = function()
   {
      _level0.transOut();
      stopAllSounds();
      char_mc.removeMovieClip();
      stage_mc.removeMovieClip();
      life_power_mc.removeMovieClip();
      element_mc.removeMovieClip();
      bgEff_mc.removeMovieClip();
      bgEff2_mc.removeMovieClip();
      fgEff_mc.removeMovieClip();
      ad_ship.removeMovieClip();
      delete this.onEnterFrame;
      resetData();
      restScoreData();
      _root._x = 0;
      _root._y = 0;
      _level0.bgm1_snd.start(0,1000);
      if(type == "charSelect")
      {
         gotoAndStop("charSelect");
      }
      else if(type == "menu")
      {
         gotoAndStop(type,10);
      }
      else if(type == "charToMenu")
      {
         charSelect_mc.removeMovieClip();
         gotoAndStop("menu");
      }
      else
      {
         gotoAndPlay(11);
      }
   };
   _level0.transIn();
   trans.onTransIn = function()
   {
      func();
   };
}
function exit()
{
   stopAllSounds();
   char_mc.removeMovieClip();
   stage_mc.removeMovieClip();
   life_power_mc.removeMovieClip();
   element_mc.removeMovieClip();
   bgEff_mc.removeMovieClip();
   bgEff2_mc.removeMovieClip();
   fgEff_mc.removeMovieClip();
   ad_ship.removeMovieClip();
   delete this.onEnterFrame;
   _root._x = 0;
   _root._y = 0;
   _level0.bgm1_snd.start(0,1000);
   gotoAndPlay(11);
}
function getTime()
{
   return life_power_mc.time_mc.time_txt.text;
}
function game_pause()
{
   var _loc3_ = _level0.P1_role.mc;
   var _loc2_ = _level0.P2_role.mc;
   if(inPause != true)
   {
      if(inFreeze)
      {
         return undefined;
      }
      if(!_level0.P1_role.control)
      {
         return undefined;
      }
      if(pauseMC.onEnterFrame != null)
      {
         return undefined;
      }
      _quality = quality1;
      pauseFrame_p1 = _loc3_._currentframe;
      pauseFrame_p2 = _loc2_._currentframe;
      status_p1 = P1_role.status_1;
      status_p2 = P2_role.status_1;
      effect_mc.getFireFrame();
      var owner = this;
      var f = 0;
      pauseMC.onEnterFrame = function()
      {
         if(_level0.P1_role.inFreeze)
         {
            return undefined;
         }
         if(_level0.P2_role.inFreeze)
         {
            return undefined;
         }
         f++;
         if(f == 2)
         {
            owner.startPause();
            this.onEnterFrame = null;
         }
      };
   }
   else if(inPause)
   {
      inPause = false;
      _quality = quality2;
      stopPause();
   }
}
function startPause()
{
   var _loc2_ = _level0.P1_role.mc;
   var _loc1_ = _level0.P2_role.mc;
   inPause = true;
   if(_loc2_._currentframe != pauseFrame_p1)
   {
      rolePause_p1 = true;
   }
   if(_loc1_._currentframe != pauseFrame_p2)
   {
      rolePause_p2 = true;
   }
   effect_mc.checkFireFrame();
   _loc2_.stop();
   _loc1_.stop();
   effect_mc.fire_stop();
}
function stopPause()
{
   var _loc2_ = _level0.P1_role.mc;
   var _loc1_ = _level0.P2_role.mc;
   if(rolePause_p1 || status_p1 != P1_role.status_1)
   {
      _loc2_.play();
      rolePause_p1 = false;
   }
   if(rolePause_p2 || status_p2 != P2_role.status_1)
   {
      _loc1_.play();
      rolePause_p2 = false;
   }
   effect_mc.fire_continue();
}
function charToCenter()
{
   var _loc2_ = undefined;
   var _loc1_ = int((P2_role._x + P1_role._x) / 2);
   char_mc._x = stage_c - _loc1_;
}
function checkNoEnemyMode(role)
{
   if(isNoEnemyMode && player_type == "1PVSCOM" && role == P1_role)
   {
      return true;
   }
   return false;
}
function checkPowerNoLimit(role)
{
   if(player_type == "trainning")
   {
      return true;
   }
   if(isNoEnemyMode)
   {
      if(player_type == "1PVSCOM")
      {
         return true;
      }
      if(player_type == "1PVS2P")
      {
         return true;
      }
      if(player_type == "COMVSCOM")
      {
         return true;
      }
   }
   return false;
}
function fullScreen()
{
   if(!inFullScreen)
   {
      inFullScreen = true;
      var _loc2_ = attachMovie("hint_fullScreen","hint_fullscreen_mc",this.getNextHighestDepth());
      _loc2_._x = 330;
      _loc2_._y = 240;
      fscommand("togglefullscreen");
   }
   else
   {
      inFullScreen = false;
      fscommand("togglefullscreen");
   }
}
if(!setting.data.helpShowed)
{
   setting.data.helpShowed = new Object();
}
var depth_select = 2;
var depth_stage = 3;
var depth_adShip = 4;
var depth_bgEff1 = 5;
var depth_fgEff = 26;
var depth_fgEff2 = 27;
var depth_char = 10;
var depth_life = 20;
var depth_hitCounter = 30;
var depth_ko = 100;
var depth_trans = 200;
var depth_control = 300;
var depth_shake = 350;
var depth_menu = 400;
var depth_other = 150;
var depth_soundMC = 1050;
var depth_musicMC = 1060;
var depth_slowSound = 1070;
var depth_pauseMC = 1080;
var depth_P1 = 20;
var depth_P2 = 10;
var depth_effect = 30;
var depth_effect_bg = 5;
var depth_effect_fg = 25;
var life_rate;
var time_roundStart;
var time_roundEnd;
var time_lifeBar;
var roundNum_played = 0;
var roundNum_win = 0;
var time_lifeBar_array = new Array();
var life_rate_array = new Array();
var hits_array = new Array();
var life_rate_array_battle = new Array();
var time_lifeBar_array_battle = new Array();
var scoreObj = new Object();
var score = 0;
var url_cheat = "http://kof.flashwing.net/cheat_kof1_5.htm";
var char_list = new Array("Kyo","Ryu","Iori","Terry","K","Kula","Moriya","Mai","Chunli","Haohmaru","Orochi","Orochi","Igniz");
var name_list = new Array("Kyo","Ryu","Iori","Terry","K’","Kula","Moriya","Mai","Chunli","Haohmaru","Orochi","Orochi","Igniz");
var name_list_cn = new Array("草薙京","隆","八神庵","特瑞","K’","库拉","御名方守矢","不知火舞","春丽","霸王丸","大蛇","大蛇","伊格尼斯");
var cpuNormal_list = new Array("Kyo","Terry","Chunli","Mai","Ryu","Iori","K","Kula","Moriya","Haohmaru");
var cpuBoss_list = new Array("Iori_3","Orochi_1","Orochi_2","Igniz_1");
var mc_list = {Kyo:"a",Iori:"b",Ryu:"c",K:"f",Moriya:"d",Kula:"e",Orochi:"g",Mai:"a3",Chunli:"a2",Terry:"h",Igniz:"i",Haohmaru:"l"};
var cpu_list = new Array();
cpu_list = getCPUList();
var bgMapping = new Object();
var bgMappingDefault = new LoadVars();
bgMappingDefault.场景 = "chunjie,greatwall,roofFW,nest,bridge,ice,kof12,gg";
bgMappingDefault.Kyo = "kof12";
bgMappingDefault.Iori = "nest";
bgMappingDefault.Ryu = "bridge";
bgMappingDefault.K = "roofFW";
bgMappingDefault.Kula = "ice";
bgMappingDefault.Moriya = "bridge";
bgMappingDefault.Orochi = "gg";
bgMappingDefault.Mai = "greatwall";
bgMappingDefault.Chunli = "chunjie";
bgMappingDefault.Terry = "kof12";
bgMappingDefault.Igniz = "gg";
var mustDefendSkill = new Object();
mustDefendSkill.Iori = ["sk_s_89b_s"];
mustDefendSkill.Kula = ["sk_s_xingchen"];
mustDefendSkill.Orochi = ["sk_dfp"];
mustDefendSkill.Orochi = ["sk_dfp2"];
var key_P1_proto = {u:87,d:83,b:65,f:68,p:74,k:75,p_l:85,k_l:73,s:79,s2:76};
var key_P2_proto = {u:38,d:40,b:37,f:39,p:97,k:98,p_l:100,k_l:101,s:102,s2:99};
var key_P1 = new Array(key_P1_proto);
var key_P2 = new Array(key_P2_proto);
var u;
var d;
var f;
var b;
var p;
var u2;
var d2;
var f2;
var b2;
var p2;
var key_sound = 113;
var key_fullScreen = 114;
var key_esc = 115;
var soundOn = true;
var musicOn = true;
var volume = 50;
var sound_mc = _root.createEmptyMovieClip("sound_mc",depth_soundMC);
var music_mc = _root.createEmptyMovieClip("music_mc",depth_musicMC);
var allSound_snd = new Sound(sound_mc);
allSound_snd.setVolume(volume);
var select_snd = new Sound(sound_mc);
select_snd.attachSound("select");
var ok_snd = new Sound(sound_mc);
ok_snd.attachSound("ok");
var p_snd = new Sound(sound_mc);
p_snd.attachSound("punch");
var pl_snd = new Sound(sound_mc);
pl_snd.attachSound("punch_l");
var kl_snd = new Sound(sound_mc);
pl_snd.attachSound("punch_l");
var k_snd = new Sound(sound_mc);
k_snd.attachSound("kick");
var run_snd = new Sound(sound_mc);
run_snd.attachSound("run_snd");
var jump_snd = new Sound(sound_mc);
jump_snd.attachSound("kick");
var fire1_snd = new Sound(sound_mc);
fire1_snd.attachSound("fire1.wav");
var fire2_snd = new Sound(sound_mc);
fire2_snd.attachSound("fire2.wav");
var boom_snd = new Sound(sound_mc);
boom_snd.attachSound("boom.wav");
var soundControl = new Sound();
soundControl.setVolume(volume);
var game_quality;
var menu_quality;
var trans;
var pauseFrame_p1;
var pauseFrame_p2;
var rolePause_p1;
var rolePause_p2;
var status_p1;
var status_p2;
var pauseMC = createEmptyMovieClip("pauseMC",depth_pauseMC);
HitCheck;
HitCheck_obj;
role_corn.Role;
