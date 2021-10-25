class FightData {//所有的战斗信息

    //=====================================试炼level的战斗信息====================================================
    /**
     * @param maxLevel 最高关卡
     * @param passCount 总通关次数
     * @param levelVictory 胜利次数
     * @param levelFail 失败次数
     * @param maxLevelHero+id 单英雄最高关卡
     * @param passCountHero+id 单英雄通关次数
     * @param levelVictoryHero+id 单英雄胜场
     * @param levelFailHero+id 单英雄败场
     */
    public static getFightLevelInfo(): FightLevelInfo {//获取关卡战斗信息
        const maxLevel = Number(egret.localStorage.getItem("maxLevel")) || 0;
        const passCount = Number(egret.localStorage.getItem("passCount")) || 0;
        const levelVictory = Number(egret.localStorage.getItem("levelVictory")) || 0;
        const levelFail = Number(egret.localStorage.getItem("levelFail")) || 0;
        const heroIds = HeroData.getHeroList();
        let info: FightLevelInfo = {
            maxLevel: maxLevel,
            passCount: passCount,
            allVictory: levelVictory,
            allFail: levelFail,
            heroList: []
        }
        heroIds.map((data, index) => {
            const heroMaxLevel = Number(egret.localStorage.getItem(`maxLevelHero${data}`)) || 0;
            const passCountHero = Number(egret.localStorage.getItem(`passCountHero${data}`)) || 0;
            info.heroList.push({heroId: data, maxLevel: heroMaxLevel, passCount: passCountHero});
        })
        return info;
    }
    public static setFightLevelMax(max: number, heroId: number) {//修改最高关卡信息以及单英雄最高关卡
        let heroMaxLevel = Number(egret.localStorage.getItem(`maxLevelHero${heroId}`)) || 0;
        egret.localStorage.setItem(`maxLevelHero${heroId}`, `${Math.max(heroMaxLevel, max)}`);
        let levelMax = Number(egret.localStorage.getItem(`maxLevel`)) || 0;
        egret.localStorage.setItem("levelMax", `${Math.max(levelMax, max)}`);
    }

    public static setLevelPassCount(count: number, heroId: number) {//修改总通关次数以及单英雄通关次数
        let passCount = (Number(egret.localStorage.getItem("passCount")) || 0)+count;
        egret.localStorage.setItem("passCount", `${passCount}`);
        let passCountHero = (Number(egret.localStorage.getItem(`passCountHero${heroId}`)) || 0) + passCount;
        egret.localStorage.setItem(`passCountHero${heroId}`, `${passCountHero}`);
    }

    public static setLevelVictoryFail(victory: boolean, heroId: number) {//修改总胜负场次以及单英雄胜负场次
        if(victory) {
            const victory = (Number(egret.localStorage.getItem("levelVictory")) || 0)+1;
            egret.localStorage.setItem("levelVictory", `${victory}`);
            const victoryHero = (Number(egret.localStorage.getItem(`levelVictoryHero${heroId}`)) || 0) + 1;
            egret.localStorage.setItem(`levelVictoryHero${heroId}`, `${victoryHero}`);
        } else {
            const fail = (Number(egret.localStorage.getItem("levelFail")) || 0) + 1;
            egret.localStorage.setItem("levelFail", `${fail}`);
            const failHero = (Number(egret.localStorage.getItem(`levelFailHero${heroId}`)) || 0) + 1;
            egret.localStorage.setItem(`levelFailHero${heroId}`, `${failHero}`);
        }
    }
    //=====================================试炼level的战斗信息====================================================

    //=====================================匹配match的战斗信息====================================================
    /**
     * @param matchFailCount 累计失败场次
     * @param matchVictoryCount 累计胜利场次
     * @param matchRepeatedly 最高连胜次数
     * @param matchRepeatedlyNow 当前连胜次数
     * @param matchFailHero+id 单英雄败场
     * @param matchVictoryHero+id 单英雄胜场
     */

    public static getFightMatchInfo(): FightMatchInfo {//获取匹配战斗信息
        const matchFailCount = Number(egret.localStorage.getItem("matchFailCount")) || 0;
        const matchVictoryCount = Number(egret.localStorage.getItem("matchVictoryCount")) || 0;
        const matchRepeatedly = Number(egret.localStorage.getItem("matchRepeatedly")) || 0;
        const matchRepeatedlyNow = Number(egret.localStorage.getItem("matchRepeatedlyNow")) || 0;
        const heroIds = HeroData.getHeroList();
        let info: FightMatchInfo = {
            repeatedlyMax: matchRepeatedly,
            repeatedlyNow: matchRepeatedlyNow,
            victoryCount: matchVictoryCount,
            failCount: matchFailCount,
            heroList: []
        }
        heroIds.map((data, index) => {
            let victory = Number(egret.localStorage.getItem(`matchVictoryHero${data}`)) || 0;
            info.heroList.push({heroId: data, victory: victory});
        })
        return info;
    }

    public static setMatchVictoryFail(victory: boolean, heroId: number) {//修改匹配战斗信息
        let repeatedlyMax = Number(egret.localStorage.getItem("matchRepeatedly")) || 0;
        let repeatedlyNow;
        if(victory) {
            let allVictory = (Number(egret.localStorage.getItem("matchVictoryCount")) || 0) + 1;
            egret.localStorage.setItem("matchVictoryCount", `${allVictory}`);
            let matchVictoryHero = (Number(egret.localStorage.getItem(`matchVictoryHero${heroId}`)) || 0) + 1;
            egret.localStorage.setItem(`matchVictoryHero${heroId}`, `${matchVictoryHero}`);
            repeatedlyNow = (Number(egret.localStorage.getItem("matchRepeatedlyNow")) || 0) + 1;
        } else {
            let allFail = (Number(egret.localStorage.getItem("matchFailCount")) || 0) + 1;
            egret.localStorage.setItem("matchFailCount", `${allFail}`);
            let matchFailHero = (Number(egret.localStorage.getItem(`matchFailHero${heroId}`)) || 0) + 1;
            egret.localStorage.setItem(`matchFailHero${heroId}`, `${matchFailHero}`);
            repeatedlyNow = 0;
        }
        egret.localStorage.setItem(`matchRepeatedlyNow`, `${repeatedlyNow}`);
        egret.localStorage.setItem(`matchRepeatedly`, `${Math.max(repeatedlyMax,repeatedlyNow)}`);
    }
    //=====================================匹配match的战斗信息====================================================
    //=====================================排位rank的战斗信息====================================================
    /**
     * @param rankVictoryCount 总胜场
     * @param rankFailCount 总败场
     * @param rankVictoryHero+id 单英雄总胜场
     * @param rankFailHero+id 单英雄总败场
     */
    public static getFightRankInfo(): FightRankInfo {//获取排位战斗信息
        const rankVictoryCount = Number(egret.localStorage.getItem("rankVictoryCount")) || 0;
        const rankFailCount = Number(egret.localStorage.getItem("rankFailCount")) || 0;
        let info: FightRankInfo  = {
            victoryCount: rankVictoryCount,
            failCount: rankFailCount,
            heroList: []
        }
        const heroIds = HeroData.getHeroList();
        heroIds.map((data, index) => {
            const rankFailHero = Number(egret.localStorage.getItem(`rankFailHero${data}`)) || 0;
            const rankVictoryHero = Number(egret.localStorage.getItem(`rankVictoryHero${data}`)) || 0;
            info.heroList.push({heroId: data, victory: rankVictoryHero, fail: rankFailHero});
        })
        return info
    }

    public static setFightRankInfo(victory: boolean, heroId: number) {//修改排位战斗信息
        if(victory) {
            const victoryCount = (Number(egret.localStorage.getItem("rankVictoryCount")) || 0) + 1;
            egret.localStorage.setItem("rankVictoryCount", `${victoryCount}`);
            const victoryHero = (Number(egret.localStorage.getItem(`rankVictoryHero${heroId}`)) || 0) + 1;
            egret.localStorage.setItem(`rankVictoryHero${heroId}`, `${victoryHero}`);
        } else {
            const failCount = (Number(egret.localStorage.getItem("rankFailCount")) || 0) + 1;
            egret.localStorage.setItem("rankFailCount", `${failCount}`);
            const failHero = (Number(egret.localStorage.getItem(`rankFailHero${heroId}`)) || 0) + 1;
            egret.localStorage.setItem(`rankFailHero${heroId}`, `${failHero}`);
        }
    }
    //=====================================排位rank的战斗信息====================================================

}