var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_renji;
(function (hero_renji) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [
                11, this.frame12, 19, this.frame20, 26, this.frame27, 31, this.frame32, 42, this.frame43, 45, this.frame46, 74, this.frame75, 84, this.frame85, 91, this.frame92, 95, this.frame96, 101, this.frame102, 106, this.frame107, 118, this.frame119, 130, this.frame131, 131, this.frame132, 136, this.frame137, 142, this.frame143, 146, this.frame147, 155, this.frame156, 161, this.frame162, 168, this.frame169, 174, this.frame175, 184, this.frame185, 185, this.frame186, 192, this.frame193, 198, this.frame199, 203, this.frame204, 206, this.frame207, 212, this.frame213, 220, this.frame221, 231, this.frame232, 245, this.frame246, 255, this.frame256, 263, this.frame264, 269, this.frame270, 279, this.frame280, 291, this.frame292, 305, this.frame306, 310, this.frame311, 313, this.frame314, 328, this.frame329, 332, this.frame333, 339, this.frame340, 351, this.frame352, 360, this.frame361, 377, this.frame378, 397, this.frame398, 407, this.frame408, 409, this.frame410, 415, this.frame416, 424, this.frame425, 430, this.frame431, 464, this.frame465, 473, this.frame474, 507, this.frame508, 555, this.frame556, 571, this.frame572, 603, this.frame604, 632, this.frame633, 633, this.frame634, 634, this.frame635, 661, this.frame662, 688, this.frame689, 709, this.frame710, 719, this.frame720, 741, this.frame742, 743, this.frame744, 758, this.frame759, 760, this.frame761, 781, this.frame782, 797, this.frame798, 850, this.frame851, 898, this.frame899, 902, this.frame903, 951, this.frame952, 953, this.frame954, 954, this.frame955, 977, this.frame978, 978, this.frame979, 981, this.frame982, 996, this.frame997, 1079, this.frame1080, 1083, this.frame1084, 1085, this.frame1086, 1112, this.frame1113, 1182, this.frame1183, 1223, this.frame1224, 1251, this.frame1252
            ]);
            return;
        } // end 
        Timeline_1.prototype.frame12 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame20 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame27 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_1.prototype.frame32 = function () {
            this.mc.parent._mcctrl.dash(2.3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(0, 0, 255);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame43 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_1.prototype.frame46 = function () {
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
        Timeline_1.prototype.frame92 = function () {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }; // end function
        Timeline_1.prototype.frame96 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame102 = function () {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.move(-2, -4);
            return;
        }; // end function
        Timeline_1.prototype.frame107 = function () {
            this.mc.parent._mcctrl.damping(0.2, 0.4);
            return;
        }; // end function
        Timeline_1.prototype.frame119 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame131 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame132 = function () {
            return;
        }; // end function
        Timeline_1.prototype.frame137 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setSkill2();
            return;
        }; // end function
        Timeline_1.prototype.frame143 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame147 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame156 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setJump();
            return;
        }; // end function
        Timeline_1.prototype.frame162 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame169 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame175 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame185 = function () {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao2();
            return;
        }; // end function
        Timeline_1.prototype.frame186 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
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
        Timeline_1.prototype.frame204 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame207 = function () {
            this.mc.parent._mcctrl.movePercent(1.8, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame213 = function () {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.shine(8444152);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shake(0, 3);
            return;
        }; // end function
        Timeline_1.prototype.frame221 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame232 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame246 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame256 = function () {
            this.mc.parent._EffectCtrl.shine(11382189);
            return;
        }; // end function
        Timeline_1.prototype.frame264 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame270 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame280 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame292 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame306 = function () {
            this.mc.parent._mcctrl.setZhao3();
            return;
        }; // end function
        Timeline_1.prototype.frame311 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame314 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame329 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame333 = function () {
            this.mc.parent._mcctrl.addAttacker("zz1", { x: { moveToTarget: true, offset: 0 }, y: { moveToTarget: false, offset: 0 }, applyG: false });
            return;
        }; // end function
        Timeline_1.prototype.frame340 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame352 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            return;
        }; // end function
        Timeline_1.prototype.frame361 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame378 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame398 = function () {
            this.mc.parent._mcctrl.setBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame408 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame410 = function () {
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setJump();
            return;
        }; // end function
        Timeline_1.prototype.frame416 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame425 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame431 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame465 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame474 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "bsface1");
            return;
        }; // end function
        Timeline_1.prototype.frame508 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame556 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame572 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame604 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "bsface2");
            return;
        }; // end function
        Timeline_1.prototype.frame633 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame634 = function () {
            this.mc.parent._mcctrl.addAttacker("dao", { x: { followTarget: true, offset: 0 }, y: { followTarget: true, offset: -30 }, applyG: false });
            return;
        }; // end function
        Timeline_1.prototype.frame635 = function () {
            this.mc.parent._EffectCtrl.shine(16298224);
            return;
        }; // end function
        Timeline_1.prototype.frame662 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame689 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame710 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "bsface1");
            return;
        }; // end function
        Timeline_1.prototype.frame720 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame742 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame744 = function () {
            this.mc.parent._EffectCtrl.shine(4218928);
            return;
        }; // end function
        Timeline_1.prototype.frame759 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame761 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame782 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame798 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "bsface3");
            return;
        }; // end function
        Timeline_1.prototype.frame851 = function () {
            this.mc.parent._EffectCtrl.shine(8433840);
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }; // end function
        Timeline_1.prototype.frame899 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame903 = function () {
            this.mc.parent._EffectCtrl.endShake();
            return;
        }; // end function
        Timeline_1.prototype.frame952 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame954 = function () {
            this.mc.parent._EffectCtrl.shine(4218928);
            return;
        }; // end function
        Timeline_1.prototype.frame955 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame978 = function () {
            this.mc.parent._EffectCtrl.shine(12605448);
            return;
        }; // end function
        Timeline_1.prototype.frame979 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame982 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame997 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1080 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1084 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame1086 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1113 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1183 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1224 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1252 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_renji.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_renji.Timeline_1");
})(hero_renji || (hero_renji = {}));
//# sourceMappingURL=Timeline_1.js.map