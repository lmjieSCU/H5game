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
var EndModule = (function (_super) {
    __extends(EndModule, _super);
    function EndModule() {
        var _this = _super.call(this) || this;
        return _this;
    }
    EndModule.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        return;
    };
    EndModule.prototype.init = function () {
        _super.prototype.init.call(this);
        EventManager.addEventListener(GameEvents.OPEN_GAME_END_UI, this.showGameEndView, this);
        return;
    };
    EndModule.prototype.showGameEndView = function (e) {
        SceneManager.getInstance().AddLayer(new GameEndLayer);
        return;
    };
    EndModule.getInstance = function () {
        if (EndModule._instance == null) {
            EndModule._instance = new EndModule();
        }
        return EndModule._instance;
    };
    return EndModule;
}(BaseModule));
__reflect(EndModule.prototype, "EndModule");
//# sourceMappingURL=EndModule.js.map