/*
*主骨骼动画形态2对应的帧事件
*/
namespace hero_obito {
    export class Timeline_14 {

        public mc: any;                     //zmovie.ZMovieClip

        constructor(_mc: zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [
                12, this.frame13, 16, this.frame17, 20, this.frame21, 24, this.frame25, 30, this.frame31, 36, this.frame37, 40, this.frame41, 70, this.frame71, 85, this.frame86, 92, this.frame93, 96, this.frame97, 102, this.frame103, 103, this.frame104, 107, this.frame108, 129, this.frame130, 133, this.frame134, 148, this.frame149, 150, this.frame151, 217, this.frame218, 220, this.frame221, 224, this.frame225, 230, this.frame231, 235, this.frame236, 242, this.frame243, 247, this.frame248, 253, this.frame254, 259, this.frame260, 265, this.frame266, 269, this.frame270, 272, this.frame273, 274, this.frame275, 284, this.frame285, 290, this.frame291, 296, this.frame297, 305, this.frame306, 312, this.frame313, 317, this.frame318, 319, this.frame320, 320, this.frame321, 328, this.frame329, 334, this.frame335, 345, this.frame346, 349, this.frame350, 354, this.frame355, 370, this.frame371, 373, this.frame374, 376, this.frame377, 387, this.frame388, 397, this.frame398, 406, this.frame407, 408, this.frame409, 430, this.frame431, 431, this.frame432, 432, this.frame433, 511, this.frame512, 518, this.frame519, 540, this.frame541, 542, this.frame543, 561, this.frame562, 586, this.frame587, 592, this.frame593, 599, this.frame600, 621, this.frame622, 627, this.frame628, 636, this.frame637, 668, this.frame669, 685, this.frame686, 695, this.frame696, 708, this.frame709, 736, this.frame737, 750, this.frame751, 768, this.frame769, 769, this.frame770, 798, this.frame799, 799, this.frame800, 810, this.frame811, 811, this.frame812, 816, this.frame817, 818, this.frame819, 824, this.frame825, 839, this.frame840, 841, this.frame842, 854, this.frame855, 863, this.frame864, 869, this.frame870, 888, this.frame889, 891, this.frame892, 938, this.frame939, 942, this.frame943, 982, this.frame983, 1019, this.frame1020, 1080, this.frame1081, 1140, this.frame1141, 1154, this.frame1155, 1264, this.frame1265, 1283, this.frame1284,1289, this.frame1290,  1310, this.frame1311, 1326, this.frame1327, 1367, this.frame1368, 1395, this.frame1396
            ]);
            return;
        }
       frame13()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame17()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame21()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame25()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        frame31()
        {
            this.mc.parent._mcctrl.dash(3.2);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(-100, -100, -100);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame37()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        frame41()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame71()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame86()
        {
            this.mc.parent._mcctrl.movePercent(0.8, -0.1);
            this.mc.parent._mcctrl.dampingPercent(0.08, 0.01);
            return;
        }// end function

        frame93()
        {
            this.mc.parent._mcctrl.movePercent(1.3, -0.1);
            this.mc.parent._mcctrl.dampingPercent(0.13, 0.01);
            return;
        }// end function

        frame97()
        {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }// end function

        frame103()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame104()
        {
            this.mc.parent._mcctrl.move(0, -1);
            return;
        }// end function

        frame108()
        {
            this.mc.parent._mcctrl.move(-3, -3);
            this.mc.parent._mcctrl.damping(0.1, 0.08);
            return;
        }// end function

        frame130()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame134()
        {
            this.mc.parent._EffectCtrl.bisha(false, "bsface1");
            return;
        }// end function

        frame149()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame151()
        {
            this.mc.parent._mcctrl.move(-3, -5);
            this.mc.parent._mcctrl.damping(0.03, 0.05);
            return;
        }// end function

        frame218()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame221()
        {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            this.mc.parent._mcctrl.dampingPercent(0.025, 0);
            return;
        }// end function

        frame225()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            return;
        }// end function

        frame231()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame236()
        {
            this.mc.parent._mcctrl.movePercent(0.8, 0);
            this.mc.parent._mcctrl.dampingPercent(0.08, 0);
            return;
        }// end function

        frame243()
        {
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }// end function

        frame248()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame254()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame260()
        {
            this.mc.parent._mcctrl.movePercent(1.3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.13, 0);
            return;
        }// end function

        frame266()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setSkill2();
            return;
        }// end function

        frame270()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame273()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame275()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame285()
        {
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setAttack("砍5");
            return;
        }// end function

        frame291()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame297()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame306()
        {
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        frame313()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame318()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame320()
        {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._EffectCtrl.shadow(-100, -100, -100);
            return;
        }// end function

        frame321()
        {
            this.mc.parent._mcctrl.movePercent(3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.3, 0);
            return;
        }// end function

        frame329()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setAttack("砍技12");
            this.mc.parent._mcctrl.setSkill1("砍技12");
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame335()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame346()
        {
            this.mc.parent._FighterCtrler.setDirectToTarget();
            return;
        }// end function

        frame350()
        {
            this.mc.parent._mcctrl.movePercent(0.6, 0);
            this.mc.parent._mcctrl.dampingPercent(0.06, 0);
            return;
        }// end function

        frame355()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame371()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame374()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame377()
        {
            this.mc.parent._EffectCtrl.slowDown(0.3);
            this.mc.parent._mcctrl.addAttacker("kj2mc", {x:{moveToTarget:true, offset:0}});
            return;
        }// end function

        frame388()
        {
            this.mc.parent._mcctrl.setZhao3("招32");
            this.mc.parent._mcctrl.setBishaSUPER("地爆JB");
            return;
        }// end function

        frame398()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame407()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame409()
        {
            this.mc.parent._EffectCtrl.bisha(false, "带土3");
            return;
        }// end function

        frame431()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame432()
        {
            this.mc.parent._EffectCtrl.shine(14917603);
            return;
        }// end function

        frame433()
        {
            this.mc.parent._mcctrl.moveTarget({followmc:"move_mc", speed:5});
            return;
        }// end function

        frame512()
        {
            this.mc.parent._mcctrl.moveTarget(null);
            return;
        }// end function

        frame519()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame541()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame543()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame562()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame587()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3("招32");
            this.mc.parent._mcctrl.setZhao1("招32");
            this.mc.parent._mcctrl.setJump();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        frame593()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame600()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame622()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame628()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame637()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame669()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame686()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame696()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame709()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame737()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame751()
        {
            this.mc.parent._EffectCtrl.bisha(false, "带土3");
            return;
        }// end function

        frame769()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame770()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.setHitTarget("bs0ckm", "必杀2");
            this.mc.parent._EffectCtrl.shadow(-100, -100, -100);
            return;
        }// end function

        frame799()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame800()
        {
            this.mc.parent._mcctrl.move(8, 0);
            this.mc.parent._mcctrl.damping(0.8, 0);
            this.mc.parent._EffectCtrl.shadow(-100, -100, -100);
            return;
        }// end function

        frame811()
        {
            this.mc.parent._mcctrl.justHitToPlay("bs1", "必杀3", false, false);
            return;
        }// end function

        frame812()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame817()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame819()
        {
            this.mc.parent._FighterCtrler.moveToTarget(50, 0, true);
            this.mc.parent._EffectCtrl.shadow(-100, -100, -100);
            return;
        }// end function

        frame825()
        {
            this.mc.parent._mcctrl.move(5, 0);
            this.mc.parent._mcctrl.damping(0.5, 0);
            return;
        }// end function

        frame840()
        {
            this.mc.parent._FighterCtrler.moveToTarget(50, 0, true);
            return;
        }// end function

        frame842()
        {
            this.mc.parent._mcctrl.move(5, 0);
            this.mc.parent._mcctrl.damping(0.5, 0);
            return;
        }// end function

        frame855()
        {
            this.mc.parent._FighterCtrler.moveToTarget(50, 0, true);
            this.mc.parent._mcctrl.move(5, -10);
            this.mc.parent._mcctrl.damping(0.5, 0.1);
            return;
        }// end function

        frame864()
        {
            this.mc.parent._mcctrl.move(-5, -5);
            this.mc.parent._mcctrl.damping(0.1, 0.1);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame870()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame889()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame892()
        {
            this.mc.parent._EffectCtrl.bisha(true, "带土3");
            return;
        }// end function

        frame939()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame943()
        {
            this.mc.parent._EffectCtrl.bisha(false, "bsface1");
            return;
        }// end function

        frame983()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame1020()
        {
            this.mc.parent._EffectCtrl.bisha(false, "bsface1");
            return;
        }// end function

        frame1081()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame1141()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame1155()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1265()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1284()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1290(){
            this.mc.parent._mcctrl.ClearState();
        }

        frame1311()
        {
            this.mc.parent._EffectCtrl.endWanKai();
            return;
        }// end function

        frame1327()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1368()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1396()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

    }
}
