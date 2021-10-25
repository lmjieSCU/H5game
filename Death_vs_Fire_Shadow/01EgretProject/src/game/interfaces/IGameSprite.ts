interface IGameSprite
    {
         destory(param1:boolean) ;

         isDestoryed() : boolean;

         render() ;

         renderAnimate() ;

         getDisplay() : egret.DisplayObject;

         hit(param1:HitVO, param2:IGameSprite) ;

         beHit(param1:HitVO, param2:egret.Rectangle) ;

         getArea() : egret.Rectangle;

         getBodyArea() : egret.Rectangle;

         getCurrentHits() : any;

         allowCrossMapXY() : boolean;

         allowCrossMapBottom() : boolean;

         getIsTouchSide() : boolean;

         setIsTouchSide(param1:boolean) ;

         setSpeedRate(param1:number) ;

         setx(param1:number);
         sety(param1:number);

         getx(): number;
         gety() : number;
         getdirect() :number; 

         getteam() : TeamVO;

        setteam(param1:TeamVO) ;
    }