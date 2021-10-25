class Mai_role extends Role
{
    constructor()
    {
        super();
        this._roleName = "roleMai";
        this.scale = 1;
        this.Vwalk = 11;
        this.Vdash = 28;
        this.Vjump_x = 13;
        this.Vjump_y = 39;
        this.Vjump_far = 20;
        this.opp_width2 = 60;
        this.superList = {sk_s_shuiniao: 1, sk_s_renfeng: 1};
        this.burstList = {sk_s_heti: 1, sk_s_qianzai1: 1};
        this.superMaxList = {sk_s_shuiniao_s: 1, sk_s_renfeng_s: 1};
        this.skillSuperMapping = {sk_s_shuiniao: "sk_s_shuiniao_s", sk_s_renfeng: "sk_s_renfeng_s"};
        this.winPoseArray = ["end", "end2"];
        this.skillObj.s1 = "sk_s_shuiniao";
        this.skillObj.s2 = "sk_s_renfeng";
        this.skillObj.busrt_a = "sk_s_heti";
        this.skillObj.busrt_d = "sk_s_qianzai1";
        this.skillObj.toAir = "sk_feixiang";
        this.comboClass = new Mai_Combo(this);
        console.log(this.preCheck);
        
        this.preCheck();
        this.colorObj.fire_red1 = {ra: "100", rb: "255", ga: "-70", gb: "255", ba: "-100", bb: "-100", aa: "100", ab: "0"};
        this.colorObj.fire_red2 = {ra: "100", rb: "255", ga: "-100", gb: "255", ba: "-100", bb: "-100", aa: "100", ab: "0"};
        this.colorObj.fire_blue1 = {ra: "100", rb: "0", ga: "100", gb: "0", ba: "100", bb: "255", aa: "100", ab: "0"};
        this.colorObj.fire_blue2 = {ra: "-100", rb: "178", ga: "-100", gb: "96", ba: "-100", bb: "239", aa: "100", ab: "0"};
        this.colorObj.ice1 = {ra: "-100", rb: "255", ga: "-50", gb: "255", ba: "100", bb: "255", aa: "100", ab: "0"};
        this.CommonSeries=["punch","punch_l","kick","kick2"];
    } // End of the function
    public stageVar(l_max, s_Point, p_max, opponent, burst)
    {
        super.stageVar(l_max, s_Point, p_max, opponent, burst);
        if (opponent.roleName == "Chunli")
        {
            this.mc.gotoAndStop("begin2");
        }
        else
        {
            var _loc3 = Math.random();
            if (_loc3 > 0.500000)
            {
                this.mc.gotoAndStop("begin");
            }
            else
            {
                this.mc.gotoAndStop("begin");
            } // end else if
        } // end else if
    } // End of the function
    public preCheck(){
        this.input_pre.roll_f = 10;
        this.input_pre.roll_b = 10;
        this.input_pre.land = 0;
        this.input_pre.land2 = 0;
        this.input_pre.sk_qianniao_s2 = 10;
        this.input_pre.sk_qianniao_s3 = 10;
        this.input_pre.sk_dfk = 19;
        return;
    } // End of the function
    public sk_longyanwu()
    {
        if (this.status_2 == "air")
        {
            this.sk_feishu();
            return;
        } // end if
        if (this.status_2 != "land")
        {
            return (false);
        } // end if
        this.status_1 = "sk_longyanwu";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    } // End of the function
    public sk_longyanwu2()
    {
        if (this.status_2 == "air")
        {
            this.sk_feishu();
            return;
        } // end if
        if (this.status_2 != "land")
        {
            return (false);
        } // end if
        this.status_1 = "sk_longyanwu2";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    } // End of the function
    public sk_feishu()
    {
        this.status_1 = "sk_feishu";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    } // End of the function
    public sk_d1()
    {
        this.status_1 = "sk_d1";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    } // End of the function
    public sk_d2()
    {
        this.status_1 = "sk_d2";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    } // End of the function
    public jump()
    {
        if (this.status_1 == "dash_f")
        {
            if (this.status_2 != "land" || this.holdFreeze || this.status_3 != "normal")
            {
                return (false);
            } // end if
            this.status_2 = "air";
            this.Vx = this.Vjump_far;
            this.Vy = this.Vjump_y;
            this.mc.gotoAndStop("jump_f");
            this.status_1 = "jump_f";
        }
        else if (this.keyCtrl.key.isDown(this._frontButton))
        {
            if (this.dir == 1)
            {
                this.jump_f();
            }
            else
            {
                this.jump_b();
            } // end else if
        }
        else if (this.keyCtrl.key.isDown(this._backButton))
        {
            if (this.dir == -1)
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
    public jump_f()
    {
        if (this.status_2 == "air" && this.status_3 == "normal" && this.status_1 != "jump_f")
        {
            //var _loc2 = _level0.char_mc._x + this.x;
            let _loc2= this.parent.localToGlobal().x;
            if (_loc2 < 80)
            {
                this.Vx = 17;
                this.Vy = 42;
            }
            else if (_loc2 > 580)
            {
                if (this.status_1 == "jump")
                {
                    this.Vx = -17;
                }
                else
                {
                    this.Vx = 17;
                } // end else if
                this.Vy = 42;
            }
            else
            {
                return (false);
            } // end else if
        }
        else
        {
            if (this.status_2 != "land" || this.holdFreeze || this.status_3 != "normal")
            {
                return (false);
            } // end if
            this.Vx = this.Vjump_x;
            this.Vy = this.Vjump_y;
        } // end else if
        this.status_2 = "air";
        if (this.inRecord)
        {
            this.skill_record("jump_f");
        } // end if
        this.mc.gotoAndStop("jump_f");
        this.status_1 = "jump_f";
    } // End of the function
    public jump_air()
    {
        if (this.status_2 == "air" && this.status_3 == "normal")
        {
            //var _loc2 = _level0.char_mc._x + _x;
            let _loc2= this.parent.localToGlobal().x;
            if (_loc2 < 80 || _loc2 > 580)
            {
            }
            else
            {
                return (false);
            } // end else if
        }
        else if (this.status_2 != "land" || this.holdFreeze || this.status_3 != "normal")
        {
            return (false);
        } // end else if
        this.status_2 = "air";
        if (this.inRecord)
        {
            this.skill_record("jump_f");
        } // end if
        this.Vx = this.Vjump_x;
        this.Vy = this.Vjump_y;
        this.mc.gotoAndStop("jump_f");
        this.status_1 = "jump_f";
    } // End of the function
    public to_kick()
    {
        var _loc2;
        if (this.status_1 == "jump_f" ||this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b")
        {
            if (this.keyCtrl.key.isDown(this._downButton))
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
        if (this.keyCtrl.key.isDown(this._downButton))
        {
            _loc2 = "squatKick";
        }
        else
        {
            _loc2 = "kick";
        } // end else if
        this.toSkill(_loc2);
    } // End of the function
    public to_kick_l()
    {
        var _loc2;
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b")
        {
            if (this.keyCtrl.key.isDown(this._downButton))
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
        if (this.keyCtrl.key.isDown(this._downButton))
        {
            if (this.keyCtrl.key.isDown(this._frontButton) && this.dir == 1)
            {
                _loc2 = "sk_huaxing";
            }
            else if (this.keyCtrl.key.isDown(this._backButton) && this.dir == -1)
            {
                _loc2 = "sk_huaxing";
            }
            else
            {
                _loc2 = "squatKick_l";
            } // end else if
        }
        else if (this.keyCtrl.key.isDown(this._frontButton) && this.dir == 1)
        {
            _loc2 = "kick_s1";
        }
        else if (this.keyCtrl.key.isDown(this._backButton) && this.dir == -1)
        {
            _loc2 = "kick_s1";
        }
        else if (this.mode_key == "easy")
        {
            _loc2 = this.skillObj.s2;
        }
        else
        {
            _loc2 = "kick_l";
        } // end else if
        this.toSkill(_loc2);
    } // End of the function
    public to_punch()
    {
        var _loc2;
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b")
        {
            this.jumpSkill("punch");
            return;
        } // end if
        if (this.keyCtrl.key.isDown(this._downButton))
        {
            _loc2 = "squatPunch";
        }
        else if (this.status_1 == "dash_f")
        {
            _loc2 = "punch";
        }
        else if (this.keyCtrl.key.isDown(this._frontButton) && this.dir == 1 || this.keyCtrl.key.isDown(this._backButton) && this.dir == -1)
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
    public to_punch_l()
    {
        var _loc2;
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b")
        {
            if (this.keyCtrl.key.isDown(this._downButton))
            {
                this.jumpSkill("punch_s");
            }
            else
            {
                this.jumpSkill("punch_l");
            } // end else if
            return;
        }
        else if (this.keyCtrl.key.isDown(this._downButton))
        {
            _loc2 = "squatPunch_l";
        }
        else if (this.mode_key == "easy")
        {
            _loc2 = this.skillObj.s1;
        }
        else
        {
            _loc2 = "punch_l";
        } // end else if
        this.toSkill(_loc2);
    } // End of the function
} // End of Class