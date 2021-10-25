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
var FightBar = (function (_super) {
    __extends(FightBar, _super);
    function FightBar(param1) {
        var _this = _super.call(this) || this;
        _this._isRenderAnimate = false;
        _this._ui = param1;
        _this._faceGroup1 = new FightFaceGroup(_this._ui.getChildMovie("face1"));
        _this._faceGroup2 = new FightFaceGroup(_this._ui.getChildMovie("face2"));
        _this._faceGroup2.setDirect(-1);
        _this._hpBar1 = new FighterHpBar(_this._ui.getChildMovie("bar1"));
        _this._hpBar2 = new FighterHpBar(_this._ui.getChildMovie("bar2"));
        _this._energyBar1 = new EnergyBar(_this._ui.getChildMovie("energy1"));
        _this._energyBar2 = new EnergyBar(_this._ui.getChildMovie("energy2"));
        _this._energyBar2.setDirect(-1);
        _this._winUI1 = new WinUI(_this._ui.getChildMovie("win_p1"), 1);
        _this._winUI2 = new WinUI(_this._ui.getChildMovie("win_p2"), 2);
        _this._timerMc = new FightTimeUI(_this._ui.getChildMovie("timemc"));
        if (GameUI.BITMAP_UI) {
            _this.initBitmapUI();
        }
        else {
            _this._ui.getChildMovie("scoremc").visible = false;
        }
        _this._ui.addEventListener("complete", _this.uiPlayComplete, _this);
        _this._ui.addFrameScript(_this, [0, _this.frame1, 24, _this.frame25, 45, _this.frame46]);
        return _this;
    } // end function
    FightBar.prototype.getui = function () {
        return this._ui;
    }; // end function
    FightBar.prototype.initBitmapUI = function () {
        //this._ui.gotoAndStop("fadin_fin");
        this._parent = this._ui.parent;
        try {
            this._parent.removeChild(this._ui);
        }
        catch (e) {
        }
        var _loc_1 = this._ui.getBounds();
        this._drawMatrix = new egret.Matrix(1, 0, 0, 1, -_loc_1.x, -_loc_1.y);
        this._children = new Array();
        this._bp = new egret.Bitmap();
        // this._bp.$bitmapData = new egret.BitmapData(_ui.width, _ui.height, true, 0);
        this._bp.$bitmapData = new egret.BitmapData(null);
        this._bp.$bitmapData.width = this._ui.width;
        this._bp.$bitmapData.height = this._ui.height;
        this._bp.x = _loc_1.x;
        this._bp.y = _loc_1.y;
        this._empytBd = new egret.BitmapData(null);
        this._empytBd.width = this._ui.width;
        this._empytBd.height = this._ui.height;
        this.addChildren(this._faceGroup1.getui());
        this.addChildren(this._faceGroup2.getui());
        this.addChildren(this._hpBar1.getui());
        this.addChildren(this._hpBar2.getui());
        this.addChildren(this._energyBar1.getui());
        this.addChildren(this._energyBar2.getui());
        this.addChildren(this._bp);
        if (this._timerMc.timeUI) {
            this.addChildren(this._timerMc._ui);
        }
        this.addChildren(this._winUI1.getui());
        this.addChildren(this._winUI2.getui());
        this.addChildren(this._ui.getChildMovie("scoremc"));
        this.updateBitmap();
        this.setChildrenVisible(true);
        return;
    }; // end function
    FightBar.prototype.setChildrenPosition = function (param1) {
        var _loc_2 = param1.parent;
        while (_loc_2 && _loc_2 != this._ui) {
            param1.x = param1.x + _loc_2.x;
            param1.y = param1.y + _loc_2.y;
            _loc_2 = _loc_2.parent;
        }
        param1.x = param1.x + this._ui.x;
        param1.y = param1.y + this._ui.y;
        return;
    }; // end function
    FightBar.prototype.addChildren = function (param1, param2) {
        if (param2 === void 0) { param2 = -1; }
        this.setChildrenPosition(param1);
        if (param2 == -1) {
            this._parent.addChild(param1);
        }
        else {
            this._parent.addChildAt(param1, param2);
        }
        this._children.push(param1);
        return;
    }; // end function
    FightBar.prototype.setChildrenVisible = function (param1) {
        // for each (_loc_2 in _children)
        // {
        //     _loc_2.visible = param1;
        // }
        this._children.forEach(function (element) {
            element.visible = param1;
        });
        return;
    }; // end function
    FightBar.prototype.destory = function () {
        if (this._ui) {
            this._ui.removeEventListener("complete", this.uiPlayComplete, this);
            this._ui.gotoAndStop("destory");
            this._ui = null;
        }
        if (this._hpBar1) {
            this._hpBar1.destory();
            this._hpBar1 = null;
        }
        if (this._hpBar2) {
            this._hpBar2.destory();
            this._hpBar2 = null;
        }
        if (this._energyBar1) {
            this._energyBar1.destory();
            this._energyBar1 = null;
        }
        if (this._energyBar2) {
            this._energyBar2.destory();
            this._energyBar2 = null;
        }
        if (GameUI.BITMAP_UI) {
            if (this._bp) {
                //this._bp.bitmapData.dispose();
                this._bp = null;
            }
            if (this._empytBd) {
                //this._empytBd.dispose();
                this._empytBd = null;
            }
            this._drawMatrix = null;
            var _loc_5 = 0;
            var _loc_4 = this._children;
            do {
                var _loc_1 = _loc_4[_loc_5];
                try {
                    this._parent.removeChild(_loc_1);
                }
                catch (e) {
                }
            } while (_loc_5 in _loc_4);
            this._children = null;
        }
        return;
    }; // end function
    FightBar.prototype.uiPlayComplete = function (event) {
        if (this._isFadIn) {
            this._ui.visible = true;
        }
        else {
            this._ui.visible = false;
        }
        return;
    }; // end function
    FightBar.prototype.initScore = function () {
        if (!GameUI.BITMAP_UI) {
            this._ui.getChildMovie("scoremc").visible = true;
        }
        this._score = new FightScoreUI(this._ui.getChildMovie("scoremc"));
        return;
    }; // end function
    FightBar.prototype.setScore = function (param1) {
        if (this._score) {
            this._score.setScore(param1);
        }
        return;
    }; // end function
    FightBar.prototype.showWin = function (param1, param2) {
        var _loc_3 = null;
        if (!param1) {
            return;
        }
        if (param2 < 0 || param2 > 2) {
            return;
        }
        switch ((param1.team.id - 1)) {
            case 0:
                _loc_3 = this._winUI1;
                break;
            default:
                _loc_3 = this._winUI2;
                break;
        }
        if (!_loc_3) {
            return;
        }
        _loc_3.show(param1.data, param2);
        return;
    }; // end function
    FightBar.prototype.setFighter = function (param1, param2) {
        if (param1 === void 0) { param1 = null; }
        if (param2 === void 0) { param2 = null; }
        if (param1) {
            this._faceGroup1.setFighter(param1);
            if (param1.currentFighter) {
                this._hpBar1.setFighter(param1.currentFighter);
                this._energyBar1.setFighter(param1.currentFighter);
            }
        }
        if (param2) {
            this._faceGroup2.setFighter(param2);
            if (param2.currentFighter) {
                this._hpBar2.setFighter(param2.currentFighter);
                this._energyBar2.setFighter(param2.currentFighter);
            }
        }
        if (GameUI.BITMAP_UI) {
            this.updateBitmap();
        }
        return;
    }; // end function
    FightBar.prototype.updateBitmap = function () {
        // this._bp.$bitmapData.copyPixels(_empytBd, new Rectangle(0, 0, _empytBd.width, _empytBd.height), new Point());
        // this._bp.bitmapData.draw(_ui, _drawMatrix);
        //this._bp.$setBitmapData(this._empytBd)
        this._bp.$bitmapData = this._empytBd;
        return;
    }; // end function
    FightBar.prototype.render = function () {
        this._hpBar1.render();
        this._hpBar2.render();
        this._energyBar1.render();
        this._energyBar2.render();
        this._timerMc.render();
        return;
    }; // end function
    FightBar.prototype.fadIn = function (param1) {
        if (this._isFadIn) {
            return;
        }
        this._isFadIn = true;
        if (GameUI.BITMAP_UI) {
            this.setChildrenVisible(true);
            return;
        }
        this._ui.visible = true;
        if (param1) {
            this._ui.gotoAndStop("fadin");
            this._isRenderAnimate = true;
        }
        else {
            this._ui.gotoAndStop("fadin_fin");
        }
        return;
    }; // end function
    FightBar.prototype.fadOut = function (param1) {
        if (!this._isFadIn) {
            return;
        }
        this._isFadIn = false;
        if (GameUI.BITMAP_UI) {
            this.setChildrenVisible(false);
            return;
        }
        if (param1) {
            this._ui.gotoAndStop("fadout");
            this._isRenderAnimate = true;
        }
        else {
            this._ui.visible = false;
        }
        return;
    }; // end function
    FightBar.prototype.renderAnimate = function () {
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
    FightBar.prototype.frame1 = function () {
        this._ui.stop();
        return;
    };
    FightBar.prototype.frame25 = function () {
        this._ui.stop();
        //dispatchEvent(new egret.Event(flash.events.Event.COMPLETE));
        return;
    };
    FightBar.prototype.frame46 = function () {
        this._ui.stop();
        //dispatchEvent(new flash.events.Event(flash.events.Event.COMPLETE));
        return;
    };
    return FightBar;
}(egret.DisplayObject));
__reflect(FightBar.prototype, "FightBar");
//# sourceMappingURL=FightBar.js.map