/**对于P1和P2有着不同的按键位置
 * 用keyButtons_array传入按键位置
 * 调用setkey()实现对应键位的监听
 * 对于移动键位:上下左右分别进行移动检测actionCheck和技能检测keyChain_dir
 * 对于技能键位进行技能检测keyChain_act
 */

class KeyControl_btn {
    public key: Key_btn;
    public multiKey: string = "";
    public isKeyDown: boolean = false;
    public lastKey: string = "";
    public downKey: string;
    public old_time = 0;
    public time_interval_max = 400;
    public time_interval_min = 30;
    public time_interval_max_online = 12;//帧数
    public time_interval_min_online = 1;
    public dir = 1;

    public role: Role;
    public keyButtons_array: any;
    public skill_array: Array<Array<any>>;  //与技能组对应的按键组合数组
    public skill_mapping: Array<any>;    //技能组
    public input_array: Array<string>;//用户输入按键链
    //10个按键位置
    public _upButton: string;
    public _downButton: string;
    public _frontButton: string;
    public _backButton: string;
    public _punchButton: string;
    public _kickButton: string;
    public _punch_lButton: string;
    public _kick_lButton: string;
    public _burstButton: string;
    public _rollButton: string;
    // public time1: number;
    // public time2: number;


    constructor() {
        return;
    } // End of the function

    public init(keyButtons: any, skill_array: Array<Array<any>>, skill_mapping: Array<any>, role: Role) {
        this.role = role;
        this.keyButtons_array = keyButtons;
        this.skill_array = skill_array;
        this.skill_mapping = skill_mapping;
        this.setKey();
        this.input_array = new Array<string>();
        this.key = new Key_btn(role);
        this.key.initlize(this);
    } // End of the function



    /**对于PI和P2有着不同的键位设置*/
    public setKey() {
        this._upButton = this.keyButtons_array.up;
        this._downButton = this.keyButtons_array.down;
        this._frontButton = this.keyButtons_array.front;
        this._backButton = this.keyButtons_array.back;
        this._punchButton = this.keyButtons_array.punch;
        this._kickButton = this.keyButtons_array.kick;
        this._punch_lButton = this.keyButtons_array.punch_l;
        this._kick_lButton = this.keyButtons_array.kick_l;
        this._burstButton = this.keyButtons_array.burst;
        this._rollButton = this.keyButtons_array.roll;
    } // End of the function


    public onKeyDown() {
        if (this.isKeyDown && this.downKey == this.lastKey) {
            return;
        } // end if
        if(this.role.isKO||this.role.opp.isKO){
            return;
        }
        this.isKeyDown = true;
        this.downKey = this.lastKey;
        if (this.downKey == this._punchButton || this.downKey == this._kickButton || this.downKey == this._burstButton ||
            this.downKey == this._rollButton || this.downKey == this._punch_lButton || this.downKey == this._kick_lButton) {
            if(NoviceGuidance.I().novice_btn!=""&&this.downKey!=NoviceGuidance.I().novice_btn){
                return;
            }
            this.keyChain_act(this.downKey);
        }
        else if (this.downKey == this._upButton || this.downKey == this._downButton ||
            this.downKey == this._frontButton || this.downKey == this._backButton) {
            this.actionCheck(this.downKey);
            this.keyChain_dir(this.downKey);
        } // end else if
    } // End of the function



    /**玩家移动指令检测
     * 读出对应移动动作后调用toaction()
     */
    public actionCheck(myKey: string) {
        //判断人物是是否在攻击
        if (this.role.status_3 == "attack") {
            return;
        }
        let action: string = null;
        if(NoviceGuidance.I().next_btn!=""&&myKey!=NoviceGuidance.I().next_btn){
            return;
        }
        if (myKey == this._frontButton) {
            if (this.dir == 1) {
                action = "walk_f";
            }
            else {
                action = "walk_b";
            } // end else if
        }
        else if (myKey == this._backButton) {
            if (this.dir == 1) {
                action = "walk_b";
            }
            else {
                action = "walk_f";
            } // end else if
        }
        else if (myKey == this._upButton) {
            action = "jump";
        }
        else if (myKey == this._downButton) {
            action = "squat";
        } // end else if
        this.toAction(action);
    } // End of the function


    /**移动键位组合技能检测 */
    public keyChain_dir(key: string) {
        //判断人物是是否在攻击
        if (this.role.status_3 == "attack") {
            return;
        }
        let key_temp = key;
        if (this.dir == -1) {
            if (key_temp == this._frontButton) {
                key_temp = this._backButton;
            }
            else if (key_temp == this._backButton) {
                key_temp = this._frontButton;
            } // end if
        } // end else if
        if (this.old_time == 0) {//刚开始游戏初始化time_check
            this.input_array.push(key_temp);
            this.old_time = this.getTimer();
        }
        else {
            let old_time = this.old_time;
            let new_time = this.getTimer();
            this.old_time = new_time;
            if (new_time - old_time < this.getTime_interval_max() && new_time - old_time > this.getTime_interval_min()) {
                this.input_array.push(key_temp);
                if (this.input_array[this.input_array.length - 2] == key_temp) {
                    this.doubleKey(key_temp);
                } // end if
            }
            else {
                this.keyClear();
                this.old_time = 0;
                this.keyChain_dir(key);
            } // end else if
        } // end else if
        if (this.input_array.length > 6) {
            this.input_array.shift();
        } // end if
    } // End of the function


    private getTimer(): number {
        if (GameModel.currentMode == GameModel.VS_PERSON) {
            return FightMainRender.getInstance().getRunID();
        }
        return egret.getTimer();
    }

    private getTime_interval_max(): number {
        if (GameModel.currentMode == GameModel.VS_PERSON) {
            return this.time_interval_max_online;
        }
        return this.time_interval_max;
    }

    private getTime_interval_min(): number {
        if (GameModel.currentMode == GameModel.VS_PERSON) {
            return this.time_interval_min_online;
        }
        return this.time_interval_min;
    }


    /**双键技能
     * 左+左、右+右
     */
    public doubleKey(myKey: string) {
        if (myKey == this._frontButton) {
            this.role.to_double_front();
        }
        else if (myKey == this._backButton) {
            this.role.to_double_back();
        }
        else if (myKey == this._downButton) {
            this.role.to_double_down();
        } // end else if
    } // End of the function

    /**技能键位组合技能检测 
    * 将单个的技能按键组合为技能链,调用sendkey进行检测*/
    public keyChain_act(myKey: string) {
        this.multiKey = this.multiKey + myKey;
        this.sendKey(this.multiKey);
    } // End of the function

    /**技能链检测
     * 若超过连招时间阈值则调用普通技能skill_normal
     * 否则调用skillCheck()进行连招检测
     * 之后清空技能链
     */
    public sendKey(multikey: string) {
        let new_time = this.getTimer();
        if (new_time - this.old_time < this.getTime_interval_max()) {
            this.skillCheck(multikey);
        }
        else {
            this.skill_normal(multikey);
        } // end else if
        this.multiKey = "";
    } // End of the function


    /**非组合技能 */
    public skill_normal(skillChain: string) {
        //判断人物是是否在攻击
        if (this.role.status_3 == "attack") {
            return;
        }
        switch (skillChain) {
            case this._punchButton:
                {
                    this.role.to_punch();
                    break;
                }
            case this._kickButton:
                {
                    this.role.to_kick();
                    break;
                }
            case this._punch_lButton:
                {
                    this.role.to_punch_l();
                    break;
                }
            case this._kick_lButton:
                {
                    this.role.to_kick_l();
                    break;
                }
            case this._punch_lButton + this._kick_lButton:
                {
                    this.role.to_PK_l();
                    break;
                }
            case this._punchButton + this._kickButton:
                {
                    this.role.to_PK();
                    break;
                }
            case this._burstButton:
                {
                    this.role.to_key_burst();
                    break;
                }
            case this._rollButton:
                {
                    this.role.to_key_roll();
                    break;
                }
            case this._punchButton + this._kickButton + this._rollButton:
                {
                    // this.role.to_PKS();
                    break;
                }
        } // End of switch
        this.keyClear();
    } // End of the function


    public skillCheck(myKey: string) {
        if (this.input_array.length == 0) {
            this.skill_normal(myKey);
            return;
        } // end if
        let _loc9: string = this.input_array.toString();
        let _loc7: string = _loc9 + "," + myKey;
        let _loc6: string;
        let _loc4: string;
        if (myKey == this._punch_lButton) {
            _loc6 = _loc9 + "," + this._punchButton;
        }
        else if (myKey == this._kick_lButton) {
            _loc6 = _loc9 + "," + this._kickButton;
        } // end else if
        for (let _loc2 = 0; _loc2 < this.skill_mapping.length; ++_loc2) {
            let skill = this.skill_mapping[_loc2];
            if (skill == undefined) {
                continue;
            } // end if
            _loc4 = this.skill_array[_loc2].toString();
            if (_loc7.indexOf(_loc4) != -1) {
                this.toSkill(skill[0]);
                this.keyClear();
                return;
            } // end if
            if (myKey == this._punch_lButton || myKey == this._kick_lButton) {
                if (_loc6.indexOf(_loc4) != -1) {
                    this.toSkill(skill);
                    this.keyClear();
                    return;
                } // end if
            } // end if
        } // end of for
        this.skill_normal(myKey);
    } // End of the function

    public toSkill(skill: string) {
        this.role.toSkill(skill);
    } // End of the function

    /**做出对应动作 */
    public toAction(action: string) {
        this.role.toAction(action);
    } // End of the function

    public keyClear() {
        this.input_array = [];
        this.old_time = 0;
    } // End of the function

} // End of Class
