var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var KyoMath = (function () {
    function KyoMath() {
        return;
    } // end function
    KyoMath.fixRange = function (param1, param2, param3) {
        if (param1 < param2) {
            return param2;
        }
        if (param1 > param3) {
            return param3;
        }
        return param1;
    }; // end function
    KyoMath.inRange = function (param1, param2, param3) {
        return param1 >= param2 && param1 <= param3;
    }; // end function
    KyoMath.decimal = function (param1, param2, param3) {
        if (param3 === void 0) { param3 = null; }
        param3 = param3 || Math.round;
        var _loc_4 = Math.pow(10, param2);
        return param3(param1 * _loc_4) / _loc_4;
    }; // end function
    KyoMath.average = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        /*
        //args = args[0] is Array ? (args[0]) : (args);
        if (typeof(args[0]) == " ")
             args = args[0];
        var _loc_3: any = KyoMath.sum(args);
        return _loc_3 / args.length;
        */
        return 0;
    }; // end function
    KyoMath.sum = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        /*
        var _loc_4: any = NaN;
        if (typeof(args[0]) == " ")
             args = args[0];
        
        var _loc_3: any = 0;
        for (_loc_4 of args)
            {
                
                _loc_3 = _loc_3 + _loc_4;
            }
            return _loc_3;
            */
        return 0;
    }; // end function
    KyoMath.getAngleByPoints = function (param1, param2) {
        var _loc_3 = param2.x - param1.x;
        var _loc_4 = param2.y - param1.y;
        var _loc_5 = Math.sqrt(_loc_3 * _loc_3 + _loc_4 * _loc_4);
        var _loc_6 = Math.acos(_loc_3 / _loc_5);
        var _loc_7 = 180 / (Math.PI / _loc_6);
        if (_loc_4 < 0) {
            return -_loc_7;
        }
        return _loc_7;
    }; // end function
    KyoMath.getDistanceByPoints = function (param1, param2) {
        var _loc_3 = param1.x - param2.x;
        var _loc_4 = param1.y - param2.y;
        return Math.sqrt(_loc_3 * _loc_3 + _loc_4 * _loc_4);
    }; // end function
    KyoMath.getPointByRadians = function (param1, param2, param3) {
        if (param3 === void 0) { param3 = 1; }
        var _loc_4 = new egret.Point();
        _loc_4.x = param1.x * Math.cos(param2) - param1.y * Math.sin(param2) * param3;
        _loc_4.y = param1.x * Math.sin(param2) + param1.y * Math.cos(param2) * param3;
        return _loc_4;
    }; // end function
    KyoMath.asRadians = function (param1) {
        return param1 * KyoMath.DEGTORAD;
    }; // end function
    KyoMath.velocityFromAngle = function (param1, param2, param3) {
        if (param3 === void 0) { param3 = true; }
        var _loc_4 = param3 ? (KyoMath.asRadians(param1)) : (param1);
        var _loc_5 = new egret.Point();
        _loc_5.x = Number(Math.cos(_loc_4) * param2);
        _loc_5.y = Number(Math.sin(_loc_4) * param2);
        return _loc_5;
    }; // end function
    KyoMath.DEGTORAD = 0.0174533;
    return KyoMath;
}());
__reflect(KyoMath.prototype, "KyoMath");
//# sourceMappingURL=KyoMath.js.map