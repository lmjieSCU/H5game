var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var GameMode = (function () {
    function GameMode() {
        return;
    } // end function
    GameMode.getTeams = function () {
        return [{ id: 1, name: "P1" }, { id: 2, name: "P2" }];
    }; // end function
    GameMode.isTeamMode = function () {
        return this.currentMode == GameMode.TEAM_ACRADE || this.currentMode == GameMode.TEAM_VS_CPU || this.currentMode == GameMode.TEAM_VS_PEOPLE;
    }; // end function
    GameMode.isSingleMode = function () {
        return this.currentMode == GameMode.SINGLE_ACRADE || this.currentMode == GameMode.SINGLE_VS_CPU || this.currentMode == GameMode.SINGLE_VS_PEOPLE;
    }; // end function
    GameMode.isVsPeople = function () {
        return this.currentMode == GameMode.TEAM_VS_PEOPLE || this.currentMode == GameMode.SINGLE_VS_PEOPLE;
    }; // end function
    GameMode.isVsCPU = function (param1) {
        if (param1 === void 0) { param1 = true; }
        return this.currentMode == GameMode.TEAM_VS_CPU || this.currentMode == GameMode.SINGLE_VS_CPU || param1 && this.currentMode == GameMode.TRAINING;
    }; // end function
    GameMode.isAcrade = function () {
        return this.currentMode == GameMode.SINGLE_ACRADE || this.currentMode == GameMode.TEAM_ACRADE || this.currentMode == GameMode.SURVIVOR;
    }; // end function
    GameMode.TEAM_ACRADE = 10; //小队--闯关模式
    GameMode.TEAM_VS_PEOPLE = 11; //小队--真人对战
    GameMode.TEAM_VS_CPU = 12; //小队--电脑对战
    //
    GameMode.SINGLE_ACRADE = 20; //个人--闯关模式
    GameMode.SINGLE_VS_PEOPLE = 21; //个人--真人对战
    GameMode.SINGLE_VS_PEOPLE_TYPE = 0; //个人--真人对战--0自由匹配--1房间号匹配
    GameMode.SINGLE_VS_CPU = 22; //个人--电脑对战
    //
    GameMode.SURVIVOR = 30;
    GameMode.TRAINING = 40; //训练模式
    //
    GameMode.currentMode = GameMode.TRAINING; //默认设置模式(单人模式)
    return GameMode;
}());
__reflect(GameMode.prototype, "GameMode");
//# sourceMappingURL=GameMode.js.map