class RecruitLayer extends Scene {
    public constructor() {
        super();
    }

    public isRecruit = [0, 0, 0];//0可以招募，1招募中，2可以领取奖励
    public recruitTime = ['','',''];
    public timer: egret.Timer;
    public texts: egret.DisplayObjectContainer[] = [];
    public recruitBg: egret.Bitmap[] = [];
    public red: egret.Bitmap[] = [];

    onEnter() {
        const recruitInfo = RecruitData.getRecruitInfo();
        let head: egret.Bitmap = UI.addPic(this, "Recruit_back_png", 0, 0);
        let back: egret.Bitmap = UI.addBtn(this, "Button_back_png", 0, 0, false, () => Home.instace.changeLayer(this, new HomeLayer()));

        let bg: egret.Bitmap = UI.addPic(this, "Recruit_box_png", UI.WINSIZE_W/2, UI.WINSIZE_H/2, true);

        let normal: egret.Bitmap = UI.addPic(this, "Recruit_Reward_B_png", UI.WINSIZE_W/4, bg.y - bg.height/16, true);

        let outstand: egret.Bitmap = UI.addPic(this, "Recruit_Reward_A_png", UI.WINSIZE_W/2, bg.y - bg.height/16, true);

        let excellent: egret.Bitmap = UI.addPic(this, "Recruit_Reward_S_png", UI.WINSIZE_W/4*3, bg.y - bg.height/16, true);

        this.recruitBg.push(normal);
        this.recruitBg.push(outstand);
        this.recruitBg.push(excellent);

        recruitInfo.map((data,index) => {
            const time = RecruitData.recruit[index].waitTime;
            const times = Home.instace.getTimeSecond(Date.parse(new Date().toString()) , Date.parse(data.lastTime));
            this.recruitTime[index] = data.lastTime;
            let txt: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
            
            this.texts.push(txt);
            if( times >= time && data.status == 0) {//可以招募
                let recruit:egret.Bitmap = UI.addBtn(txt, "Recruit_button_recruit_png", this.recruitBg[index].x, this.recruitBg[index].y + this.recruitBg[index].height/2, true, () => this.startRecruit(index));
                recruit.y += recruit.height/4*3;
                let text: egret.TextField = UI.addText(txt, RecruitData.recruit[index].payNum[0], recruit.x, recruit.y, true, 15, 0xffffff);
                text.x += text.width/2;
                this.isRecruit[index] = 0;
            } else if(times >= time && data.status == 1) {//可以领取奖励
                // let text = UI.addText(txt, this.getTime(time - times), UI.WINSIZE_W/4*(index+1), UI.WINSIZE_H/2 - 40, true);
                let recruit: egret.Bitmap = UI.addBtn(txt, "Recruit_button_W_png", this.recruitBg[index].x, this.recruitBg[index].y + this.recruitBg[index].height/2, true, () => this.getRecruitReward(index));
                recruit.y += recruit.height/4*3;
                this.isRecruit[index] = 2;
            } else if(times < time) {//招募中
                // this.isRecruit[index] = true;
                let recruit:egret.Bitmap = UI.addBtn(txt, "Recruit_button_finish_png", this.recruitBg[index].x, this.recruitBg[index].y + this.recruitBg[index].height/2, true, () => this.finishRecruit(index));
                recruit.y += recruit.height/4*3;
                let timeBg: egret.Bitmap = UI.addPic(txt, "Recruit_time_png", recruit.x, recruit.y + recruit.height/2, true);
                timeBg.y += timeBg.height/2;
                this.isRecruit[index] = 1;
                let hour: egret.TextField = UI.addText(txt, 0, timeBg.x - 30, timeBg.y, true, 15, 0xffffff);
                let minuts: egret.TextField = UI.addText(txt, 0, timeBg.x, timeBg.y, true, 15, 0xffffff);
                let seconds: egret.TextField = UI.addText(txt, 0, timeBg.x + 40, timeBg.y, true, 15, 0xffffff);
                // this.recruitTime[index] = RecruitData.getRecruit(RecruitData.recruit[index].type);
                // this.getTime(RecruitData.recruit[index].waitTime - Home.instace.getTimeSecond(Date.parse(new Date().toString()) , Date.parse(this.recruitTime[index])), index);
                // this.startRecruit(index);
            }
            this.addChild(txt);
        })
        
        console.log(this.isRecruit);

        this.timer = new egret.Timer(1000);
        this.timer.addEventListener(egret.TimerEvent.TIMER, () => {
            this.isRecruit.map((data, index) => {
                if(data == 1) {
                    const time = RecruitData.recruit[index].waitTime - Home.instace.getTimeSecond(Date.parse(new Date().toString()) , Date.parse(this.recruitTime[index]));
                    if(time >=0) this.getTime(time, index);
                    else this.isRecruit[index] = 2;
                }
            })
        }, this)
        this.timer.start();
    }

    onExit() {
        this.timer.stop();
    }

    public getTime(second: number, index: number) {
        const hour = Math.floor(second/(60*60));
        const minuts = Math.floor((second - hour*60*60)/60);
        const seconds = second%60;

        (this.texts[index].getChildAt(2) as egret.TextField).$setText(hour.toString());
        (this.texts[index].getChildAt(2) as egret.TextField).x = (this.texts[index].getChildAt(1) as egret.Bitmap).x - (this.texts[index].getChildAt(2) as egret.TextField).width - 30;
        (this.texts[index].getChildAt(3) as egret.TextField).$setText(minuts.toString());
        (this.texts[index].getChildAt(4) as egret.TextField).$setText(seconds.toString());
    }

    public startRecruit(index: number) {
        this.isRecruit[index] = 1;
        this.texts[index].removeChildren();
        let recruit:egret.Bitmap = UI.addBtn(this.texts[index], "Recruit_button_finish_png", this.recruitBg[index].x, this.recruitBg[index].y + this.recruitBg[index].height/2, true, () => this.finishRecruit(index));
        recruit.y += recruit.height/4*3;
        let timeBg: egret.Bitmap = UI.addPic(this.texts[index], "Recruit_time_png", recruit.x, recruit.y + recruit.height/2, true);
        timeBg.y += timeBg.height/2;
        this.isRecruit[index] = 1;
        let hour: egret.TextField = UI.addText(this.texts[index], 0, timeBg.x - 30, timeBg.y, true, 15, 0xffffff);
        let minuts: egret.TextField = UI.addText(this.texts[index], 0, timeBg.x, timeBg.y, true, 15, 0xffffff);
        let seconds: egret.TextField = UI.addText(this.texts[index], 0, timeBg.x + 40, timeBg.y, true, 15, 0xffffff);
        this.recruitTime[index] = RecruitData.getRecruit(RecruitData.recruit[index].type);
        this.getTime(RecruitData.recruit[index].waitTime - Home.instace.getTimeSecond(Date.parse(new Date().toString()) , Date.parse(this.recruitTime[index])), index);
    }

    public finishRecruit(index: number) {
        RecruitData.finishRecruit(index);
        // this.texts[index].removeChildren();
        // let recruit:egret.Bitmap = UI.addBtn(this.texts[index], "Recruit_button_recruit_png", this.recruitBg[index].x, this.recruitBg[index].y + this.recruitBg[index].height/2, true, () => this.startRecruit(index));
        // recruit.y += recruit.height/4*3;
        // let text: egret.TextField = UI.addText(this.texts[index], RecruitData.recruit[index].payNum[0], recruit.x, recruit.y, true, 15, 0xffffff);
        // text.x += text.width/2;
        // this.isRecruit[index] = 0;
        // const reward = RecruitData.getReward(RecruitData.recruit[index].type);
        // console.log(reward);
        // return reward;
        this.getRecruitReward(index);
    }
    public getRecruitReward(index: number) {
        this.texts[index].removeChildren();
        let recruit:egret.Bitmap = UI.addBtn(this.texts[index], "Recruit_button_recruit_png", this.recruitBg[index].x, this.recruitBg[index].y + this.recruitBg[index].height/2, true, () => this.startRecruit(index));
        recruit.y += recruit.height/4*3;
        let text: egret.TextField = UI.addText(this.texts[index], RecruitData.recruit[index].payNum[0], recruit.x, recruit.y, true, 15, 0xffffff);
        text.x += text.width/2;
        this.isRecruit[index] = 0;
        const reward = RecruitData.getReward(RecruitData.recruit[index].type);
        console.log(reward);
        return reward;
    }
}