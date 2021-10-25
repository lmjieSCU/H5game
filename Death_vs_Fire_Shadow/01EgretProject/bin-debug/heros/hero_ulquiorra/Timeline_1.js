var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*主骨骼动画形态1对应的帧事件
*/
var hero_ulquiorra;
(function (hero_ulquiorra) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [
                9, this.frame10, 15, this.frame16, 23, this.frame24, 28, this.frame29, 31, this.frame32, 64, this.frame65, 76, this.frame77, 83, this.frame84, 87, this.frame88, 92, this.frame93, 93, this.frame94, 96, this.frame97, 101, this.frame102, 111, this.frame112, 118, this.frame119, 121, this.frame122, 126, this.frame127, 131, this.frame132, 133, this.frame134, 140, this.frame141, 145, this.frame146, 148, this.frame149, 150, this.frame151, 156, this.frame157, 162, this.frame163, 170, this.frame171, 182, this.frame183, 188, this.frame189, 189, this.frame190, 203, this.frame204, 213, this.frame214, 220, this.frame221, 225, this.frame226, 235, this.frame236, 248, this.frame249, 255, this.frame256, 265, this.frame266, 271, this.frame272, 285, this.frame286, 307, this.frame308, 331, this.frame332, 338, this.frame339, 354, this.frame355, 378, this.frame379, 388, this.frame389, 394, this.frame395, 417, this.frame418, 425, this.frame426, 444, this.frame445, 453, this.frame454, 457, this.frame458, 464, this.frame465, 475, this.frame476, 498, this.frame499, 503, this.frame504, 520, this.frame521, 531, this.frame532, 535, this.frame536, 554, this.frame555, 557, this.frame558, 558, this.frame559, 575, this.frame576, 579, this.frame580, 590, this.frame591, 605, this.frame606, 623, this.frame624, 627, this.frame628, 641, this.frame642, 642, this.frame643, 659, this.frame660, 676, this.frame677, 753, this.frame754, 757, this.frame758, 788, this.frame789, 809, this.frame810, 884, this.frame885, 904, this.frame905, 975, this.frame976, 1039, this.frame1040, 1099, this.frame1100, 1144, this.frame1145
            ]);
        }
        Timeline_1.prototype.frame10 = function () {
            this.mc.parent._EffectCtrl.shadow(200, 200, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame16 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame24 = function () {
            this.mc.parent._mcctrl.dash(4);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(200, 200, 0);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame29 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_1.prototype.frame32 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame65 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame77 = function () {
            this.mc.parent._mcctrl.setAirMove(true);
            this.mc.parent._mcctrl.move(0, -2);
            this.mc.parent._mcctrl.damping(0, 0.2);
            return;
        }; // end function
        Timeline_1.prototype.frame84 = function () {
            this.mc.parent._mcctrl.setSkillAIR();
            this.mc.parent._mcctrl.setBishaAIR();
            return;
        }; // end function
        Timeline_1.prototype.frame88 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame93 = function () {
            this.mc.parent._mcctrl.move(0, -1);
            return;
        }; // end function
        Timeline_1.prototype.frame94 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame97 = function () {
            this.mc.parent._mcctrl.move(0, -5);
            this.mc.parent._mcctrl.damping(0, 0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame102 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame112 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame119 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame122 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_1.prototype.frame127 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame132 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame134 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame141 = function () {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }; // end function
        Timeline_1.prototype.frame146 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame149 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame151 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame157 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_1.prototype.frame163 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame171 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame183 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame189 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(100, 0, true);
            return;
        }; // end function
        Timeline_1.prototype.frame190 = function () {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame204 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame214 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame221 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame226 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setJump();
            return;
        }; // end function
        Timeline_1.prototype.frame236 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame249 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame256 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame266 = function () {
            this.mc.parent._EffectCtrl.shine(38656);
            return;
        }; // end function
        Timeline_1.prototype.frame272 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame286 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame308 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame332 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setZhao3();
            return;
        }; // end function
        Timeline_1.prototype.frame339 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame355 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame379 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame389 = function () {
            this.mc.parent._EffectCtrl.shine(38656);
            return;
        }; // end function
        Timeline_1.prototype.frame395 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame418 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame426 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame445 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame454 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_1.prototype.frame458 = function () {
            this.mc.parent._FighterCtrler.setCross(true);
            return;
        }; // end function
        Timeline_1.prototype.frame465 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame476 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "小乌1");
            return;
        }; // end function
        Timeline_1.prototype.frame499 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame504 = function () {
            this.mc.parent._EffectCtrl.shine(16711680);
            return;
        }; // end function
        Timeline_1.prototype.frame521 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame532 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame536 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "小乌1");
            return;
        }; // end function
        Timeline_1.prototype.frame555 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame558 = function () {
            this.mc.parent._mcctrl.move(15, -15);
            this.mc.parent._EffectCtrl.shadow(0, 0, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame559 = function () {
            this.mc.parent._EffectCtrl.shine(0);
            return;
        }; // end function
        Timeline_1.prototype.frame576 = function () {
            this.mc.parent._mcctrl.move(10, -1);
            this.mc.parent._mcctrl.damping(1, 0.05);
            return;
        }; // end function
        Timeline_1.prototype.frame580 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame591 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame606 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "小乌1");
            return;
        }; // end function
        Timeline_1.prototype.frame624 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame628 = function () {
            this.mc.parent._mcctrl.move(15, 15);
            this.mc.parent._mcctrl.setTouchFloor("空中必杀2", true);
            return;
        }; // end function
        Timeline_1.prototype.frame642 = function () {
            this.mc.parent._mcctrl.loop("空中必杀loop");
            this.mc.parent._EffectCtrl.shadow(0, 0, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame643 = function () {
            this.mc.parent._EffectCtrl.shadow(0, 0, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame660 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame677 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "小乌1");
            return;
        }; // end function
        Timeline_1.prototype.frame754 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame758 = function () {
            this.mc.parent._EffectCtrl.shine(0);
            return;
        }; // end function
        Timeline_1.prototype.frame789 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame810 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame885 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame905 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame976 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1040 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1100 = function () {
            this.mc.parent._EffectCtrl.startWanKai("一户万解");
            return;
        }; // end function
        Timeline_1.prototype.frame1145 = function () {
            this.mc.parent._FighterCtrler.doWanKai();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_ulquiorra.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_ulquiorra.Timeline_1");
})(hero_ulquiorra || (hero_ulquiorra = {}));
//# sourceMappingURL=Timeline_1.js.map