class K_role extends Role {

    constructor() {
        super();
        this._roleName = "roleK";
        this.scale = 1;
        this.Vwalk = 11;
        this.Vdash = 28;
        this.Vjump_x = 13;
        this.Vjump_y = 39;
        this.Vjump_far = 20;
        this.opp_width2 = 60;
        this.superList = { sk_s1: 1, sk_s2: 1, sk_s3: 1 };
        this.burstList = { sk_s4: 1, sk_s5: 1 };
        this.superMaxList = { sk_s1_s: 1, sk_s3_s: 1 };
        this.skillSuperMapping = { sk_s1: "sk_s1_s", sk_s3: "sk_s3_s" };
        this.record_skill_totalFrame = ["sk_s4"];
        this.skillObj.s1 = "sk_s1";
        this.skillObj.s2 = "sk_s3";
        this.skillObj.s3 = "sk_s2";
        this.skillObj.busrt_a = "sk_s4";
        this.skillObj.busrt_d = "sk_s5";
        this.skillObj.toAir = "sk_fdfp";
        this.comboClass = new K_Combo(this);
        this.preCheck();
        this.colorObj.fire_red1 = { ra: "100", rb: "255", ga: "100", gb: "80", ba: "100", bb: "0", aa: "100", ab: "0" };
        this.colorObj.fire_red2 = { ra: "-100", rb: "255", ga: "-100", gb: "180", ba: "-100", bb: "0", aa: "100", ab: "0" };
        this.colorObj.fire_blue1 = { ra: "100", rb: "0", ga: "100", gb: "0", ba: "100", bb: "255", aa: "100", ab: "0" };
        this.colorObj.fire_blue2 = { ra: "-100", rb: "-100", ga: "-100", gb: "180", ba: "-100", bb: "255", aa: "100", ab: "0" };
        this.colorObj.ice1 = { ra: "-100", rb: "255", ga: "-50", gb: "255", ba: "100", bb: "255", aa: "100", ab: "0" };
        
        this.CommonSeries=["punch","kick_s2","sk_dfp","sk_dfp_s3"];
    }
    public preCheck() {
        this.input_pre.roll_f = 10;
        this.input_pre.roll_b = 10;
        this.input_pre.land = 0;
        this.input_pre.land2 = 0;
        this.input_pre.sk_dfp_s2 = 10;
        this.input_pre.sk_dfp_s3 = 10;
        this.input_pre.sk_dfk = 19;
    }
    public sk_dfp_s2() {
        if (this.status_2 != "land") {
            return false;
        }
        this.status_3 = "attack";
        this.status_1 = "sk_dfp_s2";
        this.mc.gotoAndStop(this.status_1);
    }
    public sk_dfp_s3() {
        if (this.status_2 != "land") {
            return false;
        }
        this.status_3 = "attack";
        this.status_1 = "sk_dfp_s3";
        this.mc.gotoAndStop(this.status_1);
    }
    public sk_fdfp_s2() {
        if (this.played) {
            return false;
        }
        this.played = true;
        this.status_3 = "attack";
        this.mc.gotoAndStop("s2");
    }
    public sk_fdfp2() {
        if (this.status_2 != "land") {
            return false;
        }
        this.status_3 = "attack";
        this.status_1 = "sk_fdfp2";
        this.mc.gotoAndStop(this.status_1);
    }
    public sk_dbk() {
        if (this.status_1 == "kick_s2") {
            this.sk_dbk2();
            return undefined;
        }
        if (this.status_2 == "air") {
            this.sk_dbk2();
            return undefined;
        }
        if (this.status_2 != "land") {
            return false;
        }
        this.status_3 = "attack";
        this.status_1 = "sk_dbk";
        this.mc.gotoAndStop(this.status_1);
    }
    public sk_dbk2() {
        this.status_3 = "attack";
        this.status_1 = "sk_dbk2";
        this.mc.gotoAndStop(this.status_1);
    }
    public sk_dbk_2() {
        if (this.status_1 == "kick_s2") {
            this.sk_dbk_2_air();
            return undefined;
        }
        if (this.status_2 == "air") {
            this.sk_dbk_2_air();
            return undefined;
        }
        if (this.status_2 != "land") {
            return false;
        }
        this.status_3 = "attack";
        this.status_1 = "sk_dbk_2";
        this.mc.gotoAndStop(this.status_1);
    }
    public sk_dbk_2_air() {
        this.status_3 = "attack";
        this.status_1 = "sk_dbk_2_air";
        this.mc.gotoAndStop(this.status_1);
    }
    public sk_dbp() {
        this.status_3 = "attack";
        this.status_1 = "sk_dbp";
        this.mc.gotoAndStop(this.status_1);
        return;
    }
    public sk_s3() {
        this.status_3 = "attack";
        this.status_1 = "sk_s3";
        this.mc.gotoAndStop(this.status_1);
    }
    public sk_s4() {
        if (this.status_2 != "land") {
            return false;
        }
        this.status_3 = "attack";
        this.status_1 = "sk_s4";
        this.mc.gotoAndStop(this.status_1);
    }
    public sk_s5() {
        if (this.status_2 != "land") {
            return false;
        }
        this.status_3 = "attack";
        this.status_1 = "sk_s5";
        this.mc.gotoAndStop(this.status_1);
    }

    //kick键K
    public to_kick() {
        let action: string = "";
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            this.jumpSkill("kick");
            return;
        }
        if (this.keyCtrl.key.isDown(this._downButton)) {
            action = "squatKick";
        }
        else {
            action = "kick";
        }
        this.toSkill(action);
    }

    //kick_l键I
    public to_kick_l() {
        let action: string = "";
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            action = "kick_l";
            this.jumpSkill(action);
            return;
        }
        if (this.keyCtrl.key.isDown(this._downButton)) {
            action = "squatKick_l";
        }
        else if (this.keyCtrl.key.isDown(this._frontButton) && this.dir == 1) {
            action = "kick_s2";
        }
        else if (this.keyCtrl.key.isDown(this._backButton) && this.dir == -1) {
            action = "kick_s2";
        }
        else if (this.mode_key == "easy") {
            action = "sk_dbk";
        }
        else {
            action = "kick_l";
        }
        this.toSkill(action);
    }

    public to_punch() {
        let _loc2_ = undefined;
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            this.jumpSkill("punch");
            return undefined;
        }
        if (this.keyCtrl.key.isDown(this._downButton)) {
            _loc2_ = "squatPunch";
        }
        else if (this.status_1 == "dash_f") {
            _loc2_ = "punch";
        }
        else if (this.keyCtrl.key.isDown(this._frontButton) && this.dir == 1 || this.keyCtrl.key.isDown(this._backButton) && this.dir == -1) {
            if (this.pitch()) {
                return undefined;
            }
            _loc2_ = "punch";
        }
        else {
            _loc2_ = "punch";
        }
        this.toSkill(_loc2_);
    }


    //punch_l键U
    public to_punch_l() {
        var _loc2_ = undefined;
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            this.jumpSkill("punch_l");
            return undefined;
        }
        if (this.keyCtrl.key.isDown(this._downButton)) {
            _loc2_ = "squatPunch_l";
        }
        else if (this.keyCtrl.key.isDown(this._frontButton) && this.dir == 1) {
            _loc2_ = "punch_s1";
        }
        else if (this.keyCtrl.key.isDown(this._backButton) && this.dir == -1) {
            _loc2_ = "punch_s1";
        }
        else if (this.mode_key == "easy") {
            _loc2_ = "heavyHit";
        }
        else {
            _loc2_ = "punch_l";
        }
        this.toSkill(_loc2_);
    }



 
}
