class HitCounter {
    private role:Role;
    private time:number=15;
    private hits:number=0;
    private static Y:number=150;
    public static container:egret.DisplayObjectContainer;
    public static image:egret.Bitmap;
    public static container2:egret.DisplayObjectContainer;
    public static singleDigit:egret.Bitmap=null;
    public static tenFigures:egret.Bitmap=null;
    public static Firstowner: Role;
    public static instance_First: HitCounter;
    public static instance_Second: HitCounter;
    public static containerMask: egret.Shape;

    constructor(owner:Role) {
        this.role=owner;
        return;
    }

    public static getInstance(owner: Role): HitCounter {
        if (HitCounter.Firstowner == null) {
            HitCounter.Firstowner = owner;
            HitCounter.instance_First = new HitCounter(owner);
            _level0.instance_First.push(this);
            return HitCounter.instance_First;
        } else if (HitCounter.Firstowner == owner) {
            return HitCounter.instance_First;
        } else {
            if (HitCounter.instance_Second == null) {
                HitCounter.instance_Second = new HitCounter(owner);
            }
            return HitCounter.instance_Second;
        }
    }

    public addHits(){
        ++this.hits;
        this.time=30;
        if(this.hits>1){
            HitCounter.container.visible=true;
            HitCounter.containerMask.visible=true;
            if(this.hits>=10){
                this.addSingleDigit(this.hits%10);
                this.addTenFigures(Math.floor(this.hits/10));
            }else{
                this.addSingleDigit(this.hits);
            }
            HitCounter.container2.scaleX=3;
            HitCounter.container2.scaleY=3;
            this.addAnimation();
        }else if(this.hits==1){
            HitCounter.container.x=this.role.opp.localToGlobal().x;
            FightMainRender.getInstance().Add(this, this.renderAnimate,[this.role]);
        }

    }

    public  renderAnimate(role:Role){
        if(role.status_3=="hurt"){
            FightMainRender.getInstance().Remove(this, this.renderAnimate);
            this.removeHits();
            this.hits=0;
        }
        if(role.inFreeze||role.opp.inFreeze){
            return;
        }
        --this.time;
        if(this.time>0){
            return;
        }
        FightMainRender.getInstance().Remove(this, this.renderAnimate);
        this.removeHits();
        this.hits=0;
    }

    public static showHits(){
        //显示容器
        HitCounter.container=new egret.DisplayObjectContainer();
        HitCounter.container.height = 50;
        HitCounter.container.width = 100;
        HitCounter.container.y=HitCounter.Y;
        HitCounter.container.x=300;
        HitCounter.container.visible=false;
        HitCounter.container.scaleX=0.8;
        HitCounter.container.scaleY=0.8;
        SplashScene.hero_layer.stage.addChild(HitCounter.container);
        //显示图片
        HitCounter.image = new egret.Bitmap;
		HitCounter.image.texture = RES.getRes("hitImage_png");
        HitCounter.image.y=HitCounter.image.height/2;
        HitCounter.image.anchorOffsetX = HitCounter.image.width / 2;
		HitCounter.image.anchorOffsetY = HitCounter.image.height / 2;
        HitCounter.image.x=HitCounter.container.width-HitCounter.image.width/2;
		HitCounter.container.addChild(HitCounter.image);
        //数字容器
        HitCounter.container2=new egret.DisplayObjectContainer();
        HitCounter.container2.height = 50;
        HitCounter.container2.width = 100;
        HitCounter.container2.anchorOffsetX = HitCounter.container2.width;
		HitCounter.container2.anchorOffsetY = HitCounter.container2.height / 2;
        HitCounter.container2.x=HitCounter.image.x-HitCounter.container2.width/2-15;
        HitCounter.container2.y=HitCounter.image.height/2;
        HitCounter.container.addChild(HitCounter.container2);
        //白色遮罩
        HitCounter.containerMask = new egret.Shape();
        HitCounter.containerMask.x = HitCounter.container.x;
        HitCounter.containerMask.y = HitCounter.container.y - 25;
        HitCounter.containerMask.graphics.beginFill(0xffffff);
        HitCounter.containerMask.graphics.drawRect(0, 0, HitCounter.container.width + 100, HitCounter.container.height + 50);
        HitCounter.containerMask.graphics.endFill();
        HitCounter.containerMask.visible = false;
        HitCounter.containerMask.alpha = 0;
        SplashScene.hero_layer.stage.addChild(HitCounter.containerMask);
    }
    //显示个位数
    public addSingleDigit(num:number){
        if(HitCounter.singleDigit!=null){
            if(HitCounter.singleDigit.parent){
                HitCounter.singleDigit.parent.removeChild(HitCounter.singleDigit);
            }   
        }
       if(HitCounter.tenFigures!=null){
           if( HitCounter.tenFigures.parent){
               HitCounter.tenFigures.parent.removeChild(HitCounter.tenFigures);
           }
        }
        HitCounter.singleDigit=new egret.Bitmap;
        HitCounter.singleDigit.texture = RES.getRes(`hitnum${num}_png`);
        HitCounter.singleDigit.x=HitCounter.container2.width-HitCounter.singleDigit.width;
        HitCounter.singleDigit.y=HitCounter.container2.height/2-HitCounter.singleDigit.height/2;
		HitCounter.container2.addChild(HitCounter.singleDigit);
    }
    //显示十位数
    public addTenFigures(num:number){
        HitCounter.tenFigures=new egret.Bitmap;
        HitCounter.tenFigures.texture = RES.getRes(`hitnum${num}_png`);
        HitCounter.tenFigures.x=HitCounter.singleDigit.x-HitCounter.tenFigures.width-5;
        HitCounter.tenFigures.y=HitCounter.container2.height/2-HitCounter.tenFigures.height/2;
		HitCounter.container2.addChild(HitCounter.tenFigures);
    }

    public addAnimation(){	
        egret.Tween.removeTweens(HitCounter.image);
        egret.Tween.removeTweens(HitCounter.container2);
        egret.Tween.removeTweens(HitCounter.container);
        HitCounter.container.alpha=1
        HitCounter.image.scaleX=1;HitCounter.image.scaleY=1;
        egret.Tween.get( HitCounter.image, { loop:false} )
            .to( {scaleX:0.8,scaleY:0.8},100 ).call(()=>{
                HitCounter.image.scaleX=1;HitCounter.image.scaleY=1;
            })
        egret.Tween.get( HitCounter.container2, { loop:false} )
            .to( {scaleX:1,scaleY:1}, 100 )
    }


    public removeHits(){
        //  egret.Tween.get( HitCounter.container, { loop:false} )
        //     .to( {alpha:0}, 80 )
        //     .to( {alpha:1}, 80 )
        //     .to( {alpha:0}, 80 )
        //     .to( {alpha:1}, 80 )
        //     .to( {alpha:0}, 50 )
        //     .to( {alpha:1}, 50 ).call(()=>{
        //         HitCounter.container.visible=false;
        //     })
        let i = 6;
        HitCounter.containerMask.x = HitCounter.container.x + HitCounter.container2.x - HitCounter.container2.width;
        HitCounter.containerMask.y = HitCounter.container.y - 25;
        // HitCounter.containerMask.alpha = 0;
        // HitCounter.containerMask.visible = true;
        // const t = egret.setInterval(() => {
        //     if(i%2==0) {
        //         HitCounter.containerMask.mask = HitCounter.container;
        //         HitCounter.containerMask.alpha = 1;
        //     } else {
        //         HitCounter.containerMask.alpha = 0;
        //         HitCounter.containerMask.mask = null;
        //     }
        //     i--;
        //     if(i==0) {
        //         HitCounter.containerMask.mask = null;
        //         HitCounter.containerMask.visible = false;
        //         HitCounter.container.visible = false;
        //         egret.clearInterval(t);
        //     }
        // }, this, 80)
        FightMainRender.getInstance().Add(this , this.render)
    }
    private renderAnimation = 2;

    public render() {
        this.renderAnimation += 1;
        if(this.renderAnimation%4 == 0) {
            HitCounter.containerMask.mask = HitCounter.container;
            HitCounter.containerMask.alpha = 1;
        } else if(this.renderAnimation%2 == 0) {
            HitCounter.containerMask.alpha = 0;
            HitCounter.containerMask.mask = null;
        }
        if(this.renderAnimation == 14) {
            HitCounter.containerMask.mask = null;
            HitCounter.containerMask.visible = false;
            HitCounter.container.visible = false;
            this.renderAnimation = 2;
            FightMainRender.getInstance().Remove(this, this.render);
        }
    }
}