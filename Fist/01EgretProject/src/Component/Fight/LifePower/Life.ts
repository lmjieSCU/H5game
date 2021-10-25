class Life extends egret.DisplayObjectContainer implements egret.DisplayObject {
    public constructor(x: number, y: number, player: number = 1, data: any = null) {
        super();
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
        this.addEventListener(egret.TouchEvent.REMOVED_FROM_STAGE, this.onExit, this);
        this.x = x;
        this.y = y;
        this.data = data;
        this.player = player;
    }
    // private lifeNumResource: string[] = ["fightui_71_png", "fightui_73_png", "fightui_75_png", "fightui_77_png"]//生命条数的图像资源
    private lifeMask: egret.Shape;
    private redBloodMask: egret.Shape;//延时消失的红血遮罩
    private lifeNum: egret.Bitmap;
    private lifeAdd: egret.Bitmap;
    private data: any;
    public playerData = { id: "roleK", life: 100, power: 100, burst: 0, lifeNum: 2, powerNum: 3 };
    private player: number;
    private redLife: boolean;//判断是否进入红血闪烁
    private lifeRed: egret.Shape;//闪烁的红血
    private over: boolean = false;
    private role: Role;

    onEnter() {
        let player = this.player == 1 ? _level0.P1_role : _level0.P2_role;
        this.playerData.lifeNum = Math.ceil(player.life / 100);
        this.playerData.life = player.life - (this.playerData.lifeNum - 1) * 100;

        if (this.data != null) {
            player.winTimes = this.data.winTimes;
        }

        const winTimes = player.winTimes;
        this.playerData.id = player._roleName;

        let lifeBg: egret.Bitmap = UI.addPic(this, "Fight_blood_bg_png", 0, 0);
        this.width = lifeBg.width;
        let blood: egret.Bitmap = UI.addPic(this, "Fight_blood_left_png", lifeBg.width - (Main.UItype == Main.UIT2?4.5:0), lifeBg.height/2, true);
        blood.anchorOffsetX = blood.width;
        if(Main.UItype == Main.UIT2) {
            blood.scaleX = (lifeBg.width - 10)/blood.width;
            blood.scaleY = (lifeBg.height - 8)/blood.height;
        }

        this.lifeMask = new egret.Shape();
        this.lifeMask.graphics.beginFill(0x000000);
        this.lifeMask.graphics.drawRect(0, blood.y - blood.height / 2, blood.width * blood.scaleX, blood.height);
        this.lifeMask.graphics.endFill();
        // this.p1_lifeMask.anchorOffsetX = this.p1_lifeMask.width;
        this.lifeMask.x = blood.x - blood.width * blood.scaleX;
        this.lifeMask.scaleX = this.playerData.life / 100;
        this.addChild(this.lifeMask);
        blood.mask = this.lifeMask;

        // this.lifeAdd = UI.addPic(this, "fightui_69_png", this.width / 2 + (this.player == 1?0:15), blood.y, true);
        // this.p1_lifeAdd.y = this.p1_lifeAdd.height / 2;
        const num1 = this.playerData.lifeNum >= 2 ? this.playerData.lifeNum : 2;
        this.lifeNum = UI.addPic(this, `Fight_word_X${num1}_png`, this.width / 2, blood.y, true);
        if (this.playerData.lifeNum < 2) {
            // this.lifeAdd.alpha = 0;
            this.lifeNum.alpha = 0;
        }
        let imgBox: egret.Bitmap = UI.addPic(this, "Fight_head_png", 0, 0, true);
        imgBox.x -= imgBox.width * 0.4;
        imgBox.y += imgBox.height * 0.3;
        // UI.addClickAction(this, imgBox, () => {
        //     FightMainRender.getInstance().destroy();
        //     SplashScene.instance.clear();
        //     SceneManager.getInstance().ChangeScene(new Home());
        //     FromServer.getInstance().destroy();
        // })
        let head: egret.Bitmap = UI.addPic(this, `${this.playerData.id.substring(4)}Head_png`, imgBox.x, imgBox.y, true);
        let scale = Math.min((imgBox.width - 30)/head.width,(imgBox.height - 30)/head.height);
        head.scaleX = scale;
        head.scaleY = scale;

        if (this.player == 2) {
            // this.lifeAdd.skewY = 180;
            this.lifeNum.skewY = 180;
        }

        this.height = lifeBg.height;

        for (let i = 1; i <= winTimes; i++) {
            let v: egret.Bitmap = UI.addPic(this, "Word_pic_v_png", this.width - i*20, lifeBg.y+lifeBg.height);
            v.anchorOffsetX = v.width/2;
            v.x += v.width/2;
            if(this.player == 2) v.$setSkewY(180);
        }

        FightMainRender.getInstance().Add(this, this.render);
    }

    private renderAnimation = 1;
    public render() {
        if(this.over) {
            this.renderAnimation += 1;
            if(this.renderAnimation == 150) {
                this.over = false;
                SplashScene.instance.stage.addChild(new Winner(this.role.opp));
            }
        }
    }

    onExit() {
        FightMainRender.getInstance().Remove(this, this.render);
    }
    public lifeControl(num: number, role: Role) {
        this.role = role;
        if (num == 0) return;
        this.playerData.life -= num;
        this.redLife = (this.playerData.life + (this.playerData.lifeNum - 1) * 100 <= role.life_max / 4);
        role.redBlood = this.redLife;
        // this.p1_redLife || this.p1_lifeRed.$setAlpha(0);//判断血量是否进入红血状态
        if (this.playerData.life <= 0) {//判断当前血量的多少
            if (this.playerData.lifeNum > 1) {
                this.playerData.life += 100
                // this.p1_redBloodMask.scaleX = 1;
            } else if (!role.isKO) {
                this.playerData.life = 0;
                role.isKO = true;
                this.redLife = false;
                // this.p1_lifeRed.$setAlpha(0);
                role.opp.stop_move_X1();
                this.over = true;
                Sound.getInstance().oneTimesPlay('lose');
                (this.parent as LifePower).timeStart = false;
                // const t = egret.setInterval(() => {
                //     SplashScene.instance.stage.addChild(new Winner(role.opp));
                //     egret.clearInterval(t);
                // }, this, 5000)
            } else this.playerData.life = 0;
            this.playerData.lifeNum--;
        }
        role.life = this.playerData.life;

        // this.lifeMask.scaleX = this.playerData.life / 100;
        egret.Tween.removeTweens(this.lifeMask);
        egret.Tween.get(this.lifeMask).to({ scaleX: this.playerData.life / 100 }, 400, egret.Ease.sineIn);

        const n = this.playerData.lifeNum >= 2 ? this.playerData.lifeNum : 2;
        this.lifeNum.$setTexture(RES.getRes(`Fight_word_X${n}_png`));//根据血条数修改
        // egret.Tween.get(this.p1_redBloodMask).to({ scaleX: this.p1.life / 100 }, 1000, egret.Ease.sineIn);//红血延时消失
        if (this.playerData.lifeNum < 2) {//血条数小于2隐藏乘数
            // this.lifeAdd.$setAlpha(0);
            this.lifeNum.$setAlpha(0);
        } else {
            // this.lifeAdd.alpha = 1;
            this.lifeNum.alpha = 1;
        }
    }
}