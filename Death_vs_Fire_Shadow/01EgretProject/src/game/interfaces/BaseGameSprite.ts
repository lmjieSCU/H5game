
   
    class BaseGameSprite extends egret.EventDispatcher implements IGameSprite
   {
      
      public isInAir:boolean;
      
      public isTouchBottom:boolean;
      
      public isAllowBeHit:boolean = true;
      
      public isCross:boolean = false;
      
      public isAlive:boolean = true;
      
      public isAllowLoseHP:boolean = true;
      
      public isApplyG:boolean = true;
      
      public heavy:number = 2;
      
      public hp:number = 1000;
      
      public hpMax:number = 1000;
      
      public defense:number = 0;
      
      public isAllowCrossX:boolean = false;
      
      public isAllowCrossBottom:boolean = false;
      
      private _attackRate:number = 1;
      
      public id:string;
      
      protected _x:number = 0;
      
      protected _y:number = 0;
      
      protected _g:number = 0;
      
      protected _mainMc:any;
      
      protected _isTouchSide:boolean = false;
      
      protected _area:egret.Rectangle;
      
      private _direct:number = 1;
      
      private _scale:number = 1;
      
      private _frameFuncs:any[];
      
      private _frameAnimateFuncs:any[];
      
      private _team:TeamVO;
      
      private _speedPlus:number;
      
      private _dampingRate:number = 1;
      
      private _velocity:egret.Point;
      
      private _damping:egret.Point;       //_damping即为速度矢量每帧增加的值
      
      private _velocity2:egret.Point;
      
      private _damping2:egret.Point;
      
      protected _destoryed:boolean;
      
      constructor(param1:zmovie.ZMovieClip)
      {
         super();
         this.id = UUID.create();
         this._frameFuncs = [];
         this._frameAnimateFuncs = [];
         this._speedPlus = GameConfig.SPEED_PLUS;
         this._velocity = new egret.Point();
         this._damping = new egret.Point();
         this._velocity2 = new egret.Point();
         this._damping2 = new egret.Point();
         
         this._x = param1.x;
         this._y = param1.y;  //create by lmj
         this._mainMc = param1;
         this._area = this._mainMc.getBounds();
      }
      
      public get attackRate() : number
      {
         return this._attackRate;
      }
      
      public set attackRate(param1:number) 
      {
         this._attackRate = param1;
      }
      
      public get mc() : any
      {
         return this._mainMc;
      }
      
      public get x() : number
      {
         return this._x;
      }
       public getx() : number
      {
         return this._x;
      }
       public gety() : number
      {
         return this._y;
      }

       public setx(param1:number) 
      {
         this._x = param1;
      }
       public sety(param1:number) 
      {
         this._y = param1;
      }

      
      public set x(param1:number) 
      {
         this._x = param1;
      }
      
      public get y() : number
      {
         return this._y;
      }
      
      public set y(param1:number) 
      {
         this._y = param1;
      }
      
      public get scale() : number
      {
         return this._scale;
      }
      
      public set scale(param1:number) 
      {
         this._scale = param1;
         var _loc2_:any = param1;
         this._mainMc.scaleY = _loc2_;
         this._mainMc.scaleX = _loc2_;
      }
      
      public get direct() : number
      {
         return this._direct;
      }
      public getdirect() : number
      {
         return this._direct;
      }
      
      public set direct(param1:number) 
      {
         this._direct = param1;
         this._mainMc.scaleX = this._direct * this._scale;
      }

    public getteam() : TeamVO
      {
         return this._team;
      }
      
      public setteam(param1:TeamVO) 
      {
         this._team = param1;
      }

      public get team() : TeamVO
      {
         return this._team;
      }
      
      public set team(param1:TeamVO) 
      {
         this._team = param1;
      }
      
      public updatePosition() 
      {
         this._mainMc.x = this._x;
         this._mainMc.y = this._y;
      }
      
      public isDestoryed() : boolean
      {
         return this._destoryed;
      }
      
      public destory(param1:boolean = true) : void
      {
         this._destoryed = true;
         this.isAlive = false;
         this.isAllowBeHit = false;
         this.stopRenderSelf();
         if(param1)
         {
            if(this._mainMc)
            {
               try
               {
                  this._mainMc.stop();//stopAllMovieClips();
               }
               catch(e)
               {
                  // console.log(e);
               }
               this._mainMc.ClearFrameScript();   //created by lmj in 2020-7-14 for initlize FrameScript array
               this._mainMc = null;
            }
         }
      }
      
      public renderAnimate() : void
      {
         if(this._destoryed)
         {
            return;
         }
         this.renderAnimateFrameOut();
      }
      
      public render() : void
      {
         if(this._destoryed)
         {
            return;
         }
         this.renderVelocity();   //改变坐标
         this.renderFrameOut();   //无事
         this._mainMc.x = this._x;
         this._mainMc.y = this._y;
      }
      
      public getDisplay() : zmovie.ZMovieClip //ZMovieClip
      {
         return this._mainMc;
      }
      
      public move(param1:number = 0, param2:number = 0) : void    //移动坐标
      {
         if(param1 != 0)
         {
            this._x = this._x + param1 * this._speedPlus;
         }
         if(param2 != 0)
         {
            this._y = this._y + param2 * this._speedPlus;
         }
      }
      
      public setSpeedRate(param1:number) : void
      {
         this._speedPlus = param1;
         this._dampingRate = param1 / GameConfig.SPEED_PLUS_DEFAULT;
      }
      
      public getVelocity() : egret.Point
      {
         return this._velocity;
      }
      
      public getVecX() : number
      {
         return this._velocity.x;
      }
      
      public getVecY() : number
      {
         return this._velocity.y;
      }
      
      public setVecX(param1:number) : void
      {
         this._velocity.x = param1;
      }
      
      public setVecY(param1:number) : void
      {
         this._velocity.y = param1;
      }
      
      public setVelocity(param1:number = 0, param2:number = 0) : void
      {
         this._velocity.x = param1;
         this._velocity.y = param2;
         this.setDamping(0,0);
      }
      
      public addVelocity(param1:number = 0, param2:number = 0) : void
      {
         this._velocity.x = this._velocity.x + param1;
         this._velocity.y = this._velocity.y + param2;
      }
      
      public setVec2(param1:number = 0, param2:number = 0, param3:number = 0, param4:number = 0) : void
      {
         this._velocity2.x = param1;
         this._velocity2.y = param2;
         this._damping2.x = param3 * GameConfig.SPEED_PLUS_DEFAULT * 6;
         this._damping2.y = param4 * GameConfig.SPEED_PLUS_DEFAULT * 6;
      }
      
      public getVec2() : egret.Point
      {
         return this._velocity2;
      }
      
      public getDampingX() : number
      {
         return this._damping.x;
      }
      
      public getDampingY() : number
      {
         return this._damping.y;
      }
      
      public setDampingX(param1:number) : void
      {
         this._damping.x = param1;
      }
      
      public setDampingY(param1:number) : void
      {
         this._damping.y = param1;
      }
      
      public setDamping(param1:number = 0, param2:number = 0) : void
      {
         this._damping.x = param1 * GameConfig.SPEED_PLUS_DEFAULT * 2;
         this._damping.y = param2 * GameConfig.SPEED_PLUS_DEFAULT * 2;
      }
      
      public addDamping(param1:number = 0, param2:number = 0) : void
      {
         this._damping.x = this._damping.x + param1;
         this._damping.y = this._damping.y + param2;
      }
      
      private renderVelocity() : void     //渲染速度矢量，调用move函数进而移动坐标
      {
         var _loc1_:any = 0;
         var _loc2_:any = 0;
         if(this._velocity.x != 0)
         {
            _loc1_ = Number(_loc1_ + this._velocity.x);
            if(this._damping.x > 0)
            {
               this._velocity.x = KyoUtils.num_wake(this._velocity.x,this._damping.x * this._dampingRate);
            }
         }
         if(this._velocity.y != 0)
         {
            _loc2_ = Number(_loc2_ + this._velocity.y);
            if(this._damping.y > 0)
            {
               this._velocity.y = KyoUtils.num_wake(this._velocity.y,this._damping.y * this._dampingRate);
            }
         }
         if(this._velocity2.x != 0)
         {
            _loc1_ = Number(_loc1_ + this._velocity2.x);
            if(this._damping2.x > 0)
            {
               this._velocity2.x = KyoUtils.num_wake(this._velocity2.x,this._damping2.x * this._dampingRate);
            }
         }
         if(this._velocity2.y != 0)
         {
            _loc2_ = Number(_loc2_ + this._velocity2.y);
            if(this._damping2.y > 0)
            {
               this._velocity2.y = KyoUtils.num_wake(this._velocity2.y,this._damping2.y * this._dampingRate);
            }
         }
         if(_loc1_ != 0 || _loc2_ != 0)
         {
            this.move(_loc1_,_loc2_);
         }
      }
      
      public applayG(param1:number) : void      //重力，实现下降
      {
         var _loc2_:number = NaN;
         if(!this.isApplyG)
         {
            this._g = 0;
            return;
         }
         if(this._velocity.y < 0)
         {
            this._g = 0;
            return;
         }
         if(this._g < param1)
         {
            _loc2_ = 2 * GameConfig.SPEED_PLUS;
            this._g = this._g + _loc2_;
            if(this._g > param1)
            {
               this._g = param1;
            }
         }
         this.move(0,this._g);
      }
      
      public setInAir(param1:boolean) : void
      {
         if(!param1)
         {
            this._g = 4;
         }
         this.isInAir = param1;
      }
      
      public hit(param1:HitVO, param2:IGameSprite) : void
      {
         var _loc3_:any = null;
         var _loc6_:any = null;
         var _loc7_:any = null;
         var _loc4_:number = 0;
         var _loc5_:number = 0;
         if(param2 && param2.getDisplay())
         {
            _loc3_ = this.getDisplay();
            _loc6_ = param2.getDisplay();
            if(_loc3_ && _loc6_ && _loc3_.parent && _loc3_.parent == _loc6_.parent)
            {
               _loc7_ = _loc3_.parent;
               _loc4_ = _loc7_.getChildIndex(_loc3_);
               _loc5_ = _loc7_.getChildIndex(_loc6_);
               if(_loc4_ != -1 && _loc5_ != -1 && _loc4_ < _loc5_)
               {
                  _loc7_.setChildIndex(_loc6_,_loc4_);
                  _loc7_.setChildIndex(_loc3_,_loc5_);
               }
            }
         }
      }
      
      public beHit(param1:HitVO, param2:egret.Rectangle = null) : void
      {
      }
      
      public getCurrentHits() :any[]
      {
         return null;
      }
      
      public getArea() : egret.Rectangle
      {
         if(!this._area)
         {
            return null;
         }
         var _loc1_:egret.Rectangle = this._area.clone();
         _loc1_.x = _loc1_.x + this._x;
         _loc1_.y = _loc1_.y + this._y;
         return _loc1_;
      }
      
      public getBodyArea() : egret.Rectangle
      {
         return null;
      }
      
      public allowCrossMapXY() : boolean
      {
         return this.isAllowCrossX;
      }
      
      public allowCrossMapBottom() : boolean
      {
         return this.isAllowCrossBottom;
      }
      
      public getIsTouchSide() : boolean
      {
         return this._isTouchSide;
      }
      
      public setIsTouchSide(param1:boolean) : void
      {
         this._isTouchSide = param1;
      }
      
      public addHp(param1:number) : void
      {
         this.hp = this.hp + param1;
         if(this.hp > this.hpMax)
         {
            this.hp = this.hpMax;
         }
      }
      
      public loseHp(param1:number) : void
      {
         if(!this.isAllowLoseHP)
         {
            return;
         }
         this.hp = this.hp - (param1 - this.defense);
         if(this.hp < 0)
         {
            this.isAlive = false
            this.hp = 0;
         }
      }
      
      public delayCall(param1:Function, param2:number,param3:any) : void
      {
         this._frameFuncs.push({
            "func":param1,
            "frame":param2,
            "call_object":param3
         });
      }
      
      public renderSelf() : void
      {
         //GameRender.add(this.renderSelfEnterFrame,this);
      }
      
      private renderSelfEnterFrame() : void
      {
         if(this._destoryed)
         {
            return;
         }
         try
         {
            this.render();
            this.renderAnimate();
            return;
         }
         catch(e)
         {
            //Debugger.log("BaseGameSprite.renderSelfEnterFrame",e);
            return;
         }
      }
      
      public stopRenderSelf() : void
      {
         //GameRender.remove(this.renderSelfEnterFrame,this);
      }
      
      public setAnimateFrameOut(param1:Function, param2:number,param3:any) : void
      {
         this._frameAnimateFuncs.push({
            "func":param1,
            "frame":param2,
            "call_object":param3
         });
      }
      
      private renderAnimateFrameOut() : void
      {
         var _loc2_:number = 0;
         var _loc1_:any = null;
         if(this._frameAnimateFuncs.length < 1)
         {
            return;
         }
         while(_loc2_ < this._frameAnimateFuncs.length)
         {
            _loc1_ = this._frameAnimateFuncs[_loc2_];
            _loc1_.frame = Number(_loc1_.frame) - 1;
            if(_loc1_.frame < 1)
            {
               _loc1_.func.call(_loc1_.call_object);
               this._frameAnimateFuncs.splice(_loc2_,1);
            }
            _loc2_++;
         }
      }
      
      private renderFrameOut() : void
      {
         var _loc2_:number = 0;
         var _loc1_:any = null;
         if(this._frameFuncs.length < 1)
         {
            return;
         }
         while(_loc2_ < this._frameFuncs.length)
         {
            _loc1_ = this._frameFuncs[_loc2_];
            _loc1_.frame = Number(_loc1_.frame) - 1;
            if(_loc1_.frame < 1)
            {
              _loc1_.func.call(_loc1_.call_object);
               this._frameFuncs.splice(_loc2_,1);
            }
            _loc2_++;
         }
      }
   }
