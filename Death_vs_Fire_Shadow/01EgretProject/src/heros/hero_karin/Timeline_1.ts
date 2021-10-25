namespace hero_karin{
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
                11, this.frame12, 18, this.frame19, 24, this.frame25, 31, this.frame32, 35, this.frame36, 73, this.frame74, 89, this.frame90, 107, this.frame108, 113, this.frame114, 123, this.frame124, 129, this.frame130, 131, this.frame132, 150, this.frame151, 164, this.frame165, 170, this.frame171, 175, this.frame176, 178, this.frame179, 187, this.frame188, 195, this.frame196, 200, this.frame201, 206, this.frame207, 214, this.frame215, 225, this.frame226, 233, this.frame234, 242, this.frame243, 245, this.frame246, 256, this.frame257, 262, this.frame263, 270, this.frame271, 287, this.frame288, 297, this.frame298, 301, this.frame302, 317, this.frame318, 342, this.frame343, 349, this.frame350, 356, this.frame357, 357, this.frame358, 358, this.frame359, 367, this.frame368, 374, this.frame375, 382, this.frame383, 400, this.frame401, 403, this.frame404, 406, this.frame407, 409, this.frame410, 429, this.frame430, 444, this.frame445, 453, this.frame454, 464, this.frame465, 470, this.frame471, 477, this.frame478, 494, this.frame495, 498, this.frame499, 521, this.frame522, 530, this.frame531, 543, this.frame544, 550, this.frame551, 568, this.frame569, 579, this.frame580, 622, this.frame623, 626, this.frame627, 634, this.frame635, 652, this.frame653, 669, this.frame670, 717, this.frame718, 727, this.frame728, 734, this.frame735, 735, this.frame736, 743, this.frame744, 752, this.frame753, 775, this.frame776, 820, this.frame821, 878, this.frame879, 880, this.frame881, 887, this.frame888, 896, this.frame897, 911, this.frame912, 963, this.frame964, 1053, this.frame1054, 1072, this.frame1073, 1099, this.frame1100, 1149, this.frame1150, 1233, this.frame1234, 1265, this.frame1266
            ]);
            return;
        }// end 
       frame12()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame19()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        frame25()
        {
            this.mc.parent._mcctrl.dash(3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame32()
        {
            this.mc.parent._mcctrl.dashStop();
            this.mc.parent._mcctrl.move(0, 0);
            return;
        }// end function

        frame36()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame74()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame90()
        {
            this.mc.parent._mcctrl.move(7, -1);
            this.mc.parent._mcctrl.damping(0.3, 0.05);
            return;
        }// end function

        frame108()
        {
            this.mc.parent._mcctrl.setBishaAIR();
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }// end function

        frame114()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame124()
        {
            this.mc.parent._mcctrl.move(0, -4);
            return;
        }// end function

        frame130()
        {
            this.mc.parent._mcctrl.move(-10, -10);
            this.mc.parent._mcctrl.damping(1, 1);
            return;
        }// end function

        frame132()
        {
            this.mc.parent._mcctrl.fire("tzatm", {x:12, y:12, hold:3, hits:3});
            return;
        }// end function

        frame151()
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

        frame171()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        frame176()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame179()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame188()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame196()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }// end function

        frame201()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame207()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame215()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame226()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setSkill2("砍技21");
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        frame234()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame243()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame246()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame257()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        frame263()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame271()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame288()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame298()
        {
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame302()
        {
            this.mc.parent._FighterCtrler.moveToTarget(30, 0, true);
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }// end function

        frame318()
        {
            this.mc.parent._mcctrl.gotoAndPlay("砍2");
            return;
        }// end function

        frame343()
        {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame350()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function
        frame357()
        {
             this.mc.parent._mcctrl.gotoAndPlay("砍技21");
        }
        frame358()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame359()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame368()
        {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setJump();
            return;
        }// end function

        frame375()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame383()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame401()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame404()
        {
            this.mc.parent._mcctrl.fire("zh1atm", {x:{start:20}, y:0, hold:2, hits:1});
            return;
        }// end function

        frame407()
        {
            this.mc.parent._mcctrl.fire("zh1atm", {x:{start:20}, y:0, hold:2, hits:1});
            return;
        }// end function

        frame410()
        {
            this.mc.parent._mcctrl.fire("zh11atm", {x:{start:20}, y:0, hold:2, hits:1});
            return;
        }// end function

        frame430()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame445()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame454()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame465()
        {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao3();
            return;
        }// end function

        frame471()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame478()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame495()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame499()
        {
            this.mc.parent._mcctrl.fire("zh3atm", {x:10, y:{start:0, min:-12, add:-0.5}, hold:2, hits:3});
            return;
        }// end function

        frame522()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame531()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame544()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame551()
        {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        frame569()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame580()
        {
            this.mc.parent._EffectCtrl.bisha(false, "香磷1");
            return;
        }// end function

        frame623()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame627()
        {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._mcctrl.addAttacker("zzz", {x:{moveToTarget:true, offset:0}, y:{moveToTarget:false}, applyG:false});
            return;
        }// end function

        frame635()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame653()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame670()
        {
            this.mc.parent._EffectCtrl.bisha(false, "香磷1");
            return;
        }// end function

        frame718()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function
        frame728()
        {
            this.mc.parent._mcctrl.gotoAndPlay("上必杀2");
        }

        frame735()
        {
            this.mc.parent._EffectCtrl.shine(11401981);
            return;
        }// end function

        frame736()
        {
            this.mc.parent._FighterCtrler.addHpPercent(0.03);
            return;
        }// end function

        frame744()
        {
            this.mc.parent._mcctrl.setAllAct();
            return;
        }// end function

        frame753()
        {
            this.mc.parent._mcctrl.loop("上必杀2");
            return;
        }// end function

        frame776()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame821()
        {
            this.mc.parent._EffectCtrl.bisha(true, "香磷2");
            return;
        }// end function

        frame879()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame881()
        {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._mcctrl.addAttacker("zzz", {x:{moveToTarget:true, offset:0}, y:{moveToTarget:false}, applyG:false});
            return;
        }// end function`

        frame888()
        {
            this.mc.parent._mcctrl.justHitToPlay("cbs1", "超必杀2", false);
            return;
        }// end function

        frame897()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function
     

        frame912()
        {
            let shuilong_mc = this.mc.parent._mcctrl.addAttacker("zzz2", {applyG:false});
            if (!shuilong_mc) {
                return;
                }
            let shuilong = new Timeline_15(this.mc.parent._mcctrl.getAttacker("zzz2", shuilong_mc.hashCode))
            return;
        }// end function

        frame964()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1054()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1073()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1100()
        {
            this.mc.parent._EffectCtrl.shine(11401981);
            return;
        }// end function

        frame1150()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1234()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1266()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function
    }
}
