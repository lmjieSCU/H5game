class K_role extends role_corn.Role
{
    var _roleName, scale, Vwalk, Vdash, Vjump_x, Vjump_y, Vjump_far, opp_width2, superList, burstList, superMaxList, skillSuperMapping, record_skill_totalFrame, skillObj, comboClass, colorObj, input_pre, status_2, status_3, status_1, gotoAndStop, mc, jumpSkill, d, toSkill, f, dir, b, mode_key, pitch;
    function K_role()
    {
        super();
        _roleName = "K";
        scale = 100;
        Vwalk = 11;
        Vdash = 28;
        Vjump_x = 13;
        Vjump_y = 39;
        Vjump_far = 20;
        opp_width2 = 60;
        superList = {sk_s1: 1, sk_s2: 1, sk_s3: 1};
        burstList = {sk_s4: 1, sk_s5: 1};
        superMaxList = {sk_s1_s: 1, sk_s3_s: 1};
        skillSuperMapping = {sk_s1: "sk_s1_s", sk_s3: "sk_s3_s"};
        record_skill_totalFrame = ["sk_s4"];
        skillObj.s1 = "sk_s1";
        skillObj.s2 = "sk_s3";
        skillObj.s3 = "sk_s2";
        skillObj.busrt_a = "sk_s4";
        skillObj.busrt_d = "sk_s5";
        skillObj.toAir = "sk_fdfp";
        comboClass = new K_Combo(this);
        this.preCheck();
        colorObj.fire_red1 = {ra: "100", rb: "255", ga: "100", gb: "80", ba: "100", bb: "0", aa: "100", ab: "0"};
        colorObj.fire_red2 = {ra: "-100", rb: "255", ga: "-100", gb: "180", ba: "-100", bb: "0", aa: "100", ab: "0"};
        colorObj.fire_blue1 = {ra: "100", rb: "0", ga: "100", gb: "0", ba: "100", bb: "255", aa: "100", ab: "0"};
        colorObj.fire_blue2 = {ra: "-100", rb: "-100", ga: "-100", gb: "180", ba: "-100", bb: "255", aa: "100", ab: "0"};
        colorObj.ice1 = {ra: "-100", rb: "255", ga: "-50", gb: "255", ba: "100", bb: "255", aa: "100", ab: "0"};
    } // End of the function
    function preCheck()
    {
        input_pre.roll_f = 10;
        input_pre.roll_b = 10;
        input_pre.land = 0;
        input_pre.land2 = 0;
        input_pre.sk_dfp_s2 = 10;
        input_pre.sk_dfp_s3 = 10;
        input_pre.sk_dfk = 19;
    } // End of the function
    function sk_dfp_s2()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_3 = "attack";
        status_1 = "sk_dfp_s2";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk_dfp_s3()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_3 = "attack";
        status_1 = "sk_dfp_s3";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk_fdfp_s2()
    {
        if (mc.played)
        {
            return (false);
        } // end if
        mc.played = true;
        status_3 = "attack";
        mc.gotoAndPlay("s2");
    } // End of the function
    function sk_fdfp2()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_3 = "attack";
        status_1 = "sk_fdfp2";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk_dbk()
    {
        if (status_1 == "kick_s2")
        {
            this.sk_dbk2();
            return;
        } // end if
        if (status_2 == "air")
        {
            this.sk_dbk2();
            return;
        } // end if
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_3 = "attack";
        status_1 = "sk_dbk";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk_dbk2()
    {
        status_3 = "attack";
        status_1 = "sk_dbk2";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk_dbk_2()
    {
        if (status_1 == "kick_s2")
        {
            this.sk_dbk_2_air();
            return;
        } // end if
        if (status_2 == "air")
        {
            this.sk_dbk_2_air();
            return;
        } // end if
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_3 = "attack";
        status_1 = "sk_dbk_2";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk_dbk_2_air()
    {
        status_3 = "attack";
        status_1 = "sk_dbk_2_air";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk_dbp()
    {
        status_3 = "attack";
        status_1 = "sk_dbp";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk_s3()
    {
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
    function sk_s5()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_3 = "attack";
        status_1 = "sk_s5";
        this.gotoAndStop(status_1);
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
        else if (Key.isDown(f) && dir == 1)
        {
            _loc2 = "kick_s2";
        }
        else if (Key.isDown(b) && dir == -1)
        {
            _loc2 = "kick_s2";
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
