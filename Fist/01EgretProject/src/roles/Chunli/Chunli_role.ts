class Chunli_role extends Role {
    constructor() {
        super();
        this._roleName = "roleChunli";
        this.scale = 1;
        this.Vwalk = 11;
        this.Vdash = 28;
        this.Vjump_x = 13;
        this.Vjump_y = 43;
        this.Vjump_far = 20;
        this.opp_width2 = 60;
        this.superList = { sk_s_bo: 1, sk_s_fengyi: 1 };
        this.burstList = { sk_s_bo_ss: 1, sk_s_qixing: 1 };
        this.superMaxList = { sk_s_bo_s: 1, sk_s_fengyi_s: 1 };
        this.skillSuperMapping = { sk_s_bo: "sk_s_bo_s", sk_s_fengyi: "sk_s_fengyi_s" };
        this.winPoseArray = ["end", "end2"];
        this.skillObj.s1 = "sk_s_bo";
        this.skillObj.s2 = "sk_s_fengyi";
        this.skillObj.busrt_a = "sk_s_qixing";
        this.skillObj.busrt_d = "sk_s_bo_ss";
        this.skillObj.toAir = "sk_shengtian";
        this.comboClass = new Chunli_Combo(this);
        this.preCheck();
        this.colorObj.fire_red1 = { ra: "100", rb: "255", ga: "-70", gb: "255", ba: "100", bb: "-255", aa: "100", ab: "0" };
        this.colorObj.fire_red2 = { ra: "100", rb: "255", ga: "-100", gb: "255", ba: "100", bb: "-255", aa: "100", ab: "0" };
        this.colorObj.fire_blue1 = { ra: "-100", rb: "255", ga: "-100", gb: "255", ba: "100", bb: "255", aa: "100", ab: "0" };
        this.colorObj.fire_blue2 = { ra: "-100", rb: "255", ga: "-100", gb: "190", ba: "100", bb: "255", aa: "100", ab: "0" };
        this.colorObj.ice1 = { ra: "-100", rb: "255", ga: "-50", gb: "255", ba: "100", bb: "255", aa: "100", ab: "0" };
        this.CommonSeries=["punch","punch_l","kick_l","sk_xuanyuan"];
    } // End of the function
    public preCheck() {
        this.input_pre.roll_f = 10;
        this.input_pre.roll_b = 10;
        this.input_pre.land = 0;
        this.input_pre.land2 = 0;
        this.input_pre.sk_huixuan_s2 = 10;
        this.input_pre.sk_huixuan_s3 = 10;
        this.input_pre.sk_dfk = 19;
    } // End of the function
    public sk_huixuan() {
        if (this.status_2 != "land") {
            return (false);
        } // end if
        this.status_1 = "sk_huixuan";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    } // End of the function
    public sk_huixuan2() {
        if (this.status_2 != "land") {
            return (false);
        } // end if
        this.status_1 = "sk_huixuan2";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    } // End of the function
    public sk_bailietui() {
        if (this.status_2 == "air") {
            this.sk_bailietui_air();
            return;
        } // end if
        if (this.status_2 != "land") {
            return (false);
        } // end if
        this.status_1 = "sk_bailietui";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    } // End of the function
    public sk_bailietui_air() {
        this.status_1 = "sk_bailietui_air";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
    } // End of the function
    public jump() {
        if (this.status_1 == "dash_f") {
            if (this.status_2 != "land" || this.holdFreeze || this.status_3 != "normal") {
                return (false);
            } // end if
            this.status_2 = "air";
            this.Vx = this.Vjump_far;
            this.Vy = this.Vjump_y;
            this.mc.gotoAndStop("jump_f");
            this.status_1 = "jump_f";
        }
        else if (this.keyCtrl.key.isDown(this._frontButton)) {
            if (this.dir == 1) {
                this.jump_f();
            }
            else {
                this.jump_b();
            } // end else if
        }
        else if (this.keyCtrl.key.isDown(this._backButton)) {
            if (this.dir == -1) {
                this.jump_f();
            }
            else {
                this.jump_b();
            } // end else if
        }
        else {
            this.jump_u();
        } // end else if
    } // End of the function
    public jump_f() {
        if (this.status_2 == "air" && this.status_3 == "normal" && this.status_1 != "jump_f") {
            //var _loc2 = _level0.char_mc._x + _x;
            let _loc2= this.parent.localToGlobal().x
            if (_loc2 < 80) {
                this.Vx = 17;
                this.Vy = 42;
            }
            else if (_loc2 > 580) {
                if (this.status_1 == "jump") {
                    this.Vx = -17;
                }
                else {
                    this.Vx = 17;
                } // end else if
                this.Vy = 42;
            }
            else {
                return (false);
            } // end else if
        }
        else {
            if (this.status_2 != "land" || this.holdFreeze || this.status_3 != "normal") {
                return (false);
            } // end if
            this.Vx = this.Vjump_x;
            this.Vy = this.Vjump_y;
        } // end else if
        this.status_2 = "air";
        if (this.inRecord) {
            this.skill_record("jump_f");
        } // end if
        this.mc.gotoAndStop("jump_f");
        this.status_1 = "jump_f";
    } // End of the function
    public jump_air() {
        if (this.status_2 == "air" && this.onEdge && this.status_3 == "normal") {
            // var _loc2 = _level0.char_mc._x + _x;
            let _loc2= this.parent.localToGlobal().x
            if (_loc2 < 80 || _loc2 > 580) {
            }
            else {
                return (false);
            } // end else if
        }
        else if (this.status_2 != "land" || this.holdFreeze || this.status_3 != "normal") {
            return (false);
        } // end else if
        this.status_2 = "air";
        if (this.inRecord) {
            this.skill_record("jump_f");
        } // end if
        this.Vx = this.Vjump_x;
        this.Vy = this.Vjump_y;
        this.mc.gotoAndStop("jump_f");
        this.status_1 = "jump_f";
    } // End of the function
    public to_kick() {
        var _loc2;
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            if (this.keyCtrl.key.isDown(this._downButton)) {
                this.jumpSkill("kick_d");
            }
            else {
                this.jumpSkill("kick");
            } // end else if
            return;
        } // end if
        if (this.keyCtrl.key.isDown(this._downButton)) {
            _loc2 = "squatKick";
        }
        else {
            _loc2 = "kick";
        } // end else if
        this.toSkill(_loc2);
    } // End of the function
    public to_kick_l() {
        var _loc2;
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            _loc2 = "kick_l";
            this.jumpSkill(_loc2);
            return;
        } // end if
        if (this.keyCtrl.key.isDown(this._downButton)) {
            if (this.keyCtrl.key.isDown(this._frontButton) && this.dir == 1) {
                _loc2 = "kick_s1";
            }
            else if (this.keyCtrl.key.isDown(this._backButton) && this.dir == -1) {
                _loc2 = "kick_s1";
            }
            else {
                _loc2 = "squatKick_l";
            } // end else if
        }
        else if (this.keyCtrl.key.isDown(this._frontButton) && this.dir == 1) {
            _loc2 = "kick_s1";
        }
        else if (this.keyCtrl.key.isDown(this._backButton) && this.dir == -1) {
            _loc2 = "kick_s1";
        }
        else if (this.mode_key == "easy") {
            _loc2 = "sk_bo2";
        }
        else {
            _loc2 = "kick_l";
        } // end else if
        this.toSkill(_loc2);
    } // End of the function
    public to_punch() {
        var _loc2;
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            this.jumpSkill("punch");
            return;
        } // end if
        if (this.keyCtrl.key.isDown(this._downButton)) {
            _loc2 = "squatPunch";
        }
        else if (this.status_1 == "dash_f") {
            _loc2 = "punch";
        }
        else if (this.keyCtrl.key.isDown(this._frontButton) && this.dir == 1 || this.keyCtrl.key.isDown(this._backButton) && this.dir == -1) {
            if (this.pitch()) {
                return;
            }
            else {
                _loc2 = "punch";
            } // end else if
        }
        else {
            _loc2 = "punch";
        } // end else if
        this.toSkill(_loc2);
    } // End of the function
    public to_punch_l() {
        var _loc2;
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            this.jumpSkill("punch_l");
            return;
        }
        else if (this.keyCtrl.key.isDown(this._downButton)) {
            _loc2 = "squatPunch_l";
        }
        else if (this.mode_key == "easy") {
            _loc2 = "heavyHit";
        }
        else {
            _loc2 = "punch_l";
        } // end else if
        this.toSkill(_loc2);
    } // End of the function
} // End of Class