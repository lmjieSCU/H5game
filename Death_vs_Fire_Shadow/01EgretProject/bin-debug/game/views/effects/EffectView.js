var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var EffectView = (function () {
    function EffectView(param1) {
        this.autoRemove = true;
        this.holdFrame = -1;
        this.isActive = true;
        this._orgX = 0;
        this._orgY = 0;
        this._data = param1;
        this.display = new egret.Bitmap();
        this.display.blendMode = param1.blendMode;
        this.display.smoothing = EffectCtrl.EFFECT_SMOOTHING;
        //this._bitmapDatas = param1.bitmapDataCache;
        this._frameLabels = param1.frameLabelCache;
        this._effectZmovie = new zmovie.ZMovieClip([
            "effect0_json", "effect1_json", "effect2_json", "effect3_json",
            "effect4_json", "effect5_json", "effect6_json"
        ], RES.getRes("effect_json"), param1.className);
        return;
    } // end function
    EffectView.prototype.setPos = function (param1, param2) {
        this._orgX = param1;
        this._orgY = param2;
        return;
    }; // end function
    EffectView.prototype.start = function (param1, param2, param3) {
        if (param1 === void 0) { param1 = 0; }
        if (param2 === void 0) { param2 = 0; }
        if (param3 === void 0) { param3 = 1; }
        this._orgX = param1;
        this._orgY = param2;
        // this._direct = this._rotation != 0 ? (1) : (param3);
        this._direct = param3;
        this._effectZmovie.scaleX = this._direct;
        this._curFrame = 0;
        //设置图像混合模式
        // this._effectZmovie.cacheAsBitmap = true
        if (this._data.blendMode == "sceen") {
            this._effectZmovie.blendMode = egret.BlendMode.ERASE;
        }
        else if (this._data.blendMode == "add") {
            this._effectZmovie.blendMode = this._data.blendMode;
        }
        if (this._data.randRotate) {
            this.randRotate();
        }
        if (this._data.sound) {
            SoundCtrl.I.playEffectSound(this._data.sound);
        }
        this.renderDisplay();
        this.isActive = true;
        return;
    }; // end function
    EffectView.prototype.destory = function () {
        this._isDestoryed = true;
        if (this.isActive) {
            this.removeSelf();
        }
        this.display = null;
        return;
    }; // end function
    EffectView.prototype.gotoAndPlay = function (param1) {
        if (typeof (param1) == "number") {
            this._curFrame = Number(param1);
        }
        if (typeof (param1) == "string") {
            var _loc4_ = 0;
            var _loc3_ = this._frameLabels;
            for (var _loc2_1 in this._frameLabels) {
                var _loc2_ = this._frameLabels[_loc2_1];
                if (this._frameLabels[_loc2_] == param1) {
                    this._curFrame = Number(_loc2_);
                }
            }
        }
        return;
    }; // end function
    EffectView.prototype.randRotate = function () {
        this._rotation = Math.random() * 360;
        this.display.rotation = this._rotation;
        this.display.scaleX = 1;
        return;
    }; // end function
    EffectView.prototype.render = function () {
        return;
    }; // end function
    EffectView.prototype.renderAnimate = function () {
        if (this._isDestoryed) {
            return;
        }
        var _loc_1 = false;
        if (this.autoRemove) {
            if (this._curFrame == (this._effectZmovie.totalFrame)) {
                // this.holdFrame = 0 //--循环测试
                if (this.holdFrame == -1) {
                    this.removeSelf();
                    _loc_1 = true;
                }
                else {
                    this._curFrame = 0;
                    this.holdFrame = -1; //---循环测试
                }
            }
            if (this.holdFrame != -1) {
                this.holdFrame = this.holdFrame - 1;
                if (this.holdFrame <= 0) {
                    this.removeSelf();
                    _loc_1 = true;
                }
            }
        }
        if (!_loc_1) {
            this.renderFrameLabel();
            this.renderDisplay();
            this._curFrame = (this._curFrame + 1);
        }
        return;
    }; // end function
    //渲染当前帧的特效图片
    EffectView.prototype.renderDisplay = function () {
        var xx = this._effectZmovie.x.toFixed(2);
        var yy = this._effectZmovie.y.toFixed(2);
        var frameNum = this._curFrame + 1;
        GameScene.instance.addLog("renderDisplay " + this._data.className + "_curFrame " + frameNum + " x=" + xx + " y=" + yy);
        this._effectZmovie.gotoAndStop(frameNum);
        return;
    }; // end function
    EffectView.prototype.renderFrameLabel = function () {
        var _loc_1 = this._effectZmovie.mcObj.frameLabels;
        var _loc_2 = _loc_1;
        while (_loc_2 == "loop") {
            this.gotoAndPlay(1);
            break;
        }
        return;
    }; // end function
    EffectView.prototype.remove = function () {
        this.removeSelf();
        return;
    }; // end function
    EffectView.prototype.addRemoveBack = function (param1) {
        if (!this._onRemoveFuncs) {
            this._onRemoveFuncs = [];
        }
        if (this._onRemoveFuncs.indexOf(param1) != -1) {
            return;
        }
        this._onRemoveFuncs.push(param1);
        return;
    }; // end function
    EffectView.prototype.removeSelf = function () {
        this.isActive = false;
        for (var _i = 0, _a = this._onRemoveFuncs; _i < _a.length; _i++) {
            var _loc_1 = _a[_i];
            _loc_1(this);
        }
        this._onRemoveFuncs = null;
        if (this._effectZmovie && this._effectZmovie.parent) {
            this._effectZmovie.parent.removeChild(this._effectZmovie);
        }
        return;
    }; // end function
    return EffectView;
}());
__reflect(EffectView.prototype, "EffectView");
//# sourceMappingURL=EffectView.js.map