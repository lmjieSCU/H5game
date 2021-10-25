var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameModel = (function () {
    function GameModel() {
        this.isTest = false;
        this.aimObtained = new Dicts();
        this.aimTarget = new Dicts();
        return;
    }
    Object.defineProperty(GameModel.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (arg1) {
            this._score = arg1;
            EventManager.dispatchEvent(new GameEvents(GameEvents.SCORE_CHANGE));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameModel.prototype, "time", {
        get: function () {
            return this._time;
        },
        set: function (arg1) {
            this._time = arg1;
            EventManager.dispatchEvent(new GameEvents(GameEvents.TIME_CHANGE));
            if (arg1 <= 10 && arg1 > 0) {
                SoundCtrl.I.playmusic("warningtime");
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GameModel.prototype, "step", {
        get: function () {
            return this._step;
        },
        set: function (arg1) {
            this._step = arg1;
            if (this._step <= 5 && this._step > 0) {
                SoundCtrl.I.playmusic("warningmove");
            }
            EventManager.dispatchEvent(new GameEvents(GameEvents.STEP_CHANGE));
        },
        enumerable: true,
        configurable: true
    });
    GameModel.prototype.reset = function () {
        // for (let loc1 in this.aim.dict) {
        //     delete this.aim.dict[loc1];
        // }
        // let loc2 = 0;
        // for (let loc1 in this.aimOrg.dict) {
        //     delete this.aimOrg.dict[loc1];
        // }
        this.aimObtained.clear();
        this.aimTarget.clear();
        this.isSuccess = false;
        this.score = 0;
        return;
    };
    /**重置目标*/
    GameModel.prototype.addAim = function (_aimType, _aimNum) {
        this.aimObtained.put(_aimType, 0);
        this.aimTarget.put(_aimType, _aimNum);
        return;
    };
    /**修正已获得目标数,判断是否满足要求 */
    GameModel.prototype.offsetAim = function (AimType, Aim_hadNum) {
        if (this.aimObtained.dict[AimType] != undefined) {
            this.aimObtained.dict[AimType] = this.aimObtained.dict[AimType] + Aim_hadNum;
            if (this.aimObtained.dict[AimType] >= this.aimTarget.dict[AimType]) {
                this.aimObtained.dict[AimType] = this.aimTarget.dict[AimType];
            }
            EventManager.dispatchEvent(new GameEvents(GameEvents.AIMS_CHANGE, { "type": AimType, "value": this.aimObtained.dict[AimType], "orgValue": this.aimTarget.dict[AimType] }));
        }
        return;
    };
    /**获得剩余的水果目标数量*/
    GameModel.prototype.getLeftFruitAim = function (arg1) {
        var loc2 = 0;
        var loc4 = 0;
        var loc1 = [];
        var loc5 = 0;
        for (var loc3 in this.aimObtained.dict) {
            if (!(Number(loc3) == AimType.FRUIT1 || Number(loc3) == AimType.FRUIT2 || Number(loc3) == AimType.FRUIT3)) {
                continue;
            }
            loc2 = 0;
            while (loc2 < this.aimTarget.dict[loc3] - this.aimObtained.dict[loc3]) {
                loc1.push(Number(loc3));
                ++loc2;
            }
        }
        loc2 = 0;
        while (loc2 < arg1.length) {
            loc4 = (loc1.length - 1);
            while (loc4 >= 0) {
                if (loc1[loc4] == arg1[loc2]) {
                    loc1.splice(loc4, 1);
                }
                --loc4;
            }
            ++loc2;
        }
        return loc1;
    };
    /**检查是否已经达到通关要求 */
    GameModel.prototype.checkAimComplete = function () {
        for (var loc2 in this.aimObtained.dict) {
            if (this.aimObtained.dict[loc2] < this.aimTarget.dict[loc2]) {
                return false;
            }
        }
        return true;
    };
    GameModel.prototype.isScoreAimLevel = function () {
        for (var loc1 in this.aimObtained.dict) {
            if (this.aimObtained.dict[loc1] == AimType.SCORE) {
                return true;
            }
        }
        return false;
    };
    return GameModel;
}());
__reflect(GameModel.prototype, "GameModel");
//# sourceMappingURL=GameModel.js.map