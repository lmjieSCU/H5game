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
var OverReward = (function (_super) {
    __extends(OverReward, _super);
    function OverReward(reward) {
        var _this = _super.call(this) || this;
        _this.rewards = reward;
        return _this;
    }
    OverReward.prototype.onEnter = function () {
        var _this = this;
        var bg = new egret.Shape();
        bg.graphics.beginFill(0xffffff, 0);
        bg.graphics.drawRect(0, 0, UI.WINSIZE_W, UI.WINSIZE_H);
        bg.graphics.endFill();
        this.addChild(bg);
        this.reward = new egret.DisplayObjectContainer();
        this.addChild(this.reward);
        this.reward.width = 200;
        this.reward.height = 200;
        this.reward.x = UI.WINSIZE_W / 2;
        this.reward.anchorOffsetX = this.reward.width / 2;
        this.reward.y = -this.reward.height;
        var len = this.rewards.length - 1;
        this.rewards.map(function (data, index) {
            var type = UI.addText(_this.reward, "type+" + data.type, _this.reward.width / 2 + (index - len / 2) * 50, _this.reward.height / 2, true);
            UI.addText(_this.reward, "num+" + data.num, type.x, type.y + type.height, true);
        });
        var btn = UI.addText(this.reward, "领取奖励", this.reward.width / 2, this.reward.height / 4 * 3, true);
        UI.addClickAction(this, btn, function () {
            egret.Tween.get(_this.reward)
                .to({ y: -_this.reward.height }, 200, egret.Ease.sineIn)
                .to({ y: UI.WINSIZE_H / 4 + 10 }, 30, egret.Ease.sineIn).call(function () {
                SceneManager.getInstance().RemoveLayer(_this);
            }, _this);
        });
        egret.Tween.get(this.reward)
            .to({ y: UI.WINSIZE_H / 4 + 10 }, 200, egret.Ease.sineIn)
            .to({ y: UI.WINSIZE_H / 4 }, 30, egret.Ease.sineIn);
    };
    OverReward.prototype.onExit = function () { };
    return OverReward;
}(Scene));
__reflect(OverReward.prototype, "OverReward");
//# sourceMappingURL=OverReward.js.map