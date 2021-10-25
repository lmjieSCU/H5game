/*
*主骨骼形态1动画对应的帧事件
*/
namespace hero_naruto{
    export class Timeline_1 {

        public mc :any;                     //zmovie.ZMovieClip

        constructor(_mc:zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this,[13, this.frame14, 21, this.frame22, 23, this.frame24, 34, this.frame35, 43, this.frame44, 48, this.frame49, 78, this.frame79, 84, this.frame85, 91, this.frame92, 95, this.frame96, 100, this.frame101, 108, this.frame109, 110, this.frame111, 120, this.frame121, 125, this.frame126, 129, this.frame130, 133, this.frame134, 139, this.frame140, 145, this.frame146, 147, this.frame148, 153, this.frame154, 154, this.frame155, 162, this.frame163, 168, this.frame169, 177, this.frame178, 184, this.frame185, 191, this.frame192, 195, this.frame196, 203, this.frame204, 211, this.frame212, 216, this.frame217, 221, this.frame222, 233, this.frame234, 249,this.frame250, 251, this.frame252, 259, this.frame260, 273, this.frame274, 293, this.frame294, 302, this.frame303, 307, this.frame308, 312, this.frame313, 327, this.frame328, 348, this.frame349, 352, this.frame353, 358, this.frame359, 375, this.frame376, 383, this.frame384, 389, this.frame390, 401, this.frame402, 407, this.frame408, 410, this.frame411, 419, this.frame420, 425, this.frame426, 430, this.frame431, 444, this.frame445, 454, this.frame455, 460, this.frame461, 490, this.frame491, 495, this.frame496, 510, this.frame511, 520, this.frame521, 539, this.frame540, 550, this.frame551, 603, this.frame604, 614, this.frame615, 637, this.frame638, 648, this.frame649, 650, this.frame651, 652, this.frame653, 679, this.frame680, 689, this.frame690, 692, this.frame693, 693, this.frame694, 704, this.frame705, 718, this.frame719, 787, this.frame788, 790, this.frame791, 825, this.frame826, 842, this.frame843, 910, this.frame911, 911, this.frame912, 917, this.frame918, 961, this.frame962, 974, this.frame975, 990, this.frame991, 1007, this.frame1008, 1080, this.frame1081, 1085, this.frame1086, 1105, this.frame1106, 1178, this.frame1179, 1219, this.frame1220, 1247, this.frame1248, 1263, this.frame1264, 1285, this.frame1286, 1400, this.frame1401]);
            return;
        }

        public frame14()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        public frame22()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        public frame24()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        public frame35()
        {
            this.mc.parent._mcctrl.dash(2.5);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame44()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        public frame49()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame79()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame85()
        {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }// end function

        public frame92()
        {
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            return;
        }// end function

        public frame96()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame101()
        {
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }// end function

        public frame109()
        {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.setTouchFloor("跳招3", true);
            this.mc.parent._mcctrl.isApplyG(true);
            this.mc.parent._mcctrl.movePercent(-0.5, 0);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }// end function

        public frame111()
        {
            this.mc.parent._mcctrl.movePercent(2, 1.5);
            this.mc.parent._mcctrl.loop("跳招2");
            return;
        }// end function


        public frame121()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame126()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame130()
        {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }// end function

        public frame134()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        public frame140()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame146()
        {
            return;
        }// end function

        public frame148()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }// end function

        public frame154()
        {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill2();
            return;
        }// end function

        public frame155()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        public frame163()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame169()
        {
            this.mc.parent._mcctrl.movePercent(1.3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        public frame178()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setAttack("砍4");
            return;
        }// end function

        public frame185()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame192()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame196()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }// end function

        public frame204()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        public frame212()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame217()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame222()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame234()
        {
            this.mc.parent._mcctrl.setHitTarget("kj10atm", "砍技12");
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function


        public frame250(){
            this.mc.parent._mcctrl.gotoAndPlay("砍技12");
        }
        public frame252()
        {
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame260()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame274()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame294()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }// end function

        public frame303()
        {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        public frame308()
        {
            let fenshen_mc = this.mc.parent._mcctrl.addAttacker("fenshen");
            if(!fenshen_mc){
                return;
            }
            let kj2 = new Timeline_7(this.mc.parent._mcctrl.getAttacker("fenshen",fenshen_mc.hashCode));
            return;
        }// end function

        public frame313()
        {
            let fenshen_mc = this.mc.parent._mcctrl.addAttacker("fenshen2");
            if(!fenshen_mc){
                return;
            }
            let kj2 = new Timeline_8(this.mc.parent._mcctrl.getAttacker("fenshen2",fenshen_mc.hashCode));
            return;
        }// end function

        public frame328()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame349()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame353()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }// end function

        public frame359()
        {
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        public frame376()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        public frame384()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame390()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame402()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        public frame408()
        {
            this.mc.parent._mcctrl.fire("zh1atm", {x:{start:15, hit:3}, y:0, hold:1, hits:3});
            return;
        }// end function

        public frame411()
        {
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setBisha();
            return;
        }// end function

        public frame420()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame426()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame431()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame445()
        {
            this.mc.parent._mcctrl.fire("zh2atm", {x:{start:15, hit:5}, y:0, hold:1.5, hits:5, hp:200});
            return;
        }// end function

        public frame455()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame461()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame491()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        public frame496()
        {
            this.mc.parent._mcctrl.movePercent(2, -1.4);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0.1);
            return;
        }// end function

        public frame511()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame521()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame540()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame551()
        {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        public frame604()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame615()
        {
            this.mc.parent._EffectCtrl.bisha(false, "鸣人2");
            return;
        }// end function

        public frame638()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame649()
        {
            if (this.mc.parent._FighterCtrler.justHit("bs1"))
            {
                this.mc.parent._mcctrl.gotoAndPlay("必杀1");
            }
            else
            {
                this.mc.parent._mcctrl.gotoAndPlay("必杀0");
            }
            return;
        }// end function


        public frame651()
        {
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        public frame653()
        {
            this.mc.parent._EffectCtrl.shine(303095);
            return;
        }// end function

        public frame680()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame690()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame693(){
            this.mc.parent._mcctrl.gotoAndPlay("必杀0");
        }

        public frame694()
        {
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        public frame705()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame719()
        {
            this.mc.parent._EffectCtrl.bisha(false, "鸣人1");
            return;
        }// end function

        public frame788()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame791()
        {
            let sbs_mc = this.mc.parent._mcctrl.addAttacker("fensheng", {x:{moveToTarget:true, offset:0}, y:{moveToTarget:false, offset:0}, applyG:true});
            if(!sbs_mc){
                return;
            }
            new Timeline_13(this.mc.parent._mcctrl.getAttacker("fensheng",sbs_mc.hashCode))
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame826()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame843()
        {
            this.mc.parent._EffectCtrl.bisha(true, "鸣人2");
            return;
        }// end function

        public frame911()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame912()
        {
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame918()
        {
            this.mc.parent._FighterCtrler.moveToTarget(0, null, false);
            return;
        }// end function

        public frame962()
        {
            this.mc.parent._mcctrl.movePercent(0, 1);
            this.mc.parent._mcctrl.setTouchFloor("超必杀1", true);
            this.mc.parent._FighterCtrler.moveOnce(0, -150);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shine(303095);
            this.mc.parent._mcctrl.gotoAndPlay("超必杀2");
            return;
        }// end function

        public frame975()
        {
            this.mc.parent._mcctrl.loop("超必杀2");
            return;
        }// end function

        public frame991()
        {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shake(0, 5);
            let cbs_mc = this.mc.parent._mcctrl.addAttacker("lxw", {applyG:false});
            if(!cbs_mc){
                return;
            }
            new Timeline_15(this.mc.parent._mcctrl.getAttacker("lxw",cbs_mc.hashCode))
            return;
        }// end function

        public frame1008()
        {
            this.mc.parent._mcctrl.hurtFly(-15, -5);
            return;
        }// end function

        public frame1081()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }// end function

        public frame1086()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1106()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1179()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1220()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        public frame1248()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        public frame1264()
        {
            this.mc.parent._EffectCtrl.startWanKai("鸣人3");
            return;
        }// end function

        public frame1286()
        {
            this.mc.parent._EffectCtrl.shine(16776960);
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }// end function

        public frame1401()
        {
            this.mc.parent._FighterCtrler.doWanKai();
            return;
        }// end function

    }
}



