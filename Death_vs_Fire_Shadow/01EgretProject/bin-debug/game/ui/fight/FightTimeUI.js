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
var FightTimeUI = (function (_super) {
    __extends(FightTimeUI, _super);
    function FightTimeUI(param1) {
        var _this = _super.call(this) || this;
        _this.dot = new egret.Bitmap();
        _this.dot2 = new egret.Bitmap();
        var _loc_3 = null;
        _this._ui = param1;
        var _loc_2 = GameCtrl.I.gameRunData.gameTimeMax;
        if (_loc_2 == -1) {
            _this._renderTime = false;
            _this._ui.getChildMovie("wuxian").visible = true;
        }
        else {
            // this._renderTime = true;
            // _loc_3 = new zmovie.ZMovieClip(["score_num_json"],RES.getRes("fightui_json"),"root");
            // this._numMc = new MCNumber(_loc_3, 0, 1, 20, 2);
            // this._numMc.x = -22;
            // this._numMc.y = -15;
            // this._ui.addChild(this._numMc._mc);
            // this._numMc.number = _loc_2;
            _this._renderTime = true;
            var firstNum = _loc_2 / 10;
            var secondNum = _loc_2 % 10;
            _this._ui.getChildMovie("wuxian").visible = false;
            _this.dot.texture = RES.getRes("score_num_json").getTexture("time_txtmc_" + (firstNum + 1));
            _this.dot.anchorOffsetX = _this.dot.width / 2;
            _this.dot.anchorOffsetY = _this.dot.height / 2;
            _this.dot.x = -10;
            _this.dot.y = 0;
            _this._ui.addChild(_this.dot);
            _this.dot2.texture = RES.getRes("score_num_json").getTexture("time_txtmc_" + (secondNum + 1));
            _this.dot2.anchorOffsetX = _this.dot.width / 2;
            _this.dot2.anchorOffsetY = _this.dot.height / 2;
            _this.dot2.x = 10;
            _this.dot2.y = 0;
            _this._ui.addChild(_this.dot2);
        }
        return _this;
    } // end function
    Object.defineProperty(FightTimeUI.prototype, "timeUI", {
        get: function () {
            return this._ui;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    FightTimeUI.prototype.render = function () {
        if (!this._renderTime) {
            return;
        }
        var _loc_1 = GameCtrl.I.gameRunData.gameTime;
        //this._numMc.number = _loc_1;
        var firstNum = Math.floor(_loc_1 / 10);
        var secondNum = Math.floor(_loc_1 % 10);
        this.dot.texture = RES.getRes("score_num_json").getTexture("time_txtmc_" + (firstNum + 1));
        this.dot2.texture = RES.getRes("score_num_json").getTexture("time_txtmc_" + (secondNum + 1));
        return;
    }; // end function
    return FightTimeUI;
}(egret.DisplayObject));
__reflect(FightTimeUI.prototype, "FightTimeUI");
//# sourceMappingURL=FightTimeUI.js.map