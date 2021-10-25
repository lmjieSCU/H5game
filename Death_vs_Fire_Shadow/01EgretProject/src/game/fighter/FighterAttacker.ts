/*
*子动画
*onRemove：移除自身函数
*_ctrler：对应的attacker控制器
*moveToTarget：子动画初始坐标与敌人坐标相关,初始化时将子动画设至敌人处
*followTarget：子动画坐标与敌人坐标相关,渲染时将子动画跟踪至敌人处
*/

class FighterAttacker extends BaseGameSprite {
    public onRemove: Function;
    public isAttacking: boolean;
    public _ctrler: FighterAttackerCtrler;
    private _owner: IGameSprite;
    public moveToTargetX: boolean;
    public moveToTargetY: boolean;
    public followTargetX: boolean;
    public followTargetY: boolean;
    public rangeX: egret.Point;
    public rangeY: egret.Point;
    private _startX: number = 0;
    private _startY: number = 0;
    private _hitAreaCache: McAreaCacher;
    private _hitCheckAreaCache: McAreaCacher;
    private _rectCache: Object;
    private _mcOrgPoint: egret.Point;
    private _isRenderMainAnimate: boolean = true;



    public constructor(param1: any, param2: any = null)   //  初始化坐标等数据
    {
        super(param1);
        this._hitAreaCache = new McAreaCacher("hit");
        this._hitCheckAreaCache = new McAreaCacher("hit_check");
        this._rectCache = {};

        this._mcOrgPoint = new egret.Point(param1.x, param1.y);
        this._startX = this._mcOrgPoint.x;
        this._startY = this._mcOrgPoint.y;
        this._x = this._startX;
        this._y = this._startY;
        //相对初始坐标，固定不变
        this._ctrler = new FighterAttackerCtrler(this);
        if (param2) {
            if (param2.x != undefined) {
                if (typeof (param2.x) == "number") {
                    this._startX = param2.x + this._mcOrgPoint.x;
                }
                else {
                    this.moveToTargetX = param2.x.moveToTarget == true;
                    this.followTargetX = param2.x.followTarget == true;
                    if (param2.x.offset != undefined) {
                        this._startX = param2.x.offset;
                    }
                    if (param2.x.range != undefined && param2.x.range instanceof Array) {
                        this.rangeX = new egret.Point(param2.x.range[0], param2.x.range[1]);
                    }
                }
            }
            if (param2.y != undefined) {
                if (typeof (param2.y) == "number") {
                    this._startY = param2.y + this._mcOrgPoint.y;
                }
                else {
                    this.moveToTargetY = param2.y.moveToTarget == true;
                    this.followTargetY = param2.y.followTarget == true;
                    if (param2.y.offset != undefined) {
                        this._startY = param2.y.offset;
                    }
                    if (param2.y.range != undefined && param2.y.range instanceof Array) {
                        this.rangeY = new egret.Point(param2.y.range[0], param2.y.range[1]);
                    }
                }
            }
            if (param2.applyG != undefined) {
                this.isApplyG = param2.applyG == true;
            }
        }
        return;
    }// end 

    public getOwner(): IGameSprite {
        return this._owner;
    }// end 

    public get name(): string {
        return this._mainMc.name;
    }// end 

    public getCtrler(): FighterAttackerCtrler {
        return this._ctrler;
    }// end 

    public destory(param1: boolean = true) {
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
        super.destory(true);
        return;
    }// end 

    //设置所属的fightermain
    public setOwner(param1: IGameSprite) {
        this._owner = param1;
        this.direct = param1.getdirect();
        if (this._owner instanceof FighterMain) {
            this._ctrler.effect = (<FighterMain>this._owner).getCtrler().getEffectCtrl();
        }
        if (this._owner instanceof Assister) {
            this._ctrler.effect = (<Assister>this._owner).getCtrler().effect;
        }
        return;
    }// end 

    //初始化子动画坐标
    public init() {
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
        var _loc_5 = this.getTarget();      //对手
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
    }// end 


    public renderAnimate() {
        if (!this._isRenderMainAnimate) {
            return;
        }
        super.renderAnimate();
        this.mc.nextFrame();
        this.findHitArea();
        if (!this.mc) {
            return;
        }
        if (this.mc.getCurrFrame() == this.mc.getTotalFrame() - 1) {
            this.removeSelf();
        }
        return;
    }// end 


    public render() {
        super.render();
        this._ctrler.render();
        this.renderFollowTarget();
        return;
    }// end 

    public stopFollowTarget() {
        this.followTargetX = false;
        this.followTargetY = false;
        return;
    }// end 

    private renderFollowTarget() {
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
    }// end 

    public moveToTarget(param1: number = NaN, param2: number = NaN) {
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
    }// end 

    public stop() {
        this._isRenderMainAnimate = false;
        return;
    }// end 

    public gotoAndPlay(param1: string) {
        this._mainMc.gotoAndStop(param1);
        this._isRenderMainAnimate = true;
        return;
    }// end 

    public gotoAndStop(param1: string) {
        this._mainMc.gotoAndStop(param1);
        this._isRenderMainAnimate = false;
        return;
    }// end 

    public getTargets(): Array<IGameSprite> {
        if (this._owner instanceof FighterMain) {
            return (this._owner as FighterMain).getTargets();
        }
        if (this._owner instanceof Assister) {
            return (this._owner as Assister).getTargets();
        }
        return null;
    }// end 

    private getTarget(): IGameSprite {
        if (this._owner instanceof FighterMain) {
            return (this._owner as FighterMain).getCurrentTarget();
        }
        if (this._owner instanceof Assister) {
            return (this._owner as Assister).getCurrentTarget();
        }
        return null;
    }// end 

    public removeSelf() {
        if (this.onRemove != null) {
            this.onRemove(this);
        }
        return;
    }// end 

    public getCurrentHits(): Array<any> {
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
    }// end 

    public getHitCheckRect(param1: string): egret.Rectangle         //获得打击检测矩阵angle,与人物bodyangle进行intersections
    {
        var _loc_2 = this.getCheckHitRect(param1);
        if (_loc_2 == null) {
            return null;
        }
        return this.getCurrentRect(_loc_2, "hit_check");
    }// end 

    public getCheckHitRect(param1: string): egret.Rectangle {
        var _loc_2 = this._mainMc.getChildByName(param1);
        if (!_loc_2) {
            return null;
        }
        var _loc_4 = this._hitCheckAreaCache.getAreaByDisplay(_loc_2);
        if (this._hitCheckAreaCache.getAreaByDisplay(_loc_2)) {
            return _loc_4.area;
        }
        let _loc_3 = _loc_2.getTransformedBounds(this._mainMc);
         _loc_3.width = _loc_width * _loc_2.scaleX;
        _loc_3.height = _loc_height * _loc_2.scaleY;
        this._hitCheckAreaCache.cacheAreaByDisplay(_loc_2, _loc_3);
        return _loc_3;
    }// end 

    private getCurrentRect(param1: egret.Rectangle, param2: string = null): egret.Rectangle {
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
    }// end 

    private getHitModel(): FighterHitModel {
        if (this._owner instanceof FighterMain) {
            return (this._owner as FighterMain).getCtrler().hitModel;
        }
        if (this._owner instanceof Assister) {
            return (this._owner as Assister).getCtrler().hitModel;
        }
        //throw new Error("不支持的owner类型!");
        return null;
    }// end 

    //  若该帧下有hitVO,将其hitArea存至_hitAreaCache以便碰撞检测使用
    private findHitArea() {
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
            _loc_2 = this._mainMc.getChildAt(_loc_9) as zmovie.ZMovieClip;
            _loc_6 = _loc_8.getHitVOByDisplayName(_loc_2.name);
            if (!(_loc_2 == null || _loc_6 == null)) {
                _loc_7 = this._hitAreaCache.getAreaByDisplay(_loc_2);
                if (_loc_7 == null) {
                    _loc_4 = new egret.Rectangle(_loc_2.x, _loc_2.y, _loc_2.scaleX * _loc_width, _loc_2.scaleY * _loc_height);//-(_loc_2.rotation/90)*_loc_2.scaleX * _loc_width
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
    }// end 

    private getOwnerFighter(): FighterMain {
        if (this._owner instanceof FighterMain) {
            return this._owner as FighterMain;
        }
        if (this._owner instanceof Assister) {
            return (this._owner as Assister).getOwner() as FighterMain;
        }
        return null;
    }// end 

    public hit(param1: HitVO, param2: IGameSprite) {
        var _loc_3 = NaN;
        var _loc_4 = this.getOwnerFighter();
        if (param2 && _loc_4) {
            _loc_3 = this._owner instanceof Assister ? (0.15) : (0.13);
            _loc_4.addQi(param1.power * _loc_3);
            GameLogic.hitTarget(param1, _loc_4, param2); //zhushi by lmj in 2020-7-13
        }
        return;
    }// end 

}
