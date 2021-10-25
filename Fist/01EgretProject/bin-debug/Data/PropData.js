var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var PropData = (function () {
    function PropData() {
    }
    /**
     * @param prop+type 获取对应的道具
     */
    PropData.getPorp = function (id) {
        return Number(egret.localStorage.getItem("prop" + id)) || 0;
    };
    PropData.setProp = function (id, num) {
        var prop = Number(egret.localStorage.getItem("prop" + id)) || 0;
        egret.localStorage.setItem("prop" + id, "" + (prop + num));
        return prop + num;
    };
    PropData.getHeroList = function () {
        var heroList = [];
        PropData.prop.map(function (data, index) {
            if (data.id > 2000 && data.id < 3000)
                heroList.push(data);
        });
        return heroList;
    };
    PropData.getPropInfo = function (id) {
        for (var i = 0; i < this.prop.length; i++) {
            if (id == this.prop[i].id)
                return this.prop[i];
        }
    };
    PropData.getReward = function (type, num) {
        var reward = [];
        type.map(function (data, index) {
            reward.push({ type: data, num: num[index] });
        });
        return reward;
    };
    PropData.getHeroIdByName = function (name) {
        for (var i = 0; i < this.prop.length; i++) {
            if (this.prop[i].id >= 2000 && this.prop[i].id <= 2999) {
                if (this.prop[i].name == name)
                    return this.prop[i].id;
            }
        }
    };
    PropData.prop = [
        { id: 1001, descript: "金币", name: "money" },
        { id: 1002, descript: "能量水晶", name: "crystal" },
        { id: 1003, descript: "经验", name: "experience" },
        { id: 1004, descript: "招募券", name: "recruitVoucher" },
        { id: 1005, descript: "高级技能碎片 50个合成一个高级技能", name: "highSkillFragment" },
        { id: 1006, descript: "远古技能碎片 5个合成一个远古技能", name: "ancientSkillFragment" },
        { id: 2000, descript: "所有英雄除大蛇外任一个", name: "allHeroExcept" },
        { id: 2001, descript: "冰女", name: "roleKula" },
        { id: 2002, descript: "草稚京", name: "role" },
        { id: 2003, descript: "不知火舞", name: "roleMai" },
        { id: 2004, descript: "霸王丸", name: "role" },
        { id: 2005, descript: "八神", name: "role" },
        { id: 2006, descript: "K", name: "roleK" },
        { id: 2007, descript: "春丽", name: "roleChunli" },
        { id: 2008, descript: "terry", name: "roleTerry" },
        { id: 2009, descript: "隆", name: "roleRyu" },
        { id: 2999, descript: "所有英雄", name: "allHero" },
        { id: 3000, descript: "所有高级技能", name: "allHighSkill" },
        { id: 4000, descript: "所有远古技能", name: "allAncientSkill" },
    ];
    return PropData;
}());
__reflect(PropData.prototype, "PropData");
//# sourceMappingURL=PropData.js.map