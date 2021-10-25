var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_yin;
(function (hero_yin) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [
                13, this.frame14, 18, this.frame19, 22, this.frame23, 30, this.frame31, 41, this.frame42, 44, this.frame45, 74, this.frame75, 84, this.frame85, 92, this.frame93, 95, this.frame96, 104, this.frame105, 105, this.frame106, 108, this.frame109, 115, this.frame116, 127, this.frame128, 152, this.frame153, 155, this.frame156, 161, this.frame162, 164, this.frame165, 170, this.frame171, 181, this.frame182, 187, this.frame188, 192, this.frame193, 198, this.frame199, 207, this.frame208, 213, this.frame214, 219, this.frame220, 226, this.frame227, 234, this.frame235, 244, this.frame245, 251, this.frame252, 257, this.frame258, 269, this.frame270, 275, this.frame276, 288, this.frame289, 300, this.frame301, 304, this.frame305, 332, this.frame333, 338, this.frame339, 346, this.frame347, 353, this.frame354, 358, this.frame359, 360, this.frame361, 362, this.frame363, 364, this.frame365, 374, this.frame375, 380, this.frame381, 394, this.frame395, 402, this.frame403, 420, this.frame421, 424, this.frame425, 430, this.frame431, 449, this.frame450, 450, this.frame451, 463, this.frame464, 464, this.frame465, 467, this.frame468, 481, this.frame482, 500, this.frame501, 515, this.frame516, 520, this.frame521, 526, this.frame527, 535, this.frame536, 545, this.frame546, 553, this.frame554, 585, this.frame586, 599, this.frame600, 622, this.frame623, 625, this.frame626, 633, this.frame634, 661, this.frame662, 672, this.frame673, 694, this.frame695, 741, this.frame742, 762, this.frame763, 788, this.frame789, 820, this.frame821, 822, this.frame823, 884, this.frame885, 889, this.frame890, 915, this.frame916, 987, this.frame988, 1011, this.frame1012, 1072, this.frame1073, 1127, this.frame1128, 1155, this.frame1156
            ]);
            return;
        } // end 
        Timeline_1.prototype.frame14 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame19 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame23 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_1.prototype.frame31 = function () {
            this.mc.parent._mcctrl.dash(2);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(150, 150, 150);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame42 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_1.prototype.frame45 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame75 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame85 = function () {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }; // end function
        Timeline_1.prototype.frame93 = function () {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }; // end function
        Timeline_1.prototype.frame96 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame105 = function () {
            this.mc.parent._mcctrl.move(0, -2);
            return;
        }; // end function
        Timeline_1.prototype.frame106 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame109 = function () {
            this.mc.parent._mcctrl.move(-10, -10);
            this.mc.parent._mcctrl.damping(0.5, 0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame116 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame128 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame153 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame156 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            return;
        }; // end function
        Timeline_1.prototype.frame162 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame165 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame171 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame182 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame188 = function () {
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }; // end function
        Timeline_1.prototype.frame193 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame199 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame208 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame214 = function () {
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setSkill2();
            return;
        }; // end function
        Timeline_1.prototype.frame220 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame227 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame235 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame245 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍5");
            this.mc.parent._mcctrl.setJump();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame252 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame258 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame270 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame276 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame289 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame301 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame305 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame333 = function () {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao2();
            return;
        }; // end function
        Timeline_1.prototype.frame339 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame347 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame354 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame359 = function () {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame361 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(50, 0, true);
            return;
        }; // end function
        Timeline_1.prototype.frame363 = function () {
            this.mc.parent._EffectCtrl.shadow(150, 150, 150);
            return;
        }; // end function
        Timeline_1.prototype.frame365 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame375 = function () {
            this.mc.parent._mcctrl.movePercent(-1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame381 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame395 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame403 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame421 = function () {
            this.mc.parent._mcctrl.setAttack("砍1");
            return;
        }; // end function
        Timeline_1.prototype.frame425 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame431 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame450 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame451 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._EffectCtrl.shadow(150, 150, 150);
            return;
        }; // end function
        Timeline_1.prototype.frame464 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame465 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame468 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame482 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame501 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame516 = function () {
            this.mc.parent._mcctrl.setAttack("砍1");
            return;
        }; // end function
        Timeline_1.prototype.frame521 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame527 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame536 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame546 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame554 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame586 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame600 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "银1");
            return;
        }; // end function
        Timeline_1.prototype.frame623 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame626 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame634 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame662 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame673 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "银1");
            return;
        }; // end function
        Timeline_1.prototype.frame695 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame742 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame763 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame789 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "银2");
            return;
        }; // end function
        Timeline_1.prototype.frame821 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame823 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame885 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame890 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame916 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame988 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1012 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1073 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1128 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1156 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_yin.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_yin.Timeline_1");
})(hero_yin || (hero_yin = {}));
//# sourceMappingURL=Timeline_1.js.map