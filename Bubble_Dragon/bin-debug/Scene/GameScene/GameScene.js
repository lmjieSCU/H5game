var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var GameScene = (function (_super) {
    __extends(GameScene, _super);
    function GameScene() {
        var _this = _super.call(this) || this;
        _this.LAUNCH_X = UI.WINSIZE_W / 2;
        _this.LAUNCH_Y = UI.WINSIZE_H * 0.9533;
        _this.shootLeftBubbleId = 0;
        _this.scale = 1;
        _this.destoryedBubbles = [];
        _this.dropBubbles = [];
        _this.aimingLines = [];
        _this.delayDropBubbles = [];
        _this.upBubbles = [];
        _this.resetData();
        _this.init();
        _this.newLevel(Model.levelModel.selectedLevel);
        return _this;
    }
    GameScene.prototype.resetData = function () {
        this.scale = UI.WINSIZE_W / 12 / 46;
        GameScene.BUBBLE_SIZE = 46 * this.scale;
        GameScene.HALF_BUBBLE_SIZE = 23 * this.scale;
        GameScene.BUBBBLE_DIS_H = 40 * this.scale;
        GameScene.FLOOR_Y = UI.WINSIZE_H - 100;
        GameScene.CONTAINER_MAX_Y = UI.WINSIZE_H * 2 / 3;
    };
    GameScene.prototype.onEnter = function () {
        GameScene.instance = this;
    };
    GameScene.prototype.onExit = function () {
        GameScene.instance = null;
    };
    /**游戏结束,将剩余子弹全部发射 */
    GameScene.prototype.bubbleAllShoot = function () {
        if (this._step > 0 && this.shootLeftBubbleId == 0) {
            this.shootLeftBubbleId = egret.setInterval(this.shootLeftBubble, this, 150);
        }
        return;
    };
    /**发射剩余的泡泡子弹 */
    GameScene.prototype.shootLeftBubble = function () {
        this.shooter.rotation = 0;
        var loc1 = new Bubble(this.launchBubble.data.id, this.scale);
        var loc2 = 90 - this.shooter.rotation;
        var loc3 = loc2 * Math.PI / 180;
        var loc4 = -(Math.random() * 5 + 20);
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
    };
    /**游戏胜利,所有泡泡均掉落 */
    GameScene.prototype.bubbleAllDrop = function () {
        var loc2 = null;
        var loc1 = this.getCurrentBubbles();
        for (var loc in loc1) {
            loc2 = loc1[loc];
            loc2.vy = GameScene.BUBBLE_DROP_SPEED;
            loc2.vx = 0;
            this.delayDropBubbles.push(loc2);
        }
        this.startRemoveDrops();
        loc1 = [];
        return;
    };
    GameScene.prototype.getCurrentBubbles = function () {
        var loc3 = 0;
        var loc1 = [];
        var loc2 = 0;
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
    };
    /**判断是否为同一颜色 */
    GameScene.prototype.isSameBubble = function (arg1, arg2) {
        if (arg1.data.colorType == arg2.data.colorType) {
            return true;
        }
        return false;
    };
    /**创建瞄准线,此时不可见 */
    GameScene.prototype.createAimingLine = function () {
        var loc2 = null;
        var loc1 = 0;
        while (loc1 < 30) {
            loc2 = new LittleBubble();
            this.addChild(loc2);
            this.aimingLines.push(loc2);
            loc2.visible = false;
            ++loc1;
        }
        return;
    };
    /**隐藏瞄准线,发射后隐藏,角度越界隐藏 */
    GameScene.prototype.hideAimingLine = function () {
        var loc1 = 0;
        loc1 = 0;
        while (loc1 < this.aimingLines.length) {
            this.aimingLines[loc1].visible = false;
            ++loc1;
        }
        return;
    };
    /**加盾 */
    GameScene.prototype.addShieldToLunchBubble = function (x, y) {
        if (!(this.launchBubble == null) && !this.launchBubble.hasShield) {
            this.launchBubble.hasShield = true;
            var tx = this.launchBubble.x;
            var ty = this.launchBubble.y;
            var shield_1 = UI.addPic("res.prop_6", true, this, this.propPanel.x + x, this.propPanel.y + y);
            egret.Tween.get(shield_1).to({ "x": tx, "y": ty }, 200);
            egret.setTimeout(function () {
                shield_1.parent.removeChild(shield_1);
                this.launchBubble.addShield();
                return;
            }, this, 201);
        }
        return;
    };
    // public shieldMoveEnd(): void {
    //     this.launchBubble.addShield();
    //     return;
    // }
    /**分数提示,且更新分数 */
    GameScene.prototype.createScoreTip = function (x, y, score) {
        var loc1 = new ScoreTip();
        loc1.x = x;
        loc1.y = y;
        loc1.setScore(score);
        this.bubbleContainer.addChild(loc1);
        Model.levelModel.currentScore = Model.levelModel.currentScore + score;
        if (Model.levelModel.currentScore > Model.levelModel.currentHighScore) {
            Model.levelModel.currentHighScore = Model.levelModel.currentScore;
        }
        this.gameInfo.updateInfo();
        var loc2 = Model.levelModel.currentScore / Number(this.levelCfg.starLevels[2]);
        this.gameInfo.setPercent(loc2);
        return;
    };
    /**显示出瞄准线 */
    GameScene.prototype.showAimingLine = function () {
        var loc2 = 0;
        var loc8 = null;
        var tempx = 0;
        var tempy = 0;
        var loc11 = false;
        var loc12 = 0;
        var loc13 = 0;
        var loc14 = NaN;
        var loc15 = NaN;
        var loc16 = NaN;
        var loc1 = this.shooter.rotation;
        loc2 = 0;
        while (loc2 < this.aimingLines.length) {
            this.aimingLines[loc2].visible = false;
            if (this.launchBubble != null) {
                this.aimingLines[loc2].setBubbleType(this.launchBubble.data.tempId);
            }
            ++loc2;
        }
        var loc3 = Math.cos(loc1 / 180 * Math.PI) * GameScene.MOVE_SPEED / 2;
        var loc4 = Math.sin(loc1 / 180 * Math.PI) * GameScene.MOVE_SPEED / 2;
        var oldtempx = this.LAUNCH_X + Math.sin(loc1 / 180 * Math.PI) * 90;
        var oldtempy = this.LAUNCH_Y - Math.cos(loc1 / 180 * Math.PI) * 90;
        var littleNum = 10;
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
    };
    /**新建关卡 */
    GameScene.prototype.newLevel = function (arg1) {
        Config.bubbleCfgParser.randomBubbleColor();
        this.levelCfg = Config.levelCfgParser.getLevelCfg(arg1);
        this.previewSpeed = -20;
        this.isOver = false;
        this.needPreview = false;
        this.shootBubble = null;
        this.nextBubble = null;
        this.addStepFlag = false;
        this.createBubbles();
        var loc1 = Model.levelModel.getLevelVO(arg1);
        if (loc1 == null) {
            Model.levelModel.currentHighScore = 0;
        }
        else {
            Model.levelModel.currentHighScore = loc1.highscore;
        }
        Model.levelModel.currentScore = 0;
        this.gameInfo.updateInfo();
        if (Model.levelModel.checkHasProp(PropType.PROP_7)) {
            this.setStep(this.levelCfg.step + 8);
        }
        else {
            this.setStep(this.levelCfg.step);
        }
        this.checkToAddVectorLen();
        return;
    };
    GameScene.prototype.close = function () {
        this.bubbleContainer.removeChildren();
        this.bubbles = null;
        egret.Tween.removeAllTweens();
        return;
    };
    GameScene.prototype.creatExpEffect = function (x, y, arg3, arg4) {
        if (arg4 === void 0) { arg4 = true; }
        var effect = new ExpEffect();
        effect.x = x;
        effect.y = y;
        this.bubbleContainer.addChild(effect);
        SoundCtrl.getInstance().playmusic("bubbleExp");
        return;
    };
    /**获得距离最近的位置坐标 */
    GameScene.prototype.getDisMin = function (arg1, arg2) {
        var disX = 0;
        var disY = 0;
        var mindis = 0;
        var pos = null;
        var closestLoc = null;
        var testLoc = new egret.Point(0, 0);
        var testLocs = this.searchAroundBubble(arg1.row, arg1.col);
        var oldMinDis = 99999999999;
        var loc12 = 0;
        for (var loc in testLocs) {
            testLoc = testLocs[loc];
            if (this.bubbles[testLoc.x][testLoc.y] != null) {
                continue;
            }
            var pos_1 = this.getBubbleLocation(testLoc.x, testLoc.y);
            disX = pos_1.x - arg2.x;
            disY = pos_1.y - arg2.y;
            mindis = disX * disX + disY * disY;
            if (!(mindis < oldMinDis)) {
                continue;
            }
            closestLoc = new egret.Point(testLoc.x, testLoc.y);
            oldMinDis = mindis;
        }
        return closestLoc;
    };
    /**返回周围合法位置
     * arg3为true时不判断该位置是否为空
     */
    GameScene.prototype.searchAroundBubble = function (row, col, arg3) {
        if (arg3 === void 0) { arg3 = true; }
        var temprow = 0;
        var tempcol = 0;
        var loc1 = [];
        var loc2 = [];
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
        var loc5 = 0;
        while (loc5 < loc1.length) {
            temprow = loc1[loc5].x + row;
            tempcol = loc1[loc5].y + col;
            if (!(temprow < 0 || temprow >= this.bubbles.length || tempcol < 0 || tempcol >= this.bubbles[0].length)) {
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
    };
    /**返回需要进行摇晃特效的bubbles */
    GameScene.prototype.searchBackBubbles = function (row, col) {
        var loc4 = null;
        var loc5 = null;
        var loc6 = [];
        var loc7 = null;
        var loc8 = null;
        var loc9 = null;
        var loc10 = null;
        var loc11 = null;
        var bubble = this.bubbles[row][col];
        var loc2 = this.searchAroundBubble(row, col, false);
        var ans = [];
        var loc12 = 0;
        for (var loc in loc2) {
            loc4 = loc2[loc];
            loc5 = this.bubbles[loc4.x][loc4.y];
            if (ans.indexOf(loc5) == -1) {
                ans.push(loc5);
                loc5.backRadians = Math.atan2(loc5.y - bubble.y, loc5.x - bubble.x);
                loc5.backLevel = 1;
            }
            loc6 = this.searchAroundBubble(loc5.row, loc5.col, false);
            for (var loc_1 in loc6) {
                loc7 = loc6[loc_1];
                loc8 = this.bubbles[loc7.x][loc7.y];
                if (ans.indexOf(loc8) == -1) {
                    ans.push(loc8);
                    loc8.backRadians = Math.atan2(loc8.y - loc5.y, loc8.x - loc5.x);
                    loc8.backLevel = 2;
                }
                loc9 = this.searchAroundBubble(loc8.row, loc8.col, false);
                for (var loc_2 in loc9) {
                    loc10 = loc9[loc_2];
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
    };
    /**交换待发射泡泡和下一发泡泡 */
    GameScene.prototype.switchShootBubble = function () {
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
    };
    /**交换完成后恢复数据 */
    GameScene.prototype.switchEnd = function () {
        var loc1 = this.launchBubble;
        this.launchBubble = this.nextBubble;
        this.nextBubble = loc1;
        this.isSwitching = false;
        return;
    };
    /**使用道具后改变当前发射泡泡 */
    GameScene.prototype.changeLunchBubble = function (id, x, y) {
        if (this.launchBubble != null) {
            if (this.launchBubble.data.id == id) {
                return;
            }
            var tx = this.launchBubble.x;
            var ty = this.launchBubble.y;
            var tempLunchBubble = new Bubble(id);
            tempLunchBubble.x = this.propPanel.x + x + 29;
            tempLunchBubble.y = this.propPanel.y + y + 29;
            this.addChild(tempLunchBubble);
            egret.Tween.get(tempLunchBubble).to({ "x": tx, "y": ty }, 200)
                .call(this.onchangeLunchBubbleComplete, this, [tempLunchBubble]);
        }
        return;
    };
    GameScene.prototype.onchangeLunchBubbleComplete = function (arg1) {
        this.removeChild(this.launchBubble);
        this.launchBubble = null;
        this.launchBubble = new Bubble(arg1.data.id);
        this.launchBubble.x = this.LAUNCH_X;
        this.launchBubble.y = this.LAUNCH_Y;
        this.addChild(this.launchBubble);
        this.removeChild(arg1);
        return;
    };
    GameScene.prototype.getBubblesByRow = function (arg1) {
        var loc1 = [];
        var loc2 = 0;
        while (loc2 < this.bubbles[0].length) {
            if (this.bubbles[arg1][loc2] != null) {
                loc1.push(this.bubbles[arg1][loc2]);
            }
            ++loc2;
        }
        return loc1;
    };
    GameScene.prototype.init = function () {
        //===============================map=================================================
        var loc1 = Math.floor((Model.levelModel.selectedLevel - 1) / 18) + 1;
        loc1 = (loc1 - 1) % 4 + 1;
        var mapbg = UI.addPic("worldBg_" + loc1 + "_jpg", true, this, UI.WINSIZE_W / 2, UI.WINSIZE_H / 2);
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
        var topboarder = UI.addPic("res.topboarder", false, this, 0, this.gameInfo.topinfo.height);
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
        var cannon_base = UI.addPic("res.Cannon_Base", false, this, UI.WINSIZE_W / 2, UI.WINSIZE_H);
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
    };
    /**点击交换按钮 */
    GameScene.prototype.onChangeTouch = function (arg1) {
        this.switchShootBubble();
        return;
    };
    /**按住地图调整弹道 */
    GameScene.prototype.onMapTouchMove = function (e) {
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
        var loc3 = e.stageX - this.LAUNCH_X;
        var loc4 = e.stageY - this.LAUNCH_Y;
        var loc5 = Math.atan2(loc4, loc3) * 45 + 72;
        if (loc5 >= -60 && loc5 <= 60) {
            this.shooter.rotation = loc5;
            this.showAimingLine();
        }
        else {
            this.hideAimingLine();
        }
    };
    /**松开按键发送泡泡 */
    GameScene.prototype.onTouch = function (e) {
        this.previewSpeed = -20;
        if (this.isOver || !this.isReady) {
            return;
        }
        this.hideAimingLine();
        if (this.shootBubble != null) {
            return;
        }
        var loc3 = e.stageX - this.LAUNCH_X;
        var loc4 = e.stageY - this.LAUNCH_Y;
        var loc5 = Math.atan2(loc4, loc3) * 45 + 72;
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
            if (this.launchBubble.hasShield) {
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
    };
    /**返回由相同颜色组成的Bubble数组 */
    GameScene.prototype.getBubblesByColor = function (arg1) {
        var col = 0;
        var loc1 = [];
        var row = 0;
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
    };
    /**设置步数 */
    GameScene.prototype.setStep = function (arg1, arg2) {
        if (arg2 === void 0) { arg2 = true; }
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
    };
    /**警告步数不足 */
    GameScene.prototype.showStepLessWarn = function () {
        egret.Tween.removeTweens(this.stepLabel);
        egret.Tween.get(this.stepLabel, { loop: true }).to({ "alpha": 0 }, 200).to({ "alpha": 1 }, 200);
        return;
    };
    /**创造发射泡泡 */
    GameScene.prototype.createLunchBubble = function (arg1) {
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
    };
    /**创造待击落泡泡群 */
    GameScene.prototype.createBubbles = function () {
        var cfg = null;
        var bubble = null;
        var temp = null;
        var i = 0;
        var j = 0;
        while (i < this.levelCfg.map.length) {
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
    };
    /**从row,col中获得Bubble位置 */
    GameScene.prototype.getBubbleLocation = function (row, col) {
        var x = col * (GameScene.BUBBLE_SIZE + GameScene.SPACING) + row % 2 * GameScene.HALF_BUBBLE_SIZE + GameScene.HALF_BUBBLE_SIZE;
        var y = (row - 2) * (GameScene.BUBBBLE_DIS_H + GameScene.SPACING) + GameScene.TOP_BOARDER_HEIGHT + GameScene.HALF_BUBBLE_SIZE;
        return new egret.Point(x, y);
    };
    /**创造待击落泡泡 */
    GameScene.prototype.createBubble = function (row, col, id) {
        var loc1 = new Bubble(id, this.scale);
        loc1.row = row;
        loc1.col = col;
        var pos = this.getBubbleLocation(row, col);
        loc1.x = pos.x;
        loc1.y = pos.y;
        this.bubbleContainer.addChild(loc1);
        return loc1;
    };
    /**帧驱动事件 */
    GameScene.prototype.onUpdate = function (arg1) {
        this.updateDropBubble();
        if (this.isOver && this.dropBubbles.length == 0 && this.destoryedBubbles.length == 0 && this.shootLeftBubbleId == 0) {
            console.log("end");
            GameRender.I.Remove(this);
            EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_GAME_END_UI));
        }
        if (this.isOver) {
            return;
        }
        if (this.needPreview) {
            this.bubbleContainer.y = this.bubbleContainer.y + this.previewSpeed;
            if (this.bubbleContainer.y <= this.containerTargetY) {
                this.needPreview = false;
                this.checkGameTip();
                this.bubbleContainer.y = this.containerTargetY;
            }
        }
        this.updateShootBubble();
        this.updateUpBubble();
        return;
    };
    /**渲染已发射泡泡 */
    GameScene.prototype.updateShootBubble = function () {
        var loc5 = false;
        var checking_Bubble = null;
        var disX = 0;
        var disY = 0;
        var loc9 = NaN;
        var loc10 = null;
        var loc11 = null;
        if (this.shootBubble == null) {
            return;
        }
        this.shootBubble.x = this.shootBubble.x + this.shootBubble.vx;
        this.shootBubble.y = this.shootBubble.y + this.shootBubble.vy;
        if (this.shootBubble.data.effectType == BubbleEffectType.BOMB_FIRE) {
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
        else if (this.shootBubble.x < GameScene.BUBBLE_SIZE * 0.5) {
            this.shootBubble.x = GameScene.BUBBLE_SIZE * 0.5;
            this.shootBubble.vx = this.shootBubble.vx * -1;
        }
        else if (this.shootBubble.x > UI.WINSIZE_W - GameScene.BUBBLE_SIZE * 0.5) {
            this.shootBubble.x = UI.WINSIZE_W - GameScene.BUBBLE_SIZE * 0.5;
            this.shootBubble.vx = this.shootBubble.vx * -1;
        }
        var loc1 = -1;
        var loc2 = -1;
        if (this.shootBubble != null) {
            loc5 = false;
            var row = (this.bubbles.length - 1);
            var col = 0;
            while (row >= 0) {
                col = 0;
                while (col < this.bubbles[0].length) {
                    if ((checking_Bubble = this.bubbles[row][col]) != null) {
                        var dx = checking_Bubble.x - this.shootBubble.x;
                        var dy = checking_Bubble.y - this.shootBubble.y;
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
                                    if (checking_Bubble.data.effectType == BubbleEffectType.BOMB_SAMECOLOR) {
                                        this.handleBombSameColorBubble(checking_Bubble);
                                        loc5 = true;
                                        break;
                                    }
                                }
                                else {
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
            if (loc1 > -1 && loc2 > -1) {
                this.shootBubble.row = loc1;
                this.shootBubble.col = loc2;
                var pos = this.getBubbleLocation(loc1, loc2);
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
    };
    GameScene.prototype.checkWillShootBubbleColor = function () {
        var loc1 = 0;
        var loc2 = 0;
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
    };
    /** 将delayDropBubbles中的bubble设置属性后
     * push入dropBubbles
     * 清空delayDropBubbles
    */
    GameScene.prototype.startRemoveDrops = function () {
        var loc1 = null;
        for (var loc in this.delayDropBubbles) {
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
    };
    /**遍历Bubble数组
     * 将无连接的Bubble加入delayDropBubbles */
    GameScene.prototype.removeHangBubble = function () {
        var bubble = null;
        var loc5 = [];
        var loc6 = [];
        var loc7 = [];
        var loc8 = false;
        var row = (this.bubbles.length - 1);
        var col = 0;
        while (row >= 1) {
            col = 0;
            while (col < this.bubbles[0].length) {
                if ((bubble = this.bubbles[row][col]) != null) {
                    if (loc7.indexOf(this.bubbles[row][col]) == -1) {
                        //检测周围的Bubble
                        var loc4 = this.searchConnectable(row, col, false);
                        for (var loc = 0; loc < loc4.length; loc++) {
                            loc7.push(loc4[loc]);
                        }
                        if (loc4.length != 0) {
                            loc8 = false;
                            for (var loc in loc4) {
                                var item = loc4[loc];
                                if (!(item.row == 0 || item.data.effectType == BubbleEffectType.STONE_DISABLE_BUBBLE)) {
                                    continue;
                                }
                                loc8 = true;
                                break;
                            }
                            if (!loc8) {
                                for (var loc in loc4) {
                                    var item = loc4[loc];
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
        var loc9 = this.checkHasBubbleByType(loc5, BubbleEffectType.STONE_DISABLE_BUBBLE);
        if (loc9 != null) {
            var loc14 = this.searchConnectable(loc9.row, loc9.col, false);
            for (var loc in loc5) {
                var item = loc5[loc];
                if (loc14.indexOf(item) != -1) {
                    continue;
                }
                loc6.push(item);
            }
            for (var loc in loc6) {
                var item = loc6[loc];
                item.vx = 0;
                this.bubbles[item.row][item.col] = null;
                this.delayDropBubbles.push(item);
            }
        }
        else {
            for (var loc in loc5) {
                var item = loc5[loc];
                item.vx = 0;
                this.bubbles[item.row][item.col] = null;
                this.delayDropBubbles.push(item);
            }
        }
        return;
    };
    GameScene.prototype.checkHasBubbleByType = function (arg1, arg2) {
        var loc1 = null;
        var loc2 = 0;
        var loc3 = arg1;
        for (var loc in arg1) {
            loc1 = arg1[loc];
            if (loc1.data.effectType != arg2) {
                continue;
            }
            return loc1;
        }
        return null;
    };
    GameScene.prototype.checkToAddVectorLen = function () {
        var loc3 = null;
        var loc4 = 0;
        var loc1 = false;
        var loc2 = 0;
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
    };
    /**以shootBubble为起点检查是否满足连接要求,移除bubbles */
    GameScene.prototype.checkToRemoveBubble = function (shootBubble) {
        var connectBubbles = null;
        var destroyBubble = null;
        var loc7 = null;
        var loc8 = null;
        var loc9 = null;
        var loc10 = null;
        var loc11 = null;
        var loc12 = null;
        var row = shootBubble.row;
        var col = shootBubble.col;
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
        var loc4 = 0;
        var loc5 = [];
        var loc13 = 0;
        for (var loc in connectBubbles) {
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
            var loc15 = 0;
            for (var loc_3 in loc8) {
                loc9 = loc8[loc_3];
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
        for (var loc in loc5) {
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
    };
    GameScene.prototype.startRemoveDestoryList = function () {
        this.removeDestoryedTimer.start();
        return;
    };
    /**移除bubbles
     * 首先从容器中移除
     * 之后执行startRemoveDrops()
     */
    GameScene.prototype.removeDestoryedBubble = function (arg1) {
        var destoryedBubble = null;
        var loc2 = null;
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
                loc2 = new Bubble(destoryedBubble.data.id, this.scale);
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
    };
    GameScene.prototype.createUpBubble = function () {
        var id = Math.floor(Math.random() * 7 + 1);
        var loc2 = new Bubble(id, this.scale);
        var loc3 = Math.floor(Math.random() * 10);
        loc2.x = loc3 * (GameScene.BUBBLE_SIZE + GameScene.SPACING) + GameScene.HALF_BUBBLE_SIZE + GameScene.HALF_BUBBLE_SIZE;
        loc2.y = GameScene.BUBBBLE_DIS_H * this.bubbles.length + 700;
        loc2.vy = -30;
        this.upBubbles.push(loc2);
        this.bubbleContainer.addChild(loc2);
        return;
    };
    GameScene.prototype.creatBombExpEffect = function (arg1, arg2) {
        var loc1 = new BombExpEffect();
        loc1.x = arg1;
        loc1.y = arg2;
        this.bubbleContainer.addChild(loc1);
        return;
    };
    /**以bubbles[row][col]为起点检查是否可连接
     * 返回可连接Bubbles数组
     * arg3为连接类型
     * arg3为true时为基础连接,要求颜色相同
     */
    GameScene.prototype.searchConnectable = function (row, col, arg3) {
        if (arg3 === void 0) { arg3 = true; }
        var loc3 = 0;
        var bubble = null;
        var checkBubble = null;
        var checkPoint = null;
        var loc1 = [];
        var connect_bubbles = [];
        var aroundPoints = [];
        var loc7 = [];
        loc1.push(this.bubbles[row][col]);
        while (loc1.length > 0) {
            bubble = loc1.shift();
            if ((aroundPoints = this.searchAroundBubble(bubble.row, bubble.col, false)).length < 1) {
                //周围合法位置为空
                break;
            }
            var loc9 = 0;
            //依次遍历周围合法位置并进行判断,若满足连接要求则加入待检测Bubbles数组与connect_bubbles数组
            for (var loc in aroundPoints) {
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
    };
    /**炸弹球 */
    GameScene.prototype.getBombBubbleConnect = function (arg1, arg2) {
        var loc4 = null;
        var loc5 = null;
        var loc6 = null;
        var loc7 = null;
        var loc8 = null;
        var loc1 = this.bubbles[arg1][arg2];
        var loc2 = this.searchAroundBubble(arg1, arg2, false);
        var loc3 = [];
        if (loc1.row > 1) {
            loc3.push(loc1);
        }
        for (var loc in loc2) {
            loc4 = loc2[loc];
            loc5 = this.bubbles[loc4.x][loc4.y];
            loc6 = this.searchAroundBubble(loc5.row, loc5.col, false);
            var loc11 = 0;
            var loc12 = loc6;
            for (var loc_4 in loc12) {
                loc7 = loc12[loc_4];
                loc8 = this.bubbles[loc7.x][loc7.y];
                if (!(loc3.indexOf(loc8) == -1 && loc8.row > 1)) {
                    continue;
                }
                loc3.push(loc8);
            }
        }
        return loc3;
    };
    /**彩色球 */
    GameScene.prototype.getMagicBubbleConnect = function (arg1, arg2) {
        var loc4 = null;
        var loc5 = null;
        var loc6 = null;
        var loc7 = null;
        var loc1 = this.bubbles[arg1][arg2];
        var loc2 = this.searchAroundBubble(arg1, arg2, false);
        var loc3 = [];
        if (loc1.row > 1) {
            loc3.push(loc1);
        }
        var loc8 = 0;
        var loc9 = loc2;
        for (var loc in loc2) {
            loc4 = loc2[loc];
            if ((loc5 = this.bubbles[loc4.x][loc4.y]).data.colorType == 0) {
                continue;
            }
            loc6 = this.searchConnectable(loc5.row, loc5.col, true);
            var loc10 = 0;
            var loc11 = loc6;
            for (var loc_5 in loc11) {
                loc7 = loc6[loc_5];
                if (!(loc3.indexOf(loc7) == -1 && loc7.row > 1)) {
                    continue;
                }
                loc3.push(loc7);
            }
        }
        return loc3;
    };
    /**撞击后摇晃特效 */
    GameScene.prototype.doBackEffect = function (arg1) {
        var loc1 = null;
        for (var loc in arg1) {
            loc1 = arg1[loc];
            loc1.doBackEffect();
        }
        return;
    };
    /**渲染悬挂中的泡泡 */
    GameScene.prototype.updateUpBubble = function () {
        var loc2 = null;
        var loc3 = false;
        var row = 0;
        var col = 0;
        var disX = NaN;
        var disY = NaN;
        var dis = NaN;
        var loc9 = null;
        var loc10 = 0;
        var loc11 = 0;
        var loc12 = null;
        if (this.upBubbles.length == 0) {
            return;
        }
        var loc1 = (this.upBubbles.length - 1);
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
                                var pos = this.getBubbleLocation(loc10, loc11);
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
    };
    /**渲染掉落泡泡掉落动作 */
    GameScene.prototype.updateDropBubble = function () {
        var loc2 = null;
        var loc1 = (this.dropBubbles.length - 1);
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
            if (loc2.y + this.bubbleContainer.y > GameScene.FLOOR_Y) {
                this.creatExpEffect(loc2.x, loc2.y, 1, false);
                this.createScoreTip(loc2.x, loc2.y, Number(loc2.data.score * 3));
                this.bubbleContainer.removeChild(loc2);
                this.dropBubbles.splice(loc1, 1);
            }
            --loc1;
        }
        return;
    };
    GameScene.prototype.handleBombBubble = function (arg1) {
        return;
    };
    GameScene.prototype.handleLightingBubble = function (arg1) {
        var loc2 = null;
        var loc1 = this.getBubblesByRow(arg1.row);
        this.creatExpEffect(arg1.x, arg1.y, 1);
        SoundCtrl.getInstance().playmusic("lightingExplosion");
        var loc3 = 0;
        for (var loc in loc1) {
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
    };
    /**处理相同颜色撞击效果 */
    GameScene.prototype.handleBombSameColorBubble = function (arg1) {
        var loc1 = null;
        var checkBubble = null;
        if (this.shootBubble.data.colorType != 0) {
            SoundCtrl.getInstance().playmusic("lightingExplosion");
            var checkBubbles = this.getBubblesByColor(this.shootBubble.data.colorType);
            var loc4 = 0;
            for (var loc in checkBubbles) {
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
    };
    /**上移bubble容器 */
    GameScene.prototype.UpBubbleContainer = function () {
        var loc1 = this.levelCfg.map.length * GameScene.BUBBBLE_DIS_H;
        var loc2 = GameScene.CONTAINER_MAX_Y - loc1;
        if (loc2 >= GameScene.SCOREINFO_HEIGHT) {
            loc2 = GameScene.SCOREINFO_HEIGHT;
            this.needPreview = false;
            this.checkGameTip();
        }
        else {
            this.containerTargetY = loc2;
            this.needPreview = true;
        }
        return;
    };
    GameScene.prototype.checkGameTip = function () {
        if (this.levelCfg.tipId > 0) {
            EventManager.dispatchEvent(new GameEvents(GameEvents.OPEN_TIP_UI));
        }
        else {
            this.readyGo();
        }
        return;
    };
    GameScene.prototype.readyGo = function () {
        var ready = UI.addPic("res.ready", true, this);
        ready.scaleY = 2;
        ready.scaleX = 2;
        ready.x = UI.WINSIZE_W / 2;
        ready.y = UI.WINSIZE_H / 2;
        egret.Tween.get(ready).to({ "scaleX": 1, "scaleY": 1 }, 500);
        egret.setTimeout(function () {
            this.removeChild(ready);
            this.onReadyOK();
            return;
        }, this, 1001);
        SoundCtrl.getInstance().playmusic("ready");
        return;
    };
    GameScene.prototype.onReadyOK = function () {
        var go = UI.addPic("res.go", true, this);
        go.scaleY = 2;
        go.scaleX = 2;
        go.x = UI.WINSIZE_W / 2;
        go.y = UI.WINSIZE_H / 2;
        egret.Tween.get(go).to({ "scaleX": 1, "scaleY": 1 }, 500);
        egret.setTimeout(function () {
            this.removeChild(go);
            this.onGoOK();
            return;
        }, this, 1001);
        SoundCtrl.getInstance().playmusic("go");
        return;
    };
    GameScene.prototype.onGoOK = function () {
        this.switchTip = null;
        if (Model.levelModel.selectedLevel == 2) {
            this.createSwitchTip();
        }
        this.isReady = true;
        return;
    };
    GameScene.prototype.createSwitchTip = function () {
        this.switchTip = UI.addPic("res.switchTip", true, this, this.shooter.x, this.shooter.y - 130);
        this.switchTip.scaleY = 0.8;
        this.switchTip.scaleX = 0.8;
        this.switchTipAnimation();
        return;
    };
    GameScene.prototype.switchTipAnimation = function () {
        egret.Tween.get(this.switchTip, { loop: true })
            .to({ "y": this.shooter.y - 120 }, 1000).to({ "y": this.shooter.y - 130 }, 1000);
        return;
    };
    /**创造下一个泡泡 */
    GameScene.prototype.createPreViewBubble = function () {
        var loc1 = 0;
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
    };
    GameScene.prototype.getValidBubbleId = function () {
        var loc4 = 0;
        var loc5 = 0;
        var loc1 = [];
        var loc2 = 0;
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
        var loc3 = loc1.length;
        if (loc3 > 0) {
            loc5 = Math.floor(Math.random() * loc3);
            return loc1[loc5];
        }
        return 0;
    };
    GameScene.prototype.checkContainerNeedMove = function () {
        var col = 0;
        var row = 0;
        var hasBubble = false;
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
        if (hasBubble) {
            var maxBubble_Y = this.getBubbleLocation(row, 0).y;
            var targetY = Math.min(GameScene.CONTAINER_MAX_Y - maxBubble_Y, GameScene.SCOREINFO_HEIGHT);
            var movetime = Math.max(500, Math.abs(this.bubbleContainer.y + maxBubble_Y - GameScene.CONTAINER_MAX_Y) * 5);
            egret.Tween.get(this.bubbleContainer).to({ "y": targetY }, movetime);
        }
        return;
    };
    /**判断是否满足胜利条件 */
    GameScene.prototype.checkWin = function () {
        var col = 0;
        var loc1 = false;
        var row = 0;
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
        if (loc1) {
            if (this._step == 0) {
                this.handleLevelFailed();
            }
        }
        else {
            this.handleLevelVictor();
        }
        return;
    };
    GameScene.prototype.handleLevelFailed = function () {
        console.log("failed");
        egret.Tween.removeTweens(this.stepLabel);
        Model.levelModel.isSuccess = false;
        this.hideAimingLine();
        this.isOver = true;
        return;
    };
    GameScene.prototype.handleLevelVictor = function () {
        console.log("victory");
        egret.Tween.removeTweens(this.stepLabel);
        Model.levelModel.isSuccess = true;
        this.isOver = true;
        this.hideAimingLine();
        this.bubbleAllShoot();
        this.bubbleAllDrop();
        return;
    };
    GameScene.BUBBLE_DROP_SPEED = -4;
    GameScene.SPACING = 0;
    GameScene.BUBBLE_SIZE = 46;
    GameScene.HALF_BUBBLE_SIZE = 23;
    GameScene.BUBBBLE_DIS_H = 40;
    GameScene.MOVE_SPEED = 50;
    GameScene.BUBBLE_COLLIDE_DIS = 40; //泡泡撞击检测距离阈值
    GameScene.FLOOR_Y = 550;
    GameScene.SCOREINFO_HEIGHT = 0;
    GameScene.CONTAINER_MAX_Y = 350;
    GameScene.TOP_BOARDER_HEIGHT = 14;
    return GameScene;
}(Scene));
__reflect(GameScene.prototype, "GameScene");
//# sourceMappingURL=GameScene.js.map