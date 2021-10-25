var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var Type2_Moriya_AI = (function (_super) {
    __extends(Type2_Moriya_AI, _super);
    function Type2_Moriya_AI() {
        var _this = _super.call(this) || this;
        _this.ooo = false;
        _this.combo_1 = new Object();
        _this.combo_land = new Object();
        _this.combo_auto = new Object();
        _this.combo_burst = new Object();
        _this.delay_frames = new Object();
        _this.delay_frames2 = new Object();
        _this.combo_oppOnEgde = new Object();
        _this.action_1 = new Object();
        _this.attack_s0 = 30;
        _this.combo_risk = 50;
        _this.skill_rate0 = 500;
        _this.strength = false;
        _this.No_attack_f = ["walk_f", "dash_f"];
        _this.No_attack_b = ["walk_b", "dash_b",];
        _this.ordinary = ["punch", "punch_l", "kick", "kick_l"];
        _this.toSkill_temp = _this.toSkill;
        _this.toStatus_temp = _this.toStatus;
        _this.toSkill = _this.noAct;
        _this.dis_array = new Array();
        _this.skill_dis = new Array();
        _this.skill2_dis = new Array();
        var hero = new zmovie.ZMovieClip(["roleMoriya0_json", "roleMoriya1_json"], RES.getRes("roleMoriya_json"), "root");
        _this.addChild(hero);
        _this.mc = hero.$children[0];
        _this.mc.gotoAndStop("begin");
        _this.bodyMC = _this.mc.getChildMovie("mc"); //二级骨骼,已经进入到每一个动作中 name:punch/kick/...
        return _this;
    }
    /**获得和对方的距离 */
    Type2_Moriya_AI.prototype.getDis = function () {
        this.dis = Math.abs(this.x - this.opp.x);
        if (isNaN(this.dis)) {
            this.dis = 155;
        }
        return this.dis;
    };
    /**初始化比率值以及动作类型
     * 进攻/防御/停滞/普通
     */
    Type2_Moriya_AI.prototype.initStage = function () {
        this.initPlus();
        var _loc2_ = 0;
        if (this.opp.winTimes >= this.winTimes && this.opp.winTimes > 0) {
            this.actionType = "attack";
            this.cpu_control2 = this.cpu_attack;
        }
        else if (this.opp.winTimes < this.winTimes) {
            _loc2_ = Math.random();
            if (_loc2_ < 0.4) {
                this.actionType = "wander";
                this.cpu_control2 = this.cpu_wander;
            }
            else if (_loc2_ < 0.8) {
                this.actionType = "defend";
                this.cpu_control2 = this.cpu_defend;
            }
            else {
                this.actionType = "normal";
                this.cpu_control2 = this.cpu_normal;
            }
        }
        else {
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
    };
    /**初始化进攻率、防御率等属性 */
    Type2_Moriya_AI.prototype.initPlus = function () {
        this.combo_rate = this.combo_rate0;
        this.attack_rate = this.attack_rate0;
        this.hold_rate = this.hold_rate0;
        this.attack_s = this.attack_s0;
        this.wait_frame = this.wait_frame0;
        this.skill_rate = this.skill_rate0;
    };
    /**判断状态定出下一行为为防御、连招或随机行为
     * 判断顺序
     * @1:防御判断
     * @2:固定模式判断
     * @3:随机选择
     */
    Type2_Moriya_AI.prototype.cpu_control = function () {
        this.DEBUG_LOG('cpu_control');
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
    };
    Type2_Moriya_AI.prototype.cpu_control_easily = function () {
        //使用render_delay_action调用cpu_control,同时清空上一过程判断的combo_Delay
        this.render_AI_control = undefined;
        if (this.render_mc_action == this.render_combo_delay) {
            this.render_mc_action = undefined;
        }
        if (this.checkDefend()) {
            return true;
        }
        if (this.checkAction_easily()) {
            return true;
        }
        if (this.checkAttack()) {
            return true;
        }
        this.checkWait();
    };
    Type2_Moriya_AI.prototype.checkAction_easily = function () {
        var action = undefined;
        if (this.combo_check_land()) {
            return true;
        }
        if (this.opp.status_3 == "down") {
            if (this.checkBurst()) {
                return true;
            }
            action = this.action_select("action_1", "down");
            this.toSkill(action);
            return true;
        }
        if (this.onEdge) {
            action = this.action_select("action_1", "onEgde");
            this.toSkill(action);
            return true;
        }
        return false;
    };
    /**行动类型cpu_control2为普通时的控制器 */
    Type2_Moriya_AI.prototype.cpu_normal = function () {
        this.initPlus();
        if (this.checkAttack()) {
            this.DEBUG_LOG("now cpu_normal, " + this.mc.getCurrPlayLabel());
            return true;
        }
        this.checkWait();
        this.DEBUG_LOG("wait cpu_normal");
    };
    /**行动类型cpu_control2为防御时的控制器
     * 防御状态下选出行为action进行执行
     */
    Type2_Moriya_AI.prototype.cpu_defend = function () {
        this.initPlus();
        this.hold_rate = this.hold_rate * 1.3;
        var action = this.action_select("action_1", "defend");
        this.toSkill(action);
        this.DEBUG_LOG("cpu_defend, " + this.mc.getCurrPlayLabel());
    };
    /**行动类型cpu_control2为进攻时的控制器 */
    Type2_Moriya_AI.prototype.cpu_attack = function () {
        this.initPlus();
        this.attack_rate = this.attack_rate * 1.3;
        if (this.checkAttack()) {
            this.DEBUG_LOG("now cpu_attack, " + this.mc.getCurrPlayLabel());
            return;
        }
        this.checkWait();
        this.DEBUG_LOG("wait cpu_attack");
    };
    /**行动类型cpu_control2为停滞时的控制器 */
    Type2_Moriya_AI.prototype.cpu_wander = function () {
        this.initPlus();
        var action = this.action_select("action_1", "wander");
        this.toSkill(action);
        this.DEBUG_LOG("cpu_wander, " + this.mc.getCurrPlayLabel());
    };
    Type2_Moriya_AI.prototype.checkStage = function () {
        //=============训练模式
        if (_level0.player_type == "trainning") {
            var _loc3_ = Math.random();
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
        var currlife = 100;
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
    };
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
    Type2_Moriya_AI.prototype.checkAction = function () {
        var action = undefined;
        var action2 = undefined;
        if (this.combo_check_land()) {
            return true; //决定出下一行为:地面连招之一
        }
        if (this.getDis() > 300 && !_level0.KO) {
            if (this.checkBurst()) {
                return true; //决出下一行为:爆发
            }
            else {
                return false;
            }
        }
        else {
            if (this.opp.status_3 == "down" && !_level0.KO) {
                if (this.checkBurst()) {
                    return true; //下一行为:爆发
                }
                action = this.action_select("action_1", "down");
                if (action != undefined) {
                    this.toSkill(action);
                    return true;
                }
                else {
                    return false;
                }
            } //end of "down"
            if (this.opp.dir == this.dir) {
                if (this.checkAttack()) {
                    return true;
                }
                else {
                    return false;
                }
            } //end of 同向
            else if (this.opp.status_1 == "roll_f" && this.getDis() < 200) {
                action2 = this.action_select("action_1", "oppRoll");
                if (action2 != undefined) {
                    this.toSkill(action2);
                    return true;
                }
                else {
                    return false;
                }
            } //end of roll_f
            else {
                if (this.onEdge) {
                    action2 = this.action_select("action_1", "onEgde");
                    if (action2 != undefined) {
                        this.toSkill(action2);
                        return true;
                    }
                    else {
                        return false;
                    }
                } //end of 在地图边缘
                else if (this.opp.status_1 == "hold_u" && Math.floor(Math.random() * 500) < this.attack_s) {
                    action2 = this.action_select("action_1", "pos_down");
                    if (action2 != undefined) {
                        this.toSkill(action2);
                        return true;
                    }
                    else {
                        return false;
                    }
                } //end of 对方防御hold_u且决定进攻
                else if (this.opp.status_1 == "hold_d" && Math.floor(Math.random() * 500) < this.attack_s) {
                    action2 = this.action_select("action_1", "pos_up");
                    if (action2 != undefined) {
                        this.toSkill(action2);
                        return true;
                    }
                    else {
                        return false;
                    }
                } //对方防御hold_d且决定进攻
                else {
                    return false;
                }
            }
        }
    };
    /**防御判断
     * 进攻欲大于防御欲时放弃防御
     * 未落地时无法防御
     * 进行攻击、翻滚等动作时无法防御
     * 当前状态为防御时放弃防御
     */
    Type2_Moriya_AI.prototype.checkDefend = function () {
        var attackratio = Math.floor(Math.random() * 500);
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
    };
    /**判断是否需要进行防御
     * 判断原则:人物方向相同则不防御
     * 进攻未结束且拥有子技能则防御
     */
    Type2_Moriya_AI.prototype.isNeedDefend = function () {
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
    };
    /**进攻判断*/
    Type2_Moriya_AI.prototype.checkAttack = function () {
        var _loc2_ = Math.floor(Math.random() * 500);
        if (_loc2_ >= this.attack_rate) {
            return false;
        }
        this.attack_start();
        return true;
    };
    /**等待判断
     * 行为1为等待
     * 等待x帧后进入攻击
     */
    Type2_Moriya_AI.prototype.checkWait = function () {
        if (this.wait_frame == 0) {
            this.attack_start();
            return;
        }
        // this.DEBUG_LOG("AIcheckWait init render_checkWait");
        this.wait_f = Math.floor(Math.random() * this.wait_frame) + 5;
        this.render_mc_action = this.render_checkWait;
        this.render_mc_action_params = [];
    };
    Type2_Moriya_AI.prototype.render_checkWait = function () {
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
    };
    /**判断是否进入爆发模式 */
    Type2_Moriya_AI.prototype.checkBurst = function () {
        if (this.inBurst) {
            return false;
        }
        var notburst_ratio = Math.floor(Math.random() * 500);
        if (this.redBlood) {
            notburst_ratio = 0;
        }
        if (notburst_ratio > this.attack_s) {
            return false;
        }
        var burstType = undefined;
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
    };
    Type2_Moriya_AI.prototype.skill_select = function () {
        this.skill_list = [];
        this.getDis();
        if (this.opp.isHitEnd() && this.skill2_dis && this.skill2_dis.length > 0) {
            var freeze_thre = 2;
            var index_1 = 0;
            while (index_1 < this.dis_num) {
                if (this.dis < this.dis_array[index_1]) {
                    if (this.opp.freeze_frame() < freeze_thre) {
                        break;
                    }
                    if (this.skill2_dis[index_1] != undefined) {
                        this.skill_list = this.skill2_dis[index_1];
                        break;
                    }
                    freeze_thre = freeze_thre + 3;
                }
                index_1 = index_1 + 1;
            }
        }
        if (this.skill_list.length == 0) {
            var index_2 = 0;
            while (index_2 < this.dis_num) {
                if (this.dis < this.dis_array[index_2]) {
                    this.skill_list = this.skill_dis[index_2];
                    break;
                }
                index_2 = index_2 + 1;
                if (index_2 == this.dis_num) {
                    this.skill_list = this.skill_dis[this.dis_num - 1]; //add
                }
            }
        }
        var index = Math.floor(Math.random() * this.skill_list.length);
        if (index == this.skill_list.length) {
            index = this.skill_list.length - 1;
        }
        var action = this.skill_list[index];
        return action;
    };
    /**返回undefined或行动action */
    Type2_Moriya_AI.prototype.action_select = function (object, member) {
        var aimArr = [];
        var aimArrs = this[object][member];
        var del_frames = this.delay_frames[member];
        if (aimArrs == undefined) {
            return undefined;
        }
        this.getDis();
        var index = 0;
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
        var aimindex = Math.floor(Math.random() * aimArr.length);
        if (aimindex == aimArr.length) {
            aimindex = aimArr.length - 1;
        }
        return aimArr[aimindex];
    };
    /**返回false或行动action */
    Type2_Moriya_AI.prototype.super_select = function () {
        var _loc4_ = Math.floor(Math.random() * 500);
        if (_loc4_ >= this.attack_s) {
            return false;
        }
        if (this.opp.freeze_frame() < 4) {
            return false;
        }
        var action = this.action_select("action_1", "super");
        var _loc2_ = this.superCheck(action);
        if (_loc2_ == false) {
            return false;
        }
        if (_loc2_ == "notSpuerSkill") {
            return false;
        }
        return action;
    };
    /**返回false或行动action */
    Type2_Moriya_AI.prototype.burst_select = function () {
        if (this.inBurst != true) {
            return false;
        }
        var _loc3_ = Math.floor(Math.random() * 500);
        if (_loc3_ >= this.attack_s) {
            return false;
        }
        if (this.opp.freeze_frame() < 4) {
            return false;
        }
        var action = this.action_select("action_1", "busrt");
        if (action == undefined) {
            return false;
        }
        return action;
    };
    /**开始进攻
     * bug:walk_f无坐标移动
     */
    Type2_Moriya_AI.prototype.attack_start = function () {
        if (this.opp.superSkill || this.opp.isBurstSkill) {
            if (this.isNeedDefend() && Math.random() * 500 < this.hold_rate) {
                this.defend_start();
                return false;
            }
        }
        var action = undefined;
        var _loc3_ = Math.random();
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
            action = this.skill_select(); //返回undefined
            if (Math.random() * 500 > this.skill_rate) {
                if (this.getDis() < 180) {
                    action = this.ordinary[Math.floor(Math.random() * this.ordinary.length)];
                }
                else if (this.getDis() > 500) {
                    action = this.No_attack_f[Math.floor(Math.random() * this.No_attack_f.length)];
                }
                else {
                    action = this.No_attack_b[Math.floor(Math.random() * this.No_attack_b.length)];
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
    };
    /**开始防御
     * 判断出是蹲防还是站防
     */
    Type2_Moriya_AI.prototype.defend_start = function () {
        var action = undefined;
        this.getDis();
        var defend_ratio = Math.floor(Math.random() * 500);
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
    };
    /**等待_level0添加必防列表 */
    Type2_Moriya_AI.prototype.checkMustDefendSkill = function (oppSkill) {
        // let _loc2_ = _level0.mustDefendSkill[this.opp.roleName];
        // for (let _loc3_ in _loc2_) {
        //     if (oppSkill == _loc2_[_loc3_]) {
        //         return true;
        //     }
        // }
        return false;
    };
    Type2_Moriya_AI.prototype.actionDefend = function (action) {
        if (this.status_2 != "land") {
            return undefined;
        }
        if (this.status_3 != "normal") {
            return undefined;
        }
        if (this.status_4 != "normal") {
            return undefined;
        }
        var attack_ratio = Math.floor(Math.random() * 500);
        var to_action = undefined;
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
    };
    Type2_Moriya_AI.prototype.combo_wait = function (status_1) {
        var start_frame = this.comboClass.combo2[status_1];
        if (start_frame == undefined || isNaN(start_frame)) {
            return undefined;
        }
        this.combo_wait_startframe = start_frame;
        // this.DEBUG_LOG("combo_wait init bodyMC render_combo_wait")
        this.render_bodyMC_action = this.render_combo_wait;
        this.render_bodyMC_action_params = [];
    };
    Type2_Moriya_AI.prototype.render_combo_wait = function () {
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
    };
    Type2_Moriya_AI.prototype.combo_check = function () {
        if (this.combo_auto[this.skill_now] != undefined) {
            this.combo_select("combo_auto");
            this.combo_start();
            return true;
        }
        var _loc2_ = Math.floor(Math.random() * 500);
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
    };
    /**判断是否可以连招
     * 连招要求:
     * 对方已受伤
     * 进攻率低于连招率
     */
    Type2_Moriya_AI.prototype.combo_check_land = function () {
        var attack_ratio = Math.floor(Math.random() * 500);
        if (this.opp.status_3 != "hurt") {
            return false;
        }
        if (this.status_2 != "land") {
            return false; //
        }
        if (attack_ratio >= this.combo_rate) {
            return false;
        }
        this.combo_select("combo_land"); //地面连招选择
        if (this.skill_next == undefined) {
            return false;
        }
        if (this.superCheck(this.skill_next) == false) {
            return false;
        }
        if (this.skill_next != undefined) {
            this.combo_start(); //开始连招
            return true;
        }
        return false;
    };
    /**连招选择,决出skill_next和delay
     * 参数说明:
     * comboType为combo_land,combo_auto,combo_1,combo_burst
     * this.skill_now为连招初始攻击
     * this.skill_next为下一攻击行为
     * delay为等待多少帧后执行this.skill_next
     */
    Type2_Moriya_AI.prototype.combo_select = function (comboType) {
        var combo_action_Array = undefined;
        //攻击爆发模式下选用combo_burst连招表
        if (this.inBurst && this.burst_mode == "attack") {
            combo_action_Array = this.combo_burst[this.skill_now]; //以当前skill为起始技寻找连招链
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
        var index = Math.floor(Math.random() * combo_action_Array.length);
        if (index == combo_action_Array.length) {
            index = combo_action_Array.length - 1;
        }
        this.skill_next = combo_action_Array[index];
        if (this.inBurst && this.burst_mode == "attack" && this.delay_frames[this.skill_now]) {
            this.delay = this.delay_frames[this.skill_now][index];
        }
        else if (this.delay_frames[this.skill_now]) {
            this.delay = this.delay_frames[this.skill_now][index];
        }
        else {
            this.delay = 0;
        }
    };
    Type2_Moriya_AI.prototype.combo_start = function () {
        if (this.skill_next == undefined) {
            return;
        }
        if (this.delay == 0) {
            this.toSkill(this.skill_next, true);
        }
        else {
            this.combo_delay(); //技能之间存在间隙,进行读帧
        }
    };
    /**技能之间存在间隙,进行读帧
     * 添加判断以防止人物空中停留
     * 很重要
    */
    Type2_Moriya_AI.prototype.combo_delay = function () {
        // this.DEBUG_LOG("AIstart_combo_delay init render_combo_delay");
        if (this.render_mc_action != undefined || this.render_position_y != undefined) {
            return;
        }
        this.render_mc_action = this.render_combo_delay;
        this.render_mc_action_params = [];
    };
    Type2_Moriya_AI.prototype.render_combo_delay = function () {
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
    };
    Type2_Moriya_AI.prototype.start_control = function () {
        this.control = true;
        this.initStage();
        this.toSkill = this.toSkill_temp;
        this.toStatus = this.toStatus_temp;
        this.toStatus_switch("stand");
    };
    Type2_Moriya_AI.prototype.toStatus_switch = function (action) {
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
    };
    Type2_Moriya_AI.prototype.toSkill = function (action, cancle) {
        if (cancle === void 0) { cancle = false; }
        this.DEBUG_LOG("toSkill:" + action);
        if (NoviceGuidance.I().AI_stop) {
            return undefined;
        }
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
        var _loc3_ = this.superCheck(action);
        if (_loc3_ == false) {
            this.attack_start();
            return false;
        }
        if (_loc3_ == true) {
            if (this.burst_mode == "power") {
                var _loc4_ = this.skillSuperCheck(action);
                if (_loc4_ != "") {
                    this.powerDecType = "super";
                    action = _loc4_;
                }
            }
        }
        if (this.burstCheck(action) == false) {
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
    };
    /**行为1为空
     * 行为2为移动
     */
    Type2_Moriya_AI.prototype.move_walkRun = function () {
        this.render_mc_action = undefined;
        // egret.clearInterval(this.delayTimer);
        this.walkrun_S = 0;
        this.combo_select("combo_1");
        this.DEBUG_LOG("location:  init AImove_walkRun");
        this.render_position_x = this.render_move_walkRun;
        this.render_position_x_params = [];
    };
    Type2_Moriya_AI.prototype.render_move_walkRun = function () {
        if (_level0.inPause) {
            return undefined;
        }
        if (this.inFreeze) {
            return undefined;
        }
        if (this.status_1 == "stand" || this.status_3 == "attack") {
            this.render_position_x = undefined;
            return undefined;
        }
        this.do_move(this.Vx);
        if (this.getDis() < this.delay) {
            this.render_position_x = undefined;
            this.DEBUG_LOG("REMOVE render_move_walkRun1");
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
            var currentX = this.localToGlobal().x;
            if (this.walkrun_S > 20 || currentX < 80 || currentX > GameConfig.FightWidth - 80) {
                this.render_position_x = undefined;
                this.DEBUG_LOG("REMOVE render_move_walkRun2");
                var _loc2_ = Math.random();
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
                this.DEBUG_LOG("REMOVE render_move_walkRun3");
            }
        }
        else if (this.opp.hasObj()) {
            if (this.checkDefend()) {
                this.render_position_x = undefined;
                this.DEBUG_LOG("REMOVE render_move_walkRun4");
            }
        }
        else if (this.getDis() < 200) {
            this.render_position_x = undefined;
            this.DEBUG_LOG("REMOVE render_move_walkRun5");
            this.attack_start();
        }
    };
    Type2_Moriya_AI.prototype.move_squat = function () {
    };
    Type2_Moriya_AI.prototype.move_hold = function () {
        this.DEBUG_LOG("move_hold");
        // egret.clearInterval(this.delayTimer);
        this.render_bodyMC_action = this.render_move_hold;
        this.render_bodyMC_action_params = [];
    };
    Type2_Moriya_AI.prototype.render_move_hold = function () {
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
            var opp_objmc = this.opp.getObj();
            if (opp_objmc._mcName == "eff_rush") {
                opp_objmc = undefined;
            }
            var opp_distance = this.opp.getObjDis();
            if (opp_objmc != undefined && opp_objmc.width <= 250) {
                if (opp_distance != undefined && opp_distance < 130 && opp_distance > 100) {
                    var _loc1_ = Math.random();
                    if (_loc1_ < 0.5 * this.hold_rate * 0.01) {
                        this.render_bodyMC_action = undefined; //add
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
                this.render_bodyMC_action = undefined; //add
                this.hold_u();
                return undefined;
            }
            var _loc1_ = Math.floor(Math.random() * 500);
            if (_loc1_ < this.attack_s) {
                // this.DEBUG_LOG("remove_move_hold3");
                this.render_bodyMC_action = undefined; //add
                this.hold_u();
                return undefined;
            }
        }
        else if ((this.opp.status_1.indexOf("squat") > -1 || this.opp.hitPos == "down") && this.status_1 != "hold_d") {
            this.render_bodyMC_action = undefined; //add
            // this.DEBUG_LOG("remove_move_hold4");
            this.hold_d();
            return undefined;
        }
        if (this.opp.status_3 != "attack" && !this.opp.hasObj() && this.holdFreeze == false) {
            // this.DEBUG_LOG("remove_move_hold5");
            this.render_bodyMC_action = undefined; //add
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
            if (!this.checkAttack()) {
                this.render_bodyMC_action = undefined; //add
                if (this.status_1 == "hold_d") {
                    this.squat();
                }
                else {
                    this.stand();
                }
            }
        }
    };
    /**站立时调用cpu_control()进行行为抉择
     * 控制人物 */
    Type2_Moriya_AI.prototype.stand = function () {
        if (this.y != this.land_Y) {
            this.y = this.land_Y;
        }
        if (this.strength) {
            this.render_AI_control = this.cpu_control;
        }
        else {
            this.render_AI_control = this.cpu_control_easily;
        }
        this.statusClear();
        this.status_1 = "stand";
        this.mc.gotoAndStop("stand");
        // this.cpu_control();
        return true;
    };
    /**蹲时调用cpu_control()进行行为抉择
     * 控制人物 */
    Type2_Moriya_AI.prototype.squat = function () {
        if (this.status_2 != "land" || this.status_3 != "normal") {
            return false;
        }
        this.statusClear();
        this.mc.gotoAndStop("squat");
        this.status_1 = "squat";
        if (this.strength) {
            this.render_AI_control = this.cpu_control;
        }
        else {
            this.render_AI_control = this.cpu_control_easily;
        }
        // this.cpu_control();
        return true;
    };
    Type2_Moriya_AI.prototype.attack = function () {
        this.attack_start();
    };
    Type2_Moriya_AI.prototype.wait = function () {
        this.statusClear();
        this.status_1 = "stand";
        this.mc.gotoAndStop("stand");
        this.checkWait();
    };
    /**等待对手站起
     * 站起后立即进攻
     */
    Type2_Moriya_AI.prototype.waitStand = function () {
        this.statusClear();
        this.status_1 = "stand";
        this.mc.gotoAndStop("stand");
        this.render_bodyMC_action = this.render_waitStand;
        this.render_bodyMC_action_params = [];
    };
    Type2_Moriya_AI.prototype.render_waitStand = function () {
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
    };
    Type2_Moriya_AI.prototype.walk_f = function () {
        if (this.status_2 != "land" || this.status_3 != "normal") {
            return false;
        }
        this.Vx = this.dir * this.Vwalk;
        this.mc.gotoAndStop("walk_f");
        this.status_1 = "walk_f";
        this.move_walkRun();
        // egret.clearInterval(this.delayTimer);
        // this.delayTimer = egret.setInterval(this.move_walkRun, this, 5);
    };
    Type2_Moriya_AI.prototype.walk_b = function () {
        if (this.status_2 != "land" || this.status_3 != "normal") {
            return false;
        }
        if (this.opp.status_3 == "attack") {
            this.hold_u();
            return false;
        }
        this.Vx = this.dir * (-this.Vwalk);
        this.mc.gotoAndStop("walk_b");
        this.status_1 = "walk_b";
        this.move_walkRun();
        // egret.clearInterval(this.delayTimer);
        // this.delayTimer = egret.setInterval(this.move_walkRun, this, 5);
        return true;
    };
    Type2_Moriya_AI.prototype.dash_f = function () {
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
    };
    Type2_Moriya_AI.prototype.dash_b = function () {
        if (this.status_2 != "land" || this.status_3 != "normal") {
            return false;
        }
        this.mc.gotoAndStop("dash_b");
        this.status_1 = "dash_b";
        this.Vx = -26;
        this.Vy = 17;
        this.status_2 = "air";
        return true;
    };
    Type2_Moriya_AI.prototype.hold = function () {
        return this.hold_u();
    };
    Type2_Moriya_AI.prototype.hold_u = function () {
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
    };
    Type2_Moriya_AI.prototype.hold_d = function () {
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
    };
    Type2_Moriya_AI.prototype.jump_f = function () {
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
    };
    Type2_Moriya_AI.prototype.jump_b = function () {
        if (this.status_2 != "land") {
            return false;
        }
        this.render_bodyMC_action = this.render_jump;
        this.render_bodyMC_action_params = [];
        this.status_2 = "air";
        this.mc.gotoAndStop("jump_b");
        this.status_1 = "jump_b";
        this.Vx = -this.Vjump_x;
        this.Vy = this.Vjump_y;
        return true;
    };
    Type2_Moriya_AI.prototype.jump = function () {
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
    };
    Type2_Moriya_AI.prototype.punch = function () {
        if (this.status_2 != "land" || this.status_3 != "normal") {
            return false;
        }
        this.mc.gotoAndStop("punch");
        this.status_1 = "punch";
        this.status_3 = "attack";
        return true;
    };
    Type2_Moriya_AI.prototype.pitch = function () {
        if (!_super.prototype.pitch.call(this)) {
            return this.punch();
        }
        return true;
    };
    Type2_Moriya_AI.prototype.kick2 = function () {
        this.mc.gotoAndStop("kick2");
        this.status_1 = "kick2";
        this.status_3 = "attack";
        return true;
    };
    Type2_Moriya_AI.prototype.hold_end = function () {
        this.holdFreeze = false;
    };
    Type2_Moriya_AI.prototype.selectOne = function (array) {
        var index = Math.floor(Math.random() * array.length);
        if (index == array.length) {
            index = array.length - 1;
        }
        return array[index];
    };
    Type2_Moriya_AI.prototype.render_jump = function () {
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
    };
    /**若满足条件则在空中进行攻击
     * 否则等待落地
     */
    Type2_Moriya_AI.prototype.air_check = function () {
        if (this.getDis() > 350) {
            return undefined;
        }
        var action = undefined;
        var _loc3_ = undefined;
        if (this.opp.status_2 == "air" || this.opp.status_3 == "hurt") {
            if (this.getDis() < 150) {
                _loc3_ = Math.floor(Math.random() * 500);
                if (_loc3_ > 250) {
                    action = "punch";
                }
                else {
                    action = "kick";
                }
            }
            else {
                action = "kick";
            }
            if (this.bodyMC.getCurrFrame() > 7) {
                this.render_bodyMC_action = undefined;
                this.jumpSkill(action);
            }
        }
        else if (this.y > this.land_Y - 150 && this.Vy < 0 && this.status_2 == "land") {
            _loc3_ = Math.floor(Math.random() * 500);
            if (_loc3_ < 30) {
                action = "punch";
            }
            else {
                action = "kick";
            }
            this.render_bodyMC_action = undefined;
            this.jumpSkill(action);
        }
        this.render_bodyMC_action = undefined;
    };
    Type2_Moriya_AI.prototype.CPU_check = function (act) {
        var _loc2 = Math.floor(Math.random() * 500);
        if (act == "sk4" && _loc2 < this.attack_s) {
            if (this.inBurst && this.burst_mode == "attack") {
                this.skill_next = this.selectOne(["sk_yueying_a1", "sk_yueying_c1", "sk_feng", "sk_xue"]);
            } // end if
            this.combo_start();
        }
    };
    return Type2_Moriya_AI;
}(Type2_Moriya_role));
__reflect(Type2_Moriya_AI.prototype, "Type2_Moriya_AI");
//# sourceMappingURL=Type2_Moriya_AI.js.map