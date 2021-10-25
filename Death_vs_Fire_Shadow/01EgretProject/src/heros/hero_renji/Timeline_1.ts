namespace hero_renji{
    export class Timeline_1 {
        public mc :any;                     //zmovie.ZMovieClip
        constructor(_mc:zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this,[
                
                11, this.frame12, 19, this.frame20, 26, this.frame27, 31, this.frame32, 42, this.frame43, 45, this.frame46, 74, this.frame75, 84, this.frame85, 91, this.frame92, 95, this.frame96, 101, this.frame102, 106, this.frame107, 118, this.frame119, 130, this.frame131, 131, this.frame132, 136, this.frame137, 142, this.frame143, 146, this.frame147, 155, this.frame156, 161, this.frame162, 168, this.frame169, 174, this.frame175, 184, this.frame185, 185, this.frame186, 192, this.frame193, 198, this.frame199, 203, this.frame204, 206, this.frame207, 212, this.frame213, 220, this.frame221, 231, this.frame232, 245, this.frame246, 255, this.frame256, 263, this.frame264, 269, this.frame270, 279, this.frame280, 291, this.frame292, 305, this.frame306, 310, this.frame311, 313, this.frame314, 328, this.frame329, 332, this.frame333, 339, this.frame340, 351, this.frame352, 360, this.frame361, 377, this.frame378, 397, this.frame398, 407, this.frame408, 409, this.frame410, 415, this.frame416, 424, this.frame425, 430, this.frame431, 464, this.frame465, 473, this.frame474, 507, this.frame508, 555, this.frame556, 571, this.frame572, 603, this.frame604, 632, this.frame633, 633, this.frame634, 634, this.frame635, 661, this.frame662, 688, this.frame689, 709, this.frame710, 719, this.frame720, 741, this.frame742, 743, this.frame744, 758, this.frame759, 760, this.frame761, 781, this.frame782, 797, this.frame798, 850, this.frame851, 898, this.frame899, 902, this.frame903, 951, this.frame952, 953, this.frame954, 954, this.frame955, 977, this.frame978, 978, this.frame979, 981, this.frame982, 996, this.frame997, 1079, this.frame1080, 1083, this.frame1084, 1085, this.frame1086, 1112, this.frame1113, 1182, this.frame1183, 1223, this.frame1224, 1251, this.frame1252
            ]);
            return;
        }// end 

        frame12()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame20()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame27()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        frame32()
        {
            this.mc.parent._mcctrl.dash(2.3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(0, 0, 255);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame43()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        frame46()
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

        frame92()
        {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }// end function

        frame96()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame102()
        {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.move(-2, -4);
            return;
        }// end function

        frame107()
        {
            this.mc.parent._mcctrl.damping(0.2, 0.4);
            return;
        }// end function

        frame119()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame131()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        frame132()
        {
            return;
        }// end function

        frame137()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setSkill2();
            return;
        }// end function

        frame143()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame147()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame156()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setJump();
            return;
        }// end function

        frame162()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame169()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame175()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }// end function

        frame185()
        {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao2();
            return;
        }// end function

        frame186()
        {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
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

        frame204()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame207()
        {
            this.mc.parent._mcctrl.movePercent(1.8, 0);
            return;
        }// end function

        frame213()
        {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.shine(8444152);
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shake(0, 3);
            return;
        }// end function

        frame221()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame232()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame246()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame256()
        {
            this.mc.parent._EffectCtrl.shine(11382189);
            return;
        }// end function

        frame264()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        frame270()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame280()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame292()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame306()
        {
            this.mc.parent._mcctrl.setZhao3();
            return;
        }// end function

        frame311()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame314()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame329()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame333()
        {
            this.mc.parent._mcctrl.addAttacker("zz1", {x:{moveToTarget:true, offset:0}, y:{moveToTarget:false, offset:0}, applyG:false});
            return;
        }// end function

        frame340()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame352()
        {
            this.mc.parent._mcctrl.setBishaUP();
            return;
        }// end function

        frame361()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame378()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame398()
        {
            this.mc.parent._mcctrl.setBisha();
            return;
        }// end function

        frame408()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame410()
        {
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setJump();
            return;
        }// end function

        frame416()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame425()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        frame431()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame465()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame474()
        {
            this.mc.parent._EffectCtrl.bisha(false, "bsface1");
            return;
        }// end function

        frame508()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame556()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame572()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame604()
        {
            this.mc.parent._EffectCtrl.bisha(false, "bsface2");
            return;
        }// end function

        frame633()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame634()
        {
            this.mc.parent._mcctrl.addAttacker("dao", {x:{followTarget:true, offset:0}, y:{followTarget:true, offset:-30}, applyG:false});
            return;
        }// end function

        frame635()
        {
            this.mc.parent._EffectCtrl.shine(16298224);
            return;
        }// end function

        frame662()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame689()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame710()
        {
            this.mc.parent._EffectCtrl.bisha(false, "bsface1");
            return;
        }// end function

        frame720()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame742()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame744()
        {
            this.mc.parent._EffectCtrl.shine(4218928);
            return;
        }// end function

        frame759()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame761()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame782()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame798()
        {
            this.mc.parent._EffectCtrl.bisha(true, "bsface3");
            return;
        }// end function

        frame851()
        {
            this.mc.parent._EffectCtrl.shine(8433840);
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }// end function

        frame899()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame903()
        {
            this.mc.parent._EffectCtrl.endShake();
            return;
        }// end function

        frame952()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame954()
        {
            this.mc.parent._EffectCtrl.shine(4218928);
            return;
        }// end function

        frame955()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame978()
        {
            this.mc.parent._EffectCtrl.shine(12605448);
            return;
        }// end function

        frame979()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame982()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame997()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1080()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }// end function

        frame1084()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame1086()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1113()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1183()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1224()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1252()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

    }
}
