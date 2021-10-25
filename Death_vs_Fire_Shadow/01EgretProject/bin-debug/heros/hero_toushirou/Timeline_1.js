var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_toushirou;
(function (hero_toushirou) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [12, this.frame13, 19, this.frame20, 26, this.frame27, 36, this.frame37, 44, this.frame45, 47, this.frame48, 77, this.frame78, 88, this.frame89, 93, this.frame94, 97, this.frame98, 102, this.frame103, 103, this.frame104, 108, this.frame109, 115, this.frame116, 117, this.frame118, 119, this.frame120, 126, this.frame127, 141, this.frame142, 149, this.frame150, 155, this.frame156, 160, this.frame161, 164, this.frame165, 171, this.frame172, 175, this.frame176, 181, this.frame182, 190, this.frame191, 194, this.frame195, 200, this.frame201, 207, this.frame208, 212, this.frame213, 215, this.frame216, 221, this.frame222, 237, this.frame238, 246, this.frame247, 249, this.frame250, 254, this.frame255, 261, this.frame262, 268, this.frame269, 276, this.frame277, 281, this.frame282, 282, this.frame283, 296, this.frame297, 301, this.frame302, 315, this.frame316, 318, this.frame319, 325, this.frame326, 336, this.frame337, 345, this.frame346, 375, this.frame376, 394, this.frame395, 398, this.frame399, 408, this.frame409, 415, this.frame416, 432, this.frame433, 439, this.frame440, 457, this.frame458, 469, this.frame470, 473, this.frame474, 480, this.frame481, 488, this.frame489, 496, this.frame497, 507, this.frame508, 520, this.frame521, 533, this.frame534, 536, this.frame537, 561, this.frame562, 573, this.frame574, 582, this.frame583, 598, this.frame599, 599, this.frame600, 645, this.frame646, 655, this.frame656, 700, this.frame701, 701, this.frame702, 703, this.frame704, 704, this.frame705, 793, this.frame794, 833, this.frame834, 840, this.frame841, 926, this.frame927, 947, this.frame948, 1017, this.frame1018, 1060, this.frame1061, 1086, this.frame1087, 1146, this.frame1147, 1178, this.frame1179, 1206, this.frame1207]);
            return;
        } // end 
        Timeline_1.prototype.frame13 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end 
        Timeline_1.prototype.frame20 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end 
        Timeline_1.prototype.frame27 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end 
        Timeline_1.prototype.frame37 = function () {
            this.mc.parent._mcctrl.dash(3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end 
        Timeline_1.prototype.frame45 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end 
        Timeline_1.prototype.frame48 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame78 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame89 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.15, 0);
            return;
        }; // end 
        Timeline_1.prototype.frame94 = function () {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }; // end 
        Timeline_1.prototype.frame98 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame103 = function () {
            this.mc.parent._mcctrl.move(0, -1);
            return;
        }; // end 
        Timeline_1.prototype.frame104 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end 
        Timeline_1.prototype.frame109 = function () {
            this.mc.parent._mcctrl.move(-1, -1);
            return;
        }; // end 
        Timeline_1.prototype.frame116 = function () {
            this.mc.parent._EffectCtrl.shine(4312815);
            this.mc.parent._mcctrl.fire("tzatm", { x: 13, y: 7, hold: 2, hits: 1 });
            return;
        }; // end 
        Timeline_1.prototype.frame118 = function () {
            this.mc.parent._mcctrl.fire("tz1atm", { x: 10, y: 10, hold: 2, hits: 1 });
            return;
        }; // end 
        Timeline_1.prototype.frame120 = function () {
            this.mc.parent._mcctrl.fire("tz2atm", { x: 7, y: 13, hold: 2, hits: 1 });
            return;
        }; // end 
        Timeline_1.prototype.frame127 = function () {
            this.mc.parent._mcctrl.damping(0.1, 0.1);
            return;
        }; // end 
        Timeline_1.prototype.frame142 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame150 = function () {
            this.mc.parent._mcctrl.movePercent(0.3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.03, 0);
            return;
        }; // end 
        Timeline_1.prototype.frame156 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end 
        Timeline_1.prototype.frame161 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_1.prototype.frame165 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame172 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end 
        Timeline_1.prototype.frame176 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }; // end 
        Timeline_1.prototype.frame182 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_1.prototype.frame191 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame195 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.02, 0);
            return;
        }; // end 
        Timeline_1.prototype.frame201 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end 
        Timeline_1.prototype.frame208 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_1.prototype.frame213 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame216 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end 
        Timeline_1.prototype.frame222 = function () {
            this.mc.parent._EffectCtrl.shine(4312815);
            return;
        }; // end 
        Timeline_1.prototype.frame238 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_1.prototype.frame247 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame250 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end 
        Timeline_1.prototype.frame255 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end 
        Timeline_1.prototype.frame262 = function () {
            this.mc.parent._mcctrl.setSkill2("砍技22");
            return;
        }; // end 
        Timeline_1.prototype.frame269 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_1.prototype.frame277 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame282 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end 
        Timeline_1.prototype.frame283 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end 
        Timeline_1.prototype.frame297 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_1.prototype.frame302 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame316 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end 
        Timeline_1.prototype.frame319 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._FighterCtrler.setCross(true);
            this.mc.parent._EffectCtrl.shine(11593976);
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            return;
        }; // end 
        Timeline_1.prototype.frame326 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._FighterCtrler.setCross(false);
            return;
        }; // end 
        Timeline_1.prototype.frame337 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end 
        Timeline_1.prototype.frame346 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame376 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end 
        Timeline_1.prototype.frame395 = function () {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shine(4312815);
            return;
        }; // end 
        Timeline_1.prototype.frame399 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end 
        Timeline_1.prototype.frame409 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_1.prototype.frame416 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame433 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end 
        Timeline_1.prototype.frame440 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, -2);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0.05);
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            return;
        }; // end 
        Timeline_1.prototype.frame458 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame470 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end 
        Timeline_1.prototype.frame474 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end 
        Timeline_1.prototype.frame481 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame489 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end 
        Timeline_1.prototype.frame497 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end 
        Timeline_1.prototype.frame508 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame521 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "日番谷2");
            return;
        }; // end 
        Timeline_1.prototype.frame534 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end 
        Timeline_1.prototype.frame537 = function () {
            this.mc.parent._EffectCtrl.shine(6867176);
            return;
        }; // end 
        Timeline_1.prototype.frame562 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_1.prototype.frame574 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame583 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "日番谷1");
            return;
        }; // end 
        Timeline_1.prototype.frame599 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end 
        Timeline_1.prototype.frame600 = function () {
            this.mc.parent._EffectCtrl.shine(6867176);
            return;
        }; // end 
        Timeline_1.prototype.frame646 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame656 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "日番谷3");
            return;
        }; // end 
        Timeline_1.prototype.frame701 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end 
        Timeline_1.prototype.frame702 = function () {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }; // end 
        Timeline_1.prototype.frame704 = function () {
            this.mc.parent._EffectCtrl.shine();
            var bsmc = this.mc.parent._mcctrl.addAttacker("bsmc", { x: { moveToTarget: true, offset: 10, range: [0, 400] }, y: { moveToTarget: true, offset: -30, range: [-200, 200] }, applyG: false });
            if (!bsmc) {
                return;
            }
            var shuilong = new hero_toushirou.Timeline_6(this.mc.parent._mcctrl.getAttacker("bsmc", bsmc.hashCode));
            return;
        }; // end 
        Timeline_1.prototype.frame705 = function () {
            this.mc.parent._EffectCtrl.shine(6867176);
            return;
        }; // end 
        Timeline_1.prototype.frame794 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_1.prototype.frame834 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame841 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end 
        Timeline_1.prototype.frame927 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame948 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame1018 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_1.prototype.frame1061 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end 
        Timeline_1.prototype.frame1087 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end 
        Timeline_1.prototype.frame1147 = function () {
            this.mc.parent._EffectCtrl.startWanKai("日番谷万解");
            return;
        }; // end 
        Timeline_1.prototype.frame1179 = function () {
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }; // end 
        Timeline_1.prototype.frame1207 = function () {
            this.mc.parent._FighterCtrler.doWanKai();
            return;
        }; // end 
        return Timeline_1;
    }());
    hero_toushirou.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_toushirou.Timeline_1");
})(hero_toushirou || (hero_toushirou = {}));
//# sourceMappingURL=Timeline_1.js.map