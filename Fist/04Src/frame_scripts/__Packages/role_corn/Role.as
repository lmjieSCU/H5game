class role_corn.Role extends MovieClip
{
   var frameCount_temp = 0;
   var record_action_totalFrame = ["stand","walk_f","walk_b","dash_f","dash_b","land","land2","squat"];
   var record_filter_array = ["stand","walk_f","walk_b","land","land2","squat"];
   var frameOffset = 1;
   var inReplay = false;
   var status_1 = "stand";
   var status_2 = "land";
   var status_3 = "normal";
   var status_4 = "normal";
   var status_5 = "normal";
   var holdFreeze = false;
   var delaySkill = "";
   var inRecord = false;
   var dir = 1;
   var frame_t = 33;
   var frame_t2 = 80;
   var KO_checked = false;
   var winTimes = 0;
   var control = false;
   var checkTouch_stop = false;
   var side_offset = 30;
   var depth_shadow = 55;
   var airHits_max = 4;
   var power_skillSuper = 80;
   var power_skillBurst = 110;
   var power_cancle = 30;
   var roleMode = 1;
   function Role()
   {
      super();
      this.lifeObj = {target:this};
      this.powerObj = {target:this};
      this.hitsObj = {target:this};
      this.hitsArray = new Array();
      this.winPoseArray = new Array("end");
      this.skillObj = new Object();
      this.freeze_timer = this.createEmptyMovieClip("freeze_timer",124);
      this.skill_loader = this._parent.createEmptyMovieClip("skill_loader",200);
      this.replay_timer = this.createEmptyMovieClip("replay_timer",135);
      this.Vg = _level0.g;
      this.Va = 3;
      this.colorObj = new Object();
      this.colorObj.normal = {ra:"100",rb:"0",ga:"100",gb:"0",ba:"100",bb:"0",aa:"100",ab:"0"};
      this.colorObj.fire = {ra:"100",rb:"255",ga:"100",gb:"110",ba:"100",bb:"0",aa:"100",ab:"0"};
      this.colorObj.white = {ra:"100",rb:"255",ga:"100",gb:"255",ba:"100",bb:"255",aa:"100",ab:"255"};
      this.colorObj.fire_blue = {ra:"100",rb:"0",ga:"100",gb:"0",ba:"100",bb:"255",aa:"100",ab:"0"};
      this.colorObj.light1 = {ra:"-65",rb:"200",ga:"-65",gb:"200",ba:"100",bb:"255",aa:"100",ab:"0"};
      this.colorObj.light2 = {ra:"-65",rb:"200",ga:"-65",gb:"200",ba:"-100",bb:"255",aa:"100",ab:"0"};
      this._to_PK = this.to_PK;
      this._to_PK_l = this.to_PK_l;
      this._to_key_s = this.to_key_s;
      this._to_key_s2 = this.to_key_s2;
      this._to_kick = this.to_kick;
      this._to_kick_l = this.to_kick_l;
      this._to_punch = this.to_punch;
      this._to_punch_l = this.to_punch_l;
      this._to_double_f = this.to_double_f;
      this._to_double_b = this.to_double_b;
      this._to_double_d = this.to_double_d;
      this.input_pre = new Object();
      this.input_pre.roll_f = 10;
      this.input_pre.roll_b = 10;
      this.input_pre.land = 0;
      this.input_pre.land2 = 0;
      this.input_pre.land3 = 0;
      this.input_pre.getup1 = 20;
      this.input_pre.getup2 = 20;
   }
   function stand()
   {
      this.statusClear();
      this.gotoAndStop("stand");
   }
   function walk_f()
   {
      if(this.status_2 != "land" || this.status_3 != "normal" || this.status_1 == "squat" || this.holdFreeze)
      {
         return false;
      }
      this.Vx = this.dir * this.Vwalk;
      this.gotoAndStop("walk_f");
      this.status_1 = "walk_f";
      this.move_walkRun();
   }
   function walk_b()
   {
      if(this.holdFreeze)
      {
         return false;
      }
      if(this.status_1 == "squat" && this.opp.status_3 == "attack")
      {
         this.hold_d();
         return undefined;
      }
      if(this.status_2 != "land" || this.status_3 != "normal" || this.status_1 == "squat")
      {
         return false;
      }
      if(this.opp.status_3 == "attack")
      {
         this.hold_u();
         return undefined;
      }
      this.Vx = this.dir * (- this.Vwalk);
      this.gotoAndStop("walk_b");
      this.status_1 = "walk_b";
      this.move_walkRun();
   }
   function dash_f()
   {
      if(this.status_2 != "land" || this.status_3 != "normal" || this.status_1 == "squat" || this.holdFreeze)
      {
         return false;
      }
      this.Vx = this.dir * this.Vdash;
      this.gotoAndStop("dash_f");
      this.status_1 = "dash_f";
      this.move_walkRun();
   }
   function dash_b()
   {
      if(this.status_2 != "land" || this.status_3 != "normal" || this.status_1 == "squat" || this.holdFreeze)
      {
         return false;
      }
      this.gotoAndStop("dash_b");
      this.status_1 = "dash_b";
      this.Vx = -26;
      this.Vy = 17;
   }
   function roll_f()
   {
      if(this.status_1 == "getup1" || this.status_1 == "getup2")
      {
         if(this.mc._currentframe < 4 && this.status_5 == "hitDown")
         {
            this.roll_down();
            return true;
         }
         return false;
      }
      if(this.status_2 != "land")
      {
         return false;
      }
      if(this.inBurst && this.burst_mode == "attack" && this.holdFreeze)
      {
         this.changeColorSelf("white",30);
         this.powerObj.action = "burstdec";
         this.powerObj.decNum = _level0.power_holdRoll;
         this.powerControl(this.powerObj);
      }
      else if(this.status_3 != "normal" || this.holdFreeze)
      {
         return false;
      }
      if(this.status_1 == "dash_f")
      {
         this.Vx = 23;
      }
      else
      {
         this.Vx = 19;
      }
      this.status_1 = "roll_f";
      this.status_3 = "roll";
      this.gotoAndStop("roll_f");
   }
   function roll_b()
   {
      if(this.status_1 == "getup1" || this.status_1 == "getup2")
      {
         if(this.mc._currentframe < 4 && this.status_5 == "hitDown")
         {
            this.roll_down();
            return true;
         }
         return false;
      }
      if(this.status_2 != "land")
      {
         return false;
      }
      if(this.inBurst && this.burst_mode == "attack" && this.holdFreeze)
      {
         this.changeColorSelf("white",30);
         this.powerObj.action = "burstdec";
         this.powerObj.decNum = _level0.power_holdRoll;
         this.powerControl(this.powerObj);
      }
      else if(this.status_3 != "normal" || this.holdFreeze)
      {
         return false;
      }
      this.Vx = -20;
      this.gotoAndStop("roll_b");
      this.status_1 = "roll_b";
      this.status_3 = "roll";
   }
   function roll_down()
   {
      delete this.onEnterFrame;
      this.status_2 = "";
      this._y = this.land_Y;
      this.Vx = -20;
      this.gotoAndStop("roll_b");
      this.status_1 = "roll_b";
      this.status_3 = "roll";
   }
   function hold_u()
   {
      if(this.status_2 != "land" || this.status_3 != "normal")
      {
         return false;
      }
      this.gotoAndStop("hold_u");
      this.status_1 = "hold_u";
      this.status_4 = "hold";
      this.move_hold();
   }
   function hold_d()
   {
      if(this.status_2 != "land" || this.status_3 != "normal")
      {
         return false;
      }
      this.gotoAndStop("hold_d");
      this.status_1 = "hold_d";
      this.status_4 = "hold";
      this.move_hold();
   }
   function squat()
   {
      if(this.status_2 != "land" || this.status_3 != "normal" || this.holdFreeze)
      {
         return false;
      }
      if(this.check_hold_d())
      {
         return undefined;
      }
      this.status_end = "stand";
      this.move_squat();
      this.gotoAndStop("squat");
      this.status_1 = "squat";
   }
   function jump()
   {
      if(this.status_1 == "dash_f")
      {
         if(this.status_2 != "land" || this.holdFreeze || this.status_3 != "normal")
         {
            return false;
         }
         this.status_2 = "air";
         this.Vx = this.Vjump_far;
         this.Vy = this.Vjump_y;
         this.gotoAndStop("jump_f");
         this.status_1 = "jump_f";
      }
      else if(Key.isDown(this.f))
      {
         if(this.dir == 1)
         {
            this.jump_f();
         }
         else
         {
            this.jump_b();
         }
      }
      else if(Key.isDown(this.b))
      {
         if(this.dir == -1)
         {
            this.jump_f();
         }
         else
         {
            this.jump_b();
         }
      }
      else
      {
         this.jump_u();
      }
   }
   function jump_u()
   {
      if(this.status_2 != "land" || this.holdFreeze || this.status_3 != "normal")
      {
         return false;
      }
      this.status_2 = "air";
      if(this.inRecord)
      {
         this.skill_record("jump");
      }
      this.Vx = 0;
      this.Vy = this.Vjump_y;
      this.gotoAndStop("jump");
      this.status_1 = "jump";
   }
   function jump_f()
   {
      if(this.status_2 != "land" || this.holdFreeze || this.status_3 != "normal")
      {
         return false;
      }
      this.status_2 = "air";
      if(this.inRecord)
      {
         this.skill_record("jump_f");
      }
      this.Vx = this.Vjump_x;
      this.Vy = this.Vjump_y;
      this.gotoAndStop("jump_f");
      this.status_1 = "jump_f";
   }
   function jump_b()
   {
      if(this.status_2 != "land" || this.holdFreeze || this.status_3 != "normal")
      {
         return false;
      }
      this.status_2 = "air";
      if(this.inRecord)
      {
         this.skill_record("jump_b");
      }
      this.Vx = - this.Vjump_x;
      this.Vy = this.Vjump_y;
      this.gotoAndStop("jump_b");
      this.status_1 = "jump_b";
   }
   function land()
   {
      this.status_2 = "toLand";
      this.status_3 = "normal";
      this.status_1 = "land";
      this.gotoAndStop("land");
      _level0.effect_mc.downEff("down1",this._x,this._y,this.dir);
   }
   function land2()
   {
      this.status_2 = "toLand";
      this.status_3 = "normal";
      this.status_1 = "land2";
      this.gotoAndStop("land2");
      _level0.effect_mc.downEff("down1",this._x,this._y,this.dir);
   }
   function land3()
   {
      this.status_2 = "toLand";
      this.status_3 = "normal";
      this.status_1 = "land3";
      this.gotoAndStop("land3");
      _level0.effect_mc.downEff("down1",this._x,this._y,this.dir);
   }
   function getup1()
   {
      this.status_2 = "toLand";
      this.status_3 = "down";
      this.status_1 = "getup1";
      this.gotoAndStop("getup1");
   }
   function getup2()
   {
      this.status_2 = "toLand";
      this.status_3 = "down";
      this.status_1 = "getup2";
      this.gotoAndStop("getup2");
   }
   function hurt3()
   {
      this.status_1 = "hurt3";
      this.status_3 = "hurt";
      this.status_2 = "air";
      this.gotoAndStop(this.status_1);
   }
   function punch()
   {
      if(this.status_2 == "air")
      {
         return false;
      }
      this.status_1 = "punch";
      this.gotoAndStop(this.status_1);
      this.status_3 = "attack";
   }
   function punch2()
   {
      if(this.status_2 == "air")
      {
         return false;
      }
      this.status_1 = "punch2";
      this.gotoAndStop(this.status_1);
      this.status_3 = "attack";
   }
   function punch_l()
   {
      if(this.status_2 != "land")
      {
         return false;
      }
      this.status_1 = "punch_l";
      this.gotoAndStop(this.status_1);
      this.status_3 = "attack";
   }
   function kick()
   {
      if(this.status_2 != "land")
      {
         return false;
      }
      this.status_1 = "kick";
      this.gotoAndStop(this.status_1);
      this.status_3 = "attack";
   }
   function kick2()
   {
      if(this.status_2 != "land")
      {
         return false;
      }
      this.gotoAndStop("kick2");
      this.status_1 = "kick2";
      this.status_3 = "attack";
   }
   function kick_l()
   {
      if(this.status_2 != "land")
      {
         return false;
      }
      this.gotoAndStop("kick_l");
      this.status_1 = "kick_l";
      this.status_3 = "attack";
   }
   function jumpSkill(act)
   {
      if(this.status_3 != "normal")
      {
         return false;
      }
      if(this.mc._currentframe < 4)
      {
         return false;
      }
      if(this.inRecord)
      {
         this.skill_record(act);
      }
      this.mc.gotoAndPlay(act);
      this.status_3 = "attack";
      this.status_1 = "jumpSkill_" + act;
      this.opp.checkDefend();
   }
   function pitch()
   {
      if(this.status_3 != "normal")
      {
         return false;
      }
      if(this.catch_check())
      {
         this.gotoAndStop("pitch");
         this.status_1 = "pitch";
         this.status_3 = "attack";
         this.opp.status_3 = "hurt";
         return true;
      }
   }
   function burst(type)
   {
      if(this.inBurst)
      {
         return false;
      }
      if(this.status_2 != "land" || this.status_3 != "normal" || this.holdFreeze)
      {
         return false;
      }
      if(this.superPoint != this.powerPoint_max)
      {
         if(!(this.redBlood && this.superPoint > 0))
         {
            return false;
         }
      }
      this.status_3 = "attack";
      this.inBurst = true;
      if(type == "attack")
      {
         this.burst_mode = "attack";
         this.status_1 = "burst";
         this.gotoAndStop("burst");
      }
      else if(type == "defend")
      {
         this.burst_defend = true;
         this.burst_mode = "defend";
         this.status_1 = "burst2";
         this.gotoAndStop("burst2");
      }
      else if(type == "power")
      {
         this.burst_mode = "power";
         this.status_1 = "burst";
         this.gotoAndStop("burst");
      }
      return true;
   }
   function burst_a()
   {
      if(this.inBurst)
      {
         return false;
      }
      if(this.status_2 != "land" || this.status_3 != "normal" || this.holdFreeze)
      {
         return false;
      }
      if(this.superPoint != this.powerPoint_max)
      {
         if(!(this.redBlood && this.superPoint > 0))
         {
            return false;
         }
      }
      this.status_3 = "attack";
      this.inBurst = true;
      this.burst_mode = "attack";
      this.status_1 = "burst";
      this.gotoAndStop("burst");
      return true;
   }
   function burst_d()
   {
      if(this.inBurst)
      {
         return undefined;
      }
      if(this.status_2 != "land" || this.status_3 != "normal" || this.holdFreeze)
      {
         return undefined;
      }
      if(this.superPoint != this.powerPoint_max)
      {
         if(!(this.redBlood && this.superPoint > 0))
         {
            return undefined;
         }
      }
      this.status_3 = "attack";
      this.inBurst = true;
      this.burst_defend = true;
      this.burst_mode = "defend";
      this.status_1 = "burst2";
      this.gotoAndStop("burst2");
      return true;
   }
   function burst_p()
   {
      if(this.inBurst)
      {
         return undefined;
      }
      if(this.status_2 != "land" || this.status_3 != "normal" || this.holdFreeze)
      {
         return undefined;
      }
      if(this.superPoint != this.powerPoint_max)
      {
         if(!(this.redBlood && this.superPoint > 0))
         {
            return undefined;
         }
      }
      this.status_3 = "attack";
      this.inBurst = true;
      this.burst_mode = "power";
      this.status_1 = "burst3";
      this.gotoAndStop("burst3");
      return true;
   }
   function sk_busrt_a()
   {
      if(this.inBurst != true && !this.inReplay)
      {
         return false;
      }
      if(this.toStatus(this.skillObj.busrt_a) == false)
      {
         return false;
      }
      this.status_3 = "attack";
      this.powerObj.action = "burstdec";
      this.powerObj.decNum = 80;
      this.powerControl(this.powerObj);
   }
   function sk_busrt_d()
   {
      if(this.inBurst != true && !this.inReplay)
      {
         return false;
      }
      if(this.toStatus(this.skillObj.busrt_d) == false)
      {
         return false;
      }
      this.status_3 = "attack";
      this.powerObj.action = "burstdec";
      this.powerObj.decNum = 80;
      this.powerControl(this.powerObj);
   }
   function sk_record()
   {
      if(this.status_2 != "land")
      {
         return false;
      }
      this.skill_replay_start();
   }
   function heavyHit()
   {
      if(this.status_2 != "land")
      {
         return false;
      }
      this.status_1 = "heavyHit";
      this.status_3 = "attack";
      this.gotoAndStop(this.status_1);
   }
   function move_walkRun()
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
         if(this.status_2 != "land" || this.status_3 != "normal")
         {
            delete this.onEnterFrame;
            return undefined;
         }
         if(Key.isDown(this.f))
         {
            if(this.opp.status_3 == "attack" && this.dir == -1)
            {
               this.hold_u();
               return undefined;
            }
            this.do_move(this.Vx);
         }
         else if(Key.isDown(this.b))
         {
            if(this.opp.status_3 == "attack" && this.dir == 1)
            {
               this.hold_u();
               return undefined;
            }
            this.do_move(this.Vx);
         }
         else
         {
            delete this.onEnterFrame;
            this.stand();
         }
      };
   }
   function move_squat()
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
         if(this.check_hold_d())
         {
            delete this.onEnterFrame;
         }
         if(!Key.isDown(this.d) && this.status_1 == "squat" && this.status_3 != "attack")
         {
            delete this.onEnterFrame;
            this.toStatus_switch(this.status_end);
         }
      };
   }
   function check_hold_d()
   {
      if(this.opp.status_3 == "attack")
      {
         if(this.dir == 1 && Key.isDown(this.b) || this.dir == -1 && Key.isDown(this.f))
         {
            this.hold_d();
            return true;
         }
      }
   }
   function move_hold()
   {
      var f = this.f;
      var b = this.b;
      var d = this.d;
      var opp = this.opp;
      var dir = this.dir;
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
         if(Key.isDown(f) && (opp.status_3 == "attack" || opp.hasObj()) && dir == -1)
         {
            if(owner.status_1 == "hold_u" && Key.isDown(d))
            {
               owner.hold_d();
            }
            else if(owner.status_1 == "hold_d" && !Key.isDown(d))
            {
               owner.hold_u();
            }
         }
         else if(Key.isDown(b) && (opp.status_3 == "attack" || opp.hasObj()) && dir == 1)
         {
            if(owner.status_1 == "hold_u" && Key.isDown(d))
            {
               owner.hold_d();
            }
            else if(owner.status_1 == "hold_d" && !Key.isDown(d))
            {
               owner.hold_u();
            }
         }
         else if(!owner.holdFreeze)
         {
            owner.status_3 = "normal";
            owner.toStatus_switch("stand");
         }
      };
   }
   function do_holdFreeze(f)
   {
      this.holdFreeze = true;
      var f_t = f;
      var owner = this;
      this.delaySkill = "";
      this.freeze_timer.onEnterFrame = function()
      {
         if(_level0.inPause)
         {
            return undefined;
         }
         if(owner.inFreeze)
         {
            return undefined;
         }
         if(f_t <= 0)
         {
            owner.hold_end();
            delete this.onEnterFrame;
         }
         f_t--;
      };
   }
   function hold_end()
   {
      this.holdFreeze = false;
      this.status_4 = "normal";
      if(this.status_1 == "hold_d")
      {
         this.toStatus_switch("squat");
      }
      else if(this.status_1 == "hold_d")
      {
         this.toStatus_switch("stand");
      }
   }
   function do_move(Vx)
   {
      this.do_move2(Vx);
   }
   function do_move2(Vx)
   {
      if(this.egdecheck(Vx))
      {
         return undefined;
      }
      this._x = this._x + Vx;
   }
   function start_move_X1(v, obj)
   {
      var Vx = v != 0?this.dir * v:this.dir * this.Vx;
      var _loc3_ = this;
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
         this.do_move(Vx);
         if(obj.Vx == undefined)
         {
            delete this.onEnterFrame;
         }
      };
   }
   function stop_move_X1(obj)
   {
      delete obj.onEnterFrame;
   }
   function start_move_X2(v)
   {
      this.Vx = v;
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
         this.do_move(this.dir * this.Vx);
         this.Vx = this.Vx - this.Va;
         if(this.Vx <= 0)
         {
            delete this.onEnterFrame;
         }
      };
   }
   function stop_move_X2()
   {
      delete this.onEnterFrame;
   }
   function start_move_Y1(y, x, end, g)
   {
      this.status_2 = "air";
      this.Vy = y;
      this.Vx = this.dir * x;
      var Vg2;
      if(g != 0 && g != null)
      {
         Vg2 = g;
      }
      else
      {
         Vg2 = this.Vg;
      }
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
         this.do_move(this.Vx);
         this._y = this._y - this.Vy;
         this.Vy = this.Vy - Vg2;
         if(this._y > this.land_Y)
         {
            this.stop_move_Y1(end);
         }
      };
   }
   function stop_move_Y1(end)
   {
      delete this.onEnterFrame;
      this._y = this.land_Y;
      if(!end || end == "")
      {
         this.land();
      }
      else if(end == "none")
      {
         this.mc.play();
         this.status_2 = "land";
      }
      else if(end.indexOf("frame") != -1)
      {
         this.mc.gotoAndPlay(end);
         this.status_2 = "land";
      }
      else if(this.mc.nextSkill != undefined)
      {
         this.toStatus(this.mc.nextSkill);
      }
      else
      {
         this.toStatus(end);
      }
   }
   function hurtBack(f_r)
   {
      this.Vx = this.hurtValue.Vx;
      var status_now = this.mc;
      var ft = this.hurtValue.freezeTime2;
      this.status_5 = "hitBack";
      if((this.status_1 == "hold_u" || this.status_1 == "hold_d") && this.Vx > 21)
      {
         this.Vx = 21;
      }
      if(this.status_1 == "hold_d" && this.opp.status_1 == "squatKick")
      {
         this.Vx = 20;
      }
      this.egdecheck(this.Vx);
      this.onEnterFrame = function()
      {
         if(_level0.inPause)
         {
            return undefined;
         }
         if(_level0.inFreeze)
         {
            return undefined;
         }
         if(this.inFreeze)
         {
            return undefined;
         }
         if(ft > 0)
         {
            status_now.stop();
            ft--;
            return undefined;
         }
         if(ft <= 0)
         {
            status_now.play();
            ft = -1;
         }
         if(this.Vx != 0)
         {
            if(this.onEgde && !this.hurtValue.isObj && this.status_2 == "land")
            {
               this.opp.do_move((- this.Vx) * this.opp.dir);
            }
            else
            {
               this.do_move(this.Vx * this.opp.dir);
            }
         }
         var _loc2_ = undefined;
         if(this.hurtValue.a != 0 && this.hurtValue.a != undefined)
         {
            _loc2_ = this.hurtValue.a;
         }
         else
         {
            _loc2_ = this.Va;
         }
         this.Vx = this.Vx - _loc2_;
         if(this.Vx <= 0)
         {
            delete this.onEnterFrame;
            status_now.play();
         }
      };
   }
   function stop_hurtBack()
   {
      delete this.onEnterFrame;
      this.mc.play();
   }
   function hurtAway()
   {
      this.status_2 = "air";
      this.Vx = this.hurtValue.Vx * this.opp.dir;
      this.Vy = this.hurtValue.Vy;
      if(this.onEgde && !this.hurtValue.isObj && this.opp.status_2 == "land")
      {
         this.opp.do_move(- this.Vx);
      }
      this.onEnterFrame = this.do_hurtAway;
   }
   function hurtAway_self(v1, v2, end)
   {
      this.status_2 = "air";
      this.Vx = v1 * this.opp.dir;
      this.Vy = v2;
      this.hurtValue.Vy = v2;
      this.hurtValue.end_status = end;
      this.onEnterFrame = function()
      {
         this.do_hurtAway();
      };
   }
   function do_hurtAway()
   {
      if(_level0.inPause)
      {
         return undefined;
      }
      if(_level0.inFreeze)
      {
         return undefined;
      }
      if(this.inFreeze)
      {
         return undefined;
      }
      this.do_move(this.Vx);
      this._y = this._y - this.Vy;
      var _loc2_ = undefined;
      if(this.hurtValue.g != 0 && this.hurtValue.g != undefined)
      {
         _loc2_ = this.hurtValue.g;
      }
      else
      {
         _loc2_ = this.Vg;
      }
      this.Vy = this.Vy - _loc2_;
      if(this._y > this.land_Y)
      {
         this.stop_hurtAway();
      }
   }
   function stop_hurtAway()
   {
      delete this.onEnterFrame;
      this.status_2 = "";
      this._y = this.land_Y;
      if(this.status_1 == "hurt6")
      {
         this.status_3 = "";
         this.toStatus_switch("stand");
      }
      else if(this.hurtValue.end_status == "none")
      {
         this.mc.play();
      }
      else if(this.hurtValue.end_status == "")
      {
         if(this.Vx > 25 || this.Vx < -25)
         {
            this.toStatus("getup2");
         }
         else
         {
            this.toStatus("getup1");
         }
         this.status_5 = "hitDown";
      }
      else
      {
         this.toStatus(this.hurtValue.end_status);
         this.status_5 = "hitDown";
      }
      if(this.hurtValue.Vy < 0)
      {
         _level0.effect_mc.downEff("down3",this._x,this._y,this.dir);
      }
      else
      {
         _level0.effect_mc.downEff("down2",this._x,this._y,this.dir);
      }
   }
   function do_hitTest(obj)
   {
      if(obj.hitTest(this.opp.mc.body))
      {
         return true;
      }
   }
   function move_HitTest(obj, attFrame, endFrame, S, v)
   {
      var opp = this.opp;
      var role = this;
      var status_mc = this.mc;
      var Sx = S;
      var Vx = v;
      obj.onEnterFrame = function()
      {
         if(_level0.inPause)
         {
            return undefined;
         }
         if(role.inFreeze)
         {
            return undefined;
         }
         if(_level0.inFreeze)
         {
            return undefined;
         }
         role.do_move(role.dir * Vx);
         Sx = Sx - Vx;
         if(this.hitTest(opp.mc.body))
         {
            status_mc.gotoAndPlay(attFrame);
            delete this.onEnterFrame;
         }
         else if(Sx < 0)
         {
            status_mc.gotoAndPlay(endFrame);
            delete this.onEnterFrame;
         }
         else if(role.egde == 1 && role.dir == 1)
         {
            status_mc.gotoAndPlay(endFrame);
            delete this.onEnterFrame;
         }
         else if(role.egde == -1 && role.dir == -1)
         {
            status_mc.gotoAndPlay(endFrame);
            delete this.onEnterFrame;
         }
      };
   }
   function catch_check()
   {
      if(this.status_1 != "dash_f" && this.opp.status_2 != "air" && this.opp.status_3 != "hurt" && this.opp.status_3 != "down" && !this.opp.holdFreeze && (this.opp.hit_over() || this.dir == this.opp.dir))
      {
         if(this.checkTouch(15 * this.dir))
         {
            return true;
         }
      }
   }
   function catch_HitTest(obj, status_c, flag, condition_land, condition_hurt, downHit)
   {
      if(condition_land)
      {
         if(this.opp.status_2 == "air")
         {
            return undefined;
         }
      }
      if(condition_hurt)
      {
         if(!(this.opp.status_3 == "hurt" || this.opp.status_3 == ""))
         {
            if(!(this.opp.status_3 == "down" && this.onHit))
            {
               return undefined;
            }
         }
      }
      if(downHit == false)
      {
         if(this.opp.status_3 == "down")
         {
            return undefined;
         }
      }
      if(obj.hitTest(this.opp.mc.body))
      {
         this.onHit = true;
         this.opp.toStatus(status_c);
         this.opp.mc.gotoAndStop(flag);
         this.opp.status_3 = "hurt";
         var _loc2_ = this._x + obj._x * this.dir;
         var _loc3_ = this._y + obj._y;
         if(_level0.char_mc._x + _loc2_ > this.egde_max)
         {
            _loc2_ = this.egde_max - _level0.char_mc._x;
         }
         else if(_level0.char_mc._x + _loc2_ < this.egde_min)
         {
            _loc2_ = this.egde_min - _level0.char_mc._x;
         }
         this.opp._x = _loc2_;
         if(this.dir == this.opp.dir)
         {
            if(this.dir == 1)
            {
               this.opp.chageSide2();
            }
            else
            {
               this.opp.chageSide1();
            }
         }
         _level0.effect_mc.hitFire("hitFire3",_loc2_,_loc3_);
         this.topLayer();
      }
      else
      {
         this.onHit = false;
         this.toStatus("stand");
      }
   }
   function catch_oppPos(obj, status_c, flag, land, hurt)
   {
      if(this.opp.status_2 == "air" && land)
      {
         return undefined;
      }
      if(this.opp.status_3 != "hurt" && this.opp.status_3 != "down" && hurt)
      {
         return undefined;
      }
      if(obj.hitTest(this.opp.mc.body))
      {
         this.onHit = true;
         this.opp.status_3 = "hurt";
         this.opp.toStatus(status_c);
         this.opp.mc.gotoAndStop(flag);
         var _loc2_ = this._x + obj._x * this.dir;
         var _loc3_ = this._y + obj._y;
         if(_level0.char_mc._x + _loc2_ > this.egde_max)
         {
            _loc2_ = this.egde_max - _level0.char_mc._x;
         }
         else if(_level0.char_mc._x + _loc2_ < this.egde_min)
         {
            _loc2_ = this.egde_min - _level0.char_mc._x;
         }
         this.opp._x = _loc2_;
         this.opp._y = _loc3_;
         if(this.dir == this.opp.dir)
         {
            if(this.dir == 1)
            {
               this.opp.chageSide2();
            }
            else
            {
               this.opp.chageSide1();
            }
         }
      }
      else
      {
         this.onHit = false;
      }
   }
   function catch_oppPos2(obj, obj2, status_c, flag, condition_land, condition_hurt, downHit, oppDirChange)
   {
      if(condition_land)
      {
         if(this.opp.status_2 == "air" || this.opp.status_1 == "hurt6")
         {
            return undefined;
         }
      }
      if(condition_hurt)
      {
         if(!(this.opp.status_3 == "hurt" || this.opp.status_3 == ""))
         {
            if(!(this.opp.status_3 == "down" && this.onHit))
            {
               return undefined;
            }
         }
      }
      if(downHit == false)
      {
         if(this.opp.status_3 == "down")
         {
            return undefined;
         }
      }
      if(obj.hitTest(this.opp.mc.body))
      {
         this.onHit = true;
         this.opp.status_3 = "hurt";
         this.opp.toStatus(status_c);
         this.opp.mc.gotoAndStop(flag);
         this.opp.skillCount = false;
         this.opp.inCount = false;
         this.opp.status_2 = "land";
         delete this.opp.onEnterFrame;
         var _loc5_ = Func.lToG(obj2);
         var _loc2_ = _loc5_.x;
         var _loc4_ = _loc5_.y;
         if(_level0._xscale != 100)
         {
            if(_loc2_ > this.egde_max * _level0._xscale)
            {
               _loc2_ = this.egde_max * _level0._xscale;
            }
            else if(_loc2_ < this.egde_min)
            {
               _loc2_ = this.egde_min;
            }
            var _loc3_ = new Object();
            _loc3_.x = _loc2_;
            _loc3_.y = _loc4_;
            _level0.char_mc.globalToLocal(_loc3_);
            this.opp._x = _loc3_.x;
            this.opp._y = _loc3_.y;
         }
         else
         {
            if(_loc2_ > this.egde_max)
            {
               _loc2_ = this.egde_max;
            }
            else if(_loc2_ < this.egde_min)
            {
               _loc2_ = this.egde_min;
            }
            _loc3_ = new Object();
            _loc3_.x = _loc2_;
            _loc3_.y = _loc4_;
            _level0.char_mc.globalToLocal(_loc3_);
            this.opp._x = _loc3_.x;
            this.opp._y = _loc3_.y;
         }
         if(this.dir == this.opp.dir)
         {
            if(this.dir == 1)
            {
               this.opp.chageSide2();
            }
            else
            {
               this.opp.chageSide1();
            }
         }
         return true;
      }
      this.onHit = false;
   }
   function throw_oppPos(obj, status_c, flag, land, hurt)
   {
      this.onHit = true;
      this.opp.status_2 = "air";
      this.opp.status_3 = "hurt";
      this.opp.toStatus(status_c);
      this.opp.mc.gotoAndStop(flag);
      var _loc2_ = this._x + obj._x * this.dir;
      var _loc4_ = this._y + obj._y;
      if(_level0.char_mc._x + _loc2_ > this.egde_max)
      {
         _loc2_ = this.egde_max - _level0.char_mc._x;
      }
      else if(_level0.char_mc._x + _loc2_ < this.egde_min)
      {
         _loc2_ = this.egde_min - _level0.char_mc._x;
      }
      this.opp._x = _loc2_;
      this.opp._y = _loc4_;
      if(obj.sameDir)
      {
         this.opp._xscale = this._xscale;
      }
      this.opp._rotation = obj._rotation;
      delete this.onEnterFrame;
   }
   function throw_hit(hurtV, obj)
   {
      this.opp._rotation = 0;
      this.opp.checkSide_abs();
      var _loc2_ = this._x + obj._x * this.dir;
      var _loc4_ = this._y + obj._y;
      if(_level0.char_mc._x + _loc2_ > this.egde_max)
      {
         _loc2_ = this.egde_max - _level0.char_mc._x;
      }
      else if(_level0.char_mc._x + _loc2_ < this.egde_min)
      {
         _loc2_ = this.egde_min - _level0.char_mc._x;
      }
      this.opp._x = _loc2_;
      this.opp._y = _loc4_;
      this.opp.hurtValue = hurtV;
      this.opp.toStatus(hurtV.hurtAway);
      this.opp.mc.gotoAndPlay(hurtV.flag);
      this.opp.hurtAway();
      this.powerObj.inc = 10 * hurtV.d_rate;
      this.powerObj.action = "inc";
      this.powerControl(this.powerObj);
   }
   function flyingObjHit(hitValue)
   {
      this.flyingObj.play();
   }
   function doHit(obj)
   {
      this.onHit = true;
      this.hitValue = obj;
      this.powerObj.inc = 10 * this.hitValue.d_rate;
      this.powerObj.action = "inc";
      this.powerControl(this.powerObj);
   }
   function doHurt(obj)
   {
      this.hurtValue = obj;
      this.checkHurt();
      this.opp.hitFire();
      this.shakeCheck();
      this.opp.topLayer();
      if(this.isKO && !this.KO_checked)
      {
         this.KO_checked = true;
         if(this.opp.superSkill || this.opp.isBurstSkill)
         {
            _level0.effect_mc.KO_Freeze(this.hurtValue.freezeTime + 15,2);
         }
         else
         {
            _level0.effect_mc.KO_Freeze(this.hurtValue.freezeTime + 15,1);
         }
      }
      else if(this.hurtValue.freezeTime > 0)
      {
         _level0.effect_mc.hitFreeze(this.hurtValue.freezeTime,this,this.hurtValue.slowTime);
      }
      _level0.hurter = this;
      this.delaySkill = "";
   }
   function checkHurt()
   {
      if(this.countCheck())
      {
         this.lifeObj.d_rate = 0.3;
         this.lifeControl(this.lifeObj);
         if(!this.isKO)
         {
            return undefined;
         }
      }
      if(!(this.hurtValue.hitPos == "down" && this.status_1 == "hold_u"))
      {
         if(!(this.hurtValue.hitPos == "up" && this.status_1 == "hold_d"))
         {
            if(this.hurtValue.hitPos != "all")
            {
               if(this.status_1 == "hold_u" || this.status_1 == "hold_d")
               {
                  var _loc2_ = this.hurtValue.freezeTime + this.hurtValue.freezeTime2;
                  if(_loc2_ == undefined)
                  {
                     _loc2_ = 6;
                  }
                  else if(_loc2_ < 2)
                  {
                     _loc2_ = 4;
                  }
                  else if(_loc2_ < 6)
                  {
                     _loc2_ = 6;
                  }
                  else if(_loc2_ > 8)
                  {
                     _loc2_ = 8;
                  }
                  this.do_holdFreeze(_loc2_);
                  this.hurtBack();
                  if(this.burst_defend)
                  {
                     return undefined;
                  }
                  this.lifeObj.d_rate = 0.05;
                  this.lifeControl(this.lifeObj);
                  if(this.isKO)
                  {
                     this.hurtValue.hurtAway = "hurt3";
                     this.hurtValue.end_status = "getup2";
                     this.hurtValue.Vx = 16;
                     this.hurtValue.Vy = 30;
                     this.toStatus(this.hurtValue.hurtAway);
                     this.mc.gotoAndPlay(1);
                     this.hurtAway();
                  }
                  return undefined;
               }
            }
         }
      }
      if(this.opp.burst_mode == "power")
      {
         this.lifeObj.d_rate = this.hurtValue.d_rate * 1.1;
      }
      else
      {
         this.lifeObj.d_rate = this.hurtValue.d_rate;
      }
      this.lifeControl(this.lifeObj);
      this.powerObj.inc = 4 * this.hurtValue.d_rate;
      this.powerObj.action = "inc";
      this.powerControl(this.powerObj);
      this.status_3 = "hurt";
      if(this.dir == this.opp.dir)
      {
         if(this.dir == 1)
         {
            this.chageSide2();
         }
         else
         {
            this.chageSide1();
         }
      }
      this.hurtStatus();
      this.mc.hitSkillName = this.opp.status_1;
      if(this.checkTouch_stop)
      {
         this.checkTouch_stop = false;
         this.bodyTouch();
      }
      if(Math.random() < 0.1)
      {
         var _loc4_ = this.hurtSoundArray.length;
         var _loc3_ = int(Math.random() * _loc4_);
         var _loc5_ = this.hurtSoundArray[_loc3_];
         _loc5_.start();
      }
   }
   function hurtStatus()
   {
      delete this.onEnterFrame;
      if(this.hurtValue.hurtBack != "")
      {
         if(this.isKO)
         {
            this.hurtValue.hurtAway = "hurt3";
            this.hurtValue.end_status = "getup2";
            this.hurtValue.Vx = 16;
            this.hurtValue.Vy = 30;
            this.toStatus(this.hurtValue.hurtAway);
            this.mc.gotoAndPlay(1);
            this.hurtAway();
         }
         else if(this.status_2 == "air")
         {
            this.toStatus(this.hurtValue.hurtAway);
            this.mc.gotoAndPlay(this.hurtValue.flag);
            if(this.hurtValue.hurtAway == "hurt1" || this.hurtValue.hurtAway == "hurt2")
            {
               this._y = this.land_Y;
               this.status_2 = "land";
               this.hurtBack();
            }
            else
            {
               if(this.hurtValue.Vy == 0 || this.hurtValue.Vy == undefined)
               {
                  this.hurtValue.Vy = 30;
               }
               this.hurtAway();
            }
         }
         else
         {
            this.toStatus(this.hurtValue.hurtBack);
            this.mc.gotoAndPlay(this.hurtValue.flag);
            this.hurtBack();
         }
      }
      else if(this.hurtValue.hurtBack == "" && this.hurtValue.hurtAway != "")
      {
         if(this.isKO && this.hurtValue.hurtAway == "hurt6")
         {
            this.hurtValue.hurtAway = "hurt3";
         }
         this.toStatus(this.hurtValue.hurtAway);
         this.mc.gotoAndPlay(this.hurtValue.flag);
         this.hurtAway();
      }
      else
      {
         this.toStatus(this.hurtValue.hurtBack);
         this.mc.gotoAndPlay(this.hurtValue.flag);
         this.hurtBack();
      }
   }
   function hitFire()
   {
      var _loc2_ = this.hitValue.hitType;
      var hitFire_x = this.opp._x;
      var hitFire_y = Func.lToG(this.hitValue.area).y;
      if(this.opp.status_1 == "hold_u" || this.opp.status_1 == "hold_d")
      {
         _loc2_ = "hitFire2";
      }
      else if(this.opp.inCount)
      {
         _loc2_ = "hitFire2";
         _level0.showMsg("count",hitFire_x + _level0.char_mc._x);
      }
      else
      {
         var hitEff = this.hitValue.hitEff;
         var owner = this;
         var _loc3_ = function()
         {
            clearInterval(dd);
            owner.addEffect(hitEff,hitFire_x,hitFire_y);
         };
         if(this.hitValue.hitEff != "")
         {
            var dd = setInterval(_loc3_,40);
         }
         this.hitsObj.x = hitFire_x;
         _level0.showHits(this.hitsObj);
         this.hits = this.hits + 1;
         if(this.hitValue.hitShinning)
         {
            _level0.effect_mc.bgShineHit(2);
         }
         else if(this.superSkill || this.isBurstSkill)
         {
            _level0.effect_mc.bgShineHit(1);
         }
      }
      _level0.effect_mc.hitFire(_loc2_,hitFire_x,hitFire_y,this.dir);
   }
   function countStart(times, pos)
   {
      this.skillCount = true;
      this.countTimes = times;
      this.countPos = pos;
      if(this.countTimes == undefined)
      {
         this.countTimes = 1;
      }
   }
   function countEnd()
   {
      this.skillCount = false;
   }
   function countCheck()
   {
      if(this.dir != this.opp.dir)
      {
         if(this.skillCount)
         {
            if(this.countPos == "down" && this.hurtValue.hitPos == "up")
            {
               this.countEnd();
            }
            else if(this.countPos == "up" && this.hurtValue.hitPos == "down")
            {
               this.countEnd();
            }
            else if(this.opp.inCount)
            {
               this.countEnd();
            }
            else if(this.countTimes > 0)
            {
               this.hurtValue.freezeTime = this.hurtValue.freezeTime + 7;
               if(this.opp.superSkill || this.opp.isBurstSkill)
               {
                  this.inCount = false;
                  this.countEnd();
                  return false;
               }
               this.inCount = true;
               this.countTimes = this.countTimes - 1;
               return true;
            }
         }
         else if(this.burst_defend)
         {
            if(this.inCount)
            {
               this.countEnd();
            }
            else if(this.opp.inCount)
            {
               this.countEnd();
            }
            else if(this.hit_over() != true)
            {
               this.hurtValue.freezeTime = this.hurtValue.freezeTime + 7;
               if(this.opp.superSkill || this.opp.isBurstSkill)
               {
                  this.inCount = false;
                  this.countEnd();
                  return false;
               }
               this.inCount = true;
               this.powerObj.action = "burstdec";
               this.powerObj.decNum = 20;
               this.powerControl(this.powerObj);
               this.changeColorSelf("white",30);
               return true;
            }
         }
      }
      this.countTimes = 0;
      this.inCount = false;
   }
   function powerBurst()
   {
      this.inBurst = true;
      this.powerObj.action = "burst";
      this.powerControl(this.powerObj);
   }
   function burstEff()
   {
      if(this.burst_mode != "attack")
      {
         if(this.burst_mode == "defend")
         {
            this.burst_defend = true;
         }
      }
   }
   function superCancle()
   {
      if(this.inBurst && this.burst_mode == "attack")
      {
         return true;
      }
   }
   function burst_end()
   {
      this.inBurst = false;
      this.inCount = false;
      this.burst_defend = false;
      this.burst_mode = "";
   }
   function holdCount()
   {
      if(this.heavyHit() == false)
      {
         return undefined;
      }
      this.powerObj.action = "burstdec";
      this.powerObj.decNum = _level0.power_holdCounter;
      this.powerControl(this.powerObj);
      this.changeColorSelf("white",30);
   }
   function isHitEnd()
   {
      var _loc2_ = this.comboClass.skill_over[this.status_1];
      if(_loc2_ == undefined)
      {
         if(this.status_3 == "attack" && this.mc._currentframe > this.mc._totalframes - 4)
         {
            return true;
         }
         return false;
      }
      if(this.mc._currentframe > _loc2_)
      {
         return true;
      }
      return false;
   }
   function hit_over()
   {
      if(this.status_3 != "attack")
      {
         return true;
      }
      _level0.out("hit_over   over_f:" + over_f + "   mc._currentframe:" + this.mc._currentframe + "   mc._totalframes:" + this.mc._totalframes);
      if(this.mc.area)
      {
         return false;
      }
      var over_f = this.comboClass.skill_over[this.status_1];
      if(this.mc._currentframe > this.mc._totalframes - 4)
      {
         return true;
      }
      if(isNaN(over_f))
      {
         return false;
      }
      if(this.mc._currentframe > over_f)
      {
         return true;
      }
      return false;
   }
   function freeze_frame()
   {
      if(this.status_3 != "attack")
      {
         return 0;
      }
      var _loc3_ = this.mc._currentframe;
      var _loc2_ = this.mc._totalframes;
      var _loc4_ = _loc2_ - _loc3_;
      return _loc4_;
   }
   function superStart(superType, time_f, dx, dy, faceName, dir)
   {
      _level0.effect_mc.superStart(superType,time_f,dx,dy,faceName,dir);
   }
   function superCheck(action)
   {
      this.superSkill = false;
      if(this.superList[action] == 1)
      {
         if(this.superPoint > 0)
         {
            this.superSkill = true;
            this.powerDecType = "super";
            return true;
         }
         if(this.inBurst)
         {
            this.superSkill = true;
            this.powerDecType = "super";
            return true;
         }
         return false;
      }
      return "notSpuerSkill";
   }
   function burstCheck(action)
   {
      this.isBurstSkill = false;
      if(this.burstList[action] == 1)
      {
         if(this.inBurst)
         {
            this.isBurstSkill = true;
            this.powerDecType = "burst";
            return true;
         }
         return false;
      }
   }
   function skillSuperCheck(action)
   {
      var _loc2_ = this.skillSuperMapping[action];
      if(_loc2_ != undefined)
      {
         return _loc2_;
      }
      return "";
   }
   function powerDec()
   {
      var _loc2_ = this.powerDecType;
      if(this.inBurst && _loc2_ == "burst")
      {
         this.powerObj.action = "burstdec";
         this.powerObj.decNum = this.power_skillBurst;
         this.powerControl(this.powerObj);
         this.powerDecType = "";
      }
      else if(this.inBurst && _loc2_ == "super")
      {
         this.powerObj.action = "burstdec";
         this.powerObj.decNum = this.power_skillSuper;
         this.powerControl(this.powerObj);
         this.powerDecType = "";
      }
      else if(!this.inBurst && _loc2_ == "super")
      {
         this.powerObj.action = "dec";
         this.powerControl(this.powerObj);
         this.powerDecType = "";
      }
   }
   function powerDec2()
   {
      var _loc2_ = this.powerDecType2;
      if(this.inBurst && _loc2_ == "cancle")
      {
         this.powerObj.action = "burstdec";
         this.powerObj.decNum = this.power_cancle;
         this.powerControl(this.powerObj);
         this.changeColorSelf("white",30);
         this.powerDecType2 = "";
      }
   }
   function addSkill(s_name, src, Vx, Va)
   {
      var _loc4_ = this.skill_loader.getNextHighestDepth();
      var _loc2_ = this.skill_loader.attachMovie(s_name,"skill" + _loc4_,_loc4_);
      var _loc3_ = Func.lToG(src);
      if(_loc3_.x > this.stage_with)
      {
         _loc3_.x = this.stage_with;
      }
      else if(_loc3_.x < 0)
      {
         _loc3_.x = 0;
      }
      this.skill_loader.globalToLocal(_loc3_);
      _loc2_._x = _loc3_.x;
      _loc2_._y = _loc3_.y;
      _loc2_.dir = this.dir;
      _loc2_._xscale = this.dir * this.scale;
      _loc2_.role = this;
      _loc2_.opp = this.opp;
      _loc2_.init();
   }
   function addSkill2(s_name, src, Vx, Va)
   {
      var _loc4_ = this.skill_loader.getNextHighestDepth();
      var _loc3_ = this.skill_loader.attachMovie(s_name,"skill" + _loc4_,_loc4_);
      var _loc2_ = Func.lToG(src);
      if(_loc2_.x > this.stage_with)
      {
         _loc2_.x = this.stage_with;
      }
      else if(_loc2_.x < 0)
      {
         _loc2_.x = 0;
      }
      this.skill_loader.globalToLocal(_loc2_);
      _loc3_._x = _loc2_.x;
      _loc3_._y = _loc2_.y;
      _loc3_.dir = this.dir;
      _loc3_._xscale = this.dir * this.scale;
      _loc3_.opp = this.opp;
      _loc3_.init();
   }
   function addSkill_m(s_name, src, posx, posy)
   {
      var _loc4_ = this.skill_loader.getNextHighestDepth();
      var _loc2_ = this.skill_loader.attachMovie(s_name,"skill" + _loc4_,_loc4_);
      var _loc3_ = new Object();
      _loc3_.x = src._x;
      _loc3_.y = src._y;
      src._parent.localToGlobal(_loc3_);
      this.skill_loader.globalToLocal(_loc3_);
      _loc2_._x = posx;
      _loc2_._y = _loc3_.y;
      _loc2_.dir = this.dir;
      _loc2_._xscale = this.dir * this.scale;
      _loc2_.opp = this.opp;
      _loc2_.init();
      if(this.char_mc._x + _loc2_._x > this.stage_with)
      {
         _loc2_._x = this.stage_with - this.char_mc._x;
      }
      else if(this.char_mc._x + _loc2_._x < 0)
      {
         _loc2_._x = - this.char_mc._x;
      }
   }
   function addEffect(e_name, e_x, e_y)
   {
      var _loc3_ = this.skill_loader.getNextHighestDepth();
      var _loc2_ = this.skill_loader.attachMovie(e_name,"effect" + _loc3_,_loc3_);
      _loc2_._x = e_x;
      _loc2_._y = e_y;
      _loc2_.dir = this.dir;
      _loc2_._xscale = this.dir * this.scale;
   }
   function addShadow(shadow_name, src, start_alpha, end_alpha, d_alpha, _rb, _gb, _bb)
   {
      if(this.shadow_mc instanceof MovieClip != true)
      {
         this.shadow_mc = this._parent.createEmptyMovieClip("shadow_mc",this.depth_shadow);
      }
      trace("shadow_mc: " + this.shadow_mc);
      var _loc3_ = this.shadow_mc.getNextHighestDepth();
      var _loc2_ = this.shadow_mc.attachMovie(shadow_name,"shadow_" + _loc3_,_loc3_);
      trace("shadow: " + _loc2_);
      _loc2_._x = src._x * this.dir + this._x;
      _loc2_._y = src._y + this._y;
      _loc2_.colorObj = new Color(_loc2_);
      var _loc4_ = {ra:"100",rb:_rb,ga:"100",gb:_gb,ba:"100",bb:_bb,aa:"100",ab:"0"};
      _loc2_.colorObj.setTransform(_loc4_);
      _loc2_._alpha = start_alpha;
      _loc2_.end_alpha = end_alpha;
      _loc2_.d_alpha = d_alpha;
      _loc2_._xscale = this.dir * this.scale;
      var onwer = this;
      _loc2_.onEnterFrame = function()
      {
         if(_level0.inPause)
         {
            return undefined;
         }
         if(onwer.inFreeze)
         {
            return undefined;
         }
         this._alpha = this._alpha - this.d_alpha;
         if(this._alpha < this.end_alpha)
         {
            this.removeMovieClip();
         }
      };
   }
   function catchFire(e_name, e_x, e_y, dir)
   {
   }
   function start_move_Obj(Obj)
   {
      var _loc2_ = Obj;
      var owner = this;
      _loc2_.onEnterFrame = function()
      {
         if(_level0.inPause)
         {
            return undefined;
         }
         if(owner.inFreeze)
         {
            return undefined;
         }
         this._x = this._x + this.dir * this.Vx;
         this.Vx = this.Vx - this.Va;
         if(this.Vx <= 0 || this._x > 700 || this._x < -50)
         {
            this.gotoAndPlay("end");
            delete this.onEnterFrame;
         }
      };
   }
   function skill_filter(action)
   {
      for(var _loc3_ in this.record_filter_array)
      {
         if(action == this.record_filter_array[_loc3_])
         {
            return true;
         }
      }
   }
   function check_countType(s)
   {
      for(var _loc3_ in this.record_skill_totalFrame)
      {
         if(String(s) == this.record_skill_totalFrame[_loc3_])
         {
            return true;
         }
      }
      for(var _loc3_ in this.record_action_totalFrame)
      {
         if(String(s) == this.record_action_totalFrame[_loc3_])
         {
            return true;
         }
      }
      if(String(s).indexOf("jumpSkill_") != -1)
      {
         return true;
      }
   }
   function set_combo()
   {
      var _loc2_ = _level0.comboRecord_array[_level0.comboIndex];
      this.record_skill = _loc2_.data[0];
      this.record_frame = _loc2_.data[1];
      this.count_type = _loc2_.data[2];
   }
   function skill_record_ready()
   {
      this.inRecord = true;
      this.record_frame = [];
      this.record_skill = [];
      this.count_type = [];
   }
   function skill_record(skill)
   {
      if(this.record_skill.length == 0)
      {
         this.record_skill.push(skill);
         this.count_type.push("total");
         this.record_frame.push(1);
      }
      else
      {
         this.record_skill.push(skill);
         if(this.check_countType(this.status_1))
         {
            this.count_type.push("total");
            this.record_frame.push(this.frameCount_temp - this.frameOffset);
         }
         else
         {
            this.count_type.push("current");
            this.record_frame.push(this.mc._currentframe - 1);
         }
      }
      this.frameCount_temp = 1;
      var owner = this;
      this.replay_timer.onEnterFrame = function()
      {
         if(owner.inFreeze)
         {
            return undefined;
         }
         owner.frameCount_temp = owner.frameCount_temp + 1;
      };
   }
   function skill_record_end(hits)
   {
      this.inRecord = false;
      delete this.replay_timer.onEnterFrame;
      if(this.record_skill.length == 0)
      {
         return undefined;
      }
      var _loc2_ = hits + " Combo";
      var _loc3_ = [this.record_skill,this.record_frame,this.count_type];
      _level0.combo_new({label:_loc2_,data:_loc3_});
   }
   function skill_replay_start()
   {
      trace("skill_replay_start: " + this.record_skill);
      this.inReplay = true;
      this.skillPonit = 0;
      this.toSkill(this.record_skill[this.skillPonit]);
      this.skillPonit = this.skillPonit + 1;
      this.skill_replay();
   }
   function skill_replay_end()
   {
      this.inReplay = false;
      delete this.replay_timer.onEnterFrame;
      this.powerObj.action = "burstdec";
      this.powerObj.decNum = 300;
      this.powerControl(this.powerObj);
   }
   function skill_replay()
   {
      var skill = this.record_skill[this.skillPonit];
      var frame = this.record_frame[this.skillPonit];
      var _loc2_ = this.count_type[this.skillPonit];
      var owner = this;
      if(this.skillPonit == this.record_skill.length)
      {
         this.skill_replay_end();
         return undefined;
      }
      _level0.out("下个动作：" + skill);
      _level0.out("开始帧数：" + frame);
      _level0.out("动作类型：" + _loc2_);
      _level0.out("当前动作：" + this.status_1);
      if(_loc2_ == "total")
      {
         this.frameCount_temp = 1;
         this.replay_timer.onEnterFrame = function()
         {
            if(owner.inFreeze)
            {
               return undefined;
            }
            if(owner.status_3 == "hurt")
            {
               owner.skill_replay_end();
            }
            owner.frameCount_temp = owner.frameCount_temp + 1;
            if(owner.frameCount_temp > frame)
            {
               owner.toSkill(skill,true);
               owner.skillPonit = owner.skillPonit + 1;
               owner.skill_replay();
            }
         };
         return undefined;
      }
      this.replay_timer.onEnterFrame = function()
      {
         if(owner.inFreeze)
         {
            return undefined;
         }
         if(owner.status_3 == "hurt")
         {
            owner.skill_replay_end();
         }
         if(owner.mc._currentframe > frame)
         {
            if(owner.status_1 == "jump" || owner.status_1 == "jump_b" || owner.status_1 == "jump_f")
            {
               owner.jumpSkill(skill);
            }
            else
            {
               owner.toSkill(skill,true);
            }
            owner.skillPonit = owner.skillPonit + 1;
            owner.skill_replay();
         }
      };
      this.mc.onUnload = function()
      {
      };
   }
   function toGlobal(obj1, obj2)
   {
      var _loc1_ = new Object();
      _loc1_.x = obj1._x;
      _loc1_.y = obj1._y;
      obj2.localToGlobal(_loc1_);
      return _loc1_;
   }
   function getMc(src)
   {
      for(var _loc3_ in src)
      {
         var _loc1_ = src[_loc3_];
         trace("mc::: " + _loc1_);
         if(_loc1_ instanceof MovieClip)
         {
            trace("src:::::::::::" + src);
            trace("mc:::::::::::: " + _loc1_);
            return _loc1_;
         }
      }
   }
   function easySkillMapping()
   {
   }
   function soundInit()
   {
      this.sound_mc = _root.createEmptyMovieClip("sound_mc",1100);
      this.run_snd = new Sound(this.sound_mc);
      this.run_snd.attachSound("run_snd");
      this.hurt1_snd = new Sound(this.sound_mc);
      this.hurt1_snd.attachSound("hurt1_snd_" + this.roleName);
      this.hurt2_snd = new Sound(this.sound_mc);
      this.hurt2_snd.attachSound("hurt2_snd_" + this.roleName);
      this.lose_snd = new Sound(this.sound_mc);
      this.lose_snd.attachSound("lose_snd_" + this.roleName);
      this.hurtSoundArray = new Array();
      this.hurtSoundArray = [this.hurt1_snd,this.hurt2_snd];
   }
   function stageInf(sw, emax, emin, x, y)
   {
      this.stage_with = sw;
      this.egde_max = emax;
      this.egde_min = emin;
      this.startX = x;
      this.startY = y;
      this._x = x;
      this._y = y;
      this.land_Y = y;
      this.checkSide_abs();
      this.soundInit();
      _level0.out(this._x + "=======" + this._y);
   }
   function stageVar(l_max, s_Point, p_max, opponent, burst)
   {
      if(this._roleName != this.roleName)
      {
      }
      this.life_max = l_max;
      this.life = this.life_max;
      this.superPoint = s_Point;
      this.powerPoint_max = p_max;
      this.opp = opponent;
      this.burst_mode = burst;
      this.power_skillSuper = _level0.power_skillSuper;
      this.power_skillBurst = _level0.power_skillBurst;
   }
   function start()
   {
      this.mc.play();
   }
   function reset()
   {
      this.isKO = false;
      this.KO_checked = false;
      this.onEgde = false;
      this.redBlood = false;
      this.life = this.life_max;
      this.gotoAndStop("ready");
      this._x = this.startX;
      this._y = this.startY;
      this.checkSide_abs();
   }
   function noAct()
   {
   }
   function start_control()
   {
      this.control = true;
      this.toSkill = this.toSkill_temp;
      this.toAction = this.toAction_temp;
      this.toStatus = this.toStatus_temp;
      this.toStatus_switch("stand");
   }
   function end_control(action)
   {
      this.toStatus_temp(action);
   }
   function do_end()
   {
      this.control = false;
      this.toSkill = this.noAct;
      this.toAction = this.noAct;
      this.toStatus = this.end_control;
      if(this.status_1 == "walk_f" || this.status_1 == "walk_b" || this.status_1 == "dash_f" || this.status_1 == "squat")
      {
         delete this.onEnterFrame;
         this.status_1 = "stand";
         this.gotoAndStop("stand");
      }
   }
   function do_KO()
   {
      this.isKO = true;
      if(this.status_4 == "hold")
      {
         this.hurtValue.hurtAway = "hurt3";
         this.hurtValue.end_status = "getup2";
         this.hurtValue.Vx = 16;
         this.hurtValue.Vy = 30;
         this.toStatus(this.hurtValue.hurtAway);
         this.mc.gotoAndPlay(1);
         this.hurtAway();
      }
      var _loc2_ = this.attachMovie("ko_snd_" + this.roleName,"ko_snd",12545);
   }
   function do_win()
   {
      var _loc2_ = int(Math.random() * this.winPoseArray.length);
      var _loc3_ = this.winPoseArray[_loc2_];
      this.gotoAndStop(_loc3_);
      this.status_1 = "end";
      this.opp.showHits_end();
   }
   function do_lose()
   {
      this.onEnterFrame = function()
      {
         if(_level0.inPause)
         {
            return undefined;
         }
         if(this.status_2 == "land" && this.status_3 == "normal" && this.status_4 == "normal")
         {
            this.gotoAndStop("lose");
            this.status_1 = "lose";
            delete this.onEnterFrame;
         }
      };
   }
   function checkSide_abs()
   {
      if(this._x < this.opp._x - this.side_offset)
      {
         this._xscale = this.scale;
         this.dir = 1;
         this.newKeyControl.dir = 1;
      }
      else if(this._x > this.opp._x + this.side_offset)
      {
         this._xscale = - this.scale;
         this.dir = -1;
         this.newKeyControl.dir = -1;
      }
   }
   function checkSide()
   {
      if(this.status_2 == "toLand")
      {
         this.chageSide_arg();
         return undefined;
      }
      if(this.status_1 == "roll_f")
      {
         this.chageSide_arg();
         return undefined;
      }
      if(this.status_2 != "land")
      {
         return undefined;
      }
      if(this.status_3 != "normal")
      {
         return undefined;
      }
      if(this.status_1 == "dash_f")
      {
         return undefined;
      }
      if(this._x < this.opp._x - this.side_offset)
      {
         this.chageSide1();
      }
      else if(this._x > this.opp._x + this.side_offset)
      {
         this.chageSide2();
      }
   }
   function chageSide_arg()
   {
      if(this._x < this.opp._x - this.side_offset && this._xscale < 0)
      {
         this.newKeyControl.dir = 1;
      }
      else if(this._x > this.opp._x + this.side_offset && this._xscale > 0)
      {
         this.newKeyControl.dir = -1;
      }
   }
   function chageSide1()
   {
      this._xscale = this.scale;
      this.dir = 1;
      this.newKeyControl.dir = 1;
   }
   function chageSide2()
   {
      this._xscale = - this.scale;
      this.dir = -1;
      this.newKeyControl.dir = -1;
   }
   function lifeControl(obj)
   {
      _level0.lifeControl(obj);
   }
   function powerControl(obj)
   {
      _level0.powerControl(obj);
   }
   function showHits_end()
   {
      if(this.opp.hits == 0)
      {
         return undefined;
      }
      _level0.showHits_end(this.hitsObj);
      if(this.opp.inRecord)
      {
         this.opp.skill_record_end(this.opp.hits);
      }
      if(this.opp.hits > 0)
      {
         this.opp.hitsArray.push(this.opp.hits);
      }
      this.opp.hits = 0;
   }
   function toSkill(action, cancle)
   {
      if(action == undefined)
      {
         return undefined;
      }
      if(_level0.inPause)
      {
         return undefined;
      }
      this.powerDecType = "";
      if(this.status_3 == "hurt")
      {
         return undefined;
      }
      if(this.status_3 == "down")
      {
         if(this.delayCheck())
         {
            this.skill_delay(action);
         }
         return undefined;
      }
      if(this.holdFreeze)
      {
         if(this.burst_defend && action == "heavyHit")
         {
            this.holdCount();
         }
         else
         {
            this.skill_delay(action);
         }
         return undefined;
      }
      var _loc3_ = this.superCheck(action);
      if(_loc3_ == false)
      {
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
      else if(this.superMaxList[action] == 1)
      {
         this.powerDecType = "super";
      }
      if(this.burstCheck(action) == false)
      {
         return undefined;
      }
      if((this.status_3 == "attack" || this.status_2 == "toLand") && !cancle)
      {
         if(this.comboClass.check_combo(this.status_1,action))
         {
            return true;
         }
         if(this.delayCheck())
         {
            this.skill_delay(action);
            return undefined;
         }
         return undefined;
      }
      if(this.delayCheck())
      {
         this.skill_delay(action);
         return undefined;
      }
      if(this.status_3 == "roll")
      {
         return undefined;
      }
      if(this.skill_start(action))
      {
         this.opp.checkDefend();
         return true;
      }
      return undefined;
   }
   function skill_start(action)
   {
      if(this[action] != undefined)
      {
         if(this.toStatus(action))
         {
            this.powerDec();
            this.powerDec2();
            this.skill_last = this.skill_last0;
            this.skill_last0 = action;
            return true;
         }
         this.powerDecType = "";
         this.powerDecType2 = "";
      }
      else if(this.status_2 == "land" && (this.status_3 == "normal" || this.status_3 == "attack"))
      {
         if(this.toStatus(action))
         {
            this.powerDec();
            this.powerDec2();
            this.status_3 = "attack";
            this.skill_last = this.skill_last0;
            this.skill_last0 = action;
            return true;
         }
         this.powerDecType = "";
         this.powerDecType2 = "";
      }
   }
   function switchSkill(action)
   {
      this.toSkill(action,true);
   }
   function toAction(action)
   {
      if(_level0.inPause)
      {
         return undefined;
      }
      this.toStatus(action);
      this.opp.actionDefend(action);
   }
   function keyUp(obj)
   {
      var _loc1_ = obj.upKey;
   }
   function statusClear()
   {
      this.status_1 = "stand";
      this.status_2 = "land";
      this.status_3 = "normal";
      this.status_4 = "normal";
      this.status_5 = "normal";
      this.holdFreeze = false;
      this.inCount = false;
      this.onHit = false;
      this.checkTouch_stop = false;
      this.superSkill = false;
      this.isBurstSkill = false;
      this.run_snd.stop();
   }
   function toStatus(action)
   {
      if(_level0.inPause)
      {
         return undefined;
      }
      if(_level0.inFreeze)
      {
         this.skill_delay(action);
         this.mc.stop();
         return undefined;
      }
      if(this[action] != undefined)
      {
         if(this.action() == false)
         {
            return false;
         }
      }
      else
      {
         this.status_1 = action;
         this.gotoAndStop(action);
      }
      this.run_snd.stop();
      return true;
   }
   function toStatus_switch(act)
   {
      if(this.status_3 == "hurt")
      {
         return undefined;
      }
      var _loc2_ = act;
      this.statusClear();
      this.checkSide();
      this.showHits_end();
      if(this.delaySkill != "")
      {
         this.toSkill(this.delaySkill);
         this.delaySkill = "";
         return undefined;
      }
      if(Key.isDown(this.u))
      {
         _loc2_ = "jump";
      }
      else if(Key.isDown(this.d))
      {
         _loc2_ = "squat";
      }
      else if(Key.isDown(this.f))
      {
         if(this.dir == 1)
         {
            _loc2_ = "walk_f";
         }
         else
         {
            if(this.opp.status_3 == "attack" || this.opp.hasObj())
            {
               this.hold_u();
               return undefined;
            }
            _loc2_ = "walk_b";
         }
      }
      else if(Key.isDown(this.b))
      {
         if(this.dir == 1)
         {
            if(this.opp.status_3 == "attack" || this.opp.hasObj())
            {
               this.hold_u();
               return undefined;
            }
            _loc2_ = "walk_b";
         }
         else
         {
            _loc2_ = "walk_f";
         }
      }
      else if(Key.isDown(this.p))
      {
         _loc2_ = "punch";
      }
      else if(Key.isDown(this.k))
      {
         _loc2_ = "kick";
      }
      this.toStatus(_loc2_);
   }
   function delayCheck()
   {
      var _loc2_ = this.input_pre[this.status_1];
      if(_loc2_ == undefined)
      {
         return false;
      }
      var _loc3_ = this.mc._currentframe;
      if(_loc3_ > _loc2_)
      {
         return true;
      }
   }
   function skill_delay(action)
   {
      this.delaySkill = action;
   }
   function skill_restart()
   {
      if(this.delaySkill != "")
      {
         if(this.toStatus(this.delaySkill))
         {
            this.powerDec();
            this.powerDec2();
         }
         else
         {
            this.powerDecType = "";
            this.powerDecType2 = "";
         }
         this.delaySkill = "";
      }
   }
   function shakeCheck()
   {
      _level0.shake_mc.shakeStart(this.hurtValue.shake);
   }
   function checkTouch(dv)
   {
      if(this.checkTouch_stop || this.opp.checkTouch_stop)
      {
         return undefined;
      }
      if(this.status_2 != "air" && this.opp.status_2 == "air")
      {
         return undefined;
      }
      if(this.status_3 == "roll" || this.opp.status_3 == "roll")
      {
         return undefined;
      }
      var _loc5_ = undefined;
      var _loc2_ = undefined;
      var _loc4_ = undefined;
      var _loc3_ = undefined;
      if(this._y > this.opp._y - 120)
      {
         _loc3_ = this.opp._x;
         _loc4_ = this._x + dv;
         if(this._xscale > 0)
         {
            if(_loc4_ > _loc3_ - this.opp_width2 && _loc4_ < _loc3_ + 10)
            {
               _loc5_ = _loc4_ - (_loc3_ - this.opp_width2);
               if(this.opp.onEgde)
               {
                  _loc2_ = _loc5_;
               }
               else
               {
                  _loc2_ = int(_loc5_ / 2);
               }
               this.do_move2(- _loc2_);
               this.opp.do_move2(_loc2_);
               return true;
            }
            if(_loc4_ >= _loc3_ + 10 && _loc4_ < _loc3_ + this.opp_width2)
            {
               _loc5_ = _loc4_ - (_loc3_ + this.opp_width2);
               if(this.opp.onEgde)
               {
                  _loc2_ = _loc5_;
               }
               else
               {
                  _loc2_ = int(_loc5_ / 2);
               }
               this.do_move2(- _loc2_);
               this.opp.do_move2(_loc2_);
               return true;
            }
         }
         else if(this._xscale < 0)
         {
            if(_loc4_ >= _loc3_ - 10 && _loc4_ < _loc3_ + this.opp_width2)
            {
               _loc5_ = _loc4_ - (_loc3_ + this.opp_width2);
               if(this.opp.onEgde)
               {
                  _loc2_ = _loc5_;
               }
               else
               {
                  _loc2_ = int(_loc5_ / 2);
               }
               this.do_move2(- _loc2_);
               this.opp.do_move2(_loc2_);
               return true;
            }
            if(_loc4_ > _loc3_ - this.opp_width2 && _loc4_ < _loc3_ - 10)
            {
               _loc5_ = _loc4_ - (_loc3_ - this.opp_width2);
               if(this.opp.onEgde)
               {
                  _loc2_ = _loc5_;
               }
               else
               {
                  _loc2_ = int(_loc5_ / 2);
               }
               this.do_move2(- _loc2_);
               this.opp.do_move2(_loc2_);
               return true;
            }
         }
      }
   }
   function bodyTouch()
   {
      var _loc2_ = this.checkTouch2();
      if(_loc2_ != undefined)
      {
         this.do_bodyTouch(_loc2_);
      }
   }
   function do_bodyTouch(v)
   {
      var Vx = v;
      var owner = this;
      this.onEnterFrame = function()
      {
         if(_level0.inPause)
         {
            return undefined;
         }
         Vx = int(Vx / 2);
         owner.do_move2(Vx);
         if(Vx == 0)
         {
            delete this.onEnterFrame;
         }
      };
   }
   function checkTouch2()
   {
      var _loc2_ = this._x - this.opp._x;
      var _loc3_ = undefined;
      if(_loc2_ > -50 && _loc2_ < 0)
      {
         _loc3_ = -50 - _loc2_;
         return _loc3_;
      }
      if(_loc2_ < 50 && _loc2_ >= 0)
      {
         _loc3_ = 50 - _loc2_;
         return _loc3_;
      }
   }
   function egdecheck(v)
   {
      var _loc3_ = _level0.char_mc._x + this._x;
      if(_loc3_ + v >= this.egde_max && v > 0)
      {
         this.onEgde = true;
         this.egde = 1;
         return true;
      }
      if(_loc3_ + v <= this.egde_min && v < 0)
      {
         this.onEgde = true;
         this.egde = -1;
         return true;
      }
      this.onEgde = false;
      this.egde = 0;
   }
   function colorChange(cc)
   {
      var _loc3_ = new Color(this);
      var _loc2_ = this.colorObj[cc];
      _loc3_.setTransform(_loc2_);
   }
   function colorNormal()
   {
      if(_level0.inPause)
      {
         clearInterval(this.color_timer2);
         this.color_timer2 = setInterval(this,"colorNormal",100);
         return undefined;
      }
      var _loc3_ = new Color(this);
      var _loc2_ = this.colorObj.normal;
      _loc3_.setTransform(_loc2_);
      clearInterval(this.color_timer2);
   }
   function changeColorSelf(cc, time_f)
   {
      clearInterval(this.color_timer2);
      var _loc3_ = new Color(this);
      var _loc2_ = this.colorObj[cc];
      _loc3_.setTransform(_loc2_);
      this.color_timer2 = setInterval(this,"backColorSelf",time_f);
   }
   function changeColor(cc, time_f)
   {
      this.opp.changeColorSelf(cc,time_f);
   }
   function backColorSelf()
   {
      if(_level0.inPause)
      {
         clearInterval(this.color_timer2);
         this.color_timer2 = setInterval(this,"backColorSelf",100);
         return undefined;
      }
      var _loc3_ = new Color(this);
      var _loc2_ = this.colorObj.normal;
      _loc3_.setTransform(_loc2_);
      clearInterval(this.color_timer2);
   }
   function backColor()
   {
      var _loc3_ = new Color(this.opp);
      var _loc2_ = this.colorObj.normal;
      _loc3_.setTransform(_loc2_);
      clearInterval(this.color_timer);
   }
   function topLayer()
   {
      if(this._parent.getDepth() < this.opp._parent.getDepth())
      {
         this._parent.swapDepths(this.opp._parent);
      }
   }
   function hasObj()
   {
      if(this.skill_loader.getNextHighestDepth() > 0)
      {
         return true;
      }
      return false;
   }
   function getObj()
   {
      var _loc3_ = this.skill_loader.getNextHighestDepth() - 1;
      if(_loc3_ < 0)
      {
         return undefined;
      }
      var _loc2_ = this.skill_loader["skill" + _loc3_];
      if(!(_loc2_ instanceof MovieClip))
      {
         return undefined;
      }
      return _loc2_;
   }
   function getObjNum()
   {
      var _loc2_ = this.skill_loader.getNextHighestDepth();
      return _loc2_;
   }
   function getObjDis()
   {
      var _loc3_ = this.skill_loader.getNextHighestDepth() - 1;
      if(_loc3_ < 0)
      {
         return undefined;
      }
      var _loc2_ = this.skill_loader["skill" + _loc3_]._x;
      if(_loc2_ == undefined)
      {
         return undefined;
      }
      return Math.abs(_loc2_ - this.opp._x);
   }
   function to_PK_l()
   {
      if(this.dir == 1)
      {
         if(Key.isDown(this.f))
         {
            this.toAction("roll_f");
         }
         else if(Key.isDown(this.b))
         {
            this.toAction("roll_b");
         }
         else
         {
            this.toAction("roll_f");
         }
      }
      else if(this.dir == -1)
      {
         if(Key.isDown(this.f))
         {
            this.toAction("roll_b");
         }
         else if(Key.isDown(this.b))
         {
            this.toAction("roll_f");
         }
         else
         {
            this.toAction("roll_f");
         }
      }
   }
   function to_PK()
   {
      if(this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b")
      {
         this.jumpSkill("heavyHit");
         return undefined;
      }
      this.toSkill("heavyHit");
   }
   function to_key_s()
   {
      if(this.mode_key == "easy" && this.inBurst)
      {
         if(Key.isDown(this.f) && this.dir == 1)
         {
            this.toSkill(this.skillObj.busrt_a);
         }
         else if(Key.isDown(this.b) && this.dir == -1)
         {
            this.toSkill(this.skillObj.busrt_a);
         }
         else if(Key.isDown(this.f) && this.dir == -1)
         {
            this.toSkill(this.skillObj.busrt_d);
         }
         else if(Key.isDown(this.b) && this.dir == 1)
         {
            this.toSkill(this.skillObj.busrt_d);
         }
         else
         {
            this.toSkill(this.skillObj.busrt_a);
         }
      }
      else if(Key.isDown(this.f) && this.dir == 1)
      {
         this.toAction("burst_a");
      }
      else if(Key.isDown(this.b) && this.dir == -1)
      {
         this.toAction("burst_a");
      }
      else if(Key.isDown(this.f) && this.dir == -1)
      {
         this.toAction("burst_d");
      }
      else if(Key.isDown(this.b) && this.dir == 1)
      {
         this.toAction("burst_d");
      }
      else if(Key.isDown(this.d))
      {
         this.toAction("burst_p");
      }
      else
      {
         this.toAction("burst_p");
      }
   }
   function to_key_s2()
   {
      if(this.dir == 1)
      {
         if(Key.isDown(this.f))
         {
            this.toAction("roll_f");
         }
         else if(Key.isDown(this.b))
         {
            this.toAction("roll_b");
         }
         else
         {
            this.toAction("roll_f");
         }
      }
      else if(this.dir == -1)
      {
         if(Key.isDown(this.f))
         {
            this.toAction("roll_b");
         }
         else if(Key.isDown(this.b))
         {
            this.toAction("roll_f");
         }
         else
         {
            this.toAction("roll_f");
         }
      }
   }
   function to_kick()
   {
   }
   function to_kick_l()
   {
   }
   function to_punch()
   {
   }
   function to_punch_l()
   {
   }
   function to_double_f()
   {
      this.toAction("dash_f");
   }
   function to_double_b()
   {
      this.toAction("dash_b");
   }
   function to_double_d()
   {
   }
}
