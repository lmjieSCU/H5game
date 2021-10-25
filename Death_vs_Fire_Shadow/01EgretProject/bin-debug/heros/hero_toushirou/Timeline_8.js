var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var hero_toushirou;
(function (hero_toushirou) {
    var Timeline_8 = (function () {
        function Timeline_8(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [11, this.frame12, 14, this.frame15, 20, this.frame21, 26, this.frame27, 29, this.frame30, 59, this.frame60, 76, this.frame77, 81, this.frame82, 85, this.frame86, 90, this.frame91, 94, this.frame95, 95, this.frame96, 102, this.frame103, 128, this.frame129, 151, this.frame152, 157, this.frame158, 162, this.frame163, 166, this.frame167, 169, this.frame170, 174, this.frame175, 177, this.frame178, 183, this.frame184, 187, this.frame188, 189, this.frame190, 195, this.frame196, 198, this.frame199, 205, this.frame206, 212, this.frame213, 215, this.frame216, 231, this.frame232, 238, this.frame239, 239, this.frame240, 253, this.frame254, 257, this.frame258, 264, this.frame265, 279, this.frame280, 288, this.frame289, 296, this.frame297, 302, this.frame303, 306, this.frame307, 314, this.frame315, 327, this.frame328, 341, this.frame342, 344, this.frame345, 346, this.frame347, 350, this.frame351, 355, this.frame356, 356, this.frame357, 365, this.frame366, 383, this.frame384, 413, this.frame414, 430, this.frame431, 445, this.frame446, 448, this.frame449, 456, this.frame457, 462, this.frame463, 470, this.frame471, 479, this.frame480, 490, this.frame491, 499, this.frame500, 518, this.frame519, 529, this.frame530, 533, this.frame534, 552, this.frame553, 553, this.frame554, 582, this.frame583, 593, this.frame594, 605, this.frame606, 606, this.frame607, 611, this.frame612, 637, this.frame638, 646, this.frame647, 661, this.frame662, 663, this.frame664, 666, this.frame667, 697, this.frame698, 712, this.frame713, 714, this.frame715, 751, this.frame752, 757, this.frame758, 803, this.frame804, 804, this.frame805, 806, this.frame807, 857, this.frame858, 866, this.frame867, 886, this.frame887, 889, this.frame890, 931, this.frame932, 936, this.frame937, 964, this.frame965, 993, this.frame994, 1091, this.frame1092, 1111, this.frame1112, 1119, this.frame1120, 1167, this.frame1168, 1186, this.frame1187, 1229, this.frame1230, 1255, this.frame1256]);
            return;
        } // end 
        Timeline_8.prototype.frame12 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end 
        Timeline_8.prototype.frame15 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end 
        Timeline_8.prototype.frame21 = function () {
            this.mc.parent._mcctrl.dash(3.2);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end 
        Timeline_8.prototype.frame27 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end 
        Timeline_8.prototype.frame30 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_8.prototype.frame60 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_8.prototype.frame77 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end 
        Timeline_8.prototype.frame82 = function () {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }; // end 
        Timeline_8.prototype.frame86 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_8.prototype.frame91 = function () {
            this.mc.parent._mcctrl.move(0, -1);
            return;
        }; // end 
        Timeline_8.prototype.frame95 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end 
        Timeline_8.prototype.frame96 = function () {
            this.mc.parent._mcctrl.movePercent(0, 3);
            this.mc.parent._mcctrl.setTouchFloor("跳招2", true);
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            return;
        }; // end 
        Timeline_8.prototype.frame103 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end 
        Timeline_8.prototype.frame129 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_8.prototype.frame152 = function () {
            this.mc.parent._mcctrl.move(5, 0);
            this.mc.parent._mcctrl.damping(0.3, 0);
            return;
        }; // end 
        Timeline_8.prototype.frame158 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }; // end 
        Timeline_8.prototype.frame163 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_8.prototype.frame167 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_8.prototype.frame170 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }; // end 
        Timeline_8.prototype.frame175 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end 
        Timeline_8.prototype.frame178 = function () {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }; // end 
        Timeline_8.prototype.frame184 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_8.prototype.frame188 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_8.prototype.frame190 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }; // end 
        Timeline_8.prototype.frame196 = function () {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end 
        Timeline_8.prototype.frame199 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end 
        Timeline_8.prototype.frame206 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_8.prototype.frame213 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_8.prototype.frame216 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end 
        Timeline_8.prototype.frame232 = function () {
            this.mc.parent._mcctrl.setHitTarget("kj10atm", "砍技12");
            this.mc.parent._mcctrl.move(20, 0);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end 
        Timeline_8.prototype.frame239 = function () {
            this.mc.parent._mcctrl.damping(4, 0);
            return;
        }; // end 
        Timeline_8.prototype.frame240 = function () {
            this.mc.parent._EffectCtrl.shine(10125310);
            return;
        }; // end 
        Timeline_8.prototype.frame254 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_8.prototype.frame258 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_8.prototype.frame265 = function () {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end 
        Timeline_8.prototype.frame280 = function () {
            this.mc.parent._mcctrl.setSkill2("砍技21");
            this.mc.parent._mcctrl.setBishaUP();
            return;
        }; // end 
        Timeline_8.prototype.frame289 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_8.prototype.frame297 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_8.prototype.frame303 = function () {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.move(15, -20);
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            return;
        }; // end 
        Timeline_8.prototype.frame307 = function () {
            this.mc.parent._mcctrl.damping(1, 1);
            return;
        }; // end 
        Timeline_8.prototype.frame315 = function () {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end 
        Timeline_8.prototype.frame328 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_8.prototype.frame342 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end 
        Timeline_8.prototype.frame345 = function () {
            this.mc.parent._mcctrl.movePercent(3, 0);
            this.mc.parent._FighterCtrler.setCross(true);
            this.mc.parent._EffectCtrl.shine(11593976);
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            return;
        }; // end 
        Timeline_8.prototype.frame347 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            return;
        }; // end 
        Timeline_8.prototype.frame351 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.6, 0);
            this.mc.parent._FighterCtrler.setCross(false);
            return;
        }; // end 
        Timeline_8.prototype.frame356 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end 
        Timeline_8.prototype.frame357 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_8.prototype.frame366 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_8.prototype.frame384 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end 
        Timeline_8.prototype.frame414 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_8.prototype.frame431 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_8.prototype.frame446 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end 
        Timeline_8.prototype.frame449 = function () {
            this.mc.parent._mcctrl.move(10, -18);
            this.mc.parent._FighterCtrler.setCross(true);
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            return;
        }; // end 
        Timeline_8.prototype.frame457 = function () {
            this.mc.parent._mcctrl.damping(1.3, 1.8);
            this.mc.parent._FighterCtrler.setCross(false);
            return;
        }; // end 
        Timeline_8.prototype.frame463 = function () {
            this.mc.parent._mcctrl.setBishaAIR();
            this.mc.parent._mcctrl.setSkillAIR();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end 
        Timeline_8.prototype.frame471 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_8.prototype.frame480 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end 
        Timeline_8.prototype.frame491 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_8.prototype.frame500 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end 
        Timeline_8.prototype.frame519 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_8.prototype.frame530 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("空中必杀");
            return;
        }; // end 
        Timeline_8.prototype.frame534 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "日番谷2");
            return;
        }; // end 
        Timeline_8.prototype.frame553 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end 
        Timeline_8.prototype.frame554 = function () {
            this.mc.parent._mcctrl.setHitTarget("bs0atm", "必杀1");
            this.mc.parent._mcctrl.move(35, 0);
            this.mc.parent._EffectCtrl.dash();
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            return;
        }; // end 
        Timeline_8.prototype.frame583 = function () {
            this.mc.parent._mcctrl.damping(8, 0);
            return;
        }; // end 
        Timeline_8.prototype.frame594 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_8.prototype.frame606 = function () {
            this.mc.parent._mcctrl.damping(10, 0);
            return;
        }; // end 
        Timeline_8.prototype.frame607 = function () {
            this.mc.parent._EffectCtrl.shine(6867176);
            return;
        }; // end 
        Timeline_8.prototype.frame612 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_8.prototype.frame638 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_8.prototype.frame647 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "日番谷3");
            return;
        }; // end 
        Timeline_8.prototype.frame662 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end 
        Timeline_8.prototype.frame664 = function () {
            this.mc.parent._mcctrl.move(50, -50);
            this.mc.parent._EffectCtrl.shine(6867176);
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }; // end 
        Timeline_8.prototype.frame667 = function () {
            this.mc.parent._mcctrl.move(5, -5);
            this.mc.parent._mcctrl.damping(0.12, 0.12);
            return;
        }; // end 
        Timeline_8.prototype.frame698 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_8.prototype.frame713 = function () {
            this.mc.parent._EffectCtrl.shine(6867176);
            this.mc.parent._EffectCtrl.bisha(true, "日番谷3");
            return;
        }; // end 
        Timeline_8.prototype.frame715 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end 
        Timeline_8.prototype.frame752 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end 
        Timeline_8.prototype.frame758 = function () {
            var shuilong_mc = this.mc.parent._mcctrl.addAttacker("cbsmc", { x: { moveToTarget: true, offset: 0, range: [0, 500] }, y: { moveToTarget: true, offset: 0, range: [-250, 250] }, applyG: false });
            if (!shuilong_mc) {
                return;
            }
            var shuilong = new hero_toushirou.Timeline_18(this.mc.parent._mcctrl.getAttacker("cbsmc", shuilong_mc.hashCode));
            return;
        }; // end 
        Timeline_8.prototype.frame804 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("超必杀2");
        };
        Timeline_8.prototype.frame805 = function () {
            this.mc.parent._EffectCtrl.shine(6867176);
            return;
        }; // end 
        Timeline_8.prototype.frame807 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "日番谷3");
            return;
        }; // end 
        Timeline_8.prototype.frame858 = function () {
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end 
        Timeline_8.prototype.frame867 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(0, -100, false);
            return;
        }; // end 
        Timeline_8.prototype.frame887 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end 
        Timeline_8.prototype.frame890 = function () {
            this.mc.parent._mcctrl.move(0, 25);
            this.mc.parent._mcctrl.setTouchFloor("超必杀1", true);
            return;
        }; // end 
        Timeline_8.prototype.frame932 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end 
        Timeline_8.prototype.frame937 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end 
        Timeline_8.prototype.frame965 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end 
        Timeline_8.prototype.frame994 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_8.prototype.frame1092 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_8.prototype.frame1112 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_8.prototype.frame1120 = function () {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.endShake();
            //
            this.mc.parent._mcctrl.ClearState();
            return;
        }; // end 
        Timeline_8.prototype.frame1168 = function () {
            this.mc.parent._EffectCtrl.endWanKai();
            return;
        }; // end 
        Timeline_8.prototype.frame1187 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end 
        Timeline_8.prototype.frame1230 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end 
        Timeline_8.prototype.frame1256 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end 
        return Timeline_8;
    }());
    hero_toushirou.Timeline_8 = Timeline_8;
    __reflect(Timeline_8.prototype, "hero_toushirou.Timeline_8");
})(hero_toushirou || (hero_toushirou = {}));
//# sourceMappingURL=Timeline_8.js.map