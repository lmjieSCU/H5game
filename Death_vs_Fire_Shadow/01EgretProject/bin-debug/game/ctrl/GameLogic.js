var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameLogic = (function () {
    function GameLogic() {
        return;
    } // end function
    GameLogic.initGameLogic = function (param1, param2) {
        GameLogic._map = param1;
        GameLogic._camera = param2;
        return;
    }; // end function
    GameLogic.clear = function () {
        GameLogic._map = null;
        GameLogic._camera = null;
        return;
    }; // end function
    /*
    *判断人物是否在空中
    */
    GameLogic.isInAir = function (param1) {
        if (!GameLogic._map) {
            // console.log("error:GameLogic.map is null!");
            return false;
        }
        if (param1.getVecY() < 0) {
            param1.isTouchBottom = false;
            return true;
        }
        if (param1.y > GameLogic._map.playerBottom - 12) {
            param1.y = GameLogic._map.playerBottom;
            param1.isTouchBottom = true;
            return false;
        }
        param1.isTouchBottom = false;
        var _loc_2 = param1.getVecY() < 5 * GameConfig.SPEED_PLUS;
        if (!_loc_2) {
            return true;
        }
        var _loc_4 = 10 * GameConfig.SPEED_PLUS_DEFAULT;
        if (param1 instanceof FighterAttacker) {
            _loc_4 = 60 * GameConfig.SPEED_PLUS_DEFAULT;
        }
        var _loc_3 = GameLogic._floorContact[param1.hashCode];
        if (_loc_3) {
            if (_loc_3.hitTest(param1.x, param1.y, _loc_4)) {
                param1.y = _loc_3.y;
                return false;
            }
            delete GameLogic._floorContact[param1.hashCode];
            return true;
        }
        _loc_3 = GameLogic._map.getFloorHitTest(param1.x, param1.y, _loc_4);
        if (_loc_3) {
            param1.y = _loc_3.y;
            GameLogic._floorContact[param1.hashCode] = _loc_3;
            return false;
        }
        return true;
    }; // end function
    GameLogic.isTouchBottomFloor = function (param1) {
        if (!GameLogic._map) {
            //GameLogic.//console.log("error:map is null!");
            return false;
        }
        return param1.gety() > GameLogic._map.playerBottom;
    }; // end function
    GameLogic.isOutRange = function (param1) {
        if (!GameLogic._map) {
            //GameLogic.//console.log("error:map is null!");
            return false;
        }
        var _loc_2 = 20;
        return param1.getx() > GameLogic._map.right + _loc_2 || param1.getx() < GameLogic._map.left - _loc_2 || param1.gety() > GameLogic._map.bottom + _loc_2;
    }; // end function
    GameLogic.addHits = function (param1, param2, param3) {
        if (GameLogic._hitsObj[param1] == undefined) {
            GameLogic._hitsObj[param1] = { hits: 0, targetID: param2, uiID: param3 };
        }
        GameLogic._hitsObj[param1].targetID = param2;
        GameLogic._hitsObj[param1].hits = GameLogic._hitsObj[param1].hits + 1;
        return GameLogic._hitsObj[param1].hits;
    }; // end function
    GameLogic.clearHits = function (param1) {
        GameLogic._hitsObj[param1].hits = 0;
        GameLogic._hitsObj[param1].targetID = null;
        GameLogic._hitsObj[param1].uiID = null;
        return;
    }; // end function
    GameLogic.getHitsObj = function (param1) {
        return GameLogic._hitsObj[param1];
    }; // end function
    GameLogic.getHitsObjByTargetId = function (param1) {
        for (var _loc_2 in GameLogic._hitsObj) {
            // console.log(GameLogic._hitsObj[_loc_2].uiID)
            if (GameLogic._hitsObj[_loc_2].targetID == param1) {
                return GameLogic._hitsObj[_loc_2];
            }
        }
        return null;
    }; // end function
    GameLogic.clearHitsByTargetId = function (param1) {
        for (var _loc_2 in GameLogic._hitsObj) {
            if (GameLogic._hitsObj[_loc_2].targetID == param1) {
                delete GameLogic._hitsObj[_loc_2];
            }
        }
        return;
    }; // end function
    GameLogic.checkFighterDie = function (param1) {
        if (GameMode.currentMode == GameMode.TRAINING) {
            return false;
        }
        return param1.hp <= 0;
    }; // end function
    GameLogic.hitTarget = function (param1, param2, param3) {
        if (!param2 || !param3) {
            return;
        }
        if (param2 instanceof FighterMain == false) {
            return;
        }
        if (param3 instanceof FighterMain == false) {
            return;
        }
        if (param3.actionState != 21 && param3.actionState != 22) {
            return;
        }
        var _loc_4 = {};
        _loc_4.target = param3;
        _loc_4.hitvo = param1;
        FighterEventDispatcher.dispatchEvent(param2, "HIT_TARGET", _loc_4); //触发"HIT_TARGET"事件
        return;
    }; // end function
    GameLogic.addScoreByHitTarget = function (param1) {
        var _loc_4 = param1.power;
        var score = param1.power;
        if (param1.isBisha()) {
            score = _loc_4 * 2;
        }
        if (param1.id == "sh1" || param1.id == "sh2") {
            score = score + 500;
        }
        if (param1.isBreakDef) {
            score = score + 200;
        }
        if (param1.hurtType == 1) {
            score = score + 200;
        }
        var _loc_3 = this.getHitsObj(1);
        var _loc_2 = _loc_3 ? (_loc_3.hits) : (0);
        if (_loc_2 < 4) {
            score = score + _loc_2 * 50;
        }
        else {
            score = score + _loc_2 * 100;
        }
        this.addScore(score);
        GameEvent.dispatchEvent2("SCORE_UPDATE");
        return;
    }; // end function
    GameLogic.addScoreByKO = function () {
        var _loc_1 = 0;
        if (GameCtrl.I.gameRunData.p1FighterGroup.currentFighter.lastHitVO && GameCtrl.I.gameRunData.p1FighterGroup.currentFighter.lastHitVO.isBisha()) {
            this.addScore(2000);
        }
        if (GameCtrl.I.gameRunData.p1FighterGroup.currentFighter.hp == GameCtrl.I.gameRunData.p1FighterGroup.currentFighter.hpMax) {
            this.addScore(20000);
        }
        else {
            this.addScore(3000);
        }
        GameEvent.dispatchEvent2("SCORE_UPDATE");
        return;
    }; // end function
    GameLogic.addScoreByPassMission = function () {
        if (GameMode.currentMode == GameMode.TEAM_ACRADE && GameCtrl.I.gameRunData.p1FighterGroup.currentFighter == GameCtrl.I.gameRunData.p1FighterGroup.fighter1) {
            this.addScore(15000);
        }
        else {
            this.addScore(5000);
        }
        return;
    }; // end function
    GameLogic.addScore = function (param1) {
        var _loc_2 = GameData.I.config.keyInputMode == 0 ? (1) : (0.8);
        GameData.I.score = GameData.I.score + param1 * _loc_2;
        return;
    }; // end function
    GameLogic.loseScoreByContinue = function () {
        GameData.I.score = GameData.I.score - 10000;
        if (GameData.I.score < 0) {
            GameData.I.score = 0;
        }
        return;
    }; // end function
    /*
    *判断人物是否达到地图边界,使其不越出地图
    */
    GameLogic.fixGameSpritePosition = function (param1) {
        var _loc_7 = NaN;
        var _loc_9 = NaN;
        var _loc_4 = NaN;
        var _loc_6 = null;
        var _loc_3 = NaN;
        var _loc_2 = NaN;
        var _loc_8 = false;
        if (param1.allowCrossMapXY() == false) {
            _loc_7 = GameLogic._map.left + 10;
            _loc_9 = GameLogic._map.right - 10;
            _loc_8 = false;
            if (param1.getx() <= _loc_7) {
                param1.setx(_loc_7);
                _loc_8 = true;
            }
            if (param1.getx() >= _loc_9) {
                param1.setx(_loc_9);
                _loc_8 = true;
            }
            param1.setIsTouchSide(_loc_8);
        }
        if (param1.allowCrossMapBottom() == false) {
            if (param1.gety() > GameLogic._map.bottom) {
                param1.sety(GameLogic._map.bottom);
            }
        }
        return;
    }; // end function
    GameLogic.resetFighterHP = function (param1) {
        var _loc_2 = 1;
        if (GameMode.isAcrade() && MessionModel.I.getCurrentMessionStage()) {
            _loc_2 = MessionModel.I.getCurrentMessionStage().hpRate;
        }
        if (param1.customHpMax > 0) {
            var _loc_3 = param1.customHpMax * GameData.I.config.fighterHP * _loc_2;
            param1.hpMax = param1.customHpMax * GameData.I.config.fighterHP * _loc_2;
            param1.hp = _loc_3;
        }
        else {
            _loc_3 = 1000 * GameData.I.config.fighterHP * _loc_2;
            param1.hpMax = _loc_3;
            param1.hp = _loc_3;
        }
        param1.isAlive = true;
        return;
    }; // end function
    GameLogic.setMessionEnemyAttack = function (param1) {
        var _loc_2 = MessionModel.I.getCurrentMessionStage();
        if (_loc_2) {
            param1.attackRate = _loc_2.attackRate;
        }
        return;
    }; // end function
    GameLogic._floorContact = [];
    GameLogic._hitsObj = {};
    return GameLogic;
}());
__reflect(GameLogic.prototype, "GameLogic");
//# sourceMappingURL=GameLogic.js.map