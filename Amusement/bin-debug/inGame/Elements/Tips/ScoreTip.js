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
var ScoreTip = (function (_super) {
    __extends(ScoreTip, _super);
    function ScoreTip() {
        var _this = _super.call(this) || this;
        _this.scoreLabel = new egret.BitmapText();
        _this.addChild(_this.scoreLabel);
        return _this;
    }
    ScoreTip.prototype.setData = function (score, color) {
        if (color === void 0) { color = 0; }
        if ((color - 1) < 0) {
            color = 3;
        }
        else if (color > 5) {
            color = 5;
        }
        this.scoreLabel.text = String(score);
        this.scoreLabel.font = RES.getRes("numtip" + color + "_fnt");
        this.anchorOffsetX = this.width / 2;
        this.anchorOffsetY = this.height / 2;
        this.doAction();
        return;
    };
    ScoreTip.prototype.doAction = function () {
        this.scaleY = 0;
        this.scaleX = 0;
        egret.Tween.get(this).to({ "scaleX": 1, "scaleY": 1 }, 100).call(this.action2, this);
        return;
    };
    ScoreTip.prototype.action2 = function () {
        egret.Tween.get(this).to({ "y": this.y - 40 }, 350).call(this.onActionEnd, this);
        ;
    };
    ScoreTip.prototype.onActionEnd = function () {
        this.reset();
        egret.Tween.removeTweens(this);
        ScoreTip.pool.put(this);
        this.parent.removeChild(this);
        return;
    };
    ScoreTip.prototype.reset = function () {
        this.alpha = 1;
        return;
    };
    ScoreTip.pool = new BasePool(ScoreTip, 10);
    return ScoreTip;
}(Elements));
__reflect(ScoreTip.prototype, "ScoreTip");
//# sourceMappingURL=ScoreTip.js.map