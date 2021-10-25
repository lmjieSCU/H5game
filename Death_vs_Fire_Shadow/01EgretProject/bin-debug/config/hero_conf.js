var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_conf = (function () {
    function hero_conf() {
    }
    //英雄的数
    hero_conf.UNLOCK_TYPE_FREE = 0;
    hero_conf.UNLOCK_TYPE_GOLD = 1;
    hero_conf.UNLOCK_TYPE_DIAMOND = 2;
    hero_conf.UNLOCK_TYPE_VIDEOS = 3;
    hero_conf.UNLOCK_TYPE_TASK = 4;
    hero_conf.UNLOCK_TYPE_PANS = 5;
    //
    hero_conf.MAX_HEROS = 46;
    hero_conf.data = 
    //序号		名称		名字		骨胳名		speed		jumpPower		heavy		unlockType		unlockNum		unLockType	
    [[1, "kakashi", "卡", "kakashi", 10, 16, 3, 0, 0],
        [2, "sasuke_xz", "佐", "sasuke_xz", 12, 17, 3, 0, 0],
        [3, "naruto", "鸣1", "naruto", 8, 15, 3, 1, 22500],
        [4, "orihime", "姬", "orihime", 10, 16, 1, 1, 15000],
        [5, "killerbee", "拉", "killerbee", 11, 16, 5, 3, 15],
        [6, "ichigo", "户一", "ichigo", 6, 15, 3, 3, 20],
        [7, "lee", "小李", "lee", 10, 15, 3, 4, 0],
        [8, "rukia", "若", "rukia", 6, 15, 1, 3, 40],
        [9, "konan", "南", "konan", 10, 16, 1, 3, 50],
        [10, "chad", "渡", "chad", 6, 15, 5, 3, 50],
        [11, "didala", "拉", "didala", 10, 16, 3, 3, 50],
        [12, "gaara", "罗", "gaara", 8, 15, 4, 3, 50],
        [13, "ikkaku", "角", "ikkaku", 11, 15, 3, 3, 50],
        [14, "juggo", "重", "juggo", 7, 14, 5, 3, 50],
        [15, "karin", "磷", "karin", 10, 15, 3, 3, 50],
        [16, "mayuri", "涅", "mayuri", 6, 15, 4, 3, 50],
        [17, "neji", "宁", "neji", 8, 15, 3, 3, 50],
        [18, "pain", "佩", "pain", 10, 15, 3, 1, 0],
        [19, "renji", "仁", "renji", 8, 15, 3, 0, 0],
        [20, "sakura", "樱", "sakura", 6, 15, 2, 0, 0],
        [21, "obito", "土", "obito", 12, 16, 3, 1, 10000],
        [22, "yin", "银", "yin", 10, 16, 2, 1, 14000],
        [23, "sasuke", "助", "sasuke", 8, 15, 3, 1, 20000],
        [24, "temari", "鞠", "temari", 9, 15, 3, 1, 18000],
        [25, "toushirou", "番", "toushirou", 8, 16, 2, 1, 18000],
        [26, "ulquiorra", "乌", "ulquiorra", 12, 15, 2, 1, 22000],
        [27, "uryuu", "石", "uryuu", 10, 15, 2, 1, 18000],
        [28, "suolong", "龙", "suolong", 10, 15, 2, 1, 15000],
        [29, "lufei", "飞", "lufei", 8, 15, 3, 2, 350],
        [30, "nazi", "兹", "nazi", 6, 15, 3, 2, 400],
        [31, "Asuna", "鹰", "Asuna", 10, 15, 3, 2, 500],
        [32, "geliou", "解", "geliou", 10, 15, 3, 2, 450],
        [33, "byakuya", "哉", "byakuya", 10, 15, 3, 2, 350],
        [34, "xubai", "虚", "xubai", 15, 17, 3, 2, 400],
        [35, "kenshin", "肯", "kenshin", 12, 17, 2, 2, 380],
        [36, "kenpachi", "剑", "kenpachi", 10, 16, 5, 2, 400],
        [37, "naruto_2", "鸣二", "naruto", 10, 15, 4, 2, 800],
        [38, "naruto_3", "鸣三", "naruto", 10, 15, 5, 5, 0],
        [39, "ichigo_2", "户二", "ichigo", 12, 17, 3, 2, 520],
        [40, "ichigo_3", "户三", "ichigo", 14, 19, 4, 2, 600],
        [41, "lee_2", "李二", "lee", 12, 15, 3, 2, 450],
        [42, "rukia_2", "若二", "rukia", 9, 15, 2, 2, 350],
        [43, "obito_2", "土二", "obito", 13, 16, 3, 2, 450],
        [44, "sasuke_2", "助二", "sasuke", 10, 15, 3, 2, 400],
        [45, "toushirou_2", "番二", "toushirou", 10, 18, 4, 2, 300],
        [46, "ulquiorra_2", "乌二", "ulquiorra", 16, 17, 3, 2, 600]];
    return hero_conf;
}());
__reflect(hero_conf.prototype, "hero_conf");
;
//# sourceMappingURL=hero_conf.js.map