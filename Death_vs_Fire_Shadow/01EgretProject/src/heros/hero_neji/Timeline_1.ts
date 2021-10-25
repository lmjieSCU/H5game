namespace hero_neji{
    export class Timeline_1 {
        public mc :any;                     //zmovie.ZMovieClip
        constructor(_mc:zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this,[
              11, this.frame12, 17, this.frame18, 22, this.frame23, 28, this.frame29, 32, this.frame33, 39, this.frame40, 69, this.frame70, 79, this.frame80, 84, this.frame85, 88, this.frame89, 94, this.frame95, 97, this.frame98, 105, this.frame106, 122, this.frame123, 127, this.frame128, 132, this.frame133, 136, this.frame137, 142, this.frame143, 148, this.frame149, 153, this.frame154, 160, this.frame161, 164, this.frame165, 172, this.frame173, 180, this.frame181, 184, this.frame185, 191, this.frame192, 196, this.frame197, 203, this.frame204, 209, this.frame210, 214, this.frame215, 217, this.frame218, 223, this.frame224, 225, this.frame226, 231, this.frame232, 237, this.frame238, 263, this.frame264, 270, this.frame271, 276, this.frame277, 282, this.frame283, 287, this.frame288, 298, this.frame299, 309, this.frame310, 310, this.frame311, 316, this.frame317, 325, this.frame326, 342, this.frame343, 345, this.frame346, 352, this.frame353, 357, this.frame358, 366, this.frame367, 381, this.frame382, 388, this.frame389, 393, this.frame394, 405, this.frame406, 414, this.frame415, 416, this.frame417, 424, this.frame425, 441, this.frame442, 451, this.frame452, 465, this.frame466, 472, this.frame473, 519, this.frame520, 528, this.frame529, 541, this.frame542, 543, this.frame544, 565, this.frame566, 573, this.frame574, 608, this.frame609, 621, this.frame622, 624, this.frame625, 644, this.frame645, 655, this.frame656, 672, this.frame673, 709, this.frame710, 711, this.frame712, 722, this.frame723, 733, this.frame734, 739, this.frame740, 752, this.frame753, 758, this.frame759, 780, this.frame781, 785, this.frame786, 806, this.frame807, 817, this.frame818, 818, this.frame819, 827, this.frame828, 830, this.frame831, 848, this.frame849, 909, this.frame910, 913, this.frame914, 918, this.frame919, 923, this.frame924, 933, this.frame934, 1015, this.frame1016, 1040, this.frame1041, 1138, this.frame1139, 1171, this.frame1172, 1207, this.frame1208
                ]);
          
            return;
        }// end 
        frame12()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame18()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame23()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        frame29()
        {
            this.mc.parent._mcctrl.dash(5);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame33()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        frame40()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame70()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame80()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame85()
        {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }// end function

        frame89()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame95()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame98()
        {
            this.mc.parent._mcctrl.movePercent(0.5, -1);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0.1);
            return;
        }// end function

        frame106()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame123()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        frame128()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setZhao2();
            return;
        }// end function

        frame133()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame137()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame143()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame149()
        {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao2();
            return;
        }// end function

        frame154()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame161()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame165()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame173()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setJump();
            return;
        }// end function

        frame181()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame185()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame192()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame197()
        {
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setBishaUP();
            return;
        }// end function

        frame204()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame210()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame215()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame218()
        {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.15, 0);
            return;
        }// end function

        frame224()
        {
            this.mc.parent._EffectCtrl.shine(16776960);
            return;
        }// end function

        frame226()
        {
            this.mc.parent._mcctrl.setAttack("砍技11");
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao2();
            return;
        }// end function

        frame232()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame238()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame264()
        {
            this.mc.parent._mcctrl.setAttack("砍技12");
            return;
        }// end function

        frame271()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame277()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame283()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.4, 0);
            return;
        }// end function

        frame288()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame299()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame310()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame311()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        frame317()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame326()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame343()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame346()
        {
            this.mc.parent._mcctrl.fire("zh1atm", {x:{start:30, add:-0.5, min:15}, y:{start:0, add:0.1}, hold:2, hits:1});
            return;
        }// end function

        frame353()
        {
            this.mc.parent._mcctrl.setZhao2();
            return;
        }// end function

        frame358()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame367()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame382()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame389()
        {
            this.mc.parent._EffectCtrl.shine(16777215);
            return;
        }// end function

        frame394()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame406()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame415()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame417()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame425()
        {
            this.mc.parent._FighterCtrler.moveToTarget(30, 0, true);
            this.mc.parent._EffectCtrl.slowDown(0.3);
            return;
        }// end function

        frame442()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame452()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame466()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame473()
        {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        frame520()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame529()
        {
            this.mc.parent._EffectCtrl.bisha(false, "宁次1");
            return;
        }// end function

        frame542()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame544()
        {
            this.mc.parent._EffectCtrl.shine(1080212);
            return;
        }// end function

        frame566()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame574()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame609()
        {
            this.mc.parent._EffectCtrl.bisha(false, "宁次1");
            return;
        }// end function

        frame622()
        {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame625()
        {
            this.mc.parent._EffectCtrl.shine(4218928);
            return;
        }// end function

        frame645()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame656()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame673()
        {
            this.mc.parent._EffectCtrl.bisha(true, "宁次2");
            return;
        }// end function

        frame710()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame712()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            this.mc.parent._EffectCtrl.shadow(0, 150, 150);
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }// end function

        frame723()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame734()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }// end function

        frame740()
        {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }// end function

        frame753()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }// end function

        frame759()
        {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }// end function

        frame781()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }// end function

        frame786()
        {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }// end function

        frame807()
        {
            this.mc.parent._mcctrl.justHitToPlay("cbs", "超必杀1", false, false);
            this.mc.parent._mcctrl.dampingPercent(0.025, 0);
            return;
        }// end function

        frame818()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame819()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }// end function

        frame828()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }// end function

        frame831()
        {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }// end function

        frame849()
        {
            this.mc.parent._mcctrl.move(1, 0);
            return;
        }// end function

        frame910()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }// end function

        frame914()
        {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }// end function

        frame919()
        {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame924()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame934()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1016()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1041()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1139()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1172()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1208()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

    }
}
