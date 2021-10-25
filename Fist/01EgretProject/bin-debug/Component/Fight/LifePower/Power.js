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
var Power = (function (_super) {
    __extends(Power, _super);
    function Power(x, y, player, data) {
        if (player === void 0) { player = 1; }
        if (data === void 0) { data = null; }
        var _this = _super.call(this) || this;
        _this.type = "pengke";
        _this.data = null;
        _this.burstResource = ["Fight_box_fang_png", "Fight_box_ji_png", "Fight_box_li_png", "Fight_anger_small_fang_png", "Fight_anger_small_ji_png", "Fight_anger_small_li_png"]; //能量条数的图片资源
        _this.isBurst = false; //是否是burst状态
        //player的属性
        _this.playerData = { id: "k", life: 100, power: 0, burst: 0, lifeNum: 2, powerNum: 3 };
        _this.maxRate = 5; //满能量的闪烁频率
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        FightMainRender.getInstance().Add(_this, _this.update);
        _this.addEventListener(egret.TouchEvent.REMOVED_FROM_STAGE, _this.onExit, _this);
        _this.x = x;
        _this.y = y;
        _this.player = player;
        _this.data = data;
        return _this;
    }
    Power.prototype.onEnter = function () {
        var player = this.player == 1 ? _level0.P1_role : _level0.P2_role;
        this.playerData.powerNum = player.superPoint;
        if (this.data != null) {
            this.playerData.power = this.data.power;
            this.playerData.powerNum = this.data.powerNum;
            player.superPoint = this.playerData.powerNum;
        }
        this.powerMax = (player.superPoint == 3);
        var power = UI.addPic(this, "Fight_anger_left_png", 0, 0, true);
        var powerBg = UI.addPic(this, "Fight_anger_" + (Main.UItype == Main.UIT2 ? "" : "small_") + "bg_png", 0, 0, true);
        if (Main.UItype == Main.UIT1) {
            powerBg.scaleX = (power.width + 3) / powerBg.width;
            powerBg.scaleY = (power.height + 3) / powerBg.height;
        }
        power.y = powerBg.height / 2;
        power.x = powerBg.width / 2;
        this.width = powerBg.width;
        this.height = powerBg.height;
        powerBg.x = powerBg.width / 2 * powerBg.scaleX;
        powerBg.y = powerBg.height / 2 * powerBg.scaleY;
        this.setChildIndex(power, this.numChildren - 1);
        this.powerMask = new egret.Shape();
        this.powerMask.graphics.beginFill(0xffffff);
        this.powerMask.graphics.drawRect(0, 0, power.width, power.height);
        this.powerMask.graphics.endFill();
        this.powerMask.x = power.x - power.width / 2; //burst能量条遮罩
        this.powerMask.y = power.y - power.height / 2;
        // this.powerMask.anchorOffsetX = this.powerMask.width;
        this.powerMask.scaleX = this.playerData.power / 100;
        if (this.playerData.powerNum == player.powerPoint_max)
            this.powerMask.scaleX = 1;
        this.addChild(this.powerMask);
        power.mask = this.powerMask;
        this.maxPower = new egret.Shape();
        this.maxPower.graphics.beginFill(0xfff, 0.5);
        this.maxPower.graphics.drawRect(0, 0, power.width, power.height);
        this.maxPower.graphics.endFill();
        this.maxPower.x = power.x - power.width / 2;
        this.maxPower.y = power.y - power.height / 2;
        this.addChild(this.maxPower);
        this.maxPower.$setAlpha(0); //闪烁能量条
        var powerNumBg = UI.addPic(this, "Fight_anger_box_png", Main.UItype == Main.UIT2 ? this.width : 0, powerBg.y, true);
        this.powerNum = UI.addPic(this, "Fight_anger_" + this.playerData.powerNum + "_png", powerNumBg.x, powerNumBg.y, true);
        if (this.player == SplashScene.instance.player) {
            var parent_1 = this.parent;
            this.burst = new egret.DisplayObjectContainer();
            var burstBg = UI.addPic(this.burst, "Fight_" + (Main.UItype == Main.UIT2 ? 'blood' : 'box') + "_bg_png", 0, 0);
            this.burst.x = parent_1.p1_power.x;
            this.burst.y = UI.WINSIZE_H - burstBg.height - 20;
            this.burst.width = burstBg.width;
            this.burst.height = burstBg.height;
            var res = 'Fight_box_li_png';
            switch (this.burstMode) {
                case 'power':
                    res = 'Fight_box_li_png';
                    break;
                case 'defend':
                    res = 'Fight_box_fang_png';
                    break;
                case 'attack':
                    res = 'Fight_box_ji_png';
                    break;
            }
            var burstLen = UI.addPic(this.burst, "Fight_boxin_png", burstBg.width / 2, burstBg.height / 2, true);
            if (Main.UItype == Main.UIT2) {
                burstLen.scaleX = (burstBg.width - 10) / burstLen.width;
                burstLen.scaleY = (burstBg.height - 8) / burstLen.height;
            }
            this.burstName = UI.addPic(this.burst, res, 0, 0, true);
            this.burstName.y = this.burst.height / 2;
            this.burstMask = new egret.Shape();
            this.burstMask.graphics.beginFill(0xffffff);
            this.burstMask.graphics.drawRect(0, 0, burstLen.width * burstLen.scaleX - this.burstName.width / 2, burstBg.height);
            this.burstMask.graphics.endFill();
            this.burstMask.x = this.burstName.width / 2;
            this.burst.addChild(this.burstMask);
            burstLen.mask = this.burstMask;
            parent_1.addChild(this.burst);
        }
        else {
            this.burst = new egret.DisplayObjectContainer();
            var burstBg = UI.addPic(this, "Fight_anger_small_bg_png", 0, 0, true);
            this.burst.x = powerNumBg.width / 2;
            this.burst.y = powerBg.y + burstBg.height / 2 + 3;
            this.burst.addChild(burstBg);
            burstBg.x = burstBg.width / 2;
            burstBg.y = burstBg.height / 2;
            var burstLen = UI.addPic(this.burst, "Fight_anger_small_png", burstBg.x, burstBg.y, true);
            if (Main.UItype == Main.UIT2) {
                burstLen.scaleX = (burstBg.width - 10) / burstLen.width;
                burstLen.scaleY = (burstBg.height - 8) / burstBg.height;
            }
            this.burstMask = new egret.Shape();
            this.burstMask.graphics.beginFill(0xffffff);
            this.burstMask.graphics.drawRect(0, 0, burstLen.width * burstLen.scaleX, burstLen.height * burstLen.scaleY);
            this.burstMask.graphics.endFill();
            this.burstMask.x = burstBg.x - burstLen.width * burstLen.scaleX / 2;
            this.burstMask.y = burstBg.y - burstLen.height * burstLen.scaleY / 2;
            this.burst.addChild(this.burstMask);
            burstLen.mask = this.burstMask;
            var res = 'Fight_anger_small_li_png';
            switch (this.burstMode) {
                case 'power':
                    res = 'Fight_anger_small_li_png';
                    break;
                case 'defend':
                    res = 'Fight_anger_small_fang_png';
                    break;
                case 'attack':
                    res = 'Fight_anger_small_ji_png';
                    break;
            }
            this.burstName = UI.addPic(this.burst, res, burstBg.x - burstBg.width / 2, burstBg.y, true);
            if (this.player == 2)
                this.burstName.skewY = 180;
            this.addChild(this.burst);
        }
        this.burst.$setVisible(false);
        if (this.player == 2) {
            this.powerNum.skewY = 180;
        }
    };
    Power.prototype.update = function () {
        if (this.maxRate < 0)
            this.maxRate = 5;
        this.maxRate--;
        if (this.powerMax && this.maxRate == 0) {
            this.maxPower.alpha == 1 ? this.maxPower.$setAlpha(0) : this.maxPower.$setAlpha(1);
        } //能量值满进入闪烁状态
        if (this.isBurst) {
            this.playerData.burst -= 0.1;
            this.changeBurst(this.playerData.burst);
        } //burst状态衰减
    };
    Power.prototype.onExit = function () {
        FightMainRender.getInstance().Remove(this, this.update);
    };
    Power.prototype.powerControl = function (role, powerObj) {
        switch (powerObj.action) {
            case "dec":
                // if (_level0.checkPowerNoLimit(role))
                // {
                //     return;
                // } // end if
                if (this.playerData.powerNum == 0) {
                    return;
                } // end if
                --this.playerData.powerNum;
                break;
            case "burst":
                this.burstPower = 100 * role.powerPoint_max;
                this.initBurst(role.burst_mode);
                this.playerData.powerNum = 0;
                this.playerData.power = 0;
                break;
            case "burstdec":
                this.playerData.burst -= powerObj.decNum;
                this.changeBurst(this.playerData.burst);
                break;
            case "inc":
                if (this.playerData.powerNum == role.powerPoint_max)
                    return;
                var inc = powerObj.inc;
                if (role.inBurst)
                    inc = Math.round(inc / 2);
                this.playerData.power += inc;
                if (this.playerData.power >= 100) {
                    ++this.playerData.powerNum;
                    this.playerData.power = this.playerData.powerNum == role.powerPoint_max ? 0 : this.playerData.power - 100;
                }
                break;
        }
        role.superPoint = this.playerData.powerNum;
        this.powerMask.scaleX = this.playerData.powerNum == role.powerPoint_max ? 1 : this.playerData.power / 100;
        this.powerMax = (this.playerData.powerNum == role.powerPoint_max);
        this.powerMax || this.maxPower.$setAlpha(0);
        this.powerNum.$setTexture(RES.getRes("Fight_anger_" + this.playerData.powerNum + "_png"));
        this.powerNum.anchorOffsetX = this.powerNum.width / 2;
        this.powerNum.anchorOffsetY = this.powerNum.height / 2;
    };
    Power.prototype.initBurst = function (mode) {
        this.burstMode = mode;
        var res;
        this.playerData.burst = this.burstPower;
        switch (mode) {
            case 'power':
                res = this.player == SplashScene.instance.player ? 'Fight_box_li_png' : 'Fight_anger_small_li_png';
                break;
            case 'defend':
                res = this.player == SplashScene.instance.player ? 'Fight_box_fang_png' : 'Fight_anger_small_fang_png';
                break;
            case 'attack':
                res = this.player == SplashScene.instance.player ? 'Fight_box_ji_png' : 'Fight_anger_small_ji_png';
                break;
        }
        this.burstName.$setTexture(RES.getRes(res));
        this.burstMask.scaleX = 1;
        this.isBurst = true;
        this.burst.$setVisible(true);
    };
    Power.prototype.changeBurst = function (burst) {
        if (burst > 0) {
            this.burstMask.scaleX = burst / this.burstPower;
        }
        else {
            this.burst.$setVisible(false);
            switch (this.player) {
                case 1:
                    _level0.P1_role.burst_end();
                    break;
                case 2:
                    _level0.P2_role.burst_end();
                    break;
            }
            this.isBurst = false;
        }
    };
    return Power;
}(egret.DisplayObjectContainer));
__reflect(Power.prototype, "Power", ["egret.DisplayObject"]);
//# sourceMappingURL=Power.js.map