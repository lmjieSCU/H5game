var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DataHero = (function () {
    function DataHero() {
    }
    //初始化英雄数据
    DataHero.initHeros = function () {
        var firstFlag = "hero_first_data";
        var score = egret.localStorage.getItem(firstFlag);
        Util.saveItem(firstFlag, 1);
        var first = Number(score);
        if (first == 0) {
            //第一次初始化英雄数据
            for (var i = 0; i < hero_conf.MAX_HEROS; i++) {
                if (hero_conf.data[i][8] == hero_conf.UNLOCK_TYPE_FREE) {
                    DataHero.hero_unlock[i] = 1;
                }
            }
            DataHero.hero_unlock[0] = 2;
            DataHero.saveHeros();
        }
        else {
            DataHero.readHeros();
        }
    };
    //存储英雄数据
    DataHero.readHeros = function () {
        for (var i = 0; i < hero_conf.MAX_HEROS; i++) {
            DataHero.hero_unlock[i] = Util.getItem("hero_videos" + i);
        }
        for (var i = 0; i < hero_conf.MAX_HEROS; i++) {
            DataHero.hero_unlock[i] = Util.getItem("hero_videos" + i);
        }
    };
    //存储英雄数据
    DataHero.saveHeros = function () {
        for (var i = 0; i < hero_conf.MAX_HEROS; i++) {
            Util.saveItem("hero_unlock" + i, DataHero.hero_unlock[i]);
        }
        for (var i = 0; i < hero_conf.MAX_HEROS; i++) {
            Util.saveItem("hero_videos" + i, DataHero.hero_unlock[i]);
        }
    };
    DataHero.getIndex = function (name) {
        for (var i = 0; i < hero_conf.MAX_HEROS; i++) {
            if (hero_conf.data[i][1] == name) {
                return i;
            }
        }
        return 0;
    };
    //解锁其中一个英雄
    DataHero.unlockHero = function (name) {
        var index = DataHero.getIndex(name);
        var unlockType = hero_conf.data[index][8];
        var unlockNumber = hero_conf.data[index][9];
        switch (unlockType) {
            case hero_conf.UNLOCK_TYPE_GOLD:
                if (DataGame.goldNum >= unlockNumber) {
                    DataGame.cutGod(unlockNumber);
                    DataHero.hero_unlock[index] = 1;
                    DataHero.saveHeros();
                    return true;
                }
                break;
            case hero_conf.UNLOCK_TYPE_DIAMOND:
                if (DataGame.diamondNum >= unlockNumber) {
                    DataGame.cutDiamond(unlockNumber);
                    DataHero.hero_unlock[index] = 1;
                    DataHero.saveHeros();
                    return true;
                }
                break;
            case hero_conf.UNLOCK_TYPE_VIDEOS:
                if (DataHero.hero_videos[index] >= unlockNumber) {
                    DataHero.hero_unlock[index] = 1;
                    DataHero.saveHeros();
                    return true;
                }
                break;
        }
        return false;
    };
    //选择上阵英雄
    DataHero.selectHero = function (name) {
        var index = DataHero.getIndex(name);
        if (DataHero.hero_unlock[index] == 0)
            return false;
        DataHero.hero_unlock[index] = 2;
        DataHero.saveHeros();
        return true;
    };
    //存储有没有解锁0, 没有解锁， 1解锁了,  2上阵了
    DataHero.hero_unlock = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0
    ];
    //存储看了多少个激励视频
    DataHero.hero_videos = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0
    ];
    //存储选择了哪个英雄
    DataHero.select_hero_index = 0;
    return DataHero;
}());
__reflect(DataHero.prototype, "DataHero");
//# sourceMappingURL=DataHero.js.map