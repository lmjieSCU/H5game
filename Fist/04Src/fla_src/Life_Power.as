class Life_Power extends MovieClip
{
    var life_max, lifeBar_num, life_num, life_d, d_p, d_h, life_now, lifeBar_mc, life_mc, life2_mc, lifeBar_length, role, life_length, power_max, powerPoint_num, powerBar_mc, powerPoint_max, power_now, power_mc, powerBar_length, burst_power, burst_powerMax, burst_mc, burst_len, power_length;
    function Life_Power()
    {
        super();
        this.init_life();
        this.init_power();
    } // End of the function
    function init_life()
    {
        life_max = _level0.life_max;
        lifeBar_num = _level0.lifeBar_num;
        if (lifeBar_num > 1)
        {
            life_num.gotoAndStop(lifeBar_num);
        } // end if
        life_d = 30;
        d_p = 30;
        d_h = 2;
        life_now = life_max;
        life_mc = lifeBar_mc.bar;
        life2_mc = lifeBar_mc.bar2;
        lifeBar_length = life_mc._width;
        _level0.out("lifeBar_num:" + lifeBar_num + "   " + life_now);
    } // End of the function
    function reset()
    {
        lifeBar_num = _level0.lifeBar_num;
        if (lifeBar_num > 1)
        {
            life_num.gotoAndStop(lifeBar_num);
        } // end if
        life_now = life_max;
        life_mc._width = lifeBar_length;
        lifeBar_mc.lifeBg.gotoAndStop(1);
    } // End of the function
    function lifeControl(Obj)
    {
        if (_level0.checkNoEnemyMode(role))
        {
            return;
        } // end if
        if (_level0.timeOver)
        {
            return;
        } // end if
        if (life_now == 0)
        {
            return;
        } // end if
        var _loc2 = Obj.d_rate;
        if (_loc2 == undefined)
        {
            _loc2 = 1;
        } // end if
        var _loc4 = _loc2 * d_p;
        life_now = life_now - _loc4;
        Obj.target.life = Obj.target.life - _loc4;
        if (role.opp.mc.continueHit && life_now <= 0 && lifeBar_num == 1)
        {
            life_now = 1;
        }
        else if (life_now <= 0)
        {
            --lifeBar_num;
            if (lifeBar_num > 0)
            {
                life_num.gotoAndStop(lifeBar_num);
            } // end if
            _level0.out("lifeBar_num:" + lifeBar_num + "     " + life_now);
            if (_level0.player_type == "trainning" && lifeBar_num < -1)
            {
                life_now = life_now + life_max;
            }
            else if (lifeBar_num == 0)
            {
                life_now = 0;
                Obj.target.life = 0;
                this.do_KO(Obj.target);
            }
            else
            {
                life_now = life_now + life_max;
            } // end else if
        } // end else if
        life_length = life_now * lifeBar_length / life_max;
        life_mc._width = life_length;
        this.life_dec();
        this.redBlood();
    } // End of the function
    function life_dec()
    {
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
            life2_mc._width = life2_mc._width - 2;
            if (life2_mc._width <= life_mc._width)
            {
                life2_mc._width = life_mc._width;
                delete this.onEnterFrame;
            } // end if
        } // End of the function
    } // End of the function
    function do_KO(role)
    {
        _level0.do_KO(role, role.opp);
        lifeBar_mc.lifeBg.gotoAndStop(1);
    } // End of the function
    function redBlood()
    {
        if (_level0.checkPowerNoLimit(role))
        {
            if (life_mc._width < lifeBar_length / 4 && !role.redBlood)
            {
                lifeBar_mc.lifeBg.gotoAndPlay(2);
                role.redBlood = true;
            }
            else if (life_mc._width >= lifeBar_length / 4 && role.redBlood)
            {
                lifeBar_mc.lifeBg.gotoAndStop(1);
                role.redBlood = false;
            } // end else if
            return;
        } // end if
        if (role.redBlood)
        {
            return;
        } // end if
        if (role.life < role.life_max / 4)
        {
            lifeBar_mc.lifeBg.gotoAndPlay(2);
            role.redBlood = true;
        } // end if
    } // End of the function
    function init_power()
    {
        power_max = _level0.power_max;
        powerPoint_num = _level0.superPoint;
        powerBar_mc.point_mc.gotoAndStop(powerPoint_num + 1);
        powerPoint_max = _level0.powerPoint_max;
        if (powerPoint_num == powerPoint_max)
        {
            powerBar_mc.gotoAndStop("max");
        } // end if
        power_now = 0;
        power_mc = powerBar_mc.bar;
        powerBar_length = power_mc._width;
        power_mc._width = power_now;
        burst_power = 0;
        burst_powerMax = 300;
        burst_len = burst_mc.burst_bar.mask._width;
    } // End of the function
    function reset_power()
    {
        powerBar_mc.point_mc.gotoAndStop(powerPoint_num + 1);
        if (powerPoint_num == powerPoint_max)
        {
            powerBar_mc.gotoAndStop("max");
        } // end if
        power_now = 0;
        burst_power = 0;
        burst_powerMax = 300;
    } // End of the function
    function powerControl(Obj)
    {
        if (Obj.action == "dec")
        {
            if (_level0.checkPowerNoLimit(role))
            {
                return;
            } // end if
            if (powerPoint_num == 0)
            {
                return;
            } // end if
            --powerPoint_num;
            Obj.target.superPoint = powerPoint_num;
            this.point_dec();
            return;
        }
        else if (Obj.action == "burst")
        {
            trace ("powerControl:burst");
            this.powerBurst();
            powerPoint_num = 0;
            Obj.target.superPoint = powerPoint_num;
            return;
        }
        else if (Obj.action == "burstdec")
        {
            burst_power = burst_power - Obj.decNum;
            return;
        }
        else
        {
            if (powerPoint_num == powerPoint_max)
            {
                return;
            } // end if
            var _loc3 = Obj.inc;
            if (inBurst)
            {
                _loc3 = int(_loc3 / 2);
            } // end if
            power_now = power_now + _loc3;
            if (power_now >= power_max)
            {
                ++powerPoint_num;
                Obj.target.superPoint = powerPoint_num;
                this.point_add(Obj.target);
                if (powerPoint_num == powerPoint_max)
                {
                    power_now = 0;
                    powerBar_mc.gotoAndStop("max");
                }
                else
                {
                    power_now = power_now - power_max;
                } // end if
            } // end else if
            power_length = power_now / power_max * powerBar_length;
            power_mc._width = power_length;
        } // end else if
    } // End of the function
    function point_add()
    {
        powerBar_mc.point_mc.nextFrame();
    } // End of the function
    function point_dec()
    {
        powerBar_mc.point_mc.prevFrame();
        powerBar_mc.gotoAndStop(1);
    } // End of the function
    function powerBurst()
    {
        inBurst = true;
        burst_mc.gotoAndPlay(2);
        burst_mc.lv = powerPoint_num;
        burst_power = powerPoint_num * 100;
        this.powerLength();
        powerBar_mc.point_mc.gotoAndStop(1);
        powerBar_mc.gotoAndStop(1);
    } // End of the function
    function startBurst()
    {
        if (role.burst_mode == "defend")
        {
            burst_mc.mode_cn.gotoAndStop("defend");
            burst_mc.mode_en.gotoAndStop("defend");
        }
        else if (role.burst_mode == "attack")
        {
            burst_mc.mode_cn.gotoAndStop("attack");
            burst_mc.mode_en.gotoAndStop("attack");
        }
        else
        {
            burst_mc.mode_cn.gotoAndStop("power");
            burst_mc.mode_en.gotoAndStop("power");
        } // end else if
        var owner = this;
        burst_mc.onEnterFrame = function ()
        {
            if (_level0.inPause)
            {
                return;
            } // end if
            owner.burst_dec();
        };
    } // End of the function
    function burst_dec()
    {
        burst_power = burst_power - 0.100000;
        if (burst_power <= 0)
        {
            burst_power = 0;
            this.burst_end();
            delete burst_mc.onEnterFrame;
        } // end if
        this.powerLength();
    } // End of the function
    function burst_end()
    {
        if (!inBurst)
        {
            return;
        } // end if
        burst_mc.gotoAndPlay("end");
        role.burst_end();
        inBurst = false;
        if (_level0.checkPowerNoLimit(role))
        {
            powerPoint_num = 3;
            role.superPoint = powerPoint_num;
            this.reset_power();
        } // end if
    } // End of the function
    function showBurst_dec(num)
    {
        burst_mc.decNum_mc.play();
        burst_mc.decNum_mc.dec_num = num;
    } // End of the function
    function powerLength()
    {
        var _loc2 = burst_power / burst_powerMax * burst_len;
        burst_mc.burst_bar.mask._width = _loc2;
        return (_loc2);
    } // End of the function
    var inBurst = false;
} // End of Class
