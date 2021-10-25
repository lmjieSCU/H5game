var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_uryuu;
(function (hero_uryuu) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [
                15, this.frame16, 24, this.frame25, 26, this.frame27, 30, this.frame31, 37, this.frame38, 42, this.frame43, 70, this.frame71, 80, this.frame81, 85, this.frame86, 90, this.frame91, 95, this.frame96, 97, this.frame98, 103, this.frame104, 108, this.frame109, 109, this.frame110, 118, this.frame119, 132, this.frame133, 148, this.frame149, 154, this.frame155, 160, this.frame161, 166, this.frame167, 170, this.frame171, 179, this.frame180, 184, this.frame185, 192, this.frame193, 203, this.frame204, 213, this.frame214, 216, this.frame217, 222, this.frame223, 229, this.frame230, 241, this.frame242, 251, this.frame252, 253, this.frame254, 255, this.frame256, 263, this.frame264, 285, this.frame286, 292, this.frame293, 302, this.frame303, 310, this.frame311, 326, this.frame327, 328, this.frame329, 335, this.frame336, 340, this.frame341, 348, this.frame349, 361, this.frame362, 363, this.frame364, 370, this.frame371, 378, this.frame379, 384, this.frame385, 400, this.frame401, 433, this.frame434, 443, this.frame444, 451, this.frame452, 463, this.frame464, 474, this.frame475, 510, this.frame511, 525, this.frame526, 549, this.frame550, 550, this.frame551, 569, this.frame570, 577, this.frame578, 606, this.frame607, 610, this.frame611, 621, this.frame622, 629, this.frame630, 630, this.frame631, 643, this.frame644, 664, this.frame665, 699, this.frame700, 752, this.frame753, 765, this.frame766, 800, this.frame801, 859, this.frame860, 926, this.frame927, 944, this.frame945, 1035, this.frame1036, 1059, this.frame1060, 1138, this.frame1139, 1175, this.frame1176, 1198, this.frame1199
            ]);
            return;
        } // end 
        Timeline_1.prototype.frame16 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame25 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame27 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_1.prototype.frame31 = function () {
            this.mc.parent._mcctrl.dash(3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(0, 150, 255);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame38 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_1.prototype.frame43 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame71 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame81 = function () {
            this.mc.parent._mcctrl.move(0, -2);
            this.mc.parent._mcctrl.damping(0, 0.1);
            return;
        }; // end function
        Timeline_1.prototype.frame86 = function () {
            this.mc.parent._mcctrl.fire("tkatm", { x: 15, y: 13, hold: 0.5, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame91 = function () {
            this.mc.parent._mcctrl.fire("tkatm", { x: 15, y: 13, hold: 0.5, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame96 = function () {
            this.mc.parent._mcctrl.fire("tkatm", { x: 15, y: 13, hold: 0.5, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame98 = function () {
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            this.mc.parent._mcctrl.setBishaAIR();
            return;
        }; // end function
        Timeline_1.prototype.frame104 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame109 = function () {
            this.mc.parent._mcctrl.move(0, -2);
            this.mc.parent._mcctrl.damping(0, 0.1);
            return;
        }; // end function
        Timeline_1.prototype.frame110 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame119 = function () {
            this.mc.parent._mcctrl.move(-2, -2);
            this.mc.parent._mcctrl.damping(0.1, 0.1);
            this.mc.parent._mcctrl.fire("tzatm", { x: 20, y: 10, hold: 1, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame133 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame149 = function () {
            this.mc.parent._mcctrl.fire("k1atm", { x: 15, y: 0, hold: 0.3, hits: 1, hp: 50 });
            return;
        }; // end function
        Timeline_1.prototype.frame155 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame161 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame167 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame171 = function () {
            this.mc.parent._mcctrl.move(15, 0);
            this.mc.parent._mcctrl.damping(1.5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame180 = function () {
            this.mc.parent._mcctrl.fire("k2atm", { x: 15, y: 0, hold: 0.5, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame185 = function () {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame193 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame204 = function () {
            this.mc.parent._mcctrl.move(-5, -8);
            this.mc.parent._mcctrl.damping(0.2, 0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame214 = function () {
            this.mc.parent._mcctrl.setTouchFloor("砍32", true);
            this.mc.parent._mcctrl.fire("k3atm", { x: 15, y: 5, hold: 0.5, hits: 1, hp: 50 });
            this.mc.parent._mcctrl.fire("k31atm", { x: 18, y: 2, hold: 0.5, hits: 1, hp: 50 });
            this.mc.parent._mcctrl.fire("k32atm", { x: 12, y: 8, hold: 0.5, hits: 1, hp: 50 });
            return;
        }; // end function
        Timeline_1.prototype.frame217 = function () {
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            this.mc.parent._mcctrl.setBishaAIR();
            return;
        }; // end function
        Timeline_1.prototype.frame223 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame230 = function () {
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setBishaSUPER();
            return;
        }; // end function
        Timeline_1.prototype.frame242 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame252 = function () {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            this.mc.parent._EffectCtrl.shadow(0, 150, 255);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame254 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(100, -40, true);
            return;
        }; // end function
        Timeline_1.prototype.frame256 = function () {
            this.mc.parent._mcctrl.move(-5, -1);
            return;
        }; // end function
        Timeline_1.prototype.frame264 = function () {
            this.mc.parent._mcctrl.move(-10, -5);
            this.mc.parent._mcctrl.damping(0.2, 0.2);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame286 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame293 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame303 = function () {
            this.mc.parent._EffectCtrl.shine(11382189);
            return;
        }; // end function
        Timeline_1.prototype.frame311 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame327 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame329 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame336 = function () {
            this.mc.parent._mcctrl.fire("zh1atm", { x: 30, y: 0, hold: 1, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame341 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame349 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame362 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame364 = function () {
            this.mc.parent._mcctrl.movePercent(1, -1.5);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame371 = function () {
            this.mc.parent._mcctrl.setAttackAIR();
            this.mc.parent._mcctrl.setSkillAIR();
            this.mc.parent._mcctrl.setBishaAIR();
            this.mc.parent._mcctrl.dampingPercent(0.1, 0.1);
            return;
        }; // end function
        Timeline_1.prototype.frame379 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame385 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame401 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame434 = function () {
            var shuilong_mc = this.mc.parent._mcctrl.addAttacker("jian", { x: { moveToTarget: true, offset: 0 }, y: { moveToTarget: true, offset: -500 }, applyG: true });
            if (!shuilong_mc) {
                return;
            }
            var shuilong = new hero_uryuu.Timeline_13(this.mc.parent._mcctrl.getAttacker("jian", shuilong_mc.hashCode));
            return;
        }; // end function
        Timeline_1.prototype.frame444 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame452 = function () {
            this.mc.parent._mcctrl.addQi(15);
            return;
        }; // end function
        Timeline_1.prototype.frame464 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame475 = function () {
            this.mc.parent._mcctrl.addQi(15);
            return;
        }; // end function
        Timeline_1.prototype.frame511 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame526 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "石田1");
            return;
        }; // end function
        Timeline_1.prototype.frame550 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame551 = function () {
            this.mc.parent._mcctrl.move(-15, 0);
            this.mc.parent._mcctrl.damping(2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame570 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame578 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame607 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(0, -200, true);
            return;
        }; // end function
        Timeline_1.prototype.frame611 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "石田2");
            return;
        }; // end function
        Timeline_1.prototype.frame622 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame630 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame631 = function () {
            this.mc.parent._mcctrl.move(0, -15);
            this.mc.parent._mcctrl.damping(0, 0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame644 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame665 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame700 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "石田2");
            return;
        }; // end function
        Timeline_1.prototype.frame753 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            return;
        }; // end function
        Timeline_1.prototype.frame766 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame801 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "石田3");
            return;
        }; // end function
        Timeline_1.prototype.frame860 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame927 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame945 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1036 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1060 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1139 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1176 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1199 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_uryuu.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_uryuu.Timeline_1");
})(hero_uryuu || (hero_uryuu = {}));
//# sourceMappingURL=Timeline_1.js.map