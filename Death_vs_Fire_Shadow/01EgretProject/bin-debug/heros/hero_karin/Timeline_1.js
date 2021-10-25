var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_karin;
(function (hero_karin) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [
                11, this.frame12, 18, this.frame19, 24, this.frame25, 31, this.frame32, 35, this.frame36, 73, this.frame74, 89, this.frame90, 107, this.frame108, 113, this.frame114, 123, this.frame124, 129, this.frame130, 131, this.frame132, 150, this.frame151, 164, this.frame165, 170, this.frame171, 175, this.frame176, 178, this.frame179, 187, this.frame188, 195, this.frame196, 200, this.frame201, 206, this.frame207, 214, this.frame215, 225, this.frame226, 233, this.frame234, 242, this.frame243, 245, this.frame246, 256, this.frame257, 262, this.frame263, 270, this.frame271, 287, this.frame288, 297, this.frame298, 301, this.frame302, 317, this.frame318, 342, this.frame343, 349, this.frame350, 356, this.frame357, 357, this.frame358, 358, this.frame359, 367, this.frame368, 374, this.frame375, 382, this.frame383, 400, this.frame401, 403, this.frame404, 406, this.frame407, 409, this.frame410, 429, this.frame430, 444, this.frame445, 453, this.frame454, 464, this.frame465, 470, this.frame471, 477, this.frame478, 494, this.frame495, 498, this.frame499, 521, this.frame522, 530, this.frame531, 543, this.frame544, 550, this.frame551, 568, this.frame569, 579, this.frame580, 622, this.frame623, 626, this.frame627, 634, this.frame635, 652, this.frame653, 669, this.frame670, 717, this.frame718, 727, this.frame728, 734, this.frame735, 735, this.frame736, 743, this.frame744, 752, this.frame753, 775, this.frame776, 820, this.frame821, 878, this.frame879, 880, this.frame881, 887, this.frame888, 896, this.frame897, 911, this.frame912, 963, this.frame964, 1053, this.frame1054, 1072, this.frame1073, 1099, this.frame1100, 1149, this.frame1150, 1233, this.frame1234, 1265, this.frame1266
            ]);
            return;
        } // end 
        Timeline_1.prototype.frame12 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame19 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_1.prototype.frame25 = function () {
            this.mc.parent._mcctrl.dash(3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame32 = function () {
            this.mc.parent._mcctrl.dashStop();
            this.mc.parent._mcctrl.move(0, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame36 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame74 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame90 = function () {
            this.mc.parent._mcctrl.move(7, -1);
            this.mc.parent._mcctrl.damping(0.3, 0.05);
            return;
        }; // end function
        Timeline_1.prototype.frame108 = function () {
            this.mc.parent._mcctrl.setBishaAIR();
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }; // end function
        Timeline_1.prototype.frame114 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame124 = function () {
            this.mc.parent._mcctrl.move(0, -4);
            return;
        }; // end function
        Timeline_1.prototype.frame130 = function () {
            this.mc.parent._mcctrl.move(-10, -10);
            this.mc.parent._mcctrl.damping(1, 1);
            return;
        }; // end function
        Timeline_1.prototype.frame132 = function () {
            this.mc.parent._mcctrl.fire("tzatm", { x: 12, y: 12, hold: 3, hits: 3 });
            return;
        }; // end function
        Timeline_1.prototype.frame151 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame165 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame171 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame176 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame179 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame188 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame196 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }; // end function
        Timeline_1.prototype.frame201 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame207 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame215 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame226 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setSkill2("砍技21");
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame234 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame243 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame246 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame257 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end function
        Timeline_1.prototype.frame263 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame271 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame288 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame298 = function () {
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame302 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(30, 0, true);
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame318 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("砍2");
            return;
        }; // end function
        Timeline_1.prototype.frame343 = function () {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame350 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame357 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("砍技21");
        };
        Timeline_1.prototype.frame358 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame359 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame368 = function () {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setJump();
            return;
        }; // end function
        Timeline_1.prototype.frame375 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame383 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame401 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame404 = function () {
            this.mc.parent._mcctrl.fire("zh1atm", { x: { start: 20 }, y: 0, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame407 = function () {
            this.mc.parent._mcctrl.fire("zh1atm", { x: { start: 20 }, y: 0, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame410 = function () {
            this.mc.parent._mcctrl.fire("zh11atm", { x: { start: 20 }, y: 0, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame430 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame445 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame454 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame465 = function () {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao3();
            return;
        }; // end function
        Timeline_1.prototype.frame471 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame478 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame495 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame499 = function () {
            this.mc.parent._mcctrl.fire("zh3atm", { x: 10, y: { start: 0, min: -12, add: -0.5 }, hold: 2, hits: 3 });
            return;
        }; // end function
        Timeline_1.prototype.frame522 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame531 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame544 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame551 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_1.prototype.frame569 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame580 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "香磷1");
            return;
        }; // end function
        Timeline_1.prototype.frame623 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame627 = function () {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._mcctrl.addAttacker("zzz", { x: { moveToTarget: true, offset: 0 }, y: { moveToTarget: false }, applyG: false });
            return;
        }; // end function
        Timeline_1.prototype.frame635 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame653 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame670 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "香磷1");
            return;
        }; // end function
        Timeline_1.prototype.frame718 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame728 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("上必杀2");
        };
        Timeline_1.prototype.frame735 = function () {
            this.mc.parent._EffectCtrl.shine(11401981);
            return;
        }; // end function
        Timeline_1.prototype.frame736 = function () {
            this.mc.parent._FighterCtrler.addHpPercent(0.03);
            return;
        }; // end function
        Timeline_1.prototype.frame744 = function () {
            this.mc.parent._mcctrl.setAllAct();
            return;
        }; // end function
        Timeline_1.prototype.frame753 = function () {
            this.mc.parent._mcctrl.loop("上必杀2");
            return;
        }; // end function
        Timeline_1.prototype.frame776 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame821 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "香磷2");
            return;
        }; // end function
        Timeline_1.prototype.frame879 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame881 = function () {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._mcctrl.addAttacker("zzz", { x: { moveToTarget: true, offset: 0 }, y: { moveToTarget: false }, applyG: false });
            return;
        }; // end function`
        Timeline_1.prototype.frame888 = function () {
            this.mc.parent._mcctrl.justHitToPlay("cbs1", "超必杀2", false);
            return;
        }; // end function
        Timeline_1.prototype.frame897 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame912 = function () {
            var shuilong_mc = this.mc.parent._mcctrl.addAttacker("zzz2", { applyG: false });
            if (!shuilong_mc) {
                return;
            }
            var shuilong = new hero_karin.Timeline_15(this.mc.parent._mcctrl.getAttacker("zzz2", shuilong_mc.hashCode));
            return;
        }; // end function
        Timeline_1.prototype.frame964 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1054 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1073 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1100 = function () {
            this.mc.parent._EffectCtrl.shine(11401981);
            return;
        }; // end function
        Timeline_1.prototype.frame1150 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1234 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1266 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_karin.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_karin.Timeline_1");
})(hero_karin || (hero_karin = {}));
//# sourceMappingURL=Timeline_1.js.map