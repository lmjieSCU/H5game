/*
*obito主骨骼动画对应的帧事件,选择对应形态
*/
namespace hero_obito {

    export class obito extends zmovie.ZMovieClip{      //MainTimeline

        public mc:zmovie.ZMovieClip;
        public _FighterCtrler: FighterCtrler;
        public _mcctrl: FighterMcCtrler;
        public _EffectCtrl :FighterEffectCtrl;
        public _name:string = "hero_obito";


        constructor(imgArr: any, libObj: any, mcName: string = null, scale_: number = 1) {
        super(imgArr,libObj,mcName,scale_);
        this.addFrameScript(this,[0, this.frame1, 1, this.frame2, 2, this.frame3]);
        }

        public setFighterCtrler(param1:FighterCtrler):void
        {
            this._FighterCtrler = param1;
        }


        public setFighterMcCtrler(param1:FighterMcCtrler):void
        {
            this._mcctrl = param1;
        }


        public  setEffectCtrler(param1:FighterEffectCtrl):void
        {
            this._EffectCtrl = param1;
            //设置必杀脸
            this._EffectCtrl.setBishaFace("带土1",RES.getRes("obito_bsface1_png"))
            this._EffectCtrl.setBishaFace("带土2",RES.getRes("obito_bsface2_png"))
             this._EffectCtrl.setBishaFace("带土3",RES.getRes("obito_bsface3_png"))
        }  
    
    
        public frame1():void
        {
            return;
        }


        public frame2()
        {
            if (!this._FighterCtrler)
            {
                return;
            }
            this._FighterCtrler.defineAction("tk", {power:50, hitType:1, hitx:-1, hity:-2, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("tk1", {power:50, hitType:6, hitx:5, hity:10, hurtTime:600, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("k1", {power:20, hitType:2, hitx:1, hity:0, hurtTime:300, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k2", {power:30, hitType:2, hitx:2, hity:0, hurtTime:300, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k3", {power:40, hitType:3, hitx:2, hity:0, hurtTime:300, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k4", {power:40, hitType:6, hitx:4, hity:0, hurtTime:400, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k5", {power:60, hitType:3, hitx:10, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("kj1", {power:50, hitType:1, hitx:3, hity:0, hurtTime:600, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("kj12", {power:60, hitType:6, hitx:15, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("kj2", {power:30, hitType:1, hitx:3, hity:0, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("zh1", {power:30, hitType:1, hitx:0, hity:-3, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("zh2", {power:130, hitType:5, hitx:15, hity:-3, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("zh3", {power:5, hitType:2, hitx:0, hity:-1, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("zh31", {power:13, hitType:1, hitx:0, hity:-1, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("zh32", {power:13, hitType:1, hitx:5, hity:-1, hurtTime:1000, hurtType:1, isBreakDef:true});
            this._FighterCtrler.defineAction("bs", {power:20, hitType:4, hitx:2, hity:0, hurtTime:800, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("bs1", {power:30, hitType:7, hitx:5, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("sbs", {power:0, hitType:10, hitx:0, hity:0, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("sbs1", {power:30, hitType:6, hitx:0, hity:-1, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("sbs2", {power:10, hitType:2, hitx:0, hity:-1, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("sbs3", {power:90, hitType:7, hitx:18, hity:-2, hurtTime:0, hurtType:1, isBreakDef:true});
            this._FighterCtrler.defineAction("sbs4", {power:0, hitType:11, hitx:0, hity:0, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("cbs1", {power:100, hitType:5, hitx:20, hity:0, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("cbs", {power:150, hitType:5, hitx:20, hity:-10, hurtTime:0, hurtType:1, isBreakDef:true});
            this._FighterCtrler.defineAction("sh1", {power:0, hitType:11, hitx:0, hity:0, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("sh12", {power:50, hitType:0, hitx:-7, hity:2, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("sh2", {power:0, hitType:11, hitx:0, hity:0, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("sh22", {power:50, hitType:6, hitx:0, hity:0, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("sh23", {power:50, hitType:3, hitx:15, hity:-5, hurtTime:0, hurtType:1, isBreakDef:false});
            //this._FighterCtrler.defineBishaFace("带土1", bsface1);
            //this._FighterCtrler.defineBishaFace("带土2", bsface2);
            //this._FighterCtrler.defineBishaFace("带土3", bsface3);
            this._FighterCtrler.speed = 10 + 12;
            this._FighterCtrler.jumpPower = 16;
            this._FighterCtrler.heavy = 3;
            this._FighterCtrler.defenseType = 1;
            this.mc =<zmovie.ZMovieClip> this.getChildByName("mc");
            new Timeline_1(this.mc);
            this._FighterCtrler.initMc(this.mc);
            return;
        }// end function

        public frame3()
        {
            if (!this._FighterCtrler)
            {
                return;
            }
            this._FighterCtrler.defineAction("tk", {power:30, hitType:2, hitx:2, hity:-3, hurtTime:300, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("tk1", {power:50, hitType:3, hitx:4, hity:-3, hurtTime:300, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("tk3", {power:600, hitType:3, hitx:10, hity:-20, hurtTime:300, hurtType:1, isBreakDef:true});
            this._FighterCtrler.defineAction("tk4", {power:0, hitType:2, hitx:0, hity:0, hurtTime:30000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("tz", {power:50, hitType:7, hitx:3, hity:5, hurtTime:400, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("tz1", {power:16, hitType:2, hitx:-1, hity:1, hurtTime:400, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("tz2", {power:30, hitType:7, hitx:8, hity:10, hurtTime:400, hurtType:1, isBreakDef:true});
            this._FighterCtrler.defineAction("k1", {power:20, hitType:2, hitx:2, hity:0, hurtTime:300, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k2", {power:20, hitType:2, hitx:3, hity:0, hurtTime:300, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k3", {power:50, hitType:3, hitx:8, hity:0, hurtTime:400, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k4", {power:50, hitType:3, hitx:4, hity:0, hurtTime:400, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k5", {power:80, hitType:5, hitx:12, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("kj1", {power:80, hitType:6, hitx:3, hity:0, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("kj12", {power:80, hitType:6, hitx:10, hity:-3, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("kj2", {power:40, hitType:1, hitx:0, hity:-8, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("kj13", {power:30, hitType:10, hitx:0, hity:0, hurtTime:40000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("kj14", {power:850, hitType:5, hitx:20, hity:-20, hurtTime:400, hurtType:1, isBreakDef:true});
            this._FighterCtrler.defineAction("zh1", {power:20, hitType:0, hitx:-15, hity:0, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("zh11", {power:50, hitType:7, hitx:6, hity:-3, hurtTime:500, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("zh12", {power:20, hitType:2, hitx:0, hity:0, hurtTime:5000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("zh13", {power:30, hitType:4, hitx:0, hity:-5, hurtTime:5000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("zh14", {power:620, hitType:5, hitx:2, hity:-50, hurtTime:500, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("zh2", {power:50, hitType:5, hitx:50, hity:0, hurtTime:300, hurtType:1, isBreakDef:true});
            this._FighterCtrler.defineAction("zh21", {power:0, hitType:0, hitx:33, hity:0, hurtTime:3000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("zh22", {power:0, hitType:0, hitx:10, hity:0, hurtTime:30000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("zh23", {power:0, hitType:0, hitx:-33, hity:0, hurtTime:3000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("zh3", {power:100, hitType:7, hitx:3, hity:-9, hurtTime:700, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("zh33", {power:90, hitType:7, hitx:10, hity:-8, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("bs", {power:80, hitType:5, hitx:15, hity:15, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("bs1", {power:50, hitType:3, hitx:5, hity:0, hurtTime:4000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("sbs1", {power:5, hitType:2, hitx:0, hity:0, hurtTime:5000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("sbs", {power:200, hitType:5, hitx:10, hity:-10, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("bs2", {power:30, hitType:2, hitx:3, hity:-3, hurtTime:4000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("bs3", {power:50, hitType:3, hitx:7, hity:7, hurtTime:4000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("bs4", {power:60, hitType:6, hitx:5, hity:-5, hurtTime:4000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("cbs2", {power:10, hitType:4, hitx:5, hity:0, hurtTime:3000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("cbs1", {power:150, hitType:5, hitx:10, hity:0, hurtTime:3000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("cbs", {power:400, hitType:5, hitx:30, hity:-10, hurtTime:0, hurtType:1, isBreakDef:true});
            this._FighterCtrler.defineAction("sh1", {power:0, hitType:11, hitx:0, hity:0, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("sh12", {power:50, hitType:0, hitx:-8, hity:0, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("sh2", {power:0, hitType:11, hitx:0, hity:0, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("sh22", {power:70, hitType:3, hitx:8, hity:0, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("sh23", {power:80, hitType:5, hitx:15, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
            //this._FighterCtrler.defineBishaFace("带土1", bsface1);
            //this._FighterCtrler.defineBishaFace("带土2", bsface2);
            //this._FighterCtrler.defineBishaFace("带土3", bsface3);
            this._FighterCtrler.speed = 10 + 13;
            this._FighterCtrler.jumpPower = 16;
            this._FighterCtrler.heavy = 3;
            this._FighterCtrler.defenseType = 1;
            this.mc =<zmovie.ZMovieClip> this.getChildByName("mc3");
            this.mc.ClearFrameScript();
            new Timeline_14(this.mc);
            this._FighterCtrler.initMc(this.mc); 
            return;
        }// end function

    }
}