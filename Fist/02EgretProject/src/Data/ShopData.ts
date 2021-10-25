class ShopData {
    /**
     * @param shopDate 商店刷新的时间
     * @param shopSkillId 商店售卖技能Id
     * @param shopList+num 当前是否能售卖1为能，0为不能
     */
    public static getHeroRandom() {//随机获取某一个英雄
        const heroList = PropData.getHeroList();
        const index = Math.floor(Math.random()*heroList.length);
        return heroList[index];
    }

    public static getSkillList(flush: boolean = false) {//获取技能列表
        let heroId;
        if (this.isFlush() || flush) {
            const heroId = this.getHeroRandom().id;
            const date = new Date();
            egret.localStorage.setItem("shopDate", new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0).toString());
            egret.localStorage.setItem("shopSkillId", heroId.toString());
            for(let i=1;i<=6;i++) {
                egret.localStorage.setItem(`shopList${i}`, '1');
            }
        } else {
            heroId = Number(egret.localStorage.getItem("shopSkillId"))
        }
        let name = PropData.getPropInfo(heroId);
        let info: ShopInfo[] = [];
        for(let i=1; i<=6; i++) {
            info.push({shopId: heroId, shopNum: 1, shopInfo: `${name}的第${i}技能`, payId: 1001, payNum: 10000, isShoping: Number(egret.localStorage.getItem(`shopList${i}`))==1});
        }
        return info;
    }

    public static isFlush() {//判断是否刷新
        const date = new Date();
        const lastDate = egret.localStorage.getItem("shopDate");
        if(Home.instace.getTimeSecond(Date.parse(date.toString()), Date.parse(lastDate)) >= 24*60*60) return true;
        return false;
    }
    public static cancelShop(id: number) {
        egret.localStorage.setItem(`shopList${id}`, '0');
    }

    public static isFlushTime() {//刷新限时商店
        const lastDate = egret.localStorage.getItem("shopDate");
        const date = new Date();
        let flush: boolean = false;
        if(Home.instace.getTimeSecond(Date.parse(date.toString()), Date.parse(lastDate)) >= 24*60*60) return true;
        this.timeShopLength.map((data, index) => {
            const timeDate = egret.localStorage.getItem("shopTimeStart");
            if(!timeDate || (Number(timeDate) == data.start && new Date().getHours() > data.end)) flush = true;
        })
        if(flush) for(let i=7;i<=9;i++) {
            egret.localStorage.setItem(`shopList${i}`, '1');
        }
    }

    public static getTimeShop() {//获取限时商店的数据
        this.isFlushTime();
        const hour = new Date().getHours();
        let isOpen = false;
        this.timeShopLength.map((data,index) => {
            if(hour>=data.start && hour <= data.end) {
                egret.localStorage.setItem("shopTimeStart", data.start.toString());
                isOpen = true;
            };
        })
        if(!isOpen) return null;
        this.timeShop.map((data,index) => {
            this.timeShop[index].isShoping = Number(egret.localStorage.getItem(`shopList${index+7}`)) == 1;
        })
        return this.timeShop;
    }

    public static timeShopLength = [
        {start: 8, end: 11},
        {start: 13, end: 15},
        {start: 19, end: 21}
    ]

    public static timeShop: ShopInfo[] = [
        {shopId: 2000, shopNum: 1, shopInfo: '', payId: 1001, payNum: 30000, isShoping: true},
        {shopId: 1002, shopNum: 1, shopInfo: '', payId: 1001, payNum: 2000, isShoping: true},
        {shopId: 4000, shopNum: 1, shopInfo: '', payId: 1001, payNum: 30000, isShoping: true},
    ]
}