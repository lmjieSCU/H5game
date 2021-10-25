var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*绑定zmoiveClip,通过goframe函数实现动作
*
*
*/
var _loc_width = 65.95;
var _loc_height = 40.5;
var FighterMC = (function () {
    function FighterMC() {
        this._renderMainAnimate = false;
        this._renderMainAnimateFrame = 0;
        this._undefinedFrames = [];
        this._hurtFlyFrame = 0;
        this._hurtFlyState = -1;
        this._hurtYMin = 0;
        this._goFrameDelay = null;
        this._hitx = 0;
        this._hity = 0;
        this._undefinedFrames = [];
        this._bodyAreaCache = new McAreaCacher("body");
        this._hitAreaCache = new McAreaCacher("hit");
        this._hitCheckAreaCache = new McAreaCacher("hit_check");
        return;
    } // end function
    Object.defineProperty(FighterMC.prototype, "currentFrameName", {
        get: function () {
            return this._curFrameName;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FighterMC.prototype, "currentFrameCount", {
        get: function () {
            return this._curFrameCount;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FighterMC.prototype, "x", {
        get: function () {
            return this._mc.x;
        } // end function
        ,
        set: function (param1) {
            this._mc.x = this.x;
            return;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FighterMC.prototype, "y", {
        get: function () {
            return this._mc.y;
        } // end function
        ,
        set: function (param1) {
            this._mc.y = param1;
            return;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    FighterMC.prototype.initlize = function (param1, param2, param3) {
        this._mc = param1;
        this._fighter = param2;
        this._fighterDisplay = param2.getDisplay();
        this._mcCtrler = param3;
        param3.setMc(this);
        return;
    }; // end function
    FighterMC.prototype.destory = function () {
        if (this._bodyAreaCache) {
            this._bodyAreaCache.destory();
            this._bodyAreaCache = null;
        }
        if (this._hitAreaCache) {
            this._hitAreaCache.destory();
            this._hitAreaCache = null;
        }
        if (this._hitCheckAreaCache) {
            this._hitCheckAreaCache.destory();
            this._hitCheckAreaCache = null;
        }
        this._fighter = null;
        this._fighterDisplay = null;
        this._undefinedFrames = null;
        return;
    }; // end function
    FighterMC.prototype.getChildByName = function (param1) {
        return this._mc.getChildByName(param1);
    }; // end function
    /**
     * 渲染动画,执行_goFrameDelay
     * _renderMainAnimate:为true则渲染动画,false则不渲染
     * _renderMainAnimateFrame：渲染动画帧数
     */
    FighterMC.prototype.renderAnimate = function () {
        // if(this._fighter.team.id == 2){
        // console.log(this._mc.getCurrFrame())
        // }
        if (this._renderMainAnimate) {
            if (this._renderMainAnimateFrame > 0) {
                this._renderMainAnimateFrame = this._renderMainAnimateFrame - 1;
                if ((this._renderMainAnimateFrame - 1) <= 0) {
                    this._renderMainAnimate = false;
                }
                this._curMainFrameCount = this._curMainFrameCount + 1;
            }
            this._mc.nextFrame();
        }
        this.renderChildren();
        this.findBodyArea(); //存储每帧对应的Rectangle于_bodyAreaCache，用于实现人物碰撞
        this.findHitArea(); //存储每帧对应的Rectangle于_hitAreaCache，用于实现技能碰撞
        if (this._hurtFlyState != 0) {
            this.renderHurtFly();
        }
        this._curFrameCount = this._curFrameCount + 1;
        if (this._goFrameDelay) {
            var _loc_1 = this._goFrameDelay.delay;
            this._goFrameDelay.delay = this._goFrameDelay.delay - 1;
            if (_loc_1 <= 0) {
                if (this._goFrameDelay.call != undefined) {
                    this._goFrameDelay.call();
                }
                else {
                    this.goFrame(this._goFrameDelay.name, this._goFrameDelay.isPlay, this._goFrameDelay.playFrame, null);
                }
                this._goFrameDelay = null;
            }
        }
        return;
    }; // end function
    FighterMC.prototype.renderChildren = function () {
        var _loc5_ = 0;
        var _loc1_ = null;
        var _loc3_ = null;
        var _loc4_ = 0;
        var _loc2_ = this._mc.numChildren;
        _loc5_ = 0;
        while (_loc5_ < _loc2_) {
            _loc1_ = this._mc.getChildAt(_loc5_);
            if (_loc1_) {
                _loc3_ = _loc1_.name;
                if (!(_loc3_ == "AImain" || _loc3_ == "bdmn" || _loc3_.indexOf("atm") != -1)) {
                    _loc4_ = _loc1_.totalFrames;
                    if (_loc4_ >= 2) {
                        var _loc6_ = _loc1_.currentFrameLabel;
                        if ("stop" !== _loc6_) {
                            if (_loc1_.currentFrame == _loc4_) {
                                _loc1_.gotoAndStop(1);
                            }
                            else {
                                _loc1_.nextFrame();
                            }
                        }
                    }
                }
            }
            _loc5_++;
        }
    }; // end function
    /*
    * goFrame:跳到该动作头帧;设置渲染动画参数;定义后续动作
    * param1:执行的动作名;
    * param2:是否param1渲染动画，true则渲染，false则否;
    * param3:渲染param1动画帧数;
    * param4:goframe函数执行后,之后在renderAnimate()中执行param4;
                param4.name：执行的动作名
                param4.isplay:是否渲染param4.name动画
                param4.playFrame:渲染param4.name动画帧数
                param4.call:若存在,则经过delay帧后执行param4.call(),若不存在执行goFrame(param4.name,param4.isPlay, param4.playFrame, null);
    */
    FighterMC.prototype.goFrame = function (param1, param2, param3, param4) {
        if (param2 === void 0) { param2 = true; }
        if (param3 === void 0) { param3 = 0; }
        if (param4 === void 0) { param4 = null; }
        this._curFrameName = param1;
        this._curMainFrameCount = 0;
        this._curFrameCount = 0;
        this._renderMainAnimate = param2;
        if (this._renderMainAnimate) {
            this._renderMainAnimateFrame = param3;
        }
        else {
            this._renderMainAnimateFrame = 0;
        }
        if (param4 && (param4["name"] || param4["call"]) && param4["delay"] > 0) {
            param4.isPlay = param4.isPlay != undefined ? (param4.isPlay) : (true);
            param4.playFrame = param4.playFrame != undefined ? (param4.playFrame) : (0);
            this._goFrameDelay = param4;
        }
        else {
            this._goFrameDelay = null;
        }
        this._mc.gotoAndStop(param1);
        this.renderChildren();
        return;
    }; // end function
    FighterMC.prototype.stopRenderMainAnimate = function () {
        this._renderMainAnimate = false;
        return;
    }; // end function
    FighterMC.prototype.resumeRenderMainAnimate = function () {
        this._renderMainAnimate = true;
        return;
    }; // end function
    FighterMC.prototype.checkFrame = function (param1) {
        if (this._undefinedFrames.indexOf(param1) != -1) {
            return false;
        }
        if (MCUtils.hasFrameLabel(this._mc, param1)) {
            return true;
        }
        this._undefinedFrames.push(param1);
        return false;
    }; // end function
    FighterMC.prototype.getCurrentHitSprite = function () {
        var _loc_3 = 0;
        var _loc_1 = null;
        var _loc_2 = [];
        while (_loc_3 < this._mc.numChildren) {
            _loc_1 = this._mc.getChildAt(_loc_3);
            if (_loc_1 && _loc_1.name.indexOf("atm") != -1) {
                _loc_2.push(_loc_1);
            }
            _loc_3++;
        }
        return _loc_2;
    }; // end function
    FighterMC.prototype.getCurrentBodyArea = function () {
        var _loc_1 = this._bodyAreaCache.getAreaByFrame(this._mc.getCurrFrame());
        if (_loc_1) {
            return _loc_1.area;
        }
        return null;
    }; // end function
    FighterMC.prototype.getCurrentHitArea = function () {
        return this._hitAreaCache.getAreaByFrame(this._mc.getCurrFrame());
    }; // end function
    FighterMC.prototype.getCheckHitRect = function (param1) {
        var _loc_2 = this._mc.getChildByName(param1);
        if (!_loc_2) {
            return null;
        }
        var _loc_4 = this._hitCheckAreaCache.getAreaByDisplay(_loc_2);
        if (this._hitCheckAreaCache.getAreaByDisplay(_loc_2)) {
            return _loc_4["area"];
        }
        var _loc_3 = _loc_2.getTransformedBounds(this._fighterDisplay);
        _loc_3.width = _loc_2.scaleX * _loc_width;
        _loc_3.height = _loc_2.scaleY * _loc_height;
        this._hitCheckAreaCache.cacheAreaByDisplay(_loc_2, _loc_3);
        return _loc_3;
    }; // end function
    FighterMC.prototype.findBodyArea = function () {
        var _loc_2 = null;
        if (!this._bodyAreaCache) {
            return;
        }
        if (this._bodyAreaCache.areaFrameDefined(this._mc.getCurrFrame())) {
            return;
        }
        var _loc_1 = this._bodyAreaCache.getAreaByFrame(this._mc.getCurrFrame());
        if (_loc_1 != null) {
            return;
        }
        var _loc_3 = this._mc.getChildByName("bdmn");
        if (_loc_3) {
            _loc_1 = this._bodyAreaCache.getAreaByDisplay(_loc_3);
            if (_loc_1 == null) {
                _loc_2 = _loc_3.getTransformedBounds(this._fighterDisplay); //area
                _loc_2.width = _loc_width * _loc_3.scaleX;
                _loc_2.height = _loc_height * _loc_3.scaleY;
                _loc_1 = this._bodyAreaCache.cacheAreaByDisplay(_loc_3, _loc_2); //{name,area}
            }
        }
        this._bodyAreaCache.cacheAreaByFrame(this._mc.getCurrFrame(), _loc_1); //framecache[frame] = (name,area)
        return;
    }; // end function
    FighterMC.prototype.findHitArea = function () {
        var _loc_9 = 0;
        var _loc_2 = null;
        var _loc_6 = null;
        var _loc_7 = null;
        var _loc_4 = null;
        var _loc_5 = null;
        if (!this._hitAreaCache) {
            return;
        }
        if (this._hitAreaCache.areaFrameDefined(this._mc.getCurrFrame())) {
            return;
        }
        var _loc_3 = this._hitAreaCache.getAreaByFrame(this._mc.getCurrFrame());
        if (_loc_3 != null) {
            return;
        }
        if ([10, 11, 12, 13, 16, 40].indexOf(this._fighter.actionState) == -1) {
            this._hitAreaCache.cacheAreaByFrame(this._mc.getCurrFrame(), null);
            return;
        }
        var _loc_8 = this._fighter.getCtrler().hitModel;
        var _loc_1 = [];
        while (_loc_9 < this._mc.numChildren) {
            _loc_2 = this._mc.getChildAt(_loc_9);
            _loc_6 = _loc_8.getHitVOByDisplayName(_loc_2.name); //AImain,null,bdmn,huo,fenshen,k1atm..
            if (!(_loc_2 == null || _loc_6 == null)) {
                _loc_7 = this._hitAreaCache.getAreaByDisplay(_loc_2);
                var currFrame = this._mc.currFrame;
                if (_loc_7 == null) {
                    _loc_4 = _loc_2.getTransformedBounds(this._fighterDisplay); //area
                    _loc_4.width = _loc_width * _loc_2.scaleX;
                    _loc_4.height = _loc_height * _loc_2.scaleY;
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
        // if(this._fighter.team.id == 2){
        //     console.log(this._mc.getCurrFrame(), _loc_1)       
        //  }
        this._hitAreaCache.cacheAreaByFrame(this._mc.getCurrFrame(), _loc_1);
        return;
    }; // end function
    FighterMC.prototype.playHurtFly = function (param1, param2, param3) {
        if (param3 === void 0) { param3 = true; }
        if (param1 != 0) {
            this._fighter.direct = param1 > 0 ? (-1) : (1);
        }
        if (param3) {
            this.goFrame("被打", false, 0, { name: "击飞", delay: 1, isPlay: false });
        }
        else {
            this.goFrame("击飞", false);
        }
        if (param2 > 5) {
            this._hurtFlyFrame = 0;
            this._isHeavyDownAttack = true;
        }
        else {
            this._isHeavyDownAttack = false;
            this._hurtFlyFrame = 15;
        }
        this._fighter.setVelocity(param1, param2);
        this._fighter.setDamping(0, 0.5);
        this._hurtFlyState = 1;
        this._hurtYMin = this._fighter.y;
        this._hitx = param1;
        this._hity = param2;
        return;
    }; // end function
    FighterMC.prototype.playHurtDown = function () {
        var delay_action = this.playHurtDown2.bind(this);
        this.goFrame("击飞_弹", false, 0, { call: delay_action, delay: 2 });
        this._mcCtrler.effectCtrler.shake(0, 2);
        this._mcCtrler.effectCtrler.hitFloor(1);
        this._fighter.setDamping(2);
        return;
    }; // end function
    FighterMC.prototype.playHurtDown2 = function () {
        this.goFrame("击飞_倒", false);
        this._hurtDownFrame = 15;
        this._hurtFlyState = 4;
        this._mcCtrler.touchFloor();
        this._fighter.actionState = 23;
        FighterEventDispatcher.dispatchEvent(this._fighter, "HURT_DOWN");
        return;
    }; // end function
    FighterMC.prototype.stopHurtFly = function () {
        this._hurtFlyState = 0;
        return;
    }; // end function
    FighterMC.prototype.renderHurtFly = function () {
        var _loc1_ = NaN;
        var _loc2_ = NaN;
        _loc1_ = NaN;
        _loc2_ = NaN;
        switch (this._hurtFlyState - 1) {
            case 0:
                this._hurtFlyFrame = this._hurtFlyFrame - 1;
                if (this._hurtFlyFrame - 1 <= 0 && !this._fighter.isInAir) {
                    this.goFrame("击飞_落");
                    this._hurtFlyState = 2;
                }
                if (this._hurtYMin > this._fighter.y) {
                    this._hurtYMin = this._fighter.y;
                }
                break;
            case 1:
                if (this._curFrameCount < 2) {
                    return;
                }
                if (this._isHeavyDownAttack) {
                    this._hurtDownFrame = 30;
                    this.goFrame("击飞_倒", false);
                    this._fighter.actionState = 23;
                    FighterEventDispatcher.dispatchEvent(this._fighter, "HURT_DOWN");
                    this._fighter.setDamping(4);
                    this._hurtFlyState = 4;
                    _loc1_ = this._fighter.y - this._hurtYMin;
                    _loc2_ = Number(_loc1_ / 25 * (1 + this._hity * 0.1));
                    if (_loc2_ < 5) {
                        _loc2_ = 5;
                    }
                    if (_loc2_ > 10) {
                        _loc2_ = 10;
                    }
                    this._mcCtrler.effectCtrler.shake(0, _loc2_);
                    this._mcCtrler.effectCtrler.hitFloor(2);
                }
                else {
                    this.goFrame("击飞_弹", false);
                    _loc1_ = this._fighter.y - this._hurtYMin;
                    _loc2_ = Number(_loc1_ / 25);
                    if (_loc2_ < 3) {
                        _loc2_ = 3;
                    }
                    if (_loc2_ > 8) {
                        _loc2_ = 8;
                    }
                    this._fighter.setVecY(-_loc2_);
                    this._hurtFlyState = 3;
                    this._fighter.actionState = 24;
                    if (_loc2_ < 2) {
                        _loc2_ = 2;
                    }
                    if (_loc2_ > 5) {
                        _loc2_ = 5;
                    }
                    this._mcCtrler.effectCtrler.shake(0, _loc2_);
                    this._mcCtrler.effectCtrler.hitFloor(0);
                }
                break;
            case 2:
                if (this._curFrameCount < 2) {
                    return;
                }
                if (this._fighter.isInAir) {
                    return;
                }
                this.goFrame("击飞_倒", false);
                this._fighter.setDamping(2);
                this._hurtDownFrame = 15;
                this._hurtFlyState = 4;
                this._mcCtrler.effectCtrler.shake(0, 2);
                this._mcCtrler.effectCtrler.hitFloor(1);
                this._fighter.actionState = 23;
                FighterEventDispatcher.dispatchEvent(this._fighter, "HURT_DOWN");
                break;
            case 3:
                if (!this._fighter.isAlive) {
                    this._hurtFlyState = 0;
                    this._fighter.actionState = 30;
                    return;
                }
                this._hurtDownFrame = this._hurtDownFrame - 1;
                if (this._hurtDownFrame - 1 <= 0) {
                    this.goFrame("击飞_起", true);
                    this._hurtFlyState = 0;
                    break;
                }
                break;
        }
    }; // end function
    FighterMC.prototype.getHitRange = function (param1) {
        if (!this._hitRangeInited) {
            this.initHitRange();
            this._hitRangeInited = true;
        }
        return this._hitRangeObj[param1];
    }; // end function
    FighterMC.prototype.initHitRange = function () {
        var _loc_1 = null;
        var _loc_2 = this._mc.getChildByName("AImain");
        _loc_2.gotoAndStop(2);
        this._hitRangeObj = {};
        var allStr = FighterHitRange.getALL();
        for (var _loc_3 in allStr) {
            _loc_1 = _loc_2.getChildByName(allStr[_loc_3]);
            if (_loc_1) {
                var range = _loc_1.getTransformedBounds(this._fighterDisplay);
                range.width = _loc_1.scaleX * _loc_width;
                range.height = _loc_1.scaleY * _loc_height;
                this._hitRangeObj[allStr[_loc_3]] = range;
            }
        }
        _loc_2.gotoAndStop(1);
        _loc_2.visible = false;
        return;
    }; // end function
    return FighterMC;
}());
__reflect(FighterMC.prototype, "FighterMC");
//# sourceMappingURL=FighterMC.js.map