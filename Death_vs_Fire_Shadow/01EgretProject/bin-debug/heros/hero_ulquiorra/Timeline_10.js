var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*主骨骼动画形态2对应的帧事件
*/
var hero_ulquiorra;
(function (hero_ulquiorra) {
    var Timeline_10 = (function () {
        function Timeline_10(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [
                9, this.frame10, 19, this.frame20, 27, this.frame28, 32, this.frame33, 35, this.frame36, 65, this.frame66, 79, this.frame80, 86, this.frame87, 90, this.frame91, 95, this.frame96, 96, this.frame97, 99, this.frame100, 104, this.frame105, 114, this.frame115, 122, this.frame123, 125, this.frame126, 130, this.frame131, 134, this.frame135, 137, this.frame138, 142, this.frame143, 148, this.frame149, 151, this.frame152, 153, this.frame154, 162, this.frame163, 169, this.frame170, 173, this.frame174, 180, this.frame181, 204, this.frame205, 208, this.frame209, 229, this.frame230, 239, this.frame240, 246, this.frame247, 249, this.frame250, 251, this.frame252, 272, this.frame273, 279, this.frame280, 280, this.frame281, 290, this.frame291, 297, this.frame298, 305, this.frame306, 307, this.frame308, 313, this.frame314, 327, this.frame328, 349, this.frame350, 350, this.frame351, 354, this.frame355, 357, this.frame358, 364, this.frame365, 370, this.frame371, 377, this.frame378, 392, this.frame393, 393, this.frame394, 397, this.frame398, 407, this.frame408, 413, this.frame414, 420, this.frame421, 431, this.frame432, 435, this.frame436, 439, this.frame440, 452, this.frame453, 463, this.frame464, 505, this.frame506, 509, this.frame510, 526, this.frame527, 565, this.frame566, 579, this.frame580, 596, this.frame597, 622, this.frame623, 643, this.frame644, 645, this.frame646, 647, this.frame648, 652, this.frame653, 656, this.frame657, 687, this.frame688, 716, this.frame717, 738, this.frame739, 741, this.frame742, 772, this.frame773, 793, this.frame794, 881, this.frame882, 907, this.frame908, 920, this.frame921, 923, this.frame924, 976, this.frame977, 988, this.frame989, 1046, this.frame1047, 1090, this.frame1091
            ]);
            return;
        }
        Timeline_10.prototype.frame10 = function () {
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            return;
        }; // end function
        Timeline_10.prototype.frame20 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_10.prototype.frame28 = function () {
            this.mc.parent._mcctrl.dash(3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(-150, -150, -150);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_10.prototype.frame33 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_10.prototype.frame36 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame66 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame80 = function () {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }; // end function
        Timeline_10.prototype.frame87 = function () {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }; // end function
        Timeline_10.prototype.frame91 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame96 = function () {
            this.mc.parent._mcctrl.move(0, -1);
            return;
        }; // end function
        Timeline_10.prototype.frame97 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_10.prototype.frame100 = function () {
            this.mc.parent._mcctrl.move(0, -5);
            this.mc.parent._mcctrl.damping(0, 0.5);
            return;
        }; // end function
        Timeline_10.prototype.frame105 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_10.prototype.frame115 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame123 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.15, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame126 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_10.prototype.frame131 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_10.prototype.frame135 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame138 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame143 = function () {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }; // end function
        Timeline_10.prototype.frame149 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_10.prototype.frame152 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame154 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame163 = function () {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao3();
            return;
        }; // end function
        Timeline_10.prototype.frame170 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_10.prototype.frame174 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame181 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.15, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame205 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame209 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_10.prototype.frame230 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_10.prototype.frame240 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame247 = function () {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._mcctrl.move(0, -40);
            this.mc.parent._EffectCtrl.shadow(-150, -150, -150);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_10.prototype.frame250 = function () {
            this.mc.parent._mcctrl.move(0, -5);
            this.mc.parent._mcctrl.damping(0, 0.1);
            return;
        }; // end function
        Timeline_10.prototype.frame252 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_10.prototype.frame273 = function () {
            this.mc.parent._mcctrl.setBishaAIR();
            this.mc.parent._mcctrl.setAttackAIR("砍技21");
            return;
        }; // end function
        Timeline_10.prototype.frame280 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame281 = function () {
            this.mc.parent._mcctrl.move(0, -5);
            this.mc.parent._mcctrl.damping(0, 0.5);
            return;
        }; // end function
        Timeline_10.prototype.frame291 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame298 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_10.prototype.frame306 = function () {
            this.mc.parent._mcctrl.fire("zh1atm", { x: { start: 5, add: 1, max: 30 }, y: 0, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_10.prototype.frame308 = function () {
            this.mc.parent._EffectCtrl.shine(38656);
            return;
        }; // end function
        Timeline_10.prototype.frame314 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_10.prototype.frame328 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame350 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_10.prototype.frame351 = function () {
            this.mc.parent._mcctrl.move(60, 0);
            this.mc.parent._EffectCtrl.shadow(-150, -150, -150);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_10.prototype.frame355 = function () {
            this.mc.parent._mcctrl.move(10, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_10.prototype.frame358 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_10.prototype.frame365 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setZhao3();
            return;
        }; // end function
        Timeline_10.prototype.frame371 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_10.prototype.frame378 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame393 = function () {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._mcctrl.move(40, -40);
            return;
        }; // end function
        Timeline_10.prototype.frame394 = function () {
            this.mc.parent._EffectCtrl.shine(0);
            this.mc.parent._EffectCtrl.shadow(-150, -150, -150);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_10.prototype.frame398 = function () {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._mcctrl.move(4, -4);
            this.mc.parent._mcctrl.damping(0.2, 0.2);
            return;
        }; // end function
        Timeline_10.prototype.frame408 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_10.prototype.frame414 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame421 = function () {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._FighterCtrler.setCross(true);
            return;
        }; // end function
        Timeline_10.prototype.frame432 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame436 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_10.prototype.frame440 = function () {
            this.mc.parent._mcctrl.move(60, 0);
            this.mc.parent._mcctrl.damping(3, 0);
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            return;
        }; // end function
        Timeline_10.prototype.frame453 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame464 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "小乌1");
            return;
        }; // end function
        Timeline_10.prototype.frame506 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_10.prototype.frame510 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(-50, 0, false);
            this.mc.parent._EffectCtrl.slowDown(0.5);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_10.prototype.frame527 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "bsface1");
            return;
        }; // end function
        Timeline_10.prototype.frame566 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_10.prototype.frame580 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_10.prototype.frame597 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame623 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "小乌1");
            return;
        }; // end function
        Timeline_10.prototype.frame644 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_10.prototype.frame646 = function () {
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_10.prototype.frame648 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(150, 0, true);
            this.mc.parent._mcctrl.isApplyG(false);
            this.mc.parent._mcctrl.move(5, 0);
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }; // end function
        Timeline_10.prototype.frame653 = function () {
            this.mc.parent._mcctrl.move(50, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame657 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_10.prototype.frame688 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame717 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "小乌1");
            return;
        }; // end function
        Timeline_10.prototype.frame739 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_10.prototype.frame742 = function () {
            this.mc.parent._EffectCtrl.shine(0);
            return;
        }; // end function
        Timeline_10.prototype.frame773 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_10.prototype.frame794 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame882 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame908 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame921 = function () {
            this.mc.parent._mcctrl.ClearState();
        };
        Timeline_10.prototype.frame924 = function () {
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }; // end function
        Timeline_10.prototype.frame977 = function () {
            this.mc.parent._EffectCtrl.endWanKai();
            this.mc.parent._EffectCtrl.endShake();
            return;
        }; // end function
        Timeline_10.prototype.frame989 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame1047 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_10.prototype.frame1091 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        return Timeline_10;
    }());
    hero_ulquiorra.Timeline_10 = Timeline_10;
    __reflect(Timeline_10.prototype, "hero_ulquiorra.Timeline_10");
})(hero_ulquiorra || (hero_ulquiorra = {}));
//# sourceMappingURL=Timeline_10.js.map