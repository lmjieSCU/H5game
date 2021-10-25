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
var Assister = (function (_super) {
    __extends(Assister, _super);
    function Assister(param1, param2) {
        var _this = _super.call(this, param1) || this;
        _this._isRenderMainAnimate = true;
        _this._hitAreaCache = new McAreaCacher("hit");
        _this._hitCheckAreaCache = new McAreaCacher("hit_check");
        _this._rectCache = {};
        _this.isAlive = false;
        // if (this._mainMc.setAssistCtrler)
        // {
        //     this._ctrler = new AssisiterCtrler();
        //     this._ctrler.initAssister(this);
        //     this._mainMc.setAssistCtrler(this._ctrler);
        // }
        // else
        // {
        //     throw new Error("初始化失败，SWF未定义setAssistCtrler()");
        // }
        if (_this["setAssistCtrler"]) {
            _this._ctrler = new AssisiterCtrler(param2);
            _this._ctrler.initAssister(_this);
            _this["setAssistCtrler"](_this._ctrler);
        }
        else {
            throw new Error("初始化失败，SWF未定义setAssistCtrler()");
        }
        //设置fightVO
        var heroName = _this.mc._mcName;
        heroName = heroName.substring(7);
        // console.log(AssisterModel.I.getAllAssisters())
        _this.data = AssisterModel.I.getAssister(heroName);
        return _this;
    } // end function
    Object.defineProperty(Assister.prototype, "name", {
        get: function () {
            return this._mainMc.name;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    Assister.prototype.getOwner = function () {
        return this._owner;
    }; // end function
    Assister.prototype.setOwner = function (param1) {
        this._owner = param1;
        return;
    }; // end function
    Assister.prototype.getCtrler = function () {
        return this._ctrler;
    }; // end function
    Assister.prototype.goFight = function () {
        this.gotoAndPlay(2);
        this.isAttacking = true;
        return;
    }; // end function
    Assister.prototype.destory = function (param1) {
        if (param1 === void 0) { param1 = true; }
        if (!param1) {
            return;
        }
        if (this._hitAreaCache) {
            this._hitAreaCache.destory();
            this._hitAreaCache = null;
        }
        if (this._hitCheckAreaCache) {
            this._hitCheckAreaCache.destory();
            this._hitCheckAreaCache = null;
        }
        if (this._ctrler) {
            this._ctrler.destory();
            this._ctrler = null;
        }
        this.data = null;
        this._rectCache = null;
        this._mcOrgPoint = null;
        this._owner = null;
        _super.prototype.destory.call(this, param1);
        return;
    }; // end function
    Assister.prototype.stop = function () {
        this._isRenderMainAnimate = false;
        return;
    }; // end function
    Assister.prototype.gotoAndPlay = function (param1) {
        this._mainMc.gotoAndStop(param1);
        this._isRenderMainAnimate = true;
        return;
    }; // end function
    Assister.prototype.gotoAndStop = function (param1) {
        this._mainMc.gotoAndStop(param1);
        this._isRenderMainAnimate = false;
        return;
    }; // end function
    Assister.prototype.getTargets = function () {
        if (!(this._owner instanceof FighterMain)) {
            return null;
        }
        return this._owner.getTargets();
    }; // end function
    Assister.prototype.removeSelf = function () {
        this.isAttacking = false;
        this.isAlive = false;
        if (this.onRemove != null) {
            this.onRemove(this);
        }
        return;
    }; // end function
    Assister.prototype.render = function () {
        _super.prototype.render.call(this);
        this._ctrler.render();
        return;
    }; // end function
    Assister.prototype.renderAnimate = function () {
        if (!this._isRenderMainAnimate) {
            return;
        }
        _super.prototype.renderAnimate.call(this);
        this.renderChildren();
        this.mc.nextFrame();
        this.findHitArea();
        if (this.mc.getCurrFrame() == (this.mc.getTotalFrame() - 1)) {
            this._ctrler.finish(true);
        }
        return;
    }; // end function
    Assister.prototype.renderChildren = function () {
        var _loc4_ = 0;
        var _loc1_ = null;
        var _loc2_ = null;
        var _loc3_ = 0;
        while (_loc4_ < this._mainMc.numChildren) {
            _loc1_ = this._mainMc.getChildAt(_loc4_);
            if (_loc1_) {
                _loc2_ = _loc1_.name;
                if (!(_loc2_ == "bdmn" || _loc2_.indexOf("atm") != -1)) {
                    _loc3_ = _loc1_.totalFrames;
                    if (_loc3_ >= 2) {
                        var _loc5_ = _loc1_.currentFrameLabel;
                        if ("stop" !== _loc5_) {
                            if (_loc1_.currentFrame == _loc3_) {
                                _loc1_.gotoAndStop(1);
                            }
                            else {
                                _loc1_.nextFrame();
                            }
                        }
                    }
                }
            }
            _loc4_++;
        }
    }; // end function
    Assister.prototype.getHitCheckRect = function (param1) {
        var _loc_2 = this.getCheckHitRect(param1);
        if (_loc_2 == null) {
            return null;
        }
        return this.getCurrentRect(_loc_2, "hit_check");
    }; // end function
    Assister.prototype.getCheckHitRect = function (param1) {
        var _loc_2 = this._mainMc.getChildByName(param1);
        if (!_loc_2) {
            return null;
        }
        var _loc_4 = this._hitCheckAreaCache.getAreaByDisplay(_loc_2);
        if (this._hitCheckAreaCache.getAreaByDisplay(_loc_2)) {
            return _loc_4.area;
        }
        var _loc_3 = _loc_2.getBounds(this._mainMc);
        this._hitCheckAreaCache.cacheAreaByDisplay(_loc_2, _loc_3);
        return _loc_3;
    }; // end function
    Assister.prototype.getCurrentRect = function (param1, param2) {
        if (param2 === void 0) { param2 = null; }
        var _loc_3 = null;
        if (param2 == null) {
            _loc_3 = new egret.Rectangle();
        }
        else if (this._rectCache[param2]) {
            _loc_3 = this._rectCache[param2];
        }
        else {
            _loc_3 = new egret.Rectangle();
            this._rectCache[param2] = _loc_3;
        }
        _loc_3.x = param1.x * this.direct + this._x;
        if (this.direct < 0) {
            _loc_3.x = _loc_3.x - param1.width;
        }
        _loc_3.y = param1.y + this._y;
        _loc_3.width = param1.width;
        _loc_3.height = param1.height;
        return _loc_3;
    }; // end function
    Assister.prototype.findHitArea = function () {
        var _loc_9 = 0;
        var _loc_2 = null;
        var _loc_6 = null;
        var _loc_7 = null;
        var _loc_4 = null;
        var _loc_5 = null;
        if (!this._hitAreaCache) {
            return;
        }
        if (this._hitAreaCache.areaFrameDefined(this._mainMc.getCurrFrame())) {
            return;
        }
        var _loc_3 = this._hitAreaCache.getAreaByFrame(this._mainMc.getCurrFrame());
        if (_loc_3 != null) {
            return;
        }
        var _loc_8 = this._ctrler.hitModel;
        var _loc_1 = [];
        while (_loc_9 < this._mainMc.numChildren) {
            _loc_2 = this._mainMc.getChildAt(_loc_9);
            _loc_6 = _loc_8.getHitVO(_loc_2.name);
            if (!(_loc_2 == null || _loc_6 == null)) {
                _loc_7 = this._hitAreaCache.getAreaByDisplay(_loc_2);
                if (_loc_7 == null) {
                    _loc_4 = _loc_2.getTransformedBounds(this._mainMc);
                    // _loc_4 = new egret.Rectangle(_loc_2.x, _loc_2.y, _loc_2.scaleX * _loc_width, _loc_2.scaleY * _loc_height);
                    _loc_5 = this._hitAreaCache.cacheAreaByDisplay(_loc_2, _loc_4, { hitVO: _loc_6 });
                    _loc_1.push(_loc_5);
                }
                else {
                    _loc_1.push(_loc_7);
                }
            }
            _loc_9++;
        }
        if (_loc_1.length < 1) {
            _loc_1 = null;
        }
        this._hitAreaCache.cacheAreaByFrame(this._mainMc.getCurrFrame(), _loc_1);
        return;
    }; // end function
    Assister.prototype.hit = function (param1, param2) {
        if (param2 && this._owner && this._owner instanceof FighterMain) {
            this._owner.addQi(param1.power * 0.15);
            GameLogic.hitTarget(param1, this._owner, param2);
        }
        return;
    }; // end function
    Assister.prototype.getCurrentHits = function () {
        var _loc_8 = 0;
        var _loc_7 = null;
        var _loc_6 = null;
        var _loc_4 = null;
        var _loc_2 = null;
        var _loc_3 = null;
        if (!this._hitAreaCache) {
            return null;
        }
        var _loc_5 = this._hitAreaCache.getAreaByFrame(this._mainMc.getCurrFrame());
        if (!(this._hitAreaCache.getAreaByFrame(this._mainMc.getCurrFrame())) || _loc_5.length < 1) {
            return null;
        }
        var _loc_1 = [];
        while (_loc_8 < _loc_5.length) {
            _loc_7 = _loc_5[_loc_8];
            _loc_3 = _loc_7.name;
            _loc_6 = _loc_7.hitVO;
            if (_loc_6) {
                _loc_2 = _loc_7.area;
                _loc_6.currentArea = this.getCurrentRect(_loc_2, "hit" + _loc_8);
                _loc_1.push(_loc_6);
            }
            _loc_8++;
        }
        return _loc_1;
    }; // end function
    Assister.prototype.getCurrentTarget = function () {
        if (this._owner instanceof FighterMain) {
            return this._owner.getCurrentTarget();
        }
        return null;
    }; // end function
    return Assister;
}(BaseGameSprite));
__reflect(Assister.prototype, "Assister");
//# sourceMappingURL=Assister.js.map