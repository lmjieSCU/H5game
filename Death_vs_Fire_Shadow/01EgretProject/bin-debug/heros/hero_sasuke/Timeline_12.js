var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*主骨骼动画形态2对应的帧事件
*/
var hero_sasuke;
(function (hero_sasuke) {
    var Timeline_12 = (function () {
        function Timeline_12(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [
                15, this.frame16, 21, this.frame22, 24, this.frame25, 29, this.frame30, 56, this.frame57, 74, this.frame75, 79, this.frame80, 83, this.frame84, 100, this.frame101, 109, this.frame110, 120, this.frame121, 133, this.frame134, 138, this.frame139, 143, this.frame144, 149, this.frame150, 159, this.frame160, 166, this.frame167, 171, this.frame172, 180, this.frame181, 192, this.frame193, 200, this.frame201, 207, this.frame208, 212, this.frame213, 220, this.frame221, 229, this.frame230, 238, this.frame239, 248, this.frame249, 252, this.frame253, 255, this.frame256, 265, this.frame266, 270, this.frame271, 276, this.frame277, 278, this.frame279, 281, this.frame282, 285, this.frame286, 296, this.frame297, 304, this.frame305, 314, this.frame315, 315, this.frame316, 326, this.frame327, 342, this.frame343, 356, this.frame357, 371, this.frame372, 374, this.frame375, 383, this.frame384, 392, this.frame393, 424, this.frame425, 429, this.frame430, 438, this.frame439, 447, this.frame448, 470, this.frame471, 493, this.frame494, 517, this.frame518, 542, this.frame543, 546, this.frame547, 553, this.frame554, 585, this.frame586, 588, this.frame589, 591, this.frame592, 604, this.frame605, 616, this.frame617, 629, this.frame630, 630, this.frame631, 632, this.frame633, 664, this.frame665, 677, this.frame678, 693, this.frame694, 724, this.frame725, 728, this.frame729, 734, this.frame735, 745, this.frame746, 759, this.frame760, 860, this.frame861, 883, this.frame884, 886, this.frame887, 903, this.frame904, 905, this.frame906, 921, this.frame922, 937, this.frame938, 978, this.frame979, 1006, this.frame1007
            ]);
            return;
        }
        Timeline_12.prototype.frame16 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_12.prototype.frame22 = function () {
            this.mc.parent._mcctrl.movePercent(8, 0);
            return;
        }; // end function
        Timeline_12.prototype.frame25 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_12.prototype.frame30 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_12.prototype.frame57 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_12.prototype.frame75 = function () {
            this.mc.parent._mcctrl.fire("tkatm", { x: { start: 15, add: -0.5, hit: 8 }, y: { start: 10, add: -0.3, hit: 6 }, hold: 3, hits: 3, hp: 200 });
            return;
        }; // end function
        Timeline_12.prototype.frame80 = function () {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }; // end function
        Timeline_12.prototype.frame84 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_12.prototype.frame101 = function () {
            this.mc.parent._mcctrl.movePercent(-0.5, -0.5);
            this.mc.parent._EffectCtrl.shine(16724480);
            return;
        }; // end function
        Timeline_12.prototype.frame110 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.04, 0.04);
            return;
        }; // end function
        Timeline_12.prototype.frame121 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_12.prototype.frame134 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_12.prototype.frame139 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setBisha();
            return;
        }; // end function
        Timeline_12.prototype.frame144 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_12.prototype.frame150 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_12.prototype.frame160 = function () {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_12.prototype.frame167 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_12.prototype.frame172 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_12.prototype.frame181 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_12.prototype.frame193 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setJump();
            return;
        }; // end function
        Timeline_12.prototype.frame201 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_12.prototype.frame208 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_12.prototype.frame213 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_12.prototype.frame221 = function () {
            this.mc.parent._EffectCtrl.shine(9720574);
            return;
        }; // end function
        Timeline_12.prototype.frame230 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_12.prototype.frame239 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_12.prototype.frame249 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_12.prototype.frame253 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_12.prototype.frame256 = function () {
            this.mc.parent._mcctrl.move(-6, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_12.prototype.frame266 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setAttack("砍1");
            return;
        }; // end function
        Timeline_12.prototype.frame271 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_12.prototype.frame277 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_12.prototype.frame279 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_12.prototype.frame282 = function () {
            this.mc.parent._mcctrl.move(-6, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_12.prototype.frame286 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setAttack("砍1");
            return;
        }; // end function
        Timeline_12.prototype.frame297 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_12.prototype.frame305 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_12.prototype.frame315 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_12.prototype.frame316 = function () {
            this.mc.parent._mcctrl.fire("zh1atm", { x: { start: 20, add: -0.5, hit: 8, min: 8 }, y: 0, hold: 3, hits: 4, hp: 200 });
            return;
        }; // end function
        Timeline_12.prototype.frame327 = function () {
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setBisha();
            return;
        }; // end function
        Timeline_12.prototype.frame343 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_12.prototype.frame357 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_12.prototype.frame372 = function () {
            this.mc.parent._EffectCtrl.shine(9720574);
            return;
        }; // end function
        Timeline_12.prototype.frame375 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setAttack("砍1");
            return;
        }; // end function
        Timeline_12.prototype.frame384 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_12.prototype.frame393 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_12.prototype.frame425 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_12.prototype.frame430 = function () {
            this.mc.parent._mcctrl.addAttacker("zz1", { x: { moveToTarget: true, offset: 0 }, y: { moveToTarget: false, offset: 0 }, applyG: false });
            return;
        }; // end function
        Timeline_12.prototype.frame439 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setJump();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setBisha();
            return;
        }; // end function
        Timeline_12.prototype.frame448 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_12.prototype.frame471 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_12.prototype.frame494 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_12.prototype.frame518 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "佐助3");
            return;
        }; // end function
        Timeline_12.prototype.frame543 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(-150, 0, true);
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }; // end function
        Timeline_12.prototype.frame547 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }; // end function
        Timeline_12.prototype.frame554 = function () {
            this.mc.parent._EffectCtrl.shine(118);
            return;
        }; // end function
        Timeline_12.prototype.frame586 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_12.prototype.frame589 = function () {
            this.mc.parent._mcctrl.isApplyG(true);
            return;
        }; // end function
        Timeline_12.prototype.frame592 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_12.prototype.frame605 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_12.prototype.frame617 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "佐助3");
            return;
        }; // end function
        Timeline_12.prototype.frame630 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_12.prototype.frame631 = function () {
            this.mc.parent._mcctrl.movePercent(-1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_12.prototype.frame633 = function () {
            this.mc.parent._EffectCtrl.shine(16724480);
            return;
        }; // end function
        Timeline_12.prototype.frame665 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_12.prototype.frame678 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_12.prototype.frame694 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "佐助3");
            return;
        }; // end function
        Timeline_12.prototype.frame725 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_12.prototype.frame729 = function () {
            this.mc.parent._mcctrl.addAttacker("zz1", { x: { moveToTarget: true, offset: 0 }, y: { moveToTarget: false, offset: 0 }, applyG: false });
            return;
        }; // end function
        Timeline_12.prototype.frame735 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_12.prototype.frame746 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_12.prototype.frame760 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_12.prototype.frame861 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_12.prototype.frame884 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_12.prototype.frame887 = function () {
            this.mc.parent._mcctrl.ClearState();
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }; // end function
        Timeline_12.prototype.frame904 = function () {
            this.mc.parent._EffectCtrl.endShake();
            return;
        }; // end function
        Timeline_12.prototype.frame906 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_12.prototype.frame922 = function () {
            this.mc.parent._EffectCtrl.endWanKai();
            return;
        }; // end function
        Timeline_12.prototype.frame938 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_12.prototype.frame979 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_12.prototype.frame1007 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        return Timeline_12;
    }());
    hero_sasuke.Timeline_12 = Timeline_12;
    __reflect(Timeline_12.prototype, "hero_sasuke.Timeline_12");
})(hero_sasuke || (hero_sasuke = {}));
//# sourceMappingURL=Timeline_12.js.map