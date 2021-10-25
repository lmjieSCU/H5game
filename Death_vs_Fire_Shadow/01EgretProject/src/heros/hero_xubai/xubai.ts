/*
*xubai主骨骼动画对应的帧事件,选择对应形态
*/
namespace hero_xubai {

    export class xubai extends zmovie.ZMovieClip{      //MainTimeline

        public mc:zmovie.ZMovieClip;
        public _FighterCtrler: FighterCtrler;
        public _mcctrl: FighterMcCtrler;
        public _EffectCtrl :FighterEffectCtrl;
        public _name:string = "hero_xubai";


        constructor(imgArr: any, libObj: any, mcName: string = null, scale_: number = 1) {
        super(imgArr,libObj,mcName,scale_);
        this.addFrameScript(this,[0, this.frame1, 1, this.frame2]);
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
            this._EffectCtrl.setBishaFace("虚白1",RES.getRes("xubai_bsface1_png"))
            this._EffectCtrl.setBishaFace("虚白2",RES.getRes("xubai_bsface2_png"))
            this._EffectCtrl.setBishaFace("虚白3",RES.getRes("xubai_bsface3_png"))
            this._EffectCtrl.setBishaFace("虚白4",RES.getRes("xubai_bsface4_png"))
        }  
    
    
        public frame1():void
        {
            return;
        }

        public frame2():void
        {
            if (!this._FighterCtrler) 
            {
                return;
            }
            this._FighterCtrler.defineAction("tk", {power:50, hitType:1, hitx:6, hity:8, hurtTime:400, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("tz", {power:5, hitType:1, hitx:2, hity:3, hurtTime:400, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("tz1", {power:70, hitType:5, hitx:10, hity:0, hurtTime:500, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("k1", {power:40, hitType:1, hitx:3, hity:0, hurtTime:300, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k2", {power:40, hitType:1, hitx:3, hity:0, hurtTime:300, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k3", {power:50, hitType:6, hitx:6, hity:0, hurtTime:600, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k4", {power:60, hitType:6, hitx:3, hity:0, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k5", {power:5, hitType:1, hitx:0, hity:0, hurtTime:400, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k52", {power:80, hitType:5, hitx:6, hity:-8, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("kj1", {power:10, hitType:1, hitx:1, hity:0, hurtTime:2000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("kj12", {power:10, hitType:1, hitx:1, hity:-1, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("kj2", {power:10, hitType:1, hitx:3, hity:0, hurtTime:400, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("kj21", {power:50, hitType:6, hitx:2, hity:-5, hurtTime:400, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("kj22", {power:50, hitType:6, hitx:9, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("zh12", {power:50, hitType:1, hitx:3, hity:-7, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("zh1", {power:70, hitType:5, hitx:6, hity:12, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("zh2", {power:110, hitType:5, hitx:4, hity:-6, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("zh3", {power:40, hitType:6, hitx:5, hity:-7, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("zh32", {power:80, hitType:5, hitx:8, hity:10, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("sh1", {power:15, hitType:11, hitx:0, hity:0, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("sh12", {power:60, hitType:6, hitx:6, hity:0, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("sh2", {power:15, hitType:11, hitx:0, hity:0, hurtTime:2000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("sh21", {power:30, hitType:6, hitx:2, hity:0, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("sh22", {power:60, hitType:6, hitx:-10, hity:0, hurtTime:1000, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("bs1", {power:50, hitType:5, hitx:5, hity:0, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("bs3", {power:20, hitType:4, hitx:2, hity:0, hurtTime:800, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("bs", {power:30, hitType:5, hitx:10, hity:-8, hurtTime:0, hurtType:1, isBreakDef:true});
            this._FighterCtrler.defineAction("sbs", {power:10, hitType:4, hitx:0, hity:-0.5, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("sbs2", {power:20, hitType:1, hitx:15, hity:3, hurtTime:600, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("sbs1", {power:40, hitType:5, hitx:12, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("cbs1", {power:20, hitType:1, hitx:5, hity:0, hurtTime:2000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("cbs2", {power:50, hitType:5, hitx:8, hity:-8, hurtTime:2000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("cbs3", {power:40, hitType:4, hitx:0, hity:-2, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("cbs", {power:250, hitType:5, hitx:24, hity:0, hurtTime:0, hurtType:1, isBreakDef:true});
            this._FighterCtrler.defineAction("kbs", {power:10, hitType:1, hitx:0, hity:-0.5, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("kbs1", {power:40, hitType:6, hitx:5, hity:10, hurtTime:0, hurtType:1, isBreakDef:false});
           // this._FighterCtrler.defineBishaFace("虚白1", bsface1);
           // this._FighterCtrler.defineBishaFace("虚白2", bsface2);
            //this._FighterCtrler.defineBishaFace("虚白3", bsface3);
            //this._FighterCtrler.defineBishaFace("虚白4", bsface4);
            this._FighterCtrler.defineHurtSound("snd_hurt1");
            this._FighterCtrler.defineHurtFlySound("snd_hurt1");
            this._FighterCtrler.defineDieSound("snd_hurt1");
            this._FighterCtrler.speed = 10+15;
            this._FighterCtrler.jumpPower = 17;
            this._FighterCtrler.heavy = 3;
            this._FighterCtrler.defenseType = 2;
            this.mc =<zmovie.ZMovieClip> this.getChildByName("mc");
            new Timeline_1(this.mc); 
            this._FighterCtrler.initMc(this.mc);                   
        }
    }
}