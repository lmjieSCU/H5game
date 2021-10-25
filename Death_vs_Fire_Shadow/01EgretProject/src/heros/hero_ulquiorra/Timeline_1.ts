/*
*主骨骼动画形态1对应的帧事件
*/
namespace hero_ulquiorra {
    export class Timeline_1 {

        public mc: any;                     //zmovie.ZMovieClip

        constructor(_mc: zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [
                9, this.frame10, 15, this.frame16, 23, this.frame24, 28, this.frame29, 31, this.frame32, 64, this.frame65, 76, this.frame77, 83, this.frame84, 87, this.frame88, 92, this.frame93, 93, this.frame94, 96, this.frame97, 101, this.frame102, 111, this.frame112, 118, this.frame119, 121, this.frame122, 126, this.frame127, 131, this.frame132, 133, this.frame134, 140, this.frame141, 145, this.frame146, 148, this.frame149, 150, this.frame151, 156, this.frame157, 162, this.frame163, 170, this.frame171, 182, this.frame183, 188, this.frame189, 189, this.frame190, 203, this.frame204, 213, this.frame214, 220, this.frame221, 225, this.frame226, 235, this.frame236, 248, this.frame249, 255, this.frame256, 265, this.frame266, 271, this.frame272, 285, this.frame286, 307, this.frame308, 331, this.frame332, 338, this.frame339, 354, this.frame355, 378, this.frame379, 388, this.frame389, 394, this.frame395, 417, this.frame418, 425, this.frame426, 444, this.frame445, 453, this.frame454, 457, this.frame458, 464, this.frame465, 475, this.frame476, 498, this.frame499, 503, this.frame504, 520, this.frame521, 531, this.frame532, 535, this.frame536, 554, this.frame555, 557, this.frame558, 558, this.frame559, 575, this.frame576, 579, this.frame580, 590, this.frame591, 605, this.frame606, 623, this.frame624, 627, this.frame628, 641, this.frame642, 642, this.frame643, 659, this.frame660, 676, this.frame677, 753, this.frame754, 757, this.frame758, 788, this.frame789, 809, this.frame810, 884, this.frame885, 904, this.frame905, 975, this.frame976, 1039, this.frame1040, 1099, this.frame1100, 1144, this.frame1145
                ]);
        }

        frame10()
        {
            this.mc.parent._EffectCtrl.shadow(200, 200, 0);
            return;
        }// end function

        frame16()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame24()
        {
            this.mc.parent._mcctrl.dash(4);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(200, 200, 0);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame29()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        frame32()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame65()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame77()
        {
            this.mc.parent._mcctrl.setAirMove(true);
            this.mc.parent._mcctrl.move(0, -2);
            this.mc.parent._mcctrl.damping(0, 0.2);
            return;
        }// end function

        frame84()
        {
            this.mc.parent._mcctrl.setSkillAIR();
            this.mc.parent._mcctrl.setBishaAIR();
            return;
        }// end function

        frame88()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame93()
        {
            this.mc.parent._mcctrl.move(0, -1);
            return;
        }// end function

        frame94()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame97()
        {
            this.mc.parent._mcctrl.move(0, -5);
            this.mc.parent._mcctrl.damping(0, 0.5);
            return;
        }// end function

        frame102()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame112()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame119()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame122()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        frame127()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame132()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame134()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame141()
        {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }// end function

        frame146()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame149()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame151()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame157()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        frame163()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame171()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame183()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame189()
        {
            this.mc.parent._FighterCtrler.moveToTarget(100, 0, true);
            return;
        }// end function

        frame190()
        {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }// end function

        frame204()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame214()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame221()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame226()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setJump();
            return;
        }// end function

        frame236()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame249()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame256()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame266()
        {
            this.mc.parent._EffectCtrl.shine(38656);
            return;
        }// end function

        frame272()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame286()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame308()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame332()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setZhao3();
            return;
        }// end function

        frame339()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame355()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame379()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame389()
        {
            this.mc.parent._EffectCtrl.shine(38656);
            return;
        }// end function

        frame395()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame418()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame426()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame445()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame454()
        {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        frame458()
        {
            this.mc.parent._FighterCtrler.setCross(true);
            return;
        }// end function

        frame465()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame476()
        {
            this.mc.parent._EffectCtrl.bisha(false, "小乌1");
            return;
        }// end function

        frame499()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame504()
        {
            this.mc.parent._EffectCtrl.shine(16711680);
            return;
        }// end function

        frame521()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame532()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame536()
        {
            this.mc.parent._EffectCtrl.bisha(false, "小乌1");
            return;
        }// end function

        frame555()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame558()
        {
            this.mc.parent._mcctrl.move(15, -15);
            this.mc.parent._EffectCtrl.shadow(0, 0, 0);
            return;
        }// end function

        frame559()
        {
            this.mc.parent._EffectCtrl.shine(0);
            return;
        }// end function

        frame576()
        {
            this.mc.parent._mcctrl.move(10, -1);
            this.mc.parent._mcctrl.damping(1, 0.05);
            return;
        }// end function

        frame580()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame591()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame606()
        {
            this.mc.parent._EffectCtrl.bisha(false, "小乌1");
            return;
        }// end function

        frame624()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame628()
        {
            this.mc.parent._mcctrl.move(15, 15);
            this.mc.parent._mcctrl.setTouchFloor("空中必杀2", true);
            return;
        }// end function

        frame642()
        {
            this.mc.parent._mcctrl.loop("空中必杀loop");
            this.mc.parent._EffectCtrl.shadow(0, 0, 0);
            return;
        }// end function

        frame643()
        {
            this.mc.parent._EffectCtrl.shadow(0, 0, 0);
            return;
        }// end function

        frame660()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame677()
        {
            this.mc.parent._EffectCtrl.bisha(true, "小乌1");
            return;
        }// end function

        frame754()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame758()
        {
            this.mc.parent._EffectCtrl.shine(0);
            return;
        }// end function

        frame789()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame810()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame885()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame905()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame976()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1040()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1100()
        {
            this.mc.parent._EffectCtrl.startWanKai("一户万解");
            return;
        }// end function

        frame1145()
        {
            this.mc.parent._FighterCtrler.doWanKai();
            return;
        }// end function
    }
}