class Round extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public constructor(round: number) {
        super();
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
        this.round = round;
        Round.instance = this;
        if(round >= 2) this.lazy = true;
    }

    public static instance: Round;

    private round: number;
    private lazy: boolean = false;
    private roundResouce: string[] = [
        "Fight_word_R_png", "Fight_word_O_png", "Fight_word_U_png", "Fight_word_N_png", "Fight_word_D_png"
    ]
    private fightResouce: string[] = [
        "Fight_word_F_png", "Fight_word_I_png", "Fight_word_G_png", "Fight_word_H_png", "Fight_word_T_png"
    ]

    private rounds: egret.Bitmap[] = [];
    private fight: egret.Bitmap[] = [];
    private fightShadow: egret.Shape[] = [];

    private RenderAnimate: number = 0;

    public onEnter() {
        this.init();
        FightMainRender.getInstance().Add(this, this.render);
        this.render();
    }

    public init() {
        this.roundResouce.map((data, index) => {
            let bit: egret.Bitmap = UI.addPic(this, data, GameConfig.FightWidth / 2 - (2.5 - index) * 120, UI.WINSIZE_H / 2, true, 0);
            this.rounds.push(bit);
        })

        let rou: egret.Bitmap = UI.addPic(this, `Fight_word_${this.round}_png`, GameConfig.FightWidth / 2 + 300, UI.WINSIZE_H / 2, true, 0);
        this.rounds.push(rou);

        this.fightResouce.map((data, index) => {
            let f: egret.Bitmap = UI.addPic(this, data, GameConfig.FightWidth / 2 - (2 - index) * 120, 0, true);
            let f2: egret.Bitmap = UI.addPic(this, data, GameConfig.FightWidth / 2 - (2 - index) * 120, UI.WINSIZE_H / 2 - 30, true);
            let shadow: egret.Shape = new egret.Shape();
            shadow.graphics.beginFill(0xffffff);
            shadow.graphics.drawRect(0, 0, f2.width, f2.height);
            shadow.graphics.endFill();
            shadow.anchorOffsetX = shadow.width / 2;
            shadow.anchorOffsetY = shadow.height / 2;
            shadow.x = f2.x;
            shadow.y = f2.y;
            this.addChild(shadow);
            shadow.mask = f2;
            this.fightShadow.push(shadow);
            shadow.alpha = 0;
            f.y -= f.height / 2;
            this.fight.push(f);
        })
    }

    public render() {
        this.RenderAnimate += 1;
        if(this.lazy && this.RenderAnimate < 15) return;
        else if(this.lazy) {
            this.lazy = false;
            this.RenderAnimate = 1;
        }
        if(this.RenderAnimate == 4) Sound.getInstance().oneTimesPlay(`round${this.round}`);
        if (this.RenderAnimate % 6 == 0 && this.RenderAnimate <= 30) {
            this.drop(Math.floor(this.RenderAnimate / 6 - 1));
        } else if(this.RenderAnimate == 40) {
            this.drop(5);
        } else if(this.RenderAnimate % 3 == 0 && this.RenderAnimate <= 73 && this.RenderAnimate>58) {
            this.drop(Math.floor((this.RenderAnimate - 58) / 3 - 1) + 7);
        } else if (this.RenderAnimate % 2 == 0 && this.RenderAnimate <= 85 && this.RenderAnimate>73) {
            this.flash();
        } else if (this.RenderAnimate > 85) {
            this.roundStart();
        }

    }

    public flash() {
        this.fightShadow.map((data) => {
            data.alpha == 0 ? data.$setAlpha(1) : data.$setAlpha(0);
        })
    }

    public drop(item: number) {
        if (item <= 5) {
            this.rounds[item].scaleX = 5;
            this.rounds[item].scaleY = 5;
            egret.Tween.get(this.rounds[item]).to({ scaleX: 1, scaleY: 1 }, 200, egret.Ease.sineIn);
        } else if (item <= 10) {
            if (item == 6) {
                _level0.P1_role.start();
                _level0.P2_role.start();
                this.rounds.map((data) => {
                    this.removeChild(data);
                });
                Sound.getInstance().oneTimesPlay("fight");
            }
            egret.Tween.get(this.fight[item - 6]).to({ y: UI.WINSIZE_H / 2 - 30 }, 100, egret.Ease.sineIn)
        }
    }

    public roundStart() {
        const count = Number(egret.localStorage.getItem("isComplete")) || 0;
        if(count==0){
            NoviceGuidance.I().step1();
        }
        SplashScene.instance._life.timeStart = true;
        SplashScene.instance.stage.removeChild(this);
        Round.instance = null;
        _level0.P1_role.start_control();
        _level0.P2_role.start_control();
        FightMainRender.getInstance().Remove(this, this.render);
    }
}