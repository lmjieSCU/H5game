var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*xubai主骨骼动画对应的帧事件
*/
var hero_xubai;
(function (hero_xubai) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [13, this.frame14, 21, this.frame22, 23, this.frame24, 34, this.frame35, 43, this.frame44, 48, this.frame49, 78, this.frame79, 84, this.frame85, 91, this.frame92, 97, this.frame98, 100, this.frame101, 104, this.frame105, 106, this.frame107, 114, this.frame115, 116, this.frame117, 140, this.frame141, 144, this.frame145, 148, this.frame149, 149, this.frame150, 157, this.frame158, 160, this.frame161, 162, this.frame163, 168, this.frame169, 169, this.frame170, 174, this.frame175, 180, this.frame181, 185, this.frame186, 188, this.frame189, 195, this.frame196, 198, this.frame199, 199, this.frame200, 207, this.frame208, 213, this.frame214, 219, this.frame220, 223, this.frame224, 225, this.frame226, 249, this.frame250, 265, this.frame266, 270, this.frame271, 287, this.frame288, 295, this.frame296, 298, this.frame299, 329, this.frame330, 337, this.frame338, 341, this.frame342, 352, this.frame353, 364, this.frame365, 367, this.frame368, 371, this.frame372, 378, this.frame379, 380, this.frame381, 390, this.frame391, 397, this.frame398, 413, this.frame414, 417, this.frame418, 418, this.frame419, 424, this.frame425, 426, this.frame427, 430, this.frame431, 434, this.frame435, 448, this.frame449, 453, this.frame454, 454, this.frame455, 476, this.frame477, 485, this.frame486, 492, this.frame493, 511, this.frame512, 522, this.frame523, 538, this.frame539, 545, this.frame546, 555, this.frame556, 579, this.frame580, 584, this.frame585, 608, this.frame609, 632, this.frame633, 633, this.frame634, 670, this.frame671, 675, this.frame676, 711, this.frame712, 721, this.frame722, 753, this.frame754, 754, this.frame755, 812, this.frame813, 824, this.frame825, 830, this.frame831, 840, this.frame841, 871, this.frame872, 914, this.frame915, 961, this.frame962, 967, this.frame968, 969, this.frame970, 970, this.frame971, 985, this.frame986, 987, this.frame988, 988, this.frame989, 1003, this.frame1004, 1005, this.frame1006, 1006, this.frame1007, 1021, this.frame1022, 1023, this.frame1024, 1024, this.frame1025, 1039, this.frame1040, 1067, this.frame1068, 1069, this.frame1070, 1082, this.frame1083, 1103, this.frame1104, 1176, this.frame1177, 1181, this.frame1182, 1201, this.frame1202, 1258, this.frame1259, 1350, this.frame1351, 1374, this.frame1375, 1385, this.frame1386, 1387, this.frame1388, 1391, this.frame1392, 1395, this.frame1396, 1399, this.frame1400, 1402, this.frame1403, 1406, this.frame1407, 1413, this.frame1414, 1422, this.frame1423, 1425, this.frame1426, 1433, this.frame1434, 1436, this.frame1437, 1442, this.frame1443, 1455, this.frame1456, 1465, this.frame1466, 1508, this.frame1509, 1515, this.frame1516, 1527, this.frame1528, 1545, this.frame1546, 1556, this.frame1557, 1562, this.frame1563]);
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
        Timeline_1.prototype.frame35 = function () {
            this.mc.parent._mcctrl.dash(3.8);
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
        Timeline_1.prototype.frame85 = function () {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }; // end function
        Timeline_1.prototype.frame92 = function () {
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            return;
        }; // end function
        Timeline_1.prototype.frame98 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame101 = function () {
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }; // end function
        Timeline_1.prototype.frame105 = function () {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.setTouchFloor("跳招3", true);
            this.mc.parent._mcctrl.isApplyG(true);
            this.mc.parent._mcctrl.movePercent(-0.5, -0.5);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame107 = function () {
            this.mc.parent._mcctrl.movePercent(2, 1.5);
            return;
        }; // end function
        Timeline_1.prototype.frame115 = function () {
            this.mc.parent._mcctrl.loop("跳招2");
            return;
        }; // end function
        Timeline_1.prototype.frame117 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame141 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame145 = function () {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame149 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame150 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaSUPER();
            return;
        }; // end function
        Timeline_1.prototype.frame158 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame161 = function () {
            return;
        }; // end function
        Timeline_1.prototype.frame163 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame169 = function () {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill2();
            return;
        }; // end function
        Timeline_1.prototype.frame170 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame175 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame181 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame186 = function () {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame189 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame196 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame199 = function () {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame200 = function () {
            this.mc.parent._mcctrl.movePercent(1.4, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame208 = function () {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setAttack("砍5");
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_1.prototype.frame214 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame220 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame224 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame226 = function () {
            this.mc.parent._EffectCtrl.shine(16711680);
            return;
        }; // end function
        Timeline_1.prototype.frame250 = function () {
            this.mc.parent._EffectCtrl.shine(16711680);
            return;
        }; // end function
        Timeline_1.prototype.frame266 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setAttack("砍技22");
            return;
        }; // end function
        Timeline_1.prototype.frame271 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame288 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame296 = function () {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame299 = function () {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame330 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame338 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setZhao3();
            return;
        }; // end function
        Timeline_1.prototype.frame342 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame353 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame365 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame368 = function () {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame372 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(-30, 0, true);
            return;
        }; // end function
        Timeline_1.prototype.frame379 = function () {
            this.mc.parent._mcctrl.movePercent(2.2, -1.4);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0.05);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame381 = function () {
            this.mc.parent._EffectCtrl.shine(38656);
            return;
        }; // end function
        Timeline_1.prototype.frame391 = function () {
            this.mc.parent._EffectCtrl.shine(38656);
            return;
        }; // end function
        Timeline_1.prototype.frame398 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame414 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame418 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame419 = function () {
            this.mc.parent._mcctrl.movePercent(1.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame425 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame427 = function () {
            this.mc.parent._EffectCtrl.shine(8444152);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shake(0, 3);
            return;
        }; // end function
        Timeline_1.prototype.frame431 = function () {
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_1.prototype.frame435 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame449 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame454 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame455 = function () {
            this.mc.parent._mcctrl.movePercent(2.2, -1.4);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0.05);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame477 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame486 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame493 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame512 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame523 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_1.prototype.frame539 = function () {
            this.mc.parent._mcctrl.move(60, 0);
            this.mc.parent._mcctrl.damping(3, 0);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame546 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame556 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "虚白2");
            return;
        }; // end function
        Timeline_1.prototype.frame580 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame585 = function () {
            this.mc.parent._mcctrl.fire("bs1atm", { x: { start: 15, add: 1, max: 30 }, y: 0, hold: 120, hits: 2 });
            this.mc.parent._EffectCtrl.shine(39160);
            return;
        }; // end function
        Timeline_1.prototype.frame609 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "虚白2");
            return;
        }; // end function
        Timeline_1.prototype.frame633 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame634 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame671 = function () {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shake(0, 8);
            return;
        }; // end function
        Timeline_1.prototype.frame676 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame712 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame722 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "虚白1");
            return;
        }; // end function
        Timeline_1.prototype.frame754 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame755 = function () {
            this.mc.parent._EffectCtrl.shine(16776960);
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }; // end function
        Timeline_1.prototype.frame813 = function () {
            this.mc.parent._mcctrl.damping(0.5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame825 = function () {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shake(0, 7);
            return;
        }; // end function
        Timeline_1.prototype.frame831 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame841 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame872 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "虚白4");
            return;
        }; // end function
        Timeline_1.prototype.frame915 = function () {
            this.mc.parent._mcctrl.movePercent(0.2, 0);
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame962 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(0, null, false);
            return;
        }; // end function
        Timeline_1.prototype.frame968 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(100, 0, true);
            this.mc.parent._mcctrl.isApplyG(false);
            this.mc.parent._mcctrl.move(5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame970 = function () {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame971 = function () {
            this.mc.parent._mcctrl.move(55, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame986 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(100, 0, true);
            this.mc.parent._mcctrl.isApplyG(false);
            this.mc.parent._mcctrl.move(5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame988 = function () {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame989 = function () {
            this.mc.parent._mcctrl.move(55, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1004 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(100, 0, true);
            this.mc.parent._mcctrl.isApplyG(false);
            this.mc.parent._mcctrl.move(5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1006 = function () {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame1007 = function () {
            this.mc.parent._mcctrl.move(55, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1022 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(100, 0, true);
            this.mc.parent._mcctrl.isApplyG(false);
            this.mc.parent._mcctrl.move(5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1024 = function () {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame1025 = function () {
            this.mc.parent._mcctrl.move(55, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1040 = function () {
            this.mc.parent._mcctrl.isApplyG(false);
            this.mc.parent._FighterCtrler.moveToTarget(10, -50, true);
            this.mc.parent._mcctrl.move(-3, -3);
            this.mc.parent._mcctrl.damping(0.05, 0.05);
            this.mc.parent._EffectCtrl.slowDown(1);
            return;
        }; // end function
        Timeline_1.prototype.frame1068 = function () {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shake(0, 5);
            return;
        }; // end function
        Timeline_1.prototype.frame1070 = function () {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shine(303095);
            return;
        }; // end function
        Timeline_1.prototype.frame1083 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame1104 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1177 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1182 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1202 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1259 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1351 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1375 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1386 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame1388 = function () {
            this.mc.parent._EffectCtrl.shine(16257056);
            return;
        }; // end function
        Timeline_1.prototype.frame1392 = function () {
            this.mc.parent._EffectCtrl.shine(16257056);
            return;
        }; // end function
        Timeline_1.prototype.frame1396 = function () {
            this.mc.parent._EffectCtrl.shine(16257056);
            return;
        }; // end function
        Timeline_1.prototype.frame1400 = function () {
            this.mc.parent._EffectCtrl.shine(16257056);
            return;
        }; // end function
        Timeline_1.prototype.frame1403 = function () {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setAttack("砍6");
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._EffectCtrl.shine(16257056);
            return;
        }; // end function
        Timeline_1.prototype.frame1407 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame1414 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1423 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame1426 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, -2);
            this.mc.parent._mcctrl.dampingPercent(0.02, 0.1);
            return;
        }; // end function
        Timeline_1.prototype.frame1434 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame1437 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame1443 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1456 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "虚白3");
            return;
        }; // end function
        Timeline_1.prototype.frame1466 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._mcctrl.move(0, -1);
            this.mc.parent._EffectCtrl.shine(16711680);
            return;
        }; // end function
        Timeline_1.prototype.frame1509 = function () {
            this.mc.parent._mcctrl.move(60, 0);
            this.mc.parent._mcctrl.damping(3, 0);
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }; // end function
        Timeline_1.prototype.frame1516 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame1528 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1546 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame1557 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame1563 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_xubai.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_xubai.Timeline_1");
})(hero_xubai || (hero_xubai = {}));
//# sourceMappingURL=Timeline_1.js.map