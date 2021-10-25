namespace hero_juggo{
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
              14, this.frame15, 19, this.frame20, 22, this.frame23, 26, this.frame27, 35, this.frame36, 39, this.frame40, 70, this.frame71, 78, this.frame79, 86, this.frame87, 91, this.frame92, 96, this.frame97, 99, this.frame100, 110, this.frame111, 119, this.frame120, 125, this.frame126, 130, this.frame131, 133, this.frame134, 137, this.frame138, 146, this.frame147, 151, this.frame152, 155, this.frame156, 160, this.frame161, 161, this.frame162, 173, this.frame174, 178, this.frame179, 185, this.frame186, 193, this.frame194, 194, this.frame195, 195, this.frame196, 208, this.frame209, 220, this.frame221, 221, this.frame222, 231, this.frame232, 236, this.frame237, 241, this.frame242, 257, this.frame258, 258, this.frame259, 263, this.frame264, 267, this.frame268, 275, this.frame276, 289, this.frame290, 300, this.frame301, 311, this.frame312, 313, this.frame314, 321, this.frame322, 341, this.frame342, 360, this.frame361, 377, this.frame378, 394, this.frame395, 406, this.frame407, 424, this.frame425, 452, this.frame453, 463, this.frame464, 465, this.frame466, 466, this.frame467, 479, this.frame480, 486, this.frame487, 495, this.frame496, 499, this.frame500, 507, this.frame508, 521, this.frame522, 539, this.frame540, 550, this.frame551, 588, this.frame589, 593, this.frame594, 602, this.frame603, 610, this.frame611, 624, this.frame625, 636, this.frame637, 664, this.frame665, 676, this.frame677, 699, this.frame700, 701, this.frame702, 737, this.frame738, 738, this.frame739, 743, this.frame744, 744, this.frame745, 748, this.frame749, 755, this.frame756, 758, this.frame759, 761, this.frame762, 780, this.frame781, 812, this.frame813, 858, this.frame859, 859, this.frame860, 867, this.frame868, 870, this.frame871, 872, this.frame873, 900, this.frame901, 927, this.frame928, 940, this.frame941, 953, this.frame954, 966, this.frame967, 979, this.frame980, 1001, this.frame1002, 1005, this.frame1006, 1016, this.frame1017, 1017, this.frame1018, 1023, this.frame1024, 1024, this.frame1025, 1026, this.frame1027, 1027, this.frame1028, 1052, this.frame1053, 1140, this.frame1141, 1161, this.frame1162, 1242, this.frame1243, 1283, this.frame1284, 1311, this.frame1312
            ]);
            return;
        }// end 
        frame15()
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
            this.mc.parent._mcctrl.dash(2.5);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(100, 40, 0);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame36()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        frame40()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame71()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame79()
        {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }// end function

        frame87()
        {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }// end function

        frame92()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame97()
        {
            this.mc.parent._mcctrl.move(2, -2);
            return;
        }// end function

        frame100()
        {
            this.mc.parent._mcctrl.move(6, 4);
            this.mc.parent._mcctrl.damping(0.3, 0.2);
            return;
        }// end function

        frame111()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame120()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame126()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setSkill2();
            return;
        }// end function

        frame131()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame134()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame138()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame147()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        frame152()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame156()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame161()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame162()
        {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame174()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        frame179()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame186()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame194()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame195()
        {
            this.mc.parent._mcctrl.setHitTarget("kj10atm", "砍技12");
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._EffectCtrl.shadow(100, 40, 0);
            return;
        }// end function

        frame196()
        {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame209()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame221()
        {
            this.mc.parent._mcctrl.movePercent(3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.6, 0);
            return;
        }// end function

        frame222()
        {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame232()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        frame237()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame242()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame258()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            this.mc.parent._EffectCtrl.shadow(100, 40, 0);
            return;
        }// end function

        frame259()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame264()
        {
            this.mc.parent._mcctrl.setHitTarget("kj20", "砍技21");
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame268()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame276()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame290()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame301()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame312()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame314()
        {
            this.mc.parent._mcctrl.fire("zh1atm", {x:{start:20}, y:0, hold:2, hits:1});
            return;
        }// end function

        frame322()
        {
            this.mc.parent._mcctrl.fire("zh11atm", {x:{start:20}, y:0, hold:2, hits:1});
            return;
        }// end function

        frame342()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame361()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame378()
        {
            let shuilong_mc = this.mc.parent._mcctrl.addAttacker("tu", { x: { moveToTarget: true, offset: 0, range: [50, 500] } });
            if (!shuilong_mc) {
                return;
            }
            let shuilong = new Symbol1_10(this.mc.parent._mcctrl.getAttacker("tu", shuilong_mc.hashCode))
            return;
        }// end function

        frame395()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame407()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame425()
        {
            let shuilong_mc = this.mc.parent._mcctrl.addAttacker("kuwu", {applyG:false});
            if (!shuilong_mc) {
                return;
            }
            let shuilong = new Timeline_11(this.mc.parent._mcctrl.getAttacker("kuwu", shuilong_mc.hashCode))
            return;
        }// end function

        frame453()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame464()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame466()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame467()
        {
            this.mc.parent._mcctrl.move(10, -13);
            this.mc.parent._mcctrl.damping(0.5, 0.5);
            this.mc.parent._EffectCtrl.shadow(100, 40, 0);
            return;
        }// end function

        frame480()
        {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame487()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame496()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame500()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        frame508()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame522()
        {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        frame540()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame551()
        {
            this.mc.parent._EffectCtrl.bisha(false, "重吾1");
            return;
        }// end function

        frame589()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame594()
        {
            this.mc.parent._mcctrl.move(-7, 0);
            this.mc.parent._mcctrl.damping(0.7, 0);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._mcctrl.fire("bs1atm", {x:{start:30}, y:0, hold:3, hits:1, hp:200});
            return;
        }// end function

        frame603()
        {
            this.mc.parent._mcctrl.move(-7, 0);
            this.mc.parent._mcctrl.damping(0.7, 0);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._mcctrl.fire("bs1atm", {x:{start:30}, y:0, hold:3, hits:1, hp:200});
            return;
        }// end function

        frame611()
        {
            this.mc.parent._mcctrl.move(-7, 0);
            this.mc.parent._mcctrl.damping(0.7, 0);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._mcctrl.fire("bs1atm", {x:{start:30}, y:0, hold:3, hits:1, hp:200});
            return;
        }// end function

        frame625()
        {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }// end function

        frame637()
        {
            this.mc.parent._mcctrl.move(-12, 0);
            this.mc.parent._mcctrl.damping(1.2, 0);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._mcctrl.fire("bsatm", {x:{start:30}, y:0, hold:3, hits:1, hp:300});
            return;
        }// end function

        frame665()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame677()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame700()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame702()
        {
            this.mc.parent._EffectCtrl.bisha(false, "重吾1");
            return;
        }// end function

        frame738()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame739()
        {
            this.mc.parent._mcctrl.move(20, 0);
            return;
        }// end function

        frame744()
        {
            this.mc.parent._FighterCtrler.moveToTarget(-150, 0, false);
            this.mc.parent._mcctrl.move(20, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }// end function

        frame745()
        {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            this.mc.parent._EffectCtrl.shadow(100, 40, 0);
            return;
        }// end function

        frame749()
        {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame756()
        {
            this.mc.parent._mcctrl.move(10, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame759()
        {
            this.mc.parent._mcctrl.isApplyG(true);
            return;
        }// end function

        frame762()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame781()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame813()
        {
            this.mc.parent._EffectCtrl.bisha(true, "重吾2");
            return;
        }// end function

        frame859()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame860()
        {
            this.mc.parent._mcctrl.movePercent(3, 0);
            this.mc.parent._mcctrl.setHitTarget("cbs0atm", "超必杀2");
            this.mc.parent._EffectCtrl.shadow(100, 40, 0);
            return;
        }// end function

        frame868()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

         frame871()
        {
            this.mc.parent._mcctrl.gotoAndPlay("超必杀2");
            return;
        }// end function


        frame873()
        {
            this.mc.parent._mcctrl.moveTarget({followmc:"move_mc"});
            return;
        }// end function

        frame901()
        {
            return;
        }// end function

        frame928()
        {
            this.mc.parent._EffectCtrl.shine(10027008);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shake(0, 5);
            return;
        }// end function

        frame941()
        {
            this.mc.parent._EffectCtrl.shine(10027008);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shake(0, 5);
            return;
        }// end function

        frame954()
        {
            this.mc.parent._EffectCtrl.shine(10027008);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shake(0, 5);
            return;
        }// end function

        frame967()
        {
            this.mc.parent._EffectCtrl.shine(10027008);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shake(0, 5);
            return;
        }// end function

        frame980()
        {
            this.mc.parent._EffectCtrl.shine(10027008);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shake(0, 5);
            return;
        }// end function

        frame1002()
        {
            this.mc.parent._EffectCtrl.shadow(100, 40, 0);
            return;
        }// end function

        frame1006()
        {
            this.mc.parent._mcctrl.movePercent(1, -2);
            this.mc.parent._mcctrl.dampingPercent(0, 0.1);
            return;
        }// end function

         frame1017()
        {
            this.mc.parent._mcctrl.gotoAndPlay("超必杀3");
            return;
        }// end function

        frame1018()
        {
            this.mc.parent._mcctrl.setTouchFloor("超必杀4", true);
            return;
        }// end function

        frame1024()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1025()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame1027()
        {
            this.mc.parent._EffectCtrl.shine(10027008);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shake(0, 10);
            return;
        }// end function

        frame1028()
        {
            this.mc.parent._mcctrl.moveTarget(null);
            return;
        }// end function

        frame1053()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1141()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1162()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1243()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1284()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1312()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function
    }
}
