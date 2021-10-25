class OverReward extends Scene {
    public constructor(reward: Reward[]) {
        super();
        this.rewards = reward;
    }

    public reward: egret.DisplayObjectContainer;
    public rewards: Reward[];

    onEnter() {
        let bg = new egret.Shape();
        bg.graphics.beginFill(0xffffff, 0);
        bg.graphics.drawRect(0, 0, UI.WINSIZE_W, UI.WINSIZE_H);
        bg.graphics.endFill();
        this.addChild(bg);

        this.reward = new egret.DisplayObjectContainer();
        this.addChild(this.reward);
        this.reward.width = 200;
        this.reward.height = 200;
        this.reward.x = UI.WINSIZE_W/2;
        this.reward.anchorOffsetX = this.reward.width/2;
        this.reward.y = -this.reward.height;

        const len = this.rewards.length - 1;

        this.rewards.map((data,index) => {
            let type: egret.TextField = UI.addText(this.reward, `type+${data.type}`, this.reward.width/2 + (index - len/2)*50, this.reward.height/2, true);
            UI.addText(this.reward, `num+${data.num}`, type.x, type.y+type.height, true);
        })

        let btn: egret.TextField = UI.addText(this.reward, "领取奖励", this.reward.width/2, this.reward.height/4*3, true);
        UI.addClickAction(this, btn, () => {
            egret.Tween.get(this.reward)
            .to({y: -this.reward.height}, 200, egret.Ease.sineIn)
            .to({y: UI.WINSIZE_H/4+10}, 30, egret.Ease.sineIn).call(() => {
                SceneManager.getInstance().RemoveLayer(this);
            },this)
            
        })

        egret.Tween.get(this.reward)
        .to({y: UI.WINSIZE_H/4+10}, 200, egret.Ease.sineIn)
        .to({y: UI.WINSIZE_H/4}, 30, egret.Ease.sineIn);
    }

    onExit() {}
}