class FightRank extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public constructor(playInfo: PlayInfo) {
        super();
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
    }

    public onEnter() {
        const rankInfo: RankInfo = PlayerData.getRankInfo();
        const rankHeroInfo: RankHeroInfo[] = PlayerData.getRankHeroInfo();
        let victoryAll = 0;
        let fallAll = 0;
        let all = 0;
        let heroVictoyr = 0;
        let heroFall = 0;
        let heroAll = 0;
        rankHeroInfo.map((data, index) => {
            victoryAll += data.victory;
            fallAll += data.victory;
        })
        all = victoryAll + fallAll;
    }
}