class Bullet implements IGameSprite {


  public speed: egret.Point;

  public hp: number = 100;

  public hpMax: number = 100;

  public addSpeed: egret.Point;

  public maxSpeed: egret.Point;

  public minSpeed: egret.Point;

  public hitSpeed: egret.Point;

  public holdFrame: number = -1;     //holdFrame为存在的总帧数

  public onRemove: Function;

  public mc: zmovie.ZMovieClip;

  public hitTimes: number = -1;

  public owner: IGameSprite;

  private _area: egret.Rectangle;

  private _orgScale: egret.Point;

  private _orgRotate: number;

  private _team: TeamVO;

  private _isHit: boolean;

  private _isTimeout: boolean;

  private _bulletArea: egret.Rectangle;

  private _hitVO: HitVO;

  private _loopFrame: any;

  private _hitAble: boolean = true;

  private _speedPlus: number;

  private _destoryed: boolean;

  private _direct: number;

  private _currentRect: egret.Rectangle;


  constructor(param1: zmovie.ZMovieClip, param2: any) {
    this.speed = new egret.Point(5, 0);
    this.addSpeed = new egret.Point();
    this.maxSpeed = new egret.Point(999, 999);
    this.minSpeed = new egret.Point(-999, -999);
    this.hitSpeed = new egret.Point(NaN, NaN);
    this._speedPlus = GameConfig.SPEED_PLUS;
    this._currentRect = new egret.Rectangle();
    this.mc = param1;
    this._orgScale = new egret.Point(param1.scaleX, param1.scaleY);
    this._orgRotate = param1.rotation;
    if (param2)                 //{x:{start:10, hit:5}, y:0, hold:1.5, hits:5, hp:200})
    {
      if (param2.x) {
        if (typeof (param2.x) == "number") {
          this.speed.x = param2.x;
        }
        else {
          if (param2.x.start != undefined) {
            this.speed.x = param2.x.start;
          }
          if (param2.x.add != undefined) {
            this.addSpeed.x = param2.x.add * 2;
          }
          if (param2.x.max != undefined) {
            this.maxSpeed.x = param2.x.max;
          }
          if (param2.x.min != undefined) {
            this.minSpeed.x = param2.x.min;
          }
          if (param2.x.hit != undefined) {
            this.hitSpeed.x = param2.x.hit;
          }
        }
      }
      if (param2.y) {
        if (typeof (param2.y) == "number") {
          this.speed.y = param2.y;
        }
        else {
          if (param2.y.start != undefined) {
            this.speed.y = param2.y.start;
          }
          if (param2.y.add != undefined) {
            this.addSpeed.y = param2.y.add * 2;
          }
          if (param2.y.max != undefined) {
            this.maxSpeed.y = param2.y.max;
          }
          if (param2.y.min != undefined) {
            this.minSpeed.y = param2.y.min;
          }
          if (param2.y.hit != undefined) {
            this.hitSpeed.y = param2.y.hit;
          }
        }
      }
      if (param2.hold) {
        if (param2.hold == -1) {
          this.holdFrame = -1;
        }
        else {
          this.holdFrame = param2.hold * GameConfig.FPS_GAME;
        }
      }
      if (param2.hits) {
        this.hitTimes = param2.hits;
      }
      if (param2.hp) {
        this.hpMax = param2.hp;
        this.hp = param2.hp;
      }
    }
  }

  public getx(): number {
    return this.mc.x;
  }

  public gety(): number {
    return this.mc.y;
  }

  public get x(): number {
    return this.mc.x;
  }

  public setx(param1: number) {
    this.mc.x = param1;
  }

  public set x(param1: number) {
    this.mc.x = param1;
  }

  public get y(): number {
    return this.mc.y;
  }

  public sety(param1: number) {
    this.mc.y = param1;
  }

  public set y(param1: number) {
    this.mc.y = param1;
  }

  public get team(): TeamVO {
    return this._team;
  }

  public set team(param1: TeamVO) {
    this._team = param1;
  }

  public getteam(): TeamVO {
    return this._team;
  }

  public setteam(param1: TeamVO) {
    this._team = param1;
  }

  public isAttacking(): boolean {
    return this._hitAble;
  }

  public setSpeedRate(param1: number): void {
    this._speedPlus = param1;
  }

  public get direct(): number {
    return this._direct;
  }

  public getdirect(): number {
    return this._direct;
  }

  public set direct(param1: number) {
    this._direct = param1;
    this.mc.scaleX = this._orgScale.x * this._direct;
    this.mc.rotation = this._orgRotate * this._direct;
    this.mc.x = this.mc.x * this._direct;
    this.speed.x = this.speed.x * param1;
    this.addSpeed.x = this.addSpeed.x * param1;
    if (!isNaN(this.hitSpeed.x)) {
      this.hitSpeed.x = this.hitSpeed.x * param1;
    }
  }

  public setHitVO(param1: HitVO) {
    var _loc2_: any = null;
    this.owner = param1.owner;
    this._hitVO = param1.clone();
    this._hitVO.owner = this;
    var _loc4_: egret.DisplayObject = this.mc.getChildByName("main");
    var _loc3_: egret.DisplayObject = this.owner.getDisplay();
    if (_loc4_) {
      this._bulletArea = _loc4_.getTransformedBounds(_loc3_);
      this._bulletArea.width = _loc4_.scaleX * _loc_width;
      this._bulletArea.height = _loc4_.scaleY * _loc_height;
      this._bulletArea.x = this._bulletArea.x - this.mc.x;
      this._bulletArea.y = this._bulletArea.y - this.mc.y;
    }
    else {
      this._bulletArea = this.mc.getTransformedBounds(_loc3_);
      this._bulletArea.width = this.mc.scaleX * _loc_width;
      this._bulletArea.height = this.mc.scaleY * _loc_height;
      this._bulletArea.x = this._bulletArea.x - this.mc.x;
      this._bulletArea.y = this._bulletArea.y - this.mc.y;
    }
    this.direct = this.owner.getdirect();
    this.mc.x = this.mc.x + this.owner.getx();
    this.mc.y = this.mc.y + this.owner.gety();
    if (this.owner instanceof FighterMain) {
      _loc2_ = (<FighterMain>this.owner).getMC();
      this.mc.x = this.mc.x + _loc2_.x;
      this.mc.y = this.mc.y + _loc2_.y;
      this._bulletArea.x = this._bulletArea.x - _loc2_.x;
      this._bulletArea.y = this._bulletArea.y - _loc2_.y;
    }
  }

  public destory(param1: boolean = true): void {
    this._destoryed = true;
    if (this.mc) {
      this.mc.ClearFrameScript();
      this.mc.stop();
      this.mc = null;
    }
    this.speed = null;
    this.addSpeed = null;
    this.maxSpeed = null;
    this.minSpeed = null;
    this.hitSpeed = null;
    this.owner = null;
    this._area = null;
    this._orgScale = null;
    this._team = null;
    this._bulletArea = null;
    this._hitVO = null;
    //create by lmj in 2020-7-24
    this._isHit = null;
    this._isTimeout = null;
    this._hitAble = true;
  }

  public isDestoryed(): boolean {
    return this._destoryed;
  }

  public renderAnimate(): void {
    this.mc.nextFrame();
    //  var _loc2_:string = this.mc.getCurrPlayLabel();      //获得的label有问题
    let _lab: string = null;
    let labels = this.mc.getLabels();
    for (let label in labels) {
      if (this.mc.getCurrFrame() >= labels[label].begin && this.mc.getCurrFrame() <= labels[label].end) {
        _lab = label;
        break;
      }
    }
    if ("loop" != _lab) {
      if ("remove" != _lab) {
        if ("hit_over" != _lab) {
          if (this.mc.getCurrFrame() == this.mc.getTotalFrame() - 1) {
            this.removeSelf();
          }
        }
        else {
          this._hitAble = false;
        }
      }
      else {
        this.removeSelf();
      }
    }
    else         //循环loop帧区间[loop_start,loop]
    {
      if (this._loopFrame == null) {
        if (MCUtils.hasFrameLabel(this.mc, "loop_start")) {
          this._loopFrame = "loop_start";
        }
        else {
          this._loopFrame = 1;
        }
      }
      this.mc.gotoAndStop(this._loopFrame);
    }
  }

  public render(): void {
    if (this._isHit) {
      return;
    }
    this.mc.x = this.mc.x + this.speed.x * this._speedPlus;
    this.mc.y = this.mc.y + this.speed.y * this._speedPlus;
    this.speed.x = this.speed.x + this.addSpeed.x * this._speedPlus;
    this.speed.y = this.speed.y + this.addSpeed.y * this._speedPlus;
    if (this._direct > 0) {
      if (this.speed.x > this.maxSpeed.x) {
        this.speed.x = this.maxSpeed.x;
      }
      if (this.speed.x < this.minSpeed.x) {
        this.speed.x = this.minSpeed.x;
      }
    }
    else {
      if (this.speed.x < -this.maxSpeed.x) {
        this.speed.x = -this.maxSpeed.x;
      }
      if (this.speed.x > -this.minSpeed.x) {
        this.speed.x = -this.minSpeed.x;
      }
    }
    if (this.speed.y > this.maxSpeed.y) {
      this.speed.y = this.maxSpeed.y;
    }
    if (this.speed.y < this.minSpeed.y) {
      this.speed.y = this.minSpeed.y;
    }
    if (this.holdFrame != -1 && !this._isTimeout) {
      this.holdFrame = this.holdFrame - 1;
      if (this.holdFrame <= 0)         //存在时间已过
      {
        if (MCUtils.hasFrameLabel(this.mc, "timeout")) {
          this._isTimeout = true;
          this.mc.gotoAndStop("timeout");
        }
        else {
          this.removeSelf();
          return;
        }
      }
    }
    if (GameLogic.isTouchBottomFloor(this))   //碰撞到Bottomfloor,即底部
    {
      this.hit(this._hitVO, null);
      EffectCtrl.I.shake(0, 1, 200);
      return;
    }
    if (GameLogic.isOutRange(this))         //超出地图
    {
      this.removeSelf();
    }
  }

  public getDisplay(): egret.DisplayObject {
    return this.mc;
  }

  private removeSelf(): void {
    if (this.onRemove != null) {
      this.onRemove(this);
    }
  }

  private doHit(): void {
    if (!this._isHit) {
      try {
        this.mc.gotoAndStop("hit");    
      }
      catch (e) {
        // console.log("Bullet", e);
      }
    }
    this._isHit = true;
    this._hitAble = false;
  }

  public hit(param1: HitVO, param2: IGameSprite): void {
    if (param2 instanceof Bullet) {
      if (!isNaN(this.hitSpeed.x)) {
        this.speed.x = this.hitSpeed.x;
      }
      if (!isNaN(this.hitSpeed.y)) {
        this.speed.y = this.hitSpeed.y;
      }
      return;
    }
    if (this.hitTimes != -1) {
      this.hitTimes = this.hitTimes - 1;
      if (this.hitTimes - 1 <= 0) {
        this.doHit();
      }
    }
    if (param2 && this.owner && this.owner instanceof FighterMain) {
      (<FighterMain>this.owner).addQi(param1.power * 0.1);
      GameLogic.hitTarget(param1, this.owner, param2);
    }
    if (param2) {
      if (this.hitSpeed.x == 0 && this.hitSpeed.y == 0) {
        return;
      }
      if (param2 instanceof BaseGameSprite && (<BaseGameSprite>param2).getIsTouchSide()) {
        if (isNaN(this.hitSpeed.x)) {
          this.hitSpeed.x = this.speed.x;
        }
        if (isNaN(this.hitSpeed.y)) {
          this.hitSpeed.y = this.speed.y;
        }
        this.hitSpeed.x = Math.abs(this.hitSpeed.x) < 1 ? 0 : Number(this.hitSpeed.x * 0.5);
        this.hitSpeed.y = Math.abs(this.hitSpeed.y) < 1 ? 0 : Number(this.hitSpeed.y * 0.5);
      }
      if (!isNaN(this.hitSpeed.x)) {
        this.speed.x = this.hitSpeed.x;
      }
      if (!isNaN(this.hitSpeed.y)) {
        this.speed.y = this.hitSpeed.y;
      }
    }
  }

  public beHit(param1: HitVO, param2: egret.Rectangle = null): void {
    if (param1.owner && param1.owner instanceof Bullet) {
      this.hp = this.hp - (<Bullet>param1.owner).hpMax;
    }
    else {
      this.hp = this.hp - param1.power;
    }
    if (this.hp <= 0) {
      this.doHit();
    }
  }

  public getCurrentHits(): Array<any> {
    if (!this._hitVO || !this._bulletArea || !this._hitAble) {
      return null;
    }
    this._hitVO.currentArea = this.getCurrentRect(this._bulletArea);
    return [this._hitVO];
  }

  public getArea(): egret.Rectangle {
    if (!this._bulletArea) {
      return null;
    }
    return this.getCurrentRect(this._bulletArea);
  }

  public getBodyArea(): egret.Rectangle {
    if (!this._bulletArea) {
      return null;
    }
    return this.getCurrentRect(this._bulletArea);
  }

  private getCurrentRect(param1: egret.Rectangle): egret.Rectangle {
    var _loc2_: egret.Rectangle = this._currentRect;
    _loc2_.x = param1.x * this._direct + this.mc.x;
    if (this._direct < 0) {
      _loc2_.x = _loc2_.x - param1.width;
    }
    _loc2_.y = param1.y + this.mc.y;
    _loc2_.width = param1.width;
    _loc2_.height = param1.height;
    return _loc2_;
  }

  public allowCrossMapXY(): boolean {
    return true;
  }

  public allowCrossMapBottom(): boolean {
    return false;
  }

  public getIsTouchSide(): boolean {
    return false;
  }

  public setIsTouchSide(param1: boolean): void {
  }
}


