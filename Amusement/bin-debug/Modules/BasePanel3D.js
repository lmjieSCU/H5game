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
var BasePanel3D = (function (_super) {
    __extends(BasePanel3D, _super);
    function BasePanel3D() {
        var _this = _super.call(this) || this;
        _this.destoryAfterClose = true;
        return _this;
    }
    Object.defineProperty(BasePanel3D.prototype, "winName", {
        get: function () {
            return this._winName;
        },
        set: function (arg1) {
            this._winName = arg1;
            return;
        },
        enumerable: true,
        configurable: true
    });
    BasePanel3D.prototype.init = function () {
        return;
    };
    BasePanel3D.prototype.show = function (arg1) {
        return;
    };
    BasePanel3D.prototype.hide = function () {
        return;
    };
    BasePanel3D.prototype.updateData = function (arg1) {
        return;
    };
    BasePanel3D.prototype.close = function () {
        this.parent.removeChild(this);
        // com.popchan.sugar.core.manager.WindowManager3D.getInstance().removeWindow(this.winName);
        return;
    };
    BasePanel3D.prototype.destory = function () {
        return;
    };
    return BasePanel3D;
}(egret.Sprite));
__reflect(BasePanel3D.prototype, "BasePanel3D");
//# sourceMappingURL=BasePanel3D.js.map