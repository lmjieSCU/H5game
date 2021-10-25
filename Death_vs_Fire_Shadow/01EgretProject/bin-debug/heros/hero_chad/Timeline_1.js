var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*chad主骨骼动画对应的帧事件
*/
var hero_chad;
(function (hero_chad) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [15, this.frame16, 23, this.frame24, 26, this.frame27, 32, this.frame33, 43, this.frame44, 46, this.frame47, 76, this.frame77, 80, this.frame81, 83, this.frame84, 89, this.frame90, 97, this.frame98, 107, this.frame108, 108, this.frame109, 112, this.frame113, 113, this.frame114, 118, this.frame119, 120, this.frame121, 128, this.frame129, 146, this.frame147, 163, this.frame164, 168, this.frame169, 173, this.frame174, 175, this.frame176, 180, this.frame181, 186, this.frame187, 190, this.frame191, 194, this.frame195, 200, this.frame201, 204, this.frame205, 208, this.frame209, 213, this.frame214, 224, this.frame225, 230, this.frame231, 235, this.frame236, 241, this.frame242, 244, this.frame245, 245, this.frame246, 246, this.frame247, 254, this.frame255, 261, this.frame262, 267, this.frame268, 279, this.frame280, 283, this.frame284, 287, this.frame288, 314, this.frame315, 320, this.frame321, 327, this.frame328, 329, this.frame330, 333, this.frame334, 337, this.frame338, 359, this.frame360, 360, this.frame361, 363, this.frame364, 368, this.frame369, 371, this.frame372, 384, this.frame385, 391, this.frame392, 398, this.frame399, 402, this.frame403, 403, this.frame404, 405, this.frame406, 409, this.frame410, 413, this.frame414, 419, this.frame420, 429, this.frame430, 433, this.frame434, 440, this.frame441, 448, this.frame449, 466, this.frame467, 474, this.frame475, 482, this.frame483, 496, this.frame497, 505, this.frame506, 519, this.frame520, 530, this.frame531, 547, this.frame548, 561, this.frame562, 574, this.frame575, 577, this.frame578, 593, this.frame594, 602, this.frame603, 629, this.frame630, 645, this.frame646, 648, this.frame649, 665, this.frame666, 691, this.frame692, 725, this.frame726, 740, this.frame741, 741, this.frame742, 765, this.frame766, 769, this.frame770, 771, this.frame772, 794, this.frame795, 816, this.frame817, 825, this.frame826, 913, this.frame914, 931, this.frame932, 967, this.frame968, 1166, this.frame1167]);
        }
        Timeline_1.prototype.frame16 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame24 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame27 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_1.prototype.frame33 = function () {
            this.mc.parent._mcctrl.dash(3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(100, 0, -100);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame44 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_1.prototype.frame47 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame77 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame81 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame84 = function () {
            this.mc.parent._mcctrl.movePercent(-1, -1);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0.05);
            return;
        }; // end function
        Timeline_1.prototype.frame90 = function () {
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            return;
        }; // end function
        Timeline_1.prototype.frame98 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame108 = function () {
            this.mc.parent._mcctrl.move(0, -2);
            return;
        }; // end function
        Timeline_1.prototype.frame109 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame113 = function () {
            this.mc.parent._EffectCtrl.shadow(100, 0, -100);
            return;
        }; // end function
        Timeline_1.prototype.frame114 = function () {
            this.mc.parent._mcctrl.movePercent(2, 2);
            this.mc.parent._mcctrl.setTouchFloor("跳招2", true);
            return;
        }; // end function
        Timeline_1.prototype.frame119 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame121 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            this.mc.parent._EffectCtrl.shake(0, 5);
            return;
        }; // end function
        Timeline_1.prototype.frame129 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame147 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame164 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame169 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_1.prototype.frame174 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame176 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame181 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.15, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame187 = function () {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame191 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame195 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame201 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame205 = function () {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_1.prototype.frame209 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame214 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame225 = function () {
            this.mc.parent._mcctrl.movePercent(2.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame231 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_1.prototype.frame236 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame242 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame245 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame246 = function () {
            this.mc.parent._EffectCtrl.shadow(100, 0, -100);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame247 = function () {
            this.mc.parent._mcctrl.setHitTarget("kj10atm", "砍技11");
            this.mc.parent._mcctrl.movePercent(3, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame255 = function () {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._mcctrl.dampingPercent(0.3, 0);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame262 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame268 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame280 = function () {
            this.mc.parent._mcctrl.setAttack("砍1");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame284 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame288 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame315 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame321 = function () {
            this.mc.parent._mcctrl.move(25, 0);
            this.mc.parent._EffectCtrl.shadow(100, 0, -100);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame328 = function () {
            this.mc.parent._mcctrl.damping(2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame330 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame334 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame338 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame360 = function () {
            this.mc.parent._mcctrl.move(10, -10);
            this.mc.parent._mcctrl.damping(0, 1);
            this.mc.parent._EffectCtrl.shadow(100, 0, -100);
            return;
        }; // end function
        Timeline_1.prototype.frame361 = function () {
            this.mc.parent._mcctrl.addQi(15);
            return;
        }; // end function
        Timeline_1.prototype.frame364 = function () {
            this.mc.parent._mcctrl.setTouchFloor("招21", true);
            return;
        }; // end function
        Timeline_1.prototype.frame369 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame372 = function () {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.shake(0, 3);
            this.mc.parent._EffectCtrl.shine(15852727);
            return;
        }; // end function
        Timeline_1.prototype.frame385 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setZhao3();
            return;
        }; // end function
        Timeline_1.prototype.frame392 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame399 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame403 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame404 = function () {
            this.mc.parent._EffectCtrl.shadow(100, 0, -100);
            return;
        }; // end function
        Timeline_1.prototype.frame406 = function () {
            this.mc.parent._mcctrl.move(8, -15);
            this.mc.parent._mcctrl.damping(0.5, 0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame410 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame414 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame420 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame430 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame434 = function () {
            this.mc.parent._mcctrl.move(20, -15);
            this.mc.parent._mcctrl.damping(0.5, 0.5);
            this.mc.parent._EffectCtrl.shadow(100, 0, -100);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame441 = function () {
            this.mc.parent._mcctrl.damping(1, 1);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame449 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame467 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame475 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame483 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame497 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame506 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame520 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame531 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_1.prototype.frame548 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame562 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "茶渡");
            return;
        }; // end function
        Timeline_1.prototype.frame575 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame578 = function () {
            this.mc.parent._mcctrl.fire("bsatm", { x: { start: 30, add: -0.3, min: 15 }, y: 0, hold: 3, hits: 1, hp: 500 });
            this.mc.parent._EffectCtrl.shine(1818876);
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame594 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame603 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame630 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "茶渡");
            return;
        }; // end function
        Timeline_1.prototype.frame646 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame649 = function () {
            this.mc.parent._EffectCtrl.shine(1818876);
            return;
        }; // end function
        Timeline_1.prototype.frame666 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame692 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame726 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "茶渡");
            return;
        }; // end function
        Timeline_1.prototype.frame741 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame742 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.setHitTarget("cbs0atm", "超必杀1");
            this.mc.parent._EffectCtrl.shadow(100, 0, -100);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame766 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.5, 0);
            this.mc.parent._mcctrl.gotoAndPlay("超必杀0");
            return;
        }; // end function
        Timeline_1.prototype.frame770 = function () {
            this.mc.parent._EffectCtrl.shine(1818876);
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame772 = function () {
            this.mc.parent._EffectCtrl.shake(10, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame795 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame817 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("超必杀0");
        };
        Timeline_1.prototype.frame826 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame914 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame932 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame968 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1167 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_chad.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_chad.Timeline_1");
})(hero_chad || (hero_chad = {}));
//# sourceMappingURL=Timeline_1.js.map