class ParameterControl extends egret.DisplayObjectContainer{
    public _Y:number=0;
        constructor(data,obj){
            super();
            this.width=400;
            this.height=400;
            this.x= UI.WINSIZE_W- 200;
            this.y=0;
            for(let i in data ){
                this.createShuru(data[i],i,obj);
            }
        }
        public createShuru(value=100,index,obj){
            // console.log(obj[`${index}`]);
            
            let text=new egret.TextField();
            text.width=70;
            text.height=30;
            text.y=this._Y;
            text.text=`${value}`;
            this.addChild(text);

            let text2=new egret.TextField();
            text2.width=150;
            text2.height=30;
            text2.x=-260;
            text2.y=this._Y;
            text2.text=`${index}`;
            this.addChild(text2);
            let add1  = this.addBtn(this,"A_png",-100,this._Y);
            add1.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.increase.bind(this, text,-1 ,index,obj,false),this);
            let add10 = this.addBtn(this,"B_png",-66,this._Y);
            add10.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.increase.bind(this, text,-10,index,obj,false),this);
            let add50 = this.addBtn(this,"C_png",-33,this._Y);
            add50.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.increase.bind(this, text,-50,index,obj,false),this);
            let reduce1=this.addBtn(this,"C_png",73,this._Y);
            reduce1.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.increase.bind(this, text,1,index,obj,false),this);
            let reduce10=this.addBtn(this,"B_png",106,this._Y);
            reduce10.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.increase.bind(this, text,10,index,obj,false),this);
            let reduce50=this.addBtn(this,"A_png",139,this._Y);
            reduce50.addEventListener(egret.TouchEvent.TOUCH_BEGIN,this.increase.bind(this, text,50,index,obj,false),this);
            this._Y+=40;
        }
        public  addBtn(node: any, path: any, x: number, y: number, anchorCenterFlag: boolean=false): any {
            let btn = new egret.Bitmap;
            btn.texture = RES.getRes(path);
            node.addChild(btn);
            if (anchorCenterFlag) {
                btn.anchorOffsetX = btn.width / 2;
                btn.anchorOffsetY = btn.height / 2;
            }
            btn.x = x;
            btn.y = y;
            btn.scaleX=30/btn.width; 
            btn.scaleY=30/btn.height;
            btn.$setTouchEnabled(true);
            return btn;
	}
    public increase(value,addNum,index,obj){
        let num=parseInt(value.text)+addNum;
        if(num>500){
            num=500;
        }else if(num<0){
            num=0;
        }
        value.text=num;
        obj[`${index}`]=num;
        obj.initPlus();
    }
}