class Orochi_AI extends Orochi_role
{
    var toSkill_temp, toStatus, toStatus_temp, noAct, dis_array, skill_dis, _x, opp, dis, winTimes, actionType, cpu_control2, combo_rate0, combo_rate, attack_rate0, attack_rate, hold_rate0, hold_rate, attack_s, wait_frame0, wait_frame, life, life_max, dir, onEgde, status_2, status_3, status_4, inBurst, redBlood, burst, skill_list, skill2_dis, dis_num, superCheck, burst_mode, inCount, status_1, land_Y, skillObj, mc, comboClass, _currentframe, skill_now, onHit, skill_next, delay, inFreeze, control, statusClear, checkSide, showHits_end, delaySkill, skill_delay, skillSuperCheck, powerDecType, burstCheck, powerDec, powerDec2, powerDecType2, delayTimer, Vx, gotoAndStop, Vwalk, Vdash, Vy, Vjump_x, Vjump_y, holdFreeze, jumpSkill, _y;
    function Orochi_AI()
    {
        super();
        toSkill_temp = toSkill;
        toStatus_temp = toStatus;
        toSkill = noAct;
        dis_array = new Array();
        skill_dis = new Array();
    } // End of the function
    function getDis()
    {
        dis = Math.abs(_x - opp._x);
        if (isNaN(dis))
        {
            dis = 155;
        } // end if
        return (dis);
    } // End of the function
    function initStrage()
    {
        this.initPlus();
        var _loc2;
        if (opp.winTimes >= winTimes && opp.winTimes > 0)
        {
            actionType = "attack";
            cpu_control2 = cpu_attack;
        }
        else if (opp.winTimes < winTimes)
        {
            _loc2 = Math.random();
            if (_loc2 < 0.400000)
            {
                actionType = "wander";
                cpu_control2 = cpu_wander;
            }
            else if (_loc2 < 0.800000)
            {
                actionType = "defend";
                cpu_control2 = cpu_defend;
            }
            else
            {
                actionType = "normal";
                cpu_control2 = cpu_normal;
            } // end else if
        }
        else
        {
            _loc2 = Math.random();
            if (_loc2 < 0)
            {
                actionType = "wander";
                cpu_control2 = cpu_wander;
            }
            else if (_loc2 < 0.330000)
            {
                actionType = "defend";
                cpu_control2 = cpu_defend;
            }
            else if (_loc2 < 0.660000)
            {
                actionType = "attack";
                cpu_control2 = cpu_attack;
            }
            else
            {
                actionType = "normal";
                cpu_control2 = cpu_normal;
            } // end else if
        } // end else if
    } // End of the function
    function initPlus()
    {
        combo_rate = combo_rate0;
        attack_rate = attack_rate0;
        hold_rate = hold_rate0;
        attack_s = attack_s0;
        wait_frame = wait_frame0;
    } // End of the function
    function cpu_control()
    {
        if (this.checkDefend())
        {
            return (true);
        } // end if
        if (this.checkAction())
        {
            return (true);
        } // end if
        this.cpu_control2();
    } // End of the function
    function cpu_normal()
    {
        this.initPlus();
        if (this.checkAttack())
        {
            return (true);
        } // end if
        this.checkWait();
    } // End of the function
    function cpu_defend()
    {
        this.initPlus();
        hold_rate = hold_rate * 1.300000;
        var _loc2 = this.action_select("action_1", "defend");
        this.toSkill(_loc2);
    } // End of the function
    function cpu_attack()
    {
        this.initPlus();
        attack_rate = attack_rate * 1.300000;
        if (this.checkAttack())
        {
            return (true);
        } // end if
        this.checkWait();
    } // End of the function
    function cpu_wander()
    {
        this.initPlus();
        var _loc2 = this.action_select("action_1", "wander");
        this.toSkill(_loc2);
    } // End of the function
    function checkStrage()
    {
        if (_level0.player_type == "trainning")
        {
            var _loc3 = Math.random();
            if (_loc3 < 0.330000)
            {
                actionType = "defend";
                cpu_control2 = cpu_defend;
            }
            else if (_loc3 < 0.660000)
            {
                actionType = "attack";
                cpu_control2 = cpu_attack;
            }
            else if (_level0.level > 4)
            {
                actionType = "attack";
                cpu_control2 = cpu_attack;
            }
            else
            {
                actionType = "wander";
                cpu_control2 = cpu_wander;
            } // end else if
            return;
        } // end if
        var _loc2 = _level0.life_power_mc.time_mc.time_txt.text;
        if (_loc2 > 0 && _loc2 < 15 && life < opp.life)
        {
            actionType = "attack";
            cpu_control2 = cpu_attack;
        }
        else if (_loc2 > 0 && _loc2 < 15 && life > opp.life)
        {
            actionType = "defend";
            cpu_control2 = cpu_defend;
        }
        else if (life < life_max / 4)
        {
            actionType = "defend";
            cpu_control2 = cpu_defend;
        }
        else if (opp.life / life > 1.300000)
        {
            actionType = "attack";
            cpu_control2 = cpu_attack;
        }
        else if (life / opp.life > 1.300000)
        {
            actionType = "wander";
            cpu_control2 = cpu_wander;
        }
        else if (actionType != "normal")
        {
            this.initStrage();
        } // end else if
    } // End of the function
    function checkAction()
    {
        var _loc3;
        if (this.combo_check2())
        {
            return (true);
        }
        else if (this.getDis() > 300 && !_level0.KO)
        {
            if (this.checkBurst())
            {
                return (true);
            } // end if
        }
        else if (opp.status_3 == "down" && !_level0.KO)
        {
            if (this.checkBurst())
            {
                return (true);
            } // end if
            _loc3 = this.action_select("action_1", "down");
            this.toSkill(_loc3);
            return (true);
        }
        else if (opp.dir == dir)
        {
            if (this.checkAttack())
            {
                return (true);
            } // end if
        }
        else if (opp.status_1 == "roll_f" && this.getDis() < 200)
        {
            var _loc2 = this.action_select("action_1", "oppRoll");
            if (_loc2 != undefined)
            {
                this.toSkill(_loc2);
                return (true);
            } // end if
        }
        else if (onEgde)
        {
            _loc2 = this.action_select("action_1", "onEgde");
            this.toSkill(_loc2);
            return (true);
        }
        else if (opp.status_1 == "hold_u" && int(Math.random() * 100) < attack_s)
        {
            _loc2 = this.action_select("action_1", "pos_down");
            if (_loc2 != undefined)
            {
                this.toSkill(_loc2);
                return (true);
            } // end if
        }
        else if (opp.status_1 == "hold_d" && int(Math.random() * 100) < attack_s)
        {
            _loc2 = this.action_select("action_1", "pos_up");
            if (_loc2 != undefined)
            {
                this.toSkill(_loc2);
                return (true);
            } // end else if
        } // end else if
    } // End of the function
    function checkDefend()
    {
        var _loc2 = int(Math.random() * 100);
        if (_loc2 >= hold_rate)
        {
            return (false);
        } // end if
        if (status_2 != "land")
        {
            return (false);
        } // end if
        if (status_3 != "normal")
        {
            return (false);
        } // end if
        if (status_4 != "normal")
        {
            return (false);
        } // end if
        if (this.isNeedDefend())
        {
            this.defend_start();
            return (true);
        }
        else
        {
            return (false);
        } // end else if
    } // End of the function
    function isNeedDefend()
    {
        if (dir == opp.dir && (opp._x - _x) * dir > 0)
        {
            return (false);
        }
        else if (opp.hit_over())
        {
            if (opp.hasObj())
            {
                return (true);
            }
            else
            {
                return (false);
            } // end else if
        }
        else
        {
            return (true);
        } // end else if
    } // End of the function
    function checkAttack()
    {
        var _loc2 = int(Math.random() * 100);
        if (_loc2 >= attack_rate)
        {
            return (false);
        } // end if
        this.attack_start();
        return (true);
    } // End of the function
    function checkWait()
    {
        if (wait_frame == 0)
        {
            this.attack_start();
            return;
        } // end if
        var wait_f = int(Math.random() * wait_frame) + 5;
        var owner = this;
        function onEnterFrame()
        {
            if (_level0.inPause)
            {
                return;
            } // end if
            if (owner.inFreeze)
            {
                return;
            } // end if
            --wait_f;
            if (wait_f < 0)
            {
                delete this.onEnterFrame;
                owner.attack_start();
                _level0.out("checkWait: 结束");
            } // end if
        } // End of the function
    } // End of the function
    function checkBurst()
    {
        if (inBurst)
        {
            return;
        } // end if
        var _loc3 = int(Math.random() * 100);
        if (redBlood)
        {
            _loc3 = 0;
        } // end if
        if (_loc3 > attack_s)
        {
            return (false);
        } // end if
        var _loc2;
        this.checkStrage();
        if (actionType == "defend")
        {
            _loc2 = "defend";
        }
        else if (actionType == "attack")
        {
            _loc2 = "attack";
        }
        else
        {
            _loc2 = "power";
        } // end else if
        if (_level0.level > 4 && _loc2 == "defend")
        {
            _loc2 = "attack";
        } // end if
        if (this.burst(_loc2))
        {
            return (true);
        } // end if
    } // End of the function
    function skill_select()
    {
        skill_list = [];
        this.getDis();
        if (opp.isHitEnd() && skill2_dis.length > 0)
        {
            var _loc3 = 2;
            for (var _loc2 = 0; _loc2 < dis_num; ++_loc2)
            {
                if (dis < dis_array[_loc2])
                {
                    if (opp.freeze_frame() < _loc3)
                    {
                        break;
                        continue;
                    } // end if
                    if (skill2_dis[_loc2])
                    {
                        skill_list = skill2_dis[_loc2];
                        break;
                        continue;
                    } // end if
                    _loc3 = _loc3 + 3;
                    continue;
                } // end if
            } // end of for
        } // end if
        if (skill_list.length == 0)
        {
            for (var _loc2 = 0; _loc2 < dis_num; ++_loc2)
            {
                if (dis < dis_array[_loc2])
                {
                    skill_list = skill_dis[_loc2];
                    break;
                } // end if
            } // end of for
        } // end if
        var _loc4 = skill_list.length;
        var _loc5 = int(Math.random() * _loc4);
        var _loc6 = skill_list[_loc5];
        return (_loc6);
    } // End of the function
    function action_select(object, member)
    {
        var _loc4;
        var _loc7;
        var _loc3 = this[object][member];
        var _loc6 = delay_frames[member];
        var _loc5 = _loc3.length;
        this.getDis();
        for (var _loc2 = 0; _loc2 < _loc5; ++_loc2)
        {
            if (dis < _loc6[_loc2])
            {
                _loc4 = _loc3[_loc2];
                break;
            } // end if
        } // end of for
        var _loc9 = _loc4.length;
        var _loc8 = int(Math.random() * _loc9);
        _loc7 = _loc4[_loc8];
        return (_loc7);
    } // End of the function
    function super_select()
    {
        var _loc4 = int(Math.random() * 100);
        if (_loc4 >= attack_s)
        {
            return (false);
        } // end if
        if (opp.freeze_frame() < 4)
        {
            return (false);
        } // end if
        var _loc3 = this.action_select("action_1", "super");
        var _loc2 = this.superCheck(_loc3);
        if (_loc2 == false)
        {
            return (false);
        }
        else if (_loc2 == "notSpuerSkill")
        {
            return (false);
        }
        else
        {
            return (_loc3);
        } // end else if
    } // End of the function
    function busrt_select()
    {
        if (inBurst != true)
        {
            return (false);
        } // end if
        var _loc3 = int(Math.random() * 100);
        if (_loc3 >= attack_s)
        {
            return (false);
        } // end if
        if (opp.freeze_frame() < 4)
        {
            return (false);
        } // end if
        var _loc2 = this.action_select("action_1", "busrt");
        if (_loc2 == undefined)
        {
            return (false);
        } // end if
        return (_loc2);
    } // End of the function
    function attack_start()
    {
        if (opp.superSkill || opp.isBurstSkill)
        {
            if (this.isNeedDefend() && Math.random() * 100 < hold_rate)
            {
                this.defend_start();
                return (false);
            } // end if
        } // end if
        var _loc2;
        var _loc3 = Math.random();
        if (_loc3 < 0.300000)
        {
            _loc2 = this.super_select();
            if (_loc2 == false)
            {
                _loc2 = this.busrt_select();
            } // end if
        }
        else
        {
            _loc2 = this.busrt_select();
            if (_loc2 == false)
            {
                _loc2 = this.super_select();
            } // end if
        } // end else if
        if (_loc2 == false)
        {
            _loc2 = this.skill_select();
        } // end if
        this.toSkill(_loc2);
        opp.checkDefend();
        if (burst_mode == "attack")
        {
        }
        else if (inBurst)
        {
            inCount = false;
        } // end else if
        if (_loc2 == undefined)
        {
            trace ("错误!技能未定义");
            this.stand();
        } // end if
    } // End of the function
    function defend_start()
    {
        var _loc2;
        this.getDis();
        var _loc3 = int(Math.random() * 100);
        if (status_1 == "walk_b")
        {
            _loc2 = "hold_u";
        }
        else if (this.checkMustDefendSkill(opp.status_1))
        {
            _loc2 = "hold_u";
        }
        else if (opp.superSkill || opp.isBurstSkill)
        {
            _loc2 = "hold_u";
        }
        else if (status_1 == "walk_f" || status_1 == "dash_f")
        {
            _loc2 = this.action_select("action_1", "defend_f");
        }
        else if (opp.status_1.indexOf("squat") > -1 && _loc3 < hold_rate && dis < 250)
        {
            _loc2 = "hold_d";
        }
        else if (opp.status_2 == "air" && _loc3 < attack_s && dis < 200 && opp._y + 70 < land_Y)
        {
            _loc2 = skillObj.toAir;
        }
        else if (_loc3 < attack_s)
        {
            _loc2 = this.action_select("action_1", "defendAttack");
        }
        else
        {
            _loc2 = this.action_select("action_1", "defend_h");
        } // end else if
        if (_loc2 == undefined)
        {
            _loc2 = "hold_u";
        } // end if
        this.toSkill(_loc2);
    } // End of the function
    function checkMustDefendSkill(oppSkill)
    {
        var _loc2 = _level0.mustDefendSkill[opp.roleName];
        for (var _loc3 in _loc2)
        {
            if (oppSkill == _loc2[_loc3])
            {
                return (true);
            } // end if
        } // end of for...in
        return (false);
    } // End of the function
    function actionDefend(action)
    {
        if (status_2 != "land")
        {
            return;
        } // end if
        if (status_3 != "normal")
        {
            return;
        } // end if
        if (status_4 != "normal")
        {
            return;
        } // end if
        var _loc4 = int(Math.random() * 100);
        if (_loc4 > attack_s)
        {
            return (false);
        } // end if
        if (action == "roll_f")
        {
            var _loc2 = this.action_select("action_1", "oppRoll");
            if (_loc2 == undefined)
            {
                return (false);
            } // end if
            this.toSkill(_loc2);
        }
        else if (action == "jump" || action == "jump_f")
        {
            _loc2 = this.action_select("action_1", "oppJump");
            if (_loc2 == undefined)
            {
                return (false);
            } // end if
            this.toSkill(_loc2);
        } // end else if
    } // End of the function
    function combo_wait(status_1)
    {
        var role_mc = this;
        var _loc2 = mc;
        var start_frame = comboClass.combo2[status_1];
        if (start_frame == undefined)
        {
            return;
        } // end if
        _loc2.onEnterFrame = function ()
        {
            if (_level0.inPause)
            {
                return;
            } // end if
            if (role_mc.inFreeze)
            {
                return;
            } // end if
            if (_currentframe >= start_frame)
            {
                delete this.onEnterFrame;
                role_mc.combo_check();
            } // end if
        };
    } // End of the function
    function combo_check()
    {
        if (combo_auto[skill_now] != undefined)
        {
            this.combo_select("combo_auto");
            this.combo_start();
            return (true);
        } // end if
        var _loc2 = int(Math.random() * 100);
        if (onHit != true)
        {
            return (false);
        } // end if
        if (opp.status_3 != "hurt" && _loc2 > combo_risk)
        {
            return (false);
        } // end if
        if (combo_oppOnEgde[skill_now] && opp.onEgde != true)
        {
            return (false);
        } // end if
        if (_loc2 < combo_rate)
        {
            this.combo_select("combo_1");
            this.combo_start();
            return (true);
        } // end if
    } // End of the function
    function combo_check2()
    {
        var _loc2 = int(Math.random() * 100);
        if (opp.status_3 != "hurt")
        {
            return (false);
        } // end if
        if (_loc2 >= combo_rate)
        {
            return (false);
        } // end if
        this.combo_select("combo_land");
        if (this.superCheck(skill_next) == false)
        {
            return (false);
        }
        else if (skill_next != undefined)
        {
            this.combo_start();
            return (true);
        } // end else if
    } // End of the function
    function combo_select(combo)
    {
        var _loc2;
        if (inBurst && burst_mode == "attack")
        {
            _loc2 = combo_burst[skill_now];
        } // end if
        if (_loc2 == undefined)
        {
            _loc2 = this[combo][skill_now];
        } // end if
        var _loc4 = _loc2.length;
        var _loc3 = int(Math.random() * _loc4);
        skill_next = _loc2[_loc3];
        if (inBurst && burst_mode == "attack")
        {
            delay = delay_frames[skill_now][_loc3];
        }
        else
        {
            delay = delay_frames[skill_now][_loc3];
        } // end else if
        if (delay == undefined)
        {
            delay = 0;
        } // end if
    } // End of the function
    function combo_start()
    {
        if (skill_next == undefined)
        {
            return;
        } // end if
        if (delay == 0)
        {
            this.toSkill(skill_next, true);
        }
        else
        {
            this.combo_delay();
        } // end else if
    } // End of the function
    function combo_delay()
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
            --delay;
            if (delay <= 0)
            {
                delete this.onEnterFrame;
                this.toSkill(skill_next, true);
            } // end if
        } // End of the function
    } // End of the function
    function start_control()
    {
        control = true;
        this.initStrage();
        toSkill = toSkill_temp;
        toStatus = toStatus_temp;
        this.toStatus_switch("stand");
    } // End of the function
    function toStatus_switch(action)
    {
        if (status_3 == "hurt")
        {
            return;
        } // end if
        this.statusClear();
        this.checkSide();
        this.showHits_end();
        if (delaySkill != "")
        {
            this.toSkill(delaySkill);
            delaySkill = "";
            return;
        } // end if
        this.toStatus(action);
    } // End of the function
    function toSkill(action, cancle)
    {
        if (_level0.inPause)
        {
            return;
        } // end if
        if (opp.isKO)
        {
            return;
        } // end if
        if (_level0.inFreeze)
        {
            this.skill_delay(action);
            return;
        } // end if
        if (action == undefined)
        {
            this.attack_start();
            return;
        } // end if
        var _loc3 = this.superCheck(action);
        if (_loc3 == false)
        {
            this.attack_start();
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
        } // end else if
        if (this.burstCheck(action) == false)
        {
            this.attack_start();
            return;
        } // end if
        skill_now = action;
        if (this[action] != undefined)
        {
            if (this.toStatus(action))
            {
                this.powerDec();
                this.powerDec2();
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
                status_3 = "attack";
                this.powerDec();
                this.powerDec2();
            }
            else
            {
                powerDecType = "";
                powerDecType2 = "";
            } // end else if
        }
        else
        {
            return;
        } // end else if
        if (comboClass.combo2[status_1] != undefined)
        {
            this.combo_wait(action);
        } // end if
        return (true);
    } // End of the function
    function move_walkRun()
    {
        clearInterval(delayTimer);
        var Vx = Vx;
        var S = 0;
        var owner = this;
        this.combo_select("combo_1");
        delete this.onEnterFrame;
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
            owner.do_move(Vx);
            if (owner.getDis() < owner.delay)
            {
                delete this.onEnterFrame;
                if (_level0.level == 5)
                {
                    if (owner.checkDefend())
                    {
                        return;
                    }
                    else
                    {
                        owner.toSkill(owner.skill_next, true);
                    } // end else if
                }
                else
                {
                    owner.toSkill(owner.skill_next, true);
                } // end if
            } // end else if
            if (owner.onEgde)
            {
                ++S;
                if (S > 20)
                {
                    var _loc2 = Math.random();
                    if (_loc2 < 0.200000)
                    {
                        owner.attack();
                    }
                    else
                    {
                        owner.stand();
                    } // end else if
                    delete this.onEnterFrame;
                    return;
                } // end if
            } // end if
            if (owner.opp.status_3 == "attack" && owner.getDis() < 200)
            {
                if (owner.checkDefend())
                {
                    delete this.onEnterFrame;
                } // end if
            }
            else if (owner.opp.hasObj())
            {
                if (owner.checkDefend())
                {
                    delete this.onEnterFrame;
                } // end if
            }
            else if (owner.getDis() < 200)
            {
                delete this.onEnterFrame;
                owner.attack_start();
            } // end else if
        };
    } // End of the function
    function move_squat()
    {
    } // End of the function
    function move_hold()
    {
        clearInterval(delayTimer);
        var opp = opp;
        var _loc5 = dir;
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
            if (owner.checkMustDefendSkill(opp.status_1))
            {
                return;
            } // end if
            if (opp.hasObj() && owner.holdFreeze == false)
            {
                if (opp.getObjNum() > 1)
                {
                    return;
                } // end if
                var _loc3 = opp.getObj();
                var _loc2 = opp.getObjDis();
                if (_loc3._width > 250)
                {
                }
                else if (_loc2 < 130 && _loc2 > 100)
                {
                    var _loc1 = Math.random();
                    if (_loc1 < 0.500000 * owner.hold_rate * 0.010000)
                    {
                        owner.roll_f();
                    } // end if
                    return;
                }
                else
                {
                    return;
                } // end else if
            } // end else if
            if ((opp.mc.hitPos == "up" || opp.status_2 == "air") && owner.status_1 != "hold_u")
            {
                if (_level0.level == 5)
                {
                    owner.hold_u();
                    return;
                }
                else
                {
                    _loc1 = int(Math.random() * 100);
                    if (_loc1 < owner.attack_s)
                    {
                        owner.hold_u();
                        return;
                    } // end if
                } // end else if
            }
            else if ((opp.status_1.indexOf("squat") > -1 || opp.mc.hitPos == "down") && owner.status_1 != "hold_d")
            {
                owner.hold_d();
                return;
            } // end else if
            if (opp.status_3 != "attack" && !opp.hasObj() && owner.holdFreeze == false)
            {
                if (owner.status_1 == "hold_d")
                {
                    owner.squat();
                }
                else
                {
                    owner.stand();
                } // end else if
            }
            else if (owner.holdFreeze == false && opp.hit_over())
            {
                _level0.out("防御中检测对手收招");
                if (owner.checkAttack())
                {
                }
                else if (owner.status_1 == "hold_d")
                {
                    owner.squat();
                }
                else
                {
                    owner.stand();
                } // end else if
            } // end else if
        };
    } // End of the function
    function stand()
    {
        this.statusClear();
        status_1 = "stand";
        this.gotoAndStop("stand");
        this.cpu_control();
    } // End of the function
    function squat()
    {
        if (status_2 != "land" || status_3 != "normal")
        {
            return;
        } // end if
        this.statusClear();
        this.gotoAndStop("squat");
        status_1 = "squat";
        this.cpu_control();
    } // End of the function
    function attack()
    {
        this.attack_start();
    } // End of the function
    function wait()
    {
        this.statusClear();
        status_1 = "stand";
        this.gotoAndStop("stand");
        this.checkWait();
    } // End of the function
    function waitStand()
    {
        this.statusClear();
        status_1 = "stand";
        this.gotoAndStop("stand");
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
            if (owner.opp.status_3 != "down")
            {
                delete this.onEnterFrame;
                owner.attack_start();
            } // end if
        };
    } // End of the function
    function walk_f()
    {
        if (status_2 != "land" || status_3 != "normal")
        {
            return;
        } // end if
        Vx = dir * Vwalk;
        this.gotoAndStop("walk_f");
        status_1 = "walk_f";
        clearInterval(delayTimer);
        delayTimer = setInterval(this, "move_walkRun", 5);
    } // End of the function
    function walk_b()
    {
        if (status_2 != "land" || status_3 != "normal")
        {
            return;
        } // end if
        if (opp.status_3 == "attack")
        {
            this.hold_u();
            return;
        } // end if
        Vx = dir * -Vwalk;
        this.gotoAndStop("walk_b");
        status_1 = "walk_b";
        clearInterval(delayTimer);
        delayTimer = setInterval(this, "move_walkRun", 5);
    } // End of the function
    function dash_f()
    {
        if (status_2 != "land" || status_3 != "normal")
        {
            return;
        } // end if
        Vx = dir * Vdash;
        this.gotoAndStop("dash_f");
        status_1 = "dash_f";
        clearInterval(delayTimer);
        delayTimer = setInterval(this, "move_walkRun", 5);
    } // End of the function
    function dash_b()
    {
        if (status_2 != "land" || status_3 != "normal")
        {
            return;
        } // end if
        this.gotoAndStop("dash_b");
        status_1 = "dash_b";
        Vx = -26;
        Vy = 17;
        status_2 = "air";
    } // End of the function
    function hold()
    {
        this.hold_u();
    } // End of the function
    function hold_u()
    {
        if (status_2 != "land" || status_3 != "normal")
        {
            return;
        } // end if
        this.gotoAndStop("hold_u");
        status_1 = "hold_u";
        status_4 = "hold";
        clearInterval(delayTimer);
        delayTimer = setInterval(this, "move_hold", 5);
    } // End of the function
    function hold_d()
    {
        if (status_2 != "land" || status_3 != "normal")
        {
            return;
        } // end if
        this.gotoAndStop("hold_d");
        status_1 = "hold_d";
        status_4 = "hold";
        clearInterval(delayTimer);
        delayTimer = setInterval(this, "move_hold", 5);
    } // End of the function
    function jump_f()
    {
        if (status_2 != "land")
        {
            return;
        } // end if
        status_2 = "air";
        this.gotoAndStop("jump_f");
        status_1 = "jump_f";
        Vx = Vjump_x;
        Vy = Vjump_y;
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
            owner.air_check();
        };
    } // End of the function
    function jump_b()
    {
        if (status_2 != "land")
        {
            return;
        } // end if
        status_2 = "air";
        this.gotoAndStop("jump_b");
        status_1 = "jump_b";
        Vx = -Vjump_x;
        Vy = Vjump_y;
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
            owner.air_check();
        };
    } // End of the function
    function jump()
    {
        if (status_2 != "land")
        {
            return;
        } // end if
        status_2 = "air";
        this.gotoAndStop("jump");
        status_1 = "jump";
        Vx = 0;
        Vy = Vjump_y;
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
            owner.air_check();
        };
    } // End of the function
    function punch()
    {
        if (status_2 != "land" || status_3 != "normal")
        {
            return;
        } // end if
        this.gotoAndStop("punch");
        status_1 = "punch";
        status_3 = "attack";
    } // End of the function
    function pitch()
    {
        if (super.pitch())
        {
        }
        else
        {
            this.punch();
        } // end else if
    } // End of the function
    function kick2()
    {
        this.gotoAndStop("kick2");
        status_1 = "kick2";
        status_3 = "attack";
    } // End of the function
    function hold_end()
    {
        holdFreeze = false;
    } // End of the function
    function selectOne(array)
    {
        var _loc1 = array.length;
        var _loc2 = int(Math.random() * _loc1);
        var _loc3 = array[_loc2];
        return (_loc3);
    } // End of the function
    function air_check()
    {
        if (this.getDis() > 350)
        {
            return;
        } // end if
        var _loc2;
        var _loc3;
        if (opp.status_2 == "air" || opp.status_3 == "hurt")
        {
            if (this.getDis() < 150)
            {
                _loc3 = int(Math.random() * 100);
                if (_loc3 > 50)
                {
                    _loc2 = "punch";
                }
                else
                {
                    _loc2 = "kick";
                } // end else if
            }
            else
            {
                _loc2 = "kick";
            } // end else if
            if (mc._currentframe > 7)
            {
                this.jumpSkill(_loc2);
                delete mc.onEnterFrame;
            } // end if
        }
        else if (_y > land_Y - 150 && Vy < 0)
        {
            _loc3 = int(Math.random() * 100);
            if (_loc3 < 30)
            {
                _loc2 = "punch";
            }
            else if (_loc3 < 70)
            {
                _loc2 = "kick";
            }
            else if (_loc3 < 80)
            {
                _loc2 = "punch";
            }
            else if (_loc3 < 90)
            {
                _loc2 = "kick_l";
            }
            else
            {
                _loc2 = "punch_l";
            } // end else if
            this.jumpSkill(_loc2);
            delete mc.onEnterFrame;
        } // end else if
    } // End of the function
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
} // End of Class
