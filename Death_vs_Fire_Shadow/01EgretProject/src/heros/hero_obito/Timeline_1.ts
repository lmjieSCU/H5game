/*
*主骨骼动画形态1对应的帧事件
*/
namespace hero_obito {
    export class Timeline_1 {

        public mc: any;                     //zmovie.ZMovieClip

        constructor(_mc: zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [
                12, this.frame13, 21, this.frame22, 29, this.frame30, 37, this.frame38, 40, this.frame41, 44, this.frame45, 52, this.frame53, 80, this.frame81, 103, this.frame104, 104, this.frame105,  113, this.frame114, 124, this.frame125, 133, this.frame134, 139, this.frame140, 144, this.frame145, 147, this.frame148, 160, this.frame161, 165, this.frame166, 170, this.frame171, 174, this.frame175, 182, this.frame183, 186, this.frame187, 191, this.frame192, 195, this.frame196, 201, this.frame202, 206, this.frame207, 210, this.frame211, 216, this.frame217, 220, this.frame221, 227, this.frame228, 231, this.frame232, 232, this.frame233, 238, this.frame239, 248, this.frame249, 251, this.frame252, 253, this.frame254, 266, this.frame267, 272, this.frame273, 282, this.frame283, 284, this.frame285, 290, this.frame291, 296, this.frame297, 310, this.frame311, 335, this.frame336, 348, this.frame349, 367, this.frame368, 373, this.frame374, 381, this.frame382, 382, this.frame383, 400, this.frame401, 401, this.frame402, 414, this.frame415, 420, this.frame421, 432, this.frame433, 440, this.frame441, 441, this.frame442, 446, this.frame447, 453, this.frame454, 459, this.frame460, 460, this.frame461, 464, this.frame465, 481, this.frame482, 491, this.frame492, 500, this.frame501, 515, this.frame516, 579, this.frame580, 594, this.frame595, 600, this.frame601, 617, this.frame618, 619, this.frame620, 668, this.frame669, 677, this.frame678, 685, this.frame686, 743, this.frame744, 759, this.frame760, 772, this.frame773, 886, this.frame887, 887, this.frame888, 958, this.frame959, 971, this.frame972, 1072, this.frame1073, 1094, this.frame1095, 1116, this.frame1117, 1163, this.frame1164, 1221, this.frame1222, 1266, this.frame1267, 1285, this.frame1286, 1289, this.frame1290
                ]);
        }

        frame13()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame22()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame30()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        frame38()
        {
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame41()
        {
            this.mc.parent._mcctrl.movePercent(4.5, 0);
            return;
        }// end function

        frame45()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame53()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame81()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame104()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function
        frame105()
        {
            this.mc.parent._mcctrl.gotoAndPlay("招1");
            return;
        }// end function

        frame114()
        {
            this.mc.parent._FighterCtrler.moveToTarget(40, 0, true);
            return;
        }// end function

        frame125()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame134()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame140()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            return;
        }// end function

        frame145()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame148()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame161()
        {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setSkill2("砍技21");
            return;
        }// end function

        frame166()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame171()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame175()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame183()
        {
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao2();
            return;
        }// end function

        frame187()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame192()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame196()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame202()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setAttack("砍5");
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        frame207()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame211()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame217()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame221()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame228()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame232()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.shadow(-100, -100, -100);
            return;
        }// end function

        frame233()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame239()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame249()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame252()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame254()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame267()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame273()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame283()
        {
            this.mc.parent._mcctrl.justHitToPlay("zh3", "招32", false, false);
            return;
        }// end function

        frame285()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame291()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame297()
        {
            if (this.mc.parent._FighterCtrler.target)
            {
                this.mc.parent._FighterCtrler.target.visible = false;
            }
            return;
        }// end function

        frame311()
        {
            let shuilong_mc = this.mc.parent._mcctrl.addAttacker("zh3mc", { applyG: false });
            if (!shuilong_mc) {
                 return;
            }
            let shuilong = new Timeline_6(this.mc.parent._mcctrl.getAttacker("zh3mc", shuilong_mc.hashCode))
            return;
        }// end function

        frame336()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame349()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame368()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame374()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame382()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame383()
        {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.setHitTarget("kj20atm", "砍技21");
            this.mc.parent._EffectCtrl.shadow(-100, -100, -100);
            return;
        }// end function

        frame401()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame402()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame415()
        {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        frame421()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame433()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame441()
        {
            this.mc.parent._mcctrl.moveTarget({followmc:"move_mc"});
            return;
        }// end function

        frame442()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame447()
        {
            this.mc.parent._mcctrl.moveTarget(null);
            return;
        }// end function

        frame454()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame460()
        {
            this.mc.parent._mcctrl.moveTarget({followmc:"move_mc"});
            return;
        }// end function

        frame461()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame465()
        {
            this.mc.parent._mcctrl.moveTarget(null);
            return;
        }// end function

        frame482()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame492()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame501()
        {
            this.mc.parent._EffectCtrl.bisha(false, "带土1");
            return;
        }// end function

        frame516()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame580()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame595()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame601()
        {
            this.mc.parent._EffectCtrl.bisha(false, "带土1");
            return;
        }// end function

        frame618()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame620()
        {
            this.mc.parent._mcctrl.setHitTarget("sbs0ckm", "上必杀2");
            this.mc.parent._mcctrl.moveTarget({followmc:"move_mc", speed:8});
            return;
        }// end function

        frame669()
        {
            this.mc.parent._mcctrl.moveTarget(null);
            this.mc.parent._mcctrl.moveTarget(null);
            return;
        }// end function

        frame678()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame686()
        {
            if (this.mc.parent._FighterCtrler.target)
            {
                this.mc.parent._FighterCtrler.target.visible = false;
            }
            return;
        }// end function

        frame744()
        {
            if (this.mc.parent._FighterCtrler.target)
            {
                this.mc.parent._FighterCtrler.target.visible = true;
            }
            return;
        }// end function

        frame760()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame773()
        {
            this.mc.parent._EffectCtrl.bisha(true, "带土2");
            return;
        }// end function

        frame887()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame888()
        {
            this.mc.parent._mcctrl.move(-10, 0);
            this.mc.parent._mcctrl.damping(2, 0);
            return;
        }// end function

        frame959()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame972()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1073()
        {
            //if (sw == true)   yx modify
            {
                this.mc.parent._mcctrl.stop();
            }
            return;
        }// end function

        frame1095()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1117()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1164()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1222()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1267()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1286()
        {
            this.mc.parent._EffectCtrl.startWanKai();
            return;
        }// end function

        frame1290()
        {
            this.mc.parent._FighterCtrler.doWanKai();
            return;
        }// end function

    }
}