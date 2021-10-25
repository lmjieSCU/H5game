class Haohmaru_role extends role_corn.Role
{
    var _roleName, scale, Vwalk, Vdash, Vjump_x, Vjump_y, Vjump_far, opp_width2, superList, burstList, superMaxList, skillSuperMapping, winPoseArray, gotoAndStop, skillObj, comboClass, colorObj, input_pre, status_2, status_3, status_1, _x, Vx, Vy, holdFreeze, inRecord, skill_record, onEgde, d, jumpSkill, f, dir, b, toSkill, mode_key, pitch;
    function Haohmaru_role()
    {
        super();
        _roleName = "Haohmaru";
        scale = 100;
        Vwalk = 11;
        Vdash = 28;
        Vjump_x = 13;
        Vjump_y = 43;
        Vjump_far = 20;
        opp_width2 = 60;
        superList = {dfdf_p: 1, fdbf_p: 1};
        burstList = {df_o: 1, db_o: 1};
        superMaxList = {dfdf_p_max: 1, fdbf_p_max: 1};
        skillSuperMapping = {dfdf_p: "dfdf_p_max", fdbf_p: "fdbf_p_max"};
        winPoseArray = ["end", "end2"];
        var _loc3 = Math.random();
        if (_loc3 > 0.500000)
        {
            this.gotoAndStop("begin");
        }
        else
        {
            this.gotoAndStop("begin2");
        } // end else if
        skillObj.s1 = "dfdf_p";
        skillObj.s2 = "fdbf_p";
        skillObj.busrt_a = "df_o";
        skillObj.busrt_d = "db_o";
        skillObj.toAir = "fdf_p";
        comboClass = new Haohmaru_Combo(this);
        this.preCheck();
        colorObj.fire_red1 = {ra: "100", rb: "255", ga: "-70", gb: "255", ba: "100", bb: "-255", aa: "100", ab: "0"};
        colorObj.fire_red2 = {ra: "100", rb: "255", ga: "-100", gb: "255", ba: "100", bb: "-255", aa: "100", ab: "0"};
        colorObj.fire_blue1 = {ra: "-100", rb: "255", ga: "-100", gb: "255", ba: "100", bb: "255", aa: "100", ab: "0"};
        colorObj.fire_blue2 = {ra: "-100", rb: "255", ga: "-100", gb: "190", ba: "100", bb: "255", aa: "100", ab: "0"};
        colorObj.ice1 = {ra: "-100", rb: "255", ga: "-50", gb: "255", ba: "100", bb: "255", aa: "100", ab: "0"};
    } // End of the function
    function preCheck()
    {
        input_pre.roll_f = 10;
        input_pre.roll_b = 10;
        input_pre.land = 0;
        input_pre.land2 = 0;
    } // End of the function
    function jump_f()
    {
        if (status_2 == "air" && status_3 == "normal" && status_1 != "jump_f")
        {
            var _loc2 = _level0.char_mc._x + _x;
            if (_loc2 < 80)
            {
                Vx = 17;
                Vy = 42;
            }
            else if (_loc2 > 580)
            {
                if (status_1 == "jump")
                {
                    Vx = -17;
                }
                else
                {
                    Vx = 17;
                } // end else if
                Vy = 42;
            }
            else
            {
                return (false);
            } // end else if
        }
        else
        {
            if (status_2 != "land" || holdFreeze || status_3 != "normal")
            {
                return (false);
            } // end if
            Vx = Vjump_x;
            Vy = Vjump_y;
        } // end else if
        status_2 = "air";
        if (inRecord)
        {
            this.skill_record("jump_f");
        } // end if
        this.gotoAndStop("jump_f");
        status_1 = "jump_f";
    } // End of the function
    function jump_air()
    {
        if (status_2 == "air" && onEgde && status_3 == "normal")
        {
            var _loc2 = _level0.char_mc._x + _x;
            if (_loc2 < 80 || _loc2 > 580)
            {
            }
            else
            {
                return (false);
            } // end else if
        }
        else if (status_2 != "land" || holdFreeze || status_3 != "normal")
        {
            return (false);
        } // end else if
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
    function fdf_p()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        if (status_1 == "dash_f")
        {
            status_1 = "rfdf_p";
        }
        else
        {
            status_1 = "fdf_p";
        } // end else if
        status_3 = "attack";
        this.gotoAndStop(status_1);
    } // End of the function
    function fdf_k_l()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        if (status_1 == "dash_f")
        {
            status_1 = "rfdf_kl";
        }
        else
        {
            status_1 = "fdf_kl";
        } // end else if
        status_3 = "attack";
        this.gotoAndStop(status_1);
    } // End of the function
    function fdf_p_l()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        if (status_1 == "dash_f")
        {
            status_1 = "rfdf_pl";
        }
        else
        {
            status_1 = "fdf_pl";
        } // end else if
        status_3 = "attack";
        this.gotoAndStop(status_1);
    } // End of the function
    function to_kick()
    {
        var _loc2;
        if (status_1 == "jump_f" || status_1 == "jump_far" || status_1 == "jump" || status_1 == "jump_b")
        {
            if (Key.isDown(d))
            {
                this.jumpSkill("kick_d");
            }
            else
            {
                this.jumpSkill("kick");
            } // end else if
            return;
        } // end if
        if (Key.isDown(d))
        {
            if (Key.isDown(f) && dir == 1)
            {
                _loc2 = "dash_k";
            }
            else if (Key.isDown(b) && dir == -1)
            {
                _loc2 = "dash_k";
            }
            else
            {
                _loc2 = "squatKick";
            } // end else if
        }
        else if (status_1 == "dash_f")
        {
            _loc2 = "dash_k";
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
        if (status_1 == "jump_f" || status_1 == "jump_far" || status_1 == "jump" || status_1 == "jump_b")
        {
            _loc2 = "kick_l";
            this.jumpSkill(_loc2);
            return;
        } // end if
        if (Key.isDown(d))
        {
            if (Key.isDown(f) && dir == -1)
            {
                _loc2 = "bd_k";
            }
            else if (Key.isDown(b) && dir == 1)
            {
                _loc2 = "bd_k";
            }
            else
            {
                _loc2 = "squatKick_l";
            } // end else if
        }
        else if (status_1 == "dash_f")
        {
            _loc2 = "dash_kl";
        }
        else if (Key.isDown(f) && dir == 1 || Key.isDown(b) && dir == -1)
        {
            _loc2 = "f_kl";
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
                _loc2 = "df_p";
            }
            else if (Key.isDown(b) && dir == -1)
            {
                _loc2 = "df_p";
            }
            else
            {
                _loc2 = "squatPunch";
            } // end else if
        }
        else if (status_1 == "dash_f")
        {
            _loc2 = "dash_p";
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
        if (Key.isDown(d))
        {
            _loc2 = "squatPunch_l";
        }
        else if (status_1 == "dash_f")
        {
            _loc2 = "dash_pl";
        }
        else if (Key.isDown(f) && dir == 1)
        {
            _loc2 = "f_pl";
        }
        else if (Key.isDown(b) && dir == -1)
        {
            _loc2 = "f_pl";
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
    function df_pl()
    {
        if (status_2 == "air")
        {
            this.airdf_pl();
            return;
        }
        else if (status_2 != "land")
        {
            return (false);
        } // end else if
        status_1 = "df_pl";
        status_3 = "attack";
        this.gotoAndStop(status_1);
    } // End of the function
    function airdf_pl()
    {
        status_1 = "airdf_pl";
        status_3 = "attack";
        this.gotoAndStop(status_1);
    } // End of the function
    function df_kl()
    {
        if (status_2 == "air")
        {
            this.airdf_kl();
            return;
        }
        else if (status_2 != "land")
        {
            return (false);
        } // end else if
        status_1 = "df_kl";
        status_3 = "attack";
        this.gotoAndStop(status_1);
    } // End of the function
    function airdf_kl()
    {
        status_1 = "airdf_kl";
        status_3 = "attack";
        this.gotoAndStop(status_1);
    } // End of the function
    function df_p()
    {
        if (status_2 == "air")
        {
            this.airdf_p();
            return;
        }
        else if (status_2 != "land")
        {
            return (false);
        } // end else if
        status_1 = "df_p";
        status_3 = "attack";
        this.gotoAndStop(status_1);
    } // End of the function
    function airdf_p()
    {
        status_1 = "airdf_p";
        status_3 = "attack";
        this.gotoAndStop(status_1);
    } // End of the function
} // End of Class
