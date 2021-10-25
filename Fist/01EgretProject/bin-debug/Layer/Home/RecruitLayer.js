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
var RecruitLayer = (function (_super) {
    __extends(RecruitLayer, _super);
    function RecruitLayer() {
        var _this = _super.call(this) || this;
        _this.isRecruit = [0, 0, 0]; //0可以招募，1招募中，2可以领取奖励
        _this.recruitTime = ['', '', ''];
        _this.texts = [];
        _this.recruitBg = [];
        _this.red = [];
        return _this;
    }
    RecruitLayer.prototype.onEnter = function () {
        var _this = this;
        var recruitInfo = RecruitData.getRecruitInfo();
        var head = UI.addPic(this, "Recruit_back_png", 0, 0);
        var back = UI.addBtn(this, "Button_back_png", 0, 0, false, function () { return Home.instace.changeLayer(_this, new HomeLayer()); });
        var bg = UI.addPic(this, "Recruit_box_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        var normal = UI.addPic(this, "Recruit_Reward_B_png", UI.WINSIZE_W / 4, bg.y - bg.height / 16, true);
        var outstand = UI.addPic(this, "Recruit_Reward_A_png", UI.WINSIZE_W / 2, bg.y - bg.height / 16, true);
        var excellent = UI.addPic(this, "Recruit_Reward_S_png", UI.WINSIZE_W / 4 * 3, bg.y - bg.height / 16, true);
        this.recruitBg.push(normal);
        this.recruitBg.push(outstand);
        this.recruitBg.push(excellent);
        recruitInfo.map(function (data, index) {
            var time = RecruitData.recruit[index].waitTime;
            var times = Home.instace.getTimeSecond(Date.parse(new Date().toString()), Date.parse(data.lastTime));
            _this.recruitTime[index] = data.lastTime;
            var txt = new egret.DisplayObjectContainer();
            _this.texts.push(txt);
            if (times >= time && data.status == 0) {
                var recruit = UI.addBtn(txt, "Recruit_button_recruit_png", _this.recruitBg[index].x, _this.recruitBg[index].y + _this.recruitBg[index].height / 2, true, function () { return _this.startRecruit(index); });
                recruit.y += recruit.height / 4 * 3;
                var text = UI.addText(txt, RecruitData.recruit[index].payNum[0], recruit.x, recruit.y, true, 15, 0xffffff);
                text.x += text.width / 2;
                _this.isRecruit[index] = 0;
            }
            else if (times >= time && data.status == 1) {
                // let text = UI.addText(txt, this.getTime(time - times), UI.WINSIZE_W/4*(index+1), UI.WINSIZE_H/2 - 40, true);
                var recruit = UI.addBtn(txt, "Recruit_button_W_png", _this.recruitBg[index].x, _this.recruitBg[index].y + _this.recruitBg[index].height / 2, true, function () { return _this.getRecruitReward(index); });
                recruit.y += recruit.height / 4 * 3;
                _this.isRecruit[index] = 2;
            }
            else if (times < time) {
                // this.isRecruit[index] = true;
                var recruit = UI.addBtn(txt, "Recruit_button_finish_png", _this.recruitBg[index].x, _this.recruitBg[index].y + _this.recruitBg[index].height / 2, true, function () { return _this.finishRecruit(index); });
                recruit.y += recruit.height / 4 * 3;
                var timeBg = UI.addPic(txt, "Recruit_time_png", recruit.x, recruit.y + recruit.height / 2, true);
                timeBg.y += timeBg.height / 2;
                _this.isRecruit[index] = 1;
                var hour = UI.addText(txt, 0, timeBg.x - 30, timeBg.y, true, 15, 0xffffff);
                var minuts = UI.addText(txt, 0, timeBg.x, timeBg.y, true, 15, 0xffffff);
                var seconds = UI.addText(txt, 0, timeBg.x + 40, timeBg.y, true, 15, 0xffffff);
                // this.recruitTime[index] = RecruitData.getRecruit(RecruitData.recruit[index].type);
                // this.getTime(RecruitData.recruit[index].waitTime - Home.instace.getTimeSecond(Date.parse(new Date().toString()) , Date.parse(this.recruitTime[index])), index);
                // this.startRecruit(index);
            }
            _this.addChild(txt);
        });
        console.log(this.isRecruit);
        this.timer = new egret.Timer(1000);
        this.timer.addEventListener(egret.TimerEvent.TIMER, function () {
            _this.isRecruit.map(function (data, index) {
                if (data == 1) {
                    var time = RecruitData.recruit[index].waitTime - Home.instace.getTimeSecond(Date.parse(new Date().toString()), Date.parse(_this.recruitTime[index]));
                    if (time >= 0)
                        _this.getTime(time, index);
                    else
                        _this.isRecruit[index] = 2;
                }
            });
        }, this);
        this.timer.start();
    };
    RecruitLayer.prototype.onExit = function () {
        this.timer.stop();
    };
    RecruitLayer.prototype.getTime = function (second, index) {
        var hour = Math.floor(second / (60 * 60));
        var minuts = Math.floor((second - hour * 60 * 60) / 60);
        var seconds = second % 60;
        this.texts[index].getChildAt(2).$setText(hour.toString());
        this.texts[index].getChildAt(2).x = this.texts[index].getChildAt(1).x - this.texts[index].getChildAt(2).width - 30;
        this.texts[index].getChildAt(3).$setText(minuts.toString());
        this.texts[index].getChildAt(4).$setText(seconds.toString());
    };
    RecruitLayer.prototype.startRecruit = function (index) {
        var _this = this;
        this.isRecruit[index] = 1;
        this.texts[index].removeChildren();
        var recruit = UI.addBtn(this.texts[index], "Recruit_button_finish_png", this.recruitBg[index].x, this.recruitBg[index].y + this.recruitBg[index].height / 2, true, function () { return _this.finishRecruit(index); });
        recruit.y += recruit.height / 4 * 3;
        var timeBg = UI.addPic(this.texts[index], "Recruit_time_png", recruit.x, recruit.y + recruit.height / 2, true);
        timeBg.y += timeBg.height / 2;
        this.isRecruit[index] = 1;
        var hour = UI.addText(this.texts[index], 0, timeBg.x - 30, timeBg.y, true, 15, 0xffffff);
        var minuts = UI.addText(this.texts[index], 0, timeBg.x, timeBg.y, true, 15, 0xffffff);
        var seconds = UI.addText(this.texts[index], 0, timeBg.x + 40, timeBg.y, true, 15, 0xffffff);
        this.recruitTime[index] = RecruitData.getRecruit(RecruitData.recruit[index].type);
        this.getTime(RecruitData.recruit[index].waitTime - Home.instace.getTimeSecond(Date.parse(new Date().toString()), Date.parse(this.recruitTime[index])), index);
    };
    RecruitLayer.prototype.finishRecruit = function (index) {
        RecruitData.finishRecruit(index);
        // this.texts[index].removeChildren();
        // let recruit:egret.Bitmap = UI.addBtn(this.texts[index], "Recruit_button_recruit_png", this.recruitBg[index].x, this.recruitBg[index].y + this.recruitBg[index].height/2, true, () => this.startRecruit(index));
        // recruit.y += recruit.height/4*3;
        // let text: egret.TextField = UI.addText(this.texts[index], RecruitData.recruit[index].payNum[0], recruit.x, recruit.y, true, 15, 0xffffff);
        // text.x += text.width/2;
        // this.isRecruit[index] = 0;
        // const reward = RecruitData.getReward(RecruitData.recruit[index].type);
        // console.log(reward);
        // return reward;
        this.getRecruitReward(index);
    };
    RecruitLayer.prototype.getRecruitReward = function (index) {
        var _this = this;
        this.texts[index].removeChildren();
        var recruit = UI.addBtn(this.texts[index], "Recruit_button_recruit_png", this.recruitBg[index].x, this.recruitBg[index].y + this.recruitBg[index].height / 2, true, function () { return _this.startRecruit(index); });
        recruit.y += recruit.height / 4 * 3;
        var text = UI.addText(this.texts[index], RecruitData.recruit[index].payNum[0], recruit.x, recruit.y, true, 15, 0xffffff);
        text.x += text.width / 2;
        this.isRecruit[index] = 0;
        var reward = RecruitData.getReward(RecruitData.recruit[index].type);
        console.log(reward);
        return reward;
    };
    return RecruitLayer;
}(Scene));
__reflect(RecruitLayer.prototype, "RecruitLayer");
//# sourceMappingURL=RecruitLayer.js.map