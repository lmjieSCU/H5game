var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var HeroData = (function () {
    function HeroData() {
    }
    /**
     * @param heroIds 获取已拥有的英雄id列表
     * @param hero+id 获取已拥有的英雄信息 id|name|体力|上次恢复体力的时间
     * @param heroSkill+id 英雄技能列表
     */
    HeroData.initHero = function () {
        var heroList = [];
        var heroNum = this.getHeroNum();
        if (heroNum == 0) {
            egret.localStorage.setItem("heroIds", "2006");
            egret.localStorage.setItem("hero2006", "2006|K|100|" + new Date().toString());
            egret.localStorage.setItem("heroSkill2006", JSON.stringify(this.initSkillList));
            heroList.push({ id: 2006, name: "K", physical: 100, lastAddPhysical: new Date().toString(), skill: this.initSkillList });
        }
        else {
            heroList.splice(0, heroList.length);
            var ids = egret.localStorage.getItem("heroIds").split("|");
            ids.map(function (data, index) {
                var hero = egret.localStorage.getItem("hero" + data).split("|"); //
                var physical = Number(hero[2]);
                var lastAddPhysical = hero[3];
                if (physical < 100) {
                    var time = Date.parse(new Date().toString()) - Date.parse(lastAddPhysical);
                    if (Math.floor(time / (10 * 60)) * 10 + physical >= 100) {
                        physical = 100;
                        lastAddPhysical = new Date().toString();
                    }
                    else {
                        physical += Math.floor(time / (10 * 60)) * 10;
                        var lastTime = Date.parse(lastAddPhysical) + Math.floor(time / (10 * 60)) * (10 * 60);
                        lastAddPhysical = new Date(lastTime).toString();
                    }
                }
                var skill = JSON.parse(egret.localStorage.getItem("heroSkill" + data));
                heroList.push({ id: Number(data), name: hero[1], physical: physical, lastAddPhysical: lastAddPhysical, skill: skill });
            });
        }
        return heroList;
    };
    HeroData.getHero = function (id) {
        var hero = egret.localStorage.getItem("hero" + id).split("|"); //
        var physical = Number(hero[2]);
        var lastAddPhysical = hero[3];
        if (physical < 100) {
            var time = Date.parse(new Date().toString()) - Date.parse(lastAddPhysical);
            if (Math.floor(time / (10 * 60)) * 10 + physical >= 100) {
                physical = 100;
                lastAddPhysical = new Date().toString();
            }
            else {
                physical += Math.floor(time / (10 * 60)) * 10;
                var lastTime = Date.parse(lastAddPhysical) + Math.floor(time / (10 * 60)) * (10 * 60);
                lastAddPhysical = new Date(lastTime).toString();
            }
        }
        var skill = JSON.parse(egret.localStorage.getItem("heroSkill" + id));
        var heroInfo = { id: id, name: hero[1], physical: physical, lastAddPhysical: lastAddPhysical, skill: skill };
        return heroInfo;
    };
    HeroData.setHeroPhysical = function (id, physical, flushTime) {
        if (flushTime === void 0) { flushTime = false; }
        var hero = egret.localStorage.getItem("hero" + id).split("|"); //
        egret.localStorage.setItem("hero" + id, id + "|" + hero[1] + "|" + (Number(hero[2]) + physical) + "|" + (flushTime ? (new Date()).toString() : hero[3]));
    };
    HeroData.getHeroNum = function () {
        var ids = egret.localStorage.getItem("heroIds");
        if (ids)
            return ids.split("|").length;
        else
            return 0;
    };
    HeroData.addHero = function (id) {
        var ids = egret.localStorage.getItem("heroIds");
        egret.localStorage.setItem("heroIds", "" + (ids ? ids + "|" + id : "" + id));
        egret.localStorage.setItem("hero" + id, id + "|name|100|" + new Date().toString());
        egret.localStorage.setItem("heroSkill" + id, JSON.stringify(this.initSkillList));
    };
    HeroData.getHeroList = function () {
        var ids = egret.localStorage.getItem("heroIds").split("|");
        var heroIds = [];
        ids.map(function (data, index) {
            heroIds.push(Number(data));
        });
        return heroIds;
    };
    HeroData.getHeroSkillList = function (heroId) {
        var skill = egret.localStorage.getItem("heroSkill" + heroId);
        return JSON.parse(skill);
    };
    HeroData.setHeroSkill = function (heroId, skillId, bool) {
        if (bool === void 0) { bool = true; }
        var skillList = this.getHeroSkillList(heroId);
        skillList["skill" + skillId] = bool;
        egret.localStorage.setItem("heroSkill" + heroId, JSON.stringify(skillList));
        return skillList;
    };
    HeroData.initSkillList = {
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
    };
    return HeroData;
}());
__reflect(HeroData.prototype, "HeroData");
//# sourceMappingURL=HeroData.js.map