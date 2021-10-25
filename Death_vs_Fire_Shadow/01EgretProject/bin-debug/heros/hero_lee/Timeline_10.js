var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/*
*主骨骼动画形态2对应的帧事件
*/
var hero_lee;
(function (hero_lee) {
    var Timeline_10 = (function () {
        function Timeline_10(_mc) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [9, this.frame10, 11, this.frame12, 14, this.frame15, 16, this.frame17, 27, this.frame28, 33, this.frame34, 34, this.frame35, 64, this.frame65, 70, this.frame71, 71, this.frame72, 73, this.frame74, 74, this.frame75, 76, this.frame77, 85, this.frame86, 98, this.frame99, 106, this.frame107, 111, this.frame112, 123, this.frame124, 125, this.frame126, 129, this.frame130, 134, this.frame135, 139, this.frame140, 146, this.frame147, 152, this.frame153, 157, this.frame158, 162, this.frame163, 169, this.frame170, 176, this.frame177, 178, this.frame179, 182, this.frame183, 184, this.frame185, 191, this.frame192, 196, this.frame197, 201, this.frame202, 209, this.frame210, 215, this.frame216, 219, this.frame220, 227, this.frame228, 229, this.frame230, 234, this.frame235, 245, this.frame246, 258, this.frame259, 259, this.frame260, 266, this.frame267, 269, this.frame270, 273, this.frame274, 279, this.frame280, 283, this.frame284, 287, this.frame288, 292, this.frame293, 298, this.frame299, 305, this.frame306, 320, this.frame321, 324, this.frame325, 336, this.frame337, 343, this.frame344, 353, this.frame354, 365, this.frame366, 371, this.frame372, 384, this.frame385, 392, this.frame393, 399, this.frame400, 407, this.frame408, 435, this.frame436, 437, this.frame438, 442, this.frame443, 454, this.frame455, 459, this.frame460, 464, this.frame465, 491, this.frame492, 496, this.frame497, 516, this.frame517, 526, this.frame527, 547, this.frame548, 562, this.frame563, 563, this.frame564, 582, this.frame583, 583, this.frame584, 584, this.frame585, 590, this.frame591, 598, this.frame599, 613, this.frame614, 615, this.frame616, 622, this.frame623, 624, this.frame625, 638, this.frame639, 643, this.frame644, 662, this.frame663, 673, this.frame674, 685, this.frame686, 697, this.frame698, 707, this.frame708, 738, this.frame739, 741, this.frame742, 755, this.frame756, 765, this.frame766, 780, this.frame781, 782, this.frame783, 785, this.frame786, 826, this.frame827, 829, this.frame830, 865, this.frame866, 878, this.frame879, 895, this.frame896, 898, this.frame899, 903, this.frame904, 910, this.frame911, 938, this.frame939, 955, this.frame956, 969, this.frame970, 972, this.frame973, 976, this.frame977, 989, this.frame990, 990, this.frame991, 1001, this.frame1002, 1016, this.frame1017, 1032, this.frame1033, 1056, this.frame1057, 1057, this.frame1058, 1064, this.frame1065, 1068, this.frame1069, 1069, this.frame1070, 1078, this.frame1079, 1080, this.frame1081, 1155, this.frame1156, 1171, this.frame1172, 1173, this.frame1174, 1208, this.frame1209, 1310, this.frame1311, 1330, this.frame1331, 1343, this.frame1344, 1356, this.frame1357, 1378, this.frame1379, 1413, this.frame1414, 1454, this.frame1455, 1482, this.frame1483]);
            return;
        }
        Timeline_10.prototype.frame10 = function () {
            this.mc.parent._EffectCtrl.shadow(0, 255, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame12 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_10.prototype.frame15 = function () {
            this.mc.parent._EffectCtrl.walk();
            return;
        }; // end function
        Timeline_10.prototype.frame17 = function () {
            this.mc.parent._mcctrl.loop("走");
            return;
        }; // end function
        Timeline_10.prototype.frame28 = function () {
            this.mc.parent._mcctrl.dash(2.5);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(0, 255, 0);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_10.prototype.frame34 = function () {
            this.mc.parent._mcctrl.dashStop();
            return;
        }; // end function
        Timeline_10.prototype.frame35 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame65 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame71 = function () {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }; // end function
        Timeline_10.prototype.frame72 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame74 = function () {
            this.mc.parent._mcctrl.stopMove();
            return;
        }; // end function
        Timeline_10.prototype.frame75 = function () {
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            return;
        }; // end function
        Timeline_10.prototype.frame77 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame86 = function () {
            this.mc.parent._mcctrl.setHitTarget("tz0atm", "跳招3");
            this.mc.parent._mcctrl.movePercent(1, -1);
            this.mc.parent._mcctrl.dampingPercent(0, 0.1);
            this.mc.parent._mcctrl.setTouchFloor("跳招2", true);
            this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            this.mc.parent._mcctrl.gotoAndPlay("跳招1");
            return;
        }; // end function
        Timeline_10.prototype.frame99 = function () {
            this.mc.parent._mcctrl.loop("跳招1");
            return;
        }; // end function
        Timeline_10.prototype.frame107 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame112 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame124 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame126 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame130 = function () {
            this.mc.parent._mcctrl.setAttack("砍2");
            return;
        }; // end function
        Timeline_10.prototype.frame135 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame140 = function () {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame147 = function () {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setZhao1("招12");
            this.mc.parent._mcctrl.setBisha();
            return;
        }; // end function
        Timeline_10.prototype.frame153 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame158 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame163 = function () {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setAttack("砍4");
            return;
        }; // end function
        Timeline_10.prototype.frame170 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_10.prototype.frame177 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame179 = function () {
            this.mc.parent._mcctrl.movePercent(0.8, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame183 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame185 = function () {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setAttack("砍5");
            return;
        }; // end function
        Timeline_10.prototype.frame192 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_10.prototype.frame197 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame202 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame210 = function () {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setAttack("砍6");
            return;
        }; // end function
        Timeline_10.prototype.frame216 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_10.prototype.frame220 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame228 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame230 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame235 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_10.prototype.frame246 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame259 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._EffectCtrl.shadow(0, 255, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame260 = function () {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_10.prototype.frame267 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame270 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame274 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame280 = function () {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame284 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame288 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_10.prototype.frame293 = function () {
            this.mc.parent._mcctrl.setSkill2("砍技21");
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setBishaUP();
            return;
        }; // end function
        Timeline_10.prototype.frame299 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_10.prototype.frame306 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame321 = function () {
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_10.prototype.frame325 = function () {
            if (this.mc.parent._FighterCtrler.targetInRange([0, 300])) {
                this.mc.parent._FighterCtrler.moveToTarget(-20, null, false);
            }
            else {
                this.mc.parent._FighterCtrler.moveOnce(300, 0);
            }
            return;
        }; // end function
        Timeline_10.prototype.frame337 = function () {
            this.mc.parent._mcctrl.justHitToPlay("kj2", "砍技21", false, false);
            return;
        }; // end function
        Timeline_10.prototype.frame344 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame354 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(-10, 10, false);
            this.mc.parent._mcctrl.move(2, -5);
            this.mc.parent._mcctrl.damping(0.2, 0.2);
            return;
        }; // end function
        Timeline_10.prototype.frame366 = function () {
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            this.mc.parent._mcctrl.setBishaAIR();
            return;
        }; // end function
        Timeline_10.prototype.frame372 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame385 = function () {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._mcctrl.move(10, -15);
            this.mc.parent._mcctrl.damping(0.5, 1);
            this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame393 = function () {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._mcctrl.move(10, -15);
            this.mc.parent._mcctrl.damping(0.5, 1);
            this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame400 = function () {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_10.prototype.frame408 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame436 = function () {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_10.prototype.frame438 = function () {
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_10.prototype.frame443 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(80, 0, true);
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            this.mc.parent._EffectCtrl.slowDown(0.5);
            this.mc.parent._mcctrl.gotoAndPlay("招12");
            return;
        }; // end function
        Timeline_10.prototype.frame455 = function () {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setAttack("砍5");
            return;
        }; // end function
        Timeline_10.prototype.frame460 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_10.prototype.frame465 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame492 = function () {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._EffectCtrl.dash();
            for (var i = 0; i < this.mc.numChildren; i++) {
                var child = this.mc.getChildAt(i);
                if (child._mcName == "mc_12") {
                    new hero_lee.Timeline_18(child);
                }
            }
            return;
        }; // end function
        Timeline_10.prototype.frame497 = function () {
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame517 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame527 = function () {
            this.mc.parent._mcctrl.movePercent(1.5, -1.5);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0.05);
            this.mc.parent._EffectCtrl.shadow(0, 255, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame548 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame563 = function () {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._mcctrl.move(10, -10);
            this.mc.parent._mcctrl.damping(0, 1);
            this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame564 = function () {
            // this.mc.parent._mcctrl.setTouchFloor("招21", true);
            return;
        }; // end function
        Timeline_10.prototype.frame583 = function () {
            // this.mc.parent._mcctrl.loop("招2");
            return;
        }; // end function
        Timeline_10.prototype.frame584 = function () {
            // this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_10.prototype.frame585 = function () {
            // this.mc.parent._EffectCtrl.shake(0, 3);
            return;
        }; // end function
        Timeline_10.prototype.frame591 = function () {
            // this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_10.prototype.frame599 = function () {
            // this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame614 = function () {
            // this.mc.parent._mcctrl.addQi(5);
            return;
        }; // end function
        Timeline_10.prototype.frame616 = function () {
            // this.mc.parent._mcctrl.move(10, 0);
            // this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame623 = function () {
            // this.mc.parent._mcctrl.damping(1, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame625 = function () {
            // this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_10.prototype.frame639 = function () {
            // this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame644 = function () {
            // this.mc.parent._mcctrl.addQi(10);
            return;
        }; // end function
        Timeline_10.prototype.frame663 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame674 = function () {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }; // end function
        Timeline_10.prototype.frame686 = function () {
            this.mc.parent._mcctrl.move(0, -8);
            this.mc.parent._mcctrl.damping(0, 0.8);
            return;
        }; // end function
        Timeline_10.prototype.frame698 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame708 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "小李1");
            return;
        }; // end function
        Timeline_10.prototype.frame739 = function () {
            this.mc.parent._EffectCtrl.dash();
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_10.prototype.frame742 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(-50, null, false);
            this.mc.parent._mcctrl.move(5, 0);
            this.mc.parent._mcctrl.damping(0.5, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame756 = function () {
            this.mc.parent._mcctrl.justHitToPlay("bs1", "必杀2", false, false);
            return;
        }; // end function
        Timeline_10.prototype.frame766 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame781 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }; // end function
        Timeline_10.prototype.frame783 = function () {
            this.mc.parent._EffectCtrl.shadow(0, 255, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame786 = function () {
            this.mc.parent._mcctrl.move(0, -1);
            return;
        }; // end function
        Timeline_10.prototype.frame827 = function () {
            this.mc.parent._FighterCtrler.moveToTarget(0, -100, false);
            this.mc.parent._mcctrl.isApplyG(false);
            this.mc.parent._mcctrl.move(0, 0);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }; // end function
        Timeline_10.prototype.frame830 = function () {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }; // end function
        Timeline_10.prototype.frame866 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame879 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "小李1");
            return;
        }; // end function
        Timeline_10.prototype.frame896 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_10.prototype.frame899 = function () {
            this.mc.parent._mcctrl.move(15, -15);
            this.mc.parent._EffectCtrl.dash();
            this.mc.parent._EffectCtrl.shake(0, 3);
            this.mc.parent._EffectCtrl.shine(2162432);
            return;
        }; // end function
        Timeline_10.prototype.frame904 = function () {
            this.mc.parent._mcctrl.damping(0.5, 0.5);
            return;
        }; // end function
        Timeline_10.prototype.frame911 = function () {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }; // end function
        Timeline_10.prototype.frame939 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame956 = function () {
            this.mc.parent._EffectCtrl.bisha(false, "小李1");
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }; // end function
        Timeline_10.prototype.frame970 = function () {
            this.mc.parent._mcctrl.move(10, -15);
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._mcctrl.gotoAndPlay("空中必杀1");
            this.mc.parent._mcctrl.isApplyG(true);
            return;
        }; // end function
        Timeline_10.prototype.frame973 = function () {
            this.mc.parent._mcctrl.damping(0, 1);
            this.mc.parent._mcctrl.setTouchFloor("空中必杀2", true);
            return;
        }; // end function
        Timeline_10.prototype.frame977 = function () {
            this.mc.parent._mcctrl.gotoAndPlay("空中必杀loop");
        };
        Timeline_10.prototype.frame990 = function () {
            this.mc.parent._mcctrl.loop("空中必杀loop");
            return;
        }; // end function
        Timeline_10.prototype.frame991 = function () {
            this.mc.parent._EffectCtrl.shake(0, 3);
            return;
        }; // end function
        Timeline_10.prototype.frame1002 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_10.prototype.frame1017 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame1033 = function () {
            this.mc.parent._EffectCtrl.bisha(true, "小李1"); //cbs人物消失
            return;
        }; // end function
        Timeline_10.prototype.frame1057 = function () {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }; // end function
        Timeline_10.prototype.frame1058 = function () {
            this.mc.parent._mcctrl.move(30, 0);
            this.mc.parent._EffectCtrl.shake(0, 3);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_10.prototype.frame1065 = function () {
            this.mc.parent._mcctrl.damping(6, 0);
            if (this.mc.parent._FighterCtrler.justHit("cbs1", false)) {
                this.mc.parent._FighterCtrler.moveToTarget(-10, 0, false);
            }
            return;
        }; // end function
        Timeline_10.prototype.frame1069 = function () {
            this.mc.parent._mcctrl.justHitToPlay("cbs1", "超必杀2", false, true);
            return;
        }; // end function
        Timeline_10.prototype.frame1070 = function () {
            this.mc.parent._mcctrl.endAct();
            return;
        }; // end function
        Timeline_10.prototype.frame1079 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame1081 = function () {
            this.mc.parent._mcctrl.move(6, 0);
            return;
        }; // end function
        Timeline_10.prototype.frame1156 = function () {
            this.mc.parent._mcctrl.damping(1, 0);
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }; // end function
        Timeline_10.prototype.frame1172 = function () {
            this.mc.parent._mcctrl.move(40, 0);
            this.mc.parent._EffectCtrl.dash();
            return;
        }; // end function
        Timeline_10.prototype.frame1174 = function () {
            this.mc.parent._mcctrl.damping(8, 0);
            this.mc.parent._EffectCtrl.shake(0, 3);
            for (var i = 0; i < this.mc.numChildren; i++) {
                var child = this.mc.getChildAt(i);
                if (child._mcName == "mc_17") {
                    new hero_lee.Timeline_22(child);
                }
                if (child._mcName == "mc_16") {
                    new hero_lee.Timeline_21(child);
                }
            }
            return;
        }; // end function
        Timeline_10.prototype.frame1209 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame1311 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame1331 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame1344 = function () {
            this.mc.parent._mcctrl.ClearState();
        };
        Timeline_10.prototype.frame1357 = function () {
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }; // end function
        Timeline_10.prototype.frame1379 = function () {
            this.mc.parent._EffectCtrl.endWanKai();
            this.mc.parent._EffectCtrl.endShake();
            return;
        }; // end function
        Timeline_10.prototype.frame1414 = function () {
            this.mc.parent._mcctrl.idle();
            return;
        }; // end function
        Timeline_10.prototype.frame1455 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        Timeline_10.prototype.frame1483 = function () {
            this.mc.parent._mcctrl.stop();
            return;
        }; // end function
        return Timeline_10;
    }());
    hero_lee.Timeline_10 = Timeline_10;
    __reflect(Timeline_10.prototype, "hero_lee.Timeline_10");
})(hero_lee || (hero_lee = {}));
//# sourceMappingURL=Timeline_10.js.map