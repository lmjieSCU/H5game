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
var FighterAILogic = (function (_super) {
    __extends(FighterAILogic, _super);
    function FighterAILogic(param1, param2) {
        var _this = _super.call(this, param1, param2) || this;
        _this._moveKeep = 30;
        _this._catchMoveKeep = 10;
        _this._dashKeep = 200;
        _this._jumpKeep = 50;
        return _this;
    } // end function
    FighterAILogic.prototype.render = function () {
        _super.prototype.render.call(this);
        if (!this._fighter || !this._target) {
            return;
        }
        //--------------------------更新与攻击无关的命令
        this.updateMoveAI(); //通过比较x坐标来决定是否移动
        this.updateJumpAI(); //通过比较y坐标来决定是否跳跃
        this.updateJumpDownAI(); //通过比较y坐标来决定是否下跳
        this.updateHurtAI(); //  dashjump
        this.updateDefenseAI(); //通过判断对手是否正在攻击以及距离决定是否防御
        this.updateSpecialSkill(); //暂时无用
        this.updateGhostStep(); //判断距离
        return;
    }; // end function
    FighterAILogic.prototype.updateActionAI = function () {
        this.updateDashAI();
        this.updateAttackAI();
        this.updateSkill();
        this.updateBisha();
        this.updatecatch();
        this.updateAssist();
        return;
    }; // end function
    FighterAILogic.prototype.updateHurtAI = function () {
        this.dashJump = false;
        var _loc_1 = {};
        _loc_1["defult"] = [0, 0, 0.2, 1, 3, 5];
        _loc_1[11] = [0, 0, 0, 0, 0, 0];
        _loc_1[12] = [0, 0, 0, 0, 0, 0];
        _loc_1[13] = [0, 0, 0, 0, 0, 0];
        this.dashJump = this.getAIByFighterState(_loc_1);
        return;
    }; // end function
    FighterAILogic.prototype.updateMoveAI = function () {
        var _loc_4 = false;
        var _loc_3 = false;
        var _loc_5 = null;
        var _loc_2 = NaN;
        this.moveLeft = false; //每一次update时均置为false,则每次update后的结果只会使用一次
        this.moveRight = false;
        var _loc_1 = this._fighter.actionState == 20; //DEFENCE_ING
        if (_loc_1) {
            _loc_4 = this.getAIResult(1, 2, 4, 5, 6, 8); //boolean值,代表当前AI是否行动,random大于对应Level阈值才会行动
            if (_loc_4) {
                if (this._fighter.x > (this._target.getx() + 1)) {
                    this.moveLeft = true;
                }
                if (this._fighter.x < (this._target.getx() - 1)) {
                    this.moveRight = true;
                }
            }
            return;
        }
        //不处于防御状态
        if (this._moveFrame < GameConfig.FPS_GAME) {
            this._moveFrame = this._moveFrame + 1;
            _loc_3 = true;
        }
        else {
            _loc_5 = {};
            _loc_5["defult"] = [3, 5, 7, 8, 9, 10];
            _loc_5[10] = [2, 4, 5, 3, 1, 0]; //10 = ATTACK_ING
            _loc_5[11] = [2, 4, 3, 2, 0, 0]; //11 = SKILL_ING
            _loc_5[12] = [2, 1, 0, 0, 0, 0]; //12 = BISHA_ING
            _loc_5[13] = [2, 1, 0, 0, 0, 0]; //13 = BISHA_SUPER_ING
            _loc_3 = this.getAIByFighterState(_loc_5);
            if (_loc_3) {
                this._moveFrame = 0;
            }
        }
        if (_loc_3) {
            _loc_2 = this.catch1 || this.catch2 ? (this._catchMoveKeep) : (this._moveKeep); //catch 最小间距或move 最小间距
            if (this._fighter.x > this._target.getx() + _loc_2) {
                this.moveLeft = true;
            }
            if (this._fighter.x < this._target.getx() - _loc_2) {
                this.moveRight = true;
            }
        }
        if (!this.moveLeft && !this.moveRight) {
            this._moveFrame = GameConfig.FPS_GAME;
            if (this._fighter.direct == this._target.getdirect()) {
                if (this._fighter.x > this._target.getx()) {
                    this.moveLeft = true;
                }
                else {
                    this.moveRight = true;
                }
            }
        }
        return;
    }; // end function
    FighterAILogic.prototype.updateJumpAI = function () {
        var _loc_1 = {};
        if (this._isConting) {
            _loc_1["defult"] = [1, 2, 3, 2, 1, 0];
            _loc_1[21] = [0, 1, 2, 3, 3, 4]; //21 = HURT_ING
        }
        else if (this._fighter.y > this._target.gety() + this._jumpKeep) {
            _loc_1["defult"] = [2, 3, 4, 5, 6, 6]; //不在攻击就较大可能跳跃
            _loc_1[12] = [2, 1, 0, 0, 0, 0]; //12 = BISHA_ING
            _loc_1[13] = [2, 1, 0, 0, 0, 0]; //13 = BISHA_SUPER_ING,在攻击就较小可能跳跃
        }
        else {
            _loc_1["defult"] = [0.01, 0, 0, 0, 0, 0];
            _loc_1[12] = [0.02, 0, 0, 0, 0, 0]; //12 = BISHA_ING
            _loc_1[13] = [0.02, 0, 0, 0, 0, 0]; //13 = BISHA_SUPER_ING
        }
        this.jump = this.getAIByFighterState(_loc_1);
        if (this._isConting && this.jump) {
            this.addContOrder("jump", 10);
        }
        return;
    }; // end function
    FighterAILogic.prototype.updateJumpDownAI = function () {
        var _loc_1 = {};
        if (this._fighter.y < this._target.gety() - this._jumpKeep) {
            _loc_1["defult"] = [2, 3, 4, 5, 6, 6];
            _loc_1[12] = [2, 1, 0, 0, 0, 0];
            _loc_1[13] = [2, 1, 0, 0, 0, 0];
        }
        else {
            _loc_1["defult"] = [0.01, 0, 0, 0, 0, 0];
            _loc_1[12] = [0.02, 0, 0, 0, 0, 0];
            _loc_1[13] = [0.02, 0, 0, 0, 0, 0];
        }
        this.jumpDown = this.getAIByFighterState(_loc_1);
        return;
    }; // end function
    FighterAILogic.prototype.updateDashAI = function () {
        var _loc_3 = {};
        var _loc_2 = this.getTargetDistance(this._target).x;
        var _loc_1 = this._target.getx() > this._fighter.x ? (1) : (-1);
        if (this._fighter.energy < 40) {
            if (_loc_2 > this._dashKeep && this._fighter.direct == _loc_1) {
                _loc_3["defult"] = [0, 0, 0.1, 0.5, 0, 0];
                _loc_3[10] = [0, 0.05, 0.3, 1, 0, 0];
                _loc_3[11] = [0, 0.05, 0.3, 1, 0, 0];
                _loc_3[12] = [0, 0, 0, 0, 0, 0];
                _loc_3[13] = [0, 0, 0, 0, 0, 0];
            }
            else {
                _loc_3["defult"] = [0, 0, 0.05, 0, 0, 0];
                _loc_3[10] = [0, 0, 0, 0, 0, 0];
                _loc_3[11] = [0, 0, 0, 0, 0, 0];
                _loc_3[12] = [0, 0, 0, 0, 0, 0];
                _loc_3[13] = [0, 0, 0, 0, 0, 0];
            }
        }
        else if (_loc_2 > this._dashKeep && this._fighter.direct != this._target.getdirect()) {
            _loc_3["defult"] = [0.5, 1, 2, 5, 7, 9];
            _loc_3[10] = [0, 0, 0.1, 3, 1, 0];
            _loc_3[11] = [0, 0, 0.05, 1, 0, 0];
            _loc_3[12] = [0, 0, 0, 0, 0, 0];
            _loc_3[13] = [0, 0, 0, 0, 0, 0];
        }
        else {
            _loc_3["defult"] = [0, 0, 0.05, 0.1, 0, 0];
            _loc_3[10] = [0, 0, 0, 0, 0, 0];
            _loc_3[11] = [0, 0, 0, 0, 0, 0];
            _loc_3[12] = [0, 0, 0, 0, 0, 0];
            _loc_3[13] = [0, 0, 0, 0, 0, 0];
        }
        this.dash = this.getAIByFighterState(_loc_3);
        return;
    }; // end function
    FighterAILogic.prototype.updateDefenseAI = function () {
        var _loc_1 = {};
        var _loc_5 = null;
        var _loc_3 = null;
        if (this.defense) {
            _loc_1["defult"] = [10, 10, 10, 10, 10, 10]; //除了目标为以下状态时,始终保持防御;以下状态时基本不防御
            _loc_1[40] = [5, 4, 4, 3, 2, 1]; //40 = FREEZE
            _loc_1[0] = [2, 1, 1, 0, 0, 0]; //0 = NORMAL
            _loc_1[21] = [0, 0, 0, 0, 0, 0]; //21 = HURT_ING
            _loc_1[22] = [0, 0, 0, 0, 0, 0]; //22 = HURT_FLYING
            _loc_1[23] = [0, 0, 0, 0, 0, 0]; //23 = HURT_DOWN
            this.defense = this.getAIByFighterState(_loc_1);
            if (this.defense) {
                return;
            }
        }
        //解除防御或不在防御时,判断是否需要防御,此时判断对象为对手的FighterMain
        var _loc_2 = this.getTargetDistance(this._target);
        var _loc_6 = {};
        _loc_6["defult"] = [0, 0, 0, 0, 0, 0];
        if (_loc_2.x < 100 && _loc_2.y < 100) {
            _loc_6[10] = [0.5, 1, 3, 5, 7, 9]; //距离很近时应有较大概率防御
        }
        else {
            _loc_6[10] = [0.5, 1, 3, 2, 1, 0]; //距离很远时应有较小距离防御
        }
        _loc_6[11] = [1, 3, 5, 7, 9, 10]; //10,11,12,13均为攻击状态,应有较大概率防御
        _loc_6[12] = [2, 4, 6, 8, 10, 10];
        _loc_6[13] = [2, 4, 6, 8, 10, 10];
        this.defense = this.getAIByFighterState(_loc_6);
        if (this.defense) {
            return;
        }
        //对FighterMain的判断结果为无需防御时再对对手的bullet等子类再次判断
        var _loc_4 = this._fighter.getTargets();
        for (var _loc_7 in _loc_4) {
            if (_loc_4[_loc_7] != this._target) {
                if (_loc_4[_loc_7] instanceof Bullet && _loc_4[_loc_7].isAttacking()) {
                    _loc_3 = this.getTargetDistance(_loc_4[_loc_7]);
                    if (_loc_3.x < 200 && _loc_3.y < 150) {
                        this.defense = this.getAIResult(2, 4, 5, 7, 9, 10); //较大概率防
                    }
                    else {
                        this.defense = this.getAIResult(2, 4, 5, 5, 2, 1); //较小概率防
                    }
                    if (this.defense) {
                        return;
                    }
                }
                if (_loc_4[_loc_7] instanceof FighterAttacker && _loc_4[_loc_7].isAttacking) {
                    this.defense = this.getAIResult(2, 4, 5, 7, 9, 10); //不同AILevel有不同判断
                    if (this.defense) {
                        return;
                    }
                }
                if (_loc_4[_loc_7] instanceof Assister && _loc_4[_loc_7].isAttacking) {
                    this.defense = this.getAIResult(2, 4, 6, 8, 10, 10); //不同AILevel有不同判断
                    if (this.defense) {
                        return;
                    }
                }
            }
        }
        return;
    }; // end function
    FighterAILogic.prototype.updateAttackAI = function () {
        var _loc_4 = null;
        this.attack = false;
        this.attackAIR = false;
        if (!this._fighterAction.attack && !this._fighterAction.attackAIR) {
            return;
        }
        if (!this.targetCanBeHit()) {
            return;
        }
        var _loc_2 = {};
        _loc_2["defult"] = this._isConting ? ([1, 2, 3, 6, 9, 10]) : ([0.5, 1, 4, 6, 8, 10]);
        _loc_2[20] = [0.5, 1, 3, 2, 2, 1]; //20 = DEFENCE_ING
        _loc_2[16] = [0.5, 1, 1, 0.5, 0, 0]; // 16 = HURT_ACT_ING
        _loc_2[10] = [0.5, 1, 1, 0, 0, 0]; //10,11,12,13均与攻击有关
        _loc_2[11] = [0, 0, 0, 0, 0, 0];
        _loc_2[12] = [0, 0, 0, 0, 0, 0];
        _loc_2[13] = [0, 0, 0, 0, 0, 0];
        var _loc_1 = this.getAIByFighterState(_loc_2);
        if (!_loc_1) {
            return;
        }
        //决定攻击
        var _loc_3 = 10;
        if (this._isConting) {
            this.attack = true;
            this.attackAIR = this._fighter.y < this._target.gety();
            _loc_4 = this._fighter.getCtrler().getMcCtrl().getCurAction();
            if (_loc_4 == "砍1") {
                _loc_3 = 200; //优先级
            }
        }
        else {
            this.attack = this.targetInRange("kanmian");
            this.attackAIR = this.targetInRange("tkanmian") && this._fighter.y < this._target.gety();
            _loc_3 = 300;
        }
        if (this.attack) {
            this.addContOrder("attack", _loc_3);
        }
        if (this.attackAIR) {
            this.addContOrder("attackAIR", _loc_3);
        }
        return;
    }; // end function
    FighterAILogic.prototype.updateSkill = function () {
        this.skill1 = this._fighterAction.skill1 && this.getSkillAI("skill1", "kj1", "kj1mian", 10);
        this.skill2 = this._fighterAction.skill2 && this.getSkillAI("skill2", "kj2", "kj2mian", 10);
        this.zhao1 = this._fighterAction.zhao1 && this.getSkillAI("zhao1", "zh1", "zh1mian", 10);
        this.zhao2 = this._fighterAction.zhao2 && this.getSkillAI("zhao2", "zh2", "zh2mian", 10);
        this.zhao3 = this._fighterAction.zhao3 && this.getSkillAI("zhao3", "zh3", "zh3mian", 10);
        this.skillAIR = this._fighterAction.skillAIR && this.getSkillAI("skillAIR", "tz", "tzmian", 10);
        return;
    }; // end function
    //----------------------------------如 "skill1", "kj1", "kj1mian", 10
    FighterAILogic.prototype.getSkillAI = function (param1, param2, param3, param4) {
        var _loc_6 = {};
        var _loc_5 = false;
        if (this.isBreakAct(param2)) {
            _loc_6["defult"] = this._isConting ? ([0.1, 0.2, 0.5, 3, 6, 10]) : ([0, 0.2, 0.5, 2, 1, 0]); //在攻击则有更大可能释放技能
            _loc_6[20] = this._isConting ? ([0, 0.2, 0.7, 5, 7, 9]) : ([0.1, 0.2, 0.5, 1, 2, 2]); //20 = DEFENCE_ING
        }
        else {
            _loc_6["defult"] = this._isConting ? ([0, 0, 0.1, 1, 5, 10]) : ([0.1, 0.5, 1, 3, 2, 0.2]);
            _loc_6[20] = [0, 0, 1, 1, 0, 0];
        }
        _loc_6[16] = [0.5, 1, 0.5, 0, 0, 0];
        _loc_6[10] = [0, 0, 0, 1, 1, 2];
        _loc_6[11] = [0, 0, 0, 0, 0, 0];
        _loc_6[12] = [0, 0, 0, 0, 0, 0];
        _loc_6[13] = [0, 0, 0, 0, 0, 0];
        _loc_5 = this.getAIByFighterState(_loc_6) && this.targetCanBeHit() && this.targetInRange(param3);
        if (_loc_5) {
            if (this._isConting) {
                this.addContOrder(param1, this.isHitDownAct(param2) ? (param4) : (param4 + 100));
            }
        }
        return _loc_5;
    }; // end function
    FighterAILogic.prototype.updateBisha = function () {
        this.bisha = this._fighterAction.bisha && this.getBishaAI("bisha", "bs", "bsmian", 100, 100);
        this.bishaUP = this._fighterAction.bishaUP && this.getBishaAI("bishaUP", "sbs", "sbsmian", 100, 100);
        this.bishaSUPER = this._fighterAction.bishaSUPER && this.getBishaAI("bishaSUPER", "cbs", "cbsmian", 300, 200);
        this.bishaAIR = this._fighterAction.bishaAIR && this.getBishaAI("bishaAIR", "kbs", "kbsmian", 100, 210);
        return;
    }; // end function
    //-----------------------------------------如"bisha", "bs", "bsmian", 100, 100
    FighterAILogic.prototype.getBishaAI = function (param1, param2, param3, param4, param5) {
        var _loc_7 = {};
        var _loc_6 = false;
        if (this._fighter.qi >= param4) {
            if (this.isBreakAct(param2)) {
                _loc_7["defult"] = this._isConting ? ([0, 0, 0.3, 2, 5, 10]) : ([0.1, 0.2, 0.5, 2, 2, 2]);
                _loc_7[20] = this._isConting ? ([0, 0, 0.5, 3, 7, 9]) : ([0.1, 0.2, 1, 6, 8, 10]);
            }
            else {
                _loc_7["defult"] = this._isConting ? ([0, 0, 0.5, 4, 8, 10]) : ([0.2, 0.5, 1, 2, 2, 0]);
                _loc_7[21] = [0.2, 0.5, 1, 3, 5, 6];
                _loc_7[14] = [0.2, 0.5, 1, 3, 4, 4];
                _loc_7[20] = this._isConting ? ([0.2, 0.5, 1, 3, 2, 1]) : ([0.2, 0.5, 1, 2, 1, 0]);
            }
            _loc_7[16] = [0.2, 0.5, 0, 0, 0, 0];
            _loc_7[10] = [0, 0.2, 0.5, 2, 1, 1];
            _loc_7[11] = [0, 0, 0.1, 0, 0, 0];
            _loc_7[12] = [0, 0, 0.1, 0, 0, 0];
            _loc_7[13] = [0, 0, 0.1, 0, 0, 0];
            _loc_6 = this.getAIByFighterState(_loc_7) && this.targetCanBeHit() && this.targetInRange(param3);
        }
        if (_loc_6) {
            if (this._isConting) {
                this.addContOrder(param1, param5);
            }
        }
        return _loc_6;
    }; // end function
    FighterAILogic.prototype.updatecatch = function () {
        this.catch1 = false;
        this.catch2 = false;
        var _loc_2 = {};
        if (this._targetFighter && (this._targetFighter.actionState == 21 || this._targetFighter.actionState == 22 || this._targetFighter.actionState == 23)) {
            return;
        }
        var _loc_1 = this.getTargetDistance(this._target);
        if (_loc_1.x < 50) {
            _loc_2["defult"] = [0, 0.5, 1, 3, 2, 1];
            _loc_2[20] = [1, 2, 4, 5, 7, 10];
        }
        else {
            _loc_2["defult"] = [0, 0.5, 1, 0, 0, 0];
            _loc_2[20] = [1, 2, 3, 4, 3, 2];
        }
        this.catch1 = this.getAIByFighterState(_loc_2) && this.targetCanBeHit();
        this.catch2 = this.getAIByFighterState(_loc_2) && this.targetCanBeHit();
        if (this.catch1) {
            this.addContOrder("catch1", 150);
        }
        if (this.catch2) {
            this.addContOrder("catch2", 110);
        }
        return;
    }; // end function
    FighterAILogic.prototype.updateSpecialSkill = function () {
        var _loc_1 = null;
        if (this._fighter.actionState == 21) {
            _loc_1 = {};
            _loc_1["defult"] = [0, 0, 0.1, 0.5, 1, 2];
            _loc_1[11] = [0, 0, 0.1, 1, 2, 3];
            this.specialSkill = this.getAIByFighterState(_loc_1);
        }
        return;
    }; // end function
    FighterAILogic.prototype.updateAssist = function () {
        var _loc_1 = {};
        _loc_1["defult"] = [0, 0.02, 0.05, 0.5, 1, 0];
        _loc_1[20] = [0, 0.05, 0.1, 1, 2, 3];
        _loc_1[10] = [0, 0, 0, 1, 2, 2];
        _loc_1[11] = [0, 0, 0, 1, 1, 1];
        _loc_1[12] = [0, 0, 0, 0, 0, 0];
        _loc_1[13] = [0, 0, 0, 0, 0, 0];
        this.assist = this.getAIByFighterState(_loc_1);
        return;
    }; // end function
    FighterAILogic.prototype.updateGhostStep = function () {
        var _loc_4 = null;
        var _loc_2 = null;
        var _loc_3 = this.getTargetDistance(this._target);
        if (_loc_3.x > 80 || _loc_3.y > 80) {
            return;
        }
        if (this._fighter.actionState != 10 && this._fighter.actionState != 11) {
            return;
        }
        var _loc_1 = {};
        _loc_1["defult"] = [0, 0, 0, 0, 0, 0];
        _loc_1[21] = [0, 0, 0, 0.2, 0.3, 0.5]; // 21 = HURT_ING,被打，对方被打时小概率使用瞬步
        this.ghostStep = this.getAIByFighterState(_loc_1);
        if (this._target.gety() - this._fighter.y < -80 && this._target.gety() - this._fighter.y > -100) {
            _loc_4 = {};
            _loc_4["defult"] = [0, 0, 0, 0, 0, 0];
            _loc_4[21] = [0, 0, 0.1, 0.1, 0.1, 0.1];
            this.ghostJump = this.getAIByFighterState(_loc_1);
        }
        else {
            this.ghostJump = false;
        }
        if (this._target.gety() - this._fighter.y < 80 && this._target.gety() - this._fighter.y > 100) {
            _loc_2 = {};
            _loc_2["defult"] = [0, 0, 0, 0, 0, 0];
            _loc_2[21] = [0, 0, 0, 0.1, 0.1, 0.1];
            this.ghostJumpDown = this.getAIByFighterState(_loc_2);
        }
        else {
            this.ghostJumpDown = false;
        }
        return;
    }; // end function
    return FighterAILogic;
}(FighterAILogicBase));
__reflect(FighterAILogic.prototype, "FighterAILogic");
//# sourceMappingURL=FighterAILogic.js.map