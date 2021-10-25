class Kula_role extends Role
{
    constructor()
    {
        super();
        this._roleName = "roleKula";
        this.scale = 1;
        this.Vwalk = 11;
        this.Vdash = 28;
        this.Vjump_x = 13;
        this.Vjump_y = 39;
        this.Vjump_far = 20;
        this.opp_width2 = 60;
        this.superList = {sk_s_bingren: 1, sk_s_luanwu: 1, sk_tibing: 1};
        this.burstList = {sk_s_xingchen: 1, sk_s_jiejie: 1};
        this.superMaxList = {sk_s_bingren_s: 1, sk_s_luanwu_s: 1, sk_tibing_s: 1};
        this.skillSuperMapping = {sk_s_bingren: "sk_s_bingren_s", sk_s_luanwu: "sk_s_luanwu_s", sk_tibing: "sk_tibing_s"};
        this.winPoseArray = ["end", "end2"];
        this.skillObj.s1 = "sk_s_bingren";
        this.skillObj.s2 = "sk_s_luanwu";
        this.skillObj.s3 = "sk_tibing";
        this.skillObj.busrt_a = "sk_s_xingchen";
        this.skillObj.busrt_d = "sk_s_jiejie";
        this.skillObj.toAir = "sk_fdfp";
        this.comboClass = new Kula_Combo(this);
        this.preCheck();
        this.colorObj.fire_red1 = {ra: "100", rb: "255", ga: "100", gb: "110", ba: "100", bb: "0", aa: "100", ab: "0"};
        this.colorObj.fire_red2 = {ra: "100", rb: "255", ga: "100", gb: "210", ba: "100", bb: "0", aa: "100", ab: "0"};
        this.colorObj.fire_blue1 = {ra: "100", rb: "0", ga: "100", gb: "0", ba: "100", bb: "255", aa: "100", ab: "0"};
        this.colorObj.fire_blue2 = {ra: "100", rb: "-100", ga: "100", gb: "-50", ba: "100", bb: "255", aa: "100", ab: "0"};
        this.colorObj.ice1 = {ra: "-100", rb: "255", ga: "-50", gb: "255", ba: "100", bb: "255", aa: "100", ab: "0"};
        this.CommonSeries=["punch"];
    } // End of the function
    public preCheck()
    {
        this.input_pre.roll_f = 10;
        this.input_pre.roll_b = 10;
        this.input_pre.land = 0;
        this.input_pre.land2 = 0;
        this.input_pre.sk_dfp_s2 = 10;
        this.input_pre.sk_dfp_s3 = 10;
        this.input_pre.sk_dfk = 19;
    } // End of the function
    public sk_dfp_s2()
    {
    } // End of the function
    public sk_dfp_s3()
    {
    } // End of the function
    public kick4()
    {
        if (this.status_2 == "air")
        {
            this.sk_ZSSJ2();
            return;
        } // end if
        if (this.status_2 != "land")
        {
            return (false);
        } // end if
        this.status_1 = "kick_l";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    } // End of the function
    public kick5()
    {
        if (this.status_2 == "air")
        {
            this.sk_ZSSJ();
            return;
        } // end if
        if (this.status_2 != "land")
        {
            return (false);
        } // end if
        this.status_1 = "kick";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    } // End of the function
    public sk_ZSSJ()
    {
        this.status_1 = "sk_ZSSJ";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    } // End of the function
    public sk_ZSSJ2()
    {
        this.status_1 = "sk_ZSSJ2";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    } // End of the function
    public to_kick()
    {
        var _loc2;
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b")
        {
            this.jumpSkill("kick");
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
            _loc2 = "kick_l";
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
            if (this.keyCtrl.key.isDown(this._frontButton) && this.dir == 1)
            {
                _loc2 = "sk_bingdian";
            }
            else if (this.keyCtrl.key.isDown(this._backButton) && this.dir == -1)
            {
                _loc2 = "sk_bingdian";
            }
            else
            {
                _loc2 = "squatPunch";
            } // end else if
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
            this.jumpSkill("punch_l");
            return;
        }
        else if (this.keyCtrl.key.isDown(this._downButton))
        {
            _loc2 = "squatPunch_l";
        }
        else if (this.keyCtrl.key.isDown(this._frontButton) && this.dir == 1)
        {
            _loc2 = "punch_s1";
        }
        else if (this.keyCtrl.key.isDown(this._backButton) && this.dir == -1)
        {
            _loc2 = "punch_s1";
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
