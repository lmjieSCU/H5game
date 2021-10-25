class FightRank extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public constructor(playInfo: PlayInfo) {
        super();
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
    }

    public rank: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
    public rankChest: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
    public rankInfo: RankInfo;
    public rankHeroInfo: RankHeroInfo[];

    public heroVictory: egret.DisplayObjectContainer;
    public heroFail: egret.DisplayObjectContainer;
    public appearanceRate: egret.DisplayObjectContainer;
    public heroVictoryRate: egret.DisplayObjectContainer;
    public fightRankInfo: FightRankInfo;

    public onEnter() {
        this.rankInfo = PlayerData.getRankInfo();
        this.rankHeroInfo = PlayerData.getRankHeroInfo();
        // let victoryAll = 0;
        // let fallAll = 0;
        // let heroVictoyr = 0;
        // let heroFail = 0;
        // this.rankHeroInfo.map((data, index) => {
        //     victoryAll += data.victory;
        //     fallAll += data.victory;
        // })

        this.initRank();
        this.initChest();

        let start: egret.Bitmap = UI.addBtn(this, "Online_button_startgame_png", UI.WINSIZE_W/2 - 100, UI.WINSIZE_H - 50, true, () => {
            console.log("排位");
        })
    }

    public initRank() {
        this.rank = new egret.DisplayObjectContainer();
        let bg: egret.Bitmap = UI.addPic(this.rank, "Ranking_box01_png", 0, 0);
        this.rank.y = this.parent.getChildAt(0).height;
        this.rank.width = bg.width;
        this.rank.height = bg.height;
        this.rank.x = UI.WINSIZE_W - this.rank.width - 50;
        let imgBox: egret.Bitmap = UI.addPic(this.rank, "Ranking_box02_png", 30, 20);
        let rank: egret.Bitmap = UI.addPic(this.rank, `Ranking_word_lv${this.rankInfo.rank}_png`, imgBox.x + imgBox.width + 10, imgBox.y+imgBox.height/2, true);
        rank.x += rank.width/2;
        let smallRank: egret.Bitmap = UI.addPic(this.rank, `Ranking_word_${this.rankInfo.smallRank}_png`, rank.x + rank.width/2 + 10, rank.y, true);
        smallRank.x += smallRank.width/2;
        for(let i=1; i<=3; i++) {
            let rankStar: egret.Bitmap = UI.addPic(this.rank, `Ranking_star_${this.rankInfo.rankStar>=i?'on':'off'}_png`, smallRank.x + smallRank.width/2 + 10, smallRank.y, true);
            rankStar.x += i*(rankStar.width + 10);
        }
        this.addChild(this.rank);

        this.fightRankInfo = FightData.getFightRankInfo();

        let progrsee = (this.parent as FightReady).createProgress(this.fightRankInfo.failCount/(this.fightRankInfo.failCount+this.fightRankInfo.victoryCount) || 0);
        progrsee.y = imgBox.y+imgBox.height+10;
        progrsee.x = this.rank.width/2 - progrsee.width/2;
        this.rank.addChild(progrsee);

        let victory = (this.parent as FightReady).getNumber(this.fightRankInfo.victoryCount, this.rank);
        victory.x = this.rank.width/2 - 25;
        victory.y = 105;
        let fail = (this.parent as FightReady).getNumber(this.fightRankInfo.failCount, this.rank);
        fail.x = this.rank.width/2 - 25;
        fail.y = 125;
        let victoryRate = (this.parent as FightReady).getNumber(this.fightRankInfo.victoryCount/this.fightRankInfo.failCount || 0, this.rank);
        victoryRate.x = this.rank.width/2 - 25;
        victoryRate.y = 145;
        this.appearanceRate = (this.parent as FightReady).getNumber((this.fightRankInfo.heroList[0].fail + this.fightRankInfo.heroList[0].victory)/(this.fightRankInfo.victoryCount+this.fightRankInfo.failCount) || 0, this.rank);
        this.appearanceRate.x = this.rank.width/2 -20;
        this.appearanceRate.y = 165;
        this.heroVictory = (this.parent as FightReady).getNumber(this.fightRankInfo.heroList[0].victory, this.rank);
        this.heroVictory.x = this.rank.width/2;
        this.heroVictory.y = 200;
        this.heroFail = (this.parent as FightReady).getNumber(this.fightRankInfo.heroList[0].fail, this.rank);
        this.heroFail.x = this.rank.width/2;
        this.heroFail.y = 220;
        this.heroVictoryRate = (this.parent as FightReady).getNumber(this.fightRankInfo.heroList[0].victory/(this.fightRankInfo.heroList[0].fail+this.fightRankInfo.heroList[0].victory) || 0, this.rank);
        this.heroVictoryRate.x = this.rank.width/2 - 20;
        this.heroVictoryRate.y = 237;
    }

    public initChest() {
        this.rankChest = new egret.DisplayObjectContainer();
        this.addChild(this.rankChest);
        let bg: egret.Bitmap = UI.addPic(this.rankChest, "Ranking_box03_png", 0, 0);
        this.rankChest.x = this.rank.x + this.rank.width/2;
        this.rankChest.y = this.rank.y +this.rank.height+10;
        this.rankChest.width = bg.width;
        this.rankChest.height = bg.height;
        this.rankChest.anchorOffsetX = this.rankChest.width/2;
        let progrseeBg: egret.Bitmap = UI.addPic(this.rankChest, "Ranking_progress_bg_png", this.rankChest.width/2, this.rankChest.height/2, true);
        let progrsee: egret.Bitmap = UI.addPic(this.rankChest, "Ranking_progress_png", progrseeBg.x, progrseeBg.y, true);
        let progrseeMask: egret.Shape = new egret.Shape();
        progrseeMask.graphics.beginFill(0x000000);
        progrseeMask.graphics.drawRect(0, 0, progrseeBg.width, progrseeBg.height);
        progrseeMask.graphics.endFill();
        progrseeMask.x = progrseeBg.x - progrseeBg.width/2;
        progrseeMask.y = progrseeBg.y - progrseeBg.height/2;
        this.rankChest.addChild(progrseeMask);
        progrsee.mask = progrseeMask;
        progrseeMask.scaleX = (this.rankInfo.rank - 1 + (this.rankInfo.smallRank - 1)/3 + this.rankInfo.rankStar/9 )/5;

        let point: egret.Bitmap = UI.addPic(this.rankChest, "Ranking_pic_round_png", progrseeBg.x - progrseeBg.width/2, progrseeBg.y, true);
        const rankReward: number[] = [3, 4.5, 6];

        rankReward.map((data,index) => {
            let chest: egret.DisplayObjectContainer = new egret.DisplayObjectContainer();
            this.rankChest.addChild(chest);

            let chestBg: egret.Bitmap = UI.addPic(chest, "Task_pic_treasure_png", 0, 0, true, 0.6);
            chest.width = chestBg.width;
            chest.height = chestBg.height;
            chestBg.x = chestBg.width/2;
            chestBg.y = chestBg.height/2;
            chest.y = progrseeBg.y;
            chest.x = progrseeBg.x + (data-3)*progrseeBg.width/6;
            chest.anchorOffsetX = chest.width/2;
            chest.anchorOffsetY = chest.height/2;
            if(this.rankInfo.rank>=PlayerData.rankReward[index].lv) {
                if(PlayerData.getRankReward(index) == "1") {
                    chestBg.$setTexture(RES.getRes("Task_pic_treasure_open_png"));
                    chestBg.anchorOffsetX = chestBg.width/2;
                    chestBg.anchorOffsetY = chestBg.height/2;
                    chestBg.$setScaleX(0.5);
                    chestBg.$setScaleY(0.5);
                } else {
                    UI.addPic(chest, "Task_pic_treasure_shadow_png", chestBg.x, chestBg.y, true, 0.6);
                    UI.addClickAction(this, chest, () => this.getReward(chest, index));
                }
            }
        })

    }

    public getReward(chest: egret.DisplayObjectContainer, index: number) {
        const open: egret.Bitmap = chest.getChildAt(0) as egret.Bitmap;
        open.$setTexture(RES.getRes("Task_pic_treasure_open_png"));
        chest.removeChildAt(1);
        open.anchorOffsetX = open.width/2;
        open.anchorOffsetY = open.height/2;
        open.$setScaleX(0.5);
        open.$setScaleY(0.5);
        let reward:Reward = PlayerData.setRankReward(index, 1);
    }
}