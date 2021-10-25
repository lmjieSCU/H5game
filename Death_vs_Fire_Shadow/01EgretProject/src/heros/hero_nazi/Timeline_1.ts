/*
*nazi主骨骼动画对应的帧事件
*/
namespace hero_nazi{
    export class Timeline_1 {

    public mc :any;                     //zmovie.ZMovieClip

    constructor(_mc:zmovie.ZMovieClip) {
        this.mc = _mc;
        this.mc.addFrameScript(this,[9, this.frame10, 18, this.frame19, 27, this.frame28, 34, this.frame35, 43, this.frame44, 48, this.frame49, 78, this.frame79, 150, this.frame151, 155, this.frame156, 175, this.frame176, 248, this.frame249, 289, this.frame290, 317, this.frame318, 327, this.frame328, 333, this.frame334, 339, this.frame340, 360, this.frame361, 368, this.frame369, 375, this.frame376, 376, this.frame377, 394, this.frame395, 403, this.frame404, 407, this.frame408, 409, this.frame410, 418, this.frame419, 432, this.frame433, 436, this.frame437, 438, this.frame439, 445, this.frame446, 455, this.frame456, 463, this.frame464, 474, this.frame475, 484, this.frame485, 488, this.frame489, 491, this.frame492, 504, this.frame505, 520, this.frame521, 536, this.frame537, 537, this.frame538, 545, this.frame546, 558, this.frame559, 573, this.frame574, 572, this.frame573,  574, this.frame575, 577, this.frame578, 581, this.frame582, 596, this.frame597, 603, this.frame604, 616, this.frame617, 625, this.frame626, 636, this.frame637, 649, this.frame650, 660, this.frame661, 671, this.frame672, 679, this.frame680, 706, this.frame707, 764, this.frame765, 769, this.frame770, 773, this.frame774, 774, this.frame775, 795, this.frame796, 824, this.frame825, 853, this.frame854, 906, this.frame907, 916, this.frame917, 946, this.frame947, 948, this.frame949, 972, this.frame973, 988, this.frame989, 1007, this.frame1008, 1068, this.frame1069, 1073, this.frame1074, 1112, this.frame1113, 1118, this.frame1119, 1134, this.frame1135, 1158, this.frame1159, 1170, this.frame1171]);
    }

       frame10()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame19()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame28()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        frame35()
        {
            this.mc.parent._mcctrl.dash(2.5);
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

        frame151()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }// end function

        frame156()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame176()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame249()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame290()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame318()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame328()
        {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }// end function

        frame334()
        {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }// end function

        frame340()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame361()
        {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.isApplyG(true);
            this.mc.parent._mcctrl.setTouchFloor("跳招3", true);
            return;
        }// end function

        frame369()
        {
            this.mc.parent._mcctrl.movePercent(0, 1.5);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }// end function

        frame376()
        {
            this.mc.parent._mcctrl.loop("跳招2");
            return;
        }// end function

        frame377()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame395()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame404()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }// end function

        frame408()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame410()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao3();
            return;
        }// end function

        frame419()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame433()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }// end function

        frame437()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame439()
        {
            this.mc.parent._mcctrl.setSkill1("砍技11");
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }// end function

        frame446()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame456()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }// end function

        frame464()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill2("砍技2");
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame475()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame485()
        {
            this.mc.parent._mcctrl.movePercent(1.2, 0);
            return;
        }// end function

        frame489()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame492()
        {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setSkill2("砍技2");
            return;
        }// end function

        frame505()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame521()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame537()
        {
            this.mc.parent._mcctrl.movePercent(3.3, 0);
            return;
        }// end function

        frame538()
        {
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }// end function

        frame546()
        {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame559()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame574()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }// end function


           frame573()
        {
            this.mc.parent._mcctrl.gotoAndPlay("砍技11");
            return;
        }// end function
        frame575()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame578()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame582()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill2("砍技12");
            this.mc.parent._mcctrl.setAttack("砍技12");
            this.mc.parent._mcctrl.setZhao3("招31");
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame597()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame604()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame617()
        {
            this.mc.parent._mcctrl.setBisha();
            return;
        }// end function

        frame626()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame637()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame650()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setJump();
            return;
        }// end function

        frame661()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame672()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame680()
        {
            this.mc.parent._mcctrl.fire("zh1atm", {x:{start:15, hit:3}, y:0, hold:1, hits:1});
            return;
        }// end function

        frame707()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame765()
        {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.move(8, -10);
            this.mc.parent._mcctrl.damping(0, 1);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }// end function

        frame770()
        {
            this.mc.parent._mcctrl.setTouchFloor("招32", true);
            return;
        }// end function

        frame774()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame775()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame796()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame825()
        {
            this.mc.parent._EffectCtrl.bisha(false, "纳兹1");
            return;
        }// end function

        frame854()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame907()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame917()
        {
            this.mc.parent._EffectCtrl.bisha(false, "纳兹1");
            return;
        }// end function

        frame947()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame949()
        {
            this.mc.parent._mcctrl.move(0, -10);
            return;
        }// end function

        frame973()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame989()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1008()
        {
            this.mc.parent._EffectCtrl.bisha(true, "纳兹2");
            return;
        }// end function

        frame1069()
        {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }// end function

        frame1074()
        {
            this.mc.parent._mcctrl.movePercent(0.8, 0);
            return;
        }// end function

        frame1113()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }// end function

        frame1119()
        {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame1135()
        {
            this.mc.parent._mcctrl.move(0, -10);
            return;
        }// end function

        frame1159()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame1171()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

    }
}