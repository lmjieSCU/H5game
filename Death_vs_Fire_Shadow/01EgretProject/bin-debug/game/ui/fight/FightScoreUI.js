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
var FightScoreUI = (function (_super) {
    __extends(FightScoreUI, _super);
    function FightScoreUI(param1) {
        var _this = _super.call(this) || this;
        _this._ui = param1;
        var _loc_2 = new zmovie.ZMovieClip(["score_num_json"], RES.getRes("fightui_json"), "root");
        _this._nummc = new MCNumber(_loc_2, 0, 1, 10, 10);
        return _this;
    } // end function
    FightScoreUI.prototype.setScore = function (param1) {
        this._nummc.number = param1;
        return;
    }; // end function
    return FightScoreUI;
}(egret.DisplayObject));
__reflect(FightScoreUI.prototype, "FightScoreUI");
//# sourceMappingURL=FightScoreUI.js.map