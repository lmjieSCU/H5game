interface Hero {//英雄数据
    id: number,
    name: string,
    physical: number,
    lastAddPhysical: string,
    skill: boolean[];
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
    type: string
}

interface ShopInfo {
    shopId: number,
    shopInfo: string,
    shopNum: number,
    payId: number,
    payNum: number,
    isShoping: boolean
}

interface skillList {
    
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