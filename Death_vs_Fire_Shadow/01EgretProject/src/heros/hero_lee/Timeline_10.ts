/*
*主骨骼动画形态2对应的帧事件
*/
namespace hero_lee {
    export class Timeline_10 {

        public mc: any;                     //zmovie.ZMovieClip

        constructor(_mc: zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [9, this.frame10, 11, this.frame12, 14, this.frame15, 16, this.frame17, 27, this.frame28, 33, this.frame34, 34, this.frame35, 64, this.frame65, 70, this.frame71, 71, this.frame72, 73, this.frame74, 74, this.frame75, 76, this.frame77, 85, this.frame86, 98, this.frame99, 106, this.frame107, 111, this.frame112, 123, this.frame124, 125, this.frame126, 129, this.frame130, 134, this.frame135, 139, this.frame140, 146, this.frame147, 152, this.frame153, 157, this.frame158, 162, this.frame163, 169, this.frame170, 176, this.frame177, 178, this.frame179, 182, this.frame183, 184, this.frame185, 191, this.frame192, 196, this.frame197, 201, this.frame202, 209, this.frame210, 215, this.frame216, 219, this.frame220, 227, this.frame228, 229, this.frame230, 234, this.frame235, 245, this.frame246, 258, this.frame259, 259, this.frame260, 266, this.frame267, 269, this.frame270, 273, this.frame274, 279, this.frame280, 283, this.frame284, 287, this.frame288, 292, this.frame293, 298, this.frame299, 305, this.frame306, 320, this.frame321, 324, this.frame325, 336, this.frame337, 343, this.frame344, 353, this.frame354, 365, this.frame366, 371, this.frame372, 384, this.frame385, 392, this.frame393, 399, this.frame400, 407, this.frame408, 435, this.frame436, 437, this.frame438, 442, this.frame443, 454, this.frame455, 459, this.frame460, 464, this.frame465, 491, this.frame492, 496, this.frame497, 516, this.frame517, 526, this.frame527, 547, this.frame548, 562, this.frame563, 563, this.frame564, 582, this.frame583, 583, this.frame584, 584, this.frame585, 590, this.frame591, 598, this.frame599, 613, this.frame614, 615, this.frame616, 622, this.frame623, 624, this.frame625, 638, this.frame639, 643, this.frame644, 662, this.frame663, 673, this.frame674, 685, this.frame686, 697, this.frame698, 707, this.frame708, 738, this.frame739, 741, this.frame742, 755, this.frame756, 765, this.frame766, 780, this.frame781, 782, this.frame783, 785, this.frame786, 826, this.frame827, 829, this.frame830, 865, this.frame866, 878, this.frame879, 895, this.frame896, 898, this.frame899, 903, this.frame904, 910, this.frame911, 938, this.frame939, 955, this.frame956, 969, this.frame970, 972, this.frame973, 976, this.frame977, 989, this.frame990, 990, this.frame991, 1001, this.frame1002, 1016, this.frame1017, 1032, this.frame1033, 1056, this.frame1057, 1057, this.frame1058, 1064, this.frame1065, 1068, this.frame1069, 1069, this.frame1070, 1078, this.frame1079, 1080, this.frame1081, 1155, this.frame1156, 1171, this.frame1172, 1173, this.frame1174, 1208, this.frame1209, 1310, this.frame1311, 1330, this.frame1331, 1343, this.frame1344, 1356, this.frame1357, 1378, this.frame1379, 1413, this.frame1414, 1454, this.frame1455, 1482, this.frame1483]);
            return;
        }
        public frame10() {
            this.mc.parent._EffectCtrl.shadow(0, 255, 0);
            return;
        }// end function

        public frame12() {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        public frame15() {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        public frame17() {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        public frame28() {
            this.mc.parent._mcctrl.dash(2.5);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(0, 255, 0);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame34() {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        public frame35() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame65() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame71() {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }// end function

        public frame72() {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }// end function

        public frame74() {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        public frame75() {
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            return;
        }// end function

        public frame77() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame86() {
            this.mc.parent._mcctrl.setHitTarget("tz0atm", "跳招3");
            this.mc.parent._mcctrl.movePercent(1, -1);
            this.mc.parent._mcctrl.dampingPercent(0, 0.1);
            this.mc.parent._mcctrl.setTouchFloor("跳招2", true);
            this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            this.mc.parent._mcctrl.gotoAndPlay("跳招1");
            return;
        }// end function

        public frame99() {
            this.mc.parent._mcctrl.loop("跳招1");
            return;
        }// end function

        public frame107() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame112() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame124() {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }// end function

        public frame126() {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        public frame130() {
            this.mc.parent._mcctrl.setAttack("砍2");
            return;
        }// end function

        public frame135() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame140() {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        public frame147() {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setZhao1("招12");
            this.mc.parent._mcctrl.setBisha();
            return;
        }// end function

        public frame153() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame158() {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        public frame163() {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setAttack("砍4");
            return;
        }// end function

        public frame170() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame177() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame179() {
            this.mc.parent._mcctrl.movePercent(0.8, 0);
            return;
        }// end function

        public frame183() {
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        public frame185() {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setAttack("砍5");
            return;
        }// end function

        public frame192() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame197() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame202() {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        public frame210() {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setAttack("砍6");
            return;
        }// end function

        public frame216() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame220() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame228() {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            return;
        }// end function

        public frame230() {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        public frame235() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame246() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame259() {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._EffectCtrl.shadow(0, 255, 0);
            return;
        }// end function

        public frame260() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame267() {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        public frame270() {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }// end function

        public frame274() {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        public frame280() {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }// end function

        public frame284() {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        public frame288() {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame293() {
            this.mc.parent._mcctrl.setSkill2("砍技21");
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setBishaUP();
            return;
        }// end function

        public frame299() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame306() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame321() {
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame325() {
            if (this.mc.parent._FighterCtrler.targetInRange([0, 300])) {
                this.mc.parent._FighterCtrler.moveToTarget(-20, null, false);
            }
            else {
                this.mc.parent._FighterCtrler.moveOnce(300, 0);
            }
            return;
        }// end function

        public frame337() {
            this.mc.parent._mcctrl.justHitToPlay("kj2", "砍技21", false, false);
            return;
        }// end function

        public frame344() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame354() {
            this.mc.parent._FighterCtrler.moveToTarget(-10, 10, false);
            this.mc.parent._mcctrl.move(2, -5);
            this.mc.parent._mcctrl.damping(0.2, 0.2);
            return;
        }// end function

        public frame366() {
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            this.mc.parent._mcctrl.setBishaAIR();
            return;
        }// end function

        public frame372() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame385() {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._mcctrl.move(10, -15);
            this.mc.parent._mcctrl.damping(0.5, 1);
            this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            return;
        }// end function

        public frame393() {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._mcctrl.move(10, -15);
            this.mc.parent._mcctrl.damping(0.5, 1);
            this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            return;
        }// end function

        public frame400() {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame408() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame436() {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        public frame438() {
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame443() {
            this.mc.parent._FighterCtrler.moveToTarget(80, 0, true);
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            this.mc.parent._EffectCtrl.slowDown(0.5);
            this.mc.parent._mcctrl.gotoAndPlay("招12");

            return;
        }// end function

        public frame455() {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setAttack("砍5");
            return;
        }// end function

        public frame460() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame465() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame492() {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._EffectCtrl.dash();
            for(let i = 0;i<this.mc.numChildren;i++){
                let child = <zmovie.ZMovieClip>this.mc.getChildAt(i);
                if(child._mcName == "mc_12"){
                    new Timeline_18(child);
                }
            }
            return;
        }// end function

        public frame497() {
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        public frame517() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame527() {
            this.mc.parent._mcctrl.movePercent(1.5, -1.5);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0.05);
            this.mc.parent._EffectCtrl.shadow(0, 255, 0);
            return;
        }// end function

        public frame548() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame563() {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._mcctrl.move(10, -10);
            this.mc.parent._mcctrl.damping(0, 1);
            this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            return;
        }// end function

        public frame564() {
            // this.mc.parent._mcctrl.setTouchFloor("招21", true);
            return;
        }// end function

        public frame583() {
            // this.mc.parent._mcctrl.loop("招2");
            return;
        }// end function

        public frame584() {
            // this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame585() {
            // this.mc.parent._EffectCtrl.shake(0, 3);
            return;
        }// end function

        public frame591() {
            // this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame599() {
            // this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame614() {
            // this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        public frame616() {
            // this.mc.parent._mcctrl.move(10, 0);
            // this.mc.parent._EffectCtrl.shadow(0, 200, 0);
            return;
        }// end function

        public frame623() {
            // this.mc.parent._mcctrl.damping(1, 0);
            return;
        }// end function

        public frame625() {
            // this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame639() {
            // this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame644() {
            // this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame663() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame674() {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        public frame686() {
            this.mc.parent._mcctrl.move(0, -8);
            this.mc.parent._mcctrl.damping(0, 0.8);
            return;
        }// end function

        public frame698() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame708() {
            this.mc.parent._EffectCtrl.bisha(false, "小李1");
            return;
        }// end function

        public frame739() {
            this.mc.parent._EffectCtrl.dash();
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame742() {
            this.mc.parent._FighterCtrler.moveToTarget(-50, null, false);
            this.mc.parent._mcctrl.move(5, 0);
            this.mc.parent._mcctrl.damping(0.5, 0);
            return;
        }// end function

        public frame756() {
            this.mc.parent._mcctrl.justHitToPlay("bs1", "必杀2", false, false);
            return;
        }// end function

        public frame766() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame781() {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }// end function

        public frame783() {
            this.mc.parent._EffectCtrl.shadow(0, 255, 0);
            return;
        }// end function

        public frame786() {
            this.mc.parent._mcctrl.move(0, -1);
            return;
        }// end function

        public frame827() {
            this.mc.parent._FighterCtrler.moveToTarget(0, -100, false);
            this.mc.parent._mcctrl.isApplyG(false);
            this.mc.parent._mcctrl.move(0, 0);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame830() {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }// end function

        public frame866() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame879() {
            this.mc.parent._EffectCtrl.bisha(false, "小李1");
            return;
        }// end function

        public frame896() {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame899() {
            this.mc.parent._mcctrl.move(15, -15);
            this.mc.parent._EffectCtrl.dash();
            this.mc.parent._EffectCtrl.shake(0, 3);
            this.mc.parent._EffectCtrl.shine(2162432);
            return;
        }// end function

        public frame904() {
            this.mc.parent._mcctrl.damping(0.5, 0.5);
            return;
        }// end function

        public frame911() {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }// end function

        public frame939() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame956() {
            this.mc.parent._EffectCtrl.bisha(false, "小李1");
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }// end function

        public frame970() {
            this.mc.parent._mcctrl.move(10, -15);
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._mcctrl.gotoAndPlay("空中必杀1")
            this.mc.parent._mcctrl.isApplyG(true);
            return;
        }// end function


        public frame973() {
            this.mc.parent._mcctrl.damping(0, 1);
            this.mc.parent._mcctrl.setTouchFloor("空中必杀2", true);
            return;
        }// end function

        public frame977() {
            this.mc.parent._mcctrl.gotoAndPlay("空中必杀loop");
        }
        public frame990() {
            this.mc.parent._mcctrl.loop("空中必杀loop");
            return;
        }// end function

        public frame991() {
            this.mc.parent._EffectCtrl.shake(0, 3);
            return;
        }// end function

        public frame1002() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame1017() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1033() {
            this.mc.parent._EffectCtrl.bisha(true, "小李1");  //cbs人物消失
            return;
        }// end function

        public frame1057() {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame1058() {
            this.mc.parent._mcctrl.move(30, 0);
            this.mc.parent._EffectCtrl.shake(0, 3); 
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame1065() {
            this.mc.parent._mcctrl.damping(6, 0);
            if (this.mc.parent._FighterCtrler.justHit("cbs1", false)) {
                this.mc.parent._FighterCtrler.moveToTarget(-10, 0, false);
            }
            return;
        }// end function

        public frame1069() {
            this.mc.parent._mcctrl.justHitToPlay("cbs1", "超必杀2", false, true);
            return;
        }// end function

        public frame1070() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame1079() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1081() {
            this.mc.parent._mcctrl.move(6, 0);
            return;
        }// end function

        public frame1156() {
            this.mc.parent._mcctrl.damping(1, 0);
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }// end function

        public frame1172() {
            this.mc.parent._mcctrl.move(40, 0);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame1174() {
            this.mc.parent._mcctrl.damping(8, 0);
            this.mc.parent._EffectCtrl.shake(0, 3);
            for(let i = 0;i<this.mc.numChildren;i++){
                let child = <zmovie.ZMovieClip>this.mc.getChildAt(i);
                if(child._mcName == "mc_17"){
                    new Timeline_22(child);
                }
                if(child._mcName == "mc_16"){
                    new Timeline_21(child);
                }
            }
            return;
        }// end function

        public frame1209() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1311() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1331() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1344() {
            this.mc.parent._mcctrl.ClearState();
        }

        public frame1357() {
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }// end function

        public frame1379() {
            this.mc.parent._EffectCtrl.endWanKai();
            this.mc.parent._EffectCtrl.endShake();
            return;
        }// end function

        public frame1414() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1455() {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        public frame1483() {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

    }
}
