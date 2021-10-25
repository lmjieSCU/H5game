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
var KO = (function (_super) {
    __extends(KO, _super);
    function KO() {
        var _this = _super.call(this) || this;
        _this.ko = [199, 197, 195, 193, 191, 189, 187, 185, 182, 180];
        _this.Ko = [];
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.addEventListener(egret.TouchEvent.REMOVED_FROM_STAGE, _this.onExit, _this);
        return _this;
    }
    KO.prototype.onEnter = function () {
        var _this = this;
        this.ko.map(function (data) {
            var k = UI.addPic(_this, "Image " + data + "_png", GameConfig.FightWidth / 2, UI.WINSIZE_H / 2, true);
            k.alpha = 0;
            k.y -= k.height / 2;
            _this.Ko.push(k);
        });
        var time = new egret.Timer(100, 14);
        var i = 0;
        time.addEventListener(egret.TimerEvent.TIMER, function () {
            if (i < _this.Ko.length)
                _this.Ko[i].$setAlpha(1);
            i++;
        }, this);
        time.addEventListener(egret.TimerEvent.TIMER_COMPLETE, function () {
            for (var j = 0; j < _this.Ko.length; j++)
                _this.removeChild(_this.Ko[j]);
        }, this);
        time.start();
    };
    KO.prototype.onExit = function () { };
    KO.prototype.update = function () { };
    return KO;
}(egret.DisplayObjectContainer));
__reflect(KO.prototype, "KO", ["egret.DisplayObject"]);
//# sourceMappingURL=KO.js.map