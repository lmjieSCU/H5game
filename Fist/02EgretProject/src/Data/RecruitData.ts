class RecruitData {
    /**
     * @param normalDate 上一次招募普通的时间
     * @param outstandDate 上一次招募出众的时间
     * @param excellentDate 上一次招募卓越的时间
     * @param normalStatus 是否领取过奖励 0 未开始招募 | 1 已开始招募未领取
     * @param outstandStatus 是否领取过奖励
     * @param excellentStatus 是否领取过奖励
     */
    public static initRecruit() {//初始化招募
        if(!egret.localStorage.getItem("normalDate") || !egret.localStorage.getItem("outstandDate") || !egret.localStorage.getItem("excellentDate")) {
            const date = Date.parse(new Date().toString());
            egret.localStorage.setItem("normalDate", new Date(date - this.recruit[0].waitTime*1000).toString());
            egret.localStorage.setItem("outstandDate", new Date(date - this.recruit[1].waitTime*1000).toString());
            egret.localStorage.setItem("excellentDate", new Date(date - this.recruit[2].waitTime*1000).toString());
            egret.localStorage.setItem("normalStatus", "0");
            egret.localStorage.setItem("outstandStatus", "0");
            egret.localStorage.setItem("excellentStatus", "0");
        }
    }

    public static getReward(type: string) {//获取对应type的奖励
        if(!this.isReward(type)) return;
        let id: number;
        switch(type) {
            case 'normal':id = 0;egret.localStorage.setItem('normalStatus','0');break;
            case 'outstand':id = 1;egret.localStorage.setItem('outstandStatus','0');break;
            case 'excellent':id = 2;egret.localStorage.setItem('excellentStatus','0');break;
        }
        const ran = Math.floor(Math.random()*100);
        let index: number;
        this.recruit[id].probability.map((data,i) => {
            if(i==0 && data>=ran) index = i;
            else if(i>0 && data>=ran && this.recruit[id].probability[i-1] <= ran) index = i; 
        })
        let reward: Reward = {
            type: this.recruit[id].getType[index], num: this.recruit[id].getNum[index]
        }
        return reward;
    }

    public static getRecruit(type: string) {//开始招募
        if(!this.isRecruit(type)) return;
        egret.localStorage.setItem(`${type}Date`, new Date().toString());
        egret.localStorage.setItem(`${type}Status`,'1');
        return egret.localStorage.getItem(`${type}Date`);
    }

    public static isHasRecruit() {//判断是否有可招募
        return Home.instace.getTimeSecond(Date.parse(new Date().toString()) , Date.parse(egret.localStorage.getItem("normalDate"))) >= this.recruit[0].waitTime ||
        Home.instace.getTimeSecond(Date.parse(new Date().toString()) , Date.parse(egret.localStorage.getItem("outstandDate"))) >= this.recruit[1].waitTime ||
        Home.instace.getTimeSecond(Date.parse(new Date().toString()) , Date.parse(egret.localStorage.getItem("excellentDate"))) >= this.recruit[2].waitTime
    }

    public static getRecruitInfo() {//获取招募信息
        let info: RecruitInfo[] = [];
        this.recruit.map((data,index) => {
            info.push({type: data.type, lastTime: egret.localStorage.getItem(`${data.type}Date`), payType: data.payType, payNumber: data.payNum, status: Number(egret.localStorage.getItem(`${data.type}Status`))})
        })
        return info;
    }

    public static isRecruit(type: string) {//判断当前是否可以招募
        const time = Home.instace.getTimeSecond(Date.parse(new Date().toString()) , Date.parse(egret.localStorage.getItem(`${type}Date`)));
        let is: boolean;
        this.recruit.map((data) => {
            if(data.type == type) is = (time>data.waitTime && egret.localStorage.getItem(`${type}Status`) == '0');
        })
        return is;
    }

    public static isReward(type: string) {//判断当前是否有可领取奖励
        return egret.localStorage.getItem(`${type}Status`) == '1';
    }

    public static finishRecruit(index: number) {
        const type = this.recruit[index].type;
        const waitTime = this.recruit[index].waitTime*1000;
        const date = new Date().toString();
        const lastDate = new Date(Date.parse(date)-waitTime).toString();
        egret.localStorage.setItem(`${type}Date`, lastDate);
        egret.localStorage.setItem(`${type}Status`, '1');
    }


    public static recruit = [
        {type: 'normal', waitTime: 2*60*60, payType: [1], payNum: [1500], getType:[1,2], getNum: [1,10], probability:[4,99]},
        {type: 'outstand', waitTime: 4*60*60, payType: [1], payNum: [3000], getType:[1,2], getNum: [1,15], probability:[6,99]},
        {type: 'excellent', waitTime: 12*60*60, payType: [1], payNum: [5000], getType:[1,2], getNum: [1,20], probability:[9,99]}
    ]
}