class Kula_role extends role_corn.Role
{
    var _roleName, scale, Vwalk, Vdash, Vjump_x, Vjump_y, Vjump_far, opp_width2, superList, burstList, superMaxList, skillSuperMapping, winPoseArray, skillObj, comboClass, colorObj, input_pre, status_2, status_1, gotoAndStop, status_3, jumpSkill, d, toSkill, f, dir, b, mode_key, pitch;
    function Kula_role()
    {
        super();
        _roleName = "Kula";
        scale = 100;
        Vwalk = 11;
        Vdash = 28;
        Vjump_x = 13;
        Vjump_y = 39;
        Vjump_far = 20;
        opp_width2 = 60;
        superList = {sk_s_bingren: 1, sk_s_luanwu: 1, sk_tibing: 1};
        burstList = {sk_s_xingchen: 1, sk_s_jiejie: 1};
        superMaxList = {sk_s_bingren_s: 1, sk_s_luanwu_s: 1, sk_tibing_s: 1};
        skillSuperMapping = {sk_s_bingren: "sk_s_bingren_s", sk_s_luanwu: "sk_s_luanwu_s", sk_tibing: "sk_tibing_s"};
        winPoseArray = ["end", "end2"];
        skillObj.s1 = "sk_s_bingren";
        skillObj.s2 = "sk_s_luanwu";
        skillObj.s3 = "sk_tibing";
        skillObj.busrt_a = "sk_s_xingchen";
        skillObj.busrt_d = "sk_s_jiejie";
        skillObj.toAir = "sk_fdfp";
        comboClass = new Kula_Combo(this);
        this.preCheck();
        colorObj.fire_red1 = {ra: "100", rb: "255", ga: "100", gb: "110", ba: "100", bb: "0", aa: "100", ab: "0"};
        colorObj.fire_red2 = {ra: "100", rb: "255", ga: "100", gb: "210", ba: "100", bb: "0", aa: "100", ab: "0"};
        colorObj.fire_blue1 = {ra: "100", rb: "0", ga: "100", gb: "0", ba: "100", bb: "255", aa: "100", ab: "0"};
        colorObj.fire_blue2 = {ra: "100", rb: "-100", ga: "100", gb: "-50", ba: "100", bb: "255", aa: "100", ab: "0"};
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
    } // End of the function
    function sk_dfp_s3()
    {
    } // End of the function
    function kick4()
    {
        if (status_2 == "air")
        {
            this.sk_ZSSJ2();
            return;
        } // end if
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_1 = "kick_l";
        this.gotoAndStop(status_1);
        status_3 = "attack";
    } // End of the function
    function kick5()
    {
        if (status_2 == "air")
        {
            this.sk_ZSSJ();
            return;
        } // end if
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_1 = "kick";
        this.gotoAndStop(status_1);
        status_3 = "attack";
    } // End of the function
    function sk_ZSSJ()
    {
        status_1 = "sk_ZSSJ";
        this.gotoAndStop(status_1);
        status_3 = "attack";
    } // End of the function
    function sk_ZSSJ2()
    {
        status_1 = "sk_ZSSJ2";
        this.gotoAndStop(status_1);
        status_3 = "attack";
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
            if (Key.isDown(f) && dir == 1)
            {
                _loc2 = "sk_huaxing";
            }
            else if (Key.isDown(b) && dir == -1)
            {
                _loc2 = "sk_huaxing";
            }
            else
            {
                _loc2 = "squatKick_l";
            } // end else if
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
                _loc2 = "sk_bingdian";
            }
            else if (Key.isDown(b) && dir == -1)
            {
                _loc2 = "sk_bingdian";
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
