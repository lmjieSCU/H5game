namespace hero_temari{
    export class Timeline_1 {
        public mc :any;                     //zmovie.ZMovieClip
        public zz: any;
        public zz1:any;
        public zz2:any;
        public justHit:any;
        public bsmc1:any;
        public bsmc:any;
        constructor(_mc:zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this,[
              13, this.frame14, 19, this.frame20, 22, this.frame23, 26, this.frame27, 31, this.frame32, 37, this.frame38, 42, this.frame43, 70, this.frame71, 84, this.frame85, 90, this.frame91, 96, this.frame97, 113, this.frame114, 114, this.frame115, 116, this.frame117, 125, this.frame126, 177, this.frame178, 183, this.frame184, 190, this.frame191, 198, this.frame199, 206, this.frame207, 213, this.frame214, 220, this.frame221, 228, this.frame229, 241, this.frame242, 251, this.frame252, 258, this.frame259, 263, this.frame264, 279, this.frame280, 284, this.frame285, 287, this.frame288, 299, this.frame300, 309, this.frame310, 328, this.frame329, 356, this.frame357, 362, this.frame363, 389, this.frame390, 390, this.frame391, 393, this.frame394, 416, this.frame417, 428, this.frame429, 437, this.frame438, 449, this.frame450, 456, this.frame457, 494, this.frame495, 497, this.frame498, 499, this.frame500, 501, this.frame502, 519, this.frame520, 530, this.frame531, 542, this.frame543, 551, this.frame552, 575, this.frame576, 592, this.frame593, 608, this.frame609, 611, this.frame612, 616, this.frame617, 618, this.frame619, 643, this.frame644, 680, this.frame681, 699, this.frame700, 707, this.frame708, 732, this.frame733, 783, this.frame784, 813, this.frame814, 815, this.frame816, 920, this.frame921, 925, this.frame926, 1028, this.frame1029, 1048, this.frame1049, 1097, this.frame1098, 1177, this.frame1178, 1205, this.frame1206
            ]);
            return;
        }// end 
        frame14()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame20()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame23()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        frame27()
        {
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame32()
        {
            this.mc.parent._mcctrl.dash(3.5);
            return;
        }// end function

        frame38()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        frame43()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame71()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame85()
        {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }// end function

        frame91()
        {
            this.mc.parent._mcctrl.setSkillAIR();
            this.mc.parent._mcctrl.setAirMove(false);
            return;
        }// end function

        frame97()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame114()
        {
            this.mc.parent._mcctrl.move(-7, -7);
            this.mc.parent._mcctrl.damping(0.7, 0.7);
            return;
        }// end function

        frame115()
        {
            this.mc.parent._mcctrl.fire("tzatm", {x:10, y:10, hold:2, hits:1});
            return;
        }// end function

        frame117()
        {
            this.mc.parent._mcctrl.fire("tz1atm", {x:10, y:10, hold:2, hits:1});
            return;
        }// end function

        frame126()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame178()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame184()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        frame191()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame199()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame207()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame214()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill1();
            return;
        }// end function

        frame221()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame229()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame242()
        {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.15, 0);
            return;
        }// end function

        frame252()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setJump();
            return;
        }// end function

        frame259()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame264()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame280()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame285()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame288()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            return;
        }// end function

        frame300()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame310()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame329()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame357()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame363()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame390()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame391()
        {
            this.mc.parent._mcctrl.fire("zh1atm", {x:20, y:0, hold:2, hits:1});
            return;
        }// end function

        frame394()
        {
            this.mc.parent._mcctrl.fire("zh11atm", {x:20, y:0, hold:2, hits:1});
            return;
        }// end function

        frame417()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame429()
        {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }// end function

        frame438()
        {
            this.mc.parent._mcctrl.dampingPercent(0.3, 0);
            return;
        }// end function

        frame450()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame457()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame495()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame498()
        {
            this.mc.parent._mcctrl.fire("zh3atm", {x:15, y:-15, hold:2, hits:1});
            return;
        }// end function

        frame500()
        {
            this.mc.parent._mcctrl.fire("zh31atm", {x:15, y:-15, hold:2, hits:1});
            return;
        }// end function

        frame502()
        {
            this.mc.parent._mcctrl.fire("zh32atm", {x:15, y:-15, hold:2, hits:1});
            return;
        }// end function

        frame520()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame531()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame543()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame552()
        {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        frame576()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame593()
        {
            this.mc.parent._EffectCtrl.bisha(false, "手鞠1");
            return;
        }// end function

        frame609()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame612()
        {
            this.mc.parent._FighterCtrler.setCross(true);
            this.mc.parent._mcctrl.move(30, 0);
            return;
        }// end function

        frame617()
        {
            this.mc.parent._FighterCtrler.setCross(false);
            this.mc.parent._mcctrl.damping(3, 0);
            return;
        }// end function

        frame619()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame644()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame681()
        {
            this.mc.parent._EffectCtrl.bisha(false, "手鞠1");
            return;
        }// end function

        frame700()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame708()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame733()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame784()
        {
            this.mc.parent._EffectCtrl.bisha(true, "手鞠1");
            return;
        }// end function

        frame814()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame816()
        {
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }// end function

        frame921()
        {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._EffectCtrl.endShake();
            return;
        }// end function

        frame926()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1029()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1049()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1098()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1178()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1206()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function
    }
}
