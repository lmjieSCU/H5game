var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*主骨骼动画对应的帧事件
*/
var hero_kakashi;
(function (hero_kakashi) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [11, this.frame12, 20, this.frame21, 23, this.frame24, 28, this.frame29, 35, this.frame36, 38, this.frame39, 68, this.frame69, 80, this.frame81, 88, this.frame89, 92, this.frame93, 107, this.frame108, 111, this.frame112, 113, this.frame114, 126, this.frame127, 142, this.frame143, 147, this.frame148, 152, this.frame153, 156, this.frame157, 169, this.frame170, 179, this.frame180, 185, this.frame186, 190, this.frame191, 216, this.frame217, 223, this.frame224, 228, this.frame229, 246, this.frame247, 251, this.frame252, 255, this.frame256, 272, this.frame273, 283, this.frame284, 289, this.frame290, 290, this.frame291, 295, this.frame296, 296, this.frame297, 297, this.frame298, 304, this.frame305, 315, this.frame316, 326, this.frame327, 327, this.frame328, 333, this.frame334, 335, this.frame336, 353, this.frame354, 371, this.frame372, 393, this.frame394, 398, this.frame399, 402, this.frame403, 406, this.frame407, 410, this.frame411, 419, this.frame420, 422, this.frame423, 449, this.frame450, 450, this.frame451, 466, this.frame467, 468, this.frame469, 480, this.frame481, 526, this.frame527, 530, this.frame531, 543, this.frame544, 554, this.frame555, 573, this.frame574, 581, this.frame582, 582, this.frame583, 585, this.frame586, 587, this.frame588, 591, this.frame592, 616, this.frame617, 630, this.frame631, 641, this.frame642, 658, this.frame659, 703, this.frame704, 717, this.frame718, 733, this.frame734, 735, this.frame736, 746, this.frame747, 756, this.frame757, 770, this.frame771, 782, this.frame783, 818, this.frame819, 819, this.frame820, 833, this.frame834, 844, this.frame845, 850, this.frame851, 866, this.frame867, 876, this.frame877, 890, this.frame891, 912, this.frame913, 932, this.frame933, 933, this.frame934, 998, this.frame999, 1209, this.frame1210, 1213, this.frame1214, 1214, this.frame1215, 1234, this.frame1235, 1309, this.frame1310, 1350, this.frame1351, 1378, this.frame1379]);
            return;
        } // end function
        Timeline_1.prototype.frame12 = function () {
            this.mc.parent._effectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame21 = function () {
            this.mc.parent._effectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame24 = function () {
            this.mc.parent._mcCtrler.loop("走");
            return;
        }; // end function
        Timeline_1.prototype.frame29 = function () {
            this.mc.parent._mcCtrler.dash(3);
            this.mc.parent._mcCtrler.setBisha();
            this.mc.parent._mcCtrler.setBishaUP();
            this.mc.parent._mcCtrler.setBishaSUPER();
            this.mc.parent._effectCtrl.shadow(50, 50, 255);
            this.mc.parent._effectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame36 = function () {
            this.mc.parent._mcCtrler.dashStop();
            return;
        }; // end function
        Timeline_1.prototype.frame39 = function () {
            this.mc.parent._mcCtrler.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame69 = function () {
            this.mc.parent._mcCtrler.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame81 = function () {
            this.mc.parent._mcCtrler.setAirMove(true);
            return;
        }; // end function
        Timeline_1.prototype.frame89 = function () {
            this.mc.parent._mcCtrler.setSkillAIR();
            return;
        }; // end function
        Timeline_1.prototype.frame93 = function () {
            this.mc.parent._mcCtrler.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame108 = function () {
            this.mc.parent._mcCtrler.move(0, -1);
            return;
        }; // end function
        Timeline_1.prototype.frame112 = function () {
            this.mc.parent._mcCtrler.move(-5, -5);
            this.mc.parent._mcCtrler.damping(0.5, 0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame114 = function () {
            var tz_mc = this.mc.parent._mcCtrler.fire("tzatm", { x: 15, y: 15, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame127 = function () {
            this.mc.parent._mcCtrler.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame143 = function () {
            this.mc.parent._mcCtrler.movePercent(1.7, 0);
            this.mc.parent._mcCtrler.dampingPercent(0.7, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame148 = function () {
            this.mc.parent._mcCtrler.setAttack("砍2");
            this.mc.parent._mcCtrler.setZhao1();
            this.mc.parent._mcCtrler.setBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame153 = function () {
            this.mc.parent._mcCtrler.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame157 = function () {
            this.mc.parent._mcCtrler.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame170 = function () {
            this.mc.parent._mcCtrler.movePercent(1, 0);
            this.mc.parent._mcCtrler.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame180 = function () {
            this.mc.parent._mcCtrler.setBishaSUPER();
            this.mc.parent._mcCtrler.setAttack("砍3");
            this.mc.parent._mcCtrler.setSkill2();
            this.mc.parent._mcCtrler.setSkill1();
            this.mc.parent._mcCtrler.setZhao2();
            this.mc.parent._mcCtrler.setBisha();
            this.mc.parent._mcCtrler.setDash();
            this.mc.parent._mcCtrler.setJump();
            return;
        }; // end function
        Timeline_1.prototype.frame186 = function () {
            this.mc.parent._mcCtrler.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame191 = function () {
            this.mc.parent._mcCtrler.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame217 = function () {
            this.mc.parent._mcCtrler.setSkill1();
            this.mc.parent._mcCtrler.setZhao3("招32");
            this.mc.parent._mcCtrler.setBishaUP();
            this.mc.parent._mcCtrler.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame224 = function () {
            this.mc.parent._mcCtrler.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame229 = function () {
            this.mc.parent._mcCtrler.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame247 = function () {
            if (this.mc.parent._mcCtrler.getAttacker("dog1")) {
                this.mc.parent._mcCtrler.idle();
            }
            return;
        }; // end function
        Timeline_1.prototype.frame252 = function () {
            this.mc.parent._mcCtrler.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame256 = function () {
            var dog1_mc = this.mc.parent._mcCtrler.addAttacker("dog1");
            if (!dog1_mc) {
                return;
            }
            var dog1 = new hero_kakashi.Timeline_7(this.mc.parent._mcCtrler.getAttacker("dog1", dog1_mc.hashCode));
            return;
        }; // end function
        Timeline_1.prototype.frame273 = function () {
            this.mc.parent._mcCtrler.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame284 = function () {
            this.mc.parent._mcCtrler.movePercent(3, 0);
            this.mc.parent._mcCtrler.setHitTarget("kj10atm", "砍技12");
            this.mc.parent._effectCtrl.shadow(50, 50, 255);
            this.mc.parent._effectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame290 = function () {
            this.mc.parent._mcCtrler.gotoAndPlay("砍技1_miss");
            return;
        }; // end function
        Timeline_1.prototype.frame291 = function () {
            this.mc.parent._mcCtrler.movePercent(2, 0);
            this.mc.parent._fighteCtrler.setCross(true);
            this.mc.parent._effectCtrl.shadow(50, 50, 255);
            return;
        }; // end function
        Timeline_1.prototype.frame296 = function () {
            this.mc.parent._mcCtrler.gotoAndPlay("砍技1_miss");
        };
        Timeline_1.prototype.frame297 = function () {
            this.mc.parent._fighteCtrler.setDirectToTarget();
            return;
        }; // end function
        Timeline_1.prototype.frame298 = function () {
            this.mc.parent._mcCtrler.dampingPercent(0.2, 0);
            this.mc.parent._fighteCtrler.setCross(false);
            return;
        }; // end function
        Timeline_1.prototype.frame305 = function () {
            this.mc.parent._mcCtrler.setZhao1("招12");
            this.mc.parent._mcCtrler.setBisha();
            this.mc.parent._effectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame316 = function () {
            this.mc.parent._mcCtrler.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame327 = function () {
            this.mc.parent._mcCtrler.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame328 = function () {
            this.mc.parent._mcCtrler.movePercent(2, 0);
            // this.mc.parent._mcCtrler.setHitTarget("kj20atm", "砍技21");
            return;
        }; // end function
        Timeline_1.prototype.frame334 = function () {
            this.mc.parent._mcCtrler.gotoAndPlay("砍技21");
        };
        Timeline_1.prototype.frame336 = function () {
            this.mc.parent._mcCtrler.dampingPercent(0.3, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame354 = function () {
            this.mc.parent._mcCtrler.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame372 = function () {
            this.mc.parent._mcCtrler.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame394 = function () {
            this.mc.parent._mcCtrler.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame399 = function () {
            this.mc.parent._mcCtrler.fire("zh1atm", { x: 20, y: 0, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame403 = function () {
            this.mc.parent._mcCtrler.fire("zh12atm", { x: 20, y: 0, hold: 2, hits: 1 });
            this.mc.parent._mcCtrler.gotoAndPlay("招12");
            return;
        }; // end function
        Timeline_1.prototype.frame407 = function () {
            this.mc.parent._mcCtrler.fire("zh14atm", { x: 20, y: 0, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame411 = function () {
            this.mc.parent._mcCtrler.fire("zh13atm", { x: 20, y: 0, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame420 = function () {
            this.mc.parent._mcCtrler.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame423 = function () {
            this.mc.parent._mcCtrler.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame450 = function () {
            this.mc.parent._mcCtrler.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame451 = function () {
            this.mc.parent._mcCtrler.movePercent(4, 0);
            this.mc.parent._mcCtrler.setHitTarget("zh20atm", "招21");
            this.mc.parent._effectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame467 = function () {
            this.mc.parent._mcCtrler.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame469 = function () {
            this.mc.parent._mcCtrler.dampingPercent(0.4, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame481 = function () {
            this.mc.parent._mcCtrler.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame527 = function () {
            this.mc.parent._effectCtrl.shine();
            this.mc.parent._effectCtrl.shine(0);
            return;
        }; // end function
        Timeline_1.prototype.frame531 = function () {
            this.mc.parent._mcCtrler.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame544 = function () {
            this.mc.parent._mcCtrler.setZhao3("招32");
            this.mc.parent._mcCtrler.setBishaUP();
            this.mc.parent._mcCtrler.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame555 = function () {
            this.mc.parent._mcCtrler.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame574 = function () {
            this.mc.parent._mcCtrler.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame582 = function () {
            this.mc.parent._effectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame583 = function () {
            this.mc.parent._mcCtrler.gotoAndPlay("招32");
            return;
        }; // end function
        Timeline_1.prototype.frame586 = function () {
            this.mc.parent._mcCtrler.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame588 = function () {
            var target = this.mc.parent._fighteCtrler.getTargetSP();
            var moveY = 50;
            if (target && !target.isInAir) {
                moveY = 0;
            }
            this.mc.parent._fighteCtrler.moveToTarget(50, moveY, true);
            this.mc.parent._effectCtrl.shine();
            this.mc.parent._mcCtrler.movePercent(0.5, -0.5);
            this.mc.parent._mcCtrler.dampingPercent(0.01, 0.01);
            this.mc.parent._effectCtrl.slowDown(0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame592 = function () {
            this.mc.parent._mcCtrler.movePercent(1, -1);
            this.mc.parent._mcCtrler.dampingPercent(0.02, 0.03);
            return;
        }; // end function
        Timeline_1.prototype.frame617 = function () {
            this.mc.parent._mcCtrler.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame631 = function () {
            this.mc.parent._mcCtrler.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame642 = function () {
            this.mc.parent._mcCtrler.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame659 = function () {
            this.mc.parent._mcCtrler.addQi(20);
            return;
        }; // end function
        Timeline_1.prototype.frame704 = function () {
            this.mc.parent._mcCtrler.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame718 = function () {
            this.mc.parent._effectCtrl.bisha(false, "卡卡西1");
            return;
        }; // end function
        Timeline_1.prototype.frame734 = function () {
            this.mc.parent._effectCtrl.endBisha();
            var shuilong_mc = this.mc.parent._mcCtrler.addAttacker("shuilong", { applyG: false });
            if (!shuilong_mc) {
                return;
            }
            var shuilong = new hero_kakashi.Timeline_10(this.mc.parent._mcCtrler.getAttacker("shuilong", shuilong_mc.hashCode));
            return;
        }; // end function
        Timeline_1.prototype.frame736 = function () {
            this.mc.parent._effectCtrl.shine(2676984);
            return;
        }; // end function
        Timeline_1.prototype.frame747 = function () {
            this.mc.parent._effectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame757 = function () {
            this.mc.parent._mcCtrler.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame771 = function () {
            this.mc.parent._mcCtrler.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame783 = function () {
            this.mc.parent._effectCtrl.bisha(false, "卡卡西2");
            return;
        }; // end function
        Timeline_1.prototype.frame819 = function () {
            this.mc.parent._effectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame820 = function () {
            this.mc.parent._mcCtrler.movePercent(3, 0);
            this.mc.parent._mcCtrler.setHitTarget("bs0atm", "必杀2");
            this.mc.parent._effectCtrl.shadow(50, 50, 255);
            this.mc.parent._effectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame834 = function () {
            this.mc.parent._mcCtrler.dampingPercent(0.3, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame845 = function () {
            this.mc.parent._mcCtrler.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame851 = function () {
            return;
        }; // end function
        Timeline_1.prototype.frame867 = function () {
            this.mc.parent._effectCtrl.shine(16777215);
            return;
        }; // end function
        Timeline_1.prototype.frame877 = function () {
            this.mc.parent._mcCtrler.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame891 = function () {
            this.mc.parent._mcCtrler.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame913 = function () {
            this.mc.parent._effectCtrl.bisha(true, "卡卡西3");
            return;
        }; // end function
        Timeline_1.prototype.frame933 = function () {
            this.mc.parent._effectCtrl.endBisha();
            this.mc.parent._effectCtrl.slowDown(0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame934 = function () {
            var shenwei_mc = this.mc.parent._mcCtrler.addAttacker("shenwei", { x: { followTarget: true, offset: 0 }, y: { followTarget: true, offset: -20 }, applyG: false });
            if (!shenwei_mc) {
                return;
            }
            var shenwei = new hero_kakashi.Timeline_11(this.mc.parent._mcCtrler.getAttacker("shenwei", shenwei_mc.hashCode));
            return;
        }; // end function
        Timeline_1.prototype.frame999 = function () {
            this.mc.parent._mcCtrler.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1210 = function () {
            this.mc.parent._mcCtrler.movePercent(0.8, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1214 = function () {
            this.mc.parent._mcCtrler.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame1215 = function () {
            this.mc.parent._mcCtrler.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1235 = function () {
            this.mc.parent._mcCtrler.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1310 = function () {
            this.mc.parent._mcCtrler.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1351 = function () {
            this.mc.parent._mcCtrler.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1379 = function () {
            this.mc.parent._mcCtrler.stop();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_kakashi.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_kakashi.Timeline_1");
})(hero_kakashi || (hero_kakashi = {}));
//# sourceMappingURL=Timeline_1.js.map