var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TeamMap = (function () {
    function TeamMap() {
        this.teams = new Array();
        this._teamObj = new Array();
        return;
    } // end 
    TeamMap.prototype.clear = function () {
        this._teamObj = {};
        return;
    }; // end 
    TeamMap.prototype.getTeam = function (param1) {
        return this._teamObj[param1];
    }; // end 
    TeamMap.prototype.getOtherTeams = function (param1) {
        var _loc_2 = new Array();
        for (var _loc_3 in this._teamObj) {
            if (this._teamObj[_loc_3].id != param1) {
                _loc_2.push(this._teamObj[_loc_3]);
            }
        }
        return _loc_2;
    }; // end 
    TeamMap.prototype.add = function (param1) {
        this._teamObj[param1.id] = param1;
        this.refreshTeams();
        return;
    }; // end 
    TeamMap.prototype.remove = function (param1) {
        this._teamObj.splice(param1.id, 1);
        this.refreshTeams();
        return;
    }; // end 
    TeamMap.prototype.refreshTeams = function () {
        this.teams = new Array();
        for (var _loc_1 in this._teamObj) {
            this.teams.push(this._teamObj[_loc_1]);
        }
        return;
    }; // end 
    return TeamMap;
}());
__reflect(TeamMap.prototype, "TeamMap");
//# sourceMappingURL=TeamMap.js.map