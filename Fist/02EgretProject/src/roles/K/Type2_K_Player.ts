class Type2_K_Player extends Type2_K_role {

    public skill_array: Array<any>;
    public skill_mapping: Array<any>;
    public keyButtons: any;

    public constructor() {
        super();
        this.toSkill_temp = this.toSkill;
        this.toAction_temp = this.toAction;
        this.toStatus_temp = this.toStatus;
        this.toSkill = this.noAct;
        this.toAction = this.noAct;
        let hero = new zmovie.ZMovieClip(["roleK0_json"], RES.getRes("roleK_json"), "root");
        this.addChild(hero);
        this.mc = <zmovie.ZMovieClip>hero.$children[0];//name:role_K
        if( Math.random()>0.5){
            this.mc.gotoAndStop("begin");
        }else{
            this.mc.gotoAndStop("begin2");
        }
        this.bodyMC = <zmovie.ZMovieClip>this.mc.$children[0];//二级骨骼,已经进入到每一个动作中 name:punch/kick/...
    }

    public init(keybuttons: any, _mode_key: string, controltype: string = 'KeyControl') {
        this.keyButtons = keybuttons;
        this.mode_key = _mode_key;
        this.setKey();
        this.skill_array = new Array<any>();
        this.skill_mapping = new Array<any>();
        if (this.mode_key == "easy") {
            this.skill_code_easy();
        }
        else {
            this.skill_code();
        }
        if (controltype == 'KeyControl_btn') {
            this.keyCtrl = new KeyControl_btn();
        } else {
            this.keyCtrl = new KeyControl();
        }
        this.keyCtrl.init(this.keyButtons, this.skill_array, this.skill_mapping, this);
        //   Object.registerClass("KeyControl",role_corn.KeyControl);
        //   this.attachMovie("KeyControl","newKeyControl",this.getNextHighestDepth());
        //   this.newKeyControl.init(this._kickButtoney_array,this.skill_array,this.skill_mapping,this);
    }


    public setKey() {
        this._upButton = this.keyButtons.up;
        this._downButton = this.keyButtons.down;
        this._frontButton = this.keyButtons.front;
        this._backButton = this.keyButtons.back;
        this._punchButton = this.keyButtons.punch;
        this._kickButton = this.keyButtons.kick;
        this._punch_lButton = this.keyButtons.punch_l;
        this._kick_lButton = this.keyButtons.kick_l;
        this._burstButton = this.keyButtons.burst;
        this._rollButton = this.keyButtons.roll;
        return;
    }

    public skill_code() {
        this.skill_array.push([this._downButton, this._backButton, this._burstButton]);
        this.skill_mapping.push(["sk_xiangdong"]);
        this.skill_array.push([this._downButton, this._frontButton, this._burstButton]);
        this.skill_mapping.push(["sk_liandong"]);
        this.skill_array.push([this._downButton, this._frontButton, this._downButton, this._frontButton, this._punchButton]);
        this.skill_mapping.push(["sk_s1"]);
        this.skill_array.push([this._downButton, this._frontButton, this._frontButton, this._punchButton]);
        this.skill_mapping.push(["sk_s1"]);
        this.skill_array.push([this._downButton, this._frontButton, this._downButton, this._frontButton, this._kickButton]);
        this.skill_mapping.push(["sk_menghuti"]);
        this.skill_array.push([this._downButton, this._frontButton, this._frontButton, this._kickButton]);
        this.skill_mapping.push(["sk_menghuti"]);
        this.skill_array.push([this._frontButton, this._downButton, this._frontButton, this._punch_lButton]);
        this.skill_mapping.push(["sk_fdfp2"]);
        this.skill_array.push([this._frontButton, this._downButton, this._frontButton, this._punchButton]);
        this.skill_mapping.push(["sk_fdfp"]);
        this.skill_array.push([this._downButton, this._frontButton, this._punchButton]);
        this.skill_mapping.push(["sk_dfp"]);
        this.skill_array.push([this._downButton, this._backButton, this._punchButton]);
        this.skill_mapping.push(["sk_dbp"]);
        this.skill_array.push([this._frontButton, this._downButton, this._frontButton, this._kickButton]);
        this.skill_mapping.push(["sk_sanduan_2"]);
        this.skill_array.push([this._downButton, this._frontButton, this._kick_lButton]);
        this.skill_mapping.push(["sk_dfk_hit"]);
        this.skill_array.push([this._downButton, this._frontButton, this._kickButton]);
        this.skill_mapping.push(["sk_dfk"]);
        this.skill_array.push([this._downButton, this._backButton, this._kickButton]);
        this.skill_mapping.push(["sk_dbk_2"]);
    }
    public skill_code_easy() {        
        this.skill_array.push([this._downButton, this._frontButton, this._punch_lButton]);
        this.skill_mapping.push(["sk_fdfp2"]);
        this.skill_array.push([this._downButton, this._frontButton, this._punchButton]);
        this.skill_mapping.push(["sk_fdfp"]);
        this.skill_array.push([this._frontButton, this._punch_lButton]);
        this.skill_mapping.push(["punch_s1"]);
        this.skill_array.push([this._frontButton, this._punchButton]);
        this.skill_mapping.push(["sk_dfp"]);
        this.skill_array.push([this._backButton, this._punchButton]);
        this.skill_mapping.push(["sk_dbp"]);
        this.skill_array.push([this._downButton, this._frontButton, this._kickButton]);
        this.skill_mapping.push(["sk_sanduan_2"]);
        this.skill_array.push([this._frontButton, this._kick_lButton]);
        this.skill_mapping.push(["kick_s2"]);
        this.skill_array.push([this._frontButton, this._kickButton]);
        this.skill_mapping.push(["sk_dfk_hit"]);
        this.skill_array.push([this._backButton, this._kickButton]);
        this.skill_mapping.push(["sk_dbk_2"]);
    }
}
