var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*ichigo主骨骼形态3主骨骼动画对应的帧事件
*/
var hero_ichigo;
(function (hero_ichigo) {
    var Timeline_30 = (function () {
        function Timeline_30(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [10, this.frame11, 14, this.frame15, 17, this.frame18, 30, this.frame31, 35, this.frame36, 38, this.frame39, 69, this.frame70, 78, this.frame79, 81, this.frame82, 83, this.frame84, 88, this.frame89, 94, this.frame95, 96, this.frame97, 101, this.frame102, 103, this.frame104, 107, this.frame108, 108, this.frame109, 119, this.frame120, 127, this.frame128, 131, this.frame132, 138, this.frame139, 143, this.frame144, 149, this.frame150, 156, this.frame157, 160, this.frame161, 166, this.frame167, 176, this.frame177, 185, this.frame186, 197, this.frame198, 202, this.frame203, 210, this.frame211, 216, this.frame217, 230, this.frame231, 234, this.frame235, 243, this.frame244, 252, this.frame253, 256, this.frame257, 268, this.frame269, 284, this.frame285, 291, this.frame292, 292, this.frame293, 308, this.frame309, 310, this.frame311, 317, this.frame318, 328, this.frame329, 330, this.frame331, 330, this.frame340, 341, this.frame342, 347, this.frame348, 353, this.frame354, 361, this.frame362, 373, this.frame374, 381, this.frame382, 382, this.frame383, 384, this.frame385, 398, this.frame399, 410, this.frame411, 423, this.frame424, 442, this.frame443, 448, this.frame449, 455, this.frame456, 473, this.frame474, 485, this.frame486, 491, this.frame492, 502, this.frame503, 520, this.frame521, 524, this.frame525, 536, this.frame537, 540, this.frame541, 552, this.frame553, 562, this.frame563, 569, this.frame570, 572, this.frame573, 581, this.frame582, 586, this.frame587, 587, this.frame588, 594, this.frame595, 630, this.frame631, 636, this.frame637, 640, this.frame641, 664, this.frame665, 667, this.frame668, 687, this.frame688, 736, this.frame737, 752, this.frame753, 753, this.frame754, 766, this.frame767, 815, this.frame816, 817, this.frame818, 847, this.frame848, 946, this.frame947, 955, this.frame956, 965, this.frame966, 985, this.frame986, 1004, this.frame1005, 1036, this.frame1037, 1077, this.frame1078, 1121, this.frame1122]);
        }
        Timeline_30.prototype.frame11 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_30.prototype.frame15 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_30.prototype.frame18 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_30.prototype.frame31 = function () {
            this.mc.parent._mcctrl.dash(4);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_30.prototype.frame36 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_30.prototype.frame39 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame70 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame79 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.setAirMove(false);
            return;
        }; // end function
        Timeline_30.prototype.frame82 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_30.prototype.frame84 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.3, 0);
            this.mc.parent._mcctrl.setAirMove(true);
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }; // end function
        Timeline_30.prototype.frame89 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame95 = function () {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            return;
        }; // end function
        Timeline_30.prototype.frame97 = function () {
            this.mc.parent._mcctrl.movePercent(2, 1);
            this.mc.parent._mcctrl.setTouchFloor("跳招2");
            return;
        }; // end function
        Timeline_30.prototype.frame102 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_30.prototype.frame104 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.2, 1);
            return;
        }; // end function
        Timeline_30.prototype.frame108 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_30.prototype.frame109 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_30.prototype.frame120 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame128 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_30.prototype.frame132 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            return;
        }; // end function
        Timeline_30.prototype.frame139 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame144 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_30.prototype.frame150 = function () {
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }; // end function
        Timeline_30.prototype.frame157 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame161 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_30.prototype.frame167 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setAttack("砍4");
            return;
        }; // end function
        Timeline_30.prototype.frame177 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_30.prototype.frame186 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame198 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_30.prototype.frame203 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setAttack("砍5");
            this.mc.parent._mcctrl.setSkill2();
            return;
        }; // end function
        Timeline_30.prototype.frame211 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_30.prototype.frame217 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame231 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.02, 0);
            this.mc.parent._EffectCtrl.shine(0);
            return;
        }; // end function
        Timeline_30.prototype.frame235 = function () {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_30.prototype.frame244 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_30.prototype.frame253 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame257 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_30.prototype.frame269 = function () {
            this.mc.parent._EffectCtrl.shine(0);
            this.mc.parent._EffectCtrl.shake(0, 3);
            return;
        }; // end function
        Timeline_30.prototype.frame285 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame292 = function () {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }; // end function
        Timeline_30.prototype.frame293 = function () {
            this.mc.parent._mcctrl.movePercent(3, -3);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0.2);
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            return;
        }; // end function
        Timeline_30.prototype.frame309 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_30.prototype.frame311 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_30.prototype.frame318 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame329 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_30.prototype.frame331 = function () {
            this.mc.parent._mcctrl.setHitTarget("zh10atm", "招12");
            this.mc.parent._FighterCtrler.setCross(true);
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            return;
        }; // end function
        Timeline_30.prototype.frame340 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("招12");
        };
        Timeline_30.prototype.frame342 = function () {
            this.mc.parent._FighterCtrler.setDirectToTarget();
            this.mc.parent._FighterCtrler.setCross(false);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_30.prototype.frame348 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_30.prototype.frame354 = function () {
            this.mc.parent._mcctrl.setAttack("砍1");
            return;
        }; // end function
        Timeline_30.prototype.frame362 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_30.prototype.frame374 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame382 = function () {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._EffectCtrl.slowDown(1);
            return;
        }; // end function
        Timeline_30.prototype.frame383 = function () {
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_30.prototype.frame385 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(100, 0, true);
            return;
        }; // end function
        Timeline_30.prototype.frame399 = function () {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao3();
            return;
        }; // end function
        Timeline_30.prototype.frame411 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_30.prototype.frame424 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame443 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_30.prototype.frame449 = function () {
            this.mc.parent._EffectCtrl.shine(0);
            return;
        }; // end function
        Timeline_30.prototype.frame456 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_30.prototype.frame474 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame486 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_30.prototype.frame492 = function () {
            this.mc.parent._mcctrl.movePercent(1);
            this.mc.parent._mcctrl.dampingPercent(0.2);
            return;
        }; // end function
        Timeline_30.prototype.frame503 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame521 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_30.prototype.frame525 = function () {
            this.mc.parent._mcctrl.movePercent(1);
            this.mc.parent._mcctrl.dampingPercent(0.2);
            return;
        }; // end function
        Timeline_30.prototype.frame537 = function () {
            this.mc.parent._mcctrl.movePercent(2, -2);
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            return;
        }; // end function
        Timeline_30.prototype.frame541 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.5, 0.5);
            return;
        }; // end function
        Timeline_30.prototype.frame553 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_30.prototype.frame563 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame570 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("空中必杀");
        };
        Timeline_30.prototype.frame573 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "虚护2");
            return;
        }; // end function
        Timeline_30.prototype.frame582 = function () {
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_30.prototype.frame587 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_30.prototype.frame588 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(100, 0, true);
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_30.prototype.frame595 = function () {
            this.mc.parent._mcctrl.move(-10, 0);
            this.mc.parent._mcctrl.damping(0.5, 0);
            return;
        }; // end function
        Timeline_30.prototype.frame631 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_30.prototype.frame637 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame641 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "虚护1");
            return;
        }; // end function
        Timeline_30.prototype.frame665 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_30.prototype.frame668 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_30.prototype.frame688 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame737 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "虚护3");
            return;
        }; // end function
        Timeline_30.prototype.frame753 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_30.prototype.frame754 = function () {
            this.mc.parent._EffectCtrl.shine(394758);
            return;
        }; // end function
        Timeline_30.prototype.frame767 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "虚护3");
            return;
        }; // end function
        Timeline_30.prototype.frame816 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_30.prototype.frame818 = function () {
            this.mc.parent._EffectCtrl.shine(16727100);
            return;
        }; // end function
        Timeline_30.prototype.frame848 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame947 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame956 = function () {
            // _root._y = 0;
            return;
        }; // end function
        Timeline_30.prototype.frame966 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame986 = function () {
            this.mc.parent._EffectCtrl.shake(0, 3, 1);
            this.mc.parent._mcctrl.ClearState();
            return;
        }; // end function
        Timeline_30.prototype.frame1005 = function () {
            this.mc.parent._EffectCtrl.endWanKai();
            return;
        }; // end function
        Timeline_30.prototype.frame1037 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame1078 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_30.prototype.frame1122 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        return Timeline_30;
    }());
    hero_ichigo.Timeline_30 = Timeline_30;
    __reflect(Timeline_30.prototype, "hero_ichigo.Timeline_30");
})(hero_ichigo || (hero_ichigo = {}));
//# sourceMappingURL=Timeline_30.js.map