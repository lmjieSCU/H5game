class Kyo_role extends role_corn.Role
{
    var _roleName, scale, Vwalk, Vdash, Vjump_x, Vjump_y, Vjump_far, opp_width2, frameOffset, superList, burstList, superMaxList, skillSuperMapping, skillObj, winPoseArray, record_skill_totalFrame, comboClass, colorObj, input_pre, status_1, mc, status_2, status_3, gotoAndStop, jumpSkill, d, f, dir, b, toSkill, mode_key, pitch;
    function Kyo_role()
    {
        super();
        _roleName = "Kyo";
        scale = 100;
        Vwalk = 11;
        Vdash = 28;
        Vjump_x = 13;
        Vjump_y = 38;
        Vjump_far = 20;
        opp_width2 = 60;
        frameOffset = 2;
        superList = {sk29: 1, sk31: 1};
        burstList = {sk_s3: 1, sk3: 1};
        superMaxList = {sk29_s: 1, sk31_s: 1};
        skillSuperMapping = {sk29: "sk29_s", sk31: "sk31_s"};
        skillObj.s1 = "sk29";
        skillObj.s2 = "sk31";
        skillObj.busrt_a = "sk_s3";
        skillObj.busrt_d = "sk3";
        skillObj.toAir = "sk0";
        winPoseArray = ["end", "end2"];
        record_skill_totalFrame = ["sk1_2", "sk28"];
        comboClass = new Kyo_Combo(this);
        this.preCheck();
        colorObj.fire_red1 = {ra: "100", rb: "255", ga: "100", gb: "80", ba: "100", bb: "0", aa: "100", ab: "0"};
        colorObj.fire_red2 = {ra: "-45", rb: "255", ga: "-100", gb: "200", ba: "-100", bb: "0", aa: "100", ab: "0"};
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
    } // End of the function
    function sk1_2()
    {
        status_1 = "sk1_2";
        mc.gotoAndPlay("s_2");
    } // End of the function
    function sk32()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_1 = "sk32";
        status_3 = "attack";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk3()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_1 = "sk3";
        status_3 = "attack";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk34()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_1 = "sk34";
        status_3 = "attack";
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
        if (status_1 == "dash_f")
        {
            _loc2 = "sk14";
        }
        else if (Key.isDown(d))
        {
            if (Key.isDown(f) && dir == 1)
            {
                _loc2 = "squatKick_s";
            }
            else if (Key.isDown(b) && dir == -1)
            {
                _loc2 = "squatKick_s";
            }
            else
            {
                _loc2 = "squatKick";
            } // end else if
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
            this.jumpSkill("kick_l");
            return;
        } // end if
        if (Key.isDown(d))
        {
            _loc2 = "squatKick_l";
        }
        else if (Key.isDown(f) && dir == 1)
        {
            _loc2 = "kick2";
        }
        else if (Key.isDown(b) && dir == -1)
        {
            _loc2 = "kick2";
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
            if (Key.isDown(d))
            {
                this.jumpSkill("punch_s");
            }
            else
            {
                this.jumpSkill("punch");
            } // end else if
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
        } // end if
        if (Key.isDown(d))
        {
            _loc2 = "squatPunch_l";
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
