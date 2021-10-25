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
var LevelMap = (function (_super) {
    __extends(LevelMap, _super);
    function LevelMap() {
        var _this = _super.call(this) || this;
        _this.levels = ["K", "Chunli", "Ryu", "Terry"];
        _this.isType2 = false;
        return _this;
    }
    LevelMap.prototype.onEnter = function () {
        var _this = this;
        var len = this.levels.length;
        this.levels.map(function (data, index) {
            var _loop_1 = function (i) {
                var t = UI.addText(_this, data + "_AI_LV" + i, UI.WINSIZE_W / 2 + 200 * (index - (len - 1) / 2), UI.WINSIZE_H / 2 + (i - 3) * 30, true, 30, 0xffffff);
                t.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                    var ai = "new " + data + "_AI_Lv" + i + "()";
                    if (_this.isType2) {
                        ai = "new Type2_" + data + "_AI_Lv" + i + "()";
                    }
                    SceneManager.getInstance().ChangeScene(new ChooseScene(1, Main.PVE, ai));
                }, _this);
                t.touchEnabled = true;
            };
            for (var i = 1; i <= 5; i++) {
                _loop_1(i);
            }
        });
        var type = UI.addText(this, "type1", UI.WINSIZE_W / 2, UI.WINSIZE_H - 30, true, 30, 0xffffff);
        type.touchEnabled = true;
        type.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            type.$setText(_this.isType2 ? 'type1' : 'type2');
            _this.isType2 = !_this.isType2;
        }, this);
    };
    LevelMap.prototype.onExit = function () { };
    return LevelMap;
}(Scene));
__reflect(LevelMap.prototype, "LevelMap");
//# sourceMappingURL=LevelMap.js.map