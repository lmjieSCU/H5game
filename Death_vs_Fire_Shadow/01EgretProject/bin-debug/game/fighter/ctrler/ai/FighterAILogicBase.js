var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FighterAILogicBase = (function () {
    function FighterAILogicBase(param1, param2) {
        this._contOrder = [];
        this._breakActCache = {};
        this._hitDownActCache = {};
        this._contOrder = [];
        this.AILevel = param1;
        this._fighter = param2;
        return;
    } // end function
    FighterAILogicBase.prototype.destory = function () {
        this._fighter = null;
        this._fighterAction = null;
        this._target = null;
        this._targetFighter = null;
        this._breakActCache = null;
        this._hitDownActCache = null;
        return;
    }; // end function
    FighterAILogicBase.prototype.addContOrder = function (param1, param2) {
        for (var i = 0; i < this._contOrder.length; i++) {
            if (this._contOrder[i].id == param1) {
                this._contOrder[i].order = param2; //存在则更新,不存在则增加
                return;
            }
        }
        this._contOrder.push({ id: param1, order: param2 });
        return;
    }; // end function
    FighterAILogicBase.prototype.updateConting = function () {
        this._isConting = this._fighter.actionState == 10 || this._fighter.actionState == 11 || this._fighter.actionState == 12 || this._fighter.actionState == 13;
        return;
    }; // end function
    FighterAILogicBase.prototype.render = function () {
        this._target = this._fighter.getCurrentTarget();
        this._targetFighter = this._target;
        this.updateConting(); //是否正在攻击
        if (!this._fighterAction) {
            this._fighterAction = this._fighter.getCtrler().getMcCtrl().getAction();
        }
        this.updateActionAI();
        this.updateContOrder();
        return;
    }; // end function
    FighterAILogicBase.prototype.updateContOrder = function () {
        var _loc_2 = 0;
        var _loc_1 = null;
        if (this._contOrder.length < 1) {
            return;
        }
        // Flash.sortOn(this._contOrder, "order", 2);  //flash语法
        this._contOrder.sort(this.Fun_compare);
        _loc_2 = 1; //留下第一个命令
        while (_loc_2 < this._contOrder.length) {
            _loc_1 = this._contOrder[_loc_2].id;
            this[_loc_1] = false; //修改对应成员变量值
            _loc_2++;
        }
        this._contOrder = [];
        return;
    }; // end function
    FighterAILogicBase.prototype.Fun_compare = function (a, b) {
        if (a.order > b.order) {
            return -1;
        }
        return 1;
    };
    FighterAILogicBase.prototype.updateActionAI = function () {
        return;
    }; // end function
    FighterAILogicBase.prototype.getAIByFighterState = function (param1) {
        var _loc_3 = null;
        var _loc_2 = param1["defult"];
        var _loc_4 = this._targetFighter ? (this._targetFighter.actionState) : (-1); //对方的状态
        _loc_3 = (param1 && param1[_loc_4]) ? (param1[_loc_4]) : (_loc_2); //自身也有对应状态判断值则使用,反之使用defalut
        return this.getAIResult(_loc_3[0], _loc_3[1], _loc_3[2], _loc_3[3], _loc_3[4], _loc_3[5]);
    }; // end function
    FighterAILogicBase.prototype.getAIResult = function (param1, param2, param3, param4, param5, param6) {
        var _loc7_ = Math.random() * 10;
        switch (Number(this.AILevel)) {
            case 0:
            case 1:
                return _loc7_ < param1;
            case 2:
                return _loc7_ < param2;
            case 3:
                return _loc7_ < param3;
            case 4:
                return _loc7_ < param4;
            case 5:
                return _loc7_ < param5;
        }
    }; // end function
    FighterAILogicBase.prototype.getTargetDistance = function (param1) {
        var _loc_2 = Math.abs(param1.getx() - this._fighter.x);
        var _loc_3 = Math.abs(param1.gety() - this._fighter.y);
        return new egret.Point(_loc_2, _loc_3);
    }; // end function
    FighterAILogicBase.prototype.targetInDistance = function (param1, param2, param3) {
        var _loc_4 = this.getTargetDistance(param1);
        return _loc_4.x <= param2 && _loc_4.y <= param3;
    }; // end function
    FighterAILogicBase.prototype.targetInRange = function (param1) {
        var _loc_3 = this._target.getBodyArea();
        if (!_loc_3) {
            return false;
        }
        var _loc_2 = this._fighter.getHitRange(param1);
        if (!_loc_2) {
            return false;
        }
        return _loc_3.intersects(_loc_2);
        //return _loc3_.intersection(_loc_2).isEmpty() == false
    }; // end function
    FighterAILogicBase.prototype.mergeRateObject = function (param1, param2) {
        var _loc3_ = 0;
        var _loc6_ = 0;
        var _loc5_ = param2;
        for (var _loc4_1_ in param2) {
            var _loc4_ = param2[_loc4_1_];
            if (param1[_loc4_] == undefined) {
                param1[_loc4_] = param2[_loc4_];
            }
            else {
                while (_loc3_ < param2[_loc4_].length) {
                    if (param1[_loc4_][_loc3_] < param2[_loc4_][_loc3_]) {
                        param1[_loc4_][_loc3_] = param2[_loc4_][_loc3_];
                    }
                    _loc3_++;
                }
            }
        }
        return;
    }; // end function
    FighterAILogicBase.prototype.isBreakAct = function (param1) {
        if (this._breakActCache[param1] != undefined) {
            return this._breakActCache[param1];
        }
        var _loc_2 = this._fighter.getCtrler().hitModel.getHitVOLike(param1);
        for (var _loc_3 in _loc_2) {
            if (_loc_2[_loc_3].isBreakDef) {
                this._breakActCache[param1] = true;
                return true;
            }
        }
        this._breakActCache[param1] = false;
        return false;
    }; // end function
    FighterAILogicBase.prototype.isHitDownAct = function (param1) {
        if (this._hitDownActCache[param1] != undefined) {
            return this._hitDownActCache[param1];
        }
        var _loc_2 = this._fighter.getCtrler().hitModel.getHitVOLike(param1);
        for (var _loc_3 in _loc_2) {
            if (_loc_2[_loc_3].hurtType == 1) {
                this._breakActCache[param1] = true;
                return true;
            }
        }
        this._breakActCache[param1] = false;
        return false;
    }; // end function
    FighterAILogicBase.prototype.targetCanBeHit = function () {
        if (!this._target) {
            return false;
        }
        if (this._targetFighter) {
            return this._targetFighter.isAllowBeHit;
        }
        return this._target.getBodyArea() != null;
    }; // end function
    return FighterAILogicBase;
}());
__reflect(FighterAILogicBase.prototype, "FighterAILogicBase");
//# sourceMappingURL=FighterAILogicBase.js.map