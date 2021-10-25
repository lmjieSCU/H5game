/*
*ichigo主骨骼形态3主骨骼动画对应的帧事件
*/
namespace hero_ichigo {
    export class Timeline_30 {

        public mc: any;                     //zmovie.ZMovieClip

        constructor(_mc: zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [10, this.frame11, 14, this.frame15, 17, this.frame18, 30, this.frame31, 35, this.frame36, 38, this.frame39, 69, this.frame70, 78, this.frame79, 81, this.frame82, 83, this.frame84, 88, this.frame89, 94, this.frame95, 96, this.frame97, 101, this.frame102, 103, this.frame104, 107, this.frame108, 108, this.frame109, 119, this.frame120, 127, this.frame128, 131, this.frame132, 138, this.frame139, 143, this.frame144, 149, this.frame150, 156, this.frame157, 160, this.frame161, 166, this.frame167, 176, this.frame177, 185, this.frame186, 197, this.frame198, 202, this.frame203, 210, this.frame211, 216, this.frame217, 230, this.frame231, 234, this.frame235, 243, this.frame244, 252, this.frame253, 256, this.frame257, 268, this.frame269, 284, this.frame285, 291, this.frame292, 292, this.frame293, 308, this.frame309, 310, this.frame311, 317, this.frame318, 328, this.frame329, 330, this.frame331, 330, this.frame340, 341, this.frame342, 347, this.frame348, 353, this.frame354, 361, this.frame362, 373, this.frame374, 381, this.frame382, 382, this.frame383, 384, this.frame385, 398, this.frame399, 410, this.frame411, 423, this.frame424, 442, this.frame443, 448, this.frame449, 455, this.frame456, 473, this.frame474, 485, this.frame486, 491, this.frame492, 502, this.frame503, 520, this.frame521, 524, this.frame525, 536, this.frame537, 540, this.frame541, 552, this.frame553, 562, this.frame563, 569, this.frame570, 572, this.frame573, 581, this.frame582, 586, this.frame587, 587, this.frame588, 594, this.frame595, 630, this.frame631, 636, this.frame637, 640, this.frame641, 664, this.frame665, 667, this.frame668, 687, this.frame688, 736, this.frame737, 752, this.frame753, 753, this.frame754, 766, this.frame767, 815, this.frame816, 817, this.frame818, 847, this.frame848, 946, this.frame947, 955, this.frame956, 965, this.frame966, 985, this.frame986, 1004, this.frame1005, 1036, this.frame1037, 1077, this.frame1078, 1121, this.frame1122]);
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

        public frame31() {
            this.mc.parent._mcctrl.dash(4);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame36() {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        public frame39() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame70() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame79() {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.setAirMove(false);
            return;
        }// end function

        public frame82() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame84() {
            this.mc.parent._mcctrl.dampingPercent(0.3, 0);
            this.mc.parent._mcctrl.setAirMove(true);
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }// end function

        public frame89() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame95() {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            return;
        }// end function

        public frame97() {
            this.mc.parent._mcctrl.movePercent(2, 1);
            this.mc.parent._mcctrl.setTouchFloor("跳招2");
            return;
        }// end function

        public frame102() {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        public frame104() {
            this.mc.parent._mcctrl.dampingPercent(0.2, 1);
            return;
        }// end function

        public frame108() {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame109() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame120() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame128() {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        public frame132() {
            this.mc.parent._mcctrl.setAttack("砍2");
            return;
        }// end function

        public frame139() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame144() {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        public frame150() {
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }// end function

        public frame157() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame161() {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        public frame167() {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setAttack("砍4");
            return;
        }// end function

        public frame177() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame186() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame198() {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        public frame203() {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setAttack("砍5");
            this.mc.parent._mcctrl.setSkill2();
            return;
        }// end function

        public frame211() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame217() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame231() {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.02, 0);
            this.mc.parent._EffectCtrl.shine(0);
            return;
        }// end function

        public frame235() {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        public frame244() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame253() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame257() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame269() {
            this.mc.parent._EffectCtrl.shine(0);
            this.mc.parent._EffectCtrl.shake(0, 3);
            return;
        }// end function

        public frame285() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame292() {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }// end function

        public frame293() {
            this.mc.parent._mcctrl.movePercent(3, -3);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0.2);
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            return;
        }// end function

        public frame309() {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame311() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame318() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame329() {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        public frame331() {
            this.mc.parent._mcctrl.setHitTarget("zh10atm", "招12");
            this.mc.parent._FighterCtrler.setCross(true);
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            return;
        }// end function


        public frame340() {
            this.mc.parent._mcctrl.gotoAndPlay("招12");
        }

        public frame342() {
            this.mc.parent._FighterCtrler.setDirectToTarget();
            this.mc.parent._FighterCtrler.setCross(false);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        public frame348() {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame354() {
            this.mc.parent._mcctrl.setAttack("砍1");
            return;
        }// end function

        public frame362() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame374() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame382() {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._EffectCtrl.slowDown(1);
            return;
        }// end function

        public frame383() {
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame385() {
            this.mc.parent._FighterCtrler.moveToTarget(100, 0, true);
            return;
        }// end function

        public frame399() {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao3();
            return;
        }// end function

        public frame411() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame424() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame443() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame449() {
            this.mc.parent._EffectCtrl.shine(0);
            return;
        }// end function

        public frame456() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame474() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame486() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame492() {
            this.mc.parent._mcctrl.movePercent(1);
            this.mc.parent._mcctrl.dampingPercent(0.2);
            return;
        }// end function

        public frame503() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame521() {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        public frame525() {
            this.mc.parent._mcctrl.movePercent(1);
            this.mc.parent._mcctrl.dampingPercent(0.2);
            return;
        }// end function

        public frame537() {
            this.mc.parent._mcctrl.movePercent(2, -2);
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            return;
        }// end function

        public frame541() {
            this.mc.parent._mcctrl.dampingPercent(0.5, 0.5);
            return;
        }// end function

        public frame553() {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame563() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame570() {
            this.mc.parent._mcctrl.gotoAndPlay("空中必杀");
        }

        public frame573() {
            this.mc.parent._EffectCtrl.bisha(false, "虚护2");
            return;
        }// end function

        public frame582() {
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame587() {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame588() {
            this.mc.parent._FighterCtrler.moveToTarget(100, 0, true);
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame595() {
            this.mc.parent._mcctrl.move(-10, 0);
            this.mc.parent._mcctrl.damping(0.5, 0);
            return;
        }// end function

        public frame631() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame637() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame641() {
            this.mc.parent._EffectCtrl.bisha(false, "虚护1");
            return;
        }// end function

        public frame665() {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame668() {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame688() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame737() {
            this.mc.parent._EffectCtrl.bisha(true, "虚护3");
            return;
        }// end function

        public frame753() {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame754() {
            this.mc.parent._EffectCtrl.shine(394758);
            return;
        }// end function

        public frame767() {
            this.mc.parent._EffectCtrl.bisha(true, "虚护3");
            return;
        }// end function

        public frame816() {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame818() {
            this.mc.parent._EffectCtrl.shine(16727100);
            return;
        }// end function

        public frame848() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame947() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame956() {
            // _root._y = 0;
            return;
        }// end function

        public frame966() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame986() {
            this.mc.parent._EffectCtrl.shake(0, 3, 1);
            this.mc.parent._mcctrl.ClearState();
            return;
        }// end function

        public frame1005() {
            this.mc.parent._EffectCtrl.endWanKai();
            return;
        }// end function

        public frame1037() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1078() {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        public frame1122() {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

    }
}
