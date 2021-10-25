var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_neji;
(function (hero_neji) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [
                11, this.frame12, 17, this.frame18, 22, this.frame23, 28, this.frame29, 32, this.frame33, 39, this.frame40, 69, this.frame70, 79, this.frame80, 84, this.frame85, 88, this.frame89, 94, this.frame95, 97, this.frame98, 105, this.frame106, 122, this.frame123, 127, this.frame128, 132, this.frame133, 136, this.frame137, 142, this.frame143, 148, this.frame149, 153, this.frame154, 160, this.frame161, 164, this.frame165, 172, this.frame173, 180, this.frame181, 184, this.frame185, 191, this.frame192, 196, this.frame197, 203, this.frame204, 209, this.frame210, 214, this.frame215, 217, this.frame218, 223, this.frame224, 225, this.frame226, 231, this.frame232, 237, this.frame238, 263, this.frame264, 270, this.frame271, 276, this.frame277, 282, this.frame283, 287, this.frame288, 298, this.frame299, 309, this.frame310, 310, this.frame311, 316, this.frame317, 325, this.frame326, 342, this.frame343, 345, this.frame346, 352, this.frame353, 357, this.frame358, 366, this.frame367, 381, this.frame382, 388, this.frame389, 393, this.frame394, 405, this.frame406, 414, this.frame415, 416, this.frame417, 424, this.frame425, 441, this.frame442, 451, this.frame452, 465, this.frame466, 472, this.frame473, 519, this.frame520, 528, this.frame529, 541, this.frame542, 543, this.frame544, 565, this.frame566, 573, this.frame574, 608, this.frame609, 621, this.frame622, 624, this.frame625, 644, this.frame645, 655, this.frame656, 672, this.frame673, 709, this.frame710, 711, this.frame712, 722, this.frame723, 733, this.frame734, 739, this.frame740, 752, this.frame753, 758, this.frame759, 780, this.frame781, 785, this.frame786, 806, this.frame807, 817, this.frame818, 818, this.frame819, 827, this.frame828, 830, this.frame831, 848, this.frame849, 909, this.frame910, 913, this.frame914, 918, this.frame919, 923, this.frame924, 933, this.frame934, 1015, this.frame1016, 1040, this.frame1041, 1138, this.frame1139, 1171, this.frame1172, 1207, this.frame1208
            ]);
            return;
        } // end 
        Timeline_1.prototype.frame12 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame18 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame23 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_1.prototype.frame29 = function () {
            this.mc.parent._mcctrl.dash(5);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame33 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_1.prototype.frame40 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame70 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame80 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame85 = function () {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }; // end function
        Timeline_1.prototype.frame89 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame95 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame98 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, -1);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0.1);
            return;
        }; // end function
        Timeline_1.prototype.frame106 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame123 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame128 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setZhao2();
            return;
        }; // end function
        Timeline_1.prototype.frame133 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame137 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame143 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame149 = function () {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao2();
            return;
        }; // end function
        Timeline_1.prototype.frame154 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame161 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame165 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame173 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setJump();
            return;
        }; // end function
        Timeline_1.prototype.frame181 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame185 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame192 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame197 = function () {
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setBishaUP();
            return;
        }; // end function
        Timeline_1.prototype.frame204 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame210 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame215 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame218 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.15, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame224 = function () {
            this.mc.parent._EffectCtrl.shine(16776960);
            return;
        }; // end function
        Timeline_1.prototype.frame226 = function () {
            this.mc.parent._mcctrl.setAttack("砍技11");
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao2();
            return;
        }; // end function
        Timeline_1.prototype.frame232 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame238 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame264 = function () {
            this.mc.parent._mcctrl.setAttack("砍技12");
            return;
        }; // end function
        Timeline_1.prototype.frame271 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame277 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame283 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.4, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame288 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame299 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame310 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame311 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame317 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame326 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame343 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame346 = function () {
            this.mc.parent._mcctrl.fire("zh1atm", { x: { start: 30, add: -0.5, min: 15 }, y: { start: 0, add: 0.1 }, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame353 = function () {
            this.mc.parent._mcctrl.setZhao2();
            return;
        }; // end function
        Timeline_1.prototype.frame358 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame367 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame382 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame389 = function () {
            this.mc.parent._EffectCtrl.shine(16777215);
            return;
        }; // end function
        Timeline_1.prototype.frame394 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame406 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame415 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame417 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame425 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(30, 0, true);
            this.mc.parent._EffectCtrl.slowDown(0.3);
            return;
        }; // end function
        Timeline_1.prototype.frame442 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame452 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame466 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame473 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_1.prototype.frame520 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame529 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "宁次1");
            return;
        }; // end function
        Timeline_1.prototype.frame542 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame544 = function () {
            this.mc.parent._EffectCtrl.shine(1080212);
            return;
        }; // end function
        Timeline_1.prototype.frame566 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame574 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame609 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "宁次1");
            return;
        }; // end function
        Timeline_1.prototype.frame622 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame625 = function () {
            this.mc.parent._EffectCtrl.shine(4218928);
            return;
        }; // end function
        Timeline_1.prototype.frame645 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame656 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame673 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "宁次2");
            return;
        }; // end function
        Timeline_1.prototype.frame710 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame712 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            this.mc.parent._EffectCtrl.shadow(0, 150, 150);
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame723 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame734 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame740 = function () {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame753 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame759 = function () {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame781 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame786 = function () {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame807 = function () {
            this.mc.parent._mcctrl.justHitToPlay("cbs", "超必杀1", false, false);
            this.mc.parent._mcctrl.dampingPercent(0.025, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame818 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame819 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame828 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame831 = function () {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame849 = function () {
            this.mc.parent._mcctrl.move(1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame910 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame914 = function () {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame919 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame924 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame934 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1016 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1041 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1139 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1172 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1208 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_neji.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_neji.Timeline_1");
})(hero_neji || (hero_neji = {}));
//# sourceMappingURL=Timeline_1.js.map