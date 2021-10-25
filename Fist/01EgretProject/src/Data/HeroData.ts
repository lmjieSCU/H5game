class HeroData {
    /**
     * @param heroIds 获取已拥有的英雄id列表
     * @param hero+id 获取已拥有的英雄信息 id|name|体力|上次恢复体力的时间
     * @param heroSkill+id 英雄技能列表
     */
    public static initHero() {//初始化英雄
        let heroList: Hero[] = [];
        const heroNum = this.getHeroNum();
        if(heroNum==0) {
            egret.localStorage.setItem("heroIds","2006");
            egret.localStorage.setItem(`hero2006`, `2006|K|100|${new Date().toString()}`);
            egret.localStorage.setItem(`heroSkill2006`, JSON.stringify(this.initSkillList))
            heroList.push({id: 2006, name: "K", physical: 100, lastAddPhysical: new Date().toString(), skill: this.initSkillList});
        } else {
            heroList.splice(0, heroList.length);
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
                const skill = JSON.parse(egret.localStorage.getItem(`heroSkill${data}`));
                heroList.push({id: Number(data), name: hero[1], physical: physical, lastAddPhysical: lastAddPhysical, skill: skill});
            })
        }
        return heroList;
    }

    public static getHero(id: number) {//获取某一英雄
        const hero = egret.localStorage.getItem(`hero${id}`).split("|");//
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
        const skill = JSON.parse(egret.localStorage.getItem(`heroSkill${id}`));
        let heroInfo: Hero ={id: id, name: hero[1], physical: physical, lastAddPhysical: lastAddPhysical, skill: skill};
        return heroInfo;
    }

    public static setHeroPhysical(id: number, physical: number, flushTime: boolean = false) {//修改英雄体力
        const hero = egret.localStorage.getItem(`hero${id}`).split("|");//
        egret.localStorage.setItem(`hero${id}`, `${id}|${hero[1]}|${Number(hero[2])+physical}|${flushTime?(new Date()).toString():hero[3]}`)
    }

    public static getHeroNum() {//获取英雄数量
        const ids = egret.localStorage.getItem("heroIds");
        if(ids) return ids.split("|").length;
        else return 0;
    }

    public static addHero(id: number) {//添加英雄
        const ids = egret.localStorage.getItem("heroIds");
        egret.localStorage.setItem("heroIds", `${ids?`${ids}|${id}`:`${id}`}`);
        egret.localStorage.setItem(`hero${id}`, `${id}|name|100|${new Date().toString()}`);
        egret.localStorage.setItem(`heroSkill${id}`, JSON.stringify(this.initSkillList));
    }

    public static getHeroList() {//获取英雄id数组
        let ids = egret.localStorage.getItem("heroIds").split("|");
        let heroIds: number[] = [];
        ids.map((data, index) => {
            heroIds.push(Number(data));
        })
        return heroIds;
    }

    public static getHeroSkillList(heroId: number) {//获取英雄技能列表
        let skill = egret.localStorage.getItem(`heroSkill${heroId}`);
        return JSON.parse(skill);
    } 

    public static setHeroSkill(heroId: number, skillId: number, bool: boolean = true) {//修改英雄技能列表
        let skillList: SkillList = this.getHeroSkillList(heroId);
        skillList[`skill${skillId}`] = bool;
        egret.localStorage.setItem(`heroSkill${heroId}`, JSON.stringify(skillList));
        return skillList;
    }

    public static initSkillList: SkillList = {
        skill1: false,
        skill2: true,
        skill3: false,
        skill4: false,
        skill5: false,
        skill6: true,
        skill7: false,
        skill8: false,
        skill9: false,
        skill10: false,
        skill11: true,
        skill12: false
    }
    // public static heroSkill ={
    //     "heroId2006": {}
    // }
}