var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var TrainingCtrler = (function () {
    function TrainingCtrler() {
        this._trainAddDelay = [];
        this._fighters = [];
    }
    TrainingCtrler.prototype.initlize = function (param1) {
        this._fighters = param1;
        var _loc4_ = 0;
        var _loc3_ = this._fighters;
        for (var _loc2_ in this._fighters) {
            this._fighters[_loc2_].qi = 300;
        }
        this._trainAddDelay = {};
        StateCtrl.I.transOut(null, true);
    };
    TrainingCtrler.prototype.destory = function () {
        this._fighters = null;
        this._trainAddDelay = null;
    };
    TrainingCtrler.prototype.render = function () {
        var _loc2_ = null;
        var _loc1_ = null;
        var _loc8_ = 0;
        var _loc7_ = this._fighters;
        for (var _loc3_1 in this._fighters) {
            var _loc3_ = this._fighters[_loc3_1];
            _loc2_ = _loc3_.id + "_hp";
            if (_loc3_.actionState == 21 || _loc3_.actionState == 22) {
                this._trainAddDelay[_loc2_] = 1 * GameConfig.FPS_GAME;
            }
            else if (this._trainAddDelay[_loc2_] != undefined && this._trainAddDelay[_loc2_] > 0) {
                var _loc4_ = this._trainAddDelay;
                var _loc5_ = _loc2_;
                var _loc6_ = Number(_loc4_[_loc5_]) - 1;
                _loc4_[_loc5_] = _loc6_;
                if (this._trainAddDelay[_loc2_] <= 0) {
                    _loc3_.hp = _loc3_.hpMax;
                }
            }
            _loc1_ = _loc3_.id + "_qi";
            if (this._trainAddDelay[_loc1_] != undefined && this._trainAddDelay[_loc1_] > 0) {
                _loc4_ = this._trainAddDelay;
                _loc5_ = _loc1_;
                _loc6_ = Number(_loc4_[_loc5_]) - 1;
                _loc4_[_loc5_] = _loc6_;
                if (this._trainAddDelay[_loc1_] <= 0) {
                    _loc3_.qi = 300;
                }
            }
            else if (_loc3_.qi == 300) {
                this._trainAddDelay[_loc1_] = 0;
            }
            else {
                this._trainAddDelay[_loc1_] = 2 * GameConfig.FPS_GAME;
            }
        }
    };
    return TrainingCtrler;
}());
__reflect(TrainingCtrler.prototype, "TrainingCtrler");
//# sourceMappingURL=TrainingCtrler.js.map