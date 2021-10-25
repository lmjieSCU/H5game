/*
*xubai主骨骼动画对应的帧事件
*/
namespace hero_xubai{
    export class Timeline_1 {

    public mc :any;                     //zmovie.ZMovieClip

    constructor(_mc:zmovie.ZMovieClip) {
        this.mc = _mc;
        this.mc.addFrameScript(this,[13, this.frame14, 21, this.frame22, 23, this.frame24, 34, this.frame35, 43, this.frame44, 48, this.frame49, 78, this.frame79, 84, this.frame85, 91, this.frame92, 97, this.frame98, 100, this.frame101, 104, this.frame105, 106, this.frame107, 114, this.frame115, 116, this.frame117, 140, this.frame141, 144, this.frame145, 148, this.frame149, 149, this.frame150, 157, this.frame158, 160, this.frame161, 162, this.frame163, 168, this.frame169, 169, this.frame170, 174, this.frame175, 180, this.frame181, 185, this.frame186, 188, this.frame189, 195, this.frame196, 198, this.frame199, 199, this.frame200, 207, this.frame208, 213, this.frame214, 219, this.frame220, 223, this.frame224, 225, this.frame226, 249, this.frame250, 265, this.frame266, 270, this.frame271, 287, this.frame288, 295, this.frame296, 298, this.frame299, 329, this.frame330, 337, this.frame338, 341, this.frame342, 352, this.frame353, 364, this.frame365, 367, this.frame368, 371, this.frame372, 378, this.frame379, 380, this.frame381, 390, this.frame391, 397, this.frame398, 413, this.frame414, 417, this.frame418, 418, this.frame419, 424, this.frame425, 426, this.frame427, 430, this.frame431, 434, this.frame435, 448, this.frame449, 453, this.frame454, 454, this.frame455, 476, this.frame477, 485, this.frame486, 492, this.frame493, 511, this.frame512, 522, this.frame523, 538, this.frame539, 545, this.frame546, 555, this.frame556, 579, this.frame580, 584, this.frame585, 608, this.frame609, 632, this.frame633, 633, this.frame634, 670, this.frame671, 675, this.frame676, 711, this.frame712, 721, this.frame722, 753, this.frame754, 754, this.frame755, 812, this.frame813, 824, this.frame825, 830, this.frame831, 840, this.frame841, 871, this.frame872, 914, this.frame915, 961, this.frame962, 967, this.frame968, 969, this.frame970, 970, this.frame971, 985, this.frame986, 987, this.frame988, 988, this.frame989, 1003, this.frame1004, 1005, this.frame1006, 1006, this.frame1007, 1021, this.frame1022, 1023, this.frame1024, 1024, this.frame1025, 1039, this.frame1040, 1067, this.frame1068, 1069, this.frame1070, 1082, this.frame1083, 1103, this.frame1104, 1176, this.frame1177, 1181, this.frame1182, 1201, this.frame1202, 1258, this.frame1259, 1350, this.frame1351, 1374, this.frame1375, 1385, this.frame1386, 1387, this.frame1388, 1391, this.frame1392, 1395, this.frame1396, 1399, this.frame1400, 1402, this.frame1403, 1406, this.frame1407, 1413, this.frame1414, 1422, this.frame1423, 1425, this.frame1426, 1433, this.frame1434, 1436, this.frame1437, 1442, this.frame1443, 1455, this.frame1456, 1465, this.frame1466, 1508, this.frame1509, 1515, this.frame1516, 1527, this.frame1528, 1545, this.frame1546, 1556, this.frame1557, 1562, this.frame1563]);
    }

       
        frame14()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame22()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame24()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        frame35()
        {
            this.mc.parent._mcctrl.dash(3.8);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame44()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        frame49()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame79()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame85()
        {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }// end function

        frame92()
        {
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            return;
        }// end function

        frame98()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame101()
        {
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }// end function

        frame105()
        {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.setTouchFloor("跳招3", true);
            this.mc.parent._mcctrl.isApplyG(true);
            this.mc.parent._mcctrl.movePercent(-0.5, -0.5);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }// end function

        frame107()
        {
            this.mc.parent._mcctrl.movePercent(2, 1.5);
            return;
        }// end function

        frame115()
        {
            this.mc.parent._mcctrl.loop("跳招2");
            return;
        }// end function

        frame117()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame141()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame145()
        {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }// end function

        frame149()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame150()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaSUPER();
            return;
        }// end function

        frame158()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame161()
        {
            return;
        }// end function

        frame163()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }// end function

        frame169()
        {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill2();
            return;
        }// end function

        frame170()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame175()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame181()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame186()
        {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setBisha();
            return;
        }// end function

        frame189()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame196()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame199()
        {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame200()
        {
            this.mc.parent._mcctrl.movePercent(1.4, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame208()
        {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setAttack("砍5");
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        frame214()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame220()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame224()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame226()
        {
            this.mc.parent._EffectCtrl.shine(16711680);
            return;
        }// end function

        frame250()
        {
            this.mc.parent._EffectCtrl.shine(16711680);
            return;
        }// end function

        frame266()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setAttack("砍技22");
            return;
        }// end function

        frame271()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame288()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame296()
        {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame299()
        {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }// end function

        frame330()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame338()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setZhao3();
            return;
        }// end function

        frame342()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame353()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame365()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame368()
        {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame372()
        {
            this.mc.parent._FighterCtrler.moveToTarget(-30, 0, true);
            return;
        }// end function

        frame379()
        {
            this.mc.parent._mcctrl.movePercent(2.2, -1.4);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0.05);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame381()
        {
            this.mc.parent._EffectCtrl.shine(38656);
            return;
        }// end function

        frame391()
        {
            this.mc.parent._EffectCtrl.shine(38656);
            return;
        }// end function

        frame398()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame414()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame418()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame419()
        {
            this.mc.parent._mcctrl.movePercent(1.2, 0);
            return;
        }// end function

        frame425()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame427()
        {
            this.mc.parent._EffectCtrl.shine(8444152);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shake(0, 3);
            return;
        }// end function

        frame431()
        {
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        frame435()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame449()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame454()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame455()
        {
            this.mc.parent._mcctrl.movePercent(2.2, -1.4);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0.05);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame477()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame486()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame493()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame512()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame523()
        {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        frame539()
        {
            this.mc.parent._mcctrl.move(60, 0);
            this.mc.parent._mcctrl.damping(3, 0);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }// end function

        frame546()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame556()
        {
            this.mc.parent._EffectCtrl.bisha(false, "虚白2");
            return;
        }// end function

        frame580()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame585()
        {
            this.mc.parent._mcctrl.fire("bs1atm", {x:{start:15, add:1, max:30}, y:0, hold:120, hits:2});
            this.mc.parent._EffectCtrl.shine(39160);
            return;
        }// end function

        frame609()
        {
            this.mc.parent._EffectCtrl.bisha(true, "虚白2");
            return;
        }// end function

        frame633()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame634()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame671()
        {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shake(0, 8);
            return;
        }// end function

        frame676()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame712()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame722()
        {
            this.mc.parent._EffectCtrl.bisha(false, "虚白1");
            return;
        }// end function

        frame754()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame755()
        {
            this.mc.parent._EffectCtrl.shine(16776960);
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }// end function

        frame813()
        {
            this.mc.parent._mcctrl.damping(0.5, 0);
            return;
        }// end function

        frame825()
        {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shake(0, 7);
            return;
        }// end function

        frame831()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame841()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame872()
        {
            this.mc.parent._EffectCtrl.bisha(true, "虚白4");
            return;
        }// end function

        frame915()
        {
            this.mc.parent._mcctrl.movePercent(0.2, 0);
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame962()
        {
            this.mc.parent._FighterCtrler.moveToTarget(0, null, false);
            return;
        }// end function

        frame968()
        {
            this.mc.parent._FighterCtrler.moveToTarget(100, 0, true);
            this.mc.parent._mcctrl.isApplyG(false);
            this.mc.parent._mcctrl.move(5, 0);
            return;
        }// end function

        frame970()
        {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }// end function

        frame971()
        {
            this.mc.parent._mcctrl.move(55, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            return;
        }// end function

        frame986()
        {
            this.mc.parent._FighterCtrler.moveToTarget(100, 0, true);
            this.mc.parent._mcctrl.isApplyG(false);
            this.mc.parent._mcctrl.move(5, 0);
            return;
        }// end function

        frame988()
        {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }// end function

        frame989()
        {
            this.mc.parent._mcctrl.move(55, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            return;
        }// end function

        frame1004()
        {
            this.mc.parent._FighterCtrler.moveToTarget(100, 0, true);
            this.mc.parent._mcctrl.isApplyG(false);
            this.mc.parent._mcctrl.move(5, 0);
            return;
        }// end function

        frame1006()
        {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }// end function

        frame1007()
        {
            this.mc.parent._mcctrl.move(55, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            return;
        }// end function

        frame1022()
        {
            this.mc.parent._FighterCtrler.moveToTarget(100, 0, true);
            this.mc.parent._mcctrl.isApplyG(false);
            this.mc.parent._mcctrl.move(5, 0);
            return;
        }// end function

        frame1024()
        {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }// end function

        frame1025()
        {
            this.mc.parent._mcctrl.move(55, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            return;
        }// end function

        frame1040()
        {
            this.mc.parent._mcctrl.isApplyG(false);
            this.mc.parent._FighterCtrler.moveToTarget(10, -50, true);
            this.mc.parent._mcctrl.move(-3, -3);
            this.mc.parent._mcctrl.damping(0.05, 0.05);
            this.mc.parent._EffectCtrl.slowDown(1);
            return;
        }// end function

        frame1068()
        {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shake(0, 5);
            return;
        }// end function

        frame1070()
        {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shine(303095);
            return;
        }// end function

        frame1083()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame1104()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1177()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }// end function

        frame1182()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1202()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1259()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1351()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1375()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1386()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame1388()
        {
            this.mc.parent._EffectCtrl.shine(16257056);
            return;
        }// end function

        frame1392()
        {
            this.mc.parent._EffectCtrl.shine(16257056);
            return;
        }// end function

        frame1396()
        {
            this.mc.parent._EffectCtrl.shine(16257056);
            return;
        }// end function

        frame1400()
        {
            this.mc.parent._EffectCtrl.shine(16257056);
            return;
        }// end function

        frame1403()
        {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setAttack("砍6");
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._EffectCtrl.shine(16257056);
            return;
        }// end function

        frame1407()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame1414()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1423()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame1426()
        {
            this.mc.parent._mcctrl.movePercent(0.5, -2);
            this.mc.parent._mcctrl.dampingPercent(0.02, 0.1);
            return;
        }// end function

        frame1434()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame1437()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame1443()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1456()
        {
            this.mc.parent._EffectCtrl.bisha(false, "虚白3");
            return;
        }// end function

        frame1466()
        {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._mcctrl.move(0, -1);
            this.mc.parent._EffectCtrl.shine(16711680);
            return;
        }// end function

        frame1509()
        {
            this.mc.parent._mcctrl.move(60, 0);
            this.mc.parent._mcctrl.damping(3, 0);
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }// end function

        frame1516()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame1528()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1546()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame1557()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame1563()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

    }
}