var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*byakuya主骨骼动画对应的帧事件
*/
var hero_byakuya;
(function (hero_byakuya) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [
                11, this.frame12, 20, this.frame21, 26, this.frame27, 30, this.frame31, 37, this.frame38, 40, this.frame41, 70, this.frame71, 89, this.frame90, 95, this.frame96, 99, this.frame100, 100, this.frame101, 109, this.frame110, 129, this.frame130, 132, this.frame133, 136, this.frame137, 144, this.frame145, 149, this.frame150, 155, this.frame156, 161, this.frame162, 165, this.frame166, 170, this.frame171, 177, this.frame178, 183, this.frame184, 188, this.frame189, 190, this.frame191, 191, this.frame192, 194, this.frame195, 195, this.frame196, 199, this.frame200, 206, this.frame207, 216, this.frame217, 234, this.frame235, 236, this.frame237, 245, this.frame246, 246, this.frame247, 247, this.frame248, 251, this.frame252, 254, this.frame255, 261, this.frame262, 268, this.frame269, 295, this.frame296, 297, this.frame298, 300, this.frame301, 302, this.frame303, 310, this.frame311, 316, this.frame317, 338, this.frame339, 349, this.frame350, 358, this.frame359, 367, this.frame368, 382, this.frame383, 383, this.frame384, 386, this.frame387, 399, this.frame400, 401, this.frame402, 408, this.frame409, 415, this.frame416, 429, this.frame430, 438, this.frame439, 442, this.frame443, 445, this.frame446, 477, this.frame478, 454, this.frame455, 462, this.frame463, 487, this.frame488, 519, this.frame520, 520, this.frame521, 521, this.frame522, 560, this.frame561, 563, this.frame564, 602, this.frame603, 661, this.frame662, 662, this.frame663, 663, this.frame664, 703, this.frame704, 725, this.frame726, 757, this.frame758, 786, this.frame787, 799, this.frame800, 801, this.frame802, 803, this.frame804, 824, this.frame825, 825, this.frame826, 826, this.frame827, 842, this.frame843, 928, this.frame929, 949, this.frame950, 1000, this.frame1001, 1061, this.frame1062, 1105, this.frame1106, 1110, this.frame1111, 1114, this.frame1115
            ]);
        }
        Timeline_1.prototype.frame12 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame21 = function () {
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
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame38 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_1.prototype.frame41 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame71 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame90 = function () {
            this.mc.parent._mcctrl.move(-4, -4);
            this.mc.parent._mcctrl.damping(0.2, 0.2);
            this.mc.parent._mcctrl.addAttacker("liuzhang", { x: { moveToTarget: true, offset: 0, range: [0, 100] }, y: { moveToTarget: true, offset: -30, range: [-30, 200] }, applyG: false });
            return;
        }; // end function
        Timeline_1.prototype.frame96 = function () {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }; // end function
        Timeline_1.prototype.frame100 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame101 = function () {
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }; // end function
        Timeline_1.prototype.frame110 = function () {
            this.mc.parent._mcctrl.addAttacker("liuzhang", { x: { moveToTarget: true, offset: 0, range: [0, 150] }, y: { moveToTarget: true, offset: -30, range: [0, 250] }, applyG: false });
            return;
        }; // end function
        Timeline_1.prototype.frame130 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame133 = function () {
            this.mc.parent._mcctrl.movePercent(0.3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.03, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame137 = function () {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame145 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame150 = function () {
            this.mc.parent._mcctrl.movePercent(0.4, 0);
            this.mc.parent._mcctrl.dampingPercent(0.04, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame156 = function () {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setBishaSUPER();
            return;
        }; // end function
        Timeline_1.prototype.frame162 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame166 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame171 = function () {
            this.mc.parent._mcctrl.movePercent(0.3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.03, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame178 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame184 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame189 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame191 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._EffectCtrl.shadow(0, 150, 150);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame192 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame195 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame196 = function () {
            this.mc.parent._EffectCtrl.shine(8245740);
            return;
        }; // end function
        Timeline_1.prototype.frame200 = function () {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame207 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame217 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame235 = function () {
            this.mc.parent._mcctrl.addQi(15);
            this.mc.parent._EffectCtrl.shadow(0, 150, 150);
            return;
        }; // end function
        Timeline_1.prototype.frame237 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame246 = function () {
            this.mc.parent._mcctrl.movePercent(0.3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.03, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame247 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame248 = function () {
            this.mc.parent._EffectCtrl.shine(8245740);
            return;
        }; // end function
        Timeline_1.prototype.frame252 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame255 = function () {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao3();
            return;
        }; // end function
        Timeline_1.prototype.frame262 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame269 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame296 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame298 = function () {
            this.mc.parent._EffectCtrl.shine(8245740);
            return;
        }; // end function
        Timeline_1.prototype.frame301 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame303 = function () {
            this.mc.parent._mcctrl.setSkill1();
            return;
        }; // end function
        Timeline_1.prototype.frame311 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame317 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame339 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame350 = function () {
            this.mc.parent._mcctrl.move(-5, 0);
            this.mc.parent._mcctrl.damping(0.5, 0);
            this.mc.parent._EffectCtrl.shine(8245740);
            return;
        }; // end function
        Timeline_1.prototype.frame359 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame368 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame383 = function () {
            this.mc.parent._mcctrl.movePercent(1, -1);
            this.mc.parent._mcctrl.dampingPercent(0.02, 0.02);
            this.mc.parent._EffectCtrl.shadow(200, 0, 200);
            return;
        }; // end function
        Timeline_1.prototype.frame384 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame387 = function () {
            this.mc.parent._EffectCtrl.shine(15174887);
            return;
        }; // end function
        Timeline_1.prototype.frame400 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame402 = function () {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setAttackAIR("跳砍");
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }; // end function
        Timeline_1.prototype.frame409 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame416 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame430 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame439 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_1.prototype.frame443 = function () {
            this.mc.parent._mcctrl.movePercent(3, 0);
            this.mc.parent._EffectCtrl.shadow(0, 0, 0);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame446 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.6, 0);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame455 = function () {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame463 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame478 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("空中必杀");
            return;
        }; // end function
        Timeline_1.prototype.frame488 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "白哉1");
            return;
        }; // end function
        Timeline_1.prototype.frame520 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._mcctrl.isApplyG(false);
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }; // end function
        Timeline_1.prototype.frame521 = function () {
            this.mc.parent._mcctrl.addAttacker("shijie", { x: { followTarget: true, offset: 0 }, y: { followTarget: true, offset: 0 }, applyG: false });
            return;
        }; // end function
        Timeline_1.prototype.frame522 = function () {
            this.mc.parent._EffectCtrl.shine(15174887);
            return;
        }; // end function
        Timeline_1.prototype.frame561 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame564 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame603 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "白哉2");
            return;
        }; // end function
        Timeline_1.prototype.frame662 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame663 = function () {
            this.mc.parent._EffectCtrl.shine(15174887);
            return;
        }; // end function
        Timeline_1.prototype.frame664 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_1.prototype.frame704 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame726 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame758 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "白哉3");
            return;
        }; // end function
        Timeline_1.prototype.frame787 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._mcctrl.movePercent(5, 0);
            this.mc.parent._mcctrl.setHitTarget("bs10atm", "超必杀1");
            return;
        }; // end function
        Timeline_1.prototype.frame800 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("超必杀0");
            return;
        }; // end function
        Timeline_1.prototype.frame802 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(100, null, false);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._mcctrl.movePercent(3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.3, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame804 = function () {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.slowDown(1);
            return;
        }; // end function
        Timeline_1.prototype.frame825 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("超必杀0");
            return;
        }; // end function
        Timeline_1.prototype.frame826 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.3, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame827 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame843 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame929 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame950 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1001 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame1062 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1106 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame1111 = function () {
            this.mc.parent._EffectCtrl.startWanKai("白哉2");
            return;
        }; // end function
        Timeline_1.prototype.frame1115 = function () {
            this.mc.parent._FighterCtrler.doWanKai();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_byakuya.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_byakuya.Timeline_1");
})(hero_byakuya || (hero_byakuya = {}));
//# sourceMappingURL=Timeline_1.js.map