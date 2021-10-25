class HomeButton extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public constructor(parent) {
        super();
        this._parent = parent;
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
        this.addEventListener(egret.TouchEvent.ENTER_FRAME, this.update, this);
        this.addEventListener(egret.TouchEvent.REMOVED_FROM_STAGE, this.onExit, this);
    }
    private _parent: Scene;

    private chestBg: egret.Bitmap = new egret.Bitmap();
    private isOpenChest: boolean = false;
    private timer: egret.Timer;
    private time: number = 1000;

    onEnter() {
        let reward: egret.Bitmap = UI.addBtn(this, `Home_button_${Main.UItype == Main.UIT2?'draw':'lottery'}_png`, 0, UI.WINSIZE_H/2, true, () => {
            console.log("奖励");
            Home.instace.changeLayer(this.parent as Scene, new LotteryLayer())
        })
        reward.x = reward.width/2 + 20;
        let rewardRed: egret.Bitmap = UI.addPic(this, "Home_red_png", reward.x + reward.width/4, reward.y - reward.height/3, true);

        let task: egret.Bitmap = UI.addBtn(this, "Home_button_task_png", reward.x, UI.WINSIZE_H/2 - reward.height - 10, true, () => {
            console.log("任务");
            Home.instace.changeLayer(this._parent, new TaskLayer());
        })
        let taskRed: egret.Bitmap = UI.addPic(this, "Home_red_png", task.x + task.width/4, task.y - task.height/3, true);
        taskRed.$setVisible(TaskData.isHasReward())

        let signIn: egret.Bitmap = UI.addBtn(this, "Home_button_sign_png", reward.x, UI.WINSIZE_H/2 + reward.height + 10, true, () => {
            console.log("签到");
        })
        let signInRed: egret.Bitmap = UI.addPic(this, "Home_red_png", signIn.x + signIn.width/4, signIn.y - signIn.height/3, true);

        let chest: egret.Bitmap = UI.addBtn(this, "Home_treasurebox_off_png", reward.x, UI.WINSIZE_H, true, () => {
            console.log("宝箱");
            if(!this.isOpenChest) {
                chest.$setTexture(RES.getRes("Home_treasurebox_on_png"));
                this.isOpenChest = true;
            } else {
                chest.$setTexture(RES.getRes("Home_treasurebox_off_png"));
                this.isOpenChest = false;
            }
        })
        chest.y -= chest.height;
        this.chestBg = UI.addPic(this, "Home_treasurebox_shadow_png", chest.x, chest.y, true);
        this.setChildIndex(chest, this.numChildren-1);

        let time: egret.TextField = UI.addText(this, HomeButton.getTimeString(this.time), reward.x, chest.y + chest.height/2 + 5, true, 10, 0xffffff);
        time.anchorOffsetX = time.width/2;
        this.timer = new egret.Timer(1000);
        this.timer.addEventListener(egret.TimerEvent.TIMER, () => {
            time.$setText(HomeButton.getTimeString(this.time));
            this.time--;
            if(this.time <= 0) this.timer.stop();
        }, this)
        // this.timer.start();

        let set: egret.Bitmap = UI.addBtn(this, "Home_button_set_png", UI.WINSIZE_W, UI.WINSIZE_H, true, () => {
            console.log("设置");
        })
        set.x -= set.width;
        set.y -= set.height/2;

        // let shop: egret.Bitmap = UI.addBtn(this, "dial_box_png", UI.WINSIZE_W, UI.WINSIZE_H, true, () => {
        //     console.log("商店");
        //     Home.instace.changeLayer(this.parent as Scene, new TaskLayer());
        // })
        // shop.x -= shop.width;
        // shop.y -= shop.height;

        // if(Main.UItype == Main.UIT2) {
        //     let recruit: egret.Bitmap = UI.addBtn(this, "dial_box_png", UI.WINSIZE_W, UI.WINSIZE_H, true, () => {
        //         console.log("招募");
        //         Home.instace.changeLayer(this._parent, new RecruitLayer())
        //     })
        //     recruit.x -= recruit.width;
        //     recruit.y -= recruit.height;
        // }
    }

    update() {
        this.chestBg.$setRotation((this.chestBg.rotation+5)%360);
    }

    onExit() {
        this.removeEventListener(egret.TouchEvent.ENTER_FRAME, this.update, this);
    }

    public static getTimeString(seconds: number) {
        const hour = Math.floor(seconds/3600);
        let timeStirng = '';
        if(hour>=10) timeStirng += hour;
        else if(hour==0) timeStirng += "00";
        else if(hour<10) timeStirng += `0${hour}`;
        timeStirng += ":";
        const mins = Math.floor((seconds - hour*3600)/60);
        if(mins>=10)  timeStirng += mins;
        else if(mins == 0) timeStirng += "00";
        else if(mins<10) timeStirng += `0${mins}`;
        timeStirng += ":";
        const second = seconds - hour*3600 - mins*60;
        if(second>=10) timeStirng += second;
        else if(second==0) timeStirng += "00";
        else if(second<10) timeStirng += `0${second}`;
        return timeStirng;
    }
}