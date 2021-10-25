var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var BaseModule = (function () {
    function BaseModule() {
        return;
    }
    BaseModule.prototype.init = function () {
        return;
    };
    BaseModule.prototype.dispose = function () {
        return;
    };
    return BaseModule;
}());
__reflect(BaseModule.prototype, "BaseModule");
//# sourceMappingURL=BaseModule.js.map