class Ryo_role extends role_corn.Role
{
    var _roleName, scale, Vwalk, Vdash, Vjump_x, Vjump_y, Vjump_far, opp_width2, superList, burstList, skillSuperMapping, skillObj, comboClass, colorObj, input_pre, gotoAndStop, status_1, status_3, status_2, jumpSkill, d, toSkill, f, dir, b, mode_key, pitch;
    function Ryo_role()
    {
        super();
        _roleName = "Ryu";
        scale = 100;
        Vwalk = 11;
        Vdash = 28;
        Vjump_x = 13;
        Vjump_y = 39;
        Vjump_far = 20;
        opp_width2 = 60;
        superList = {sk10: 1, sk14: 1, sk13: 1};
        burstList = {sk_s_sys: 1, sk_s_swms: 1};
        skillSuperMapping = {sk10: "sk12", sk14: "sk14_s", sk13: "sk13_s"};
        skillObj.s1 = "sk10";
        skillObj.s2 = "sk14";
        skillObj.s3 = "sk13";
        skillObj.busrt_a = "sk_s_sys";
        skillObj.busrt_d = "sk_s_swms";
        skillObj.toAir = "sk3";
        skillObj.heavyHit = "heavyHit";
        skillObj.flyingObj = "sk1";
        comboClass = new Ryo_Combo(this);
        this.preCheck();
        colorObj.fire_red1 = {ra: "100", rb: "255", ga: "80", gb: "110", ba: "-100", bb: "0", aa: "100", ab: "0"};
        colorObj.fire_red2 = {ra: "80", rb: "255", ga: "-80", gb: "255", ba: "-100", bb: "0", aa: "100", ab: "0"};
        colorObj.fire_blue1 = {ra: "-65", rb: "200", ga: "-65", gb: "200", ba: "100", bb: "255", aa: "100", ab: "0"};
        colorObj.fire_blue2 = {ra: "-65", rb: "200", ga: "-65", gb: "200", ba: "-100", bb: "255", aa: "100", ab: "0"};
        colorObj.ice1 = {ra: "-100", rb: "255", ga: "-50", gb: "255", ba: "100", bb: "255", aa: "100", ab: "0"};
    } // End of the function
    function preCheck()
    {
        input_pre.kick1 = 9;
    } // End of the function
    function kick1()
    {
        this.gotoAndStop("kick1");
        status_1 = "kick1";
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
    function sk_d1()
    {
        status_1 = "sk_d1";
        this.gotoAndStop(status_1);
        status_3 = "attack";
    } // End of the function
    function punch2()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_1 = "punch2";
        this.gotoAndStop(status_1);
        status_3 = "attack";
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
    function sk_bodong_air()
    {
        if (status_2 == "air")
        {
            this.sk_bodong_air2();
            return;
        }
        else if (status_2 != "land")
        {
            return (false);
        } // end else if
        status_1 = "sk_bodong_air";
        status_3 = "attack";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk_bodong_air2()
    {
        status_1 = "sk_bodong_air2";
        status_3 = "attack";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk2()
    {
        if (status_2 == "air")
        {
            this.sk4();
            return;
        }
        else if (status_2 != "land")
        {
            return (false);
        } // end else if
        status_1 = "sk2";
        status_3 = "attack";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk4()
    {
        status_1 = "sk4";
        status_3 = "attack";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk12()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_1 = "sk12";
        status_3 = "attack";
        this.gotoAndStop(status_1);
    } // End of the function
    function sk13()
    {
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_1 = "sk13";
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
            if (Key.isDown(d) && status_1 == "jump_f")
            {
                this.toSkill("sk_d1");
                return;
            }
            else
            {
                _loc2 = "kick_l";
            } // end else if
            this.jumpSkill(_loc2);
            return;
        } // end if
        if (status_1 == "dash_f")
        {
            _loc2 = "kick1";
        }
        else if (Key.isDown(d))
        {
            _loc2 = "squatKick_l";
        }
        else if (Key.isDown(f) && dir == 1)
        {
            _loc2 = "kick1";
        }
        else if (Key.isDown(b) && dir == -1)
        {
            _loc2 = "kick1";
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
        else if (Key.isDown(f) && dir == 1)
        {
            _loc2 = "punch_s";
        }
        else if (Key.isDown(b) && dir == -1)
        {
            _loc2 = "punch_s";
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
