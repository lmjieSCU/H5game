var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EffectManager = (function () {
    function EffectManager() {
        this._shineCache = [];
        this._viewCache = new Array();
        this._hitCache = new Array();
        return;
    } // end function
    EffectManager.prototype.destory = function () {
        for (var _loc_3 in this._viewCache) {
            for (var _loc_1 in this._viewCache[_loc_3]) {
                this._viewCache[_loc_3][_loc_1].destory();
            }
        }
        for (var _loc_2 in this._shineCache) {
            this._shineCache[_loc_2].destory();
        }
        this._viewCache = null;
        this._hitCache = null;
        this._shineCache = null;
        return;
    }; // end function
    EffectManager.prototype.getEffectVOByHitVO = function (param1) {
        var _loc_3 = NaN;
        var _loc_5 = NaN;
        var _loc_2 = NaN;
        if (this._hitCache[param1.id] != undefined) {
            return this._hitCache[param1.id];
        }
        var _loc_4 = EffectModel.I.getHitEffect(param1.hitType);
        if (!EffectModel.I.getHitEffect(param1.hitType)) {
            this._hitCache[param1.id] = null;
            return null;
        }
        //_loc_4 = _loc_4.clone();
        if (_loc_4.shake) {
            if (_loc_4.shake.pow != undefined && _loc_4.shake.pow != 0) {
                _loc_3 = _loc_4.shake.pow;
                if (param1.hitx == 0 && param1.hity == 0) {
                    _loc_4.shake.x = _loc_3;
                    _loc_4.shake.y = 0;
                }
                else {
                    _loc_5 = Math.abs(param1.hitx) + Math.abs(param1.hity);
                    _loc_2 = param1.hitx / _loc_5;
                    _loc_4.shake.x = _loc_3 * _loc_2;
                    _loc_4.shake.y = _loc_3 * (1 - _loc_2);
                }
            }
            if (_loc_4.shake.x == 0 && _loc_4.shake.y == 0) {
                _loc_4.shake.x = 3;
            }
        }
        this._hitCache[param1.id] = _loc_4;
        return _loc_4;
    }; // end function
    EffectManager.prototype.getEffectView = function (param1) {
        var _loc_4 = 0;
        var _loc_5 = 0;
        var _loc_3 = null;
        var _loc_2 = this._viewCache[param1.className];
        if (_loc_2) {
            _loc_4 = _loc_2.length;
            while (_loc_5 < _loc_4) {
                if (!_loc_2[_loc_5].isActive) {
                    return _loc_2[_loc_5];
                }
                _loc_5++;
            }
        }
        else {
            _loc_2 = new Array();
            this._viewCache[param1.className] = _loc_2;
        }
        if (param1.isSpecial) {
            _loc_3 = new SpecialEffectView(param1);
        }
        else {
            _loc_3 = new EffectView(param1);
        }
        _loc_2.push(_loc_3);
        return _loc_3;
    }; // end function
    EffectManager.prototype.getShine = function () {
        var _loc_3 = 0;
        var _loc_1 = this._shineCache.length;
        while (_loc_3 < _loc_1) {
            if (!this._shineCache[_loc_3].isActive) {
                return this._shineCache[_loc_3];
            }
            _loc_3++;
        }
        var _loc_2 = new ShineEffectView();
        this._shineCache.push(_loc_2);
        return _loc_2;
    }; // end function
    return EffectManager;
}());
__reflect(EffectManager.prototype, "EffectManager");
//# sourceMappingURL=EffectManager.js.map