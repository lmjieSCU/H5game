var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*主骨骼动画形态1对应的帧事件
*/
var hero_obito;
(function (hero_obito) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [
                12, this.frame13, 21, this.frame22, 29, this.frame30, 37, this.frame38, 40, this.frame41, 44, this.frame45, 52, this.frame53, 80, this.frame81, 103, this.frame104, 104, this.frame105, 113, this.frame114, 124, this.frame125, 133, this.frame134, 139, this.frame140, 144, this.frame145, 147, this.frame148, 160, this.frame161, 165, this.frame166, 170, this.frame171, 174, this.frame175, 182, this.frame183, 186, this.frame187, 191, this.frame192, 195, this.frame196, 201, this.frame202, 206, this.frame207, 210, this.frame211, 216, this.frame217, 220, this.frame221, 227, this.frame228, 231, this.frame232, 232, this.frame233, 238, this.frame239, 248, this.frame249, 251, this.frame252, 253, this.frame254, 266, this.frame267, 272, this.frame273, 282, this.frame283, 284, this.frame285, 290, this.frame291, 296, this.frame297, 310, this.frame311, 335, this.frame336, 348, this.frame349, 367, this.frame368, 373, this.frame374, 381, this.frame382, 382, this.frame383, 400, this.frame401, 401, this.frame402, 414, this.frame415, 420, this.frame421, 432, this.frame433, 440, this.frame441, 441, this.frame442, 446, this.frame447, 453, this.frame454, 459, this.frame460, 460, this.frame461, 464, this.frame465, 481, this.frame482, 491, this.frame492, 500, this.frame501, 515, this.frame516, 579, this.frame580, 594, this.frame595, 600, this.frame601, 617, this.frame618, 619, this.frame620, 668, this.frame669, 677, this.frame678, 685, this.frame686, 743, this.frame744, 759, this.frame760, 772, this.frame773, 886, this.frame887, 887, this.frame888, 958, this.frame959, 971, this.frame972, 1072, this.frame1073, 1094, this.frame1095, 1116, this.frame1117, 1163, this.frame1164, 1221, this.frame1222, 1266, this.frame1267, 1285, this.frame1286, 1289, this.frame1290
            ]);
        }
        Timeline_1.prototype.frame13 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame22 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame30 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_1.prototype.frame38 = function () {
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame41 = function () {
            this.mc.parent._mcctrl.movePercent(4.5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame45 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame53 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame81 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame104 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame105 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("招1");
            return;
        }; // end function
        Timeline_1.prototype.frame114 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(40, 0, true);
            return;
        }; // end function
        Timeline_1.prototype.frame125 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame134 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame140 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            return;
        }; // end function
        Timeline_1.prototype.frame145 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame148 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame161 = function () {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setSkill2("砍技21");
            return;
        }; // end function
        Timeline_1.prototype.frame166 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame171 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame175 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame183 = function () {
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao2();
            return;
        }; // end function
        Timeline_1.prototype.frame187 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame192 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame196 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame202 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setAttack("砍5");
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame207 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame211 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame217 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame221 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame228 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame232 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.shadow(-100, -100, -100);
            return;
        }; // end function
        Timeline_1.prototype.frame233 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame239 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame249 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame252 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame254 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame267 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame273 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame283 = function () {
            this.mc.parent._mcctrl.justHitToPlay("zh3", "招32", false, false);
            return;
        }; // end function
        Timeline_1.prototype.frame285 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame291 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame297 = function () {
            if (this.mc.parent._FighterCtrler.target) {
                this.mc.parent._FighterCtrler.target.visible = false;
            }
            return;
        }; // end function
        Timeline_1.prototype.frame311 = function () {
            var shuilong_mc = this.mc.parent._mcctrl.addAttacker("zh3mc", { applyG: false });
            if (!shuilong_mc) {
                return;
            }
            var shuilong = new hero_obito.Timeline_6(this.mc.parent._mcctrl.getAttacker("zh3mc", shuilong_mc.hashCode));
            return;
        }; // end function
        Timeline_1.prototype.frame336 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame349 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame368 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame374 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame382 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame383 = function () {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.setHitTarget("kj20atm", "砍技21");
            this.mc.parent._EffectCtrl.shadow(-100, -100, -100);
            return;
        }; // end function
        Timeline_1.prototype.frame401 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame402 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame415 = function () {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame421 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame433 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame441 = function () {
            this.mc.parent._mcctrl.moveTarget({ followmc: "move_mc" });
            return;
        }; // end function
        Timeline_1.prototype.frame442 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame447 = function () {
            this.mc.parent._mcctrl.moveTarget(null);
            return;
        }; // end function
        Timeline_1.prototype.frame454 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame460 = function () {
            this.mc.parent._mcctrl.moveTarget({ followmc: "move_mc" });
            return;
        }; // end function
        Timeline_1.prototype.frame461 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame465 = function () {
            this.mc.parent._mcctrl.moveTarget(null);
            return;
        }; // end function
        Timeline_1.prototype.frame482 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame492 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame501 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "带土1");
            return;
        }; // end function
        Timeline_1.prototype.frame516 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame580 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame595 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame601 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "带土1");
            return;
        }; // end function
        Timeline_1.prototype.frame618 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame620 = function () {
            this.mc.parent._mcctrl.setHitTarget("sbs0ckm", "上必杀2");
            this.mc.parent._mcctrl.moveTarget({ followmc: "move_mc", speed: 8 });
            return;
        }; // end function
        Timeline_1.prototype.frame669 = function () {
            this.mc.parent._mcctrl.moveTarget(null);
            this.mc.parent._mcctrl.moveTarget(null);
            return;
        }; // end function
        Timeline_1.prototype.frame678 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame686 = function () {
            if (this.mc.parent._FighterCtrler.target) {
                this.mc.parent._FighterCtrler.target.visible = false;
            }
            return;
        }; // end function
        Timeline_1.prototype.frame744 = function () {
            if (this.mc.parent._FighterCtrler.target) {
                this.mc.parent._FighterCtrler.target.visible = true;
            }
            return;
        }; // end function
        Timeline_1.prototype.frame760 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame773 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "带土2");
            return;
        }; // end function
        Timeline_1.prototype.frame887 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame888 = function () {
            this.mc.parent._mcctrl.move(-10, 0);
            this.mc.parent._mcctrl.damping(2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame959 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame972 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1073 = function () {
            //if (sw == true)   yx modify
            {
                this.mc.parent._mcctrl.stop();
            }
            return;
        }; // end function
        Timeline_1.prototype.frame1095 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1117 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1164 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1222 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1267 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1286 = function () {
            this.mc.parent._EffectCtrl.startWanKai();
            return;
        }; // end function
        Timeline_1.prototype.frame1290 = function () {
            this.mc.parent._FighterCtrler.doWanKai();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_obito.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_obito.Timeline_1");
})(hero_obito || (hero_obito = {}));
//# sourceMappingURL=Timeline_1.js.map