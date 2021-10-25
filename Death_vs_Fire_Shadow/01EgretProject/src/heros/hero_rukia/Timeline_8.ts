/*
*主骨骼动画形态2对应的帧事件
*/
namespace hero_rukia {
    export class Timeline_8 {

        public mc: any;                     //zmovie.ZMovieClip

        constructor(_mc: zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [11, this.frame12, 19, this.frame20, 26, this.frame27, 33, this.frame34, 44, this.frame45, 47, this.frame48, 77, this.frame78, 89, this.frame90, 94, this.frame95, 99, this.frame100, 111, this.frame112, 121, this.frame122, 137, this.frame138, 150, this.frame151, 159, this.frame160, 170, this.frame171, 181, this.frame182, 189, this.frame190, 196, this.frame197, 213, this.frame214, 221, this.frame222, 226, this.frame227, 248, this.frame249, 258, this.frame259, 264, this.frame265, 271, this.frame272, 292, this.frame293, 295, this.frame296, 307, this.frame308, 316, this.frame317, 323, this.frame324, 329, this.frame330, 348, this.frame349, 350, this.frame351, 355, this.frame356, 369, this.frame370, 375, this.frame376, 381, this.frame382, 391, this.frame392, 398, this.frame399, 415, this.frame416, 419, this.frame420, 434, this.frame435, 442, this.frame443, 448, this.frame449, 450, this.frame451, 455, this.frame456, 470, this.frame471, 484, this.frame485, 490, this.frame491, 495, this.frame496, 501, this.frame502, 516, this.frame517, 524, this.frame525, 536, this.frame537, 549, this.frame550, 569, this.frame570, 588, this.frame589, 632, this.frame633, 633, this.frame634, 639, this.frame640, 640, this.frame641, 655, this.frame656, 667, this.frame668, 678, this.frame679, 725, this.frame726, 733, this.frame734, 750, this.frame751, 766, this.frame767, 795, this.frame796, 862, this.frame863, 870, this.frame871, 871, this.frame872, 889, this.frame890, 905, this.frame906, 992, this.frame993, 996, this.frame997, 999, this.frame1000, 1015, this.frame1016, 1031, this.frame1032, 1079, this.frame1080, 1090, this.frame1091, 1131, this.frame1132, 1159, this.frame1160]);
        }

        public frame12() {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        public frame20() {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        public frame27() {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        public frame34() {
            this.mc.parent._mcctrl.dash(2.5);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame45() {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        public frame48() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame78() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame90() {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        public frame95() {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            this.mc.parent._mcctrl.setTouchFloor("落地", true);
            return;
        }// end function

        public frame100() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame112() {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.isApplyG(false);
            this.mc.parent._mcctrl.move(0, 1);
            return;
        }// end function

        public frame122() {
            this.mc.parent._mcctrl.fire("tzatm", { x: { start: 10, add: 1, max: 30 }, y: { start: 10, add: 1, max: 30 }, hold: 60, hits: 1, hp: 200 });
            this.mc.parent._mcctrl.isApplyG(true);
            this.mc.parent._mcctrl.move(-5, -5);
            this.mc.parent._mcctrl.damping(0.2, 0.2);
            this.mc.parent._EffectCtrl.shine(16711680);
            return;
        }// end function

        public frame138() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame151() {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        public frame160() {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        public frame171() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame182() {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        public frame190() {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }// end function

        public frame197() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame214() {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        public frame222() {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setAttack("砍4");
            return;
        }// end function

        public frame227() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame249() {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        public frame259() {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        public frame265() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame272() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame293() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame296() {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }// end function

        public frame308() {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        public frame317() {
            this.mc.parent._mcctrl.setBishaUP();
            return;
        }// end function

        public frame324() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame330() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame349() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame351() {
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame356() {
            this.mc.parent._FighterCtrler.moveToTarget(50, 0, true);
            this.mc.parent._EffectCtrl.slowDown(0.3);
            return;
        }// end function

        public frame370() {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setSkill1();
            return;
        }// end function

        public frame376() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame382() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame392() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame399() {
            this.mc.parent._mcctrl.fire("zh1atm", { x: { start: 10, add: 1, max: 30 }, hits: 1, hp: 200 });
            this.mc.parent._EffectCtrl.shine(16711680);
            return;
        }// end function

        public frame416() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame420() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame435() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame443() {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            return;
        }// end function

        public frame449() {
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame451() {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame456() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame471() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame485() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame491() {
            this.mc.parent._mcctrl.move(20, -20);
            return;
        }// end function

        public frame496() {
            this.mc.parent._mcctrl.damping(2, 2);
            return;
        }// end function

        public frame502() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame517() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame525() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame537() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame550() {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        public frame570() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame589() {
            this.mc.parent._EffectCtrl.bisha(false, "bsface2");
            return;
        }// end function

        public frame633() {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame634() {
            this.mc.parent._mcctrl.movePercent(-1, 0);
            return;
        }// end function

        public frame640() {
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        public frame641() {
            this.mc.parent._EffectCtrl.shine(2679032);
            return;
        }// end function

        public frame656() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame668() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame679() {
            this.mc.parent._EffectCtrl.bisha(false, "bsface2");
            return;
        }// end function

        public frame726() {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame734() {
            this.mc.parent._EffectCtrl.shine(2679032);
            return;
        }// end function

        public frame751() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame767() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame796() {
            this.mc.parent._EffectCtrl.bisha(true, "bsface2");
            return;
        }// end function

        public frame863() {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame871() {
            this.mc.parent._EffectCtrl.shine(7393520);
            return;
        }// end function

        public frame872() {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame890() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame906() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame993() {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }// end function

        public frame997() {
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        public frame1000() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1016() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function


        public frame1032() {
            this.mc.parent._mcctrl.ClearState();
        }

        public frame1080() {
            this.mc.parent._EffectCtrl.endWanKai();
            return;
        }// end function

        public frame1091() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1132() {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        public frame1160() {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

    }
}
