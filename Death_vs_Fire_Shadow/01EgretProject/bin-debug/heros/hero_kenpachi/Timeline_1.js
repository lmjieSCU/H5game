var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*kenpachi主骨骼动画对应的帧事件
*/
var hero_kenpachi;
(function (hero_kenpachi) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [11, this.frame12, 15, this.frame16, 18, this.frame19, 23, this.frame24, 25, this.frame26, 29, this.frame30, 34, this.frame35, 67, this.frame68, 79, this.frame80, 86, this.frame87, 93, this.frame94, 97, this.frame98, 98, this.frame99, 103, this.frame104, 104, this.frame105, 112, this.frame113, 114, this.frame115, 116, this.frame117, 120, this.frame121, 131, this.frame132, 136, this.frame137, 141, this.frame142, 146, this.frame147, 148, this.frame149, 153, this.frame154, 159, this.frame160, 164, this.frame165, 169, this.frame170, 176, this.frame177, 185, this.frame186, 192, this.frame193, 200, this.frame201, 210, this.frame211, 216, this.frame217, 227, this.frame228, 241, this.frame242, 246, this.frame247, 249, this.frame250, 252, this.frame253, 255, this.frame256, 256, this.frame257, 257, this.frame258, 268, this.frame269, 270, this.frame271, 275, this.frame276, 282, this.frame283, 287, this.frame288, 300, this.frame301, 308, this.frame309, 318, this.frame319, 333, this.frame334, 337, this.frame338, 338, this.frame339, 347, this.frame348, 349, this.frame350, 353, this.frame354, 360, this.frame361, 373, this.frame374, 391, this.frame392, 398, this.frame399, 407, this.frame408, 434, this.frame435, 458, this.frame459, 460, this.frame461, 461, this.frame462, 467, this.frame468, 476, this.frame477, 479, this.frame480, 503, this.frame504, 572, this.frame573, 586, this.frame587, 605, this.frame606, 609, this.frame610, 610, this.frame611, 621, this.frame622, 638, this.frame639, 646, this.frame647, 662, this.frame663, 664, this.frame665, 666, this.frame667, 667, this.frame668, 719, this.frame720, 726, this.frame727, 733, this.frame734, 751, this.frame752, 759, this.frame760, 803, this.frame804, 804, this.frame805, 818, this.frame819, 827, this.frame828, 831, this.frame832, 836, this.frame837, 869, this.frame870, 875, this.frame876, 891, this.frame892, 912, this.frame913, 983, this.frame984, 998, this.frame999, 1017, this.frame1018, 1103, this.frame1104, 1106, this.frame1107, 1110, this.frame1111, 1132, this.frame1133, 1189, this.frame1190, 1219, this.frame1220, 1245, this.frame1246]);
        }
        Timeline_1.prototype.frame12 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame16 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame19 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_1.prototype.frame24 = function () {
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame26 = function () {
            this.mc.parent._mcctrl.dash(5);
            return;
        }; // end function
        Timeline_1.prototype.frame30 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_1.prototype.frame35 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame68 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame80 = function () {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }; // end function
        Timeline_1.prototype.frame87 = function () {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }; // end function
        Timeline_1.prototype.frame94 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame98 = function () {
            this.mc.parent._mcctrl.move(0, -3);
            this.mc.parent._EffectCtrl.shadow(200, 200, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame99 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame104 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("跳招20");
            return;
        }; // end function
        Timeline_1.prototype.frame105 = function () {
            this.mc.parent._mcctrl.move(0, 30);
            this.mc.parent._mcctrl.setTouchFloor("跳招3", true);
            return;
        }; // end function
        Timeline_1.prototype.frame113 = function () {
            this.mc.parent._mcctrl.loop("跳招20");
            return;
        }; // end function
        Timeline_1.prototype.frame115 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame117 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame121 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame132 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame137 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame142 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_1.prototype.frame147 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame149 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame154 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame160 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setSkill2("砍技21");
            this.mc.parent._mcctrl.setSkill1();
            return;
        }; // end function
        Timeline_1.prototype.frame165 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame170 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame177 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame186 = function () {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame193 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame201 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame211 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame217 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            this.mc.parent._EffectCtrl.shine(0);
            return;
        }; // end function
        Timeline_1.prototype.frame228 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame242 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame247 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame250 = function () {
            this.mc.parent._EffectCtrl.shadow(200, 200, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame253 = function () {
            this.mc.parent._mcctrl.movePercent(3, 0);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame256 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame257 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(150, 0, true);
            return;
        }; // end function
        Timeline_1.prototype.frame258 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.slowDown(0.5);
            this.mc.parent._mcctrl.gotoAndPlay("砍技21");
            return;
        }; // end function
        Timeline_1.prototype.frame269 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill2("砍技22");
            this.mc.parent._mcctrl.setAttack("砍技22");
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_1.prototype.frame271 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame276 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame283 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame288 = function () {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.shadow(200, 200, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame301 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setJump();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame309 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame319 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame334 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame338 = function () {
            this.mc.parent._EffectCtrl.shine(16776960);
            this.mc.parent._EffectCtrl.shadow(200, 200, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame339 = function () {
            this.mc.parent._mcctrl.movePercent(3, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame348 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame350 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame354 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame361 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame374 = function () {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.setHurtAction("招21");
            return;
        }; // end function
        Timeline_1.prototype.frame392 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame399 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame408 = function () {
            this.mc.parent._EffectCtrl.shine(16776960);
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame435 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame459 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame461 = function () {
            this.mc.parent._EffectCtrl.shine(16776960);
            this.mc.parent._EffectCtrl.shadow(200, 200, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame462 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, -2);
            this.mc.parent._mcctrl.dampingPercent(0.02, 0.1);
            return;
        }; // end function
        Timeline_1.prototype.frame468 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame477 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame480 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame504 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame573 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame587 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "剑八1");
            return;
        }; // end function
        Timeline_1.prototype.frame606 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame610 = function () {
            this.mc.parent._EffectCtrl.shine(16776960);
            return;
        }; // end function
        Timeline_1.prototype.frame611 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame622 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame639 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame647 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "剑八1");
            return;
        }; // end function
        Timeline_1.prototype.frame663 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame665 = function () {
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame667 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(-50, 30, false);
            return;
        }; // end function
        Timeline_1.prototype.frame668 = function () {
            this.mc.parent._mcctrl.move(2, -2);
            return;
        }; // end function
        Timeline_1.prototype.frame720 = function () {
            this.mc.parent._mcctrl.damping(0.2, 0.2);
            return;
        }; // end function
        Timeline_1.prototype.frame727 = function () {
            this.mc.parent._EffectCtrl.shine(16776960);
            return;
        }; // end function
        Timeline_1.prototype.frame734 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame752 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame760 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "剑八2");
            return;
        }; // end function
        Timeline_1.prototype.frame804 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame805 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.shadow(200, 200, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame819 = function () {
            this.mc.parent._mcctrl.justHitToPlay("cbs1", "超必杀1");
            return;
        }; // end function
        Timeline_1.prototype.frame828 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame832 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame837 = function () {
            this.mc.parent._mcctrl.movePercent(0.3, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame870 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame876 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame892 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame913 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame984 = function () {
            this.mc.parent._EffectCtrl.shine(16776960);
            return;
        }; // end function
        Timeline_1.prototype.frame999 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame1018 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1104 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1107 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1111 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1133 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1190 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1220 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1246 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_kenpachi.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_kenpachi.Timeline_1");
})(hero_kenpachi || (hero_kenpachi = {}));
//# sourceMappingURL=Timeline_1.js.map