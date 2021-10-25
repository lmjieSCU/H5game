/*
*主骨骼动画对应的帧事件
*/
namespace hero_konan {
    export class Timeline_1 {

        public mc: any;                     //zmovie.ZMovieClip

        constructor(_mc: zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [22, this.frame23, 29, this.frame30, 35, this.frame36, 39, this.frame40, 77, this.frame78, 89, this.frame90, 101, this.frame102, 107, this.frame108, 109, this.frame110, 125, this.frame126, 150, this.frame151, 168, this.frame169, 174, this.frame175, 177, this.frame178, 198, this.frame199, 206, this.frame207, 209, this.frame210, 226, this.frame227, 238, this.frame239, 246, this.frame247, 255, this.frame256, 269, this.frame270, 276, this.frame277, 281, this.frame282, 284, this.frame285, 291, this.frame292, 296, this.frame297, 304, this.frame305, 329, this.frame330, 354, this.frame355, 363, this.frame364, 372, this.frame373, 390, this.frame391, 427, this.frame428, 442, this.frame443, 449, this.frame450, 456, this.frame457, 465, this.frame466, 473, this.frame474, 497, this.frame498, 500, this.frame501, 547, this.frame548, 556, this.frame557, 569, this.frame570, 575, this.frame576, 590, this.frame591, 600, this.frame601, 614, this.frame615, 626, this.frame627, 649, this.frame650, 667, this.frame668, 680, this.frame681, 683, this.frame684, 728, this.frame729, 743, this.frame744, 749, this.frame750, 751, this.frame752, 766, this.frame767, 769, this.frame770, 774, this.frame775, 787, this.frame788, 788, this.frame789, 822, this.frame823, 823, this.frame824, 886, this.frame887, 894, this.frame895, 903, this.frame904, 913, this.frame914, 998, this.frame999, 1018, this.frame1019, 1081, this.frame1082, 1185, this.frame1186, 1217, this.frame1218]);
        }

        public frame23() {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        public frame30() {
            this.mc.parent._mcctrl.dash(3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            return;
        }// end function

        public frame36() {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        public frame40() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame78() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame90() {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }// end function

        public frame102() {
            this.mc.parent._mcctrl.setBishaAIR();
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }// end function

        public frame108() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame110() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame126() {
            this.mc.parent._mcctrl.move(-1, -2);
            this.mc.parent._mcctrl.damping(0.05, 0.05);
            return;
        }// end function

        public frame151() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame169() {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        public frame175() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame178() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame199() {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }// end function

        public frame207() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame210() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame227() {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        public frame239() {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        public frame247() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame256() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame270() {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.15, 0);
            return;
        }// end function

        public frame277() {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍技12");
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        public frame282() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame285() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame292() {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        public frame297() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame305() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame330() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame355() {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setJump();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        public frame364() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame373() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame391() {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        public frame428() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame443() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame450() {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._mcctrl.addAttacker("zh2mc", { x: { moveToTarget: true, offset: 0 }, applyG: false });
            return;
        }// end function

        public frame457() {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        public frame466() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame474() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame498() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame501() {
            this.mc.parent._mcctrl.addAttacker("aabb", { x: { moveToTarget: true, offset: 0 }, y: { moveToTarget: true, offset: -20 }, applyG: false });
            return;
        }// end function

        public frame548() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame557() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame570() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame576() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame591() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame601() {
            this.mc.parent._EffectCtrl.bisha(false, "小南1");
            return;
        }// end function

        public frame615() {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame627() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame650() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame668() {
            this.mc.parent._EffectCtrl.bisha(false, "小南1");
            return;
        }// end function

        public frame681() {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame684() {
            this.mc.parent._mcctrl.addAttacker("sbsmc", { x: { followTarget: true, offset: 0 }, y: { followTarget: true, offset: 0 }, applyG: false });
            return;
        }// end function

        public frame729() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame744() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame750() {
            this.mc.parent._EffectCtrl.shine(16409859);
            return;
        }// end function

        public frame752() {
            this.mc.parent._EffectCtrl.bisha(false, "小南2");
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }// end function

        public frame767() {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame770() {
            this.mc.parent._mcctrl.gotoAndPlay("超必杀2");
            this.mc.parent._mcctrl.isApplyG(true);
            this.mc.parent._mcctrl.move(15, 25);
            this.mc.parent._mcctrl.setTouchFloor("超必杀3", true);
            return;
        }// end function

        public frame775() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame788() {
            // this.Cbshit = false;
            return;
        }// end function

        public frame789() {
            this.mc.parent._EffectCtrl.bisha(true, "小南2");
            return;
        }// end function

        public frame823() {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame824() {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._mcctrl.move(0, -20);
            this.mc.parent._mcctrl.damping(0, 0.8);
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }// end function


        public frame887() {
            this.mc.parent._mcctrl.gotoAndPlay("超必杀2")
            this.mc.parent._mcctrl.move(15, 25);
            this.mc.parent._mcctrl.setTouchFloor("超必杀3", true);
            return;
        }// end function

        public frame895() {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        public frame904() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame914() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame999() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1019() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1082() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1186() {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        public frame1218() {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

    }
}
