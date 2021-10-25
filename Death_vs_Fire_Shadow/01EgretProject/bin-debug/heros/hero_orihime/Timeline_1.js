var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*orihime主骨骼动画对应的帧事件
*/
var hero_orihime;
(function (hero_orihime) {
    var Timeline_1 = (function () {
        function Timeline_1(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [12, this.frame13, 20, this.frame21, 25, this.frame26, 34, this.frame35, 43, this.frame44, 48, this.frame49, 78, this.frame79, 150, this.frame151, 155, this.frame156, 175, this.frame176, 248, this.frame249, 293, this.frame294, 321, this.frame322, 331, this.frame332, 338, this.frame339, 341, this.frame342, 343, this.frame344, 349, this.frame350, 356, this.frame357, 366, this.frame367, 373, this.frame374, 376, this.frame377, 386, this.frame387, 395, this.frame396, 403, this.frame404, 409, this.frame410, 415, this.frame416, 420, this.frame421, 422, this.frame423, 426, this.frame427, 434, this.frame435, 444, this.frame445, 446, this.frame447, 453, this.frame454, 464, this.frame465, 478, this.frame479, 480, this.frame481, 485, this.frame486, 489, this.frame490, 495, this.frame496, 504, this.frame505, 516, this.frame517, 524, this.frame525, 532, this.frame533, 550, this.frame551, 564, this.frame565, 579, this.frame580, 586, this.frame587, 595, this.frame596, 600, this.frame601, 605, this.frame606, 608, this.frame609, 613, this.frame614, 620, this.frame621, 625, this.frame626, 651, this.frame652, 658, this.frame659, 690, this.frame691, 696, this.frame697, 703, this.frame704, 714, this.frame715, 721, this.frame722, 734, this.frame735, 737, this.frame738, 769, this.frame770, 776, this.frame777, 803, this.frame804, 811, this.frame812, 814, this.frame815, 823, this.frame824, 836, this.frame837, 851, this.frame852, 884, this.frame885, 888, this.frame889, 889, this.frame890, 890, this.frame891, 891, this.frame892, 892, this.frame893, 893, this.frame894, 894, this.frame895, 895, this.frame896, 896, this.frame897, 897, this.frame898, 898, this.frame899, 899, this.frame900, 900, this.frame901, 901, this.frame902, 902, this.frame903, 903, this.frame904, 904, this.frame905, 905, this.frame906, 906, this.frame907, 907, this.frame908, 908, this.frame909, 909, this.frame910, 910, this.frame911, 911, this.frame912, 912, this.frame913, 913, this.frame914, 914, this.frame915, 915, this.frame916, 924, this.frame925, 946, this.frame947, 993, this.frame994, 998, this.frame999, 1002, this.frame1003, 1006, this.frame1007, 1010, this.frame1011, 1014, this.frame1015, 1018, this.frame1019, 1022, this.frame1023, 1114, this.frame1115, 1132, this.frame1133]);
        }
        Timeline_1.prototype.frame13 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame21 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_1.prototype.frame26 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_1.prototype.frame35 = function () {
            this.mc.parent._mcctrl.dash(2.5);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(255, 0, 255);
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
        Timeline_1.prototype.frame151 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame156 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame176 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame249 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame294 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame322 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_1.prototype.frame332 = function () {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }; // end function
        Timeline_1.prototype.frame339 = function () {
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            return;
        }; // end function
        Timeline_1.prototype.frame342 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame344 = function () {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.move(0, -1);
            return;
        }; // end function
        Timeline_1.prototype.frame350 = function () {
            this.mc.parent._mcctrl.move(-5, -5);
            this.mc.parent._mcctrl.damping(0.5, 0.5);
            this.mc.parent._mcctrl.fire("tzatm", { x: { start: 15, add: 1, max: 20 }, y: { start: 0, add: 0.5, max: 8 }, hold: 5, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame357 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame367 = function () {
            this.mc.parent._mcctrl.movePercent(1.2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.06, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame374 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame377 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame387 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame396 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame404 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setZhao3("招31");
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }; // end function
        Timeline_1.prototype.frame410 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame416 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame421 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame423 = function () {
            this.mc.parent._mcctrl.fire("k3atm", { x: 10, y: 6, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame427 = function () {
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame435 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame445 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame447 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame454 = function () {
            this.mc.parent._mcctrl.move(-10, 0);
            this.mc.parent._mcctrl.damping(0.5, 0);
            this.mc.parent._mcctrl.fire("zh1atm", { x: { start: 15, add: 1, max: 20, hit: 10 }, y: 0, hold: 5, hits: 1 });
            this.mc.parent._mcctrl.movePercent(-1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame465 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame479 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame481 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame486 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.shadow(255, 0, 255);
            return;
        }; // end function
        Timeline_1.prototype.frame490 = function () {
            this.mc.parent._mcctrl.setHurtAction("招22");
            return;
        }; // end function
        Timeline_1.prototype.frame496 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame505 = function () {
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setJump();
            this.mc.parent._mcctrl.setBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame517 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame525 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame533 = function () {
            this.mc.parent._mcctrl.fire("zh22atm", { x: 20, y: 0, hold: 5, hits: 1 });
            this.mc.parent._mcctrl.movePercent(-1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame551 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame565 = function () {
            this.mc.parent._mcctrl.fire("zh3atm", { x: 15, y: -7, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame580 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame587 = function () {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._EffectCtrl.shadow(255, 0, 255);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_1.prototype.frame596 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame601 = function () {
            this.mc.parent._mcctrl.justHitToPlay("kj1", "砍技12", false, true);
            return;
        }; // end function
        Timeline_1.prototype.frame606 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame609 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame614 = function () {
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }; // end function
        Timeline_1.prototype.frame621 = function () {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_1.prototype.frame626 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame652 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_1.prototype.frame659 = function () {
            this.mc.parent._mcctrl.fire("kj2atm", { x: { start: 5, hit: 2 }, y: 0, hold: 10, hits: 100 });
            return;
        }; // end function
        Timeline_1.prototype.frame691 = function () {
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setDash();
            return;
        }; // end function
        Timeline_1.prototype.frame697 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame704 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame715 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_1.prototype.frame722 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_1.prototype.frame735 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame738 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_1.prototype.frame770 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame777 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "织姬1");
            return;
        }; // end function
        Timeline_1.prototype.frame804 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame812 = function () {
            this.mc.parent._mcctrl.movePercent(-1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.shine(303095);
            return;
        }; // end function
        Timeline_1.prototype.frame815 = function () {
            this.mc.parent._EffectCtrl.shine(303095);
            return;
        }; // end function
        Timeline_1.prototype.frame824 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame837 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame852 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "织姬1");
            this.recoveryBisha = 3;
            return;
        }; // end function
        Timeline_1.prototype.frame885 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame889 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            this.mc.parent._EffectCtrl.shine(303095);
            return;
        }; // end function
        Timeline_1.prototype.frame890 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }; // end function
        Timeline_1.prototype.frame891 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }; // end function
        Timeline_1.prototype.frame892 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }; // end function
        Timeline_1.prototype.frame893 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }; // end function
        Timeline_1.prototype.frame894 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }; // end function
        Timeline_1.prototype.frame895 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }; // end function
        Timeline_1.prototype.frame896 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }; // end function
        Timeline_1.prototype.frame897 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }; // end function
        Timeline_1.prototype.frame898 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame899 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }; // end function
        Timeline_1.prototype.frame900 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }; // end function
        Timeline_1.prototype.frame901 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }; // end function
        Timeline_1.prototype.frame902 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }; // end function
        Timeline_1.prototype.frame903 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }; // end function
        Timeline_1.prototype.frame904 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }; // end function
        Timeline_1.prototype.frame905 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }; // end function
        Timeline_1.prototype.frame906 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }; // end function
        Timeline_1.prototype.frame907 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }; // end function
        Timeline_1.prototype.frame908 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }; // end function
        Timeline_1.prototype.frame909 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }; // end function
        Timeline_1.prototype.frame910 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }; // end function
        Timeline_1.prototype.frame911 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }; // end function
        Timeline_1.prototype.frame912 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }; // end function
        Timeline_1.prototype.frame913 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }; // end function
        Timeline_1.prototype.frame914 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }; // end function
        Timeline_1.prototype.frame915 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }; // end function
        Timeline_1.prototype.frame916 = function () {
            this.mc.parent._FighterCtrler.addHp(this.recoveryBisha);
            return;
        }; // end function
        Timeline_1.prototype.frame925 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_1.prototype.frame947 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "织姬2");
            return;
        }; // end function
        Timeline_1.prototype.frame994 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_1.prototype.frame999 = function () {
            this.mc.parent._mcctrl.fire("cbs1atm", { x: 20, y: 0, hold: 3, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame1003 = function () {
            this.mc.parent._mcctrl.fire("cbs1atm", { x: 20, y: 0, hold: 3, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame1007 = function () {
            this.mc.parent._mcctrl.fire("cbs2atm", { x: 20, y: 0, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame1011 = function () {
            this.mc.parent._mcctrl.fire("cbs2atm", { x: 20, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame1015 = function () {
            this.mc.parent._mcctrl.fire("cbs2atm", { x: 20, y: 0, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame1019 = function () {
            this.mc.parent._mcctrl.fire("cbs2atm", { x: 20, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame1023 = function () {
            this.mc.parent._mcctrl.fire("cbs3atm", { x: 20, hold: 2, hits: 1 });
            return;
        }; // end function
        Timeline_1.prototype.frame1115 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_1.prototype.frame1133 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        return Timeline_1;
    }());
    hero_orihime.Timeline_1 = Timeline_1;
    __reflect(Timeline_1.prototype, "hero_orihime.Timeline_1");
})(hero_orihime || (hero_orihime = {}));
//# sourceMappingURL=Timeline_1.js.map