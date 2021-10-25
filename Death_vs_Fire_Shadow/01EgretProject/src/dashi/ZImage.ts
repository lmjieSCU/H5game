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
        public constructor(t:egret.Texture,heroResName:string=null,picName:string=null) {
            super();
            this.img = new egret.Bitmap();
            this.addChild(this.img);
            this.setTexture(t,heroResName,picName);
        }
        public isReplaceBitmap() :number {
            if (!this.heroResHome){
                return 0;
            }
            if(this.heroResHome.substr(0,4) == "hero"  
            && (
                this.heroResHome == "hero_sasuke_xz" 
                ||  this.heroResHome == "hero_kakashi" 
                ||  this.heroResHome == "hero_orihime"
                ||  this.heroResHome == "hero_konan"
                ||  this.heroResHome == "hero_killerbee"
                ||  this.heroResHome == "hero_chad"
                ||  this.heroResHome == "hero_renji"
                ||  this.heroResHome == "hero_sakura"
                )
            )
            {
                if (RES.getRes(this.heroResHome+"_body_json").getTexture(this.heroResHome+"_"+this.picResHome)){
                    return 3;
                }
            }
            if(this.heroResHome.substr(0,4) == "hero" && RES.getRes(this.heroResHome+"_"+this.picResHome+"_png")){
                return 2;
            }
             if(this.heroResHome.substr(0,6) == "assist" && RES.getRes(this.heroResHome+"_"+this.picResHome+"_png")){
                return 1;
            }
           
            if(this.heroResHome.substr(0,4) == "map_" && RES.getRes(this.heroResHome+"_"+this.picResHome+"_png")){
                return 1;
            }
            return 0;
        }
        public setTexture(t:egret.Texture,heroResName:string=null,picName:string=null):void{
            this.heroResHome = heroResName;
            this.picResHome = picName;;
            let result = this.isReplaceBitmap();
            if(result == 3){
                 this.img.texture = RES.getRes(this.heroResHome+"_body_json").getTexture(this.heroResHome+"_"+this.picResHome);
            }else if (result > 0)
                this.img.texture = RES.getRes(heroResName+"_"+picName+"_png")
            else{
                this.img.texture = t
            }
            
        }

        public setScale(s:number):void{
            let result: number = this.isReplaceBitmap();
            if (result == 1 || result == 3) {
                this.img.scaleX = 1 / s * 0.5;
                this.img.scaleY = 1 / s * 0.5;
            } else if (result == 2) {
                this.img.scaleX = 1 / s * 0.25;
                this.img.scaleY = 1 / s * 0.25;
            }else{
                this.img.scaleX = 1 / s;
                this.img.scaleY = 1 / s;
            }
        }

    }
}