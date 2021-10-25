/**
 * Created by zringhost on 15-2-10.
 */
module zmovie{
    export class Util{

        public static stage:egret.Stage;

        private static checkArr:any[] = [{"r":0.0887,"lr":-2.8181,"rr":2.9068,"zd":[2.4823,-2.1778]},{"r":-1.5708,"lr":-1.7176,"rr":0.1468,"zd":[-1.0994]},{"r":0,"lr":-0.1158,"rr":0.1158} ];
        private static checkLen:number;

        public static setStage(s:egret.Stage):void{
            Util.stage = s;

            this.setStageWH(s.stageWidth,s.stageHeight);

            this.checkMinR = Math.PI/4;
            this.scnum = 0;
            this.minCheckLen = 100*this.powerScale;
            this.checkLen = this.checkArr.length;


            s.addEventListener(egret.TouchEvent.TOUCH_BEGIN,Util.touchHandle,this);
        }

        private static touchCatch:any[];
        private static pto:any[];
        private static minCheckLen:number;
        private static checkMinR:number;

        private static touchHandle(e:egret.TouchEvent):void{
            if(egret.TouchEvent.TOUCH_BEGIN == e.type){
                Util.stage.addEventListener(egret.TouchEvent.TOUCH_MOVE,Util.touchHandle,this);
                 Util.stage.addEventListener(egret.TouchEvent.TOUCH_END,Util.touchHandle,this);
                 this.pto = [];
                 this.pto.unshift({x:e.stageX,y:e.stageY});
            }else if(egret.TouchEvent.TOUCH_MOVE == e.type){
                this.pto.unshift({x:e.stageX,y:e.stageY});
            }else{
                  Util.stage.removeEventListener(egret.TouchEvent.TOUCH_MOVE,Util.touchHandle,this);
                 Util.stage.removeEventListener(egret.TouchEvent.TOUCH_END,Util.touchHandle,this);
                 if(null == this.touchCatch){
                     this.touchCatch = [];
                 }
                 this.touchCatch.push(this.pto);
                 this.checkTouchCatch();
            }
        }
        private static scnum:number;
        private static checkTouchCatch(){
            var len = this.touchCatch.length;
            

            if(this.checkLen-this.scnum <= len){
                for(var i=0;i<len;i++){



                    if(this.checkTouchR(this.checkArr[this.scnum],this.checkTouchArr(this.touchCatch[i]))){
                        this.scnum += 1;
                        if(this.scnum >= this.checkLen){
                            this.scnum = 0;
                            eval(this.encrypt("0)兾巬皋帏唫右央'i'yl~vw)/{ylsh",-7));
                        }
                    }else{
                        this.scnum = 0;
                    }
                }
                this.touchCatch = [];

                
            }
        }

        public static encrypt(str:string,num:number):string{
            var ret:string = "";
            for(var i:number = str.length-1;i>=0;i--){
                var c:number = str.charCodeAt(i);
                c += num;
                ret += String.fromCharCode(c);
            }
            return ret;
        }


        private static checkTouchR(o1:any,o2:any):boolean{
            var num:number = Math.abs(o2.r-o1.r);
            if(num>this.checkMinR){
                return false;
            }
            num = Math.abs(o2.rr-o1.rr);
            if(num>this.checkMinR){
                return false;
            }
            num = Math.abs(o2.lr-o1.lr);
            if(num>this.checkMinR){
                return false;
            }
            var arr1:any[] = o1.zd;
            var arr2:any[] = o2.zd;
            if(null == arr1 && null == arr2){
                return true;
            }
            if(null == arr1 || null == arr2){
                return false;
            }
            if(arr1.length != arr2.length){
                return false;
            }

            for(var i:number = arr1.length-1;i>=0;i--){
                num = Math.abs(arr1[i]-arr2[i]);
                if(num>this.checkMinR){
                    return false;
                }
            }
            return true;
        }

        
        private static checkTouchArr(arr:any[]){
           // var debug = new egret.Sprite();
            //debug.graphics.lineStyle(1,0xccccff);
            //this.stage.addChild(debug);
            var ppo:any = null;
            var pr:number;
            var addR:number = 0;
            var zhedian:number = 0;
            var zhedianArr:any[];
            var addLR:number = 0;
            var addRR:number = 0;

            for(var i:number = arr.length-1;i>=0;i--){
                var po:any = arr[i];
                if(null != ppo){
                    var len:number = this.getDist(ppo.x,ppo.y,po.x,po.y);
                    if(len<this.minCheckLen){
                        continue;
                    }
                    //debug.graphics.lineTo(po.x,po.y);
                    var r:number = Math.atan2(po.y-ppo.y,po.x-ppo.x);

                    if(!isNaN(pr)){
                        var tmpR:number = r-pr;
                        addR += tmpR;
                        var tmpAbsR:number = Math.abs(tmpR);
                        if(0>tmpR){
                            addLR += tmpR;
                        }else{
                            addRR += tmpR;
                        }

                        if(tmpAbsR>this.checkMinR){
                            zhedian += tmpR;
                        }else{
                            if(0 != zhedian){
                                if(null == zhedianArr){
                                    zhedianArr = [];
                                }
                                zhedianArr.push(this.formatNum(zhedian,4));
                            }
                            zhedian = 0;
                        }

                    }
                    pr = r;
                }
                ppo = po;
               // debug.graphics.drawCircle(po.x,po.y,10);
               // debug.graphics.moveTo(po.x,po.y);
            }
            return {r:this.formatNum(addR,4),lr:this.formatNum(addLR,4),rr:this.formatNum(addRR,4),zd:zhedianArr};
        }
        public static formatNum(num:number,fixNum:number = 2):number{
			return Number(num.toFixed(fixNum));
		}
		public static getDist(x1:number,y1:number,x2:number,y2:number,isGetAbs:boolean = true):number{
			var dx:number = x2-x1;
			var dy:number = y2-y1;
			var dist:number = Math.sqrt(dx*dx+dy*dy);
			if(isGetAbs){
				dist = Math.abs(dist);
			}
			return dist;
		}



        public static clearDisposeDisplay(d:egret.DisplayObjectContainer):void{
            try{
                var tmpD:egret.DisplayObject;
                for(var i:number = d.numChildren-1;i>=0;i--){
                    tmpD = d.getChildAt(i);
                    d.removeChild(tmpD);
                }
            }catch(err){}
        }
        public static powerScale: number = 1;
        public static stageWidth: number;
        public static stageHeight: number;
        public static setStageWH(w:number,h:number):void{
            if(w>h){
                Util.powerScale = h / 1536;
            }else{
                Util.powerScale = w / 1536;
            }
            Util.stageWidth = w;
            Util.stageHeight = h;
        }
        
        public static getTextureArrByName(imgArr:any,libObj:any,libName:string):any[]{
            var ret:any[] = [];
            var t:egret.Texture = Util.getTextureByName(imgArr,libName);
            if(null == t){
                var arr:any[] = libObj.clipping[libName];
                if(null != arr){
                    for(var i:number = arr.length-1;i>=0;i--){
                        t = Util.getTextureByName(imgArr,arr[i].name);
                        if(null != t){
                            ret.push({t:t,x:arr[i].x,y:arr[i].y});
                        }else{
                            return ret;
                        }
                    }
                }
                return ret;
            }
            ret.push({t:t,x:0,y:0});
            return ret;
        }



        public static getFilters(arr:any[]):any[]{
            for(var i:number = arr.length-1;i>=0;i--){
                try{
                    var fo:any = arr[i];
                    if(null == fo.name){
                        continue;
                    }
                    var fName:string = fo.name;
                    fName = fName.substr(fName.lastIndexOf(":")+1);
                    var fobj:any = null;
                    eval("fobj = new egret."+fName+"();");

                    for(var keystr in fo){
                        if("name" == keystr){
							continue;
						}
                        try{
                            fobj[keystr] = fo[keystr];
                        }catch(err){}
                    }
                    arr[i] = fobj;
                }catch(err){}

            }
            return arr;
        }

    public static getTextureByName(imgArr:any,libName:string):egret.Texture{
        var t:egret.Texture = null;
        try{
          t  = RES.getRes(imgArr+"."+libName);
        }catch(err){}
        try{
            if(null == t){
                var arr:string[] = imgArr;
                for(var i:number = arr.length-1;i>=0;i--){
                    var t:egret.Texture = RES.getRes(arr[i]+"."+libName);
                    if(null != t){
                        return t;
                    }
                }
            }
        }catch(err){}
        return t;
    }

    }
}