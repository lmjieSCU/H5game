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
var LifeAndPower = (function (_super) {
    __extends(LifeAndPower, _super);
    // private _parent: SplashScene
    function LifeAndPower(p1Data, p2Data) {
        if (p1Data === void 0) { p1Data = null; }
        if (p2Data === void 0) { p2Data = null; }
        var _this = _super.call(this) || this;
        _this.p1Data = null;
        _this.p2Data = null;
        _this.lifes = [
            { id: "roleK", name: "fightui_103_png", img: "fightui_5_png" }
        ]; //获取对应的名字资源与头像资源
        _this.lifeNumResource = ["fightui_71_png", "fightui_73_png", "fightui_75_png", "fightui_77_png"]; //生命条数的图像资源
        _this.powerNumResource = ["Fight_anger_0_png", "Fight_anger_1_png", "Fight_anger_2_png", "Fight_anger_3_png"]; //能量条数的图片资源
        _this.burstResource = [
            { name: "fightui_55_png", style: "fightui_48_png" },
            { name: "fightui_57_png", style: "fightui_50_png" },
            { name: "fightui_59_png", style: "fightui_52_png" }
        ]; //burst不同状态的资源
        //player的属性
        _this.p1 = { id: "k", life: 100, power: 100, burst: 0, lifeNum: 2, powerNum: 3 };
        _this.p2 = { id: "k", life: 100, power: 100, burst: 0, lifeNum: 2, powerNum: 3 };
        _this.p1_burst = false; //是否是burst状态
        _this.p2_burst = false;
        _this.player = SplashScene.instance.P2OwnTheBtn ? 2 : 1; //判断操作者是p1还是p2
        _this.redRate = 5; //血量闪红的频率
        _this.maxRate = 5; //满能量的闪烁频率
        _this.life_p = 10; //伤害系数
        _this.frameNum = SplashScene.instance.stage.frameRate;
        _this.timeLen = SplashScene.instance.time;
        _this.timeStart = true;
        // this._parent = _parent;
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        FightMainRender.getInstance().Add(_this, _this.update);
        _this.addEventListener(egret.TouchEvent.REMOVED_FROM_STAGE, _this.onExit, _this);
        if (p1Data != null && p2Data != null) {
            _this.p1Data = p1Data;
            _this.p2Data = p2Data;
        }
        return _this;
    }
    LifeAndPower.prototype.onEnter = function () {
        var p1 = _level0.P1_role;
        var p2 = _level0.P2_role;
        this.p1.lifeNum = Math.ceil(p1.life / 100);
        this.p1.life = p1.life - (this.p1.lifeNum - 1) * 100;
        this.p1.power = 0;
        this.p1.powerNum = p1.superPoint;
        this.p2.lifeNum = Math.ceil(p2.life / 100);
        this.p2.life = p2.life - (this.p2.lifeNum - 1) * 100;
        this.p2.power = 0;
        this.p2.powerNum = p2.superPoint;
        if (this.p1Data != null) {
            this.p1.power = this.p1Data.power;
            this.p1.powerNum = this.p1Data.powerNum;
            p1.superPoint = this.p1.powerNum;
            p1.winTimes = this.p1Data.winTimes;
        }
        if (this.p2Data != null) {
            this.p2.power = this.p2Data.power;
            this.p2.powerNum = this.p2Data.powerNum;
            p2.superPoint = this.p2.powerNum;
            p2.winTimes = this.p2Data.winTimes;
        }
        var p1_winTimes = p1.winTimes;
        var p2_winTimes = p2.winTimes;
        this.p1.id = p1._roleName;
        this.p2.id = p2._roleName; //获取属性
        this.time = new egret.DisplayObjectContainer();
        var timeBg = UI.addPic(this.time, "vs_icon_png", 0, 0, false, 0.5);
        this.time.width = timeBg.width * timeBg.scaleX;
        this.time.height = timeBg.height * timeBg.scaleY;
        this.time.anchorOffsetX = this.time.width / 2;
        this.time.x = UI.WINSIZE_W / 2;
        this.time.y = this.time.height / 2;
        this.timeNum = new egret.DisplayObjectContainer();
        if (SplashScene.instance.time == 0) {
            UI.addPic(this.timeNum, "hitnum0_png", 0, 0);
        }
        else {
            UI.addPic(this.timeNum, "hitnum" + SplashScene.instance.time / 10 + "_png", 0, 0);
            UI.addPic(this.timeNum, "hitnum0_png", 45, 0);
        }
        this.time.addChild(this.timeNum);
        this.addChild(this.time);
        this.p1_life = new egret.DisplayObjectContainer();
        // let img1: egret.Bitmap = UI.addPic(this, 'fightui_5_png', 30, 20, true, 0.325);
        var life1 = UI.addPic(this, "Fight_blood_bg_png", 0, 0);
        this.p1_life.width = life1.width;
        this.p1_life.height = life1.height;
        var scaleLife = UI.WINSIZE_W / 2 / this.p1_life.width;
        this.p1_life.y = this.p1_life.height / 2;
        this.p1_life.anchorOffsetX = this.p1_life.width / 2;
        this.p1_life.x = UI.WINSIZE_W / 2 - this.p1_life.width / 2 * scaleLife;
        // this.p1_life.addChild(img1);
        this.p1_life.addChild(life1);
        // let name1: egret.Bitmap = UI.addPic(this, this.getName(this.p1.id), this.p1_life.width / 5 * 2, this.p1_life.height / 4 * 3, true);
        // this.p1_life.addChild(name1);
        // UI.addPic(this, "Fight_head_png", this.p1_life.x - this.p1_life.width/2, this.p1_life.y + this.p1_life.height/2, true);
        var blood1 = UI.addPic(this, "Fight_blood_left_png", this.p1_life.width - 5, this.p1_life.height / 2 + 5, true);
        blood1.anchorOffsetX = blood1.width;
        // this.p1_lifeRed = new egret.Shape();
        // this.p1_lifeRed.graphics.beginFill(0xfff);
        // this.p1_lifeRed.graphics.drawRect(0, blood1.y - blood1.height/2, blood1.width, blood1.height);
        // this.p1_lifeRed.graphics.endFill();
        // // this.p1_lifeRed.anchorOffsetX = this.p1_lifeRed.width;
        // this.p1_lifeRed.x = blood1.x - blood1.width;
        // this.p1_life.addChild(this.p1_lifeRed);
        // this.p1_lifeRed.alpha = 0;//闪烁红血
        // this.p1_redBloodMask = new egret.Shape();
        // this.p1_redBloodMask.graphics.beginFill(0xfff);
        // this.p1_redBloodMask.graphics.drawRect(0, blood1.y - blood1.height/2, blood1.width, blood1.height);
        // this.p1_redBloodMask.graphics.endFill();
        // // this.p1_redBloodMask.anchorOffsetX = this.p1_redBloodMask.width;
        // this.p1_redBloodMask.x = blood1.x - blood1.width;
        // this.p1_life.addChild(this.p1_redBloodMask);//延时红血
        this.p1_life.addChild(blood1);
        this.p1_lifeMask = new egret.Shape();
        this.p1_lifeMask.graphics.beginFill(0x000000);
        this.p1_lifeMask.graphics.drawRect(0, blood1.y - blood1.height / 2, blood1.width, blood1.height);
        this.p1_lifeMask.graphics.endFill();
        // this.p1_lifeMask.anchorOffsetX = this.p1_lifeMask.width;
        this.p1_lifeMask.x = blood1.x - blood1.width;
        this.p1_lifeMask.scaleX = this.p1.life / 100;
        this.p1_life.addChild(this.p1_lifeMask);
        blood1.mask = this.p1_lifeMask;
        this.p1_lifeAdd = UI.addPic(this.p1_life, "fightui_69_png", this.p1_life.width / 2, this.p1_life.height / 2, true);
        // this.p1_lifeAdd.y = this.p1_lifeAdd.height / 2;
        var num1 = this.p1.lifeNum >= 2 ? this.p1.lifeNum : 2;
        this.p1_lifeNum = UI.addPic(this.p1_life, this.lifeNumResource[num1 - 2], this.p1_life.width / 2 + 15, this.p1_lifeAdd.y, true);
        if (this.p1.lifeNum < 2) {
            this.p1_lifeAdd.alpha = 0;
            this.p1_lifeNum.alpha = 0;
        }
        for (var i = 0; i < p1_winTimes; i++) {
            UI.addPic(this.p1_life, "fightui_86_png", this.p1_life.width - 50 - i * 25, this.p1_life.height - 10);
        }
        this.addChild(this.p1_life);
        this.p2_life = new egret.DisplayObjectContainer();
        var img2 = UI.addPic(this, 'fightui_5_png', 30, 20, true, 0.325);
        img2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            SplashScene.instance.clear();
            FightMainRender.getInstance().destroy();
            // SceneManager.getInstance().ChangeScene(new FightOver());
        }, this);
        img2.touchEnabled = true;
        var life2 = UI.addPic(this, "Fight_blood_bg_png", 0, 0, false, 1);
        this.p2_life.width = life2.width;
        this.p2_life.height = life2.height;
        this.p2_life.anchorOffsetX = this.p2_life.width / 2;
        this.p2_life.anchorOffsetY = this.p2_life.height / 2;
        this.p2_life.y = this.p2_life.height;
        this.p2_life.x = UI.WINSIZE_W / 2 + this.p2_life.width / 2 * scaleLife;
        this.p2_life.skewY = 180;
        this.p2_life.addChild(img2);
        this.p2_life.addChild(life2);
        // let name2: egret.Bitmap = UI.addPic(this, this.getName(this.p2.id), this.p1_life.width / 5 * 2, this.p1_life.height / 4 * 3, true);
        // this.p2_life.addChild(name2);
        // name2.skewY = 180;
        var blood2 = UI.addPic(this, "Fight_blood_left_png", this.p1_life.width - 5, this.p1_life.height / 2 + 5, true);
        blood2.anchorOffsetX = blood2.width;
        // this.p2_lifeRed = new egret.Shape();
        // this.p2_lifeRed.graphics.beginFill(0xfff);
        // this.p2_lifeRed.graphics.drawRect(0, blood2.y - blood2.height/2, blood2.width, blood2.height);
        // this.p2_lifeRed.graphics.endFill();
        // // this.p2_lifeRed.anchorOffsetX = this.p2_lifeRed.width;
        // this.p2_lifeRed.x = blood2.x - blood2.width;
        // this.p2_life.addChild(this.p2_lifeRed);
        // this.p2_lifeRed.alpha = 0;//闪烁红血
        // this.p2_redBloodMask = new egret.Shape();
        // this.p2_redBloodMask.graphics.beginFill(0xfff);
        // this.p2_redBloodMask.graphics.drawRect(0, blood2.y - blood2.height/2, blood2.width, blood2.height);
        // this.p2_redBloodMask.graphics.endFill();
        // // this.p2_redBloodMask.anchorOffsetX = this.p2_redBloodMask.width;
        // this.p2_redBloodMask.x = blood2.x - blood2.width;
        // this.p2_life.addChild(this.p2_redBloodMask);//延时红血
        this.p2_life.addChild(blood2);
        this.p2_lifeMask = new egret.Shape();
        this.p2_lifeMask.graphics.beginFill(0x000000);
        this.p2_lifeMask.graphics.drawRect(0, blood2.y - blood2.height / 2, blood2.width, blood2.height);
        this.p2_lifeMask.graphics.endFill();
        // this.p2_lifeMask.anchorOffsetX = this.p2_lifeMask.width;
        this.p2_lifeMask.x = blood2.x - blood2.width;
        this.p2_lifeMask.scaleX = this.p2.life / 100;
        this.p2_life.addChild(this.p2_lifeMask);
        blood2.mask = this.p2_lifeMask;
        this.p2_lifeAdd = UI.addPic(this, "fightui_69_png", this.p2_life.width / 2 + 15, this.p2_life.height / 2, true);
        // this.p2_lifeAdd.y = this.p2_lifeAdd.height / 2;
        this.p2_life.addChild(this.p2_lifeAdd);
        var num2 = this.p2.lifeNum >= 2 ? this.p2.lifeNum : 2;
        this.p2_lifeNum = UI.addPic(this, this.lifeNumResource[num2 - 2], this.p2_life.width / 2, this.p2_lifeAdd.y, true);
        this.p2_life.addChild(this.p2_lifeNum);
        this.p2_lifeNum.skewY = 180;
        if (this.p2.lifeNum < 2) {
            this.p2_lifeAdd.alpha = 0;
            this.p2_lifeNum.alpha = 0;
        }
        for (var i = 0; i < p2_winTimes; i++) {
            UI.addPic(this.p2_life, "fightui_86_png", this.p2_life.width - 50 - i * 25, this.p2_life.height - 10);
        }
        this.addChild(this.p2_life);
        this.p1_power = new egret.DisplayObjectContainer();
        var p1_power = UI.addPic(this, "Fight_anger_left_png", 0, 0, true);
        var powerBg1 = UI.addPic(this, "Fight_anger_small_bg_png", 0, 0, true);
        powerBg1.skewY = 180;
        powerBg1.scaleX = p1_power.width / powerBg1.width;
        powerBg1.scaleY = p1_power.height / powerBg1.height;
        powerBg1.x = powerBg1.width / 2;
        powerBg1.y = powerBg1.height / 2;
        this.p1_power.width = powerBg1.width;
        this.p1_power.height = powerBg1.height;
        // this.p1_power.anchorOffsetX = this.p1_power.width / 2;
        this.p1_power.x = this.p1_lifeMask.x + this.p1_life.x - this.p1_life.width / 2;
        this.p1_power.y = this.p1_life.y + this.p1_life.height;
        this.p1_power.addChild(powerBg1);
        this.p1_power.addChild(p1_power);
        p1_power.x = powerBg1.x;
        p1_power.y = powerBg1.y;
        this.p1_powerMask = new egret.Shape();
        this.p1_powerMask.graphics.beginFill(0x000000);
        this.p1_powerMask.graphics.drawRect(0, 0, p1_power.width * p1_power.scaleX, p1_power.height * p1_power.scaleY);
        this.p1_powerMask.graphics.endFill();
        this.p1_powerMask.x = p1_power.x - p1_power.width * p1_power.scaleX / 2; //能量条遮罩
        this.p1_powerMask.scaleX = this.p1.power / 100;
        this.p1_power.addChild(this.p1_powerMask);
        p1_power.mask = this.p1_powerMask;
        this.p1_maxPower = new egret.Shape();
        this.p1_maxPower.graphics.beginFill(0xfff, 0.5);
        this.p1_maxPower.graphics.drawRect(0, 0, this.p1_power.width - 40, 20);
        this.p1_maxPower.graphics.endFill();
        this.p1_maxPower.x = 38;
        this.p1_power.addChild(this.p1_maxPower);
        this.p1_maxPower.$setAlpha(0); //闪烁能量条
        this.addChild(this.p1_power);
        var p1_powerNumBg = UI.addPic(this.p1_power, "Fight_anger_box_png", -powerBg1.width * (powerBg1.scaleX - 1) / 2, powerBg1.y, true);
        this.p1_powerNum = UI.addPic(this.p1_power, this.powerNumResource[this.p1.powerNum], p1_powerNumBg.x, p1_powerNumBg.y, true);
        this.p2_power = new egret.DisplayObjectContainer();
        var powerBg2 = UI.addPic(this, "Fight_box_bg_png", 0, 0, false);
        this.p2_power.width = powerBg2.width;
        this.p2_power.height = powerBg2.height;
        this.p2_power.anchorOffsetX = this.p2_power.width / 2;
        this.p2_power.x = this.p2_life.x + this.p2_power.width / 2;
        this.p2_power.y = this.p2_life.y + this.p2_life.height / 2;
        this.p2_power.addChild(powerBg2);
        this.p2_powerNum = UI.addPic(this, this.powerNumResource[this.p2.powerNum], 20, 12.5, true);
        this.p2_powerNum.skewY = 180;
        this.p2_power.addChild(this.p2_powerNum);
        this.p2_powerMask = new egret.Shape();
        this.p2_powerMask.graphics.beginFill(0x000000, 0.5);
        this.p2_powerMask.graphics.drawRect(0, 0, this.p2_power.width - 40, 40);
        this.p2_powerMask.graphics.endFill();
        this.p2_powerMask.x = 38;
        this.p2_powerMask.scaleX = this.p2.power / 100;
        this.p2_power.addChild(this.p2_powerMask);
        this.p2_maxPower = new egret.Shape();
        this.p2_maxPower.graphics.beginFill(0x000000, 0.5);
        this.p2_maxPower.graphics.drawRect(0, 0, this.p2_power.width - 40, 40);
        this.p2_maxPower.graphics.endFill();
        this.p2_maxPower.x = 38;
        this.p2_power.addChild(this.p2_maxPower);
        this.p2_power.skewY = 180;
        this.p2_maxPower.$setAlpha(0);
        this.addChild(this.p2_power);
        this.burst = new egret.DisplayObjectContainer();
        var burstBg = UI.addPic(this, "Fight_box_bg_png", 0, 0, false);
        this.burst.width = burstBg.width;
        this.burst.height = burstBg.height;
        this.burst.addChild(burstBg);
        this.burst.x = -1000;
        this.burst.y = UI.WINSIZE_H - this.burst.height - 10;
        this.burstName = UI.addPic(this, this.burstResource[0].name, this.burst.width / 2, 0);
        this.burstName.anchorOffsetY = this.burstName.height / 2;
        this.burst.addChild(this.burstName);
        this.burstStyle = UI.addPic(this, this.burstResource[0].style, 5, 0);
        this.burstStyle.y = this.burstStyle.height / 4;
        this.burstStyle.x = this.burstStyle.width / 4 - 4;
        this.burst.addChild(this.burstStyle);
        this.burstMask = new egret.Shape();
        this.burstMask.graphics.beginFill(0xfff, 0.5);
        this.burstMask.graphics.drawRect(0, 0, this.burst.width - 52, 60);
        this.burstMask.graphics.endFill();
        this.burstMask.x = 49; //burst遮罩
        this.burst.addChild(this.burstMask);
        this.addChild(this.burst);
        this.burstAnother = new egret.DisplayObjectContainer(); //非操控者的burst控件
        this.burstAnotherName = UI.addPic(this, this.burstResource[0].name, 0, 0, false);
        this.burstAnother.addChild(this.burstAnotherName);
        this.burstAnotherMask = new egret.Shape();
        this.burstAnotherMask.graphics.beginFill(0xfff);
        this.burstAnotherMask.graphics.drawRect(0, 0, this.burstAnotherName.width, 10);
        this.burstAnotherMask.graphics.endFill();
        this.burstAnotherMask.y = this.burstAnotherName.height;
        this.burstAnother.addChild(this.burstAnotherMask);
        this.burstAnother.y = -UI.WINSIZE_H;
        this.addChild(this.burstAnother);
        this.p1_powerMax = (this.p1.powerNum == p1.powerPoint_max); //能量满格
        this.p2_powerMax = (this.p2.powerNum == p2.powerPoint_max);
        this.p1_redLife = (p1.life <= p1.life_max / 4); //血量闪红
        this.p2_redLife = (p2.life <= p2.life_max / 4);
    };
    LifeAndPower.prototype.update = function () {
        if (this.p1_burst) {
            this.p1.burst -= 0.1;
            this.changeBurst(this.p1.burst, 1);
        }
        if (this.p2_burst) {
            this.p2.burst -= 0.1;
            this.changeBurst(this.p2.burst, 2);
        } //burst状态衰减
        if (this.redRate < 0)
            this.redRate = 5;
        this.redRate--;
        if (this.maxRate < 0)
            this.maxRate = 5;
        this.maxRate--;
        // if (this.p1_redLife && this.redRate == 0) {
        //     this.p1_lifeRed.alpha == 1 ? this.p1_lifeRed.$setAlpha(0) : this.p1_lifeRed.$setAlpha(1);
        // }
        // if (this.p2_redLife && this.redRate == 0) {
        //     this.p2_lifeRed.alpha == 1 ? this.p2_lifeRed.$setAlpha(0) : this.p2_lifeRed.$setAlpha(1);
        // }//生命值过低进入闪红状态
        // if (this.p1_powerMax && this.maxRate == 0) {
        //     this.p1_maxPower.alpha == 1 ? this.p1_maxPower.$setAlpha(0) : this.p1_maxPower.$setAlpha(1);
        // }
        if (this.p2_powerMax && this.maxRate == 0) {
            this.p2_maxPower.alpha == 1 ? this.p2_maxPower.$setAlpha(0) : this.p2_maxPower.$setAlpha(1);
        } //能量值满进入闪烁状态
        if (SplashScene.instance.time != 0 && this.timeStart) {
            this.setTime();
        }
    };
    LifeAndPower.prototype.onExit = function () {
        FightMainRender.getInstance().Remove(this, this.update);
    };
    LifeAndPower.prototype.changeP1Life = function (num, role) {
        if (num == 0)
            return;
        this.p1.life -= num;
        this.p1_redLife = (this.p1.life + (this.p1.lifeNum - 1) * 100 <= role.life_max / 4);
        role.redBlood = this.p1_redLife;
        // this.p1_redLife || this.p1_lifeRed.$setAlpha(0);//判断血量是否进入红血状态
        if (this.p1.life <= 0) {
            if (this.p1.lifeNum > 1) {
                this.p1.life += 100;
                // this.p1_redBloodMask.scaleX = 1;
            }
            else if (!role.isKO) {
                this.p1.life = 0;
                role.isKO = true;
                this.p1_redLife = false;
                // this.p1_lifeRed.$setAlpha(0);
                role.opp.stop_move_X1();
                var t_1 = egret.setInterval(function () {
                    SplashScene.instance.stage.addChild(new Winner(role.opp));
                    egret.clearInterval(t_1);
                }, this, 5000);
            }
            else
                this.p1.life = 0;
            this.p1.lifeNum--;
        }
        role.life = this.p1.life;
        this.p1_lifeMask.scaleX = this.p1.life / 100;
        var n = this.p1.lifeNum >= 2 ? this.p1.lifeNum : 2;
        this.p1_lifeNum.$setTexture(RES.getRes(this.lifeNumResource[n - 2])); //根据血条数修改
        // egret.Tween.get(this.p1_redBloodMask).to({ scaleX: this.p1.life / 100 }, 1000, egret.Ease.sineIn);//红血延时消失
        if (this.p1.lifeNum < 2) {
            this.p1_lifeAdd.$setAlpha(0);
            this.p1_lifeNum.$setAlpha(0);
        }
        else {
            this.p1_lifeAdd.alpha = 1;
            this.p1_lifeNum.alpha = 1;
        }
        // if(this.p1.life==0) this.addChild(new KO());
    };
    LifeAndPower.prototype.changeP2Life = function (num, role) {
        this.p2.life -= num;
        if (num == 0)
            return;
        this.p2_redLife = (this.p2.life + (this.p2.lifeNum - 1) * 100 <= role.life_max / 4);
        role.redBlood = this.p2_redLife;
        // this.p2_redLife || this.p2_lifeRed.$setAlpha(0);
        if (this.p2.life <= 0) {
            if (this.p2.lifeNum > 1) {
                this.p2.life += 100;
                // this.p2_redBloodMask.scaleX = 1;
            }
            else if (!role.isKO) {
                this.p2.life = 0;
                role.isKO = true;
                this.p2_redLife = false;
                // this.p2_lifeRed.$setAlpha(0);
                role.opp.stop_move_X1();
                var t_2 = egret.setInterval(function () {
                    SplashScene.instance.stage.addChild(new Winner(role.opp));
                    egret.clearInterval(t_2);
                }, this, 5000);
            }
            else
                this.p2.life = 0;
            this.p2.lifeNum--;
        }
        role.life = this.p2.life;
        this.p2_lifeMask.scaleX = this.p2.life / 100;
        var n = this.p2.lifeNum >= 2 ? this.p2.lifeNum : 2;
        this.p2_lifeNum.$setTexture(RES.getRes(this.lifeNumResource[n - 2]));
        // egret.Tween.get(this.p2_redBloodMask).to({ scaleX: this.p2.life / 100 }, 1000, egret.Ease.sineIn);
        if (this.p2.lifeNum < 2) {
            this.p2_lifeAdd.$setAlpha(0);
            this.p2_lifeNum.$setAlpha(0);
        }
        else {
            this.p2_lifeAdd.alpha = 1;
            this.p2_lifeNum.alpha = 1;
        }
        // if(this.p2.life==0) this.addChild(new KO());
    };
    LifeAndPower.prototype.changeP1Power = function (role, powerObj) {
        switch (powerObj.action) {
            case "dec"://释放技能，直接减少一条能量
                // if (_level0.checkPowerNoLimit(role))
                // {
                //     return;
                // } // end if
                if (this.p1.powerNum == 0) {
                    return;
                } // end if
                --this.p1.powerNum;
                break;
            case "burst"://进入burst状态，消耗完所有能量条
                this.burstPower = 100 * role.powerPoint_max;
                this.initBurstP1(role.burst_mode); //展示Burst能量条
                this.p1.powerNum = 0;
                this.p1.power = 0;
                break;
            case "burstdec"://减少burst能量
                this.p1.burst -= powerObj.decNum;
                this.changeBurst(this.p1.burst, 1); //展示的burst能量条减少
                break;
            case "inc"://添加能量
                if (this.p1.powerNum == role.powerPoint_max)
                    return; //能量已满，不做任何改变
                var inc = powerObj.inc;
                if (role.inBurst)
                    inc = Math.round(inc / 2); //在burst状态下能量获取减半
                this.p1.power += inc;
                if (this.p1.power >= 100) {
                    ++this.p1.powerNum;
                    this.p1.power = this.p1.powerNum == role.powerPoint_max ? 0 : this.p1.power - 100;
                }
                break;
        }
        role.superPoint = this.p1.powerNum;
        this.p1_powerMask.scaleX = this.p1.powerNum == role.powerPoint_max ? 1 : this.p1.power / 100; //能量条遮罩伸缩
        this.p1_powerMax = (this.p1.powerNum == role.powerPoint_max);
        this.p1_powerMax || this.p1_maxPower.$setAlpha(0); //能量条是否已满
        this.p1_powerNum.$setTexture(RES.getRes(this.powerNumResource[this.p1.powerNum]));
        this.p1_powerNum.anchorOffsetX = this.p1_powerNum.width / 2;
        this.p1_powerNum.anchorOffsetY = this.p1_powerNum.height / 2;
    };
    LifeAndPower.prototype.changeP2Power = function (role, powerObj) {
        switch (powerObj.action) {
            case "dec":
                // if (_level0.checkPowerNoLimit(role))
                // {
                //     return;
                // } // end if
                if (this.p2.powerNum == 0) {
                    return;
                } // end if
                --this.p2.powerNum;
                break;
            case "burst":
                this.burstPower = 100 * role.powerPoint_max;
                this.initBurstP2(role.burst_mode);
                this.p2.powerNum = 0;
                this.p2.power = 0;
                break;
            case "burstdec":
                this.p2.burst -= powerObj.decNum;
                this.changeBurst(this.p2.burst, 2);
                break;
            case "inc":
                if (this.p2.powerNum == role.powerPoint_max)
                    return;
                var inc = powerObj.inc;
                if (role.inBurst)
                    inc = Math.round(inc / 2);
                this.p2.power += inc;
                if (this.p2.power >= 100) {
                    ++this.p2.powerNum;
                    this.p2.power = this.p2.powerNum == role.powerPoint_max ? 0 : this.p2.power - 100;
                }
                break;
        }
        role.superPoint = this.p2.powerNum;
        this.p2_powerMask.scaleX = this.p2.powerNum == role.powerPoint_max ? 1 : this.p2.power / 100;
        this.p2_powerMax = (this.p2.powerNum == role.powerPoint_max);
        this.p2_powerMax || this.p2_maxPower.$setAlpha(0);
        this.p2_powerNum.$setTexture(RES.getRes(this.powerNumResource[this.p2.powerNum]));
        this.p2_powerNum.anchorOffsetX = this.p2_powerNum.width / 2;
        this.p2_powerNum.anchorOffsetY = this.p2_powerNum.height / 2;
    };
    LifeAndPower.prototype.changeBurst = function (num, player) {
        if (num > 0) {
            if (player == this.player)
                this.burstMask.scaleX = num / this.burstPower;
            else
                this.burstAnotherMask.scaleX = num / this.burstPower;
        }
        else {
            this.burstEnd(player);
        }
    };
    LifeAndPower.prototype.reset = function () {
        var p1 = _level0.P1_role;
        var p2 = _level0.P2_role;
        this.p1.lifeNum = Math.ceil(p1.life_max / 100);
        this.p2.lifeNum = Math.ceil(p2.life_max / 100);
        this.p1.life = p1.life_max - 100 * (this.p1.lifeNum - 1);
        this.p2.life = p2.life_max - 100 * (this.p2.lifeNum - 1);
        this.p1_lifeMask.scaleX = this.p1.life / 100;
        this.p2_lifeMask.scaleX = this.p2.life / 100;
        this.p1_redBloodMask.scaleX = this.p1.life / 100;
        this.p2_redBloodMask.scaleX = this.p2.life / 100;
        var num1 = this.p1.lifeNum >= 2 ? this.p1.lifeNum : 2;
        this.p1_lifeNum.$setTexture(RES.getRes(this.lifeNumResource[num1]));
        this.p1_life.addChild(this.p1_lifeNum);
        if (this.p1.lifeNum < 2) {
            this.p1_lifeAdd.alpha = 0;
            this.p1_lifeNum.alpha = 0;
        }
        var num2 = this.p2.lifeNum >= 2 ? this.p2.lifeNum : 2;
        this.p2_lifeNum.$setTexture(RES.getRes(this.lifeNumResource[num2]));
        this.p2_life.addChild(this.p1_lifeNum);
        if (this.p2.lifeNum < 2) {
            this.p2_lifeAdd.alpha = 0;
            this.p2_lifeNum.alpha = 0;
        }
        this.p1_redLife = p1.redBlood;
        this.p2_redLife = p2.redBlood;
        this.burstEnd(1);
        this.burstEnd(2);
    };
    LifeAndPower.prototype.initBurstP1 = function (mode) {
        this.p1_burst = true;
        this.p1.burst = this.burstPower;
        this.p1_burstMode = mode;
        if (this.player == 1)
            this.burstStart();
        else
            this.burstAnotherStart();
    };
    LifeAndPower.prototype.initBurstP2 = function (mode) {
        this.p2_burst = true;
        this.p2.burst = this.burstPower;
        this.p2_burstMode = mode;
        if (this.player == 2)
            this.burstStart();
        else
            this.burstAnotherStart();
    };
    LifeAndPower.prototype.burstStart = function () {
        var mode = this.player == 1 ? this.p1_burstMode : this.p2_burstMode;
        if (mode == "attack") {
            this.burstName.$setTexture(RES.getRes(this.burstResource[2].name));
            this.burstStyle.$setTexture(RES.getRes(this.burstResource[2].style));
        }
        else if (mode == "defend") {
            this.burstName.$setTexture(RES.getRes(this.burstResource[1].name));
            this.burstStyle.$setTexture(RES.getRes(this.burstResource[1].style));
        }
        else {
            this.burstName.$setTexture(RES.getRes(this.burstResource[0].name));
            this.burstStyle.$setTexture(RES.getRes(this.burstResource[0].style));
        }
        egret.Tween.get(this.burst).to({ x: 10 }, 200, egret.Ease.sineIn);
        this.burstMask.scaleX = 1;
    };
    LifeAndPower.prototype.burstAnotherStart = function () {
        var mode = this.player == 1 ? this.p2_burstMode : this.p1_burstMode;
        if (mode == "attack") {
            this.burstAnotherName.$setTexture(RES.getRes(this.burstResource[2].name));
        }
        else if (mode == "defend") {
            this.burstAnotherName.$setTexture(RES.getRes(this.burstResource[1].name));
        }
        else {
            this.burstAnotherName.$setTexture(RES.getRes(this.burstResource[0].name));
        }
        this.burstAnother.scaleX = 1;
        if (this.player == 2) {
            this.burstAnother.x = this.p1_power.x + this.p1_power.width / 2;
            this.burstAnother.y = this.p1_power.y;
        }
        else {
            this.burstAnother.x = this.p2_power.x - this.p2_power.width / 2 - this.burstAnother.width;
            ;
            this.burstAnother.y = this.p2_power.y;
        }
    };
    LifeAndPower.prototype.burstEnd = function (player) {
        if (player == this.player)
            egret.Tween.get(this.burst).to({ x: -1000 }, 400, egret.Ease.sineIn);
        else {
            this.burstAnother.y = -UI.WINSIZE_H;
        }
        switch (player) {
            case 1:
                _level0.P1_role.inBurst = false;
                this.p1_burst = false;
                break;
            case 2:
                _level0.P2_role.inBurst = false;
                this.p2_burst = false;
                break;
        }
    };
    LifeAndPower.prototype.getName = function (id) {
        for (var i = 0; i < this.lifes.length; i++) {
            if (this.lifes[i].id == id)
                return this.lifes[i].name;
        }
    };
    LifeAndPower.prototype.getImg = function (id) {
        for (var i = 0; i < this.lifes.length; i++) {
            if (this.lifes[i].id == id)
                return this.lifes[i].img;
        }
    };
    LifeAndPower.prototype.lifeControl = function (lifeObj, role) {
        var d_rate = lifeObj.d_rate;
        if (_level0.deepCompare(_level0.P1_role, role)) {
            this.changeP1Life(d_rate * this.life_p, role);
        }
        else {
            this.changeP2Life(d_rate * this.life_p, role);
        }
    };
    LifeAndPower.prototype.powerControl = function (powerObj, role) {
        if (_level0.deepCompare(_level0.P1_role, role)) {
            console.log("p1_power", powerObj);
            this.changeP1Power(role, powerObj);
        }
        else {
            console.log("p2_power", powerObj);
            this.changeP2Power(role, powerObj);
        }
    };
    LifeAndPower.prototype.setTime = function () {
        if (this.frameNum == 0 && this.timeLen > 0) {
            this.frameNum = SplashScene.instance.stage.frameRate;
            this.timeLen--;
            var t1 = Math.floor(this.timeLen / 10);
            var t2 = this.timeLen % 10;
            this.timeNum.getChildAt(0).$setTexture(RES.getRes("hitnum" + t1 + "_png"));
            this.timeNum.getChildAt(1).$setTexture(RES.getRes("hitnum" + t2 + "_png"));
            if (this.timeLen == 0) {
                this.timeOut();
            }
        }
        this.frameNum--;
    };
    LifeAndPower.prototype.timeOut = function () {
        var p1 = _level0.P1_role;
        var p2 = _level0.P2_role;
        p1.do_end();
        p2.do_end();
        if (p1.life == p2.life) {
            var t_3 = egret.setInterval(function () {
                SplashScene.instance.stage.addChild(new RoundOver());
                egret.clearInterval(t_3);
            }, this, 3000);
        }
        else {
            var t_4 = egret.setInterval(function () {
                SplashScene.instance.stage.addChild(new Winner(p1.life > p2.life ? p1 : p2));
                egret.clearInterval(t_4);
            }, this, 3000);
        }
    };
    return LifeAndPower;
}(egret.DisplayObjectContainer));
__reflect(LifeAndPower.prototype, "LifeAndPower", ["egret.DisplayObject"]);
//# sourceMappingURL=LifeAndPower.js.map