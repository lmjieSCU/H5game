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
var BaseGameSprite = (function (_super) {
    __extends(BaseGameSprite, _super);
    function BaseGameSprite(param1) {
        var _this = _super.call(this) || this;
        _this.isAllowBeHit = true;
        _this.isCross = false;
        _this.isAlive = true;
        _this.isAllowLoseHP = true;
        _this.isApplyG = true;
        _this.heavy = 2;
        _this.hp = 1000;
        _this.hpMax = 1000;
        _this.defense = 0;
        _this.isAllowCrossX = false;
        _this.isAllowCrossBottom = false;
        _this._attackRate = 1;
        _this._x = 0;
        _this._y = 0;
        _this._g = 0;
        _this._isTouchSide = false;
        _this._direct = 1;
        _this._scale = 1;
        _this._dampingRate = 1;
        _this.id = UUID.create();
        _this._frameFuncs = [];
        _this._frameAnimateFuncs = [];
        _this._speedPlus = GameConfig.SPEED_PLUS;
        _this._velocity = new egret.Point();
        _this._damping = new egret.Point();
        _this._velocity2 = new egret.Point();
        _this._damping2 = new egret.Point();
        _this._x = param1.x;
        _this._y = param1.y; //create by lmj
        _this._mainMc = param1;
        _this._area = _this._mainMc.getBounds();
        return _this;
    }
    Object.defineProperty(BaseGameSprite.prototype, "attackRate", {
        get: function () {
            return this._attackRate;
        },
        set: function (param1) {
            this._attackRate = param1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseGameSprite.prototype, "mc", {
        get: function () {
            return this._mainMc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseGameSprite.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (param1) {
            this._x = param1;
        },
        enumerable: true,
        configurable: true
    });
    BaseGameSprite.prototype.getx = function () {
        return this._x;
    };
    BaseGameSprite.prototype.gety = function () {
        return this._y;
    };
    BaseGameSprite.prototype.setx = function (param1) {
        this._x = param1;
    };
    BaseGameSprite.prototype.sety = function (param1) {
        this._y = param1;
    };
    Object.defineProperty(BaseGameSprite.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (param1) {
            this._y = param1;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseGameSprite.prototype, "scale", {
        get: function () {
            return this._scale;
        },
        set: function (param1) {
            this._scale = param1;
            var _loc2_ = param1;
            this._mainMc.scaleY = _loc2_;
            this._mainMc.scaleX = _loc2_;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseGameSprite.prototype, "direct", {
        get: function () {
            return this._direct;
        },
        set: function (param1) {
            this._direct = param1;
            this._mainMc.scaleX = this._direct * this._scale;
        },
        enumerable: true,
        configurable: true
    });
    BaseGameSprite.prototype.getdirect = function () {
        return this._direct;
    };
    BaseGameSprite.prototype.getteam = function () {
        return this._team;
    };
    BaseGameSprite.prototype.setteam = function (param1) {
        this._team = param1;
    };
    Object.defineProperty(BaseGameSprite.prototype, "team", {
        get: function () {
            return this._team;
        },
        set: function (param1) {
            this._team = param1;
        },
        enumerable: true,
        configurable: true
    });
    BaseGameSprite.prototype.updatePosition = function () {
        this._mainMc.x = this._x;
        this._mainMc.y = this._y;
    };
    BaseGameSprite.prototype.isDestoryed = function () {
        return this._destoryed;
    };
    BaseGameSprite.prototype.destory = function (param1) {
        if (param1 === void 0) { param1 = true; }
        this._destoryed = true;
        this.isAlive = false;
        this.isAllowBeHit = false;
        this.stopRenderSelf();
        if (param1) {
            if (this._mainMc) {
                try {
                    this._mainMc.stop(); //stopAllMovieClips();
                }
                catch (e) {
                    // console.log(e);
                }
                this._mainMc.ClearFrameScript(); //created by lmj in 2020-7-14 for initlize FrameScript array
                this._mainMc = null;
            }
        }
    };
    BaseGameSprite.prototype.renderAnimate = function () {
        if (this._destoryed) {
            return;
        }
        this.renderAnimateFrameOut();
    };
    BaseGameSprite.prototype.render = function () {
        if (this._destoryed) {
            return;
        }
        this.renderVelocity(); //改变坐标
        this.renderFrameOut(); //无事
        this._mainMc.x = this._x;
        this._mainMc.y = this._y;
    };
    BaseGameSprite.prototype.getDisplay = function () {
        return this._mainMc;
    };
    BaseGameSprite.prototype.move = function (param1, param2) {
        if (param1 === void 0) { param1 = 0; }
        if (param2 === void 0) { param2 = 0; }
        if (param1 != 0) {
            this._x = this._x + param1 * this._speedPlus;
        }
        if (param2 != 0) {
            this._y = this._y + param2 * this._speedPlus;
        }
    };
    BaseGameSprite.prototype.setSpeedRate = function (param1) {
        this._speedPlus = param1;
        this._dampingRate = param1 / GameConfig.SPEED_PLUS_DEFAULT;
    };
    BaseGameSprite.prototype.getVelocity = function () {
        return this._velocity;
    };
    BaseGameSprite.prototype.getVecX = function () {
        return this._velocity.x;
    };
    BaseGameSprite.prototype.getVecY = function () {
        return this._velocity.y;
    };
    BaseGameSprite.prototype.setVecX = function (param1) {
        this._velocity.x = param1;
    };
    BaseGameSprite.prototype.setVecY = function (param1) {
        this._velocity.y = param1;
    };
    BaseGameSprite.prototype.setVelocity = function (param1, param2) {
        if (param1 === void 0) { param1 = 0; }
        if (param2 === void 0) { param2 = 0; }
        this._velocity.x = param1;
        this._velocity.y = param2;
        this.setDamping(0, 0);
    };
    BaseGameSprite.prototype.addVelocity = function (param1, param2) {
        if (param1 === void 0) { param1 = 0; }
        if (param2 === void 0) { param2 = 0; }
        this._velocity.x = this._velocity.x + param1;
        this._velocity.y = this._velocity.y + param2;
    };
    BaseGameSprite.prototype.setVec2 = function (param1, param2, param3, param4) {
        if (param1 === void 0) { param1 = 0; }
        if (param2 === void 0) { param2 = 0; }
        if (param3 === void 0) { param3 = 0; }
        if (param4 === void 0) { param4 = 0; }
        this._velocity2.x = param1;
        this._velocity2.y = param2;
        this._damping2.x = param3 * GameConfig.SPEED_PLUS_DEFAULT * 6;
        this._damping2.y = param4 * GameConfig.SPEED_PLUS_DEFAULT * 6;
    };
    BaseGameSprite.prototype.getVec2 = function () {
        return this._velocity2;
    };
    BaseGameSprite.prototype.getDampingX = function () {
        return this._damping.x;
    };
    BaseGameSprite.prototype.getDampingY = function () {
        return this._damping.y;
    };
    BaseGameSprite.prototype.setDampingX = function (param1) {
        this._damping.x = param1;
    };
    BaseGameSprite.prototype.setDampingY = function (param1) {
        this._damping.y = param1;
    };
    BaseGameSprite.prototype.setDamping = function (param1, param2) {
        if (param1 === void 0) { param1 = 0; }
        if (param2 === void 0) { param2 = 0; }
        this._damping.x = param1 * GameConfig.SPEED_PLUS_DEFAULT * 2;
        this._damping.y = param2 * GameConfig.SPEED_PLUS_DEFAULT * 2;
    };
    BaseGameSprite.prototype.addDamping = function (param1, param2) {
        if (param1 === void 0) { param1 = 0; }
        if (param2 === void 0) { param2 = 0; }
        this._damping.x = this._damping.x + param1;
        this._damping.y = this._damping.y + param2;
    };
    BaseGameSprite.prototype.renderVelocity = function () {
        var _loc1_ = 0;
        var _loc2_ = 0;
        if (this._velocity.x != 0) {
            _loc1_ = Number(_loc1_ + this._velocity.x);
            if (this._damping.x > 0) {
                this._velocity.x = KyoUtils.num_wake(this._velocity.x, this._damping.x * this._dampingRate);
            }
        }
        if (this._velocity.y != 0) {
            _loc2_ = Number(_loc2_ + this._velocity.y);
            if (this._damping.y > 0) {
                this._velocity.y = KyoUtils.num_wake(this._velocity.y, this._damping.y * this._dampingRate);
            }
        }
        if (this._velocity2.x != 0) {
            _loc1_ = Number(_loc1_ + this._velocity2.x);
            if (this._damping2.x > 0) {
                this._velocity2.x = KyoUtils.num_wake(this._velocity2.x, this._damping2.x * this._dampingRate);
            }
        }
        if (this._velocity2.y != 0) {
            _loc2_ = Number(_loc2_ + this._velocity2.y);
            if (this._damping2.y > 0) {
                this._velocity2.y = KyoUtils.num_wake(this._velocity2.y, this._damping2.y * this._dampingRate);
            }
        }
        if (_loc1_ != 0 || _loc2_ != 0) {
            this.move(_loc1_, _loc2_);
        }
    };
    BaseGameSprite.prototype.applayG = function (param1) {
        var _loc2_ = NaN;
        if (!this.isApplyG) {
            this._g = 0;
            return;
        }
        if (this._velocity.y < 0) {
            this._g = 0;
            return;
        }
        if (this._g < param1) {
            _loc2_ = 2 * GameConfig.SPEED_PLUS;
            this._g = this._g + _loc2_;
            if (this._g > param1) {
                this._g = param1;
            }
        }
        this.move(0, this._g);
    };
    BaseGameSprite.prototype.setInAir = function (param1) {
        if (!param1) {
            this._g = 4;
        }
        this.isInAir = param1;
    };
    BaseGameSprite.prototype.hit = function (param1, param2) {
        var _loc3_ = null;
        var _loc6_ = null;
        var _loc7_ = null;
        var _loc4_ = 0;
        var _loc5_ = 0;
        if (param2 && param2.getDisplay()) {
            _loc3_ = this.getDisplay();
            _loc6_ = param2.getDisplay();
            if (_loc3_ && _loc6_ && _loc3_.parent && _loc3_.parent == _loc6_.parent) {
                _loc7_ = _loc3_.parent;
                _loc4_ = _loc7_.getChildIndex(_loc3_);
                _loc5_ = _loc7_.getChildIndex(_loc6_);
                if (_loc4_ != -1 && _loc5_ != -1 && _loc4_ < _loc5_) {
                    _loc7_.setChildIndex(_loc6_, _loc4_);
                    _loc7_.setChildIndex(_loc3_, _loc5_);
                }
            }
        }
    };
    BaseGameSprite.prototype.beHit = function (param1, param2) {
        if (param2 === void 0) { param2 = null; }
    };
    BaseGameSprite.prototype.getCurrentHits = function () {
        return null;
    };
    BaseGameSprite.prototype.getArea = function () {
        if (!this._area) {
            return null;
        }
        var _loc1_ = this._area.clone();
        _loc1_.x = _loc1_.x + this._x;
        _loc1_.y = _loc1_.y + this._y;
        return _loc1_;
    };
    BaseGameSprite.prototype.getBodyArea = function () {
        return null;
    };
    BaseGameSprite.prototype.allowCrossMapXY = function () {
        return this.isAllowCrossX;
    };
    BaseGameSprite.prototype.allowCrossMapBottom = function () {
        return this.isAllowCrossBottom;
    };
    BaseGameSprite.prototype.getIsTouchSide = function () {
        return this._isTouchSide;
    };
    BaseGameSprite.prototype.setIsTouchSide = function (param1) {
        this._isTouchSide = param1;
    };
    BaseGameSprite.prototype.addHp = function (param1) {
        this.hp = this.hp + param1;
        if (this.hp > this.hpMax) {
            this.hp = this.hpMax;
        }
    };
    BaseGameSprite.prototype.loseHp = function (param1) {
        if (!this.isAllowLoseHP) {
            return;
        }
        this.hp = this.hp - (param1 - this.defense);
        if (this.hp < 0) {
            this.isAlive = false;
            this.hp = 0;
        }
    };
    BaseGameSprite.prototype.delayCall = function (param1, param2, param3) {
        this._frameFuncs.push({
            "func": param1,
            "frame": param2,
            "call_object": param3
        });
    };
    BaseGameSprite.prototype.renderSelf = function () {
        //GameRender.add(this.renderSelfEnterFrame,this);
    };
    BaseGameSprite.prototype.renderSelfEnterFrame = function () {
        if (this._destoryed) {
            return;
        }
        try {
            this.render();
            this.renderAnimate();
            return;
        }
        catch (e) {
            //Debugger.log("BaseGameSprite.renderSelfEnterFrame",e);
            return;
        }
    };
    BaseGameSprite.prototype.stopRenderSelf = function () {
        //GameRender.remove(this.renderSelfEnterFrame,this);
    };
    BaseGameSprite.prototype.setAnimateFrameOut = function (param1, param2, param3) {
        this._frameAnimateFuncs.push({
            "func": param1,
            "frame": param2,
            "call_object": param3
        });
    };
    BaseGameSprite.prototype.renderAnimateFrameOut = function () {
        var _loc2_ = 0;
        var _loc1_ = null;
        if (this._frameAnimateFuncs.length < 1) {
            return;
        }
        while (_loc2_ < this._frameAnimateFuncs.length) {
            _loc1_ = this._frameAnimateFuncs[_loc2_];
            _loc1_.frame = Number(_loc1_.frame) - 1;
            if (_loc1_.frame < 1) {
                _loc1_.func.call(_loc1_.call_object);
                this._frameAnimateFuncs.splice(_loc2_, 1);
            }
            _loc2_++;
        }
    };
    BaseGameSprite.prototype.renderFrameOut = function () {
        var _loc2_ = 0;
        var _loc1_ = null;
        if (this._frameFuncs.length < 1) {
            return;
        }
        while (_loc2_ < this._frameFuncs.length) {
            _loc1_ = this._frameFuncs[_loc2_];
            _loc1_.frame = Number(_loc1_.frame) - 1;
            if (_loc1_.frame < 1) {
                _loc1_.func.call(_loc1_.call_object);
                this._frameFuncs.splice(_loc2_, 1);
            }
            _loc2_++;
        }
    };
    return BaseGameSprite;
}(egret.EventDispatcher));
__reflect(BaseGameSprite.prototype, "BaseGameSprite", ["IGameSprite"]);
//# sourceMappingURL=BaseGameSprite.js.map