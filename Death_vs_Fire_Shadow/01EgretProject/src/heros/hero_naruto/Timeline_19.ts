/*
*naruto主骨骼形态2动画对应的帧事件
*/
namespace hero_naruto{
    export class Timeline_19 {

        public mc :any;                     //zmovie.ZMovieClip

        constructor(_mc:zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this,[17, this.frame18, 21, this.frame22, 25, this.frame26, 37, this.frame38, 45, this.frame46, 49, this.frame50, 80, this.frame81, 89, this.frame90, 96, this.frame97, 100, this.frame101, 105, this.frame106, 110, this.frame111, 111, this.frame112, 133, this.frame134, 137, this.frame138, 145, this.frame146, 153, this.frame154, 158, this.frame159, 166, this.frame167, 168, this.frame169, 174, this.frame175, 180, this.frame181, 190, this.frame191, 197, this.frame198, 201, this.frame202, 209, this.frame210, 219, this.frame220, 224, this.frame225, 228, this.frame229, 234, this.frame235, 241, this.frame242, 254, this.frame255, 262, this.frame263, 269, this.frame270, 271, this.frame272, 285, this.frame286, 288, this.frame289, 295, this.frame296, 308, this.frame309, 338, this.frame339, 341, this.frame342, 350, this.frame351, 357, this.frame358, 361, this.frame362, 366, this.frame367, 372, this.frame373, 379, this.frame380, 385, this.frame386, 403, this.frame404, 411, this.frame412, 431, this.frame432, 438, this.frame439, 452, this.frame453, 463, this.frame464, 481, this.frame482, 495, this.frame496, 522, this.frame523, 527, this.frame528, 557, this.frame558, 563, this.frame564, 568, this.frame569, 582, this.frame583, 589, this.frame590, 591, this.frame592, 592, this.frame593, 608, this.frame609, 612, this.frame613, 617, this.frame618, 618, this.frame619, 629, this.frame630, 638, this.frame639, 657, this.frame658, 661, this.frame662, 705, this.frame706, 709, this.frame710, 710, this.frame711, 746, this.frame747, 760, this.frame761, 846, this.frame847, 850, this.frame851, 888, this.frame889, 901, this.frame902, 955, this.frame956, 1000, this.frame1001, 1006, this.frame1007, 1016, this.frame1017, 1057, this.frame1058, 1085, this.frame1086, 1095, this.frame1096, 1117, this.frame1118, 1124, this.frame1125]);
            return;
        }

        public frame18()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        public frame22()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        public frame26()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        public frame38()
        {
            this.mc.parent._mcctrl.dash(2.5);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame46()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        public frame50()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame81()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame90()
        {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }// end function

        public frame97()
        {
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            return;
        }// end function

        public frame101()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame106()
        {
            this.mc.parent._mcctrl.move(-2, -2);
            return;
        }// end function

        public frame111()
        {
            this.mc.parent._mcctrl.movePercent(2, 1);
            this.mc.parent._mcctrl.setTouchFloor("落地", true);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }// end function

        public frame112()
        {
            this.mc.parent._mcctrl.loop("跳招loop");
            return;
        }// end function

        public frame134()
        {
            this.mc.parent._mcctrl.movePercent(0.3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.03, 0);
            return;
        }// end function

        public frame138()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setBisha();
            return;
        }// end function

        public frame146()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame154()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        public frame159()
        {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill2();
            return;
        }// end function

        public frame167()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame169()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame175()
        {
            this.mc.parent._mcctrl.movePercent(1.3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        public frame181()
        {
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao2();
            return;
        }// end function

        public frame191()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame198()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame202()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        public frame210()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        public frame220()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame225()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame229()
        {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            return;
        }// end function

        public frame235()
        {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        public frame242()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame255()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame263()
        {
            this.mc.parent._EffectCtrl.shine(16257056);
            return;
        }// end function

        public frame270()
        {
            this.mc.parent._mcctrl.justHitToPlay("kj2", "砍技2HIT", false, false);
            return;
        }// end function

        public frame272()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame286()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame289()
        {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.15, 0);
            return;
        }// end function

        public frame296()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame309()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame339()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        public frame342()
        {
            this.mc.parent._EffectCtrl.shine(16257056);
            return;
        }// end function

        public frame351()
        {
            this.mc.parent._mcctrl.setAttack("砍1");
            return;
        }// end function

        public frame358()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame362()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame367()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame373()
        {
            this.mc.parent._EffectCtrl.shine(16257056);
            return;
        }// end function

        public frame380()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame386()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame404()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        public frame412()
        {
            this.mc.parent._EffectCtrl.shine(15652400);
            return;
        }// end function

        public frame432()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame439()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame453()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame464()
        {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        public frame482()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame496()
        {
            this.mc.parent._EffectCtrl.bisha(false, "鸣人3");
            return;
        }// end function

        public frame523()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame528()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }// end function

        public frame558()
        {
            this.mc.parent._EffectCtrl.shine(39160);
            return;
        }// end function

        public frame564()
        {
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame569()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame583()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame590(){
            this.mc.parent._mcctrl.gotoAndPlay("空中必杀");
        }

        public frame592()
        {
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }// end function

        public frame593()
        {
            this.mc.parent._EffectCtrl.bisha(false, "鸣人5");
            return;
        }// end function

        public frame609()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame613()
        {
            this.mc.parent._EffectCtrl.shake(0, 5);
            return;
        }// end function

        public frame618()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame619()
        {
            this.mc.parent._EffectCtrl.shine(6291480);
            return;
        }// end function

        public frame630()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame639()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame658()
        {
            this.mc.parent._EffectCtrl.bisha(true, "鸣人4");
            return;
        }// end function

        public frame662()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame706()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame710()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame711()
        {
            this.mc.parent._EffectCtrl.shine(6621708);
            return;
        }// end function

        public frame747()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame761()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame847()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }// end function

        public frame851()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame889()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame902()
        {
            this.mc.parent._mcctrl.ClearState();
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }// end function

        public frame956()
        {
            this.mc.parent._EffectCtrl.endShake();
            return;
        }// end function

        public frame1001()
        {
            this.mc.parent._EffectCtrl.endShake();
            return;
        }// end function

        public frame1007()
        {
            this.mc.parent._EffectCtrl.endWanKai();
            return;
        }// end function

        public frame1017()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1058()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        public frame1086()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        public frame1096()
        {
            this.mc.parent._EffectCtrl.startWanKai("鸣人4");
            return;
        }// end function

        public frame1118()
        {
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }// end function

        public frame1125()
        {
            this.mc.parent._FighterCtrler.doWanKai();
            return;
        }// end function

    }

}



