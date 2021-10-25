class Finger extends egret.DisplayObjectContainer{
    public hand:egret.Bitmap;//手指按下图片
    public hand2:egret.Bitmap;//手指抬起图片
    public circle:egret.Bitmap;//圈
    public frequency:number=0;//点击频率
    public lift_frequency:number=0;//抬起频率
    public setfrequency:number;//频率设置
    public timer;//定时器
    //x坐标，y坐标，点击抬起频率。放缩倍数
    constructor(x,y,setfrequency:number=4,scale:number=1){
        super();
        //设置基本参数
        this.width=80;
        this.height=100;
        this.show();
        this.x=x;
        this.y=y;
        this.setfrequency=setfrequency;
        this.scaleX=scale;
        this.scaleY=scale;
        //添加显示和移除显示时候调用的事件
        this.addEventListener(egret.Event.ADDED_TO_STAGE,this.onEnter,this);
        this.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.onExit, this);
    }
    //添加图片元素
    private show() {
       this.hand2=UI.addPic(this,"circle_hand_png",0,0)
       this.hand2.alpha=0;
       this.circle=UI.addPic(this,"circle_hand_png",0,135,true)
       this.circle.x=this.circle.width/4;
       this.hand=UI.addPic(this,"circle_hand_png",0,0)
       this.hand.alpha=0;
       this.$anchorOffsetX=this.circle.x;
       this.$anchorOffsetY=this.circle.y;
       this.circle.parent.removeChild(this.circle);
    }
    public onEnter():void{
        this.timer= egret.setInterval(this.next,this,1000/30);
    }
    public onExit():void{
         egret.clearInterval(this.timer);
    }
    //实现点击效果动画
    public next(){
        if(this.frequency<=0){
            this.hand2.alpha=0;
            this.hand.alpha=1;
            let circle=this.addPic(this,"circle_hand_png",0,this.hand2.height,true,0)
            circle.x=this.circle.width/4;
            circle.scaleX=0;
            circle.scaleY=0;
            egret.Tween.get(circle,{loop:false}).to({
                scaleX:0.6, scaleY:0.6
            },400).call(()=>{}).to({
                scaleX:1, scaleY:1,alpha:0
            },200).call(()=>{
                if(circle.parent){
                    circle.parent.removeChild(circle);
                }
            })
            this.frequency=this.setfrequency;
            this.lift_frequency=this.setfrequency;
        }else if(this.lift_frequency<=0){
            this.hand2.alpha=1;
            this.hand.alpha=0;
            this.frequency--;
        }else{
            this.lift_frequency--;
        }
        this.hand2.alpha=0;
        this.hand.alpha=0;
    }
    	//增加图片
	public  addPic(node: any, path: any, x: number, y: number, anchorCenterFlag: boolean = false
		, at: number = 1): any {
		let image = new egret.Bitmap;
		image.texture = RES.getRes(path);
		node.addChildAt(image,at);
		image.x = x;
		image.y = y;
		if (anchorCenterFlag) {
			image.anchorOffsetX = image.width / 2;
			image.anchorOffsetY = image.height / 2;
		}
		return image;
	}
}