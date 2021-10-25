var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*主骨骼动画对应的帧事件
*/
var hero_sasuke_xz;
(function (hero_sasuke_xz) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [11, this.frame12, 13, this.frame14, 22, this.frame23, 27, this.frame28, 29, this.frame30, 59, this.frame60, 69, this.frame70, 77, this.frame78, 81, this.frame82, 85, this.frame86, 97, this.frame98, 105, this.frame106, 109, this.frame110, 127, this.frame128, 134, this.frame135, 146, this.frame147, 158, this.frame159, 179, this.frame180, 184, this.frame185, 187, this.frame188, 191, this.frame192, 204, this.frame205, 212, this.frame213, 215, this.frame216, 225, this.frame226, 236, this.frame237, 246, this.frame247, 251, this.frame252, 258, this.frame259, 273, this.frame274, 279, this.frame280, 282, this.frame283, 292, this.frame293, 300, this.frame301, 315, this.frame316, 319, this.frame320, 327, this.frame328, 331, this.frame332, 334, this.frame335, 339, this.frame340, 358, this.frame359, 359, this.frame360, 368, this.frame369, 375, this.frame376, 380, this.frame381, 387, this.frame388, 388, this.frame389, 393, this.frame394, 401, this.frame402, 410, this.frame411, 416, this.frame417, 421, this.frame422, 433, this.frame434, 440, this.frame441, 474, this.frame475, 476, this.frame477, 478, this.frame479, 481, this.frame482, 484, this.frame485, 492, this.frame493, 496, this.frame497, 510, this.frame511, 538, this.frame539, 539, this.frame540, 543, this.frame544, 564, this.frame565, 596, this.frame597, 599, this.frame600, 609, this.frame610, 618, this.frame619, 626, this.frame627, 630, this.frame631, 668, this.frame669, 699, this.frame700, 700, this.frame701, 706, this.frame707, 718, this.frame719, 723, this.frame724, 732, this.frame733, 749, this.frame750, 764, this.frame765, 778, this.frame779, 813, this.frame814, 834, this.frame835, 863, this.frame864, 864, this.frame865, 890, this.frame891, 944, this.frame945, 948, this.frame949, 977, this.frame978, 980, this.frame981, 1015, this.frame1016, 1019, this.frame1020, 1066, this.frame1067, 1086, this.frame1087, 1088, this.frame1089, 1120, this.frame1121, 1154, this.frame1155, 1157, this.frame1158, 1192, this.frame1193, 1214, this.frame1215, 1218, this.frame1219, 1284, this.frame1285, 1361, this.frame1362, 1363, this.frame1364, 1365, this.frame1366, 1388, this.frame1389, 1445, this.frame1446, 1542, this.frame1543, 1570, this.frame1571]);
        }
        Timeline_1.prototype.frame835 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "须佐助1");
        };
        Timeline_1.prototype.frame864 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._mcctrl.move(6, 0);
            this.mc.parent._mcctrl.damping(0.4, 0);
        };
        Timeline_1.prototype.frame865 = function () {
            this.mc.parent._EffectCtrl.shine(0);
            var fenshen_mc = this.mc.parent._mcctrl.addAttacker("fenshen", { "applyG": false }); //必杀
            if (!fenshen_mc) {
                return;
            }
            var bs = new hero_sasuke_xz.Timeline_15(this.mc.parent._mcctrl.getAttacker("fenshen", fenshen_mc.hashCode));
        };
        Timeline_1.prototype.frame891 = function () {
            this.mc.parent._mcctrl.idle();
        };
        Timeline_1.prototype.frame945 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("上必杀1");
        };
        Timeline_1.prototype.frame949 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "须佐助2");
        };
        Timeline_1.prototype.frame978 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._mcctrl.addAttacker("sbsmc", { "x": { "moveToTarget": true, "offset": 0, "range": [50, 300] }, "applyG": false }); //上+必杀
        };
        Timeline_1.prototype.frame981 = function () {
            this.mc.parent._EffectCtrl.shine(0);
        };
        Timeline_1.prototype.frame1016 = function () {
            this.mc.parent._mcctrl.idle();
        };
        Timeline_1.prototype.frame1020 = function () {
            this.mc.parent._mcctrl.endAct();
        };
        Timeline_1.prototype.frame1067 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "佐助1");
            this.mc.parent._mcctrl.isApplyG(false);
        };
        Timeline_1.prototype.frame1087 = function () {
            this.mc.parent._EffectCtrl.endBisha();
        };
        Timeline_1.prototype.frame1089 = function () {
            this.mc.parent._mcctrl.move(-5, -10);
            this.mc.parent._mcctrl.damping(0.3, 0.3);
            this.mc.parent._EffectCtrl.shine(15663104);
        };
        Timeline_1.prototype.frame1121 = function () {
            this.mc.parent._mcctrl.isApplyG(true);
            this.mc.parent._mcctrl.idle();
        };
        Timeline_1.prototype.frame1155 = function () {
            this.mc.parent._EffectCtrl.shine(648163);
        };
        Timeline_1.prototype.frame1158 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "须佐助2");
        };
        Timeline_1.prototype.frame60 = function () {
            this.mc.parent._mcctrl.idle();
        };
        Timeline_1.prototype.frame1193 = function () {
            this.mc.parent._EffectCtrl.slowDown(1);
        };
        Timeline_1.prototype.frame1215 = function () {
            this.mc.parent._EffectCtrl.endBisha();
        };
        Timeline_1.prototype.frame1219 = function () {
            this.mc.parent._EffectCtrl.shine(5422583);
        };
        Timeline_1.prototype.frame1285 = function () {
            this.mc.parent._mcctrl.idle();
        };
        Timeline_1.prototype.frame1362 = function () {
            this.mc.parent._mcctrl.move(5, 0);
        };
        Timeline_1.prototype.frame1364 = function () {
            this.mc.parent._mcctrl.stopMove();
        };
        Timeline_1.prototype.frame1366 = function () {
            this.mc.parent._mcctrl.idle();
        };
        Timeline_1.prototype.frame1389 = function () {
            this.mc.parent._mcctrl.idle();
        };
        Timeline_1.prototype.frame1446 = function () {
            this.mc.parent._mcctrl.idle();
        };
        Timeline_1.prototype.frame1543 = function () {
            this.mc.parent._mcctrl.stop();
        };
        Timeline_1.prototype.frame12 = function () {
            this.mc.parent._EffectCtrl.walk();
        };
        Timeline_1.prototype.frame14 = function () {
            this.mc.parent._mcctrl.loop("走");
        };
        Timeline_1.prototype.frame23 = function () {
            this.mc.parent._mcctrl.dash(3.5);
            this.mc.parent._EffectCtrl.dash();
        };
        Timeline_1.prototype.frame28 = function () {
            this.mc.parent._mcctrl.dashStop();
        };
        Timeline_1.prototype.frame30 = function () {
            this.mc.parent._mcctrl.idle();
        };
        Timeline_1.prototype.frame1571 = function () {
            this.mc.parent._mcctrl.stop();
        };
        Timeline_1.prototype.frame70 = function () {
            this.mc.parent._mcctrl.setAirMove(true);
            this.mc.parent._mcctrl.isApplyG(false);
        };
        Timeline_1.prototype.frame78 = function () {
            this.mc.parent._mcctrl.endAct();
        };
        Timeline_1.prototype.frame82 = function () {
            this.mc.parent._mcctrl.setSkillAIR();
            this.mc.parent._mcctrl.setBishaAIR();
            this.mc.parent._mcctrl.isApplyG(true);
        };
        Timeline_1.prototype.frame86 = function () {
            this.mc.parent._mcctrl.idle();
        };
        Timeline_1.prototype.frame98 = function () {
            this.mc.parent._mcctrl.move(0, -5);
            this.mc.parent._mcctrl.damping(0, 0.5);
        };
        Timeline_1.prototype.frame106 = function () {
            this.mc.parent._mcctrl.movePercent(0, 1);
            this.mc.parent._EffectCtrl.shadow(0, 0, 0);
        };
        Timeline_1.prototype.frame110 = function () {
            this.mc.parent._mcctrl.setTouchFloor("跳招2", true);
            this.mc.parent._mcctrl.loop("跳招loop"); //created by lmj 
            this.mc.parent._EffectCtrl.shine(5422583);
        };
        Timeline_1.prototype.frame128 = function () {
            this.mc.parent._mcctrl.loop("跳招loop");
        };
        Timeline_1.prototype.frame135 = function () {
            this.mc.parent._mcctrl.idle();
        };
        Timeline_1.prototype.frame147 = function () {
            this.mc.parent._mcctrl.endAct();
        };
        Timeline_1.prototype.frame159 = function () {
            this.mc.parent._mcctrl.idle();
        };
        Timeline_1.prototype.frame180 = function () {
            this.mc.parent._mcctrl.move(4, 0);
            this.mc.parent._mcctrl.damping(0.4, 0);
        };
        Timeline_1.prototype.frame185 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
        };
        Timeline_1.prototype.frame188 = function () {
            this.mc.parent._mcctrl.endAct();
        };
        Timeline_1.prototype.frame192 = function () {
            this.mc.parent._mcctrl.idle();
        };
        Timeline_1.prototype.frame205 = function () {
            this.mc.parent._mcctrl.move(7, 0);
            this.mc.parent._mcctrl.damping(0.7, 0);
        };
        Timeline_1.prototype.frame213 = function () {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setSkill1("砍技1");
        };
        Timeline_1.prototype.frame216 = function () {
            this.mc.parent._mcctrl.endAct();
        };
        Timeline_1.prototype.frame226 = function () {
            this.mc.parent._mcctrl.idle();
        };
        Timeline_1.prototype.frame237 = function () {
            this.mc.parent._mcctrl.move(6, 0);
            this.mc.parent._mcctrl.damping(0.4, 0);
        };
        Timeline_1.prototype.frame247 = function () {
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setBisha();
        };
        Timeline_1.prototype.frame252 = function () {
            this.mc.parent._mcctrl.endAct();
        };
        Timeline_1.prototype.frame259 = function () {
            this.mc.parent._mcctrl.idle();
        };
        Timeline_1.prototype.frame274 = function () {
            this.mc.parent._mcctrl.move(10, 0);
        };
        Timeline_1.prototype.frame280 = function () {
            this.mc.parent._mcctrl.damping(2, 0);
        };
        Timeline_1.prototype.frame283 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setZhao3("招3");
            this.mc.parent._mcctrl.setSkill2("砍技2");
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setAttack("砍5");
        };
        Timeline_1.prototype.frame293 = function () {
            this.mc.parent._mcctrl.endAct();
        };
        Timeline_1.prototype.frame301 = function () {
            this.mc.parent._mcctrl.idle();
        };
        Timeline_1.prototype.frame316 = function () {
            this.mc.parent._FighterCtrler.moveOnce(35, 0);
        };
        Timeline_1.prototype.frame320 = function () {
            this.mc.parent._mcctrl.addAttacker("huo", { "applyG": false }); //连击
        };
        Timeline_1.prototype.frame328 = function () {
            this.mc.parent._mcctrl.move(8, 0);
            this.mc.parent._mcctrl.damping(4, 0);
        };
        Timeline_1.prototype.frame332 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setDash();
        };
        Timeline_1.prototype.frame335 = function () {
            this.mc.parent._mcctrl.endAct();
        };
        Timeline_1.prototype.frame340 = function () {
            this.mc.parent._mcctrl.idle();
        };
        Timeline_1.prototype.frame359 = function () {
            this.mc.parent._mcctrl.setHitTarget("kj10atm", "砍技11");
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._EffectCtrl.shadow(110, -50, 255);
        };
        Timeline_1.prototype.frame360 = function () {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._EffectCtrl.dash();
        };
        Timeline_1.prototype.frame369 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
        };
        Timeline_1.prototype.frame376 = function () {
            this.mc.parent._EffectCtrl.endShadow();
        };
        Timeline_1.prototype.frame381 = function () {
            this.mc.parent._mcctrl.idle();
        };
        Timeline_1.prototype.frame388 = function () {
            this.mc.parent._FighterCtrler.moveOnce(100, 0);
        };
        Timeline_1.prototype.frame389 = function () {
            this.mc.parent._EffectCtrl.shine();
        };
        Timeline_1.prototype.frame394 = function () {
            this.mc.parent._mcctrl.setSkill1("砍技12");
            this.mc.parent._mcctrl.setAttack("砍技12");
            this.mc.parent._mcctrl.setZhao3("招30");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setBisha();
        };
        Timeline_1.prototype.frame402 = function () {
            this.mc.parent._mcctrl.endAct();
        };
        Timeline_1.prototype.frame411 = function () {
            this.mc.parent._mcctrl.idle();
        };
        Timeline_1.prototype.frame417 = function () {
            this.mc.parent._FighterCtrler.setDirectToTarget();
        };
        Timeline_1.prototype.frame422 = function () {
            this.mc.parent._mcctrl.addAttacker("tianzhao", { "x": { "moveToTarget": true, "offset": 0 }, "applyG": false }); //下+飞镖
        };
        Timeline_1.prototype.frame434 = function () {
            this.mc.parent._mcctrl.endAct();
        };
        Timeline_1.prototype.frame441 = function () {
            this.mc.parent._mcctrl.idle();
        };
        Timeline_1.prototype.frame475 = function () {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._mcctrl.isApplyG(false);
        };
        Timeline_1.prototype.frame477 = function () {
            this.mc.parent._EffectCtrl.dash();
        };
        Timeline_1.prototype.frame479 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(50, -30, true);
            this.mc.parent._EffectCtrl.slowDown(0.5);
        };
        Timeline_1.prototype.frame482 = function () {
            this.mc.parent._mcctrl.move(-3, -3);
            this.mc.parent._mcctrl.damping(0.3, 0.3);
        };
        Timeline_1.prototype.frame485 = function () {
            this.mc.parent._mcctrl.move(-7, -7);
            this.mc.parent._mcctrl.damping(0.3, 0.3);
            this.mc.parent._mcctrl.addAttacker("huo", { "applyG": false }); //上+砍
        };
        Timeline_1.prototype.frame493 = function () {
            this.mc.parent._mcctrl.endAct();
        };
        Timeline_1.prototype.frame497 = function () {
            this.mc.parent._mcctrl.isApplyG(true);
        };
        Timeline_1.prototype.frame511 = function () {
            this.mc.parent._mcctrl.idle();
        };
        Timeline_1.prototype.frame539 = function () {
            // this.mc.parent._FighterCtrler.setDirectToTarget();
        };
        Timeline_1.prototype.frame540 = function () {
            this.mc.parent._mcctrl.addQi(5);
        };
        Timeline_1.prototype.frame544 = function () {
            var fenshen_mc = this.mc.parent._mcctrl.addAttacker("fenshen"); //飞镖，招1
            if (!fenshen_mc) {
                return;
            }
            var zhao1 = new hero_sasuke_xz.Timeline_13(this.mc.parent._mcctrl.getAttacker("fenshen", fenshen_mc.hashCode));
        };
        Timeline_1.prototype.frame565 = function () {
            this.mc.parent._mcctrl.idle();
        };
        Timeline_1.prototype.frame597 = function () {
            this.mc.parent._mcctrl.addQi(10);
        };
        Timeline_1.prototype.frame600 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("招20");
        };
        Timeline_1.prototype.frame610 = function () {
            this.mc.parent._EffectCtrl.shine(6968203);
        };
        Timeline_1.prototype.frame619 = function () {
            this.mc.parent._mcctrl.justHitToPlay("zh2", "招21", false, true);
        };
        Timeline_1.prototype.frame627 = function () {
            this.mc.parent._mcctrl.idle();
        };
        Timeline_1.prototype.frame631 = function () {
            this.mc.parent._EffectCtrl.shine(6968203);
        };
        Timeline_1.prototype.frame669 = function () {
            this.mc.parent._mcctrl.idle();
        };
        Timeline_1.prototype.frame700 = function () {
            this.mc.parent._FighterCtrler.setDirectToTarget();
        };
        Timeline_1.prototype.frame701 = function () {
            this.mc.parent._mcctrl.addQi(5);
        };
        Timeline_1.prototype.frame707 = function () {
            this.mc.parent._EffectCtrl.shine(5422583);
            this.mc.parent._mcctrl.addAttacker("huo", { "applyG": false }); //招3,上+飞镖
        };
        Timeline_1.prototype.frame719 = function () {
            this.mc.parent._mcctrl.setZhao2("招22");
            this.mc.parent._mcctrl.setBishaUP("上必杀1");
            this.mc.parent._mcctrl.setSkill2();
        };
        Timeline_1.prototype.frame724 = function () {
            this.mc.parent._mcctrl.endAct();
        };
        Timeline_1.prototype.frame733 = function () {
            this.mc.parent._mcctrl.idle();
        };
        Timeline_1.prototype.frame750 = function () {
            this.mc.parent._mcctrl.addQi(20);
        };
        Timeline_1.prototype.frame765 = function () {
            this.mc.parent._mcctrl.idle();
        };
        Timeline_1.prototype.frame779 = function () {
            this.mc.parent._mcctrl.addQi(20);
        };
        Timeline_1.prototype.frame814 = function () {
            this.mc.parent._mcctrl.idle();
        };
        return Timeline_1;
    }());
    hero_sasuke_xz.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_sasuke_xz.Timeline_1");
})(hero_sasuke_xz || (hero_sasuke_xz = {}));
//# sourceMappingURL=Timeline_1.js.map