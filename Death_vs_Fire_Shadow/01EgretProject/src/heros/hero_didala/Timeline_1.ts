namespace hero_didala{
    export class Timeline_1 {
        public mc :any;                     //zmovie.ZMovieClip
        constructor(_mc:zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this,[13, this.frame14, 21, this.frame22, 26, this.frame27, 32, this.frame33, 35, this.frame36, 43, this.frame44, 69, this.frame70, 79, this.frame80, 86, this.frame87, 91, this.frame92, 96, this.frame97, 98, this.frame99, 115, this.frame116, 129, this.frame130, 135, this.frame136, 142, this.frame143, 147, this.frame148, 153, this.frame154, 158, this.frame159, 160, this.frame161, 167, this.frame168, 173, this.frame174, 179, this.frame180, 185, this.frame186, 194, this.frame195, 200, this.frame201, 209, this.frame210, 213, this.frame214, 215, this.frame216, 228, this.frame229, 234, this.frame235, 245, this.frame246, 250, this.frame251, 251, this.frame252, 257, this.frame258, 259, this.frame260, 265, this.frame266, 269, this.frame270, 270, this.frame271, 275, this.frame276, 277, this.frame278, 283, this.frame284, 289, this.frame290, 300, this.frame301, 303, this.frame304, 320, this.frame321, 325, this.frame326, 339, this.frame340, 359, this.frame360, 367, this.frame368, 378, this.frame379, 380, this.frame381, 381, this.frame382, 395, this.frame396, 403, this.frame404, 411, this.frame412, 426, this.frame427, 433, this.frame434, 470, this.frame471, 480, this.frame481, 499, this.frame500, 500, this.frame501, 538, this.frame539, 545, this.frame546, 569, this.frame570, 582, this.frame583, 584, this.frame585, 620, this.frame621, 621, this.frame622, 653, this.frame654, 665, this.frame666, 679, this.frame680, 710, this.frame711, 772, this.frame773, 829, this.frame830, 835, this.frame836, 843, this.frame844, 848, this.frame849, 873, this.frame874, 955, this.frame956, 981, this.frame982, 1073, this.frame1074, 1114, this.frame1115, 1142, this.frame1143]);
            return;
        }// end 

         frame14()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end 

         frame22()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end 

         frame27()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end 

         frame33()
        {
            this.mc.parent._mcctrl.movePercent(6, 0);
            return;
        }// end 

         frame36()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end 

         frame44()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame70()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame80()
        {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }// end 

         frame87()
        {
            this.mc.parent._mcctrl.setSkillAIR();
            this.mc.parent._mcctrl.setAttack("跳砍2");
            return;
        }// end 

         frame92()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame97()
        {
            this.mc.parent._mcctrl.move(0, -2);
            this.mc.parent._mcctrl.damping(0, 0.08);
            return;
        }// end 

         frame99()
        {
            this.mc.parent._mcctrl.fire("tzatm", {y:15, x:0, hold:2, hits:1});
            return;
        }// end 

         frame116()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame130()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end 

         frame136()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame143()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end 

         frame148()
        {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end 

         frame154()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame159()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame161()
        {
            this.mc.parent._mcctrl.movePercent(1.3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.07, 0);
            return;
        }// end 

         frame168()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end 

         frame174()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame180()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame186()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end 

         frame195()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            return;
        }// end 

         frame201()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame210()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame214()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame216()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end 

         frame229()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setJump();
            return;
        }// end 

         frame235()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame246()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame251()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end 

         frame252()
        {
            this.mc.parent._mcctrl.movePercent(2.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.25, 0);
            this.mc.parent._EffectCtrl.shadow(200, 200, 200);
            return;
        }// end 

         frame258()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end 

         frame260()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setAttack("砍技21");
            this.mc.parent._mcctrl.setDash();
            return;
        }// end 

         frame266()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

        frame270()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame271()
        {
            this.mc.parent._EffectCtrl.shadow(200, 200, 200);
            return;
        }// end 

         frame276()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end 

         frame278()
        {
            this.mc.parent._mcctrl.setAttack("砍4");
            return;
        }// end 

         frame284()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame290()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame301()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end 

         frame304()
        {
            this.mc.parent._mcctrl.fire("zh1atm", {x:20, y:{start:0, max:10, add:0.1}, hold:2, hits:1});
            return;
        }// end 

         frame321()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame326()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame340()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end 

         frame360()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame368()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame379()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame381()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end 

         frame382()
        {
            this.mc.parent._mcctrl.fire("zh3atm", {y:-15, x:15, hold:2, hits:1});
            return;
        }// end 

         frame396()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame404()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame412()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end 

         frame427()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame434()
        {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end 

         frame471()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame481()
        {
            this.mc.parent._EffectCtrl.bisha(false, "迪达拉1");
            return;
        }// end 

         frame500()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end 

         frame501()
        {
            this.mc.parent._mcctrl.movePercent(1.4, 0);
            this.mc.parent._EffectCtrl.shadow(200, 200, 200);
            return;
        }// end 

         frame539()
        {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end 

         frame546()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame570()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame583()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end 

         frame585()
        {
            this.mc.parent._EffectCtrl.bisha(false, "迪达拉1");
            return;
        }// end 

         frame621()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end 

         frame622()
        {
            this.mc.parent._EffectCtrl.shadow(100, 100, 100);
            return;
        }// end 

         frame654()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end 

         frame666()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame680()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame711()
        {
            this.mc.parent._EffectCtrl.bisha(true, "迪达拉2");
            return;
        }// end 

         frame773()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end 

         frame830()
        {
            this.mc.parent._FighterCtrler.moveOnce(0, -250);
            return;
        }// end 

         frame836()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame844()
        {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shine(303095);
            return;
        }// end 

         frame849()
        {
           // doZhaoHuan();
            return;
        }// end 

         frame874()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame956()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame982()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame1074()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame1115()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end 

         frame1143()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end 

    }
}
