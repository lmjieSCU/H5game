class PropData {
    /**
     * @param prop+type 获取对应的道具
     */
    public static getPorp(id: number) {//获取某种道具的数量
        return Number(egret.localStorage.getItem(`prop${id}`));
    }

    public static setProp(id: number, num: number) {//修改道具数量
        const prop = Number(egret.localStorage.getItem(`prop${id}`));
        egret.localStorage.setItem(`prop${id}`, (prop+num).toString());
        return prop+num;
    }

    public static getHeroList() {//获取所有英雄列表
        let heroList: {id: number, name: string}[] = [];
        PropData.prop.map((data, index) => {
            if(data.id>2000 && data.id<3000) heroList.push(data);
        })

        return heroList;
    }
    public static getPropInfo(id: number) {//获取道具信息
        for(let i=0; i<this.prop.length; i++) {
            if(id == this.prop[i].id) return this.prop[i];
        }
    }

    public static getReward(type: number[], num: number[]) {//奖励数据转化
        let reward: Reward[] = [];
        type.map((data,index) => {
            reward.push({type: data, num: num[index]});
        })
        return reward;
    }


    public static prop = [
        {id: 1001, name: "金币"},
        {id: 1002, name: "能量水晶"},
        {id: 1003, name: "经验"},
        {id: 1004, name: "招募券"},
        {id: 1005, name: "高级技能碎片"},
        {id: 1006, name: "远古技能碎片"},

        {id: 2000, name: "所有英雄除大蛇外任一个"},
        {id: 2001, name: "冰女"},
        {id: 2002, name: "草稚京"},
        {id: 2003, name: "不知火舞"},
        {id: 2004, name: "霸王丸"},
        {id: 2005, name: "八神"},

        {id: 3000, name: "所有高级技能"},
        {id: 4000, name: "所有远古技能"},
    ]
}