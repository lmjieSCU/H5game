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
var ScrollView = (function (_super) {
    __extends(ScrollView, _super);
    /**
     * @param child 要滑动的对象
     * @param wid,high,x,y 宽高坐标
     * @param scrollSpeed 滑动速度，默认速度的倍数
     * @param isOpenMove 是否开启滑动
     * @param isVer true为上下滑动, false为左右滑动
     * @param node, listener 改变当前显示的子对象之后的回调方法以及作用域
     * @param isOpenLoop 是否开启循环
     * @param isOpenPosition 是否开启定位
     * @param initChild 生成之后的定位
     * @param isMoveScale 是否开启移动改变大小
     * @param minScale 移动改变大小的最小值
     */
    function ScrollView(child, wid, high, x, y, scrollSpeed, min, isOpenMove, isVer, node, listener, isOpenLoop, isOpenPosition, isMoveScale, minScale) {
        if (scrollSpeed === void 0) { scrollSpeed = 0.2; }
        if (min === void 0) { min = 1; }
        if (isOpenMove === void 0) { isOpenMove = true; }
        if (isVer === void 0) { isVer = false; }
        if (node === void 0) { node = null; }
        if (listener === void 0) { listener = null; }
        if (isOpenLoop === void 0) { isOpenLoop = false; }
        if (isOpenPosition === void 0) { isOpenPosition = true; }
        if (isMoveScale === void 0) { isMoveScale = false; }
        if (minScale === void 0) { minScale = 0.8; }
        var _this = _super.call(this) || this;
        _this.point = 0;
        _this.nowChild = 0;
        _this.node = null;
        _this.listener = null;
        _this.isLoop = false;
        _this.minScale = 1;
        _this.isMoveScale = false;
        _this._child = child;
        _this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, _this.onEnter, _this);
        _this.$setWidth(wid);
        _this.$setHeight(high);
        _this.$setX(x);
        _this.$setY(y);
        if (isVer) {
            _this.verticalScrollPolicy = 'on';
            _this.horizontalScrollPolicy = 'off';
        }
        else {
            _this.verticalScrollPolicy = 'off';
            _this.horizontalScrollPolicy = 'on';
        }
        if (!isOpenMove) {
            _this.verticalScrollPolicy = 'off';
            _this.horizontalScrollPolicy = 'off';
        }
        _this.isVer = isVer;
        _this.min = min;
        _this.scrollSpeed = scrollSpeed;
        _this.node = node;
        _this.listener = listener;
        _this.isLoop = isOpenLoop;
        _this.isPosition = isOpenPosition;
        _this.isMoveScale = isMoveScale;
        _this.minScale = minScale;
        return _this;
    }
    ScrollView.prototype.onEnter = function () {
        this.setContent(this._child);
        if (this.isPosition)
            this._onScrollFinished = this.onEnd;
        if (this.isMoveScale)
            this.addEventListener(egret.Event.CHANGE, this.changeScale, this);
    };
    ScrollView.prototype.onEnd = function () {
        var child = this.nowChild;
        if (this.isVer) {
            var point = this.scrollTop;
            var min = this._child.width;
            for (var i = 0; i < this._child.numChildren; i++) {
                var cha = Math.abs(this._child.getChildAt(i).y - this.height / 2 - point);
                if (cha <= this.min)
                    return;
                if (cha <= min) {
                    min = cha;
                    child = i - this.nowChild;
                }
            }
        }
        else {
            var point = this.scrollLeft;
            var min = this._child.width;
            for (var i = 0; i < this._child.numChildren; i++) {
                var cha = Math.abs(this._child.getChildAt(i).x - this.width / 2 - point);
                if (cha <= this.min)
                    return;
                if (cha <= min) {
                    min = cha;
                    child = i - this.nowChild;
                }
            }
        }
        this.changeChild(child);
    };
    ScrollView.prototype.changeScale = function () {
        var left = this.scrollLeft;
        var maxLeft = this.getMaxScrollLeft();
        var max = Math.max(maxLeft - left, left);
        for (var i = 0; i < this._child.numChildren; i++) {
            var target = this._child.getChildAt(i);
            var scale = 1 - Math.abs(target.x - left - this.width / 2) / max;
            scale = Math.max(scale, 0.8);
            target.$setScaleX(scale);
            target.$setScaleY(scale);
        }
    };
    ScrollView.prototype.last = function () {
        this.changeChild(-1);
    };
    ScrollView.prototype.next = function () {
        this.changeChild(1);
    };
    ScrollView.prototype.getChildPoint = function () {
        return this.point;
    };
    ScrollView.prototype.getChildNow = function () {
        return this.nowChild;
    };
    ScrollView.prototype.changeChild = function (num, runTime) {
        if (runTime === void 0) { runTime = 200; }
        this.nowChild += num;
        if (this.nowChild < 0)
            this.nowChild = this.isLoop ? this._child.numChildren - 1 : 0;
        if (this.nowChild >= this._child.numChildren)
            this.nowChild = this.isLoop ? 0 : this._child.numChildren - 1;
        this.changePosition(this.nowChild, runTime);
        // console.log(this.nowChild);
    };
    ScrollView.prototype.changePosition = function (child, runTime) {
        if (runTime === void 0) { runTime = 200; }
        this.nowChild = child;
        if (this.isVer) {
            var nowPoint = this._child.getChildAt(this.nowChild).y - this.height / 2;
            this.setScrollTop(nowPoint, runTime);
            this.point = nowPoint;
        }
        else {
            var nowPoint = this._child.getChildAt(this.nowChild).x - this.width / 2;
            this.setScrollLeft(nowPoint, runTime);
            this.point = nowPoint;
        }
        if (this.listener) {
            if (this.node)
                this.listener.call(this.node, this.nowChild);
            else
                this.listener.call(this, this);
        }
    };
    return ScrollView;
}(egret.ScrollView));
__reflect(ScrollView.prototype, "ScrollView");
//# sourceMappingURL=ScrollView.js.map