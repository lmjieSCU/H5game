/*
*主骨骼动画形态1对应的帧事件
*/
namespace hero_lee {
    export class Timeline_1 {

        public mc: any;                     //zmovie.ZMovieClip

        constructor(_mc: zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [7, this.frame8, 11, this.frame12, 17, this.frame18, 22, this.frame23, 27, this.frame28, 34, this.frame35, 37, this.frame38, 67, this.frame68, 79, this.frame80, 82, this.frame83, 86, this.frame87, 96, this.frame97, 106, this.frame107, 109, this.frame110, 124, this.frame125, 128, this.frame129, 137, this.frame138, 149, this.frame150, 153, this.frame154, 159, this.frame160, 162, this.frame163, 172, this.frame173, 177, this.frame178, 183, this.frame184, 187, this.frame188, 201, this.frame202, 207, this.frame208, 214, this.frame215, 224, this.frame225, 231, this.frame232, 238, this.frame239, 246, this.frame247, 252, this.frame253, 266, this.frame267, 268, this.frame269, 279, this.frame280, 289, this.frame290, 302, this.frame303, 340, this.frame341, 350, this.frame351, 352, this.frame353, 387, this.frame388, 388, this.frame389, 401, this.frame402, 403, this.frame404, 411, this.frame412, 417, this.frame418, 418, this.frame419, 419, this.frame420, 422, this.frame423, 428, this.frame429, 429, this.frame430, 436, this.frame437, 447, this.frame448, 463, this.frame464, 464, this.frame465, 470, this.frame471, 471, this.frame472, 476, this.frame477, 485, this.frame486, 496, this.frame497, 508, this.frame509, 512, this.frame513, 523, this.frame524, 534, this.frame535, 538, this.frame539, 557, this.frame558, 578, this.frame579, 601, this.frame602, 604, this.frame605, 607, this.frame608, 625, this.frame626, 634, this.frame635, 638, this.frame639, 639, this.frame640, 640, this.frame641, 641, this.frame642, 642, this.frame643, 643, this.frame644, 652, this.frame653, 653, this.frame654, 660, this.frame661, 672, this.frame673, 673, this.frame674, 674, this.frame675, 695, this.frame696, 704, this.frame705, 720, this.frame721, 722, this.frame723, 738, this.frame739, 751, this.frame752, 771, this.frame772, 798, this.frame799, 806, this.frame807, 837, this.frame838, 839, this.frame840, 849, this.frame850, 852, this.frame853, 862, this.frame863, 871, this.frame872, 879, this.frame880, 890, this.frame891, 900, this.frame901, 909, this.frame910, 917, this.frame918, 933, this.frame934, 934, this.frame935, 939, this.frame940, 953, this.frame954, 1037, this.frame1038, 1063, this.frame1064, 1138, this.frame1139, 1179, this.frame1180, 1207, this.frame1208, 1219, this.frame1220, 1228, this.frame1229]);
        }

        public frame8() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame12() {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        public frame18() {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        public frame23() {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        public frame28() {
            this.mc.parent._mcctrl.dash(2.5);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame35() {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        public frame38() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame68() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame80() {
            this.mc.parent._mcctrl.move(10, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            return;
        }// end function

        public frame83() {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }// end function

        public frame87() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame97() {
            this.mc.parent._mcctrl.setHitTarget("tz0atm", "跳招3");
            this.mc.parent._mcctrl.movePercent(1, -1);
            this.mc.parent._mcctrl.dampingPercent(0, 0.1);
            this.mc.parent._mcctrl.setTouchFloor("跳招2", true);
            this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            this.mc.parent._mcctrl.gotoAndPlay("跳招loop");
            return;
        }// end function

        public frame107() {
            this.mc.parent._mcctrl.loop("跳招loop");
            return;
        }// end function

        public frame110() {
            // this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame125() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame129() {
            this.mc.parent._mcctrl.movePercent(-0.5, -1);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0.05);
            this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            return;
        }// end function

        public frame138() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame150() {
            this.mc.parent._mcctrl.move(5, 0);
            this.mc.parent._mcctrl.damping(0.5, 0);
            return;
        }// end function

        public frame154() {
            this.mc.parent._mcctrl.setAttack("砍2");
            return;
        }// end function

        public frame160() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame163() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame173() {
            this.mc.parent._mcctrl.move(10, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            return;
        }// end function

        public frame178() {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setSkill1();
            return;
        }// end function

        public frame184() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame188() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame202() {
            this.mc.parent._mcctrl.move(10, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            return;
        }// end function

        public frame208() {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setAttack("砍4");
            return;
        }// end function

        public frame215() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame225() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame232() {
            this.mc.parent._mcctrl.move(15, 0);
            this.mc.parent._mcctrl.damping(1.5, 0);
            return;
        }// end function

        public frame239() {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill2();
            return;
        }// end function

        public frame247() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame253() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame267() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame269() {
            if (this.mc.parent._FighterCtrler.targetInRange([0, 300])) {
                this.mc.parent._FighterCtrler.moveToTarget(-30, 0, false);
            }
            else {
                this.mc.parent._FighterCtrler.moveOnce(300, 0);
            }
            this.mc.parent._mcctrl.move(10, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            return;
        }// end function

        public frame280() {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setJump();
            return;
        }// end function

        public frame290() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame303() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame341() {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._mcctrl.move(10, -15);
            this.mc.parent._mcctrl.damping(0.5, 1);
            this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            return;
        }// end function

        public frame351() {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame353() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame388() {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            return;
        }// end function

        public frame389() {
            this.mc.parent._mcctrl.move(20, 0);
            this.mc.parent._mcctrl.damping(0.5, 0);
            return;
        }// end function

        public frame402() {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame404() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame412() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame418() {
            this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            return;
        }// end function

        public frame419() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame420() {
            this.mc.parent._mcctrl.move(10, -10);
            this.mc.parent._mcctrl.damping(0, 1);
            return;
        }// end function

        public frame423() {
            this.mc.parent._mcctrl.setTouchFloor("招23", true);
            this.mc.parent._mcctrl.gotoAndPlay("招2_loop");
            return;
        }// end function

        public frame429() {
            // this.mc.parent._mcctrl.loop("招2_loop");
            return;
        }// end function

        public frame430() {
            this.mc.parent._EffectCtrl.shake(0, 3);
            return;
        }// end function

        public frame437() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame448() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame464() {
            this.mc.parent._mcctrl.move(10, 0);
            this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            return;
        }// end function

        public frame465() {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        public frame471() {
            this.mc.parent._mcctrl.damping(1, 0);
            return;
        }// end function

        public frame472() {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame477() {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        public frame486() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame497() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame509() {
            this.mc.parent._mcctrl.addQi(15);
            return;
        }// end function

        public frame513() {
            this.mc.parent._mcctrl.movePercent(0.3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.03, 0);
            return;
        }// end function

        public frame524() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame535() {
            this.mc.parent._mcctrl.addQi(30);
            return;
        }// end function

        public frame539() {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        public frame558() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame579() {
            this.mc.parent._EffectCtrl.bisha(false, "小李1");
            return;
        }// end function

        public frame602() {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame605() {
            if (this.mc.parent._FighterCtrler.targetInRange([0, 500])) {
                this.mc.parent._FighterCtrler.moveToTarget(-20, null, false);
            }
            else {
                this.mc.parent._FighterCtrler.moveOnce(500, 0);
            }
            return;
        }// end function

        public frame608() {
            this.mc.parent._EffectCtrl.shine(14917603);
            return;
        }// end function

        public frame626() {
            this.mc.parent._mcctrl.justHitToPlay("bs", "必杀1", false);
            return;
        }// end function

        public frame635() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame639() {
            this.mc.parent._EffectCtrl.slowDown(1);
            return;
        }// end function

        public frame640() {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            return;
        }// end function

        public frame641() {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            return;
        }// end function

        public frame642() {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            return;
        }// end function

        public frame643() {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            return;
        }// end function

        public frame644() {
            if (this.mc.parent._FighterCtrler.target) {
                this.mc.parent._FighterCtrler.target.visible = false;
            }
            this.mc.parent._mcctrl.moveTarget({ followmc: "move_mc" }); 
            this.mc.parent._mcctrl.move(0, 10);
            return;
        }// end function

        public frame653() {
            this.mc.parent._mcctrl.setTouchFloor("必杀2", true);
            this.mc.parent._mcctrl.gotoAndPlay("必杀LOOP");
            return;
        }// end function

        public frame654() {
            this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            return;
        }// end function

        public frame661() {
            // this.mc.parent._mcctrl.gotoAndPlay("必杀LOOP");
            return;
        }// end function

        public frame673() {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._mcctrl.moveTarget(null);
            this.mc.parent._EffectCtrl.endShadow();
            this.mc.parent._EffectCtrl.shake(0, 5);
            this.mc.parent._EffectCtrl.shine(16777215);
            return;
        }// end function

        public frame674() {
            if (this.mc.parent._FighterCtrler.target) {
                this.mc.parent._FighterCtrler.target.visible = true;
            }
            return;
        }// end function

        public frame675() {
            if (this.mc.parent._FighterCtrler.hp > 300) {
                this.mc.parent._FighterCtrler.loseHp(100);
            }
            this.mc.parent._EffectCtrl.shine(16718656);
            return;
        }// end function

        public frame696() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame705() {
            this.mc.parent._EffectCtrl.bisha(false, "小李1");
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }// end function

        public frame721() {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame723() {
            this.mc.parent._mcctrl.move(0, 20);
            this.mc.parent._mcctrl.setTouchFloor("空中必杀2", true);
            this.mc.parent._mcctrl.gotoAndPlay("空中必杀1");
            return;
        }// end function

        public frame739() {
            // this.mc.parent._mcctrl.loop("空中必杀1");
            return;
        }// end function

        public frame752() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame772() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame799() {
            this.mc.parent._EffectCtrl.bisha(true, "小李2");
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }// end function

        public frame807() {
            if (this.mc.parent._FighterCtrler.hp > 300) {
                this.mc.parent._FighterCtrler.loseHp(200);
            }
            return;
        }// end function

        public frame838() {
            this.mc.parent._EffectCtrl.shine(14917603);
            return;
        }// end function

        public frame840() {
            this.mc.parent._EffectCtrl.endShake();
            return;
        }// end function

        public frame850() {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame853() {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            this.mc.parent._mcctrl.move(15, -0.1);
            return;
        }// end function

        public frame863() {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            this.mc.parent._mcctrl.move(15, -15);
            return;
        }// end function

        public frame872() {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            this.mc.parent._mcctrl.move(-15, -0.1);
            return;
        }// end function

        public frame880() {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            this.mc.parent._mcctrl.move(-15, -15);
            return;
        }// end function

        public frame891() {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            this.mc.parent._mcctrl.move(15, -0.1);
            return;
        }// end function

        public frame901() {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            this.mc.parent._mcctrl.move(15, -15);
            return;
        }// end function

        public frame910() {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            this.mc.parent._mcctrl.move(-15, -0.1);
            return;
        }// end function

        public frame918() {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            this.mc.parent._mcctrl.move(-15, -15);
            return;
        }// end function

        public frame934() {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            this.mc.parent._mcctrl.move(0, 20);
            return;
        }// end function

        public frame935() {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            return;
        }// end function

        public frame940() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame954() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1038() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1064() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1139() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1180() {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        public frame1208() {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        public frame1220() {
            this.mc.parent._EffectCtrl.startWanKai("小李2");
            return;
        }// end function

        public frame1229() {
            this.mc.parent._FighterCtrler.doWanKai();
            return;
        }// end function

    }
}