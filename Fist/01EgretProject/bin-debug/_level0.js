var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var _level0 = (function () {
    function _level0() {
    }
    // public static life_power_control: Life_Power = new Life_Power();
    _level0.lifeControl = function (lifeobj, role) {
        // _level0.life_power_control.lifeControl(lifeobj);
        SplashScene.instance._life.lifeControl(lifeobj, role);
        return;
    };
    _level0.powerControl = function (powerobj, role) {
        SplashScene.instance._life.powerControl(powerobj, role);
        return;
        // _level0.life_power_control.powerControl(powerobj);
    };
    //初始化单帧事件静态变量
    _level0.eliminate_static = function () {
        _level0.instance_First.map(function (i) {
            i.Firstowner = null;
            i.instance_First = null;
            i.instance_Second = null;
        });
    };
    //对局结束人物动作
    _level0.gameEnd = function () {
        if (_level0.P1_role.isKO == true || _level0.P2_role.isKO == true) {
            if (_level0.P1_role.isKO == _level0.P2_role.isKO) {
            }
            else {
                var winner = _level0.P1_role.life > _level0.P2_role.life ? _level0.P1_role : _level0.P2_role;
                winner.do_win();
            }
        }
        else {
            var winner = _level0.P1_role.life >= _level0.P2_role.life ? _level0.P1_role : _level0.P2_role;
            winner.do_win();
            var lose = _level0.P1_role.life < _level0.P2_role.life ? _level0.P1_role : _level0.P2_role;
            lose.mc.gotoAndStop("lose");
        }
    };
    //对象对比 相同返回true
    _level0.deepCompare = function (x, y) {
        var i, l, leftChain, rightChain;
        function compare2Objects(x, y) {
            var p;
            if (isNaN(x) && isNaN(y) && typeof x === 'number' && typeof y === 'number') {
                return true;
            }
            if (x === y) {
                return true;
            }
            if ((typeof x === 'function' && typeof y === 'function') ||
                (x instanceof Date && y instanceof Date) ||
                (x instanceof RegExp && y instanceof RegExp) ||
                (x instanceof String && y instanceof String) ||
                (x instanceof Number && y instanceof Number)) {
                return x.toString() === y.toString();
            }
            if (!(x instanceof Object && y instanceof Object)) {
                return false;
            }
            if (x.isPrototypeOf(y) || y.isPrototypeOf(x)) {
                return false;
            }
            if (x.constructor !== y.constructor) {
                return false;
            }
            if (x.prototype !== y.prototype) {
                return false;
            }
            if (leftChain.indexOf(x) > -1 || rightChain.indexOf(y) > -1) {
                return false;
            }
            for (p in y) {
                if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                    return false;
                }
                else if (typeof y[p] !== typeof x[p]) {
                    return false;
                }
            }
            for (p in x) {
                if (y.hasOwnProperty(p) !== x.hasOwnProperty(p)) {
                    return false;
                }
                else if (typeof y[p] !== typeof x[p]) {
                    return false;
                }
                switch (typeof (x[p])) {
                    case 'object':
                    case 'function':
                        leftChain.push(x);
                        rightChain.push(y);
                        if (!compare2Objects(x[p], y[p])) {
                            return false;
                        }
                        leftChain.pop();
                        rightChain.pop();
                        break;
                    default:
                        if (x[p] !== y[p]) {
                            return false;
                        }
                        break;
                }
            }
            return true;
        }
        if (arguments.length < 1) {
            return true;
        }
        for (i = 1, l = arguments.length; i < l; i++) {
            leftChain = [];
            rightChain = [];
            if (!compare2Objects(arguments[0], arguments[i])) {
                return false;
            }
        }
        return true;
    };
    //判断字符是否在某个数组里面，在返回true
    _level0.IsInArray = function (arr, val) {
        var testStr = ',' + arr.join(",") + ",";
        return testStr.indexOf("," + val + ",") != -1;
    };
    _level0.power_holdRoll = 10;
    _level0.power_holdCounter = 10;
    _level0.inPause = false;
    _level0.inFreeze = false;
    _level0.KO = false;
    _level0.land_Y = 440;
    _level0.player_type = 'training';
    _level0.level = 1;
    _level0.timeOver = false;
    _level0.effect_mc = new Stage_effect;
    _level0.instance_First = []; //记录调用的单帧事件
    return _level0;
}());
__reflect(_level0.prototype, "_level0");
//# sourceMappingURL=_level0.js.map