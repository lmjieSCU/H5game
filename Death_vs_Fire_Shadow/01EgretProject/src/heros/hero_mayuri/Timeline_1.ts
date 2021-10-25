namespace hero_mayuri{
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
             13, this.frame14, 21, this.frame22, 26, this.frame27, 33, this.frame34, 42, this.frame43, 44, this.frame45, 77, this.frame78, 89, this.frame90, 97, this.frame98, 104, this.frame105, 108, this.frame109, 109, this.frame110, 118, this.frame119, 121, this.frame122, 123, this.frame124, 132, this.frame133, 145, this.frame146, 150, this.frame151, 156, this.frame157, 161, this.frame162, 168, this.frame169, 171, this.frame172, 176, this.frame177, 181, this.frame182, 208, this.frame209, 215, this.frame216, 223, this.frame224, 233, this.frame234, 249, this.frame250, 252, this.frame253, 258, this.frame259, 262, this.frame263, 266, this.frame267, 267, this.frame268, 268, this.frame269, 274, this.frame275, 278, this.frame279, 284, this.frame285, 289, this.frame290, 298, this.frame299, 300, this.frame301, 307, this.frame308, 328, this.frame329, 344, this.frame345, 346, this.frame347, 385, this.frame386, 397, this.frame398, 400, this.frame401, 417, this.frame418, 424, this.frame425, 436, this.frame437, 448, this.frame449, 464, this.frame465, 484, this.frame485, 497, this.frame498, 525, this.frame526, 528, this.frame529, 531, this.frame532, 535, this.frame536, 540, this.frame541, 545, this.frame546, 566, this.frame567, 581, this.frame582, 603, this.frame604, 626, this.frame627, 627, this.frame628, 635, this.frame636, 648, this.frame649, 672, this.frame673, 702, this.frame703, 706, this.frame707, 738, this.frame739, 746, this.frame747, 792, this.frame793, 813, this.frame814, 874, this.frame875, 964, this.frame965, 978, this.frame979, 1060, this.frame1061, 1088, this.frame1089, 1145, this.frame1146, 1175, this.frame1176, 1201, this.frame1202
            ]);
            return;
        }// end 
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

        frame27()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        frame34()
        {
            this.mc.parent._mcctrl.dash(4);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(50, -255, 0);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame43()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        frame45()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame78()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame90()
        {
            this.mc.parent._mcctrl.move(20, -5);
            this.mc.parent._mcctrl.damping(2, 0.5);
            return;
        }// end function

        frame98()
        {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }// end function

        frame105()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame109()
        {
            this.mc.parent._mcctrl.movePercent(2, 2);
            this.mc.parent._mcctrl.setTouchFloor("跳招21", true);
            this.mc.parent._mcctrl.setHitTarget("tz0atm", "跳招21");
            this.mc.parent._EffectCtrl.shadow(50, -255, 0);
            return;
        }// end function

        frame110()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame119()
        {
            this.mc.parent._mcctrl.loop("跳招0");
            return;
        }// end function

        frame122()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame124()
        {
            this.mc.parent._mcctrl.move(-5, -5);
            this.mc.parent._mcctrl.damping(0.5, 0.5);
            return;
        }// end function

        frame133()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame146()
        {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.15, 0);
            return;
        }// end function

        frame151()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setSkill1();
            return;
        }// end function

        frame157()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame162()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame169()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.4, 0);
            return;
        }// end function

        frame172()
        {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }// end function

        frame177()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame182()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame209()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        frame216()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame224()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame234()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame250()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame253()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        frame259()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame263()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame267()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        frame268()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame269()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame275()
        {
            this.mc.parent._mcctrl.setJump();
            return;
        }// end function

        frame279()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3("招32");
            return;
        }// end function

        frame285()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame290()
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
            this.mc.parent._EffectCtrl.shine(13434622);
            return;
        }// end function

        frame308()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame329()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame345()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame347()
        {
            this.mc.parent._mcctrl.fire("zh2atm", {x:15, y:{start:-8, add:1, max:10}, hold:2, hits:1});
            return;
        }// end function

        frame386()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame398()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame401()
        {
            this.mc.parent._EffectCtrl.shadow(50, -255, 0);
            return;
        }// end function

        frame418()
        {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame425()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame437()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame449()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame465()
        {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        frame485()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame498()
        {
            this.mc.parent._EffectCtrl.bisha(false, "涅浊利1");
            return;
        }// end function

        frame526()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame529()
        {
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame532()
        {
            this.mc.parent._FighterCtrler.moveToTarget(20, -60, true);
            this.mc.parent._mcctrl.move(-3, -3);
            this.mc.parent._mcctrl.damping(0.05, 0.05);
            this.mc.parent._EffectCtrl.slowDown(1);
            return;
        }// end function

        frame536()
        {
            this.mc.parent._EffectCtrl.shine(16729113);
            return;
        }// end function

        frame541()
        {
            this.mc.parent._EffectCtrl.shine(16729113);
            return;
        }// end function

        frame546()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame567()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame582()
        {
            this.mc.parent._EffectCtrl.bisha(false, "涅浊利1");
            return;
        }// end function

        frame604()
        {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._EffectCtrl.shadow(50, -255, 0);
            return;
        }// end function

        frame627()
        {
            this.mc.parent._mcctrl.justHitToPlay("bs2", "必杀2", false);
            return;
        }// end function

        frame628()
        {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame636()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame649()
        {
            this.mc.parent._EffectCtrl.shadow(50, -255, 0);
            return;
        }// end function

        frame673()
        {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.slowDown(1);
            return;
        }// end function

        frame703()
        {
            this.mc.parent._EffectCtrl.shine(15859712);
            this.mc.parent._EffectCtrl.slowDown(1);
            return;
        }// end function

        frame707()
        {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame739()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame747()
        {
            this.mc.parent._EffectCtrl.bisha(true, "涅浊利2");
            return;
        }// end function

        frame793()
        {
            this.mc.parent._EffectCtrl.shine(7100304);
            return;
        }// end function

        frame814()
        {
            this.mc.parent._EffectCtrl.shine(7100304);
            return;
        }// end function

        frame875()
        {
            this.mc.parent._EffectCtrl.endBisha();
            let shuilong_mc = this.mc.parent._mcctrl.addAttacker("wk", {applyG:true});
            if (!shuilong_mc) {
                 return;
            }
            let shuilong = new Timeline_12(this.mc.parent._mcctrl.getAttacker("wk", shuilong_mc.hashCode))
            return;
        }// end function

        frame965()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame979()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1061()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1089()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1146()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1176()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1202()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function
    }
}
