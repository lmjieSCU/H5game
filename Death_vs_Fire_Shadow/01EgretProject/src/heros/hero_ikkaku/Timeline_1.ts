namespace hero_ikkaku{
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
               11, this.frame12, 17, this.frame18, 21, this.frame22, 27, this.frame28, 37, this.frame38, 40, this.frame41, 74, this.frame75, 88, this.frame89, 92, this.frame93, 97, this.frame98, 101, this.frame102, 106, this.frame107, 112, this.frame113, 125, this.frame126, 127, this.frame128, 147, this.frame148, 154, this.frame155, 160, this.frame161, 164, this.frame165, 167, this.frame168, 170, this.frame171, 181, this.frame182, 186, this.frame187, 189, this.frame190, 191, this.frame192, 204, this.frame205, 209, this.frame210, 219, this.frame220, 234, this.frame235, 235, this.frame236, 238, this.frame239, 241, this.frame242, 247, this.frame248, 256, this.frame257, 260, this.frame261, 263, this.frame264, 267, this.frame268, 268, this.frame269, 277, this.frame278, 282, this.frame283, 287, this.frame288, 298, this.frame299, 300, this.frame301, 335, this.frame336, 342, this.frame343, 348, this.frame349, 357, this.frame358, 361, this.frame362, 362, this.frame363, 367, this.frame368, 371, this.frame372, 385, this.frame386, 404, this.frame405, 412, this.frame413, 413, this.frame414, 421, this.frame422, 422, this.frame423, 424, this.frame425, 433, this.frame434, 438, this.frame439, 472, this.frame473, 474, this.frame475, 476, this.frame477, 477, this.frame478, 480, this.frame481, 482, this.frame483, 485, this.frame486, 493, this.frame494, 522, this.frame523, 553, this.frame554, 569, this.frame570, 592, this.frame593, 593, this.frame594, 594, this.frame595, 605, this.frame606, 616, this.frame617, 626, this.frame627, 628, this.frame629, 653, this.frame654, 656, this.frame657, 671, this.frame672, 690, this.frame691, 724, this.frame725, 766, this.frame767, 802, this.frame803, 817, this.frame818, 905, this.frame906, 927, this.frame928, 985, this.frame986, 1026, this.frame1027, 1054, this.frame1055
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

        frame22()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        frame28()
        {
            this.mc.parent._mcctrl.dash(2.5);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.dash();
            this.mc.parent._EffectCtrl.shadow(255, 0, -255);
            return;
        }// end function

        frame38()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        frame41()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame75()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame89()
        {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }// end function

        frame93()
        {
            this.mc.parent._mcctrl.move(-5, -5);
            this.mc.parent._mcctrl.damping(0.5, 0.5);
            return;
        }// end function

        frame98()
        {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }// end function

        frame102()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame107()
        {
            this.mc.parent._mcctrl.move(0, -5);
            this.mc.parent._EffectCtrl.shadow(255, 0, -255);
            return;
        }// end function

        frame113()
        {
            this.mc.parent._mcctrl.move(10, 10);
            this.mc.parent._mcctrl.setTouchFloor("跳招1", true);
            return;
        }// end function

        frame126()
        {
            this.mc.parent._mcctrl.loop("跳招0");
            return;
        }// end function

        frame128()
        {
            this.mc.parent._EffectCtrl.shake(0, 3);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame148()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame155()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame161()
        {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setAttack("砍2");
            return;
        }// end function

        frame165()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame168()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame171()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame182()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }// end function

        frame187()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame190()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame192()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        frame205()
        {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setSkill2("砍技22");
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        frame210()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame220()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame235()
        {
            this.mc.parent._mcctrl.movePercent(1, -1);
            this.mc.parent._mcctrl.dampingPercent(0, 0.2);
            this.mc.parent._EffectCtrl.shadow(255, 0, -255);
            return;
        }// end function

        frame236()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame239()
        {
            this.mc.parent._mcctrl.setTouchFloor("砍技21", true);
            return;
        }// end function

        frame242()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame248()
        {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame257()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill2("砍技22");
            this.mc.parent._mcctrl.setAttack("砍技22");
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        frame261()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame264()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame268()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame269()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame278()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setJump();
            return;
        }// end function

        frame283()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame288()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame299()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame301()
        {
            return;
        }// end function

        frame336()
        {
            return;
        }// end function

        frame343()
        {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        frame349()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame358()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame362()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame363()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame368()
        {
            this.mc.parent._EffectCtrl.shine(16776960);
            return;
        }// end function

        frame372()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame386()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame405()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame413()
        {
            this.mc.parent._EffectCtrl.shadow(255, 0, -255);
            return;
        }// end function

        frame414()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            return;
        }// end function

        frame422()
        {
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        frame423()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame425()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame434()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame439()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame473()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame475()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame477()
        {
            this.mc.parent._EffectCtrl.shadow(255, 0, -255);
            return;
        }// end function

        frame478()
        {
            this.mc.parent._mcctrl.move(10, 0);
            return;
        }// end function

        frame481()
        {
            this.mc.parent._mcctrl.move(10, -15);
            return;
        }// end function

        frame483()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame486()
        {
            this.mc.parent._mcctrl.damping(1, 2);
            return;
        }// end function

        frame494()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame523()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame554()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame570()
        {
            this.mc.parent._EffectCtrl.bisha(false, "一角1");
            return;
        }// end function

        frame593()
        {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame594()
        {
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame595()
        {
            this.mc.parent._mcctrl.move(150, 0);
            this.mc.parent._mcctrl.damping(15, 0);
            return;
        }// end function

        frame606()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame617()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame627()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame629()
        {
            this.mc.parent._EffectCtrl.bisha(false, "一角1");
            return;
        }// end function

        frame654()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame657()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame672()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame691()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame725()
        {
            this.mc.parent._EffectCtrl.bisha(true, "一角2");
            return;
        }// end function

        frame767()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame803()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame818()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame906()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame928()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame986()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1027()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1055()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function
    }
}
