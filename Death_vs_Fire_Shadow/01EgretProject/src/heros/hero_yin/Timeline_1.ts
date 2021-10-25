namespace hero_yin{
    export class Timeline_1 {
        public mc :any;                     //zmovie.ZMovieClip
        constructor(_mc:zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this,[
                13, this.frame14, 18, this.frame19, 22, this.frame23, 30, this.frame31, 41, this.frame42, 44, this.frame45, 74, this.frame75, 84, this.frame85, 92, this.frame93, 95, this.frame96, 104, this.frame105, 105, this.frame106, 108, this.frame109, 115, this.frame116, 127, this.frame128, 152, this.frame153, 155, this.frame156, 161, this.frame162, 164, this.frame165, 170, this.frame171, 181, this.frame182, 187, this.frame188, 192, this.frame193, 198, this.frame199, 207, this.frame208, 213, this.frame214, 219, this.frame220, 226, this.frame227, 234, this.frame235, 244, this.frame245, 251, this.frame252, 257, this.frame258, 269, this.frame270, 275, this.frame276, 288, this.frame289, 300, this.frame301, 304, this.frame305, 332, this.frame333, 338, this.frame339, 346, this.frame347, 353, this.frame354, 358, this.frame359, 360, this.frame361, 362, this.frame363, 364, this.frame365, 374, this.frame375, 380, this.frame381, 394, this.frame395, 402, this.frame403, 420, this.frame421, 424, this.frame425, 430, this.frame431, 449, this.frame450, 450, this.frame451, 463, this.frame464, 464, this.frame465, 467, this.frame468, 481, this.frame482, 500, this.frame501, 515, this.frame516, 520, this.frame521, 526, this.frame527, 535, this.frame536, 545, this.frame546, 553, this.frame554, 585, this.frame586, 599, this.frame600, 622, this.frame623, 625, this.frame626, 633, this.frame634, 661, this.frame662, 672, this.frame673, 694, this.frame695, 741, this.frame742, 762, this.frame763, 788, this.frame789, 820, this.frame821, 822, this.frame823, 884, this.frame885, 889, this.frame890, 915, this.frame916, 987, this.frame988, 1011, this.frame1012, 1072, this.frame1073, 1127, this.frame1128, 1155, this.frame1156
               
            ]);
            return;
        }// end 

         frame14()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame19()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame23()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        frame31()
        {
            this.mc.parent._mcctrl.dash(2);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(150, 150, 150);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame42()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        frame45()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame75()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame85()
        {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }// end function

        frame93()
        {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }// end function

        frame96()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame105()
        {
            this.mc.parent._mcctrl.move(0, -2);
            return;
        }// end function

        frame106()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame109()
        {
            this.mc.parent._mcctrl.move(-10, -10);
            this.mc.parent._mcctrl.damping(0.5, 0.5);
            return;
        }// end function

        frame116()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame128()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame153()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame156()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            return;
        }// end function

        frame162()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame165()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame171()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame182()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame188()
        {
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }// end function

        frame193()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame199()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame208()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame214()
        {
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setSkill2();
            return;
        }// end function

        frame220()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame227()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame235()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame245()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍5");
            this.mc.parent._mcctrl.setJump();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        frame252()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame258()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame270()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        frame276()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame289()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame301()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame305()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame333()
        {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao2();
            return;
        }// end function

        frame339()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame347()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame354()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame359()
        {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame361()
        {
            this.mc.parent._FighterCtrler.moveToTarget(50, 0, true);
            return;
        }// end function

        frame363()
        {
            this.mc.parent._EffectCtrl.shadow(150, 150, 150);
            return;
        }// end function

        frame365()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame375()
        {
            this.mc.parent._mcctrl.movePercent(-1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame381()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame395()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame403()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame421()
        {
            this.mc.parent._mcctrl.setAttack("砍1");
            return;
        }// end function

        frame425()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame431()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame450()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame451()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._EffectCtrl.shadow(150, 150, 150);
            return;
        }// end function

        frame464()
        {
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame465()
        {
            this.mc.parent._EffectCtrl.endShadow();
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame468()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame482()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame501()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame516()
        {
            this.mc.parent._mcctrl.setAttack("砍1");
            return;
        }// end function

        frame521()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame527()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame536()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame546()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame554()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame586()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame600()
        {
            this.mc.parent._EffectCtrl.bisha(false, "银1");
            return;
        }// end function

        frame623()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame626()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame634()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame662()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame673()
        {
            this.mc.parent._EffectCtrl.bisha(false, "银1");
            return;
        }// end function

        frame695()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame742()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame763()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame789()
        {
            this.mc.parent._EffectCtrl.bisha(true, "银2");
            return;
        }// end function

        frame821()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame823()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame885()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame890()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame916()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame988()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1012()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1073()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1128()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1156()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

    }
}
