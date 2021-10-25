/**本地信息
 * 包括已通过最高关卡，共计得分总值,金币数,每一关卡最高分数
 */
class LocalDataCtrl {
    public static instance: LocalDataCtrl;
    public highLevel: number;
    public highScores: Array<number>;
    public coins: number;
    public totalScore: number;
    public highStars: Array<number>;

    private constructor() {
        // egret.localStorage.clear()
        this.highScores = new Array<number>();
        this.highStars = new Array<number>();
        if (egret.localStorage.getItem("highLevel") == null) {
            egret.localStorage.setItem("highLevel", "0");
            console.log("new level")
        }
        this.highLevel = Number(egret.localStorage.getItem("highLevel"));
        //
        if (egret.localStorage.getItem("coins") == null) {
            egret.localStorage.setItem("coins", "0");
            console.log("new coins")
        }
        this.coins = Number(egret.localStorage.getItem("coins"));
        //
        for (let i = 0; i < 100; i++) {
            if (egret.localStorage.getItem("highScore" + i) == null) {
                egret.localStorage.setItem("highScore" + i, "0");
            }
            this.highScores[i] = Number(egret.localStorage.getItem("highScore" + i));
            if (egret.localStorage.getItem("highStar" + i) == null) {
                egret.localStorage.setItem("highStar" + i, "0");
            }
            this.highStars[i] = Number(egret.localStorage.getItem("highStar" + i));
        }
        //
        if (egret.localStorage.getItem("totalScore") == null) {
            egret.localStorage.setItem("totalScore", "0");
            console.log("new totalScores")
        }
        this.totalScore = Number(egret.localStorage.getItem("totalScore"));
    }

    public static get I(): LocalDataCtrl {
        if (this.instance == null) {
            this.instance = new LocalDataCtrl();
        }
        return this.instance;
    }

    public FreshLevel(lv: number) {
        if (lv < 0 || lv > 99) {
            return;
        }
        if (lv <= this.highLevel) {
            return;
        }
        this.highLevel = lv;
        egret.localStorage.removeItem("highLevel");
        egret.localStorage.setItem("highLevel", String(lv));
        return;
    }

    public FreshLvhighScore(score: number, lv: number) {
        if (lv < 0 || lv > 99) {
            return;
        }
        if (score <= this.highScores[lv]) {
            return;
        }
        this.highScores[lv] = score;
        egret.localStorage.removeItem("highScore" + lv);
        egret.localStorage.setItem("highScore" + lv, String(score));
        return;
    }

    public FreshTotalScore(score: number): number {
        if (score < 0) {
            return this.totalScore;
        }
        this.totalScore = this.totalScore + score;
        egret.localStorage.removeItem("totalScore");
        egret.localStorage.setItem("totalScore", String(this.totalScore));
        return this.totalScore;
    }

    public Freshcoins(coin: number) {
        this.coins = this.coins + coin;
        GameData.jinbi = this.coins;
        egret.localStorage.removeItem("coins");
        egret.localStorage.setItem("coins", String(this.coins));
        return;
    }

    public FreshLvStar(star: number, lv: number) {
        if (lv < 0 || lv > 99) {
            return;
        }
        if (star <= this.highStars[lv]) {
            return;
        }
        console.log(star,lv)
        this.highStars[lv] = star;
        egret.localStorage.removeItem("highStar" + lv);
        egret.localStorage.setItem("highStar" + lv, String(star));
        return;
    }



}