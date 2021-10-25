var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*geliou主骨骼动画对应的帧事件
*/
var hero_geliou;
(function (hero_geliou) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [10, this.frame11, 17, this.frame18, 27, this.frame28, 34, this.frame35, 45, this.frame46, 48, this.frame49, 78, this.frame79, 86, this.frame87, 93, this.frame94, 97, this.frame98, 102, this.frame103, 109, this.frame110, 118, this.frame119, 128, this.frame129, 134, this.frame135, 139, this.frame140, 146, this.frame147, 152, this.frame153, 154, this.frame155, 160, this.frame161, 162, this.frame163, 166, this.frame167, 173, this.frame174, 179, this.frame180, 187, this.frame188, 202, this.frame203, 207, this.frame208, 212, this.frame213, 236, this.frame237, 243, this.frame244, 251, this.frame252, 257, this.frame258, 260, this.frame261, 261, this.frame262, 284, this.frame285, 289, this.frame290, 295, this.frame296, 304, this.frame305, 308, this.frame309, 322, this.frame323, 326, this.frame327, 331, this.frame332, 347, this.frame348, 364, this.frame365, 372, this.frame373, 374, this.frame375, 379, this.frame380, 389, this.frame390, 409, this.frame410, 415, this.frame416, 420, this.frame421, 432, this.frame433, 457, this.frame458, 462, this.frame463, 475, this.frame476, 497, this.frame498, 524, this.frame525, 606, this.frame607, 626, this.frame627, 647, this.frame648, 660, this.frame661, 664, this.frame665, 688, this.frame689, 718, this.frame719, 727, this.frame728, 749, this.frame750, 750, this.frame751, 753, this.frame754, 755, this.frame756, 767, this.frame768, 769, this.frame770, 784, this.frame785, 815, this.frame816, 825, this.frame826, 854, this.frame855, 855, this.frame856, 907, this.frame908, 911, this.frame912, 931, this.frame932, 1013, this.frame1014, 1033, this.frame1034, 1103, this.frame1104, 1173, this.frame1174, 1201, this.frame1202]);
        }
        Timeline_1.prototype.frame11 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame18 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_1.prototype.frame28 = function () {
            this.mc.parent._EffectCtrl.walk();
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
        Timeline_1.prototype.frame140 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame147 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame153 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame155 = function () {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setZhao2();
            return;
        }; // end function
        Timeline_1.prototype.frame161 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame163 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame167 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame174 = function () {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame180 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame188 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame203 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao2();
            return;
        }; // end function
        Timeline_1.prototype.frame208 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame213 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame237 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame244 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame252 = function () {
            this.mc.parent._EffectCtrl.shine(38656);
            return;
        }; // end function
        Timeline_1.prototype.frame258 = function () {
            var mc = this.mc.parent;
            return;
        }; // end function
        Timeline_1.prototype.frame261 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame262 = function () {
            this.mc.parent._mcctrl.setJump();
            return;
        }; // end function
        Timeline_1.prototype.frame285 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame290 = function () {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.isApplyG(true);
            return;
        }; // end function
        Timeline_1.prototype.frame296 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(50, 0, true);
            return;
        }; // end function
        Timeline_1.prototype.frame305 = function () {
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }; // end function
        Timeline_1.prototype.frame309 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame323 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame327 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame332 = function () {
            this.mc.parent._EffectCtrl.shake(0, 2);
            return;
        }; // end function
        Timeline_1.prototype.frame348 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame365 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame373 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame375 = function () {
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }; // end function
        Timeline_1.prototype.frame380 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_1.prototype.frame390 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame410 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame416 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame421 = function () {
            this.mc.parent._mcctrl.movePercent(1);
            this.mc.parent._mcctrl.dampingPercent(0.2);
            return;
        }; // end function
        Timeline_1.prototype.frame433 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame458 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_1.prototype.frame463 = function () {
            this.mc.parent._mcctrl.movePercent(1);
            this.mc.parent._mcctrl.dampingPercent(0.2);
            return;
        }; // end function
        Timeline_1.prototype.frame476 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame498 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "一户1");
            return;
        }; // end function
        Timeline_1.prototype.frame525 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame607 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame627 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame648 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "一户1");
            return;
        }; // end function
        Timeline_1.prototype.frame661 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame665 = function () {
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }; // end function
        Timeline_1.prototype.frame689 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame719 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame728 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "一户1");
            return;
        }; // end function
        Timeline_1.prototype.frame750 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame751 = function () {
            this.mc.parent._mcctrl.move(30, -40);
            return;
        }; // end function
        Timeline_1.prototype.frame754 = function () {
            this.mc.parent._mcctrl.movePercent(-0.1, 0.1);
            return;
        }; // end function
        Timeline_1.prototype.frame756 = function () {
            this.mc.parent._mcctrl.movePercent(1, 1);
            return;
        }; // end function
        Timeline_1.prototype.frame768 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame770 = function () {
            this.mc.parent._EffectCtrl.shine(9697014);
            this.mc.parent._EffectCtrl.shake(0, 5);
            return;
        }; // end function
        Timeline_1.prototype.frame785 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame816 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame826 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "一户2");
            return;
        }; // end function
        Timeline_1.prototype.frame855 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame856 = function () {
            this.mc.parent._EffectCtrl.shine(9697014);
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame908 = function () {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shake(0, 7);
            return;
        }; // end function
        Timeline_1.prototype.frame912 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame932 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1014 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1034 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1104 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1174 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1202 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_geliou.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_geliou.Timeline_1");
})(hero_geliou || (hero_geliou = {}));
//# sourceMappingURL=Timeline_1.js.map