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
        _this.scorelLabel = UI.addBitText(_this, "", "numtip3_fnt", true);
        _this.scorelLabel.textAlign = "center";
        return _this;
    }
    ScoreTip.prototype.setScore = function (arg1) {
        this.scorelLabel.text = String(arg1);
        UI.FreshLocation(this.scorelLabel);
        this.big();
        return;
    };
    ScoreTip.prototype.big = function () {
        this.scaleX = 0;
        this.scaleY = 0;
        this.alpha = 1;
        egret.Tween.get(this).to({ "y": this.y - 20 }, 500).to({ "scaleX": 1, "scaleY": 1 }, 500)
            .to({ "alpha": 0 }, 500).to({ "y": this.y - 40 }, 500);
        egret.setTimeout(function () {
            this.parent.removeChild(this);
        }, this, 2000);
        return;
    };
    return ScoreTip;
}(Elements));
__reflect(ScoreTip.prototype, "ScoreTip");
//# sourceMappingURL=ScoreTip.js.map