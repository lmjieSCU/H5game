var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_lufei;
(function (hero_lufei) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [
                13, this.frame14, 21, this.frame22, 23, this.frame24, 34, this.frame35, 43, this.frame44, 48, this.frame49, 78, this.frame79, 84, this.frame85, 91, this.frame92, 95, this.frame96, 96, this.frame97, 97, this.frame98, 100, this.frame101, 102, this.frame103, 105, this.frame106, 106, this.frame107, 107, this.frame108, 109, this.frame110, 112, this.frame113, 122, this.frame123, 125, this.frame126, 131, this.frame132, 138, this.frame139, 154, this.frame155, 162, this.frame163, 163, this.frame164, 164, this.frame165,
                165, this.frame166, 171, this.frame172,
                201, this.frame202, 209, this.frame210, 213, this.frame214, 215, this.frame216, 220, this.frame221, 227, this.frame228, 234, this.frame235, 235, this.frame236, 242, this.frame243, 245, this.frame246, 249, this.frame250, 256, this.frame257, 264, this.frame265, 275, this.frame276, 278, this.frame279, 283, this.frame284, 286, this.frame287, 293, this.frame294, 296, this.frame297, 302, this.frame303, 303, this.frame304, 306, this.frame307, 320, this.frame321, 360, this.frame361, 371, this.frame372, 380, this.frame381, 381, this.frame382, 407, this.frame408, 417, this.frame418, 451, this.frame452, 463, this.frame464, 464, this.frame465, 467, this.frame468, 468, this.frame469, 480, this.frame481, 484, this.frame485, 509, this.frame510, 510, this.frame511, 514, this.frame515, 523, this.frame524, 541, this.frame542, 546, this.frame547, 551, this.frame552, 566, this.frame567, 574, this.frame575, 591, this.frame592, 594, this.frame595, 611, this.frame612, 613, this.frame614, 614, this.frame615, 622, this.frame623, 627, this.frame628, 631, this.frame632, 641, this.frame642, 660, this.frame661, 671, this.frame672, 676, this.frame677, 681, this.frame682, 684, this.frame685, 691, this.frame692, 706, this.frame707, 709, this.frame710, 746, this.frame747, 747, this.frame748, 770, this.frame771, 779, this.frame780, 785, this.frame786, 820, this.frame821, 821, this.frame822, 825, this.frame826, 844, this.frame845, 847, this.frame848, 943, this.frame944, 948, this.frame949, 968, this.frame969, 1041, this.frame1042, 1082, this.frame1083, 1110, this.frame1111, 1120, this.frame1121, 1183, this.frame1184, 1274, this.frame1275, 1275, this.frame1276, 1283, this.frame1284, 1316, this.frame1317, 1317, this.frame1318, 1319, this.frame1320, 1323, this.frame1324, 1328, this.frame1329, 1346, this.frame1347
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
        Timeline_1.prototype.frame24 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_1.prototype.frame35 = function () {
            this.mc.parent._mcctrl.dash(2.5);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            //hp = hp + 350;
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
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
            this.mc.parent._mcctrl.setBishaAIR("空中必杀");
            this.mc.parent._mcctrl.setAttack("跳砍2");
            this.mc.parent._mcctrl.setZhao1("跳招");
            return;
        }; // end function
        Timeline_1.prototype.frame96 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame97 = function () {
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }; // end function
        Timeline_1.prototype.frame98 = function () {
            this.mc.parent._mcctrl.movePercent(1, -1);
            return;
        }; // end function
        Timeline_1.prototype.frame101 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame103 = function () {
            this.mc.parent._mcctrl.setHitTarget("tk1atm", "跳砍22");
            return;
        }; // end function
        Timeline_1.prototype.frame106 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame107 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._EffectCtrl.shadow(0, 0, 255);
            return;
        }; // end function
        Timeline_1.prototype.frame108 = function () {
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }; // end function
        Timeline_1.prototype.frame110 = function () {
            return;
        }; // end function
        Timeline_1.prototype.frame113 = function () {
            this.mc.parent._mcctrl.setAttack("跳砍3");
            this.mc.parent._mcctrl.setZhao1("跳招");
            this.mc.parent._mcctrl.isApplyG(false);
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame123 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame126 = function () {
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }; // end function
        Timeline_1.prototype.frame132 = function () {
            this.mc.parent._mcctrl.movePercent(1, -1);
            return;
        }; // end function
        Timeline_1.prototype.frame139 = function () {
            this.mc.parent._mcctrl.idle();
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame155 = function () {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._EffectCtrl.shadow(0, 0, 255);
            this.mc.parent._mcctrl.movePercent(0, -0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame163 = function () {
            return;
        }; // end function
        Timeline_1.prototype.frame164 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._mcctrl.gotoAndPlay("跳招2");
            return;
        }; // end function
        Timeline_1.prototype.frame165 = function () {
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }; // end function
        Timeline_1.prototype.frame166 = function () {
            this.mc.parent._mcctrl.movePercent(0, 0.25);
            return;
        }; // end function
        Timeline_1.prototype.frame172 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("跳招3");
            return;
        }; // end function
        Timeline_1.prototype.frame202 = function () {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame210 = function () {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame214 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame216 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1("招12");
            return;
        }; // end function
        Timeline_1.prototype.frame221 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame228 = function () {
            this.mc.parent._mcctrl.movePercent(0.3, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame235 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame236 = function () {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setSkill1("砍技14");
            this.mc.parent._mcctrl.setZhao1("招12");
            return;
        }; // end function
        Timeline_1.prototype.frame243 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame246 = function () {
            this.mc.parent._mcctrl.movePercent(3, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame250 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame257 = function () {
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setZhao1("招12");
            this.mc.parent._mcctrl.setSkill2("砍技22");
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaSUPER();
            return;
        }; // end function
        Timeline_1.prototype.frame265 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame276 = function () {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame279 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame284 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            return;
        }; // end function
        Timeline_1.prototype.frame287 = function () {
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao1("招12");
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame294 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame297 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame303 = function () {
            this.mc.parent._mcctrl.setSkill1("砍技12");
            return;
        }; // end function
        Timeline_1.prototype.frame304 = function () {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._mcctrl.gotoAndPlay("砍技14");
            return;
        }; // end function
        Timeline_1.prototype.frame307 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame321 = function () {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame361 = function () {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame372 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame381 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame382 = function () {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame408 = function () {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill2("砍技22");
            this.mc.parent._mcctrl.setZhao1("招12");
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame418 = function () {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame452 = function () {
            return;
        }; // end function
        Timeline_1.prototype.frame464 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(18, 0, true);
            this.mc.parent._mcctrl.gotoAndPlay("砍技22");
            return;
        }; // end function
        Timeline_1.prototype.frame465 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._EffectCtrl.shadow(0, 0, 255);
            return;
        }; // end function
        Timeline_1.prototype.frame468 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame469 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame481 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame485 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame510 = function () {
            this.mc.parent._mcctrl.movePercent(-1, 0);
            this.mc.parent._EffectCtrl.shadow(0, 0, 255);
            return;
        }; // end function
        Timeline_1.prototype.frame511 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame515 = function () {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.endShadow();
            this.mc.parent._mcctrl.gotoAndPlay("招12");
            return;
        }; // end function
        Timeline_1.prototype.frame524 = function () {
            var shuilong_mc = this.mc.parent._mcctrl.addAttacker("zh1", { x: { moveToTarget: false, offset: 0 }, y: { moveToTarget: false, offset: 0 }, applyG: false });
            if (!shuilong_mc) {
                return;
            }
            var shuilong = new hero_lufei.Timeline_16(this.mc.parent._mcctrl.getAttacker("zh1", shuilong_mc.hashCode));
            return;
        }; // end function
        Timeline_1.prototype.frame542 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame547 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame552 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame567 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame575 = function () {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame592 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame595 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame612 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame614 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, -1);
            return;
        }; // end function
        Timeline_1.prototype.frame615 = function () {
            this.mc.parent._mcctrl.movePercent(1, -0.8);
            this.mc.parent._EffectCtrl.shadow(0, 0, 255);
            return;
        }; // end function
        Timeline_1.prototype.frame623 = function () {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.endShadow();
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }; // end function
        Timeline_1.prototype.frame628 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame632 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame642 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame661 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame672 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_1.prototype.frame677 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._FighterCtrler.setCross(true);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame682 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame685 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame692 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame707 = function () {
            return;
        }; // end function
        Timeline_1.prototype.frame710 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "路飞1");
            return;
        }; // end function
        Timeline_1.prototype.frame747 = function () {
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }; // end function
        Timeline_1.prototype.frame748 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._FighterCtrler.moveToTarget(0, -85, true);
            return;
        }; // end function
        Timeline_1.prototype.frame771 = function () {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }; // end function
        Timeline_1.prototype.frame780 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame786 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "路飞2");
            return;
        }; // end function
        Timeline_1.prototype.frame821 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame822 = function () {
            this.mc.parent._mcctrl.movePercent(3, 0);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame826 = function () {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame845 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame848 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame944 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame949 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame969 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1042 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1083 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1111 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1121 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "路飞3");
            return;
        }; // end function
        Timeline_1.prototype.frame1184 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame1275 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame1276 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1284 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "路飞3");
            return;
        }; // end function
        Timeline_1.prototype.frame1317 = function () {
            this.mc.parent._mcctrl.isApplyG(false);
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame1318 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1320 = function () {
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame1324 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_1.prototype.frame1329 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame1347 = function () {
            this.mc.parent._mcctrl.idle();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_lufei.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_lufei.Timeline_1");
})(hero_lufei || (hero_lufei = {}));
//# sourceMappingURL=Timeline_1.js.map