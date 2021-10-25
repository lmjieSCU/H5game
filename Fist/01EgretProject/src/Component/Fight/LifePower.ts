    class LifePower extends egret.DisplayObjectContainer implements egret.DisplayObject {
        public constructor(p1Data: any = null, p2Data: any = null) {
            super();
            this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
            FightMainRender.instance.Add(this, this.render);
            this.addEventListener(egret.TouchEvent.REMOVED_FROM_STAGE, this.onExit, true);
            this.p1Data = p1Data;
            this.p2Data = p2Data;
        }

        public timer: egret.DisplayObjectContainer;

        public p1Data: any;
        public p2Data: any;

        public p1_life: Life;
        public p2_life: Life;

        public p1_power: Power;
        public p2_power: Power;


        onEnter() {
            
            this.p1_life = new Life(60, 20, 1, this.p1Data);
            this.p1_life.x = UI.WINSIZE_W/8;
            this.p2_life = new Life(UI.WINSIZE_W - this.p1_life.x, this.p1_life.y, 2, this.p2Data);
            this.p2_life.skewY = 180;
            this.addChild(this.p1_life);
            this.addChild(this.p2_life);

            this.p1_power = new Power(this.p1_life.x + (Main.UItype == Main.UIT2?10:40), this.p1_life.y + this.p1_life.height + 5, 1, this.p1Data);
            this.p2_power = new Power(UI.WINSIZE_W - this.p1_power.x, this.p1_power.y, 2, this.p2_power);
            this.p2_power.skewY = 180;
            this.addChild(this.p1_power);
            this.addChild(this.p2_power);

            this.timer = new egret.DisplayObjectContainer();
            let timeBg: egret.Bitmap = UI.addPic(this.timer, "fight_time_png", 0, 0, true);
            timeBg.x=timeBg.width/2;
            timeBg.y=timeBg.height/2;
            this.timer.width = timeBg.width;
            this.timer.height = timeBg.height;
            this.timer.x = UI.WINSIZE_W/2;
            this.timer.anchorOffsetX = this.timer.width/2;
            if(SplashScene.instance.time == 0) {
                UI.addPic(this.timer, "Fight_pic_infinite_png", this.timer.width/2, this.timer.height/2, true);
            } else {
                const t1 = Math.floor(this.timeLen/10);
                const t2 = this.timeLen%10;
                let p1: egret.Bitmap = UI.addPic(this.timer, `hitnum${t1}_png`, this.timer.width/2, this.timer.height/2, true);
                let p2: egret.Bitmap = UI.addPic(this.timer, `hitnum${t2}_png`, this.timer.width/2, this.timer.height/2, true);
                p1.x -= p1.width;
                p2.x += p2.width;
            }
            this.addChild(this.timer);

            if(SplashScene.instance.type == Main.PVE || SplashScene.instance.type == Main.EVE) {
                // UI.addBtn(this, "pauseBtn_png", this.p1_life.x, this.timer.y + this.timer.height/2, true, () => {
                //     FightMainRender.instance.renderPause = true;
                //     this.addChild(new PauseLayer())
                // })
                UI.addClickAction(this, timeBg, () => {
                    FightMainRender.instance.renderPause = true;
                    this.addChild(PauseLayer.I());
                    let popup   =  NoviceGuidance.I().popup;
                    if(popup!=null&&popup.parent){
                        NoviceGuidance.I().step8();
                        popup.parent.removeChild(popup);
                    }
                })
            }
        }

        onExit() {
            FightMainRender.instance.Remove(this, this.render);
        }

        public life_p: number = 10;//伤害系数

        public lifeControl(lifeobj: any, role: Role) {
            const d_rate = lifeobj.d_rate;

            if (_level0.deepCompare(_level0.P1_role, role)) {
                this.p1_life.lifeControl(d_rate * this.life_p, role)
            } else {
                this.p2_life.lifeControl(d_rate * this.life_p, role)
            }
        }

        public powerControl(powerobj: any, role: Role) {
            if (_level0.deepCompare(_level0.P1_role, role)) {
                this.p1_power.powerControl(role, powerobj);
            } else {
                this.p2_power.powerControl(role, powerobj);
            }
        }

        private over = false;
        private renderAnimation = 1;
        private overType = '';

        public render() {
            this.setTime();
            if(this.over) {
                this.timeStart = false;
                this.renderAnimation += 1;
                if(this.renderAnimation == 90) {
                    switch(this.overType) {
                        case 'no': SplashScene.instance.stage.addChild(new RoundOver());break;
                        case 'p1': SplashScene.instance.stage.addChild(new Winner(_level0.P1_role)); break;
                        case 'p2': SplashScene.instance.stage.addChild(new Winner(_level0.P2_role)); break;
                    }
                }
            }
        }

        private frameNum = SplashScene.instance.stage.frameRate;
        private timeLen = SplashScene.instance.time;
        public timeStart = false;

        public setTime() {
            if(this.frameNum == 0 && this.timeLen>0 && this.timeStart) {
                this.frameNum = SplashScene.instance.stage.frameRate;
                this.timeLen--;
                const t1 = Math.floor(this.timeLen/10);
                const t2 = this.timeLen%10;
                (this.timer.getChildAt(1) as egret.Bitmap).$setTexture(RES.getRes(`hitnum${t1}_png`));
                (this.timer.getChildAt(2) as egret.Bitmap).$setTexture(RES.getRes(`hitnum${t2}_png`));
                if(this.timeLen==0) {
                    this.timeOut();
                }
            }
            this.timeStart && this.frameNum--;
        }

        public timeOut() {
            const p1 = _level0.P1_role;
            const p2 = _level0.P2_role;
            p1.do_end();
            p2.do_end();
            this.over = true;
            if(p1.life == p2.life) {
                this.overType = 'no'
            } else {
              this.overType = p1.life>p2.life?'p1':'p2';
            }
        }
    }