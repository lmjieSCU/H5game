var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*主骨骼动画形态1对应的帧事件
*/
var hero_sakura;
(function (hero_sakura) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [13, this.frame14, 21, this.frame22, 23, this.frame24, 28, this.frame29, 39, this.frame40, 42, this.frame43, 73, this.frame74, 79, this.frame80, 86, this.frame87, 91, this.frame92, 114, this.frame115, 119, this.frame120, 127, this.frame128, 129, this.frame130, 147, this.frame148, 159, this.frame160, 163, this.frame164, 169, this.frame170, 172, this.frame173, 181, this.frame182, 187, this.frame188, 193, this.frame194, 197, this.frame198, 215, this.frame216, 224, this.frame225, 235, this.frame236, 242, this.frame243, 262, this.frame263, 271, this.frame272, 283, this.frame284, 291, this.frame292, 309, this.frame310, 312, this.frame313, 328, this.frame329, 335, this.frame336, 341, this.frame342, 346, this.frame347, 358, this.frame359, 359, this.frame360, 366, this.frame367, 376, this.frame377, 379, this.frame380, 390, this.frame391, 395, this.frame396, 411, this.frame412, 420, this.frame421, 422, this.frame423, 428, this.frame429, 435, this.frame436, 465, this.frame466, 474, this.frame475, 491, this.frame492, 498, this.frame499, 511, this.frame512, 526, this.frame527, 544, this.frame545, 559, this.frame560, 582, this.frame583, 587, this.frame588, 592, this.frame593, 599, this.frame600, 602, this.frame603, 604, this.frame605, 615, this.frame616, 631, this.frame632, 639, this.frame640, 658, this.frame659, 662, this.frame663, 663, this.frame664, 664, this.frame665, 665, this.frame666, 666, this.frame667, 668, this.frame669, 675, this.frame676, 676, this.frame677, 677, this.frame678, 678, this.frame679, 693, this.frame694, 712, this.frame713, 724, this.frame725, 725, this.frame726, 732, this.frame733, 733, this.frame734, 734, this.frame735, 735, this.frame736, 741, this.frame742, 750, this.frame751, 766, this.frame767, 787, this.frame788, 788, this.frame789, 801, this.frame802, 802, this.frame803, 820, this.frame821, 865, this.frame866, 874, this.frame875, 894, this.frame895, 981, this.frame982, 1002, this.frame1003, 1077, this.frame1078, 1118, this.frame1119, 1146, this.frame1147
            ]);
        }
        Timeline_1.prototype.frame14 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame22 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame24 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_1.prototype.frame29 = function () {
            this.mc.parent._mcctrl.dash(3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(150, 0, 150);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame40 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_1.prototype.frame43 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame74 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame80 = function () {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }; // end function
        Timeline_1.prototype.frame87 = function () {
            this.mc.parent._mcctrl.setSkillAIR();
            this.mc.parent._mcctrl.setBishaAIR();
            return;
        }; // end function
        Timeline_1.prototype.frame92 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame115 = function () {
            this.mc.parent._mcctrl.movePercent(0, -1);
            this.mc.parent._EffectCtrl.shadow(150, 0, 150);
            return;
        }; // end function
        Timeline_1.prototype.frame120 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, 2);
            this.mc.parent._mcctrl.setTouchFloor("跳招3", true);
            //
            this.mc.parent._mcctrl.gotoAndPlay("跳招2");
            return;
        }; // end function
        Timeline_1.prototype.frame128 = function () {
            this.mc.parent._mcctrl.loop("跳招2");
            return;
        }; // end function
        Timeline_1.prototype.frame130 = function () {
            this.mc.parent._EffectCtrl.shake(0, 3);
            this.mc.parent._EffectCtrl.endShadow();
            this.mc.parent._EffectCtrl.shake(0, 3);
            return;
        }; // end function
        Timeline_1.prototype.frame148 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame160 = function () {
            this.mc.parent._mcctrl.movePercent(0.8, 0);
            this.mc.parent._mcctrl.dampingPercent(0.08, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame164 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_1.prototype.frame170 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame173 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame182 = function () {
            this.mc.parent._mcctrl.movePercent(1.2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame188 = function () {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }; // end function
        Timeline_1.prototype.frame194 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame198 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame216 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame225 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame236 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame243 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame263 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame272 = function () {
            var shuilong_mc = this.mc.parent._mcctrl.addAttacker("stone");
            if (!shuilong_mc) {
                return;
            }
            var shuilong = new hero_sakura.Timeline_6(this.mc.parent._mcctrl.getAttacker("stone", shuilong_mc.hashCode));
            return;
        }; // end function
        Timeline_1.prototype.frame284 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame292 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame310 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame313 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._EffectCtrl.shadow(150, 0, 150);
            return;
        }; // end function
        Timeline_1.prototype.frame329 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, -2);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0.1);
            return;
        }; // end function
        Timeline_1.prototype.frame336 = function () {
            this.mc.parent._mcctrl.setBishaAIR();
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }; // end function
        Timeline_1.prototype.frame342 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame347 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame359 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame360 = function () {
            this.mc.parent._mcctrl.movePercent(-2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.shadow(150, 0, 150);
            return;
        }; // end function
        Timeline_1.prototype.frame367 = function () {
            this.mc.parent._mcctrl.fire("zh1atm", { x: { start: 15, hit: 3 }, y: 0, hold: 2, hits: 1, hp: 30 });
            return;
        }; // end function
        Timeline_1.prototype.frame377 = function () {
            this.mc.parent._mcctrl.fire("zh1atm", { x: { start: 15, hit: 3 }, y: 0, hold: 2, hits: 3, hp: 70 });
            return;
        }; // end function
        Timeline_1.prototype.frame380 = function () {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame391 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame396 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame412 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame421 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.3, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame423 = function () {
            this.mc.parent._EffectCtrl.shake(0, 5);
            return;
        }; // end function
        Timeline_1.prototype.frame429 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame436 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame466 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame475 = function () {
            this.mc.parent._mcctrl.fire("zh3atm", { x: 20, y: -20, hold: 2, hits: 1 });
            this.mc.parent._mcctrl.fire("zh31atm", { x: 15, y: -25, hold: 2, hits: 1 });
            this.mc.parent._mcctrl.fire("zh32atm", { x: 25, y: -15, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame492 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame499 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame512 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame527 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_1.prototype.frame545 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame560 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "樱1");
            return;
        }; // end function
        Timeline_1.prototype.frame583 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame588 = function () {
            this.mc.parent._mcctrl.setHitTarget("bs10atm", "必杀2");
            this.mc.parent._mcctrl.movePercent(3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame593 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame600 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame603 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame605 = function () {
            this.mc.parent._EffectCtrl.shine(16718656);
            return;
        }; // end function
        Timeline_1.prototype.frame616 = function () {
            this.mc.parent._mcctrl.movePercent(-2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame632 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame640 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "樱1");
            return;
        }; // end function
        Timeline_1.prototype.frame659 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._mcctrl.movePercent(5, 0);
            this.mc.parent._EffectCtrl.shadow(150, 0, 150);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame663 = function () {
            this.mc.parent._mcctrl.move(0, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame664 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(0, -80, false);
            return;
        }; // end function
        Timeline_1.prototype.frame665 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(0, -80, false);
            return;
        }; // end function
        Timeline_1.prototype.frame666 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(0, -80, false);
            return;
        }; // end function
        Timeline_1.prototype.frame667 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(0, -80, false);
            return;
        }; // end function
        Timeline_1.prototype.frame669 = function () {
            this.mc.parent._mcctrl.movePercent(0, 1.5);
            this.mc.parent._mcctrl.setTouchFloor("上必杀2", true);
            return;
        }; // end function
        Timeline_1.prototype.frame676 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame677 = function () {
            this.mc.parent._EffectCtrl.shake(0, 5);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame678 = function () {
            this.mc.parent._EffectCtrl.shine(12591104);
            return;
        }; // end function
        Timeline_1.prototype.frame679 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame694 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame713 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "樱1");
            return;
        }; // end function
        Timeline_1.prototype.frame725 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame726 = function () {
            this.mc.parent._mcctrl.movePercent(0, 1.5);
            this.mc.parent._mcctrl.setTouchFloor("空中必杀2", true);
            this.mc.parent._EffectCtrl.shadow(150, 0, 150);
            return;
        }; // end function
        Timeline_1.prototype.frame733 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame734 = function () {
            this.mc.parent._EffectCtrl.shake(0, 5);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame735 = function () {
            this.mc.parent._EffectCtrl.shine(12591104);
            return;
        }; // end function
        Timeline_1.prototype.frame736 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame742 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame751 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame767 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "樱2");
            return;
        }; // end function
        Timeline_1.prototype.frame788 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame789 = function () {
            this.mc.parent._mcctrl.setHitTarget("cbs0atm", "超必杀1");
            this.mc.parent._mcctrl.movePercent(5, 0);
            this.mc.parent._EffectCtrl.shadow(150, 0, 150);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame802 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame803 = function () {
            this.mc.parent._EffectCtrl.shadow(150, 0, 150);
            return;
        }; // end function
        Timeline_1.prototype.frame821 = function () {
            this.mc.parent._EffectCtrl.shine(14917603);
            return;
        }; // end function
        Timeline_1.prototype.frame866 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame875 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame895 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame982 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1003 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1078 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1119 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1147 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_sakura.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_sakura.Timeline_1");
})(hero_sakura || (hero_sakura = {}));
//# sourceMappingURL=Timeline_1.js.map