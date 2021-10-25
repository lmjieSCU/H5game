var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var FighterHitModel = (function () {
    function FighterHitModel(param1) {
        this._hitObj = {};
        this._fighter = param1; //fightmain
        return;
    } // end function
    FighterHitModel.prototype.destory = function () {
        this._hitObj = null;
        this._fighter = null;
        return;
    }; // end function
    FighterHitModel.prototype.clear = function () {
        this._hitObj = {};
        return;
    }; // end function
    FighterHitModel.prototype.getHitVO = function (param1) {
        return this._hitObj[param1];
    }; // end function
    FighterHitModel.prototype.getHitVOLike = function (param1) {
        var VOLike = new Array();
        for (var index in this._hitObj) {
            var _loc3_ = this._hitObj[index];
            // if (_loc3_.indexOf(param1) != -1) {
            if (_loc3_.id == param1) {
                var temp = new HitVO;
                for (var i in _loc3_) {
                    temp[i] = _loc3_[i];
                }
                VOLike.push(temp);
            }
        }
        return VOLike;
    }; // end function
    FighterHitModel.prototype.getHitVOByDisplayName = function (param1) {
        var _loc_3 = this.getHitVO(param1);
        if (_loc_3) {
            return _loc_3;
        }
        if (param1.indexOf("atm") == -1) {
            return null;
        }
        var _loc_2 = param1.replace("atm", "");
        return this.getHitVO(_loc_2);
    }; // end function
    FighterHitModel.prototype.addHitVO = function (param1, param2) {
        var _loc_3 = new HitVO(param2);
        _loc_3.owner = this._fighter;
        _loc_3.id = param1;
        this._hitObj[param1] = _loc_3;
        return;
    }; // end function
    FighterHitModel.prototype.setPowerRate = function (param1) {
        for (var _i = 0, _a = this._hitObj; _i < _a.length; _i++) {
            var _loc_2 = _a[_i];
            _loc_2.powerRate = param1;
        }
        return;
    }; // end function
    return FighterHitModel;
}());
__reflect(FighterHitModel.prototype, "FighterHitModel");
//# sourceMappingURL=FighterHitModel.js.map