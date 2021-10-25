var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var KyoRandom = (function () {
    function KyoRandom() {
        return;
    } // end function
    KyoRandom.getRandomInArray = function (param1, param2) {
        if (param2 === void 0) { param2 = false; }
        if (param1 == null || param1.length < 1) {
            return null;
        }
        var _loc_3 = Math.random() * param1.length << 0;
        var _loc_4 = param1[_loc_3];
        if (param2) {
            param1.splice(_loc_3, 1);
        }
        return _loc_4;
    }; // end function
    KyoRandom.getRandomSomeInArray = function (param1, param2, param3) {
        if (param3 === void 0) { param3 = false; }
        var _loc_6 = 0;
        var _loc_7 = 0;
        var _loc_8 = undefined;
        var _loc_4 = param1.concat();
        var _loc_5 = [];
        while (_loc_6 < param2) {
            _loc_7 = Math.random() * _loc_4.length << 0;
            _loc_8 = _loc_4[_loc_7];
            _loc_5.push(_loc_8);
            if (!param3) {
                _loc_4.splice(_loc_7, 1);
            }
            _loc_6 = _loc_6 + 1;
        }
        return _loc_5;
    }; // end function
    KyoRandom.getRandomOne = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return KyoRandom.getRandomInArray(args);
    }; // end function
    KyoRandom.between = function (param1, param2) {
        var _loc_3 = NaN;
        var _loc_4 = NaN;
        if (param1 < param2) {
            _loc_3 = param1;
            _loc_4 = param2;
        }
        else {
            _loc_3 = param2;
            _loc_4 = param1;
        }
        var _loc_5 = _loc_3 + Math.random() * (_loc_4 - _loc_3);
        if (_loc_3 + Math.random() * (_loc_4 - _loc_3) < _loc_3) {
            _loc_5 = _loc_3;
        }
        if (_loc_5 > _loc_4) {
            _loc_5 = _loc_4;
        }
        return _loc_5;
    }; // end function
    KyoRandom.getRandomByRate = function (param1, param2) {
        var _loc_7 = NaN;
        var _loc_3 = 0;
        Flash.sortOn(param1, param2, Flash.NUMERIC); //Array.NUMERIC按照数字顺序排序,从小到大
        var _loc_4 = 0;
        while (_loc_4 < param1.length) {
            _loc_3 = _loc_3 + Number(param1[_loc_4][param2]);
            _loc_4 = _loc_4 + 1;
        }
        var _loc_5 = Math.random() * _loc_3;
        if (Math.random() * _loc_3 > (_loc_3 - 1)) {
            _loc_5 = _loc_3 - 1;
        }
        var _loc_6 = 0;
        _loc_4 = 0;
        while (_loc_4 < param1.length) {
            _loc_7 = _loc_6 + Number(param1[_loc_4][param2]);
            if (_loc_5 >= _loc_6 && _loc_5 < _loc_7) {
                return param1[_loc_4];
            }
            _loc_6 = _loc_7;
            _loc_4 = _loc_4 + 1;
        }
        throw Error("无法按机率选择，请检查数据");
    }; // end function
    KyoRandom.getRandomByRateLite = function (param1, param2, param3) {
        if (param3 === void 0) { param3 = 1; }
        var _loc_8 = undefined;
        var _loc_9 = NaN;
        Flash.sortOn(param1, param2, Flash.NUMERIC);
        var _loc_4 = Math.random() * param3;
        var _loc_5 = 0;
        var _loc_6 = [];
        var _loc_7 = 0;
        while (_loc_7 < param1.length) {
            _loc_8 = param1[_loc_7];
            _loc_9 = _loc_8[param2];
            if (_loc_5 == 0) {
                if (_loc_4 <= _loc_9) {
                    _loc_5 = _loc_9;
                    _loc_6.push(_loc_8);
                }
            }
            else if (_loc_9 == _loc_5) {
                _loc_6.push(_loc_8);
            }
            _loc_7 = _loc_7 + 1;
        }
        return KyoRandom.getRandomInArray(_loc_6);
    }; // end function
    KyoRandom.getRandomInts = function (param1, param2) {
        var _loc_3 = [];
        var _loc_4 = param1;
        while (_loc_4 < param2) {
            _loc_3.push(_loc_4);
            _loc_4 = _loc_4 + 1;
        }
        KyoRandom.arraySortRandom(_loc_3);
        return _loc_3;
    }; // end function
    KyoRandom.arraySortRandom = function (param1) {
        var taxis;
        var array = param1;
        taxis = function (param1, param2) {
            var _loc_3 = Math.random();
            if (_loc_3 < 0.5) {
                return -1;
            }
            return 1;
        } // end function
        ;
        array.sort(taxis);
        return;
    }; // end function
    KyoRandom.getRandomColor = function (param1, param2) {
        if (param1 === void 0) { param1 = 0; }
        if (param2 === void 0) { param2 = 16777215; }
        return param1 + (param2 - param1) * Math.random();
    }; // end function
    return KyoRandom;
}());
__reflect(KyoRandom.prototype, "KyoRandom");
//# sourceMappingURL=KyoRandom.js.map