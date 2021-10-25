var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**游戏当前阶段所处于关卡数,阶段数,金币数
 * 从XML读取出每一阶段cells的位置
 */
var GameData = (function () {
    function GameData() {
        this.level = 0;
        this.lv_stage = 0;
        this.stageXML = egret.XML.parse(LevelInfo_IC.xml);
        GameData.jinbi = LocalDataCtrl.I.coins;
    }
    Object.defineProperty(GameData, "I", {
        get: function () {
            if (this.instance == null) {
                this.instance = new GameData();
            }
            return this.instance;
        },
        enumerable: true,
        configurable: true
    });
    GameData.prototype.nextstage = function () {
        this.lv_stage++;
        var stageinfos = this.stageInfo(this.level);
        if (this.lv_stage >= stageinfos.length) {
            this.level++;
            LocalDataCtrl.I.FreshLevel(this.level);
            this.lv_stage = 0;
            return true;
        }
        return false;
    };
    GameData.prototype.styleInfo = function (lv) {
        var styleInfos = new Array();
        if (lv < 1 || lv > 20) {
            return;
        }
        var xml = DataManager_IC["xml" + lv];
        var Modes = egret.XML.parse(xml);
        var children = Modes.children;
        for (var key in children) {
            var val = children[Number(key)];
            styleInfos.push(new XMLObj(val));
        }
        return styleInfos;
    };
    GameData.prototype.stageInfo = function (level) {
        var stageInfos = new Array();
        var lv;
        var lvEft;
        var style;
        var data;
        if (level < 0 || level > 99) {
            return null;
        }
        lv = this.stageXML.children[level];
        for (var lvEftid = 0; lvEftid < lv.children.length; lvEftid++) {
            lvEft = lv.children[lvEftid];
            for (var styleid = 0; styleid < lvEft.children.length; styleid++) {
                style = lvEft.children[styleid];
                switch (style.localName) {
                    case "boss":
                        this.makeBossLv(stageInfos);
                        break;
                    case "styleNum":
                        data = style.children[0];
                        var num = Number(data.text);
                        stageInfos.push(new NPoint(num));
                        break;
                    case "gEft":
                        break;
                    default:
                        break;
                }
            } //end of styleid
        } //end of lvEftid
        return stageInfos;
    };
    GameData.prototype.makeBossLv = function (infos) {
        infos.push(new NPoint(-1, 6));
        infos.push(new NPoint(-1, 6));
        infos.push(new NPoint(-1, 6));
        infos.push(new NPoint(-1, 8));
        infos.push(new NPoint(-1, 8));
        infos.push(new NPoint(-1, 8));
        infos.push(new NPoint(-1, 10));
        infos.push(new NPoint(-1, 10));
        infos.push(new NPoint(-1, 10));
        infos.push(new NPoint(-1, 12));
        return;
    };
    return GameData;
}());
__reflect(GameData.prototype, "GameData");
//# sourceMappingURL=GameData.js.map