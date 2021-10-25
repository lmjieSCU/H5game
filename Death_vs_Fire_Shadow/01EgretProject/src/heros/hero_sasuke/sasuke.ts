/*
*sasuke主骨骼动画对应的帧事件,选择对应形态
*/
namespace hero_sasuke {

    export class sasuke extends zmovie.ZMovieClip{      //MainTimeline

        public mc:zmovie.ZMovieClip;
        public _FighterCtrler: FighterCtrler;
        public _mcctrl: FighterMcCtrler;
        public _EffectCtrl :FighterEffectCtrl;
        public _name:string = "hero_sasuke";


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
            this._EffectCtrl.setBishaFace("佐助1",RES.getRes("sasuke_bsface1_png"))
            this._EffectCtrl.setBishaFace("佐助2",RES.getRes("sasuke_bsface2_png"))
             this._EffectCtrl.setBishaFace("佐助3",RES.getRes("sasuke_bsface3_png"))
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
            this._FighterCtrler.defineAction("tk", {power:40, hitType:2, hitx:3, hity:3, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("tz", {power:50, hitType:1, hitx:1, hity:10, hurtTime:600, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k1", {power:20, hitType:2, hitx:4, hity:0, hurtTime:300, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k2", {power:30, hitType:2, hitx:6, hity:0, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k3", {power:80, hitType:6, hitx:8, hity:0, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("kj1", {power:110, hitType:9, hitx:6, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("kj21", {power:30, hitType:1, hitx:1, hity:0, hurtTime:400, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("kj2", {power:80, hitType:9, hitx:10, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("zh1", {power:40, hitType:2, hitx:3, hity:-3, hurtTime:400, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("zh12", {power:70, hitType:3, hitx:5, hity:-5, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("zh2", {power:70, hitType:9, hitx:7, hity:-7, hurtTime:500, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("zh3", {power:50, hitType:3, hitx:7, hity:-7, hurtTime:700, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("zh31", {power:60, hitType:3, hitx:10, hity:-5, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("bs", {power:300, hitType:9, hitx:15, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("sbs", {power:250, hitType:9, hitx:10, hity:-10, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("sbs2", {power:250, hitType:9, hitx:10, hity:-10, hurtTime:0, hurtType:1, isBreakDef:true});
            this._FighterCtrler.defineAction("cbs1", {power:100, hitType:9, hitx:10, hity:-9, hurtTime:800, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("cbs2", {power:30, hitType:1, hitx:1, hity:-4, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("cbs3", {power:55, hitType:6, hitx:3, hity:0, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("cbs", {power:280, hitType:7, hitx:30, hity:20, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("sh1", {power:0, hitType:11, hitx:0, hity:0, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("sh12", {power:50, hitType:6, hitx:5, hity:0, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("sh2", {power:0, hitType:11, hitx:0, hity:0, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("sh22", {power:150, hitType:9, hitx:0, hity:-5, hurtTime:0, hurtType:1, isBreakDef:false});
            //this._FighterCtrler.defineBishaFace("佐助1", bsface1);
            //this._FighterCtrler.defineBishaFace("佐助2", bsface2);
            //this._FighterCtrler.defineBishaFace("佐助3", bsface3);
            this._FighterCtrler.defineHurtSound("snd_hurt1");
            this._FighterCtrler.defineHurtFlySound("snd_hurt1");
            this._FighterCtrler.defineDieSound("snd_hurt1");
            this._FighterCtrler.speed = 10 + 8;
            this._FighterCtrler.jumpPower = 15;
            this._FighterCtrler.heavy = 3;
            this._FighterCtrler.defenseType = 0;
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
            this._FighterCtrler.defineAction("tk", {power:20, hitType:1, hitx:5, hity:3, hurtTime:100, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("tz", {power:140, hitType:7, hitx:10, hity:5, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("k1", {power:30, hitType:2, hitx:4, hity:0, hurtTime:300, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k2", {power:40, hitType:2, hitx:3, hity:0, hurtTime:500, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("k3", {power:70, hitType:3, hitx:8, hity:-6, hurtTime:600, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("kj2", {power:100, hitType:9, hitx:10, hity:-5, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("kj1", {power:80, hitType:5, hitx:-10, hity:0, hurtTime:600, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("zh1", {power:20, hitType:1, hitx:5, hity:0, hurtTime:300, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("zh2", {power:160, hitType:9, hitx:10, hity:-5, hurtTime:0, hurtType:1, isBreakDef:true});
            this._FighterCtrler.defineAction("zh3", {power:100, hitType:6, hitx:-8, hity:-8, hurtTime:600, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("bs1", {power:60, hitType:9, hitx:10, hity:0, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("bs", {power:30, hitType:4, hitx:10, hity:0, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("bs2", {power:30, hitType:4, hitx:10, hity:0, hurtTime:1000, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("sbs", {power:280, hitType:7, hitx:10, hity:-8, hurtTime:0, hurtType:1, isBreakDef:false});
            this._FighterCtrler.defineAction("cbs1", {power:200, hitType:9, hitx:0, hity:0, hurtTime:500, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("cbs", {power:300, hitType:5, hitx:15, hity:-10, hurtTime:500, hurtType:1, isBreakDef:true});
            this._FighterCtrler.defineAction("sh1", {power:0, hitType:11, hitx:0, hity:0, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("sh12", {power:50, hitType:3, hitx:5, hity:-3, hurtTime:1000, hurtType:0, isBreakDef:false});
            this._FighterCtrler.defineAction("sh2", {power:0, hitType:11, hitx:0, hity:0, hurtTime:1000, hurtType:0, isBreakDef:true});
            this._FighterCtrler.defineAction("sh22", {power:150, hitType:9, hitx:15, hity:0, hurtTime:0, hurtType:1, isBreakDef:false});
            //this._FighterCtrler.defineBishaFace("佐助1", bsface1);
            //this._FighterCtrler.defineBishaFace("佐助2", bsface2);
            //this._FighterCtrler.defineBishaFace("佐助3", bsface3);
            this._FighterCtrler.defineHurtSound("snd_hurt1");
            this._FighterCtrler.defineHurtFlySound("snd_hurt1");
            this._FighterCtrler.defineDieSound("snd_hurt1");
            this._FighterCtrler.speed = 10 + 10;
            this._FighterCtrler.jumpPower = 15;
            this._FighterCtrler.heavy = 3;
            this._FighterCtrler.defenseType = 1;
            this.mc =<zmovie.ZMovieClip> this.getChildByName("mc3");
            this.mc.ClearFrameScript();
            new Timeline_12(this.mc);
            this._FighterCtrler.initMc(this.mc); 
            return;
        }// end function

    }
}