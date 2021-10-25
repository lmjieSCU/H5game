class LotteryLayer extends Scene {
    public constructor() {
        super();
        GameRender.I.Add(this, this.update);
    };

    public rewards: egret.Bitmap[];
    public rewardId: number;
    public reward: Reward;
    public flash: egret.Bitmap;
    public cover: egret.Shape;

    onEnter() {
        let head: egret.Bitmap = UI.addPic(this, "Draw_head_png", 0, 0);
        let close: egret.Shape = UI.addBtn(this, "Button_back_png", 0, 0, false, () => {
            Home.instace.changeLayer(this, new HomeLayer());
        });
        this.rewards = [];
        const rewardList = LotteryData.lottery;
        UI.addPic(this, "Draw_box_middle_png", UI.WINSIZE_W/2, UI.WINSIZE_H/2, true);
        rewardList.map((data, index) => {
            let img: egret.Bitmap = UI.addPic(this, data.UI, UI.WINSIZE_W/2 + (index%4 - 1.5)*200*(0.5-Math.floor(index/4)), UI.WINSIZE_H/2+(Math.floor(index/4)-0.5)*200, true);
            // let text: egret.TextField = UI.addText(this, `${data.type}x${data.num}`, img.x, img.y + img.height/4, true);
            this.rewards.push(img);
        })

        this.flash = UI.addPic(this, "Draw_box_shadow_png", UI.WINSIZE_W/2 - 150, UI.WINSIZE_H/2 - 100, true);

        // let click: egret.TextField = UI.addText(this, "水晶抽奖", UI.WINSIZE_W/2 - 50, UI.WINSIZE_H/2, true);
        // UI.addClickAction(this, click, () => {
        //     if(PropData.getPorp(1002) >= 2) {
        //         PropData.setProp(1002, -2);
        //         this.lottery();
        //     } else {}
        // // })
        // let click2: egret.TextField = UI.addText(this, "视频抽奖", UI.WINSIZE_W/2 + 50, UI.WINSIZE_H/2, true);
        // UI.addClickAction(this, click2, () => {
        //     this.lottery();
        // })
        UI.addBtn(this, "Draw_button_draw_png", UI.WINSIZE_W/2, UI.WINSIZE_H/2, true, () => this.lottery())

        this.cover = new egret.Shape();
        this.cover.graphics.beginFill(0xffffff, 0);
        this.cover.graphics.drawRect(0, 0, UI.WINSIZE_W, UI.WINSIZE_H);
        this.cover.graphics.endFill();
        this.parent.addChild(this.cover);
    }

    onExit() {
        GameRender.I.Remove(this, this.update);
        this.parent.removeChild(this.cover);
    }

    public isOpenLottery: boolean = false;

    public lottery() {
        // const rewards = LotteryData.getReward();
        // this.rewardId = rewards.rewardId;
        // this.reward = rewards.reward;
        this.rewardId = 1;
        this.isOpenLottery = true;
        this.cover.touchEnabled = true;
    }

    public nowReward: number = 0;//当前目标
    public count: number = 0;//运转次数
    public all: number = 100;//运转总次数，在达到总次数后，运转到指定目标后将停止
    public speed: number[] = [4, 2, 1, 2, 4, 8];//速度，每隔几帧运转一次,最后一个值是在运转次数达到最大值后，未达到指定目标的位置，则以这个速度运转至目标位置
    public speedCount: number[] = [15, 15, 15, 10, 10];//速度改变的临界值，在某一个速度下运转多少次之后，就改变到下一个速度值
    public speedNow: number = 2;//当这个值等于速度值时，运转
    public update() {
        if(this.isOpenLottery) {
            let count = this.count;
            let index = this.speed.length - 1;
            for(let i=0;i<this.speedCount.length;i++) {
                count-=this.speedCount[i];
                if(count <= 0) {
                    index = i;
                    break;
                }
            }
            if(this.speedNow >= this.speed[index]) {
                this.speedNow = 0;
                this.count++;
                this.flash.$setX(this.rewards[this.nowReward].x);
                this.flash.$setY(this.rewards[this.nowReward].y);
                if(this.count>=this.all && this.nowReward==this.rewardId-1) {
                    this.count = 0;
                    this.isOpenLottery = false;
                    this.cover.touchEnabled = false;
                }
                this.nowReward = (this.nowReward+1)%this.rewards.length;
            } else {
                this.speedNow++;
            }
        }
    }
}