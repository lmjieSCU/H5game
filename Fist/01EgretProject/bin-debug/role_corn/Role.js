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
var Role = (function (_super) {
    __extends(Role, _super);
    function Role() {
        var _this = _super.call(this) || this;
        _this.frameCount_temp = 0;
        _this.record_action_totalFrame = ["stand", "walk_f", "walk_b", "dash_f", "dash_b", "land", "land2", "squat"];
        _this.record_filter_array = ["stand", "walk_f", "walk_b", "land", "land2", "squat"];
        _this.frameOffset = 1;
        _this.delaySkill = "";
        _this.frame_t = 33;
        _this.frame_t2 = 80;
        _this.winTimes = 0;
        _this.side_offset = 30;
        _this.depth_shadow = 55;
        _this.airHits_max = 4;
        _this.roleMode = 1;
        _this.land_Y = 440;
        _this.hitValue = new HitValue();
        _this.hurtValue = new HitValue();
        _this.isKO = false;
        _this.KO_checked = false; //过去一次检测KO值
        _this.played = false; //继承使用
        _this.inRecord = false;
        _this.inReplay = false;
        _this.holdFreeze = false;
        _this.control = false;
        _this.checkTouch_stop = false;
        _this.dir = 1;
        _this.hits = 0;
        _this.status_1 = "stand";
        _this.status_2 = "land";
        _this.status_3 = "normal"; //可取值为attack,roll,down(未起身),hurt,normal,""
        _this.status_4 = "normal"; //可取值为hold,normal
        _this.status_5 = "normal";
        _this.suspend = false; //暂停
        _this.power_skillSuper = 80;
        _this.power_skillBurst = 110;
        _this.power_cancle = 30;
        //=========================特效=================================
        _this.skill_loader = [];
        _this.render_mc_action_params = [];
        _this.render_bodyMC_action_params = []; //源码中绑定this.mc.onEnterFrame
        _this.render_hitcheckflying_action_params = [];
        _this.old_mcplay_frame = -1; //每个英雄不同
        _this.old_bodyMC_frame = -1;
        _this.render_position_x_params = [];
        _this.render_position_y_params = [];
        //======================================测试使用变量========================
        _this.action_reptimes = 0;
        _this.action_old = "";
        //======================================普通连招变量========================
        _this.CommonSeries = [];
        _this.CommonSeriesTime = 0;
        _this.CommonSeriesNum = 0;
        _this.lifeObj = { target: _this };
        _this.powerObj = { target: _this };
        _this.hitsObj = { target: _this };
        _this.hitsArray = new Array();
        _this.winPoseArray = ["end"];
        _this.skillObj = new Object();
        // Vg = _level0.g;
        _this.Vg = 5;
        _this.Va = 3;
        _this.colorObj = new Object();
        _this.colorObj.normal = { ra: "100", rb: "0", ga: "100", gb: "0", ba: "100", bb: "0", aa: "100", ab: "0" };
        _this.colorObj.fire = { ra: "100", rb: "255", ga: "100", gb: "110", ba: "100", bb: "0", aa: "100", ab: "0" };
        _this.colorObj.white = { ra: "100", rb: "255", ga: "100", gb: "255", ba: "100", bb: "255", aa: "100", ab: "255" };
        _this.colorObj.fire_blue = { ra: "100", rb: "0", ga: "100", gb: "0", ba: "100", bb: "255", aa: "100", ab: "0" };
        _this.colorObj.light1 = { ra: "-65", rb: "200", ga: "-65", gb: "200", ba: "100", bb: "255", aa: "100", ab: "0" };
        _this.colorObj.light2 = { ra: "-65", rb: "200", ga: "-65", gb: "200", ba: "-100", bb: "255", aa: "100", ab: "0" };
        _this.input_pre = new Object();
        _this.input_pre.roll_f = 10;
        _this.input_pre.roll_b = 10;
        _this.input_pre.land = 0;
        _this.input_pre.land2 = 0;
        _this.input_pre.land3 = 0;
        _this.input_pre.getup1 = 20;
        _this.input_pre.getup2 = 20;
        return _this;
        //this.mask_red();
    } // End of the function
    /**实现键位匹配,由继承类实现 */
    Role.prototype.setKey = function () {
    };
    Role.prototype.DEBUG_LOG = function (message) {
        // if (_level0.deepCompare(this, _level0.P1_role)) {
        //     console.log("P1:", message);
        // }
        // else {
        //     console.log("P2:", message);
        // }
    };
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
    Role.prototype.FrameEvent_change_location = function () {
        return this.mc.getCurrFrame() != this.old_mcplay_frame || this.bodyMC.getCurrFrame() != this.old_bodyMC_frame;
    };
    Role.prototype.FrameEvent_refresh_location = function () {
        this.old_mcplay_frame = this.mc.getCurrFrame();
        this.old_bodyMC_frame = this.bodyMC.getCurrFrame();
        return;
    };
    Role.prototype.start = function () {
        FightMainRender.getInstance().Add(this, this.renderAnimate);
        return;
    }; // End of the function
    /**帧驱动*/
    Role.prototype.renderAnimate = function () {
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
        this.checkSide(); //实现自动转向
        this.checkTouch(0); //实现人物体积碰撞
        this.checkFrameEvent(); //由帧事件驱动人物进入新帧
    };
    /**进入新一帧时调用*/
    Role.prototype.checkFrameEvent = function () {
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
            this.renderSkill_loader(); //此情况不渲染人物进入下一帧
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
    };
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
    Role.prototype.render_onEnterFrame_Calling = function () {
        if (this.render_mc_action != undefined) {
            (_a = this.render_mc_action).call.apply(_a, [this].concat(this.render_mc_action_params));
        }
        if (this.render_bodyMC_action != undefined) {
            (_b = this.render_bodyMC_action).call.apply(_b, [this].concat(this.render_bodyMC_action_params));
        }
        var _a, _b;
    };
    /**实现坐标变化 */
    Role.prototype.render_Position = function () {
        if (this.render_position_x != undefined) {
            (_a = this.render_position_x).call.apply(_a, [this].concat(this.render_position_x_params));
        }
        if (this.render_position_y != undefined) {
            (_b = this.render_position_y).call.apply(_b, [this].concat(this.render_position_y_params));
        }
        var _a, _b;
    };
    /**实现打击碰撞 */
    Role.prototype.render_Hitchecks = function () {
        if (this.render_hitcheck_action != undefined) {
            this.render_hitcheck_action.call(this.render_hitcheck_instance);
        }
        if (this.hitcheckobj_action != undefined) {
            this.hitcheckobj_action.call(this.render_hitcheckobj_instance);
        }
        if (this.hitcheckflying_action != undefined) {
            (_a = this.hitcheckflying_action).call.apply(_a, [this.hitcheckflying_instance].concat(this.render_hitcheckflying_action_params));
        }
        var _a;
    };
    /**实现AI控制 */
    Role.prototype.render_Cpucontrol = function () {
        if (this.render_AI_control != undefined) {
            // this.render_AI_control.call(this);
        }
    };
    /**实现人物动画 */
    Role.prototype.renderMcAnimate = function () {
        if (this.inFreeze) {
            return;
        }
        if (this.bodyMC._nextFrameStop) {
            EventUtil.renderChildren(this.bodyMC);
        }
        else {
            this.bodyMC.nextFrame();
        }
    };
    /**实现子骨骼动画 */
    Role.prototype.renderSkill_loader = function () {
        if (this.inFreeze) {
            return;
        }
        for (var index in this.skill_loader) {
            if (isNaN(this.skill_loader[index].skill_mc.x) || isNaN(this.skill_loader[index].skill_mc.y)) {
                this.skill_loader.splice(Number(index), 1);
            }
            else if (this.skill_loader[index].skill_mc.stage) {
                this.skill_loader[index].renderMcAnimate();
            }
            else {
                this.skill_loader.splice(Number(index), 1);
            }
        }
    };
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
    Role.prototype.to_kick = function () {
    }; // End of the function
    Role.prototype.to_kick_l = function () {
    }; // End of the function
    Role.prototype.to_punch = function () {
    }; // End of the function
    Role.prototype.to_punch_l = function () {
    }; // End of the function
    Role.prototype.to_double_front = function () {
        this.toAction("dash_f");
    }; // End of the function
    Role.prototype.to_double_back = function () {
        this.toAction("dash_b");
    }; // End of the function
    Role.prototype.to_double_down = function () {
    }; // End of the function
    /*************************************************************************************************/
    /*************************************************************************************************/
    /******************基本动作************************* */
    /*************************************************************************************************/
    /*************************************************************************************************/
    /**站立 */
    Role.prototype.stand = function () {
        this.statusClear();
        this.mc.gotoAndStop("stand");
        return true;
    }; // End of the function
    /**向前走*/
    Role.prototype.walk_f = function () {
        if (this.status_2 != "land" || this.status_3 != "normal" || this.status_1 == "squat" || this.holdFreeze) {
            return false;
        } // end if
        this.Vx = this.dir * this.Vwalk;
        this.mc.gotoAndStop("walk_f");
        this.status_1 = "walk_f";
        this.move_walkRun();
        return true;
    }; // End of the function
    /**向后走 and 防御*/
    Role.prototype.walk_b = function () {
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
    }; // End of the function
    /**向前猛冲:双方向键 */
    Role.prototype.dash_f = function () {
        if (this.status_2 != "land" || this.status_3 != "normal" || this.status_1 == "squat" || this.holdFreeze) {
            return false;
        } // end if
        this.Vx = this.dir * this.Vdash;
        this.mc.gotoAndStop("dash_f");
        this.status_1 = "dash_f";
        this.move_walkRun();
        return true;
    }; // End of the function
    /**向后猛冲 */
    Role.prototype.dash_b = function () {
        if (this.status_2 != "land" || this.status_3 != "normal" || this.status_1 == "squat" || this.holdFreeze) {
            return false;
        } // end if
        this.mc.gotoAndStop("dash_b");
        this.status_1 = "dash_b";
        this.Vx = -26;
        this.Vy = 17;
        return true;
    }; // End of the function
    /**向前闪避  */
    Role.prototype.roll_f = function () {
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
        else if (this.inBurst && this.burst_mode == "attack" && this.holdFreeze) {
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
    }; // End of the function
    /**向后滚动*/
    Role.prototype.roll_b = function () {
        if (this.status_1 == "getup1" || this.status_1 == "getup2") {
            if (this.bodyMC.getCurrFrame() < 4 && this.status_5 == "hitDown") {
                this.roll_down();
                return true;
            }
            else {
                return false;
            }
        }
        else if (this.status_2 != "land") {
            return false;
        }
        else if (this.inBurst && this.burst_mode == "attack" && this.holdFreeze) {
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
    }; // End of the function
    /**滚动*/
    Role.prototype.roll_down = function () {
        this.DEBUG_LOG("location: roll down init undefined");
        // this.render_mc_action = undefined;
        this.render_position_x = undefined; //roll时被击中
        this.status_2 = "";
        this.y = this.land_Y;
        this.Vx = -20;
        this.mc.gotoAndStop("roll_b");
        this.status_1 = "roll_b";
        this.status_3 = "roll";
    }; // End of the function
    /**站防 */
    Role.prototype.hold_u = function () {
        if (this.status_2 != "land" || this.status_3 != "normal") {
            return false;
        } // end if
        this.mc.gotoAndStop("hold_u");
        this.status_1 = "hold_u";
        this.status_4 = "hold";
        this.move_hold();
        return true;
    }; // End of the function
    /**蹲防*/
    Role.prototype.hold_d = function () {
        if (this.status_2 != "land" || this.status_3 != "normal") {
            return false;
        } // end if
        this.mc.gotoAndStop("hold_d");
        this.status_1 = "hold_d";
        this.status_4 = "hold";
        this.move_hold();
        return true;
    }; // End of the function
    /**蹲*/
    Role.prototype.squat = function () {
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
    }; // End of the function
    /**跳*/
    Role.prototype.jump = function () {
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
    }; // End of the function
    /**竖直方向上跳跃 */
    Role.prototype.jump_u = function () {
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
    }; // End of the function
    /**向前跳跃 指令:up+front*/
    Role.prototype.jump_f = function () {
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
    }; // End of the function
    /**向后跳跃 指令:back+front*/
    Role.prototype.jump_b = function () {
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
    }; // End of the function
    /**着地*/
    Role.prototype.land = function () {
        this.status_2 = "toLand";
        this.status_3 = "normal";
        this.status_1 = "land";
        this.mc.gotoAndStop("land");
        _level0.effect_mc.downEff("down1", this);
        return true;
    }; // End of the function
    /**着地*/
    Role.prototype.land2 = function () {
        this.status_2 = "toLand";
        this.status_3 = "normal";
        this.status_1 = "land2";
        this.mc.gotoAndStop("land2");
        _level0.effect_mc.downEff("down2", this);
        return true;
    }; // End of the function
    /**着地*/
    Role.prototype.land3 = function () {
        this.status_2 = "toLand";
        this.status_3 = "normal";
        this.status_1 = "land3";
        this.mc.gotoAndStop("land3");
        _level0.effect_mc.downEff("down3", this);
        return true;
    }; // End of the function
    /**起身*/
    Role.prototype.getup1 = function () {
        this.status_2 = "toLand";
        this.status_3 = "down";
        this.status_1 = "getup1";
        this.mc.gotoAndStop("getup1");
        return true;
    }; // End of the function
    /**起身*/
    Role.prototype.getup2 = function () {
        this.status_2 = "toLand";
        this.status_3 = "down";
        this.status_1 = "getup2";
        this.mc.gotoAndStop("getup2");
        return true;
    }; // End of the function
    /**被击*/
    Role.prototype.hurt3 = function () {
        this.status_1 = "hurt3";
        this.status_3 = "hurt";
        this.status_2 = "air";
        this.mc.gotoAndStop(this.status_1);
        return true;
    }; // End of the function
    /**轻拳 指令:punch*/
    Role.prototype.punch = function () {
        if (this.status_2 == "air") {
            return false;
        } // end if
        if (this.CommonSeriesNum == this.CommonSeries.length) {
            this.CommonSeriesNum = 0;
        }
        var action = this.CommonSeries[this.CommonSeriesNum];
        this.status_1 = action;
        this.CommonSeriesNum++;
        this.CommonSeriesTime = 35;
        this.mc.gotoAndStop(this.status_1);
        //this.do_move(32*this.dir);
        this.status_3 = "attack";
        FightMainRender.getInstance().Add(this, this.combo_time);
        return true;
    }; // End of the function
    Role.prototype.combo_time = function () {
        if (this.inFreeze) {
            return;
        }
        if (this.status_3 == "hurt" || this.CommonSeriesTime < 0) {
            this.CommonSeriesNum = 0;
            FightMainRender.getInstance().Remove(this, this.combo_time);
        }
        else {
            --this.CommonSeriesTime;
        }
    };
    /**轻拳 指令:punch and 靠近对手*/
    Role.prototype.punch2 = function () {
        if (this.status_2 == "air") {
            return false;
        } // end if
        this.status_1 = "punch2";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
        return true;
    }; // End of the function
    /**重拳 指令:U*/
    Role.prototype.punch_l = function () {
        if (this.status_2 != "land") {
            return false;
        } // end if
        this.status_1 = "punch_l";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
        return true;
    }; // End of the function
    /**踢 指令:K */
    Role.prototype.kick = function () {
        if (this.status_2 != "land") {
            return false;
        } // end if
        this.status_1 = "kick";
        this.mc.gotoAndStop(this.status_1);
        this.status_3 = "attack";
        return true;
    }; // End of the function
    /**踢 指令:K and 靠近对手*/
    Role.prototype.kick2 = function () {
        if (this.status_2 != "land") {
            return false;
        } // end if
        this.mc.gotoAndStop("kick2");
        this.status_1 = "kick2";
        this.status_3 = "attack";
        return true;
    }; // End of the function
    /**重踢* 指令:I*/
    Role.prototype.kick_l = function () {
        if (this.status_2 != "land") {
            return false;
        } // end if
        this.mc.gotoAndStop("kick_l");
        this.status_1 = "kick_l";
        this.status_3 = "attack";
        return true;
    }; // End of the function
    /**空中攻击*/
    Role.prototype.jumpSkill = function (act) {
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
    }; // End of the function
    /**摔 破防技*/
    Role.prototype.pitch = function () {
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
    }; // End of the function
    /**爆发
     * 分为力量型爆发/技巧型爆发/防御型爆发
    */
    Role.prototype.burst = function (bursttype) {
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
    }; // End of the function
    /**技巧型爆发*/
    Role.prototype.burst_a = function () {
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
    }; // End of the function
    /**防御型爆发*/
    Role.prototype.burst_d = function () {
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
    }; // End of the function
    /**力量型爆发*/
    Role.prototype.burst_p = function () {
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
    }; // End of the function
    Role.prototype.sk_burst_a = function () {
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
    }; // End of the function
    Role.prototype.sk_burst_d = function () {
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
    }; // End of the function
    Role.prototype.sk_record = function () {
        if (this.status_2 != "land") {
            return false;
        } // end if
        this.skill_replay_start();
        return true;
    }; // End of the function
    /**重击 指令:front+kick_l/punch_l */
    Role.prototype.heavyHit = function () {
        if (this.status_2 != "land") {
            return false;
        } // end if
        this.status_1 = "heavyHit";
        this.status_3 = "attack";
        this.mc.gotoAndStop(this.status_1);
        return true;
    }; // End of the function
    /**x轴移动人物
     * 负责人物x坐标变化
    */
    Role.prototype.move_walkRun = function () {
        this.DEBUG_LOG("location:move_walkRun");
        this.render_position_x = this.render_move_walkRun;
        this.render_position_x_params = [];
        // this.render_mc_action = this.render_move_walkRun;
        // this.render_mc_action_params = [];
    };
    /**通过帧事件持续移动人物*/
    Role.prototype.render_move_walkRun = function () {
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
    }; // End of the function
    /**蹲*/
    Role.prototype.move_squat = function () {
        // this.DEBUG_LOG("move_squat init mc to move_squat")
        this.render_position_x = undefined;
        this.render_mc_action = this.render_move_squat;
        this.render_mc_action_params = [];
    };
    /**通过帧事件持续保持人物蹲*/
    Role.prototype.render_move_squat = function () {
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
    }; // End of the function
    /**检查是否满足防御要求 */
    Role.prototype.check_hold_d = function () {
        if (this.opp.status_3 == "attack") {
            if (this.dir == 1 && this.keyCtrl.key.isDown(this._backButton) || this.dir == -1 && this.keyCtrl.key.isDown(this._frontButton)) {
                this.hold_d();
                return true;
            } // end if
        } // end if
        return false;
    }; // End of the function
    /**防御*/
    Role.prototype.move_hold = function () {
        this.render_bodyMC_action = this.render_move_hold;
        this.render_bodyMC_action_params = [];
    };
    Role.prototype.render_move_hold = function () {
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
    ;
    Role.prototype.do_holdFreeze = function () {
        this.holdFreeze = true;
        this.delaySkill = "";
        FightMainRender.getInstance().Add(this, this.render_freeze_timer);
    };
    Role.prototype.render_freeze_timer = function () {
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
    ;
    /**退出防御状态 */
    Role.prototype.hold_end = function () {
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
    }; // End of the function
    /**移动人物*/
    Role.prototype.do_move = function (Vx) {
        this.do_move2(Vx);
    }; // End of the function
    /**移动人物*/
    Role.prototype.do_move2 = function (Vx) {
        if (this.edgecheck(Vx)) {
            return;
        } // end if
        if (isNaN(Vx)) {
            console.log("errry Vx==NaN");
            return;
        }
        this.x = this.x + Vx;
        BgScene.moveX(Vx, this);
    }; // End of the function
    /*********************************************************************************************************** */
    /*********************************************************************************************************** */
    /**以下未在role中调用的函数会在骨骼帧事件以及单帧事件中调用 */
    /*********************************************************************************************************** */
    /*********************************************************************************************************** */
    //手动增加_parentRole.stop_move_X1();
    //修改特效移除方法:弃用removeEffect 改为parent.removechild
    //
    /**在x轴移动人物 */
    Role.prototype.start_move_X1 = function (v, obj) {
        var Vx = 0;
        Vx = v == 0 ? (this.dir * this.Vx) : (this.dir * v);
        this.DEBUG_LOG("location: init to start_move_x1");
        // this.render_mc_action = this.render_start_move_X1;
        // this.render_mc_action_params = [Vx, obj];
        this.render_start_move_X1(Vx, obj);
        // this.render_position_x = this.render_start_move_X1;
        // this.render_position_x_params = [Vx, obj];
    };
    /**通过帧事件在x轴移动任务
     * arg0:x轴移动速度
     * arg1:控制对象
     */
    Role.prototype.render_start_move_X1 = function (Vx, obj) {
        if (_level0.inPause) {
            return;
        } // end if
        if (this.inFreeze) {
            return;
        } // end if
        this.do_move(Vx);
        if (obj == null || obj == undefined || obj.Vx == undefined) {
            this.DEBUG_LOG("[location][x]render_start_move_x1 init to undefined1");
            // this.render_mc_action = undefined;
            this.render_position_x = undefined;
        } // end if
    }; // End of the function
    /**停止在x轴移动人物 */
    Role.prototype.stop_move_X1 = function () {
        this.DEBUG_LOG("[location][x]render_start_move_x1 init to undefined2");
        // this.render_mc_action = undefined;
        this.render_position_x = undefined;
    }; // End of the function
    /**在x轴移动人物 */
    Role.prototype.start_move_X2 = function (v) {
        this.DEBUG_LOG("[location][x]start_move_X2");
        this.Vx = v;
        // this.render_mc_action = this.render_start_move_X2;
        // this.render_mc_action_params = [];
        this.render_start_move_X2();
        // this.render_position_x = this.render_start_move_X2;
        // this.render_position_x_params = [];
    };
    /**通过帧事件在x轴移动任务
     * arg0:x轴移动速度
     * arg1:控制对象
     */
    Role.prototype.render_start_move_X2 = function () {
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
    }; // End of the function
    /**停止在x轴移动人物 */
    Role.prototype.stop_move_X2 = function () {
        // this.render_mc_action = undefined;
        this.render_position_x = undefined;
        this.DEBUG_LOG("[location][x]render_start_move_X2 init undefined2");
    }; // End of the function
    /**在y轴移动人物 */
    Role.prototype.start_move_Y1 = function (y, x, end, g) {
        if (end === void 0) { end = null; }
        if (g === void 0) { g = null; }
        this.status_2 = "air";
        this.Vy = y;
        this.Vx = this.dir * x;
        var Vg2;
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
    };
    /**通过帧事件在y轴移动实现下降
     * arg0:y轴移动速度
     * arg1:落地状态
     */
    Role.prototype.render_start_move_Y1 = function (Vg2, end_status) {
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
    }; // End of the function
    /**到达地面停止渲染
     * 到达地面后转到end_status
     */
    Role.prototype.stop_move_Y1 = function (end_status) {
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
        else {
            this.toStatus(end_status);
        } // end else if
    }; // End of the function
    /**被击打后后退 */
    Role.prototype.hurtBack = function () {
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
    };
    //防御也会进入
    Role.prototype.render_hurtBack = function () {
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
            this.bodyMC.stop(); //
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
        var _loc2;
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
                }
                else if (this.status_1 == "hold_u") {
                    this.stand();
                    this.DEBUG_LOG("render_hurtback init undefined and to stand");
                }
            }
        } // end if
    }; // End of the function
    Role.prototype.stop_hurtBack = function () {
        // this.render_mc_action = undefined;
        this.render_position_x = undefined;
        this.bodyMC.resetFrameStop();
        this.DEBUG_LOG("[location][x]render_hurtBack init undefined2");
    }; // End of the function
    Role.prototype.hurtAway = function () {
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
    }; // End of the function
    Role.prototype.hurtAway_self = function (v1, v2, end) {
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
    }; // End of the function
    Role.prototype.do_hurtAway = function () {
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
        var _loc2;
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
    }; // End of the function
    Role.prototype.stop_hurtAway = function () {
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
    }; // End of the function
    /**打击的碰撞检测
     * 与对手的本体即body区域进行碰撞
     * 骨骼存在放缩问题
     * 暂时处理:×放缩因子
     */
    Role.prototype.do_hitTest = function (obj) {
        var pos1 = obj.getTransformedBounds(obj.stage);
        var oppbody = this.opp.bodyMC.getchildMovieBymcName(this.opp.bodyName);
        if (oppbody == null) {
            return false;
        }
        var pos2 = oppbody.getTransformedBounds(oppbody.stage);
        var angle1 = new egret.Rectangle(pos1.x, pos1.y, obj.width * obj.scaleX, obj.height * obj.scaleY);
        var angle2 = new egret.Rectangle(pos2.x, pos2.y, oppbody.width * oppbody.scaleX * this.opp.bodyMC.scaleX, oppbody.height * oppbody.scaleY * this.opp.bodyMC.scaleY);
        var ifHit = angle1.intersects(angle2);
        return ifHit;
    }; // End of the function
    /**移动中的技能碰撞检测*/
    Role.prototype.move_HitTest = function (obj, attFrame, endFrame, S, v) {
        this.HitTest_Sv = v;
        this.HitTest_Sx = S;
        FightMainRender.getInstance().Add(this, this.render_move_HitTest, [attFrame, endFrame, obj]);
    };
    Role.prototype.render_move_HitTest = function (attFrame, endFrame, obj) {
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
    };
    /**检查是否满足摔的条件 */
    Role.prototype.catch_check = function () {
        if (this.status_1 != "dash_f" && this.opp.status_2 != "air" && this.opp.status_3 != "hurt" && this.opp.status_3 != "down" && !this.opp.holdFreeze && (this.opp.hit_over() || this.dir == this.opp.dir)) {
            return this.checkTouch(15 * this.dir);
        }
        return false;
    }; // End of the function
    /**摔技检测 */
    Role.prototype.catch_HitTest = function (obj, status_c, flag, condition_land, condition_hurt, downHit) {
        if (condition_land) {
            if (this.opp.status_2 == "air") {
                return;
            } // end if
        } // end if
        if (condition_hurt) {
            if (this.opp.status_3 == "hurt" || this.opp.status_3 == "") {
            }
            else if (this.opp.status_3 == "down" && this.onHit) {
            }
            else {
                return;
            } // end else if
        } // end else if
        if (downHit == false) {
            if (this.opp.status_3 == "down") {
                return;
            } // end if
        } // end if
        var oppbody = this.opp.bodyMC.getchildMovieBymcName(this.opp.bodyName);
        if (oppbody == null) {
            this.onHit = false;
            this.toStatus("stand");
            return;
        }
        var pos1 = obj.getTransformedBounds(obj.stage);
        var pos2 = oppbody.getTransformedBounds(oppbody.stage);
        var angle1 = new egret.Rectangle(pos1.x, pos1.y, obj.width * obj.scaleX, obj.height * obj.scaleY);
        var angle2 = new egret.Rectangle(pos2.x, pos2.y, oppbody.width * oppbody.scaleX * this.opp.bodyMC.scaleX, oppbody.height * oppbody.scaleY * this.opp.bodyMC.scaleY);
        if (angle1.intersects(angle2)) {
            this.onHit = true;
            this.opp.toStatus(status_c);
            this.opp.bodyMC.gotoAndStop(flag);
            this.opp.checkFrameEvent();
            this.opp.status_3 = "hurt";
            var _loc2 = this.x + obj.x * this.dir;
            var _loc3 = this.y + obj.y;
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
            var num = this.parent.localToGlobal(_loc2, _loc3);
            _level0.effect_mc.hitFire("hitFire3", num.x, num.y, this);
            this.topLayer();
        }
        else {
            this.onHit = false;
            this.toStatus("stand");
        } // end else if
    }; // End of the function
    Role.prototype.catch_oppPos = function (obj, status_c, flag, land, hurt) {
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
            var _loc2 = this.x + obj.x * this.dir;
            var _loc3 = this.y + obj.y;
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
    }; // End of the function
    /**obj击中对方后将对方移动至obj2处 */
    Role.prototype.catch_oppPos2 = function (obj, obj2, status_c, flag, condition_land, condition_hurt, downHit) {
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
            var _loc5 = obj2.localToGlobal();
            var _loc2 = _loc5.x;
            var _loc4 = _loc5.y;
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
    }; // End of the function
    /**将对手扔出 */
    Role.prototype.throw_oppPos = function (obj, status_c, flag, land, hurt) {
        this.onHit = true;
        this.opp.status_2 = "air";
        this.opp.status_3 = "hurt";
        this.opp.toStatus(status_c);
        this.opp.bodyMC.gotoAndStop(flag);
        var _loc2 = this.x + obj.x * this.dir;
        var _loc4 = this.y + obj.y;
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
    }; // End of the function
    Role.prototype.throw_hit = function (hurtV, obj) {
        this.opp.rotation = 0;
        this.opp.checkSide_abs();
        var _loc2 = this.x + obj.x * this.dir;
        var _loc4 = this.y + obj._;
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
    }; // End of the function
    Role.prototype.flyingObjHit = function (hitValue) {
        // flyingObj.play();
    }; // End of the function
    Role.prototype.doHit = function (hitValue) {
        this.onHit = true;
        this.hitValue = hitValue;
        this.powerObj.inc = 10 * hitValue.d_rate;
        this.powerObj.action = "inc";
        this.powerControl(this.powerObj);
    }; // End of the function
    Role.prototype.doHurt = function (hitValue) {
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
    }; // End of the function
    Role.prototype.checkHurt = function () {
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
        else if (this.status_1 == "hold_u" || this.status_1 == "hold_d") {
            var _loc2 = this.hurtValue.freezeTime + this.hurtValue.freezeTime2;
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
    }; // End of the function
    Role.prototype.hurtStatus = function () {
        this.DEBUG_LOG("[location][x][y]hurtStatus stop");
        // this.render_mc_action = undefined;
        this.render_position_x = undefined;
        this.render_position_y = undefined; //
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
    }; // End of the function
    Role.prototype.hitFire = function (hitValue) {
        var _loc2 = hitValue.hitType;
        var beatMC = hitValue.area;
        var hitFire_x = this.opp.localToGlobal().x;
        var hitFire_y = beatMC.localToGlobal().y;
        if (this.opp.status_1 == "hold_u" || this.opp.status_1 == "hold_d") {
            _loc2 = "hitFire2";
        }
        else if (this.opp.inCount) {
            _loc2 = "hitFire2";
            // _level0.showMsg("count", hitFire_x + _level0.char_mc._x);
        }
        else {
            var hitEff = hitValue.hitEff;
            var _loc3 = function (role, hitEff, hitFire_x, hitFire_y) {
                role.addEffect(hitEff, hitFire_x, hitFire_y);
            };
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
        if (_loc2 != "") {
            _level0.effect_mc.hitFire(_loc2, hitFire_x, hitFire_y, this);
        }
    }; // End of the function
    Role.prototype.countStart = function (times, pos) {
        if (times === void 0) { times = 1; }
        this.skillCount = true;
        this.countTimes = times;
        this.countPos = pos;
        if (this.countTimes == undefined) {
            this.countTimes = 1;
        } // end if
    }; // End of the function
    Role.prototype.countEnd = function () {
        this.skillCount = false;
    }; // End of the function
    Role.prototype.countCheck = function () {
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
    }; // End of the function
    Role.prototype.powerBurst = function () {
        this.inBurst = true;
        this.powerObj.action = "burst";
        this.powerControl(this.powerObj);
    }; // End of the function
    Role.prototype.burstEff = function () {
        if (this.burst_mode == "attack") {
        }
        else if (this.burst_mode == "defend") {
            this.burst_defend = true;
        } // end else if
    }; // End of the function
    Role.prototype.superCancle = function () {
        if (this.inBurst && this.burst_mode == "attack") {
            return true;
        } // end if
        return false;
    }; // End of the function
    Role.prototype.burst_end = function () {
        this.inBurst = false;
        this.inCount = false;
        this.burst_defend = false;
        this.burst_mode = "";
    }; // End of the function
    Role.prototype.holdCount = function () {
        if (this.heavyHit() == false) {
            return;
        } // end if
        this.powerObj.action = "burstdec";
        this.powerObj.decNum = _level0.power_holdCounter;
        this.powerControl(this.powerObj);
        // this.changeColorSelf("white", 30);
    }; // End of the function
    Role.prototype.isHitEnd = function () {
        var _loc2 = this.comboClass.skill_over[this.status_1];
        if (_loc2 == undefined) {
            if (this.status_3 == "attack" && this.bodyMC.getCurrFrame() > this.bodyMC.totalFrame - 4) {
                return true;
            }
            else if (this.status_3 == "hurt") {
                return true; //add
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
    }; // End of the function
    /**当前人物进攻动作是否完成
     * 存在子骨骼:未完成
     * 通过skill_over读取结束帧进行判断
     */
    Role.prototype.hit_over = function () {
        if (this.status_3 != "attack") {
            return true;
        } // end if
        // _level0.out("hit_over   over_f:" + over_f + "   mc._currentframe:" + mc._currentframe + "   mc._totalframes:" + mc._totalframes);
        if (this.bodyMC.getchildMovieBymcName("Hitcheck") != null ||
            this.bodyMC.getchildMovieBymcName("FlyingObj") != null ||
            this.bodyMC.getchildMovieBymcName("Hitcheck_obj") != null) {
            return false;
        }
        var over_f = this.comboClass.skill_over[this.status_1];
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
    }; // End of the function
    Role.prototype.freeze_frame = function () {
        if (this.status_3 != "attack") {
            return 0;
        } // end if
        return this.bodyMC.totalFrame - this.bodyMC.getCurrFrame();
    }; // End of the function
    Role.prototype.superStart = function (superType, time_f, dx, dy, faceName, dir) {
        // _level0.effect_mc.superStart(superType, time_f, dx, dy, faceName, dir);
    }; // End of the function
    /**爆气技能检测
     * 某些技能(superList中)需要消耗能量才能执行sk_s1,sk_s2,sk_s3
     * 若check_action不是这些技能则返回notSpuerSkill
     * 若是则检测能量是否满足要求返回对应true或false
     */
    Role.prototype.superCheck = function (check_action) {
        this.superSkill = false;
        if (this.superList[check_action] == 1) {
            if (this.superPoint > 0) {
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
    }; // End of the function
    /**爆发技能检测
     * 某些技能(burstList中)需要消耗能量才能执行s4,s5
     * 若check_action不是这些技能则返回notbrustSkill
     * 若是则返回true或false(是否在爆发状态下)
     */
    Role.prototype.burstCheck = function (check_action) {
        this.isBurstSkill = false;
        if (this.burstList[check_action] == 1) {
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
    }; // End of the function
    Role.prototype.skillSuperCheck = function (action) {
        var _loc2 = this.skillSuperMapping[action];
        if (_loc2 != undefined) {
            return _loc2;
        }
        else {
            return "";
        } // end else if
    }; // End of the function
    /**扣除能量 */
    Role.prototype.powerDec = function () {
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
    }; // End of the function
    /**扣除能量 */
    Role.prototype.powerDec2 = function () {
        if (this.inBurst && this.powerDecType2 == "cancle") {
            this.powerObj.action = "burstdec";
            this.powerObj.decNum = this.power_cancle;
            this.powerControl(this.powerObj);
            // this.changeColorSelf("white", 30);
            this.powerDecType2 = "";
        } // end if
    }; // End of the function
    /**子骨骼技能 */
    Role.prototype.addSkill = function (skill_name, src, Vx, Va, suspend) {
        if (suspend === void 0) { suspend = false; }
        if (skill_name == "") {
            return;
        }
        ;
        var skill_class = eval(this._roleName + "_Skill");
        var coordinate_stage = src.parent.localToGlobal(src.x, src.y);
        var coordinate_local = SplashScene.hero_layer.globalToLocal(coordinate_stage.x, coordinate_stage.y);
        var skill = new skill_class(skill_name, this);
        if (this.dir == -1) {
            skill.skill_mc.skewY = 180;
        }
        skill.skill_mc.x = coordinate_local.x;
        if (skill.skill_mc.x > (SplashScene.hero_layer.globalToLocal(this.stage_width)).x) {
            skill.skill_mc.x = (SplashScene.hero_layer.globalToLocal(this.stage_width)).x;
        }
        else if (skill.skill_mc.x < (SplashScene.hero_layer.globalToLocal(0)).x) {
            skill.skill_mc.x = (SplashScene.hero_layer.globalToLocal(0)).x;
        }
        skill.skill_mc.y = coordinate_local.y;
        SplashScene.hero_layer.addChild(skill.skill_mc);
        if (suspend) {
            _level0.effect_mc.skill_loader.push(skill);
        }
        else {
            // console.log(skill.skill_mc);
            skill.skill_mc["dir"] = this.dir;
            this.skill_loader.push(skill);
        }
    }; // End of the function
    Role.prototype.addSkill2 = function (skill_name, src, Vx, Va) {
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
    }; // End of the function
    Role.prototype.addSkill_Kula = function (skill_name, coordinate_local) {
        if (skill_name == "") {
            return;
        }
        ;
        var skill_class = eval(this._roleName + "_Skill");
        var skill = new skill_class(skill_name, this);
        if (this.dir == -1) {
            skill.skill_mc.skewY = 180;
        }
        skill.skill_mc.x = coordinate_local.x;
        if (skill.skill_mc.x > (SplashScene.hero_layer.globalToLocal(this.stage_width)).x) {
            skill.skill_mc.x = (SplashScene.hero_layer.globalToLocal(this.stage_width)).x;
        }
        else if (skill.skill_mc.x < (SplashScene.hero_layer.globalToLocal(0)).x) {
            skill.skill_mc.x = (SplashScene.hero_layer.globalToLocal(0)).x;
        }
        skill.skill_mc.y = coordinate_local.y;
        SplashScene.hero_layer.addChild(skill.skill_mc);
        // console.log(skill.skill_mc);
        skill.skill_mc["dir"] = this.dir;
        this.skill_loader.push(skill);
    }; // End of the function
    Role.prototype.addSkill_m = function (s_name, src, posx, posy) {
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
    }; // End of the function
    Role.prototype.addEffect = function (e_name, e_x, e_y) {
        var skill_class = eval(this._roleName + "_Skill");
        var skill = new skill_class(e_name, this);
        var num = SplashScene.hero_layer.globalToLocal(e_x, e_y);
        skill.skill_mc.x = num.x;
        skill.skill_mc.y = num.y;
        if (this.dir == -1) {
            skill.skill_mc.skewY = 180;
        }
        SplashScene.hero_layer.addChild(skill.skill_mc);
        _level0.effect_mc.skill_loader.push(skill);
    }; // End of the function
    Role.prototype.addShadow = function (shadow_name, src, start_alpha, end_alpha, d_alpha, _rb, _gb, _bb) {
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
    }; // End of the function
    Role.prototype.catchFire = function (e_name, e_x, e_y, dir) {
    }; // End of the function
    Role.prototype.start_move_Obj = function (Obj) {
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
    }; // End of the function
    Role.prototype.skill_filter = function (action) {
        for (var _loc3 in this.record_filter_array) {
            if (action == this.record_filter_array[_loc3]) {
                return true;
            } // end if
        } // end of for...in
        return false;
    }; // End of the function
    Role.prototype.check_countType = function (s) {
        for (var _loc3 in this.record_skill_totalFrame) {
            if (String(s) == this.record_skill_totalFrame[_loc3]) {
                return true;
            } // end if
        } // end of for...in
        for (var _loc3 in this.record_action_totalFrame) {
            if (String(s) == this.record_action_totalFrame[_loc3]) {
                return true;
            } // end if
        } // end of for...in
        if (String(s).indexOf("jumpSkill_") != -1) {
            return true;
        } // end if
        return false;
    }; // End of the function
    Role.prototype.set_combo = function () {
        //     let _loc2 = _level0.comboRecord_array[_level0.comboIndex];
        //     record_skill = _loc2.data[0];
        //     record_frame = _loc2.data[1];
        //     count_type = _loc2.data[2];
    }; // End of the function
    Role.prototype.skill_record_ready = function () {
        this.inRecord = true;
        this.record_frame = [];
        this.record_skill = [];
        this.count_type = [];
    }; // End of the function
    Role.prototype.skill_record = function (skill) {
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
    };
    Role.prototype.render_replay_timer2 = function () {
        if (this.inFreeze) {
            return;
        } // end if
        ++this.frameCount_temp;
    };
    ;
    Role.prototype.skill_record_end = function (hits) {
        this.inRecord = false;
        FightMainRender.getInstance().Remove(this, this.render_replay_timer2);
        if (this.record_skill.length == 0) {
            return;
        } // end if
        var _loc2 = hits + " Combo";
        var _loc3 = [this.record_skill, this.record_frame, this.count_type];
        // _level0.combo_new({ label: _loc2, data: _loc3 });
    }; // End of the function
    Role.prototype.skill_replay_start = function () {
        // trace("skill_replay_start: " + record_skill);
        this.inReplay = true;
        this.skillPoint = 0;
        this.toSkill(this.record_skill[this.skillPoint]);
        ++this.skillPoint;
        this.skill_replay();
    }; // End of the function
    Role.prototype.skill_replay_end = function () {
        this.inReplay = false;
        FightMainRender.getInstance().Remove(this, this.render_replay_timer);
        FightMainRender.getInstance().Remove(this, this.render2_replay_timer);
        this.powerObj.action = "burstdec";
        this.powerObj.decNum = 300;
        this.powerControl(this.powerObj);
    }; // End of the function
    Role.prototype.skill_replay = function () {
        var skill = this.record_skill[this.skillPoint];
        var frame = this.record_frame[this.skillPoint];
        var _loc2 = this.count_type[this.skillPoint];
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
    }; // End of the function
    Role.prototype.render_replay_timer = function (frame, skill) {
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
    };
    Role.prototype.render2_replay_timer = function (frame, skill) {
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
    ;
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
    Role.prototype.stageInf = function (sw, emax, emin, x, y) {
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
    }; // End of the function
    Role.prototype.stageVar = function (l_max, s_Point, p_max, opponent, burst) {
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
    }; // End of the function
    Role.prototype.reset = function () {
        this.isKO = false;
        this.KO_checked = false;
        this.onEdge = false;
        this.redBlood = false;
        this.life = this.life_max;
        this.mc.gotoAndStop("ready");
        this.x = this.startX;
        this.y = this.startY;
        this.checkSide_abs();
    }; // End of the function
    Role.prototype.noAct = function () {
        return;
    }; // End of the function
    Role.prototype.start_control = function () {
        this.control = true;
        this.toSkill = this.toSkill_temp;
        this.toAction = this.toAction_temp;
        this.toStatus = this.toStatus_temp;
        this.toStatus_switch("stand");
    }; // End of the function
    Role.prototype.end_control = function (action) {
        this.toStatus_temp(action);
        return true;
    }; // End of the function
    Role.prototype.do_end = function () {
        this.control = false;
        this.toSkill = this.noAct;
        this.toAction = this.noAct;
        this.toStatus = this.end_control;
        if (this.status_1 == "walk_f" || this.status_1 == "walk_b" || this.status_1 == "dash_f" || this.status_1 == "squat") {
            FightMainRender.getInstance().Remove(this, this.renderAnimate);
            this.status_1 = "stand";
            this.mc.gotoAndStop("stand");
        } // end if
    }; // End of the function
    Role.prototype.do_KO = function () {
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
    }; // End of the function
    Role.prototype.do_win = function () {
        var action = "end";
        if (this.winPoseArray.length != 0) {
            var index = Math.floor(Math.random() * this.winPoseArray.length);
            if (index == this.winPoseArray.length) {
                index = this.winPoseArray.length - 1;
            }
            action = this.winPoseArray[index];
        }
        this.mc.gotoAndStop(action);
        this.status_1 = "end";
        this.opp.showHits_end();
    }; // End of the function
    Role.prototype.do_lose = function () {
        FightMainRender.getInstance().Add(this, this.render_do_lose);
    };
    Role.prototype.render_do_lose = function () {
        if (_level0.inPause) {
            return;
        } // end if
        if (this.status_2 == "land" && this.status_3 == "normal" && this.status_4 == "normal") {
            this.mc.gotoAndStop("lose");
            this.status_1 = "lose";
            FightMainRender.getInstance().Remove(this, this.render_do_lose);
        } // end if
    }; // End of the function
    /**自动转向 */
    Role.prototype.checkSide_abs = function () {
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
    }; // End of the function
    /**改变人物方向 */
    Role.prototype.checkSide = function () {
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
    }; // End of the function
    Role.prototype.chageSide_arg = function () {
        if (this.x < this.opp.x - this.side_offset && this.scaleX < 0 && this.keyCtrl) {
            this.keyCtrl.dir = 1;
        }
        else if (this.x > this.opp.x + this.side_offset && this.scaleX > 0 && this.keyCtrl) {
            this.keyCtrl.dir = -1;
        } // end else if
    }; // End of the function
    /**人物向右 */
    Role.prototype.chageSide1 = function () {
        this.scaleX = this.scale;
        this.dir = 1;
        if (this.keyCtrl) {
            this.keyCtrl.dir = 1;
        }
    }; // End of the function
    /**人物向左 */
    Role.prototype.chageSide2 = function () {
        this.scaleX = -this.scale;
        this.dir = -1;
        if (this.keyCtrl) {
            this.keyCtrl.dir = -1;
        }
    }; // End of the function
    /**生命控制 */
    Role.prototype.lifeControl = function (lifeobj) {
        _level0.lifeControl(lifeobj, this);
    }; // End of the function
    /**能量控制 */
    Role.prototype.powerControl = function (powerobj) {
        _level0.powerControl(powerobj, this);
    }; // End of the function
    Role.prototype.showHits_end = function () {
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
    }; // End of the function
    Role.prototype.toSkill = function (action, cancle) {
        if (cancle === void 0) { cancle = false; }
        if (action == undefined) {
            return;
        } // end if
        if (_level0.inPause) {
            return;
        } // end if
        this.powerDecType = "";
        if (this.status_3 == "hurt") {
            return;
        } // end if
        if (this.status_3 == "down") {
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
        var _loc3 = this.superCheck(action);
        if (_loc3 == false) {
            return;
        }
        else if (_loc3 == true) {
            if (this.burst_mode == "power") {
                var _loc4 = this.skillSuperCheck(action);
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
    }; // End of the function
    /**开始释放技能 */
    Role.prototype.skill_start = function (action) {
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
    }; // End of the function
    Role.prototype.switchSkill = function (action) {
        this.toSkill(action, true);
    }; // End of the function
    Role.prototype.toAction = function (action) {
        if (_level0.inPause) {
            return;
        } // end if
        this.toStatus(action);
        if (this.opp['actionDefend']) {
            this.opp['actionDefend'](action);
        }
    }; // End of the function
    //     public keyUp(obj)
    // {
    //     let _loc1 = obj.upKey;
    // } // End of the function
    Role.prototype.statusClear = function () {
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
    }; // End of the function
    /**true表明扣除能量 */
    Role.prototype.toStatus = function (action) {
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
    }; // End of the function
    Role.prototype.toStatus_switch = function (act) {
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
    }; // End of the function
    Role.prototype.delayCheck = function () {
        var _loc2 = this.input_pre[this.status_1];
        if (_loc2 == undefined) {
            return false;
        } // end if
        var _loc3 = this.mc.$children[0].getCurrFrame();
        if (_loc3 > _loc2) {
            return true;
        } // end if
        return false;
    }; // End of the function
    /**推迟释放技能 */
    Role.prototype.skill_delay = function (action) {
        this.delaySkill = action;
    }; // End of the function
    /**重新释放推迟技能 */
    Role.prototype.skill_restart = function () {
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
    }; // End of the function
    Role.prototype.shakeCheck = function () {
        //     _level0.shake_mc.shakeStart(hurtValue.shake);
    }; // End of the function
    /**检查是否满足摔技的条件 */
    Role.prototype.checkTouch = function (dv) {
        if (this.checkTouch_stop || this.opp.checkTouch_stop) {
            return false;
        } // end if
        if (this.status_2 != "air" && this.opp.status_2 == "air") {
            return false;
        } // end if
        if (this.status_3 == "roll" || this.opp.status_3 == "roll") {
            return false;
        } // end if
        var _loc5;
        var _loc2;
        var _loc4;
        var _loc3;
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
    }; // End of the function
    Role.prototype.bodyTouch = function () {
        var _loc2 = this.checkTouch2();
        if (_loc2 != null) {
            this.VbodyTouch = _loc2;
            this.do_bodyTouch();
        } // end if
    }; // End of the function
    /**人物身体碰撞检测*/
    Role.prototype.do_bodyTouch = function () {
        this.DEBUG_LOG("[location][x]do_bodyTouch");
        // this.render_mc_action = this.render_do_bodyTouch;
        // this.render_mc_action_params = [];
        this.render_position_x = this.render_do_bodyTouch;
        this.render_position_x_params = [];
    };
    /**帧事件实现人物身体碰撞检测 */
    Role.prototype.render_do_bodyTouch = function () {
        if (_level0.inPause) {
            return;
        } // end if
        if (this.VbodyTouch > 0) {
            this.VbodyTouch = Math.floor(this.VbodyTouch / 2);
        }
        else {
            this.VbodyTouch = Math.ceil(this.VbodyTouch / 2);
        }
        this.do_move2(this.VbodyTouch);
        if (this.VbodyTouch == 0) {
            this.DEBUG_LOG("[location][x]do_bodyTouch init undefined");
            // this.render_mc_action = undefined;
            this.render_position_x = undefined;
        } // end if
    }; // End of the function
    /**检测人物身体是否碰撞
     * 前提:y坐标相同
     */
    Role.prototype.checkTouch2 = function () {
        var _loc2 = this.x - this.opp.x;
        var _loc3;
        if (_loc2 > -50 && _loc2 < 0) {
            _loc3 = -50 - _loc2;
            return _loc3;
        } // end if
        if (_loc2 < 50 && _loc2 >= 0) {
            _loc3 = 50 - _loc2;
            return _loc3;
        } // end if
        return null;
    }; // End of the function
    /**边界检测 */
    Role.prototype.edgecheck = function (v) {
        var roles_distance = Math.abs(this.x - this.opp.x + v); //两位玩家之间的距离,用于战斗窗口检测
        if (this.x + v + this.width / 2 >= this.edge_max && v > 0) {
            // console.log("到达地图右边界", "RUNID:", FightMainRender.getInstance().getRunID(), this.x, v, this.width, this.edge_max);
            this.onEdge = true;
            this.edge = 1;
            return true;
        } // end if
        if (this.x + v - this.width / 2 <= this.edge_min && v < 0) {
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
    }; // End of the function
    Role.prototype.mask_red = function () {
        var square = new egret.Shape();
        square.graphics.beginFill(0xff0000);
        square.graphics.drawRect(-100, -400, 400, 400);
        square.graphics.endFill();
        square.alpha = 1;
        this.addChild(square);
        this.mask_colorRed = square;
    };
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
    Role.prototype.changeColor = function (cc, time_f) {
        // this.opp.changeColorSelf(cc, time_f);
    }; // End of the function
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
    Role.prototype.topLayer = function () {
        // if (_parent.getDepth() < this.opp._parent.getDepth()) {
        //     _parent.swapDepths(this.opp._parent);
        // } // end if
    }; // End of the function
    /**是否拥有子技能:如火焰,气波等 */
    Role.prototype.hasObj = function () {
        if (this.skill_loader.length > 0) {
            return true;
        }
        else {
            return false;
        }
    }; // End of the function
    /**获得最后一个子技能 */
    Role.prototype.getObj = function () {
        var lastone = this.skill_loader.length - 1;
        if (lastone < 0) {
            return;
        } // end if
        return this.skill_loader[lastone].skill_mc;
    }; // End of the function
    Role.prototype.getObjNum = function () {
        return this.skill_loader.length;
    }; // End of the function
    /**获得与对方子技能的距离 */
    Role.prototype.getObjDis = function () {
        var lastone = this.skill_loader.length - 1;
        if (lastone < 0) {
            return undefined;
        } // end if
        if (this.skill_loader[lastone].skill_mc.stage == null) {
            return;
        }
        var obj_x = this.skill_loader[lastone].skill_mc.x;
        if (obj_x == undefined || isNaN(obj_x)) {
            return undefined;
        } // end if
        return (Math.abs(obj_x - this.opp.x));
    }; // End of the function
    /**实现P_L+K_L动作 */
    Role.prototype.to_PK_l = function () {
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
    }; // End of the function
    /**实现P+K动作 */
    Role.prototype.to_PK = function () {
        if (this.status_1 == "jump_f" || this.status_1 == "jump_far" || this.status_1 == "jump" || this.status_1 == "jump_b") {
            this.jumpSkill("heavyHit");
            return;
        } // end if
        this.toSkill("heavyHit");
    }; // End of the function
    /**实现爆发动作 */
    Role.prototype.to_key_burst = function () {
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
    }; // End of the function
    /**实现roll动作 */
    Role.prototype.to_key_roll = function () {
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
    }; // End of the function
    return Role;
}(egret.DisplayObjectContainer)); // End of the class
__reflect(Role.prototype, "Role");
//# sourceMappingURL=Role.js.map