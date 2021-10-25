var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*主骨骼形态1动画对应的帧事件
*/
var hero_naruto;
(function (hero_naruto) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [13, this.frame14, 21, this.frame22, 23, this.frame24, 34, this.frame35, 43, this.frame44, 48, this.frame49, 78, this.frame79, 84, this.frame85, 91, this.frame92, 95, this.frame96, 100, this.frame101, 108, this.frame109, 110, this.frame111, 120, this.frame121, 125, this.frame126, 129, this.frame130, 133, this.frame134, 139, this.frame140, 145, this.frame146, 147, this.frame148, 153, this.frame154, 154, this.frame155, 162, this.frame163, 168, this.frame169, 177, this.frame178, 184, this.frame185, 191, this.frame192, 195, this.frame196, 203, this.frame204, 211, this.frame212, 216, this.frame217, 221, this.frame222, 233, this.frame234, 249, this.frame250, 251, this.frame252, 259, this.frame260, 273, this.frame274, 293, this.frame294, 302, this.frame303, 307, this.frame308, 312, this.frame313, 327, this.frame328, 348, this.frame349, 352, this.frame353, 358, this.frame359, 375, this.frame376, 383, this.frame384, 389, this.frame390, 401, this.frame402, 407, this.frame408, 410, this.frame411, 419, this.frame420, 425, this.frame426, 430, this.frame431, 444, this.frame445, 454, this.frame455, 460, this.frame461, 490, this.frame491, 495, this.frame496, 510, this.frame511, 520, this.frame521, 539, this.frame540, 550, this.frame551, 603, this.frame604, 614, this.frame615, 637, this.frame638, 648, this.frame649, 650, this.frame651, 652, this.frame653, 679, this.frame680, 689, this.frame690, 692, this.frame693, 693, this.frame694, 704, this.frame705, 718, this.frame719, 787, this.frame788, 790, this.frame791, 825, this.frame826, 842, this.frame843, 910, this.frame911, 911, this.frame912, 917, this.frame918, 961, this.frame962, 974, this.frame975, 990, this.frame991, 1007, this.frame1008, 1080, this.frame1081, 1085, this.frame1086, 1105, this.frame1106, 1178, this.frame1179, 1219, this.frame1220, 1247, this.frame1248, 1263, this.frame1264, 1285, this.frame1286, 1400, this.frame1401]);
            return;
        }
        Timeline_1.prototype.frame14 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame22 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame24 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_1.prototype.frame35 = function () {
            this.mc.parent._mcctrl.dash(2.5);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame44 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_1.prototype.frame49 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame79 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame85 = function () {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }; // end function
        Timeline_1.prototype.frame92 = function () {
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            return;
        }; // end function
        Timeline_1.prototype.frame96 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame101 = function () {
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }; // end function
        Timeline_1.prototype.frame109 = function () {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.setTouchFloor("跳招3", true);
            this.mc.parent._mcctrl.isApplyG(true);
            this.mc.parent._mcctrl.movePercent(-0.5, 0);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame111 = function () {
            this.mc.parent._mcctrl.movePercent(2, 1.5);
            this.mc.parent._mcctrl.loop("跳招2");
            return;
        }; // end function
        Timeline_1.prototype.frame121 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame126 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame130 = function () {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame134 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame140 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame146 = function () {
            return;
        }; // end function
        Timeline_1.prototype.frame148 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame154 = function () {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill2();
            return;
        }; // end function
        Timeline_1.prototype.frame155 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame163 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame169 = function () {
            this.mc.parent._mcctrl.movePercent(1.3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame178 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setAttack("砍4");
            return;
        }; // end function
        Timeline_1.prototype.frame185 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame192 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame196 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame204 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame212 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame217 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame222 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame234 = function () {
            this.mc.parent._mcctrl.setHitTarget("kj10atm", "砍技12");
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame250 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("砍技12");
        };
        Timeline_1.prototype.frame252 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame260 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame274 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame294 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame303 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame308 = function () {
            var fenshen_mc = this.mc.parent._mcctrl.addAttacker("fenshen");
            if (!fenshen_mc) {
                return;
            }
            var kj2 = new hero_naruto.Timeline_7(this.mc.parent._mcctrl.getAttacker("fenshen", fenshen_mc.hashCode));
            return;
        }; // end function
        Timeline_1.prototype.frame313 = function () {
            var fenshen_mc = this.mc.parent._mcctrl.addAttacker("fenshen2");
            if (!fenshen_mc) {
                return;
            }
            var kj2 = new hero_naruto.Timeline_8(this.mc.parent._mcctrl.getAttacker("fenshen2", fenshen_mc.hashCode));
            return;
        }; // end function
        Timeline_1.prototype.frame328 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame349 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame353 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame359 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame376 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame384 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame390 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame402 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame408 = function () {
            this.mc.parent._mcctrl.fire("zh1atm", { x: { start: 15, hit: 3 }, y: 0, hold: 1, hits: 3 });
            return;
        }; // end function
        Timeline_1.prototype.frame411 = function () {
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame420 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame426 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame431 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame445 = function () {
            this.mc.parent._mcctrl.fire("zh2atm", { x: { start: 15, hit: 5 }, y: 0, hold: 1.5, hits: 5, hp: 200 });
            return;
        }; // end function
        Timeline_1.prototype.frame455 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame461 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame491 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame496 = function () {
            this.mc.parent._mcctrl.movePercent(2, -1.4);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0.1);
            return;
        }; // end function
        Timeline_1.prototype.frame511 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame521 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame540 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame551 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_1.prototype.frame604 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame615 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "鸣人2");
            return;
        }; // end function
        Timeline_1.prototype.frame638 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame649 = function () {
            if (this.mc.parent._FighterCtrler.justHit("bs1")) {
                this.mc.parent._mcctrl.gotoAndPlay("必杀1");
            }
            else {
                this.mc.parent._mcctrl.gotoAndPlay("必杀0");
            }
            return;
        }; // end function
        Timeline_1.prototype.frame651 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame653 = function () {
            this.mc.parent._EffectCtrl.shine(303095);
            return;
        }; // end function
        Timeline_1.prototype.frame680 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame690 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame693 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("必杀0");
        };
        Timeline_1.prototype.frame694 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame705 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame719 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "鸣人1");
            return;
        }; // end function
        Timeline_1.prototype.frame788 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame791 = function () {
            var sbs_mc = this.mc.parent._mcctrl.addAttacker("fensheng", { x: { moveToTarget: true, offset: 0 }, y: { moveToTarget: false, offset: 0 }, applyG: true });
            if (!sbs_mc) {
                return;
            }
            new hero_naruto.Timeline_13(this.mc.parent._mcctrl.getAttacker("fensheng", sbs_mc.hashCode));
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame826 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame843 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "鸣人2");
            return;
        }; // end function
        Timeline_1.prototype.frame911 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame912 = function () {
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame918 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(0, null, false);
            return;
        }; // end function
        Timeline_1.prototype.frame962 = function () {
            this.mc.parent._mcctrl.movePercent(0, 1);
            this.mc.parent._mcctrl.setTouchFloor("超必杀1", true);
            this.mc.parent._FighterCtrler.moveOnce(0, -150);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shine(303095);
            this.mc.parent._mcctrl.gotoAndPlay("超必杀2");
            return;
        }; // end function
        Timeline_1.prototype.frame975 = function () {
            this.mc.parent._mcctrl.loop("超必杀2");
            return;
        }; // end function
        Timeline_1.prototype.frame991 = function () {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shake(0, 5);
            var cbs_mc = this.mc.parent._mcctrl.addAttacker("lxw", { applyG: false });
            if (!cbs_mc) {
                return;
            }
            new hero_naruto.Timeline_15(this.mc.parent._mcctrl.getAttacker("lxw", cbs_mc.hashCode));
            return;
        }; // end function
        Timeline_1.prototype.frame1008 = function () {
            this.mc.parent._mcctrl.hurtFly(-15, -5);
            return;
        }; // end function
        Timeline_1.prototype.frame1081 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1086 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1106 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1179 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1220 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1248 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1264 = function () {
            this.mc.parent._EffectCtrl.startWanKai("鸣人3");
            return;
        }; // end function
        Timeline_1.prototype.frame1286 = function () {
            this.mc.parent._EffectCtrl.shine(16776960);
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }; // end function
        Timeline_1.prototype.frame1401 = function () {
            this.mc.parent._FighterCtrler.doWanKai();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_naruto.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_naruto.Timeline_1");
})(hero_naruto || (hero_naruto = {}));
//# sourceMappingURL=Timeline_1.js.map