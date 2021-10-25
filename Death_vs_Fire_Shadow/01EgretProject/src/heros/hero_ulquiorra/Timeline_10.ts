/*
*主骨骼动画形态2对应的帧事件
*/
namespace hero_ulquiorra {
    export class Timeline_10 {

        public mc: any;                     //zmovie.ZMovieClip

        constructor(_mc: zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [
               9, this.frame10, 19, this.frame20, 27, this.frame28, 32, this.frame33, 35, this.frame36, 65, this.frame66, 79, this.frame80, 86, this.frame87, 90, this.frame91, 95, this.frame96, 96, this.frame97, 99, this.frame100, 104, this.frame105, 114, this.frame115, 122, this.frame123, 125, this.frame126, 130, this.frame131, 134, this.frame135, 137, this.frame138, 142, this.frame143, 148, this.frame149, 151, this.frame152, 153, this.frame154, 162, this.frame163, 169, this.frame170, 173, this.frame174, 180, this.frame181, 204, this.frame205, 208, this.frame209, 229, this.frame230, 239, this.frame240, 246, this.frame247, 249, this.frame250, 251, this.frame252, 272, this.frame273, 279, this.frame280, 280, this.frame281, 290, this.frame291, 297, this.frame298, 305, this.frame306, 307, this.frame308, 313, this.frame314, 327, this.frame328, 349, this.frame350, 350, this.frame351, 354, this.frame355, 357, this.frame358, 364, this.frame365, 370, this.frame371, 377, this.frame378, 392, this.frame393, 393, this.frame394, 397, this.frame398, 407, this.frame408, 413, this.frame414, 420, this.frame421, 431, this.frame432, 435, this.frame436, 439, this.frame440, 452, this.frame453, 463, this.frame464, 505, this.frame506, 509, this.frame510, 526, this.frame527, 565, this.frame566, 579, this.frame580, 596, this.frame597, 622, this.frame623, 643, this.frame644, 645, this.frame646, 647, this.frame648, 652, this.frame653, 656, this.frame657, 687, this.frame688, 716, this.frame717, 738, this.frame739, 741, this.frame742, 772, this.frame773, 793, this.frame794, 881, this.frame882, 907, this.frame908, 920, this.frame921, 923, this.frame924, 976, this.frame977, 988, this.frame989, 1046, this.frame1047, 1090, this.frame1091
            ]);
            return;
        }
      frame10()
        {
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            return;
        }// end function

        frame20()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        frame28()
        {
            this.mc.parent._mcctrl.dash(3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(-150, -150, -150);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame33()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        frame36()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame66()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame80()
        {
            this.mc.parent._mcctrl.setAirMove(true);
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
            this.mc.parent._mcctrl.move(0, -1);
            return;
        }// end function

        frame97()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame100()
        {
            this.mc.parent._mcctrl.move(0, -5);
            this.mc.parent._mcctrl.damping(0, 0.5);
            return;
        }// end function

        frame105()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame115()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame123()
        {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.15, 0);
            return;
        }// end function

        frame126()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        frame131()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame135()
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

        frame143()
        {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }// end function

        frame149()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame152()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame154()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame163()
        {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao3();
            return;
        }// end function

        frame170()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame174()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame181()
        {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.15, 0);
            return;
        }// end function

        frame205()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame209()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame230()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame240()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame247()
        {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._mcctrl.move(0, -40);
            this.mc.parent._EffectCtrl.shadow(-150, -150, -150);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame250()
        {
            this.mc.parent._mcctrl.move(0, -5);
            this.mc.parent._mcctrl.damping(0, 0.1);
            return;
        }// end function

        frame252()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame273()
        {
            this.mc.parent._mcctrl.setBishaAIR();
            this.mc.parent._mcctrl.setAttackAIR("砍技21");
            return;
        }// end function

        frame280()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame281()
        {
            this.mc.parent._mcctrl.move(0, -5);
            this.mc.parent._mcctrl.damping(0, 0.5);
            return;
        }// end function

        frame291()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame298()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame306()
        {
            this.mc.parent._mcctrl.fire("zh1atm", {x:{start:5, add:1, max:30}, y:0, hold:2, hits:1});
            return;
        }// end function

        frame308()
        {
            this.mc.parent._EffectCtrl.shine(38656);
            return;
        }// end function

        frame314()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame328()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame350()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame351()
        {
            this.mc.parent._mcctrl.move(60, 0);
            this.mc.parent._EffectCtrl.shadow(-150, -150, -150);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame355()
        {
            this.mc.parent._mcctrl.move(10, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame358()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame365()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setZhao3();
            return;
        }// end function

        frame371()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame378()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame393()
        {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._mcctrl.move(40, -40);
            return;
        }// end function

        frame394()
        {
            this.mc.parent._EffectCtrl.shine(0);
            this.mc.parent._EffectCtrl.shadow(-150, -150, -150);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame398()
        {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._mcctrl.move(4, -4);
            this.mc.parent._mcctrl.damping(0.2, 0.2);
            return;
        }// end function

        frame408()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame414()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame421()
        {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._FighterCtrler.setCross(true);
            return;
        }// end function

        frame432()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame436()
        {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        frame440()
        {
            this.mc.parent._mcctrl.move(60, 0);
            this.mc.parent._mcctrl.damping(3, 0);
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            return;
        }// end function

        frame453()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame464()
        {
            this.mc.parent._EffectCtrl.bisha(true, "小乌1");
            return;
        }// end function

        frame506()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame510()
        {
            this.mc.parent._FighterCtrler.moveToTarget(-50, 0, false);
            this.mc.parent._EffectCtrl.slowDown(0.5);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame527()
        {
            this.mc.parent._EffectCtrl.bisha(false, "bsface1");
            return;
        }// end function

        frame566()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame580()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame597()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame623()
        {
            this.mc.parent._EffectCtrl.bisha(false, "小乌1");
            return;
        }// end function

        frame644()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame646()
        {
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame648()
        {
            this.mc.parent._FighterCtrler.moveToTarget(150, 0, true);
            this.mc.parent._mcctrl.isApplyG(false);
            this.mc.parent._mcctrl.move(5, 0);
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }// end function

        frame653()
        {
            this.mc.parent._mcctrl.move(50, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            return;
        }// end function

        frame657()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame688()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame717()
        {
            this.mc.parent._EffectCtrl.bisha(false, "小乌1");
            return;
        }// end function

        frame739()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame742()
        {
            this.mc.parent._EffectCtrl.shine(0);
            return;
        }// end function

        frame773()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame794()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame882()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame908()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function
        frame921()
        {
            this.mc.parent._mcctrl.ClearState();
        }
        frame924()
        {
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }// end function

        frame977()
        {
            this.mc.parent._EffectCtrl.endWanKai();
            this.mc.parent._EffectCtrl.endShake();
            return;
        }// end function

        frame989()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1047()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1091()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

    }
}
