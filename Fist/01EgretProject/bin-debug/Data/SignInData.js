var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var SignInData = (function () {
    function SignInData() {
    }
    /**
     * @param newHandSignInDate 新手上次签到的时间
     * @param newHandSignIn 新手签到的次数
     * @param signInDate 上次签到的时间
     * @param signInTimes 签到次数
     */
    SignInData.setNewHandSignIn = function () {
        var day = this.getNewHandSignIn();
        if (day <= 7 && this.isNewHandSignIn()) {
            var date = new Date();
            egret.localStorage.setItem("newHandSignInDate", (new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0)).toString());
            egret.localStorage.setItem("newHandSignIn", (day + 1).toString());
            return PropData.getReward(this.newHandSignIn[day].rewardType, this.newHandSignIn[day].rewardNum);
        }
    };
    SignInData.getNewHandSignIn = function () {
        var day = Number(egret.localStorage.getItem("newHandSignIn")) || 0;
        return day;
    };
    SignInData.isNewHandSignIn = function () {
        var time = egret.localStorage.getItem("newHandSignInDate");
        if (time) {
            var nowDate = new Date();
            var day = (Date.parse(nowDate.toString()) - Date.parse(time)) / (1000 * 60 * 60 * 24);
            if (day > 1)
                return true;
            return false;
        }
        return true;
    };
    SignInData.getSignInTimes = function () {
        var day = egret.localStorage.getItem("signInDate");
        var date = new Date();
        if (!day)
            return 0;
        if (new Date(day).getMonth() != date.getMonth())
            return 0;
        var times = Number(egret.localStorage.getItem("signInTimes")) || 0;
        return times;
    };
    SignInData.setSignIn = function () {
        if (!this.isSignIn())
            return null;
        var times = this.getSignInTimes();
        var date = new Date();
        egret.localStorage.setItem("signInDate", (new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0)).toString());
        egret.localStorage.setItem("signInTimes", (times + 1).toString());
        return PropData.getReward(this.signIn[times].rewardType, this.signIn[times].rewardNum);
    };
    SignInData.isSignIn = function () {
        var time = egret.localStorage.getItem("signInDate");
        if (time) {
            var nowDate = new Date();
            var day = (Date.parse(nowDate.toString()) - Date.parse(time)) / (1000 * 60 * 60 * 24);
            if (day > 1)
                return true;
            return false;
        }
        return true;
    };
    SignInData.newHandSignIn = [
        { day: 1, rewardType: [2001], rewardNum: [1] },
        { day: 2, rewardType: [1002], rewardNum: [2] },
        { day: 3, rewardType: [1002, 1004], rewardNum: [2, 1] },
        { day: 4, rewardType: [1002, 1005], rewardNum: [2, 4] },
        { day: 5, rewardType: [1002, 1004], rewardNum: [2, 1] },
        { day: 6, rewardType: [1002, 1005], rewardNum: [2, 1] },
        { day: 7, rewardType: [2002], rewardNum: [1] },
    ];
    SignInData.signIn = [
        { day: 1, rewardType: [1001, 1003], rewardNum: [1000, 100] },
        { day: 2, rewardType: [1001, 1003], rewardNum: [1000, 100] },
        { day: 3, rewardType: [1005], rewardNum: [2] },
        { day: 4, rewardType: [1001, 1003], rewardNum: [1000, 100] },
        { day: 5, rewardType: [1001, 1003], rewardNum: [1000, 100] },
        { day: 6, rewardType: [1005], rewardNum: [2] },
        { day: 7, rewardType: [1005, 1002], rewardNum: [5, 2] },
        { day: 8, rewardType: [1001, 1003], rewardNum: [1000, 100] },
        { day: 9, rewardType: [1001, 1003], rewardNum: [1000, 100] },
        { day: 10, rewardType: [1005], rewardNum: [2] },
        { day: 11, rewardType: [1001, 1003], rewardNum: [1000, 100] },
        { day: 12, rewardType: [1001, 1003], rewardNum: [1000, 100] },
        { day: 13, rewardType: [1001, 1003], rewardNum: [1000, 100] },
        { day: 14, rewardType: [1001, 1003], rewardNum: [1000, 100] },
        { day: 15, rewardType: [1006, 1002], rewardNum: [2, 2] },
        { day: 16, rewardType: [1001, 1003], rewardNum: [1000, 100] },
        { day: 17, rewardType: [1001, 1003], rewardNum: [1000, 100] },
        { day: 18, rewardType: [1001, 1003], rewardNum: [1000, 100] },
        { day: 19, rewardType: [1005], rewardNum: [2] },
        { day: 20, rewardType: [1001, 1003], rewardNum: [1000, 100] },
        { day: 21, rewardType: [1001, 1003], rewardNum: [1000, 100] },
        { day: 22, rewardType: [1001, 1003], rewardNum: [1000, 100] },
        { day: 23, rewardType: [1001, 1003], rewardNum: [1000, 100] },
        { day: 24, rewardType: [1005], rewardNum: [2] },
        { day: 25, rewardType: [1002], rewardNum: [1] },
        { day: 26, rewardType: [1001, 1003], rewardNum: [1000, 100] },
        { day: 27, rewardType: [1001, 1003], rewardNum: [1000, 100] },
        { day: 28, rewardType: [1001, 1003], rewardNum: [1000, 100] },
        { day: 29, rewardType: [1001, 1003], rewardNum: [1000, 100] },
        { day: 30, rewardType: [1006, 1002], rewardNum: [2, 4] },
        { day: 31, rewardType: [1006, 1002], rewardNum: [2, 2] },
    ];
    return SignInData;
}());
__reflect(SignInData.prototype, "SignInData");
//# sourceMappingURL=SignInData.js.map