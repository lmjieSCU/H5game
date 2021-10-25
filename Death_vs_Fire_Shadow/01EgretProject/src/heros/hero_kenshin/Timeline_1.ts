/*
*kenshin主骨骼动画对应的帧事件
*/
namespace hero_kenshin{
    export class Timeline_1 {

    public mc :any;                     //zmovie.ZMovieClip

    constructor(_mc:zmovie.ZMovieClip) {
        this.mc = _mc;
        this.mc.addFrameScript(this,[9, this.frame10, 19, this.frame20, 27, this.frame28, 28, this.frame29, 31, this.frame32, 
        37, this.frame38, 67, this.frame68, 79, this.frame80, 90, this.frame91, 97, this.frame98, 
        105, this.frame106, 108, this.frame109, 109, this.frame110, 125, this.frame126, 128, this.frame129, 129, this.frame130, 148, this.frame149, 157, this.frame158, 163, this.frame164, 167, this.frame168, 170, this.frame171, 174, this.frame175, 179, this.frame180, 185, this.frame186, 191, this.frame192, 193, this.frame194, 196, this.frame197, 202, this.frame203, 210, this.frame211, 218, this.frame219, 221, this.frame222, 222, this.frame223, 233, this.frame234, 234, this.frame235, 244, this.frame245, 254, this.frame255, 259, this.frame260, 274, this.frame275, 288, this.frame289, 289, this.frame290, 299, this.frame300, 308, this.frame309, 316, this.frame317, 335, this.frame336, 355, this.frame356, 376, this.frame377, 424, this.frame425, 438, this.frame439, 444, this.frame445, 446, this.frame447, 451, this.frame452, 465, this.frame466, 471, this.frame472, 483, this.frame484, 488, this.frame489, 492, this.frame493, 504, this.frame505, 523, this.frame524, 541, this.frame542, 553, this.frame554, 555, this.frame556, 
        599, this.frame600, 601, this.frame602, 615, this.frame616, 625, this.frame626, 637, this.frame638, 642, this.frame643, 645, this.frame646, 674, this.frame675, 689, this.frame690, 739, this.frame740, 741, this.frame742, 775, this.frame776, 777, this.frame778, 805, this.frame806, 896, this.frame897, 922, this.frame923, 935, this.frame936, 992, this.frame993, 1035, this.frame1036, 1061, this.frame1062, 1072, this.frame1073, 1090, this.frame1091]);
    }
 frame10()
        {
            this.mc.parent._EffectCtrl.shadow(255, 50, -255);
            return;
        }// end function

        frame20()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame28()
        {
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame29()
        {
            this.mc.parent._mcctrl.dash(4.5);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            return;
        }// end function

        frame32()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        frame38()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame68()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame80()
        {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }// end function

        frame91()
        {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }// end function

        frame98()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        

        frame106()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

         frame109()
        {
            this.mc.parent._mcctrl.gotoAndPlay("跳招2");
            return;
        }// end function


        frame110()
        {
            this.mc.parent._mcctrl.movePercent(0, 2);
            this.mc.parent._mcctrl.setTouchFloor("跳招3", true);
            return;
        }// end function

        frame126()
        {
            this.mc.parent._mcctrl.loop("跳招2");
            return;
        }// end function

        frame129()
        {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shine(12605448);
            return;
        }// end function

        frame130()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame149()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame158()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame164()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setBishaUP();
            return;
        }// end function

        frame168()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame171()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame175()
        {
            this.mc.parent._mcctrl.movePercent(0.8, 0);
            this.mc.parent._mcctrl.dampingPercent(0.08, 0);
            return;
        }// end function

        frame180()
        {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setBisha();
            return;
        }// end function

        frame186()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame192()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame194()
        {
            this.mc.parent._mcctrl.movePercent(0.8, 0);
            this.mc.parent._mcctrl.dampingPercent(0.08, 0);
            return;
        }// end function

        frame197()
        {
            this.mc.parent._EffectCtrl.shine(4830463);
            return;
        }// end function

        frame203()
        {
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setJump();
            return;
        }// end function

        frame211()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame219()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame222()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame223()
        {
            this.mc.parent._mcctrl.movePercent(1.4, 0);
            this.mc.parent._mcctrl.setHitTarget("kj10atm", "砍技12");
            this.mc.parent._EffectCtrl.dash();
            this.mc.parent._EffectCtrl.shadow(255, 50, -255);
            return;
        }// end function

        frame234()
        {
            this.mc.parent._mcctrl.movePercent(0.8, 0);
            this.mc.parent._mcctrl.dampingPercent(0.08, 0);
            return;
        }// end function

        frame235()
        {
            this.mc.parent._EffectCtrl.shine(4737096);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame245()
        {
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }// end function

        frame255()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame260()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame275()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame289()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame290()
        {
            this.mc.parent._EffectCtrl.shine(5944782);
            return;
        }// end function

        frame300()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame309()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame317()
        {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.movePercent(0.4, 0);
            this.mc.parent._mcctrl.dampingPercent(0.04, 0);
            return;
        }// end function

        frame336()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame356()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame377()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame425()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame439()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame445()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame447()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._EffectCtrl.dash();
            this.mc.parent._EffectCtrl.shadow(255, 50, -255);
            return;
        }// end function

        frame452()
        {
            this.mc.parent._mcctrl.movePercent(0.5, -2.5);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0.1);
            this.mc.parent._EffectCtrl.shine(1085664);
            return;
        }// end function

        frame466()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame472()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame484()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame489()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame493()
        {
            this.mc.parent._mcctrl.movePercent(1, -1);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0.1);
            return;
        }// end function

        frame505()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame524()
        {
            this.mc.parent._EffectCtrl.bisha(false, "bsface1");
            return;
        }// end function

        frame542()
        {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._mcctrl.setHitTarget("bs10atm", "必杀1");
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._EffectCtrl.dash();
            this.mc.parent._EffectCtrl.shadow(255, 50, -255);
            return;
        }// end function

        frame554()
        {
            this.mc.parent._mcctrl.gotoAndPlay("必杀0");
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        frame556()
        {
            this.mc.parent._FighterCtrler.moveToTarget(100, null, false);
            this.mc.parent._mcctrl.move(5, 0);
            this.mc.parent._mcctrl.damping(0.2, 0);
            this.mc.parent._EffectCtrl.slowDown(1);
            this.mc.parent._EffectCtrl.shine(1085664);
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

         frame600()
        {
            this.mc.parent._mcctrl.gotoAndPlay("必杀0");
            return;
        }// end function


        frame602()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame616()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame626()
        {
            this.mc.parent._EffectCtrl.bisha(false, "bsface1");
            return;
        }// end function

        frame638()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame643()
        {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shine(7360752);
            return;
        }// end function

        frame646()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame675()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame690()
        {
            this.mc.parent._EffectCtrl.bisha(true, "bsface1");
            return;
        }// end function

        frame740()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame742()
        {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shine(3408024);
            return;
        }// end function

        frame776()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame778()
        {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._EffectCtrl.shine(3408024);
            return;
        }// end function

        frame806()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame897()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame923()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame936()
        {
            this.mc.parent._EffectCtrl.shine(5259320);
            return;
        }// end function

        frame993()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1036()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1062()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1073()
        {
            this.mc.parent._EffectCtrl.startWanKai();
            return;
        }// end function

        frame1091()
        {
            this.mc.parent._FighterCtrler.doWanKai();
            return;
        }// end function

    }
}