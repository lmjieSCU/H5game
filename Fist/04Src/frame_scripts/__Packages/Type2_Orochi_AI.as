class Type2_Orochi_AI extends Type2_Orochi_role
{
   var attack_s0 = 30;
   var combo_risk = 50;
   var combo_1 = new Object();
   var combo_land = new Object();
   var combo_auto = new Object();
   var combo_burst = new Object();
   var delay_frames = new Object();
   var delay_frames2 = new Object();
   var combo_oppOnEgde = new Object();
   var action_1 = new Object();
   function Type2_Orochi_AI()
   {
      super();
      this.toSkill_temp = this.toSkill;
      this.toStatus_temp = this.toStatus;
      this.toSkill = this.noAct;
      this.dis_array = new Array();
      this.skill_dis = new Array();
   }
   function getDis()
   {
      this.dis = Math.abs(this._x - this.opp._x);
      if(isNaN(this.dis))
      {
         this.dis = 155;
      }
      return this.dis;
   }
   function initStrage()
   {
      this.initPlus();
      var _loc2_ = undefined;
      if(this.opp.winTimes >= this.winTimes && this.opp.winTimes > 0)
      {
         this.actionType = "attack";
         this.cpu_control2 = this.cpu_attack;
      }
      else if(this.opp.winTimes < this.winTimes)
      {
         _loc2_ = Math.random();
         if(_loc2_ < 0.4)
         {
            this.actionType = "wander";
            this.cpu_control2 = this.cpu_wander;
         }
         else if(_loc2_ < 0.8)
         {
            this.actionType = "defend";
            this.cpu_control2 = this.cpu_defend;
         }
         else
         {
            this.actionType = "normal";
            this.cpu_control2 = this.cpu_normal;
         }
      }
      else
      {
         _loc2_ = Math.random();
         if(_loc2_ < 0)
         {
            this.actionType = "wander";
            this.cpu_control2 = this.cpu_wander;
         }
         else if(_loc2_ < 0.33)
         {
            this.actionType = "defend";
            this.cpu_control2 = this.cpu_defend;
         }
         else if(_loc2_ < 0.66)
         {
            this.actionType = "attack";
            this.cpu_control2 = this.cpu_attack;
         }
         else
         {
            this.actionType = "normal";
            this.cpu_control2 = this.cpu_normal;
         }
      }
   }
   function initPlus()
   {
      this.combo_rate = this.combo_rate0;
      this.attack_rate = this.attack_rate0;
      this.hold_rate = this.hold_rate0;
      this.attack_s = this.attack_s0;
      this.wait_frame = this.wait_frame0;
   }
   function cpu_control()
   {
      if(this.checkDefend())
      {
         return true;
      }
      if(this.checkAction())
      {
         return true;
      }
      this.cpu_control2();
   }
   function cpu_normal()
   {
      this.initPlus();
      if(this.checkAttack())
      {
         return true;
      }
      this.checkWait();
   }
   function cpu_defend()
   {
      this.initPlus();
      this.hold_rate = this.hold_rate * 1.3;
      var _loc2_ = this.action_select("action_1","defend");
      this.toSkill(_loc2_);
   }
   function cpu_attack()
   {
      this.initPlus();
      this.attack_rate = this.attack_rate * 1.3;
      if(this.checkAttack())
      {
         return true;
      }
      this.checkWait();
   }
   function cpu_wander()
   {
      this.initPlus();
      var _loc2_ = this.action_select("action_1","wander");
      this.toSkill(_loc2_);
   }
   function checkStrage()
   {
      if(_level0.player_type == "trainning")
      {
         var _loc3_ = Math.random();
         if(_loc3_ < 0.33)
         {
            this.actionType = "defend";
            this.cpu_control2 = this.cpu_defend;
         }
         else if(_loc3_ < 0.66)
         {
            this.actionType = "attack";
            this.cpu_control2 = this.cpu_attack;
         }
         else if(_level0.level > 4)
         {
            this.actionType = "attack";
            this.cpu_control2 = this.cpu_attack;
         }
         else
         {
            this.actionType = "wander";
            this.cpu_control2 = this.cpu_wander;
         }
         return undefined;
      }
      var _loc2_ = _level0.life_power_mc.time_mc.time_txt.text;
      if(_loc2_ > 0 && _loc2_ < 15 && this.life < this.opp.life)
      {
         this.actionType = "attack";
         this.cpu_control2 = this.cpu_attack;
      }
      else if(_loc2_ > 0 && _loc2_ < 15 && this.life > this.opp.life)
      {
         this.actionType = "defend";
         this.cpu_control2 = this.cpu_defend;
      }
      else if(this.life < this.life_max / 4)
      {
         this.actionType = "defend";
         this.cpu_control2 = this.cpu_defend;
      }
      else if(this.opp.life / this.life > 1.3)
      {
         this.actionType = "attack";
         this.cpu_control2 = this.cpu_attack;
      }
      else if(this.life / this.opp.life > 1.3)
      {
         this.actionType = "wander";
         this.cpu_control2 = this.cpu_wander;
      }
      else if(this.actionType != "normal")
      {
         this.initStrage();
      }
   }
   function checkAction()
   {
      var _loc3_ = undefined;
      if(this.combo_check2())
      {
         return true;
      }
      if(this.getDis() > 300 && !_level0.KO)
      {
         if(this.checkBurst())
         {
            return true;
         }
      }
      else
      {
         if(this.opp.status_3 == "down" && !_level0.KO)
         {
            if(this.checkBurst())
            {
               return true;
            }
            _loc3_ = this.action_select("action_1","down");
            this.toSkill(_loc3_);
            return true;
         }
         if(this.opp.dir == this.dir)
         {
            if(this.checkAttack())
            {
               return true;
            }
         }
         else if(this.opp.status_1 == "roll_f" && this.getDis() < 200)
         {
            var _loc2_ = this.action_select("action_1","oppRoll");
            if(_loc2_ != undefined)
            {
               this.toSkill(_loc2_);
               return true;
            }
         }
         else
         {
            if(this.onEgde)
            {
               _loc2_ = this.action_select("action_1","onEgde");
               this.toSkill(_loc2_);
               return true;
            }
            if(this.opp.status_1 == "hold_u" && int(Math.random() * 100) < this.attack_s)
            {
               _loc2_ = this.action_select("action_1","pos_down");
               if(_loc2_ != undefined)
               {
                  this.toSkill(_loc2_);
                  return true;
               }
            }
            else if(this.opp.status_1 == "hold_d" && int(Math.random() * 100) < this.attack_s)
            {
               _loc2_ = this.action_select("action_1","pos_up");
               if(_loc2_ != undefined)
               {
                  this.toSkill(_loc2_);
                  return true;
               }
            }
         }
      }
   }
   function checkDefend()
   {
      var _loc2_ = int(Math.random() * 100);
      if(_loc2_ >= this.hold_rate)
      {
         return false;
      }
      if(this.status_2 != "land")
      {
         return false;
      }
      if(this.status_3 != "normal")
      {
         return false;
      }
      if(this.status_4 != "normal")
      {
         return false;
      }
      if(this.isNeedDefend())
      {
         this.defend_start();
         return true;
      }
      return false;
   }
   function isNeedDefend()
   {
      if(this.dir == this.opp.dir && (this.opp._x - this._x) * this.dir > 0)
      {
         return false;
      }
      if(this.opp.hit_over())
      {
         if(this.opp.hasObj())
         {
            return true;
         }
         return false;
      }
      return true;
   }
   function checkAttack()
   {
      var _loc2_ = int(Math.random() * 100);
      if(_loc2_ >= this.attack_rate)
      {
         return false;
      }
      this.attack_start();
      return true;
   }
   function checkWait()
   {
      if(this.wait_frame == 0)
      {
         this.attack_start();
         return undefined;
      }
      var wait_f = int(Math.random() * this.wait_frame) + 5;
      var owner = this;
      this.onEnterFrame = function()
      {
         if(_level0.inPause)
         {
            return undefined;
         }
         if(owner.inFreeze)
         {
            return undefined;
         }
         wait_f--;
         if(wait_f < 0)
         {
            delete this.onEnterFrame;
            owner.attack_start();
            _level0.out("checkWait: 结束");
         }
      };
   }
   function checkBurst()
   {
      if(this.inBurst)
      {
         return undefined;
      }
      var _loc3_ = int(Math.random() * 100);
      if(this.redBlood)
      {
         _loc3_ = 0;
      }
      if(_loc3_ > this.attack_s)
      {
         return false;
      }
      var _loc2_ = undefined;
      this.checkStrage();
      if(this.actionType == "defend")
      {
         _loc2_ = "defend";
      }
      else if(this.actionType == "attack")
      {
         _loc2_ = "attack";
      }
      else
      {
         _loc2_ = "power";
      }
      if(_level0.level > 4 && _loc2_ == "defend")
      {
         _loc2_ = "attack";
      }
      if(this.burst(_loc2_))
      {
         return true;
      }
   }
   function skill_select()
   {
      this.skill_list = [];
      this.getDis();
      if(this.opp.isHitEnd() && this.skill2_dis.length > 0)
      {
         var _loc3_ = 2;
         var _loc2_ = 0;
         while(_loc2_ < this.dis_num)
         {
            if(this.dis < this.dis_array[_loc2_])
            {
               if(this.opp.freeze_frame() < _loc3_)
               {
                  break;
               }
               if(this.skill2_dis[_loc2_])
               {
                  this.skill_list = this.skill2_dis[_loc2_];
                  break;
               }
               _loc3_ = _loc3_ + 3;
            }
            _loc2_ = _loc2_ + 1;
         }
      }
      if(this.skill_list.length == 0)
      {
         _loc2_ = 0;
         while(_loc2_ < this.dis_num)
         {
            if(this.dis < this.dis_array[_loc2_])
            {
               this.skill_list = this.skill_dis[_loc2_];
               break;
            }
            _loc2_ = _loc2_ + 1;
         }
      }
      var _loc4_ = this.skill_list.length;
      var _loc5_ = int(Math.random() * _loc4_);
      var _loc6_ = this.skill_list[_loc5_];
      return _loc6_;
   }
   function action_select(object, member)
   {
      var _loc4_ = undefined;
      var _loc7_ = undefined;
      var _loc3_ = this[object][member];
      var _loc6_ = this.delay_frames[member];
      var _loc5_ = _loc3_.length;
      this.getDis();
      var _loc2_ = 0;
      while(_loc2_ < _loc5_)
      {
         if(this.dis < _loc6_[_loc2_])
         {
            _loc4_ = _loc3_[_loc2_];
            break;
         }
         _loc2_ = _loc2_ + 1;
      }
      var _loc9_ = _loc4_.length;
      var _loc8_ = int(Math.random() * _loc9_);
      _loc7_ = _loc4_[_loc8_];
      return _loc7_;
   }
   function super_select()
   {
      var _loc4_ = int(Math.random() * 100);
      if(_loc4_ >= this.attack_s)
      {
         return false;
      }
      if(this.opp.freeze_frame() < 4)
      {
         return false;
      }
      var _loc3_ = this.action_select("action_1","super");
      var _loc2_ = this.superCheck(_loc3_);
      if(_loc2_ == false)
      {
         return false;
      }
      if(_loc2_ == "notSpuerSkill")
      {
         return false;
      }
      return _loc3_;
   }
   function busrt_select()
   {
      if(this.inBurst != true)
      {
         return false;
      }
      var _loc3_ = int(Math.random() * 100);
      if(_loc3_ >= this.attack_s)
      {
         return false;
      }
      if(this.opp.freeze_frame() < 4)
      {
         return false;
      }
      var _loc2_ = this.action_select("action_1","busrt");
      if(_loc2_ == undefined)
      {
         return false;
      }
      return _loc2_;
   }
   function attack_start()
   {
      if(this.opp.superSkill || this.opp.isBurstSkill)
      {
         if(this.isNeedDefend() && Math.random() * 100 < this.hold_rate)
         {
            this.defend_start();
            return false;
         }
      }
      var _loc2_ = undefined;
      var _loc3_ = Math.random();
      if(_loc3_ < 0.3)
      {
         _loc2_ = this.super_select();
         if(_loc2_ == false)
         {
            _loc2_ = this.busrt_select();
         }
      }
      else
      {
         _loc2_ = this.busrt_select();
         if(_loc2_ == false)
         {
            _loc2_ = this.super_select();
         }
      }
      if(_loc2_ == false)
      {
         _loc2_ = this.skill_select();
      }
      this.toSkill(_loc2_);
      this.opp.checkDefend();
      if(this.burst_mode != "attack")
      {
         if(this.inBurst)
         {
            this.inCount = false;
         }
      }
      if(_loc2_ == undefined)
      {
         trace("错误!技能未定义");
         this.stand();
      }
   }
   function defend_start()
   {
      var _loc2_ = undefined;
      this.getDis();
      var _loc3_ = int(Math.random() * 100);
      if(this.status_1 == "walk_b")
      {
         _loc2_ = "hold_u";
      }
      else if(this.checkMustDefendSkill(this.opp.status_1))
      {
         _loc2_ = "hold_u";
      }
      else if(this.opp.superSkill || this.opp.isBurstSkill)
      {
         _loc2_ = "hold_u";
      }
      else if(this.status_1 == "walk_f" || this.status_1 == "dash_f")
      {
         _loc2_ = this.action_select("action_1","defend_f");
      }
      else if(this.opp.status_1.indexOf("squat") > -1 && _loc3_ < this.hold_rate && this.dis < 250)
      {
         _loc2_ = "hold_d";
      }
      else if(this.opp.status_2 == "air" && _loc3_ < this.attack_s && this.dis < 200 && this.opp._y + 70 < this.land_Y)
      {
         _loc2_ = this.skillObj.toAir;
      }
      else if(_loc3_ < this.attack_s)
      {
         _loc2_ = this.action_select("action_1","defendAttack");
      }
      else
      {
         _loc2_ = this.action_select("action_1","defend_h");
      }
      if(_loc2_ == undefined)
      {
         _loc2_ = "hold_u";
      }
      this.toSkill(_loc2_);
   }
   function checkMustDefendSkill(oppSkill)
   {
      var _loc2_ = _level0.mustDefendSkill[this.opp.roleName];
      for(var _loc3_ in _loc2_)
      {
         if(oppSkill == _loc2_[_loc3_])
         {
            return true;
         }
      }
      return false;
   }
   function actionDefend(action)
   {
      if(this.status_2 != "land")
      {
         return undefined;
      }
      if(this.status_3 != "normal")
      {
         return undefined;
      }
      if(this.status_4 != "normal")
      {
         return undefined;
      }
      var _loc4_ = int(Math.random() * 100);
      if(_loc4_ > this.attack_s)
      {
         return false;
      }
      if(action == "roll_f")
      {
         var _loc2_ = this.action_select("action_1","oppRoll");
         if(_loc2_ == undefined)
         {
            return false;
         }
         this.toSkill(_loc2_);
      }
      else if(action == "jump" || action == "jump_f")
      {
         _loc2_ = this.action_select("action_1","oppJump");
         if(_loc2_ == undefined)
         {
            return false;
         }
         this.toSkill(_loc2_);
      }
   }
   function combo_wait(status_1)
   {
      var role_mc = this;
      var _loc2_ = this.mc;
      var start_frame = this.comboClass.combo2[status_1];
      if(start_frame == undefined)
      {
         return undefined;
      }
      _loc2_.onEnterFrame = function()
      {
         if(_level0.inPause)
         {
            return undefined;
         }
         if(role_mc.inFreeze)
         {
            return undefined;
         }
         if(this._currentframe >= start_frame)
         {
            delete this.onEnterFrame;
            role_mc.combo_check();
         }
      };
   }
   function combo_check()
   {
      if(this.combo_auto[this.skill_now] != undefined)
      {
         this.combo_select("combo_auto");
         this.combo_start();
         return true;
      }
      var _loc2_ = int(Math.random() * 100);
      if(this.onHit != true)
      {
         return false;
      }
      if(this.opp.status_3 != "hurt" && _loc2_ > this.combo_risk)
      {
         return false;
      }
      if(this.combo_oppOnEgde[this.skill_now] && this.opp.onEgde != true)
      {
         return false;
      }
      if(_loc2_ < this.combo_rate)
      {
         this.combo_select("combo_1");
         this.combo_start();
         return true;
      }
   }
   function combo_check2()
   {
      var _loc2_ = int(Math.random() * 100);
      if(this.opp.status_3 != "hurt")
      {
         return false;
      }
      if(_loc2_ >= this.combo_rate)
      {
         return false;
      }
      this.combo_select("combo_land");
      if(this.superCheck(this.skill_next) == false)
      {
         return false;
      }
      if(this.skill_next != undefined)
      {
         this.combo_start();
         return true;
      }
   }
   function combo_select(combo)
   {
      var _loc2_ = undefined;
      if(this.inBurst && this.burst_mode == "attack")
      {
         _loc2_ = this.combo_burst[this.skill_now];
      }
      if(_loc2_ == undefined)
      {
         _loc2_ = this[combo][this.skill_now];
      }
      var _loc4_ = _loc2_.length;
      var _loc3_ = int(Math.random() * _loc4_);
      this.skill_next = _loc2_[_loc3_];
      if(this.inBurst && this.burst_mode == "attack")
      {
         this.delay = this.delay_frames[this.skill_now][_loc3_];
      }
      else
      {
         this.delay = this.delay_frames[this.skill_now][_loc3_];
      }
      if(this.delay == undefined)
      {
         this.delay = 0;
      }
   }
   function combo_start()
   {
      if(this.skill_next == undefined)
      {
         return undefined;
      }
      if(this.delay == 0)
      {
         this.toSkill(this.skill_next,true);
      }
      else
      {
         this.combo_delay();
      }
   }
   function combo_delay()
   {
      this.onEnterFrame = function()
      {
         if(_level0.inPause)
         {
            return undefined;
         }
         if(this.inFreeze)
         {
            return undefined;
         }
         this.delay = this.delay - 1;
         if(this.delay <= 0)
         {
            delete this.onEnterFrame;
            this.toSkill(this.skill_next,true);
         }
      };
   }
   function start_control()
   {
      this.control = true;
      this.initStrage();
      this.toSkill = this.toSkill_temp;
      this.toStatus = this.toStatus_temp;
      this.toStatus_switch("stand");
   }
   function toStatus_switch(action)
   {
      if(this.status_3 == "hurt")
      {
         return undefined;
      }
      this.statusClear();
      this.checkSide();
      this.showHits_end();
      if(this.delaySkill != "")
      {
         this.toSkill(this.delaySkill);
         this.delaySkill = "";
         return undefined;
      }
      this.toStatus(action);
   }
   function toSkill(action, cancle)
   {
      if(_level0.inPause)
      {
         return undefined;
      }
      if(this.opp.isKO)
      {
         return undefined;
      }
      if(_level0.inFreeze)
      {
         this.skill_delay(action);
         return undefined;
      }
      if(action == undefined)
      {
         this.attack_start();
         return undefined;
      }
      var _loc3_ = this.superCheck(action);
      if(_loc3_ == false)
      {
         this.attack_start();
         return false;
      }
      if(_loc3_ == true)
      {
         if(this.burst_mode == "power")
         {
            var _loc4_ = this.skillSuperCheck(action);
            if(_loc4_ != "")
            {
               this.powerDecType = "super";
               action = _loc4_;
            }
         }
      }
      if(this.burstCheck(action) == false)
      {
         this.attack_start();
         return undefined;
      }
      this.skill_now = action;
      if(this[action] != undefined)
      {
         if(this.toStatus(action))
         {
            this.powerDec();
            this.powerDec2();
         }
         else
         {
            this.powerDecType = "";
            this.powerDecType2 = "";
         }
      }
      else if(this.status_2 == "land" && (this.status_3 == "normal" || this.status_3 == "attack"))
      {
         if(this.toStatus(action))
         {
            this.status_3 = "attack";
            this.powerDec();
            this.powerDec2();
         }
         else
         {
            this.powerDecType = "";
            this.powerDecType2 = "";
         }
      }
      else
      {
         return undefined;
      }
      if(this.comboClass.combo2[this.status_1] != undefined)
      {
         this.combo_wait(action);
      }
      return true;
   }
   function move_walkRun()
   {
      clearInterval(this.delayTimer);
      var Vx = this.Vx;
      var S = 0;
      var owner = this;
      this.combo_select("combo_1");
      delete this.onEnterFrame;
      this.mc.onEnterFrame = function()
      {
         if(_level0.inPause)
         {
            return undefined;
         }
         if(owner.inFreeze)
         {
            return undefined;
         }
         owner.do_move(Vx);
         if(owner.getDis() < owner.delay)
         {
            delete this.onEnterFrame;
            if(_level0.level == 5)
            {
               if(owner.checkDefend())
               {
                  return undefined;
               }
               owner.toSkill(owner.skill_next,true);
            }
            else
            {
               owner.toSkill(owner.skill_next,true);
            }
         }
         if(owner.onEgde)
         {
            S++;
            if(S > 20)
            {
               var _loc2_ = Math.random();
               if(_loc2_ < 0.2)
               {
                  owner.attack();
               }
               else
               {
                  owner.stand();
               }
               delete this.onEnterFrame;
               return undefined;
            }
         }
         if(owner.opp.status_3 == "attack" && owner.getDis() < 200)
         {
            if(owner.checkDefend())
            {
               delete this.onEnterFrame;
            }
         }
         else if(owner.opp.hasObj())
         {
            if(owner.checkDefend())
            {
               delete this.onEnterFrame;
            }
         }
         else if(owner.getDis() < 200)
         {
            delete this.onEnterFrame;
            owner.attack_start();
         }
      };
   }
   function move_squat()
   {
   }
   function move_hold()
   {
      clearInterval(this.delayTimer);
      var opp = this.opp;
      var _loc5_ = this.dir;
      var owner = this;
      this.mc.onEnterFrame = function()
      {
         if(_level0.inPause)
         {
            return undefined;
         }
         if(owner.inFreeze)
         {
            return undefined;
         }
         if(owner.checkMustDefendSkill(opp.status_1))
         {
            return undefined;
         }
         if(opp.hasObj() && owner.holdFreeze == false)
         {
            if(opp.getObjNum() > 1)
            {
               return undefined;
            }
            var _loc3_ = opp.getObj();
            var _loc2_ = opp.getObjDis();
            if(_loc3_._width <= 250)
            {
               if(_loc2_ < 130 && _loc2_ > 100)
               {
                  var _loc1_ = Math.random();
                  if(_loc1_ < 0.5 * owner.hold_rate * 0.01)
                  {
                     owner.roll_f();
                  }
                  return undefined;
               }
               return undefined;
            }
         }
         if((opp.mc.hitPos == "up" || opp.status_2 == "air") && owner.status_1 != "hold_u")
         {
            if(_level0.level == 5)
            {
               owner.hold_u();
               return undefined;
            }
            _loc1_ = int(Math.random() * 100);
            if(_loc1_ < owner.attack_s)
            {
               owner.hold_u();
               return undefined;
            }
         }
         else if((opp.status_1.indexOf("squat") > -1 || opp.mc.hitPos == "down") && owner.status_1 != "hold_d")
         {
            owner.hold_d();
            return undefined;
         }
         if(opp.status_3 != "attack" && !opp.hasObj() && owner.holdFreeze == false)
         {
            if(owner.status_1 == "hold_d")
            {
               owner.squat();
            }
            else
            {
               owner.stand();
            }
         }
         else if(owner.holdFreeze == false && opp.hit_over())
         {
            _level0.out("防御中检测对手收招");
            if(!owner.checkAttack())
            {
               if(owner.status_1 == "hold_d")
               {
                  owner.squat();
               }
               else
               {
                  owner.stand();
               }
            }
         }
      };
   }
   function stand()
   {
      this.statusClear();
      this.status_1 = "stand";
      this.gotoAndStop("stand");
      this.cpu_control();
   }
   function squat()
   {
      if(this.status_2 != "land" || this.status_3 != "normal")
      {
         return undefined;
      }
      this.statusClear();
      this.gotoAndStop("squat");
      this.status_1 = "squat";
      this.cpu_control();
   }
   function attack()
   {
      this.attack_start();
   }
   function wait()
   {
      this.statusClear();
      this.status_1 = "stand";
      this.gotoAndStop("stand");
      this.checkWait();
   }
   function waitStand()
   {
      this.statusClear();
      this.status_1 = "stand";
      this.gotoAndStop("stand");
      var owner = this;
      this.mc.onEnterFrame = function()
      {
         if(_level0.inPause)
         {
            return undefined;
         }
         if(owner.inFreeze)
         {
            return undefined;
         }
         if(owner.opp.status_3 != "down")
         {
            delete this.onEnterFrame;
            owner.attack_start();
         }
      };
   }
   function walk_f()
   {
      if(this.status_2 != "land" || this.status_3 != "normal")
      {
         return undefined;
      }
      this.Vx = this.dir * this.Vwalk;
      this.gotoAndStop("walk_f");
      this.status_1 = "walk_f";
      clearInterval(this.delayTimer);
      this.delayTimer = setInterval(this,"move_walkRun",5);
   }
   function walk_b()
   {
      if(this.status_2 != "land" || this.status_3 != "normal")
      {
         return undefined;
      }
      if(this.opp.status_3 == "attack")
      {
         this.hold_u();
         return undefined;
      }
      this.Vx = this.dir * (- this.Vwalk);
      this.gotoAndStop("walk_b");
      this.status_1 = "walk_b";
      clearInterval(this.delayTimer);
      this.delayTimer = setInterval(this,"move_walkRun",5);
   }
   function dash_f()
   {
      if(this.status_2 != "land" || this.status_3 != "normal")
      {
         return undefined;
      }
      this.Vx = this.dir * this.Vdash;
      this.gotoAndStop("dash_f");
      this.status_1 = "dash_f";
      clearInterval(this.delayTimer);
      this.delayTimer = setInterval(this,"move_walkRun",5);
   }
   function dash_b()
   {
      if(this.status_2 != "land" || this.status_3 != "normal")
      {
         return undefined;
      }
      this.gotoAndStop("dash_b");
      this.status_1 = "dash_b";
      this.Vx = -26;
      this.Vy = 17;
      this.status_2 = "air";
   }
   function hold()
   {
      this.hold_u();
   }
   function hold_u()
   {
      if(this.status_2 != "land" || this.status_3 != "normal")
      {
         return undefined;
      }
      this.gotoAndStop("hold_u");
      this.status_1 = "hold_u";
      this.status_4 = "hold";
      clearInterval(this.delayTimer);
      this.delayTimer = setInterval(this,"move_hold",5);
   }
   function hold_d()
   {
      if(this.status_2 != "land" || this.status_3 != "normal")
      {
         return undefined;
      }
      this.gotoAndStop("hold_d");
      this.status_1 = "hold_d";
      this.status_4 = "hold";
      clearInterval(this.delayTimer);
      this.delayTimer = setInterval(this,"move_hold",5);
   }
   function jump_f()
   {
      if(this.status_2 != "land")
      {
         return undefined;
      }
      this.status_2 = "air";
      this.gotoAndStop("jump_f");
      this.status_1 = "jump_f";
      this.Vx = this.Vjump_x;
      this.Vy = this.Vjump_y;
      var owner = this;
      this.mc.onEnterFrame = function()
      {
         if(_level0.inPause)
         {
            return undefined;
         }
         if(owner.inFreeze)
         {
            return undefined;
         }
         owner.air_check();
      };
   }
   function jump_b()
   {
      if(this.status_2 != "land")
      {
         return undefined;
      }
      this.status_2 = "air";
      this.gotoAndStop("jump_b");
      this.status_1 = "jump_b";
      this.Vx = - this.Vjump_x;
      this.Vy = this.Vjump_y;
      var owner = this;
      this.mc.onEnterFrame = function()
      {
         if(_level0.inPause)
         {
            return undefined;
         }
         if(owner.inFreeze)
         {
            return undefined;
         }
         owner.air_check();
      };
   }
   function jump()
   {
      if(this.status_2 != "land")
      {
         return undefined;
      }
      this.status_2 = "air";
      this.gotoAndStop("jump");
      this.status_1 = "jump";
      this.Vx = 0;
      this.Vy = this.Vjump_y;
      var owner = this;
      this.mc.onEnterFrame = function()
      {
         if(_level0.inPause)
         {
            return undefined;
         }
         if(owner.inFreeze)
         {
            return undefined;
         }
         owner.air_check();
      };
   }
   function punch()
   {
      if(this.status_2 != "land" || this.status_3 != "normal")
      {
         return undefined;
      }
      this.gotoAndStop("punch");
      this.status_1 = "punch";
      this.status_3 = "attack";
   }
   function pitch()
   {
      if(!super.pitch())
      {
         this.punch();
      }
   }
   function kick2()
   {
      this.gotoAndStop("kick2");
      this.status_1 = "kick2";
      this.status_3 = "attack";
   }
   function hold_end()
   {
      this.holdFreeze = false;
   }
   function selectOne(array)
   {
      var _loc1_ = array.length;
      var _loc2_ = int(Math.random() * _loc1_);
      var _loc3_ = array[_loc2_];
      return _loc3_;
   }
   function air_check()
   {
      if(this.getDis() > 350)
      {
         return undefined;
      }
      var _loc2_ = undefined;
      var _loc3_ = undefined;
      if(this.opp.status_2 == "air" || this.opp.status_3 == "hurt")
      {
         if(this.getDis() < 150)
         {
            _loc3_ = int(Math.random() * 100);
            if(_loc3_ > 50)
            {
               _loc2_ = "punch";
            }
            else
            {
               _loc2_ = "kick";
            }
         }
         else
         {
            _loc2_ = "kick";
         }
         if(this.mc._currentframe > 7)
         {
            this.jumpSkill(_loc2_);
            delete this.mc.onEnterFrame;
         }
      }
      else if(this._y > this.land_Y - 150 && this.Vy < 0)
      {
         _loc3_ = int(Math.random() * 100);
         if(_loc3_ < 30)
         {
            _loc2_ = "punch";
         }
         else if(_loc3_ < 70)
         {
            _loc2_ = "kick";
         }
         else if(_loc3_ < 80)
         {
            _loc2_ = "punch";
         }
         else if(_loc3_ < 90)
         {
            _loc2_ = "kick_l";
         }
         else
         {
            _loc2_ = "punch_l";
         }
         this.jumpSkill(_loc2_);
         delete this.mc.onEnterFrame;
      }
   }
}
