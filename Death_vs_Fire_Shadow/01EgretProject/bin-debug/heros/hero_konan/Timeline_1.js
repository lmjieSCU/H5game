var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*主骨骼动画对应的帧事件
*/
var hero_konan;
(function (hero_konan) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [22, this.frame23, 29, this.frame30, 35, this.frame36, 39, this.frame40, 77, this.frame78, 89, this.frame90, 101, this.frame102, 107, this.frame108, 109, this.frame110, 125, this.frame126, 150, this.frame151, 168, this.frame169, 174, this.frame175, 177, this.frame178, 198, this.frame199, 206, this.frame207, 209, this.frame210, 226, this.frame227, 238, this.frame239, 246, this.frame247, 255, this.frame256, 269, this.frame270, 276, this.frame277, 281, this.frame282, 284, this.frame285, 291, this.frame292, 296, this.frame297, 304, this.frame305, 329, this.frame330, 354, this.frame355, 363, this.frame364, 372, this.frame373, 390, this.frame391, 427, this.frame428, 442, this.frame443, 449, this.frame450, 456, this.frame457, 465, this.frame466, 473, this.frame474, 497, this.frame498, 500, this.frame501, 547, this.frame548, 556, this.frame557, 569, this.frame570, 575, this.frame576, 590, this.frame591, 600, this.frame601, 614, this.frame615, 626, this.frame627, 649, this.frame650, 667, this.frame668, 680, this.frame681, 683, this.frame684, 728, this.frame729, 743, this.frame744, 749, this.frame750, 751, this.frame752, 766, this.frame767, 769, this.frame770, 774, this.frame775, 787, this.frame788, 788, this.frame789, 822, this.frame823, 823, this.frame824, 886, this.frame887, 894, this.frame895, 903, this.frame904, 913, this.frame914, 998, this.frame999, 1018, this.frame1019, 1081, this.frame1082, 1185, this.frame1186, 1217, this.frame1218]);
        }
        Timeline_1.prototype.frame23 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_1.prototype.frame30 = function () {
            this.mc.parent._mcctrl.dash(3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
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
        Timeline_1.prototype.frame78 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame90 = function () {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }; // end function
        Timeline_1.prototype.frame102 = function () {
            this.mc.parent._mcctrl.setBishaAIR();
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }; // end function
        Timeline_1.prototype.frame108 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame110 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame126 = function () {
            this.mc.parent._mcctrl.move(-1, -2);
            this.mc.parent._mcctrl.damping(0.05, 0.05);
            return;
        }; // end function
        Timeline_1.prototype.frame151 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame169 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setDash();
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
        Timeline_1.prototype.frame199 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }; // end function
        Timeline_1.prototype.frame207 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame210 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame227 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame239 = function () {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_1.prototype.frame247 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame256 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame270 = function () {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.15, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame277 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍技12");
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_1.prototype.frame282 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame285 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame292 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame297 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame305 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame330 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame355 = function () {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setJump();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_1.prototype.frame364 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame373 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame391 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame428 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame443 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame450 = function () {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._mcctrl.addAttacker("zh2mc", { x: { moveToTarget: true, offset: 0 }, applyG: false });
            return;
        }; // end function
        Timeline_1.prototype.frame457 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_1.prototype.frame466 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame474 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame498 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame501 = function () {
            this.mc.parent._mcctrl.addAttacker("aabb", { x: { moveToTarget: true, offset: 0 }, y: { moveToTarget: true, offset: -20 }, applyG: false });
            return;
        }; // end function
        Timeline_1.prototype.frame548 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame557 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame570 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame576 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame591 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame601 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "小南1");
            return;
        }; // end function
        Timeline_1.prototype.frame615 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame627 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame650 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame668 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "小南1");
            return;
        }; // end function
        Timeline_1.prototype.frame681 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame684 = function () {
            this.mc.parent._mcctrl.addAttacker("sbsmc", { x: { followTarget: true, offset: 0 }, y: { followTarget: true, offset: 0 }, applyG: false });
            return;
        }; // end function
        Timeline_1.prototype.frame729 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame744 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame750 = function () {
            this.mc.parent._EffectCtrl.shine(16409859);
            return;
        }; // end function
        Timeline_1.prototype.frame752 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "小南2");
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }; // end function
        Timeline_1.prototype.frame767 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame770 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("超必杀2");
            this.mc.parent._mcctrl.isApplyG(true);
            this.mc.parent._mcctrl.move(15, 25);
            this.mc.parent._mcctrl.setTouchFloor("超必杀3", true);
            return;
        }; // end function
        Timeline_1.prototype.frame775 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame788 = function () {
            // this.Cbshit = false;
            return;
        }; // end function
        Timeline_1.prototype.frame789 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "小南2");
            return;
        }; // end function
        Timeline_1.prototype.frame823 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame824 = function () {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._mcctrl.move(0, -20);
            this.mc.parent._mcctrl.damping(0, 0.8);
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }; // end function
        Timeline_1.prototype.frame887 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("超必杀2");
            this.mc.parent._mcctrl.move(15, 25);
            this.mc.parent._mcctrl.setTouchFloor("超必杀3", true);
            return;
        }; // end function
        Timeline_1.prototype.frame895 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame904 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame914 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame999 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1019 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1082 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1186 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1218 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_konan.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_konan.Timeline_1");
})(hero_konan || (hero_konan = {}));
//# sourceMappingURL=Timeline_1.js.map