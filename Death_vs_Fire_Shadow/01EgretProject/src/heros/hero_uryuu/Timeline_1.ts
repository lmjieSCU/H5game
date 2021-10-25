namespace hero_uryuu{
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
            15, this.frame16, 24, this.frame25, 26, this.frame27, 30, this.frame31, 37, this.frame38, 42, this.frame43, 70, this.frame71, 80, this.frame81, 85, this.frame86, 90, this.frame91, 95, this.frame96, 97, this.frame98, 103, this.frame104, 108, this.frame109, 109, this.frame110, 118, this.frame119, 132, this.frame133, 148, this.frame149, 154, this.frame155, 160, this.frame161, 166, this.frame167, 170, this.frame171, 179, this.frame180, 184, this.frame185, 192, this.frame193, 203, this.frame204, 213, this.frame214, 216, this.frame217, 222, this.frame223, 229, this.frame230, 241, this.frame242, 251, this.frame252, 253, this.frame254, 255, this.frame256, 263, this.frame264, 285, this.frame286, 292, this.frame293, 302, this.frame303, 310, this.frame311, 326, this.frame327, 328, this.frame329, 335, this.frame336, 340, this.frame341, 348, this.frame349, 361, this.frame362, 363, this.frame364, 370, this.frame371, 378, this.frame379, 384, this.frame385, 400, this.frame401, 433, this.frame434, 443, this.frame444, 451, this.frame452, 463, this.frame464, 474, this.frame475, 510, this.frame511, 525, this.frame526, 549, this.frame550, 550, this.frame551, 569, this.frame570, 577, this.frame578, 606, this.frame607, 610, this.frame611, 621, this.frame622, 629, this.frame630, 630, this.frame631, 643, this.frame644, 664, this.frame665, 699, this.frame700, 752, this.frame753, 765, this.frame766, 800, this.frame801, 859, this.frame860, 926, this.frame927, 944, this.frame945, 1035, this.frame1036, 1059, this.frame1060, 1138, this.frame1139, 1175, this.frame1176, 1198, this.frame1199
            ]);
            return;
        }// end 
        frame16()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame25()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame27()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        frame31()
        {
            this.mc.parent._mcctrl.dash(3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(0, 150, 255);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame38()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        frame43()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame71()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame81()
        {
            this.mc.parent._mcctrl.move(0, -2);
            this.mc.parent._mcctrl.damping(0, 0.1);
            return;
        }// end function

        frame86()
        {
            this.mc.parent._mcctrl.fire("tkatm", {x:15, y:13, hold:0.5, hits:1});
            return;
        }// end function

        frame91()
        {
            this.mc.parent._mcctrl.fire("tkatm", {x:15, y:13, hold:0.5, hits:1});
            return;
        }// end function

        frame96()
        {
            this.mc.parent._mcctrl.fire("tkatm", {x:15, y:13, hold:0.5, hits:1});
            return;
        }// end function

        frame98()
        {
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            this.mc.parent._mcctrl.setBishaAIR();
            return;
        }// end function

        frame104()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame109()
        {
            this.mc.parent._mcctrl.move(0, -2);
            this.mc.parent._mcctrl.damping(0, 0.1);
            return;
        }// end function

        frame110()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame119()
        {
            this.mc.parent._mcctrl.move(-2, -2);
            this.mc.parent._mcctrl.damping(0.1, 0.1);
            this.mc.parent._mcctrl.fire("tzatm", {x:20, y:10, hold:1, hits:1});
            return;
        }// end function

        frame133()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame149()
        {
            this.mc.parent._mcctrl.fire("k1atm", {x:15, y:0, hold:0.3, hits:1, hp:50});
            return;
        }// end function

        frame155()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setBisha();
            return;
        }// end function

        frame161()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame167()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame171()
        {
            this.mc.parent._mcctrl.move(15, 0);
            this.mc.parent._mcctrl.damping(1.5, 0);
            return;
        }// end function

        frame180()
        {
            this.mc.parent._mcctrl.fire("k2atm", {x:15, y:0, hold:0.5, hits:1});
            return;
        }// end function

        frame185()
        {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setBisha();
            return;
        }// end function

        frame193()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame204()
        {
            this.mc.parent._mcctrl.move(-5, -8);
            this.mc.parent._mcctrl.damping(0.2, 0.5);
            return;
        }// end function

        frame214()
        {
            this.mc.parent._mcctrl.setTouchFloor("砍32", true);
            this.mc.parent._mcctrl.fire("k3atm", {x:15, y:5, hold:0.5, hits:1, hp:50});
            this.mc.parent._mcctrl.fire("k31atm", {x:18, y:2, hold:0.5, hits:1, hp:50});
            this.mc.parent._mcctrl.fire("k32atm", {x:12, y:8, hold:0.5, hits:1, hp:50});
            return;
        }// end function

        frame217()
        {
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            this.mc.parent._mcctrl.setBishaAIR();
            return;
        }// end function

        frame223()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame230()
        {
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setBishaSUPER();
            return;
        }// end function

        frame242()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame252()
        {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            this.mc.parent._EffectCtrl.shadow(0, 150, 255);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame254()
        {
            this.mc.parent._FighterCtrler.moveToTarget(100, -40, true);
            return;
        }// end function

        frame256()
        {
            this.mc.parent._mcctrl.move(-5, -1);
            return;
        }// end function

        frame264()
        {
            this.mc.parent._mcctrl.move(-10, -5);
            this.mc.parent._mcctrl.damping(0.2, 0.2);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame286()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame293()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame303()
        {
            this.mc.parent._EffectCtrl.shine(11382189);
            return;
        }// end function

        frame311()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame327()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame329()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame336()
        {
            this.mc.parent._mcctrl.fire("zh1atm", {x:30, y:0, hold:1, hits:1});
            return;
        }// end function

        frame341()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame349()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame362()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame364()
        {
            this.mc.parent._mcctrl.movePercent(1, -1.5);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame371()
        {
            this.mc.parent._mcctrl.setAttackAIR();
            this.mc.parent._mcctrl.setSkillAIR();
            this.mc.parent._mcctrl.setBishaAIR();
            this.mc.parent._mcctrl.dampingPercent(0.1, 0.1);
            return;
        }// end function

        frame379()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame385()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame401()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame434()
        {
            let shuilong_mc = this.mc.parent._mcctrl.addAttacker("jian", { x: { moveToTarget: true, offset: 0 }, y: { moveToTarget: true, offset: -500 }, applyG: true });
            if (!shuilong_mc) {
                 return;
            }
            let shuilong = new Timeline_13(this.mc.parent._mcctrl.getAttacker("jian", shuilong_mc.hashCode))
            return;
        }// end function

        frame444()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame452()
        {
            this.mc.parent._mcctrl.addQi(15);
            return;
        }// end function

        frame464()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame475()
        {
            this.mc.parent._mcctrl.addQi(15);
            return;
        }// end function

        frame511()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame526()
        {
            this.mc.parent._EffectCtrl.bisha(false, "石田1");
            return;
        }// end function

        frame550()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame551()
        {
            this.mc.parent._mcctrl.move(-15, 0);
            this.mc.parent._mcctrl.damping(2, 0);
            return;
        }// end function

        frame570()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame578()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame607()
        {
            this.mc.parent._FighterCtrler.moveToTarget(0, -200, true);
            return;
        }// end function

        frame611()
        {
            this.mc.parent._EffectCtrl.bisha(false, "石田2");
            return;
        }// end function

        frame622()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame630()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame631()
        {
            this.mc.parent._mcctrl.move(0, -15);
            this.mc.parent._mcctrl.damping(0, 0.5);
            return;
        }// end function

        frame644()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame665()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame700()
        {
            this.mc.parent._EffectCtrl.bisha(true, "石田2");
            return;
        }// end function

        frame753()
        {
            this.mc.parent._FighterCtrler.moveToTarget(0, 0, false);
            return;
        }// end function

        frame766()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame801()
        {
            this.mc.parent._EffectCtrl.bisha(false, "石田3");
            return;
        }// end function

        frame860()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame927()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame945()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1036()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1060()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1139()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1176()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1199()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function
    }
}
