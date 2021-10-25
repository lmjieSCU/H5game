namespace hero_gaara{
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
                11, this.frame12, 17, this.frame18, 22, this.frame23, 25, this.frame26, 27, this.frame28, 34, this.frame35, 39, this.frame40, 69, this.frame70, 81, this.frame82, 86, this.frame87, 90, this.frame91, 95, this.frame96, 96, this.frame97, 104, this.frame105, 112, this.frame113, 131, this.frame132, 136, this.frame137, 140, this.frame141, 152, this.frame153, 159, this.frame160, 169, this.frame170, 173, this.frame174, 187, this.frame188, 193, this.frame194, 209, this.frame210, 224, this.frame225, 225, this.frame226, 245, this.frame246, 260, this.frame261, 268, this.frame269, 269, this.frame270, 274, this.frame275, 280, this.frame281, 286, this.frame287, 299, this.frame300, 321, this.frame322, 323, this.frame324, 328, this.frame329, 338, this.frame339, 345, this.frame346, 357, this.frame358, 365, this.frame366, 393, this.frame394, 401, this.frame402, 405, this.frame406, 421, this.frame422, 431, this.frame432, 436, this.frame437, 451, this.frame452, 459, this.frame460, 470, this.frame471, 477, this.frame478, 504, this.frame505, 519, this.frame520, 531, this.frame532, 532, this.frame533, 534, this.frame535, 552, this.frame553, 553, this.frame554, 572, this.frame573, 597, this.frame598, 603, this.frame604, 623, this.frame624, 644, this.frame645, 659, this.frame660, 679, this.frame680, 692, this.frame693, 708, this.frame709, 711, this.frame712, 712, this.frame713, 721, this.frame722, 741, this.frame742, 746, this.frame747, 767, this.frame768, 786, this.frame787, 824, this.frame825, 826, this.frame827, 833, this.frame834, 836, this.frame837, 865, this.frame866, 867, this.frame868, 886, this.frame887, 936, this.frame937, 966, this.frame967, 1054, this.frame1055, 1074, this.frame1075, 1172, this.frame1173, 1213, this.frame1214, 1241, this.frame1242
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

        frame26()
        {
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame28()
        {
            this.mc.parent._mcctrl.dash(3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            return;
        }// end function

        frame35()
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

        frame82()
        {
            this.mc.parent._mcctrl.move(0, -2);
            this.mc.parent._mcctrl.damping(0, 0.2);
            return;
        }// end function

        frame87()
        {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }// end function

        frame91()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame96()
        {
            this.mc.parent._mcctrl.move(0, -2);
            this.mc.parent._mcctrl.damping(0, 0.05);
            return;
        }// end function

        frame97()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame105()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame113()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame132()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            return;
        }// end function

        frame137()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame141()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame153()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setSkill2();
            return;
        }// end function

        frame160()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame170()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame174()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame188()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setZhao1("招11");
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        frame194()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame210()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame225()
        {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.15, 0);
            return;
        }// end function

        frame226()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame246()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame261()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame269()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame270()
        {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            let shuilong_mc = this.mc.parent._mcctrl.addAttacker("zzz1", {x:{followTarget:true, offset:0, range:[0, 250]}});
             if (!shuilong_mc) {
		                return;
		            }
		            let shuilong = new Timeline_7(this.mc.parent._mcctrl.getAttacker("zzz1", shuilong_mc.hashCode))
            return;
        }// end function

        frame275()
        {
            this.mc.parent._mcctrl.setJump();
            return;
        }// end function

        frame281()
        {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            return;
        }// end function

        frame287()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame300()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame322()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame324()
        {
            this.mc.parent._mcctrl.gotoAndPlay("招11");
            return;
        }// end function


        frame329()
        {
            this.mc.parent._mcctrl.fire("zh1atm", {x:{start:5, max:30, add:0.5}, y:0, hold:3, hits:-1});
            return;
        }// end function

        frame339()
        {
            this.mc.parent._mcctrl.setBisha();
            return;
        }// end function

        frame346()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame358()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame366()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame394()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBisha();
            return;
        }// end function

        frame402()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame406()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame422()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame432()
        {
            this.mc.parent._EffectCtrl.shine(9074006);
            return;
        }// end function

        frame437()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame452()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame460()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame471()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame478()
        {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        frame505()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame520()
        {
            this.mc.parent._EffectCtrl.bisha(false, "我爱罗1");
            return;
        }// end function

        frame532()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame533()
        {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }// end function

        frame535()
        {
            let shuilong_mc =this.mc.parent._mcctrl.addAttacker("zzzz", {x:{followTarget:true, offset:0, range:[0, 400]}});
             if (!shuilong_mc) {
		                return;
		            }
		            let shuilong = new Timeline_9(this.mc.parent._mcctrl.getAttacker("zzzz", shuilong_mc.hashCode))
            return;
        }// end function

        frame553()
        {
            if (!this.mc.parent._FighterCtrler.justHit("bs1"))
            {
                this.mc.parent._mcctrl.gotoAndPlay("必杀1");
            }
            return;
        }// end function

        frame554()
        {
            if (this.mc.parent._FighterCtrler.target)
            {
                this.mc.parent._FighterCtrler.target.visible = false;
            }
            this.zz = this.mc.parent._mcctrl.getAttacker("zzzz");
            if (this.zz)
            {
                this.zz.gotoAndPlay("fly");
            }
            return;
        }// end function

        frame573()
        {
            this.zz1 = this.mc.parent._mcctrl.getAttacker("zzzz");
            if (this.zz1)
            {
                this.zz1.gotoAndPlay("boom");
            }
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame598()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame604()
        {
            this.mc.parent._mcctrl.endAct();
            this.zz2 = this.mc.parent._mcctrl.getAttacker("zzzz");
            if (this.zz2)
            {
                this.zz2.gotoAndPlay("miss");
            }
            return;
        }// end function

        frame624()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame645()
        {
            this.mc.parent._EffectCtrl.bisha(false, "我爱罗1");
            return;
        }// end function

        frame660()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame680()
        {
            this.mc.parent._EffectCtrl.shine(9074006);
            return;
        }// end function

        frame693()
        {
            this.justHit = this.mc.parent._FighterCtrler.justHit("sbs3");
            if (this.justHit)
            {
                this.mc.parent._mcctrl.moveTarget({followmc:"move_mc"});
                if (this.mc.parent._FighterCtrler.target)
                {
                    this.mc.parent._FighterCtrler.target.visible = false;
                }
            }
            return;
        }// end function

        frame709()
        {
            if (!this.justHit)
            {
                this.mc.parent._mcctrl.gotoAndPlay("上必杀2");
            }
            return;
        }// end function

        frame712()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame713()
        {
            if (this.mc.parent._FighterCtrler.target)
            {
                this.mc.parent._FighterCtrler.target.visible = true;
            }
            return;
        }// end function

        frame722()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame742()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame747()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame768()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame787()
        {
            this.mc.parent._EffectCtrl.bisha(true, "我爱罗2");
            return;
        }// end function

        frame825()
        {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._EffectCtrl.slowDown(1);
            return;
        }// end function

        frame827()
        {
            let shuilong_mc= this.mc.parent._mcctrl.addAttacker("bsmc", {x:{followTarget:true, offset:10, range:[0, 500]}, y:{followTarget:true, offset:-15, range:[-250, 250]}, applyG:false});
            if (!shuilong_mc) {
		                return;
		            }
		            let shuilong = new Timeline_11(this.mc.parent._mcctrl.getAttacker("bsmc", shuilong_mc.hashCode))
            return;
        }// end function

        frame834()
        {
            this.mc.parent._mcctrl.justHitToPlay("cbs1", "超必杀HIT", false, false);
            return;
        }// end function

        frame837()
        {
            this.bsmc1 = this.mc.parent._mcctrl.getAttacker("bsmc");
            if (this.bsmc1)
            {
                this.bsmc1.gotoAndPlay("miss");
            }
            return;
        }// end function

        frame866()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame868()
        {
            this.mc.parent._FighterCtrler.setTargetVelocity(0, -3);
            return;
        }// end function

        frame887()
        {
            this.bsmc = this.mc.parent._mcctrl.getAttacker("bsmc");
            if (this.bsmc)
            {
                this.bsmc.gotoAndPlay("start");
            }
            return;
        }// end function

        frame937()
        {
            if (this.bsmc)
            {
                this.bsmc.gotoAndPlay("big");
            }
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }// end function

        frame967()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1055()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1075()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1173()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1214()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1242()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function
    }
}
