class Kula_Player extends Kula_role
{
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
        let hero = new zmovie.ZMovieClip(["roleKula0_json","roleKula1_json"], RES.getRes("roleKula_json"), "root");
        this.addChild(hero);
        // this.hero = hero;
        // this.Mask();
        this.mc = <zmovie.ZMovieClip>hero.$children[0];//name:role_K
        if (Math.random() > 0.5) {
            this.mc.gotoAndStop("begin");
        } else {
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
    public skill_code(){
        this.skill_array.push([this._downButton, this._backButton, this._burstButton]);
        this.skill_mapping.push(["sk_s_xingchen"]);
        this.skill_array.push([this._downButton, this._frontButton, this._burstButton]);
        this.skill_mapping.push(["sk_s_jiejie"]);
        this.skill_array.push([this._downButton, this._frontButton, this._downButton, this._frontButton, this._punchButton]);
        this.skill_mapping.push(["sk_s_bingren"]);
        this.skill_array.push([this._downButton, this._frontButton, this._downButton, this._backButton, this._punchButton]);
        this.skill_mapping.push(["sk_s_luanwu"]);
        this.skill_array.push([this._downButton, this._frontButton, this._backButton, this._punchButton]);
        this.skill_mapping.push(["sk_s_luanwu"]);       
        this.skill_array.push([this._downButton, this._frontButton, this._downButton, this._frontButton,this._kickButton]);
        this.skill_mapping.push(["sk_tibing"]);
        this.skill_array.push([this._frontButton, this._downButton, this._backButton, this._punchButton]);
        this.skill_mapping.push(["sk_bingdian"]);
        this.skill_array.push([this._frontButton, this._downButton, this._frontButton, this._punch_lButton]);
        this.skill_mapping.push(["sk_fdfp_l"]);
        this.skill_array.push([this._frontButton, this._downButton, this._frontButton, this._punchButton]);
        this.skill_mapping.push(["sk_fdfp"]);
        this.skill_array.push([this._downButton, this._frontButton, this._punchButton]);
        this.skill_mapping.push(["sk_dfp"]);
        this.skill_array.push([this._downButton, this._backButton, this._punchButton]);
        this.skill_mapping.push(["sk_beike"]);
        this.skill_array.push([this._downButton, this._backButton, this._kick_lButton]);
        this.skill_mapping.push(["sk_dbk_l"]);
        this.skill_array.push([this._downButton, this._backButton,this._kickButton]);
        this.skill_mapping.push(["sk_dbk"]);
        this.skill_array.push([this._downButton, this._frontButton, this._kick_lButton]);
        this.skill_mapping.push(["kick4"]);
        this.skill_array.push([this._downButton, this._frontButton,this._kickButton]);
        this.skill_mapping.push(["kick5"]);
    } // End of the function
    public skill_code_easy()
    {
        this.skill_array.push([this._downButton, this._backButton, this._punchButton]);
        this.skill_mapping.push(["sk_bingdian"]);
        this.skill_array.push([this._downButton, this._frontButton, this._punch_lButton]);
        this.skill_mapping.push(["sk_fdfp_l"]);
        this.skill_array.push([this._downButton, this._frontButton, this._punchButton]);
        this.skill_mapping.push(["sk_fdfp"]);
        this.skill_array.push([this._frontButton, this._punch_lButton]);
        this.skill_mapping.push(["punch_s1"]);
        this.skill_array.push([this._frontButton, this._punchButton]);
        this.skill_mapping.push(["sk_dfp"]);
        this.skill_array.push([this._backButton, this._punchButton]);
        this.skill_mapping.push(["sk_beike"]);
        this.skill_array.push([this._backButton, this._kick_lButton]);
        this.skill_mapping.push(["sk_dbk_l"]);
        this.skill_array.push([this._backButton,this._kickButton]);
        this.skill_mapping.push(["sk_dbk"]);
    } // End of the function
} // End of Class
