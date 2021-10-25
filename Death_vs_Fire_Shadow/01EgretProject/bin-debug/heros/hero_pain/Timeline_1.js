var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_pain;
(function (hero_pain) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [
                11, this.frame12, 15, this.frame16, 18, this.frame19, 26, this.frame27, 33, this.frame34, 38, this.frame39, 69, this.frame70, 79, this.frame80, 88, this.frame89, 98, this.frame99, 106, this.frame107, 114, this.frame115, 129, this.frame130, 157, this.frame158, 163, this.frame164, 169, this.frame170, 172, this.frame173, 181, this.frame182, 192, this.frame193, 198, this.frame199, 204, this.frame205, 216, this.frame217, 231, this.frame232, 237, this.frame238, 240, this.frame241, 255, this.frame256, 257, this.frame258, 267, this.frame268, 278, this.frame279, 303, this.frame304, 307, this.frame308, 309, this.frame310, 316, this.frame317, 320, this.frame321, 323, this.frame324, 336, this.frame337, 339, this.frame340, 341, this.frame342, 355, this.frame356, 380, this.frame381, 381, this.frame382, 409, this.frame410, 416, this.frame417, 422, this.frame423, 442, this.frame443, 450, this.frame451, 468, this.frame469, 476, this.frame477, 508, this.frame509, 532, this.frame533, 559, this.frame560, 560, this.frame561, 564, this.frame565, 610, this.frame611, 617, this.frame618, 631, this.frame632, 641, this.frame642, 665, this.frame666, 680, this.frame681, 717, this.frame718, 721, this.frame722, 757, this.frame758, 758, this.frame759, 766, this.frame767, 773, this.frame774, 798, this.frame799, 825, this.frame826, 888, this.frame889, 915, this.frame916, 927, this.frame928, 931, this.frame932, 940, this.frame941, 962, this.frame963, 979, this.frame980, 1012, this.frame1013, 1013, this.frame1014, 1020, this.frame1021, 1125, this.frame1126, 1134, this.frame1135, 1154, this.frame1155, 1240, this.frame1241, 1264, this.frame1265, 1325, this.frame1326, 1391, this.frame1392, 1419, this.frame1420
            ]);
            return;
        } // end 
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
        Timeline_1.prototype.frame27 = function () {
            this.mc.parent._mcctrl.dash(3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame34 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_1.prototype.frame39 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame70 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame80 = function () {
            this.mc.parent._mcctrl.move(4, -1);
            this.mc.parent._mcctrl.damping(0.2, 0.1);
            return;
        }; // end function
        Timeline_1.prototype.frame89 = function () {
            this.mc.parent._mcctrl.move(0, -4);
            this.mc.parent._mcctrl.damping(0, 0.2);
            return;
        }; // end function
        Timeline_1.prototype.frame99 = function () {
            this.mc.parent._mcctrl.setSkillAIR();
            this.mc.parent._mcctrl.setBishaAIR();
            return;
        }; // end function
        Timeline_1.prototype.frame107 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame115 = function () {
            this.mc.parent._mcctrl.move(0, -5);
            this.mc.parent._mcctrl.damping(0, 0.2);
            return;
        }; // end function
        Timeline_1.prototype.frame130 = function () {
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
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_1.prototype.frame170 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame173 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame182 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame193 = function () {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setSkill2();
            return;
        }; // end function
        Timeline_1.prototype.frame199 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame205 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame217 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame232 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setSkill2("砍技21");
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setJump();
            return;
        }; // end function
        Timeline_1.prototype.frame238 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame241 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame256 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, -1.5);
            this.mc.parent._mcctrl.dampingPercent(0, 0.1);
            return;
        }; // end function
        Timeline_1.prototype.frame258 = function () {
            this.mc.parent._mcctrl.setTouchFloor("砍42", true);
            return;
        }; // end function
        Timeline_1.prototype.frame268 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame279 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame304 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame308 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(100, 0, true);
            return;
        }; // end function
        Timeline_1.prototype.frame310 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame317 = function () {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill2("砍技22");
            this.mc.parent._mcctrl.setAttack("砍技12");
            return;
        }; // end function
        Timeline_1.prototype.frame321 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame324 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame337 = function () {
            this.mc.parent._mcctrl.movePercent(4, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            this.mc.parent._FighterCtrler.setCross(true);
            return;
        }; // end function
        Timeline_1.prototype.frame340 = function () {
            this.mc.parent._FighterCtrler.setCross(false);
            return;
        }; // end function
        Timeline_1.prototype.frame342 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame356 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame381 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame382 = function () {
            var shuilong_mc = this.mc.parent._mcctrl.addAttacker("man1");
            if (!shuilong_mc) {
                return;
            }
            var shuilong = new hero_pain.Timeline_7(this.mc.parent._mcctrl.getAttacker("man1", shuilong_mc.hashCode));
            return;
        }; // end function
        Timeline_1.prototype.frame410 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setJump();
            return;
        }; // end function
        Timeline_1.prototype.frame417 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame423 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame443 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame451 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame469 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame477 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame509 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame533 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "佩恩1");
            return;
        }; // end function
        Timeline_1.prototype.frame560 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame561 = function () {
            this.mc.parent._mcctrl.addAttacker("jiachong", { x: { moveToTarget: true, offset: 0 } });
            return;
        }; // end function
        Timeline_1.prototype.frame565 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame611 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame618 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame632 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame642 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_1.prototype.frame666 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame681 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "佩恩1");
            return;
        }; // end function
        Timeline_1.prototype.frame718 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame722 = function () {
            this.mc.parent._mcctrl.setHitTarget("bs0atm", "必杀2");
            this.mc.parent._mcctrl.moveTarget({ followmc: "move_mc", speed: { x: 5 } });
            return;
        }; // end function
        Timeline_1.prototype.frame758 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame759 = function () {
            this.mc.parent._mcctrl.moveTarget(null);
            return;
        }; // end function
        Timeline_1.prototype.frame767 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame774 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame799 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame826 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame889 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame916 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "佩恩1");
            return;
        }; // end function
        Timeline_1.prototype.frame928 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame932 = function () {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._mcctrl.move(0, -5);
            this.mc.parent._mcctrl.damping(0, 0.1);
            return;
        }; // end function
        Timeline_1.prototype.frame941 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame963 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame980 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "佩恩2");
            return;
        }; // end function
        Timeline_1.prototype.frame1013 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame1014 = function () {
            this.mc.parent._EffectCtrl.shine(14917603);
            return;
        }; // end function
        Timeline_1.prototype.frame1021 = function () {
            this.mc.parent._mcctrl.moveTarget({ followmc: "move_mc", speed: { x: 10, y: 5 } });
            return;
        }; // end function
        Timeline_1.prototype.frame1126 = function () {
            this.mc.parent._mcctrl.moveTarget(null);
            return;
        }; // end function
        Timeline_1.prototype.frame1135 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame1155 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1241 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1265 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1326 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1392 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1420 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_pain.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_pain.Timeline_1");
})(hero_pain || (hero_pain = {}));
//# sourceMappingURL=Timeline_1.js.map