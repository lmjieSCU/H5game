var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_juggo;
(function (hero_juggo) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [
                14, this.frame15, 19, this.frame20, 22, this.frame23, 26, this.frame27, 35, this.frame36, 39, this.frame40, 70, this.frame71, 78, this.frame79, 86, this.frame87, 91, this.frame92, 96, this.frame97, 99, this.frame100, 110, this.frame111, 119, this.frame120, 125, this.frame126, 130, this.frame131, 133, this.frame134, 137, this.frame138, 146, this.frame147, 151, this.frame152, 155, this.frame156, 160, this.frame161, 161, this.frame162, 173, this.frame174, 178, this.frame179, 185, this.frame186, 193, this.frame194, 194, this.frame195, 195, this.frame196, 208, this.frame209, 220, this.frame221, 221, this.frame222, 231, this.frame232, 236, this.frame237, 241, this.frame242, 257, this.frame258, 258, this.frame259, 263, this.frame264, 267, this.frame268, 275, this.frame276, 289, this.frame290, 300, this.frame301, 311, this.frame312, 313, this.frame314, 321, this.frame322, 341, this.frame342, 360, this.frame361, 377, this.frame378, 394, this.frame395, 406, this.frame407, 424, this.frame425, 452, this.frame453, 463, this.frame464, 465, this.frame466, 466, this.frame467, 479, this.frame480, 486, this.frame487, 495, this.frame496, 499, this.frame500, 507, this.frame508, 521, this.frame522, 539, this.frame540, 550, this.frame551, 588, this.frame589, 593, this.frame594, 602, this.frame603, 610, this.frame611, 624, this.frame625, 636, this.frame637, 664, this.frame665, 676, this.frame677, 699, this.frame700, 701, this.frame702, 737, this.frame738, 738, this.frame739, 743, this.frame744, 744, this.frame745, 748, this.frame749, 755, this.frame756, 758, this.frame759, 761, this.frame762, 780, this.frame781, 812, this.frame813, 858, this.frame859, 859, this.frame860, 867, this.frame868, 870, this.frame871, 872, this.frame873, 900, this.frame901, 927, this.frame928, 940, this.frame941, 953, this.frame954, 966, this.frame967, 979, this.frame980, 1001, this.frame1002, 1005, this.frame1006, 1016, this.frame1017, 1017, this.frame1018, 1023, this.frame1024, 1024, this.frame1025, 1026, this.frame1027, 1027, this.frame1028, 1052, this.frame1053, 1140, this.frame1141, 1161, this.frame1162, 1242, this.frame1243, 1283, this.frame1284, 1311, this.frame1312
            ]);
            return;
        } // end 
        Timeline_1.prototype.frame15 = function () {
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
        Timeline_1.prototype.frame27 = function () {
            this.mc.parent._mcctrl.dash(2.5);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(100, 40, 0);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame36 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_1.prototype.frame40 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame71 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame79 = function () {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }; // end function
        Timeline_1.prototype.frame87 = function () {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }; // end function
        Timeline_1.prototype.frame92 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame97 = function () {
            this.mc.parent._mcctrl.move(2, -2);
            return;
        }; // end function
        Timeline_1.prototype.frame100 = function () {
            this.mc.parent._mcctrl.move(6, 4);
            this.mc.parent._mcctrl.damping(0.3, 0.2);
            return;
        }; // end function
        Timeline_1.prototype.frame111 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame120 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame126 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setSkill2();
            return;
        }; // end function
        Timeline_1.prototype.frame131 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame134 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame138 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame147 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame152 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame156 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame161 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame162 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame174 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame179 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame186 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame194 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame195 = function () {
            this.mc.parent._mcctrl.setHitTarget("kj10atm", "砍技12");
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._EffectCtrl.shadow(100, 40, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame196 = function () {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame209 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame221 = function () {
            this.mc.parent._mcctrl.movePercent(3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.6, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame222 = function () {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame232 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame237 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame242 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame258 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            this.mc.parent._EffectCtrl.shadow(100, 40, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame259 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame264 = function () {
            this.mc.parent._mcctrl.setHitTarget("kj20", "砍技21");
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame268 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame276 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame290 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame301 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame312 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame314 = function () {
            this.mc.parent._mcctrl.fire("zh1atm", { x: { start: 20 }, y: 0, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame322 = function () {
            this.mc.parent._mcctrl.fire("zh11atm", { x: { start: 20 }, y: 0, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame342 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame361 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame378 = function () {
            var shuilong_mc = this.mc.parent._mcctrl.addAttacker("tu", { x: { moveToTarget: true, offset: 0, range: [50, 500] } });
            if (!shuilong_mc) {
                return;
            }
            var shuilong = new hero_juggo.Symbol1_10(this.mc.parent._mcctrl.getAttacker("tu", shuilong_mc.hashCode));
            return;
        }; // end function
        Timeline_1.prototype.frame395 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame407 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame425 = function () {
            var shuilong_mc = this.mc.parent._mcctrl.addAttacker("kuwu", { applyG: false });
            if (!shuilong_mc) {
                return;
            }
            var shuilong = new hero_juggo.Timeline_11(this.mc.parent._mcctrl.getAttacker("kuwu", shuilong_mc.hashCode));
            return;
        }; // end function
        Timeline_1.prototype.frame453 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame464 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame466 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame467 = function () {
            this.mc.parent._mcctrl.move(10, -13);
            this.mc.parent._mcctrl.damping(0.5, 0.5);
            this.mc.parent._EffectCtrl.shadow(100, 40, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame480 = function () {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame487 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame496 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame500 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame508 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame522 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_1.prototype.frame540 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame551 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "重吾1");
            return;
        }; // end function
        Timeline_1.prototype.frame589 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame594 = function () {
            this.mc.parent._mcctrl.move(-7, 0);
            this.mc.parent._mcctrl.damping(0.7, 0);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._mcctrl.fire("bs1atm", { x: { start: 30 }, y: 0, hold: 3, hits: 1, hp: 200 });
            return;
        }; // end function
        Timeline_1.prototype.frame603 = function () {
            this.mc.parent._mcctrl.move(-7, 0);
            this.mc.parent._mcctrl.damping(0.7, 0);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._mcctrl.fire("bs1atm", { x: { start: 30 }, y: 0, hold: 3, hits: 1, hp: 200 });
            return;
        }; // end function
        Timeline_1.prototype.frame611 = function () {
            this.mc.parent._mcctrl.move(-7, 0);
            this.mc.parent._mcctrl.damping(0.7, 0);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._mcctrl.fire("bs1atm", { x: { start: 30 }, y: 0, hold: 3, hits: 1, hp: 200 });
            return;
        }; // end function
        Timeline_1.prototype.frame625 = function () {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame637 = function () {
            this.mc.parent._mcctrl.move(-12, 0);
            this.mc.parent._mcctrl.damping(1.2, 0);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._mcctrl.fire("bsatm", { x: { start: 30 }, y: 0, hold: 3, hits: 1, hp: 300 });
            return;
        }; // end function
        Timeline_1.prototype.frame665 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame677 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame700 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame702 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "重吾1");
            return;
        }; // end function
        Timeline_1.prototype.frame738 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame739 = function () {
            this.mc.parent._mcctrl.move(20, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame744 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(-150, 0, false);
            this.mc.parent._mcctrl.move(20, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }; // end function
        Timeline_1.prototype.frame745 = function () {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            this.mc.parent._EffectCtrl.shadow(100, 40, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame749 = function () {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame756 = function () {
            this.mc.parent._mcctrl.move(10, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame759 = function () {
            this.mc.parent._mcctrl.isApplyG(true);
            return;
        }; // end function
        Timeline_1.prototype.frame762 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame781 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame813 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "重吾2");
            return;
        }; // end function
        Timeline_1.prototype.frame859 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame860 = function () {
            this.mc.parent._mcctrl.movePercent(3, 0);
            this.mc.parent._mcctrl.setHitTarget("cbs0atm", "超必杀2");
            this.mc.parent._EffectCtrl.shadow(100, 40, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame868 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame871 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("超必杀2");
            return;
        }; // end function
        Timeline_1.prototype.frame873 = function () {
            this.mc.parent._mcctrl.moveTarget({ followmc: "move_mc" });
            return;
        }; // end function
        Timeline_1.prototype.frame901 = function () {
            return;
        }; // end function
        Timeline_1.prototype.frame928 = function () {
            this.mc.parent._EffectCtrl.shine(10027008);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shake(0, 5);
            return;
        }; // end function
        Timeline_1.prototype.frame941 = function () {
            this.mc.parent._EffectCtrl.shine(10027008);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shake(0, 5);
            return;
        }; // end function
        Timeline_1.prototype.frame954 = function () {
            this.mc.parent._EffectCtrl.shine(10027008);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shake(0, 5);
            return;
        }; // end function
        Timeline_1.prototype.frame967 = function () {
            this.mc.parent._EffectCtrl.shine(10027008);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shake(0, 5);
            return;
        }; // end function
        Timeline_1.prototype.frame980 = function () {
            this.mc.parent._EffectCtrl.shine(10027008);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shake(0, 5);
            return;
        }; // end function
        Timeline_1.prototype.frame1002 = function () {
            this.mc.parent._EffectCtrl.shadow(100, 40, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1006 = function () {
            this.mc.parent._mcctrl.movePercent(1, -2);
            this.mc.parent._mcctrl.dampingPercent(0, 0.1);
            return;
        }; // end function
        Timeline_1.prototype.frame1017 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("超必杀3");
            return;
        }; // end function
        Timeline_1.prototype.frame1018 = function () {
            this.mc.parent._mcctrl.setTouchFloor("超必杀4", true);
            return;
        }; // end function
        Timeline_1.prototype.frame1024 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1025 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame1027 = function () {
            this.mc.parent._EffectCtrl.shine(10027008);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shake(0, 10);
            return;
        }; // end function
        Timeline_1.prototype.frame1028 = function () {
            this.mc.parent._mcctrl.moveTarget(null);
            return;
        }; // end function
        Timeline_1.prototype.frame1053 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1141 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1162 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1243 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1284 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1312 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_juggo.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_juggo.Timeline_1");
})(hero_juggo || (hero_juggo = {}));
//# sourceMappingURL=Timeline_1.js.map