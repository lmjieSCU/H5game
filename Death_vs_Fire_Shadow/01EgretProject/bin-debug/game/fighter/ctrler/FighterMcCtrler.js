/*
*FighterMcCtrler
*@1：实现判断并释放人物技能
*人物释放技能需有：对应技能标志(_action.xxx)不为空,对应技能键盘输入标志(_actionCtrler.xxx)为true;
*render()来到对应技能函数，之后调用FighterMC.goframe()到达帧首
*renderAnimate()调用nextframe()实现动画
*@2：增加子动画
*addattacker()
*/
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FighterMcCtrler = (function () {
    // public static instance:FighterMcCtrler; 
    function FighterMcCtrler(param1) {
        this._jumpDelayFrame = 0; //按下jump键后需经过_jumpDelayFrame才会有jump动画
        this._hurtHoldFrame = 0;
        this._defenseHoldFrame = 0;
        this._isTouchFloor = true;
        this._defenseFrameDelay = 0;
        this._ghostType = 0;
        this._action = new FighterAction();
        this._fighter = param1;
        this._defenseHoldFrame = 0;
        this._hurtHoldFrame = 0;
        this._jumpDelayFrame = 0;
        return;
    } // end function
    FighterMcCtrler.prototype.ClearState = function () {
        this._action.clearAction();
    };
    FighterMcCtrler.prototype.destory = function () {
        if (this._actionCtrler) {
            this._actionCtrler.destory();
            this._actionCtrler = null;
        }
        if (this._mc) {
            this._mc.destory();
            this._mc = null;
        }
        this._fighter = null;
        this._action = null;
        this._moveTargetParam = null;
        this.effectCtrler = null;
        return;
    }; // end function
    FighterMcCtrler.prototype.getAction = function () {
        return this._action;
    }; // end function
    FighterMcCtrler.prototype.getFighterMc = function () {
        return this._mc;
    }; // end function
    FighterMcCtrler.prototype.getCurAction = function () {
        if (this._doingAirAction != null) {
            return this._doingAirAction;
        }
        return this._doingAction;
    }; // end function
    FighterMcCtrler.prototype.setActionCtrler = function (param1) {
        this._actionCtrler = param1;
        return;
    }; // end function
    FighterMcCtrler.prototype.setMc = function (param1) {
        this._mc = param1;
        this.idle();
        return;
    }; // end function
    FighterMcCtrler.prototype.addQi = function (param1) {
        this._fighter.addQi(param1);
        return;
    }; // end function
    FighterMcCtrler.prototype.idle = function (param1) {
        if (param1 === void 0) { param1 = "站立"; }
        var _loc_2 = false;
        if (FighterActionState.isHurting(this._fighter.actionState)) {
            this._justHurtResume = true;
        }
        this.endAct();
        this._doingAction = null;
        this._justDefenseFrame = 0.1 * GameConfig.FPS_GAME;
        this.effectCtrler.endShadow();
        this.effectCtrler.endShake();
        this._action.clearAction();
        this._action.clearState();
        this._fighter.actionState = 0;
        this._fighter.isAllowBeHit = !this._justHurtResume;
        this._fighter.isApplyG = true;
        this._fighter.isCross = false;
        this._fighter.hurtHit = null;
        this._fighter.defenseHit = null;
        this._fighter.clearHurtHits();
        this._fighter.getDisplay().visible = true;
        this._isDefense = false;
        this._autoDirectFrame = 0;
        if (!this._isTouchFloor) {
            this.fall();
        }
        else {
            _loc_2 = true;
            this._fighter.setVelocity(0, 0);
            if (param1 == "站立") {
                // _loc_2 = false;
                _loc_2 = true; //站立时有动画
                this._action.jumpTimes = this._fighter.jumpTimes;
                this._action.airHitTimes = this._fighter.airHitTimes;
                this.setAllAct();
            }
            this._mc.goFrame(param1, _loc_2);
        }
        return;
    }; // end function
    FighterMcCtrler.prototype.loop = function (param1) {
        this._mc.goFrame(param1);
        return;
    }; // end function
    FighterMcCtrler.prototype.stop = function () {
        this._mc.stopRenderMainAnimate();
        return;
    }; // end function
    FighterMcCtrler.prototype.dash = function (param1) {
        if (param1 === void 0) { param1 = 3; }
        this._action.isDashing = true;
        this._fighter.setVelocity(this._fighter.speed * param1 * this._fighter.direct, 0);
        this._fighter.setDamping(0, 0);
        this._fighter.isCross = true;
        this._fighter.isAllowBeHit = false;
        return;
    }; // end function
    FighterMcCtrler.prototype.dashStop = function (param1) {
        if (param1 === void 0) { param1 = 0.5; }
        var _loc_2 = this._fighter.getVecX();
        var _loc_3 = Math.abs(_loc_2) * param1;
        this._fighter.setDamping(_loc_3);
        this._fighter.isAllowBeHit = true;
        this._fighter.actionState = 0;
        this._action.clearAction();
        this._action.isDashing = false;
        this._fighter.isCross = false;
        return;
    }; // end function
    FighterMcCtrler.prototype.setAllAct = function () {
        this.setMove();
        this.setDefense();
        this.setJump();
        this.setJumpDown();
        this.setDash();
        this.setAttack();
        this.setSkill1();
        this.setSkill2();
        this.setZhao1();
        this.setZhao2();
        this.setZhao3();
        this.setCatch1();
        this.setCatch2();
        this.setBisha();
        this.setBishaUP();
        this.setBishaSUPER();
        this.setWankai();
        return;
    }; // end function
    FighterMcCtrler.prototype.setAirAllAct = function () {
        this.setDash();
        this.setAttackAIR();
        this.setSkillAIR();
        this.setBishaAIR();
        this.setAirMove(true);
        return;
    }; // end function
    FighterMcCtrler.prototype.setAirMove = function (param1) {
        this._action.airMove = param1;
        return;
    }; // end function
    FighterMcCtrler.prototype.setMove = function () {
        this.setMoveLeft();
        this.setMoveRight();
        return;
    }; // end function
    FighterMcCtrler.prototype.setMoveLeft = function () {
        this._action.moveLeft = "走";
        return;
    }; // end function
    FighterMcCtrler.prototype.setMoveRight = function () {
        this._action.moveRight = "走";
        return;
    }; // end function
    FighterMcCtrler.prototype.setDefense = function () {
        this._action.defense = "防御";
        return;
    }; // end function
    FighterMcCtrler.prototype.setJump = function (param1) {
        if (param1 === void 0) { param1 = "跳"; }
        if (!this._mc.checkFrame(param1)) {
            return;
        }
        this._action.jump = param1;
        return;
    }; // end function
    FighterMcCtrler.prototype.setJumpQuick = function (param1) {
        if (param1 === void 0) { param1 = "跳"; }
        if (!this._mc.checkFrame(param1)) {
            return;
        }
        this._action.jumpQuick = param1;
        return;
    }; // end function
    FighterMcCtrler.prototype.setJumpDown = function (param1) {
        if (param1 === void 0) { param1 = "落"; }
        if (!this._mc.checkFrame(param1)) {
            return;
        }
        this._action.jumpDown = param1;
        return;
    }; // end function
    FighterMcCtrler.prototype.setDash = function (param1) {
        if (param1 === void 0) { param1 = "瞬步"; }
        if (!this._mc.checkFrame(param1)) {
            return;
        }
        this._action.dash = param1;
        return;
    }; // end function
    FighterMcCtrler.prototype.setAttack = function (param1) {
        if (param1 === void 0) { param1 = "砍1"; }
        if (!this._mc.checkFrame(param1)) {
            return;
        }
        this._action.attack = param1;
        return;
    }; // end function
    FighterMcCtrler.prototype.setSkill1 = function (param1) {
        if (param1 === void 0) { param1 = "砍技1"; }
        if (!this._mc.checkFrame(param1)) {
            return;
        }
        this._action.skill1 = param1;
        return;
    }; // end function
    FighterMcCtrler.prototype.setSkill2 = function (param1) {
        if (param1 === void 0) { param1 = "砍技2"; }
        if (!this._mc.checkFrame(param1)) {
            return;
        }
        this._action.skill2 = param1;
        return;
    }; // end function
    FighterMcCtrler.prototype.setZhao1 = function (param1) {
        if (param1 === void 0) { param1 = "招1"; }
        if (!this._mc.checkFrame(param1)) {
            return;
        }
        this._action.zhao1 = param1;
        return;
    }; // end function
    FighterMcCtrler.prototype.setZhao2 = function (param1) {
        if (param1 === void 0) { param1 = "招2"; }
        if (!this._mc.checkFrame(param1)) {
            return;
        }
        this._action.zhao2 = param1;
        return;
    }; // end function
    FighterMcCtrler.prototype.setZhao3 = function (param1) {
        if (param1 === void 0) { param1 = "招3"; }
        if (!this._mc.checkFrame(param1)) {
            return;
        }
        this._action.zhao3 = param1;
        return;
    }; // end function
    FighterMcCtrler.prototype.setCatch1 = function (param1) {
        if (param1 === void 0) { param1 = "摔1"; }
        if (!this._mc.checkFrame(param1)) {
            return;
        }
        this._action.catch1 = param1;
        return;
    }; // end function
    FighterMcCtrler.prototype.setCatch2 = function (param1) {
        if (param1 === void 0) { param1 = "摔2"; }
        if (!this._mc.checkFrame(param1)) {
            return;
        }
        this._action.catch2 = param1;
        return;
    }; // end function
    FighterMcCtrler.prototype.setBisha = function (param1, param2) {
        if (param1 === void 0) { param1 = "必杀"; }
        if (param2 === void 0) { param2 = 100; }
        if (!this._mc.checkFrame(param1)) {
            return;
        }
        this._action.bisha = param1;
        this._action.bishaQi = param2;
        return;
    }; // end function
    FighterMcCtrler.prototype.setBishaUP = function (param1, param2) {
        if (param1 === void 0) { param1 = "上必杀"; }
        if (param2 === void 0) { param2 = 100; }
        if (!this._mc.checkFrame(param1)) {
            return;
        }
        this._action.bishaUP = param1;
        this._action.bishaUPQi = param2;
        return;
    }; // end function
    FighterMcCtrler.prototype.setBishaSUPER = function (param1, param2) {
        if (param1 === void 0) { param1 = "超必杀"; }
        if (param2 === void 0) { param2 = 300; }
        if (!this._mc.checkFrame(param1)) {
            return;
        }
        this._action.bishaSUPER = param1;
        this._action.bishaSUPERQi = param2;
        return;
    }; // end function
    FighterMcCtrler.prototype.setAttackAIR = function (param1) {
        if (param1 === void 0) { param1 = "跳砍"; }
        if (!this._mc.checkFrame(param1)) {
            return;
        }
        this._action.attackAIR = param1;
        return;
    }; // end function
    FighterMcCtrler.prototype.setSkillAIR = function (param1) {
        if (param1 === void 0) { param1 = "跳招"; }
        if (!this._mc.checkFrame(param1)) {
            return;
        }
        this._action.skillAIR = param1;
        return;
    }; // end function
    FighterMcCtrler.prototype.setBishaAIR = function (param1, param2) {
        if (param1 === void 0) { param1 = "空中必杀"; }
        if (param2 === void 0) { param2 = 100; }
        if (!this._mc.checkFrame(param1)) {
            return;
        }
        this._action.bishaAIR = param1;
        this._action.bishaAIRQi = param2;
        return;
    }; // end function
    FighterMcCtrler.prototype.setTouchFloor = function (param1, param2) {
        if (param1 === void 0) { param1 = "落地"; }
        if (param2 === void 0) { param2 = true; }
        if (!this._mc.checkFrame(param1)) {
            return;
        }
        this._action.touchFloor = param1;
        this._action.touchFloorBreakAct = param2;
        return;
    }; // end function
    FighterMcCtrler.prototype.setWankai = function (param1) {
        if (param1 === void 0) { param1 = "万解"; }
        if (!this._mc.checkFrame(param1)) {
            return;
        }
        this._action.waiKai = param1;
        return;
    }; // end function
    FighterMcCtrler.prototype.setHitTarget = function (param1, param2) {
        this._action.hitTarget = param2;
        this._action.hitTargetChecker = param1;
        return;
    }; // end function
    FighterMcCtrler.prototype.setHurtAction = function (param1) {
        this._action.hurtAction = param1;
        this._fighter.actionState = 16;
        return;
    }; // end function
    FighterMcCtrler.prototype.move = function (param1, param2) {
        if (param1 === void 0) { param1 = 0; }
        if (param2 === void 0) { param2 = 0; }
        if (param1 == 0 && param2 == 0) {
            this.stopMove();
            return;
        }
        if (this._fighter.isInAir && param1 != 0) {
            this._action.airMove = false;
        }
        param1 = param1 * this._fighter.direct;
        this._fighter.setVelocity(param1, param2);
        return;
    }; // end function
    FighterMcCtrler.prototype.movePercent = function (param1, param2) {
        if (param1 === void 0) { param1 = 0; }
        if (param2 === void 0) { param2 = 0; }
        this.move(this._fighter.speed * param1, this._fighter.speed * param2);
        return;
    }; // end function
    FighterMcCtrler.prototype.stopMove = function () {
        this._fighter.setVelocity(0, 0);
        return;
    }; // end function
    FighterMcCtrler.prototype.damping = function (param1, param2) {
        if (param1 === void 0) { param1 = 0; }
        if (param2 === void 0) { param2 = 0; }
        this._fighter.setDamping(param1, param2);
        return;
    }; // end function
    FighterMcCtrler.prototype.dampingPercent = function (param1, param2) {
        if (param1 === void 0) { param1 = 0; }
        if (param2 === void 0) { param2 = 0; }
        this._fighter.setDamping(this._fighter.speed * param1, this._fighter.speed * param2);
        return;
    }; // end function
    FighterMcCtrler.prototype.endAct = function () {
        this._action.clearAction();
        this._fighter.actionState = 40;
        this._moveTargetParam = null;
        return;
    }; // end function
    FighterMcCtrler.prototype.fire = function (param1, param2) {
        if (param2 === void 0) { param2 = null; }
        var mcName = param1;
        var params = param2;
        var mc = this._mc.getChildByName(mcName);
        if (mc) {
            if (!params) {
                params = {};
            }
            params["mc"] = mc;
            params["hitVO"] = this._fighter.getCtrler().hitModel.getHitVOByDisplayName(mcName);
            FighterEventDispatcher.dispatchEvent(this._fighter, "FIRE_BULLET", params);
            return mc;
        }
        else {
            this._fighter.setAnimateFrameOut(function () {
                this.fire(mcName, params);
                return;
            } // end function
            , 1, this);
            return null;
        }
    }; // end function
    FighterMcCtrler.prototype.addAttacker = function (param1, param2) {
        if (param2 === void 0) { param2 = null; }
        var mcName = param1;
        var params = param2;
        var mc = this._mc.getChildByName(mcName);
        if (mc) {
            if (!params) {
                params = {};
            }
            params["mc"] = mc;
            params["hitVO"] = this._fighter.getCtrler().hitModel.getHitVOByDisplayName(mcName);
            FighterEventDispatcher.dispatchEvent(this._fighter, "ADD_ATTACKER", params); //触发"ADD_ATTACKER"事件
            return mc;
        }
        else {
            this._fighter.setAnimateFrameOut(function () {
                this.addAttacker(mcName, params);
                return;
            } // end function
            , 1, this);
            return null;
        }
    }; // end function
    FighterMcCtrler.prototype.isApplyG = function (param1) {
        this._fighter.isApplyG = param1;
        return;
    }; // end function
    FighterMcCtrler.prototype.gotoAndPlay = function (param1) {
        this._mc.goFrame(param1, true);
        return;
    }; // end function
    FighterMcCtrler.prototype.gotoAndStop = function (param1) {
        this._mc.goFrame(param1, false);
        return;
    }; // end function
    FighterMcCtrler.prototype.hurtFly = function (param1, param2) {
        this._mc.playHurtFly(param1 * this._fighter.direct, param2, false);
        this._action.isHurtFlying = true;
        this._fighter.actionState = 22;
        this._hurtDownFrame = 0;
        this._isFalling = false;
        return;
    }; // end function
    FighterMcCtrler.prototype.moveMC = function (param1, param2, param3) {
        if (param2 === void 0) { param2 = null; }
        if (param3 === void 0) { param3 = null; }
        var _loc_4 = this._fighter.getCurrentTarget();
        if (param2) {
            if (typeof (param2) == "number") {
                param1.x = this._fighter.x + param2;
            }
            else if (param2.target != undefined && _loc_4) {
                param1.x = _loc_4.getx() - this._fighter.x;
                if (Flash.isNaN(param2.target)) {
                    param1.x = param1.x + param2.target;
                }
            }
        }
        if (param3) {
            if (typeof (param3) == "number") {
                param1.y = this._fighter.y + param3;
            }
            else if (param3.target != undefined && _loc_4) {
                param1.y = _loc_4.gety() - this._fighter.y + param3;
                if (Flash.isNaN(param3.target)) {
                    param1.y = param1.y + param3.target;
                }
            }
        }
        return;
    }; // end function
    FighterMcCtrler.prototype.justHitToPlay = function (param1, param2, param3, param4) {
        if (param3 === void 0) { param3 = false; }
        if (param4 === void 0) { param4 = false; }
        if (this._fighter.getCtrler().justHit(param1, param4)) {
            this._mc.goFrame(param2);
        }
        else if (param3) {
            this.idle();
        }
        return;
    }; // end function
    FighterMcCtrler.prototype.getAttacker = function (param1, param2) {
        if (param2 === void 0) { param2 = -1; }
        var _loc_2 = GameCtrl.I.getAttacker(param1, this._fighter.team.id, param2);
        if (_loc_2) {
            return _loc_2.getCtrler();
        }
        return null;
    }; // end function
    FighterMcCtrler.prototype.moveTarget = function (param1) {
        if (param1 === void 0) { param1 = null; }
        if (!param1) {
            this._moveTargetParam.clear();
            this._moveTargetParam = null;
            return;
        }
        this._moveTargetParam = new MoveTargetParamVO(param1);
        this._moveTargetParam.setTarget(this._fighter.getCurrentTarget());
        return;
    }; // end function
    FighterMcCtrler.prototype.render = function () {
        //必杀隐藏
        // if (this._fighter.owerKeyBoardMode instanceof btn_actionCtrl) {
        //     if (this._fighter.qi >= 100) {
        //         this._fighter.owerKeyBoardMode.control_btn["superSkill"].visible = true;
        //         this._fighter.owerKeyBoardMode.control_btn["wankai"].visible = true;
        //     }
        //     else if (this._fighter.qi < 100) {
        //         this._fighter.owerKeyBoardMode.control_btn["superSkill"].visible = false;
        //         this._fighter.owerKeyBoardMode.control_btn["wankai"].visible = false;
        //     }
        // }
        // if(this._fighter.team.id == 2){
        //     console.log(this._fighter.mc.$children[0].getCurrFrame())
        // } 
        if (this._ghostStepIng) {
            return;
        }
        if (this._justDefenseFrame > 0) {
            this._justDefenseFrame = this._justDefenseFrame - 1;
        }
        this._action.render();
        if (this._moveTargetParam) {
            this.renderMoveTarget();
        }
        if (this._actionCtrler) {
            this._actionCtrler.render();
        }
        if (this._action.isHurtFlying) {
            this.renderHurtFlying();
            return;
        }
        if (this._action.isHurting) {
            this.renderHurt();
            return;
        }
        if (this._action.isDefenseHiting) {
            return;
        }
        if (this._action.hitTarget) {
            this.renderCheckTargetHit();
        }
        if (this.renderWanKaiCtrl()) {
            return;
        }
        if (this._fighter && this._fighter.isInAir || this._doingAirAction && !this._action.touchFloorBreakAct) {
            this.renderAirAction();
        }
        else {
            this.renderFloorAction();
        }
        return;
    }; // end function
    FighterMcCtrler.prototype.renderHurtFlying = function () {
        if (!this._fighter.isInAir) {
            this._isTouchFloor = true;
        }
        if (!this._fighter.isAlive) {
            return;
        }
        if (this._fighter.actionState == 24) {
            this._hurtDownFrame = 1;
        }
        if (this._hurtDownFrame > 0) {
            this._hurtDownFrame = this._hurtDownFrame + 1;
            if ((this._hurtDownFrame + 1) < 20) {
                if (this._actionCtrler.dashJump()) {
                    this.doHurtDownJump();
                    this._hurtDownFrame = 0;
                }
            }
        }
        return;
    }; // end function
    FighterMcCtrler.prototype.renderAssist = function () {
        // if (this._fighter.owerKeyBoardMode instanceof btn_actionCtrl) {
        //     if (this._fighter.fzqi >= 100) {
        //         this._fighter.owerKeyBoardMode.control_btn["Assist"].visible = true
        //     }
        //     else if (this._fighter.fzqi < 100) {
        //         this._fighter.owerKeyBoardMode.control_btn["Assist"].visible = false
        //     }
        // }
        if (this._fighter.actionState != 0 && this._fighter.actionState != 20) {
            return;
        }
        if (this._actionCtrler.assist()) {
            if (this._fighter.fzqi >= 100) {
                this._fighter.fzqi = 0;
                FighterEventDispatcher.dispatchEvent(this._fighter, "ADD_ASSISTER");
            }
        }
        return;
    }; // end function
    FighterMcCtrler.prototype.renderFloorAction = function () {
        if (!this._isTouchFloor) {
            this.touchFloor();
        }
        if (this._actionCtrler == null || !this._actionCtrler.enabled()) {
            if (this._mc.currentFrameName == "走" || this._mc.currentFrameName == "防御") {
                this.idle();
            }
            return;
        }
        this.renderAssist();
        if (this._action.catch1 && this._actionCtrler.catch1()) {
            this.doCatch(this._action.catch1);
        }
        if (this._action.catch2 && this._actionCtrler.catch2()) {
            this.doCatch(this._action.catch2);
        }
        if (this._action.bishaSUPER && this._actionCtrler.bishaSUPER()) {
            this.doBisha(this._action.bishaSUPER, this._action.bishaSUPERQi, true);
        }
        if (this._action.bishaUP && this._actionCtrler.bishaUP()) {
            this.doBisha(this._action.bishaUP, this._action.bishaUPQi);
        }
        if (this._action.bisha && this._actionCtrler.bisha()) {
            this.doBisha(this._action.bisha, this._action.bishaQi);
        }
        if (this._action.skill2 && this._actionCtrler.skill2()) {
            this.doSkill(this._action.skill2);
        }
        if (this._action.skill1 && this._actionCtrler.skill1()) {
            this.doSkill(this._action.skill1);
        }
        if (this._action.zhao3 && this._actionCtrler.zhao3()) {
            this.doSkill(this._action.zhao3);
        }
        if (this._action.zhao2 && this._actionCtrler.zhao2()) {
            this.doSkill(this._action.zhao2);
        }
        if (this._action.attack && this._actionCtrler.attack()) {
            this.doAttack(this._action.attack);
        }
        if (this._action.zhao1 && this._actionCtrler.zhao1()) {
            this.doSkill(this._action.zhao1);
        }
        if (this._action.defense && this._actionCtrler.defense()) {
            this.doDefense();
        }
        if (this._action.dash && this._actionCtrler.dash()) {
            this.doDash(this._action.dash);
        }
        if (this._action.moveLeft && this._actionCtrler.moveLEFT()) {
            this.doMove(this._action.moveLeft, -1);
        }
        if (this._action.moveRight && this._actionCtrler.moveRIGHT()) {
            this.doMove(this._action.moveRight, 1);
        }
        if (this._action.jump && this._actionCtrler.jump()) {
            this.doJump(this._action.jump);
        }
        if (this._action.jumpDown && this._actionCtrler.jumpDown()) {
            this.doJumpDown(this._action.jumpDown);
        }
        if (this._action.isMoving) {
            this.renderMoving();
        }
        if (this._action.isDefensing) {
            this.renderDefense();
        }
        if (FighterActionState.allowGhostStep(this._fighter.actionState)) {
            if (this._actionCtrler.ghostStep()) {
                this.doGhostStep();
            }
            if (this._actionCtrler.ghostJump()) {
                this.doGhostJump();
            }
        }
        if (FighterActionState.isAttacking(this._fighter.actionState)) {
            if (this._action.attackAIR && this._actionCtrler.attackAIR()) {
                this.doAirAttack(this._action.attackAIR);
            }
            if (this._action.skillAIR && this._actionCtrler.skillAIR()) {
                this.doAirSkill(this._action.skillAIR);
            }
            if (this._action.bishaAIR && this._actionCtrler.bishaAIR()) {
                this.doAirBisha(this._action.bishaAIR, this._action.bishaAIRQi);
            }
        }
        return;
    }; // end function
    FighterMcCtrler.prototype.renderWanKaiCtrl = function () {
        var _loc_1 = null;
        if (!this._actionCtrler || !this._actionCtrler.enabled()) {
            return false;
        }
        if (this._actionCtrler.waiKai()) {
            if (this._action.waiKai) {
                this.doWaiKaiAction(this._action.waiKai);
                return true;
            }
            _loc_1 = this._mc.currentFrameName;
            if (this._doingAction == "砍1") {
                if (this._doActionFrame < 2) {
                    this.doWaiKaiAction("万解");
                    return true;
                }
            }
        }
        return false;
    }; // end function
    FighterMcCtrler.prototype.renderAnimate = function () {
        if (this._justHurtResume) {
            this._fighter.isAllowBeHit = true;
            this._justHurtResume = false;
        }
        if (this._mc) {
            this._mc.renderAnimate();
        }
        if (this._actionCtrler) {
            this._actionCtrler.renderAnimate(); //null
        }
        if (this._ghostStepIng) {
            this.renderGhostStep();
            return;
        }
        if (this._action) {
            if (this._action.isHurting) {
                this.renderHurtAnimate();
            }
            if (this._action.isDefenseHiting) {
                this.renderDefensHiting();
            }
            if (this._action.isJumping) {
                this.renderJumpAnimate();
            }
            if (this._doingAction) {
                this._doActionFrame = this._doActionFrame + 1;
            }
            if (this._action.isDefensing) {
                this.renderDefenseAnimate();
            }
        }
        if (this._mc && this._mc.currentFrameName == "站立") {
            this._autoDirectFrame = this._autoDirectFrame + 1;
            if ((this._autoDirectFrame + 1) > 5) {
                this._fighter.getCtrler().setDirectToTarget();
                this._autoDirectFrame = 0;
            }
        }
        return;
    }; // end function
    FighterMcCtrler.prototype.renderAirAction = function () {
        if (!this._action.isJumping) {
            this.fall();
        }
        this._isTouchFloor = false;
        if (this._actionCtrler == null || !this._actionCtrler.enabled()) {
            return;
        }
        if (this._action.attackAIR && this._actionCtrler.attackAIR()) {
            this.doAirAttack(this._action.attackAIR);
        }
        if (this._action.skillAIR && this._actionCtrler.skillAIR()) {
            this.doAirSkill(this._action.skillAIR);
        }
        if (this._action.bishaAIR && this._actionCtrler.bishaAIR()) {
            this.doAirBisha(this._action.bishaAIR, this._action.bishaAIRQi);
        }
        if (this._action.jump && this._actionCtrler.jump()) {
            this.doAirJump(this._action.jump);
        }
        if (this._action.jumpQuick && this._actionCtrler.jumpQuick()) {
            this.doAirJump(this._action.jumpQuick);
        }
        if (FighterActionState.isAttacking(this._fighter.actionState)) {
            if (this._action.bishaSUPER && this._actionCtrler.bishaSUPER()) {
                this.doBisha(this._action.bishaSUPER, this._action.bishaSUPERQi, true);
            }
            if (this._action.bishaUP && this._actionCtrler.bishaUP()) {
                this.doBisha(this._action.bishaUP, this._action.bishaUPQi);
            }
            if (this._action.bisha && this._actionCtrler.bisha()) {
                this.doBisha(this._action.bisha, this._action.bishaQi);
            }
            if (this._action.skill2 && this._actionCtrler.skill2()) {
                this.doSkill(this._action.skill2);
            }
            if (this._action.skill1 && this._actionCtrler.skill1()) {
                this.doSkill(this._action.skill1);
            }
            if (this._action.zhao3 && this._actionCtrler.zhao3()) {
                this.doSkill(this._action.zhao3);
            }
            if (this._action.zhao2 && this._actionCtrler.zhao2()) {
                this.doSkill(this._action.zhao2);
            }
            if (this._action.attack && this._actionCtrler.attack()) {
                this.doAttack(this._action.attack);
            }
            if (this._action.zhao1 && this._actionCtrler.zhao1()) {
                this.doSkill(this._action.zhao1);
            }
        }
        if (this._action.dash && this._actionCtrler.dash()) {
            this.doDashAir(this._action.dash);
        }
        if (this._action.airMove) {
            this.doAirMove();
        }
        if (this._actionCtrler.ghostJump()) {
            this.doGhostJump();
        }
        if (this._actionCtrler.ghostJumpDown()) {
            this.doGhostJumpDown();
        }
        return;
    }; // end function
    FighterMcCtrler.prototype.renderMoveTarget = function () {
        var _loc_3 = NaN;
        var _loc_1 = NaN;
        var _loc_2 = null;
        var _loc_4 = this._moveTargetParam.target;
        if (!this._moveTargetParam.target) {
            return;
        }
        if (this._moveTargetParam.followMcName) {
            _loc_2 = this._mc.getChildByName(this._moveTargetParam.followMcName);
            if (!_loc_2) {
                return;
            }
            _loc_3 = this._fighter.x + _loc_2.x * this._fighter.direct;
            _loc_1 = this._fighter.y + _loc_2.y;
        }
        else {
            if (!Flash.isNaN(this._moveTargetParam.x)) {
                _loc_3 = this._moveTargetParam.x;
            }
            if (!Flash.isNaN(this._moveTargetParam.y)) {
                _loc_1 = this._moveTargetParam.y;
            }
        }
        if (this._moveTargetParam.speed) {
            if (this._moveTargetParam.speed.x > 0 && !Flash.isNaN(_loc_3)) {
                if (_loc_4.getx() > _loc_3 + this._moveTargetParam.speed.x) {
                    _loc_4.setx(_loc_4.getx() - this._moveTargetParam.speed.x);
                }
                if (_loc_4.getx() < _loc_3 - this._moveTargetParam.speed.x) {
                    _loc_4.setx(_loc_4.getx() + this._moveTargetParam.speed.x);
                }
                if (_loc_4.gety() > _loc_1 + this._moveTargetParam.speed.y) {
                    if (_loc_4 instanceof BaseGameSprite) {
                        _loc_4.setVecY(-this._moveTargetParam.speed.y);
                        _loc_4.setDampingY(1);
                    }
                    else {
                        _loc_4.sety(_loc_4.gety() - this._moveTargetParam.speed.y);
                    }
                }
                if (_loc_4.gety() < _loc_1 - this._moveTargetParam.speed.y) {
                    if (_loc_4 instanceof BaseGameSprite) {
                        _loc_4.setVecY(this._moveTargetParam.speed.y);
                        _loc_4.setDampingY(1);
                    }
                    else {
                        _loc_4.sety(_loc_4.gety() + this._moveTargetParam.speed.y);
                    }
                }
            }
        }
        else {
            if (!Flash.isNaN(_loc_3)) {
                _loc_4.setx(_loc_3);
            }
            if (!Flash.isNaN(_loc_1)) {
                _loc_4.sety(_loc_1);
            }
        }
        return;
    }; // end function
    FighterMcCtrler.prototype.fall = function () {
        if (this._isFalling) {
            return;
        }
        if (this._doingAction) {
            return;
        }
        this._action.clearState();
        this._action.clearAction();
        this.setAirAllAct();
        this.setJump();
        this._isFalling = true;
        this._doingAirAction = null;
        this._isTouchFloor = false;
        this._isDefense = false;
        this._fighter.setVecX(0);
        this.setTouchFloor("落地", true);
        this._mc.goFrame("落", false);
        return;
    }; // end function
    FighterMcCtrler.prototype.touchFloor = function () {
        if (!this._fighter.isAlive) {
            return;
        }
        var _loc_2 = this._action.touchFloor;
        if (this._isFalling) {
            if (!_loc_2) {
                _loc_2 = "落地";
            }
        }
        if (_loc_2 == null) {
            return;
        }
        var delay_action = this.setAttack.bind(this, "砍1");
        var _loc_1 = _loc_2 == "落地" ? ({ call: delay_action, delay: 1 }) : (null);
        this.doAction(_loc_2, false, _loc_1);
        this.effectCtrler.touchFloor();
        this._action.airHitTimes = this._fighter.airHitTimes;
        this._action.jumpTimes = this._fighter.jumpTimes;
        this._isTouchFloor = true;
        this._isFalling = false;
        return;
    }; // end function
    FighterMcCtrler.prototype.doAction = function (param1, param2, param3) {
        if (param2 === void 0) { param2 = false; }
        if (param3 === void 0) { param3 = null; }
        if (param1 == null) {
            return;
        }
        this.effectCtrler.endShadow();
        this.effectCtrler.endShake();
        this._fighter.setVelocity(0, 0);
        this._action.isMoving = false;
        this._action.isDefensing = false;
        this._action.isDashing = false;
        this._doingAction = param1;
        this._doingAirAction = param2 ? (param1) : (null);
        this._action.clearAction();
        this._isFalling = false;
        this._isDefense = false;
        this._fighter.isAllowBeHit = true;
        this._fighter.isCross = false;
        this._fighter.isApplyG = true;
        this._doActionFrame = 0;
        this._mc.goFrame(param1, true, 0, param3);
        this._fighter.dispatchEvent(new FighterEvent("DO_ACTION")); //doAction事件
        return;
    }; // end function
    FighterMcCtrler.prototype.setMoveAction = function () {
        this._action.clearAction();
        this._action.isMoving = true;
        this.setMove();
        this.setAttack();
        this.setZhao1();
        this.setZhao3();
        this.setSkill2();
        this.setJump();
        this.setDash();
        this.setBisha();
        this.setBishaUP();
        this.setDefense();
        this.setCatch1();
        this.setCatch2();
        return;
    }; // end function
    FighterMcCtrler.prototype.renderMoving = function () {
        if (this._actionCtrler.moveLEFT()) {
            this._fighter.direct = -1;
            this.move(this._fighter.speed);
        }
        else if (this._actionCtrler.moveRIGHT()) {
            this._fighter.direct = 1;
            this.move(this._fighter.speed);
        }
        else {
            this.idle();
        }
        return;
    }; // end function
    FighterMcCtrler.prototype.doMove = function (param1, param2) {
        if (param2 === void 0) { param2 = 1; }
        if (this._action.isMoving) {
            return;
        }
        this._mc.goFrame(param1, true);
        this._fighter.actionState = 0;
        this.setMoveAction();
        return;
    }; // end function
    FighterMcCtrler.prototype.doAirMove = function () {
        if (this._actionCtrler.moveLEFT()) {
            this._fighter.direct = -1;
            this._fighter.move(-this._fighter.speed);
        }
        if (this._actionCtrler.moveRIGHT()) {
            this._fighter.direct = 1;
            this._fighter.move(this._fighter.speed);
        }
        return;
    }; // end function
    FighterMcCtrler.prototype.renderDefense = function () {
        this.renderBeHitGap();
        if (this._actionCtrler.moveLEFT()) {
            if (this._fighter.direct != -1) {
                this._fighter.direct = -1;
                this.setDefenseAction();
            }
        }
        if (this._actionCtrler.moveRIGHT()) {
            if (this._fighter.direct != 1) {
                this._fighter.direct = 1;
                this.setDefenseAction();
            }
        }
        return;
    }; // end function
    FighterMcCtrler.prototype.renderDefenseAnimate = function () {
        if (this._action.isDefenseHiting) {
            return;
        }
        this._defenseFrameDelay = this._defenseFrameDelay - 1;
        if (this._defenseFrameDelay > 0) {
            return;
        }
        if (this._actionCtrler.enabled() && this._actionCtrler.defense()) {
            if (!this._isDefense) {
                this._isDefense = true;
            }
        }
        else {
            if (this._defenseFrameDelay > -5) {
                return;
            }
            this._action.isDefensing = false;
            var delay_action = this.idle.bind(this); //需使用bind，之后使用t()调用
            this._mc.goFrame("防御恢复", false, 0, { call: delay_action, delay: 1 });
        }
        return;
    }; // end function
    FighterMcCtrler.prototype.setDefenseAction = function () {
        this._action.clearAction();
        this._action.clearState();
        this._action.isDefensing = true;
        this.setSkill1();
        this.setZhao2();
        this.setBishaSUPER();
        this.setJumpDown();
        this._isDefense = this._justDefenseFrame > 0 ? (true) : (false);
        this._defenseFrameDelay = 1;
        this._mc.goFrame("防御", true, 3);
        return;
    }; // end function
    FighterMcCtrler.prototype.doDefense = function () {
        if (this._action.isDefensing) {
            return;
        }
        this._fighter.actionState = 20;
        this.dampingPercent(1, 1);
        this.setDefenseAction();
        return;
    }; // end function
    FighterMcCtrler.prototype.doDash = function (param1) {
        if (!this._fighter.hasEnergy(20, true)) {
            return;
        }
        this._fighter.useEnergy(20);
        if (this._actionCtrler.moveLEFT()) {
            this._fighter.direct = -1;
        }
        if (this._actionCtrler.moveRIGHT()) {
            this._fighter.direct = 1;
        }
        this.doAction(param1);
        this._fighter.actionState = 15;
        this._fighter.isAllowBeHit = false;
        this.isApplyG(false);
        return;
    }; // end function
    FighterMcCtrler.prototype.doDashAir = function (param1) {
        if (this._action.jumpTimes < 1) {
            return;
        }
        if (!this._fighter.hasEnergy(30, true)) {
            return;
        }
        this._fighter.useEnergy(30);
        this.doAction(param1);
        this._fighter.actionState = 15;
        this._fighter.isAllowBeHit = false;
        this.isApplyG(false);
        this._action.jumpTimes = 0;
        return;
    }; // end function
    FighterMcCtrler.prototype.doJump = function (param1) {
        if (this._action.jumpTimes <= 0) {
            return;
        }
        this._action.clearAction();
        this._action.clearState();
        this._doingAction = null;
        this._mc.goFrame("起跳", false);
        this._jumpDelayFrame = 2;
        this._action.isJumping = true;
        this._fighter.actionState = 14;
        return;
    }; // end function
    FighterMcCtrler.prototype.doJumpDown = function (param1) {
        if (this._fighter.isTouchBottom) {
            return;
        }
        this._action.clear();
        this._action.jumpTimes = 0;
        this._fighter.setVecY(5);
        this._fighter.setDamping(0, 1);
        (this._fighter.y + 1);
        this._isDefense = false;
        this._mc.goFrame(param1, false);
        this.setTouchFloor();
        return;
    }; // end function
    FighterMcCtrler.prototype.doAirJump = function (param1) {
        if (this._action.jumpTimes <= 0) {
            return;
        }
        this._action.clearAction();
        this._action.clearState();
        this._doingAction = null;
        this._jumpDelayFrame = 1;
        this._action.isJumping = true;
        this._fighter.actionState = 14;
        return;
    }; // end function
    FighterMcCtrler.prototype.renderJumpAnimate = function () {
        if (this._doingAction) {
            return;
        }
        if (this._jumpDelayFrame > 0) {
            this._jumpDelayFrame = this._jumpDelayFrame - 1;
            if (this._jumpDelayFrame == 0) {
                this._isFalling = false;
                this._action.jumpTimes = this._action.jumpTimes - 1;
                this._mc.goFrame("跳", false);
                this._fighter.jump(); //set速度矢量,改变坐标
                this.setAirAllAct();
                if (this._fighter.isInAir) {
                    this.effectCtrler.jumpAir();
                }
                else {
                    this.effectCtrler.jump();
                }
            }
            return;
        }
        if (this._mc.currentFrameCount == 2) {
            this.setJumpQuick();
        }
        var _loc_1 = this._fighter.getVecY();
        if (this._mc.currentFrameName != "跳中" && _loc_1 > (-this._fighter.jumpPower) * 0.35) {
            this._mc.goFrame("跳中", false);
            this._fighter.setAnimateFrameOut(this.setJump, 5, this);
        }
        if (_loc_1 >= 0) {
            this._action.isJumping = false;
            this._isFalling = true;
        }
        return;
    }; // end function
    FighterMcCtrler.prototype.doAttack = function (param1) {
        this.doAction(param1);
        this._fighter.actionState = 10;
        return;
    }; // end function
    FighterMcCtrler.prototype.doSkill = function (param1) {
        this.doAction(param1);
        this._fighter.actionState = 11;
        return;
    }; // end function
    FighterMcCtrler.prototype.doCatch = function (param1) {
        if (!this.allowCatch()) {
            return;
        }
        this.doAction(param1);
        this._fighter.actionState = 11;
        return;
    }; // end function
    FighterMcCtrler.prototype.doBisha = function (param1, param2, param3) {
        if (param3 === void 0) { param3 = false; }
        if (!this._fighter.useQi(param2)) {
            // console.log("qi isnot enough")
            return;
        }
        this._fighter.actionState = param3 ? (13) : (12);
        this.doAction(param1);
        return;
    }; // end function
    FighterMcCtrler.prototype.doWaiKaiAction = function (param1) {
        if (!this._mc.checkFrame(param1)) {
            return;
        }
        if (!this._fighter.useQi(300)) {
            return;
        }
        this._fighter.actionState = 50;
        this.doAction(param1);
        this._fighter.isAllowBeHit = false;
        return;
    }; // end function
    FighterMcCtrler.prototype.doAirAttack = function (param1) {
        if (this._doingAction == null && this._action.airHitTimes <= 0) {
            return;
        }
        this._fighter.addDamping(0, 3);
        this._action.airHitTimes = this._action.airHitTimes - 1;
        this._action.jumpTimes = 0;
        this.doAction(param1, true);
        this._fighter.actionState = 10;
        return;
    }; // end function
    FighterMcCtrler.prototype.doAirSkill = function (param1) {
        if (this._doingAction == null && this._action.airHitTimes <= 0) {
            return;
        }
        this._action.airHitTimes = 0;
        this._action.jumpTimes = 0;
        this.doAction(param1, true);
        this._fighter.actionState = 11;
        return;
    }; // end function
    FighterMcCtrler.prototype.doAirBisha = function (param1, param2) {
        if (this._doingAction == null && this._action.airHitTimes <= 0) {
            return;
        }
        if (!this._fighter.useQi(param2)) {
            return;
        }
        this._fighter.actionState = 12;
        this._action.airHitTimes = 0;
        this.doAction(param1, true);
        return;
    }; // end function
    FighterMcCtrler.prototype.beHit = function (param1, param2) {
        if (param2 === void 0) { param2 = null; }
        var _loc_5 = null;
        var _loc_4 = NaN;
        var _loc_3 = NaN;
        if (this._action.hurtAction) {
            this.doAction(this._action.hurtAction);
            return;
        }
        if (this._fighter.getIsTouchSide()) {
            if (param1.owner && param1.owner instanceof BaseGameSprite) {
                _loc_5 = param1.owner;
                if (Math.abs(this._fighter.x - param1.owner.x) < 100) {
                    _loc_4 = 0.3;
                    _loc_3 = (-param1.hitx) * _loc_5.direct * 1.4;
                    if (_loc_3 > 20) {
                        _loc_3 = 20;
                    }
                    if (_loc_3 < -20) {
                        _loc_3 = -20;
                    }
                    _loc_5.setVec2(_loc_3, 0, _loc_4, 0);
                }
            }
        }
        if (this._isDefense) {
            if (param1.isBreakDef && param1.hitType == 11) {
                this.doHurt(param1, param2);
                return;
            }
            if (param1.checkDirect && param1.owner) {
                if (this.checkDefDirect(param1.owner)) {
                    this.doHurt(param1, param2);
                    return;
                }
            }
            this.doDefenseHit(param1, param2);
        }
        else {
            this.doHurt(param1, param2);
        }
        return;
    }; // end function
    FighterMcCtrler.prototype.checkDefDirect = function (param1) {
        var _loc_2 = 5;
        if (this._fighter.x < param1.getx() - _loc_2) {
            return this._fighter.direct < 0 && param1.getdirect() < 0;
        }
        if (this._fighter.x > param1.getx() + _loc_2) {
            return this._fighter.direct > 0 && param1.getdirect() > 0;
        }
        return false;
    }; // end function
    FighterMcCtrler.prototype.doHurt = function (param1, param2) {
        this.effectCtrler.endShadow();
        this.effectCtrler.endShake();
        this._fighter.hurtHit = param1; //伤害数据
        this._fighter.loseHp(param1.getDamage());
        if (!this._fighter.isAlive && GameLogic.checkFighterDie(this._fighter)) {
            FighterEventDispatcher.dispatchEvent(this._fighter, "DIE"); //死亡事件
            this._fighter.isAlive = false;
        }
        this._beHitGap = 4;
        this._fighter.isAllowBeHit = false;
        this._fighter.isApplyG = true;
        this._isDefense = false;
        // var _loc_4 = param1.hitx;
        // var _loc_3 = param1.hity;
        var _loc_4 = param1.hitx * 1.5;
        var _loc_3 = param1.hity * 1.5;
        if (param1.owner) {
            _loc_4 = _loc_4 * param1.owner.getdirect();
        }
        if (this._fighter.isInAir) {
            if (_loc_3 <= 0) {
                _loc_3 = _loc_3 - 3;
            }
        }
        else if (_loc_3 < 0) {
            _loc_3 = _loc_3 - 6;
            this._isTouchFloor = false;
        }
        this._action.clearState();
        if (param1.hurtType == 0) {
            this._action.isHurting = true;
            this._hurtHoldFrame = Math.round(param1.hurtTime / 1000 * 30) + GameConfig.HURT_FRAME_OFFSET;
            if (this._hurtHoldFrame < 4) {
                this._hurtHoldFrame = 4;
            }
            if (param1.hitType == 11) {
                this._mc.goFrame("被打", false);
            }
            else {
                this._mc.goFrame("被打", true, 7);
            }
            this._fighter.actionState = 21;
            this._fighter.setVelocity(_loc_4, _loc_3);
            this._fighter.setDamping(0.1, 0.5);
            if (this._fighter.isAlive && HitType.isHeavy(param1.hitType)) {
                this._fighter.getCtrler().getVoiceCtrl().playVoice(0, this._fighter.mc._name); //0.5);
            }
        }
        if (param1.hurtType == 1) {
            this._action.isHurtFlying = true;
            this._fighter.actionState = 22;
            this._hurtDownFrame = 0;
            this._mc.playHurtFly(_loc_4, _loc_3);
            if (this._fighter.isAlive) {
                this._fighter.getCtrler().getVoiceCtrl().playVoice(1, this._fighter.mc._name); //1);
            }
            else {
                this._fighter.getCtrler().getVoiceCtrl().playVoice(2, this._fighter.mc._name); // 1);
            }
        }
        if (param1 && param2) {
            EffectCtrl.I.doHitEffect(param1, param2, this._fighter);
        }
        this._isFalling = false;
        return;
    }; // end function
    FighterMcCtrler.prototype.renderHurt = function () {
        if (!this._fighter.isAlive) {
            return;
        }
        this.renderHurtBreak();
        return;
    }; // end function
    FighterMcCtrler.prototype.renderHurtBreak = function () {
        if (!this._actionCtrler.specailSkill()) {
            return;
        }
        if (!this._fighter.hasEnergy(50)) {
            return;
        }
        if (this._fighter.qi < 100) {
            return;
        }
        var _loc_3 = this._fighter.getLastHurtHitVO().isBisha();
        if (_loc_3) {
            return;
        }
        var _loc_1 = this._fighter.hurtBreakHit();
        if (_loc_1) {
            return;
        }
        var _loc_2 = this._fighter.currentHurtDamage();
        if (_loc_2 > 210) {
            return;
        }
        this._fighter.useQi(100);
        this._fighter.useEnergy(100);
        if (this._fighter.data.comicType == 1) {
            this._fighter.replaceSkill();
        }
        else {
            this._fighter.energyExplode();
        }
        FighterEventDispatcher.dispatchEvent(this._fighter, "HURT_RESUME");
        return;
    }; // end function
    FighterMcCtrler.prototype.renderHurtAnimate = function () {
        var _loc_1 = null;
        this.renderBeHitGap();
        this._hurtHoldFrame = this._hurtHoldFrame - 1;
        if (this._hurtHoldFrame <= 0) {
            if (!this._fighter.isAlive) {
                this._action.clearState();
                if (this._fighter.isInAir) {
                    _loc_1 = this._fighter.getVec2();
                    this.hurtFly(_loc_1.x, _loc_1.y);
                }
                else {
                    this._mc.playHurtDown();
                }
                this._fighter.getCtrler().getVoiceCtrl().playVoice(2, this._fighter.mc._name); // 1);
            }
            else {
                this.hurtResume();
            }
        }
        return;
    }; // end function
    FighterMcCtrler.prototype.hurtResume = function () {
        if (!this._fighter.isInAir && !this._isTouchFloor) {
            this._isTouchFloor = true;
        }
        this.idle();
        FighterEventDispatcher.dispatchEvent(this._fighter, "HURT_RESUME");
        return;
    }; // end function
    FighterMcCtrler.prototype.renderBeHitGap = function () {
        if (this._beHitGap > 0) {
            this._beHitGap = this._beHitGap - 1;
            if ((this._beHitGap - 1) <= 0) {
                this._fighter.isAllowBeHit = true;
            }
        }
        return;
    }; // end function
    FighterMcCtrler.prototype.doDefenseHit = function (param1, param2) {
        this._fighter.loseHp(param1.getDamage() * 0.05);
        if (this._fighter.isAlive && GameLogic.checkFighterDie(this._fighter)) {
            FighterEventDispatcher.dispatchEvent(this._fighter, "DIE");
            this._fighter.isAlive = false;
            this.doHurt(param1, param2);
            return;
        }
        this._fighter.defenseHit = param1;
        var _loc_3 = 0;
        if (param1.isBreakDef) {
            _loc_3 = 90;
        }
        else {
            _loc_3 = param1.getDamage() / 5;
            if (_loc_3 > 50) {
                _loc_3 = 50;
            }
        }
        if (!this._fighter.hasEnergy(_loc_3, false)) {
            this._fighter.useEnergy(_loc_3);
            this.doBreakDefense(param1, param2);
            return;
        }
        this._fighter.useEnergy(_loc_3);
        this._beHitGap = 4;
        this._fighter.isAllowBeHit = false;
        var _loc_4 = param1.hitx;
        if (param1.owner) {
            _loc_4 = _loc_4 * param1.owner.getdirect();
        }
        this._action.isDefenseHiting = true;
        if (param1.hurtType == 0) {
            this._defenseHoldFrame = param1.hurtTime / 1000 * GameConfig.FPS_GAME / 5;
            if (this._defenseHoldFrame < 5) {
                this._defenseHoldFrame = 5;
            }
            if (this._defenseHoldFrame > 10) {
                this._defenseHoldFrame = 10;
            }
        }
        else {
            this._defenseHoldFrame = 10;
            this._beHitGap = 8;
        }
        this._fighter.setVelocity(_loc_4, 0);
        this._fighter.setDamping(1, 0);
        if (param1 && param2) {
            EffectCtrl.I.doDefenseEffect(param1, param2, this._fighter.defenseType);
        }
        return;
    }; // end function
    FighterMcCtrler.prototype.doBreakDefense = function (param1, param2) {
        var _loc_5 = NaN;
        var _loc_3 = NaN;
        this._fighter.loseHp(param1.getDamage() / 10);
        if (param1.hurtType == 0) {
            this._beHitGap = 4;
        }
        if (param1.hurtType == 1) {
            this._beHitGap = 10;
        }
        this._fighter.isAllowBeHit = false;
        this._fighter.energyOverLoad = false;
        this._isDefense = false;
        var _loc_4 = param1.hitx;
        if (param1.hitx < 5) {
            _loc_4 = 5;
        }
        if (_loc_4 > 10) {
            _loc_4 = 10;
        }
        if (param1.owner) {
            _loc_4 = _loc_4 * param1.owner.getdirect();
        }
        this._action.clearState();
        this._action.isHurting = true;
        this._hurtHoldFrame = 42;
        this._mc.goFrame("被打", true, 7);
        this._fighter.actionState = 21;
        this._fighter.setVelocity(_loc_4);
        this._fighter.setDamping(0.1);
        if (param1 && param2) {
            _loc_5 = param2.x + param2.width / 2;
            _loc_3 = param2.y + param2.height / 2;
            EffectCtrl.I.doDefenseEffect(param1, param2, this._fighter.defenseType);
            EffectCtrl.I.doEffectById("break_def", _loc_5, _loc_3, this._fighter.direct);
        }
        return;
    }; // end function
    FighterMcCtrler.prototype.renderDefensHiting = function () {
        this.renderBeHitGap();
        if (this._defenseHoldFrame > 0) {
            this._defenseHoldFrame = this._defenseHoldFrame - 1;
        }
        else if (this._fighter.getVecX() == 0) {
            this._action.isDefenseHiting = false;
        }
        return;
    }; // end function
    FighterMcCtrler.prototype.renderCheckTargetHit = function () {
        var _loc_5 = 0;
        var _loc_1 = null;
        var _loc_2 = this._action.hitTargetChecker;
        if (!_loc_2) {
            return;
        }
        var _loc_3 = this._fighter.getCtrler().getHitCheckRect(_loc_2);
        if (!_loc_3) {
            return;
        }
        var _loc_4 = this._fighter.getTargets();
        if (!this._fighter.getTargets()) {
            return;
        }
        while (_loc_5 < _loc_4.length) {
            _loc_1 = _loc_4[_loc_5].getBodyArea();
            if (_loc_1 && _loc_3.intersects(_loc_1)) {
                this.doAction(this._action.hitTarget);
            }
            _loc_5++;
        }
        return;
    }; // end function
    FighterMcCtrler.prototype.allowCatch = function () {
        var _loc_2 = NaN;
        var _loc_4 = this._fighter.getCurrentTarget();
        if (!this._fighter.getCurrentTarget()) {
            return false;
        }
        if (_loc_4 instanceof FighterMain) {
            if (_loc_4.actionState == 21) {
                return false;
            }
        }
        var _loc_5 = _loc_4.getBodyArea();
        var _loc_3 = this._fighter.getBodyArea();
        if (!_loc_5 || !_loc_3) {
            return false;
        }
        var _loc_1 = Math.abs(this._fighter.y - _loc_4.gety());
        if (_loc_3.x < _loc_5.x) {
            if (this._fighter.direct < 0) {
                return false;
            }
            _loc_2 = _loc_5.x - (_loc_3.x + _loc_3.width);
        }
        else {
            if (this._fighter.direct > 0) {
                return false;
            }
            _loc_2 = _loc_3.x - (_loc_5.x + _loc_5.width);
        }
        return _loc_2 < 2 && _loc_1 < 1;
    }; // end function
    FighterMcCtrler.prototype.doHurtDownJump = function () {
        if (this._doingAction == "起身") {
            return;
        }
        if (this._fighter.currentHurtDamage() > 240) {
            return;
        }
        if (!this._fighter.hasEnergy(30)) {
            return;
        }
        this._mc.stopHurtFly();
        this._fighter.useEnergy(30);
        var _loc_1 = this._fighter.getVecX();
        this.doAction("起身");
        this._fighter.isAllowBeHit = false;
        this._fighter.setVelocity(_loc_1);
        this._fighter.setDamping(_loc_1 * 0.1);
        FighterEventDispatcher.dispatchEvent(this._fighter, "HURT_RESUME");
        return;
    }; // end function
    FighterMcCtrler.prototype.sayIntro = function () {
        this._fighter.actionState = 60;
        this._mc.goFrame("开场");
        return;
    }; // end function
    FighterMcCtrler.prototype.doWin = function () {
        this._fighter.actionState = 61;
        this._mc.goFrame("胜利");
        return;
    }; // end function
    FighterMcCtrler.prototype.doLose = function () {
        this._fighter.actionState = 62;
        this._mc.goFrame("失败");
        return;
    }; // end function
    FighterMcCtrler.prototype.doGhostStep = function () {
        if (this.startGhostStep()) {
            this.move(8, 0);
            this._mc.goFrame("走", true);
            this._ghostType = 0;
        }
        return;
    }; // end function
    FighterMcCtrler.prototype.doGhostJump = function () {
        if (this.startGhostStep()) {
            this.move(0, -12);
            this.damping(0, 0.1);
            this._mc.goFrame("跳", false);
            this._action.jumpTimes = this._action.jumpTimes - 1;
            this._ghostType = 1;
        }
        return;
    }; // end function
    FighterMcCtrler.prototype.doGhostJumpDown = function () {
        if (this.startGhostStep()) {
            this.move(0, 15);
            this._mc.goFrame("落", false);
            this._ghostType = 2;
        }
        return;
    }; // end function
    FighterMcCtrler.prototype.startGhostStep = function () {
        if (this._fighter.qi < 60) {
            return false;
        }
        if (!this._fighter.hasEnergy(80, true)) {
            return false;
        }
        this._fighter.useQi(60);
        this._fighter.useEnergy(80);
        this._fighter.getCtrler().setDirectToTarget();
        this._ghostStepIng = true;
        this._ghostStepFrame = 30 * 0.4;
        this._fighter.isAllowBeHit = false;
        this._fighter.isCross = true;
        this.effectCtrler.ghostStep();
        return true;
    }; // end function
    FighterMcCtrler.prototype.renderGhostStep = function () {
        var _loc_1 = NaN;
        this._ghostStepFrame = this._ghostStepFrame - 1;
        if (this._ghostStepFrame <= 0) {
            if (this._ghostType == 1) {
                _loc_1 = this._fighter.getVecY();
                this._action.isJumping = false;
                this.endGhostStep();
                this._fighter.setVelocity(0, _loc_1);
                this._fighter.setDamping(0, (-_loc_1) / 10);
                this.setAirMove(true);
                return;
            }
            this.endGhostStep();
        }
        if (this._ghostType == 2) {
            if (GameLogic.isTouchBottomFloor(this._fighter)) {
                this.endGhostStep();
            }
        }
        return;
    }; // end function
    FighterMcCtrler.prototype.endGhostStep = function () {
        this._ghostStepIng = false;
        this.effectCtrler.endShadow();
        this.effectCtrler.endGhostStep();
        this._fighter.getCtrler().setDirectToTarget();
        this.idle();
        return;
    }; // end function
    return FighterMcCtrler;
}());
__reflect(FighterMcCtrler.prototype, "FighterMcCtrler");
//# sourceMappingURL=FighterMcCtrler.js.map