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

        public setTexture(t:egret.Texture,heroResName:string=null,picName:string=null, isBodyFlag2:boolean):void{
            this.heroResHome = heroResName;
            this.picResHome = picName;
            this.isBodyFlag = isBodyFlag2;
            if (!isBodyFlag2)
            {
                 this.img.texture = t;
                 return;
            }
            if(heroResName.substr(0,4) == "role"){
                let i = 0;
                let isChange = false;
                while (RES.getRes(`${heroResName}00${i}_json`)) {
                    if(RES.getRes(`${heroResName}00${i}_json`).getTexture(`${heroResName}_${picName}`)) {
                        this.img.texture = RES.getRes(`${heroResName}00${i}_json`).getTexture(`${heroResName}_${picName}`);
                        this.img.anchorOffsetY = 20;
                        this.img.anchorOffsetX = 20;
                        isChange = true;
                        break;
                    } else if(RES.getRes(`${heroResName}00${i}_json`).getTexture(`${heroResName}_e_${picName}`)) {
                        this.img.texture = RES.getRes(`${heroResName}00${i}_json`).getTexture(`${heroResName}_e_${picName}`);
                        isChange = true;
                        break;
                    }
                    i++;
                }
                 if(!isChange) {
                    this.img.texture = t
                }
            } else if(heroResName.substr(0,7) == "effect") {
                let i = 0;
                let isChange = false;
                while (RES.getRes(`${heroResName}00${i}_json`)) {
                    if(RES.getRes(`${heroResName}00${i}_json`).getTexture(`${heroResName}_${picName}`)) {
                        this.img.texture = RES.getRes(`${heroResName}00${i}_json`).getTexture(`${heroResName}_${picName}`);
                        this.img.anchorOffsetY = 20;
                        this.img.anchorOffsetX = 20;
                        isChange = true;
                        break;
                    } else if(RES.getRes(`${heroResName}00${i}_json`).getTexture(`${heroResName}_e_${picName}`)) {
                        this.img.texture = RES.getRes(`${heroResName}00${i}_json`).getTexture(`${heroResName}_e_${picName}`);
                        isChange = true;
                        break;
                    }
                    i++;
                }
                 if(!isChange) {
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
           if(this.heroResHome.substr(0,4) == "role"){
                let i = 0;
                let isChange = false;
                while (RES.getRes(`${this.heroResHome}00${i}_json`)) {
                    if(RES.getRes(`${this.heroResHome}00${i}_json`).getTexture(`${this.heroResHome}_${this.picResHome}`)) {
                        this.img.scaleX = 1/s*0.5;
                        this.img.scaleY = 1/s*0.5;
                        isChange = true;
                        break;
                    } else if(RES.getRes(`${this.heroResHome}00${i}_json`).getTexture(`${this.heroResHome}_e_${this.picResHome}`)) {
                        this.img.scaleX = 1/s;
                        this.img.scaleY = 1/s;
                        isChange = true;
                        break;
                    }
                    i++;
                }
                if(!isChange) {
                    this.img.scaleX = 1/s;
                    this.img.scaleY = 1/s;
                }
           }
           else{
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