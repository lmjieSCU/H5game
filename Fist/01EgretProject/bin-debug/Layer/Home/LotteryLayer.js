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
var LotteryLayer = (function (_super) {
    __extends(LotteryLayer, _super);
    function LotteryLayer() {
        var _this = _super.call(this) || this;
        _this.isOpenLottery = false;
        _this.nowReward = 0; //当前目标
        _this.count = 0; //运转次数
        _this.all = 100; //运转总次数，在达到总次数后，运转到指定目标后将停止
        _this.speed = [4, 2, 1, 2, 4, 8]; //速度，每隔几帧运转一次,最后一个值是在运转次数达到最大值后，未达到指定目标的位置，则以这个速度运转至目标位置
        _this.speedCount = [15, 15, 15, 10, 10]; //速度改变的临界值，在某一个速度下运转多少次之后，就改变到下一个速度值
        _this.speedNow = 2; //当这个值等于速度值时，运转
        GameRender.I.Add(_this, _this.update);
        return _this;
    }
    ;
    LotteryLayer.prototype.onEnter = function () {
        var _this = this;
        var head = UI.addPic(this, "Draw_head_png", 0, 0);
        var close = UI.addBtn(this, "Button_back_png", 0, 0, false, function () {
            Home.instace.changeLayer(_this, new HomeLayer());
        });
        this.rewards = [];
        var rewardList = LotteryData.lottery;
        UI.addPic(this, "Draw_box_middle_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        rewardList.map(function (data, index) {
            var img = UI.addPic(_this, data.UI, UI.WINSIZE_W / 2 + (index % 4 - 1.5) * 200 * (0.5 - Math.floor(index / 4)), UI.WINSIZE_H / 2 + (Math.floor(index / 4) - 0.5) * 175, true);
            // let text: egret.TextField = UI.addText(this, `${data.type}x${data.num}`, img.x, img.y + img.height/4, true);
            _this.rewards.push(img);
        });
        this.flash = UI.addPic(this, "Draw_box_shadow_png", this.rewards[0].x, this.rewards[0].y, true);
        UI.addBtn(this, "Draw_button_draw_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true, function () { return _this.lottery(); });
        this.cover = new egret.Shape();
        this.cover.graphics.beginFill(0xffffff, 0);
        this.cover.graphics.drawRect(0, 0, UI.WINSIZE_W, UI.WINSIZE_H);
        this.cover.graphics.endFill();
        this.parent.addChild(this.cover);
    };
    LotteryLayer.prototype.onExit = function () {
        GameRender.I.Remove(this, this.update);
        this.parent.removeChild(this.cover);
    };
    LotteryLayer.prototype.lottery = function () {
        // const rewards = LotteryData.getReward();
        // this.rewardId = rewards.rewardId;
        // this.reward = rewards.reward;
        this.rewardId = 1;
        this.isOpenLottery = true;
        this.cover.touchEnabled = true;
    };
    LotteryLayer.prototype.update = function () {
        if (this.isOpenLottery) {
            var count = this.count;
            var index = this.speed.length - 1;
            for (var i = 0; i < this.speedCount.length; i++) {
                count -= this.speedCount[i];
                if (count <= 0) {
                    index = i;
                    break;
                }
            }
            if (this.speedNow >= this.speed[index]) {
                this.speedNow = 0;
                this.count++;
                this.flash.$setX(this.rewards[this.nowReward].x);
                this.flash.$setY(this.rewards[this.nowReward].y);
                if (this.count >= this.all && this.nowReward == this.rewardId - 1) {
                    this.count = 0;
                    this.isOpenLottery = false;
                    this.cover.touchEnabled = false;
                }
                this.nowReward = (this.nowReward + 1) % this.rewards.length;
            }
            else {
                this.speedNow++;
            }
        }
    };
    return LotteryLayer;
}(Scene));
__reflect(LotteryLayer.prototype, "LotteryLayer");
//# sourceMappingURL=LotteryLayer.js.map