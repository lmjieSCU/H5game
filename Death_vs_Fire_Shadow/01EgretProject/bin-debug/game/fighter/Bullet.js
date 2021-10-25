var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Bullet = (function () {
    function Bullet(param1, param2) {
        this.hp = 100;
        this.hpMax = 100;
        this.holdFrame = -1; //holdFrame为存在的总帧数
        this.hitTimes = -1;
        this._hitAble = true;
        this.speed = new egret.Point(5, 0);
        this.addSpeed = new egret.Point();
        this.maxSpeed = new egret.Point(999, 999);
        this.minSpeed = new egret.Point(-999, -999);
        this.hitSpeed = new egret.Point(NaN, NaN);
        this._speedPlus = GameConfig.SPEED_PLUS;
        this._currentRect = new egret.Rectangle();
        this.mc = param1;
        this._orgScale = new egret.Point(param1.scaleX, param1.scaleY);
        this._orgRotate = param1.rotation;
        if (param2) {
            if (param2.x) {
                if (typeof (param2.x) == "number") {
                    this.speed.x = param2.x;
                }
                else {
                    if (param2.x.start != undefined) {
                        this.speed.x = param2.x.start;
                    }
                    if (param2.x.add != undefined) {
                        this.addSpeed.x = param2.x.add * 2;
                    }
                    if (param2.x.max != undefined) {
                        this.maxSpeed.x = param2.x.max;
                    }
                    if (param2.x.min != undefined) {
                        this.minSpeed.x = param2.x.min;
                    }
                    if (param2.x.hit != undefined) {
                        this.hitSpeed.x = param2.x.hit;
                    }
                }
            }
            if (param2.y) {
                if (typeof (param2.y) == "number") {
                    this.speed.y = param2.y;
                }
                else {
                    if (param2.y.start != undefined) {
                        this.speed.y = param2.y.start;
                    }
                    if (param2.y.add != undefined) {
                        this.addSpeed.y = param2.y.add * 2;
                    }
                    if (param2.y.max != undefined) {
                        this.maxSpeed.y = param2.y.max;
                    }
                    if (param2.y.min != undefined) {
                        this.minSpeed.y = param2.y.min;
                    }
                    if (param2.y.hit != undefined) {
                        this.hitSpeed.y = param2.y.hit;
                    }
                }
            }
            if (param2.hold) {
                if (param2.hold == -1) {
                    this.holdFrame = -1;
                }
                else {
                    this.holdFrame = param2.hold * GameConfig.FPS_GAME;
                }
            }
            if (param2.hits) {
                this.hitTimes = param2.hits;
            }
            if (param2.hp) {
                this.hpMax = param2.hp;
                this.hp = param2.hp;
            }
        }
    }
    Bullet.prototype.getx = function () {
        return this.mc.x;
    };
    Bullet.prototype.gety = function () {
        return this.mc.y;
    };
    Object.defineProperty(Bullet.prototype, "x", {
        get: function () {
            return this.mc.x;
        },
        set: function (param1) {
            this.mc.x = param1;
        },
        enumerable: true,
        configurable: true
    });
    Bullet.prototype.setx = function (param1) {
        this.mc.x = param1;
    };
    Object.defineProperty(Bullet.prototype, "y", {
        get: function () {
            return this.mc.y;
        },
        set: function (param1) {
            this.mc.y = param1;
        },
        enumerable: true,
        configurable: true
    });
    Bullet.prototype.sety = function (param1) {
        this.mc.y = param1;
    };
    Object.defineProperty(Bullet.prototype, "team", {
        get: function () {
            return this._team;
        },
        set: function (param1) {
            this._team = param1;
        },
        enumerable: true,
        configurable: true
    });
    Bullet.prototype.getteam = function () {
        return this._team;
    };
    Bullet.prototype.setteam = function (param1) {
        this._team = param1;
    };
    Bullet.prototype.isAttacking = function () {
        return this._hitAble;
    };
    Bullet.prototype.setSpeedRate = function (param1) {
        this._speedPlus = param1;
    };
    Object.defineProperty(Bullet.prototype, "direct", {
        get: function () {
            return this._direct;
        },
        set: function (param1) {
            this._direct = param1;
            this.mc.scaleX = this._orgScale.x * this._direct;
            this.mc.rotation = this._orgRotate * this._direct;
            this.mc.x = this.mc.x * this._direct;
            this.speed.x = this.speed.x * param1;
            this.addSpeed.x = this.addSpeed.x * param1;
            if (!isNaN(this.hitSpeed.x)) {
                this.hitSpeed.x = this.hitSpeed.x * param1;
            }
        },
        enumerable: true,
        configurable: true
    });
    Bullet.prototype.getdirect = function () {
        return this._direct;
    };
    Bullet.prototype.setHitVO = function (param1) {
        var _loc2_ = null;
        this.owner = param1.owner;
        this._hitVO = param1.clone();
        this._hitVO.owner = this;
        var _loc4_ = this.mc.getChildByName("main");
        var _loc3_ = this.owner.getDisplay();
        if (_loc4_) {
            this._bulletArea = _loc4_.getTransformedBounds(_loc3_);
            this._bulletArea.width = _loc4_.scaleX * _loc_width;
            this._bulletArea.height = _loc4_.scaleY * _loc_height;
            this._bulletArea.x = this._bulletArea.x - this.mc.x;
            this._bulletArea.y = this._bulletArea.y - this.mc.y;
        }
        else {
            this._bulletArea = this.mc.getTransformedBounds(_loc3_);
            this._bulletArea.width = this.mc.scaleX * _loc_width;
            this._bulletArea.height = this.mc.scaleY * _loc_height;
            this._bulletArea.x = this._bulletArea.x - this.mc.x;
            this._bulletArea.y = this._bulletArea.y - this.mc.y;
        }
        this.direct = this.owner.getdirect();
        this.mc.x = this.mc.x + this.owner.getx();
        this.mc.y = this.mc.y + this.owner.gety();
        if (this.owner instanceof FighterMain) {
            _loc2_ = this.owner.getMC();
            this.mc.x = this.mc.x + _loc2_.x;
            this.mc.y = this.mc.y + _loc2_.y;
            this._bulletArea.x = this._bulletArea.x - _loc2_.x;
            this._bulletArea.y = this._bulletArea.y - _loc2_.y;
        }
    };
    Bullet.prototype.destory = function (param1) {
        if (param1 === void 0) { param1 = true; }
        this._destoryed = true;
        if (this.mc) {
            this.mc.ClearFrameScript();
            this.mc.stop();
            this.mc = null;
        }
        this.speed = null;
        this.addSpeed = null;
        this.maxSpeed = null;
        this.minSpeed = null;
        this.hitSpeed = null;
        this.owner = null;
        this._area = null;
        this._orgScale = null;
        this._team = null;
        this._bulletArea = null;
        this._hitVO = null;
        //create by lmj in 2020-7-24
        this._isHit = null;
        this._isTimeout = null;
        this._hitAble = true;
    };
    Bullet.prototype.isDestoryed = function () {
        return this._destoryed;
    };
    Bullet.prototype.renderAnimate = function () {
        this.mc.nextFrame();
        //  var _loc2_:string = this.mc.getCurrPlayLabel();      //获得的label有问题
        var _lab = null;
        var labels = this.mc.getLabels();
        for (var label in labels) {
            if (this.mc.getCurrFrame() >= labels[label].begin && this.mc.getCurrFrame() <= labels[label].end) {
                _lab = label;
                break;
            }
        }
        if ("loop" != _lab) {
            if ("remove" != _lab) {
                if ("hit_over" != _lab) {
                    if (this.mc.getCurrFrame() == this.mc.getTotalFrame() - 1) {
                        this.removeSelf();
                    }
                }
                else {
                    this._hitAble = false;
                }
            }
            else {
                this.removeSelf();
            }
        }
        else {
            if (this._loopFrame == null) {
                if (MCUtils.hasFrameLabel(this.mc, "loop_start")) {
                    this._loopFrame = "loop_start";
                }
                else {
                    this._loopFrame = 1;
                }
            }
            this.mc.gotoAndStop(this._loopFrame);
        }
    };
    Bullet.prototype.render = function () {
        if (this._isHit) {
            return;
        }
        this.mc.x = this.mc.x + this.speed.x * this._speedPlus;
        this.mc.y = this.mc.y + this.speed.y * this._speedPlus;
        this.speed.x = this.speed.x + this.addSpeed.x * this._speedPlus;
        this.speed.y = this.speed.y + this.addSpeed.y * this._speedPlus;
        if (this._direct > 0) {
            if (this.speed.x > this.maxSpeed.x) {
                this.speed.x = this.maxSpeed.x;
            }
            if (this.speed.x < this.minSpeed.x) {
                this.speed.x = this.minSpeed.x;
            }
        }
        else {
            if (this.speed.x < -this.maxSpeed.x) {
                this.speed.x = -this.maxSpeed.x;
            }
            if (this.speed.x > -this.minSpeed.x) {
                this.speed.x = -this.minSpeed.x;
            }
        }
        if (this.speed.y > this.maxSpeed.y) {
            this.speed.y = this.maxSpeed.y;
        }
        if (this.speed.y < this.minSpeed.y) {
            this.speed.y = this.minSpeed.y;
        }
        if (this.holdFrame != -1 && !this._isTimeout) {
            this.holdFrame = this.holdFrame - 1;
            if (this.holdFrame <= 0) {
                if (MCUtils.hasFrameLabel(this.mc, "timeout")) {
                    this._isTimeout = true;
                    this.mc.gotoAndStop("timeout");
                }
                else {
                    this.removeSelf();
                    return;
                }
            }
        }
        if (GameLogic.isTouchBottomFloor(this)) {
            this.hit(this._hitVO, null);
            EffectCtrl.I.shake(0, 1, 200);
            return;
        }
        if (GameLogic.isOutRange(this)) {
            this.removeSelf();
        }
    };
    Bullet.prototype.getDisplay = function () {
        return this.mc;
    };
    Bullet.prototype.removeSelf = function () {
        if (this.onRemove != null) {
            this.onRemove(this);
        }
    };
    Bullet.prototype.doHit = function () {
        if (!this._isHit) {
            try {
                this.mc.gotoAndStop("hit");
            }
            catch (e) {
                // console.log("Bullet", e);
            }
        }
        this._isHit = true;
        this._hitAble = false;
    };
    Bullet.prototype.hit = function (param1, param2) {
        if (param2 instanceof Bullet) {
            if (!isNaN(this.hitSpeed.x)) {
                this.speed.x = this.hitSpeed.x;
            }
            if (!isNaN(this.hitSpeed.y)) {
                this.speed.y = this.hitSpeed.y;
            }
            return;
        }
        if (this.hitTimes != -1) {
            this.hitTimes = this.hitTimes - 1;
            if (this.hitTimes - 1 <= 0) {
                this.doHit();
            }
        }
        if (param2 && this.owner && this.owner instanceof FighterMain) {
            this.owner.addQi(param1.power * 0.1);
            GameLogic.hitTarget(param1, this.owner, param2);
        }
        if (param2) {
            if (this.hitSpeed.x == 0 && this.hitSpeed.y == 0) {
                return;
            }
            if (param2 instanceof BaseGameSprite && param2.getIsTouchSide()) {
                if (isNaN(this.hitSpeed.x)) {
                    this.hitSpeed.x = this.speed.x;
                }
                if (isNaN(this.hitSpeed.y)) {
                    this.hitSpeed.y = this.speed.y;
                }
                this.hitSpeed.x = Math.abs(this.hitSpeed.x) < 1 ? 0 : Number(this.hitSpeed.x * 0.5);
                this.hitSpeed.y = Math.abs(this.hitSpeed.y) < 1 ? 0 : Number(this.hitSpeed.y * 0.5);
            }
            if (!isNaN(this.hitSpeed.x)) {
                this.speed.x = this.hitSpeed.x;
            }
            if (!isNaN(this.hitSpeed.y)) {
                this.speed.y = this.hitSpeed.y;
            }
        }
    };
    Bullet.prototype.beHit = function (param1, param2) {
        if (param2 === void 0) { param2 = null; }
        if (param1.owner && param1.owner instanceof Bullet) {
            this.hp = this.hp - param1.owner.hpMax;
        }
        else {
            this.hp = this.hp - param1.power;
        }
        if (this.hp <= 0) {
            this.doHit();
        }
    };
    Bullet.prototype.getCurrentHits = function () {
        if (!this._hitVO || !this._bulletArea || !this._hitAble) {
            return null;
        }
        this._hitVO.currentArea = this.getCurrentRect(this._bulletArea);
        return [this._hitVO];
    };
    Bullet.prototype.getArea = function () {
        if (!this._bulletArea) {
            return null;
        }
        return this.getCurrentRect(this._bulletArea);
    };
    Bullet.prototype.getBodyArea = function () {
        if (!this._bulletArea) {
            return null;
        }
        return this.getCurrentRect(this._bulletArea);
    };
    Bullet.prototype.getCurrentRect = function (param1) {
        var _loc2_ = this._currentRect;
        _loc2_.x = param1.x * this._direct + this.mc.x;
        if (this._direct < 0) {
            _loc2_.x = _loc2_.x - param1.width;
        }
        _loc2_.y = param1.y + this.mc.y;
        _loc2_.width = param1.width;
        _loc2_.height = param1.height;
        return _loc2_;
    };
    Bullet.prototype.allowCrossMapXY = function () {
        return true;
    };
    Bullet.prototype.allowCrossMapBottom = function () {
        return false;
    };
    Bullet.prototype.getIsTouchSide = function () {
        return false;
    };
    Bullet.prototype.setIsTouchSide = function (param1) {
    };
    return Bullet;
}());
__reflect(Bullet.prototype, "Bullet", ["IGameSprite"]);
//# sourceMappingURL=Bullet.js.map