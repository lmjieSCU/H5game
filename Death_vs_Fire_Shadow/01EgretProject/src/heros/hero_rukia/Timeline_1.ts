/*
*主骨骼动画形态1对应的帧事件
*/
namespace hero_rukia {
    export class Timeline_1 {

        public mc: any;                     //zmovie.ZMovieClip

        constructor(_mc: zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [13, this.frame14, 21, this.frame22, 24, this.frame25, 28, this.frame29, 37, this.frame38, 42, this.frame43, 75, this.frame76, 85, this.frame86, 86, this.frame87, 90, this.frame91, 99, this.frame100, 111, this.frame112, 115, this.frame116, 132, this.frame133, 150, this.frame151, 156, this.frame157, 162, this.frame163, 168, this.frame169, 178, this.frame179, 179, this.frame180, 183, this.frame184, 193, this.frame194, 199, this.frame200, 210, this.frame211, 215, this.frame216, 219, this.frame220, 222, this.frame223, 235, this.frame236, 239, this.frame240, 251, this.frame252, 256, this.frame257, 260, this.frame261, 261, this.frame262, 269, this.frame270, 275, this.frame276, 280, this.frame281, 302, this.frame303, 305, this.frame306, 316, this.frame317, 323, this.frame324, 328, this.frame329, 337, this.frame338, 340, this.frame341, 348, this.frame349, 367, this.frame368, 385, this.frame386, 402, this.frame403, 403, this.frame404, 407, this.frame408, 416, this.frame417, 440, this.frame441, 444, this.frame445, 469, this.frame470, 480, this.frame481, 494, this.frame495, 510, this.frame511, 514, this.frame515, 521, this.frame522, 529, this.frame530, 534, this.frame535, 546, this.frame547, 591, this.frame592, 592, this.frame593, 598, this.frame599, 625, this.frame626, 636, this.frame637, 677, this.frame678, 684, this.frame685, 690, this.frame691, 699, this.frame700, 728, this.frame729, 766, this.frame767, 789, this.frame790, 790, this.frame791, 800, this.frame801, 805, this.frame806, 822, this.frame823, 905, this.frame906, 921, this.frame922, 996, this.frame997, 1037, this.frame1038, 1065, this.frame1066, 1079, this.frame1080, 1096, this.frame1097]);
        }

        public frame14() {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        public frame22() {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        public frame25() {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        public frame29() {
            this.mc.parent._mcctrl.dash(3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame38() {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        public frame43() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame76() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame86() {
            this.mc.parent._mcctrl.setTouchFloor("落地", true);
            return;
        }// end function

        public frame87() {
            this.mc.parent._mcctrl.movePercent(1, 2);
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            return;
        }// end function

        public frame91() {
            this.mc.parent._mcctrl.gotoAndPlay("跳砍loop");
        }

        public frame100() {
            this.mc.parent._mcctrl.loop("跳砍loop");
            return;
        }// end function

        public frame112() {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        public frame116() {
            this.mc.parent._mcctrl.move(-5, -7);
            this.mc.parent._mcctrl.damping(0.5, 0.5);
            this.mc.parent._EffectCtrl.shine(2679032);
            return;
        }// end function

        public frame133() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame151() {
            this.mc.parent._mcctrl.movePercent(0.8, 0);
            this.mc.parent._mcctrl.dampingPercent(0.08, 0);
            return;
        }// end function

        public frame157() {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        public frame163() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame169() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame179() {
            return;
        }// end function

        public frame180() {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        public frame184() {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setSkill2();
            return;
        }// end function

        public frame194() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame200() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame211() {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        public frame216() {
            this.mc.parent._mcctrl.setSkill1();
            return;
        }// end function

        public frame220() {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            return;
        }// end function

        public frame223() {
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        public frame236() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame240() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame252() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame257() {
            this.mc.parent._EffectCtrl.dash();
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }// end function

        public frame261() {
            this.mc.parent._FighterCtrler.moveToTarget(30, 0, true);
            return;
        }// end function

        public frame262() {
            this.mc.parent._EffectCtrl.shine(2679032);
            return;
        }// end function

        public frame270() {
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setBisha();
            return;
        }// end function

        public frame276() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame281() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame303() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame306() {
            this.mc.parent._mcctrl.movePercent(1.5, -2);
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            return;
        }// end function

        public frame317() {
            this.mc.parent._mcctrl.setSkillAIR();
            this.mc.parent._mcctrl.setBishaAIR();
            this.mc.parent._mcctrl.dampingPercent(0.2, 0.2);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame324() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame329() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame338() {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        public frame341() {
            this.mc.parent._EffectCtrl.shine(2798587);
            return;
        }// end function

        public frame349() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame368() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame386() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame403() {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame404() {
            this.mc.parent._EffectCtrl.shine(14731512);
            return;
        }// end function

        public frame408() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame417() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame441() {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        public frame445() {
            this.mc.parent._EffectCtrl.shine(2679032);
            return;
        }// end function

        public frame470() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame481() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame495() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame511() {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        public frame515() {
            this.mc.parent._mcctrl.movePercent(-1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            return;
        }// end function

        public frame522() {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        public frame530() {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame535() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame547() {
            this.mc.parent._EffectCtrl.bisha(false, "bsface1");
            return;
        }// end function

        public frame592() {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame593() {
            this.mc.parent._mcctrl.move(-10, 0);
            this.mc.parent._mcctrl.damping(2, 0);
            this.mc.parent._EffectCtrl.shine(2679032);
            return;
        }// end function

        public frame599() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame626() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame637() {
            this.mc.parent._EffectCtrl.bisha(false, "bsface1");
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }// end function

        public frame678() {
            this.mc.parent._mcctrl.move(-12, -14);
            this.mc.parent._mcctrl.damping(0.5, 0.5);
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame685() {
            this.mc.parent._EffectCtrl.shine(2679032);
            return;
        }// end function

        public frame691() {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._mcctrl.isApplyG(true);
            return;
        }// end function

        public frame700() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame729() {
            this.mc.parent._EffectCtrl.bisha(true, "bsface2");
            return;
        }// end function

        public frame767() {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame790() {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame791() {
            this.mc.parent._EffectCtrl.shine(11598072);
            return;
        }// end function

        public frame801() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame806() {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame823() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame906() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame922() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame997() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1038() {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        public frame1066() {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        public frame1080() {
            this.mc.parent._EffectCtrl.startWanKai("bsface2");
            return;
        }// end function

        public frame1097() {
            this.mc.parent._FighterCtrler.doWanKai();
            return;
        }// end function
    }
}