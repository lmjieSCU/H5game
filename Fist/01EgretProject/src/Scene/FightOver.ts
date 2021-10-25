class FightOver extends Scene {
    public constructor(victory: boolean, type: string = '', heroName: string, level: number = 0) {
        super();
        this.victory = victory;
        this.type = type;
        const names = heroName.split(" ");
        const name = names[1].split("_");
        if(name.length == 2) this.heroId = PropData.getHeroIdByName(name[0]);
        else if(name.length == 3) this.heroId = PropData.getHeroIdByName(name[1]);
        this.level = level;
    }

    public heroId: number;
    public victory: boolean;
    public type: string;
    public level: number;

    onEnter() {
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
        let bg: egret.Bitmap = UI.addPic(this, `logo_${this.victory?'vicotry':'defeat'}_png`, UI.WINSIZE_W/2, UI.WINSIZE_H/2, true);

        let back: egret.Bitmap = UI.addBtn(this, "button_back_png", UI.WINSIZE_W/2, bg.y + bg.height/2, true, () => {
            SceneManager.getInstance().ChangeScene(new Home());
        });

        this.dataChange();
    }

    public dataChange() {
        switch(this.type) {
            case 'level': 
                if(this.victory) {
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
    }

    onExit() { }
}