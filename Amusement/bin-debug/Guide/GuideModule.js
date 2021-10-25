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
var GuideModule = (function (_super) {
    __extends(GuideModule, _super);
    function GuideModule() {
        var _this = _super.call(this) || this;
        return _this;
    }
    GuideModule.prototype.dispose = function () {
        _super.prototype.dispose.call(this);
        EventManager.removeEventListener(GameEvents.OPEN_GUIDE, this.doGuide);
        return;
    };
    GuideModule.prototype.init = function () {
        _super.prototype.init.call(this);
        EventManager.addEventListener(GameEvents.OPEN_GUIDE, this.doGuide, this);
        return;
    };
    GuideModule.prototype.doGuide = function (e) {
        var arg1 = e.data;
        var loc1 = Config.guideConfig.getGuideList(arg1);
        GuideManager.instance.reset();
        GameCtrl.I._gamestate.addChild(GuideManager.instance.container);
        GuideManager.instance.setUp(loc1);
        GuideManager.instance.start();
        return;
    };
    GuideModule.getInstance = function () {
        if (GuideModule._instance == null) {
            GuideModule._instance = new GuideModule();
        }
        return GuideModule._instance;
    };
    return GuideModule;
}(BaseModule));
__reflect(GuideModule.prototype, "GuideModule");
//# sourceMappingURL=GuideModule.js.map