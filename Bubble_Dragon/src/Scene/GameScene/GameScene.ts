class GameScene extends Scene {

    public static instance: GameScene;

    public static BUBBLE_DROP_SPEED: number = -4;

    public static SPACING: number = 0;

    public static BUBBLE_SIZE: number = 46;

    public static HALF_BUBBLE_SIZE: number = 23;

    public static BUBBBLE_DIS_H: number = 40;

    public static MOVE_SPEED: number = 50;

    public static BUBBLE_COLLIDE_DIS: number = 40;  //泡泡撞击检测距离阈值

    public static FLOOR_Y: number = 550;

    public static SCOREINFO_HEIGHT: number = 0;

    public static CONTAINER_MAX_Y: number = 350;

    public static TOP_BOARDER_HEIGHT: number = 14;

    public LAUNCH_X: number = UI.WINSIZE_W / 2;

    public LAUNCH_Y: number = UI.WINSIZE_H * 0.9533;

    public previewSpeed: number;

    public launchBubble: Bubble;

    public shootBubble: Bubble;

    public hasShield: boolean;

    public destoryedBubbles: Array<Bubble>;

    public dropBubbles: Array<Bubble>;//掉落中的bubble

    public aimingLines: Array<LittleBubble>;

    public removeDestoryedTimer: egret.Timer;

    public delayDropBubbles: Array<Bubble>;

    public isOver: boolean;

    public upBubbles: Array<Bubble>;

    public shootLeftBubbleId: number = 0;

    public stepLabel: egret.BitmapText;

    public isSwitching: boolean;

    public propPanel: PropPanel;

    public levelCfg: LevelCfg;

    public bubbles: Array<Array<Bubble>>;

    public bubbleContainer: egret.DisplayObjectContainer;

    public shooter: Cannon;

    public gameInfo: GameInfoPanel;

    public isReady: boolean;

    public needPreview: boolean;

    public containerTargetY: number;

    public switchTip: egret.Bitmap;

    public nextBallBg: egret.Bitmap;

    public _step: number;

    public nextBubble: Bubble;

    public addStepFlag: boolean;

    public scale: number = 1;

    constructor() {
        super();
        this.destoryedBubbles = [];
        this.dropBubbles = [];
        this.aimingLines = [];
        this.delayDropBubbles = [];
        this.upBubbles = [];
        this.resetData();
        this.init();
        this.newLevel(Model.levelModel.selectedLevel);
        return;
    }

    public resetData() {
        this.scale = UI.WINSIZE_W / 12 / 46;
        GameScene.BUBBLE_SIZE = 46 * this.scale;
        GameScene.HALF_BUBBLE_SIZE = 23 * this.scale;
        GameScene.BUBBBLE_DIS_H = 40 * this.scale;
        GameScene.FLOOR_Y = UI.WINSIZE_H - 100;
        GameScene.CONTAINER_MAX_Y = UI.WINSIZE_H * 2 / 3;
    }

    public onEnter() {
        GameScene.instance = this;
    }

    public onExit() {
        GameScene.instance = null;
    }


    /**游戏结束,将剩余子弹全部发射 */
    public bubbleAllShoot(): void {
        if (this._step > 0 && this.shootLeftBubbleId == 0) {
            this.shootLeftBubbleId = egret.setInterval(this.shootLeftBubble, this, 150);
        }
        return;
    }

    /**发射剩余的泡泡子弹 */
    public shootLeftBubble(): void {
        this.shooter.rotation = 0;
        let loc1 = new Bubble(this.launchBubble.data.id, this.scale);
        let loc2 = 90 - this.shooter.rotation;
        let loc3 = loc2 * Math.PI / 180;
        let loc4 = -(Math.random() * 5 + 20);
        loc1.vx = Math.random() * 60 - 3;
        loc1.vy = loc4;
        loc1.x = this.LAUNCH_X;
        loc1.y = this.LAUNCH_Y - 70;
        this.bubbleContainer.addChild(loc1);
        this.dropBubbles.push(loc1);
        this.removeChild(this.launchBubble);
        this.launchBubble = null;
        this.hideAimingLine();
        this._step = this._step - 1;
        this.setStep(this._step);
        if (this._step == 0) {
            egret.clearInterval(this.shootLeftBubbleId);
            this.shootLeftBubbleId = 0;
        }
        return;
    }

    /**游戏胜利,所有泡泡均掉落 */
    public bubbleAllDrop(): void {
        let loc2 = null;
        let loc1 = this.getCurrentBubbles();
        for (let loc in loc1) {
            loc2 = loc1[loc];
            loc2.vy = GameScene.BUBBLE_DROP_SPEED;
            loc2.vx = 0;
            this.delayDropBubbles.push(loc2);
        }
        this.startRemoveDrops();
        loc1 = [];
        return;
    }

    public getCurrentBubbles(): Array<Bubble> {
        let loc3 = 0;
        let loc1 = [];
        let loc2 = 0;
        while (loc2 < this.bubbles.length) {
            loc3 = 0;
            while (loc3 < this.bubbles[0].length) {
                if (this.bubbles[loc2][loc3] != null) {
                    if (this.bubbles[loc2][loc3].data.effectType != BubbleEffectType.BUBBLE_INVISIBLE) {
                        loc1.push(this.bubbles[loc2][loc3]);
                    }
                }
                ++loc3;
            }
            ++loc2;
        }
        return loc1;
    }

    /**判断是否为同一颜色 */
    public isSameBubble(arg1: Bubble, arg2: Bubble): boolean {
        if (arg1.data.colorType == arg2.data.colorType) {
            return true;
        }
        return false;
    }

    /**创建瞄准线,此时不可见 */
    public createAimingLine(): void {
        let loc2 = null;
        let loc1 = 0;
        while (loc1 < 30) {
            loc2 = new LittleBubble();
            this.addChild(loc2);
            this.aimingLines.push(loc2);
            loc2.visible = false;
            ++loc1;
        }
        return;
    }

    /**隐藏瞄准线,发射后隐藏,角度越界隐藏 */
    public hideAimingLine(): void {
        let loc1 = 0;
        loc1 = 0;
        while (loc1 < this.aimingLines.length) {
            this.aimingLines[loc1].visible = false;
            ++loc1;
        }
        return;
    }

    /**加盾 */
    public addShieldToLunchBubble(x: number, y: number): void {
        if (!(this.launchBubble == null) && !this.launchBubble.hasShield) {
            this.launchBubble.hasShield = true;
            let tx = this.launchBubble.x;
            let ty = this.launchBubble.y;
            let shield = UI.addPic("res.prop_6", true, this, this.propPanel.x + x, this.propPanel.y + y);
            egret.Tween.get(shield).to({ "x": tx, "y": ty }, 200);
            egret.setTimeout(function () {
                shield.parent.removeChild(shield);
                this.launchBubble.addShield();
                return;
            }, this, 201);
        }
        return;
    }

    // public shieldMoveEnd(): void {
    //     this.launchBubble.addShield();
    //     return;
    // }

    /**分数提示,且更新分数 */
    public createScoreTip(x: number, y: number, score: number): void {
        let loc1 = new ScoreTip();
        loc1.x = x;
        loc1.y = y;
        loc1.setScore(score);
        this.bubbleContainer.addChild(loc1);
        Model.levelModel.currentScore = Model.levelModel.currentScore + score;
        if (Model.levelModel.currentScore > Model.levelModel.currentHighScore) {
            Model.levelModel.currentHighScore = Model.levelModel.currentScore;
        }
        this.gameInfo.updateInfo()
        let loc2 = Model.levelModel.currentScore / Number(this.levelCfg.starLevels[2]);
        this.gameInfo.setPercent(loc2);
        return;
    }

    /**显示出瞄准线 */
    public showAimingLine(): void {
        let loc2 = 0;
        let loc8 = null;
        let tempx = 0;
        let tempy = 0;
        let loc11 = false;
        let loc12 = 0;
        let loc13 = 0;
        let loc14 = NaN;
        let loc15 = NaN;
        let loc16 = NaN;
        let loc1 = this.shooter.rotation;
        loc2 = 0;
        while (loc2 < this.aimingLines.length) {
            this.aimingLines[loc2].visible = false;
            if (this.launchBubble != null) {
                this.aimingLines[loc2].setBubbleType(this.launchBubble.data.tempId);
            }
            ++loc2;
        }
        let loc3 = Math.cos(loc1 / 180 * Math.PI) * GameScene.MOVE_SPEED / 2;
        let loc4 = Math.sin(loc1 / 180 * Math.PI) * GameScene.MOVE_SPEED / 2;
        let oldtempx = this.LAUNCH_X + Math.sin(loc1 / 180 * Math.PI) * 90;
        let oldtempy = this.LAUNCH_Y - Math.cos(loc1 / 180 * Math.PI) * 90;
        let littleNum = 10;
        if (Model.levelModel.checkHasProp(PropType.PROP_2)) {
            littleNum = this.aimingLines.length;
        }
        loc2 = 0;
        while (loc2 < littleNum) {
            loc8 = this.aimingLines[loc2];
            tempx = oldtempx + loc4;
            tempy = oldtempy - loc3;
            if (!(this.launchBubble == null) && !(this.launchBubble.data.tempId == 102)) {
                if (tempx < GameScene.BUBBLE_SIZE * 0.5) {
                    tempx = GameScene.BUBBLE_SIZE * 0.5;
                    loc4 = loc4 * -1;
                }
                if (tempx > UI.WINSIZE_W - GameScene.BUBBLE_SIZE * 0.5) {
                    tempx = UI.WINSIZE_W - GameScene.BUBBLE_SIZE * 0.5;
                    loc4 = loc4 * -1;
                }
            }
            loc11 = false;
            loc12 = (this.bubbles.length - 1);
            while (loc12 >= 0) {
                if (loc11) {
                    break;
                }
                loc13 = 0;
                while (loc13 < this.bubbles[0].length) {
                    if (this.bubbles[loc12][loc13] != null) {
                        loc14 = this.bubbles[loc12][loc13].x + this.bubbleContainer.x - tempx;
                        loc15 = this.bubbles[loc12][loc13].y + this.bubbleContainer.y - tempy;
                        if ((loc16 = Math.sqrt(loc14 * loc14 + loc15 * loc15)) <= GameScene.BUBBLE_COLLIDE_DIS) {
                            loc11 = true;
                            break;
                        }
                    }
                    ++loc13;
                }
                --loc12;
            }
            if (loc11) {
                break;
            }
            else {
                loc8.x = tempx;
                loc8.y = tempy;
                loc8.visible = true;
                oldtempx = tempx;
                oldtempy = tempy;
            }
            ++loc2;
        }
        return;
    }


    /**新建关卡 */
    public newLevel(arg1: number): void {
        Config.bubbleCfgParser.randomBubbleColor();
        this.levelCfg = Config.levelCfgParser.getLevelCfg(arg1);
        this.previewSpeed = -20;
        this.isOver = false;
        this.needPreview = false;
        this.shootBubble = null;
        this.nextBubble = null;
        this.addStepFlag = false;
        this.createBubbles();
        let loc1 = Model.levelModel.getLevelVO(arg1);
        if (loc1 == null) {
            Model.levelModel.currentHighScore = 0;
        }
        else {
            Model.levelModel.currentHighScore = loc1.highscore;
        }
        Model.levelModel.currentScore = 0;
        this.gameInfo.updateInfo();
        if (Model.levelModel.checkHasProp(PropType.PROP_7)) {//步数加8
            this.setStep(this.levelCfg.step + 8);
        }
        else {
            this.setStep(this.levelCfg.step);
        }
        this.checkToAddVectorLen();
        return;
    }

    public close(): void {
        this.bubbleContainer.removeChildren();
        this.bubbles = null;
        egret.Tween.removeAllTweens();
        return;
    }

    public creatExpEffect(x: number, y: number, arg3: number, arg4: boolean = true): void {
        let effect = new ExpEffect();
        effect.x = x;
        effect.y = y;
        this.bubbleContainer.addChild(effect);
        SoundCtrl.getInstance().playmusic("bubbleExp");
        return;
    }


    /**获得距离最近的位置坐标 */
    public getDisMin(arg1: Bubble, arg2: Bubble): egret.Point {
        let disX = 0;
        let disY = 0;
        let mindis = 0;
        let pos: egret.Point = null;
        let closestLoc: egret.Point = null;
        let testLoc: egret.Point = new egret.Point(0, 0);
        let testLocs = this.searchAroundBubble(arg1.row, arg1.col);
        let oldMinDis = 99999999999;
        let loc12 = 0;
        for (let loc in testLocs) {
            testLoc = testLocs[loc];
            if (this.bubbles[testLoc.x][testLoc.y] != null) {
                continue;
            }
            let pos = this.getBubbleLocation(testLoc.x, testLoc.y);
            disX = pos.x - arg2.x;
            disY = pos.y - arg2.y;
            mindis = disX * disX + disY * disY;
            if (!(mindis < oldMinDis)) {
                continue;
            }
            closestLoc = new egret.Point(testLoc.x, testLoc.y);
            oldMinDis = mindis;
        }
        return closestLoc;
    }

    /**返回周围合法位置
     * arg3为true时不判断该位置是否为空
     */
    public searchAroundBubble(row: number, col: number, arg3: boolean = true): Array<egret.Point> {
        let temprow = 0;
        let tempcol = 0;
        let loc1 = [];
        let loc2 = [];
        if (row % 2 != 0) {
            loc1.push(new egret.Point(0, -1));
            loc1.push(new egret.Point(0, 1));
            loc1.push(new egret.Point(-1, 0));
            loc1.push(new egret.Point(-1, 1));
            loc1.push(new egret.Point(1, 0));
            loc1.push(new egret.Point(1, 1));
        }
        else {
            loc1.push(new egret.Point(0, -1));
            loc1.push(new egret.Point(0, 1));
            loc1.push(new egret.Point(-1, -1));
            loc1.push(new egret.Point(-1, 0));
            loc1.push(new egret.Point(1, -1));
            loc1.push(new egret.Point(1, 0));
        }
        let loc5 = 0;
        while (loc5 < loc1.length) {
            temprow = loc1[loc5].x + row;
            tempcol = loc1[loc5].y + col;
            if (!(temprow < 0 || temprow >= this.bubbles.length || tempcol < 0 || tempcol >= this.bubbles[0].length)) {//位置合法
                if (arg3) {
                    loc2.push(new egret.Point(temprow, tempcol));
                }
                else if (this.bubbles[temprow][tempcol] != null) {
                    loc2.push(new egret.Point(temprow, tempcol));
                }
            }
            ++loc5;
        }
        return loc2;
    }

    /**返回需要进行摇晃特效的bubbles */
    public searchBackBubbles(row: number, col: number): Array<Bubble> {
        let loc4 = null;
        let loc5 = null;
        let loc6: Array<egret.Point> = [];
        let loc7 = null;
        let loc8 = null;
        let loc9 = null;
        let loc10 = null;
        let loc11 = null;
        let bubble = this.bubbles[row][col];
        let loc2 = this.searchAroundBubble(row, col, false);
        let ans = [];
        let loc12 = 0;
        for (let loc in loc2) {
            loc4 = loc2[loc];
            loc5 = this.bubbles[loc4.x][loc4.y];
            if (ans.indexOf(loc5) == -1) {
                ans.push(loc5);
                loc5.backRadians = Math.atan2(loc5.y - bubble.y, loc5.x - bubble.x);
                loc5.backLevel = 1;
            }
            loc6 = this.searchAroundBubble(loc5.row, loc5.col, false);
            for (let loc in loc6) {
                loc7 = loc6[loc];
                loc8 = this.bubbles[loc7.x][loc7.y];
                if (ans.indexOf(loc8) == -1) {
                    ans.push(loc8);
                    loc8.backRadians = Math.atan2(loc8.y - loc5.y, loc8.x - loc5.x);
                    loc8.backLevel = 2;
                }
                loc9 = this.searchAroundBubble(loc8.row, loc8.col, false);
                for (let loc in loc9) {
                    loc10 = loc9[loc]
                    loc11 = this.bubbles[loc10.x][loc10.y];
                    if (ans.indexOf(loc11) != -1) {
                        continue;
                    }
                    ans.push(loc11);
                    loc11.backRadians = Math.atan2(loc11.y - loc8.y, loc11.x - loc8.x);
                    loc11.backLevel = 3;
                }
            }
        }
        return ans;
    }


    /**交换待发射泡泡和下一发泡泡 */
    public switchShootBubble(): void {
        if (this.isSwitching || this.isOver || !this.isReady) {
            return;
        }
        this.isSwitching = true;
        egret.Tween.get(this.launchBubble).to({ "x": this.nextBubble.x, "y": this.nextBubble.y }, 200);
        egret.Tween.get(this.nextBubble).to({ "x": this.launchBubble.x, "y": this.launchBubble.y }, 200);
        egret.setTimeout(this.switchEnd, this, 201);
        if (this.switchTip != null) {
            this.switchTip.parent.removeChild(this.switchTip);
            this.switchTip = null;
        }
        SoundCtrl.getInstance().playmusic("changeBubble");
        return;
    }

    /**交换完成后恢复数据 */
    public switchEnd(): void {
        let loc1 = this.launchBubble;
        this.launchBubble = this.nextBubble;
        this.nextBubble = loc1;
        this.isSwitching = false;
        return;
    }

    /**使用道具后改变当前发射泡泡 */
    public changeLunchBubble(id: number, x: number, y: number): void {
        if (this.launchBubble != null) {
            if (this.launchBubble.data.id == id) {
                return;
            }
            let tx = this.launchBubble.x;
            let ty = this.launchBubble.y;
            let tempLunchBubble = new Bubble(id);
            tempLunchBubble.x = this.propPanel.x + x + 29;
            tempLunchBubble.y = this.propPanel.y + y + 29;
            this.addChild(tempLunchBubble);
            egret.Tween.get(tempLunchBubble).to({ "x": tx, "y": ty }, 200)
                .call(this.onchangeLunchBubbleComplete, this, [tempLunchBubble]);
        }
        return;
    }

    public onchangeLunchBubbleComplete(arg1: Bubble) {
        this.removeChild(this.launchBubble);
        this.launchBubble = null;
        this.launchBubble = new Bubble(arg1.data.id);
        this.launchBubble.x = this.LAUNCH_X;
        this.launchBubble.y = this.LAUNCH_Y;
        this.addChild(this.launchBubble);
        this.removeChild(arg1);
        return;
    }

    public getBubblesByRow(arg1: number): Array<Bubble> {
        let loc1 = [];
        let loc2 = 0;
        while (loc2 < this.bubbles[0].length) {
            if (this.bubbles[arg1][loc2] != null) {
                loc1.push(this.bubbles[arg1][loc2]);
            }
            ++loc2;
        }
        return loc1;
    }

    public init(): void {
        //===============================map=================================================
        let loc1 = Math.floor((Model.levelModel.selectedLevel - 1) / 18) + 1;
        loc1 = (loc1 - 1) % 4 + 1;
        let mapbg = UI.addPic("worldBg_" + loc1 + "_jpg", true, this, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2);
        UI.setscalXandY(mapbg, UI.WINSIZE_W * 1.1 / mapbg.width, UI.WINSIZE_H * 1.1 / mapbg.height);
        mapbg.addEventListener(egret.TouchEvent.TOUCH_END, this.onTouch, this);
        mapbg.addEventListener(egret.TouchEvent.TOUCH_MOVE, this.onMapTouchMove, this);
        mapbg.$setTouchEnabled(true);
        //====================================bubble=========================================
        this.bubbleContainer = new egret.DisplayObjectContainer();
        this.addChild(this.bubbleContainer);
        //===================================UI===============================================
        this.gameInfo = new GameInfoPanel();
        this.gameInfo.x = UI.WINSIZE_W / 2;
        this.addChild(this.gameInfo);
        let topboarder = UI.addPic("res.topboarder", false, this, 0, this.gameInfo.topinfo.height);
        UI.setscalXandY(topboarder, UI.WINSIZE_W * 1.1 / topboarder.width, UI.WINSIZE_W * 1.1 / topboarder.width);
        GameScene.TOP_BOARDER_HEIGHT = topboarder.y + topboarder.height;
        this.bubbleContainer.addChild(topboarder);
        //=================================prop==============================================
        this.propPanel = new PropPanel();
        this.propPanel.x = this.propPanel.width / 2;
        this.propPanel.y = UI.WINSIZE_H * 5 / 6;
        this.addChild(this.propPanel);
        this.bubbles = [];
        //============================cannon============================
        this.stepLabel = UI.addBitText(this, "", "info_fnt", true, UI.WINSIZE_W / 1.2, this.LAUNCH_Y - 60);
        this.stepLabel.textAlign = "center";
        let cannon_base = UI.addPic("res.Cannon_Base", false, this, UI.WINSIZE_W / 2, UI.WINSIZE_H);
        cannon_base.anchorOffsetX = cannon_base.width / 2;
        cannon_base.anchorOffsetY = cannon_base.height;
        this.nextBallBg = UI.addPic('res.nextBall_bg', true, this, UI.WINSIZE_W / 1.2, this.LAUNCH_Y);
        this.shooter = new Cannon();
        this.shooter.x = UI.WINSIZE_W / 2;
        this.shooter.y = 0.9533 * UI.WINSIZE_H;
        this.addChild(this.shooter);
        this.shooter.addEventListener(egret.TouchEvent.TOUCH_END, this.onChangeTouch, this);
        this.shooter.$setTouchEnabled(true);
        this.nextBallBg.addEventListener(egret.TouchEvent.TOUCH_END, this.onChangeTouch, this);
        this.nextBallBg.$setTouchEnabled(true);
        //
        this.createAimingLine();
        GameRender.I.Add(this, this.onUpdate);
        this.removeDestoryedTimer = new egret.Timer(10, 0);
        this.removeDestoryedTimer.addEventListener(egret.TimerEvent.TIMER, this.removeDestoryedBubble, this);
        SoundCtrl.getInstance().playbgmusic("bg1");
        return;
    }


    /**点击交换按钮 */
    public onChangeTouch(arg1: egret.TouchEvent): void {
        this.switchShootBubble();
        return;
    }

    /**按住地图调整弹道 */
    public onMapTouchMove(e: egret.TouchEvent): void {
        if (this.isOver) {
            return;
        }
        if (this.needPreview) {
            this.previewSpeed = -40;
            return;
        }
        if (!this.isReady) {
            return;
        }
        let loc3 = e.stageX - this.LAUNCH_X;
        let loc4 = e.stageY - this.LAUNCH_Y;
        let loc5 = Math.atan2(loc4, loc3) * 45 + 72;
        if (loc5 >= -60 && loc5 <= 60) {
            this.shooter.rotation = loc5;
            this.showAimingLine();
        }
        else {
            this.hideAimingLine();
        }
    }

    /**松开按键发送泡泡 */
    public onTouch(e: egret.TouchEvent): void {
        this.previewSpeed = -20;
        if (this.isOver || !this.isReady) {
            return;
        }
        this.hideAimingLine();
        if (this.shootBubble != null) {
            return;
        }
        let loc3 = e.stageX - this.LAUNCH_X;
        let loc4 = e.stageY - this.LAUNCH_Y;
        let loc5 = Math.atan2(loc4, loc3) * 45 + 72;
        if (loc5 >= -60 && loc5 <= 60) {
            this.shooter.rotation = loc5;
            this.shooter.setAction(2);
            this.hasShield = false;
            this.shootBubble = new Bubble(this.launchBubble.data.id, this.scale);
            this.shootBubble.vx = Math.sin(loc5 / 180 * Math.PI) * GameScene.MOVE_SPEED;
            this.shootBubble.vy = -Math.cos(loc5 / 180 * Math.PI) * GameScene.MOVE_SPEED;
            this.shootBubble.x = this.LAUNCH_X + Math.sin(loc5 / 180 * Math.PI) * 60 - this.bubbleContainer.x;
            this.shootBubble.y = this.LAUNCH_Y - Math.cos(loc5 / 180 * Math.PI) * 60 - this.bubbleContainer.y;
            this.bubbleContainer.addChild(this.shootBubble);
            if (this.launchBubble.hasShield) {//拥有护盾
                this.shootBubble.addShield();
                this.hasShield = true;
            }
            this.removeChild(this.launchBubble);
            this.launchBubble = null;
            if (this.shootBubble.data.effectType == BubbleEffectType.BOMB_FIRE) {
                SoundCtrl.getInstance().playmusic("fireball");
            }
            this._step = this._step - 1;
            this.setStep(this._step);
            SoundCtrl.getInstance().playmusic("launcherBubble");
        }
        return;
    }

    /**返回由相同颜色组成的Bubble数组 */
    public getBubblesByColor(arg1: number): Array<Bubble> {
        let col = 0;
        let loc1 = [];
        let row = 0;
        while (row < this.bubbles.length) {
            col = 0;
            while (col < this.bubbles[0].length) {
                if (this.bubbles[row][col] != null) {
                    if (this.bubbles[row][col].data.colorType == arg1) {
                        loc1.push(this.bubbles[row][col]);
                    }
                }
                ++col;
            }
            ++row;
        }
        return loc1;
    }

    /**设置步数 */
    public setStep(arg1: number, arg2: boolean = true): void {
        if (arg1 < 0) {
            arg1 = 0;
        }
        this._step = arg1;
        this.stepLabel.text = arg1 + "";
        UI.FreshLocation(this.stepLabel);
        if (arg1 > 0 && arg2) {
            this.createLunchBubble(!this.isOver);
            this.createPreViewBubble();
            if (arg1 <= 5 && !this.isOver) {
                SoundCtrl.getInstance().playmusic("warning");
                this.showStepLessWarn();
            }
        }
        return;
    }

    /**警告步数不足 */
    public showStepLessWarn(): void {
        egret.Tween.removeTweens(this.stepLabel);
        egret.Tween.get(this.stepLabel, { loop: true }).to({ "alpha": 0 }, 200).to({ "alpha": 1 }, 200);
        return;
    }

    /**创造发射泡泡 */
    public createLunchBubble(arg1: boolean): void {
        if (this.nextBubble != null) {
            this.launchBubble = new Bubble(this.nextBubble.data.id);
            this.launchBubble.x = this.nextBubble.x;
            this.launchBubble.y = this.nextBubble.y;
            this.addChild(this.launchBubble);
            if (arg1) {
                egret.Tween.get(this.launchBubble).to({ "x": this.LAUNCH_X, "y": this.LAUNCH_Y }, 100);
                this.removeChild(this.nextBubble);
            }
            else {
                this.launchBubble.x = this.LAUNCH_X;
                this.launchBubble.y = this.LAUNCH_Y;
                this.removeChild(this.nextBubble);
            }
            this.nextBubble = null;
        }
        else {
            this.launchBubble = new Bubble(this.getValidBubbleId());
            this.launchBubble.x = this.LAUNCH_X;
            this.launchBubble.y = this.LAUNCH_Y;
            this.addChild(this.launchBubble);

        }
        return;
    }

    /**创造待击落泡泡群 */
    public createBubbles(): void {
        let cfg: BubbleCfg = null;
        let bubble: Bubble = null;
        let temp = null;
        let i = 0;
        let j = 0;
        while (i < this.levelCfg.map.length) {//14*11
            temp = [];
            this.bubbles.push(temp);
            j = 0;
            while (j < this.levelCfg.map[0].length) {
                this.bubbles[i].push(null);
                if (Math.floor(this.levelCfg.map[i][j]) > 0) {
                    cfg = Config.bubbleCfgParser.getBubbleCfg(this.levelCfg.map[i][j]);
                    bubble = this.createBubble(i, j, cfg.id);
                    this.bubbles[i][j] = bubble;
                }
                ++j;
            }
            ++i;
        }
        this.bubbleContainer.y = GameScene.SCOREINFO_HEIGHT;
        this.isReady = false;
        egret.setTimeout(this.UpBubbleContainer, this, 500);
        return;
    }

    /**从row,col中获得Bubble位置 */
    public getBubbleLocation(row: number, col: number): egret.Point {
        let x = col * (GameScene.BUBBLE_SIZE + GameScene.SPACING) + row % 2 * GameScene.HALF_BUBBLE_SIZE + GameScene.HALF_BUBBLE_SIZE;
        let y = (row - 2) * (GameScene.BUBBBLE_DIS_H + GameScene.SPACING) + GameScene.TOP_BOARDER_HEIGHT + GameScene.HALF_BUBBLE_SIZE;
        return new egret.Point(x, y);
    }

    /**创造待击落泡泡 */
    public createBubble(row: number, col: number, id: number): Bubble {
        let loc1 = new Bubble(id, this.scale);
        loc1.row = row;
        loc1.col = col;
        let pos = this.getBubbleLocation(row, col);
        loc1.x = pos.x;
        loc1.y = pos.y;
        this.bubbleContainer.addChild(loc1);
        return loc1;
    }

    /**帧驱动事件 */
    public onUpdate(arg1: egret.Event): void {
        this.updateDropBubble();
        if (this.isOver && this.dropBubbles.length == 0 && this.destoryedBubbles.length == 0 && this.shootLeftBubbleId == 0) {
            console.log("end")
            GameRender.I.Remove(this);
            EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_GAME_END_UI));
        }
        if (this.isOver) {
            return;
        }
        if (this.needPreview) {//需要移动容器
            this.bubbleContainer.y = this.bubbleContainer.y + this.previewSpeed;
            if (this.bubbleContainer.y <= this.containerTargetY) {//到达目的坐标
                this.needPreview = false;
                this.checkGameTip();
                this.bubbleContainer.y = this.containerTargetY;
            }
        }
        this.updateShootBubble();
        this.updateUpBubble();
        return;
    }

    /**渲染已发射泡泡 */
    public updateShootBubble(): void {
        let loc5 = false;
        let checking_Bubble: Bubble = null;
        let disX = 0;
        let disY = 0;
        let loc9 = NaN;
        let loc10 = null;
        let loc11 = null;
        if (this.shootBubble == null) {
            return;
        }
        this.shootBubble.x = this.shootBubble.x + this.shootBubble.vx;
        this.shootBubble.y = this.shootBubble.y + this.shootBubble.vy;
        if (this.shootBubble.data.effectType == BubbleEffectType.BOMB_FIRE) {//特殊泡泡
            if (this.shootBubble.x < 0 || this.shootBubble.x > UI.WINSIZE_W + GameScene.HALF_BUBBLE_SIZE || this.shootBubble.y < GameScene.HALF_BUBBLE_SIZE) {
                this.shootBubble.parent.removeChild(this.shootBubble);
                this.shootBubble = null;
                this.removeHangBubble();
                this.startRemoveDrops();
                this.checkWillShootBubbleColor();
                this.checkWin();
                return;
            }
        }
        else if (this.shootBubble.x < GameScene.BUBBLE_SIZE * 0.5) {//到达左边界后变换方向
            this.shootBubble.x = GameScene.BUBBLE_SIZE * 0.5;
            this.shootBubble.vx = this.shootBubble.vx * -1;
        }
        else if (this.shootBubble.x > UI.WINSIZE_W - GameScene.BUBBLE_SIZE * 0.5) {//到达右边界后变换方向
            this.shootBubble.x = UI.WINSIZE_W - GameScene.BUBBLE_SIZE * 0.5;
            this.shootBubble.vx = this.shootBubble.vx * -1;
        }
        let loc1 = -1;
        let loc2 = -1;
        if (this.shootBubble != null) {//检测撞击效果
            loc5 = false;
            let row = (this.bubbles.length - 1);
            let col = 0;
            while (row >= 0) {
                col = 0;
                while (col < this.bubbles[0].length) {
                    if ((checking_Bubble = this.bubbles[row][col]) != null) {
                        let dx = checking_Bubble.x - this.shootBubble.x;
                        let dy = checking_Bubble.y - this.shootBubble.y;
                        if ((dx * dx + dy * dy) <= GameScene.BUBBLE_SIZE * GameScene.BUBBLE_SIZE) {
                            if (checking_Bubble.data.effectType == BubbleEffectType.BLANK_BUBBLE || this.shootBubble.data.effectType == BubbleEffectType.BOMB_FIRE) {
                                if (checking_Bubble.row > 1) {
                                    this.creatExpEffect(checking_Bubble.x, checking_Bubble.y, 1);
                                    this.createScoreTip(checking_Bubble.x, checking_Bubble.y, Number(checking_Bubble.data.score));
                                    this.bubbleContainer.removeChild(checking_Bubble);
                                    this.bubbles[row][col] = null;
                                    this.removeHangBubble();
                                }
                            }
                            else {
                                if (checking_Bubble.data.effectType != BubbleEffectType.LIGHTING_BUBBLE) {
                                    if (checking_Bubble.data.effectType == BubbleEffectType.BOMB_SAMECOLOR) {//BOMB_SAMECOLOR消去所有相同颜色泡泡
                                        this.handleBombSameColorBubble(checking_Bubble);
                                        loc5 = true;
                                        break;
                                    }
                                }
                                else {  //LIGHTING_BUBBLE
                                    this.handleLightingBubble(checking_Bubble);
                                    loc5 = true;
                                    console.log("break");
                                    break;
                                }
                                //普通碰撞
                                loc10 = this.getDisMin(checking_Bubble, this.shootBubble);
                                if (loc10) {
                                    loc1 = loc10.x;
                                    loc2 = loc10.y;
                                    loc5 = true;
                                }
                                break;
                            }
                        }
                    }
                    ++col;
                }
                if (loc5) {
                    break;
                }
                --row;
            }
            if (loc1 > -1 && loc2 > -1) {//已碰撞
                this.shootBubble.row = loc1;
                this.shootBubble.col = loc2;
                let pos = this.getBubbleLocation(loc1, loc2);
                this.shootBubble.x = pos.x;
                this.shootBubble.y = pos.y;
                this.bubbles[loc1][loc2] = this.shootBubble;
                loc11 = this.searchBackBubbles(loc1, loc2);
                this.doBackEffect(loc11);
                this.checkToRemoveBubble(this.shootBubble);
                if (this.shootBubble.hasShield) {
                    this.shootBubble.removeShield();
                }
                this.shootBubble = null;
                this.checkToAddVectorLen();
                this.checkContainerNeedMove();
                this.showAimingLine();
            }
        }
        return;
    }

    public checkWillShootBubbleColor(): void {
        let loc1 = 0;
        let loc2 = 0;
        if (!(this.launchBubble == null) && this.launchBubble.data.colorType > 0 && this.launchBubble.data.colorType <= 7) {
            if (this.getBubblesByColor(this.launchBubble.data.colorType).length == 0) {
                loc1 = this.getValidBubbleId();
                if (loc1 > 0) {
                    this.removeChild(this.launchBubble);
                    this.launchBubble = null;
                    this.launchBubble = new Bubble(loc1);
                    this.launchBubble.x = this.LAUNCH_X;
                    this.launchBubble.y = this.LAUNCH_Y;
                    this.addChild(this.launchBubble);
                }
            }
        }
        if (!(this.nextBubble == null) && this.nextBubble.data.colorType > 0 && this.nextBubble.data.colorType <= 7) {
            if (this.getBubblesByColor(this.nextBubble.data.colorType).length == 0) {
                loc2 = this.getValidBubbleId();
                if (loc2 > 0) {
                    this.removeChild(this.nextBubble);
                    this.nextBubble = null;
                    this.nextBubble = new Bubble(loc2);
                    this.nextBubble.x = UI.WINSIZE_W / 1.2;
                    this.nextBubble.y = this.LAUNCH_Y;
                    this.addChild(this.nextBubble);
                }
            }
        }
        return;
    }

    /** 将delayDropBubbles中的bubble设置属性后
     * push入dropBubbles
     * 清空delayDropBubbles
    */
    public startRemoveDrops(): void {
        let loc1 = null;
        for (let loc in this.delayDropBubbles) {
            loc1 = this.delayDropBubbles[loc];
            loc1.vy = GameScene.BUBBLE_DROP_SPEED * 3;
            loc1.vx = (Math.random() * 4 - 2) * 3;
            egret.Tween.removeTweens(loc1);
            if (loc1.data.effectType == BubbleEffectType.STAR_BUBBLE) {
                loc1.vy = GameScene.BUBBLE_DROP_SPEED - 4;
                loc1.doBigEffect();
            }
            this.dropBubbles.push(loc1);
        }
        this.delayDropBubbles = [];
        return;
    }

    /**遍历Bubble数组
     * 将无连接的Bubble加入delayDropBubbles */
    public removeHangBubble(): void {
        let bubble: Bubble = null;
        let loc5 = [];
        let loc6 = [];
        let loc7 = [];
        let loc8 = false;
        let row = (this.bubbles.length - 1);
        let col = 0;
        while (row >= 1) {
            col = 0;
            while (col < this.bubbles[0].length) {
                if ((bubble = this.bubbles[row][col]) != null) {
                    if (loc7.indexOf(this.bubbles[row][col]) == -1) {
                        //检测周围的Bubble
                        let loc4 = this.searchConnectable(row, col, false);
                        for (let loc = 0; loc < loc4.length; loc++) {
                            loc7.push(loc4[loc]);
                        }
                        if (loc4.length != 0) {
                            loc8 = false;
                            for (let loc in loc4) {
                                let item = loc4[loc];
                                if (!(item.row == 0 || item.data.effectType == BubbleEffectType.STONE_DISABLE_BUBBLE)) {
                                    continue;
                                }
                                loc8 = true;
                                break;
                            }
                            if (!loc8) {
                                for (let loc in loc4) {
                                    let item = loc4[loc]
                                    loc5.push(item);
                                }
                            }
                        }
                        else if (this.bubbles[row][col].data.effectType != BubbleEffectType.STONE_DISABLE_BUBBLE) {
                            loc5.push(this.bubbles[row][col]);
                        }
                    }
                }
                ++col;
            }
            --row;
        }
        let loc9 = this.checkHasBubbleByType(loc5, BubbleEffectType.STONE_DISABLE_BUBBLE);
        if (loc9 != null) {
            let loc14 = this.searchConnectable(loc9.row, loc9.col, false);
            for (let loc in loc5) {
                let item = loc5[loc]
                if (loc14.indexOf(item) != -1) {
                    continue;
                }
                loc6.push(item);
            }
            for (let loc in loc6) {
                let item = loc6[loc];
                item.vx = 0;
                this.bubbles[item.row][item.col] = null;
                this.delayDropBubbles.push(item);
            }
        }
        else {
            for (let loc in loc5) {
                let item = loc5[loc]
                item.vx = 0;
                this.bubbles[item.row][item.col] = null;
                this.delayDropBubbles.push(item);
            }
        }
        return;
    }

    public checkHasBubbleByType(arg1: Array<Bubble>, arg2: number): Bubble {
        let loc1 = null;
        let loc2 = 0;
        let loc3 = arg1;
        for (let loc in arg1) {
            loc1 = arg1[loc];
            if (loc1.data.effectType != arg2) {
                continue;
            }
            return loc1;
        }
        return null;
    }

    public checkToAddVectorLen(): void {
        let loc3 = null;
        let loc4 = 0;
        let loc1 = false;
        let loc2 = 0;
        while (loc2 < this.bubbles[0].length) {
            if (this.bubbles[(this.bubbles.length - 1)][loc2] != null) {
                loc1 = true;
                break;
            }
            ++loc2;
        }
        if (loc1) {
            loc3 = [];
            this.bubbles.push(loc3);
            loc4 = 0;
            while (loc4 < this.bubbles[0].length) {
                this.bubbles[(this.bubbles.length - 1)].push(null);
                ++loc4;
            }
        }
        return;
    }

    /**以shootBubble为起点检查是否满足连接要求,移除bubbles */
    public checkToRemoveBubble(shootBubble: Bubble): void {
        let connectBubbles = null;
        let destroyBubble = null;
        let loc7 = null;
        let loc8 = null;
        let loc9 = null;
        let loc10 = null;
        let loc11 = null;
        let loc12 = null;
        let row = shootBubble.row;
        let col = shootBubble.col;
        if (shootBubble.data.effectType != BubbleEffectType.MAGIC_BUBBLE) {
            if (shootBubble.data.effectType != BubbleEffectType.BOMB_BUBBLE) {
                //基础连接
                connectBubbles = this.searchConnectable(row, col, true);
                if (connectBubbles.length < 3) {
                    this.removeHangBubble();
                    this.startRemoveDrops();
                    this.checkWillShootBubbleColor();
                    this.checkWin();
                    return;
                }
            }
            else {
                //bomb连接
                this.creatBombExpEffect(shootBubble.x, shootBubble.y);
                SoundCtrl.getInstance().playmusic("bombExplosion");
                connectBubbles = this.getBombBubbleConnect(row, col);
            }
        }
        else {
            //MAGIC连接
            connectBubbles = this.getMagicBubbleConnect(row, col);
        }
        let loc4 = 0;
        let loc5 = [];
        let loc13 = 0;
        for (let loc in connectBubbles) {
            destroyBubble = connectBubbles[loc];
            destroyBubble.vy = GameScene.BUBBLE_DROP_SPEED;
            this.destoryedBubbles.push(destroyBubble);
            this.bubbles[destroyBubble.row][destroyBubble.col] = null;
            if (destroyBubble.data.colorType == 0) {
                continue;
            }
            if (shootBubble.data.effectType == BubbleEffectType.BOMB_BUBBLE) {
                destroyBubble.destoryedByBomb = true;
                continue;
            }
            loc8 = this.searchAroundBubble(destroyBubble.row, destroyBubble.col, false);
            let loc15 = 0;
            for (let loc in loc8) {
                loc9 = loc8[loc];
                loc10 = this.bubbles[loc9.x][loc9.y];
                if (loc5.indexOf(loc10) != -1) {
                    continue;
                }
                loc5.push(loc10);
            }
            if (loc4 != 0) {
                continue;
            }
            if ((loc11 = Config.bubbleCfgParser.getBubbleCfgByType(destroyBubble.data.colorType, BubbleEffectType.NORMAL_BUBBLE)) == null) {
                continue;
            }
            loc4 = loc11.id;
        }
        loc13 = 0;
        for (let loc in loc5) {
            loc7 = loc5[loc];
            if (loc7.data.effectType == BubbleEffectType.STONE_DISABLE_BUBBLE) {
                loc7.setBubbleLife((loc7.getBubbleLife() - 1));
                if (loc7.getBubbleLife() == 0) {
                    this.destoryedBubbles.push(loc7);
                    this.bubbles[loc7.row][loc7.col] = null;
                }
                continue;
            }
            if (loc7.data.effectType == BubbleEffectType.CHANGE_BUBBLE) {
                loc12 = this.createBubble(loc7.row, loc7.col, loc4);
                this.bubbles[loc7.row][loc7.col] = loc12;
                loc12.scaleY = 0;
                loc12.scaleX = 0;
                egret.Tween.get(loc12).to({ "scaleX": 1, "scaleY": 1 }, 500);
                this.creatExpEffect(loc7.x, loc7.y, 2);
                this.bubbleContainer.removeChild(loc7);
                continue;
            }
            if (loc7.data.effectType != BubbleEffectType.SKELETON_BUBBLE) {
                continue;
            }
        }
        this.startRemoveDestoryList();
        this.removeHangBubble();
        this.checkWillShootBubbleColor();
        this.checkWin();
        return;
    }

    public startRemoveDestoryList(): void {
        this.removeDestoryedTimer.start();
        return;
    }

    /**移除bubbles
     * 首先从容器中移除
     * 之后执行startRemoveDrops()
     */
    protected removeDestoryedBubble(arg1: egret.TimerEvent): void {
        let destoryedBubble: Bubble = null;
        let loc2: Bubble = null;
        if (this.destoryedBubbles.length > 0) {
            destoryedBubble = this.destoryedBubbles.shift();
            if (destoryedBubble.data.effectType != BubbleEffectType.STAR_BUBBLE) {
                if (destoryedBubble.data.effectType == BubbleEffectType.SKELETON_BUBBLE && !destoryedBubble.destoryedByBomb) {
                    if (!this.hasShield) {
                        this.setStep(this._step - 2, false);
                        this.createUpBubble();
                        this.createUpBubble();
                        this.checkWin();
                    }
                }
            }
            else {
                loc2 = new Bubble(destoryedBubble.data.id,this.scale);
                loc2.vy = GameScene.BUBBLE_DROP_SPEED + 4;
                loc2.vx = Math.random() * 4 - 2;
                loc2.doBigEffect();
                loc2.x = destoryedBubble.x;
                loc2.y = destoryedBubble.y;
                this.dropBubbles.push(loc2);
                this.bubbleContainer.addChild(loc2);
            }
            this.creatExpEffect(destoryedBubble.x, destoryedBubble.y, 1);
            this.createScoreTip(destoryedBubble.x, destoryedBubble.y, Number(destoryedBubble.data.score));
            this.bubbleContainer.removeChild(destoryedBubble);
        }
        else {
            this.removeDestoryedTimer.stop();
            this.startRemoveDrops();
        }
        return;
    }

    public createUpBubble(): void {
        let id = Math.floor(Math.random() * 7 + 1);
        let loc2 = new Bubble(id,this.scale);
        let loc3 = Math.floor(Math.random() * 10);
        loc2.x = loc3 * (GameScene.BUBBLE_SIZE + GameScene.SPACING) + GameScene.HALF_BUBBLE_SIZE + GameScene.HALF_BUBBLE_SIZE;
        loc2.y = GameScene.BUBBBLE_DIS_H * this.bubbles.length + 700;
        loc2.vy = -30;
        this.upBubbles.push(loc2);
        this.bubbleContainer.addChild(loc2);
        return;
    }

    public creatBombExpEffect(arg1: number, arg2: number): void {
        let loc1 = new BombExpEffect();
        loc1.x = arg1;
        loc1.y = arg2;
        this.bubbleContainer.addChild(loc1);
        return;
    }


    /**以bubbles[row][col]为起点检查是否可连接
     * 返回可连接Bubbles数组
     * arg3为连接类型
     * arg3为true时为基础连接,要求颜色相同
     */
    public searchConnectable(row: number, col: number, arg3: boolean = true): Array<Bubble> {
        let loc3 = 0;
        let bubble: Bubble = null;
        let checkBubble: Bubble = null;
        let checkPoint: egret.Point = null;
        let loc1 = [];
        let connect_bubbles = [];
        let aroundPoints = [];
        let loc7 = [];
        loc1.push(this.bubbles[row][col]);
        while (loc1.length > 0) {
            bubble = loc1.shift();
            if ((aroundPoints = this.searchAroundBubble(bubble.row, bubble.col, false)).length < 1) {
                //周围合法位置为空
                break;
            }
            let loc9 = 0;
            //依次遍历周围合法位置并进行判断,若满足连接要求则加入待检测Bubbles数组与connect_bubbles数组
            for (let loc in aroundPoints) {
                checkPoint = aroundPoints[loc];
                checkBubble = this.bubbles[checkPoint.x][checkPoint.y];
                if (arg3) {
                    //基础连接,要求颜色相同
                    if (this.isSameBubble(checkBubble, bubble) && loc1.indexOf(checkBubble) == -1 && connect_bubbles.indexOf(checkBubble) == -1) {
                        loc1.push(checkBubble);
                    }
                    continue;
                }
                if (!(loc1.indexOf(checkBubble) == -1 && connect_bubbles.indexOf(checkBubble) == -1)) {
                    continue;
                }
                loc1.push(checkBubble);
            }
            connect_bubbles.push(bubble);
        }
        return connect_bubbles;
    }

    /**炸弹球 */
    public getBombBubbleConnect(arg1: number, arg2: number): Array<Bubble> {
        let loc4 = null;
        let loc5 = null;
        let loc6 = null;
        let loc7 = null;
        let loc8 = null;
        let loc1 = this.bubbles[arg1][arg2];
        let loc2 = this.searchAroundBubble(arg1, arg2, false);
        let loc3 = [];
        if (loc1.row > 1) {
            loc3.push(loc1);
        }
        for (let loc in loc2) {
            loc4 = loc2[loc];
            loc5 = this.bubbles[loc4.x][loc4.y];
            loc6 = this.searchAroundBubble(loc5.row, loc5.col, false);
            let loc11 = 0;
            let loc12 = loc6;
            for (let loc in loc12) {
                loc7 = loc12[loc];
                loc8 = this.bubbles[loc7.x][loc7.y];
                if (!(loc3.indexOf(loc8) == -1 && loc8.row > 1)) {
                    continue;
                }
                loc3.push(loc8);
            }
        }
        return loc3;
    }

    /**彩色球 */
    public getMagicBubbleConnect(arg1: number, arg2: number): Array<Bubble> {
        let loc4 = null;
        let loc5 = null;
        let loc6 = null;
        let loc7 = null;
        let loc1 = this.bubbles[arg1][arg2];
        let loc2 = this.searchAroundBubble(arg1, arg2, false);
        let loc3 = [];
        if (loc1.row > 1) {
            loc3.push(loc1);
        }
        let loc8 = 0;
        let loc9 = loc2;
        for (let loc in loc2) {
            loc4 = loc2[loc]
            if ((loc5 = this.bubbles[loc4.x][loc4.y]).data.colorType == 0) {
                continue;
            }
            loc6 = this.searchConnectable(loc5.row, loc5.col, true);
            let loc10 = 0;
            let loc11 = loc6;
            for (let loc in loc11) {
                loc7 = loc6[loc]
                if (!(loc3.indexOf(loc7) == -1 && loc7.row > 1)) {
                    continue;
                }
                loc3.push(loc7);
            }
        }
        return loc3;
    }

    /**撞击后摇晃特效 */
    public doBackEffect(arg1: Array<Bubble>): void {
        let loc1: Bubble = null;
        for (let loc in arg1) {
            loc1 = arg1[loc]
            loc1.doBackEffect();
        }
        return;
    }

    /**渲染悬挂中的泡泡 */
    public updateUpBubble(): void {
        let loc2 = null;
        let loc3 = false;
        let row = 0;
        let col = 0;
        let disX = NaN;
        let disY = NaN;
        let dis = NaN;
        let loc9 = null;
        let loc10 = 0;
        let loc11 = 0;
        let loc12 = null;
        if (this.upBubbles.length == 0) {
            return;
        }
        let loc1 = (this.upBubbles.length - 1);
        while (loc1 >= 0) {
            loc2 = this.upBubbles[loc1];
            loc2.y = loc2.y + loc2.vy;
            loc3 = false;
            row = (this.bubbles.length - 1);
            while (row >= 0) {
                col = 0;
                while (col < this.bubbles[0].length) {
                    if (this.bubbles[row][col] != null) {
                        disX = this.bubbles[row][col].x - loc2.x;
                        disY = this.bubbles[row][col].y - loc2.y;
                        if ((dis = Math.sqrt(disX * disX + disY * disY)) < GameScene.BUBBLE_COLLIDE_DIS) {
                            if (loc9 = this.getDisMin(this.bubbles[row][col], loc2)) {
                                loc10 = Math.floor(loc9.x);
                                loc11 = Math.floor(loc9.y);
                                loc2.row = loc10;
                                loc2.col = loc11;
                                let pos = this.getBubbleLocation(loc10, loc11);
                                loc2.x = pos.x;
                                loc2.y = pos.y;
                                this.bubbles[loc10][loc11] = loc2;
                                loc12 = this.searchBackBubbles(loc10, loc11);
                                this.doBackEffect(loc12);
                                loc3 = true;
                                break;
                            }
                        }
                    }
                    ++col;
                }
                if (loc3) {
                    break;
                }
                --row;
            }
            if (loc3) {
                this.upBubbles.splice(loc1, 1);
                this.checkToAddVectorLen();
                this.checkContainerNeedMove();
            }
            --loc1;
        }
        return;
    }

    /**渲染掉落泡泡掉落动作 */
    public updateDropBubble(): void {
        let loc2: Bubble = null;
        let loc1 = (this.dropBubbles.length - 1);
        while (loc1 >= 0) {
            loc2 = this.dropBubbles[loc1];
            loc2.x = loc2.x + loc2.vx;
            if (loc2.x - GameScene.HALF_BUBBLE_SIZE < 0) {
                loc2.vx = loc2.vx * -1;
                loc2.x = GameScene.HALF_BUBBLE_SIZE;
            }
            else if (loc2.x + GameScene.HALF_BUBBLE_SIZE > UI.WINSIZE_W) {
                loc2.vx = loc2.vx * -1;
                loc2.x = UI.WINSIZE_W - GameScene.HALF_BUBBLE_SIZE;
            }
            loc2.vy = loc2.vy + 2;
            loc2.y = loc2.y + loc2.vy;
            if (loc2.y + this.bubbleContainer.y > GameScene.FLOOR_Y) {//到达底部,remove自身
                this.creatExpEffect(loc2.x, loc2.y, 1, false);
                this.createScoreTip(loc2.x, loc2.y, Number(loc2.data.score * 3));
                this.bubbleContainer.removeChild(loc2);
                this.dropBubbles.splice(loc1, 1);
            }
            --loc1;
        }
        return;
    }

    public handleBombBubble(arg1: Bubble): void {
        return;
    }

    public handleLightingBubble(arg1: Bubble): void {
        let loc2: Bubble = null;
        let loc1 = this.getBubblesByRow(arg1.row);
        this.creatExpEffect(arg1.x, arg1.y, 1);
        SoundCtrl.getInstance().playmusic("lightingExplosion");
        let loc3 = 0;
        for (let loc in loc1) {
            loc2 = loc1[loc];
            this.creatExpEffect(loc2.x, loc2.y, 2);
            this.createScoreTip(loc2.x, loc2.y, Number(loc2.data.score));
            this.bubbles[loc2.row][loc2.col] = null;
            loc2.parent.removeChild(loc2);
        }
        this.bubbleContainer.removeChild(this.shootBubble);
        this.shootBubble = null;
        this.removeHangBubble();
        this.startRemoveDrops();
        this.checkContainerNeedMove();
        this.checkWillShootBubbleColor();
        this.checkWin();
        return;
    }

    /**处理相同颜色撞击效果 */
    public handleBombSameColorBubble(arg1: Bubble): void {
        let loc1 = null;
        let checkBubble: Bubble = null;
        if (this.shootBubble.data.colorType != 0) {
            SoundCtrl.getInstance().playmusic("lightingExplosion");
            let checkBubbles = this.getBubblesByColor(this.shootBubble.data.colorType);
            let loc4 = 0;
            for (let loc in checkBubbles) {
                checkBubble = checkBubbles[loc];
                this.creatExpEffect(checkBubble.x, checkBubble.y, 2);
                this.createScoreTip(checkBubble.x, checkBubble.y, Number(checkBubble.data.score));
                this.bubbles[checkBubble.row][checkBubble.col] = null;
                this.bubbleContainer.removeChild(checkBubble);
            }
            this.bubbles[arg1.row][arg1.col] = null;
            arg1.parent.removeChild(arg1);
        }
        else {
            loc1 = this.searchBackBubbles(arg1.row, arg1.col);
            this.doBackEffect(loc1);
        }
        this.creatExpEffect(this.shootBubble.x, this.shootBubble.y, 1);
        this.createScoreTip(this.shootBubble.x, this.shootBubble.y, Number(this.shootBubble.data.score));
        this.bubbleContainer.removeChild(this.shootBubble);
        this.shootBubble = null;
        this.startRemoveDestoryList();
        this.removeHangBubble();
        this.checkContainerNeedMove();
        this.checkWillShootBubbleColor();
        this.checkWin();
        return;
    }

    /**上移bubble容器 */
    public UpBubbleContainer(): void {
        let loc1 = this.levelCfg.map.length * GameScene.BUBBBLE_DIS_H;
        let loc2 = GameScene.CONTAINER_MAX_Y - loc1;
        if (loc2 >= GameScene.SCOREINFO_HEIGHT) {//此时无需移动容器
            loc2 = GameScene.SCOREINFO_HEIGHT;
            this.needPreview = false;
            this.checkGameTip();
        }
        else {
            this.containerTargetY = loc2;
            this.needPreview = true;
        }
        return;
    }

    public checkGameTip(): void {
        if (this.levelCfg.tipId > 0) {
            EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_TIP_UI));
        }
        else {
            this.readyGo();
        }
        return;
    }

    public readyGo(): void {
        let ready = UI.addPic("res.ready", true, this);
        ready.scaleY = 2;
        ready.scaleX = 2;
        ready.x = UI.WINSIZE_W / 2;
        ready.y = UI.WINSIZE_H / 2;
        egret.Tween.get(ready).to({ "scaleX": 1, "scaleY": 1 }, 500);
        egret.setTimeout(function (): void {
            this.removeChild(ready);
            this.onReadyOK();
            return;
        }, this, 1001);
        SoundCtrl.getInstance().playmusic("ready");
        return;
    }

    public onReadyOK(): void {
        let go = UI.addPic("res.go", true, this);
        go.scaleY = 2;
        go.scaleX = 2;
        go.x = UI.WINSIZE_W / 2;
        go.y = UI.WINSIZE_H / 2;
        egret.Tween.get(go).to({ "scaleX": 1, "scaleY": 1 }, 500);
        egret.setTimeout(function (): void {
            this.removeChild(go);
            this.onGoOK();
            return;
        }, this, 1001);
        SoundCtrl.getInstance().playmusic("go");
        return;
    }

    public onGoOK(): void {
        this.switchTip = null;
        if (Model.levelModel.selectedLevel == 2) {
            this.createSwitchTip();
        }
        this.isReady = true;
        return;
    }

    public createSwitchTip(): void {
        this.switchTip = UI.addPic("res.switchTip", true, this, this.shooter.x, this.shooter.y - 130);
        this.switchTip.scaleY = 0.8;
        this.switchTip.scaleX = 0.8;
        this.switchTipAnimation();
        return;
    }

    public switchTipAnimation(): void {
        egret.Tween.get(this.switchTip, { loop: true })
            .to({ "y": this.shooter.y - 120 }, 1000).to({ "y": this.shooter.y - 130 }, 1000);
        return;
    }

    /**创造下一个泡泡 */
    public createPreViewBubble(): void {
        let loc1 = 0;
        if (this._step > 1) {
            if (this.isOver) {
                loc1 = Math.floor(Math.random() * 7 + 1);
            }
            else {
                loc1 = this.getValidBubbleId();
            }
            this.nextBubble = new Bubble(loc1);
            this.nextBubble.x = UI.WINSIZE_W / 1.2;
            this.nextBubble.y = this.LAUNCH_Y;
            this.addChild(this.nextBubble);
        }
        return;
    }

    public getValidBubbleId(): number {
        let loc4 = 0;
        let loc5 = 0;
        let loc1 = [];
        let loc2 = 0;
        while (loc2 < this.bubbles.length) {
            loc4 = 0;
            while (loc4 < this.bubbles[0].length) {
                if (!(this.bubbles[loc2][loc4] == null) && this.bubbles[loc2][loc4].data.colorType <= 7 && this.bubbles[loc2][loc4].data.colorType > 0) {
                    loc1.push(this.bubbles[loc2][loc4].data.colorType);
                }
                ++loc4;
            }
            ++loc2;
        }
        let loc3 = loc1.length;
        if (loc3 > 0) {
            loc5 = Math.floor(Math.random() * loc3);
            return loc1[loc5];
        }
        return 0;
    }

    public checkContainerNeedMove(): void {
        let col = 0;
        let row = 0;
        let hasBubble = false;
        row = (this.bubbles.length - 1);
        while (row >= 0) {
            col = 0;
            while (col < this.bubbles[0].length) {
                if (this.bubbles[row][col] != null) {
                    hasBubble = true;
                    break;
                }
                ++col;
            }
            if (hasBubble) {
                break;
            }
            --row;
        }
        if (hasBubble) {//该row行存在Bubble对象 
            let maxBubble_Y = this.getBubbleLocation(row, 0).y;
            let targetY = Math.min(GameScene.CONTAINER_MAX_Y - maxBubble_Y, GameScene.SCOREINFO_HEIGHT);
            let movetime = Math.max(500, Math.abs(this.bubbleContainer.y + maxBubble_Y - GameScene.CONTAINER_MAX_Y) * 5);
            egret.Tween.get(this.bubbleContainer).to({ "y": targetY }, movetime);
        }
        return;
    }

    /**判断是否满足胜利条件 */
    public checkWin(): void {
        let col = 0;
        let loc1 = false;
        let row = 0;
        while (row < this.bubbles.length) {
            if (loc1) {
                break;
            }
            col = 0;
            while (col < this.bubbles[0].length) {
                if (this.bubbles[row][col] != null) {
                    if (this.bubbles[row][col].data.effectType == BubbleEffectType.STAR_BUBBLE) {
                        loc1 = true;
                        break;
                    }
                }
                ++col;
            }
            ++row;
        }
        if (loc1) {//GameEnd
            if (this._step == 0) {
                this.handleLevelFailed();
            }
        }
        else {
            this.handleLevelVictor();
        }
        return;
    }

    public handleLevelFailed(): void {
        console.log("failed");
        egret.Tween.removeTweens(this.stepLabel);
        Model.levelModel.isSuccess = false;
        this.hideAimingLine();
        this.isOver = true;
        return;
    }

    public handleLevelVictor(): void {
        console.log("victory");
        egret.Tween.removeTweens(this.stepLabel);
        Model.levelModel.isSuccess = true;
        this.isOver = true;
        this.hideAimingLine();
        this.bubbleAllShoot();
        this.bubbleAllDrop();
        return;
    }

}

