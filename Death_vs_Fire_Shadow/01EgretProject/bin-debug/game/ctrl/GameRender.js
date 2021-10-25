var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*以帧事件驱动整个游戏进行,为游戏动力源
*initlize函数：增加帧事件驱动
*add函数：增加其它类的render函数至_fucs数组
*remove函数：移除其它类的render函数
*render函数：对_fucs数组中的各个render依次执行
*/
var renderFun = (function () {
    function renderFun(_fun, _th) {
        this._Fun = _fun;
        this._This = _th;
    }
    return renderFun;
}());
__reflect(renderFun.prototype, "renderFun");
var GameRender = (function () {
    function GameRender() {
        return;
    } // end 
    GameRender.initlize = function (param1) {
        param1.addEventListener(egret.Event.ENTER_FRAME, this.render, this);
        GameRender._stageChip = param1;
        return;
    }; // end 
    GameRender.add = function (param1, param2) {
        if (param2 === void 0) { param2 = null; }
        if (!param2) {
            param2 = "anyone";
        }
        if (this._fucs[param2] && this._fucs[param2].indexOf(param1) != -1) {
            return;
        }
        var _loc_3 = param2;
        this._fucs[_loc_3] = new Array();
        this._fucs[param2].push(param1);
        return;
    }; // end 
    GameRender.remove = function (param1, param2) {
        if (param2 === void 0) { param2 = null; }
        if (!param2) {
            param2 = "anyone";
        }
        if (!this._fucs[param2]) {
            return;
        }
        var _loc_3 = this._fucs[param2].indexOf(param1);
        if (_loc_3 != -1) {
            this._fucs[param2].splice(_loc_3, 1);
        }
        return;
    }; // end 
    GameRender.render = function (event) {
        var _loc_3 = 0;
        var _loc_2 = undefined;
        if (!this.isRender) {
            return;
        }
        var _loc_4 = 0;
        for (_loc_2 in this._fucs) {
            _loc_3 = this._fucs[_loc_2].length;
            _loc_4 = 0;
            while (_loc_4 < _loc_3) {
                if (_loc_4 <= (this._fucs[_loc_2].length - 1)) {
                    this._fucs[_loc_2][_loc_4]._Fun.call(this._fucs[_loc_2][_loc_4]._This);
                    _loc_4++;
                }
            }
        }
        return;
    }; // end 
    GameRender.destory = function () {
        if (this._stageChip) {
            this._stageChip.removeEventListener(egret.Event.ENTER_FRAME, this.render, this);
        }
    };
    GameRender._fucs = [];
    GameRender.isRender = true;
    return GameRender;
}());
__reflect(GameRender.prototype, "GameRender");
//# sourceMappingURL=GameRender.js.map