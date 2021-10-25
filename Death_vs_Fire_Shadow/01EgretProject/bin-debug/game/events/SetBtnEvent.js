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
var SetBtnEvent = (function (_super) {
    __extends(SetBtnEvent, _super);
    function SetBtnEvent(param1, param2, param3) {
        if (param2 === void 0) { param2 = false; }
        if (param3 === void 0) { param3 = false; }
        var _this = _super.call(this, param1, param2, param3) || this;
        return _this;
    } // end function
    SetBtnEvent.prototype.newEvent = function () {
        var _loc_1 = new SetBtnEvent(this.type, this.bubbles, this.cancelable);
        _loc_1.selectedLabel = this.selectedLabel;
        _loc_1.optionKey = this.optionKey;
        _loc_1.optionValue = this.optionValue;
        return _loc_1;
    }; // end function
    SetBtnEvent.SELECT = "SELECT";
    SetBtnEvent.OPTION_CHANGE = "OPTION_CHANGE";
    SetBtnEvent.APPLY_SET = "APPLY_SET";
    SetBtnEvent.CANCEL_SET = "CANCEL_SET";
    return SetBtnEvent;
}(egret.Event));
__reflect(SetBtnEvent.prototype, "SetBtnEvent");
//# sourceMappingURL=SetBtnEvent.js.map