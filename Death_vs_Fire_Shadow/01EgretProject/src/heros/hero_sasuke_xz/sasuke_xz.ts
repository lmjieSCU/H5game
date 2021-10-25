/*
*sasuke_xz主骨骼动画对应的帧事件,选择对应形态
*/
namespace hero_sasuke_xz {

    export class sasuke_xz extends zmovie.ZMovieClip{      //MainTimeline

        public mc:zmovie.ZMovieClip;
        public _FighterCtrler: FighterCtrler;
        public _mcctrl: FighterMcCtrler;
        public _EffectCtrl :FighterEffectCtrl;
        public _name:string = "hero_sasuke_xz";


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
            this._EffectCtrl.setBishaFace("须佐助1",RES.getRes("sasuke_xz_bsface1_png"))
            this._EffectCtrl.setBishaFace("须佐助2",RES.getRes("sasuke_xz_bsface2_png"))
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
            this._FighterCtrler.defineAction("tk", {"power":30, "hitType":9, "hitx":2, "hity":0, "hurtTime":500, "hurtType":0, "isBreakDef":false});
            this._FighterCtrler.defineAction("tz", {"power":130, "hitType":7, "hitx":5, "hity":10, "hurtTime":0, "hurtType":1, "isBreakDef":false});
            this._FighterCtrler.defineAction("k1", {"power":20, "hitType":1, "hitx":4, "hity":0, "hurtTime":300, "hurtType":0, "isBreakDef":false});
            this._FighterCtrler.defineAction("k2", {"power":20, "hitType":1, "hitx":4, "hity":0, "hurtTime":400, "hurtType":0, "isBreakDef":false});
            this._FighterCtrler.defineAction("k3", {"power":40, "hitType":1, "hitx":6, "hity":0, "hurtTime":500, "hurtType":0, "isBreakDef":false});
            this._FighterCtrler.defineAction("k4", {"power":60, "hitType":6, "hitx":8, "hity":-7, "hurtTime":500, "hurtType":0, "isBreakDef":false});
            this._FighterCtrler.defineAction("k5", {"power":80, "hitType":7, "hitx":8, "hity":-8, "hurtTime":0, "hurtType":1, "isBreakDef":false});
            this._FighterCtrler.defineAction("kj1", {"power":30, "hitType":1, "hitx":2, "hity":0, "hurtTime":700, "hurtType":0, "isBreakDef":false});
            this._FighterCtrler.defineAction("kj11", {"power":40, "hitType":9, "hitx":0, "hity":0, "hurtTime":600, "hurtType":0, "isBreakDef":false});
            this._FighterCtrler.defineAction("kj12", {"power":80, "hitType":7, "hitx":5, "hity":-4, "hurtTime":0, "hurtType":1, "isBreakDef":false});
            this._FighterCtrler.defineAction("kj21", {"power":30, "hitType":2, "hitx":3, "hity":0, "hurtTime":600, "hurtType":0, "isBreakDef":false});
            this._FighterCtrler.defineAction("kj2", {"power":30, "hitType":7, "hitx":10, "hity":5, "hurtTime":0, "hurtType":1, "isBreakDef":false});
            this._FighterCtrler.defineAction("zh1", {"power":100, "hitType":7, "hitx":7, "hity":0, "hurtTime":0, "hurtType":1, "isBreakDef":false});
            this._FighterCtrler.defineAction("zh11", {"power":10, "hitType":2, "hitx":1, "hity":0, "hurtTime":400, "hurtType":0, "isBreakDef":false});
            this._FighterCtrler.defineAction("zh2", {"power":50, "hitType":5, "hitx":4, "hity":0, "hurtTime":800, "hurtType":0, "isBreakDef":false});
            this._FighterCtrler.defineAction("zh21", {"power":50, "hitType":5, "hitx":4, "hity":-7, "hurtTime":800, "hurtType":0, "isBreakDef":false});
            this._FighterCtrler.defineAction("zh22", {"power":50, "hitType":5, "hitx":7, "hity":9, "hurtTime":0, "hurtType":1, "isBreakDef":true});
            this._FighterCtrler.defineAction("zh3", {"power":60, "hitType":3, "hitx":5, "hity":-8, "hurtTime":600, "hurtType":0, "isBreakDef":false});
            this._FighterCtrler.defineAction("zh31", {"power":30, "hitType":2, "hitx":3, "hity":-3, "hurtTime":400, "hurtType":0, "isBreakDef":false});
            this._FighterCtrler.defineAction("bs", {"power":280, "hitType":7, "hitx":10, "hity":-10, "hurtTime":0, "hurtType":1, "isBreakDef":false});
            this._FighterCtrler.defineAction("sbs", {"power":260, "hitType":7, "hitx":12, "hity":-8, "hurtTime":0, "hurtType":1, "isBreakDef":false});
            this._FighterCtrler.defineAction("kbs", {"power":260, "hitType":7, "hitx":10, "hity":10, "hurtTime":0, "hurtType":1, "isBreakDef":false});
            this._FighterCtrler.defineAction("cbs1", {"power":150, "hitType":5, "hitx":0, "hity":0, "hurtTime":1000, "hurtType":0, "isBreakDef":false});
            this._FighterCtrler.defineAction("cbs2", {"power":150, "hitType":7, "hitx":0, "hity":-3, "hurtTime":1000, "hurtType":0, "isBreakDef":true});
            this._FighterCtrler.defineAction("cbs3", {"power":20, "hitType":4, "hitx":0, "hity":-2, "hurtTime":1000, "hurtType":0, "isBreakDef":false});
            this._FighterCtrler.defineAction("cbs", {"power":20, "hitType":4, "hitx":5, "hity":-10, "hurtTime":0, "hurtType":1, "isBreakDef":false});
            this._FighterCtrler.defineAction("sh1", {"power":0, "hitType":11, "hitx":0, "hity":0, "hurtTime":1000, "hurtType":0, "isBreakDef":true});
            this._FighterCtrler.defineAction("sh12", {"power":50, "hitType":9, "hitx":3, "hity":-2, "hurtTime":1000, "hurtType":0, "isBreakDef":false});
            this._FighterCtrler.defineAction("sh2", {"power":0, "hitType":11, "hitx":0, "hity":0, "hurtTime":1000, "hurtType":0, "isBreakDef":true});
            this._FighterCtrler.defineAction("sh22", {"power":150, "hitType":7, "hitx":0, "hity":-8, "hurtTime":0, "hurtType":1, "isBreakDef":false});
            this._FighterCtrler.defineHurtSound("snd_hurt1");
            this._FighterCtrler.defineHurtFlySound("snd_hurt1");
            this._FighterCtrler.defineDieSound("snd_hurt1");
            this._FighterCtrler.speed = 22;             //移动速度,越快水平移动越快,均+10
            this._FighterCtrler.jumpPower = 15;         //跳跃力,越大跳跃高度越高
            this._FighterCtrler.heavy = 3;             //重力,越大下降越快,但applayG()中会设置上限,同时影响推动距离
            this._FighterCtrler.defenseType = 1;
            this.mc =<zmovie.ZMovieClip> this.getChildByName("mc");
            new Timeline_1(this.mc); 
            this._FighterCtrler.initMc(this.mc);                   
        }
    }
}