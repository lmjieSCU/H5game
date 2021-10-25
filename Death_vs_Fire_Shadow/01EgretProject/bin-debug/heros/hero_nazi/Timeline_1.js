var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*nazi主骨骼动画对应的帧事件
*/
var hero_nazi;
(function (hero_nazi) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [9, this.frame10, 18, this.frame19, 27, this.frame28, 34, this.frame35, 43, this.frame44, 48, this.frame49, 78, this.frame79, 150, this.frame151, 155, this.frame156, 175, this.frame176, 248, this.frame249, 289, this.frame290, 317, this.frame318, 327, this.frame328, 333, this.frame334, 339, this.frame340, 360, this.frame361, 368, this.frame369, 375, this.frame376, 376, this.frame377, 394, this.frame395, 403, this.frame404, 407, this.frame408, 409, this.frame410, 418, this.frame419, 432, this.frame433, 436, this.frame437, 438, this.frame439, 445, this.frame446, 455, this.frame456, 463, this.frame464, 474, this.frame475, 484, this.frame485, 488, this.frame489, 491, this.frame492, 504, this.frame505, 520, this.frame521, 536, this.frame537, 537, this.frame538, 545, this.frame546, 558, this.frame559, 573, this.frame574, 572, this.frame573, 574, this.frame575, 577, this.frame578, 581, this.frame582, 596, this.frame597, 603, this.frame604, 616, this.frame617, 625, this.frame626, 636, this.frame637, 649, this.frame650, 660, this.frame661, 671, this.frame672, 679, this.frame680, 706, this.frame707, 764, this.frame765, 769, this.frame770, 773, this.frame774, 774, this.frame775, 795, this.frame796, 824, this.frame825, 853, this.frame854, 906, this.frame907, 916, this.frame917, 946, this.frame947, 948, this.frame949, 972, this.frame973, 988, this.frame989, 1007, this.frame1008, 1068, this.frame1069, 1073, this.frame1074, 1112, this.frame1113, 1118, this.frame1119, 1134, this.frame1135, 1158, this.frame1159, 1170, this.frame1171]);
        }
        Timeline_1.prototype.frame10 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame19 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame28 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_1.prototype.frame35 = function () {
            this.mc.parent._mcctrl.dash(2.5);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame44 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_1.prototype.frame49 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame79 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame151 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame156 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame176 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame249 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame290 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame318 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame328 = function () {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }; // end function
        Timeline_1.prototype.frame334 = function () {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }; // end function
        Timeline_1.prototype.frame340 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame361 = function () {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.isApplyG(true);
            this.mc.parent._mcctrl.setTouchFloor("跳招3", true);
            return;
        }; // end function
        Timeline_1.prototype.frame369 = function () {
            this.mc.parent._mcctrl.movePercent(0, 1.5);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame376 = function () {
            this.mc.parent._mcctrl.loop("跳招2");
            return;
        }; // end function
        Timeline_1.prototype.frame377 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame395 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame404 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame408 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame410 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao3();
            return;
        }; // end function
        Timeline_1.prototype.frame419 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame433 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame437 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame439 = function () {
            this.mc.parent._mcctrl.setSkill1("砍技11");
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }; // end function
        Timeline_1.prototype.frame446 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame456 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame464 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill2("砍技2");
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame475 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame485 = function () {
            this.mc.parent._mcctrl.movePercent(1.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame489 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame492 = function () {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setSkill2("砍技2");
            return;
        }; // end function
        Timeline_1.prototype.frame505 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame521 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame537 = function () {
            this.mc.parent._mcctrl.movePercent(3.3, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame538 = function () {
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame546 = function () {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame559 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame574 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame573 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("砍技11");
            return;
        }; // end function
        Timeline_1.prototype.frame575 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame578 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame582 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill2("砍技12");
            this.mc.parent._mcctrl.setAttack("砍技12");
            this.mc.parent._mcctrl.setZhao3("招31");
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame597 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame604 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame617 = function () {
            this.mc.parent._mcctrl.setBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame626 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame637 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame650 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setJump();
            return;
        }; // end function
        Timeline_1.prototype.frame661 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame672 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame680 = function () {
            this.mc.parent._mcctrl.fire("zh1atm", { x: { start: 15, hit: 3 }, y: 0, hold: 1, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame707 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame765 = function () {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.move(8, -10);
            this.mc.parent._mcctrl.damping(0, 1);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame770 = function () {
            this.mc.parent._mcctrl.setTouchFloor("招32", true);
            return;
        }; // end function
        Timeline_1.prototype.frame774 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame775 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame796 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame825 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "纳兹1");
            return;
        }; // end function
        Timeline_1.prototype.frame854 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame907 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame917 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "纳兹1");
            return;
        }; // end function
        Timeline_1.prototype.frame947 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame949 = function () {
            this.mc.parent._mcctrl.move(0, -10);
            return;
        }; // end function
        Timeline_1.prototype.frame973 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame989 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1008 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "纳兹2");
            return;
        }; // end function
        Timeline_1.prototype.frame1069 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1074 = function () {
            this.mc.parent._mcctrl.movePercent(0.8, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1113 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1119 = function () {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame1135 = function () {
            this.mc.parent._mcctrl.move(0, -10);
            return;
        }; // end function
        Timeline_1.prototype.frame1159 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame1171 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_nazi.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_nazi.Timeline_1");
})(hero_nazi || (hero_nazi = {}));
//# sourceMappingURL=Timeline_1.js.map