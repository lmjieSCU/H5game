class Mai_role extends role_corn.Role
{
    var _roleName, scale, Vwalk, Vdash, Vjump_x, Vjump_y, Vjump_far, opp_width2, superList, burstList, superMaxList, skillSuperMapping, winPoseArray, skillObj, comboClass, colorObj, gotoAndStop, input_pre, status_2, status_1, status_3, holdFreeze, Vx, Vy, f, dir, jump_b, b, jump_u, _x, inRecord, skill_record, onEgde, d, toSkill, jumpSkill, mode_key, pitch;
    function Mai_role()
    {
        super();
        _roleName = "Mai";
        scale = 100;
        Vwalk = 11;
        Vdash = 28;
        Vjump_x = 13;
        Vjump_y = 39;
        Vjump_far = 20;
        opp_width2 = 60;
        superList = {sk_s_shuiniao: 1, sk_s_renfeng: 1};
        burstList = {sk_s_heti: 1, sk_s_qianzai1: 1};
        superMaxList = {sk_s_shuiniao_s: 1, sk_s_renfeng_s: 1};
        skillSuperMapping = {sk_s_shuiniao: "sk_s_shuiniao_s", sk_s_renfeng: "sk_s_renfeng_s"};
        winPoseArray = ["end", "end2"];
        skillObj.s1 = "sk_s_shuiniao";
        skillObj.s2 = "sk_s_renfeng";
        skillObj.busrt_a = "sk_s_heti";
        skillObj.busrt_d = "sk_s_qianzai1";
        skillObj.toAir = "sk_feixiang";
        comboClass = new Mai_Combo(this);
        this.preCheck();
        colorObj.fire_red1 = {ra: "100", rb: "255", ga: "-70", gb: "255", ba: "-100", bb: "-100", aa: "100", ab: "0"};
        colorObj.fire_red2 = {ra: "100", rb: "255", ga: "-100", gb: "255", ba: "-100", bb: "-100", aa: "100", ab: "0"};
        colorObj.fire_blue1 = {ra: "100", rb: "0", ga: "100", gb: "0", ba: "100", bb: "255", aa: "100", ab: "0"};
        colorObj.fire_blue2 = {ra: "-100", rb: "178", ga: "-100", gb: "96", ba: "-100", bb: "239", aa: "100", ab: "0"};
        colorObj.ice1 = {ra: "-100", rb: "255", ga: "-50", gb: "255", ba: "100", bb: "255", aa: "100", ab: "0"};
    } // End of the function
    function stageVar(l_max, s_Point, p_max, opponent, burst)
    {
        super.stageVar(l_max, s_Point, p_max, opponent, burst);
        if (opponent.roleName == "Chunli")
        {
            this.gotoAndStop("begin2");
        }
        else
        {
            var _loc3 = Math.random();
            if (_loc3 > 0.500000)
            {
                this.gotoAndStop("begin");
            }
            else
            {
                this.gotoAndStop("begin");
            } // end else if
        } // end else if
    } // End of the function
    function preCheck()
    {
        input_pre.roll_f = 10;
        input_pre.roll_b = 10;
        input_pre.land = 0;
        input_pre.land2 = 0;
        input_pre.sk_qianniao_s2 = 10;
        input_pre.sk_qianniao_s3 = 10;
        input_pre.sk_dfk = 19;
    } // End of the function
    function sk_longyanwu()
    {
        if (status_2 == "air")
        {
            this.sk_feishu();
            return;
        } // end if
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_1 = "sk_longyanwu";
        this.gotoAndStop(status_1);
        status_3 = "attack";
    } // End of the function
    function sk_longyanwu2()
    {
        if (status_2 == "air")
        {
            this.sk_feishu();
            return;
        } // end if
        if (status_2 != "land")
        {
            return (false);
        } // end if
        status_1 = "sk_longyanwu2";
        this.gotoAndStop(status_1);
        status_3 = "attack";
    } // End of the function
    function sk_feishu()
    {
        status_1 = "sk_feishu";
        this.gotoAndStop(status_1);
        status_3 = "attack";
    } // End of the function
    function sk_d1()
    {
        status_1 = "sk_d1";
        this.gotoAndStop(status_1);
        status_3 = "attack";
    } // End of the function
    function sk_d2()
    {
        status_1 = "sk_d2";
        this.gotoAndStop(status_1);
        status_3 = "attack";
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
                this.toSkill("sk_d1");
                return;
            }
            else
            {
                _loc2 = "kick";
            } // end else if
            this.jumpSkill(_loc2);
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
            if (Key.isDown(d))
            {
                this.toSkill("sk_d2");
                return;
            }
            else
            {
                _loc2 = "kick_l";
            } // end else if
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
        else if (Key.isDown(f) && dir == 1)
        {
            _loc2 = "kick_s1";
        }
        else if (Key.isDown(b) && dir == -1)
        {
            _loc2 = "kick_s1";
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
            if (Key.isDown(d))
            {
                this.jumpSkill("punch_s");
            }
            else
            {
                this.jumpSkill("punch_l");
            } // end else if
            return;
        }
        else if (Key.isDown(d))
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
