class Type2_Chunli_AI extends Type2_Chunli_role {
    public combo_1: any = new Object();
    public combo_land: any = new Object();
    public combo_auto: any = new Object();
    public combo_burst: any = new Object();
    public delay_frames: any = new Object();
    public delay_frames2: any = new Object();
    public combo_oppOnEgde: any = new Object();
    public action_1: any = new Object();
    public skill_now: string;
    public dis: number;
    public actionType: string;
    public cpu_control2: any;   //不同模式下指向不同的控制器函数
    public combo_rate: number;  //组合技率
    public combo_rate0: number; //组合初始率
    public attack_rate: number; //进攻几率。越大表明越容易进攻
    public attack_rate0: number;//进攻率初始值
    public hold_rate: number;
    public hold_rate0: number;
    public attack_s: number;
    public attack_s0 = 30;
    public combo_risk = 50;
    public wait_frame: number;
    public wait_frame0: number;
    public skill_rate:number;
    public skill_rate0:number=500;
    public wait_f: number;
    // public delayTimer: number;
    public delay: number;//技能之间延迟帧数
    public walkrun_S: number;
    public skill_next: string;

    public skill_list: Array<any>;
    public skill2_dis: Array<Array<string>>;
    public dis_array: Array<number>;
    public skill_dis: Array<Array<string>>;
    public dis_num: number; //dis_array.length
    public combo_wait_startframe: number;

    public No_attack_f:Array<string>=["walk_f","dash_f"];
    public No_attack_b:Array<string>=["walk_b","dash_b",];
    public ordinary:Array<string>=["punch", "punch_l", "kick", "kick_l"]
    constructor() {
        super();
        this.toSkill_temp = this.toSkill;
        this.toStatus_temp = this.toStatus;
        this.toSkill = this.noAct;
        this.dis_array = new Array<number>();
        this.skill_dis = new Array<Array<string>>();
        this.skill2_dis = new Array<Array<string>>();
        let hero: zmovie.ZMovieClip = new zmovie.ZMovieClip([this._roleName + "0_json", this._roleName + "1_json", this._roleName + "2_json", this._roleName + "3_json"], RES.getRes(this._roleName + "_json"), "root");
        this.addChild(hero);
        this.mc = <zmovie.ZMovieClip>hero.$children[0];//name:role_K
        this.mc.gotoAndStop("begin");
        this.bodyMC = <zmovie.ZMovieClip>this.mc.$children[0];//二级骨骼,已经进入到每一个动作中 name:punch/kick/...
    }



    /**获得和对方的距离 */
    public getDis(): number {
        this.dis = Math.abs(this.x - this.opp.x);
        if (isNaN(this.dis)) {
            this.dis = 155;
        }
        return this.dis;
    }

    /**初始化比率值以及动作类型
     * 进攻/防御/停滞/普通
     */
    public initStage() {
        this.initPlus();
        let _loc2_ = 0;
        if (this.opp.winTimes >= this.winTimes && this.opp.winTimes > 0) {//胜场少则进攻
            this.actionType = "attack";
            this.cpu_control2 = this.cpu_attack;
        }
        else if (this.opp.winTimes < this.winTimes) {//胜场多则防御或停滞
            _loc2_ = Math.random();
            if (_loc2_ < 0.4) {//漫步
                this.actionType = "wander";
                this.cpu_control2 = this.cpu_wander;
            }
            else if (_loc2_ < 0.8) {//防御
                this.actionType = "defend";
                this.cpu_control2 = this.cpu_defend;
            }
            else {//普通
                this.actionType = "normal";
                this.cpu_control2 = this.cpu_normal;
            }
        }
        else {//胜场相等则均可能
            _loc2_ = Math.random();
            if (_loc2_ == 0) {
                this.actionType = "wander";
                this.cpu_control2 = this.cpu_wander;
            }
            else if (_loc2_ < 0.33) {
                this.actionType = "defend";
                this.cpu_control2 = this.cpu_defend;
            }
            else if (_loc2_ < 0.66) {
                this.actionType = "attack";
                this.cpu_control2 = this.cpu_attack;
            }
            else {
                this.actionType = "normal";
                this.cpu_control2 = this.cpu_normal;
            }
        }
    }

    /**初始化进攻率、防御率等属性 */
    public initPlus() {
        this.combo_rate = this.combo_rate0;
        this.attack_rate = this.attack_rate0;
        this.hold_rate = this.hold_rate0;
        this.attack_s = this.attack_s0;
        this.wait_frame = this.wait_frame0;
        this.skill_rate = this.skill_rate0;
    }

    /**判断状态定出下一行为为防御、连招或随机行为
     * 判断顺序
     * @1:防御判断
     * @2:固定模式判断
     * @3:随机选择
     */
    public cpu_control(): void {
        this.DEBUG_LOG('cpu_control')
        //使用render_delay_action调用cpu_control,同时清空上一过程判断的combo_Delay
        //=================add===========================
        this.render_AI_control = undefined;
        if (this.render_mc_action == this.render_combo_delay) {
            this.render_mc_action = undefined;
        }
        //=================end of add====================
        if (this.checkDefend()) {
            this.DEBUG_LOG("满足防御: " + this.mc.getCurrPlayLabel());
            return;
        }
        if (this.checkAction()) {
            this.DEBUG_LOG("满足行为: " + this.mc.getCurrPlayLabel());
            return;
        }
        this.DEBUG_LOG("cpu_control2:" + this.actionType);
        this.cpu_control2();
    }

    /**行动类型cpu_control2为普通时的控制器 */
    public cpu_normal() {
        this.initPlus();
        if (this.checkAttack()) {
            this.DEBUG_LOG("now cpu_normal, " + this.mc.getCurrPlayLabel());
            return true;
        }
        this.checkWait();
        this.DEBUG_LOG("wait cpu_normal");
    }

    /**行动类型cpu_control2为防御时的控制器
     * 防御状态下选出行为action进行执行
     */
    public cpu_defend() {
        this.initPlus();
        this.hold_rate = this.hold_rate * 1.3;
        let action = this.action_select("action_1", "defend");
        this.toSkill(action);
        this.DEBUG_LOG("cpu_defend, " + this.mc.getCurrPlayLabel());
    }

    /**行动类型cpu_control2为进攻时的控制器 */
    public cpu_attack() {
        this.initPlus();
        this.attack_rate = this.attack_rate * 1.3;
        if (this.checkAttack()) {
            this.DEBUG_LOG("now cpu_attack, " + this.mc.getCurrPlayLabel());
            return;
        }
        this.checkWait();
        this.DEBUG_LOG("wait cpu_attack");
    }

    /**行动类型cpu_control2为停滞时的控制器 */
    public cpu_wander() {
        this.initPlus();
        let action = this.action_select("action_1", "wander");
        this.toSkill(action);
        this.DEBUG_LOG("cpu_wander, " + this.mc.getCurrPlayLabel());
    }

    public checkStage() {
        //=============训练模式
        if (_level0.player_type == "trainning") {
            let _loc3_ = Math.random();
            if (_loc3_ < 0.33) {
                this.actionType = "defend";
                this.cpu_control2 = this.cpu_defend;
            }
            else if (_loc3_ < 0.66) {
                this.actionType = "attack";
                this.cpu_control2 = this.cpu_attack;
            }
            else if (_level0.level > 4) {
                this.actionType = "attack";
                this.cpu_control2 = this.cpu_attack;
            }
            else {
                this.actionType = "wander";
                this.cpu_control2 = this.cpu_wander;
            }
            return undefined;
        }
        //=================对战模式
        // let currlife = _level0.life_power_mc.time_mc.time_txt.text;
        let currlife = 100;
        if (currlife > 0 && currlife < 15 && this.life < this.opp.life) {
            this.actionType = "attack";
            this.cpu_control2 = this.cpu_attack;
        }
        else if (currlife > 0 && currlife < 15 && this.life > this.opp.life) {
            this.actionType = "defend";
            this.cpu_control2 = this.cpu_defend;
        }
        else if (this.life < this.life_max / 4) {
            this.actionType = "defend";
            this.cpu_control2 = this.cpu_defend;
        }
        else if (this.opp.life / this.life > 1.3) {
            this.actionType = "attack";
            this.cpu_control2 = this.cpu_attack;
        }
        else if (this.life / this.opp.life > 1.3) {
            this.actionType = "wander";
            this.cpu_control2 = this.cpu_wander;
        }
        else if (this.actionType != "normal") {
            this.initStage();
        }
    }

    /**行为选择
     * 共有以下几种判断场景
     * case1:满足地面连招要求
     * case2:距离较远行为选项为burst
     * case3:对方被击倒
     * case4:双方同向
     * case5:对方在roll_f
     * case6:在地图边缘
     * case7:对方防御hold_u且决定进攻
     * case8:对方防御hold_d且决定进攻
     */
    public checkAction(): boolean {
        let action: string = undefined;
        let action2: string = undefined;
        if (this.combo_check_land()) {//开始地面连招
            return true;//决定出下一行为:地面连招之一
        }
        if (this.getDis() > 300 && !_level0.KO) {//距离较远,行为选项仅为爆发,若满足则爆发,该次选择成功;不满足则该次选择失败
            if (this.checkBurst()) {
                return true;//决出下一行为:爆发
            } else {
                return false;
            }
        }
        else {//距离较近
            if (this.opp.status_3 == "down" && !_level0.KO) {//对方被击倒
                if (this.checkBurst()) {
                    return true;//下一行为:爆发
                }
                action = this.action_select("action_1", "down");
                if (action != undefined) {
                    this.toSkill(action);
                    return true;
                } else {
                    return false;
                }
            }//end of "down"
            if (this.opp.dir == this.dir) {//同向
                if (this.checkAttack()) {
                    return true;
                } else {
                    return false;
                }
            }//end of 同向
            else if (this.opp.status_1 == "roll_f" && this.getDis() < 200) {//对方在roll_f
                action2 = this.action_select("action_1", "oppRoll");
                if (action2 != undefined) {
                    this.toSkill(action2);
                    return true;
                } else {
                    return false;
                }
            }//end of roll_f
            else {
                if (this.onEdge) {//在地图边缘
                    action2 = this.action_select("action_1", "onEgde");
                    if (action2 != undefined) {
                        this.toSkill(action2);
                        return true;
                    } else {
                        return false;
                    }
                }//end of 在地图边缘
                else if (this.opp.status_1 == "hold_u" && Math.floor(Math.random() * 500) < this.attack_s) {//对方防御hold_u且决定进攻
                    action2 = this.action_select("action_1", "pos_down");
                    if (action2 != undefined) {
                        this.toSkill(action2);
                        return true;
                    } else {
                        return false;
                    }
                }//end of 对方防御hold_u且决定进攻
                else if (this.opp.status_1 == "hold_d" && Math.floor(Math.random() * 500) < this.attack_s) {//对方防御hold_d且决定进攻
                    action2 = this.action_select("action_1", "pos_up");
                    if (action2 != undefined) {
                        this.toSkill(action2);
                        return true;
                    } else {
                        return false;
                    }
                }//对方防御hold_d且决定进攻
                else {
                    return false;
                }
            }
        }
    }

    /**防御判断
     * 进攻欲大于防御欲时放弃防御
     * 未落地时无法防御
     * 进行攻击、翻滚等动作时无法防御
     * 当前状态为防御时放弃防御
     */
    public checkDefend(): boolean {
        let attackratio = Math.floor(Math.random() * 500);
        if (attackratio >= this.hold_rate) {
            return false;
        }
        if (this.status_2 != "land") {
            return false;
        }
        if (this.status_3 != "normal") {
            return false;
        }
        if (this.status_4 != "normal") {
            return false;
        }
        if (this.isNeedDefend()) {
            this.defend_start();
            return true;
        }
        return false;
    }
    /**判断是否需要进行防御
     * 判断原则:人物方向相同则不防御
     * 进攻未结束且拥有子技能则防御
     */
    public isNeedDefend(): boolean {
        if (this.dir == this.opp.dir && (this.opp.x - this.x) * this.dir > 0) {
            return false;
        }
        if (this.opp.hit_over()) {
            if (this.opp.hasObj()) {
                return true;
            }
            return false;
        }
        return true;
    }

    /**进攻判断*/
    public checkAttack(): boolean {
        let _loc2_ = Math.floor(Math.random() * 500);
        if (_loc2_ >= this.attack_rate) {
            return false;
        }
        this.attack_start();
        return true;
    }



    /**等待判断
     * 行为1为等待
     * 等待x帧后进入攻击
     */
    public checkWait() {
        if (this.wait_frame == 0) {//无需等待,与AI等级有关
            this.attack_start();
            return;
        }
        // this.DEBUG_LOG("AIcheckWait init render_checkWait");
        this.wait_f = Math.floor(Math.random() * this.wait_frame) + 5;
        this.render_mc_action = this.render_checkWait;
        this.render_mc_action_params = [];
    }

    public render_checkWait() {
        if (_level0.inPause) {
            return undefined;
        }
        if (this.inFreeze) {
            return undefined;
        }
        this.wait_f--;
        if (this.wait_f < 0) {
            this.render_mc_action = undefined;
            // this.DEBUG_LOG("render_checkWait init undefined");
            this.attack_start();
            // _level0.out("checkWait: 结束");
        }
    }

    /**判断是否进入爆发模式 */
    public checkBurst(): boolean {
        if (this.inBurst) {
            return false;
        }
        let notburst_ratio = Math.floor(Math.random() * 500);
        if (this.redBlood) {//红血必爆发
            notburst_ratio = 0;
        }
        if (notburst_ratio > this.attack_s) {
            return false;
        }
        let burstType: string = undefined;
        this.checkStage();
        if (this.actionType == "defend") {
            burstType = "defend";
        }
        else if (this.actionType == "attack") {
            burstType = "attack";
        }
        else {
            burstType = "power";
        }
        if (_level0.level > 4 && burstType == "defend") {
            burstType = "attack";
        }
        if (this.burst(burstType)) {
            return true;
        }
    }

    public skill_select(): string {
        this.skill_list = [];
        this.getDis();
        if (this.opp.isHitEnd() && this.skill2_dis && this.skill2_dis.length > 0) {
            let freeze_thre = 2;
            let index = 0;
            while (index < this.dis_num) {
                if (this.dis < this.dis_array[index]) {
                    if (this.opp.freeze_frame() < freeze_thre) {
                        break;
                    }
                    if (this.skill2_dis[index] != undefined) {
                        this.skill_list = this.skill2_dis[index];
                        break;
                    }
                    freeze_thre = freeze_thre + 3;
                }
                index = index + 1;
            }
        }
        if (this.skill_list.length == 0) {
            let index = 0;
            while (index < this.dis_num) {
                if (this.dis < this.dis_array[index]) {
                    this.skill_list = this.skill_dis[index];
                    break;
                }
                index = index + 1;
                if (index == this.dis_num) {
                    this.skill_list = this.skill_dis[this.dis_num - 1];//add
                }
            }
        }
        let index = Math.floor(Math.random() * this.skill_list.length);
        if (index == this.skill_list.length) {
            index = this.skill_list.length - 1;
        }
        let action = this.skill_list[index];
        return action;
    }

    /**返回undefined或行动action */
    public action_select(object: string, member: string): string {
        let aimArr: Array<string> = [];
        let aimArrs: Array<Array<string>> = this[object][member];
        let del_frames: Array<number> = this.delay_frames[member];
        if (aimArrs == undefined) {
            return undefined;
        }
        this.getDis();
        let index = 0;
        while (index < aimArrs.length) {
            if (this.dis < del_frames[index]) {
                aimArr = aimArrs[index];
                break;
            }
            index = index + 1;
        }
        if (aimArr.length == 0) {
            return undefined;
        }
        let aimindex = Math.floor(Math.random() * aimArr.length);
        if (aimindex == aimArr.length) {
            aimindex = aimArr.length - 1;
        }
        return aimArr[aimindex];
    }

    /**返回false或行动action */
    public super_select(): boolean | string {
        let _loc4_ = Math.floor(Math.random() * 500);
        if (_loc4_ >= this.attack_s) {
            return false;
        }
        if (this.opp.freeze_frame() < 4) {
            return false;
        }
        let action = this.action_select("action_1", "super");
        let _loc2_ = this.superCheck(action);
        if (_loc2_ == false) {
            return false;
        }
        if (_loc2_ == "notSpuerSkill") {
            return false;
        }
        return action;
    }

    /**返回false或行动action */
    public burst_select(): boolean | string {
        if (this.inBurst != true) {
            return false;
        }
        let _loc3_ = Math.floor(Math.random() * 500);
        if (_loc3_ >= this.attack_s) {
            return false;
        }
        if (this.opp.freeze_frame() < 4) {
            return false;
        }
        let action = this.action_select("action_1", "busrt");
        if (action == undefined) {
            return false;
        }
        return action;
    }

    /**开始进攻
     * bug:walk_f无坐标移动
     */
    public attack_start() {
        if (this.opp.superSkill || this.opp.isBurstSkill) {
            if (this.isNeedDefend() && Math.random() * 500 < this.hold_rate) {
                this.defend_start();
                return false;
            }
        }
        let action: string | boolean = undefined;
        let _loc3_ = Math.random();
        if (_loc3_ < 0.3) {
            action = this.super_select();
            if (action == false) {
                action = this.burst_select();
            }
        }
        else {
            action = this.burst_select();
            if (action == false) {
                action = this.super_select();
            }
        }
        if (action == false) {
            action = this.skill_select();//返回undefined
            if(Math.random() * 500 > this.skill_rate){
                if(this.getDis()<180){
                    action=this.ordinary[Math.floor( Math.random()*this.ordinary.length)]
                }else if(this.getDis()>500){
                    action=this.No_attack_f[Math.floor( Math.random()*this.No_attack_f.length)]
                }else{
                    action=this.No_attack_b[Math.floor( Math.random()*this.No_attack_b.length)]
                }
            }
        }
        if (action == undefined) {
            // trace("错误!技能未定义");
            // this.DEBUG_LOG("错误!技能未定义");
            this.stand();
        }
        this.toSkill(action);
        if (this.opp['checkDefend']) {
            this.opp['checkDefend']();
        }
        if (this.burst_mode != "attack") {
            if (this.inBurst) {
                this.inCount = false;
            }
        }
    }

    /**开始防御
     * 判断出是蹲防还是站防
     */
    public defend_start() {
        let action: string = undefined;
        this.getDis();
        let defend_ratio = Math.floor(Math.random() * 500);
        if (this.status_1 == "walk_b") {
            action = "hold_u";
        }
        else if (this.checkMustDefendSkill(this.opp.status_1)) {
            action = "hold_u";
        }
        else if (this.opp.superSkill || this.opp.isBurstSkill) {
            action = "hold_u";
        }
        else if (this.status_1 == "walk_f" || this.status_1 == "dash_f") {
            action = this.action_select("action_1", "defend_f");
        }
        else if (this.opp.status_1.indexOf("squat") > -1 && defend_ratio < this.hold_rate && this.dis < 250) {
            action = "hold_d";
        }
        else if (this.opp.status_2 == "air" && defend_ratio < this.attack_s && this.dis < 200 && this.opp.y + 70 < this.land_Y) {
            action = this.skillObj.toAir;
        }
        else if (defend_ratio < this.attack_s) {
            action = this.action_select("action_1", "defendAttack");
        }
        else {
            action = this.action_select("action_1", "defend_h");
        }
        if (action == undefined) {
            action = "hold_u";
        }
        this.toSkill(action);
    }

    /**等待_level0添加必防列表 */
    public checkMustDefendSkill(oppSkill) {
        // let _loc2_ = _level0.mustDefendSkill[this.opp.roleName];
        // for (let _loc3_ in _loc2_) {
        //     if (oppSkill == _loc2_[_loc3_]) {
        //         return true;
        //     }
        // }
        return false;
    }

    public actionDefend(action: string) {
        if (this.status_2 != "land") {
            return undefined;
        }
        if (this.status_3 != "normal") {
            return undefined;
        }
        if (this.status_4 != "normal") {
            return undefined;
        }
        let attack_ratio = Math.floor(Math.random() * 500);
        let to_action: string = undefined;
        if (attack_ratio > this.attack_s) {
            return false;
        }
        if (action == "roll_f") {
            to_action = this.action_select("action_1", "oppRoll");
            if (to_action == undefined) {
                return false;
            }
            this.toSkill(to_action);
        }
        else if (action == "jump" || action == "jump_f") {
            to_action = this.action_select("action_1", "oppJump");
            if (to_action == undefined) {
                return false;
            }
            this.toSkill(to_action);
        }
    }


    public combo_wait(status_1: string) {
        let start_frame: number = this.comboClass.combo2[status_1];
        if (start_frame == undefined || isNaN(start_frame)) {
            return undefined;
        }
        this.combo_wait_startframe = start_frame;
        // this.DEBUG_LOG("combo_wait init bodyMC render_combo_wait")
        this.render_bodyMC_action = this.render_combo_wait;
        this.render_bodyMC_action_params = [];
    }


    public render_combo_wait() {
        if (_level0.inPause) {
            return undefined;
        }
        if (this.inFreeze) {
            return undefined;
        }
        if (this.bodyMC.getCurrFrame() >= this.combo_wait_startframe) {
            this.render_bodyMC_action = undefined;
            this.combo_check();
        }
    }


    public combo_check() {
        if (this.combo_auto[this.skill_now] != undefined) {
            this.combo_select("combo_auto");
            this.combo_start();
            return true;
        }
        let _loc2_ = Math.floor(Math.random() * 500);
        if (this.onHit != true) {
            return false;
        }
        if (this.opp.status_3 != "hurt" && _loc2_ > this.combo_risk) {
            return false;
        }
        if (this.combo_oppOnEgde[this.skill_now] && this.opp.onEdge != true) {
            return false;
        }
        if (_loc2_ < this.combo_rate) {
            this.combo_select("combo_1");
            this.combo_start();
            return true;
        }
    }

    /**判断是否可以连招
     * 连招要求:
     * 对方已受伤
     * 进攻率低于连招率
     */
    public combo_check_land(): boolean {
        let attack_ratio = Math.floor(Math.random() * 500);
        if (this.opp.status_3 != "hurt") {//连招未击伤对方
            return false;
        } if (this.status_2 != "land") {
            return false;//
        }
        if (attack_ratio >= this.combo_rate) {//进攻率过高
            return false;
        }
        this.combo_select("combo_land");   //地面连招选择
        if (this.skill_next == undefined) {//add
            return false;
        }
        if (this.superCheck(this.skill_next) == false) {//若下一技能需要消耗能量则进行判断，不满足则弃用该连招
            return false;
        }
        if (this.skill_next != undefined) {
            this.combo_start();//开始连招
            return true;
        }
        return false;
    }

    /**连招选择,决出skill_next和delay
     * 参数说明:
     * comboType为combo_land,combo_auto,combo_1,combo_burst
     * this.skill_now为连招初始攻击
     * this.skill_next为下一攻击行为
     * delay为等待多少帧后执行this.skill_next
     */
    public combo_select(comboType: string): void {
        let combo_action_Array: Array<any> = undefined;
        //攻击爆发模式下选用combo_burst连招表
        if (this.inBurst && this.burst_mode == "attack") {
            combo_action_Array = this.combo_burst[this.skill_now];//以当前skill为起始技寻找连招链
        }
        //未在攻击爆发模式下选用comboType连招表
        if (combo_action_Array == undefined) {
            combo_action_Array = this[comboType][this.skill_now];
        }
        //add for 重复执行动作
        if (combo_action_Array == undefined) {
            this.skill_next = undefined;
            // this.delay = 0;
            return;
        }
        //=================寻到连招表,从连招表中随机选择一个行为作为下一动作并决定delay时间===================
        let index = Math.floor(Math.random() * combo_action_Array.length);
        if (index == combo_action_Array.length) {
            index = combo_action_Array.length - 1;
        }
        this.skill_next = combo_action_Array[index];
        if (this.inBurst && this.burst_mode == "attack" && this.delay_frames[this.skill_now]) {
            this.delay = this.delay_frames[this.skill_now][index];
        }
        else if (this.delay_frames[this.skill_now]) {
            this.delay = this.delay_frames[this.skill_now][index];
        } else {
            this.delay = 0;
        }
    }

    public combo_start() {
        if (this.skill_next == undefined) {
            return;
        }
        if (this.delay == 0) {//技能之间无间隙立刻执行
            this.toSkill(this.skill_next, true);
        }
        else {
            this.combo_delay();//技能之间存在间隙,进行读帧
        }
    }

    /**技能之间存在间隙,进行读帧
     * 添加判断以防止人物空中停留
     * 很重要
    */
    public combo_delay() {
        // this.DEBUG_LOG("AIstart_combo_delay init render_combo_delay");
        if (this.render_mc_action != undefined || this.render_position_y != undefined) {
            return;
        }
        this.render_mc_action = this.render_combo_delay;
        this.render_mc_action_params = [];
    }

    public render_combo_delay() {
        if (_level0.inPause) {
            return undefined;
        }
        if (this.inFreeze) {
            return undefined;
        }
        this.delay = this.delay - 1;
        if (this.delay <= 0) {
            this.render_mc_action = undefined;
            // this.DEBUG_LOG("AIrender_combo_delay init undefined:" + this.skill_next);
            this.toSkill(this.skill_next, true);
        }
    }

    public start_control() {
        this.control = true;
        this.initStage();
        this.toSkill = this.toSkill_temp;
        this.toStatus = this.toStatus_temp;
        this.toStatus_switch("stand");
    }

    public toStatus_switch(action: string) {
        if (this.status_3 == "hurt") {
            return undefined;
        }
        this.statusClear();
        this.checkSide();
        this.showHits_end();
        if (this.delaySkill != "") {
            this.toSkill(this.delaySkill);
            this.delaySkill = "";
            return undefined;
        }
        this.toStatus(action);
    }


    public toSkill(action, cancle: boolean = false) {
        this.DEBUG_LOG("toSkill:" + action);
        
        if (_level0.inPause) {
            return undefined;
        }
        if (this.opp.isKO) {
            return undefined;
        }
        if (_level0.inFreeze) {
            this.skill_delay(action);
            return undefined;
        }
        if (action == undefined) {
            this.attack_start();
            return undefined;
        }
        //add pitch 判断
        if (action == "pitch" && !this.catch_check()) {
            this.attack_start();
            return undefined;
        }
        let _loc3_ = this.superCheck(action);
        if (_loc3_ == false) {//是特殊技但是不满足要求
            this.attack_start();
            return false;
        }
        if (_loc3_ == true) {//是特殊技且满足要求
            if (this.burst_mode == "power") {
                let _loc4_ = this.skillSuperCheck(action);
                if (_loc4_ != "") {
                    this.powerDecType = "super";
                    action = _loc4_;
                }
            }
        }
        if (this.burstCheck(action) == false) {//是爆发技但是不满足要求
            this.attack_start();
            return undefined;
        }
        this.skill_now = action;
        if (this[action] != undefined) {
            if (this.toStatus(action)) {
                this.powerDec();
                this.powerDec2();
            }
            else {
                this.powerDecType = "";
                this.powerDecType2 = "";
            }
        }
        else if (this.status_2 == "land" && (this.status_3 == "normal" || this.status_3 == "attack")) {
            if (this.toStatus(action)) {
                this.status_3 = "attack";
                this.powerDec();
                this.powerDec2();
            }
            else {
                this.powerDecType = "";
                this.powerDecType2 = "";
            }
        }
        else {
            return undefined;
        }
        if (this.comboClass.combo2[this.status_1] != undefined) {
            this.combo_wait(action);
        }
        return true;
    }


    /**行为1为空
     * 行为2为移动
     */
    public move_walkRun() {
        this.render_mc_action = undefined;
        // egret.clearInterval(this.delayTimer);
        this.walkrun_S = 0;
        this.combo_select("combo_1");
        this.DEBUG_LOG("location:  init AImove_walkRun");
        this.render_position_x = this.render_move_walkRun;
        this.render_position_x_params = [];
    }

    public render_move_walkRun() {
        if (_level0.inPause) {
            return undefined;
        }
        if (this.inFreeze) {
            return undefined;
        }
        if(this.status_1=="stand"){
            this.render_position_x = undefined;
            return undefined;
        }
        this.do_move(this.Vx);
        if (this.getDis() < this.delay) {
            this.render_position_x = undefined;
            this.DEBUG_LOG("REMOVE render_move_walkRun1")
            if (_level0.level == 5) {
                if (this.checkDefend()) {
                    return undefined;
                }
                this.toSkill(this.skill_next, true);
            }
            else {
                this.toSkill(this.skill_next, true);
            }
        }
        if (this.onEdge) {
            this.walkrun_S++;
            let currentX = this.localToGlobal().x;
            if (this.walkrun_S > 20 || currentX < 80 || currentX > GameConfig.FightWidth - 80) {
                this.render_position_x = undefined;
                this.DEBUG_LOG("REMOVE render_move_walkRun2")
                let _loc2_ = Math.random();
                if (_loc2_ < 0.2) {
                    this.attack();
                }
                else {
                    this.stand();
                }
                return undefined;
            }
        }
        if (this.opp.status_3 == "attack" && this.getDis() < 200) {
            if (this.checkDefend()) {
                this.render_position_x = undefined;
                this.DEBUG_LOG("REMOVE render_move_walkRun3")
            }
        }
        else if (this.opp.hasObj()) {
            if (this.checkDefend()) {
                this.render_position_x = undefined;
                this.DEBUG_LOG("REMOVE render_move_walkRun4")
            }
        }
        else if (this.getDis() < 200) {
            this.render_position_x = undefined;
            this.DEBUG_LOG("REMOVE render_move_walkRun5")
            this.attack_start();
        }
    }


    public move_squat() {
    }

    public move_hold() {
        this.DEBUG_LOG("move_hold");
        // egret.clearInterval(this.delayTimer);
        this.render_bodyMC_action = this.render_move_hold;
        this.render_bodyMC_action_params = [];
    }

    public render_move_hold() {
        if (this.status_2 != "land" || this.status_3 != "normal") {
            this.render_bodyMC_action = undefined;
            return;
        }
        if (_level0.inPause) {
            return undefined;
        }
        if (this.inFreeze) {
            return undefined;
        }
        if (this.checkMustDefendSkill(this.opp.status_1)) {
            return undefined;
        }
        if (this.opp.hasObj() && this.holdFreeze == false) {
            if (this.opp.getObjNum() > 1) {
                return undefined;
            }
            let opp_objmc = this.opp.getObj();
            if (opp_objmc._mcName == "eff_rush") {//临时
                opp_objmc = undefined;
            }
            let opp_distance = this.opp.getObjDis();
            if (opp_objmc != undefined && opp_objmc.width <= 250) {
                if (opp_distance != undefined && opp_distance < 130 && opp_distance > 100) {
                    let _loc1_ = Math.random();
                    if (_loc1_ < 0.5 * this.hold_rate * 0.01) {
                        this.render_bodyMC_action = undefined;//add
                        this.DEBUG_LOG("remove_move_hold1");
                        this.roll_f();
                    }
                    return undefined;
                }
                return undefined;
            }
        }
        if ((this.opp.hitPos == "up" || this.opp.status_2 == "air") && this.status_1 != "hold_u") {
            if (_level0.level == 5) {
                // this.DEBUG_LOG("remove_move_hold2");
                this.render_bodyMC_action = undefined;//add
                this.hold_u();
                return undefined;
            }
            let _loc1_ = Math.floor(Math.random() * 500);
            if (_loc1_ < this.attack_s) {
                // this.DEBUG_LOG("remove_move_hold3");
                this.render_bodyMC_action = undefined;//add
                this.hold_u();
                return undefined;
            }
        }
        else if ((this.opp.status_1.indexOf("squat") > -1 || this.opp.hitPos == "down") && this.status_1 != "hold_d") {
            this.render_bodyMC_action = undefined;//add
            // this.DEBUG_LOG("remove_move_hold4");
            this.hold_d();
            return undefined;
        }
        if (this.opp.status_3 != "attack" && !this.opp.hasObj() && this.holdFreeze == false) {
            // this.DEBUG_LOG("remove_move_hold5");
            this.render_bodyMC_action = undefined;//add
            if (this.status_1 == "hold_d") {
                this.squat();
            }
            else {
                this.stand();
            }
        }
        else if (this.holdFreeze == false && this.opp.hit_over()) {
            // _level0.out("防御中检测对手收招");
            // this.DEBUG_LOG("防御中检测对手收招");
            if (!this.checkAttack()) {//是否进攻
                this.render_bodyMC_action = undefined;//add
                if (this.status_1 == "hold_d") {
                    this.squat();
                }
                else {
                    this.stand();
                }
            }
        }
    }

    /**站立时调用cpu_control()进行行为抉择
     * 控制人物 */
    public stand(): boolean {
        if (this.y != this.land_Y) {
            this.y = this.land_Y;
        }
        this.render_AI_control = this.cpu_control;
        this.statusClear();
        this.status_1 = "stand";
        this.mc.gotoAndStop("stand");
        // this.cpu_control();
        return true;
    }

    /**蹲时调用cpu_control()进行行为抉择
     * 控制人物 */
    public squat(): boolean {
        if (this.status_2 != "land" || this.status_3 != "normal") {
            return false;
        }
        this.statusClear();
        this.mc.gotoAndStop("squat");
        this.status_1 = "squat";
        this.render_AI_control = this.cpu_control;
        // this.cpu_control();
        return true;
    }

    public attack() {
        this.attack_start();
    }

    public wait() {
        this.statusClear();
        this.status_1 = "stand";
        this.mc.gotoAndStop("stand");
        this.checkWait();
    }

    /**等待对手站起
     * 站起后立即进攻
     */
    public waitStand() {
        this.statusClear();
        this.status_1 = "stand";
        this.mc.gotoAndStop("stand");
        this.render_bodyMC_action = this.render_waitStand;
        this.render_bodyMC_action_params = [];
    }

    public render_waitStand() {
        if (_level0.inPause) {
            return undefined;
        }
        if (this.inFreeze) {
            return undefined;
        }
        if (this.opp.status_3 != "down") {
            this.render_bodyMC_action = undefined;
            this.attack_start();
        }
    }

    public walk_f(): boolean {
        if (this.status_2 != "land" || this.status_3 != "normal") {
            return false;
        }
        this.Vx = this.dir * this.Vwalk;
        this.mc.gotoAndStop("walk_f");
        this.status_1 = "walk_f";
        this.move_walkRun();
        // egret.clearInterval(this.delayTimer);
        // this.delayTimer = egret.setInterval(this.move_walkRun, this, 5);
    }

    public walk_b(): boolean {
        if (this.status_2 != "land" || this.status_3 != "normal") {
            return false;
        }
        if (this.opp.status_3 == "attack") {
            this.hold_u();
            return false;
        }
        this.Vx = this.dir * (- this.Vwalk);
        this.mc.gotoAndStop("walk_b");
        this.status_1 = "walk_b";
        this.move_walkRun();
        // egret.clearInterval(this.delayTimer);
        // this.delayTimer = egret.setInterval(this.move_walkRun, this, 5);
        return true;
    }

    public dash_f(): boolean {
        if (this.status_2 != "land" || this.status_3 != "normal") {
            return false;
        }
        this.Vx = this.dir * this.Vdash;
        this.mc.gotoAndStop("dash_f");
        this.status_1 = "dash_f";
        this.move_walkRun();
        // egret.clearInterval(this.delayTimer);
        // this.delayTimer = egret.setInterval(this.move_walkRun, this, 5);
        return true;
    }

    public dash_b(): boolean {
        if (this.status_2 != "land" || this.status_3 != "normal") {
            return false;
        }
        this.mc.gotoAndStop("dash_b");
        this.status_1 = "dash_b";
        this.Vx = -26;
        this.Vy = 17;
        this.status_2 = "air";
        return true;
    }

    public hold(): boolean {
        return this.hold_u();
    }

    public hold_u(): boolean {
        if (this.status_2 != "land" || this.status_3 != "normal") {
            return false;
        }
        this.mc.gotoAndStop("hold_u");
        this.status_1 = "hold_u";
        this.status_4 = "hold";
        this.move_hold();
        // egret.clearInterval(this.delayTimer);
        // this.delayTimer = egret.setInterval(this.move_hold, this, 5);
        return true;
    }

    public hold_d(): boolean {
        if (this.status_2 != "land" || this.status_3 != "normal") {
            return false;
        }
        this.mc.gotoAndStop("hold_d");
        this.status_1 = "hold_d";
        this.status_4 = "hold";
        this.move_hold();
        // egret.clearInterval(this.delayTimer);
        // this.delayTimer = egret.setInterval(this.move_hold, this, 5);
        return true;
    }

    public jump_f(): boolean {
        if (this.status_2 != "land") {
            return false;
        }
        this.render_bodyMC_action = this.render_jump;
        this.render_bodyMC_action_params = [];
        this.status_2 = "air";
        this.mc.gotoAndStop("jump_f");
        this.status_1 = "jump_f";
        this.Vx = this.Vjump_x;
        this.Vy = this.Vjump_y;
        return true;
    }

    public jump_b(): boolean {
        if (this.status_2 != "land") {
            return false;
        }
        this.render_bodyMC_action = this.render_jump;
        this.render_bodyMC_action_params = [];
        this.status_2 = "air";
        this.mc.gotoAndStop("jump_b");
        this.status_1 = "jump_b";
        this.Vx = - this.Vjump_x;
        this.Vy = this.Vjump_y;
        return true;
    }


    public jump(): boolean {
        if (this.status_2 != "land") {
            return false;
        }
        this.render_bodyMC_action = this.render_jump;
        this.render_bodyMC_action_params = [];
        this.status_2 = "air";
        this.mc.gotoAndStop("jump");
        this.status_1 = "jump";
        this.Vx = 0;
        this.Vy = this.Vjump_y;
        return true;
    }


    public punch(): boolean {
        if (this.status_2 != "land" || this.status_3 != "normal") {
            return false;
        }
        this.mc.gotoAndStop("punch");
        this.status_1 = "punch";
        this.status_3 = "attack";
        return true;
    }

    public pitch(): boolean {
        if (!super.pitch()) {
            return this.punch();
        }
        return true;
    }
    public kick2(): boolean {
        this.mc.gotoAndStop("kick2");
        this.status_1 = "kick2";
        this.status_3 = "attack";
        return true;
    }
    public hold_end() {
        this.holdFreeze = false;
    }

    public selectOne(array: Array<any>) {
        let index = Math.floor(Math.random() * array.length);
        if (index == array.length) {
            index = array.length - 1;
        }
        return array[index];
    }

    public render_jump() {
        if (_level0.inPause) {
            return undefined;
        }
        if (this.inFreeze) {
            return undefined;
        }
        if (this.status_2 == "land") {
            return undefined;
        }
        this.air_check();
    }

    /**若满足条件则在空中进行攻击
     * 否则等待落地
     */
    public air_check() {
        if (this.getDis() > 350) {
            return undefined;
        }
        let action: string = undefined;
        let _loc3_ = undefined;
        if (this.opp.status_2 == "air" || this.opp.status_3 == "hurt") {
                _loc3_ = Math.floor(Math.random() * 500);
                if (_loc3_ > 50) {
                    action = "punch";
                }
                else {
                    action = "kick";
                }
            if (this.bodyMC.getCurrFrame() > 7) {
                this.render_bodyMC_action = undefined;
                this.jumpSkill(action);
            }
        }
        else if (this.y > this.land_Y - 150 && this.Vy < 0&&this.status_2=="land") {
            _loc3_ = Math.floor(Math.random() * 500);
            if (_loc3_ < 50) {
                action = "punch";
            }
            else{
                action = "kick";
            }
            this.render_bodyMC_action = undefined;
            this.jumpSkill(action);
        }
        this.render_bodyMC_action = undefined;
    }
    public CPU_check(act)
    {
        let _loc3 = Math.floor(Math.random() * 100);
        if (act == "xuanzhuan" && _loc3 < this.attack_s)
        {
            if (this.onHit && this.opp.status_3 == "hurt")
            {
                this.skill_next = "sk_tibing0";
            }
            else if (this.onHit)
            {
                this.skill_next = "sk_huaxing";
            } // end if
        }
    } // end else if
}
