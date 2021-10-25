var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*主骨骼形态1动画对应的帧事件
*/
var hero_ichigo;
(function (hero_ichigo) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [11, this.frame12, 19, this.frame20, 25, this.frame26, 34, this.frame35, 45, this.frame46, 48, this.frame49, 78, this.frame79, 86, this.frame87, 93, this.frame94, 97, this.frame98, 102, this.frame103, 109, this.frame110, 118, this.frame119, 128, this.frame129, 134, this.frame135, 138, this.frame139, 145, this.frame146, 151, this.frame152, 159, this.frame160, 161, this.frame162, 165, this.frame166, 172, this.frame173, 183, this.frame184, 186, this.frame187, 199, this.frame200, 211, this.frame212, 226, this.frame227, 238, this.frame239, 249, this.frame250, 253, this.frame254, 258, this.frame259, 264, this.frame265, 274, this.frame275, 279, this.frame280, 280, this.frame281, 283, this.frame284, 298, this.frame299, 306, this.frame307, 307, this.frame308, 318, this.frame319, 319, this.frame320, 322, this.frame323, 327, this.frame328, 335, this.frame336, 363, this.frame364, 367, this.frame368, 369, this.frame370, 377, this.frame378, 385, this.frame386, 400, this.frame401, 405, this.frame406, 417, this.frame418, 442, this.frame443, 447, this.frame448, 460, this.frame461, 482, this.frame483, 510, this.frame511, 511, this.frame512, 513, this.frame514, 521, this.frame522, 524, this.frame525, 543, this.frame544, 545, this.frame546, 574, this.frame575, 594, this.frame595, 613, this.frame614, 625, this.frame626, 631, this.frame632, 645, this.frame646, 655, this.frame656, 668, this.frame669, 684, this.frame685, 689, this.frame690, 714, this.frame715, 722, this.frame723, 826, this.frame827, 846, this.frame847, 916, this.frame917, 957, this.frame958, 985, this.frame986, 1000, this.frame1001, 1065, this.frame1066, 1085, this.frame1086]);
        }
        Timeline_1.prototype.frame12 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame20 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame26 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_1.prototype.frame35 = function () {
            this.mc.parent._mcctrl.dash(2.5);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame46 = function () {
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
        Timeline_1.prototype.frame87 = function () {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }; // end function
        Timeline_1.prototype.frame94 = function () {
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            return;
        }; // end function
        Timeline_1.prototype.frame98 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame103 = function () {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.move(0, -5);
            this.mc.parent._mcctrl.damping(0, 0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame110 = function () {
            this.mc.parent._mcctrl.fire("tzatm", { x: { start: 5, add: 1, max: 15 }, y: { start: 5, add: 1, max: 15 }, hold: 60, hits: 1 });
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }; // end function
        Timeline_1.prototype.frame119 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame129 = function () {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame135 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame139 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame146 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame152 = function () {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame160 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame162 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame166 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame173 = function () {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame184 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame187 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame200 = function () {
            this.mc.parent._EffectCtrl.shake(0, 2);
            return;
        }; // end function
        Timeline_1.prototype.frame212 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame227 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame239 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame250 = function () {
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }; // end function
        Timeline_1.prototype.frame254 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame259 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setJump();
            return;
        }; // end function
        Timeline_1.prototype.frame265 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame275 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame280 = function () {
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }; // end function
        Timeline_1.prototype.frame281 = function () {
            this.mc.parent._mcctrl.fire("zh1atm", { x: { start: 10, add: 1, max: 20 }, y: 0, hold: 60, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame284 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame299 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame307 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame308 = function () {
            this.mc.parent._mcctrl.movePercent(1.5);
            this.mc.parent._mcctrl.setHitTarget("zh20atm", "招21");
            this.mc.parent._EffectCtrl.dash();
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            return;
        }; // end function
        Timeline_1.prototype.frame319 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("招21");
        };
        Timeline_1.prototype.frame320 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.6);
            return;
        }; // end function
        Timeline_1.prototype.frame323 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame328 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_1.prototype.frame336 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame364 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame368 = function () {
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }; // end function
        Timeline_1.prototype.frame370 = function () {
            this.mc.parent._mcctrl.fire("zh3atm", { x: { start: 5, add: 1, max: 15 }, y: { start: -2, add: -0.5, max: -15 }, hold: 60, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame378 = function () {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setJump();
            return;
        }; // end function
        Timeline_1.prototype.frame386 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame401 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame406 = function () {
            this.mc.parent._mcctrl.movePercent(1);
            this.mc.parent._mcctrl.dampingPercent(0.2);
            return;
        }; // end function
        Timeline_1.prototype.frame418 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame443 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_1.prototype.frame448 = function () {
            this.mc.parent._mcctrl.movePercent(1);
            this.mc.parent._mcctrl.dampingPercent(0.2);
            return;
        }; // end function
        Timeline_1.prototype.frame461 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame483 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "一户1");
            return;
        }; // end function
        Timeline_1.prototype.frame511 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame512 = function () {
            this.mc.parent._mcctrl.movePercent(0.5);
            this.mc.parent._mcctrl.dampingPercent(0.05);
            return;
        }; // end function
        Timeline_1.prototype.frame514 = function () {
            this.mc.parent._mcctrl.fire("bs1atm", { x: { start: 10, add: 1, max: 20 }, y: 0, hold: 60, hits: 1 });
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }; // end function
        Timeline_1.prototype.frame522 = function () {
            this.mc.parent._mcctrl.movePercent(0.5);
            this.mc.parent._mcctrl.dampingPercent(0.05);
            return;
        }; // end function
        Timeline_1.prototype.frame525 = function () {
            this.mc.parent._mcctrl.fire("bs1atm", { x: { start: 10, add: 1, max: 20 }, y: 0, hold: 60, hits: 1 });
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }; // end function
        Timeline_1.prototype.frame544 = function () {
            this.mc.parent._mcctrl.movePercent(0.5);
            this.mc.parent._mcctrl.dampingPercent(0.05);
            return;
        }; // end function
        Timeline_1.prototype.frame546 = function () {
            this.mc.parent._mcctrl.fire("bsatm", { x: { start: 20, add: 2, max: 30 }, y: 0, hold: 60, hits: 1, hp: 300 });
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }; // end function
        Timeline_1.prototype.frame575 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame595 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame614 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "一户1");
            return;
        }; // end function
        Timeline_1.prototype.frame626 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame632 = function () {
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }; // end function
        Timeline_1.prototype.frame646 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame656 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame669 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "一户2");
            return;
        }; // end function
        Timeline_1.prototype.frame685 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame690 = function () {
            this.mc.parent._EffectCtrl.shine(9697014);
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame715 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame723 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame827 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame847 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame917 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame958 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame986 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1001 = function () {
            this.mc.parent._EffectCtrl.startWanKai("一户万解");
            return;
        }; // end function
        Timeline_1.prototype.frame1066 = function () {
            this.mc.parent._EffectCtrl.shine(9697014);
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }; // end function
        Timeline_1.prototype.frame1086 = function () {
            this.mc.parent._FighterCtrler.doWanKai();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_ichigo.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_ichigo.Timeline_1");
})(hero_ichigo || (hero_ichigo = {}));
//# sourceMappingURL=Timeline_1.js.map