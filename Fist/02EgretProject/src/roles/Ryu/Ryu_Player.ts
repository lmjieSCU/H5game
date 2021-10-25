class Ryu_Player extends Ryu_role {
    public skill_array: Array<any>;
    public skill_mapping: Array<any>;
    public keyButtons: any;

    constructor() {
        super();
        this.toSkill_temp = this.toSkill;
        this.toAction_temp = this.toAction;
        this.toStatus_temp = this.toStatus;
        this.toSkill = this.noAct;
        this.toAction = this.noAct;
        let hero = new zmovie.ZMovieClip(["roleRyu0_json", "roleRyu1_json"], RES.getRes("roleRyu_json"), "root");
        this.addChild(hero);
        this.mc = <zmovie.ZMovieClip>hero.$children[0];
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
        this.skill_mapping.push(["sk_s_swms"]);
        this.skill_array.push([this._downButton, this._frontButton, this._burstButton]);
        this.skill_mapping.push(["sk_s_sys"]);
        this.skill_array.push([this._downButton, this._frontButton, this._downButton, this._frontButton, this._punchButton]);
        this.skill_mapping.push(["sk10"]);
        this.skill_array.push([this._downButton, this._backButton, this._downButton, this._backButton, this._kickButton]);
        this.skill_mapping.push(["sk14"]);
        this.skill_array.push([this._downButton, this._backButton, this._downButton, this._backButton, this._punchButton]);
        this.skill_mapping.push(["sk13"]);
        this.skill_array.push([this._frontButton, this._downButton, this._frontButton, this._punch_lButton]);
        this.skill_mapping.push(["sk3_l"]);
        this.skill_array.push([this._frontButton, this._downButton, this._frontButton, this._punchButton]);
        this.skill_mapping.push(["sk3"]);
        //this.skill_array.push([this._frontButton,this._kickButton]);
        this.skill_array.push([this._frontButton, this._downButton, this._frontButton, this._kickButton]);
        this.skill_mapping.push(["sk_SKF"]);
        this.skill_array.push([this._backButton, this._downButton, this._backButton, this._kickButton]);
        this.skill_mapping.push(["sk_SKB"]);
        this.skill_array.push([this._downButton, this._frontButton, this._punch_lButton]);
        this.skill_mapping.push(["sk1_l"]);
        this.skill_array.push([this._downButton, this._frontButton, this._punchButton]);
        this.skill_mapping.push(["sk1"]);
        this.skill_array.push([this._downButton, this._backButton, this._punchButton]);
        this.skill_mapping.push(["sk_bodong_air"]);
        this.skill_array.push([this._downButton, this._backButton, this._kickButton]);
        this.skill_mapping.push(["sk2"]);
    }
    public skill_code_easy() {
        this.skill_array.push([this._frontButton, this._punch_lButton]);
        this.skill_mapping.push(["sk1"]);
        this.skill_array.push([this._backButton,  this._punch_lButton]);
        this.skill_mapping.push(["sk1_l"]);      
        this.skill_array.push([this._downButton,  this._punch_lButton]);
        this.skill_mapping.push(["sk10"]);
        this.skill_array.push([this._upButton,  this._punch_lButton]);
        this.skill_mapping.push(["sk_bodong_air"]); 

        this.skill_array.push([this._frontButton, this._kick_lButton]);
        this.skill_mapping.push(["sk13"]);
        this.skill_array.push([this._backButton,  this._kick_lButton]);
        this.skill_mapping.push(["sk3"]);      
        this.skill_array.push([this._downButton,  this._kick_lButton]);
        this.skill_mapping.push(["sk14"]);
        this.skill_array.push([this._upButton,  this._kick_lButton]);
        this.skill_mapping.push(["sk_bodong_air"]);


        // this.skill_array.push([this._downButton, this._frontButton, this._punch_lButton]);
        // this.skill_mapping.push(["sk3_l"]);
        // this.skill_array.push([this._downButton, this._frontButton, this._punchButton]);
        // this.skill_mapping.push(["sk3"]);
        // this.skill_array.push([this._frontButton, this._punch_lButton]);
        // this.skill_mapping.push(["sk1_l"]);
        // this.skill_array.push([this._frontButton, this._punchButton]);
        // this.skill_mapping.push(["sk1"]);
        // this.skill_array.push([this._backButton, this._punchButton]);
        // this.skill_mapping.push(["sk_bodong_air"]);
        // this.skill_array.push([this._backButton, this._kickButton]);
        // this.skill_mapping.push(["sk2"]);
        // this.skill_array.push([this._downButton, this._punch_lButton]);
        // this.skill_mapping.push(["punch_s"]);
        // this.skill_array.push([this._downButton, this._kick_lButton]);
        // this.skill_mapping.push(["sk13"]);
    }
}
