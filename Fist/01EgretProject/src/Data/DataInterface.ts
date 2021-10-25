interface Hero {//英雄数据
    id: number,
    name: string,
    physical: number,
    lastAddPhysical: string,
    skill: SkillList;
}

interface TaskInfo {//任务信息
    type: number, 
    lv: number, 
    all: number, 
    count: number, 
    info: string
}

interface Reward {//奖励信息
    type: number,
    num: number
}

interface RecruitInfo {//招募信息
    type: string,
    lastTime: string,
    payType: number[],
    payNumber: number[],
    status: number
}

interface PlayInfo {//战斗信息
    map: number,
    life: number,
    powerMax: number,
    p1: string,
    p2: string,
    player: number,
    time: number,
    type: string,
    p1SkillList: SkillList,
    p2SkillList: SkillList
}

interface ShopInfo {//商品信息
    shopId: number,
    shopInfo: string,
    shopNum: number,
    payId: number,
    payNum: number,
    isShoping: boolean
}

interface SkillList {
    "skill1": boolean,//←+天
    "skill2": boolean,//↓+天
    "skill3": boolean,//→+天
    "skill4": boolean,//↑+天
    "skill5": boolean,//←+地
    "skill6": boolean,//↓+地
    "skill7": boolean,//→+地
    "skill8": boolean,//↑+地
    "skill9": boolean,//禁状态下↓+地
    "skill10": boolean,//禁状态下↓+天
    "skill11": boolean,//禁状态下+禁
    "skill12": boolean//禁状态下←+禁
}
interface RankInfo {//段位信息
    rank: number,
    smallRank: number,
    rankStar: number
}

interface RankHeroInfo {//排位的每个英雄战斗信息
    heroId: number,
    victory: number,
    fall: number
}

interface NewHandInfo {//新手信息
    isJump: boolean,//是否跳过教程
    isComplete: boolean,//是否完成过教程
    playCount: number,//完成游戏的次数
}

interface FightLevelInfo {//关卡战斗信息
    allVictory: number,
    allFail: number,
    maxLevel: number,
    passCount: number,
    heroList: {
        heroId: number,
        maxLevel: number,
        passCount: number
    }[]
}

interface FightMatchInfo {//匹配战斗信息
    repeatedlyMax: number,
    repeatedlyNow: number,
    victoryCount: number,
    failCount: number,
    heroList: {
        heroId: number,
        victory: number,
    }[]
}

interface FightRankInfo {//排位战斗信息
    victoryCount: number,
    failCount: number,
    heroList: {
        heroId: number,
        victory: number,
        fail: number
    }[]
}