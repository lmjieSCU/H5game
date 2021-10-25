var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*主骨骼动画形态1对应的帧事件
*/
var hero_rukia;
(function (hero_rukia) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [13, this.frame14, 21, this.frame22, 24, this.frame25, 28, this.frame29, 37, this.frame38, 42, this.frame43, 75, this.frame76, 85, this.frame86, 86, this.frame87, 90, this.frame91, 99, this.frame100, 111, this.frame112, 115, this.frame116, 132, this.frame133, 150, this.frame151, 156, this.frame157, 162, this.frame163, 168, this.frame169, 178, this.frame179, 179, this.frame180, 183, this.frame184, 193, this.frame194, 199, this.frame200, 210, this.frame211, 215, this.frame216, 219, this.frame220, 222, this.frame223, 235, this.frame236, 239, this.frame240, 251, this.frame252, 256, this.frame257, 260, this.frame261, 261, this.frame262, 269, this.frame270, 275, this.frame276, 280, this.frame281, 302, this.frame303, 305, this.frame306, 316, this.frame317, 323, this.frame324, 328, this.frame329, 337, this.frame338, 340, this.frame341, 348, this.frame349, 367, this.frame368, 385, this.frame386, 402, this.frame403, 403, this.frame404, 407, this.frame408, 416, this.frame417, 440, this.frame441, 444, this.frame445, 469, this.frame470, 480, this.frame481, 494, this.frame495, 510, this.frame511, 514, this.frame515, 521, this.frame522, 529, this.frame530, 534, this.frame535, 546, this.frame547, 591, this.frame592, 592, this.frame593, 598, this.frame599, 625, this.frame626, 636, this.frame637, 677, this.frame678, 684, this.frame685, 690, this.frame691, 699, this.frame700, 728, this.frame729, 766, this.frame767, 789, this.frame790, 790, this.frame791, 800, this.frame801, 805, this.frame806, 822, this.frame823, 905, this.frame906, 921, this.frame922, 996, this.frame997, 1037, this.frame1038, 1065, this.frame1066, 1079, this.frame1080, 1096, this.frame1097]);
        }
        Timeline_1.prototype.frame14 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame22 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame25 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_1.prototype.frame29 = function () {
            this.mc.parent._mcctrl.dash(3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame38 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_1.prototype.frame43 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame76 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame86 = function () {
            this.mc.parent._mcctrl.setTouchFloor("落地", true);
            return;
        }; // end function
        Timeline_1.prototype.frame87 = function () {
            this.mc.parent._mcctrl.movePercent(1, 2);
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            return;
        }; // end function
        Timeline_1.prototype.frame91 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("跳砍loop");
        };
        Timeline_1.prototype.frame100 = function () {
            this.mc.parent._mcctrl.loop("跳砍loop");
            return;
        }; // end function
        Timeline_1.prototype.frame112 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame116 = function () {
            this.mc.parent._mcctrl.move(-5, -7);
            this.mc.parent._mcctrl.damping(0.5, 0.5);
            this.mc.parent._EffectCtrl.shine(2679032);
            return;
        }; // end function
        Timeline_1.prototype.frame133 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame151 = function () {
            this.mc.parent._mcctrl.movePercent(0.8, 0);
            this.mc.parent._mcctrl.dampingPercent(0.08, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame157 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_1.prototype.frame163 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame169 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame179 = function () {
            return;
        }; // end function
        Timeline_1.prototype.frame180 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame184 = function () {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setSkill2();
            return;
        }; // end function
        Timeline_1.prototype.frame194 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame200 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame211 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame216 = function () {
            this.mc.parent._mcctrl.setSkill1();
            return;
        }; // end function
        Timeline_1.prototype.frame220 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame223 = function () {
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_1.prototype.frame236 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame240 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame252 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame257 = function () {
            this.mc.parent._EffectCtrl.dash();
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame261 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(30, 0, true);
            return;
        }; // end function
        Timeline_1.prototype.frame262 = function () {
            this.mc.parent._EffectCtrl.shine(2679032);
            return;
        }; // end function
        Timeline_1.prototype.frame270 = function () {
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame276 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame281 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame303 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame306 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, -2);
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            return;
        }; // end function
        Timeline_1.prototype.frame317 = function () {
            this.mc.parent._mcctrl.setSkillAIR();
            this.mc.parent._mcctrl.setBishaAIR();
            this.mc.parent._mcctrl.dampingPercent(0.2, 0.2);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame324 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame329 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame338 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame341 = function () {
            this.mc.parent._EffectCtrl.shine(2798587);
            return;
        }; // end function
        Timeline_1.prototype.frame349 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame368 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame386 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame403 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame404 = function () {
            this.mc.parent._EffectCtrl.shine(14731512);
            return;
        }; // end function
        Timeline_1.prototype.frame408 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame417 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame441 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame445 = function () {
            this.mc.parent._EffectCtrl.shine(2679032);
            return;
        }; // end function
        Timeline_1.prototype.frame470 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame481 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame495 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame511 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_1.prototype.frame515 = function () {
            this.mc.parent._mcctrl.movePercent(-1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            return;
        }; // end function
        Timeline_1.prototype.frame522 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame530 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame535 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame547 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "bsface1");
            return;
        }; // end function
        Timeline_1.prototype.frame592 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame593 = function () {
            this.mc.parent._mcctrl.move(-10, 0);
            this.mc.parent._mcctrl.damping(2, 0);
            this.mc.parent._EffectCtrl.shine(2679032);
            return;
        }; // end function
        Timeline_1.prototype.frame599 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame626 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame637 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "bsface1");
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }; // end function
        Timeline_1.prototype.frame678 = function () {
            this.mc.parent._mcctrl.move(-12, -14);
            this.mc.parent._mcctrl.damping(0.5, 0.5);
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame685 = function () {
            this.mc.parent._EffectCtrl.shine(2679032);
            return;
        }; // end function
        Timeline_1.prototype.frame691 = function () {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._mcctrl.isApplyG(true);
            return;
        }; // end function
        Timeline_1.prototype.frame700 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame729 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "bsface2");
            return;
        }; // end function
        Timeline_1.prototype.frame767 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame790 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame791 = function () {
            this.mc.parent._EffectCtrl.shine(11598072);
            return;
        }; // end function
        Timeline_1.prototype.frame801 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame806 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame823 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame906 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame922 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame997 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1038 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1066 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1080 = function () {
            this.mc.parent._EffectCtrl.startWanKai("bsface2");
            return;
        }; // end function
        Timeline_1.prototype.frame1097 = function () {
            this.mc.parent._FighterCtrler.doWanKai();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_rukia.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_rukia.Timeline_1");
})(hero_rukia || (hero_rukia = {}));
//# sourceMappingURL=Timeline_1.js.map