/*
*naruto主骨骼形态3主骨骼动画对应的帧事件
*/
namespace hero_naruto{
    export class Timeline_30 {

        public mc :any;                     //zmovie.ZMovieClip

        constructor(_mc:zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this,[17, this.frame18, 23, this.frame24, 25, this.frame26, 32, this.frame33, 39, this.frame40, 40, this.frame41, 42, this.frame43, 79, this.frame80, 89, this.frame90, 96, this.frame97, 100, this.frame101, 105, this.frame106, 109, this.frame110, 120, this.frame121, 131, this.frame132, 135, this.frame136, 143, this.frame144, 151, this.frame152, 160, this.frame161, 163, this.frame164, 166, this.frame167, 172, this.frame173, 178, this.frame179, 184, this.frame185, 191, this.frame192, 199, this.frame200, 207, this.frame208, 221, this.frame222, 228, this.frame229, 233, this.frame234, 240, this.frame241, 246, this.frame247, 260, this.frame261, 271, this.frame272, 310, this.frame311, 311, this.frame312, 317, this.frame318, 323, this.frame324, 324, this.frame325, 332, this.frame333, 337, this.frame338, 344, this.frame345, 384, this.frame385, 388, this.frame389, 400, this.frame401, 403, this.frame404, 409, this.frame410, 420, this.frame421, 425, this.frame426, 440, this.frame441, 459, this.frame460, 465, this.frame466, 474, this.frame475, 480, this.frame481, 496, this.frame497, 518, this.frame519, 528, this.frame529, 542, this.frame543, 555, this.frame556, 565, this.frame566, 583, this.frame584, 603, this.frame604, 629, this.frame630, 630, this.frame631, 636, this.frame637, 642, this.frame643, 647, this.frame648, 663, this.frame664, 720, this.frame721, 741, this.frame742, 746, this.frame747, 747, this.frame748, 761, this.frame762, 771, this.frame772, 786, this.frame787, 854, this.frame855, 858, this.frame859, 859, this.frame860, 885, this.frame886, 900, this.frame901, 987, this.frame988, 994, this.frame995, 1009, this.frame1010, 1024, this.frame1025, 1062, this.frame1063, 1074, this.frame1075, 1085, this.frame1086, 1137, this.frame1138, 1165, this.frame1166]);
            return;
        }

       public frame18()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        public frame24()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        public frame26()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        public frame33()
        {
            this.mc.parent._mcctrl.dash(3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(255);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame40()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame41()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        public frame43()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame80()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame90()
        {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }// end function

        public frame97()
        {
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            return;
        }// end function

        public frame101()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame106()
        {
            this.mc.parent._mcctrl.move(0, -12);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }// end function

        public frame110()
        {
            this.mc.parent._mcctrl.movePercent(2, 1);
            this.mc.parent._mcctrl.setTouchFloor("落地", true);
            this.mc.parent._mcctrl.loop("跳招loop");
            return;
        }// end function

        public frame121()
        {
            // this.mc.parent._mcctrl.loop("跳招loop");
            return;
        }// end function

        public frame132()
        {
            this.mc.parent._mcctrl.movePercent(0.3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.03, 0);
            return;
        }// end function

        public frame136()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        public frame144()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame152()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        public frame161()
        {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        public frame164()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame167()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame173()
        {
            this.mc.parent._mcctrl.movePercent(1.3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        public frame179()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setAttack("砍4");
            return;
        }// end function

        public frame185()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame192()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame200()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        public frame208()
        {
            this.mc.parent._mcctrl.addAttacker("shou", {x:{moveToTarget:true, offset:0}, y:{moveToTarget:false, offset:0}, applyG:false});
            return;
        }// end function

        public frame222()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        public frame229()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame234()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame241()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame247()
        {
            this.mc.parent._EffectCtrl.shake(0, 3);
            return;
        }// end function

        public frame261()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame272()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame311()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame312()
        {
            this.mc.parent._mcctrl.movePercent(-3, 0);
            this.mc.parent._EffectCtrl.dash();
            this.mc.parent._EffectCtrl.shadow();
            return;
        }// end function

        public frame318()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        public frame324()
        {
            this.mc.parent._FighterCtrler.moveToTarget(-150, 0, true);
            return;
        }// end function

        public frame325()
        {
            this.mc.parent._mcctrl.movePercent(3, 0);
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }// end function

        public frame333()
        {
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame338()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame345()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame385()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame389()
        {
            this.mc.parent._mcctrl.fire("zh1atm", {x:{start:30, add:-1, min:10}, y:0, hold:0.7, hits:1});
            return;
        }// end function

        public frame401()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame404()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame410()
        {
            this.mc.parent._EffectCtrl.shine(16257056);
            return;
        }// end function

        public frame421()
        {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        public frame426()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame441()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame460()
        {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        public frame466()
        {
            this.mc.parent._mcctrl.setZhao2(null);
            this.mc.parent._mcctrl.setDash(null);
            return;
        }// end function

        public frame475()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame481()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame497()
        {
            this.mc.parent._mcctrl.addAttacker("zhua", {x:{moveToTarget:true, offset:0}, applyG:false});
            return;
        }// end function

        public frame519()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame529()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame543()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame556()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame566()
        {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        public frame584()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame604()
        {
            this.mc.parent._EffectCtrl.bisha(false, "鸣人4");
            return;
        }// end function

        public frame630()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame631()
        {
            this.mc.parent._mcctrl.movePercent(-0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.shine(6621708);
            this.mc.parent._mcctrl.fire("bsatm", {x:{start:30, add:-1, min:15}, y:0, hold:60, hits:1});
            return;
        }// end function

        public frame637()
        {
            this.mc.parent._mcctrl.movePercent(-0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.shine(6621708);
            this.mc.parent._mcctrl.fire("bsatm", {x:{start:30, add:-1, min:15}, y:0, hold:60, hits:1});
            return;
        }// end function

        public frame643()
        {
            this.mc.parent._mcctrl.movePercent(-0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.shine(6621708);
            this.mc.parent._mcctrl.fire("bs1atm", {x:{start:30, add:-1, min:15}, y:0, hold:60, hits:1});
            return;
        }// end function

        public frame648()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame664()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame721()
        {
            this.mc.parent._EffectCtrl.bisha(false, "鸣人6");
            return;
        }// end function

        public frame742()
        {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._EffectCtrl.shake(0, 5);
            return;
        }// end function

        public frame747()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame748()
        {
            this.mc.parent._EffectCtrl.shine(6291480);
            return;
        }// end function

        public frame762()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame772()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame787()
        {
            this.mc.parent._EffectCtrl.bisha(false, "鸣人6");
            return;
        }// end function

        public frame855()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame859()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame860()
        {
            this.mc.parent._EffectCtrl.shine(6621708);
            return;
        }// end function

        public frame886()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame901()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame988()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }// end function

        public frame995()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1010()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1025()
        {
            this.mc.parent._mcctrl.ClearState();
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }// end function

        public frame1063()
        {
            this.mc.parent._EffectCtrl.endShake();
            return;
        }// end function

        public frame1075()
        {
            this.mc.parent._EffectCtrl.endWanKai();
            return;
        }// end function

        public frame1086()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame1138()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        public frame1166()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

    }
}



