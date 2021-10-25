class HeroData {
    /**
     * @param heroIds 获取已拥有的英雄id列表
     * @param hero+id 获取已拥有的英雄信息 id|name|体力|上次恢复体力的时间|skill[]
     */
    public static heroList: Hero[] = []
    public static initHero() {//初始化英雄
        if(this.heroList.length == 0) {
            const heroNum = this.getHeroNum();
            if(heroNum==0) {
                // 
            } else {
                const ids = egret.localStorage.getItem("heroIds").split("|");
                ids.map((data,index) => {
                    const hero = egret.localStorage.getItem(`hero${data}`).split("|");//
                    let physical = Number(hero[2]);
                    let lastAddPhysical = hero[3];
                    if(physical < 100) {
                        const time = Date.parse(new Date().toString()) - Date.parse(lastAddPhysical);
                        if(Math.floor(time/(10*60))*10 + physical >= 100) {
                            physical = 100;
                            lastAddPhysical = new Date().toString();
                        } else {
                            physical += Math.floor(time/(10*60))*10;
                            const lastTime = Date.parse(lastAddPhysical) + Math.floor(time/(10*60)) * (10*60);
                            lastAddPhysical = new Date(lastTime).toString();
                        }
                    }
                    this.heroList.push({id: Number(data), name: hero[1], physical: physical, lastAddPhysical: lastAddPhysical, skill: []});
                })
            }
        }
    }

    public static getHero(id: number) {//获取某一英雄
        for(let i=0;i<=this.heroList.length;i++) {
            if(id == this.heroList[i].id) return this.heroList[i]; 
        }
    }

    public static setHeroPhysical(id: number, physical: number, flushTime: boolean = false) {//修改英雄体力
        for(let i=0;i<=this.heroList.length;i++) {
            if(id == this.heroList[i].id) {
                this.heroList[i].physical += physical;
                if(flushTime) this.heroList[i].lastAddPhysical = (new Date()).toString()
            }
        }
    }

    public static setHeroSkill(id: number) {//修改英雄技能
    }

    public static getHeroNum() {//获取英雄数量
        const ids = egret.localStorage.getItem("heroIds").split("|");
        return ids.length;
    }

    public static addHero(id: number) {//添加英雄
        const ids = egret.localStorage.getItem("heroIds");
        egret.localStorage.setItem("heroIds", `${ids?`${ids}|${id}`:`${id}`}`);
        egret.localStorage.setItem(`hero${id}`, `${id}|name|100|0|false,true`);
    }
}