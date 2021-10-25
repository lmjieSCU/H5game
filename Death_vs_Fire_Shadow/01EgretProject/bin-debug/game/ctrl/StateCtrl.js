var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var StateCtrl = (function () {
    function StateCtrl() {
        this.transEnabled = true;
        return;
    } // end function
    StateCtrl.prototype.transOut = function (param1, param2) {
        if (param1 === void 0) { param1 = null; }
        if (param2 === void 0) { param2 = true; }
    };
    StateCtrl.prototype.transIn = function (param1, param2) {
        if (param1 === void 0) { param1 = null; }
        if (param2 === void 0) { param2 = true; }
    };
    StateCtrl.prototype.quickTrans = function () {
    };
    Object.defineProperty(StateCtrl, "I", {
        get: function () {
            if (!StateCtrl._i) {
                StateCtrl._i = new StateCtrl;
            }
            return StateCtrl._i;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    return StateCtrl;
}());
__reflect(StateCtrl.prototype, "StateCtrl");
//# sourceMappingURL=StateCtrl.js.map