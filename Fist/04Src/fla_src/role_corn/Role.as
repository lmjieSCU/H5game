class role_corn.Role extends MovieClip
{
    var lifeObj, powerObj, hitsObj, hitsArray, winPoseArray, skillObj, createEmptyMovieClip, freeze_timer, _parent, skill_loader, replay_timer, Vg, Va, colorObj, _to_PK, _to_PK_l, _to_key_s, _to_key_s2, _to_kick, _to_kick_l, _to_punch, _to_punch_l, _to_double_f, _to_double_b, _to_double_d, input_pre, gotoAndStop, Vwalk, Vx, opp, Vdash, Vy, mc, inBurst, burst_mode, land_Y, _y, status_end, Vjump_far, Vjump_y, f, b, Vjump_x, _x, superPoint, powerPoint_max, redBlood, burst_defend, inFreeze, d, hurtValue, onEgde, hitTest, onHit, egde_max, egde_min, _xscale, flyingObj, hitValue, isKO, hurtSoundArray, hits, superSkill, isBurstSkill, skillCount, countTimes, countPos, inCount, comboClass, superList, powerDecType, burstList, skillSuperMapping, powerDecType2, stage_with, scale, char_mc, shadow_mc, _alpha, d_alpha, end_alpha, removeMovieClip, gotoAndPlay, record_skill_totalFrame, record_skill, record_frame, count_type, skillPonit, sound_mc, run_snd, hurt1_snd, roleName, hurt2_snd, lose_snd, startX, startY, _roleName, life_max, life, toSkill_temp, toAction_temp, toStatus_temp, attachMovie, newKeyControl, superMaxList, skill_last0, skill_last, u, p, k, opp_width2, egde, color_timer2, color_timer, mode_key;
    function Role()
    {
        super();
        lifeObj = {target: this};
        powerObj = {target: this};
        hitsObj = {target: this};
        hitsArray = new Array();
        winPoseArray = new Array("end");
        skillObj = new Object();
        freeze_timer = this.createEmptyMovieClip("freeze_timer", 124);
        skill_loader = _parent.createEmptyMovieClip("skill_loader", 200);
        replay_timer = this.createEmptyMovieClip("replay_timer", 135);
        Vg = _level0.g;
        Va = 3;
        colorObj = new Object();
        colorObj.normal = {ra: "100", rb: "0", ga: "100", gb: "0", ba: "100", bb: "0", aa: "100", ab: "0"};
        colorObj.fire = {ra: "100", rb: "255", ga: "100", gb: "110", ba: "100", bb: "0", aa: "100", ab: "0"};
        colorObj.white = {ra: "100", rb: "255", ga: "100", gb: "255", ba: "100", bb: "255", aa: "100", ab: "255"};
        colorObj.fire_blue = {ra: "100", rb: "0", ga: "100", gb: "0", ba: "100", bb: "255", aa: "100", ab: "0"};
        colorObj.light1 = {ra: "-65", rb: "200", ga: "-65", gb: "200", ba: "100", bb: "255", aa: "100", ab: "0"};
        colorObj.light2 = {ra: "-65", rb: "200", ga: "-65", gb: "200", ba: "-100", bb: "255", aa: "100", ab: "0"};
        _to_PK = to_PK;
        _to_PK_l = to_PK_l;
        _to_key_s = to_key_s;
        _to_key_s2 = to_key_s2;
        _to_kick = to_kick;
        _to_kick_l = to_kick_l;
        _to_punch = to_punch;
        _to_punch_l = to_punch_l;
        _to_double_f = to_double_f;
        _to_double_b = to_double_b;
        _to_double_d = to_double_d;
        input_pre = new Object();
        input_pre.roll_f = 10;
        input_pre.roll_b = 10;
        input_pre.land = 0;
        input_pre.land2 = 0;
        input_pre.land3 = 0;
        input_pre.getup1 = 20;
        input_pre.getup2 = 20;
    } // End of the function
    function stand()
    {
        this.statusClear();
        this.gotoAndStop("stand");
    } // End of the function
    function walk_f()
    {
        if (status_2 != "land" || status_3 != "normal" || status_1 == "squat" || holdFreeze)
        {
            return (false);
        } // end if
        Vx = dir * Vwalk;
        this.gotoAndStop("walk_f");
        status_1 = "walk_f";
        this.move_walkRun();
    } // End of the function
    function walk_b()
    {
        if (holdFreeze)
        {
            return (false);
        } // end if
        if (status_1 == "squat" && opp.status_3 == "attack")
        {
            this.hold_d();
            return;
        } // end if
        if (status_2 != "land" || status_3 != "normal" || status_1 == "squat")
        {
            return (false);
        } // end if
        if (opp.status_3 == "attack")
        {
            this.hold_u();
            return;
        } // end if
        Vx = dir * -Vwalk;
        this.gotoAndStop("walk_b");
        status_1 = "walk_b";
        this.move_walkRun();
    } // End of the function
    function dash_f()
    {
        if (status_2 != "land" || status_3 != "normal" || status_1 == "squat" || holdFreeze)
        {
            return (false);
        } // end if
        Vx = dir * Vdash;
        this.gotoAndStop("dash_f");
        status_1 = "dash_f";
        this.move_walkRun();
    } // End of the function
    function dash_b()
    {
        if (status_2 != "land" || status_3 != "normal" || status_1 == "squat" || holdFreeze)
        {
            return (false);
        } // end if
        this.gotoAndStop("dash_b");
        status_1 = "dash_b";
        Vx = -26;
        Vy = 17;
    } // End of the function
    function roll_f()
    {
        if (status_1 == "getup1" || status_1 == "getup2")
        {
            if (mc._currentframe < 4 && status_5 == "hitDown")
            {
                this.roll_down();
                return (true);
            }
            else
            {
                return (false);
            } // end else if
        }
        else if (status_2 != "land")
        {
            return (false);
        }
        else if (inBurst && burst_mode == "attack" && holdFreeze)
        {
            this.changeColorSelf("white", 30);
            powerObj.action = "burstdec";
            powerObj.decNum = _level0.power_holdRoll;
            this.powerControl(powerObj);
        }
        else if (status_3 != "normal" || holdFreeze)
        {
            return (false);
        } // end else if
        if (status_1 == "dash_f")
        {
            Vx = 23;
        }
        else
        {
            Vx = 19;
        } // end else if
        status_1 = "roll_f";
        status_3 = "roll";
        this.gotoAndStop("roll_f");
    } // End of the function
    function roll_b()
    {
        if (status_1 == "getup1" || status_1 == "getup2")
        {
            if (mc._currentframe < 4 && status_5 == "hitDown")
            {
                this.roll_down();
                return (true);
            }
            else
            {
                return (false);
            } // end else if
        }
        else if (status_2 != "land")
        {
            return (false);
        }
        else if (inBurst && burst_mode == "attack" && holdFreeze)
        {
            this.changeColorSelf("white", 30);
            powerObj.action = "burstdec";
            powerObj.decNum = _level0.power_holdRoll;
            this.powerControl(powerObj);
        }
        else if (status_3 != "normal" || holdFreeze)
        {
            return (false);
        } // end else if
        Vx = -20;
        this.gotoAndStop("roll_b");
        status_1 = "roll_b";
        status_3 = "roll";
    } // End of the function
    function roll_down()
    {
        delete this.onEnterFrame;
        status_2 = "";
        _y = land_Y;
        Vx = -20;
        this.gotoAndStop("roll_b");
        status_1 = "roll_b";
        status_3 = "roll";
    } // End of the function
    function hold_u()
    {
        if (status_2 != "land" || status_3 != "normal")
        {
            return (false);
        } // end if
        this.gotoAndStop("hold_u");
        status_1 = "hold_u";
        status_4 = "hold";
        this.move_hold();
    } // End of the function
    function hold_d()
    {
        if (status_2 != "land" || status_3 != "normal")
        {
            return (false);
        } // end if
        this.gotoAndStop("hold_d");
        status_1 = "hold_d";
        status_4 = "hold";
        this.move_hold();
    } // End of the function
    function squat()
    {
        if (status_2 != "land" || status_3 != "normal" || holdFreeze)
        {
            return (false);
        } // end if
        if (this.check_hold_d())
        {
            return;
        } // end if
        status_end = "stand";
        this.move_squat();
        this.gotoAndStop("squat");
        status_1 = "squat";
    } // End of the function
    function jump()
    {
        if (status_1 == "dash_f")
        {
            if (status_2 != "land" || holdFreeze || status_3 != "normal")
            {
                return (false);
            } // end if
            status_2 = "air";
            Vx = Vjump_far;
            Vy = Vjump_y;
            this.gotoAndStop("jump_f");
            status_1 = "jump_f";
        }
        else if (Key.isDown(f))
        {
            if (dir == 1)
            {
                this.jump_f();
            }
            else
            {
                this.jump_b();
            } // end else if
        }
        else if (Key.isDown(b))
        {
            if (dir == -1)
            {
                this.jump_f();
            }
            else
            {
                this.jump_b();
            } // end else if
        }
        else
        {
            this.jump_u();
        } // end else if
    } // End of the function
    function jump_u()
    {
        if (status_2 != "land" || holdFreeze || status_3 != "normal")
        {
            return (false);
        } // end if
        status_2 = "air";
        if (inRecord)
        {
            this.skill_record("jump");
        } // end if
        Vx = 0;
        Vy = Vjump_y;
        this.gotoAndStop("jump");
        status_1 = "jump";
    } // End of the function
    function jump_f()
    {
        if (status_2 != "land" || holdFreeze || status_3 != "normal")
        {
            return (false);
        } // end if
        status_2 = "air";
        if (inRecord)
        {
            this.skill_record("jump_f");
        } // end if
        Vx = Vjump_x;
        Vy = Vjump_y;
        this.gotoAndStop("jump_f");
        status_1 = "jump_f";
    } // End of the function
    function jump_b()
    {
        if (status_2 != "land" || holdFreeze || status_3 != "normal")
        {
            return (false);
        } // end if
        status_2 = "air";
        if (inRecord)
        {
            this.skill_record("jump_b");
        } // end if
        Vx = -Vjump_x;
        Vy = Vjump_y;
        this.gotoAndStop("jump_b");
        status_1 = "jump_b";
    } // End of the function
    function land()
    {
        status_2 = "toLand";
        status_3 = "normal";
        status_1 = "land";
        this.gotoAndStop("land");
        _level0.effect_mc.downEff("down1", _x, _y, dir);
    } // End of the function
    function land2()
    {
        status_2 = "toLand";
        status_3 = "normal";
        status_1 = "land2";
        this.gotoAndStop("land2");
        _level0.effect_mc.downEff("down1", _x, _y, dir);
    } // End of the function
    function land3()
    {
        status_2 = "toLand";
        status_3 = "normal";
        status_1 = "land3";
        this.gotoAndStop("land3");
        _level0.effect_mc.downEff("down1", _x, _y, dir);
    } // End of the function
    function getup1()
    {
        status_2 = "toLand";
        status_3 = "down";
        status_1 = "getup1";
        this.gotoAndStop("getup1");
    } // End of the function
    function getup2()
    {
        status_2 = "toLand";
        status_3 = "down";
        status_1 = "getup2";
        this.gotoAndStop("getup2");
    } // End of the function
    function hurt3()
    {
        status_1 = "hurt3";
        status_3 = "hurt";
        status_2 = "air";
        this.gotoAndStop(status_1);
    } // End of the function
    function punch()
    {
        if (status_2 == "air")
        {
            return (false);
        } // end if
        status_1 = "punch";
        this.gotoAndStop(status_1);
        status_3 = "attack";
    } // End of the function
    function punch2()
    {
        if (status_2 == "air")
        {
            return (false);
        } // end if
        status_1 = "punch2";
        this.gotoAndStop(status_1);
        status_3 = "attack";
    } // End of the function
    function punch_l()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_1 = "punch_l";
        this.gotoAndStop(status_1);
        status_3 = "attack";
    } // End of the function
    function kick()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_1 = "kick";
        this.gotoAndStop(status_1);
        status_3 = "attack";
    } // End of the function
    function kick2()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        this.gotoAndStop("kick2");
        status_1 = "kick2";
        status_3 = "attack";
    } // End of the function
    function kick_l()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        this.gotoAndStop("kick_l");
        status_1 = "kick_l";
        status_3 = "attack";
    } // End of the function
    function jumpSkill(act)
    {
        if (status_3 != "normal")
        {
            return (false);
        } // end if
        if (mc._currentframe < 4)
        {
            return (false);
        } // end if
        if (inRecord)
        {
            this.skill_record(act);
        } // end if
        mc.gotoAndPlay(act);
        status_3 = "attack";
        status_1 = "jumpSkill_" + act;
        opp.checkDefend();
    } // End of the function
    function pitch()
    {
        if (status_3 != "normal")
        {
            return (false);
        } // end if
        if (this.catch_check())
        {
            this.gotoAndStop("pitch");
            status_1 = "pitch";
            status_3 = "attack";
            opp.status_3 = "hurt";
            return (true);
        } // end if
    } // End of the function
    function burst(type)
    {
        if (inBurst)
        {
            return (false);
        } // end if
        if (status_2 != "land" || status_3 != "normal" || holdFreeze)
        {
            return (false);
        } // end if
        if (superPoint == powerPoint_max)
        {
        }
        else if (redBlood && superPoint > 0)
        {
        }
        else
        {
            return (false);
        } // end else if
        status_3 = "attack";
        inBurst = true;
        if (type == "attack")
        {
            burst_mode = "attack";
            status_1 = "burst";
            this.gotoAndStop("burst");
        }
        else if (type == "defend")
        {
            burst_defend = true;
            burst_mode = "defend";
            status_1 = "burst2";
            this.gotoAndStop("burst2");
        }
        else if (type == "power")
        {
            burst_mode = "power";
            status_1 = "burst";
            this.gotoAndStop("burst");
        } // end else if
        return (true);
    } // End of the function
    function burst_a()
    {
        if (inBurst)
        {
            return (false);
        } // end if
        if (status_2 != "land" || status_3 != "normal" || holdFreeze)
        {
            return (false);
        } // end if
        if (superPoint == powerPoint_max)
        {
        }
        else if (redBlood && superPoint > 0)
        {
        }
        else
        {
            return (false);
        } // end else if
        status_3 = "attack";
        inBurst = true;
        burst_mode = "attack";
        status_1 = "burst";
        this.gotoAndStop("burst");
        return (true);
    } // End of the function
    function burst_d()
    {
        if (inBurst)
        {
            return;
        } // end if
        if (status_2 != "land" || status_3 != "normal" || holdFreeze)
        {
            return;
        } // end if
        if (superPoint == powerPoint_max)
        {
        }
        else if (redBlood && superPoint > 0)
        {
        }
        else
        {
            return;
        } // end else if
        status_3 = "attack";
        inBurst = true;
        burst_defend = true;
        burst_mode = "defend";
        status_1 = "burst2";
        this.gotoAndStop("burst2");
        return (true);
    } // End of the function
    function burst_p()
    {
        if (inBurst)
        {
            return;
        } // end if
        if (status_2 != "land" || status_3 != "normal" || holdFreeze)
        {
            return;
        } // end if
        if (superPoint == powerPoint_max)
        {
        }
        else if (redBlood && superPoint > 0)
        {
        }
        else
        {
            return;
        } // end else if
        status_3 = "attack";
        inBurst = true;
        burst_mode = "power";
        status_1 = "burst3";
        this.gotoAndStop("burst3");
        return (true);
    } // End of the function
    function sk_busrt_a()
    {
        if (inBurst != true && !inReplay)
        {
            return (false);
        } // end if
        if (this.toStatus(skillObj.busrt_a) == false)
        {
            return (false);
        } // end if
        status_3 = "attack";
        powerObj.action = "burstdec";
        powerObj.decNum = 80;
        this.powerControl(powerObj);
    } // End of the function
    function sk_busrt_d()
    {
        if (inBurst != true && !inReplay)
        {
            return (false);
        } // end if
        if (this.toStatus(skillObj.busrt_d) == false)
        {
            return (false);
        } // end if
        status_3 = "attack";
        powerObj.action = "burstdec";
        powerObj.decNum = 80;
        this.powerControl(powerObj);
    } // End of the function
    function sk_record()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        this.skill_replay_start();
    } // End of the function
    function heavyHit()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_1 = "heavyHit";
        status_3 = "attack";
        this.gotoAndStop(status_1);
    } // End of the function
    function move_walkRun()
    {
        function onEnterFrame()
        {
            if (_level0.inPause)
            {
                return;
            } // end if
            if (inFreeze)
            {
                return;
            } // end if
            if (status_2 != "land" || status_3 != "normal")
            {
                delete this.onEnterFrame;
                return;
            } // end if
            if (Key.isDown(f))
            {
                if (opp.status_3 == "attack" && dir == -1)
                {
                    this.hold_u();
                    return;
                } // end if
                this.do_move(Vx);
            }
            else if (Key.isDown(b))
            {
                if (opp.status_3 == "attack" && dir == 1)
                {
                    this.hold_u();
                    return;
                } // end if
                this.do_move(Vx);
            }
            else
            {
                delete this.onEnterFrame;
                this.stand();
            } // end else if
        } // End of the function
    } // End of the function
    function move_squat()
    {
        function onEnterFrame()
        {
            if (_level0.inPause)
            {
                return;
            } // end if
            if (inFreeze)
            {
                return;
            } // end if
            if (this.check_hold_d())
            {
                delete this.onEnterFrame;
            } // end if
            if (!Key.isDown(d) && status_1 == "squat" && status_3 != "attack")
            {
                delete this.onEnterFrame;
                this.toStatus_switch(status_end);
            } // end if
        } // End of the function
    } // End of the function
    function check_hold_d()
    {
        if (opp.status_3 == "attack")
        {
            if (dir == 1 && Key.isDown(b) || dir == -1 && Key.isDown(f))
            {
                this.hold_d();
                return (true);
            } // end if
        } // end if
    } // End of the function
    function move_hold()
    {
        var f = f;
        var b = b;
        var d = d;
        var opp = opp;
        var dir = dir;
        var owner = this;
        mc.onEnterFrame = function ()
        {
            if (_level0.inPause)
            {
                return;
            } // end if
            if (owner.inFreeze)
            {
                return;
            } // end if
            if (Key.isDown(f) && (opp.status_3 == "attack" || opp.hasObj()) && dir == -1)
            {
                if (owner.status_1 == "hold_u" && Key.isDown(d))
                {
                    owner.hold_d();
                }
                else if (owner.status_1 == "hold_d" && !Key.isDown(d))
                {
                    owner.hold_u();
                } // end else if
            }
            else if (Key.isDown(b) && (opp.status_3 == "attack" || opp.hasObj()) && dir == 1)
            {
                if (owner.status_1 == "hold_u" && Key.isDown(d))
                {
                    owner.hold_d();
                }
                else if (owner.status_1 == "hold_d" && !Key.isDown(d))
                {
                    owner.hold_u();
                } // end else if
            }
            else if (!owner.holdFreeze)
            {
                owner.status_3 = "normal";
                owner.toStatus_switch("stand");
            } // end else if
        };
    } // End of the function
    function do_holdFreeze(f)
    {
        holdFreeze = true;
        var f_t = f;
        var owner = this;
        delaySkill = "";
        freeze_timer.onEnterFrame = function ()
        {
            if (_level0.inPause)
            {
                return;
            } // end if
            if (owner.inFreeze)
            {
                return;
            } // end if
            if (f_t <= 0)
            {
                owner.hold_end();
                delete this.onEnterFrame;
            } // end if
            --f_t;
        };
    } // End of the function
    function hold_end()
    {
        holdFreeze = false;
        status_4 = "normal";
        if (status_1 == "hold_d")
        {
            this.toStatus_switch("squat");
        }
        else if (status_1 == "hold_d")
        {
            this.toStatus_switch("stand");
        } // end else if
    } // End of the function
    function do_move(Vx)
    {
        this.do_move2(Vx);
    } // End of the function
    function do_move2(Vx)
    {
        if (this.egdecheck(Vx))
        {
            return;
        } // end if
        _x = _x + Vx;
    } // End of the function
    function start_move_X1(v, obj)
    {
        var Vx = v == 0 ? (dir * Vx) : (dir * v);
        var _loc3 = this;
        function onEnterFrame()
        {
            if (_level0.inPause)
            {
                return;
            } // end if
            if (inFreeze)
            {
                return;
            } // end if
            this.do_move(Vx);
            if (obj.Vx == undefined)
            {
                delete this.onEnterFrame;
            } // end if
        } // End of the function
    } // End of the function
    function stop_move_X1(obj)
    {
        delete obj.onEnterFrame;
    } // End of the function
    function start_move_X2(v)
    {
        Vx = v;
        function onEnterFrame()
        {
            if (_level0.inPause)
            {
                return;
            } // end if
            if (inFreeze)
            {
                return;
            } // end if
            this.do_move(dir * Vx);
            Vx = Vx - Va;
            if (Vx <= 0)
            {
                delete this.onEnterFrame;
            } // end if
        } // End of the function
    } // End of the function
    function stop_move_X2()
    {
        delete this.onEnterFrame;
    } // End of the function
    function start_move_Y1(y, x, end, g)
    {
        status_2 = "air";
        Vy = y;
        Vx = dir * x;
        var Vg2;
        if (g != 0 && g != null)
        {
            Vg2 = g;
        }
        else
        {
            Vg2 = Vg;
        } // end else if
        function onEnterFrame()
        {
            if (_level0.inPause)
            {
                return;
            } // end if
            if (inFreeze)
            {
                return;
            } // end if
            this.do_move(Vx);
            _y = _y - Vy;
            Vy = Vy - Vg2;
            if (_y > land_Y)
            {
                this.stop_move_Y1(end);
            } // end if
        } // End of the function
    } // End of the function
    function stop_move_Y1(end)
    {
        delete this.onEnterFrame;
        _y = land_Y;
        if (!end || end == "")
        {
            this.land();
        }
        else if (end == "none")
        {
            mc.play();
            status_2 = "land";
        }
        else if (end.indexOf("frame") != -1)
        {
            mc.gotoAndPlay(end);
            status_2 = "land";
        }
        else if (mc.nextSkill != undefined)
        {
            this.toStatus(mc.nextSkill);
        }
        else
        {
            this.toStatus(end);
        } // end else if
    } // End of the function
    function hurtBack(f_r)
    {
        Vx = hurtValue.Vx;
        var status_now = mc;
        var ft = hurtValue.freezeTime2;
        status_5 = "hitBack";
        if ((status_1 == "hold_u" || status_1 == "hold_d") && Vx > 21)
        {
            Vx = 21;
        } // end if
        if (status_1 == "hold_d" && opp.status_1 == "squatKick")
        {
            Vx = 20;
        } // end if
        this.egdecheck(Vx);
        function onEnterFrame()
        {
            if (_level0.inPause)
            {
                return;
            } // end if
            if (_level0.inFreeze)
            {
                return;
            } // end if
            if (inFreeze)
            {
                return;
            } // end if
            if (ft > 0)
            {
                status_now.stop();
                --ft;
                return;
            }
            else if (ft <= 0)
            {
                status_now.play();
                ft = -1;
            } // end else if
            if (Vx != 0)
            {
                if (onEgde && !hurtValue.isObj && status_2 == "land")
                {
                    opp.do_move(-Vx * opp.dir);
                }
                else
                {
                    this.do_move(Vx * opp.dir);
                } // end if
            } // end else if
            var _loc2;
            if (hurtValue.a != 0 && hurtValue.a != undefined)
            {
                _loc2 = hurtValue.a;
            }
            else
            {
                _loc2 = Va;
            } // end else if
            Vx = Vx - _loc2;
            if (Vx <= 0)
            {
                delete this.onEnterFrame;
                status_now.play();
            } // end if
        } // End of the function
    } // End of the function
    function stop_hurtBack()
    {
        delete this.onEnterFrame;
        mc.play();
    } // End of the function
    function hurtAway()
    {
        status_2 = "air";
        Vx = hurtValue.Vx * opp.dir;
        Vy = hurtValue.Vy;
        if (onEgde && !hurtValue.isObj && opp.status_2 == "land")
        {
            opp.do_move(-Vx);
        } // end if
        onEnterFrame = do_hurtAway;
    } // End of the function
    function hurtAway_self(v1, v2, end)
    {
        status_2 = "air";
        Vx = v1 * opp.dir;
        Vy = v2;
        hurtValue.Vy = v2;
        hurtValue.end_status = end;
        function onEnterFrame()
        {
            this.do_hurtAway();
        } // End of the function
    } // End of the function
    function do_hurtAway()
    {
        if (_level0.inPause)
        {
            return;
        } // end if
        if (_level0.inFreeze)
        {
            return;
        } // end if
        if (inFreeze)
        {
            return;
        } // end if
        this.do_move(Vx);
        _y = _y - Vy;
        var _loc2;
        if (hurtValue.g != 0 && hurtValue.g != undefined)
        {
            _loc2 = hurtValue.g;
        }
        else
        {
            _loc2 = Vg;
        } // end else if
        Vy = Vy - _loc2;
        if (_y > land_Y)
        {
            this.stop_hurtAway();
        } // end if
    } // End of the function
    function stop_hurtAway()
    {
        delete this.onEnterFrame;
        status_2 = "";
        _y = land_Y;
        if (status_1 == "hurt6")
        {
            status_3 = "";
            this.toStatus_switch("stand");
        }
        else if (hurtValue.end_status == "none")
        {
            mc.play();
        }
        else if (hurtValue.end_status == "")
        {
            if (Vx > 25 || Vx < -25)
            {
                this.toStatus("getup2");
            }
            else
            {
                this.toStatus("getup1");
            } // end else if
            status_5 = "hitDown";
        }
        else
        {
            this.toStatus(hurtValue.end_status);
            status_5 = "hitDown";
        } // end else if
        if (hurtValue.Vy < 0)
        {
            _level0.effect_mc.downEff("down3", _x, _y, dir);
        }
        else
        {
            _level0.effect_mc.downEff("down2", _x, _y, dir);
        } // end else if
    } // End of the function
    function do_hitTest(obj)
    {
        if (obj.hitTest(opp.mc.body))
        {
            return (true);
        } // end if
    } // End of the function
    function move_HitTest(obj, attFrame, endFrame, S, v)
    {
        var opp = opp;
        var role = this;
        var status_mc = mc;
        var Sx = S;
        var Vx = v;
        obj.onEnterFrame = function ()
        {
            if (_level0.inPause)
            {
                return;
            } // end if
            if (role.inFreeze)
            {
                return;
            } // end if
            if (_level0.inFreeze)
            {
                return;
            } // end if
            role.do_move(role.dir * Vx);
            Sx = Sx - Vx;
            if (this.hitTest(opp.mc.body))
            {
                status_mc.gotoAndPlay(attFrame);
                delete this.onEnterFrame;
            }
            else if (Sx < 0)
            {
                status_mc.gotoAndPlay(endFrame);
                delete this.onEnterFrame;
            }
            else if (role.egde == 1 && role.dir == 1)
            {
                status_mc.gotoAndPlay(endFrame);
                delete this.onEnterFrame;
            }
            else if (role.egde == -1 && role.dir == -1)
            {
                status_mc.gotoAndPlay(endFrame);
                delete this.onEnterFrame;
            } // end else if
        };
    } // End of the function
    function catch_check()
    {
        if (status_1 != "dash_f" && opp.status_2 != "air" && opp.status_3 != "hurt" && opp.status_3 != "down" && !opp.holdFreeze && (opp.hit_over() || dir == opp.dir))
        {
            if (this.checkTouch(15 * dir))
            {
                return (true);
            } // end if
        } // end if
    } // End of the function
    function catch_HitTest(obj, status_c, flag, condition_land, condition_hurt, downHit)
    {
        if (condition_land)
        {
            if (opp.status_2 == "air")
            {
                return;
            } // end if
        } // end if
        if (condition_hurt)
        {
            if (opp.status_3 == "hurt" || opp.status_3 == "")
            {
            }
            else if (opp.status_3 == "down" && onHit)
            {
            }
            else
            {
                return;
            } // end else if
        } // end else if
        if (downHit == false)
        {
            if (opp.status_3 == "down")
            {
                return;
            } // end if
        } // end if
        if (obj.hitTest(opp.mc.body))
        {
            onHit = true;
            opp.toStatus(status_c);
            opp.mc.gotoAndStop(flag);
            opp.status_3 = "hurt";
            var _loc2 = _x + obj._x * dir;
            var _loc3 = _y + obj._y;
            if (_level0.char_mc._x + _loc2 > egde_max)
            {
                _loc2 = egde_max - _level0.char_mc._x;
            }
            else if (_level0.char_mc._x + _loc2 < egde_min)
            {
                _loc2 = egde_min - _level0.char_mc._x;
            } // end else if
            opp._x = _loc2;
            if (dir == opp.dir)
            {
                if (dir == 1)
                {
                    opp.chageSide2();
                }
                else
                {
                    opp.chageSide1();
                } // end if
            } // end else if
            _level0.effect_mc.hitFire("hitFire3", _loc2, _loc3);
            this.topLayer();
        }
        else
        {
            onHit = false;
            this.toStatus("stand");
        } // end else if
    } // End of the function
    function catch_oppPos(obj, status_c, flag, land, hurt)
    {
        if (opp.status_2 == "air" && land)
        {
            return;
        } // end if
        if (opp.status_3 != "hurt" && opp.status_3 != "down" && hurt)
        {
            return;
        } // end if
        if (obj.hitTest(opp.mc.body))
        {
            onHit = true;
            opp.status_3 = "hurt";
            opp.toStatus(status_c);
            opp.mc.gotoAndStop(flag);
            var _loc2 = _x + obj._x * dir;
            var _loc3 = _y + obj._y;
            if (_level0.char_mc._x + _loc2 > egde_max)
            {
                _loc2 = egde_max - _level0.char_mc._x;
            }
            else if (_level0.char_mc._x + _loc2 < egde_min)
            {
                _loc2 = egde_min - _level0.char_mc._x;
            } // end else if
            opp._x = _loc2;
            opp._y = _loc3;
            if (dir == opp.dir)
            {
                if (dir == 1)
                {
                    opp.chageSide2();
                }
                else
                {
                    opp.chageSide1();
                } // end if
            } // end else if
        }
        else
        {
            onHit = false;
        } // end else if
    } // End of the function
    function catch_oppPos2(obj, obj2, status_c, flag, condition_land, condition_hurt, downHit, oppDirChange)
    {
        if (condition_land)
        {
            if (opp.status_2 == "air" || opp.status_1 == "hurt6")
            {
                return;
            } // end if
        } // end if
        if (condition_hurt)
        {
            if (opp.status_3 == "hurt" || opp.status_3 == "")
            {
            }
            else if (opp.status_3 == "down" && onHit)
            {
            }
            else
            {
                return;
            } // end else if
        } // end else if
        if (downHit == false)
        {
            if (opp.status_3 == "down")
            {
                return;
            } // end if
        } // end if
        if (obj.hitTest(opp.mc.body))
        {
            onHit = true;
            opp.status_3 = "hurt";
            opp.toStatus(status_c);
            opp.mc.gotoAndStop(flag);
            opp.skillCount = false;
            opp.inCount = false;
            opp.status_2 = "land";
            delete opp.onEnterFrame;
            var _loc5 = Func.lToG(obj2);
            var _loc2 = _loc5.x;
            var _loc4 = _loc5.y;
            if (_level0._xscale != 100)
            {
                if (_loc2 > egde_max * _level0._xscale)
                {
                    _loc2 = egde_max * _level0._xscale;
                }
                else if (_loc2 < egde_min)
                {
                    _loc2 = egde_min;
                } // end else if
                var _loc3 = new Object();
                _loc3.x = _loc2;
                _loc3.y = _loc4;
                _level0.char_mc.globalToLocal(_loc3);
                opp._x = _loc3.x;
                opp._y = _loc3.y;
            }
            else
            {
                if (_loc2 > egde_max)
                {
                    _loc2 = egde_max;
                }
                else if (_loc2 < egde_min)
                {
                    _loc2 = egde_min;
                } // end else if
                _loc3 = new Object();
                _loc3.x = _loc2;
                _loc3.y = _loc4;
                _level0.char_mc.globalToLocal(_loc3);
                opp._x = _loc3.x;
                opp._y = _loc3.y;
            } // end else if
            if (dir == opp.dir)
            {
                if (dir == 1)
                {
                    opp.chageSide2();
                }
                else
                {
                    opp.chageSide1();
                } // end if
            } // end else if
            return (true);
        }
        else
        {
            onHit = false;
        } // end else if
    } // End of the function
    function throw_oppPos(obj, status_c, flag, land, hurt)
    {
        onHit = true;
        opp.status_2 = "air";
        opp.status_3 = "hurt";
        opp.toStatus(status_c);
        opp.mc.gotoAndStop(flag);
        var _loc2 = _x + obj._x * dir;
        var _loc4 = _y + obj._y;
        if (_level0.char_mc._x + _loc2 > egde_max)
        {
            _loc2 = egde_max - _level0.char_mc._x;
        }
        else if (_level0.char_mc._x + _loc2 < egde_min)
        {
            _loc2 = egde_min - _level0.char_mc._x;
        } // end else if
        opp._x = _loc2;
        opp._y = _loc4;
        if (obj.sameDir)
        {
            opp._xscale = _xscale;
        } // end if
        opp._rotation = obj._rotation;
        delete this.onEnterFrame;
    } // End of the function
    function throw_hit(hurtV, obj)
    {
        opp._rotation = 0;
        opp.checkSide_abs();
        var _loc2 = _x + obj._x * dir;
        var _loc4 = _y + obj._y;
        if (_level0.char_mc._x + _loc2 > egde_max)
        {
            _loc2 = egde_max - _level0.char_mc._x;
        }
        else if (_level0.char_mc._x + _loc2 < egde_min)
        {
            _loc2 = egde_min - _level0.char_mc._x;
        } // end else if
        opp._x = _loc2;
        opp._y = _loc4;
        opp.hurtValue = hurtV;
        opp.toStatus(hurtV.hurtAway);
        opp.mc.gotoAndPlay(hurtV.flag);
        opp.hurtAway();
        powerObj.inc = 10 * hurtV.d_rate;
        powerObj.action = "inc";
        this.powerControl(powerObj);
    } // End of the function
    function flyingObjHit(hitValue)
    {
        flyingObj.play();
    } // End of the function
    function doHit(obj)
    {
        onHit = true;
        hitValue = obj;
        powerObj.inc = 10 * hitValue.d_rate;
        powerObj.action = "inc";
        this.powerControl(powerObj);
    } // End of the function
    function doHurt(obj)
    {
        hurtValue = obj;
        this.checkHurt();
        opp.hitFire();
        this.shakeCheck();
        opp.topLayer();
        if (isKO && !KO_checked)
        {
            KO_checked = true;
            if (opp.superSkill || opp.isBurstSkill)
            {
                _level0.effect_mc.KO_Freeze(hurtValue.freezeTime + 15, 2);
            }
            else
            {
                _level0.effect_mc.KO_Freeze(hurtValue.freezeTime + 15, 1);
            } // end else if
        }
        else if (hurtValue.freezeTime > 0)
        {
            _level0.effect_mc.hitFreeze(hurtValue.freezeTime, this, hurtValue.slowTime);
        } // end else if
        _level0.hurter = this;
        delaySkill = "";
    } // End of the function
    function checkHurt()
    {
        if (this.countCheck())
        {
            lifeObj.d_rate = 0.300000;
            this.lifeControl(lifeObj);
            if (!isKO)
            {
                return;
            } // end if
        } // end if
        if (hurtValue.hitPos == "down" && status_1 == "hold_u")
        {
        }
        else if (hurtValue.hitPos == "up" && status_1 == "hold_d")
        {
        }
        else if (hurtValue.hitPos == "all")
        {
        }
        else if (status_1 == "hold_u" || status_1 == "hold_d")
        {
            var _loc2 = hurtValue.freezeTime + hurtValue.freezeTime2;
            if (_loc2 == undefined)
            {
                _loc2 = 6;
            }
            else if (_loc2 < 2)
            {
                _loc2 = 4;
            }
            else if (_loc2 < 6)
            {
                _loc2 = 6;
            }
            else if (_loc2 > 8)
            {
                _loc2 = 8;
            } // end else if
            this.do_holdFreeze(_loc2);
            this.hurtBack();
            if (burst_defend)
            {
                return;
            } // end if
            lifeObj.d_rate = 0.050000;
            this.lifeControl(lifeObj);
            if (isKO)
            {
                hurtValue.hurtAway = "hurt3";
                hurtValue.end_status = "getup2";
                hurtValue.Vx = 16;
                hurtValue.Vy = 30;
                this.toStatus(hurtValue.hurtAway);
                mc.gotoAndPlay(1);
                this.hurtAway();
            } // end if
            return;
        } // end else if
        if (opp.burst_mode == "power")
        {
            lifeObj.d_rate = hurtValue.d_rate * 1.100000;
        }
        else
        {
            lifeObj.d_rate = hurtValue.d_rate;
        } // end else if
        this.lifeControl(lifeObj);
        powerObj.inc = 4 * hurtValue.d_rate;
        powerObj.action = "inc";
        this.powerControl(powerObj);
        status_3 = "hurt";
        if (dir == opp.dir)
        {
            if (dir == 1)
            {
                this.chageSide2();
            }
            else
            {
                this.chageSide1();
            } // end if
        } // end else if
        this.hurtStatus();
        mc.hitSkillName = opp.status_1;
        if (checkTouch_stop)
        {
            checkTouch_stop = false;
            this.bodyTouch();
        } // end if
        if (Math.random() < 0.100000)
        {
            var _loc4 = hurtSoundArray.length;
            var _loc3 = int(Math.random() * _loc4);
            var _loc5 = hurtSoundArray[_loc3];
            _loc5.start();
        } // end if
    } // End of the function
    function hurtStatus()
    {
        delete this.onEnterFrame;
        if (hurtValue.hurtBack != "")
        {
            if (isKO)
            {
                hurtValue.hurtAway = "hurt3";
                hurtValue.end_status = "getup2";
                hurtValue.Vx = 16;
                hurtValue.Vy = 30;
                this.toStatus(hurtValue.hurtAway);
                mc.gotoAndPlay(1);
                this.hurtAway();
            }
            else if (status_2 == "air")
            {
                this.toStatus(hurtValue.hurtAway);
                mc.gotoAndPlay(hurtValue.flag);
                if (hurtValue.hurtAway == "hurt1" || hurtValue.hurtAway == "hurt2")
                {
                    _y = land_Y;
                    status_2 = "land";
                    this.hurtBack();
                }
                else
                {
                    if (hurtValue.Vy == 0 || hurtValue.Vy == undefined)
                    {
                        hurtValue.Vy = 30;
                    } // end if
                    this.hurtAway();
                } // end else if
            }
            else
            {
                this.toStatus(hurtValue.hurtBack);
                mc.gotoAndPlay(hurtValue.flag);
                this.hurtBack();
            } // end else if
        }
        else if (hurtValue.hurtBack == "" && hurtValue.hurtAway != "")
        {
            if (isKO && hurtValue.hurtAway == "hurt6")
            {
                hurtValue.hurtAway = "hurt3";
            } // end if
            this.toStatus(hurtValue.hurtAway);
            mc.gotoAndPlay(hurtValue.flag);
            this.hurtAway();
        }
        else
        {
            this.toStatus(hurtValue.hurtBack);
            mc.gotoAndPlay(hurtValue.flag);
            this.hurtBack();
        } // end else if
    } // End of the function
    function hitFire()
    {
        var _loc2 = hitValue.hitType;
        var hitFire_x = opp._x;
        var hitFire_y = Func.lToG(hitValue.area).y;
        if (opp.status_1 == "hold_u" || opp.status_1 == "hold_d")
        {
            _loc2 = "hitFire2";
        }
        else if (opp.inCount)
        {
            _loc2 = "hitFire2";
            _level0.showMsg("count", hitFire_x + _level0.char_mc._x);
        }
        else
        {
            var hitEff = hitValue.hitEff;
            var owner = this;
            var _loc3 = function ()
            {
                clearInterval(dd);
                owner.addEffect(hitEff, hitFire_x, hitFire_y);
            };
            if (hitValue.hitEff != "")
            {
                var dd = setInterval(_loc3, 40);
            } // end if
            hitsObj.x = hitFire_x;
            _level0.showHits(hitsObj);
            ++hits;
            if (hitValue.hitShinning)
            {
                _level0.effect_mc.bgShineHit(2);
            }
            else if (superSkill || isBurstSkill)
            {
                _level0.effect_mc.bgShineHit(1);
            } // end else if
        } // end else if
        _level0.effect_mc.hitFire(_loc2, hitFire_x, hitFire_y, dir);
    } // End of the function
    function countStart(times, pos)
    {
        skillCount = true;
        countTimes = times;
        countPos = pos;
        if (countTimes == undefined)
        {
            countTimes = 1;
        } // end if
    } // End of the function
    function countEnd()
    {
        skillCount = false;
    } // End of the function
    function countCheck()
    {
        if (dir != opp.dir)
        {
            if (skillCount)
            {
                if (countPos == "down" && hurtValue.hitPos == "up")
                {
                    this.countEnd();
                }
                else if (countPos == "up" && hurtValue.hitPos == "down")
                {
                    this.countEnd();
                }
                else if (opp.inCount)
                {
                    this.countEnd();
                }
                else if (countTimes > 0)
                {
                    hurtValue.freezeTime = hurtValue.freezeTime + 7;
                    if (opp.superSkill || opp.isBurstSkill)
                    {
                        inCount = false;
                        this.countEnd();
                        return (false);
                    } // end if
                    inCount = true;
                    --countTimes;
                    return (true);
                } // end else if
            }
            else if (burst_defend)
            {
                if (inCount)
                {
                    this.countEnd();
                }
                else if (opp.inCount)
                {
                    this.countEnd();
                }
                else if (this.hit_over() != true)
                {
                    hurtValue.freezeTime = hurtValue.freezeTime + 7;
                    if (opp.superSkill || opp.isBurstSkill)
                    {
                        inCount = false;
                        this.countEnd();
                        return (false);
                    } // end if
                    inCount = true;
                    powerObj.action = "burstdec";
                    powerObj.decNum = 20;
                    this.powerControl(powerObj);
                    this.changeColorSelf("white", 30);
                    return (true);
                } // end else if
            } // end else if
        } // end else if
        countTimes = 0;
        inCount = false;
    } // End of the function
    function powerBurst()
    {
        inBurst = true;
        powerObj.action = "burst";
        this.powerControl(powerObj);
    } // End of the function
    function burstEff()
    {
        if (burst_mode == "attack")
        {
        }
        else if (burst_mode == "defend")
        {
            burst_defend = true;
        } // end else if
    } // End of the function
    function superCancle()
    {
        if (inBurst && burst_mode == "attack")
        {
            return (true);
        } // end if
    } // End of the function
    function burst_end()
    {
        inBurst = false;
        inCount = false;
        burst_defend = false;
        burst_mode = "";
    } // End of the function
    function holdCount()
    {
        if (this.heavyHit() == false)
        {
            return;
        } // end if
        powerObj.action = "burstdec";
        powerObj.decNum = _level0.power_holdCounter;
        this.powerControl(powerObj);
        this.changeColorSelf("white", 30);
    } // End of the function
    function isHitEnd()
    {
        var _loc2 = comboClass.skill_over[status_1];
        if (_loc2 == undefined)
        {
            if (status_3 == "attack" && mc._currentframe > mc._totalframes - 4)
            {
                return (true);
            }
            else
            {
                return (false);
            } // end else if
        }
        else if (mc._currentframe > _loc2)
        {
            return (true);
        }
        else
        {
            return (false);
        } // end else if
    } // End of the function
    function hit_over()
    {
        if (status_3 != "attack")
        {
            return (true);
        } // end if
        _level0.out("hit_over   over_f:" + over_f + "   mc._currentframe:" + mc._currentframe + "   mc._totalframes:" + mc._totalframes);
        if (mc.area)
        {
            return (false);
        } // end if
        var over_f = comboClass.skill_over[status_1];
        if (mc._currentframe > mc._totalframes - 4)
        {
            return (true);
        } // end if
        if (isNaN(over_f))
        {
            return (false);
        } // end if
        if (mc._currentframe > over_f)
        {
            return (true);
        } // end if
        return (false);
    } // End of the function
    function freeze_frame()
    {
        if (status_3 != "attack")
        {
            return (0);
        } // end if
        var _loc3 = mc._currentframe;
        var _loc2 = mc._totalframes;
        var _loc4 = _loc2 - _loc3;
        return (_loc4);
    } // End of the function
    function superStart(superType, time_f, dx, dy, faceName, dir)
    {
        _level0.effect_mc.superStart(superType, time_f, dx, dy, faceName, dir);
    } // End of the function
    function superCheck(action)
    {
        superSkill = false;
        if (superList[action] == 1)
        {
            if (superPoint > 0)
            {
                superSkill = true;
                powerDecType = "super";
                return (true);
            }
            else if (inBurst)
            {
                superSkill = true;
                powerDecType = "super";
                return (true);
            }
            else
            {
                return (false);
            } // end else if
        }
        else
        {
            return ("notSpuerSkill");
        } // end else if
    } // End of the function
    function burstCheck(action)
    {
        isBurstSkill = false;
        if (burstList[action] == 1)
        {
            if (inBurst)
            {
                isBurstSkill = true;
                powerDecType = "burst";
                return (true);
            }
            else
            {
                return (false);
            } // end if
        } // end else if
    } // End of the function
    function skillSuperCheck(action)
    {
        var _loc2 = skillSuperMapping[action];
        if (_loc2 != undefined)
        {
            return (_loc2);
        }
        else
        {
            return ("");
        } // end else if
    } // End of the function
    function powerDec()
    {
        var _loc2 = powerDecType;
        if (inBurst && _loc2 == "burst")
        {
            powerObj.action = "burstdec";
            powerObj.decNum = power_skillBurst;
            this.powerControl(powerObj);
            powerDecType = "";
        }
        else if (inBurst && _loc2 == "super")
        {
            powerObj.action = "burstdec";
            powerObj.decNum = power_skillSuper;
            this.powerControl(powerObj);
            powerDecType = "";
        }
        else if (!inBurst && _loc2 == "super")
        {
            powerObj.action = "dec";
            this.powerControl(powerObj);
            powerDecType = "";
        } // end else if
    } // End of the function
    function powerDec2()
    {
        var _loc2 = powerDecType2;
        if (inBurst && _loc2 == "cancle")
        {
            powerObj.action = "burstdec";
            powerObj.decNum = power_cancle;
            this.powerControl(powerObj);
            this.changeColorSelf("white", 30);
            powerDecType2 = "";
        } // end if
    } // End of the function
    function addSkill(s_name, src, Vx, Va)
    {
        var _loc4 = skill_loader.getNextHighestDepth();
        var _loc2 = skill_loader.attachMovie(s_name, "skill" + _loc4, _loc4);
        var _loc3 = Func.lToG(src);
        if (_loc3.x > stage_with)
        {
            _loc3.x = stage_with;
        }
        else if (_loc3.x < 0)
        {
            _loc3.x = 0;
        } // end else if
        skill_loader.globalToLocal(_loc3);
        _loc2._x = _loc3.x;
        _loc2._y = _loc3.y;
        _loc2.dir = dir;
        _loc2._xscale = dir * scale;
        _loc2.role = this;
        _loc2.opp = opp;
        _loc2.init();
    } // End of the function
    function addSkill2(s_name, src, Vx, Va)
    {
        var _loc4 = skill_loader.getNextHighestDepth();
        var _loc3 = skill_loader.attachMovie(s_name, "skill" + _loc4, _loc4);
        var _loc2 = Func.lToG(src);
        if (_loc2.x > stage_with)
        {
            _loc2.x = stage_with;
        }
        else if (_loc2.x < 0)
        {
            _loc2.x = 0;
        } // end else if
        skill_loader.globalToLocal(_loc2);
        _loc3._x = _loc2.x;
        _loc3._y = _loc2.y;
        _loc3.dir = dir;
        _loc3._xscale = dir * scale;
        _loc3.opp = opp;
        _loc3.init();
    } // End of the function
    function addSkill_m(s_name, src, posx, posy)
    {
        var _loc4 = skill_loader.getNextHighestDepth();
        var _loc2 = skill_loader.attachMovie(s_name, "skill" + _loc4, _loc4);
        var _loc3 = new Object();
        _loc3.x = src._x;
        _loc3.y = src._y;
        src._parent.localToGlobal(_loc3);
        skill_loader.globalToLocal(_loc3);
        _loc2._x = posx;
        _loc2._y = _loc3.y;
        _loc2.dir = dir;
        _loc2._xscale = dir * scale;
        _loc2.opp = opp;
        _loc2.init();
        if (char_mc._x + _loc2._x > stage_with)
        {
            _loc2._x = stage_with - char_mc._x;
        }
        else if (char_mc._x + _loc2._x < 0)
        {
            _loc2._x = -char_mc._x;
        } // end else if
    } // End of the function
    function addEffect(e_name, e_x, e_y)
    {
        var _loc3 = skill_loader.getNextHighestDepth();
        var _loc2 = skill_loader.attachMovie(e_name, "effect" + _loc3, _loc3);
        _loc2._x = e_x;
        _loc2._y = e_y;
        _loc2.dir = dir;
        _loc2._xscale = dir * scale;
    } // End of the function
    function addShadow(shadow_name, src, start_alpha, end_alpha, d_alpha, _rb, _gb, _bb)
    {
        if (shadow_mc instanceof MovieClip != true)
        {
            shadow_mc = _parent.createEmptyMovieClip("shadow_mc", depth_shadow);
        } // end if
        trace ("shadow_mc: " + shadow_mc);
        var _loc3 = shadow_mc.getNextHighestDepth();
        var _loc2 = shadow_mc.attachMovie(shadow_name, "shadow_" + _loc3, _loc3);
        trace ("shadow: " + _loc2);
        _loc2._x = src._x * dir + _x;
        _loc2._y = src._y + _y;
        _loc2.colorObj = new Color(_loc2);
        var _loc4 = {ra: "100", rb: _rb, ga: "100", gb: _gb, ba: "100", bb: _bb, aa: "100", ab: "0"};
        _loc2.colorObj.setTransform(_loc4);
        _loc2._alpha = start_alpha;
        _loc2.end_alpha = end_alpha;
        _loc2.d_alpha = d_alpha;
        _loc2._xscale = dir * scale;
        var onwer = this;
        _loc2.onEnterFrame = function ()
        {
            if (_level0.inPause)
            {
                return;
            } // end if
            if (onwer.inFreeze)
            {
                return;
            } // end if
            _alpha = _alpha - this.d_alpha;
            if (_alpha < this.end_alpha)
            {
                this.removeMovieClip();
            } // end if
        };
    } // End of the function
    function catchFire(e_name, e_x, e_y, dir)
    {
    } // End of the function
    function start_move_Obj(Obj)
    {
        var _loc2 = Obj;
        var owner = this;
        _loc2.onEnterFrame = function ()
        {
            if (_level0.inPause)
            {
                return;
            } // end if
            if (owner.inFreeze)
            {
                return;
            } // end if
            _x = _x + dir * Vx;
            Vx = Vx - Va;
            if (Vx <= 0 || _x > 700 || _x < -50)
            {
                this.gotoAndPlay("end");
                delete this.onEnterFrame;
            } // end if
        };
    } // End of the function
    function skill_filter(action)
    {
        for (var _loc3 in record_filter_array)
        {
            if (action == record_filter_array[_loc3])
            {
                return (true);
            } // end if
        } // end of for...in
    } // End of the function
    function check_countType(s)
    {
        for (var _loc3 in record_skill_totalFrame)
        {
            if (String(s) == record_skill_totalFrame[_loc3])
            {
                return (true);
            } // end if
        } // end of for...in
        for (var _loc3 in record_action_totalFrame)
        {
            if (String(s) == record_action_totalFrame[_loc3])
            {
                return (true);
            } // end if
        } // end of for...in
        if (String(s).indexOf("jumpSkill_") != -1)
        {
            return (true);
        } // end if
    } // End of the function
    function set_combo()
    {
        var _loc2 = _level0.comboRecord_array[_level0.comboIndex];
        record_skill = _loc2.data[0];
        record_frame = _loc2.data[1];
        count_type = _loc2.data[2];
    } // End of the function
    function skill_record_ready()
    {
        inRecord = true;
        record_frame = [];
        record_skill = [];
        count_type = [];
    } // End of the function
    function skill_record(skill)
    {
        if (record_skill.length == 0)
        {
            record_skill.push(skill);
            count_type.push("total");
            record_frame.push(1);
        }
        else
        {
            record_skill.push(skill);
            if (this.check_countType(status_1))
            {
                count_type.push("total");
                record_frame.push(frameCount_temp - frameOffset);
            }
            else
            {
                count_type.push("current");
                record_frame.push(mc._currentframe - 1);
            } // end else if
        } // end else if
        frameCount_temp = 1;
        var owner = this;
        replay_timer.onEnterFrame = function ()
        {
            if (owner.inFreeze)
            {
                return;
            } // end if
            ++owner.frameCount_temp;
        };
    } // End of the function
    function skill_record_end(hits)
    {
        inRecord = false;
        delete replay_timer.onEnterFrame;
        if (record_skill.length == 0)
        {
            return;
        } // end if
        var _loc2 = hits + " Combo";
        var _loc3 = [record_skill, record_frame, count_type];
        _level0.combo_new({label: _loc2, data: _loc3});
    } // End of the function
    function skill_replay_start()
    {
        trace ("skill_replay_start: " + record_skill);
        inReplay = true;
        skillPonit = 0;
        this.toSkill(record_skill[skillPonit]);
        ++skillPonit;
        this.skill_replay();
    } // End of the function
    function skill_replay_end()
    {
        inReplay = false;
        delete replay_timer.onEnterFrame;
        powerObj.action = "burstdec";
        powerObj.decNum = 300;
        this.powerControl(powerObj);
    } // End of the function
    function skill_replay()
    {
        var skill = record_skill[skillPonit];
        var frame = record_frame[skillPonit];
        var _loc2 = count_type[skillPonit];
        var owner = this;
        if (skillPonit == record_skill.length)
        {
            this.skill_replay_end();
            return;
        } // end if
        _level0.out("下个动作：" + skill);
        _level0.out("开始帧数：" + frame);
        _level0.out("动作类型：" + _loc2);
        _level0.out("当前动作：" + status_1);
        if (_loc2 == "total")
        {
            frameCount_temp = 1;
            replay_timer.onEnterFrame = function ()
            {
                if (owner.inFreeze)
                {
                    return;
                } // end if
                if (owner.status_3 == "hurt")
                {
                    owner.skill_replay_end();
                } // end if
                ++owner.frameCount_temp;
                if (owner.frameCount_temp > frame)
                {
                    owner.toSkill(skill, true);
                    ++owner.skillPonit;
                    owner.skill_replay();
                } // end if
            };
            return;
        } // end if
        replay_timer.onEnterFrame = function ()
        {
            if (owner.inFreeze)
            {
                return;
            } // end if
            if (owner.status_3 == "hurt")
            {
                owner.skill_replay_end();
            } // end if
            if (owner.mc._currentframe > frame)
            {
                if (owner.status_1 == "jump" || owner.status_1 == "jump_b" || owner.status_1 == "jump_f")
                {
                    owner.jumpSkill(skill);
                }
                else
                {
                    owner.toSkill(skill, true);
                } // end else if
                ++owner.skillPonit;
                owner.skill_replay();
            } // end if
        };
        mc.onUnload = function ()
        {
        };
    } // End of the function
    function toGlobal(obj1, obj2)
    {
        var _loc1 = new Object();
        _loc1.x = obj1._x;
        _loc1.y = obj1._y;
        obj2.localToGlobal(_loc1);
        return (_loc1);
    } // End of the function
    function getMc(src)
    {
        for (var _loc3 in src)
        {
            var _loc1 = src[_loc3];
            trace ("mc::: " + _loc1);
            if (_loc1 instanceof MovieClip)
            {
                trace ("src:::::::::::" + src);
                trace ("mc:::::::::::: " + _loc1);
                return (_loc1);
            } // end if
        } // end of for...in
    } // End of the function
    function easySkillMapping()
    {
    } // End of the function
    function soundInit()
    {
        sound_mc = _root.createEmptyMovieClip("sound_mc", 1100);
        run_snd = new Sound(sound_mc);
        run_snd.attachSound("run_snd");
        hurt1_snd = new Sound(sound_mc);
        hurt1_snd.attachSound("hurt1_snd_" + roleName);
        hurt2_snd = new Sound(sound_mc);
        hurt2_snd.attachSound("hurt2_snd_" + roleName);
        lose_snd = new Sound(sound_mc);
        lose_snd.attachSound("lose_snd_" + roleName);
        hurtSoundArray = new Array();
        hurtSoundArray = [hurt1_snd, hurt2_snd];
    } // End of the function
    function stageInf(sw, emax, emin, x, y)
    {
        stage_with = sw;
        egde_max = emax;
        egde_min = emin;
        startX = x;
        startY = y;
        _x = x;
        _y = y;
        land_Y = y;
        this.checkSide_abs();
        this.soundInit();
        _level0.out(_x + "=======" + _y);
    } // End of the function
    function stageVar(l_max, s_Point, p_max, opponent, burst)
    {
        if (_roleName != roleName)
        {
        } // end if
        life_max = l_max;
        life = life_max;
        superPoint = s_Point;
        powerPoint_max = p_max;
        opp = opponent;
        burst_mode = burst;
        power_skillSuper = _level0.power_skillSuper;
        power_skillBurst = _level0.power_skillBurst;
    } // End of the function
    function start()
    {
        mc.play();
    } // End of the function
    function reset()
    {
        isKO = false;
        KO_checked = false;
        onEgde = false;
        redBlood = false;
        life = life_max;
        this.gotoAndStop("ready");
        _x = startX;
        _y = startY;
        this.checkSide_abs();
    } // End of the function
    function noAct()
    {
    } // End of the function
    function start_control()
    {
        control = true;
        toSkill = toSkill_temp;
        toAction = toAction_temp;
        toStatus = toStatus_temp;
        this.toStatus_switch("stand");
    } // End of the function
    function end_control(action)
    {
        this.toStatus_temp(action);
    } // End of the function
    function do_end()
    {
        control = false;
        toSkill = noAct;
        toAction = noAct;
        toStatus = end_control;
        if (status_1 == "walk_f" || status_1 == "walk_b" || status_1 == "dash_f" || status_1 == "squat")
        {
            delete this.onEnterFrame;
            status_1 = "stand";
            this.gotoAndStop("stand");
        } // end if
    } // End of the function
    function do_KO()
    {
        isKO = true;
        if (status_4 == "hold")
        {
            hurtValue.hurtAway = "hurt3";
            hurtValue.end_status = "getup2";
            hurtValue.Vx = 16;
            hurtValue.Vy = 30;
            this.toStatus(hurtValue.hurtAway);
            mc.gotoAndPlay(1);
            this.hurtAway();
        } // end if
        var _loc2 = this.attachMovie("ko_snd_" + roleName, "ko_snd", 12545);
    } // End of the function
    function do_win()
    {
        var _loc2 = int(Math.random() * winPoseArray.length);
        var _loc3 = winPoseArray[_loc2];
        this.gotoAndStop(_loc3);
        status_1 = "end";
        opp.showHits_end();
    } // End of the function
    function do_lose()
    {
        function onEnterFrame()
        {
            if (_level0.inPause)
            {
                return;
            } // end if
            if (status_2 == "land" && status_3 == "normal" && status_4 == "normal")
            {
                this.gotoAndStop("lose");
                status_1 = "lose";
                delete this.onEnterFrame;
            } // end if
        } // End of the function
    } // End of the function
    function checkSide_abs()
    {
        if (_x < opp._x - side_offset)
        {
            _xscale = scale;
            dir = 1;
            newKeyControl.dir = 1;
        }
        else if (_x > opp._x + side_offset)
        {
            _xscale = -scale;
            dir = -1;
            newKeyControl.dir = -1;
        } // end else if
    } // End of the function
    function checkSide()
    {
        if (status_2 == "toLand")
        {
            this.chageSide_arg();
            return;
        } // end if
        if (status_1 == "roll_f")
        {
            this.chageSide_arg();
            return;
        } // end if
        if (status_2 != "land")
        {
            return;
        } // end if
        if (status_3 != "normal")
        {
            return;
        } // end if
        if (status_1 == "dash_f")
        {
            return;
        } // end if
        if (_x < opp._x - side_offset)
        {
            this.chageSide1();
        }
        else if (_x > opp._x + side_offset)
        {
            this.chageSide2();
        } // end else if
    } // End of the function
    function chageSide_arg()
    {
        if (_x < opp._x - side_offset && _xscale < 0)
        {
            newKeyControl.dir = 1;
        }
        else if (_x > opp._x + side_offset && _xscale > 0)
        {
            newKeyControl.dir = -1;
        } // end else if
    } // End of the function
    function chageSide1()
    {
        _xscale = scale;
        dir = 1;
        newKeyControl.dir = 1;
    } // End of the function
    function chageSide2()
    {
        _xscale = -scale;
        dir = -1;
        newKeyControl.dir = -1;
    } // End of the function
    function lifeControl(obj)
    {
        _level0.lifeControl(obj);
    } // End of the function
    function powerControl(obj)
    {
        _level0.powerControl(obj);
    } // End of the function
    function showHits_end()
    {
        if (opp.hits == 0)
        {
            return;
        } // end if
        _level0.showHits_end(hitsObj);
        if (opp.inRecord)
        {
            opp.skill_record_end(opp.hits);
        } // end if
        if (opp.hits > 0)
        {
            opp.hitsArray.push(opp.hits);
        } // end if
        opp.hits = 0;
    } // End of the function
    function toSkill(action, cancle)
    {
        if (action == undefined)
        {
            return;
        } // end if
        if (_level0.inPause)
        {
            return;
        } // end if
        powerDecType = "";
        if (status_3 == "hurt")
        {
            return;
        } // end if
        if (status_3 == "down")
        {
            if (this.delayCheck())
            {
                this.skill_delay(action);
            } // end if
            return;
        } // end if
        if (holdFreeze)
        {
            if (burst_defend && action == "heavyHit")
            {
                this.holdCount();
            }
            else
            {
                this.skill_delay(action);
            } // end else if
            return;
        } // end if
        var _loc3 = this.superCheck(action);
        if (_loc3 == false)
        {
            return (false);
        }
        else if (_loc3 == true)
        {
            if (burst_mode == "power")
            {
                var _loc4 = this.skillSuperCheck(action);
                if (_loc4 != "")
                {
                    powerDecType = "super";
                    action = _loc4;
                } // end if
            } // end if
        }
        else if (superMaxList[action] == 1)
        {
            powerDecType = "super";
        } // end else if
        if (this.burstCheck(action) == false)
        {
            return;
        } // end if
        if ((status_3 == "attack" || status_2 == "toLand") && !cancle)
        {
            if (comboClass.check_combo(status_1, action))
            {
                return (true);
            } // end if
            if (this.delayCheck())
            {
                this.skill_delay(action);
                return;
            } // end if
            return;
        } // end if
        if (this.delayCheck())
        {
            this.skill_delay(action);
            return;
        } // end if
        if (status_3 == "roll")
        {
            return;
        } // end if
        if (this.skill_start(action))
        {
            opp.checkDefend();
            return (true);
        }
        else
        {
            return;
        } // end else if
    } // End of the function
    function skill_start(action)
    {
        if (this[action] != undefined)
        {
            if (this.toStatus(action))
            {
                this.powerDec();
                this.powerDec2();
                skill_last = skill_last0;
                skill_last0 = action;
                return (true);
            }
            else
            {
                powerDecType = "";
                powerDecType2 = "";
            } // end else if
        }
        else if (status_2 == "land" && (status_3 == "normal" || status_3 == "attack"))
        {
            if (this.toStatus(action))
            {
                this.powerDec();
                this.powerDec2();
                status_3 = "attack";
                skill_last = skill_last0;
                skill_last0 = action;
                return (true);
            }
            else
            {
                powerDecType = "";
                powerDecType2 = "";
            } // end else if
        } // end else if
    } // End of the function
    function switchSkill(action)
    {
        this.toSkill(action, true);
    } // End of the function
    function toAction(action)
    {
        if (_level0.inPause)
        {
            return;
        } // end if
        this.toStatus(action);
        opp.actionDefend(action);
    } // End of the function
    function keyUp(obj)
    {
        var _loc1 = obj.upKey;
    } // End of the function
    function statusClear()
    {
        status_1 = "stand";
        status_2 = "land";
        status_3 = "normal";
        status_4 = "normal";
        status_5 = "normal";
        holdFreeze = false;
        inCount = false;
        onHit = false;
        checkTouch_stop = false;
        superSkill = false;
        isBurstSkill = false;
        run_snd.stop();
    } // End of the function
    function toStatus(action)
    {
        if (_level0.inPause)
        {
            return;
        } // end if
        if (_level0.inFreeze)
        {
            this.skill_delay(action);
            mc.stop();
            return;
        } // end if
        if (this[action] != undefined)
        {
            if (this[action]() == false)
            {
                return (false);
            } // end if
        }
        else
        {
            status_1 = action;
            this.gotoAndStop(action);
        } // end else if
        run_snd.stop();
        return (true);
    } // End of the function
    function toStatus_switch(act)
    {
        if (status_3 == "hurt")
        {
            return;
        } // end if
        var _loc2 = act;
        this.statusClear();
        this.checkSide();
        this.showHits_end();
        if (delaySkill != "")
        {
            this.toSkill(delaySkill);
            delaySkill = "";
            return;
        } // end if
        if (Key.isDown(u))
        {
            _loc2 = "jump";
        }
        else if (Key.isDown(d))
        {
            _loc2 = "squat";
        }
        else if (Key.isDown(f))
        {
            if (dir == 1)
            {
                _loc2 = "walk_f";
            }
            else
            {
                if (opp.status_3 == "attack" || opp.hasObj())
                {
                    this.hold_u();
                    return;
                } // end if
                _loc2 = "walk_b";
            } // end else if
        }
        else if (Key.isDown(b))
        {
            if (dir == 1)
            {
                if (opp.status_3 == "attack" || opp.hasObj())
                {
                    this.hold_u();
                    return;
                } // end if
                _loc2 = "walk_b";
            }
            else
            {
                _loc2 = "walk_f";
            } // end else if
        }
        else if (Key.isDown(p))
        {
            _loc2 = "punch";
        }
        else if (Key.isDown(k))
        {
            _loc2 = "kick";
        } // end else if
        this.toStatus(_loc2);
    } // End of the function
}
else
{
} // end else if
function delayCheck()
{
    var _loc2 = input_pre[status_1];
    if (_loc2 == undefined)
    {
        return (false);
    } // end if
    var _loc3 = mc._currentframe;
    if (_loc3 > _loc2)
    {
        return (true);
    } // end if
} // End of the function
function skill_delay(action)
{
    delaySkill = action;
} // End of the function
function skill_restart()
{
    if (delaySkill != "")
    {
        if (this.toStatus(delaySkill))
        {
            this.powerDec();
            this.powerDec2();
        }
        else
        {
            powerDecType = "";
            powerDecType2 = "";
        } // end else if
        delaySkill = "";
    } // end if
} // End of the function
function shakeCheck()
{
    _level0.shake_mc.shakeStart(hurtValue.shake);
} // End of the function
function checkTouch(dv)
{
    if (checkTouch_stop || opp.checkTouch_stop)
    {
        return;
    } // end if
    if (status_2 != "air" && opp.status_2 == "air")
    {
        return;
    } // end if
    if (status_3 == "roll" || opp.status_3 == "roll")
    {
        return;
    } // end if
    var _loc5;
    var _loc2;
    var _loc4;
    var _loc3;
    if (_y > opp._y - 120)
    {
        _loc3 = opp._x;
        _loc4 = _x + dv;
        if (_xscale > 0)
        {
            if (_loc4 > _loc3 - opp_width2 && _loc4 < _loc3 + 10)
            {
                _loc5 = _loc4 - (_loc3 - opp_width2);
                if (opp.onEgde)
                {
                    _loc2 = _loc5;
                }
                else
                {
                    _loc2 = int(_loc5 / 2);
                } // end else if
                this.do_move2(-_loc2);
                opp.do_move2(_loc2);
                return (true);
            }
            else if (_loc4 >= _loc3 + 10 && _loc4 < _loc3 + opp_width2)
            {
                _loc5 = _loc4 - (_loc3 + opp_width2);
                if (opp.onEgde)
                {
                    _loc2 = _loc5;
                }
                else
                {
                    _loc2 = int(_loc5 / 2);
                } // end else if
                this.do_move2(-_loc2);
                opp.do_move2(_loc2);
                return (true);
            } // end else if
        }
        else if (_xscale < 0)
        {
            if (_loc4 >= _loc3 - 10 && _loc4 < _loc3 + opp_width2)
            {
                _loc5 = _loc4 - (_loc3 + opp_width2);
                if (opp.onEgde)
                {
                    _loc2 = _loc5;
                }
                else
                {
                    _loc2 = int(_loc5 / 2);
                } // end else if
                this.do_move2(-_loc2);
                opp.do_move2(_loc2);
                return (true);
            }
            else if (_loc4 > _loc3 - opp_width2 && _loc4 < _loc3 - 10)
            {
                _loc5 = _loc4 - (_loc3 - opp_width2);
                if (opp.onEgde)
                {
                    _loc2 = _loc5;
                }
                else
                {
                    _loc2 = int(_loc5 / 2);
                } // end else if
                this.do_move2(-_loc2);
                opp.do_move2(_loc2);
                return (true);
            } // end if
        } // end else if
    } // end else if
} // End of the function
function bodyTouch()
{
    var _loc2 = this.checkTouch2();
    if (_loc2 != undefined)
    {
        this.do_bodyTouch(_loc2);
    } // end if
} // End of the function
function do_bodyTouch(v)
{
    var Vx = v;
    var owner = this;
    function onEnterFrame()
    {
        if (_level0.inPause)
        {
            return;
        } // end if
        Vx = int(Vx / 2);
        owner.do_move2(Vx);
        if (Vx == 0)
        {
            delete this.onEnterFrame;
        } // end if
    } // End of the function
} // End of the function
function checkTouch2()
{
    var _loc2 = _x - opp._x;
    var _loc3;
    if (_loc2 > -50 && _loc2 < 0)
    {
        _loc3 = -50 - _loc2;
        return (_loc3);
    } // end if
    if (_loc2 < 50 && _loc2 >= 0)
    {
        _loc3 = 50 - _loc2;
        return (_loc3);
    } // end if
} // End of the function
function egdecheck(v)
{
    var _loc3 = _level0.char_mc._x + _x;
    if (_loc3 + v >= egde_max && v > 0)
    {
        onEgde = true;
        egde = 1;
        return (true);
    } // end if
    if (_loc3 + v <= egde_min && v < 0)
    {
        onEgde = true;
        egde = -1;
        return (true);
    } // end if
    onEgde = false;
    egde = 0;
} // End of the function
function colorChange(cc)
{
    var _loc3 = new Color(this);
    var _loc2 = colorObj[cc];
    _loc3.setTransform(_loc2);
} // End of the function
function colorNormal()
{
    if (_level0.inPause)
    {
        clearInterval(color_timer2);
        color_timer2 = setInterval(this, "colorNormal", 100);
        return;
    } // end if
    var _loc3 = new Color(this);
    var _loc2 = colorObj.normal;
    _loc3.setTransform(_loc2);
    clearInterval(color_timer2);
} // End of the function
function changeColorSelf(cc, time_f)
{
    clearInterval(color_timer2);
    var _loc3 = new Color(this);
    var _loc2 = colorObj[cc];
    _loc3.setTransform(_loc2);
    color_timer2 = setInterval(this, "backColorSelf", time_f);
} // End of the function
function changeColor(cc, time_f)
{
    opp.changeColorSelf(cc, time_f);
} // End of the function
function backColorSelf()
{
    if (_level0.inPause)
    {
        clearInterval(color_timer2);
        color_timer2 = setInterval(this, "backColorSelf", 100);
        return;
    } // end if
    var _loc3 = new Color(this);
    var _loc2 = colorObj.normal;
    _loc3.setTransform(_loc2);
    clearInterval(color_timer2);
} // End of the function
function backColor()
{
    var _loc3 = new Color(opp);
    var _loc2 = colorObj.normal;
    _loc3.setTransform(_loc2);
    clearInterval(color_timer);
} // End of the function
function topLayer()
{
    if (_parent.getDepth() < opp._parent.getDepth())
    {
        _parent.swapDepths(opp._parent);
    } // end if
} // End of the function
function hasObj()
{
    if (skill_loader.getNextHighestDepth() > 0)
    {
        return (true);
    }
    else
    {
        return (false);
    } // end else if
} // End of the function
function getObj()
{
    var _loc3 = skill_loader.getNextHighestDepth() - 1;
    if (_loc3 < 0)
    {
        return;
    } // end if
    var _loc2 = skill_loader["skill" + _loc3];
    if (!(_loc2 instanceof MovieClip))
    {
        return;
    } // end if
    return (_loc2);
} // End of the function
function getObjNum()
{
    var _loc2 = skill_loader.getNextHighestDepth();
    return (_loc2);
} // End of the function
function getObjDis()
{
    var _loc3 = skill_loader.getNextHighestDepth() - 1;
    if (_loc3 < 0)
    {
        return;
    } // end if
    var _loc2 = skill_loader["skill" + _loc3]._x;
    if (_loc2 == undefined)
    {
        return;
    } // end if
    return (Math.abs(_loc2 - opp._x));
} // End of the function
function to_PK_l()
{
    if (dir == 1)
    {
        if (Key.isDown(f))
        {
            this.toAction("roll_f");
        }
        else if (Key.isDown(b))
        {
            this.toAction("roll_b");
        }
        else
        {
            this.toAction("roll_f");
        } // end else if
    }
    else if (dir == -1)
    {
        if (Key.isDown(f))
        {
            this.toAction("roll_b");
        }
        else if (Key.isDown(b))
        {
            this.toAction("roll_f");
        }
        else
        {
            this.toAction("roll_f");
        } // end else if
    } // end else if
} // End of the function
function to_PK()
{
    if (status_1 == "jump_f" || status_1 == "jump_far" || status_1 == "jump" || status_1 == "jump_b")
    {
        this.jumpSkill("heavyHit");
        return;
    } // end if
    this.toSkill("heavyHit");
} // End of the function
function to_key_s()
{
    if (mode_key == "easy" && inBurst)
    {
        if (Key.isDown(f) && dir == 1)
        {
            this.toSkill(skillObj.busrt_a);
        }
        else if (Key.isDown(b) && dir == -1)
        {
            this.toSkill(skillObj.busrt_a);
        }
        else if (Key.isDown(f) && dir == -1)
        {
            this.toSkill(skillObj.busrt_d);
        }
        else if (Key.isDown(b) && dir == 1)
        {
            this.toSkill(skillObj.busrt_d);
        }
        else
        {
            this.toSkill(skillObj.busrt_a);
        } // end else if
    }
    else if (Key.isDown(f) && dir == 1)
    {
        this.toAction("burst_a");
    }
    else if (Key.isDown(b) && dir == -1)
    {
        this.toAction("burst_a");
    }
    else if (Key.isDown(f) && dir == -1)
    {
        this.toAction("burst_d");
    }
    else if (Key.isDown(b) && dir == 1)
    {
        this.toAction("burst_d");
    }
    else if (Key.isDown(d))
    {
        this.toAction("burst_p");
    }
    else
    {
        this.toAction("burst_p");
    } // end else if
} // End of the function
function to_key_s2()
{
    if (dir == 1)
    {
        if (Key.isDown(f))
        {
            this.toAction("roll_f");
        }
        else if (Key.isDown(b))
        {
            this.toAction("roll_b");
        }
        else
        {
            this.toAction("roll_f");
        } // end else if
    }
    else if (dir == -1)
    {
        if (Key.isDown(f))
        {
            this.toAction("roll_b");
        }
        else if (Key.isDown(b))
        {
            this.toAction("roll_f");
        }
        else
        {
            this.toAction("roll_f");
        } // end else if
    } // end else if
} // End of the function
function to_kick()
{
} // End of the function
function to_kick_l()
{
} // End of the function
function to_punch()
{
} // End of the function
function to_punch_l()
{
} // End of the function
function to_double_f()
{
    this.toAction("dash_f");
} // End of the function
function to_double_b()
{
    this.toAction("dash_b");
} // End of the function
function to_double_d()
{
} // End of the function
var frameCount_temp = 0;
var record_action_totalFrame = ["stand", "walk_f", "walk_b", "dash_f", "dash_b", "land", "land2", "squat"];
var record_filter_array = ["stand", "walk_f", "walk_b", "land", "land2", "squat"];
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
