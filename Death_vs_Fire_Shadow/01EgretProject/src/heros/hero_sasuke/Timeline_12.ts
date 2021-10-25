/*
*主骨骼动画形态2对应的帧事件
*/
namespace hero_sasuke {
    export class Timeline_12 {

        public mc: any;                     //zmovie.ZMovieClip

        constructor(_mc: zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [
               15, this.frame16, 21, this.frame22, 24, this.frame25, 29, this.frame30, 56, this.frame57, 74, this.frame75, 79, this.frame80, 83, this.frame84, 100, this.frame101, 109, this.frame110, 120, this.frame121, 133, this.frame134, 138, this.frame139, 143, this.frame144, 149, this.frame150, 159, this.frame160, 166, this.frame167, 171, this.frame172, 180, this.frame181, 192, this.frame193, 200, this.frame201, 207, this.frame208, 212, this.frame213, 220, this.frame221, 229, this.frame230, 238, this.frame239, 248, this.frame249, 252, this.frame253, 255, this.frame256, 265, this.frame266, 270, this.frame271, 276, this.frame277, 278, this.frame279, 281, this.frame282, 285, this.frame286, 296, this.frame297, 304, this.frame305, 314, this.frame315, 315, this.frame316, 326, this.frame327, 342, this.frame343, 356, this.frame357, 371, this.frame372, 374, this.frame375, 383, this.frame384, 392, this.frame393, 424, this.frame425, 429, this.frame430, 438, this.frame439, 447, this.frame448, 470, this.frame471, 493, this.frame494, 517, this.frame518, 542, this.frame543, 546, this.frame547, 553, this.frame554, 585, this.frame586, 588, this.frame589, 591, this.frame592, 604, this.frame605, 616, this.frame617, 629, this.frame630, 630, this.frame631, 632, this.frame633, 664, this.frame665, 677, this.frame678, 693, this.frame694, 724, this.frame725, 728, this.frame729, 734, this.frame735, 745, this.frame746, 759, this.frame760, 860, this.frame861, 883, this.frame884, 886, this.frame887, 903, this.frame904, 905, this.frame906, 921, this.frame922, 937, this.frame938, 978, this.frame979, 1006, this.frame1007
            ]);
            return;
        }
        frame16()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        frame22()
        {
            this.mc.parent._mcctrl.movePercent(8, 0);
            return;
        }// end function

        frame25()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame30()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame57()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame75()
        {
            this.mc.parent._mcctrl.fire("tkatm", {x:{start:15, add:-0.5, hit:8}, y:{start:10, add:-0.3, hit:6}, hold:3, hits:3, hp:200});
            return;
        }// end function

        frame80()
        {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }// end function

        frame84()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame101()
        {
            this.mc.parent._mcctrl.movePercent(-0.5, -0.5);
            this.mc.parent._EffectCtrl.shine(16724480);
            return;
        }// end function

        frame110()
        {
            this.mc.parent._mcctrl.dampingPercent(0.04, 0.04);
            return;
        }// end function

        frame121()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame134()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        frame139()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setBisha();
            return;
        }// end function

        frame144()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame150()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        frame160()
        {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        frame167()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame172()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame181()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        frame193()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setJump();
            return;
        }// end function

        frame201()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame208()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame213()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame221()
        {
            this.mc.parent._EffectCtrl.shine(9720574);
            return;
        }// end function

        frame230()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        frame239()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame249()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame253()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame256()
        {
            this.mc.parent._mcctrl.move(-6, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame266()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setAttack("砍1");
            return;
        }// end function

        frame271()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame277()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame279()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame282()
        {
            this.mc.parent._mcctrl.move(-6, 0);
            this.mc.parent._mcctrl.damping(1, 0);
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame286()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setAttack("砍1");
            return;
        }// end function

        frame297()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame305()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame315()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame316()
        {
            this.mc.parent._mcctrl.fire("zh1atm", {x:{start:20, add:-0.5, hit:8, min:8}, y:0, hold:3, hits:4, hp:200});
            return;
        }// end function

        frame327()
        {
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setBisha();
            return;
        }// end function

        frame343()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame357()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame372()
        {
            this.mc.parent._EffectCtrl.shine(9720574);
            return;
        }// end function

        frame375()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setAttack("砍1");
            return;
        }// end function

        frame384()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame393()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame425()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame430()
        {
            this.mc.parent._mcctrl.addAttacker("zz1", {x:{moveToTarget:true, offset:0}, y:{moveToTarget:false, offset:0}, applyG:false});
            return;
        }// end function

        frame439()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setJump();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setBisha();
            return;
        }// end function

        frame448()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame471()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame494()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame518()
        {
            this.mc.parent._EffectCtrl.bisha(false, "佐助3");
            return;
        }// end function

        frame543()
        {
            this.mc.parent._FighterCtrler.moveToTarget(-150, 0, true);
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }// end function

        frame547()
        {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }// end function

        frame554()
        {
            this.mc.parent._EffectCtrl.shine(118);
            return;
        }// end function

        frame586()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame589()
        {
            this.mc.parent._mcctrl.isApplyG(true);
            return;
        }// end function

        frame592()
        {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame605()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame617()
        {
            this.mc.parent._EffectCtrl.bisha(false, "佐助3");
            return;
        }// end function

        frame630()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame631()
        {
            this.mc.parent._mcctrl.movePercent(-1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame633()
        {
            this.mc.parent._EffectCtrl.shine(16724480);
            return;
        }// end function

        frame665()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame678()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame694()
        {
            this.mc.parent._EffectCtrl.bisha(true, "佐助3");
            return;
        }// end function

        frame725()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame729()
        {
            this.mc.parent._mcctrl.addAttacker("zz1", {x:{moveToTarget:true, offset:0}, y:{moveToTarget:false, offset:0}, applyG:false});
            return;
        }// end function

        frame735()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame746()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame760()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame861()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame884()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame887()
        {
            this.mc.parent._mcctrl.ClearState();
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }// end function

        frame904()
        {
            this.mc.parent._EffectCtrl.endShake();
            return;
        }// end function

        frame906()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame922()
        {
            this.mc.parent._EffectCtrl.endWanKai();
            return;
        }// end function

        frame938()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame979()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1007()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

    }
}
