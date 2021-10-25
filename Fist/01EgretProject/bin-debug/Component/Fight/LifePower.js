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
var LifePower = (function (_super) {
    __extends(LifePower, _super);
    function LifePower(p1Data, p2Data) {
        if (p1Data === void 0) { p1Data = null; }
        if (p2Data === void 0) { p2Data = null; }
        var _this = _super.call(this) || this;
        _this.life_p = 10; //伤害系数
        _this.over = false;
        _this.renderAnimation = 1;
        _this.overType = '';
        _this.frameNum = SplashScene.instance.stage.frameRate;
        _this.timeLen = SplashScene.instance.time;
        _this.timeStart = false;
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        FightMainRender.instance.Add(_this, _this.render);
        _this.addEventListener(egret.TouchEvent.REMOVED_FROM_STAGE, _this.onExit, true);
        _this.p1Data = p1Data;
        _this.p2Data = p2Data;
        return _this;
    }
    LifePower.prototype.onEnter = function () {
        var _this = this;
        this.p1_life = new Life(60, 20, 1, this.p1Data);
        this.p1_life.x = UI.WINSIZE_W / 8;
        this.p2_life = new Life(UI.WINSIZE_W - this.p1_life.x, this.p1_life.y, 2, this.p2Data);
        this.p2_life.skewY = 180;
        this.addChild(this.p1_life);
        this.addChild(this.p2_life);
        this.p1_power = new Power(this.p1_life.x + (Main.UItype == Main.UIT2 ? 10 : 40), this.p1_life.y + this.p1_life.height + 5, 1, this.p1Data);
        this.p2_power = new Power(UI.WINSIZE_W - this.p1_power.x, this.p1_power.y, 2, this.p2_power);
        this.p2_power.skewY = 180;
        this.addChild(this.p1_power);
        this.addChild(this.p2_power);
        this.timer = new egret.DisplayObjectContainer();
        var timeBg = UI.addPic(this.timer, "fight_time_png", 0, 0, true);
        timeBg.x = timeBg.width / 2;
        timeBg.y = timeBg.height / 2;
        this.timer.width = timeBg.width;
        this.timer.height = timeBg.height;
        this.timer.x = UI.WINSIZE_W / 2;
        this.timer.anchorOffsetX = this.timer.width / 2;
        if (SplashScene.instance.time == 0) {
            UI.addPic(this.timer, "Fight_pic_infinite_png", this.timer.width / 2, this.timer.height / 2, true);
        }
        else {
            var t1 = Math.floor(this.timeLen / 10);
            var t2 = this.timeLen % 10;
            var p1 = UI.addPic(this.timer, "hitnum" + t1 + "_png", this.timer.width / 2, this.timer.height / 2, true);
            var p2 = UI.addPic(this.timer, "hitnum" + t2 + "_png", this.timer.width / 2, this.timer.height / 2, true);
            p1.x -= p1.width;
            p2.x += p2.width;
        }
        this.addChild(this.timer);
        if (SplashScene.instance.type == Main.PVE || SplashScene.instance.type == Main.EVE) {
            // UI.addBtn(this, "pauseBtn_png", this.p1_life.x, this.timer.y + this.timer.height/2, true, () => {
            //     FightMainRender.instance.renderPause = true;
            //     this.addChild(new PauseLayer())
            // })
            UI.addClickAction(this, timeBg, function () {
                FightMainRender.instance.renderPause = true;
                _this.addChild(PauseLayer.I());
                var popup = NoviceGuidance.I().popup;
                if (popup != null && popup.parent) {
                    NoviceGuidance.I().step8();
                    popup.parent.removeChild(popup);
                }
            });
        }
    };
    LifePower.prototype.onExit = function () {
        FightMainRender.instance.Remove(this, this.render);
    };
    LifePower.prototype.lifeControl = function (lifeobj, role) {
        var d_rate = lifeobj.d_rate;
        if (_level0.deepCompare(_level0.P1_role, role)) {
            this.p1_life.lifeControl(d_rate * this.life_p, role);
        }
        else {
            this.p2_life.lifeControl(d_rate * this.life_p, role);
        }
    };
    LifePower.prototype.powerControl = function (powerobj, role) {
        if (_level0.deepCompare(_level0.P1_role, role)) {
            this.p1_power.powerControl(role, powerobj);
        }
        else {
            this.p2_power.powerControl(role, powerobj);
        }
    };
    LifePower.prototype.render = function () {
        this.setTime();
        if (this.over) {
            this.timeStart = false;
            this.renderAnimation += 1;
            if (this.renderAnimation == 90) {
                switch (this.overType) {
                    case 'no':
                        SplashScene.instance.stage.addChild(new RoundOver());
                        break;
                    case 'p1':
                        SplashScene.instance.stage.addChild(new Winner(_level0.P1_role));
                        break;
                    case 'p2':
                        SplashScene.instance.stage.addChild(new Winner(_level0.P2_role));
                        break;
                }
            }
        }
    };
    LifePower.prototype.setTime = function () {
        if (this.frameNum == 0 && this.timeLen > 0 && this.timeStart) {
            this.frameNum = SplashScene.instance.stage.frameRate;
            this.timeLen--;
            var t1 = Math.floor(this.timeLen / 10);
            var t2 = this.timeLen % 10;
            this.timer.getChildAt(1).$setTexture(RES.getRes("hitnum" + t1 + "_png"));
            this.timer.getChildAt(2).$setTexture(RES.getRes("hitnum" + t2 + "_png"));
            if (this.timeLen == 0) {
                this.timeOut();
            }
        }
        this.timeStart && this.frameNum--;
    };
    LifePower.prototype.timeOut = function () {
        var p1 = _level0.P1_role;
        var p2 = _level0.P2_role;
        p1.do_end();
        p2.do_end();
        this.over = true;
        if (p1.life == p2.life) {
            this.overType = 'no';
        }
        else {
            this.overType = p1.life > p2.life ? 'p1' : 'p2';
        }
    };
    return LifePower;
}(egret.DisplayObjectContainer));
__reflect(LifePower.prototype, "LifePower", ["egret.DisplayObject"]);
//# sourceMappingURL=LifePower.js.map