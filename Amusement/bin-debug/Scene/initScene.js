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
var initScene = (function (_super) {
    __extends(initScene, _super);
    function initScene() {
        var _this = _super.call(this) || this;
        return _this;
    }
    initScene.prototype.onEnter = function () {
        // egret.localStorage.clear();
        SceneManager.I.ChangeScene(new GameEntryScene);
    };
    initScene.prototype.onExit = function () {
    };
    return initScene;
}(Scene));
__reflect(initScene.prototype, "initScene");
//# sourceMappingURL=initScene.js.map