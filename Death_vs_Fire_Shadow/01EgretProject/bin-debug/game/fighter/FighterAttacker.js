/*
*子动画
*onRemove：移除自身函数
*_ctrler：对应的attacker控制器
*moveToTarget：子动画初始坐标与敌人坐标相关,初始化时将子动画设至敌人处
*followTarget：子动画坐标与敌人坐标相关,渲染时将子动画跟踪至敌人处
*/
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
var FighterAttacker = (function (_super) {
    __extends(FighterAttacker, _super);
    function FighterAttacker(param1, param2) {
        if (param2 === void 0) { param2 = null; }
        var _this = _super.call(this, param1) || this;
        _this._startX = 0;
        _this._startY = 0;
        _this._isRenderMainAnimate = true;
        _this._hitAreaCache = new McAreaCacher("hit");
        _this._hitCheckAreaCache = new McAreaCacher("hit_check");
        _this._rectCache = {};
        _this._mcOrgPoint = new egret.Point(param1.x, param1.y);
        _this._startX = _this._mcOrgPoint.x;
        _this._startY = _this._mcOrgPoint.y;
        _this._x = _this._startX;
        _this._y = _this._startY;
        //相对初始坐标，固定不变
        _this._ctrler = new FighterAttackerCtrler(_this);
        if (param2) {
            if (param2.x != undefined) {
                if (typeof (param2.x) == "number") {
                    _this._startX = param2.x + _this._mcOrgPoint.x;
                }
                else {
                    _this.moveToTargetX = param2.x.moveToTarget == true;
                    _this.followTargetX = param2.x.followTarget == true;
                    if (param2.x.offset != undefined) {
                        _this._startX = param2.x.offset;
                    }
                    if (param2.x.range != undefined && param2.x.range instanceof Array) {
                        _this.rangeX = new egret.Point(param2.x.range[0], param2.x.range[1]);
                    }
                }
            }
            if (param2.y != undefined) {
                if (typeof (param2.y) == "number") {
                    _this._startY = param2.y + _this._mcOrgPoint.y;
                }
                else {
                    _this.moveToTargetY = param2.y.moveToTarget == true;
                    _this.followTargetY = param2.y.followTarget == true;
                    if (param2.y.offset != undefined) {
                        _this._startY = param2.y.offset;
                    }
                    if (param2.y.range != undefined && param2.y.range instanceof Array) {
                        _this.rangeY = new egret.Point(param2.y.range[0], param2.y.range[1]);
                    }
                }
            }
            if (param2.applyG != undefined) {
                _this.isApplyG = param2.applyG == true;
            }
        }
        return _this;
    } // end 
    FighterAttacker.prototype.getOwner = function () {
        return this._owner;
    }; // end 
    Object.defineProperty(FighterAttacker.prototype, "name", {
        get: function () {
            return this._mainMc.name;
        } // end 
        ,
        enumerable: true,
        configurable: true
    });
    FighterAttacker.prototype.getCtrler = function () {
        return this._ctrler;
    }; // end 
    FighterAttacker.prototype.destory = function (param1) {
        if (param1 === void 0) { param1 = true; }
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
        this._rectCache = null;
        this._owner = null;
        this._mcOrgPoint = null;
        _super.prototype.destory.call(this, true);
        return;
    }; // end 
    //设置所属的fightermain
    FighterAttacker.prototype.setOwner = function (param1) {
        this._owner = param1;
        this.direct = param1.getdirect();
        if (this._owner instanceof FighterMain) {
            this._ctrler.effect = this._owner.getCtrler().getEffectCtrl();
        }
        if (this._owner instanceof Assister) {
            this._ctrler.effect = this._owner.getCtrler().effect;
        }
        return;
    }; // end 
    //初始化子动画坐标
    FighterAttacker.prototype.init = function () {
        var _loc_6 = null;
        var _loc_2 = NaN;
        var _loc_3 = NaN;
        var _loc_1 = NaN;
        var _loc_4 = NaN;
        if (!this._owner) {
            return;
        }
        if (this.direct > 0) {
            this._x = this._owner.getx() + this._startX;
        }
        else {
            this._x = this._owner.getx() - this._startX;
        }
        this._y = this._y + this._owner.gety();
        if (!this.moveToTargetX && !this.moveToTargetY) {
            return;
        }
        var _loc_5 = this.getTarget(); //对手
        if (this.getTarget()) {
            if (this.moveToTargetX) {
                _loc_2 = _loc_5.getx() + this._startX * this.direct;
                if (this.rangeX) {
                    if (this.direct > 0) {
                        _loc_3 = _loc_2 - this._owner.getx();
                        if (_loc_3 < this.rangeX.x) {
                            _loc_2 = this._owner.getx() + this.rangeX.x;
                        }
                        if (_loc_3 > this.rangeX.y) {
                            _loc_2 = this._owner.getx() + this.rangeX.y;
                        }
                    }
                    else {
                        _loc_3 = this._owner.getx() - _loc_2;
                        if (_loc_3 < this.rangeX.x) {
                            _loc_2 = this._owner.getx() - this.rangeX.x;
                        }
                        if (_loc_3 > this.rangeX.y) {
                            _loc_2 = this._owner.getx() - this.rangeX.y;
                        }
                    }
                }
                this._x = _loc_2;
            }
            if (this.moveToTargetY) {
                _loc_1 = _loc_5.gety() + this._startY;
                if (this.rangeY) {
                    _loc_4 = _loc_1 - this._owner.gety();
                    if (_loc_4 < this.rangeY.x) {
                        _loc_1 = _loc_5.gety() + this.rangeY.x;
                    }
                    if (_loc_4 > this.rangeY.y) {
                        _loc_1 = _loc_5.gety() + this.rangeY.y;
                    }
                }
                this._y = _loc_1;
            }
        }
        this.isAttacking = true;
        return;
    }; // end 
    FighterAttacker.prototype.renderAnimate = function () {
        if (!this._isRenderMainAnimate) {
            return;
        }
        _super.prototype.renderAnimate.call(this);
        this.mc.nextFrame();
        this.findHitArea();
        if (!this.mc) {
            return;
        }
        if (this.mc.getCurrFrame() == this.mc.getTotalFrame() - 1) {
            this.removeSelf();
        }
        return;
    }; // end 
    FighterAttacker.prototype.render = function () {
        _super.prototype.render.call(this);
        this._ctrler.render();
        this.renderFollowTarget();
        return;
    }; // end 
    FighterAttacker.prototype.stopFollowTarget = function () {
        this.followTargetX = false;
        this.followTargetY = false;
        return;
    }; // end 
    FighterAttacker.prototype.renderFollowTarget = function () {
        if (!this.followTargetX && !this.followTargetY) {
            return;
        }
        var _loc_1 = this.getTarget();
        if (!_loc_1) {
            return;
        }
        if (this.followTargetX) {
            this._x = _loc_1.getx() + this._startX * this.direct;
        }
        if (this.followTargetY) {
            this._y = _loc_1.gety() + this._startY;
        }
        return;
    }; // end 
    FighterAttacker.prototype.moveToTarget = function (param1, param2) {
        if (param1 === void 0) { param1 = NaN; }
        if (param2 === void 0) { param2 = NaN; }
        var _loc_3 = this.getTarget();
        if (!_loc_3) {
            return;
        }
        if (!Flash.isNaN(param1)) {
            this._x = _loc_3.getx() + param1 * this.direct;
        }
        if (!Flash.isNaN(param2)) {
            this._y = _loc_3.gety() + param2;
        }
        return;
    }; // end 
    FighterAttacker.prototype.stop = function () {
        this._isRenderMainAnimate = false;
        return;
    }; // end 
    FighterAttacker.prototype.gotoAndPlay = function (param1) {
        this._mainMc.gotoAndStop(param1);
        this._isRenderMainAnimate = true;
        return;
    }; // end 
    FighterAttacker.prototype.gotoAndStop = function (param1) {
        this._mainMc.gotoAndStop(param1);
        this._isRenderMainAnimate = false;
        return;
    }; // end 
    FighterAttacker.prototype.getTargets = function () {
        if (this._owner instanceof FighterMain) {
            return this._owner.getTargets();
        }
        if (this._owner instanceof Assister) {
            return this._owner.getTargets();
        }
        return null;
    }; // end 
    FighterAttacker.prototype.getTarget = function () {
        if (this._owner instanceof FighterMain) {
            return this._owner.getCurrentTarget();
        }
        if (this._owner instanceof Assister) {
            return this._owner.getCurrentTarget();
        }
        return null;
    }; // end 
    FighterAttacker.prototype.removeSelf = function () {
        if (this.onRemove != null) {
            this.onRemove(this);
        }
        return;
    }; // end 
    FighterAttacker.prototype.getCurrentHits = function () {
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
    }; // end 
    FighterAttacker.prototype.getHitCheckRect = function (param1) {
        var _loc_2 = this.getCheckHitRect(param1);
        if (_loc_2 == null) {
            return null;
        }
        return this.getCurrentRect(_loc_2, "hit_check");
    }; // end 
    FighterAttacker.prototype.getCheckHitRect = function (param1) {
        var _loc_2 = this._mainMc.getChildByName(param1);
        if (!_loc_2) {
            return null;
        }
        var _loc_4 = this._hitCheckAreaCache.getAreaByDisplay(_loc_2);
        if (this._hitCheckAreaCache.getAreaByDisplay(_loc_2)) {
            return _loc_4.area;
        }
        var _loc_3 = _loc_2.getTransformedBounds(this._mainMc);
        _loc_3.width = _loc_width * _loc_2.scaleX;
        _loc_3.height = _loc_height * _loc_2.scaleY;
        this._hitCheckAreaCache.cacheAreaByDisplay(_loc_2, _loc_3);
        return _loc_3;
    }; // end 
    FighterAttacker.prototype.getCurrentRect = function (param1, param2) {
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
    }; // end 
    FighterAttacker.prototype.getHitModel = function () {
        if (this._owner instanceof FighterMain) {
            return this._owner.getCtrler().hitModel;
        }
        if (this._owner instanceof Assister) {
            return this._owner.getCtrler().hitModel;
        }
        //throw new Error("不支持的owner类型!");
        return null;
    }; // end 
    //  若该帧下有hitVO,将其hitArea存至_hitAreaCache以便碰撞检测使用
    FighterAttacker.prototype.findHitArea = function () {
        var _loc_9 = 0;
        var _loc_2 = null;
        var _loc_6 = null;
        var _loc_7 = null;
        var _loc_4 = null;
        var _loc_5 = null;
        if (!this._hitAreaCache) {
            return;
        }
        var _loc_8 = this.getHitModel();
        if (!this.getHitModel()) {
            return;
        }
        if (this._hitAreaCache.areaFrameDefined(this._mainMc.getCurrFrame())) {
            return;
        }
        var _loc_3 = this._hitAreaCache.getAreaByFrame(this._mainMc.getCurrFrame());
        if (_loc_3 != null) {
            return;
        }
        var _loc_1 = [];
        while (_loc_9 < this._mainMc.numChildren) {
            _loc_2 = this._mainMc.getChildAt(_loc_9);
            _loc_6 = _loc_8.getHitVOByDisplayName(_loc_2.name);
            if (!(_loc_2 == null || _loc_6 == null)) {
                _loc_7 = this._hitAreaCache.getAreaByDisplay(_loc_2);
                if (_loc_7 == null) {
                    _loc_4 = new egret.Rectangle(_loc_2.x, _loc_2.y, _loc_2.scaleX * _loc_width, _loc_2.scaleY * _loc_height); //-(_loc_2.rotation/90)*_loc_2.scaleX * _loc_width
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
    }; // end 
    FighterAttacker.prototype.getOwnerFighter = function () {
        if (this._owner instanceof FighterMain) {
            return this._owner;
        }
        if (this._owner instanceof Assister) {
            return this._owner.getOwner();
        }
        return null;
    }; // end 
    FighterAttacker.prototype.hit = function (param1, param2) {
        var _loc_3 = NaN;
        var _loc_4 = this.getOwnerFighter();
        if (param2 && _loc_4) {
            _loc_3 = this._owner instanceof Assister ? (0.15) : (0.13);
            _loc_4.addQi(param1.power * _loc_3);
            GameLogic.hitTarget(param1, _loc_4, param2); //zhushi by lmj in 2020-7-13
        }
        return;
    }; // end 
    return FighterAttacker;
}(BaseGameSprite));
__reflect(FighterAttacker.prototype, "FighterAttacker");
//# sourceMappingURL=FighterAttacker.js.map