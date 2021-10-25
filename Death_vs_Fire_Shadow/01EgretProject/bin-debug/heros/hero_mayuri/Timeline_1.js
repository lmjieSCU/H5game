var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_mayuri;
(function (hero_mayuri) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [
                13, this.frame14, 21, this.frame22, 26, this.frame27, 33, this.frame34, 42, this.frame43, 44, this.frame45, 77, this.frame78, 89, this.frame90, 97, this.frame98, 104, this.frame105, 108, this.frame109, 109, this.frame110, 118, this.frame119, 121, this.frame122, 123, this.frame124, 132, this.frame133, 145, this.frame146, 150, this.frame151, 156, this.frame157, 161, this.frame162, 168, this.frame169, 171, this.frame172, 176, this.frame177, 181, this.frame182, 208, this.frame209, 215, this.frame216, 223, this.frame224, 233, this.frame234, 249, this.frame250, 252, this.frame253, 258, this.frame259, 262, this.frame263, 266, this.frame267, 267, this.frame268, 268, this.frame269, 274, this.frame275, 278, this.frame279, 284, this.frame285, 289, this.frame290, 298, this.frame299, 300, this.frame301, 307, this.frame308, 328, this.frame329, 344, this.frame345, 346, this.frame347, 385, this.frame386, 397, this.frame398, 400, this.frame401, 417, this.frame418, 424, this.frame425, 436, this.frame437, 448, this.frame449, 464, this.frame465, 484, this.frame485, 497, this.frame498, 525, this.frame526, 528, this.frame529, 531, this.frame532, 535, this.frame536, 540, this.frame541, 545, this.frame546, 566, this.frame567, 581, this.frame582, 603, this.frame604, 626, this.frame627, 627, this.frame628, 635, this.frame636, 648, this.frame649, 672, this.frame673, 702, this.frame703, 706, this.frame707, 738, this.frame739, 746, this.frame747, 792, this.frame793, 813, this.frame814, 874, this.frame875, 964, this.frame965, 978, this.frame979, 1060, this.frame1061, 1088, this.frame1089, 1145, this.frame1146, 1175, this.frame1176, 1201, this.frame1202
            ]);
            return;
        } // end 
        Timeline_1.prototype.frame14 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame22 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame27 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_1.prototype.frame34 = function () {
            this.mc.parent._mcctrl.dash(4);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(50, -255, 0);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame43 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_1.prototype.frame45 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame78 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame90 = function () {
            this.mc.parent._mcctrl.move(20, -5);
            this.mc.parent._mcctrl.damping(2, 0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame98 = function () {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }; // end function
        Timeline_1.prototype.frame105 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame109 = function () {
            this.mc.parent._mcctrl.movePercent(2, 2);
            this.mc.parent._mcctrl.setTouchFloor("跳招21", true);
            this.mc.parent._mcctrl.setHitTarget("tz0atm", "跳招21");
            this.mc.parent._EffectCtrl.shadow(50, -255, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame110 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame119 = function () {
            this.mc.parent._mcctrl.loop("跳招0");
            return;
        }; // end function
        Timeline_1.prototype.frame122 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame124 = function () {
            this.mc.parent._mcctrl.move(-5, -5);
            this.mc.parent._mcctrl.damping(0.5, 0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame133 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame146 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.15, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame151 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setSkill1();
            return;
        }; // end function
        Timeline_1.prototype.frame157 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame162 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame169 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.4, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame172 = function () {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }; // end function
        Timeline_1.prototype.frame177 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame182 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame209 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame216 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame224 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame234 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame250 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame253 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame259 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame263 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame267 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame268 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame269 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame275 = function () {
            this.mc.parent._mcctrl.setJump();
            return;
        }; // end function
        Timeline_1.prototype.frame279 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3("招32");
            return;
        }; // end function
        Timeline_1.prototype.frame285 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame290 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame299 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame301 = function () {
            this.mc.parent._EffectCtrl.shine(13434622);
            return;
        }; // end function
        Timeline_1.prototype.frame308 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame329 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame345 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame347 = function () {
            this.mc.parent._mcctrl.fire("zh2atm", { x: 15, y: { start: -8, add: 1, max: 10 }, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame386 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame398 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame401 = function () {
            this.mc.parent._EffectCtrl.shadow(50, -255, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame418 = function () {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame425 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame437 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame449 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame465 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_1.prototype.frame485 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame498 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "涅浊利1");
            return;
        }; // end function
        Timeline_1.prototype.frame526 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame529 = function () {
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame532 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(20, -60, true);
            this.mc.parent._mcctrl.move(-3, -3);
            this.mc.parent._mcctrl.damping(0.05, 0.05);
            this.mc.parent._EffectCtrl.slowDown(1);
            return;
        }; // end function
        Timeline_1.prototype.frame536 = function () {
            this.mc.parent._EffectCtrl.shine(16729113);
            return;
        }; // end function
        Timeline_1.prototype.frame541 = function () {
            this.mc.parent._EffectCtrl.shine(16729113);
            return;
        }; // end function
        Timeline_1.prototype.frame546 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame567 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame582 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "涅浊利1");
            return;
        }; // end function
        Timeline_1.prototype.frame604 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._EffectCtrl.shadow(50, -255, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame627 = function () {
            this.mc.parent._mcctrl.justHitToPlay("bs2", "必杀2", false);
            return;
        }; // end function
        Timeline_1.prototype.frame628 = function () {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame636 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame649 = function () {
            this.mc.parent._EffectCtrl.shadow(50, -255, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame673 = function () {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.slowDown(1);
            return;
        }; // end function
        Timeline_1.prototype.frame703 = function () {
            this.mc.parent._EffectCtrl.shine(15859712);
            this.mc.parent._EffectCtrl.slowDown(1);
            return;
        }; // end function
        Timeline_1.prototype.frame707 = function () {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame739 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame747 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "涅浊利2");
            return;
        }; // end function
        Timeline_1.prototype.frame793 = function () {
            this.mc.parent._EffectCtrl.shine(7100304);
            return;
        }; // end function
        Timeline_1.prototype.frame814 = function () {
            this.mc.parent._EffectCtrl.shine(7100304);
            return;
        }; // end function
        Timeline_1.prototype.frame875 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            var shuilong_mc = this.mc.parent._mcctrl.addAttacker("wk", { applyG: true });
            if (!shuilong_mc) {
                return;
            }
            var shuilong = new hero_mayuri.Timeline_12(this.mc.parent._mcctrl.getAttacker("wk", shuilong_mc.hashCode));
            return;
        }; // end function
        Timeline_1.prototype.frame965 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame979 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1061 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1089 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1146 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1176 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1202 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_mayuri.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_mayuri.Timeline_1");
})(hero_mayuri || (hero_mayuri = {}));
//# sourceMappingURL=Timeline_1.js.map