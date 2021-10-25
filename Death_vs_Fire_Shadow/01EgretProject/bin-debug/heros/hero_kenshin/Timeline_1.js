var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*kenshin主骨骼动画对应的帧事件
*/
var hero_kenshin;
(function (hero_kenshin) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [9, this.frame10, 19, this.frame20, 27, this.frame28, 28, this.frame29, 31, this.frame32,
                37, this.frame38, 67, this.frame68, 79, this.frame80, 90, this.frame91, 97, this.frame98,
                105, this.frame106, 108, this.frame109, 109, this.frame110, 125, this.frame126, 128, this.frame129, 129, this.frame130, 148, this.frame149, 157, this.frame158, 163, this.frame164, 167, this.frame168, 170, this.frame171, 174, this.frame175, 179, this.frame180, 185, this.frame186, 191, this.frame192, 193, this.frame194, 196, this.frame197, 202, this.frame203, 210, this.frame211, 218, this.frame219, 221, this.frame222, 222, this.frame223, 233, this.frame234, 234, this.frame235, 244, this.frame245, 254, this.frame255, 259, this.frame260, 274, this.frame275, 288, this.frame289, 289, this.frame290, 299, this.frame300, 308, this.frame309, 316, this.frame317, 335, this.frame336, 355, this.frame356, 376, this.frame377, 424, this.frame425, 438, this.frame439, 444, this.frame445, 446, this.frame447, 451, this.frame452, 465, this.frame466, 471, this.frame472, 483, this.frame484, 488, this.frame489, 492, this.frame493, 504, this.frame505, 523, this.frame524, 541, this.frame542, 553, this.frame554, 555, this.frame556,
                599, this.frame600, 601, this.frame602, 615, this.frame616, 625, this.frame626, 637, this.frame638, 642, this.frame643, 645, this.frame646, 674, this.frame675, 689, this.frame690, 739, this.frame740, 741, this.frame742, 775, this.frame776, 777, this.frame778, 805, this.frame806, 896, this.frame897, 922, this.frame923, 935, this.frame936, 992, this.frame993, 1035, this.frame1036, 1061, this.frame1062, 1072, this.frame1073, 1090, this.frame1091]);
        }
        Timeline_1.prototype.frame10 = function () {
            this.mc.parent._EffectCtrl.shadow(255, 50, -255);
            return;
        }; // end function
        Timeline_1.prototype.frame20 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame28 = function () {
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame29 = function () {
            this.mc.parent._mcctrl.dash(4.5);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            return;
        }; // end function
        Timeline_1.prototype.frame32 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_1.prototype.frame38 = function () {
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
        Timeline_1.prototype.frame91 = function () {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }; // end function
        Timeline_1.prototype.frame98 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame106 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame109 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("跳招2");
            return;
        }; // end function
        Timeline_1.prototype.frame110 = function () {
            this.mc.parent._mcctrl.movePercent(0, 2);
            this.mc.parent._mcctrl.setTouchFloor("跳招3", true);
            return;
        }; // end function
        Timeline_1.prototype.frame126 = function () {
            this.mc.parent._mcctrl.loop("跳招2");
            return;
        }; // end function
        Timeline_1.prototype.frame129 = function () {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shine(12605448);
            return;
        }; // end function
        Timeline_1.prototype.frame130 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame149 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame158 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame164 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setBishaUP();
            return;
        }; // end function
        Timeline_1.prototype.frame168 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame171 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame175 = function () {
            this.mc.parent._mcctrl.movePercent(0.8, 0);
            this.mc.parent._mcctrl.dampingPercent(0.08, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame180 = function () {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame186 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame192 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame194 = function () {
            this.mc.parent._mcctrl.movePercent(0.8, 0);
            this.mc.parent._mcctrl.dampingPercent(0.08, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame197 = function () {
            this.mc.parent._EffectCtrl.shine(4830463);
            return;
        }; // end function
        Timeline_1.prototype.frame203 = function () {
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setJump();
            return;
        }; // end function
        Timeline_1.prototype.frame211 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame219 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame222 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame223 = function () {
            this.mc.parent._mcctrl.movePercent(1.4, 0);
            this.mc.parent._mcctrl.setHitTarget("kj10atm", "砍技12");
            this.mc.parent._EffectCtrl.dash();
            this.mc.parent._EffectCtrl.shadow(255, 50, -255);
            return;
        }; // end function
        Timeline_1.prototype.frame234 = function () {
            this.mc.parent._mcctrl.movePercent(0.8, 0);
            this.mc.parent._mcctrl.dampingPercent(0.08, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame235 = function () {
            this.mc.parent._EffectCtrl.shine(4737096);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame245 = function () {
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }; // end function
        Timeline_1.prototype.frame255 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame260 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame275 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame289 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame290 = function () {
            this.mc.parent._EffectCtrl.shine(5944782);
            return;
        }; // end function
        Timeline_1.prototype.frame300 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame309 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame317 = function () {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.movePercent(0.4, 0);
            this.mc.parent._mcctrl.dampingPercent(0.04, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame336 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame356 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame377 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame425 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame439 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame445 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame447 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._EffectCtrl.dash();
            this.mc.parent._EffectCtrl.shadow(255, 50, -255);
            return;
        }; // end function
        Timeline_1.prototype.frame452 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, -2.5);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0.1);
            this.mc.parent._EffectCtrl.shine(1085664);
            return;
        }; // end function
        Timeline_1.prototype.frame466 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame472 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame484 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame489 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame493 = function () {
            this.mc.parent._mcctrl.movePercent(1, -1);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0.1);
            return;
        }; // end function
        Timeline_1.prototype.frame505 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame524 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "bsface1");
            return;
        }; // end function
        Timeline_1.prototype.frame542 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._mcctrl.setHitTarget("bs10atm", "必杀1");
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._EffectCtrl.dash();
            this.mc.parent._EffectCtrl.shadow(255, 50, -255);
            return;
        }; // end function
        Timeline_1.prototype.frame554 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("必杀0");
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame556 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(100, null, false);
            this.mc.parent._mcctrl.move(5, 0);
            this.mc.parent._mcctrl.damping(0.2, 0);
            this.mc.parent._EffectCtrl.slowDown(1);
            this.mc.parent._EffectCtrl.shine(1085664);
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame600 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("必杀0");
            return;
        }; // end function
        Timeline_1.prototype.frame602 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame616 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame626 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "bsface1");
            return;
        }; // end function
        Timeline_1.prototype.frame638 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame643 = function () {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shine(7360752);
            return;
        }; // end function
        Timeline_1.prototype.frame646 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame675 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame690 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "bsface1");
            return;
        }; // end function
        Timeline_1.prototype.frame740 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame742 = function () {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shine(3408024);
            return;
        }; // end function
        Timeline_1.prototype.frame776 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame778 = function () {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._EffectCtrl.shine(3408024);
            return;
        }; // end function
        Timeline_1.prototype.frame806 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame897 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame923 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame936 = function () {
            this.mc.parent._EffectCtrl.shine(5259320);
            return;
        }; // end function
        Timeline_1.prototype.frame993 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1036 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1062 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1073 = function () {
            this.mc.parent._EffectCtrl.startWanKai();
            return;
        }; // end function
        Timeline_1.prototype.frame1091 = function () {
            this.mc.parent._FighterCtrler.doWanKai();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_kenshin.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_kenshin.Timeline_1");
})(hero_kenshin || (hero_kenshin = {}));
//# sourceMappingURL=Timeline_1.js.map