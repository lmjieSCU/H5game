var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*主骨骼动画形态2对应的帧事件
*/
var hero_obito;
(function (hero_obito) {
    var Timeline_14 = (function () {
        function Timeline_14(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [
                12, this.frame13, 16, this.frame17, 20, this.frame21, 24, this.frame25, 30, this.frame31, 36, this.frame37, 40, this.frame41, 70, this.frame71, 85, this.frame86, 92, this.frame93, 96, this.frame97, 102, this.frame103, 103, this.frame104, 107, this.frame108, 129, this.frame130, 133, this.frame134, 148, this.frame149, 150, this.frame151, 217, this.frame218, 220, this.frame221, 224, this.frame225, 230, this.frame231, 235, this.frame236, 242, this.frame243, 247, this.frame248, 253, this.frame254, 259, this.frame260, 265, this.frame266, 269, this.frame270, 272, this.frame273, 274, this.frame275, 284, this.frame285, 290, this.frame291, 296, this.frame297, 305, this.frame306, 312, this.frame313, 317, this.frame318, 319, this.frame320, 320, this.frame321, 328, this.frame329, 334, this.frame335, 345, this.frame346, 349, this.frame350, 354, this.frame355, 370, this.frame371, 373, this.frame374, 376, this.frame377, 387, this.frame388, 397, this.frame398, 406, this.frame407, 408, this.frame409, 430, this.frame431, 431, this.frame432, 432, this.frame433, 511, this.frame512, 518, this.frame519, 540, this.frame541, 542, this.frame543, 561, this.frame562, 586, this.frame587, 592, this.frame593, 599, this.frame600, 621, this.frame622, 627, this.frame628, 636, this.frame637, 668, this.frame669, 685, this.frame686, 695, this.frame696, 708, this.frame709, 736, this.frame737, 750, this.frame751, 768, this.frame769, 769, this.frame770, 798, this.frame799, 799, this.frame800, 810, this.frame811, 811, this.frame812, 816, this.frame817, 818, this.frame819, 824, this.frame825, 839, this.frame840, 841, this.frame842, 854, this.frame855, 863, this.frame864, 869, this.frame870, 888, this.frame889, 891, this.frame892, 938, this.frame939, 942, this.frame943, 982, this.frame983, 1019, this.frame1020, 1080, this.frame1081, 1140, this.frame1141, 1154, this.frame1155, 1264, this.frame1265, 1283, this.frame1284, 1289, this.frame1290, 1310, this.frame1311, 1326, this.frame1327, 1367, this.frame1368, 1395, this.frame1396
            ]);
            return;
        }
        Timeline_14.prototype.frame13 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_14.prototype.frame17 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_14.prototype.frame21 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_14.prototype.frame25 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_14.prototype.frame31 = function () {
            this.mc.parent._mcctrl.dash(3.2);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(-100, -100, -100);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_14.prototype.frame37 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_14.prototype.frame41 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame71 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame86 = function () {
            this.mc.parent._mcctrl.movePercent(0.8, -0.1);
            this.mc.parent._mcctrl.dampingPercent(0.08, 0.01);
            return;
        }; // end function
        Timeline_14.prototype.frame93 = function () {
            this.mc.parent._mcctrl.movePercent(1.3, -0.1);
            this.mc.parent._mcctrl.dampingPercent(0.13, 0.01);
            return;
        }; // end function
        Timeline_14.prototype.frame97 = function () {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }; // end function
        Timeline_14.prototype.frame103 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame104 = function () {
            this.mc.parent._mcctrl.move(0, -1);
            return;
        }; // end function
        Timeline_14.prototype.frame108 = function () {
            this.mc.parent._mcctrl.move(-3, -3);
            this.mc.parent._mcctrl.damping(0.1, 0.08);
            return;
        }; // end function
        Timeline_14.prototype.frame130 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame134 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "bsface1");
            return;
        }; // end function
        Timeline_14.prototype.frame149 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_14.prototype.frame151 = function () {
            this.mc.parent._mcctrl.move(-3, -5);
            this.mc.parent._mcctrl.damping(0.03, 0.05);
            return;
        }; // end function
        Timeline_14.prototype.frame218 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame221 = function () {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            this.mc.parent._mcctrl.dampingPercent(0.025, 0);
            return;
        }; // end function
        Timeline_14.prototype.frame225 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            return;
        }; // end function
        Timeline_14.prototype.frame231 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame236 = function () {
            this.mc.parent._mcctrl.movePercent(0.8, 0);
            this.mc.parent._mcctrl.dampingPercent(0.08, 0);
            return;
        }; // end function
        Timeline_14.prototype.frame243 = function () {
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }; // end function
        Timeline_14.prototype.frame248 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_14.prototype.frame254 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame260 = function () {
            this.mc.parent._mcctrl.movePercent(1.3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.13, 0);
            return;
        }; // end function
        Timeline_14.prototype.frame266 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setSkill2();
            return;
        }; // end function
        Timeline_14.prototype.frame270 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_14.prototype.frame273 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame275 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_14.prototype.frame285 = function () {
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setAttack("砍5");
            return;
        }; // end function
        Timeline_14.prototype.frame291 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_14.prototype.frame297 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame306 = function () {
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_14.prototype.frame313 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_14.prototype.frame318 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame320 = function () {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._EffectCtrl.shadow(-100, -100, -100);
            return;
        }; // end function
        Timeline_14.prototype.frame321 = function () {
            this.mc.parent._mcctrl.movePercent(3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.3, 0);
            return;
        }; // end function
        Timeline_14.prototype.frame329 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setAttack("砍技12");
            this.mc.parent._mcctrl.setSkill1("砍技12");
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_14.prototype.frame335 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame346 = function () {
            this.mc.parent._FighterCtrler.setDirectToTarget();
            return;
        }; // end function
        Timeline_14.prototype.frame350 = function () {
            this.mc.parent._mcctrl.movePercent(0.6, 0);
            this.mc.parent._mcctrl.dampingPercent(0.06, 0);
            return;
        }; // end function
        Timeline_14.prototype.frame355 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_14.prototype.frame371 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame374 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_14.prototype.frame377 = function () {
            this.mc.parent._EffectCtrl.slowDown(0.3);
            this.mc.parent._mcctrl.addAttacker("kj2mc", { x: { moveToTarget: true, offset: 0 } });
            return;
        }; // end function
        Timeline_14.prototype.frame388 = function () {
            this.mc.parent._mcctrl.setZhao3("招32");
            this.mc.parent._mcctrl.setBishaSUPER("地爆JB");
            return;
        }; // end function
        Timeline_14.prototype.frame398 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_14.prototype.frame407 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame409 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "带土3");
            return;
        }; // end function
        Timeline_14.prototype.frame431 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_14.prototype.frame432 = function () {
            this.mc.parent._EffectCtrl.shine(14917603);
            return;
        }; // end function
        Timeline_14.prototype.frame433 = function () {
            this.mc.parent._mcctrl.moveTarget({ followmc: "move_mc", speed: 5 });
            return;
        }; // end function
        Timeline_14.prototype.frame512 = function () {
            this.mc.parent._mcctrl.moveTarget(null);
            return;
        }; // end function
        Timeline_14.prototype.frame519 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_14.prototype.frame541 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame543 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_14.prototype.frame562 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame587 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3("招32");
            this.mc.parent._mcctrl.setZhao1("招32");
            this.mc.parent._mcctrl.setJump();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_14.prototype.frame593 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_14.prototype.frame600 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame622 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_14.prototype.frame628 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame637 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_14.prototype.frame669 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame686 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_14.prototype.frame696 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame709 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_14.prototype.frame737 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame751 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "带土3");
            return;
        }; // end function
        Timeline_14.prototype.frame769 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_14.prototype.frame770 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.setHitTarget("bs0ckm", "必杀2");
            this.mc.parent._EffectCtrl.shadow(-100, -100, -100);
            return;
        }; // end function
        Timeline_14.prototype.frame799 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame800 = function () {
            this.mc.parent._mcctrl.move(8, 0);
            this.mc.parent._mcctrl.damping(0.8, 0);
            this.mc.parent._EffectCtrl.shadow(-100, -100, -100);
            return;
        }; // end function
        Timeline_14.prototype.frame811 = function () {
            this.mc.parent._mcctrl.justHitToPlay("bs1", "必杀3", false, false);
            return;
        }; // end function
        Timeline_14.prototype.frame812 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_14.prototype.frame817 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame819 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(50, 0, true);
            this.mc.parent._EffectCtrl.shadow(-100, -100, -100);
            return;
        }; // end function
        Timeline_14.prototype.frame825 = function () {
            this.mc.parent._mcctrl.move(5, 0);
            this.mc.parent._mcctrl.damping(0.5, 0);
            return;
        }; // end function
        Timeline_14.prototype.frame840 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(50, 0, true);
            return;
        }; // end function
        Timeline_14.prototype.frame842 = function () {
            this.mc.parent._mcctrl.move(5, 0);
            this.mc.parent._mcctrl.damping(0.5, 0);
            return;
        }; // end function
        Timeline_14.prototype.frame855 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(50, 0, true);
            this.mc.parent._mcctrl.move(5, -10);
            this.mc.parent._mcctrl.damping(0.5, 0.1);
            return;
        }; // end function
        Timeline_14.prototype.frame864 = function () {
            this.mc.parent._mcctrl.move(-5, -5);
            this.mc.parent._mcctrl.damping(0.1, 0.1);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_14.prototype.frame870 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_14.prototype.frame889 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame892 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "带土3");
            return;
        }; // end function
        Timeline_14.prototype.frame939 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_14.prototype.frame943 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "bsface1");
            return;
        }; // end function
        Timeline_14.prototype.frame983 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_14.prototype.frame1020 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "bsface1");
            return;
        }; // end function
        Timeline_14.prototype.frame1081 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_14.prototype.frame1141 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_14.prototype.frame1155 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame1265 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame1284 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame1290 = function () {
            this.mc.parent._mcctrl.ClearState();
        };
        Timeline_14.prototype.frame1311 = function () {
            this.mc.parent._EffectCtrl.endWanKai();
            return;
        }; // end function
        Timeline_14.prototype.frame1327 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_14.prototype.frame1368 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_14.prototype.frame1396 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        return Timeline_14;
    }());
    hero_obito.Timeline_14 = Timeline_14;
    __reflect(Timeline_14.prototype, "hero_obito.Timeline_14");
})(hero_obito || (hero_obito = {}));
//# sourceMappingURL=Timeline_14.js.map