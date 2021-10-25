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
var BlackBackView = (function (_super) {
    __extends(BlackBackView, _super);
    function BlackBackView() {
        var _this = _super.call(this) || this;
        _this._bg = UI.BitmapData(GameConfig.GAME_SIZE.x / 10, GameConfig.GAME_SIZE.y / 10, false, UI.RGB2HEX16(255, 0, 0));
        _this._bg.width = GameConfig.GAME_SIZE.x;
        _this._bg.height = GameConfig.GAME_SIZE.y;
        return _this;
    } // end function
    BlackBackView.prototype.destory = function () {
        if (this._bg) {
            try {
                this.removeChild(this._bg);
            }
            catch (e) {
            }
            //this._bg.$bitmapData.$dispose();
            this._bg = null;
        }
        this.removeBishaFace();
        return;
    }; // end function
    BlackBackView.prototype.renderAnimate = function () {
        return;
    }; // end function
    BlackBackView.prototype.fadIn = function () {
        this.addChild(this._bg);
        return;
    }; // end function
    BlackBackView.prototype.fadOut = function () {
        this.removeBishaFace();
        try {
            this.removeChildren();
            this.parent.removeChild(this);
        }
        catch (e) {
        }
        return;
    }; // end function
    BlackBackView.prototype.showBishaFace = function (param1, param2) {
        var _loc_3 = NaN;
        if (!this._bishaFace) {
            this._bishaFace = new BishaFaceEffectView();
            _loc_3 = 1;
            if (GameCtrl.I && GameCtrl.I.gameState && GameCtrl.I.gameState.camera) {
                _loc_3 = GameCtrl.I.gameState.camera.getZoom();
            }
            this._bishaFace.mc.y = 100 + 100 / _loc_3;
            this.addChild(this._bishaFace.mc);
        }
        this._bishaFace.setFace(param1, param2);
        this._bishaFace.fadIn();
        return;
    }; // end function
    BlackBackView.prototype.removeBishaFace = function () {
        if (this._bishaFace) {
            this._bishaFace.destory();
            this._bishaFace = null;
        }
        return;
    }; // end function
    return BlackBackView;
}(egret.DisplayObjectContainer));
__reflect(BlackBackView.prototype, "BlackBackView");
//# sourceMappingURL=BlackBackView.js.map