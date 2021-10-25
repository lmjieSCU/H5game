class Moriya_Player extends Moriya_role
{
    public skill_array: Array<any>;
    public skill_mappin: Array<any>;
    public keyButtons: any;

    constructor() {
        super();
        this.toSkill_temp = this.toSkill;
        this.toAction_temp = this.toAction;
        this.toStatus_temp = this.toStatus;
        this.toSkill = this.noAct;
        this.toAction = this.noAct;
        let hero = new zmovie.ZMovieClip(["roleMoriya0_json","roleMoriya1_json"], RES.getRes("roleMoriya_json"), "root");
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
        this.skill_mappin = new Array<any>();
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
        this.keyCtrl.init(this.keyButtons, this.skill_array, this.skill_mappin, this);
        //   Object.registerClass("KeyControl",role_corn.KeyControl);
        //   this.attachMovie("KeyControl","newKeyControl",this.getNextHighestDepth());
        //   this.newKeyControl.init(this._kickButtoney_array,this.skill_array,this.skill_mappin,this);
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
    public skill_code()
    {
        this.skill_array.push([this._downButton, this._frontButton, this._burstButton]);
        this.skill_mappin.push(["sk_s3"]);
        this.skill_array.push([this._downButton, this._backButton, this._burstButton]);
        this.skill_mappin.push(["sk_s4"]);
        this.skill_array.push([this._downButton, this._backButton, this._downButton, this._backButton, this._punchButton]);
        this.skill_mappin.push(["sk_s1"]);
        this.skill_array.push([this._downButton, this._frontButton, this._downButton, this._backButton, this._punchButton]);
        this.skill_mappin.push(["sk_s2"]);
        this.skill_array.push([this._downButton, this._frontButton, this._backButton, this._punchButton]);
        this.skill_mappin.push(["sk_s2"]);
        this.skill_array.push([this._backButton, this._downButton, this._frontButton, this._kickButton]);
        this.skill_mappin.push(["sk_buyue1"]);
        this.skill_array.push([this._backButton, this._downButton, this._frontButton, this._punch_lButton]);
        this.skill_mappin.push(["sk_buyue3"]);
        this.skill_array.push([this._backButton, this._downButton, this._frontButton, this._punchButton]);
        this.skill_mappin.push(["sk_buyue2"]);
        this.skill_array.push([this._frontButton, this._downButton, this._frontButton, this._punch_lButton]);
        this.skill_mappin.push(["sk_xinyue"]);
        this.skill_array.push([this._frontButton, this._downButton, this._frontButton, this._punchButton]);
        this.skill_mappin.push(["sk_xinyue2"]);
        this.skill_array.push([this._downButton, this._frontButton, this._punch_lButton]);
        this.skill_mappin.push(["sk_yueying_a1"]);
        this.skill_array.push([this._downButton, this._frontButton, this._punchButton]);
        this.skill_mappin.push(["sk_yueying_c1"]);
        this.skill_array.push([this._downButton, this._backButton, this._punch_lButton]);
        this.skill_mappin.push(["sk_long_u"]);
        this.skill_array.push([this._downButton, this._backButton, this._punchButton]);
        this.skill_mappin.push(["sk_long_m"]);
        this.skill_array.push([this._downButton, this._backButton, this._kickButton]);
        this.skill_mappin.push(["sk_long_d"]);
        this.skill_array.push([this._downButton, this._frontButton, this._kick_lButton]);
        this.skill_mappin.push(["sk_yuedu2"]);
        this.skill_array.push([this._downButton, this._frontButton, this._kickButton]);
        this.skill_mappin.push(["sk_yuedu1"]);
    } // End of the function
    public skill_code_easy()
    {
        this.skill_array.push([this._backButton, this._downButton, this._frontButton, this._kickButton]);
        this.skill_mappin.push(["sk_buyue1"]);
        this.skill_array.push([this._backButton, this._downButton, this._frontButton, this._punch_lButton]);
        this.skill_mappin.push(["sk_buyue3"]);
        this.skill_array.push([this._backButton, this._downButton, this._frontButton, this._punchButton]);
        this.skill_mappin.push(["sk_buyue2"]);
        this.skill_array.push([this._downButton, this._frontButton, this._punch_lButton]);
        this.skill_mappin.push(["sk_xinyue"]);
        this.skill_array.push([this._downButton, this._frontButton, this._punchButton]);
        this.skill_mappin.push(["sk_xinyue2"]);
        this.skill_array.push([this._frontButton, this._punch_lButton]);
        this.skill_mappin.push(["sk_yueying_a1"]);
        this.skill_array.push([this._frontButton, this._punchButton]);
        this.skill_mappin.push(["sk_yueying_c1"]);
        this.skill_array.push([this._backButton, this._punch_lButton]);
        this.skill_mappin.push(["sk_long_u"]);
        this.skill_array.push([this._backButton, this._punchButton]);
        this.skill_mappin.push(["sk_long_m"]);
        this.skill_array.push([this._backButton, this._kickButton]);
        this.skill_mappin.push(["sk_long_d"]);
        this.skill_array.push([this._frontButton, this._kick_lButton]);
        this.skill_mappin.push(["sk_yuedu2"]);
        this.skill_array.push([this._frontButton, this._kickButton]);
        this.skill_mappin.push(["sk_yuedu1"]);
        this.skill_array.push([this._downButton, this._punch_lButton]);
        this.skill_mappin.push(["punch3"]);
    } // End of the function
} // End of Class