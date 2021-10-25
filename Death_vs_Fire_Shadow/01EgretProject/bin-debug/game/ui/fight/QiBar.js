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
var QiBar = (function (_super) {
    __extends(QiBar, _super);
    function QiBar(param1) {
        var _this = _super.call(this) || this;
        _this._qiRate = 0;
        _this._fzRate = 0;
        _this._tweenSpd = 0.5;
        _this._moveFin = true;
        _this._moveType = 0;
        //param1.visible = false
        _this._ui = param1;
        _this._bar = new InsBar(_this._ui.getChildMovie("barmc"));
        _this._fzBar = new InsFzBar(_this._ui.getChildMovie("fzqibar"));
        _this._fzReadyMc = _this._ui.getChildMovie("readymc");
        _this._orgPose = new egret.Point(_this._ui.x, _this._ui.y);
        _this._ui.addEventListener("complete", _this.uiPlayComplete, _this);
        // this._ui.x = 100
        // this._ui.y = 50;
        if (GameUI.I.getUI()) {
            //this._ui.gotoAndStop("fadin_fin");
            _this._ui.visible = false;
        }
        return _this;
    } // end function
    QiBar.prototype.destory = function () {
        if (this._ui) {
            this._ui.removeEventListener("complete", this.uiPlayComplete, this);
            this._ui.gotoAndStop("destory");
            this._ui = null;
        }
        if (this._faceBp) {
            //this._faceBp.bitmapData.dispose();
            this._faceBp = null;
        }
        this._fighter = null;
        return;
    }; // end function
    QiBar.prototype.uiPlayComplete = function (event) {
        if (this._isFadIn) {
            this._ui.visible = true;
            this.setCacheBitmap(true);
        }
        else {
            this._ui.visible = false;
        }
        return;
    }; // end function
    QiBar.prototype.setFighter = function (param1, param2) {
        if (param2 === void 0) { param2 = null; }
        var _loc_3 = new egret.Bitmap();
        this._fighter = param1;
        if (param2 && param2.data) {
            _loc_3 = AssetManager.I.getFighterFace(param2.data);
            if (_loc_3) {
                var template = new egret.Bitmap(RES.getRes("fightui01_png"));
                this._ui.getChildMovie("facemc").getChildMovie("ct").addChild(_loc_3);
                this._ui.getChildMovie("facemc").getChildMovie("ct").addChild(template);
                //_loc_3.mask = template
                // GameScene.instance.addChild(_loc_3)
                //GameScene.instance.addChild(template)
                _loc_3.mask = template;
            }
        }
        if (GameUI.I.getUI()) {
            this._faceBp = KyoUtils.drawDisplay(this._ui.getChildMovie("facemc"));
            this._ui.addChild(this._faceBp);
            this._faceBp.x = this._ui.getChildMovie("facemc").x;
            this._faceBp.y = this._ui.getChildMovie("facemc").y;
            try {
                //this._ui.removeChild(this._ui.getChildMovie("facemc"));
            }
            catch (e) {
            }
            this._ui.addChild(this._ui.getChildMovie("readymc"));
        }
        this._fzReadyMc.getChildMovie("mc").play();
        return;
    }; // end function
    QiBar.prototype.setCacheBitmap = function (param1) {
        if (GameUI.I.getUI()) {
            return;
        }
        this._ui.getChildMovie("facemc").cacheAsBitmap = param1;
        return;
    }; // end function
    QiBar.prototype.setDirect = function (param1) {
        this._bar.setDirect(param1);
        this._fzReadyMc.getChildMovie("mc").scaleX = param1 > 0 ? (1) : (-1);
        return;
    }; // end function
    QiBar.prototype.render = function () {
        this._qiRate = this._fighter.qi / 100;
        if (this._qiRate > 3) {
            this._qiRate = 3;
        }
        var _loc_1 = this._bar.getProcess();
        var _loc_2 = this._qiRate - _loc_1;
        if (Math.abs(_loc_2) < 0.01) {
            this._bar.setProcess(this._qiRate);
        }
        else {
            this._bar.setProcess(_loc_1 + _loc_2 * 0.4);
        }
        this._fzBar.setProcess(this._fighter.fzqi / 100);
        var _loc_3 = this._qiRate >= 1;
        this._ui.getChildMovie("barmc").getChildMovie("bar").play();
        if (this._fighter.fzqi >= 100) {
            this._fzReadyMc.getChildMovie("mc").visible = true;
        }
        else {
            this._fzReadyMc.getChildMovie("mc").visible = false;
        }
        return;
    }; // end function
    QiBar.prototype.renderAnimate = function () {
        if (!this._isRenderAnimate) {
            return;
        }
        var _loc_1 = this._ui.getCurrPlayLabel;
        if (_loc_1.toString() == "fadin_fin" || _loc_1.toString() == "fadout_fin") {
            this._isRenderAnimate = false;
            return;
        }
        this._ui.nextFrame();
        return;
    }; // end function
    QiBar.prototype.fadIn = function (param1) {
        if (param1 === void 0) { param1 = true; }
        if (this._isFadIn) {
            return;
        }
        this._isFadIn = true;
        this._ui.visible = true;
        if (GameUI.I.getUI()) {
            return;
        }
        if (param1) {
            this.setCacheBitmap(false);
            this._ui.gotoAndStop("fadin");
            this._isRenderAnimate = true;
        }
        else {
            this._ui.gotoAndStop("fadin_fin");
            this.setCacheBitmap(true);
        }
        return;
    }; // end function
    QiBar.prototype.fadOut = function (param1) {
        if (param1 === void 0) { param1 = true; }
        if (!this._isFadIn) {
            return;
        }
        this._isFadIn = false;
        if (GameUI.I.getUI()) {
            this._ui.visible = false;
            return;
        }
        if (param1) {
            this._ui.gotoAndPlay("fadout");
            this._isRenderAnimate = true;
            //this.setCacheBitmap(false);
        }
        else {
            this._ui.visible = false;
        }
        return;
    }; // end function
    QiBar.prototype.moveTo = function (param1, param2, param3) {
        if (this._moveType == 1) {
            if (this._moveFin) {
                return;
            }
        }
        else {
            this._moveType = 1;
            this._moveFin = false;
        }
        this.moving(param1, param2, param3);
        return;
    }; // end function
    QiBar.prototype.moveResume = function () {
        if (this._moveType == 0) {
            if (this._moveFin) {
                return;
            }
        }
        else {
            this._moveType = 0;
            this._moveFin = false;
        }
        this.moving(this._orgPose.x, this._orgPose.y, 1);
        return;
    }; // end function
    QiBar.prototype.moving = function (param1, param2, param3) {
        if (Math.abs(param1 - this._ui.x) < 2 && Math.abs(param2 - this._ui.y) < 2 && Math.abs(param3 - this._ui.scaleX) < 0.2) {
            this._ui.x = param1;
            this._ui.y = param2;
            var _loc_4 = param3;
            this._ui.scaleY = param3;
            this._ui.scaleX = _loc_4;
            this._moveFin = true;
        }
        this._ui.x = this._ui.x + (param1 - this._ui.x) * this._tweenSpd;
        this._ui.y = this._ui.y + (param2 - this._ui.y) * this._tweenSpd;
        this._ui.scaleX = this._ui.scaleX + (param3 - this._ui.scaleX) * this._tweenSpd;
        this._ui.scaleY = this._ui.scaleX;
        return;
    }; // end function
    QiBar.prototype.setPosAndScale = function (param1, param2, param3) {
        this._ui.x = param1;
        this._ui.y = param2;
        this._ui.scaleX = param3;
        this._ui.scaleY = param3;
        return;
    }; // end function
    return QiBar;
}(egret.DisplayObject));
__reflect(QiBar.prototype, "QiBar");
var InsBar = (function (_super) {
    __extends(InsBar, _super);
    function InsBar(param1) {
        var _this = _super.call(this) || this;
        // private _ui:zmovie.ZMovieClip;
        // private _process:number = 0;
        _this.rate = 1;
        _this._curRate = 1;
        _this._renderFlashFrame = 2;
        _this._mc = param1;
        try {
            _this.setProcess(0); //设置进度值
        }
        catch (e) {
        }
        return _this;
    } // end function
    InsBar.prototype.render = function () {
        var _loc1_ = this.rate - this._mc.scaleX;
        if (Math.abs(_loc1_) < 0.01) {
            this._mc.scaleX = this.rate;
        }
        else {
            this._mc.scaleX = this._mc.scaleX + _loc1_ * 0.4;
        }
        if (this._isFlash) {
            this.renderFlash();
        }
    };
    InsBar.prototype.renderFlash = function () {
        this._renderFlashInt = this._renderFlashInt + 1;
        if (this._renderFlashInt + 1 > 2) {
            this._renderFlashInt = 0;
            this._mc.gotoAndStop(this._renderFlashFrame);
            this._renderFlashFrame = this._renderFlashFrame == 1 ? 2 : 1;
        }
    };
    InsBar.prototype.normal = function () {
        if (!this._isOverLoad && !this._isFlash) {
            return;
        }
        this._isOverLoad = false;
        this._isFlash = false;
        this._mc.gotoAndStop(1);
    };
    InsBar.prototype.flash = function () {
        if (this._isFlash) {
            return;
        }
        this._isFlash = true;
        this._renderFlashInt = 0;
        this._renderFlashFrame = 2;
    };
    InsBar.prototype.overLoad = function () {
        if (this._isOverLoad) {
            return;
        }
        this._isOverLoad = true;
        this._isFlash = false;
        this._mc.gotoAndStop(2);
    };
    Object.defineProperty(InsBar.prototype, "ui", {
        get: function () {
            return this._mc;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    InsBar.prototype.getProcess = function () {
        return this.rate;
    }; // end function
    InsBar.prototype.setProcess = function (param1) {
        this.rate = param1;
        this._mc.getChildMovie("bar").getChildMovie("bar1").visible = param1 > 0;
        this._mc.getChildMovie("bar").getChildMovie("bar2").visible = param1 > 1;
        this._mc.getChildMovie("bar").getChildMovie("bar3").visible = param1 > 2;
        this._mc.getChildMovie("bar").getChildMovie("bar4").visible = param1 >= 3;
        if (param1 > 2) {
            var _loc_3 = 1;
            this._mc.getChildMovie("bar").getChildMovie("bar2").scaleX = 1;
            this._mc.getChildMovie("bar").getChildMovie("bar1").scaleX = _loc_3;
            this._mc.getChildMovie("bar").getChildMovie("bar3").scaleX = param1 - 2;
        }
        else if (param1 > 1) {
            this._mc.getChildMovie("bar").getChildMovie("bar1").scaleX = 1;
            this._mc.getChildMovie("bar").getChildMovie("bar2").scaleX = param1 - 1;
        }
        else {
            this._mc.getChildMovie("bar").getChildMovie("bar1").scaleX = param1;
        }
        var _loc_2 = Math.floor(param1) + 1;
        this._mc.getChildMovie("txtmc").gotoAndStop(_loc_2);
        return;
    }; // end function
    InsBar.prototype.setDirect = function (param1) {
        this._mc.getChildMovie("txtmc").scaleX = param1 > 0 ? (1) : (-1);
        return;
    }; // end function
    return InsBar;
}(egret.DisplayObject));
__reflect(InsBar.prototype, "InsBar");
var InsFzBar = (function (_super) {
    __extends(InsFzBar, _super);
    function InsFzBar(param1) {
        var _this = _super.call(this) || this;
        _this._process = 0;
        _this._ui = param1;
        var _loc_2 = _this._ui.getChildMovie("barmc").getBounds();
        _this._scroll = new egret.Rectangle(0, 0, _this._ui.getChildMovie("barmc").width, _this._ui.getChildMovie("barmc").height);
        _this._height = _this._scroll.height;
        _this._ui.getChildMovie("barmc").scaleY = -1;
        _this._ui.getChildMovie("barmc").y = _this._ui.getChildMovie("barmc").height;
        return _this;
    } // end function
    Object.defineProperty(InsFzBar.prototype, "ui", {
        get: function () {
            return this._ui;
        } // end function
        ,
        enumerable: true,
        configurable: true
    });
    InsFzBar.prototype.getProcess = function () {
        return this._process;
    }; // end function
    InsFzBar.prototype.setProcess = function (param1) {
        this._process = param1;
        this._scroll.height = param1 * this._height;
        this._ui.getChildMovie("barmc").scrollRect = this._scroll;
        return;
    }; // end function
    return InsFzBar;
}(egret.DisplayObject));
__reflect(InsFzBar.prototype, "InsFzBar");
//# sourceMappingURL=QiBar.js.map