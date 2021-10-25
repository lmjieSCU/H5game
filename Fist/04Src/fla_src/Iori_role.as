class Iori_role extends role_corn.Role
{
    var _roleName, scale, Vwalk, Vdash, Vjump_x, Vjump_y, Vjump_far, opp_width2, superList, burstList, superMaxList, skillSuperMapping, winPoseArray, skillObj, record_skill_totalFrame, comboClass, colorObj, input_pre, status_2, opp, toStatus, status_3, status_1, gotoAndStop, Vx, Vy, onHit, _x, dir, _y, egde_max, egde_min, topLayer, gotoAndPlay, jumpSkill, d, toSkill, f, b, mode_key, pitch;
    function Iori_role()
    {
        super();
        _roleName = "Iori";
        scale = 100;
        Vwalk = 11;
        Vdash = 28;
        Vjump_x = 13;
        Vjump_y = 39;
        Vjump_far = 20;
        opp_width2 = 60;
        superList = {sk_s1: 1, sk_s_89b: 1, sk_s_caihua: 1};
        burstList = {sk_s_qianzai2: 1, sk_s_3shenji2: 1};
        superMaxList = {sk_s1_s: 1, sk_s_89b_s: 1};
        skillSuperMapping = {sk_s1: "sk_s1_s", sk_s_89b: "sk_s_89b_s"};
        winPoseArray = ["end", "end2"];
        skillObj.s1 = "sk_s1";
        skillObj.s2 = "sk_s_89b";
        skillObj.busrt_a = "sk_s_qianzai2";
        skillObj.busrt_d = "sk_s_3shenji2";
        skillObj.toAir = "sk0";
        record_skill_totalFrame = ["sk_s1", "sk_s4", "sk_s3"];
        comboClass = new Iori_Combo(this);
        this.preCheck();
        colorObj.fire_red1 = {ra: "100", rb: "255", ga: "100", gb: "80", ba: "100", bb: "0", aa: "100", ab: "0"};
        colorObj.fire_red2 = {ra: "-100", rb: "255", ga: "-100", gb: "100", ba: "-100", bb: "0", aa: "100", ab: "0"};
        colorObj.fire_blue1 = {ra: "100", rb: "0", ga: "100", gb: "0", ba: "100", bb: "255", aa: "100", ab: "0"};
        colorObj.fire_blue2 = {ra: "-100", rb: "178", ga: "-100", gb: "96", ba: "-100", bb: "239", aa: "100", ab: "0"};
        colorObj.ice1 = {ra: "-100", rb: "255", ga: "-50", gb: "255", ba: "100", bb: "255", aa: "100", ab: "0"};
    } // End of the function
    function preCheck()
    {
        input_pre.roll_f = 10;
        input_pre.roll_b = 10;
        input_pre.land = 0;
        input_pre.land2 = 0;
        input_pre.sk4 = 15;
        input_pre.getup1 = 20;
        input_pre.getup2 = 20;
    } // End of the function
    function sk4()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        if (opp.mc.catched)
        {
            this.toStatus("stand");
            return (false);
        } // end if
        status_3 = "attack";
        status_1 = "sk4";
        this.gotoAndStop(status_1);
        return (true);
    } // End of the function
    function sk_s_89b()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        if (opp.mc.in89b)
        {
            return (false);
        } // end if
        status_1 = "sk_s_89b";
        status_3 = "attack";
        this.gotoAndStop(status_1);
        return (true);
    } // End of the function
    function sk_s_89b_s()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        if (opp.mc.in89b)
        {
            return (false);
        } // end if
        status_1 = "sk_s_89b_s";
        status_3 = "attack";
        this.gotoAndStop(status_1);
        return (true);
    } // End of the function
    function sk_s3()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_3 = "attack";
        status_1 = "sk_s3";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk_s4()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_3 = "attack";
        status_1 = "sk_s4";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk_s_caihua0()
    {
        return (false);
    } // End of the function
    function airBack()
    {
        Vx = -35;
        Vy = 22;
        status_1 = "airBack";
        status_3 = "attack";
        this.gotoAndStop(status_1);
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
            if (status_1 == "sk4")
            {
                this.gotoAndPlay("nohit");
            }
            else
            {
                this.toStatus("stand");
            } // end else if
        } // end else if
    } // End of the function
    function to_kick()
    {
        var _loc2;
        if (status_1 == "jump_f" || status_1 == "jump_far" || status_1 == "jump" || status_1 == "jump_b")
        {
            this.jumpSkill("kick");
            return;
        } // end if
        if (Key.isDown(d))
        {
            _loc2 = "squatKick";
        }
        else
        {
            _loc2 = "kick";
        } // end else if
        this.toSkill(_loc2);
    } // End of the function
    function to_kick_l()
    {
        var _loc2;
        if (status_1 == "dash_b")
        {
            _loc2 = "airBack";
            this.toSkill(_loc2);
            return;
        }
        else if (status_1 == "jump_f" || status_1 == "jump_far" || status_1 == "jump" || status_1 == "jump_b")
        {
            if (dir == 1)
            {
                if (Key.isDown(f) && _x > opp._x)
                {
                    _loc2 = "kick_s";
                }
                else if (Key.isDown(b) && _x < opp._x)
                {
                    _loc2 = "kick_s";
                }
                else
                {
                    _loc2 = "kick_l";
                } // end else if
            }
            else if (dir == -1)
            {
                if (Key.isDown(b) && _x < opp._x)
                {
                    _loc2 = "kick_s";
                }
                else if (Key.isDown(f) && _x > opp._x)
                {
                    _loc2 = "kick_s";
                }
                else
                {
                    _loc2 = "kick_l";
                } // end else if
            } // end else if
            this.jumpSkill(_loc2);
            return;
        } // end else if
        if (Key.isDown(d))
        {
            _loc2 = "squatKick_l";
        }
        else if (Key.isDown(f) && dir == 1)
        {
            _loc2 = "kick_s1";
        }
        else if (Key.isDown(b) && dir == -1)
        {
            _loc2 = "kick_s1";
        }
        else if ((Key.isDown(b) && dir == 1 || Key.isDown(f) && dir == -1) && (status_1 == "squatPunch_l" || status_1 == "squatKick_l"))
        {
            _loc2 = "sk3";
        }
        else if (mode_key == "easy")
        {
            _loc2 = skillObj.s2;
        }
        else
        {
            _loc2 = "kick_l";
        } // end else if
        this.toSkill(_loc2);
    } // End of the function
    function to_punch()
    {
        var _loc2;
        if (status_1 == "jump_f" || status_1 == "jump_far" || status_1 == "jump" || status_1 == "jump_b")
        {
            this.jumpSkill("punch");
            return;
        } // end if
        if (Key.isDown(d))
        {
            if (Key.isDown(f) && dir == 1)
            {
                _loc2 = "sk_hang";
            }
            else if (Key.isDown(b) && dir == -1)
            {
                _loc2 = "sk_hang";
            }
            else
            {
                _loc2 = "squatPunch";
            } // end else if
        }
        else if (status_1 == "dash_f")
        {
            _loc2 = "punch";
        }
        else if (Key.isDown(f) && dir == 1 || Key.isDown(b) && dir == -1)
        {
            if (this.pitch())
            {
                return;
            }
            else
            {
                _loc2 = "punch";
            } // end else if
        }
        else
        {
            _loc2 = "punch";
        } // end else if
        this.toSkill(_loc2);
    } // End of the function
    function to_punch_l()
    {
        var _loc2;
        if (status_1 == "jump_f" || status_1 == "jump_far" || status_1 == "jump" || status_1 == "jump_b")
        {
            this.jumpSkill("punch_l");
            return;
        } // end if
        if (status_1 == "punch_s1")
        {
            if (Key.isDown(f) && dir == 1)
            {
                _loc2 = "punch_s2";
            }
            else if (Key.isDown(b) && dir == -1)
            {
                _loc2 = "punch_s2";
            } // end else if
        }
        else if (Key.isDown(d))
        {
            _loc2 = "squatPunch_l";
        }
        else if (Key.isDown(f) && dir == 1)
        {
            _loc2 = "punch_s1";
        }
        else if (Key.isDown(b) && dir == -1)
        {
            _loc2 = "punch_s1";
        }
        else if ((Key.isDown(b) && dir == 1 || Key.isDown(f) && dir == -1) && (status_1 == "squatPunch_l" || status_1 == "squatKick_l"))
        {
            _loc2 = "sk1_1";
        }
        else if ((Key.isDown(f) && dir == 1 || Key.isDown(b) && dir == -1) && (status_1 == "squatPunch_l" || status_1 == "squatKick_l"))
        {
            _loc2 = "sk4";
        }
        else if (mode_key == "easy")
        {
            _loc2 = skillObj.s1;
        }
        else
        {
            _loc2 = "punch_l";
        } // end else if
        this.toSkill(_loc2);
    } // End of the function
} // End of Class
