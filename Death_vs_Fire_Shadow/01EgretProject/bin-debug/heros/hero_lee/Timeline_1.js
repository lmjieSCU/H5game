var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*主骨骼动画形态1对应的帧事件
*/
var hero_lee;
(function (hero_lee) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [7, this.frame8, 11, this.frame12, 17, this.frame18, 22, this.frame23, 27, this.frame28, 34, this.frame35, 37, this.frame38, 67, this.frame68, 79, this.frame80, 82, this.frame83, 86, this.frame87, 96, this.frame97, 106, this.frame107, 109, this.frame110, 124, this.frame125, 128, this.frame129, 137, this.frame138, 149, this.frame150, 153, this.frame154, 159, this.frame160, 162, this.frame163, 172, this.frame173, 177, this.frame178, 183, this.frame184, 187, this.frame188, 201, this.frame202, 207, this.frame208, 214, this.frame215, 224, this.frame225, 231, this.frame232, 238, this.frame239, 246, this.frame247, 252, this.frame253, 266, this.frame267, 268, this.frame269, 279, this.frame280, 289, this.frame290, 302, this.frame303, 340, this.frame341, 350, this.frame351, 352, this.frame353, 387, this.frame388, 388, this.frame389, 401, this.frame402, 403, this.frame404, 411, this.frame412, 417, this.frame418, 418, this.frame419, 419, this.frame420, 422, this.frame423, 428, this.frame429, 429, this.frame430, 436, this.frame437, 447, this.frame448, 463, this.frame464, 464, this.frame465, 470, this.frame471, 471, this.frame472, 476, this.frame477, 485, this.frame486, 496, this.frame497, 508, this.frame509, 512, this.frame513, 523, this.frame524, 534, this.frame535, 538, this.frame539, 557, this.frame558, 578, this.frame579, 601, this.frame602, 604, this.frame605, 607, this.frame608, 625, this.frame626, 634, this.frame635, 638, this.frame639, 639, this.frame640, 640, this.frame641, 641, this.frame642, 642, this.frame643, 643, this.frame644, 652, this.frame653, 653, this.frame654, 660, this.frame661, 672, this.frame673, 673, this.frame674, 674, this.frame675, 695, this.frame696, 704, this.frame705, 720, this.frame721, 722, this.frame723, 738, this.frame739, 751, this.frame752, 771, this.frame772, 798, this.frame799, 806, this.frame807, 837, this.frame838, 839, this.frame840, 849, this.frame850, 852, this.frame853, 862, this.frame863, 871, this.frame872, 879, this.frame880, 890, this.frame891, 900, this.frame901, 909, this.frame910, 917, this.frame918, 933, this.frame934, 934, this.frame935, 939, this.frame940, 953, this.frame954, 1037, this.frame1038, 1063, this.frame1064, 1138, this.frame1139, 1179, this.frame1180, 1207, this.frame1208, 1219, this.frame1220, 1228, this.frame1229]);
        }
        Timeline_1.prototype.frame8 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame12 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame18 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame23 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_1.prototype.frame28 = function () {
            this.mc.parent._mcctrl.dash(2.5);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame35 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_1.prototype.frame38 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame68 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame80 = function () {
            this.mc.parent._mcctrl.move(10, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame83 = function () {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }; // end function
        Timeline_1.prototype.frame87 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame97 = function () {
            this.mc.parent._mcctrl.setHitTarget("tz0atm", "跳招3");
            this.mc.parent._mcctrl.movePercent(1, -1);
            this.mc.parent._mcctrl.dampingPercent(0, 0.1);
            this.mc.parent._mcctrl.setTouchFloor("跳招2", true);
            this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            this.mc.parent._mcctrl.gotoAndPlay("跳招loop");
            return;
        }; // end function
        Timeline_1.prototype.frame107 = function () {
            this.mc.parent._mcctrl.loop("跳招loop");
            return;
        }; // end function
        Timeline_1.prototype.frame110 = function () {
            // this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame125 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame129 = function () {
            this.mc.parent._mcctrl.movePercent(-0.5, -1);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0.05);
            this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame138 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame150 = function () {
            this.mc.parent._mcctrl.move(5, 0);
            this.mc.parent._mcctrl.damping(0.5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame154 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            return;
        }; // end function
        Timeline_1.prototype.frame160 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame163 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame173 = function () {
            this.mc.parent._mcctrl.move(10, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame178 = function () {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setSkill1();
            return;
        }; // end function
        Timeline_1.prototype.frame184 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame188 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame202 = function () {
            this.mc.parent._mcctrl.move(10, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame208 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setAttack("砍4");
            return;
        }; // end function
        Timeline_1.prototype.frame215 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame225 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame232 = function () {
            this.mc.parent._mcctrl.move(15, 0);
            this.mc.parent._mcctrl.damping(1.5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame239 = function () {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill2();
            return;
        }; // end function
        Timeline_1.prototype.frame247 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame253 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame267 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame269 = function () {
            if (this.mc.parent._FighterCtrler.targetInRange([0, 300])) {
                this.mc.parent._FighterCtrler.moveToTarget(-30, 0, false);
            }
            else {
                this.mc.parent._FighterCtrler.moveOnce(300, 0);
            }
            this.mc.parent._mcctrl.move(10, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame280 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setJump();
            return;
        }; // end function
        Timeline_1.prototype.frame290 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame303 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame341 = function () {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._mcctrl.move(10, -15);
            this.mc.parent._mcctrl.damping(0.5, 1);
            this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame351 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame353 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame388 = function () {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame389 = function () {
            this.mc.parent._mcctrl.move(20, 0);
            this.mc.parent._mcctrl.damping(0.5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame402 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame404 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame412 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame418 = function () {
            this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame419 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame420 = function () {
            this.mc.parent._mcctrl.move(10, -10);
            this.mc.parent._mcctrl.damping(0, 1);
            return;
        }; // end function
        Timeline_1.prototype.frame423 = function () {
            this.mc.parent._mcctrl.setTouchFloor("招23", true);
            this.mc.parent._mcctrl.gotoAndPlay("招2_loop");
            return;
        }; // end function
        Timeline_1.prototype.frame429 = function () {
            // this.mc.parent._mcctrl.loop("招2_loop");
            return;
        }; // end function
        Timeline_1.prototype.frame430 = function () {
            this.mc.parent._EffectCtrl.shake(0, 3);
            return;
        }; // end function
        Timeline_1.prototype.frame437 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame448 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame464 = function () {
            this.mc.parent._mcctrl.move(10, 0);
            this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame465 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame471 = function () {
            this.mc.parent._mcctrl.damping(1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame472 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame477 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_1.prototype.frame486 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame497 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame509 = function () {
            this.mc.parent._mcctrl.addQi(15);
            return;
        }; // end function
        Timeline_1.prototype.frame513 = function () {
            this.mc.parent._mcctrl.movePercent(0.3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.03, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame524 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame535 = function () {
            this.mc.parent._mcctrl.addQi(30);
            return;
        }; // end function
        Timeline_1.prototype.frame539 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame558 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame579 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "小李1");
            return;
        }; // end function
        Timeline_1.prototype.frame602 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame605 = function () {
            if (this.mc.parent._FighterCtrler.targetInRange([0, 500])) {
                this.mc.parent._FighterCtrler.moveToTarget(-20, null, false);
            }
            else {
                this.mc.parent._FighterCtrler.moveOnce(500, 0);
            }
            return;
        }; // end function
        Timeline_1.prototype.frame608 = function () {
            this.mc.parent._EffectCtrl.shine(14917603);
            return;
        }; // end function
        Timeline_1.prototype.frame626 = function () {
            this.mc.parent._mcctrl.justHitToPlay("bs", "必杀1", false);
            return;
        }; // end function
        Timeline_1.prototype.frame635 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame639 = function () {
            this.mc.parent._EffectCtrl.slowDown(1);
            return;
        }; // end function
        Timeline_1.prototype.frame640 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame641 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            return;
        }; // end function
        Timeline_1.prototype.frame642 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            return;
        }; // end function
        Timeline_1.prototype.frame643 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            return;
        }; // end function
        Timeline_1.prototype.frame644 = function () {
            if (this.mc.parent._FighterCtrler.target) {
                this.mc.parent._FighterCtrler.target.visible = false;
            }
            this.mc.parent._mcctrl.moveTarget({ followmc: "move_mc" });
            this.mc.parent._mcctrl.move(0, 10);
            return;
        }; // end function
        Timeline_1.prototype.frame653 = function () {
            this.mc.parent._mcctrl.setTouchFloor("必杀2", true);
            this.mc.parent._mcctrl.gotoAndPlay("必杀LOOP");
            return;
        }; // end function
        Timeline_1.prototype.frame654 = function () {
            this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame661 = function () {
            // this.mc.parent._mcctrl.gotoAndPlay("必杀LOOP");
            return;
        }; // end function
        Timeline_1.prototype.frame673 = function () {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._mcctrl.moveTarget(null);
            this.mc.parent._EffectCtrl.endShadow();
            this.mc.parent._EffectCtrl.shake(0, 5);
            this.mc.parent._EffectCtrl.shine(16777215);
            return;
        }; // end function
        Timeline_1.prototype.frame674 = function () {
            if (this.mc.parent._FighterCtrler.target) {
                this.mc.parent._FighterCtrler.target.visible = true;
            }
            return;
        }; // end function
        Timeline_1.prototype.frame675 = function () {
            if (this.mc.parent._FighterCtrler.hp > 300) {
                this.mc.parent._FighterCtrler.loseHp(100);
            }
            this.mc.parent._EffectCtrl.shine(16718656);
            return;
        }; // end function
        Timeline_1.prototype.frame696 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame705 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "小李1");
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }; // end function
        Timeline_1.prototype.frame721 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame723 = function () {
            this.mc.parent._mcctrl.move(0, 20);
            this.mc.parent._mcctrl.setTouchFloor("空中必杀2", true);
            this.mc.parent._mcctrl.gotoAndPlay("空中必杀1");
            return;
        }; // end function
        Timeline_1.prototype.frame739 = function () {
            // this.mc.parent._mcctrl.loop("空中必杀1");
            return;
        }; // end function
        Timeline_1.prototype.frame752 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame772 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame799 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "小李2");
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }; // end function
        Timeline_1.prototype.frame807 = function () {
            if (this.mc.parent._FighterCtrler.hp > 300) {
                this.mc.parent._FighterCtrler.loseHp(200);
            }
            return;
        }; // end function
        Timeline_1.prototype.frame838 = function () {
            this.mc.parent._EffectCtrl.shine(14917603);
            return;
        }; // end function
        Timeline_1.prototype.frame840 = function () {
            this.mc.parent._EffectCtrl.endShake();
            return;
        }; // end function
        Timeline_1.prototype.frame850 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame853 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            this.mc.parent._mcctrl.move(15, -0.1);
            return;
        }; // end function
        Timeline_1.prototype.frame863 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            this.mc.parent._mcctrl.move(15, -15);
            return;
        }; // end function
        Timeline_1.prototype.frame872 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            this.mc.parent._mcctrl.move(-15, -0.1);
            return;
        }; // end function
        Timeline_1.prototype.frame880 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            this.mc.parent._mcctrl.move(-15, -15);
            return;
        }; // end function
        Timeline_1.prototype.frame891 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            this.mc.parent._mcctrl.move(15, -0.1);
            return;
        }; // end function
        Timeline_1.prototype.frame901 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            this.mc.parent._mcctrl.move(15, -15);
            return;
        }; // end function
        Timeline_1.prototype.frame910 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            this.mc.parent._mcctrl.move(-15, -0.1);
            return;
        }; // end function
        Timeline_1.prototype.frame918 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            this.mc.parent._mcctrl.move(-15, -15);
            return;
        }; // end function
        Timeline_1.prototype.frame934 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            this.mc.parent._mcctrl.move(0, 20);
            return;
        }; // end function
        Timeline_1.prototype.frame935 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            return;
        }; // end function
        Timeline_1.prototype.frame940 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame954 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1038 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1064 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1139 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1180 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1208 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1220 = function () {
            this.mc.parent._EffectCtrl.startWanKai("小李2");
            return;
        }; // end function
        Timeline_1.prototype.frame1229 = function () {
            this.mc.parent._FighterCtrler.doWanKai();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_lee.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_lee.Timeline_1");
})(hero_lee || (hero_lee = {}));
//# sourceMappingURL=Timeline_1.js.map