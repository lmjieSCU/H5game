/*
*主骨骼动画对应的帧事件
*/
namespace hero_kakashi {
    export class Timeline_1 {
        public mc: any;                     //zmovie.ZMovieClip

        constructor(_mc: zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [11, this.frame12, 20, this.frame21, 23, this.frame24, 28, this.frame29, 35, this.frame36, 38, this.frame39, 68, this.frame69, 80, this.frame81, 88, this.frame89, 92, this.frame93, 107, this.frame108, 111, this.frame112, 113, this.frame114, 126, this.frame127, 142, this.frame143, 147, this.frame148, 152, this.frame153, 156, this.frame157, 169, this.frame170, 179, this.frame180, 185, this.frame186, 190, this.frame191, 216, this.frame217, 223, this.frame224, 228, this.frame229, 246, this.frame247, 251, this.frame252, 255, this.frame256, 272, this.frame273, 283, this.frame284, 289, this.frame290, 290, this.frame291, 295, this.frame296, 296, this.frame297, 297, this.frame298, 304, this.frame305, 315, this.frame316, 326, this.frame327, 327, this.frame328, 333, this.frame334, 335, this.frame336, 353, this.frame354, 371, this.frame372, 393, this.frame394, 398, this.frame399, 402, this.frame403, 406, this.frame407, 410, this.frame411, 419, this.frame420, 422, this.frame423, 449, this.frame450, 450, this.frame451, 466, this.frame467, 468, this.frame469, 480, this.frame481, 526, this.frame527, 530, this.frame531, 543, this.frame544, 554, this.frame555, 573, this.frame574, 581, this.frame582, 582, this.frame583, 585, this.frame586, 587, this.frame588, 591, this.frame592, 616, this.frame617, 630, this.frame631, 641, this.frame642, 658, this.frame659, 703, this.frame704, 717, this.frame718, 733, this.frame734, 735, this.frame736, 746, this.frame747, 756, this.frame757, 770, this.frame771, 782, this.frame783, 818, this.frame819, 819, this.frame820, 833, this.frame834, 844, this.frame845, 850, this.frame851, 866, this.frame867, 876, this.frame877, 890, this.frame891, 912, this.frame913, 932, this.frame933, 933, this.frame934, 998, this.frame999, 1209, this.frame1210, 1213, this.frame1214, 1214, this.frame1215, 1234, this.frame1235, 1309, this.frame1310, 1350, this.frame1351, 1378, this.frame1379]);
            return;
        }// end function


        public frame12() {
            this.mc.parent._effectCtrl.walk();
            return;
        }// end function

        public frame21() {
            this.mc.parent._effectCtrl.walk();
            return;
        }// end function

        public frame24() {
            this.mc.parent._mcCtrler.loop("走");
            return;
        }// end function

        public frame29() {
            this.mc.parent._mcCtrler.dash(3);
            this.mc.parent._mcCtrler.setBisha();
            this.mc.parent._mcCtrler.setBishaUP();
            this.mc.parent._mcCtrler.setBishaSUPER();
            this.mc.parent._effectCtrl.shadow(50, 50, 255);
            this.mc.parent._effectCtrl.dash();
            return;
        }// end function

        public frame36() {
            this.mc.parent._mcCtrler.dashStop();
            return;
        }// end function

        public frame39() {
            this.mc.parent._mcCtrler.idle();
            return;
        }// end function

        public frame69() {
            this.mc.parent._mcCtrler.idle();
            return;
        }// end function

        public frame81() {
            this.mc.parent._mcCtrler.setAirMove(true);
            return;
        }// end function

        public frame89() {
            this.mc.parent._mcCtrler.setSkillAIR();
            return;
        }// end function

        public frame93() {
            this.mc.parent._mcCtrler.idle();
            return;
        }// end function

        public frame108() {
            this.mc.parent._mcCtrler.move(0, -1);
            return;
        }// end function

        public frame112() {
            this.mc.parent._mcCtrler.move(-5, -5);
            this.mc.parent._mcCtrler.damping(0.5, 0.5);
            return;
        }// end function

        public frame114() {
            let tz_mc = this.mc.parent._mcCtrler.fire("tzatm", { x: 15, y: 15, hold: 2, hits: 1 });
            return;
        }// end function

        public frame127() {
            this.mc.parent._mcCtrler.idle();
            return;
        }// end function

        public frame143() {
            this.mc.parent._mcCtrler.movePercent(1.7, 0);
            this.mc.parent._mcCtrler.dampingPercent(0.7, 0);
            return;
        }// end function

        public frame148() {
            this.mc.parent._mcCtrler.setAttack("砍2");
            this.mc.parent._mcCtrler.setZhao1();
            this.mc.parent._mcCtrler.setBisha();
            return;
        }// end function

        public frame153() {
            this.mc.parent._mcCtrler.endAct();
            return;
        }// end function

        public frame157() {
            this.mc.parent._mcCtrler.idle();
            return;
        }// end function

        public frame170() {
            this.mc.parent._mcCtrler.movePercent(1, 0);
            this.mc.parent._mcCtrler.dampingPercent(0.05, 0);
            return;
        }// end function

        public frame180() {
            this.mc.parent._mcCtrler.setBishaSUPER();
            this.mc.parent._mcCtrler.setAttack("砍3");
            this.mc.parent._mcCtrler.setSkill2();
            this.mc.parent._mcCtrler.setSkill1();
            this.mc.parent._mcCtrler.setZhao2();
            this.mc.parent._mcCtrler.setBisha();
            this.mc.parent._mcCtrler.setDash();
            this.mc.parent._mcCtrler.setJump();
            return;
        }// end function

        public frame186() {
            this.mc.parent._mcCtrler.endAct();
            return;
        }// end function

        public frame191() {
            this.mc.parent._mcCtrler.idle();
            return;
        }// end function

        public frame217() {
            this.mc.parent._mcCtrler.setSkill1();
            this.mc.parent._mcCtrler.setZhao3("招32");
            this.mc.parent._mcCtrler.setBishaUP();
            this.mc.parent._mcCtrler.setDash();
            return;
        }// end function

        public frame224() {
            this.mc.parent._mcCtrler.endAct();
            return;
        }// end function

        public frame229() {
            this.mc.parent._mcCtrler.idle();
            return;
        }// end function

        public frame247() {
            if (this.mc.parent._mcCtrler.getAttacker("dog1")) {
                this.mc.parent._mcCtrler.idle();
            }
            return;
        }// end function

        public frame252() {
            this.mc.parent._mcCtrler.addQi(10);
            return;
        }// end function

        public frame256() {
            let dog1_mc = this.mc.parent._mcCtrler.addAttacker("dog1");
            if (!dog1_mc) {
                return;
            }
            let dog1 = new Timeline_7(this.mc.parent._mcCtrler.getAttacker("dog1", dog1_mc.hashCode));
            return;
        }// end function

        public frame273() {
            this.mc.parent._mcCtrler.idle();
            return;
        }// end function

        public frame284() {
            this.mc.parent._mcCtrler.movePercent(3, 0);
            this.mc.parent._mcCtrler.setHitTarget("kj10atm", "砍技12");
            this.mc.parent._effectCtrl.shadow(50, 50, 255);
            this.mc.parent._effectCtrl.dash();
            return;
        }// end function

        public frame290() {
            this.mc.parent._mcCtrler.gotoAndPlay("砍技1_miss");
            return;
        }// end function

        public frame291() {
            this.mc.parent._mcCtrler.movePercent(2, 0);
            this.mc.parent._fighteCtrler.setCross(true);
            this.mc.parent._effectCtrl.shadow(50, 50, 255);
            return;
        }// end function

        public frame296() {
            this.mc.parent._mcCtrler.gotoAndPlay("砍技1_miss");
        }

        public frame297() {
            this.mc.parent._fighteCtrler.setDirectToTarget();
            return;
        }// end function

        public frame298() {
            this.mc.parent._mcCtrler.dampingPercent(0.2, 0);
            this.mc.parent._fighteCtrler.setCross(false);
            return;
        }// end function

        public frame305() {
            this.mc.parent._mcCtrler.setZhao1("招12");
            this.mc.parent._mcCtrler.setBisha();
            this.mc.parent._effectCtrl.endShadow();
            return;
        }// end function

        public frame316() {
            this.mc.parent._mcCtrler.idle();
            return;
        }// end function

        public frame327() {
            this.mc.parent._mcCtrler.addQi(10);
            return;
        }// end function

        public frame328() {
            this.mc.parent._mcCtrler.movePercent(2, 0);
            // this.mc.parent._mcCtrler.setHitTarget("kj20atm", "砍技21");
            return;
        }// end function

        public frame334() {
            this.mc.parent._mcCtrler.gotoAndPlay("砍技21")
        }

        public frame336() {
            this.mc.parent._mcCtrler.dampingPercent(0.3, 0);
            return;
        }// end function

        public frame354() {
            this.mc.parent._mcCtrler.endAct();
            return;
        }// end function

        public frame372() {
            this.mc.parent._mcCtrler.idle();
            return;
        }// end function

        public frame394() {
            this.mc.parent._mcCtrler.addQi(5);
            return;
        }// end function

        public frame399() {
            this.mc.parent._mcCtrler.fire("zh1atm", { x: 20, y: 0, hold: 2, hits: 1 });
            return;
        }// end function

        public frame403() {
            this.mc.parent._mcCtrler.fire("zh12atm", { x: 20, y: 0, hold: 2, hits: 1 });
            this.mc.parent._mcCtrler.gotoAndPlay("招12");
            return;
        }// end function

        public frame407() {
            this.mc.parent._mcCtrler.fire("zh14atm", { x: 20, y: 0, hold: 2, hits: 1 });
            return;
        }// end function

        public frame411() {
            this.mc.parent._mcCtrler.fire("zh13atm", { x: 20, y: 0, hold: 2, hits: 1 });
            return;
        }// end function

        public frame420() {
            this.mc.parent._mcCtrler.endAct();
            return;
        }// end function

        public frame423() {
            this.mc.parent._mcCtrler.idle();
            return;
        }// end function

        public frame450() {
            this.mc.parent._mcCtrler.addQi(10);
            return;
        }// end function

        public frame451() {
            this.mc.parent._mcCtrler.movePercent(4, 0);
            this.mc.parent._mcCtrler.setHitTarget("zh20atm", "招21");
            this.mc.parent._effectCtrl.dash();
            return;
        }// end function

        public frame467() {
            this.mc.parent._mcCtrler.endAct();
            return;
        }// end function

        public frame469() {
            this.mc.parent._mcCtrler.dampingPercent(0.4, 0);
            return;
        }// end function

        public frame481() {
            this.mc.parent._mcCtrler.idle();
            return;
        }// end function

        public frame527() {
            this.mc.parent._effectCtrl.shine();
            this.mc.parent._effectCtrl.shine(0);
            return;
        }// end function

        public frame531() {
            this.mc.parent._mcCtrler.endAct();
            return;
        }// end function

        public frame544() {
            this.mc.parent._mcCtrler.setZhao3("招32");
            this.mc.parent._mcCtrler.setBishaUP();
            this.mc.parent._mcCtrler.setDash();
            return;
        }// end function

        public frame555() {
            this.mc.parent._mcCtrler.idle();
            return;
        }// end function

        public frame574() {
            this.mc.parent._mcCtrler.addQi(5);
            return;
        }// end function

        public frame582() {
            this.mc.parent._effectCtrl.dash();
            return;
        }// end function

        public frame583() {
            this.mc.parent._mcCtrler.gotoAndPlay("招32");
            return;
        }// end function

        public frame586() {
            this.mc.parent._mcCtrler.addQi(5);
            return;
        }// end function

        public frame588() {
            let target: any = this.mc.parent._fighteCtrler.getTargetSP();
            let moveY: number = 50;
            if (target && !target.isInAir) {
                moveY = 0;
            }
            this.mc.parent._fighteCtrler.moveToTarget(50, moveY, true);
            this.mc.parent._effectCtrl.shine();
            this.mc.parent._mcCtrler.movePercent(0.5, -0.5);
            this.mc.parent._mcCtrler.dampingPercent(0.01, 0.01);
            this.mc.parent._effectCtrl.slowDown(0.5);
            return;
        }// end function

        public frame592() {
            this.mc.parent._mcCtrler.movePercent(1, -1);
            this.mc.parent._mcCtrler.dampingPercent(0.02, 0.03);
            return;
        }// end function

        public frame617() {
            this.mc.parent._mcCtrler.idle();
            return;
        }// end function

        public frame631() {
            this.mc.parent._mcCtrler.addQi(10);
            return;
        }// end function

        public frame642() {
            this.mc.parent._mcCtrler.idle();
            return;
        }// end function

        public frame659() {
            this.mc.parent._mcCtrler.addQi(20);
            return;
        }// end function

        public frame704() {
            this.mc.parent._mcCtrler.idle();
            return;
        }// end function

        public frame718() {
            this.mc.parent._effectCtrl.bisha(false, "卡卡西1");
            return;
        }// end function

        public frame734() {
            this.mc.parent._effectCtrl.endBisha();
            let shuilong_mc = this.mc.parent._mcCtrler.addAttacker("shuilong", { applyG: false });
            if (!shuilong_mc) {
                return;
            }
            let shuilong = new Timeline_10(this.mc.parent._mcCtrler.getAttacker("shuilong", shuilong_mc.hashCode))
            return;
        }// end function

        public frame736() {
            this.mc.parent._effectCtrl.shine(2676984);
            return;
        }// end function

        public frame747() {
            this.mc.parent._effectCtrl.shine();
            return;
        }// end function

        public frame757() {
            this.mc.parent._mcCtrler.endAct();
            return;
        }// end function

        public frame771() {
            this.mc.parent._mcCtrler.idle();
            return;
        }// end function

        public frame783() {
            this.mc.parent._effectCtrl.bisha(false, "卡卡西2");
            return;
        }// end function

        public frame819() {
            this.mc.parent._effectCtrl.endBisha();
            return;
        }// end function

        public frame820() {
            this.mc.parent._mcCtrler.movePercent(3, 0);
            this.mc.parent._mcCtrler.setHitTarget("bs0atm", "必杀2");
            this.mc.parent._effectCtrl.shadow(50, 50, 255);
            this.mc.parent._effectCtrl.dash();
            return;
        }// end function

        public frame834() {
            this.mc.parent._mcCtrler.dampingPercent(0.3, 0);
            return;
        }// end function

        public frame845() {
            this.mc.parent._mcCtrler.idle();
            return;
        }// end function

        public frame851() {
            return;
        }// end function

        public frame867() {
            this.mc.parent._effectCtrl.shine(16777215);
            return;
        }// end function

        public frame877() {
            this.mc.parent._mcCtrler.endAct();
            return;
        }// end function

        public frame891() {
            this.mc.parent._mcCtrler.idle();
            return;
        }// end function

        public frame913() {
            this.mc.parent._effectCtrl.bisha(true, "卡卡西3");
            return;
        }// end function

        public frame933() {
            this.mc.parent._effectCtrl.endBisha();
            this.mc.parent._effectCtrl.slowDown(0.5);
            return;
        }// end function

        public frame934() {
            let shenwei_mc = this.mc.parent._mcCtrler.addAttacker("shenwei", { x: { followTarget: true, offset: 0 }, y: { followTarget: true, offset: -20 }, applyG: false });
            if (!shenwei_mc) {
                return;
            }
            let shenwei = new Timeline_11(this.mc.parent._mcCtrler.getAttacker("shenwei", shenwei_mc.hashCode))
            return;
        }// end function

        public frame999() {
            this.mc.parent._mcCtrler.idle();
            return;
        }// end function

        public frame1210() {
            this.mc.parent._mcCtrler.movePercent(0.8, 0);
            return;
        }// end function

        public frame1214() {
            this.mc.parent._mcCtrler.stopMove();
            return;
        }// end function

        public frame1215() {
            this.mc.parent._mcCtrler.idle();
            return;
        }// end function

        public frame1235() {
            this.mc.parent._mcCtrler.idle();
            return;
        }// end function

        public frame1310() {
            this.mc.parent._mcCtrler.idle();
            return;
        }// end function

        public frame1351() {
            this.mc.parent._mcCtrler.stop();
            return;
        }// end function

        public frame1379() {
            this.mc.parent._mcCtrler.stop();
            return;
        }// end function
    }
}






