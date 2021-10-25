/*
*ichigo主骨骼形态2动画对应的帧事件
*/
namespace hero_ichigo {
    export class Timeline_15 {

        public mc: any;                     //zmovie.ZMovieClip

        constructor(_mc: zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [10, this.frame11, 14, this.frame15, 17, this.frame18, 35, this.frame36, 44, this.frame45, 49, this.frame50, 85, this.frame86, 93, this.frame94, 100, this.frame101, 104, this.frame105, 110, this.frame111, 113, this.frame114, 120, this.frame121, 124, this.frame125, 129, this.frame130, 138, this.frame139, 145, this.frame146, 150, this.frame151, 156, this.frame157, 162, this.frame163, 167, this.frame168, 169, this.frame170, 176, this.frame177, 179, this.frame180, 182, this.frame183, 183, this.frame184, 190, this.frame191, 200, this.frame201, 204, this.frame205, 213, this.frame214, 214, this.frame215, 218, this.frame219, 231, this.frame232, 238, this.frame239, 239, this.frame240, 240, this.frame241, 247, this.frame248, 256, this.frame257, 262, this.frame263, 274, this.frame275, 275, this.frame276, 287, this.frame288, 289, this.frame290, 290, this.frame291, 297, this.frame298, 306, this.frame307, 316, this.frame317, 321, this.frame322, 324, this.frame325, 329, this.frame330, 341, this.frame342, 396, this.frame397, 402, this.frame403, 411, this.frame412, 412, this.frame413, 413, this.frame414, 421, this.frame422, 429, this.frame430, 433, this.frame434, 444, this.frame445, 458, this.frame459, 462, this.frame463, 467, this.frame468, 474, this.frame475, 483, this.frame484, 503, this.frame504, 516, this.frame517, 519, this.frame520, 520, this.frame521, 526, this.frame527, 537, this.frame538, 549, this.frame550, 571, this.frame572, 580, this.frame581, 581, this.frame582, 584, this.frame585, 589, this.frame590, 590, this.frame591, 595, this.frame596, 609, this.frame610, 620, this.frame621, 629, this.frame630, 640, this.frame641, 654, this.frame655, 667, this.frame668, 676, this.frame677, 688, this.frame689, 690, this.frame691, 692, this.frame693, 693, this.frame694, 721, this.frame722, 723, this.frame724, 746, this.frame747, 804, this.frame805, 846, this.frame847, 857, this.frame858, 867, this.frame868, 880, this.frame881, 906, this.frame907, 927, this.frame928, 938, this.frame939, 979, this.frame980, 1023, this.frame1024, 1031, this.frame1032, 1045, this.frame1046]);
        }

        public frame11() {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        public frame15() {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        public frame18() {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        public frame36() {
            this.mc.parent._mcctrl.dash(2.3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame45() {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        public frame50() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame86() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame94() {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }// end function

        public frame101() {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            return;
        }// end function

        public frame105() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame111() {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.move(0, 16);
            this.mc.parent._mcctrl.setTouchFloor("跳招2", true);
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            return;
        }// end function

        public frame114() {
            this.mc.parent._mcctrl.gotoAndPlay("跳招loop");
        }

        public frame121() {
            this.mc.parent._mcctrl.loop("跳招loop");
            return;
        }// end function

        public frame125() {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame130() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame139() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame146() {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }// end function

        public frame151() {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        public frame157() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame163() {
            this.mc.parent._mcctrl.movePercent(0.3, 0);
            return;
        }// end function

        public frame168() {
            this.mc.parent._mcctrl.dampingPercent(0.03, 0);
            return;
        }// end function

        public frame170() {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setBishaSUPER();
            return;
        }// end function

        public frame177() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame180() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame183() {
            return;
        }// end function

        public frame184() {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            this.mc.parent._mcctrl.dampingPercent(0.02, 0);
            this.mc.parent._EffectCtrl.shine(0);
            return;
        }// end function

        public frame191() {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        public frame201() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame205() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame214() {
            this.mc.parent._EffectCtrl.shake(0, 3);
            return;
        }// end function

        public frame215() {
            this.mc.parent._EffectCtrl.shine(1183014);
            return;
        }// end function

        public frame219() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame232() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame239() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame240() {
            this.mc.parent._mcctrl.move(0, -20);
            return;
        }// end function

        public frame241() {
            this.mc.parent._EffectCtrl.shine(658063);
            return;
        }// end function

        public frame248() {
            this.mc.parent._mcctrl.damping(0, 2.5);
            return;
        }// end function

        public frame257() {
            this.mc.parent._mcctrl.setZhao1("跳招");
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            return;
        }// end function

        public frame263() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame275() {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        public frame276() {
            this.mc.parent._mcctrl.setHitTarget("zh10atm", "招12");
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            return;
        }// end function

        public frame288() {
            this.mc.parent._mcctrl.gotoAndPlay("招12")
        }

        public frame290() {
            this.mc.parent._mcctrl.dampingPercent(0.5, 0);
            return;
        }// end function

        public frame291() {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame298() {
            this.mc.parent._mcctrl.setAttack("砍1");
            return;
        }// end function

        public frame307() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame317() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame322() {
            this.mc.parent._mcctrl.movePercent(6.5, 0);
            this.mc.parent._EffectCtrl.shine(1183014);
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame325() {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._mcctrl.dampingPercent(2, 0);
            return;
        }// end function

        public frame330() {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame342() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame397() {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        public frame403() {
            this.mc.parent._mcctrl.movePercent(1.5, -1.5);
            this.mc.parent._mcctrl.isApplyG(false);
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            this.mc.parent._EffectCtrl.shine(0);
            return;
        }// end function

        public frame412() {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame413() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame414() {
            this.mc.parent._mcctrl.setAttackAIR();
            return;
        }// end function

        public frame422() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame430() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame434() {
            this.mc.parent._mcctrl.movePercent(1);
            this.mc.parent._mcctrl.dampingPercent(0.2);
            return;
        }// end function

        public frame445() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame459() {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        public frame463() {
            this.mc.parent._mcctrl.movePercent(4, 0);
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            return;
        }// end function

        public frame468() {
            this.mc.parent._mcctrl.dampingPercent(0.5);
            return;
        }// end function

        public frame475() {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame484() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame504() {
            this.mc.parent._EffectCtrl.bisha(false, "一户1");
            return;
        }// end function

        public frame517() {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame520() {
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            return;
        }// end function

        public frame521() {
            this.mc.parent._EffectCtrl.shine(1183014);
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame527() {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame538() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame550() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame572() {
            this.mc.parent._EffectCtrl.bisha(false, "一户2");
            return;
        }// end function

        public frame581() {
            this.mc.parent._mcctrl.isApplyG(false);
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame582() {
            this.mc.parent._mcctrl.movePercent(1, -1);
            return;
        }// end function

        public frame585() {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame590() {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        public frame591() {
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            return;
        }// end function

        public frame596() {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame610() {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame621() {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame630() {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame641() {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame655() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame668() {
            this.mc.parent._EffectCtrl.bisha(true, "一户万解1");
            return;
        }// end function

        public frame677() {
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }// end function

        public frame689() {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame691() {
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            return;
        }// end function

        public frame693() {
            this.mc.parent._EffectCtrl.shine(1183014);
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame694() {
            this.mc.parent._EffectCtrl.endShake();
            return;
        }// end function

        public frame722() {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame724() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame747() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame805() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame847() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame858() {
            // _root._y = 0;
            return;
        }// end function

        public frame868() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame881() {
            this.mc.parent._mcctrl.ClearState();
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }// end function

        public frame907() {
            this.mc.parent._EffectCtrl.endShake();
            return;
        }// end function

        public frame928() {
            this.mc.parent._EffectCtrl.endWanKai();
            return;
        }// end function

        public frame939() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame980() {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        public frame1024() {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        public frame1032() {
            this.mc.parent._EffectCtrl.startWanKai("虚护1");
            return;
        }// end function

        public frame1046() {
            this.mc.parent._FighterCtrler.doWanKai();
            return;
        }// end function

    }
}
