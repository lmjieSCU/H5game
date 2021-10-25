class Role extends egret.DisplayObjectContainer {
    //===============================================主骨骼动画==================================================
    public char_mc;
    public mc: zmovie.ZMovieClip;//二层骨骼/name:role_K,负责切换到各个动作(punch,kick...)
    public bodyMC: zmovie.ZMovieClip;//三层骨骼/负责各个具体动作的帧事件处理
    //===============================================role属性===================================================
    public roleName: string;
    public _roleName: string;
    public frameCount_temp: number = 0;
    public record_action_totalFrame = ["stand", "walk_f", "walk_b", "dash_f", "dash_b", "land", "land2", "squat"];
    public record_filter_array = ["stand", "walk_f", "walk_b", "land", "land2", "squat"];
    public frameOffset = 1;
    public delaySkill = "";
    public frame_t = 33;
    public frame_t2 = 80;
    public winTimes = 0;
    public side_offset = 30;
    public depth_shadow = 55;
    public airHits_max = 4;
    public scale: number;   //放缩基数
    public roleMode = 1;
    public bodyName: string;    //通过getchild获得body区域
    public land_Y: number = 440;
    public input_pre: any;
    public superPoint: number;
    public powerPoint_max: number;
    //=================================opp对手================================
    public opp_width2: number;
    public opp: Role;
    public keyCtrl: any;
    //==============================================================
    //========================人物属性变化速度=======================
    //==============================================================
    public Vjump_x: number;
    public Vjump_y: number;
    public Vjump_far: number;
    public Vx: number;
    public Vy: number;
    public Vg: number;
    public VbodyTouch: number;
    public HitTest_Sx: number;
    public HitTest_Sv: number;
    public holdFreezenum: number;   //防御僵直数
    public edge: number;
    public Va: number;   //Vx变化值
    public Vwalk: number;
    public Vdash: number;
    //===============================================================
    //============================技能参数============================
    //===============================================================
    public toSkill_temp: any;
    public toAction_temp: any;
    public toStatus_temp: any;
    public skillObj: any;
    public powerDecType: string;
    public powerDecType2: string;
    public hitValue: HitValue = new HitValue();
    public hurtValue: HitValue = new HitValue();
    public hitSkillName: string;
    public skillCount: boolean;
    public countTimes: number;
    public countPos: string;
    public superList: Object;/**爆发连招 */
    public burstList: Object;
    public superMaxList: Object;
    public skillSuperMapping: Object;
    public record_skill_totalFrame: Array<any>;
    public skill_last0: string;
    public skill_last: string;
    //==============================================================
    //=============================按键兼容==========================
    //==============================================================
    public mode_key: string; //按键模式分为简单和标准
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
    //==============================================================
    //============================人物状态==========================
    //==============================================================
    public onHit: boolean;
    public isKO: boolean = false;
    public KO_checked: boolean = false;  //过去一次检测KO值
    public played: boolean = false;//继承使用
    public inBurst: boolean;
    public burst_mode: string;
    public status_end: string;
    public inCount: boolean;
    public inRecord: boolean = false;
    public inReplay = false;
    public holdFreeze = false;
    public control = false;
    public checkTouch_stop = false;
    public redBlood: boolean;
    public superSkill: boolean;
    public isBurstSkill: boolean;
    public inFreeze: boolean;
    public dir: number = 1;
    public hits: number = 0;
    public burst_defend: boolean;
    public status_1 = "stand";
    public status_2 = "land";
    public status_3 = "normal";//可取值为attack,roll,down(未起身),hurt,normal,""
    public status_4 = "normal";//可取值为hold,normal
    public status_5 = "normal";
    public hitPos: string;
    public suspend: boolean = false;//暂停
    public winPoseArray: Array<any>;
    public hitsArray: Array<any>;
    //==================================================
    //=================打击combo=========================
    //==================================================
    public comboClass: Combo_listener;
    public hitsObj: any; //打击combo模块
    public flyingObj;
    public d_alpha: number;
    public end_alpha: number;
    public record_skill: Array<any>;
    public record_frame: Array<any>;
    public count_type: Array<any>;
    public skillPoint: number;
    //==============================================================
    //============================声音==============================
    //==============================================================
    // public sound_mc;
    // public run_snd;
    // public hurt1_snd;
    // public hurt2_snd;
    // public lose_snd;
    // public hurtSoundArray;
    //==============================================================
    //==========================特效================================
    //==============================================================
    // public shadow_mc;
    public colorObj: any;
    public color_timer2: number;
    public color_timer: number;
    //==============================================================
    //=========================舞台属性=============================
    //==============================================================
    public startX: number;
    public startY: number;
    public stage_width: number;
    public edge_max: number;
    public onEdge: boolean;
    public edge_min: number;
    //==============================================================
    //=======================血量和能量==============================
    //==============================================================
    public lifeObj: any; //生命控制模块
    public powerObj: any; //能量控制模块
    public life_max: number;//满血值
    public life: number;    //当前生命值
    public power_skillSuper = 80;
    public power_skillBurst = 110;
    public power_cancle = 30;
    //=========================特效=================================
    public skill_loader = [];
    public hurtBack_freezenum: number;
    //=======================帧事件渲染=============================
    public render_mc_action: Function;//源码中绑定this.onEnterFrame
    public render_mc_action_params: Array<any> = [];
    public render_bodyMC_action: Function;//源码中绑定this.mc.onEnterFrame
    public render_bodyMC_action_params: Array<any> = [];//源码中绑定this.mc.onEnterFrame
    public render_hitcheck_action: Function;
    public render_hitcheck_instance: any;
    public hitcheckobj_action: Function;
    public render_hitcheckobj_instance: any;
    public hitcheckflying_action: Function;
    public hitcheckflying_instance: any;
    public render_hitcheckflying_action_params: Array<any> = [];
    public old_mcplay_frame: number = -1;//每个英雄不同
    public old_bodyMC_frame: number = -1;
    public render_AI_control: Function;//绑定this.cpu_control
    public render_position_x: Function;//绑定有关x坐标移动的函数
    public render_position_x_params: Array<any> = [];
    public render_position_y: Function;//绑定有关x坐标移动的函数
    public render_position_y_params: Array<any> = [];

    //======================================测试使用变量========================
    public action_reptimes: number = 0;
    public action_old: string = "";
    //======================================普通连招变量========================
    public CommonSeries: Array<any> = [];
    public CommonSeriesTime: number = 0;
    public CommonSeriesNum: number = 0;

    public mask_colorRed: any;


    constructor() {
        super();
        this.lifeObj = { target: this };
        this.powerObj = { target: this };
        this.hitsObj = { target: this };
        this.hitsArray = new Array<any>();
        this.winPoseArray = ["end"];
        this.skillObj = new Object();
        // Vg = _level0.g;
        this.Vg = 5;
        this.Va = 3;
        this.colorObj = new Object();
        this.colorObj.normal = { ra: "100", rb: "0", ga: "100", gb: "0", ba: "100", bb: "0", aa: "100", ab: "0" };
        this.colorObj.fire = { ra: "100", rb: "255", ga: "100", gb: "110", ba: "100", bb: "0", aa: "100", ab: "0" };
        this.colorObj.white = { ra: "100", rb: "255", ga: "100", gb: "255", ba: "100", bb: "255", aa: "100", ab: "255" };
        this.colorObj.fire_blue = { ra: "100", rb: "0", ga: "100", gb: "0", ba: "100", bb: "255", aa: "100", ab: "0" };
        this.colorObj.light1 = { ra: "-65", rb: "200", ga: "-65", gb: "200", ba: "100", bb: "255", aa: "100", ab: "0" };
        this.colorObj.light2 = { ra: "-65", rb: "200", ga: "-65", gb: "200", ba: "-100", bb: "255", aa: "100", ab: "0" };
        this.input_pre = new Object();
        this.input_pre.roll_f = 10;
        this.input_pre.roll_b = 10;
        this.input_pre.land = 0;
        this.input_pre.land2 = 0;
        this.input_pre.land3 = 0;
        this.input_pre.getup1 = 20;
        this.input_pre.getup2 = 20;
        //this.mask_red();
    } // End of the function

    /**实现键位匹配,由继承类实现 */
    public setKey() {
    }


    public DEBUG_LOG(message: string) {
        // if (_level0.deepCompare(this, _level0.P1_role)) {
        //     console.log("P1:", message);
        // }
        // else {
        //     console.log("P2:", message);
        // }
    }




    /*************************************************************************************************/
    /*************************************************************************************************/
    /**所有函数如to_status,stand等均由帧事件调动 */
    /*************************************************************************************************/
    /*************************************************************************************************/

    /*************************************************************************************************/
    /*************************************************************************************************/
    /**重点
     * 关于y坐标移动的函数单独拿出
     * 增加delaycall_Funs
     */
    /*************************************************************************************************/
    /*************************************************************************************************/


    public FrameEvent_change_location(): boolean {
        return this.mc.getCurrFrame() != this.old_mcplay_frame || this.bodyMC.getCurrFrame() != this.old_bodyMC_frame;
    }

    public FrameEvent_refresh_location(): void {
        this.old_mcplay_frame = this.mc.getCurrFrame();
        this.old_bodyMC_frame = this.bodyMC.getCurrFrame();
        return;
    }

    public start() {
        FightMainRender.getInstance().Add(this, this.renderAnimate);
        return;
    } // End of the function



    /**帧驱动*/
    public renderAnimate() {
        //add
        if (_level0.inPause) {
            return;
        }
        if (_level0.inFreeze) {
            return;
        }
        if (this.inFreeze) {
            return;
        }
        this.checkSide();//实现自动转向
        this.checkTouch(0);//实现人物体积碰撞
        this.checkFrameEvent(); //由帧事件驱动人物进入新帧
    }


    /**进入新一帧时调用*/
    public checkFrameEvent() {
        // if (this.mc.getCurrPlayLabel() == "sk_bodong_air" && this.bodyMC.getCurrFrame() <= 2) {
        //     console.log("BEGIN:", this.bodyMC.getCurrFrame())
        // }
        //执行onenterFrame函数调用与碰撞检测
        this.render_onEnterFrame_Calling();
        this.render_Position();
        this.render_Hitchecks();
        this.render_Cpucontrol();
        //记录变化前位置,添加并执行二层帧事件
        this.FrameEvent_refresh_location();
        EventUtil.checkFrameEvent(this.bodyMC, this._roleName, this);
        this.bodyMC.checkFrameEvent();
        //判断是否进入了新一帧
        if (this.FrameEvent_change_location()) {
            this.renderSkill_loader();//此情况不渲染人物进入下一帧
            return;
        }
        //记录变化前位置并执行三层帧事件
        this.FrameEvent_refresh_location();
        EventUtil.checkSingleFrameEvent(this.bodyMC, this._roleName, this);
        //判断是否进入了新一帧
        if (this.FrameEvent_change_location()) {
            this.renderSkill_loader();
            return;
        }
        //实现人物、人物子技能进入下一帧
        this.renderMcAnimate();
        this.renderSkill_loader();
        // this.debug();

    }

    // public debug() {
    //     if (this.status_2 == "air" && this.y != this.land_Y && this.render_position_y == undefined) {
    //         console.log("Error2");//悬浮问题
    //     }
    //     if ((this.status_1 == "hold_u" || this.status_1 == "hold_d") && this.status_4 == "hold" && this.render_bodyMC_action != this.render_move_hold) {
    //         console.log("Error4")//蹲防卡死
    //     }
    //     let logdata = "P1.x:" + _level0.P1_role.x + ",P2.x:" + _level0.P2_role.x;
    //     if(SplashScene.instance.P1_TEST) {
    //         SplashScene.instance.P1_TEST.text = logdata;
    //     }
    //     //console.log("RUNID:",FightMainRender.getInstance().getRunID(),logdata)
    // }

    /**实现帧事件渲染 */
    public render_onEnterFrame_Calling() {
        if (this.render_mc_action != undefined) {
            this.render_mc_action.call(this, ...this.render_mc_action_params);
        }
        if (this.render_bodyMC_action != undefined) {
            this.render_bodyMC_action.call(this, ...this.render_bodyMC_action_params);
        }
    }


    /**实现坐标变化 */
    public render_Position() {
        if (this.render_position_x != undefined) {
            this.render_position_x.call(this, ...this.render_position_x_params);
        }
        if (this.render_position_y != undefined) {
            this.render_position_y.call(this, ...this.render_position_y_params);
        }
    }


    /**实现打击碰撞 */
    public render_Hitchecks() {
        if (this.render_hitcheck_action != undefined) {
            this.render_hitcheck_action.call(this.render_hitcheck_instance);
        }
        if (this.hitcheckobj_action != undefined) {
            this.hitcheckobj_action.call(this.render_hitcheckobj_instance);
        }
        if (this.hitcheckflying_action != undefined) {
            this.hitcheckflying_action.call(this.hitcheckflying_instance, ...this.render_hitcheckflying_action_params);
        }
    }


    /**实现AI控制 */
    public render_Cpucontrol() {
        if (this.render_AI_control != undefined) {
            this.render_AI_control.call(this);
        }
    }

    /**实现人物动画 */
    public renderMcAnimate() {
        if (this.inFreeze) {
            return;
        }
        if (this.bodyMC._nextFrameStop) {
            EventUtil.renderChildren(this.bodyMC);
        } else {
            this.bodyMC.nextFrame();
        }
    }

    /**实现子骨骼动画 */
    public renderSkill_loader() {
        if (this.inFreeze) {
            return;
        }
        for (let index in this.skill_loader) {
            if (isNaN(this.skill_loader[index].skill_mc.x) || isNaN(this.skill_loader[index].skill_mc.y)) {
                this.skill_loader.splice(Number(index), 1);
            } else if (this.skill_loader[index].skill_mc.stage) {
                this.skill_loader[index].renderMcAnimate();
            } else {
                this.skill_loader.splice(Number(index), 1);
            }
        }
    }




    /*************************************************************************************************/
    /*************************************************************************************************/
    /**action函数均为boolean类型,以供后续toStatus函数调用
     * toStatus函数只关心返回值是否为false
     * 原flash源码中未显式返回boolean值处均显式返回true
     * 对于该boolean的理解:执行了该action则为true,否则为false
     */
    /**大部分动作分为前后两种
     * 如walk分为walk_b和walk_f
     * 即向前行走和向后行走
     * 方向的变化由changeside()实现
     */
    /*************************************************************************************************/
    /*************************************************************************************************/

    //以下函数继承实现
    public to_kick() {
    } // End of the function

    public to_kick_l() {
    } // End of the function

    public to_punch() {
    } // End of the function

    public to_punch_l() {
    } // End of the function

    public to_double_front() {
        this.toAction("dash_f");
    } // End of the function

    public to_double_back() {
        this.toAction("dash_b");
    } // End of the function

    public to_double_down() {
    } // End of the function

    /*************************************************************************************************/
    /*************************************************************************************************/
    /******************基本动作************************* */
    /*************************************************************************************************/
    /*************************************************************************************************/

    /**站立 */
    public stand(): boolean {
        this.statusClear();
        this.mc.gotoAndStop("stand");
        return true;
    } // End of the function

    /**向前走*/
    public walk_f(): boolean {
        if (this.status_2 != "land" || this.status_3 != "normal" || this.status_1 == "squat" || this.holdFreeze) {
            return false;
        } // end if
        this.Vx = this.dir * this.Vwalk;
        this.mc.gotoAndStop("walk_f");
        this.status_1 = "walk_f";
        this.move_walkRun();
        return true;
    } // End of the function

    /**向后走 and 防御*/
    public walk_b(): boolean {
        if (this.holdFreeze) {
            return false;
        } // end if
        if (this.status_1 == "squat" && this.opp.status_3 == "attack") {
            this.hold_d();
            return true;
        } // end if
        if (this.status_2 != "land" || this.status_3 != "normal" || this.status_1 == "squat") {
            return false;
        } // end if
        if (this.opp.status_3 == "attack") {
            this.hold_u();
            return true;
        } // end if
        this.Vx = this.dir * -this.Vwalk;
        this.mc.gotoAndStop("walk_b");
        this.status_1 = "walk_b";
        this.move_walkRun();
        return true;
    } // End of the function

    /**向前猛冲:双方向键 */
    public dash_f(): boolean {
        if (this.status_2 != "land" || this.status_3 != "normal" || this.status_1 == "squat" || this.holdFreeze) {
            return false;
        } // end if
        this.Vx = this.dir * this.Vdash;
        this.mc.gotoAndStop("dash_f");
        this.status_1 = "dash_f";
        this.move_walkRun();
        return true;
    } // End of the function

    /**向后猛冲 */
    public dash_b(): boolean {
        if (this.status_2 != "land" || this.status_3 != "normal" || this.status_1 == "squat" || this.holdFreeze) {
            return false;
        } // end if
        this.mc.gotoAndStop("dash_b");
        this.status_1 = "dash_b";
        this.Vx = -26;
        this.Vy = 17;
        return true;
    } // End of the function

    /**向前闪避  */
    public roll_f(): boolean {
        if (this.status_1 == "getup1" || this.status_1 == "getup2") {
            if (this.bodyMC.getCurrFrame() < 4 && this.status_5 == "hitDown") {
                this.roll_down();
                console.log("roll:roll_down");

                return true;
            }
            else {
                console.log("roll:false");
                return false;
            } // end else if
        }
        else if (this.status_2 != "land") {
            console.log("roll:false1");
            return false;
        }
        else if (this.inBurst && this.burst_mode == "attack" && this.holdFreeze) {//技巧型爆气
            // this.changeColorSelf("white", 30);
            console.log("roll:技巧型爆气");
            this.powerObj.action = "burstdec";
            this.powerObj.decNum = _level0.power_holdRoll;
            this.powerControl(this.powerObj);
        }
        else if (this.status_3 != "normal" || this.holdFreeze) {
            // console.log("roll:false2");
            return false;
        } // end else if
        if (this.status_1 == "dash_f") {
            this.Vx = 23;
        }
        else {
            this.Vx = 19;
        } // end else if
        this.status_1 = "roll_f";
        this.status_3 = "roll";
        this.mc.gotoAndStop("roll_f");
        return true;
    } // End of the function

    /**向后滚动*/
    public roll_b(): boolean {
        if (this.status_1 == "getup1" || this.status_1 == "getup2") {
            if (this.bodyMC.getCurrFrame() < 4 && this.status_5 == "hitDown") {
                this.roll_down();
                return true;
            } else {
                return false;
            }
        }
        else if (this.status_2 != "land") {
            return false;
        }
        else if (this.inBurst && this.burst_mode == "attack" && this.holdFreeze) {//技巧型爆气
            // this.changeColorSelf("white", 30);
            this.powerObj.action = "burstdec";
            this.powerObj.decNum = _level0.power_holdRoll;
            this.powerControl(this.powerObj);
        }
        else if (this.status_3 != "normal" || this.holdFreeze) {
            return false;
        } // end else if
        this.Vx = -20;
        this.mc.gotoAndStop("roll_b");
        this.status_1 = "roll_b";
        this.status_3 = "roll";
        return true;
    } // End of the function

    /**滚动*/
    public roll_down() {
        this.DEBUG_LOG("location: roll down init undefined");
        // this.render_mc_action = undefined;
        this.render_position_x = undefined;//roll时被击中
        this.status_2 = "";
        this.y = this.land_Y;
        this.Vx = -20;
        this.mc.gotoAndStop("roll_b");
        this.status_1 = "roll_b";
        this.status_3 = "roll";
    } // End of the function

    /**站防 */
    public hold_u(): boolean {
        if (this.status_2 != "land" || this.status_3 != "normal") {
            return false;
        } // end if
        this.mc.gotoAndStop("hold_u");
        this.status_1 = "hold_u";
        this.status_4 = "hold";
        this.move_hold();
        return true;
    } // End of the function

    /**蹲防*/
    public hold_d(): boolean {
        if (this.status_2 != "land" || this.status_3 != "normal") {
            return false;
        } // end if
        this.mc.gotoAndStop("hold_d");
        this.status_1 = "hold_d";
        this.status_4 = "hold";
        this.move_hold();
        return true;
    } // End of the function

    /**蹲*/
    public squat(): boolean {
        if (this.status_2 != "land" || this.status_3 != "normal" || this.holdFreeze) {
            return false;
        } // end if
        if (this.check_hold_d()) {
            return true;
        } // end if
        this.status_end = "stand";
        this.move_squat();
        this.mc.gotoAndStop("squat");
        this.status_1 = "squat";
        return true;
    } // End of the function

    /**跳*/
    public jump(): boolean {
        if (this.status_1 == "dash_f") {
            if (this.status_2 != "land" || this.holdFreeze || this.status_3 != "normal") {
                return false;
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
        return true;
    } // End of the function

    /**竖直方向上跳跃 */
    public jump_u(): boolean {
        if (this.status_2 != "land" || this.holdFreeze || this.status_3 != "normal") {
            return false;
        } // end if
        this.status_2 = "air";
        if (this.inRecord) {
            this.skill_record("jump");
        } // end if
        this.Vx = 0;
        this.Vy = this.Vjump_y;
        this.mc.gotoAndStop("jump");
        this.status_1 = "jump";
        return true;
    } // End of the function

    /**向前跳跃 指令:up+front*/
    public jump_f(): boolean {
        if (this.status_2 != "land" || this.holdFreeze || this.status_3 != "normal") {
            return false;
        } // end if
        this.status_2 = "air";
        if (this.inRecord) {
            this.skill_record("jump_f");
        } // end if
        this.Vx = this.Vjump_x;
        this.Vy = this.Vjump_y;
        this.mc.gotoAndStop("jump_f");
        this.status_1 = "jump_f";
        return true;
    } // End of the function

    /**向后跳跃 指令:back+front*/
    public jump_b(): boolean {
        if (this.status_2 != "land" || this.holdFreeze || this.status_3 != "normal") {
            return false;
        } // end if
        this.status_2 = "air";
        if (this.inRecord) {
            this.skill_record("jump_b");
        } // end if
        this.Vx = -this.Vjump_x;
        this.Vy = this.Vjump_y;
        this.mc.gotoAndStop("jump_b");
        this.status_1 = "jump_b";
        return true;
    } // End of the function

    /**着地*/
    public land(): boolean {
        this.status_2 = "toLand";
        this.status_3 = "normal";
        this.status_1 = "land";
        this.mc.gotoAndStop("land");
        _level0.effect_mc.downEff("down1", this);
        return true;
    } // End of the function

    /**着地*/
    public land2(): boolean {
        this.status_2 = "toLand";
        this.status_3 = "normal";
        this.status_1 = "land2";
        this.mc.gotoAndStop("land2");
        _level0.effect_mc.downEff("down2", this);
        return true;
    } // End of the function

    /**着地*/
    public land3(): boolean {
        this.status_2 = "toLand";
        this.status_3 = "normal";
        this.status_1 = "land3";
        this.mc.gotoAndStop("land3");
        _level0.effect_mc.downEff("down3", this);
        return true;
    } // End of the function

    /**起身*/
    public getup1(): boolean {
        this.status_2 = "toLand";
        this.status_3 = "down";
        this.status_1 = "getup1";
        this.mc.gotoAndStop("getup1");
        return true;
    } // End of the function

    /**起身*/
    public getup2(): boolean {
        this.status_2 = "toLand";
        this.status_3 = "down";
        this.status_1 = "getup2";
        this.mc.gotoAndStop("getup2");
        return true;
    } // End of the function

    /**被击*/
    public hurt3(): boolean {
        this.status_1 = "hurt3";
        this.status_3 = "hurt";
        this.status_2 = "air";
        this.mc.gotoAndStop(this.status_1);
        return true;
    } // End of the function

    /**轻拳 指令:punch*/
    public punch(): boolean {
        if (this.status_2 == "air") {
            return false;
        } // end if
        if (this.CommonSeriesNum == this.CommonSeries.length) {
            this.CommonSeriesNum = 0;
        }
        let action = this.CommonSeries[this.CommonSeriesNum]
        this.status_1 = action;
        this.CommonSeriesNum++;
        this.CommonSeriesTime = 35;
        this.mc.gotoAndStop(this.status_1);
        //this.do_move(32*this.dir);
        this.status_3 = "attack";
        FightMainRender.getInstance().Add(this, this.combo_time);
        return true;
    } // End of the function
    public combo_time() {
        if (this.inFreeze) {
            return;
        }
        if (this.status_3 == "hurt" || this.CommonSeriesTime < 0) {
            this.CommonSeriesNum = 0;
            FightMainRender.getInstance().Remove(this, this.combo_time);
        } else {
            --this.CommonSeriesTime;
        }
    }

    /**轻拳 指令:punch and 靠近对手*/
    public punch2(): boolean {
        if (this.status_2 == "air") {
            return false;
        } // end if
        this.status_1 = "punch2";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
        return true;
    } // End of the function

    /**重拳 指令:U*/
    public punch_l(): boolean {
        if (this.status_2 != "land") {
            return false;
        } // end if
        this.status_1 = "punch_l";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
        return true;
    } // End of the function

    /**踢 指令:K */
    public kick(): boolean {
        if (this.status_2 != "land") {
            return false;
        } // end if
        this.status_1 = "kick";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
        return true;
    } // End of the function

    /**踢 指令:K and 靠近对手*/
    public kick2(): boolean {
        if (this.status_2 != "land") {
            return false;
        } // end if
        this.mc.gotoAndStop("kick2");
        this.status_1 = "kick2";
        this.status_3 = "attack";
        return true;
    } // End of the function

    /**重踢* 指令:I*/
    public kick_l(): boolean {
        if (this.status_2 != "land") {
            return false;
        } // end if
        this.mc.gotoAndStop("kick_l");
        this.status_1 = "kick_l";
        this.status_3 = "attack";
        return true;
    } // End of the function

    /**空中攻击*/
    public jumpSkill(act: string): boolean {
        if (this.status_3 != "normal") {
            return false;
        } // end if
        if (this.bodyMC.getCurrFrame() < 4) {
            return false;
        } // end if
        if (this.inRecord) {
            this.skill_record(act);
        } // end if
        this.bodyMC.gotoAndStop(act);
        this.status_3 = "attack";
        this.status_1 = "jumpSkill_" + act;
        if (this.opp["checkDefend"]) {
            this.opp["checkDefend"].call(this.opp);
        }
        return true;
    } // End of the function

    /**摔 破防技*/
    public pitch(): boolean {
        if (this.status_3 != "normal") {
            return false;
        } // end if
        if (this.catch_check()) {
            this.mc.gotoAndStop("pitch");
            this.status_1 = "pitch";
            this.status_3 = "attack";
            this.opp.status_3 = "hurt";
            return true;
        } // end if
        return false;
    } // End of the function

    /**爆发
     * 分为力量型爆发/技巧型爆发/防御型爆发
    */
    public burst(bursttype: string): boolean {
        if (this.inBurst) {
            return false;
        } // end if
        if (this.status_2 != "land" || this.status_3 != "normal" || this.holdFreeze) {
            return false;
        } // end if
        if (this.superPoint == this.powerPoint_max) {
        }
        else if (this.redBlood && this.superPoint > 0) {
        }
        else {
            return false;
        } // end else if
        this.status_3 = "attack";
        this.inBurst = true;
        if (bursttype == "attack") {
            this.burst_mode = "attack";
            this.status_1 = "burst";
            this.mc.gotoAndStop("burst");
        }
        else if (bursttype == "defend") {
            this.burst_defend = true;
            this.burst_mode = "defend";
            this.status_1 = "burst2";
            this.mc.gotoAndStop("burst2");
        }
        else if (bursttype == "power") {
            this.burst_mode = "power";
            this.status_1 = "burst";
            this.mc.gotoAndStop("burst");
        } // end else if
        return true;
    } // End of the function

    /**技巧型爆发*/
    public burst_a(): boolean {
        if (this.inBurst) {
            return false;
        } // end if
        if (this.status_2 != "land" || this.status_3 != "normal" || this.holdFreeze) {
            return false;
        } // end if
        if (this.superPoint == this.powerPoint_max) {
        }
        else if (this.redBlood && this.superPoint > 0) {
        }
        else {
            return false;
        } // end else if
        this.status_3 = "attack";
        this.inBurst = true;
        this.burst_mode = "attack";
        this.status_1 = "burst";
        this.mc.gotoAndStop("burst");
        return true;
    } // End of the function

    /**防御型爆发*/
    public burst_d(): boolean {
        if (this.inBurst) {
            return false;
        } // end if
        if (this.status_2 != "land" || this.status_3 != "normal" || this.holdFreeze) {
            return false;
        } // end if
        if (this.superPoint == this.powerPoint_max) {
        }
        else if (this.redBlood && this.superPoint > 0) {
        }
        else {
            return false;
        } // end else if
        this.status_3 = "attack";
        this.inBurst = true;
        this.burst_defend = true;
        this.burst_mode = "defend";
        this.status_1 = "burst2";
        this.mc.gotoAndStop("burst2");
        return true;
    } // End of the function

    /**力量型爆发*/
    public burst_p(): boolean {
        if (this.inBurst) {
            return false;
        } // end if
        if (this.status_2 != "land" || this.status_3 != "normal" || this.holdFreeze) {
            return false;
        } // end if
        if (this.superPoint == this.powerPoint_max) {
        }
        else if (this.redBlood && this.superPoint > 0) {
        }
        else {
            return false;
        } // end else if
        this.status_3 = "attack";
        this.inBurst = true;
        this.burst_mode = "power";
        this.status_1 = "burst3";
        this.mc.gotoAndStop("burst3");
        return true;
    } // End of the function

    public sk_burst_a(): boolean {
        if (this.inBurst != true && !this.inReplay) {
            return false;
        } // end if
        if (this.toStatus(this.skillObj.busrt_a) == false) {
            return false;
        } // end if
        this.status_3 = "attack";
        this.powerObj.action = "burstdec";
        this.powerObj.decNum = 80;
        this.powerControl(this.powerObj);
        return true;
    } // End of the function


    public sk_burst_d(): boolean {
        if (this.inBurst != true && !this.inReplay) {
            return false;
        } // end if
        if (this.toStatus(this.skillObj.busrt_d) == false) {
            return false;
        } // end if
        this.status_3 = "attack";
        this.powerObj.action = "burstdec";
        this.powerObj.decNum = 80;
        this.powerControl(this.powerObj);
        return true;
    } // End of the function

    public sk_record(): boolean {
        if (this.status_2 != "land") {
            return false;
        } // end if
        this.skill_replay_start();
        return true;
    } // End of the function

    /**重击 指令:front+kick_l/punch_l */
    public heavyHit(): boolean {
        if (this.status_2 != "land") {
            return false;
        } // end if
        this.status_1 = "heavyHit";
        this.status_3 = "attack";
        this.mc.gotoAndStop(this.status_1);
        return true;
    } // End of the function


    /**x轴移动人物
     * 负责人物x坐标变化
    */
    public move_walkRun() {
        this.DEBUG_LOG("location:move_walkRun");
        this.render_position_x = this.render_move_walkRun;
        this.render_position_x_params = [];
        // this.render_mc_action = this.render_move_walkRun;
        // this.render_mc_action_params = [];
    }

    /**通过帧事件持续移动人物*/
    public render_move_walkRun() {
        if (_level0.inPause) {
            return;
        } // end if
        if (this.inFreeze) {
            return;
        } // end if
        if (this.status_2 != "land" || this.status_3 != "normal") {
            // this.render_mc_action = undefined;
            this.render_position_x = undefined;
            this.DEBUG_LOG("[location][x]render_move_walkRun init to undefined");
            return;
        } // end if

        if (this.keyCtrl.key.isDown(this._frontButton)) {
            if (this.opp.status_3 == "attack" && this.dir == -1) {
                this.hold_u();
                return;
            } // end if
            this.do_move(this.Vx);
        }
        else if (this.keyCtrl.key.isDown(this._backButton)) {
            if (this.opp.status_3 == "attack" && this.dir == 1) {
                this.hold_u();
                return;
            } // end if
            this.do_move(this.Vx);
        }
        else {
            // this.render_mc_action = undefined;
            this.render_position_x = undefined;
            this.DEBUG_LOG("[location][x]render_move_walkrun init undefined");
            this.stand();
        } // end else if
    } // End of the function

    /**蹲*/
    public move_squat() {
        // this.DEBUG_LOG("move_squat init mc to move_squat")
        this.render_position_x = undefined;
        this.render_mc_action = this.render_move_squat;
        this.render_mc_action_params = [];
    }

    /**通过帧事件持续保持人物蹲*/
    public render_move_squat() {
        if (_level0.inPause) {
            return;
        } // end if
        if (this.inFreeze) {
            return;
        } // end if
        if (this.check_hold_d()) {
            // this.DEBUG_LOG("render_move_squat init to undefined")
            this.render_mc_action = undefined;
        } // end if
        if (!this.keyCtrl.key.isDown(this._downButton) && this.status_1 == "squat" && this.status_3 != "attack") {
            this.render_mc_action = undefined;
            // this.DEBUG_LOG("render_move_squat init to undefined")
            this.toStatus_switch(this.status_end);
        } // end if
    } // End of the function


    /**检查是否满足防御要求 */
    public check_hold_d(): boolean {
        if (this.opp.status_3 == "attack") {
            if (this.dir == 1 && this.keyCtrl.key.isDown(this._backButton) || this.dir == -1 && this.keyCtrl.key.isDown(this._frontButton)) {
                this.hold_d();
                return true;
            } // end if
        } // end if
        return false;
    } // End of the function

    /**防御*/
    public move_hold() {
        this.render_bodyMC_action = this.render_move_hold;
        this.render_bodyMC_action_params = [];
    }

    public render_move_hold() {
        if (_level0.inPause) {
            return;
        } // end if
        if (this.inFreeze) {
            return;
        } // end if
        if (this.status_2 != "land" || this.status_3 != "normal") {
            this.render_bodyMC_action = undefined;
            return;
        }
        if (this.keyCtrl.key.isDown(this._frontButton) && (this.opp.status_3 == "attack" || this.opp.hasObj()) && this.dir == -1) {
            if (this.status_1 == "hold_u" && this.keyCtrl.key.isDown(this._downButton)) {
                this.hold_d();
            }
            else if (this.status_1 == "hold_d" && !this.keyCtrl.key.isDown(this._downButton)) {
                this.hold_u();
            } // end else if
        }
        else if (this.keyCtrl.key.isDown(this._backButton) && (this.opp.status_3 == "attack" || this.opp.hasObj()) && this.dir == 1) {
            if (this.status_1 == "hold_u" && this.keyCtrl.key.isDown(this._downButton)) {
                this.hold_d();
            }
            else if (this.status_1 == "hold_d" && !this.keyCtrl.key.isDown(this._downButton)) {
                this.hold_u();
            } // end else if
        }
        else if (!this.holdFreeze) {
            this.status_3 = "normal";
            this.render_bodyMC_action = undefined;
            this.toStatus_switch("stand");
        } // end else if
    };

    public do_holdFreeze() {
        this.holdFreeze = true;
        this.delaySkill = "";
        FightMainRender.getInstance().Add(this, this.render_freeze_timer);
    }

    public render_freeze_timer() {
        if (_level0.inPause) {
            return;
        } // end if
        if (this.inFreeze) {
            return;
        } // end if
        if (this.holdFreezenum <= 0) {
            this.hold_end();
            FightMainRender.getInstance().Remove(this, this.render_freeze_timer);
        } // end if
        --this.holdFreezenum;
    };

    /**退出防御状态 */
    public hold_end() {
        this.holdFreeze = false;
        this.status_4 = "normal";
        if (this.status_1 == "hold_d") {
            this.toStatus_switch("squat");
        }
        else if (this.status_1 == "hold_d") {
            if (this.y != this.land_Y) {
                console.log(this.y);
            }
            this.toStatus_switch("stand");
        } // end else if
    } // End of the function

    /**移动人物*/
    public do_move(Vx: number) {
        this.do_move2(Vx);
    } // End of the function

    /**移动人物*/
    public do_move2(Vx: number) {
        if (this.edgecheck(Vx)) {
            return;
        } // end if
        if (isNaN(Vx)) {
            console.log("errry Vx==NaN");
            return;
        }
        this.x = this.x + Vx;
        BgScene.moveX(Vx, this);
    } // End of the function


    /*********************************************************************************************************** */
    /*********************************************************************************************************** */
    /**以下未在role中调用的函数会在骨骼帧事件以及单帧事件中调用 */
    /*********************************************************************************************************** */
    /*********************************************************************************************************** */

    //手动增加_parentRole.stop_move_X1();
    //修改特效移除方法:弃用removeEffect 改为parent.removechild
    //

    /**在x轴移动人物 */
    public start_move_X1(v: number, obj: any) {
        let Vx = 0;
        Vx = v == 0 ? (this.dir * this.Vx) : (this.dir * v);
        this.DEBUG_LOG("location: init to start_move_x1")
        // this.render_mc_action = this.render_start_move_X1;
        // this.render_mc_action_params = [Vx, obj];
        this.render_start_move_X1(Vx, obj)
        // this.render_position_x = this.render_start_move_X1;
        // this.render_position_x_params = [Vx, obj];
    }

    /**通过帧事件在x轴移动任务
     * arg0:x轴移动速度
     * arg1:控制对象
     */
    public render_start_move_X1(Vx: number, obj: any) {
        if (_level0.inPause) {
            return;
        } // end if
        if (this.inFreeze) {
            return;
        } // end if
        this.do_move(Vx);
        if (obj == null || obj == undefined || obj.Vx == undefined) {
            this.DEBUG_LOG("[location][x]render_start_move_x1 init to undefined1")
            // this.render_mc_action = undefined;
            this.render_position_x = undefined;
        } // end if
    } // End of the function

    /**停止在x轴移动人物 */
    public stop_move_X1() {
        this.DEBUG_LOG("[location][x]render_start_move_x1 init to undefined2")
        // this.render_mc_action = undefined;
        this.render_position_x = undefined;
    } // End of the function

    /**在x轴移动人物 */
    public start_move_X2(v: number) {
        this.DEBUG_LOG("[location][x]start_move_X2");
        this.Vx = v;
        // this.render_mc_action = this.render_start_move_X2;
        // this.render_mc_action_params = [];
        this.render_start_move_X2();
        // this.render_position_x = this.render_start_move_X2;
        // this.render_position_x_params = [];
    }

    /**通过帧事件在x轴移动任务
     * arg0:x轴移动速度
     * arg1:控制对象
     */
    public render_start_move_X2() {
        if (_level0.inPause) {
            return;
        } // end if
        if (this.inFreeze) {
            return;
        } // end if
        this.do_move(this.dir * this.Vx);
        this.Vx = this.Vx - this.Va;
        if (this.Vx <= 0) {
            // this.render_mc_action = undefined;
            this.render_position_x = undefined;
            this.DEBUG_LOG("[location][x]render_start_move_X2 init undefined1");
        } // end if
    } // End of the function

    /**停止在x轴移动人物 */
    public stop_move_X2() {
        // this.render_mc_action = undefined;
        this.render_position_x = undefined;
        this.DEBUG_LOG("[location][x]render_start_move_X2 init undefined2");
    } // End of the function

    /**在y轴移动人物 */
    public start_move_Y1(y: number, x: number, end: string = null, g: number = null) {
        this.status_2 = "air";
        this.Vy = y;
        this.Vx = this.dir * x;
        let Vg2: number;
        if (g != 0 && g != null) {
            Vg2 = g;
        }
        else {
            Vg2 = this.Vg;
        } // end else if
        this.render_position_y = this.render_start_move_Y1;
        this.render_position_y_params = [Vg2, end];
        // this.render_mc_action = this.render_start_move_Y1;
        // this.render_mc_action_params = [Vg2, end];
        this.DEBUG_LOG("[Location][y]start_move_Y1");
    }

    /**通过帧事件在y轴移动实现下降
     * arg0:y轴移动速度
     * arg1:落地状态
     */
    public render_start_move_Y1(Vg2: number, end_status: string) {
        if (_level0.inPause) {
            return;
        } // end if
        if (this.inFreeze) {
            return;
        } // end if
        this.do_move(this.Vx);
        this.y = this.y - this.Vy;
        this.Vy = this.Vy - Vg2;
        if (this.y > this.land_Y) {
            this.stop_move_Y1(end_status);
        } // end if
    } // End of the function

    /**到达地面停止渲染
     * 到达地面后转到end_status
     */
    public stop_move_Y1(end_status: string) {
        // this.render_mc_action = undefined;
        this.render_position_y = undefined;
        this.y = this.land_Y;
        this.DEBUG_LOG("[location][y]stop_move_Y1 init to undefined");
        // if (this._roleName == "roleRyu") {
        //     console.log(this);
        //     console.log(end_status);
        // }
        if (end_status == null || end_status == "") {
            this.land();
        }
        else if (end_status == "none") {
            this.bodyMC.resetFrameStop();
            this.status_2 = "land";
        }
        else if (end_status.indexOf("frame") != -1) {
            this.bodyMC.gotoAndStop(end_status);
            this.status_2 = "land";
        }
        // else if (this.mc.nextSkill != undefined) {
        //     this.toStatus(this.mc.nextSkill);
        // }
        else {
            this.toStatus(end_status);
        } // end else if
    } // End of the function


    /**被击打后后退 */
    public hurtBack() {
        this.Vx = this.hurtValue.Vx;
        this.hurtBack_freezenum = this.hurtValue.freezeTime2;
        this.status_5 = "hitBack";
        if ((this.status_1 == "hold_u" || this.status_1 == "hold_d") && this.Vx > 21) {
            this.Vx = 21;
        } // end if
        if (this.status_1 == "hold_d" && this.opp.status_1 == "squatKick") {
            this.Vx = 20;
        } // end if
        this.edgecheck(this.Vx);
        // this.render_mc_action = this.render_hurtBack;
        // this.render_mc_action_params = [];
        this.render_position_x = this.render_hurtBack;
        this.render_position_x_params = [];
        this.DEBUG_LOG("[location][x]hurtback");
    }

    //防御也会进入
    public render_hurtBack() {
        if (_level0.inPause) {
            return;
        } // end if
        if (_level0.inFreeze) {
            return;
        } // end if
        if (this.inFreeze) {
            return;
        } // end if
        if (this.hurtBack_freezenum > 0) {
            this.bodyMC.stop();//
            --this.hurtBack_freezenum;
            return;
        }
        else if (this.hurtBack_freezenum <= 0) {
            this.bodyMC.resetFrameStop();
            this.hurtBack_freezenum = -1;
        } // end else if
        if (this.Vx != 0) {
            if (_level0.IsInArray(this.opp.CommonSeries, this.opp.status_1) || this.opp.status_1 == "punch2" || this.opp.status_1 == "kick2") {
                this.opp.do_move(this.Vx / 4 * this.opp.dir);
                this.do_move(this.Vx / 2 * this.opp.dir);
            }
            else if (this.onEdge && !this.hurtValue.isObj && this.status_2 == "land") {
                this.opp.do_move(-this.Vx * this.opp.dir);
            }
            else {
                this.do_move(this.Vx * this.opp.dir);
            } // end if
        } // end else if
        let _loc2;
        if (this.hurtValue.a != 0 && this.hurtValue.a != undefined) {
            _loc2 = this.hurtValue.a;
        }
        else {
            _loc2 = this.Va;
        } // end else if
        this.Vx = this.Vx - _loc2;
        if (this.Vx <= 0) {
            // this.render_mc_action = undefined;
            this.render_position_x = undefined;
            this.DEBUG_LOG("[location][x]render_hurtBack init undefined1");
            this.bodyMC.resetFrameStop();
            //===============add by lmj for 一直hold========================================
            if (this.render_bodyMC_action == undefined) {
                if (this.status_1 == "hold_d") {
                    this.squat();
                    this.DEBUG_LOG("render_hurtback init undefined and to squat");
                } else if (this.status_1 == "hold_u") {
                    this.stand();
                    this.DEBUG_LOG("render_hurtback init undefined and to stand");
                }
            }
        } // end if
    } // End of the function

    public stop_hurtBack() {
        // this.render_mc_action = undefined;
        this.render_position_x = undefined;
        this.bodyMC.resetFrameStop();
        this.DEBUG_LOG("[location][x]render_hurtBack init undefined2");
    } // End of the function

    public hurtAway() {
        this.status_2 = "air";
        this.Vx = this.hurtValue.Vx * this.opp.dir;
        this.Vy = this.hurtValue.Vy;
        if (this.onEdge && !this.hurtValue.isObj && this.opp.status_2 == "land") {
            this.opp.do_move(-this.Vx);
        } // end if
        this.DEBUG_LOG("[location][y]hurtAway");
        this.render_position_y = this.do_hurtAway;
        this.render_position_y_params = [];
        // this.render_mc_action = this.do_hurtAway;
        // this.render_mc_action_params = [];
    } // End of the function


    public hurtAway_self(v1: number, v2: number, end: string): void {
        this.status_2 = "air";
        this.Vx = v1 * this.opp.dir;
        this.Vy = v2;
        this.hurtValue.Vy = v2;
        this.hurtValue.end_status = end;
        // this.render_mc_action = this.do_hurtAway;
        // this.render_mc_action_params = [];
        this.render_position_y = this.do_hurtAway;
        this.render_position_y_params = [];
        this.DEBUG_LOG("[location][y]hurtAway_self");
    } // End of the function

    public do_hurtAway() {
        if (_level0.inPause) {
            return;
        } // end if
        if (_level0.inFreeze) {
            return;
        } // end if
        if (this.inFreeze) {
            return;
        } // end if
        this.do_move(this.Vx);
        this.y = this.y - this.Vy;
        let _loc2;
        if (this.hurtValue.g != 0 && this.hurtValue.g != undefined) {
            _loc2 = this.hurtValue.g;
        }
        else {
            _loc2 = this.Vg;
        } // end else if
        this.Vy = this.Vy - _loc2;
        if (this.y > this.land_Y) {
            this.stop_hurtAway();
        } // end if
    } // End of the function

    public stop_hurtAway() {
        // this.render_mc_action = undefined;
        this.render_position_y = undefined;
        this.status_2 = "";
        this.y = this.land_Y;
        this.DEBUG_LOG("[location][y]stop_hurtAway init undefined");
        if (this.status_1 == "hurt6") {
            this.status_3 = "";
            this.toStatus_switch("stand");
        }
        else if (this.hurtValue.end_status == "none") {
            this.bodyMC.resetFrameStop();
        }
        else if (this.hurtValue.end_status == "") {
            if (this.Vx > 25 || this.Vx < -25) {
                this.toStatus("getup2");
            }
            else {
                this.toStatus("getup1");
            } // end else if
            this.status_5 = "hitDown";
        }
        else {
            this.toStatus(this.hurtValue.end_status);
            this.status_5 = "hitDown";
        } // end else if
        if (this.hurtValue.Vy < 0) {
            _level0.effect_mc.downEff("down3", this);
        }
        else {
            _level0.effect_mc.downEff("down2", this);
        } // end else if
    } // End of the function

    /**打击的碰撞检测
     * 与对手的本体即body区域进行碰撞
     * 骨骼存在放缩问题
     * 暂时处理:×放缩因子
     */
    public do_hitTest(obj: egret.DisplayObject): boolean {
        let pos1 = obj.getTransformedBounds(obj.stage);
        let oppbody = this.opp.bodyMC.getchildMovieBymcName(this.opp.bodyName);
        if (oppbody == null) {
            return false;
        }
        let pos2 = oppbody.getTransformedBounds(oppbody.stage);
        let angle1 = new egret.Rectangle(pos1.x, pos1.y, obj.width * obj.scaleX, obj.height * obj.scaleY);
        let angle2 = new egret.Rectangle(pos2.x, pos2.y, oppbody.width * oppbody.scaleX * this.opp.bodyMC.scaleX,
            oppbody.height * oppbody.scaleY * this.opp.bodyMC.scaleY);
        let ifHit = angle1.intersects(angle2)
        return ifHit;
    } // End of the function


    /**移动中的技能碰撞检测*/
    public move_HitTest(obj: any, attFrame: string, endFrame: string, S: number, v: number) {
        this.HitTest_Sv = v;
        this.HitTest_Sx = S;
        FightMainRender.getInstance().Add(this, this.render_move_HitTest, [attFrame, endFrame, obj]);
    }

    public render_move_HitTest(attFrame: string, endFrame: string, obj: any) {
        if (_level0.inPause) {
            return;
        } // end if
        if (this.inFreeze) {
            return;
        } // end if
        if (_level0.inFreeze) {
            return;
        } // end if
        this.do_move(this.dir * this.HitTest_Sv);
        this.HitTest_Sx = this.HitTest_Sx - this.HitTest_Sv;
        if (this.do_hitTest(obj)) {
            this.bodyMC.gotoAndStop(attFrame);
            FightMainRender.getInstance().Remove(this, this.render_move_HitTest);
        }
        else if (this.HitTest_Sx < 0) {
            this.bodyMC.gotoAndStop(endFrame);
            FightMainRender.getInstance().Remove(this, this.render_move_HitTest);
        }
        else if (this.edge == 1 && this.dir == 1) {
            this.bodyMC.gotoAndStop(endFrame);
            FightMainRender.getInstance().Remove(this, this.render_move_HitTest);
        }
        else if (this.edge == -1 && this.dir == -1) {
            this.bodyMC.gotoAndStop(endFrame);
            FightMainRender.getInstance().Remove(this, this.render_move_HitTest);
        } // end else if
    }


    /**检查是否满足摔的条件 */
    public catch_check(): boolean {
        if (this.status_1 != "dash_f" && this.opp.status_2 != "air" && this.opp.status_3 != "hurt" && this.opp.status_3 != "down" && !this.opp.holdFreeze && (this.opp.hit_over() || this.dir == this.opp.dir)) {
            return this.checkTouch(15 * this.dir);
        }
        return false;
    } // End of the function

    /**摔技检测 */
    public catch_HitTest(obj: egret.DisplayObject, status_c: string, flag: string, condition_land: boolean, condition_hurt: boolean, downHit: boolean) {
        if (condition_land) {//对方是否须在地面
            if (this.opp.status_2 == "air") {
                return;
            } // end if
        } // end if
        if (condition_hurt) {//对方是否需要已受伤
            if (this.opp.status_3 == "hurt" || this.opp.status_3 == "") {
            }
            else if (this.opp.status_3 == "down" && this.onHit) {
            }
            else {
                return;
            } // end else if
        } // end else if
        if (downHit == false) {//对方倒地时？
            if (this.opp.status_3 == "down") {
                return;
            } // end if
        } // end if
        let oppbody = this.opp.bodyMC.getchildMovieBymcName(this.opp.bodyName);
        if (oppbody == null) {
            this.onHit = false;
            this.toStatus("stand");
            return;
        }
        let pos1 = obj.getTransformedBounds(obj.stage);
        let pos2 = oppbody.getTransformedBounds(oppbody.stage);
        let angle1 = new egret.Rectangle(pos1.x, pos1.y, obj.width * obj.scaleX, obj.height * obj.scaleY);
        let angle2 = new egret.Rectangle(pos2.x, pos2.y, oppbody.width * oppbody.scaleX * this.opp.bodyMC.scaleX,
            oppbody.height * oppbody.scaleY * this.opp.bodyMC.scaleY);
        if (angle1.intersects(angle2)) {
            this.onHit = true;
            this.opp.toStatus(status_c);
            this.opp.bodyMC.gotoAndStop(flag);
            this.opp.checkFrameEvent();
            this.opp.status_3 = "hurt";
            let _loc2 = this.x + obj.x * this.dir;
            let _loc3 = this.y + obj.y;
            // if (_level0.char_mc._x + _loc2 > egde_max) {
            //     _loc2 = egde_max - _level0.char_mc._x;
            // }
            // else if (_level0.char_mc._x + _loc2 < egde_min) {
            //     _loc2 = egde_min - _level0.char_mc._x;
            // } // end else if
            this.opp.x = _loc2;
            if (this.dir == this.opp.dir) {
                if (this.dir == 1) {
                    this.opp.chageSide2();
                }
                else {
                    this.opp.chageSide1();
                } // end if
            } // end else if
            let num = this.parent.localToGlobal(_loc2, _loc3);
            _level0.effect_mc.hitFire("hitFire3", num.x, num.y, this);
            this.topLayer();
        }
        else {
            this.onHit = false;
            this.toStatus("stand");
        } // end else if
    } // End of the function


    public catch_oppPos(obj: zmovie.ZMovieClip, status_c: string, flag: string | number, land: boolean, hurt: boolean) {
        if (this.opp.status_2 == "air" && land) {
            return;
        } // end if
        if (this.opp.status_3 != "hurt" && this.opp.status_3 != "down" && hurt) {
            return;
        } // end if
        if (obj.stage != null && this.do_hitTest(obj)) {
            // if (obj.hitTest(this.opp.mc.body)) {
            this.onHit = true;
            this.opp.status_3 = "hurt";
            this.opp.toStatus(status_c);
            this.opp.bodyMC.gotoAndStop(flag);
            let _loc2 = this.x + obj.x * this.dir;
            let _loc3 = this.y + obj.y;
            if (_loc2 > this.edge_max) {
                _loc2 = this.edge_max;
            }
            else if (_loc2 < this.edge_min) {
                _loc2 = this.edge_min;
            } // end else if
            this.opp.x = _loc2;
            this.opp.y = _loc3;
            if (this.dir == this.opp.dir) {
                if (this.dir == 1) {
                    this.opp.chageSide2();
                }
                else {
                    this.opp.chageSide1();
                } // end if
            } // end else if
        }
        else {
            this.onHit = false;
        } // end else if
    } // End of the function

    /**obj击中对方后将对方移动至obj2处 */
    public catch_oppPos2(obj: zmovie.ZMovieClip, obj2: zmovie.ZMovieClip, status_c: string, flag: string | number, condition_land: boolean, condition_hurt: boolean, downHit: boolean): boolean {//oppDirChange
        if (condition_land) {
            if (this.opp.status_2 == "air" || this.opp.status_1 == "hurt6") {
                return false;
            } // end if
        } // end if
        if (condition_hurt) {
            if (this.opp.status_3 == "hurt" || this.opp.status_3 == "") {
            }
            else if (this.opp.status_3 == "down" && this.onHit) {
            }
            else {
                return false;
            } // end else if
        } // end else if
        if (downHit == false) {
            if (this.opp.status_3 == "down") {
                return false;
            } // end if
        } // end if
        if (obj.stage != null && this.do_hitTest(obj)) {
            // if (obj.hitTest(this.opp.body)) {//=================================
            this.onHit = true;
            this.opp.status_3 = "hurt";
            this.opp.toStatus(status_c);
            this.opp.bodyMC.gotoAndStop(flag);
            // this.opp.checkEvent();
            this.opp.skillCount = false;
            this.opp.inCount = false;
            this.opp.status_2 = "land";
            this.opp.render_mc_action = undefined;
            let _loc5 = obj2.localToGlobal();
            let _loc2 = _loc5.x;
            let _loc4 = _loc5.y;
            _loc5 = this.opp.parent.globalToLocal(_loc2, _loc4);
            _loc2 = _loc5.x;
            _loc4 = _loc5.y;
            if (_loc2 > this.edge_max) {
                _loc2 = this.edge_max;
            }
            else if (_loc2 < this.edge_min) {
                _loc2 = this.edge_min;
            } // end else if
            this.opp.x = _loc2;
            this.opp.y = _loc4;
            // } // end else if
            if (this.dir == this.opp.dir) {
                if (this.dir == 1) {
                    this.opp.chageSide2();
                }
                else {
                    this.opp.chageSide1();
                } // end if
            } // end else if
            return true;
        }
        else {
            this.onHit = false;
            return false;
        } // end else if
    } // End of the function

    /**将对手扔出 */
    public throw_oppPos(obj: any, status_c: string, flag: string, land: string, hurt: string) {
        this.onHit = true;
        this.opp.status_2 = "air";
        this.opp.status_3 = "hurt";
        this.opp.toStatus(status_c);
        this.opp.bodyMC.gotoAndStop(flag);
        let _loc2 = this.x + obj.x * this.dir;
        let _loc4 = this.y + obj.y;
        if (_loc2 > this.edge_max) {
            _loc2 = this.edge_max;
        }
        else if (_loc2 < this.edge_min) {
            _loc2 = this.edge_min;
        } // end else if
        this.opp.x = _loc2;
        this.opp.y = _loc4;
        if (obj.sameDir) {
            this.opp.scaleX = this.scaleX;
        } // end if
        this.opp.rotation = obj.rotation;
        // this.DEBUG_LOG("throw_oppPos init undefined");
        this.render_mc_action = undefined;
    } // End of the function

    public throw_hit(hurtV: HitValue, obj) {
        this.opp.rotation = 0;
        this.opp.checkSide_abs();
        let _loc2 = this.x + obj.x * this.dir;
        let _loc4 = this.y + obj._;
        if (_loc2 > this.edge_max) {
            _loc2 = this.edge_max;
        }
        else if (_loc2 < this.edge_min) {
            _loc2 = this.edge_min;
        } // end else if
        this.opp.x = _loc2;
        this.opp.y = _loc4;
        this.opp.hurtValue = hurtV;
        this.opp.toStatus(hurtV.hurtAway);
        this.opp.bodyMC.gotoAndStop(hurtV.flag);
        // this.opp.checkEvent();
        this.opp.hurtAway();
        this.powerObj.inc = 10 * hurtV.d_rate;
        this.powerObj.action = "inc";
        this.powerControl(this.powerObj);
    } // End of the function

    public flyingObjHit(hitValue) {
        // flyingObj.play();
    } // End of the function

    public doHit(hitValue: HitValue) {
        this.onHit = true;
        this.hitValue = hitValue;
        this.powerObj.inc = 10 * hitValue.d_rate;
        this.powerObj.action = "inc";
        this.powerControl(this.powerObj);
    } // End of the function


    public doHurt(hitValue: HitValue) {
        this.hurtValue = hitValue;
        this.checkHurt();
        this.shakeCheck();
        this.opp.topLayer();
        if (this.isKO && !this.KO_checked) {
            this.KO_checked = true;
            if (this.opp.superSkill || this.opp.isBurstSkill) {
                _level0.effect_mc.KO_Freeze(this.hurtValue.freezeTime + 15, 2, this);
            }
            else {
                _level0.effect_mc.KO_Freeze(this.hurtValue.freezeTime + 15, 1, this);
            } // end else if
        }
        else if (this.hurtValue.freezeTime > 0) {
            _level0.effect_mc.hitFreeze(this.hurtValue.freezeTime, this.hurtValue.slowTime, this);
        } // end else if
        // _level0.hurter = this;
        this.delaySkill = "";
    } // End of the function


    public checkHurt() {
        if (this.countCheck()) {
            this.lifeObj.d_rate = 0.300000;
            this.lifeControl(this.lifeObj);
            if (!this.isKO) {
                return;
            } // end if
        } // end if
        if (this.hurtValue.hitPos == "down" && this.status_1 == "hold_u") {
        }
        else if (this.hurtValue.hitPos == "up" && this.status_1 == "hold_d") {
        }
        else if (this.hurtValue.hitPos == "all") {
        }
        else if (this.status_1 == "hold_u" || this.status_1 == "hold_d") {//防御状态下
            let _loc2 = this.hurtValue.freezeTime + this.hurtValue.freezeTime2;
            if (_loc2 == undefined) {
                _loc2 = 6;
            }
            else if (_loc2 < 2) {
                _loc2 = 4;
            }
            else if (_loc2 < 6) {
                _loc2 = 6;
            }
            else if (_loc2 > 8) {
                _loc2 = 8;
            } // end else if
            this.holdFreezenum = _loc2;
            this.do_holdFreeze();
            this.hurtBack();
            if (this.burst_defend) {
                return;
            } // end if
            this.lifeObj.d_rate = 0.050000;
            this.lifeControl(this.lifeObj);
            if (this.isKO) {
                this.hurtValue.hurtAway = "hurt3";
                this.hurtValue.end_status = "getup2";
                this.hurtValue.Vx = 16;
                this.hurtValue.Vy = 30;
                this.toStatus(this.hurtValue.hurtAway);
                // this.mc.gotoAndPlay(1);
                this.hurtAway();
            } // end if
            return;
        } // end else if
        if (this.opp.burst_mode == "power") {
            this.lifeObj.d_rate = this.hurtValue.d_rate * 1.100000;
        }
        else {
            this.lifeObj.d_rate = this.hurtValue.d_rate;
        } // end else if
        this.lifeControl(this.lifeObj);
        this.powerObj.inc = 4 * this.hurtValue.d_rate;
        this.powerObj.action = "inc";
        this.powerControl(this.powerObj);
        this.status_3 = "hurt";
        if (this.dir == this.opp.dir) {
            if (this.dir == 1) {
                this.chageSide2();
            }
            else {
                this.chageSide1();
            } // end if
        } // end else if
        this.hurtStatus();
        this.hitSkillName = this.opp.status_1;
        if (this.checkTouch_stop) {
            this.checkTouch_stop = false;
            this.bodyTouch();
        } // end if
        // if (Math.random() < 0.100000) {
        //     let _loc4 = hurtSoundArray.length;
        //     let _loc3 = int(Math.random() * _loc4);
        //     let _loc5 = hurtSoundArray[_loc3];
        //     _loc5.start();
        // } // end if
    } // End of the function


    public hurtStatus() {
        this.DEBUG_LOG("[location][x][y]hurtStatus stop");
        // this.render_mc_action = undefined;
        this.render_position_x = undefined;
        this.render_position_y = undefined;//
        if (this.hurtValue.hurtBack != "") {
            if (this.isKO) {
                this.hurtValue.hurtAway = "hurt3";
                this.hurtValue.end_status = "getup2";
                this.hurtValue.Vx = 16;
                this.hurtValue.Vy = 30;
                this.toStatus(this.hurtValue.hurtAway);
                this.bodyMC.gotoAndStop(1);
                this.hurtAway();
            }
            else if (this.status_2 == "air") {
                this.toStatus(this.hurtValue.hurtAway);
                this.bodyMC.gotoAndStop(this.hurtValue.flag);
                if (this.hurtValue.hurtAway == "hurt1" || this.hurtValue.hurtAway == "hurt2") {
                    this.y = this.land_Y;
                    this.status_2 = "land";
                    this.hurtBack();
                }
                else {
                    if (this.hurtValue.Vy == 0 || this.hurtValue.Vy == undefined) {
                        this.hurtValue.Vy = 30;
                    } // end if
                    this.hurtAway();
                } // end else if
            }
            else {
                this.toStatus(this.hurtValue.hurtBack);
                this.bodyMC.gotoAndStop(this.hurtValue.flag);
                this.hurtBack();
            } // end else if
        }
        else if (this.hurtValue.hurtBack == "" && this.hurtValue.hurtAway != "") {
            if (this.isKO && this.hurtValue.hurtAway == "hurt6") {
                this.hurtValue.hurtAway = "hurt3";
            } // end if
            this.toStatus(this.hurtValue.hurtAway);
            this.bodyMC.gotoAndStop(this.hurtValue.flag);
            this.hurtAway();
        }
        else {
            this.toStatus(this.hurtValue.hurtBack);
            this.bodyMC.gotoAndStop(this.hurtValue.flag);
            this.hurtBack();
        } // end else if
    } // End of the function



    public hitFire(hitValue) {
        let _loc2 = hitValue.hitType;
        let beatMC = hitValue.area;
        let hitFire_x = this.opp.localToGlobal().x;
        let hitFire_y = beatMC.localToGlobal().y;
        if (this.opp.status_1 == "hold_u" || this.opp.status_1 == "hold_d") {
            _loc2 = "hitFire2";
        }
        else if (this.opp.inCount) {
            _loc2 = "hitFire2";
            // _level0.showMsg("count", hitFire_x + _level0.char_mc._x);
        }
        else {
            let hitEff = hitValue.hitEff;
            let _loc3 = function (role: Role, hitEff, hitFire_x, hitFire_y) {
                role.addEffect(hitEff, hitFire_x, hitFire_y);
            }
            if (hitValue.hitEff != "") {
                setTimeout(_loc3, 40, this, hitEff, hitFire_x, hitFire_y);
            } // end if
            this.hitsObj.x = hitFire_x;
            // _level0.showHits(hitsObj);
            HitCounter.getInstance(this).addHits();
            ++this.hits;
            // console.log(this.hits);
            if (hitValue.hitShinning) {
                _level0.effect_mc.bgShineHit(2, this);
            }
            else if (this.superSkill || this.isBurstSkill) {
                _level0.effect_mc.bgShineHit(1, this);
            } // end else if
        } // end else if
        if(_loc2!=""){
            _level0.effect_mc.hitFire(_loc2, hitFire_x, hitFire_y, this);
        }
    } // End of the function


    public countStart(times: number = 1, pos: string) {
        this.skillCount = true;
        this.countTimes = times;
        this.countPos = pos;
        if (this.countTimes == undefined) {
            this.countTimes = 1;
        } // end if
    } // End of the function

    public countEnd() {
        this.skillCount = false;
    } // End of the function

    public countCheck(): boolean {
        if (this.dir != this.opp.dir) {
            if (this.skillCount) {
                if (this.countPos == "down" && this.hurtValue.hitPos == "up") {
                    this.countEnd();
                }
                else if (this.countPos == "up" && this.hurtValue.hitPos == "down") {
                    this.countEnd();
                }
                else if (this.opp.inCount) {
                    this.countEnd();
                }
                else if (this.countTimes > 0) {
                    this.hurtValue.freezeTime = this.hurtValue.freezeTime + 7;
                    if (this.opp.superSkill || this.opp.isBurstSkill) {
                        this.inCount = false;
                        this.countEnd();
                        return false;
                    } // end if
                    this.inCount = true;
                    --this.countTimes;
                    return true;
                } // end else if
            }
            else if (this.burst_defend) {
                if (this.inCount) {
                    this.countEnd();
                }
                else if (this.opp.inCount) {
                    this.countEnd();
                }
                else if (this.hit_over() != true) {
                    this.hurtValue.freezeTime = this.hurtValue.freezeTime + 7;
                    if (this.opp.superSkill || this.opp.isBurstSkill) {
                        this.inCount = false;
                        this.countEnd();
                        return false;
                    } // end if
                    this.inCount = true;
                    this.powerObj.action = "burstdec";
                    this.powerObj.decNum = 20;
                    this.powerControl(this.powerObj);
                    // this.changeColorSelf("white", 30);
                    return true;
                } // end else if
            } // end else if
        } // end else if
        this.countTimes = 0;
        this.inCount = false;
        return false;
    } // End of the function


    public powerBurst(): void {
        this.inBurst = true;
        this.powerObj.action = "burst";
        this.powerControl(this.powerObj);
    } // End of the function

    public burstEff() {
        if (this.burst_mode == "attack") {
        }
        else if (this.burst_mode == "defend") {
            this.burst_defend = true;
        } // end else if
    } // End of the function

    public superCancle(): boolean {
        if (this.inBurst && this.burst_mode == "attack") {
            return true;
        } // end if
        return false;
    } // End of the function

    public burst_end() {
        this.inBurst = false;
        this.inCount = false;
        this.burst_defend = false;
        this.burst_mode = "";
    } // End of the function

    public holdCount() {
        if (this.heavyHit() == false) {
            return;
        } // end if
        this.powerObj.action = "burstdec";
        this.powerObj.decNum = _level0.power_holdCounter;
        this.powerControl(this.powerObj);
        // this.changeColorSelf("white", 30);
    } // End of the function

    public isHitEnd(): boolean {
        let _loc2 = this.comboClass.skill_over[this.status_1];
        if (_loc2 == undefined) {
            if (this.status_3 == "attack" && this.bodyMC.getCurrFrame() > this.bodyMC.totalFrame - 4) {
                return true;
            } else if (this.status_3 == "hurt") {
                return true;//add
            }
            else {
                return false;
            } // end else if
        }
        else if (this.bodyMC.getCurrFrame() > _loc2) {
            return true;
        }
        else {
            return false;
        } // end else if
    } // End of the function


    /**当前人物进攻动作是否完成
     * 存在子骨骼:未完成
     * 通过skill_over读取结束帧进行判断
     */
    public hit_over() {
        if (this.status_3 != "attack") {
            return true;
        } // end if
        // _level0.out("hit_over   over_f:" + over_f + "   mc._currentframe:" + mc._currentframe + "   mc._totalframes:" + mc._totalframes);
        if (this.bodyMC.getchildMovieBymcName("Hitcheck") != null ||
            this.bodyMC.getchildMovieBymcName("FlyingObj") != null ||
            this.bodyMC.getchildMovieBymcName("Hitcheck_obj") != null
        ) {
            return false;
        }
        let over_f: number = this.comboClass.skill_over[this.status_1];
        if (this.bodyMC.getCurrFrame() > this.bodyMC.getCurrFrame() - 4) {
            return true;
        } // end if
        if (isNaN(over_f)) {
            return;
        } // end if
        if (this.bodyMC.getCurrFrame() > over_f) {
            return true;
        } // end if
        return false;
    } // End of the function


    public freeze_frame(): number {
        if (this.status_3 != "attack") {
            return 0;
        } // end if
        return this.bodyMC.totalFrame - this.bodyMC.getCurrFrame();
    } // End of the function

    public superStart(superType, time_f, dx, dy, faceName, dir) {
        // _level0.effect_mc.superStart(superType, time_f, dx, dy, faceName, dir);
    } // End of the function

    /**爆气技能检测
     * 某些技能(superList中)需要消耗能量才能执行sk_s1,sk_s2,sk_s3
     * 若check_action不是这些技能则返回notSpuerSkill
     * 若是则检测能量是否满足要求返回对应true或false
     */
    public superCheck(check_action: string): boolean | string {
        this.superSkill = false;
        if (this.superList[check_action] == 1) {//该行为在爆发连招(K:sk_s1, sk_s2, sk_s3)中
            if (this.superPoint > 0) {//能量条?
                this.superSkill = true;
                this.powerDecType = "super";
                return true;
            }
            else if (this.inBurst) {
                this.superSkill = true;
                this.powerDecType = "super";
                return true;
            }
            else {
                return false;
            } // end else if
        }
        else {
            return "notSpuerSkill";
        } // end else if
    } // End of the function

    /**爆发技能检测
     * 某些技能(burstList中)需要消耗能量才能执行s4,s5
     * 若check_action不是这些技能则返回notbrustSkill
     * 若是则返回true或false(是否在爆发状态下)
     */
    public burstCheck(check_action: string): boolean | string {
        this.isBurstSkill = false;
        if (this.burstList[check_action] == 1) {//需要爆发状态
            if (this.inBurst) {
                this.isBurstSkill = true;
                this.powerDecType = "burst";
                return true;
            }
            else {
                return false;
            } // end if
        } // end else if
        return "notbrustSkill";
    } // End of the function


    public skillSuperCheck(action: string): string {
        let _loc2 = this.skillSuperMapping[action];
        if (_loc2 != undefined) {
            return _loc2;
        }
        else {
            return "";
        } // end else if
    } // End of the function

    /**扣除能量 */
    public powerDec() {
        if (this.inBurst && this.powerDecType == "burst") {
            this.powerObj.action = "burstdec";
            this.powerObj.decNum = this.power_skillBurst;
            this.powerControl(this.powerObj);
            this.powerDecType = "";
        }
        else if (this.inBurst && this.powerDecType == "super") {
            this.powerObj.action = "burstdec";
            this.powerObj.decNum = this.power_skillSuper;
            this.powerControl(this.powerObj);
            this.powerDecType = "";
        }
        else if (!this.inBurst && this.powerDecType == "super") {
            this.powerObj.action = "dec";
            this.powerControl(this.powerObj);
            this.powerDecType = "";
        } // end else if
    } // End of the function

    /**扣除能量 */
    public powerDec2() {
        if (this.inBurst && this.powerDecType2 == "cancle") {
            this.powerObj.action = "burstdec";
            this.powerObj.decNum = this.power_cancle;
            this.powerControl(this.powerObj);
            // this.changeColorSelf("white", 30);
            this.powerDecType2 = "";
        } // end if
    } // End of the function

    /**子骨骼技能 */
    public addSkill(skill_name: string, src: zmovie.ZMovieClip, Vx: number, Va: number, suspend: boolean = false) {
        let skill_class = eval(this._roleName + "_Skill");
        let coordinate_stage = src.parent.localToGlobal(src.x, src.y);
        let coordinate_local = SplashScene.hero_layer.globalToLocal(coordinate_stage.x, coordinate_stage.y);
        let skill = new skill_class(skill_name, this);
        if (this.dir == -1) {
            skill.skill_mc.skewY = 180;
        }
        skill.skill_mc.x = coordinate_local.x;
        if (skill.skill_mc.x > (SplashScene.hero_layer.globalToLocal(this.stage_width)).x) {
            skill.skill_mc.x = (SplashScene.hero_layer.globalToLocal(this.stage_width)).x;
        } else if (skill.skill_mc.x < (SplashScene.hero_layer.globalToLocal(0)).x) {
            skill.skill_mc.x = (SplashScene.hero_layer.globalToLocal(0)).x;
        }
        skill.skill_mc.y = coordinate_local.y;
        SplashScene.hero_layer.addChild(skill.skill_mc);
        if (suspend) {
            _level0.effect_mc.skill_loader.push(skill);
        } else {
            // console.log(skill.skill_mc);
            skill.skill_mc["dir"] = this.dir;
            this.skill_loader.push(skill);
        }


    } // End of the function

    public addSkill2(skill_name: string, src: zmovie.ZMovieClip, Vx: number, Va: number) {
        this.addSkill(skill_name, src, Vx, Va);
        // let skill_class = eval(this._roleName + "_Skill");
        // let skill = new skill_class(skill_name, this);
        // if (this.dir == -1) {
        //     skill.skewY = 180;
        // }
        // skill.x = src.localToGlobal().x;
        // skill.y = src.localToGlobal().y;
        // this.stage.addChild(skill);
        // this.skill_loader.push(skill);
    } // End of the function

    public addSkill_m(s_name, src, posx, posy) {
        //     let _loc4 = skill_loader.getNextHighestDepth();
        //     let _loc2 = skill_loader.attachMovie(s_name, "skill" + _loc4, _loc4);
        //     let _loc3 = new Object();
        //     _loc3.x = src._x;
        //     _loc3.y = src._y;
        //     src._parent.localToGlobal(_loc3);
        //     skill_loader.globalToLocal(_loc3);
        //     _loc2._x = posx;
        //     _loc2._y = _loc3.y;
        //     _loc2.dir = dir;
        //     _loc2.scaleX = dir * scale;
        //     _loc2.this.opp = this.opp;
        //     _loc2.init();
        //     if (char_mc._x + _loc2._x > stage_with) {
        //         _loc2._x = stage_with - char_mc._x;
        //     }
        //     else if (char_mc._x + _loc2._x < 0) {
        //         _loc2._x = -char_mc._x;
        //     } // end else if
    } // End of the function

    public addEffect(e_name: string, e_x: number, e_y: number) {
        let skill_class = eval(this._roleName + "_Skill");
        let skill = new skill_class(e_name, this);
        let num = SplashScene.hero_layer.globalToLocal(e_x, e_y);
        skill.skill_mc.x = num.x;
        skill.skill_mc.y = num.y;
        if (this.dir == -1) {
            skill.skill_mc.skewY = 180;
        }
        SplashScene.hero_layer.addChild(skill.skill_mc);
        _level0.effect_mc.skill_loader.push(skill);
    } // End of the function

    public addShadow(shadow_name, src, start_alpha, end_alpha, d_alpha, _rb, _gb, _bb) {
        //     if (shadow_mc instanceof MovieClip != true) {
        //         shadow_mc = _parent.createEmptyMovieClip("shadow_mc", depth_shadow);
        //     } // end if
        //     trace("shadow_mc: " + shadow_mc);
        //     let _loc3 = shadow_mc.getNextHighestDepth();
        //     let _loc2 = shadow_mc.attachMovie(shadow_name, "shadow_" + _loc3, _loc3);
        //     trace("shadow: " + _loc2);
        //     _loc2._x = src._x * dir + _x;
        //     _loc2._y = src._y + _y;
        //     _loc2.colorObj = new Color(_loc2);
        //     let _loc4 = { ra: "100", rb: _rb, ga: "100", gb: _gb, ba: "100", bb: _bb, aa: "100", ab: "0" };
        //     _loc2.colorObj.setTransform(_loc4);
        //     _loc2._alpha = start_alpha;
        //     _loc2.end_alpha = end_alpha;
        //     _loc2.d_alpha = d_alpha;
        //     _loc2.scaleX = dir * scale;
        //     let onwer = this;
        //     _loc2.onEnterFrame = public()
        //     {
        //         if (_level0.inPause) {
        //             return;
        //         } // end if
        //         if (onwer.inFreeze) {
        //             return;
        //         } // end if
        //         _alpha = _alpha - this.d_alpha;
        //         if (_alpha < this.end_alpha) {
        //             this.removeMovieClip();
        //         } // end if
        //     };
    } // End of the function

    public catchFire(e_name, e_x, e_y, dir) {
    } // End of the function

    public start_move_Obj(Obj) {
        //     let _loc2 = Obj;
        //     let this = this;
        //     _loc2.onEnterFrame = public()
        //     {
        //         if (_level0.inPause) {
        //             return;
        //         } // end if
        //         if (this.inFreeze) {
        //             return;
        //         } // end if
        //         _x = _x + dir * this.Vx;
        //         this.Vx = this.Vx - Va;
        //         if (this.Vx <= 0 || _x > 700 || _x < -50) {
        //             this.gotoAndPlay("end");
        //             delete this.onEnterFrame;
        //         } // end if
        //     };
    } // End of the function

    public skill_filter(action: string): boolean {
        for (let _loc3 in this.record_filter_array) {//
            if (action == this.record_filter_array[_loc3]) {
                return true;
            } // end if
        } // end of for...in
        return false;
    } // End of the function


    public check_countType(s: any): boolean {
        for (let _loc3 in this.record_skill_totalFrame) {
            if (String(s) == this.record_skill_totalFrame[_loc3]) {
                return true;
            } // end if
        } // end of for...in
        for (let _loc3 in this.record_action_totalFrame) {
            if (String(s) == this.record_action_totalFrame[_loc3]) {
                return true;
            } // end if
        } // end of for...in
        if (String(s).indexOf("jumpSkill_") != -1) {
            return true;
        } // end if
        return false;
    } // End of the function

    public set_combo() {
        //     let _loc2 = _level0.comboRecord_array[_level0.comboIndex];
        //     record_skill = _loc2.data[0];
        //     record_frame = _loc2.data[1];
        //     count_type = _loc2.data[2];
    } // End of the function

    public skill_record_ready() {
        this.inRecord = true;
        this.record_frame = [];
        this.record_skill = [];
        this.count_type = [];
    } // End of the function

    public skill_record(skill: string) {
        if (this.record_skill.length == 0) {
            this.record_skill.push(skill);
            this.count_type.push("total");
            this.record_frame.push(1);
        }
        else {
            this.record_skill.push(skill);
            if (this.check_countType(this.status_1)) {
                this.count_type.push("total");
                this.record_frame.push(this.frameCount_temp - this.frameOffset);
            }
            else {
                this.count_type.push("current");
                this.record_frame.push(this.mc.getCurrFrame() - 1);
            } // end else if
        } // end else if
        this.frameCount_temp = 1;
        FightMainRender.getInstance().Add(this, this.render_replay_timer2);
    }

    public render_replay_timer2() {
        if (this.inFreeze) {
            return;
        } // end if
        ++this.frameCount_temp;
    };

    public skill_record_end(hits) {
        this.inRecord = false;
        FightMainRender.getInstance().Remove(this, this.render_replay_timer2);
        if (this.record_skill.length == 0) {
            return;
        } // end if
        let _loc2 = hits + " Combo";
        let _loc3 = [this.record_skill, this.record_frame, this.count_type];
        // _level0.combo_new({ label: _loc2, data: _loc3 });
    } // End of the function

    public skill_replay_start() {
        // trace("skill_replay_start: " + record_skill);
        this.inReplay = true;
        this.skillPoint = 0;
        this.toSkill(this.record_skill[this.skillPoint]);
        ++this.skillPoint;
        this.skill_replay();
    } // End of the function

    public skill_replay_end() {
        this.inReplay = false;
        FightMainRender.getInstance().Remove(this, this.render_replay_timer);
        FightMainRender.getInstance().Remove(this, this.render2_replay_timer);
        this.powerObj.action = "burstdec";
        this.powerObj.decNum = 300;
        this.powerControl(this.powerObj);
    } // End of the function

    public skill_replay() {
        let skill = this.record_skill[this.skillPoint];
        let frame = this.record_frame[this.skillPoint];
        let _loc2 = this.count_type[this.skillPoint];
        if (this.skillPoint == this.record_skill.length) {
            this.skill_replay_end();
            return;
        } // end if
        // _level0.out("下个动作：" + skill);
        // _level0.out("开始帧数：" + frame);
        // _level0.out("动作类型：" + _loc2);
        // _level0.out("当前动作：" + status_1);
        if (_loc2 == "total") {
            this.frameCount_temp = 1;
            FightMainRender.getInstance().Add(this, this.render_replay_timer, [frame, skill]);
            return;
        } // end if
        FightMainRender.getInstance().Add(this, this.render2_replay_timer, [frame, skill]);
    } // End of the function

    public render_replay_timer(frame: number, skill: string) {
        if (this.inFreeze) {
            return;
        } // end if
        if (this.status_3 == "hurt") {
            this.skill_replay_end();
        } // end if
        ++this.frameCount_temp;
        if (this.frameCount_temp > frame) {
            this.toSkill(skill, true);
            ++this.skillPoint;
            this.skill_replay();
        } // end if
    }

    public render2_replay_timer(frame: number, skill: string) {
        if (this.inFreeze) {
            return;
        } // end if
        if (this.status_3 == "hurt") {
            this.skill_replay_end();
        } // end if
        if (this.mc.getCurrFrame() > frame) {
            if (this.status_1 == "jump" || this.status_1 == "jump_b" || this.status_1 == "jump_f") {
                this.jumpSkill(skill);
            }
            else {
                this.toSkill(skill, true);
            } // end else if
            ++this.skillPoint;
            this.skill_replay();
        } // end if
    };

    //     public toGlobal(obj1, obj2)
    // {
    //     let _loc1 = new Object();
    //     _loc1.x = obj1._x;
    //     _loc1.y = obj1._y;
    //     obj2.localToGlobal(_loc1);
    //     return (_loc1);
    // } // End of the function

    //     public getMc(src)
    // {
    //     for (let _loc3 in src) {
    //         let _loc1 = src[_loc3];
    //         trace("mc::: " + _loc1);
    //         if (_loc1 instanceof MovieClip) {
    //             trace("src:::::::::::" + src);
    //             trace("mc:::::::::::: " + _loc1);
    //             return (_loc1);
    //         } // end if
    //     } // end of for...in
    // } // End of the function

    //     public easySkillMapping()
    // {
    // } // End of the function

    //     public soundInit()
    // {
    //     // sound_mc = _root.createEmptyMovieClip("sound_mc", 1100);
    //     // run_snd = new Sound(sound_mc);
    //     // run_snd.attachSound("run_snd");
    //     // hurt1_snd = new Sound(sound_mc);
    //     // hurt1_snd.attachSound("hurt1_snd_" + roleName);
    //     // hurt2_snd = new Sound(sound_mc);
    //     // hurt2_snd.attachSound("hurt2_snd_" + roleName);
    //     // lose_snd = new Sound(sound_mc);
    //     // lose_snd.attachSound("lose_snd_" + roleName);
    //     // hurtSoundArray = new Array();
    //     // hurtSoundArray = [hurt1_snd, hurt2_snd];
    // } // End of the function


    public stageInf(sw: number, emax: number, emin: number, x: number, y: number): void {
        this.stage_width = sw;
        this.edge_max = emax;
        this.edge_min = emin;
        this.startX = x;
        this.startY = y;
        this.x = x;
        this.y = y;
        this.land_Y = y;
        // this.checkSide_abs();
        // this.soundInit();
        // _level0.out(_x + "=======" + _y);
    } // End of the function


    public stageVar(l_max: number, s_Point: number, p_max: number, opponent: Role, burst: string) {
        // if (this._roleName != this.roleName) {
        // } // end if
        this.life_max = l_max;
        this.life = this.life_max;
        this.superPoint = s_Point;
        this.powerPoint_max = p_max;
        this.opp = opponent;
        this.burst_mode = burst;
        //    this.power_skillSuper = _level0.power_skillSuper;
        //    this. power_skillBurst = _level0.power_skillBurst;
    } // End of the function





    public reset() {
        this.isKO = false;
        this.KO_checked = false;
        this.onEdge = false;
        this.redBlood = false;
        this.life = this.life_max;
        this.mc.gotoAndStop("ready");
        this.x = this.startX;
        this.y = this.startY;
        this.checkSide_abs();
    } // End of the function


    public noAct(): any {
        return;
    } // End of the function

    public start_control() {
        this.control = true;
        this.toSkill = this.toSkill_temp;
        this.toAction = this.toAction_temp;
        this.toStatus = this.toStatus_temp;
        this.toStatus_switch("stand");
    } // End of the function

    public end_control(action: string): boolean {
        this.toStatus_temp(action);
        return true;
    } // End of the function

    public do_end() {
        this.control = false;
        this.toSkill = this.noAct;
        this.toAction = this.noAct;
        this.toStatus = this.end_control;
        if (this.status_1 == "walk_f" || this.status_1 == "walk_b" || this.status_1 == "dash_f" || this.status_1 == "squat") {
            FightMainRender.getInstance().Remove(this, this.renderAnimate);
            this.status_1 = "stand";
            this.mc.gotoAndStop("stand");
        } // end if
    } // End of the function

    public do_KO() {
        this.isKO = true;
        if (this.status_4 == "hold") {
            this.hurtValue.hurtAway = "hurt3";
            this.hurtValue.end_status = "getup2";
            this.hurtValue.Vx = 16;
            this.hurtValue.Vy = 30;
            this.toStatus(this.hurtValue.hurtAway);
            this.mc.gotoAndStop(1);
            this.hurtAway();
        } // end if
        // let _loc2 = this.attachMovie("ko_snd_" + roleName, "ko_snd", 12545);
    } // End of the function

    public do_win() {
        let action = "end";
        if (this.winPoseArray.length != 0) {
            let index = Math.floor(Math.random() * this.winPoseArray.length);
            if (index == this.winPoseArray.length) {
                index = this.winPoseArray.length - 1;
            }
            action = this.winPoseArray[index];
        }
        this.mc.gotoAndStop(action);
        this.status_1 = "end";
        this.opp.showHits_end();
    } // End of the function

    public do_lose() {
        FightMainRender.getInstance().Add(this, this.render_do_lose);
    }


    public render_do_lose() {
        if (_level0.inPause) {
            return;
        } // end if
        if (this.status_2 == "land" && this.status_3 == "normal" && this.status_4 == "normal") {
            this.mc.gotoAndStop("lose");
            this.status_1 = "lose";
            FightMainRender.getInstance().Remove(this, this.render_do_lose);
        } // end if
    } // End of the function

    /**自动转向 */
    public checkSide_abs() {
        if (this.x < this.opp.x - this.side_offset) {
            this.scaleX = this.scale;
            this.dir = 1;
            if (this.keyCtrl) {
                this.keyCtrl.dir = 1;
            }
        }
        else if (this.x > this.opp.x + this.side_offset) {
            this.scaleX = -this.scale;
            this.dir = -1;
            if (this.keyCtrl) {
                this.keyCtrl.dir = -1;
            }
        } // end else if
    } // End of the function


    /**改变人物方向 */
    public checkSide() {
        if (this.status_2 == "toLand") {
            this.chageSide_arg();
            return;
        } // end if
        if (this.status_1 == "roll_f") {
            this.chageSide_arg();
            return;
        } // end if
        if (this.status_2 != "land") {
            return;
        } // end if
        if (this.status_3 != "normal") {
            return;
        } // end if
        if (this.status_1 == "dash_f") {
            return;
        } // end if
        if (this.x < this.opp.x - this.side_offset) {
            this.chageSide1();
        }
        else if (this.x > this.opp.x + this.side_offset) {
            this.chageSide2();
        } // end else if
    } // End of the function

    public chageSide_arg() {
        if (this.x < this.opp.x - this.side_offset && this.scaleX < 0 && this.keyCtrl) {
            this.keyCtrl.dir = 1;
        }
        else if (this.x > this.opp.x + this.side_offset && this.scaleX > 0 && this.keyCtrl) {
            this.keyCtrl.dir = -1;
        } // end else if
    } // End of the function

    /**人物向右 */
    public chageSide1() {
        this.scaleX = this.scale;
        this.dir = 1;
        if (this.keyCtrl) {
            this.keyCtrl.dir = 1;
        }
    } // End of the function

    /**人物向左 */
    public chageSide2() {
        this.scaleX = -this.scale;
        this.dir = -1;
        if (this.keyCtrl) {
            this.keyCtrl.dir = -1;
        }
    } // End of the function

    /**生命控制 */
    public lifeControl(lifeobj: any) {
        _level0.lifeControl(lifeobj, this);
    } // End of the function

    /**能量控制 */
    public powerControl(powerobj: any) {
        _level0.powerControl(powerobj, this);
    } // End of the function

    public showHits_end() {
        if (this.opp.hits == 0) {
            return;
        } // end if
        // _level0.showHits_end(hitsObj);
        if (this.opp.inRecord) {
            this.opp.skill_record_end(this.opp.hits);
        } // end if
        if (this.opp.hits > 0) {
            this.opp.hitsArray.push(this.opp.hits);
        } // end if
        this.opp.hits = 0;
    } // End of the function

    public toSkill(action: string, cancle: boolean = false) {
        if (action == undefined) {
            return;
        } // end if
        if (_level0.inPause) {
            return;
        } // end if
        this.powerDecType = "";
        if (this.status_3 == "hurt") {//被击中
            return;
        } // end if
        if (this.status_3 == "down") {//倒地中
            if (this.delayCheck()) {
                this.skill_delay(action);
            } // end if
            return;
        } // end if
        if (this.holdFreeze) {
            if (this.burst_defend && action == "heavyHit") {
                this.holdCount();
            }
            else {
                this.skill_delay(action);
            } // end else if
            return;
        } // end if
        let _loc3 = this.superCheck(action);
        if (_loc3 == false) {
            return;
        }
        else if (_loc3 == true) {
            if (this.burst_mode == "power") {
                let _loc4 = this.skillSuperCheck(action);
                if (_loc4 != "") {
                    this.powerDecType = "super";
                    action = _loc4;
                } // end if
            } // end if
        }
        else if (this.superMaxList[action] == 1) {
            this.powerDecType = "super";
        } // end else if
        if (this.burstCheck(action) == false) {
            return;
        } // end if
        if ((this.status_3 == "attack" || this.status_2 == "toLand") && !cancle) {
            if (this.comboClass.check_combo(this.status_1, action)) {
                return;
            } // end if
            if (this.delayCheck()) {
                this.skill_delay(action);
                return;
            } // end if
            return;
        } // end if
        if (this.delayCheck()) {
            this.skill_delay(action);
            return;
        } // end if
        if (this.status_3 == "roll") {
            return;
        } // end if
        if (this.skill_start(action)) {
            if (this.opp["checkDefend"]) {
                this.opp["checkDefend"].call(this.opp);
            }
            return;
        }
        else {
            return;
        } // end else if
    } // End of the function

    /**开始释放技能 */
    public skill_start(action: string) {
        if (this[action] != undefined) {
            if (this.toStatus(action)) {
                this.powerDec();
                this.powerDec2();
                this.skill_last = this.skill_last0;
                this.skill_last0 = action;
                return (true);
            }
            else {
                this.powerDecType = "";
                this.powerDecType2 = "";
            } // end else if
        }
        else if (this.status_2 == "land" && (this.status_3 == "normal" || this.status_3 == "attack")) {
            if (this.toStatus(action)) {
                this.powerDec();
                this.powerDec2();
                this.status_3 = "attack";
                this.skill_last = this.skill_last0;
                this.skill_last0 = action;
                return (true);
            }
            else {
                this.powerDecType = "";
                this.powerDecType2 = "";
            } // end else if
        } // end else if
    } // End of the function


    public switchSkill(action) {
        this.toSkill(action, true);
    } // End of the function

    public toAction(action: string) {
        if (_level0.inPause) {
            return;
        } // end if
        this.toStatus(action);
        if (this.opp['actionDefend']) {//AI
            this.opp['actionDefend'](action);
        }

    } // End of the function

    //     public keyUp(obj)
    // {
    //     let _loc1 = obj.upKey;
    // } // End of the function

    public statusClear() {
        this.status_1 = "stand";
        this.status_2 = "land";
        this.status_3 = "normal";
        this.status_4 = "normal";
        this.status_5 = "normal";
        this.holdFreeze = false;
        this.inCount = false;
        this.onHit = false;
        this.checkTouch_stop = false;
        this.superSkill = false;
        this.isBurstSkill = false;
        // this.run_snd.stop();
    } // End of the function


    /**true表明扣除能量 */
    public toStatus(action: string): boolean {
        if (_level0.inPause) {
            return false;
        } // end if
        if (_level0.inFreeze) {
            this.skill_delay(action);
            this.bodyMC.stop();
            return false;
        } // end if
        if (this[action] != undefined) {
            if (this[action]() == false) {
                return false;
            }
        }
        else {
            this.status_1 = action;
            this.mc.gotoAndStop(action);
        } // end else if
        // run_snd.stop();
        return true;
    } // End of the function


    public toStatus_switch(act: string) {
        if (this.status_3 == "hurt") {
            return;
        } // end if
        if (act == "stand" && this.y != this.land_Y) {
            this.y = this.land_Y;
        }
        this.statusClear();
        this.checkSide();
        this.showHits_end();
        if (this.delaySkill != "") {
            this.toSkill(this.delaySkill);
            this.delaySkill = "";
            return;
        } // end if

        if (this.keyCtrl.key.isDown(this._upButton)) {
            act = "jump";
        }
        else if (this.keyCtrl.key.isDown(this._downButton)) {
            act = "squat";
        }
        else if (this.keyCtrl.key.isDown(this._frontButton)) {
            if (this.dir == 1) {
                act = "walk_f";
            }
            else {
                if (this.opp.status_3 == "attack" || this.opp.hasObj()) {
                    this.hold_u();
                    return;
                } // end if
                act = "walk_b";
            } // end else if
        }
        else if (this.keyCtrl.key.isDown(this._backButton)) {
            if (this.dir == 1) {
                if (this.opp.status_3 == "attack" || this.opp.hasObj()) {
                    this.hold_u();
                    return;
                } // end if
                act = "walk_b";
            }
            else {
                act = "walk_f";
            } // end else if
        }
        else if (this.keyCtrl.key.isDown(this._punchButton)) {
            act = "punch";
        }
        else if (this.keyCtrl.key.isDown(this._kickButton)) {
            act = "kick";
        } // end else if
        this.toStatus(act);
    } // End of the function

    public delayCheck() {
        let _loc2 = this.input_pre[this.status_1];
        if (_loc2 == undefined) {
            return false;
        } // end if
        let _loc3 = (<zmovie.ZMovieClip>this.mc.$children[0]).getCurrFrame();
        if (_loc3 > _loc2) {
            return true;
        } // end if
        return false;
    } // End of the function

    /**推迟释放技能 */
    public skill_delay(action: string) {
        this.delaySkill = action;
    } // End of the function

    /**重新释放推迟技能 */
    public skill_restart() {
        if (this.delaySkill != "") {
            if (this.toStatus(this.delaySkill)) {
                this.powerDec();
                this.powerDec2();
            }
            else {
                this.powerDecType = "";
                this.powerDecType2 = "";
            } // end else if
            this.delaySkill = "";
        } // end if
    } // End of the function

    public shakeCheck() {
        //     _level0.shake_mc.shakeStart(hurtValue.shake);
    } // End of the function


    /**检查是否满足摔技的条件 */
    public checkTouch(dv: number): boolean {
        if (this.checkTouch_stop || this.opp.checkTouch_stop) {
            return false;
        } // end if
        if (this.status_2 != "air" && this.opp.status_2 == "air") {
            return false;
        } // end if
        if (this.status_3 == "roll" || this.opp.status_3 == "roll") {
            return false;
        } // end if
        let _loc5;
        let _loc2;
        let _loc4;
        let _loc3;
        if (this.y > this.opp.y - 120) {
            _loc3 = this.opp.x;
            _loc4 = this.x + dv;
            if (this.scaleX > 0) {
                if (_loc4 > _loc3 - this.opp_width2 && _loc4 < _loc3 + 10) {
                    _loc5 = _loc4 - (_loc3 - this.opp_width2);
                    if (this.opp.onEdge) {
                        _loc2 = _loc5;
                    }
                    else {
                        _loc2 = Math.floor(_loc5 / 2);
                    } // end else if
                    this.do_move2(-_loc2);
                    this.opp.do_move2(_loc2);
                    return true;
                }
                else if (_loc4 >= _loc3 + 10 && _loc4 < _loc3 + this.opp_width2) {
                    _loc5 = _loc4 - (_loc3 + this.opp_width2);
                    if (this.opp.onEdge) {
                        _loc2 = _loc5;
                    }
                    else {
                        _loc2 = Math.floor(_loc5 / 2);
                    } // end else if
                    this.do_move2(-_loc2);
                    this.opp.do_move2(_loc2);
                    return true;
                } // end else if
            }
            else if (this.scaleX < 0) {
                if (_loc4 >= _loc3 - 10 && _loc4 < _loc3 + this.opp_width2) {
                    _loc5 = _loc4 - (_loc3 + this.opp_width2);
                    if (this.opp.onEdge) {
                        _loc2 = _loc5;
                    }
                    else {
                        _loc2 = Math.floor(_loc5 / 2);
                    } // end else if
                    this.do_move2(-_loc2);
                    this.opp.do_move2(_loc2);
                    return true;
                }
                else if (_loc4 > _loc3 - this.opp_width2 && _loc4 < _loc3 - 10) {
                    _loc5 = _loc4 - (_loc3 - this.opp_width2);
                    if (this.opp.onEdge) {
                        _loc2 = _loc5;
                    }
                    else {
                        _loc2 = Math.floor(_loc5 / 2);
                    } // end else if
                    this.do_move2(-_loc2);
                    this.opp.do_move2(_loc2);
                    return true;
                } // end if
            } // end else if
        } // end else if
        return false;
    } // End of the function


    public bodyTouch() {
        let _loc2 = this.checkTouch2();
        if (_loc2 != null) {//已碰撞
            this.VbodyTouch = _loc2;
            this.do_bodyTouch();
        } // end if
    } // End of the function

    /**人物身体碰撞检测*/
    public do_bodyTouch() {
        this.DEBUG_LOG("[location][x]do_bodyTouch")
        // this.render_mc_action = this.render_do_bodyTouch;
        // this.render_mc_action_params = [];
        this.render_position_x = this.render_do_bodyTouch;
        this.render_position_x_params = [];
    }

    /**帧事件实现人物身体碰撞检测 */
    public render_do_bodyTouch() {
        if (_level0.inPause) {
            return;
        } // end if
        if (this.VbodyTouch > 0) {
            this.VbodyTouch = Math.floor(this.VbodyTouch / 2);
        } else {
            this.VbodyTouch = Math.ceil(this.VbodyTouch / 2);
        }
        this.do_move2(this.VbodyTouch);
        if (this.VbodyTouch == 0) {
            this.DEBUG_LOG("[location][x]do_bodyTouch init undefined")
            // this.render_mc_action = undefined;
            this.render_position_x = undefined;
        } // end if
    } // End of the function

    /**检测人物身体是否碰撞
     * 前提:y坐标相同
     */
    public checkTouch2(): number {
        let _loc2 = this.x - this.opp.x;
        let _loc3: number;
        if (_loc2 > -50 && _loc2 < 0) {
            _loc3 = -50 - _loc2;
            return _loc3;
        } // end if
        if (_loc2 < 50 && _loc2 >= 0) {
            _loc3 = 50 - _loc2;
            return _loc3;
        } // end if
        return null;
    } // End of the function




    /**边界检测 */
    public edgecheck(v: number): boolean {
        let roles_distance = Math.abs(this.x - this.opp.x + v);//两位玩家之间的距离,用于战斗窗口检测
        if (this.x + v + this.width / 2 >= this.edge_max && v > 0) {//向右移动到达地图右边界
            // console.log("到达地图右边界", "RUNID:", FightMainRender.getInstance().getRunID(), this.x, v, this.width, this.edge_max);
            this.onEdge = true;
            this.edge = 1;
            return true;
        } // end if
        if (this.x + v - this.width / 2 <= this.edge_min && v < 0) {//向左移动到达地图左边界
            // console.log("到达地图左边界,", "RUNID:", FightMainRender.getInstance().getRunID(), this.x, v, this.width, this.edge_min);
            this.onEdge = true;
            this.edge = -1;
            return true;
        } // end if
        //人物边界检测,与Fightwidth有关
        if (v > 0 && this.parent.localToGlobal(this.x + this.width / 2 + v).x >= GameConfig.FightWidth) {
            this.onEdge = true;
            this.edge = 1;
            // console.log("人物到达战斗窗口右边界", "RUNID:", FightMainRender.getInstance().getRunID(), this.parent.localToGlobal(this.x + this.width / 2 + v).x, GameConfig.FightWidth);
            return true;
        }
        if (v < 0 && this.localToGlobal(v - this.width / 2).x <= 1) {
            this.onEdge = true;
            this.edge = -1;
            // console.log("人物到达战斗窗口左边界", "RUNID:", FightMainRender.getInstance().getRunID(), this.localToGlobal(v - this.width / 2).x);
            return true;
        }
        this.onEdge = false;
        this.edge = 0;
        return false;
    } // End of the function

    public mask_red() {
        var square: egret.Shape = new egret.Shape();
        square.graphics.beginFill(0xff0000);
        square.graphics.drawRect(-100, -400, 400, 400);
        square.graphics.endFill();
        square.alpha = 1;
        this.addChild(square);
        this.mask_colorRed = square;
    }
    // public colorChange(cc)
    // {
    //     let _loc3 = new Color(this);
    //     let _loc2 = colorObj[cc];
    //     _loc3.setTransform(_loc2);
    // } // End of the function


    // public colorNormal()
    // {
    //     if (_level0.inPause) {
    //         clearInterval(color_timer2);
    //         color_timer2 = setInterval(this, "colorNormal", 100);
    //         return;
    //     } // end if
    //     let _loc3 = new Color(this);
    //     let _loc2 = colorObj.normal;
    //     _loc3.setTransform(_loc2);
    //     clearInterval(color_timer2);
    // } // End of the function


    // public changeColorSelf(cc, time_f)
    // {
    //     clearInterval(color_timer2);
    //     let _loc3 = new Color(this);
    //     let _loc2 = colorObj[cc];
    //     _loc3.setTransform(_loc2);
    //     color_timer2 = setInterval(this, "backColorSelf", time_f);
    // } // End of the function


    public changeColor(cc, time_f) {
        // this.opp.changeColorSelf(cc, time_f);
    } // End of the function


    // public backColorSelf()
    // {
    //     if (_level0.inPause) {
    //         clearInterval(color_timer2);
    //         color_timer2 = setInterval(this, "backColorSelf", 100);
    //         return;
    //     } // end if
    //     let _loc3 = new Color(this);
    //     let _loc2 = colorObj.normal;
    //     _loc3.setTransform(_loc2);
    //     clearInterval(color_timer2);
    // } // End of the function


    // public backColor()
    // {
    //     let _loc3 = new Color(this.opp);
    //     let _loc2 = colorObj.normal;
    //     _loc3.setTransform(_loc2);
    //     clearInterval(color_timer);
    // } // End of the function

    public topLayer() {
        // if (_parent.getDepth() < this.opp._parent.getDepth()) {
        //     _parent.swapDepths(this.opp._parent);
        // } // end if
    } // End of the function


    /**是否拥有子技能:如火焰,气波等 */
    public hasObj(): boolean {
        if (this.skill_loader.length > 0) {
            return true;
        } else {
            return false;
        }
    } // End of the function

    /**获得最后一个子技能 */
    public getObj(): zmovie.ZMovieClip {
        let lastone = this.skill_loader.length - 1;
        if (lastone < 0) {
            return;
        } // end if
        return this.skill_loader[lastone].skill_mc;
    } // End of the function


    public getObjNum(): number {
        return this.skill_loader.length;
    } // End of the function

    /**获得与对方子技能的距离 */
    public getObjDis(): number {
        let lastone = this.skill_loader.length - 1;
        if (lastone < 0) {
            return undefined;
        } // end if
        if (this.skill_loader[lastone].skill_mc.stage == null) {
            return
        }
        let obj_x = this.skill_loader[lastone].skill_mc.x;
        if (obj_x == undefined || isNaN(obj_x)) {
            return undefined;
        } // end if
        return (Math.abs(obj_x - this.opp.x));
    } // End of the function

    /**实现P_L+K_L动作 */
    public to_PK_l() {
        if (this.dir == 1) {
            if (this.keyCtrl.key.isDown(this._frontButton)) {
                this.toAction("roll_f");
            }
            else if (this.keyCtrl.key.isDown(this._backButton)) {
                this.toAction("roll_b");
            }
            else {
                this.toAction("roll_f");
            } // end else if
        }
        else if (this.dir == -1) {
            if (this.keyCtrl.key.isDown(this._frontButton)) {
                this.toAction("roll_b");
            }
            else if (this.keyCtrl.key.isDown(this._backButton)) {
                this.toAction("roll_f");
            }
            else {
                this.toAction("roll_f");
            } // end else if
        } // end else if
    } // End of the function

    /**实现P+K动作 */
    public to_PK() {
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            this.jumpSkill("heavyHit");
            return;
        } // end if
        this.toSkill("heavyHit");
    } // End of the function

    /**实现爆发动作 */
    public to_key_burst() {
        if (this.mode_key == "easy" && this.inBurst) {
            if (this.keyCtrl.key.isDown(this._frontButton) && this.dir == 1) {
                this.toSkill(this.skillObj.busrt_a);
            }
            else if (this.keyCtrl.key.isDown(this._backButton) && this.dir == -1) {
                this.toSkill(this.skillObj.busrt_a);
            }
            else if (this.keyCtrl.key.isDown(this._frontButton) && this.dir == -1) {
                this.toSkill(this.skillObj.busrt_d);
            }
            else if (this.keyCtrl.key.isDown(this._backButton) && this.dir == 1) {
                this.toSkill(this.skillObj.busrt_d);
            }
            else {
                this.toSkill(this.skillObj.busrt_a);
            } // end else if
        }
        else if (this.keyCtrl.key.isDown(this._frontButton) && this.dir == 1) {
            this.toAction("burst_a");
        }
        else if (this.keyCtrl.key.isDown(this._backButton) && this.dir == -1) {
            this.toAction("burst_a");
        }
        else if (this.keyCtrl.key.isDown(this._frontButton) && this.dir == -1) {
            this.toAction("burst_d");
        }
        else if (this.keyCtrl.key.isDown(this._backButton) && this.dir == 1) {
            this.toAction("burst_d");
        }
        else if (this.keyCtrl.key.isDown(this._downButton)) {
            this.toAction("burst_p");
        }
        else {
            this.toAction("burst_p");
        } // end else if

    } // End of the function


    /**实现roll动作 */
    public to_key_roll() {
        if (this.dir == 1) {
            if (this.keyCtrl.key.isDown(this._frontButton)) {
                this.toAction("roll_f");
            }
            else if (this.keyCtrl.key.isDown(this._backButton)) {
                this.toAction("roll_b");
            }
            else {
                this.toAction("roll_f");
            } // end else if
        }
        else if (this.dir == -1) {
            if (this.keyCtrl.key.isDown(this._frontButton)) {
                this.toAction("roll_b");
            }
            else if (this.keyCtrl.key.isDown(this._backButton)) {
                this.toAction("roll_f");
            }
            else {
                this.toAction("roll_f");
            } // end else if
        } // end else if
    } // End of the function
} // End of the class

