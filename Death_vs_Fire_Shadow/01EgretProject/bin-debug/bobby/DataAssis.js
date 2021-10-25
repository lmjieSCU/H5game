var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var DataAssis = (function () {
    function DataAssis() {
    }
    //初始化英雄数据
    DataAssis.initAssist = function () {
        var firstFlag = "assis_first_data";
        var score = egret.localStorage.getItem(firstFlag);
        Util.saveItem(firstFlag, 1);
        var first = Number(score);
        if (first == 0) {
            //第一次初始化英雄数据
            for (var i = 0; i < assis_conf.MAX_ASSIS; i++) {
                if (assis_conf.data[i][2] == hero_conf.UNLOCK_TYPE_FREE) {
                    DataAssis.assis_unlock[i] = 1;
                }
            }
            DataAssis.assis_unlock[0] = 2;
            DataAssis.saveAssis();
        }
        else {
            DataAssis.readAssis();
        }
    };
    //存储英雄数据
    DataAssis.readAssis = function () {
        for (var i = 0; i < assis_conf.MAX_ASSIS; i++) {
            DataAssis.assis_unlock[i] = Util.getItem("assis_videos" + i);
        }
        for (var i = 0; i < assis_conf.MAX_ASSIS; i++) {
            DataAssis.assis_unlock[i] = Util.getItem("assis_videos" + i);
        }
    };
    //存储英雄数据
    DataAssis.saveAssis = function () {
        for (var i = 0; i < assis_conf.MAX_ASSIS; i++) {
            Util.saveItem("assis_unlock" + i, DataAssis.assis_unlock[i]);
        }
        for (var i = 0; i < assis_conf.MAX_ASSIS; i++) {
            Util.saveItem("assis_videos" + i, DataAssis.assis_unlock[i]);
        }
    };
    DataAssis.getIndex = function (name) {
        for (var i = 0; i < assis_conf.MAX_ASSIS; i++) {
            if (assis_conf.data[i][1] == name) {
                return i;
            }
        }
        return 0;
    };
    //解锁其中一个英雄
    DataAssis.unlockAssis = function (name) {
        var index = DataAssis.getIndex(name);
        var unlockType = assis_conf.data[index][2];
        var unlockNumber = assis_conf.data[index][3];
        switch (unlockType) {
            case hero_conf.UNLOCK_TYPE_GOLD:
                if (DataGame.goldNum >= unlockNumber) {
                    DataGame.cutGod(unlockNumber);
                    DataAssis.assis_unlock[index] = 1;
                    DataAssis.saveAssis();
                    return true;
                }
                break;
            case hero_conf.UNLOCK_TYPE_DIAMOND:
                if (DataGame.diamondNum >= unlockNumber) {
                    DataGame.cutDiamond(unlockNumber);
                    DataAssis.assis_unlock[index] = 1;
                    DataAssis.saveAssis();
                    return true;
                }
                break;
            case hero_conf.UNLOCK_TYPE_VIDEOS:
                if (DataAssis.assis_videos[index] >= unlockNumber) {
                    DataAssis.assis_unlock[index] = 1;
                    DataAssis.saveAssis();
                    return true;
                }
                break;
        }
        return false;
    };
    //选择上阵英雄
    DataAssis.selectAssis = function (name) {
        var index = DataAssis.getIndex(name);
        if (DataAssis.assis_unlock[index] == 0)
            return false;
        DataAssis.assis_unlock[index] = 2;
        DataAssis.saveAssis();
        return true;
    };
    //存储有没有解锁0, 没有解锁， 1解锁了,  2上阵了
    DataAssis.assis_unlock = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0
    ];
    //存储看了多少个激励视频
    DataAssis.assis_videos = [
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0, 0, 0,
        0, 0, 0
    ];
    //存储选择了哪个英雄
    DataAssis.select_assis_index = 0;
    return DataAssis;
}());
__reflect(DataAssis.prototype, "DataAssis");
//# sourceMappingURL=DataAssis.js.map