var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*主骨骼动画形态2对应的帧事件
*/
var hero_rukia;
(function (hero_rukia) {
    var Timeline_8 = (function () {
        function Timeline_8(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [11, this.frame12, 19, this.frame20, 26, this.frame27, 33, this.frame34, 44, this.frame45, 47, this.frame48, 77, this.frame78, 89, this.frame90, 94, this.frame95, 99, this.frame100, 111, this.frame112, 121, this.frame122, 137, this.frame138, 150, this.frame151, 159, this.frame160, 170, this.frame171, 181, this.frame182, 189, this.frame190, 196, this.frame197, 213, this.frame214, 221, this.frame222, 226, this.frame227, 248, this.frame249, 258, this.frame259, 264, this.frame265, 271, this.frame272, 292, this.frame293, 295, this.frame296, 307, this.frame308, 316, this.frame317, 323, this.frame324, 329, this.frame330, 348, this.frame349, 350, this.frame351, 355, this.frame356, 369, this.frame370, 375, this.frame376, 381, this.frame382, 391, this.frame392, 398, this.frame399, 415, this.frame416, 419, this.frame420, 434, this.frame435, 442, this.frame443, 448, this.frame449, 450, this.frame451, 455, this.frame456, 470, this.frame471, 484, this.frame485, 490, this.frame491, 495, this.frame496, 501, this.frame502, 516, this.frame517, 524, this.frame525, 536, this.frame537, 549, this.frame550, 569, this.frame570, 588, this.frame589, 632, this.frame633, 633, this.frame634, 639, this.frame640, 640, this.frame641, 655, this.frame656, 667, this.frame668, 678, this.frame679, 725, this.frame726, 733, this.frame734, 750, this.frame751, 766, this.frame767, 795, this.frame796, 862, this.frame863, 870, this.frame871, 871, this.frame872, 889, this.frame890, 905, this.frame906, 992, this.frame993, 996, this.frame997, 999, this.frame1000, 1015, this.frame1016, 1031, this.frame1032, 1079, this.frame1080, 1090, this.frame1091, 1131, this.frame1132, 1159, this.frame1160]);
        }
        Timeline_8.prototype.frame12 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_8.prototype.frame20 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_8.prototype.frame27 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_8.prototype.frame34 = function () {
            this.mc.parent._mcctrl.dash(2.5);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_8.prototype.frame45 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_8.prototype.frame48 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_8.prototype.frame78 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_8.prototype.frame90 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_8.prototype.frame95 = function () {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            this.mc.parent._mcctrl.setTouchFloor("落地", true);
            return;
        }; // end function
        Timeline_8.prototype.frame100 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_8.prototype.frame112 = function () {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.isApplyG(false);
            this.mc.parent._mcctrl.move(0, 1);
            return;
        }; // end function
        Timeline_8.prototype.frame122 = function () {
            this.mc.parent._mcctrl.fire("tzatm", { x: { start: 10, add: 1, max: 30 }, y: { start: 10, add: 1, max: 30 }, hold: 60, hits: 1, hp: 200 });
            this.mc.parent._mcctrl.isApplyG(true);
            this.mc.parent._mcctrl.move(-5, -5);
            this.mc.parent._mcctrl.damping(0.2, 0.2);
            this.mc.parent._EffectCtrl.shine(16711680);
            return;
        }; // end function
        Timeline_8.prototype.frame138 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_8.prototype.frame151 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_8.prototype.frame160 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_8.prototype.frame171 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_8.prototype.frame182 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_8.prototype.frame190 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }; // end function
        Timeline_8.prototype.frame197 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_8.prototype.frame214 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_8.prototype.frame222 = function () {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setAttack("砍4");
            return;
        }; // end function
        Timeline_8.prototype.frame227 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_8.prototype.frame249 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_8.prototype.frame259 = function () {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_8.prototype.frame265 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_8.prototype.frame272 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_8.prototype.frame293 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_8.prototype.frame296 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }; // end function
        Timeline_8.prototype.frame308 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_8.prototype.frame317 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            return;
        }; // end function
        Timeline_8.prototype.frame324 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_8.prototype.frame330 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_8.prototype.frame349 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_8.prototype.frame351 = function () {
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_8.prototype.frame356 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(50, 0, true);
            this.mc.parent._EffectCtrl.slowDown(0.3);
            return;
        }; // end function
        Timeline_8.prototype.frame370 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setSkill1();
            return;
        }; // end function
        Timeline_8.prototype.frame376 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_8.prototype.frame382 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_8.prototype.frame392 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_8.prototype.frame399 = function () {
            this.mc.parent._mcctrl.fire("zh1atm", { x: { start: 10, add: 1, max: 30 }, hits: 1, hp: 200 });
            this.mc.parent._EffectCtrl.shine(16711680);
            return;
        }; // end function
        Timeline_8.prototype.frame416 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_8.prototype.frame420 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_8.prototype.frame435 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_8.prototype.frame443 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            return;
        }; // end function
        Timeline_8.prototype.frame449 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_8.prototype.frame451 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_8.prototype.frame456 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_8.prototype.frame471 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_8.prototype.frame485 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_8.prototype.frame491 = function () {
            this.mc.parent._mcctrl.move(20, -20);
            return;
        }; // end function
        Timeline_8.prototype.frame496 = function () {
            this.mc.parent._mcctrl.damping(2, 2);
            return;
        }; // end function
        Timeline_8.prototype.frame502 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_8.prototype.frame517 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_8.prototype.frame525 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_8.prototype.frame537 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_8.prototype.frame550 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_8.prototype.frame570 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_8.prototype.frame589 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "bsface2");
            return;
        }; // end function
        Timeline_8.prototype.frame633 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_8.prototype.frame634 = function () {
            this.mc.parent._mcctrl.movePercent(-1, 0);
            return;
        }; // end function
        Timeline_8.prototype.frame640 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_8.prototype.frame641 = function () {
            this.mc.parent._EffectCtrl.shine(2679032);
            return;
        }; // end function
        Timeline_8.prototype.frame656 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_8.prototype.frame668 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_8.prototype.frame679 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "bsface2");
            return;
        }; // end function
        Timeline_8.prototype.frame726 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_8.prototype.frame734 = function () {
            this.mc.parent._EffectCtrl.shine(2679032);
            return;
        }; // end function
        Timeline_8.prototype.frame751 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_8.prototype.frame767 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_8.prototype.frame796 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "bsface2");
            return;
        }; // end function
        Timeline_8.prototype.frame863 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_8.prototype.frame871 = function () {
            this.mc.parent._EffectCtrl.shine(7393520);
            return;
        }; // end function
        Timeline_8.prototype.frame872 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_8.prototype.frame890 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_8.prototype.frame906 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_8.prototype.frame993 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }; // end function
        Timeline_8.prototype.frame997 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_8.prototype.frame1000 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_8.prototype.frame1016 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_8.prototype.frame1032 = function () {
            this.mc.parent._mcctrl.ClearState();
        };
        Timeline_8.prototype.frame1080 = function () {
            this.mc.parent._EffectCtrl.endWanKai();
            return;
        }; // end function
        Timeline_8.prototype.frame1091 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_8.prototype.frame1132 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_8.prototype.frame1160 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        return Timeline_8;
    }());
    hero_rukia.Timeline_8 = Timeline_8;
    __reflect(Timeline_8.prototype, "hero_rukia.Timeline_8");
})(hero_rukia || (hero_rukia = {}));
//# sourceMappingURL=Timeline_8.js.map