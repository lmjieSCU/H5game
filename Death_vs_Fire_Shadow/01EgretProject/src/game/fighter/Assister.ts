class Assister extends BaseGameSprite {
    public onRemove: Function;
    public data: FighterVO;
    public isAttacking: boolean;
    private _hitAreaCache: McAreaCacher;
    private _hitCheckAreaCache: McAreaCacher;
    private _rectCache: Object;
    private _mcOrgPoint: egret.Point;
    private _owner: IGameSprite;
    private _isRenderMainAnimate: boolean = true;
    private _ctrler: AssisiterCtrler;

    constructor(param1: zmovie.ZMovieClip,param2:FighterMain) {
        super(param1);
        this._hitAreaCache = new McAreaCacher("hit");
        this._hitCheckAreaCache = new McAreaCacher("hit_check");
        this._rectCache = {};

        this.isAlive = false;
        // if (this._mainMc.setAssistCtrler)
        // {
        //     this._ctrler = new AssisiterCtrler();
        //     this._ctrler.initAssister(this);
        //     this._mainMc.setAssistCtrler(this._ctrler);
        // }
        // else
        // {
        //     throw new Error("初始化失败，SWF未定义setAssistCtrler()");
        // }
        if (this["setAssistCtrler"]) {
            this._ctrler = new AssisiterCtrler(param2);
            this._ctrler.initAssister(this);
            this["setAssistCtrler"](this._ctrler);
        }
        else {
            throw new Error("初始化失败，SWF未定义setAssistCtrler()");
        }
        //设置fightVO
        let heroName:string = this.mc._mcName
        heroName = heroName.substring(7)
        // console.log(AssisterModel.I.getAllAssisters())
        this.data = AssisterModel.I.getAssister(heroName)
        return;
    }// end function

    public get name(): string {
        return this._mainMc.name;
    }// end function

    public getOwner(): IGameSprite {
        return this._owner;
    }// end function

    public setOwner(param1: IGameSprite): void {
        this._owner = param1;
        return;
    }// end function

    public getCtrler(): AssisiterCtrler {
        return this._ctrler;
    }// end function

    public goFight(): void {
        this.gotoAndPlay(2);
        this.isAttacking = true;
        return;
    }// end function

    public destory(param1: boolean = true): void {
        if (!param1) {
            return;
        }
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
        this.data = null;
        this._rectCache = null;
        this._mcOrgPoint = null;
        this._owner = null;
        super.destory(param1);
        return;
    }// end function

    public stop(): void {
        this._isRenderMainAnimate = false;
        return;
    }// end function

    public gotoAndPlay(param1: any): void {
        this._mainMc.gotoAndStop(param1);
        this._isRenderMainAnimate = true;
        return;
    }// end function

    public gotoAndStop(param1: any): void {
        this._mainMc.gotoAndStop(param1);
        this._isRenderMainAnimate = false;
        return;
    }// end function

    public getTargets(): IGameSprite[] {
        if (!(this._owner instanceof FighterMain)) {
            return null;
        }
        return (<FighterMain>this._owner).getTargets();
    }// end function

    public removeSelf(): void {
        this.isAttacking = false;
        this.isAlive = false;
        if (this.onRemove != null) {
            this.onRemove(this);
        }
        return;
    }// end function

    public render(): void {
        super.render();
        this._ctrler.render();
        return;
    }// end function

    public renderAnimate(): void {
        if (!this._isRenderMainAnimate) {
            return;
        }
        super.renderAnimate();
        this.renderChildren();
        this.mc.nextFrame();
        this.findHitArea();
        if (this.mc.getCurrFrame() == (this.mc.getTotalFrame() - 1)) {
            this._ctrler.finish(true);
        }
        return;
    }// end function

    private renderChildren(): void {
        var _loc4_: number = 0;
        var _loc1_ = null;
        var _loc2_ = null;
        var _loc3_: number = 0;
        while (_loc4_ < this._mainMc.numChildren) {
            _loc1_ = <zmovie.ZMovieClip>this._mainMc.getChildAt(_loc4_);
            if (_loc1_) {
                _loc2_ = _loc1_.name;
                if (!(_loc2_ == "bdmn" || _loc2_.indexOf("atm") != -1)) {
                    _loc3_ = _loc1_.totalFrames;
                    if (_loc3_ >= 2) {
                        var _loc5_ = _loc1_.currentFrameLabel;
                        if ("stop" !== _loc5_) {
                            if (_loc1_.currentFrame == _loc3_) {
                                _loc1_.gotoAndStop(1);
                            }
                            else {
                                _loc1_.nextFrame();
                            }
                        }
                    }
                }
            }
            _loc4_++;
        }
    }// end function

    public getHitCheckRect(param1: string): egret.Rectangle {
        var _loc_2: any = this.getCheckHitRect(param1);
        if (_loc_2 == null) {
            return null;
        }
        return this.getCurrentRect(_loc_2, "hit_check");
    }// end function

    public getCheckHitRect(param1: string): egret.Rectangle {
        var _loc_2: any = this._mainMc.getChildByName(param1);
        if (!_loc_2) {
            return null;
        }
        var _loc_4: any = this._hitCheckAreaCache.getAreaByDisplay(_loc_2);
        if (this._hitCheckAreaCache.getAreaByDisplay(_loc_2)) {
            return _loc_4.area;
        }
        var _loc_3: any = _loc_2.getBounds(this._mainMc);
        this._hitCheckAreaCache.cacheAreaByDisplay(_loc_2, _loc_3);
        return _loc_3;
    }// end function

    private getCurrentRect(param1: egret.Rectangle, param2: string = null): egret.Rectangle {
        var _loc_3: any = null;
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
    }// end function

    private findHitArea(): void {
        var _loc_9: any = 0;
        var _loc_2: any = null;
        var _loc_6: any = null;
        var _loc_7: any = null;
        var _loc_4: any = null;
        var _loc_5: any = null;
        if (!this._hitAreaCache) {
            return;
        }
        if (this._hitAreaCache.areaFrameDefined(this._mainMc.getCurrFrame())) {
            return;
        }
        var _loc_3: any = this._hitAreaCache.getAreaByFrame(this._mainMc.getCurrFrame());
        if (_loc_3 != null) {
            return;
        }
        var _loc_8 = this._ctrler.hitModel;
        var _loc_1: any = [];
        while (_loc_9 < this._mainMc.numChildren) {
            _loc_2 = this._mainMc.getChildAt(_loc_9);
            _loc_6 = _loc_8.getHitVO(_loc_2.name);
            if (!(_loc_2 == null || _loc_6 == null)) {
                _loc_7 = this._hitAreaCache.getAreaByDisplay(_loc_2);
                if (_loc_7 == null) {
                    _loc_4 = _loc_2.getTransformedBounds(this._mainMc);
                    // _loc_4 = new egret.Rectangle(_loc_2.x, _loc_2.y, _loc_2.scaleX * _loc_width, _loc_2.scaleY * _loc_height);
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
    }// end function

    public hit(param1: HitVO, param2: IGameSprite): void {
        if (param2 && this._owner && this._owner instanceof FighterMain) {
            (<FighterMain>this._owner).addQi(param1.power * 0.15);
            GameLogic.hitTarget(param1, this._owner, param2);
        }
        return;
    }// end function

    public getCurrentHits(): any[] {
        var _loc_8: any = 0;
        var _loc_7: any = null;
        var _loc_6: any = null;
        var _loc_4: any = null;
        var _loc_2: any = null;
        var _loc_3: any = null;
        if (!this._hitAreaCache) {
            return null;
        }
        var _loc_5: any = this._hitAreaCache.getAreaByFrame(this._mainMc.getCurrFrame());
        if (!(this._hitAreaCache.getAreaByFrame(this._mainMc.getCurrFrame())) || _loc_5.length < 1) {
            return null;
        }
        var _loc_1: any = [];
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
    }// end function

    public getCurrentTarget(): IGameSprite {
        if (this._owner instanceof FighterMain) {
            return (<FighterMain>this._owner).getCurrentTarget();
        }
        return null;
    }// end function

}


