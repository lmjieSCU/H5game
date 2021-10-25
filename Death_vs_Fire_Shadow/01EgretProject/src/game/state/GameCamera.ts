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
class GameCamera
{
    public  tweenSpd:number;
    public  stageSize:egret.Point;
    public  focusX:Boolean = true;
    public  focusY:Boolean;
    public  offsetX:number = 0;
    public  offsetY:number = 0;
    public  autoZoom:Boolean = false;
    public  autoZoomMin:number = 1;
    public  autoZoomMax:number = 3;
    private  _zoom:number = 1;
    private  _noTweenRect:egret.Rectangle;
    private  _stage:egret.DisplayObject;
    private  _stageBounds:egret.Rectangle;
    private  _rect:egret.Rectangle;
    private  _focus:Array<any>;
    private  _point:egret.Point;
    private  _stageScale:number = 1;
    private  _fbR:egret.Rectangle;
    private  _foffsetX:number = 0;
    private  _foffsetY:number = 0;
    private  _screenSize:egret.Point;

    constructor(param1:egret.DisplayObject, param2:egret.Point, param3:egret.Point = null, param4:Boolean = false)
    {
        this._stage = param1;
        this._rect = new egret.Rectangle(0, 0, param2.x, param2.y);
        this._noTweenRect = new egret.Rectangle(0, 0, param2.x, param2.y);
        this._screenSize = new egret.Point(param2.x, param2.y);
        if (param4)
        {
            this._fbR = new egret.Rectangle();
        }
        this.stageSize = param3;
        if (!this.stageSize)
        {
            this.setStageSizeFromDisplay(this._stage);
        }
        this.setStageBounds();
        return;
    }// end function

    public getScreenRect(param1:Boolean = false) : egret.Rectangle
    {
        return param1 ? (this._rect) : (this._noTweenRect);
    }// end function

    public updateNow() : void
    {
        let _loc_1 = this.tweenSpd;
        this.tweenSpd = 0;
        this.render();
        this.tweenSpd = _loc_1;
        return;
    }// end function

    public setStageBounds(param1:egret.Rectangle = null) : void
    {
        if (!param1)
        {
            this._stageBounds = this._stage.getTransformedBounds(this._stage);
        }
        else
        {
            this._stageBounds = param1;
        }
        this.setZoom(this._zoom);
        return;
    }// end function

    public setStageSizeFromDisplay(param1:egret.DisplayObject) : void
    {
        this.stageSize = new egret.Point(param1.width / param1.scaleX + this._stageBounds.x, param1.height / param1.scaleY + this._stageBounds.y);
        return;
    }// end function

    public getZoom(param1:Boolean = false) : number
    {
        return param1 ? (this._stageScale) : (this._zoom);
    }// end function

    public setZoom(param1:number) : void
    {
        this._zoom = param1;
        this._noTweenRect.width = this._screenSize.x / this._zoom;
        this._noTweenRect.height = this._screenSize.y / this._zoom;
        this._foffsetX = this._screenSize.x / 2 / this._zoom;
        this._foffsetY = this._screenSize.y / 2 / this._zoom;
        if (this._fbR)
        {
            this._fbR.x = this._stageBounds.x;
            this._fbR.y = this._stageBounds.y * this._zoom;
            this._fbR.width = this._stageBounds.x + this._stageBounds.width - this._screenSize.x / this._zoom;
            this._fbR.height = this._stageBounds.height - this._screenSize.y / this._zoom;
        }
        return;
    }// end function

    public focus(param1:Array<any>, param2:Boolean = false) : void
    {
        let _loc_3 = 0;
        this._focus = param1;
        this._point = this._focus.length > 1 ? (new egret.Point()) : (null);
        if (param2)
        {
            _loc_3 = this.tweenSpd;
            this.tweenSpd = 0;
            this.render();
            this.tweenSpd = _loc_3;
        }
        return;
    }// end function

    public move(param1:number, param2:number) : void
    {
        this._focus = null;
        this._point = new egret.Point(param1, param2);
        return;
    }// end function

    public moveCenter() : void
    {
        this._focus = null;
        this._point = new egret.Point(this.stageSize.x / 2, this.stageSize.y / 2);
        return;
    }// end function

    public render() : void
    {
        if (!this._focus && !this._point)
        {
            return;
        }
        if (this._focus.length > 1)
        {
            this.renderTwo(this._focus[0], this._focus[(this._focus.length - 1)]);
        }
        if (this.focusX)
        {
            this.renderX();
        }
        if (this.focusY)
        {
            this.renderY();
        }
        if (this._stageScale != this._zoom)
        {
            this.renderZoom();
        }
        this.applySet();
        return;
    }// end function

    private applySet() : void
    {
        this._stage.scrollRect = this._rect;
        let _loc_1 = this._stageScale;
        this._stage.scaleY = this._stageScale;
        this._stage.scaleX = _loc_1;
        return;
    }// end function

    private renderTwo(param1:egret.DisplayObject, param2:egret.DisplayObject) : void
    {
        let _loc_7 = null;
        let _loc_9 = null;
        let _loc_4 = null;
        let _loc_3 = null;
        let _loc_10 = NaN;
        let _loc_11 = NaN;
        let _loc_8 = NaN;
        let _loc_5 = 0;
        let _loc_6 = 0;
        if (this.focusX)
        {
            if (param1.x < param2.x)
            {
                _loc_9 = param1;
                _loc_7 = param2;
            }
            else
            {
                _loc_9 = param2;
                _loc_7 = param1;
            }
            _loc_5 = _loc_7.x - _loc_9.x;
            this._point.x = _loc_9.x + _loc_5 / 2;
        }
        if (this.focusY)
        {
            if (param1.y < param2.y)
            {
                _loc_3 = param1;
                _loc_4 = param2;
            }
            else
            {
                _loc_3 = param2;
                _loc_4 = param1;
            }
            _loc_6 = _loc_4.y - _loc_3.y;
            this._point.y = _loc_3.y + _loc_6 / 2;
        }
        if (this.autoZoom)
        {
            _loc_10 = this._zoom;
            _loc_11 = this._zoom;
            if (this.focusX)
            {
                _loc_10 = this._screenSize.x / _loc_5 * 0.8;
            }
            if (this.focusY)
            {
                _loc_11 = this._screenSize.y / _loc_6 * 0.8;
            }
            _loc_8 = Math.min(_loc_10, _loc_11);
            this.renderAutoZoom(_loc_8);
        }
        return;
    }// end function

    private renderAutoZoom(param1:number) : void
    {
        if (param1 < this.autoZoomMin)
        {
            param1 = this.autoZoomMin;
        }
        if (param1 > this.autoZoomMax)
        {
            param1 = this.autoZoomMax;
        }
        this.setZoom(param1);
        return;
    }// end function

    private renderX() : void
    {
        let _loc_1 = NaN;
        _loc_1 = this._point ? (this._point.x) : (this._focus[0].x);
        _loc_1 = _loc_1 - (this._foffsetX + this.offsetX);
        this.setX(_loc_1);
        return;
    }// end function

    private renderY() : void
    {
        let _loc_1 = NaN;
        _loc_1 = this._point ? (this._point.y) : (this._focus[0].y);
        _loc_1 = _loc_1 - (this._foffsetY + this.offsetY);
        this.setY(_loc_1);
        return;
    }// end function

    public setX(param1:number) : void
    {
        if (this._fbR)
        {
            if (param1 < this._fbR.x)
            {
                param1 = this._fbR.x;
            }
            if (param1 > this._fbR.width)
            {
                param1 = this._fbR.width;
            }
        }
        this._noTweenRect.x = param1;
        if (this.tweenSpd > 1)
        {
            this._rect.x = this._rect.x + (param1 - this._rect.x) / this.tweenSpd;
        }
        else
        {
            this._rect.x = param1;
        }
        return;
    }// end function

    public setY(param1:number) : void
    {
        if (this._fbR)
        {
            if (param1 < this._fbR.y)
            {
                param1 = this._fbR.y;
            }
            if (param1 > this._fbR.height)
            {
                param1 = this._fbR.height;
            }
        }
        this._noTweenRect.y = param1;
        if (this.tweenSpd > 1)
        {
            this._rect.y = this._rect.y + (param1 - this._rect.y) / this.tweenSpd;
        }
        else
        {
            this._rect.y = param1;
        }
        return;
    }// end function

    private renderZoom() : void
    {
        if (this._zoom <= 0)
        {
            throw new Error("zoom 不能 <= 0 !");
        }
        if (this.tweenSpd > 1)
        {
            this._stageScale = this._stageScale + (this._zoom - this._stageScale) / this.tweenSpd;
        }
        else
        {
            this._stageScale = this._zoom;
        }
        this._rect.width = this._screenSize.x / this._stageScale + 1;
        this._rect.height = this._screenSize.y / this._stageScale + 1;
        return;
    }// end function

}

