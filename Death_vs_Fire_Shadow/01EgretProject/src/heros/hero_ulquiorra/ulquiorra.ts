/*
*ulquiorra主骨骼动画对应的帧事件,选择对应形态
*/
namespace hero_ulquiorra {

    export class ulquiorra extends zmovie.ZMovieClip{      //MainTimeline

        public mc:zmovie.ZMovieClip;
        public _FighterCtrler: FighterCtrler;
        public _mcctrl: FighterMcCtrler;
        public _EffectCtrl :FighterEffectCtrl;
        public _name:string = "hero_ulquiorra";


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
            this._EffectCtrl.setBishaFace("小乌1",RES.getRes("ulquiorra_bsface1_png"))
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
            this._FighterCtrler.defineAction("tk", {power:70, hitType:6, hitx:3, hity:1, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("tz", {power:130, hitType:5, hitx:5, hity:10, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("k1", {power:20, hitType:2, hitx:5, hity:0, hurtTime:300, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k2", {power:30, hitType:1, hitx:5, hity:0, hurtTime:300, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k3", {power:70, hitType:3, hitx:8, hity:0, hurtTime:700, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("kj1", {power:80, hitType:1, hitx:10, hity:-5, hurtTime:600, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("kj12", {power:100, hitType:5, hitx:10, hity:-5, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("kj2", {power:100, hitType:6, hitx:8, hity:-10, hurtTime:600, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("zh1", {power:100, hitType:5, hitx:10, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("zh2", {power:40, hitType:4, hitx:5, hity:-7, hurtTime:800, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("zh3", {power:120, hitType:5, hitx:10, hity:-8, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("bs", {power:280, hitType:5, hitx:25, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("sbs", {power:10, hitType:1, hitx:13, hity:-13, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("sbs1", {power:200, hitType:5, hitx:20, hity:5, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("kbs", {power:10, hitType:1, hitx:13, hity:13, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("kbs1", {power:250, hitType:5, hitx:20, hity:5, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("cbs1", {power:150, hitType:5, hitx:30, hity:-10, hurtTime:0, hurtType:1, isBreakDef:true});
            this._FighterCtrler.defineAction("cbs", {power:50, hitType:4, hitx:10, hity:-0.1, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("sh1", {power:0, hitType:11, hitx:0, hity:0, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("sh12", {power:50, hitType:0, hitx:-7, hity:0, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("sh2", {power:0, hitType:11, hitx:0, hity:0, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("sh22", {power:150, hitType:5, hitx:15, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
            //this._FighterCtrler.defineBishaFace("小乌1", bsface1);
            this._FighterCtrler.speed = 10 + 12;
            this._FighterCtrler.jumpPower = 15;
            this._FighterCtrler.heavy = 2;
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
            this._FighterCtrler.defineAction("tk", {power:80, hitType:5, hitx:6, hity:0, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("tz", {power:120, hitType:5, hitx:10, hity:7, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("k1", {power:30, hitType:1, hitx:4, hity:0, hurtTime:300, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k2", {power:30, hitType:1, hitx:3, hity:0, hurtTime:300, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k3", {power:60, hitType:6, hitx:5, hity:0, hurtTime:400, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k4", {power:100, hitType:5, hitx:15, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("kj1", {power:160, hitType:5, hitx:15, hity:0, hurtTime:0, hurtType:1, isBreakDef:true});
            this._FighterCtrler.defineAction("kj21", {power:40, hitType:1, hitx:0, hity:-18, hurtTime:600, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("kj22", {power:30, hitType:1, hitx:0, hity:-1, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("kj2", {power:130, hitType:7, hitx:10, hity:10, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("zh1", {power:150, hitType:5, hitx:10, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("zh2", {power:100, hitType:6, hitx:10, hity:-10, hurtTime:700, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("zh3", {power:160, hitType:6, hitx:10, hity:-7, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("bs1", {power:40, hitType:4, hitx:5, hity:0, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("bs", {power:50, hitType:5, hitx:15, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("sbs", {power:320, hitType:5, hitx:5, hity:-10, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("cbs1", {power:100, hitType:6, hitx:0, hity:0, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("cbs2", {power:100, hitType:6, hitx:0, hity:-1, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("cbs", {power:300, hitType:5, hitx:20, hity:0, hurtTime:0, hurtType:1, isBreakDef:true});
            this._FighterCtrler.defineAction("sh1", {power:0, hitType:11, hitx:0, hity:0, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("sh12", {power:50, hitType:6, hitx:-7, hity:0, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("sh2", {power:0, hitType:11, hitx:0, hity:0, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("sh22", {power:150, hitType:6, hitx:2, hity:-5, hurtTime:0, hurtType:1, isBreakDef:false});
            //this._FighterCtrler.defineBishaFace("小乌1", bsface1);
            this._FighterCtrler.speed = 10 + 14;
            this._FighterCtrler.jumpPower = 16;
            this._FighterCtrler.heavy = 2;
            this._FighterCtrler.defenseType = 0;
            this.mc =<zmovie.ZMovieClip> this.getChildByName("mc3");
            this.mc.ClearFrameScript();
            new Timeline_10(this.mc);
            this._FighterCtrler.initMc(this.mc); 
            return;
        }// end function

    }
}