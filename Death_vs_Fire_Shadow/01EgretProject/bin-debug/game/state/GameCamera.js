var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
* == 表示值固定不变
* = 表示值可变,后跟初始化值
* 作用：实现map地图随着人物移动而移动以及缩放
* 参数：
* _stage 待处理的地图容器
    == gamelayer
* _stageBounds :maplayer的边界、待缩放的地图的边界矩形
    == (x,y,map.width,UI.WINSIZEH)
* stageSize ：地图大小
    == (map.width,UI.WINSIZEH);
* _rect：_stage所显示的区域,
   = (0,0,UI.WINSIZE_W,UI.WINSIZE_H)
* _screenSize :屏幕大小、固定不变
    == (UI.WINSIZE_W,UI.WINSIZE_H)
* _fbR：_rect可供移动的范围
    _fbR.x,_rect.x可取的最小值,即屏幕所能显示的地图最左端
    _fbR.y,_rect.y可取的最小值,即屏幕所能显示的地图最上端
    _fbR.width,_rect.x可取的最大值,即屏幕所能显示的地图最右端
    _fbR.height,_rect.y可取的最大值,即屏幕所能显示的地图最下端
*/
var GameCamera = (function () {
    function GameCamera(param1, param2, param3, param4) {
        if (param3 === void 0) { param3 = null; }
        if (param4 === void 0) { param4 = false; }
        this.focusX = true;
        this.offsetX = 0;
        this.offsetY = 0;
        this.autoZoom = false;
        this.autoZoomMin = 1;
        this.autoZoomMax = 3;
        this._zoom = 1;
        this._stageScale = 1;
        this._foffsetX = 0;
        this._foffsetY = 0;
        this._stage = param1;
        this._rect = new egret.Rectangle(0, 0, param2.x, param2.y);
        this._noTweenRect = new egret.Rectangle(0, 0, param2.x, param2.y);
        this._screenSize = new egret.Point(param2.x, param2.y);
        if (param4) {
            this._fbR = new egret.Rectangle();
        }
        this.stageSize = param3;
        if (!this.stageSize) {
            this.setStageSizeFromDisplay(this._stage);
        }
        this.setStageBounds();
        return;
    } // end function
    GameCamera.prototype.getScreenRect = function (param1) {
        if (param1 === void 0) { param1 = false; }
        return param1 ? (this._rect) : (this._noTweenRect);
    }; // end function
    GameCamera.prototype.updateNow = function () {
        var _loc_1 = this.tweenSpd;
        this.tweenSpd = 0;
        this.render();
        this.tweenSpd = _loc_1;
        return;
    }; // end function
    GameCamera.prototype.setStageBounds = function (param1) {
        if (param1 === void 0) { param1 = null; }
        if (!param1) {
            this._stageBounds = this._stage.getTransformedBounds(this._stage);
        }
        else {
            this._stageBounds = param1;
        }
        this.setZoom(this._zoom);
        return;
    }; // end function
    GameCamera.prototype.setStageSizeFromDisplay = function (param1) {
        this.stageSize = new egret.Point(param1.width / param1.scaleX + this._stageBounds.x, param1.height / param1.scaleY + this._stageBounds.y);
        return;
    }; // end function
    GameCamera.prototype.getZoom = function (param1) {
        if (param1 === void 0) { param1 = false; }
        return param1 ? (this._stageScale) : (this._zoom);
    }; // end function
    GameCamera.prototype.setZoom = function (param1) {
        this._zoom = param1;
        this._noTweenRect.width = this._screenSize.x / this._zoom;
        this._noTweenRect.height = this._screenSize.y / this._zoom;
        this._foffsetX = this._screenSize.x / 2 / this._zoom;
        this._foffsetY = this._screenSize.y / 2 / this._zoom;
        if (this._fbR) {
            this._fbR.x = this._stageBounds.x;
            this._fbR.y = this._stageBounds.y * this._zoom;
            this._fbR.width = this._stageBounds.x + this._stageBounds.width - this._screenSize.x / this._zoom;
            this._fbR.height = this._stageBounds.height - this._screenSize.y / this._zoom;
        }
        return;
    }; // end function
    GameCamera.prototype.focus = function (param1, param2) {
        if (param2 === void 0) { param2 = false; }
        var _loc_3 = 0;
        this._focus = param1;
        this._point = this._focus.length > 1 ? (new egret.Point()) : (null);
        if (param2) {
            _loc_3 = this.tweenSpd;
            this.tweenSpd = 0;
            this.render();
            this.tweenSpd = _loc_3;
        }
        return;
    }; // end function
    GameCamera.prototype.move = function (param1, param2) {
        this._focus = null;
        this._point = new egret.Point(param1, param2);
        return;
    }; // end function
    GameCamera.prototype.moveCenter = function () {
        this._focus = null;
        this._point = new egret.Point(this.stageSize.x / 2, this.stageSize.y / 2);
        return;
    }; // end function
    GameCamera.prototype.render = function () {
        if (!this._focus && !this._point) {
            return;
        }
        if (this._focus.length > 1) {
            this.renderTwo(this._focus[0], this._focus[(this._focus.length - 1)]);
        }
        if (this.focusX) {
            this.renderX();
        }
        if (this.focusY) {
            this.renderY();
        }
        if (this._stageScale != this._zoom) {
            this.renderZoom();
        }
        this.applySet();
        return;
    }; // end function
    GameCamera.prototype.applySet = function () {
        this._stage.scrollRect = this._rect;
        var _loc_1 = this._stageScale;
        this._stage.scaleY = this._stageScale;
        this._stage.scaleX = _loc_1;
        return;
    }; // end function
    GameCamera.prototype.renderTwo = function (param1, param2) {
        var _loc_7 = null;
        var _loc_9 = null;
        var _loc_4 = null;
        var _loc_3 = null;
        var _loc_10 = NaN;
        var _loc_11 = NaN;
        var _loc_8 = NaN;
        var _loc_5 = 0;
        var _loc_6 = 0;
        if (this.focusX) {
            if (param1.x < param2.x) {
                _loc_9 = param1;
                _loc_7 = param2;
            }
            else {
                _loc_9 = param2;
                _loc_7 = param1;
            }
            _loc_5 = _loc_7.x - _loc_9.x;
            this._point.x = _loc_9.x + _loc_5 / 2;
        }
        if (this.focusY) {
            if (param1.y < param2.y) {
                _loc_3 = param1;
                _loc_4 = param2;
            }
            else {
                _loc_3 = param2;
                _loc_4 = param1;
            }
            _loc_6 = _loc_4.y - _loc_3.y;
            this._point.y = _loc_3.y + _loc_6 / 2;
        }
        if (this.autoZoom) {
            _loc_10 = this._zoom;
            _loc_11 = this._zoom;
            if (this.focusX) {
                _loc_10 = this._screenSize.x / _loc_5 * 0.8;
            }
            if (this.focusY) {
                _loc_11 = this._screenSize.y / _loc_6 * 0.8;
            }
            _loc_8 = Math.min(_loc_10, _loc_11);
            this.renderAutoZoom(_loc_8);
        }
        return;
    }; // end function
    GameCamera.prototype.renderAutoZoom = function (param1) {
        if (param1 < this.autoZoomMin) {
            param1 = this.autoZoomMin;
        }
        if (param1 > this.autoZoomMax) {
            param1 = this.autoZoomMax;
        }
        this.setZoom(param1);
        return;
    }; // end function
    GameCamera.prototype.renderX = function () {
        var _loc_1 = NaN;
        _loc_1 = this._point ? (this._point.x) : (this._focus[0].x);
        _loc_1 = _loc_1 - (this._foffsetX + this.offsetX);
        this.setX(_loc_1);
        return;
    }; // end function
    GameCamera.prototype.renderY = function () {
        var _loc_1 = NaN;
        _loc_1 = this._point ? (this._point.y) : (this._focus[0].y);
        _loc_1 = _loc_1 - (this._foffsetY + this.offsetY);
        this.setY(_loc_1);
        return;
    }; // end function
    GameCamera.prototype.setX = function (param1) {
        if (this._fbR) {
            if (param1 < this._fbR.x) {
                param1 = this._fbR.x;
            }
            if (param1 > this._fbR.width) {
                param1 = this._fbR.width;
            }
        }
        this._noTweenRect.x = param1;
        if (this.tweenSpd > 1) {
            this._rect.x = this._rect.x + (param1 - this._rect.x) / this.tweenSpd;
        }
        else {
            this._rect.x = param1;
        }
        return;
    }; // end function
    GameCamera.prototype.setY = function (param1) {
        if (this._fbR) {
            if (param1 < this._fbR.y) {
                param1 = this._fbR.y;
            }
            if (param1 > this._fbR.height) {
                param1 = this._fbR.height;
            }
        }
        this._noTweenRect.y = param1;
        if (this.tweenSpd > 1) {
            this._rect.y = this._rect.y + (param1 - this._rect.y) / this.tweenSpd;
        }
        else {
            this._rect.y = param1;
        }
        return;
    }; // end function
    GameCamera.prototype.renderZoom = function () {
        if (this._zoom <= 0) {
            throw new Error("zoom 不能 <= 0 !");
        }
        if (this.tweenSpd > 1) {
            this._stageScale = this._stageScale + (this._zoom - this._stageScale) / this.tweenSpd;
        }
        else {
            this._stageScale = this._zoom;
        }
        this._rect.width = this._screenSize.x / this._stageScale + 1;
        this._rect.height = this._screenSize.y / this._stageScale + 1;
        return;
    }; // end function
    return GameCamera;
}());
__reflect(GameCamera.prototype, "GameCamera");
//# sourceMappingURL=GameCamera.js.map