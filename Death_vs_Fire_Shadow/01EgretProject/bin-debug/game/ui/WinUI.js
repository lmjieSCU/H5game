var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var WinUI = (function () {
    function WinUI(param1, param2) {
        this._ui = param1;
        this._team = param2;
        return;
    } // end function
    WinUI.prototype.getui = function () {
        return this._ui;
    }; // end function
    WinUI.prototype.show = function (param1, param2) {
        var _loc_3 = null;
        if (!param1) {
            return;
        }
        switch ((param2 - 1)) {
            case 0:
                _loc_3 = this._team == 1 ? (this._ui.getChildMovie("w1")) : (this._ui.getChildMovie("w2"));
                break;
            default:
                _loc_3 = this._team == 1 ? (this._ui.getChildMovie("w2")) : (this._ui.getChildMovie("w1"));
                break;
        }
        if (!_loc_3) {
            return;
        }
        switch (param1.comicType) {
            case 0:
                _loc_3.gotoAndPlay("in_bleach");
                break;
            default:
                _loc_3.gotoAndPlay("in_naruto");
                break;
        }
        return;
    }; // end function
    return WinUI;
}());
__reflect(WinUI.prototype, "WinUI");
//# sourceMappingURL=WinUI.js.map