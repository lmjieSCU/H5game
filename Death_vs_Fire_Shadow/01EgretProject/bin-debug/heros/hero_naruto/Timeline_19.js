var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*naruto主骨骼形态2动画对应的帧事件
*/
var hero_naruto;
(function (hero_naruto) {
    var Timeline_19 = (function () {
        function Timeline_19(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [17, this.frame18, 21, this.frame22, 25, this.frame26, 37, this.frame38, 45, this.frame46, 49, this.frame50, 80, this.frame81, 89, this.frame90, 96, this.frame97, 100, this.frame101, 105, this.frame106, 110, this.frame111, 111, this.frame112, 133, this.frame134, 137, this.frame138, 145, this.frame146, 153, this.frame154, 158, this.frame159, 166, this.frame167, 168, this.frame169, 174, this.frame175, 180, this.frame181, 190, this.frame191, 197, this.frame198, 201, this.frame202, 209, this.frame210, 219, this.frame220, 224, this.frame225, 228, this.frame229, 234, this.frame235, 241, this.frame242, 254, this.frame255, 262, this.frame263, 269, this.frame270, 271, this.frame272, 285, this.frame286, 288, this.frame289, 295, this.frame296, 308, this.frame309, 338, this.frame339, 341, this.frame342, 350, this.frame351, 357, this.frame358, 361, this.frame362, 366, this.frame367, 372, this.frame373, 379, this.frame380, 385, this.frame386, 403, this.frame404, 411, this.frame412, 431, this.frame432, 438, this.frame439, 452, this.frame453, 463, this.frame464, 481, this.frame482, 495, this.frame496, 522, this.frame523, 527, this.frame528, 557, this.frame558, 563, this.frame564, 568, this.frame569, 582, this.frame583, 589, this.frame590, 591, this.frame592, 592, this.frame593, 608, this.frame609, 612, this.frame613, 617, this.frame618, 618, this.frame619, 629, this.frame630, 638, this.frame639, 657, this.frame658, 661, this.frame662, 705, this.frame706, 709, this.frame710, 710, this.frame711, 746, this.frame747, 760, this.frame761, 846, this.frame847, 850, this.frame851, 888, this.frame889, 901, this.frame902, 955, this.frame956, 1000, this.frame1001, 1006, this.frame1007, 1016, this.frame1017, 1057, this.frame1058, 1085, this.frame1086, 1095, this.frame1096, 1117, this.frame1118, 1124, this.frame1125]);
            return;
        }
        Timeline_19.prototype.frame18 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_19.prototype.frame22 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_19.prototype.frame26 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_19.prototype.frame38 = function () {
            this.mc.parent._mcctrl.dash(2.5);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_19.prototype.frame46 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_19.prototype.frame50 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_19.prototype.frame81 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_19.prototype.frame90 = function () {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }; // end function
        Timeline_19.prototype.frame97 = function () {
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            return;
        }; // end function
        Timeline_19.prototype.frame101 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_19.prototype.frame106 = function () {
            this.mc.parent._mcctrl.move(-2, -2);
            return;
        }; // end function
        Timeline_19.prototype.frame111 = function () {
            this.mc.parent._mcctrl.movePercent(2, 1);
            this.mc.parent._mcctrl.setTouchFloor("落地", true);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }; // end function
        Timeline_19.prototype.frame112 = function () {
            this.mc.parent._mcctrl.loop("跳招loop");
            return;
        }; // end function
        Timeline_19.prototype.frame134 = function () {
            this.mc.parent._mcctrl.movePercent(0.3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.03, 0);
            return;
        }; // end function
        Timeline_19.prototype.frame138 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setBisha();
            return;
        }; // end function
        Timeline_19.prototype.frame146 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_19.prototype.frame154 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_19.prototype.frame159 = function () {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill2();
            return;
        }; // end function
        Timeline_19.prototype.frame167 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_19.prototype.frame169 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_19.prototype.frame175 = function () {
            this.mc.parent._mcctrl.movePercent(1.3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_19.prototype.frame181 = function () {
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao2();
            return;
        }; // end function
        Timeline_19.prototype.frame191 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_19.prototype.frame198 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_19.prototype.frame202 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_19.prototype.frame210 = function () {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_19.prototype.frame220 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_19.prototype.frame225 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_19.prototype.frame229 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            return;
        }; // end function
        Timeline_19.prototype.frame235 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_19.prototype.frame242 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_19.prototype.frame255 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_19.prototype.frame263 = function () {
            this.mc.parent._EffectCtrl.shine(16257056);
            return;
        }; // end function
        Timeline_19.prototype.frame270 = function () {
            this.mc.parent._mcctrl.justHitToPlay("kj2", "砍技2HIT", false, false);
            return;
        }; // end function
        Timeline_19.prototype.frame272 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_19.prototype.frame286 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_19.prototype.frame289 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.15, 0);
            return;
        }; // end function
        Timeline_19.prototype.frame296 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_19.prototype.frame309 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_19.prototype.frame339 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_19.prototype.frame342 = function () {
            this.mc.parent._EffectCtrl.shine(16257056);
            return;
        }; // end function
        Timeline_19.prototype.frame351 = function () {
            this.mc.parent._mcctrl.setAttack("砍1");
            return;
        }; // end function
        Timeline_19.prototype.frame358 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_19.prototype.frame362 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_19.prototype.frame367 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_19.prototype.frame373 = function () {
            this.mc.parent._EffectCtrl.shine(16257056);
            return;
        }; // end function
        Timeline_19.prototype.frame380 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_19.prototype.frame386 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_19.prototype.frame404 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_19.prototype.frame412 = function () {
            this.mc.parent._EffectCtrl.shine(15652400);
            return;
        }; // end function
        Timeline_19.prototype.frame432 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_19.prototype.frame439 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_19.prototype.frame453 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_19.prototype.frame464 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_19.prototype.frame482 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_19.prototype.frame496 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "鸣人3");
            return;
        }; // end function
        Timeline_19.prototype.frame523 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_19.prototype.frame528 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }; // end function
        Timeline_19.prototype.frame558 = function () {
            this.mc.parent._EffectCtrl.shine(39160);
            return;
        }; // end function
        Timeline_19.prototype.frame564 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_19.prototype.frame569 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_19.prototype.frame583 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_19.prototype.frame590 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("空中必杀");
        };
        Timeline_19.prototype.frame592 = function () {
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }; // end function
        Timeline_19.prototype.frame593 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "鸣人5");
            return;
        }; // end function
        Timeline_19.prototype.frame609 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_19.prototype.frame613 = function () {
            this.mc.parent._EffectCtrl.shake(0, 5);
            return;
        }; // end function
        Timeline_19.prototype.frame618 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_19.prototype.frame619 = function () {
            this.mc.parent._EffectCtrl.shine(6291480);
            return;
        }; // end function
        Timeline_19.prototype.frame630 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_19.prototype.frame639 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_19.prototype.frame658 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "鸣人4");
            return;
        }; // end function
        Timeline_19.prototype.frame662 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_19.prototype.frame706 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_19.prototype.frame710 = function () {
            this.mc.parent._EffectCtrl.shine();
            return;
        }; // end function
        Timeline_19.prototype.frame711 = function () {
            this.mc.parent._EffectCtrl.shine(6621708);
            return;
        }; // end function
        Timeline_19.prototype.frame747 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_19.prototype.frame761 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_19.prototype.frame847 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }; // end function
        Timeline_19.prototype.frame851 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_19.prototype.frame889 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_19.prototype.frame902 = function () {
            this.mc.parent._mcctrl.ClearState();
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }; // end function
        Timeline_19.prototype.frame956 = function () {
            this.mc.parent._EffectCtrl.endShake();
            return;
        }; // end function
        Timeline_19.prototype.frame1001 = function () {
            this.mc.parent._EffectCtrl.endShake();
            return;
        }; // end function
        Timeline_19.prototype.frame1007 = function () {
            this.mc.parent._EffectCtrl.endWanKai();
            return;
        }; // end function
        Timeline_19.prototype.frame1017 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_19.prototype.frame1058 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_19.prototype.frame1086 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_19.prototype.frame1096 = function () {
            this.mc.parent._EffectCtrl.startWanKai("鸣人4");
            return;
        }; // end function
        Timeline_19.prototype.frame1118 = function () {
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }; // end function
        Timeline_19.prototype.frame1125 = function () {
            this.mc.parent._FighterCtrler.doWanKai();
            return;
        }; // end function
        return Timeline_19;
    }());
    hero_naruto.Timeline_19 = Timeline_19;
    __reflect(Timeline_19.prototype, "hero_naruto.Timeline_19");
})(hero_naruto || (hero_naruto = {}));
//# sourceMappingURL=Timeline_19.js.map