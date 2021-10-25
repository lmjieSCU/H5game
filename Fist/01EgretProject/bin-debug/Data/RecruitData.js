var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var RecruitData = (function () {
    function RecruitData() {
    }
    /**
     * @param normalDate 上一次招募普通的时间
     * @param outstandDate 上一次招募出众的时间
     * @param excellentDate 上一次招募卓越的时间
     * @param normalStatus 是否领取过奖励 0 未开始招募 | 1 已开始招募未领取
     * @param outstandStatus 是否领取过奖励
     * @param excellentStatus 是否领取过奖励
     */
    RecruitData.initRecruit = function () {
        if (!egret.localStorage.getItem("normalDate") || !egret.localStorage.getItem("outstandDate") || !egret.localStorage.getItem("excellentDate")) {
            var date = Date.parse(new Date().toString());
            egret.localStorage.setItem("normalDate", new Date(date - this.recruit[0].waitTime * 1000).toString());
            egret.localStorage.setItem("outstandDate", new Date(date - this.recruit[1].waitTime * 1000).toString());
            egret.localStorage.setItem("excellentDate", new Date(date - this.recruit[2].waitTime * 1000).toString());
            egret.localStorage.setItem("normalStatus", "0");
            egret.localStorage.setItem("outstandStatus", "0");
            egret.localStorage.setItem("excellentStatus", "0");
        }
    };
    RecruitData.getReward = function (type) {
        var _this = this;
        if (!this.isReward(type))
            return;
        var id;
        switch (type) {
            case 'normal':
                id = 0;
                egret.localStorage.setItem('normalStatus', '0');
                break;
            case 'outstand':
                id = 1;
                egret.localStorage.setItem('outstandStatus', '0');
                break;
            case 'excellent':
                id = 2;
                egret.localStorage.setItem('excellentStatus', '0');
                break;
        }
        var ran = Math.floor(Math.random() * 100);
        var index;
        this.recruit[id].probability.map(function (data, i) {
            if (i == 0 && data >= ran)
                index = i;
            else if (i > 0 && data >= ran && _this.recruit[id].probability[i - 1] <= ran)
                index = i;
        });
        var reward = {
            type: this.recruit[id].getType[index], num: this.recruit[id].getNum[index]
        };
        return reward;
    };
    RecruitData.getRecruit = function (type) {
        if (!this.isRecruit(type))
            return;
        egret.localStorage.setItem(type + "Date", new Date().toString());
        egret.localStorage.setItem(type + "Status", '1');
        return egret.localStorage.getItem(type + "Date");
    };
    RecruitData.isHasRecruit = function () {
        return Home.instace.getTimeSecond(Date.parse(new Date().toString()), Date.parse(egret.localStorage.getItem("normalDate"))) >= this.recruit[0].waitTime ||
            Home.instace.getTimeSecond(Date.parse(new Date().toString()), Date.parse(egret.localStorage.getItem("outstandDate"))) >= this.recruit[1].waitTime ||
            Home.instace.getTimeSecond(Date.parse(new Date().toString()), Date.parse(egret.localStorage.getItem("excellentDate"))) >= this.recruit[2].waitTime;
    };
    RecruitData.getRecruitInfo = function () {
        var info = [];
        this.recruit.map(function (data, index) {
            info.push({ type: data.type, lastTime: egret.localStorage.getItem(data.type + "Date"), payType: data.payType, payNumber: data.payNum, status: Number(egret.localStorage.getItem(data.type + "Status")) });
        });
        return info;
    };
    RecruitData.isRecruit = function (type) {
        var time = Home.instace.getTimeSecond(Date.parse(new Date().toString()), Date.parse(egret.localStorage.getItem(type + "Date")));
        var is;
        this.recruit.map(function (data) {
            if (data.type == type)
                is = (time > data.waitTime && egret.localStorage.getItem(type + "Status") == '0');
        });
        return is;
    };
    RecruitData.isReward = function (type) {
        return egret.localStorage.getItem(type + "Status") == '1';
    };
    RecruitData.finishRecruit = function (index) {
        var type = this.recruit[index].type;
        var waitTime = this.recruit[index].waitTime * 1000;
        var date = new Date().toString();
        var lastDate = new Date(Date.parse(date) - waitTime).toString();
        egret.localStorage.setItem(type + "Date", lastDate);
        egret.localStorage.setItem(type + "Status", '1');
    };
    RecruitData.recruit = [
        { type: 'normal', waitTime: 2 * 60 * 60, payType: [1], payNum: [1500], getType: [1, 2], getNum: [1, 10], probability: [4, 99] },
        { type: 'outstand', waitTime: 4 * 60 * 60, payType: [1], payNum: [3000], getType: [1, 2], getNum: [1, 15], probability: [6, 99] },
        { type: 'excellent', waitTime: 12 * 60 * 60, payType: [1], payNum: [5000], getType: [1, 2], getNum: [1, 20], probability: [9, 99] }
    ];
    return RecruitData;
}());
__reflect(RecruitData.prototype, "RecruitData");
//# sourceMappingURL=RecruitData.js.map