namespace hero_pain{
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
               11, this.frame12, 15, this.frame16, 18, this.frame19, 26, this.frame27, 33, this.frame34, 38, this.frame39, 69, this.frame70, 79, this.frame80, 88, this.frame89, 98, this.frame99, 106, this.frame107, 114, this.frame115, 129, this.frame130, 157, this.frame158, 163, this.frame164, 169, this.frame170, 172, this.frame173, 181, this.frame182, 192, this.frame193, 198, this.frame199, 204, this.frame205, 216, this.frame217, 231, this.frame232, 237, this.frame238, 240, this.frame241, 255, this.frame256, 257, this.frame258, 267, this.frame268, 278, this.frame279, 303, this.frame304, 307, this.frame308, 309, this.frame310, 316, this.frame317, 320, this.frame321, 323, this.frame324, 336, this.frame337, 339, this.frame340, 341, this.frame342, 355, this.frame356, 380, this.frame381, 381, this.frame382, 409, this.frame410, 416, this.frame417, 422, this.frame423, 442, this.frame443, 450, this.frame451, 468, this.frame469, 476, this.frame477, 508, this.frame509, 532, this.frame533, 559, this.frame560, 560, this.frame561, 564, this.frame565, 610, this.frame611, 617, this.frame618, 631, this.frame632, 641, this.frame642, 665, this.frame666, 680, this.frame681, 717, this.frame718, 721, this.frame722, 757, this.frame758, 758, this.frame759, 766, this.frame767, 773, this.frame774, 798, this.frame799, 825, this.frame826, 888, this.frame889, 915, this.frame916, 927, this.frame928, 931, this.frame932, 940, this.frame941, 962, this.frame963, 979, this.frame980, 1012, this.frame1013, 1013, this.frame1014, 1020, this.frame1021, 1125, this.frame1126, 1134, this.frame1135, 1154, this.frame1155, 1240, this.frame1241, 1264, this.frame1265, 1325, this.frame1326, 1391, this.frame1392, 1419, this.frame1420
            ]);
            return;
        }// end 
       frame12()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame16()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame19()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        frame27()
        {
            this.mc.parent._mcctrl.dash(3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame34()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        frame39()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame70()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame80()
        {
            this.mc.parent._mcctrl.move(4, -1);
            this.mc.parent._mcctrl.damping(0.2, 0.1);
            return;
        }// end function

        frame89()
        {
            this.mc.parent._mcctrl.move(0, -4);
            this.mc.parent._mcctrl.damping(0, 0.2);
            return;
        }// end function

        frame99()
        {
            this.mc.parent._mcctrl.setSkillAIR();
            this.mc.parent._mcctrl.setBishaAIR();
            return;
        }// end function

        frame107()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame115()
        {
            this.mc.parent._mcctrl.move(0, -5);
            this.mc.parent._mcctrl.damping(0, 0.2);
            return;
        }// end function

        frame130()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame158()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame164()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        frame170()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame173()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame182()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame193()
        {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setSkill2();
            return;
        }// end function

        frame199()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame205()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame217()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame232()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setSkill2("砍技21");
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setJump();
            return;
        }// end function

        frame238()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame241()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame256()
        {
            this.mc.parent._mcctrl.movePercent(1.5, -1.5);
            this.mc.parent._mcctrl.dampingPercent(0, 0.1);
            return;
        }// end function

        frame258()
        {
            this.mc.parent._mcctrl.setTouchFloor("砍42", true);
            return;
        }// end function

        frame268()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame279()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame304()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame308()
        {
            this.mc.parent._FighterCtrler.moveToTarget(100, 0, true);
            return;
        }// end function

        frame310()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        frame317()
        {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill2("砍技22");
            this.mc.parent._mcctrl.setAttack("砍技12");
            return;
        }// end function

        frame321()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame324()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame337()
        {
            this.mc.parent._mcctrl.movePercent(4, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            this.mc.parent._FighterCtrler.setCross(true);
            return;
        }// end function

        frame340()
        {
            this.mc.parent._FighterCtrler.setCross(false);
            return;
        }// end function

        frame342()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame356()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame381()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame382()
        {
            let shuilong_mc = this.mc.parent._mcctrl.addAttacker("man1");
            if (!shuilong_mc) {
                 return;
            }
            let shuilong = new Timeline_7(this.mc.parent._mcctrl.getAttacker("man1", shuilong_mc.hashCode))

            return;
        }// end function

        frame410()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setJump();
            return;
        }// end function

        frame417()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame423()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame443()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame451()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame469()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame477()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame509()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame533()
        {
            this.mc.parent._EffectCtrl.bisha(false, "佩恩1");
            return;
        }// end function

        frame560()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame561()
        {
            this.mc.parent._mcctrl.addAttacker("jiachong", {x:{moveToTarget:true, offset:0}});
            return;
        }// end function

        frame565()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame611()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame618()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame632()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame642()
        {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        frame666()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame681()
        {
            this.mc.parent._EffectCtrl.bisha(false, "佩恩1");
            return;
        }// end function

        frame718()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame722()
        {
            this.mc.parent._mcctrl.setHitTarget("bs0atm", "必杀2");
            this.mc.parent._mcctrl.moveTarget({followmc:"move_mc", speed:{x:5}});
            return;
        }// end function

        frame758()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame759()
        {
            this.mc.parent._mcctrl.moveTarget(null);
            return;
        }// end function

        frame767()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame774()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame799()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame826()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame889()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame916()
        {
            this.mc.parent._EffectCtrl.bisha(false, "佩恩1");
            return;
        }// end function

        frame928()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame932()
        {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._mcctrl.move(0, -5);
            this.mc.parent._mcctrl.damping(0, 0.1);
            return;
        }// end function

        frame941()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame963()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame980()
        {
            this.mc.parent._EffectCtrl.bisha(true, "佩恩2");
            return;
        }// end function

        frame1013()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame1014()
        {
            this.mc.parent._EffectCtrl.shine(14917603);
            return;
        }// end function

        frame1021()
        {
            this.mc.parent._mcctrl.moveTarget({followmc:"move_mc", speed:{x:10, y:5}});
            return;
        }// end function

        frame1126()
        {
            this.mc.parent._mcctrl.moveTarget(null);
            return;
        }// end function

        frame1135()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame1155()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1241()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1265()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1326()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1392()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1420()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function
    }
}
