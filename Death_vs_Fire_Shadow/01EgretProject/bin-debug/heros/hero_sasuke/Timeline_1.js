var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*主骨骼动画形态1对应的帧事件
*/
var hero_sasuke;
(function (hero_sasuke) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [
                13, this.frame14, 19, this.frame20, 22, this.frame23, 32, this.frame33, 43, this.frame44, 46, this.frame47, 77, this.frame78, 84, this.frame85, 92, this.frame93, 96, this.frame97, 112, this.frame113, 124, this.frame125, 125, this.frame126, 132, this.frame133, 139, this.frame140, 146, this.frame147, 164, this.frame165, 168, this.frame169, 174, this.frame175, 177, this.frame178, 189, this.frame190, 198, this.frame199, 202, this.frame203, 209, this.frame210, 212, this.frame213, 226, this.frame227, 232, this.frame233, 239, this.frame240, 246, this.frame247, 269, this.frame270, 276, this.frame277, 278, this.frame279, 286, this.frame287, 288, this.frame289, 299, this.frame300, 306, this.frame307, 308, this.frame309, 318, this.frame319, 326, this.frame327, 339, this.frame340, 355, this.frame356, 360, this.frame361, 365, this.frame366, 377, this.frame378, 383, this.frame384, 388, this.frame389, 416, this.frame417, 427, this.frame428, 431, this.frame432, 441, this.frame442, 454, this.frame455, 455, this.frame456, 464, this.frame465, 472, this.frame473, 476, this.frame477, 487, this.frame488, 491, this.frame492, 501, this.frame502, 507, this.frame508, 511, this.frame512, 513, this.frame514, 529, this.frame530, 533, this.frame534, 540, this.frame541, 557, this.frame558, 573, this.frame574, 574, this.frame575, 576, this.frame577, 588, this.frame589, 599, this.frame600, 612, this.frame613, 624, this.frame625, 626, this.frame627, 627, this.frame628, 642, this.frame643, 650, this.frame651, 652, this.frame653, 653, this.frame654, 665, this.frame666, 668, this.frame669, 675, this.frame676, 682, this.frame683, 683, this.frame684, 687, this.frame688, 690, this.frame691, 699, this.frame700, 708, this.frame709, 731, this.frame732, 738, this.frame739, 752, this.frame753, 849, this.frame850, 874, this.frame875, 949, this.frame950, 990, this.frame991, 1018, this.frame1019, 1033, this.frame1034, 1059, this.frame1060, 1061, this.frame1062, 1118, this.frame1119, 1132, this.frame1133, 1170, this.frame1171
            ]);
        }
        Timeline_1.prototype.frame14 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame20 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame23 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_1.prototype.frame33 = function () {
            this.mc.parent._mcctrl.dash(2.3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(28, 99, 207);
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
        Timeline_1.prototype.frame78 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame85 = function () {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }; // end function
        Timeline_1.prototype.frame93 = function () {
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            return;
        }; // end function
        Timeline_1.prototype.frame97 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame113 = function () {
            this.mc.parent._mcctrl.movePercent(0, 1.5);
            this.mc.parent._mcctrl.setTouchFloor("跳招3", true);
            this.mc.parent._EffectCtrl.shadow(28, 99, 207);
            return;
        }; // end function
        Timeline_1.prototype.frame125 = function () {
            //gotoAndPlay("跳招2");
            this.mc.parent._mcctrl.loop("跳招2");
            return;
        }; // end function
        Timeline_1.prototype.frame126 = function () {
            this.mc.parent._EffectCtrl.shake(0, 3);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame133 = function () {
            this.mc.parent._mcctrl.setAttack("砍1");
            return;
        }; // end function
        Timeline_1.prototype.frame140 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame147 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame165 = function () {
            this.mc.parent._mcctrl.movePercent(1.2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.12, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame169 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame175 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame178 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame190 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame199 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame203 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }; // end function
        Timeline_1.prototype.frame210 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame213 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame227 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame233 = function () {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill1();
            return;
        }; // end function
        Timeline_1.prototype.frame240 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame247 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame270 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame277 = function () {
            this.mc.parent._mcctrl.movePercent(2.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.shadow(28, 99, 207);
            return;
        }; // end function
        Timeline_1.prototype.frame279 = function () {
            this.mc.parent._EffectCtrl.shine(648163);
            return;
        }; // end function
        Timeline_1.prototype.frame287 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame289 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame300 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame307 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame309 = function () {
            this.mc.parent._mcctrl.movePercent(1.7, 0);
            this.mc.parent._mcctrl.dampingPercent(0.3, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame319 = function () {
            this.mc.parent._mcctrl.movePercent(1.7, 0);
            this.mc.parent._mcctrl.dampingPercent(0.3, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame327 = function () {
            this.mc.parent._mcctrl.movePercent(-1.7, 0);
            this.mc.parent._mcctrl.dampingPercent(0.5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame340 = function () {
            this.mc.parent._mcctrl.movePercent(1.7, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            this.mc.parent._EffectCtrl.shine(648163);
            return;
        }; // end function
        Timeline_1.prototype.frame356 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame361 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame366 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(-30, 0, true);
            return;
        }; // end function
        Timeline_1.prototype.frame378 = function () {
            this.mc.parent._mcctrl.movePercent(0.7, -0.7);
            return;
        }; // end function
        Timeline_1.prototype.frame384 = function () {
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.dampingPercent(0.05, 0.05);
            return;
        }; // end function
        Timeline_1.prototype.frame389 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame417 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame428 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame432 = function () {
            this.mc.parent._EffectCtrl.shine(648163);
            return;
        }; // end function
        Timeline_1.prototype.frame442 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame455 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame456 = function () {
            this.mc.parent._mcctrl.movePercent(1.7, -1);
            this.mc.parent._EffectCtrl.shadow(28, 99, 207);
            return;
        }; // end function
        Timeline_1.prototype.frame465 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.05, 0.05);
            return;
        }; // end function
        Timeline_1.prototype.frame473 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame477 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame488 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame492 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame502 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame508 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_1.prototype.frame512 = function () {
            this.mc.parent._EffectCtrl.shadow(110, -50, 255);
            return;
        }; // end function
        Timeline_1.prototype.frame514 = function () {
            this.mc.parent._mcctrl.movePercent(3.2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame530 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame534 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame541 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "佐助2");
            return;
        }; // end function
        Timeline_1.prototype.frame558 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._mcctrl.setHitTarget("bs10atm", "必杀2");
            this.mc.parent._mcctrl.movePercent(3, 0);
            this.mc.parent._EffectCtrl.shadow(28, 99, 207);
            return;
        }; // end function
        Timeline_1.prototype.frame574 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame575 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.3, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame577 = function () {
            this.mc.parent._EffectCtrl.shine(648163);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame589 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame600 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame613 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "佐助1");
            return;
        }; // end function
        Timeline_1.prototype.frame625 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame627 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame628 = function () {
            this.mc.parent._EffectCtrl.shine(648163);
            return;
        }; // end function
        Timeline_1.prototype.frame643 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame651 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame653 = function () {
            this.mc.parent._EffectCtrl.shine(648163);
            return;
        }; // end function
        Timeline_1.prototype.frame654 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "佐助1");
            return;
        }; // end function
        Timeline_1.prototype.frame666 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame669 = function () {
            this.mc.parent._EffectCtrl.shine(648163);
            return;
        }; // end function
        Timeline_1.prototype.frame676 = function () {
            this.mc.parent._mcctrl.justHitToPlay("cbs1", "超必杀1", false);
            return;
        }; // end function
        Timeline_1.prototype.frame683 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame684 = function () {
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }; // end function
        Timeline_1.prototype.frame688 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(-30, 30, true);
            this.mc.parent._mcctrl.movePercent(0.5, -0.7);
            this.mc.parent._mcctrl.dampingPercent(0.01, 0.01);
            this.mc.parent._EffectCtrl.shadow(28, 99, 207);
            return;
        }; // end function
        Timeline_1.prototype.frame691 = function () {
            this.mc.parent._EffectCtrl.shine(648163);
            return;
        }; // end function
        Timeline_1.prototype.frame700 = function () {
            this.mc.parent._EffectCtrl.shine(648163);
            return;
        }; // end function
        Timeline_1.prototype.frame709 = function () {
            this.mc.parent._EffectCtrl.shine(648163);
            return;
        }; // end function
        Timeline_1.prototype.frame732 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame739 = function () {
            this.mc.parent._mcctrl.movePercent(-2, -2.5);
            this.mc.parent._mcctrl.dampingPercent(0.5, 0.5);
            this.mc.parent._EffectCtrl.shine(16711680);
            var shuilong_mc = this.mc.parent._mcctrl.addAttacker("huo", { applyG: false });
            if (!shuilong_mc) {
                return;
            }
            var shuilong = new hero_sasuke.Timeline_9(this.mc.parent._mcctrl.getAttacker("huo", shuilong_mc.hashCode));
            return;
        }; // end function
        Timeline_1.prototype.frame753 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame850 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame875 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame950 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame991 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1019 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1034 = function () {
            this.mc.parent._EffectCtrl.startWanKai("佐助2");
            return;
        }; // end function
        Timeline_1.prototype.frame1060 = function () {
            this.mc.parent._EffectCtrl.shine(7870688);
            return;
        }; // end function
        Timeline_1.prototype.frame1062 = function () {
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }; // end function
        Timeline_1.prototype.frame1119 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame1133 = function () {
            this.mc.parent._EffectCtrl.shine(7870688);
            return;
        }; // end function
        Timeline_1.prototype.frame1171 = function () {
            this.mc.parent._FighterCtrler.doWanKai();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_sasuke.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_sasuke.Timeline_1");
})(hero_sasuke || (hero_sasuke = {}));
//# sourceMappingURL=Timeline_1.js.map