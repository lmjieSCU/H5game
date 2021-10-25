class FightOver extends Scene {
    public constructor(victory: boolean) {
        super();
        this.victory = victory;
    }

    public victory: boolean;

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
        
    }

    onExit() { }
}