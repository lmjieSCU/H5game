/*
*ichigo主骨骼动画对应的帧事件,选择对应形态
*/
namespace hero_ichigo {

    export class ichigo extends zmovie.ZMovieClip{      //MainTimeline

        public mc:zmovie.ZMovieClip;
        public _FighterCtrler: FighterCtrler;
        public _mcctrl: FighterMcCtrler;
        public _EffectCtrl :FighterEffectCtrl;
        public _name :string = "hero_ichigo";


        constructor(imgArr: any, libObj: any, mcName: string = null, scale_: number = 1) {
        super(imgArr,libObj,mcName,scale_);
        this.addFrameScript(this,[0, this.frame1, 1, this.frame2, 2, this.frame3, 3, this.frame4]);
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
            this._EffectCtrl.setBishaFace("一户1",RES.getRes("ichigo_bsface1_png"))
            this._EffectCtrl.setBishaFace("一户2",RES.getRes("ichigo_bsface2_png"))
            this._EffectCtrl.setBishaFace("一户万解",RES.getRes("ichigo_bsface3_png"))
            this._EffectCtrl.setBishaFace("一户万解1",RES.getRes("ichigo_bsface4_png"))            
            this._EffectCtrl.setBishaFace("虚护1",RES.getRes("ichigo_bsface5_png"))
            this._EffectCtrl.setBishaFace("虚护2",RES.getRes("ichigo_bsface6_png")) 
            this._EffectCtrl.setBishaFace("虚护3",RES.getRes("ichigo_bsface7_png"))           
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
            this._FighterCtrler.defineAction("tk", {power:30, hitType:1, hitx:2, hity:6, hurtTime:350, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("tz", {power:80, hitType:5, hitx:5, hity:5, hurtTime:300, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("k1", {power:40, hitType:1, hitx:3, hity:0, hurtTime:300, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k2", {power:50, hitType:1, hitx:2, hity:0, hurtTime:400, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k3", {power:70, hitType:6, hitx:7, hity:-7, hurtTime:600, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("kj1", {power:80, hitType:3, hitx:8, hity:0, hurtTime:0, hurtType:1, isBreakDef:true});
            this._FighterCtrler.defineAction("kj21", {power:20, hitType:1, hitx:1, hity:0, hurtTime:100, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("kj2", {power:60, hitType:4, hitx:1, hity:-10, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("zh1", {power:80, hitType:5, hitx:3, hity:0, hurtTime:300, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("zh2", {power:80, hitType:6, hitx:8, hity:-3, hurtTime:700, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("zh3", {power:80, hitType:5, hitx:5, hity:-5, hurtTime:300, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("sh1", {power:0, hitType:11, hitx:0, hity:0, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("sh12", {power:50, hitType:3, hitx:5, hity:0, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("sh2", {power:0, hitType:11, hitx:0, hity:0, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("sh22", {power:150, hitType:6, hitx:10, hity:-10, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("bs1", {power:80, hitType:5, hitx:5, hity:0, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("bs", {power:240, hitType:5, hitx:10, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("sbs", {power:250, hitType:5, hitx:3, hity:-8, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("cbs", {power:450, hitType:5, hitx:40, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
            // this._FighterCtrler.defineHurtSound("snd_hurt2", "snd_hurt1");
            this._FighterCtrler.defineHurtFlySound("snd_hurt1");
            this._FighterCtrler.defineDieSound("snd_die");
            this._FighterCtrler.speed = 16;
            this._FighterCtrler.jumpPower = 15;
            this._FighterCtrler.heavy = 3;
            this.mc =<zmovie.ZMovieClip> this.getChildByName("mc");
            new Timeline_1(this.mc); 
            this._FighterCtrler.initMc(this.mc);                     
            return;
        }// end function

        frame3()
        {
            if (!this._FighterCtrler)
            {
                return;
            }
            this._FighterCtrler.defineAction("tk", {power:40, hitType:1, hitx:2, hity:6, hurtTime:350, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("tz", {power:110, hitType:6, hitx:10, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("k1", {power:30, hitType:1, hitx:2, hity:0, hurtTime:200, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k2", {power:30, hitType:1, hitx:2, hity:0, hurtTime:400, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k3", {power:40, hitType:1, hitx:7, hity:-7, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("kj1", {power:80, hitType:5, hitx:-2, hity:0, hurtTime:600, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("kj21", {power:20, hitType:4, hitx:1, hity:-14, hurtTime:300, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("kj2", {power:70, hitType:6, hitx:1, hity:15, hurtTime:450, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("zh1", {power:50, hitType:6, hitx:2, hity:0, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("zh2", {power:80, hitType:6, hitx:5, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("zh3", {power:80, hitType:6, hitx:4, hity:-4, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("sh1", {power:0, hitType:11, hitx:0, hity:0, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("sh12", {power:50, hitType:3, hitx:5, hity:0, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("sh2", {power:0, hitType:11, hitx:0, hity:0, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("sh22", {power:150, hitType:6, hitx:3, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("bs", {power:300, hitType:5, hitx:25, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("sbs", {power:20, hitType:1, hitx:0, hity:-0.5, hurtTime:300, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("sbs2", {power:20, hitType:1, hitx:0, hity:-5, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("cbs", {power:600, hitType:5, hitx:30, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineHurtSound("snd_hurt2");
            this._FighterCtrler.defineHurtFlySound("snd_hurt1");
            this._FighterCtrler.defineDieSound("snd_die");
            this._FighterCtrler.speed = 22;
            this._FighterCtrler.jumpPower = 17;
            this._FighterCtrler.heavy = 3;
            this.mc =<zmovie.ZMovieClip> this.getChildByName("mc3");
            this.mc.ClearFrameScript();
            new Timeline_15(this.mc);   
            this._FighterCtrler.initMc(this.mc);                   
            return;
        }// end function

        frame4()
        {
            if (!this._FighterCtrler)
            {
                return;
            }
            this._FighterCtrler.defineAction("tk", {power:50, hitType:1, hitx:5, hity:5, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("tz", {power:20, hitType:1, hitx:5, hity:5, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("tz1", {power:70, hitType:5, hitx:10, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("k1", {power:30, hitType:1, hitx:5, hity:0, hurtTime:250, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k2", {power:30, hitType:1, hitx:7, hity:0, hurtTime:300, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k3", {power:30, hitType:1, hitx:5, hity:0, hurtTime:300, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k4", {power:80, hitType:6, hitx:6, hity:0, hurtTime:800, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k5", {power:60, hitType:1, hitx:7, hity:-7, hurtTime:600, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("kj1", {power:90, hitType:5, hitx:10, hity:-5, hurtTime:0, hurtType:1, isBreakDef:true});
            this._FighterCtrler.defineAction("kj21", {power:110, hitType:5, hitx:12, hity:8, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("kj2", {power:50, hitType:6, hitx:15, hity:-8, hurtTime:700, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("zh1", {power:50, hitType:1, hitx:2, hity:0, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("zh12", {power:50, hitType:6, hitx:4, hity:0, hurtTime:600, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("zh2", {power:100, hitType:6, hitx:5, hity:-10, hurtTime:800, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("zh3", {power:100, hitType:5, hitx:12, hity:-8, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("sh1", {power:0, hitType:11, hitx:0, hity:0, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("sh12", {power:50, hitType:3, hitx:10, hity:0, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("sh2", {power:0, hitType:11, hitx:0, hity:0, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("sh22", {power:50, hitType:6, hitx:10, hity:-7, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("sh23", {power:120, hitType:5, hitx:10, hity:8, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("bs", {power:300, hitType:5, hitx:25, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("sbs", {power:300, hitType:5, hitx:20, hity:-10, hurtTime:0, hurtType:1, isBreakDef:true});
            this._FighterCtrler.defineAction("cbs", {power:500, hitType:5, hitx:30, hity:-10, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("cbs1", {power:100, hitType:6, hitx:7, hity:-15, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineHurtSound("snd_hurt2");
            this._FighterCtrler.defineHurtFlySound("snd_hurt1");
            this._FighterCtrler.defineDieSound("snd_hurt2");
            this._FighterCtrler.speed = 24;
            this._FighterCtrler.jumpPower = 19;
            this._FighterCtrler.heavy = 4;
            this.mc =<zmovie.ZMovieClip> this.getChildByName("mc4");
            this.mc.ClearFrameScript();
            new Timeline_30(this.mc); 
            this._FighterCtrler.initMc(this.mc);                     
            return;
        }// end function

    }
}