class LotteryData {
    /**
     * @param lotteryLastTime 上次抽奖的时间
     * @param lotteryTimes 抽奖累计次数，每日清零
     */
    public static getReward() {//获取抽奖奖励
        let lottery = this.lottery;
        let all = 0;
        let weight: number[] = [];
        weight.push(0);
        lottery.map((data,index) => {
            if(data.type>2000 && data.type<3000) {
                if(HeroData.getHero(data.type)) all += data.weight;
            }
            else all += data.weight;
            weight.push(all);
        })
        const ran = Math.floor(Math.random()*all) + 1;
        let rewardId = 0;
        weight.map((data,index) => {
            if(index > 0) {
                if(data>=ran && weight[index-1]<ran) rewardId = index
            }
        })
        let reward: Reward;
        reward.type=lottery[rewardId-1].type;
        reward.num=lottery[rewardId-1].num;
        const lastTime = egret.localStorage.getItem("lotteryLastTime");
        if(!lastTime || Home.instace.getTimeSecond(Date.parse(new Date().toString()), Date.parse(lastTime)) >= 24*60*60) {
            const date = new Date();
            egret.localStorage.setItem("lotteryLastTime", new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0).toString());
            egret.localStorage.setItem("lotteryTimes", "1");
        } else {
            const times = Number(egret.localStorage.getItem("lotteryTimes"));
            egret.localStorage.setItem("lotteryTimes", (times+1).toString());
        }
        return {reward: reward, rewardId: rewardId};
    }

    public static getMaxReward() {//获取抽奖次数奖励
        return  PropData.getReward(this.maxReward.rewardType,this.maxReward.rewardNum);
    }

    public static getTimes() {//获取抽奖次数
        const lastTime = egret.localStorage.getItem("lotteryLastTime");
        if(!lastTime || Home.instace.getTimeSecond(Date.parse(new Date().toString()), Date.parse(lastTime)) >= 24*60*60) {
            const date = new Date();
            egret.localStorage.setItem("lotteryLastTime", new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0).toString());
            egret.localStorage.setItem("lotteryTimes", "1");
            return 0;
        } else {
            return Number(egret.localStorage.getItem("lotteryTimes"));
        }
    }
    public static lottery = [
        {id: 1, type: 1001, num: 1000, weight: 10, UI:"Draw_box_gold01_png"},
        {id: 2, type: 1001, num: 2000, weight: 40, UI:"Draw_box_gold02_png"},
        {id: 3, type: 1005, num: 5, weight: 30, UI:"Draw_box_fragment_png"},
        {id: 4, type: 1002, num: 1, weight: 10, UI:"Draw_box_crystal_png"},
        {id: 5, type: 2003, num: 1, weight: 5, UI:"Draw_box_hero_png"},
        {id: 6, type: 2004, num: 1, weight: 5, UI:"Draw_box_hero_png"},
        {id: 7, type: 3000, num: 1, weight: 20, UI:"Draw_box_skill_png"},
        {id: 8, type: 1004, num: 1, weight: 20, UI:"Draw_box_recruit_png"}
    ]

    public static maxReward = {
        max: 6, rewardType: [1001, 1005], rewardNum: [1000, 10]
    }
}