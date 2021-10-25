var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var FightOver = (function (_super) {
    __extends(FightOver, _super);
    function FightOver(victory, type, heroName, level) {
        if (type === void 0) { type = ''; }
        if (level === void 0) { level = 0; }
        var _this = _super.call(this) || this;
        _this.victory = victory;
        _this.type = type;
        var names = heroName.split(" ");
        var name = names[1].split("_");
        if (name.length == 2)
            _this.heroId = PropData.getHeroIdByName(name[0]);
        else if (name.length == 3)
            _this.heroId = PropData.getHeroIdByName(name[1]);
        _this.level = level;
        return _this;
    }
    FightOver.prototype.onEnter = function () {
        FromServer.getInstance().destroy();
        NewHand.setNewHand("playCount", 1);
        // let exp: egret.TextField = UI.addText(this, "经验+150", UI.WINSIZE_W/2 - 80, UI.WINSIZE_H/2 - 100, true);
        // let money: egret.TextField = UI.addText(this, `金币+${this.victory?150:0}`, UI.WINSIZE_W/2 + 80, exp.y, true);
        // const restart: egret.TextField = UI.addText(this, "继续游戏", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true, 30, 0xffffff);
        // restart.addEventListener(egret.TouchEvent.TOUCH_TAP, () => {
        //     SceneManager.getInstance().ChangeScene(new Home());
        // }, this);
        // restart.touchEnabled = true;
        // console.log(this.victory);
        // switch(Home.fightType) {
        //     case 'level': 
        //     this.victory && SceneManager.getInstance().AddLayer(new OverReward(PropData.getReward(PlayerData.levelReward.level5.rewardType,PlayerData.levelReward.level5.rewardNum)))
        //     break;
        //     case 'rank': break;
        //     case 'match': break;
        //     case 'house': break;
        // }
        var bg = UI.addPic(this, "logo_" + (this.victory ? 'vicotry' : 'defeat') + "_png", UI.WINSIZE_W / 2, UI.WINSIZE_H / 2, true);
        var back = UI.addBtn(this, "button_back_png", UI.WINSIZE_W / 2, bg.y + bg.height / 2, true, function () {
            SceneManager.getInstance().ChangeScene(new Home());
        });
        this.dataChange();
    };
    FightOver.prototype.dataChange = function () {
        switch (this.type) {
            case 'level':
                if (this.victory) {
                    FightData.setFightLevelMax(this.level, this.heroId);
                    // FightData.setLevelPassCount(1, this.heroId);
                }
                FightData.setLevelVictoryFail(this.victory, this.heroId);
                break;
            case 'home': break;
            case 'match':
                FightData.setMatchVictoryFail(this.victory, this.heroId);
                break;
            case 'rank':
                FightData.setFightRankInfo(this.victory, this.heroId);
                break;
        }
    };
    FightOver.prototype.onExit = function () { };
    return FightOver;
}(Scene));
__reflect(FightOver.prototype, "FightOver");
//# sourceMappingURL=FightOver.js.map