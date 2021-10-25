/*
*kakashi主骨骼动画对应的帧事件,选择对应形态
*/
namespace hero_kakashi {
    export class kakashi extends zmovie.ZMovieClip {
        public _fighteCtrler: FighterCtrler;
        public _mcCtrler: FighterMcCtrler;
        public _effectCtrl: FighterEffectCtrl;
        public mc: zmovie.ZMovieClip;
        public _name :string = "hero_kakashi";

        constructor(imgArr: any, libObj: any, mcName: string = null, scale_: number = 1) {
            super(imgArr, libObj, mcName, scale_);
            this.addFrameScript(this, [0, this.frame1, 1, this.frame2]);
            return;
        }// end 

        public setFighterCtrler(param1): void {
            this._fighteCtrler = param1;
            return;
        }// end 

        public setFighterMcCtrler(param1): void {
            this._mcCtrler = param1;
            return;
        }// end 

        public setEffectCtrler(param1): void {
            this._effectCtrl = param1;
            //设置必杀脸
            this._effectCtrl.setBishaFace("卡卡西1",RES.getRes("kakashi_bsface1_png"))
            this._effectCtrl.setBishaFace("卡卡西2",RES.getRes("kakashi_bsface2_png"))
            this._effectCtrl.setBishaFace("卡卡西3",RES.getRes("kakashi_bsface3_png"))
            return;
        }// end 

        frame1() {
            return;
        }// end 

        frame2() {
            if (!this._fighteCtrler) {
                return;
            }
            this._fighteCtrler.defineAction("tk", { power: 30, hitType: 1, hitx: 5, hity: 4, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("tz", { power: 50, hitType: 6, hitx: 4, hity: 4, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._fighteCtrler.defineAction("k1", { power: 30, hitType: 2, hitx: 3, hity: 0, hurtTime: 300, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("k2", { power: 20, hitType: 1, hitx: 4, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("k21", { power: 20, hitType: 2, hitx: 4, hity: -3, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("k3", { power: 60, hitType: 3, hitx: 7, hity: -7, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("zh2", { power: 80, hitType: 6, hitx: 0, hity: 0, hurtTime: 800, hurtType: 0, isBreakDef: true });
            this._fighteCtrler.defineAction("kj1", { power: 80, hitType: 6, hitx: 3, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("kj2", { power: 40, hitType: 2, hitx: 5, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("kj22", { power: 80, hitType: 3, hitx: 10, hity: 0, hurtTime: 500, hurtType: 1, isBreakDef: false });
            this._fighteCtrler.defineAction("zh1", { power: 30, hitType: 1, hitx: 4, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("zh12", { power: 30, hitType: 1, hitx: 4, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("zh13", { power: 30, hitType: 1, hitx: 4, hity: 0, hurtTime: 400, hurtType: 1, isBreakDef: false });
            this._fighteCtrler.defineAction("zh14", { power: 30, hitType: 1, hitx: 4, hity: 0, hurtTime: 400, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("zh31", { power: 40, hitType: 1, hitx: 4, hity: -2, hurtTime: 700, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("zh32", { power: 40, hitType: 3, hitx: 10, hity: -13, hurtTime: 700, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("zh3", { power: 60, hitType: 3, hitx: 8, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._fighteCtrler.defineAction("sbs", { power: 30, hitType: 4, hitx: 8, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("sbs2", { power: 30, hitType: 4, hitx: 8, hity: 0, hurtTime: 500, hurtType: 1, isBreakDef: false });
            this._fighteCtrler.defineAction("bs", { power: 180, hitType: 9, hitx: 10, hity: -5, hurtTime: 500, hurtType: 1, isBreakDef: false });
            this._fighteCtrler.defineAction("bs1", { power: 50, hitType: 4, hitx: 0, hity: 0, hurtTime: 500, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("cbs1", { power: 10, hitType: 4, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("cbs", { power: 400, hitType: 5, hitx: 10, hity: -5, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._fighteCtrler.defineAction("sh1", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._fighteCtrler.defineAction("sh12", { power: 50, hitType: 3, hitx: 5, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: false });
            this._fighteCtrler.defineAction("sh2", { power: 0, hitType: 11, hitx: 0, hity: 0, hurtTime: 1000, hurtType: 0, isBreakDef: true });
            this._fighteCtrler.defineAction("sh22", { power: 150, hitType: 6, hitx: -10, hity: -10, hurtTime: 0, hurtType: 1, isBreakDef: false });
            this._fighteCtrler.speed = 20;
            this._fighteCtrler.jumpPower = 16;
            this._fighteCtrler.heavy = 3;
            this._fighteCtrler.defenseType = 1;
            this.mc = <zmovie.ZMovieClip>this.getChildByName("mc");
            new Timeline_1(this.mc);
            this._fighteCtrler.initMc(this.mc);
            return;
        }// end 
    }
}





