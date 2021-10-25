class ScrollView extends egret.ScrollView {
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
    public constructor(
        child: egret.DisplayObjectContainer, 
        wid: number, high: number, x: number, y: number, 
        scrollSpeed: number = 0.2 , min: number = 1, 
        isOpenMove: boolean = true, isVer: boolean = false, 
        node: any = null, listener: Function = null, isOpenLoop: boolean =  false, isOpenPosition: boolean = true,
        isMoveScale: boolean = false,minScale: number = 0.8) {
        super();
        this._child = child;
        this.addEventListener(egret.TouchEvent.ADDED_TO_STAGE, this.onEnter, this);
        this.$setWidth(wid);
        this.$setHeight(high);
        this.$setX(x);
        this.$setY(y);
        if(isVer) {
            this.verticalScrollPolicy = 'on';
            this.horizontalScrollPolicy = 'off';
        } else {
            this.verticalScrollPolicy = 'off';
            this.horizontalScrollPolicy = 'on';
        }
        if(!isOpenMove) {
            this.verticalScrollPolicy = 'off';
            this.horizontalScrollPolicy = 'off';
        }

        this.isVer = isVer;
        this.min = min;
        this.scrollSpeed = scrollSpeed;
        this.node = node;
        this.listener = listener;
        this.isLoop = isOpenLoop;
        this.isPosition = isOpenPosition;
        this.isMoveScale = isMoveScale;
        this.minScale = minScale;
    }

    public isVer: boolean;
    private min: number;
    private _child: egret.DisplayObjectContainer;
    private point: number = 0;
    private nowChild: number = 0;
    private node: any = null;
    private listener: Function = null;
    private isLoop: boolean = false;
    // private isVer: boolean;
    private isPosition: boolean;
    private minScale: number = 1;
    private isMoveScale: boolean = false;


    onEnter() {
        this.setContent(this._child);
        if(this.isPosition) this._onScrollFinished = this.onEnd;
        if(this.isMoveScale) this.addEventListener(egret.Event.CHANGE, this.changeScale, this);
    }

    onEnd() {
        let child = this.nowChild;
        if(this.isVer) {
            const point = this.scrollTop;
            let min = this._child.width;
            for(let i=0;i<this._child.numChildren;i++) {
                const cha = Math.abs(this._child.getChildAt(i).y - this.height/2 - point);
                if (cha <= this.min) return;
                if(cha <= min) {
                    min = cha;
                    child = i - this.nowChild;
                }
            }
        }
        else {
            const point = this.scrollLeft;
            let min = this._child.width;
            for(let i=0;i<this._child.numChildren;i++) {
                const cha = Math.abs(this._child.getChildAt(i).x - this.width/2 - point);
                if (cha <= this.min) return;
                if(cha <= min) {
                    min = cha;
                    child = i - this.nowChild;
                }
            }
        }
        this.changeChild(child);
    }
    public changeScale() {
        const left = this.scrollLeft;
        const maxLeft = this.getMaxScrollLeft();
        const max = Math.max(maxLeft-left,left);
        for(let i=0;i<this._child.numChildren;i++) {
            const target = this._child.getChildAt(i);
            let scale = 1 - Math.abs(target.x-left-this.width/2)/max;
            scale = Math.max(scale, 0.8);
            target.$setScaleX(scale);
            target.$setScaleY(scale);
        }
    }


    public last() {
        this.changeChild(-1);
    }

    public next() {
        this.changeChild(1);
    }

    public getChildPoint() {
        return this.point;
    }

    public getChildNow() {
        return this.nowChild;
    }

    public changeChild(num: number, runTime: number = 200) {
        this.nowChild += num;
        if (this.nowChild < 0) this.nowChild = this.isLoop?this._child.numChildren - 1:0;
        if (this.nowChild >= this._child.numChildren) this.nowChild = this.isLoop?0:this._child.numChildren - 1;
        this.changePosition(this.nowChild, runTime);
        // console.log(this.nowChild);
    }

    public changePosition(child: number, runTime: number = 200) {
        this.nowChild = child;
        if(this.isVer) {
            const nowPoint = this._child.getChildAt(this.nowChild).y - this.height/2;
            this.setScrollTop(nowPoint,runTime);
            this.point = nowPoint;
        } else {
            const nowPoint = this._child.getChildAt(this.nowChild).x - this.width/2;
            this.setScrollLeft(nowPoint,runTime);
            this.point = nowPoint;
        }
        if(this.listener) {
            if(this.node) this.listener.call(this.node, this.nowChild);
            else this.listener.call(this, this);
        }
    }


}