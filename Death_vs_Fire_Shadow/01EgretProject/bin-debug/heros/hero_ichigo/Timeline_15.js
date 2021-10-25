var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*ichigo主骨骼形态2动画对应的帧事件
*/
var hero_ichigo;
(function (hero_ichigo) {
    var Timeline_15 = (function () {
        function Timeline_15(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [10, this.frame11, 14, this.frame15, 17, this.frame18, 35, this.frame36, 44, this.frame45, 49, this.frame50, 85, this.frame86, 93, this.frame94, 100, this.frame101, 104, this.frame105, 110, this.frame111, 113, this.frame114, 120, this.frame121, 124, this.frame125, 129, this.frame130, 138, this.frame139, 145, this.frame146, 150, this.frame151, 156, this.frame157, 162, this.frame163, 167, this.frame168, 169, this.frame170, 176, this.frame177, 179, this.frame180, 182, this.frame183, 183, this.frame184, 190, this.frame191, 200, this.frame201, 204, this.frame205, 213, this.frame214, 214, this.frame215, 218, this.frame219, 231, this.frame232, 238, this.frame239, 239, this.frame240, 240, this.frame241, 247, this.frame248, 256, this.frame257, 262, this.frame263, 274, this.frame275, 275, this.frame276, 287, this.frame288, 289, this.frame290, 290, this.frame291, 297, this.frame298, 306, this.frame307, 316, this.frame317, 321, this.frame322, 324, this.frame325, 329, this.frame330, 341, this.frame342, 396, this.frame397, 402, this.frame403, 411, this.frame412, 412, this.frame413, 413, this.frame414, 421, this.frame422, 429, this.frame430, 433, this.frame434, 444, this.frame445, 458, this.frame459, 462, this.frame463, 467, this.frame468, 474, this.frame475, 483, this.frame484, 503, this.frame504, 516, this.frame517, 519, this.frame520, 520, this.frame521, 526, this.frame527, 537, this.frame538, 549, this.frame550, 571, this.frame572, 580, this.frame581, 581, this.frame582, 584, this.frame585, 589, this.frame590, 590, this.frame591, 595, this.frame596, 609, this.frame610, 620, this.frame621, 629, this.frame630, 640, this.frame641, 654, this.frame655, 667, this.frame668, 676, this.frame677, 688, this.frame689, 690, this.frame691, 692, this.frame693, 693, this.frame694, 721, this.frame722, 723, this.frame724, 746, this.frame747, 804, this.frame805, 846, this.frame847, 857, this.frame858, 867, this.frame868, 880, this.frame881, 906, this.frame907, 927, this.frame928, 938, this.frame939, 979, this.frame980, 1023, this.frame1024, 1031, this.frame1032, 1045, this.frame1046]);
        }
        Timeline_15.prototype.frame11 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_15.prototype.frame15 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_15.prototype.frame18 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_15.prototype.frame36 = function () {
            this.mc.parent._mcctrl.dash(2.3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_15.prototype.frame45 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_15.prototype.frame50 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_15.prototype.frame86 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_15.prototype.frame94 = function () {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }; // end function
        Timeline_15.prototype.frame101 = function () {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            return;
        }; // end function
        Timeline_15.prototype.frame105 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_15.prototype.frame111 = function () {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.move(0, 16);
            this.mc.parent._mcctrl.setTouchFloor("跳招2", true);
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            return;
        }; // end function
        Timeline_15.prototype.frame114 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("跳招loop");
        };
        Timeline_15.prototype.frame121 = function () {
            this.mc.parent._mcctrl.loop("跳招loop");
            return;
        }; // end function
        Timeline_15.prototype.frame125 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_15.prototype.frame130 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_15.prototype.frame139 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_15.prototype.frame146 = function () {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }; // end function
        Timeline_15.prototype.frame151 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_15.prototype.frame157 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_15.prototype.frame163 = function () {
            this.mc.parent._mcctrl.movePercent(0.3, 0);
            return;
        }; // end function
        Timeline_15.prototype.frame168 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.03, 0);
            return;
        }; // end function
        Timeline_15.prototype.frame170 = function () {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setBishaSUPER();
            return;
        }; // end function
        Timeline_15.prototype.frame177 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_15.prototype.frame180 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_15.prototype.frame183 = function () {
            return;
        }; // end function
        Timeline_15.prototype.frame184 = function () {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            this.mc.parent._mcctrl.dampingPercent(0.02, 0);
            this.mc.parent._EffectCtrl.shine(0);
            return;
        }; // end function
        Timeline_15.prototype.frame191 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_15.prototype.frame201 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_15.prototype.frame205 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_15.prototype.frame214 = function () {
            this.mc.parent._EffectCtrl.shake(0, 3);
            return;
        }; // end function
        Timeline_15.prototype.frame215 = function () {
            this.mc.parent._EffectCtrl.shine(1183014);
            return;
        }; // end function
        Timeline_15.prototype.frame219 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_15.prototype.frame232 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_15.prototype.frame239 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_15.prototype.frame240 = function () {
            this.mc.parent._mcctrl.move(0, -20);
            return;
        }; // end function
        Timeline_15.prototype.frame241 = function () {
            this.mc.parent._EffectCtrl.shine(658063);
            return;
        }; // end function
        Timeline_15.prototype.frame248 = function () {
            this.mc.parent._mcctrl.damping(0, 2.5);
            return;
        }; // end function
        Timeline_15.prototype.frame257 = function () {
            this.mc.parent._mcctrl.setZhao1("跳招");
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            return;
        }; // end function
        Timeline_15.prototype.frame263 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_15.prototype.frame275 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_15.prototype.frame276 = function () {
            this.mc.parent._mcctrl.setHitTarget("zh10atm", "招12");
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            return;
        }; // end function
        Timeline_15.prototype.frame288 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("招12");
        };
        Timeline_15.prototype.frame290 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.5, 0);
            return;
        }; // end function
        Timeline_15.prototype.frame291 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_15.prototype.frame298 = function () {
            this.mc.parent._mcctrl.setAttack("砍1");
            return;
        }; // end function
        Timeline_15.prototype.frame307 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_15.prototype.frame317 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_15.prototype.frame322 = function () {
            this.mc.parent._mcctrl.movePercent(6.5, 0);
            this.mc.parent._EffectCtrl.shine(1183014);
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_15.prototype.frame325 = function () {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._mcctrl.dampingPercent(2, 0);
            return;
        }; // end function
        Timeline_15.prototype.frame330 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_15.prototype.frame342 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_15.prototype.frame397 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_15.prototype.frame403 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, -1.5);
            this.mc.parent._mcctrl.isApplyG(false);
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            this.mc.parent._EffectCtrl.shine(0);
            return;
        }; // end function
        Timeline_15.prototype.frame412 = function () {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_15.prototype.frame413 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_15.prototype.frame414 = function () {
            this.mc.parent._mcctrl.setAttackAIR();
            return;
        }; // end function
        Timeline_15.prototype.frame422 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_15.prototype.frame430 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_15.prototype.frame434 = function () {
            this.mc.parent._mcctrl.movePercent(1);
            this.mc.parent._mcctrl.dampingPercent(0.2);
            return;
        }; // end function
        Timeline_15.prototype.frame445 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_15.prototype.frame459 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_15.prototype.frame463 = function () {
            this.mc.parent._mcctrl.movePercent(4, 0);
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            return;
        }; // end function
        Timeline_15.prototype.frame468 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.5);
            return;
        }; // end function
        Timeline_15.prototype.frame475 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_15.prototype.frame484 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_15.prototype.frame504 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "一户1");
            return;
        }; // end function
        Timeline_15.prototype.frame517 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_15.prototype.frame520 = function () {
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            return;
        }; // end function
        Timeline_15.prototype.frame521 = function () {
            this.mc.parent._EffectCtrl.shine(1183014);
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_15.prototype.frame527 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_15.prototype.frame538 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_15.prototype.frame550 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_15.prototype.frame572 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "一户2");
            return;
        }; // end function
        Timeline_15.prototype.frame581 = function () {
            this.mc.parent._mcctrl.isApplyG(false);
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_15.prototype.frame582 = function () {
            this.mc.parent._mcctrl.movePercent(1, -1);
            return;
        }; // end function
        Timeline_15.prototype.frame585 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_15.prototype.frame590 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_15.prototype.frame591 = function () {
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            return;
        }; // end function
        Timeline_15.prototype.frame596 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_15.prototype.frame610 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_15.prototype.frame621 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_15.prototype.frame630 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_15.prototype.frame641 = function () {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_15.prototype.frame655 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_15.prototype.frame668 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "一户万解1");
            return;
        }; // end function
        Timeline_15.prototype.frame677 = function () {
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }; // end function
        Timeline_15.prototype.frame689 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_15.prototype.frame691 = function () {
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            return;
        }; // end function
        Timeline_15.prototype.frame693 = function () {
            this.mc.parent._EffectCtrl.shine(1183014);
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_15.prototype.frame694 = function () {
            this.mc.parent._EffectCtrl.endShake();
            return;
        }; // end function
        Timeline_15.prototype.frame722 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_15.prototype.frame724 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_15.prototype.frame747 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_15.prototype.frame805 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_15.prototype.frame847 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_15.prototype.frame858 = function () {
            // _root._y = 0;
            return;
        }; // end function
        Timeline_15.prototype.frame868 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_15.prototype.frame881 = function () {
            this.mc.parent._mcctrl.ClearState();
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }; // end function
        Timeline_15.prototype.frame907 = function () {
            this.mc.parent._EffectCtrl.endShake();
            return;
        }; // end function
        Timeline_15.prototype.frame928 = function () {
            this.mc.parent._EffectCtrl.endWanKai();
            return;
        }; // end function
        Timeline_15.prototype.frame939 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_15.prototype.frame980 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_15.prototype.frame1024 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_15.prototype.frame1032 = function () {
            this.mc.parent._EffectCtrl.startWanKai("虚护1");
            return;
        }; // end function
        Timeline_15.prototype.frame1046 = function () {
            this.mc.parent._FighterCtrler.doWanKai();
            return;
        }; // end function
        return Timeline_15;
    }());
    hero_ichigo.Timeline_15 = Timeline_15;
    __reflect(Timeline_15.prototype, "hero_ichigo.Timeline_15");
})(hero_ichigo || (hero_ichigo = {}));
//# sourceMappingURL=Timeline_15.js.map