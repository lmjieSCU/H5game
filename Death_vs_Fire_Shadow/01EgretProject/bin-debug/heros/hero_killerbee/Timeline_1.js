var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*sasuke_xz主骨骼动画对应的帧事件,选择对应形态
*/
var hero_killerbee;
(function (hero_killerbee) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [12, this.frame13, 16, this.frame17, 23, this.frame24, 26, this.frame27, 34, this.frame35, 65, this.frame66, 79, this.frame80, 84, this.frame85, 88, this.frame89, 96, this.frame97, 99, this.frame100, 110, this.frame111, 131, this.frame132, 132, this.frame133, 137, this.frame138, 143, this.frame144, 146, this.frame147, 149, this.frame150, 155, this.frame156, 160, this.frame161, 168, this.frame169, 173, this.frame174, 178, this.frame179, 182, this.frame183, 188, this.frame189, 197, this.frame198, 202, this.frame203, 212, this.frame213, 217, this.frame218, 221, this.frame222, 227, this.frame228, 234, this.frame235, 238, this.frame239, 243, this.frame244, 246, this.frame247, 273, this.frame274, 279, this.frame280, 285, this.frame286, 297, this.frame298, 299, this.frame300, 307, this.frame308, 310, this.frame311, 314, this.frame315, 320, this.frame321, 328, this.frame329, 330, this.frame331, 331, this.frame332, 332, this.frame333, 337, this.frame338, 344, this.frame345, 356, this.frame357, 358, this.frame359, 373, this.frame374, 380, this.frame381, 387, this.frame388, 392, this.frame393, 402, this.frame403, 415, this.frame416, 416, this.frame417, 417, this.frame418, 420, this.frame421, 433, this.frame434, 448, this.frame449, 450, this.frame451, 465, this.frame466, 472, this.frame473, 478, this.frame479, 491, this.frame492, 501, this.frame502, 508, this.frame509, 527, this.frame528, 539, this.frame540, 564, this.frame565, 565, this.frame566, 568, this.frame569, 571, this.frame572, 585, this.frame586, 605, this.frame606, 616, this.frame617, 626, this.frame627, 643, this.frame644, 657, this.frame658, 704, this.frame705, 715, this.frame716, 746, this.frame747, 758, this.frame759, 768, this.frame769, 793, this.frame794, 819, this.frame820, 825, this.frame826, 900, this.frame901, 901, this.frame902, 950, this.frame951, 975, this.frame976, 989, this.frame990, 1067, this.frame1068, 1096, this.frame1097, 1162, this.frame1163, 1203, this.frame1204, 1231, this.frame1232]);
        }
        Timeline_1.prototype.frame13 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame17 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_1.prototype.frame24 = function () {
            this.mc.parent._mcctrl.dash(6);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame27 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_1.prototype.frame35 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame66 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame80 = function () {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }; // end function
        Timeline_1.prototype.frame85 = function () {
            this.mc.parent._mcctrl.setAirMove(false);
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }; // end function
        Timeline_1.prototype.frame89 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame97 = function () {
            this.mc.parent._mcctrl.move(10, 10);
            this.mc.parent._mcctrl.setTouchFloor("跳招4", true);
            this.mc.parent._mcctrl.setHitTarget("tz0atm", "跳招3");
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame100 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("跳招2");
            return;
        }; // end function
        Timeline_1.prototype.frame111 = function () {
            this.mc.parent._mcctrl.move(3, 0);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame132 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("跳招4");
        };
        Timeline_1.prototype.frame133 = function () {
            this.mc.parent._mcctrl.damping(0.3, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame138 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame144 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame147 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame150 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_1.prototype.frame156 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame161 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame169 = function () {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_1.prototype.frame174 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame179 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame183 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame189 = function () {
            this.mc.parent._mcctrl.movePercent(0.7, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame198 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setAttack("砍4");
            return;
        }; // end function
        Timeline_1.prototype.frame203 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame213 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame218 = function () {
            this.mc.parent._FighterCtrler.setCross(true);
            this.mc.parent._mcctrl.movePercent(3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame222 = function () {
            this.mc.parent._FighterCtrler.setCross(false);
            return;
        }; // end function
        Timeline_1.prototype.frame228 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame235 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame239 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame244 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame247 = function () {
            this.mc.parent._mcctrl.move(15, 0);
            this.mc.parent._mcctrl.damping(0.5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame274 = function () {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍4");
            return;
        }; // end function
        Timeline_1.prototype.frame280 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame286 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame298 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame300 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame308 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame311 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame315 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setSkill2("砍技21");
            this.mc.parent._mcctrl.setAttack("砍技21");
            this.mc.parent._mcctrl.setJump();
            return;
        }; // end function
        Timeline_1.prototype.frame321 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame329 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame331 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame332 = function () {
            this.mc.parent._mcctrl.move(20, -15);
            this.mc.parent._mcctrl.damping(1, 0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame333 = function () {
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame338 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame345 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame357 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame359 = function () {
            this.mc.parent._EffectCtrl.shine(0);
            return;
        }; // end function
        Timeline_1.prototype.frame374 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame381 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame388 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame393 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame403 = function () {
            this.mc.parent._mcctrl.setHitTarget("zh20atm", "招21");
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._EffectCtrl.dash();
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame416 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("招21");
        };
        Timeline_1.prototype.frame417 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame418 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame421 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame434 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame449 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame451 = function () {
            this.mc.parent._EffectCtrl.shine(3653367);
            this.mc.parent._mcctrl.fire("zh3atm", { x: 18, y: -13, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame466 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame473 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame479 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame492 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame502 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_1.prototype.frame509 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame528 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame540 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "奇拉比1");
            return;
        }; // end function
        Timeline_1.prototype.frame565 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame566 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame569 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(80, 0, true);
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame572 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame586 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame606 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame617 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame627 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame644 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame658 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "奇拉比1");
            return;
        }; // end function
        Timeline_1.prototype.frame705 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame716 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame747 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame759 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame769 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "奇拉比2");
            return;
        }; // end function
        Timeline_1.prototype.frame794 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame820 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame826 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "bsface1");
            return;
        }; // end function
        Timeline_1.prototype.frame901 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame902 = function () {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shine(16751616);
            return;
        }; // end function
        Timeline_1.prototype.frame951 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame976 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame990 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1068 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1097 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1163 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1204 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1232 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_killerbee.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_killerbee.Timeline_1");
})(hero_killerbee || (hero_killerbee = {}));
//# sourceMappingURL=Timeline_1.js.map