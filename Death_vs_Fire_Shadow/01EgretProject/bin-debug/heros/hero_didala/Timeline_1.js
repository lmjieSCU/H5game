var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_didala;
(function (hero_didala) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [13, this.frame14, 21, this.frame22, 26, this.frame27, 32, this.frame33, 35, this.frame36, 43, this.frame44, 69, this.frame70, 79, this.frame80, 86, this.frame87, 91, this.frame92, 96, this.frame97, 98, this.frame99, 115, this.frame116, 129, this.frame130, 135, this.frame136, 142, this.frame143, 147, this.frame148, 153, this.frame154, 158, this.frame159, 160, this.frame161, 167, this.frame168, 173, this.frame174, 179, this.frame180, 185, this.frame186, 194, this.frame195, 200, this.frame201, 209, this.frame210, 213, this.frame214, 215, this.frame216, 228, this.frame229, 234, this.frame235, 245, this.frame246, 250, this.frame251, 251, this.frame252, 257, this.frame258, 259, this.frame260, 265, this.frame266, 269, this.frame270, 270, this.frame271, 275, this.frame276, 277, this.frame278, 283, this.frame284, 289, this.frame290, 300, this.frame301, 303, this.frame304, 320, this.frame321, 325, this.frame326, 339, this.frame340, 359, this.frame360, 367, this.frame368, 378, this.frame379, 380, this.frame381, 381, this.frame382, 395, this.frame396, 403, this.frame404, 411, this.frame412, 426, this.frame427, 433, this.frame434, 470, this.frame471, 480, this.frame481, 499, this.frame500, 500, this.frame501, 538, this.frame539, 545, this.frame546, 569, this.frame570, 582, this.frame583, 584, this.frame585, 620, this.frame621, 621, this.frame622, 653, this.frame654, 665, this.frame666, 679, this.frame680, 710, this.frame711, 772, this.frame773, 829, this.frame830, 835, this.frame836, 843, this.frame844, 848, this.frame849, 873, this.frame874, 955, this.frame956, 981, this.frame982, 1073, this.frame1074, 1114, this.frame1115, 1142, this.frame1143]);
            return;
        } // end 
        Timeline_1.prototype.frame14 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end 
        Timeline_1.prototype.frame22 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end 
        Timeline_1.prototype.frame27 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end 
        Timeline_1.prototype.frame33 = function () {
            this.mc.parent._mcctrl.movePercent(6, 0);
            return;
        }; // end 
        Timeline_1.prototype.frame36 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end 
        Timeline_1.prototype.frame44 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame70 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame80 = function () {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }; // end 
        Timeline_1.prototype.frame87 = function () {
            this.mc.parent._mcctrl.setSkillAIR();
            this.mc.parent._mcctrl.setAttack("跳砍2");
            return;
        }; // end 
        Timeline_1.prototype.frame92 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame97 = function () {
            this.mc.parent._mcctrl.move(0, -2);
            this.mc.parent._mcctrl.damping(0, 0.08);
            return;
        }; // end 
        Timeline_1.prototype.frame99 = function () {
            this.mc.parent._mcctrl.fire("tzatm", { y: 15, x: 0, hold: 2, hits: 1 });
            return;
        }; // end 
        Timeline_1.prototype.frame116 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame130 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end 
        Timeline_1.prototype.frame136 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame143 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end 
        Timeline_1.prototype.frame148 = function () {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end 
        Timeline_1.prototype.frame154 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_1.prototype.frame159 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame161 = function () {
            this.mc.parent._mcctrl.movePercent(1.3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.07, 0);
            return;
        }; // end 
        Timeline_1.prototype.frame168 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end 
        Timeline_1.prototype.frame174 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_1.prototype.frame180 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame186 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end 
        Timeline_1.prototype.frame195 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            return;
        }; // end 
        Timeline_1.prototype.frame201 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_1.prototype.frame210 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame214 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame216 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end 
        Timeline_1.prototype.frame229 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setJump();
            return;
        }; // end 
        Timeline_1.prototype.frame235 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_1.prototype.frame246 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame251 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end 
        Timeline_1.prototype.frame252 = function () {
            this.mc.parent._mcctrl.movePercent(2.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.25, 0);
            this.mc.parent._EffectCtrl.shadow(200, 200, 200);
            return;
        }; // end 
        Timeline_1.prototype.frame258 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end 
        Timeline_1.prototype.frame260 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setAttack("砍技21");
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end 
        Timeline_1.prototype.frame266 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_1.prototype.frame270 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame271 = function () {
            this.mc.parent._EffectCtrl.shadow(200, 200, 200);
            return;
        }; // end 
        Timeline_1.prototype.frame276 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end 
        Timeline_1.prototype.frame278 = function () {
            this.mc.parent._mcctrl.setAttack("砍4");
            return;
        }; // end 
        Timeline_1.prototype.frame284 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_1.prototype.frame290 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame301 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end 
        Timeline_1.prototype.frame304 = function () {
            this.mc.parent._mcctrl.fire("zh1atm", { x: 20, y: { start: 0, max: 10, add: 0.1 }, hold: 2, hits: 1 });
            return;
        }; // end 
        Timeline_1.prototype.frame321 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_1.prototype.frame326 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame340 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end 
        Timeline_1.prototype.frame360 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_1.prototype.frame368 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_1.prototype.frame379 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame381 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end 
        Timeline_1.prototype.frame382 = function () {
            this.mc.parent._mcctrl.fire("zh3atm", { y: -15, x: 15, hold: 2, hits: 1 });
            return;
        }; // end 
        Timeline_1.prototype.frame396 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_1.prototype.frame404 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame412 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end 
        Timeline_1.prototype.frame427 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame434 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end 
        Timeline_1.prototype.frame471 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame481 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "迪达拉1");
            return;
        }; // end 
        Timeline_1.prototype.frame500 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end 
        Timeline_1.prototype.frame501 = function () {
            this.mc.parent._mcctrl.movePercent(1.4, 0);
            this.mc.parent._EffectCtrl.shadow(200, 200, 200);
            return;
        }; // end 
        Timeline_1.prototype.frame539 = function () {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end 
        Timeline_1.prototype.frame546 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_1.prototype.frame570 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame583 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end 
        Timeline_1.prototype.frame585 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "迪达拉1");
            return;
        }; // end 
        Timeline_1.prototype.frame621 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end 
        Timeline_1.prototype.frame622 = function () {
            this.mc.parent._EffectCtrl.shadow(100, 100, 100);
            return;
        }; // end 
        Timeline_1.prototype.frame654 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end 
        Timeline_1.prototype.frame666 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_1.prototype.frame680 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame711 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "迪达拉2");
            return;
        }; // end 
        Timeline_1.prototype.frame773 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end 
        Timeline_1.prototype.frame830 = function () {
            this.mc.parent._FighterCtrler.moveOnce(0, -250);
            return;
        }; // end 
        Timeline_1.prototype.frame836 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame844 = function () {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shine(303095);
            return;
        }; // end 
        Timeline_1.prototype.frame849 = function () {
            // doZhaoHuan();
            return;
        }; // end 
        Timeline_1.prototype.frame874 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame956 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame982 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame1074 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame1115 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end 
        Timeline_1.prototype.frame1143 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end 
        return Timeline_1;
    }());
    hero_didala.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_didala.Timeline_1");
})(hero_didala || (hero_didala = {}));
//# sourceMappingURL=Timeline_1.js.map