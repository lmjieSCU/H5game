var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*naruto主骨骼形态3主骨骼动画对应的帧事件
*/
var hero_naruto;
(function (hero_naruto) {
    var Timeline_30 = (function () {
        function Timeline_30(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [17, this.frame18, 23, this.frame24, 25, this.frame26, 32, this.frame33, 39, this.frame40, 40, this.frame41, 42, this.frame43, 79, this.frame80, 89, this.frame90, 96, this.frame97, 100, this.frame101, 105, this.frame106, 109, this.frame110, 120, this.frame121, 131, this.frame132, 135, this.frame136, 143, this.frame144, 151, this.frame152, 160, this.frame161, 163, this.frame164, 166, this.frame167, 172, this.frame173, 178, this.frame179, 184, this.frame185, 191, this.frame192, 199, this.frame200, 207, this.frame208, 221, this.frame222, 228, this.frame229, 233, this.frame234, 240, this.frame241, 246, this.frame247, 260, this.frame261, 271, this.frame272, 310, this.frame311, 311, this.frame312, 317, this.frame318, 323, this.frame324, 324, this.frame325, 332, this.frame333, 337, this.frame338, 344, this.frame345, 384, this.frame385, 388, this.frame389, 400, this.frame401, 403, this.frame404, 409, this.frame410, 420, this.frame421, 425, this.frame426, 440, this.frame441, 459, this.frame460, 465, this.frame466, 474, this.frame475, 480, this.frame481, 496, this.frame497, 518, this.frame519, 528, this.frame529, 542, this.frame543, 555, this.frame556, 565, this.frame566, 583, this.frame584, 603, this.frame604, 629, this.frame630, 630, this.frame631, 636, this.frame637, 642, this.frame643, 647, this.frame648, 663, this.frame664, 720, this.frame721, 741, this.frame742, 746, this.frame747, 747, this.frame748, 761, this.frame762, 771, this.frame772, 786, this.frame787, 854, this.frame855, 858, this.frame859, 859, this.frame860, 885, this.frame886, 900, this.frame901, 987, this.frame988, 994, this.frame995, 1009, this.frame1010, 1024, this.frame1025, 1062, this.frame1063, 1074, this.frame1075, 1085, this.frame1086, 1137, this.frame1138, 1165, this.frame1166]);
            return;
        }
        Timeline_30.prototype.frame18 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_30.prototype.frame24 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_30.prototype.frame26 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_30.prototype.frame33 = function () {
            this.mc.parent._mcctrl.dash(3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(255);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_30.prototype.frame40 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_30.prototype.frame41 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_30.prototype.frame43 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame80 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame90 = function () {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }; // end function
        Timeline_30.prototype.frame97 = function () {
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            return;
        }; // end function
        Timeline_30.prototype.frame101 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame106 = function () {
            this.mc.parent._mcctrl.move(0, -12);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }; // end function
        Timeline_30.prototype.frame110 = function () {
            this.mc.parent._mcctrl.movePercent(2, 1);
            this.mc.parent._mcctrl.setTouchFloor("落地", true);
            this.mc.parent._mcctrl.loop("跳招loop");
            return;
        }; // end function
        Timeline_30.prototype.frame121 = function () {
            // this.mc.parent._mcctrl.loop("跳招loop");
            return;
        }; // end function
        Timeline_30.prototype.frame132 = function () {
            this.mc.parent._mcctrl.movePercent(0.3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.03, 0);
            return;
        }; // end function
        Timeline_30.prototype.frame136 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_30.prototype.frame144 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame152 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_30.prototype.frame161 = function () {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_30.prototype.frame164 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_30.prototype.frame167 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame173 = function () {
            this.mc.parent._mcctrl.movePercent(1.3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_30.prototype.frame179 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setAttack("砍4");
            return;
        }; // end function
        Timeline_30.prototype.frame185 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_30.prototype.frame192 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame200 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_30.prototype.frame208 = function () {
            this.mc.parent._mcctrl.addAttacker("shou", { x: { moveToTarget: true, offset: 0 }, y: { moveToTarget: false, offset: 0 }, applyG: false });
            return;
        }; // end function
        Timeline_30.prototype.frame222 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_30.prototype.frame229 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_30.prototype.frame234 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame241 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_30.prototype.frame247 = function () {
            this.mc.parent._EffectCtrl.shake(0, 3);
            return;
        }; // end function
        Timeline_30.prototype.frame261 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_30.prototype.frame272 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame311 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_30.prototype.frame312 = function () {
            this.mc.parent._mcctrl.movePercent(-3, 0);
            this.mc.parent._EffectCtrl.dash();
            this.mc.parent._EffectCtrl.shadow();
            return;
        }; // end function
        Timeline_30.prototype.frame318 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_30.prototype.frame324 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(-150, 0, true);
            return;
        }; // end function
        Timeline_30.prototype.frame325 = function () {
            this.mc.parent._mcctrl.movePercent(3, 0);
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }; // end function
        Timeline_30.prototype.frame333 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_30.prototype.frame338 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_30.prototype.frame345 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame385 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_30.prototype.frame389 = function () {
            this.mc.parent._mcctrl.fire("zh1atm", { x: { start: 30, add: -1, min: 10 }, y: 0, hold: 0.7, hits: 1 });
            return;
        }; // end function
        Timeline_30.prototype.frame401 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame404 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_30.prototype.frame410 = function () {
            this.mc.parent._EffectCtrl.shine(16257056);
            return;
        }; // end function
        Timeline_30.prototype.frame421 = function () {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_30.prototype.frame426 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame441 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_30.prototype.frame460 = function () {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_30.prototype.frame466 = function () {
            this.mc.parent._mcctrl.setZhao2(null);
            this.mc.parent._mcctrl.setDash(null);
            return;
        }; // end function
        Timeline_30.prototype.frame475 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_30.prototype.frame481 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame497 = function () {
            this.mc.parent._mcctrl.addAttacker("zhua", { x: { moveToTarget: true, offset: 0 }, applyG: false });
            return;
        }; // end function
        Timeline_30.prototype.frame519 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_30.prototype.frame529 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame543 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_30.prototype.frame556 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame566 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_30.prototype.frame584 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame604 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "鸣人4");
            return;
        }; // end function
        Timeline_30.prototype.frame630 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_30.prototype.frame631 = function () {
            this.mc.parent._mcctrl.movePercent(-0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.shine(6621708);
            this.mc.parent._mcctrl.fire("bsatm", { x: { start: 30, add: -1, min: 15 }, y: 0, hold: 60, hits: 1 });
            return;
        }; // end function
        Timeline_30.prototype.frame637 = function () {
            this.mc.parent._mcctrl.movePercent(-0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.shine(6621708);
            this.mc.parent._mcctrl.fire("bsatm", { x: { start: 30, add: -1, min: 15 }, y: 0, hold: 60, hits: 1 });
            return;
        }; // end function
        Timeline_30.prototype.frame643 = function () {
            this.mc.parent._mcctrl.movePercent(-0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.shine(6621708);
            this.mc.parent._mcctrl.fire("bs1atm", { x: { start: 30, add: -1, min: 15 }, y: 0, hold: 60, hits: 1 });
            return;
        }; // end function
        Timeline_30.prototype.frame648 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_30.prototype.frame664 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame721 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "鸣人6");
            return;
        }; // end function
        Timeline_30.prototype.frame742 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._EffectCtrl.shake(0, 5);
            return;
        }; // end function
        Timeline_30.prototype.frame747 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_30.prototype.frame748 = function () {
            this.mc.parent._EffectCtrl.shine(6291480);
            return;
        }; // end function
        Timeline_30.prototype.frame762 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_30.prototype.frame772 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame787 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "鸣人6");
            return;
        }; // end function
        Timeline_30.prototype.frame855 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_30.prototype.frame859 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_30.prototype.frame860 = function () {
            this.mc.parent._EffectCtrl.shine(6621708);
            return;
        }; // end function
        Timeline_30.prototype.frame886 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_30.prototype.frame901 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame988 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }; // end function
        Timeline_30.prototype.frame995 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame1010 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame1025 = function () {
            this.mc.parent._mcctrl.ClearState();
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }; // end function
        Timeline_30.prototype.frame1063 = function () {
            this.mc.parent._EffectCtrl.endShake();
            return;
        }; // end function
        Timeline_30.prototype.frame1075 = function () {
            this.mc.parent._EffectCtrl.endWanKai();
            return;
        }; // end function
        Timeline_30.prototype.frame1086 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_30.prototype.frame1138 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_30.prototype.frame1166 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        return Timeline_30;
    }());
    hero_naruto.Timeline_30 = Timeline_30;
    __reflect(Timeline_30.prototype, "hero_naruto.Timeline_30");
})(hero_naruto || (hero_naruto = {}));
//# sourceMappingURL=Timeline_30.js.map