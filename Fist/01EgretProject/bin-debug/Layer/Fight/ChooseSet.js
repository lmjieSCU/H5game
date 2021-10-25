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
var ChooseSet = (function (_super) {
    __extends(ChooseSet, _super);
    function ChooseSet(parent) {
        var _this = _super.call(this) || this;
        _this._parent = parent;
        return _this;
    }
    ChooseSet.prototype.onEnter = function () {
        var _this = this;
        var bg = new egret.Shape();
        bg.graphics.beginFill(0xffffff, 0.5);
        bg.graphics.drawRect(0, 0, UI.WINSIZE_W, UI.WINSIZE_H);
        bg.graphics.endFill();
        this.addChild(bg);
        bg.touchEnabled = true;
        bg.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SceneManager.getInstance().RemoveLayer(_this);
        }, this);
        var chooseMap = new ChooseMap(this._parent.playInfo.map, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, 200, 200, function (map) {
            _this._parent.playInfo.map = map;
        }, this);
        chooseMap.anchorOffsetX = chooseMap.width / 2;
        chooseMap.anchorOffsetY = chooseMap.height / 2;
        this.addChild(chooseMap);
    };
    ChooseSet.prototype.onExit = function () { };
    return ChooseSet;
}(Scene));
__reflect(ChooseSet.prototype, "ChooseSet");
//# sourceMappingURL=ChooseSet.js.map