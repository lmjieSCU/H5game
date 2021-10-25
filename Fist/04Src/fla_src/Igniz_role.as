class Igniz_role extends role_corn.Role
{
    var _roleName, scale, Vwalk, Vdash, Vjump_x, Vjump_y, Vjump_far, opp_width2, superList, burstList, superMaxList, skillSuperMapping, record_skill_totalFrame, winPoseArray, gotoAndStop, skillObj, comboClass, colorObj, input_pre, status_2, status_3, status_1, _x, Vx, Vy, holdFreeze, inRecord, skill_record, onEgde, d, jumpSkill, toSkill, mode_key, f, dir, b, pitch;
    function Igniz_role()
    {
        super();
        _roleName = "Igniz";
        scale = 100;
        Vwalk = 11;
        Vdash = 28;
        Vjump_x = 13;
        Vjump_y = 43;
        Vjump_far = 20;
        opp_width2 = 60;
        superList = {dfdf_p: 1, dfdf_k: 1, dfdb_p: 1};
        burstList = {df_o: 1, db_o: 1};
        superMaxList = {dfdf_p_max: 1, dfdf_k_max: 1, dfdb_p_max: 1};
        skillSuperMapping = {dfdf_p: "dfdf_p_max", dfdf_k: "dfdf_k_max", dfdb_p: "dfdb_p_max"};
        record_skill_totalFrame = ["fdf_p"];
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
        skillObj.s2 = "dfdf_k";
        skillObj.s3 = "dfdb_p";
        skillObj.busrt_a = "df_o";
        skillObj.busrt_d = "db_o";
        skillObj.toAir = "fdf_p";
        comboClass = new Igniz_Combo(this);
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
        if (status_1 == "jump_f" || status_1 == "jump_far" || status_1 == "jump" || status_1 == "jump_b")
        {
            _loc2 = "kick_l";
            this.jumpSkill(_loc2);
            return;
        } // end if
        if (Key.isDown(d))
        {
            _loc2 = "squatKick_l";
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
            _loc2 = "squatPunch";
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
        }
        else if (mode_key == "easy")
        {
            if (Key.isDown(d))
            {
                _loc2 = skillObj.s3;
            }
            else
            {
                _loc2 = skillObj.s1;
            } // end else if
        }
        else if (Key.isDown(d))
        {
            _loc2 = "squatPunch_l";
        }
        else
        {
            _loc2 = "punch_l";
        } // end else if
        this.toSkill(_loc2);
    } // End of the function
} // End of Class
