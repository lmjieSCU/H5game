class Terry_Player extends Terry_role
{

    public skill_array: Array<any>;
    public skill_mapping: Array<any>;
    public keyButtons: any;

    public test:string;
   constructor ()
   {
      super();
      this.toSkill_temp = this.toSkill;
      this.toAction_temp = this.toAction;
      this.toStatus_temp = this.toStatus;
      this.toSkill = this.noAct;
      this.toAction = this.noAct;
      let hero = new zmovie.ZMovieClip(["roleTerry0_json", "roleTerry1_json"], RES.getRes("roleTerry_json"), "root");
      this.addChild(hero);      
      this.mc = <zmovie.ZMovieClip>hero.$children[0];//name:mc_0
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
        this.test=this.keyButtons.test;
        return;
    }
    //this.skill_array.push([this._backButton,this._punchButton]);
   public skill_code()
   {
      this.skill_array.push([ this._downButton,this._backButton,this._burstButton]);
      this.skill_mapping.push(["db_o"]);
      this.skill_array.push([ this._downButton,this._frontButton,this._burstButton]);
      this.skill_mapping.push(["df_o"]);
      this.skill_array.push([ this._downButton,this._backButton, this._downButton,this._frontButton,this._punchButton]);
      this.skill_mapping.push(["dbdf_p"]);
      this.skill_array.push([this._backButton,this._punchButton]);
      //this.skill_array.push([ this._downButton,this._backButton,this._frontButton,this._punchButton]);
      this.skill_mapping.push(["dbdf_p"]);
      this.skill_array.push([ this._downButton,this._frontButton, this._downButton,this._frontButton,this._kickButton]);
      
      this.skill_mapping.push(["dfdf_k"]);
      this.skill_array.push([this._frontButton, this._downButton,this._frontButton,this._punchButton]);
      this.skill_mapping.push(["fdf_p"]);
      this.skill_array.push([this._frontButton, this._downButton,this._frontButton,this._kick_lButton]);
      this.skill_mapping.push(["fdf_kl"]);
      this.skill_array.push([this._frontButton, this._downButton,this._frontButton,this._kickButton]);
      this.skill_mapping.push(["fdf_kl"]);
      this.skill_array.push([ this._downButton,this._frontButton,this._punch_lButton]);
      this.skill_mapping.push(["df_ph"]);
      this.skill_array.push([ this._downButton,this._frontButton,this._punchButton]);
      this.skill_mapping.push(["df_p_EX"]);
      this.skill_array.push([ this._downButton,this._frontButton,this._kickButton]);
      this.skill_mapping.push(["df_k_EX"]);
      this.skill_array.push([ this._downButton,this._backButton,this._kickButton]);
      this.skill_mapping.push(["db_k"]);
      this.skill_array.push([ this._downButton,this._backButton,this._punch_lButton]);
      this.skill_mapping.push(["db_pl"]);
      this.skill_array.push([ this._downButton,this._backButton,this._punchButton]);
      this.skill_mapping.push(["db_p"]);
   }
   public skill_code_easy(){
        this.skill_array.push([this._frontButton, this._punch_lButton]);
        this.skill_mapping.push(["df_ph"]);
        this.skill_array.push([this._backButton,  this._punch_lButton]);
        this.skill_mapping.push(["db_p"]);      
        this.skill_array.push([this._downButton,  this._punch_lButton]);
        this.skill_mapping.push(["dbdf_p"]);
        // this.skill_array.push([this._upButton,  this._punch_lButton]);
        // this.skill_mapping.push(["sk_dbp"]); 

        this.skill_array.push([this._frontButton, this._kick_lButton]);
        this.skill_mapping.push(["df_p_EX"]);
        this.skill_array.push([this._backButton,  this._kick_lButton]);
        this.skill_mapping.push(["fdf_p"]);      
        this.skill_array.push([this._downButton,  this._kick_lButton]);
        this.skill_mapping.push(["dfdf_k"]);
        // this.skill_array.push([this._upButton,  this._kick_lButton]);
        // this.skill_mapping.push(["sk_dbp"]);

        // this.skill_array.push([ this._downButton,this._frontButton,this._punchButton]);
        // this.skill_mapping.push(["fdf_p"]);
        // this.skill_array.push([ this._downButton,this._frontButton,this._kickButton]);
        // this.skill_mapping.push(["fdf_kl"]);
        // this.skill_array.push([this._frontButton,this._kickButton]);
        // this.skill_mapping.push(["df_k_EX"]);
        // this.skill_array.push([this._backButton,this._kickButton]);
        // this.skill_mapping.push(["db_k"]);
        // this.skill_array.push([this._frontButton,this._punch_lButton]);
        // this.skill_mapping.push(["df_ph"]);
        // this.skill_array.push([this._frontButton,this._punchButton]);
        // this.skill_mapping.push(["df_p_EX"]);
        // this.skill_array.push([this._backButton,this._punchButton]);
        // this.skill_mapping.push(["db_p"]);
   }
}