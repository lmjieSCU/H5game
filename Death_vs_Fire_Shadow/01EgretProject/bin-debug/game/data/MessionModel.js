var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var MessionModel = (function () {
    function MessionModel() {
        this.AI_LEVEL = 6;
        this._messions = [];
        return;
    } // end function
    MessionModel.prototype.initByXML = function () {
        var Modes = egret.XML.parse(misson_conf.xml);
        var children = Modes.children;
        for (var key in children) {
            var val = children[Number(key)];
            var _loc_2 = new MessionVO();
            _loc_2.initByXML(val);
            this._messions.push(_loc_2);
        }
        return;
    }; // end function
    MessionModel.prototype.getMession = function (param1, param2) {
        for (var _loc_3 in this._messions) {
            if (this._messions[_loc_3].comicType == param1 && this._messions[_loc_3].gameMode == param2) {
                return this._messions[_loc_3];
            }
        }
        return null;
    }; // end function
    MessionModel.prototype.getCurrentMessionStage = function () {
        return this._curStage;
    }; // end function
    MessionModel.prototype.initMession = function () {
        var _loc_5 = 0;
        var _loc_4 = GameCtrl.I.gameRunData.p1FighterGroup.fighter1.data;
        var _loc_1 = GameMode.isTeamMode() ? (0) : (1);
        var _loc_3 = this.getMession(_loc_4.comicType, _loc_1);
        this._curMession = _loc_3;
        this._curStage = _loc_3.stageList[this._curStageId];
        GameData.I.p2Select = GameData.I.p2Select || new SelectVO();
        var _loc_2 = this._curStage.getFighters();
        while (_loc_5 < _loc_2.length) {
            //GameData.I.p2Select["fighter" + (_loc_5 + 1)] = _loc_2[_loc_5];
            //添加
            GameLoader_lmj.loadFighter(2, _loc_2[_loc_5]);
            _loc_5++;
        }
        // GameLoader_lmj.loadAssister(2,this._curStage.assister);
        //GameData.I.p2Select.fuzhu = this._curStage.assister;
        GameLoader_lmj.LoadMap(this._curStage.map);
        //GameData.I.selectMap = this._curStage.map;
        this.AI_LEVEL = GameData.I.config.AI_level;
        //this.trace("p1::", GameData.I.p1Select.toString());
        return;
    }; // end function
    MessionModel.prototype.reset = function () {
        this._curStageId = 0;
        this._curStage = null;
        this._curMession = null;
        GameData.I.score = 0;
        return;
    }; // end function
    MessionModel.prototype.messionComplete = function () {
        if (this.missionAllComplete()) {
            return;
        }
        this._curStageId = (this._curStageId + 1);
        this.initMession();
        if (GameMode.isAcrade()) {
            GameLogic.addScoreByPassMission();
        }
        return;
    }; // end function
    MessionModel.prototype.missionAllComplete = function () {
        //return false;
        return this._curStageId >= (this._curMession.stageList.length - 1);
    }; // end function
    Object.defineProperty(MessionModel, "I", {
        get: function () {
            if (!MessionModel._i) {
                MessionModel._i = new MessionModel;
            }
            return MessionModel._i;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    return MessionModel;
}());
__reflect(MessionModel.prototype, "MessionModel");
//# sourceMappingURL=MessionModel.js.map