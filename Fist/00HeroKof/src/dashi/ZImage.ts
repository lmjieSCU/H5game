/**
 * Created by ASUS on 15-2-9.
 */
module zmovie{
    export class ZImage extends  egret.DisplayObjectContainer{
        public img:egret.Bitmap;
        public img_depth:number;
        public displayLibName:string;
        public heroResHome:string;
        public picResHome:string;
        public isBodyFlag:boolean;
        public constructor(t:egret.Texture,heroResName:string=null,picName:string=null, isBodyFlag2:boolean) {
            super();
            this.img = new egret.Bitmap();
            this.addChild(this.img);
            this.isBodyFlag = isBodyFlag2;
            this.setTexture(t,heroResName,picName, isBodyFlag2);
        }

        public setTexture(t:egret.Texture,heroResName:string=null,picName:string=null, isBodyFlag2:boolean ):void{
            this.heroResHome = heroResName;
            this.picResHome = picName;
              this.isBodyFlag = isBodyFlag2;
            if (!isBodyFlag2)
            {
                 this.img.texture = t;
                 return;
            }
            if(heroResName.substr(0,4) == "role"){
                if ( RES.getRes(heroResName+"_"+picName+"_png")){
                    this.img.texture = RES.getRes(heroResName+"_"+picName+"_png");
                        this.img.anchorOffsetY = 20;
                        this.img.anchorOffsetX = 20;
                    //
                    if (GameScene.instance.startLogTxtFlag){
                        let found = false;
                        for (let i = 0; i < GameScene.instance.logList.length; i ++){
                            if (GameScene.instance.logList[i] == picName){
                                found = true;
                                break;
                            }
                        }
                        if (found == false){
                            GameScene.instance.logTxt.text = GameScene.instance.logTxt.text + picName.substr(2, 10)+" ";
                            GameScene.instance.logList[GameScene.instance.logList.length] = picName;
                        }
                    }
                        
                } else {
                    this.img.texture = t
                }
            }
            else{
                if (heroResName.substr(0, 4) == "assi" && RES.getRes(heroResName + "_" + picName + "_png")) {
                    this.img.texture = RES.getRes(heroResName + "_" + picName + "_png")
                }
                else {
                    this.img.texture = t
                }
            }

            
        }

        public setScale(s:number):void{
            if (!this.isBodyFlag){
                 this.img.scaleX = 1/s;
                    this.img.scaleY = 1/s;
                return;
            }
           if(this.heroResHome.substr(0,4) == "role" && RES.getRes(this.heroResHome+"_"+this.picResHome+"_png")){
            this.img.scaleX = 1/s * 0.5;
            this.img.scaleY = 1/s * 0.5;
           }else{
                if (this.heroResHome.substr(0, 4) == "assi" && RES.getRes(this.heroResHome + "_" + this.picResHome + "_png")) {
                    this.img.scaleX = 1/s * 0.25;
                     this.img.scaleY = 1/s * 0.25;
                }
                else {
                    this.img.scaleX = 1/s;
                    this.img.scaleY = 1/s;
                }
           }
        }


    }
}