namespace hero_lufei{
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
               13, this.frame14, 21, this.frame22, 23, this.frame24, 34, this.frame35, 43, this.frame44, 48, this.frame49, 78, this.frame79, 84, this.frame85, 91, this.frame92, 95, this.frame96, 96, this.frame97, 97, this.frame98, 100, this.frame101, 102, this.frame103, 105, this.frame106, 106, this.frame107, 107, this.frame108, 109, this.frame110, 112, this.frame113, 122, this.frame123, 125, this.frame126, 131, this.frame132, 138, this.frame139, 154, this.frame155, 162, this.frame163, 163, this.frame164, 164, this.frame165, 
               165, this.frame166, 171, this.frame172, 
               201, this.frame202, 209, this.frame210, 213, this.frame214, 215, this.frame216, 220, this.frame221, 227, this.frame228, 234, this.frame235, 235, this.frame236, 242, this.frame243, 245, this.frame246, 249, this.frame250, 256, this.frame257, 264, this.frame265, 275, this.frame276, 278, this.frame279, 283, this.frame284, 286, this.frame287, 293, this.frame294, 296, this.frame297, 302, this.frame303, 303, this.frame304, 306, this.frame307, 320, this.frame321, 360, this.frame361, 371, this.frame372, 380, this.frame381, 381, this.frame382, 407, this.frame408, 417, this.frame418, 451, this.frame452, 463, this.frame464, 464, this.frame465, 467, this.frame468, 468, this.frame469, 480, this.frame481, 484, this.frame485, 509, this.frame510, 510, this.frame511, 514, this.frame515, 523, this.frame524, 541, this.frame542, 546, this.frame547, 551, this.frame552, 566, this.frame567, 574, this.frame575, 591, this.frame592, 594, this.frame595, 611, this.frame612, 613, this.frame614, 614, this.frame615, 622, this.frame623, 627, this.frame628, 631, this.frame632, 641, this.frame642, 660, this.frame661, 671, this.frame672, 676, this.frame677, 681, this.frame682, 684, this.frame685, 691, this.frame692, 706, this.frame707, 709, this.frame710, 746, this.frame747, 747, this.frame748, 770, this.frame771, 779, this.frame780, 785, this.frame786, 820, this.frame821, 821, this.frame822, 825, this.frame826, 844, this.frame845, 847, this.frame848, 943, this.frame944, 948, this.frame949, 968, this.frame969, 1041, this.frame1042, 1082, this.frame1083, 1110, this.frame1111, 1120, this.frame1121, 1183, this.frame1184, 1274, this.frame1275, 1275, this.frame1276, 1283, this.frame1284, 1316, this.frame1317, 1317, this.frame1318, 1319, this.frame1320, 1323, this.frame1324, 1328, this.frame1329, 1346, this.frame1347
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

        frame24()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        frame35()
        {
            this.mc.parent._mcctrl.dash(2.5);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            //hp = hp + 350;
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }// end function

        frame44()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        frame49()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame79()
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
            this.mc.parent._mcctrl.setBishaAIR("空中必杀");
            this.mc.parent._mcctrl.setAttack("跳砍2");
            this.mc.parent._mcctrl.setZhao1("跳招");
            return;
        }// end function

        frame96()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame97()
        {
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }// end function

        frame98()
        {
            this.mc.parent._mcctrl.movePercent(1, -1);
            return;
        }// end function

        frame101()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame103()
        {
            this.mc.parent._mcctrl.setHitTarget("tk1atm", "跳砍22");
            return;
        }// end function

        frame106()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame107()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._EffectCtrl.shadow(0, 0, 255);
            return;
        }// end function

        frame108()
        {
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }// end function

        frame110()
        {
            return;
        }// end function

        frame113()
        {
            this.mc.parent._mcctrl.setAttack("跳砍3");
            this.mc.parent._mcctrl.setZhao1("跳招");
            this.mc.parent._mcctrl.isApplyG(false);
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame123()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame126()
        {
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }// end function

        frame132()
        {
            this.mc.parent._mcctrl.movePercent(1, -1);
            return;
        }// end function

        frame139()
        {
            this.mc.parent._mcctrl.idle();
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame155()
        {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._EffectCtrl.shadow(0, 0, 255);
            this.mc.parent._mcctrl.movePercent(0, -0.5);
            return;
        }// end function

        frame163()
        {
            return;
        }// end function

        frame164()
        {
            this.mc.parent._EffectCtrl.endShadow();
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._mcctrl.gotoAndPlay("跳招2");
            return;
        }// end function

        frame165()
        {
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }// end function

        frame166()
        {
            this.mc.parent._mcctrl.movePercent(0, 0.25);
            return;
        }// end function
        frame172()
        {
            this.mc.parent._mcctrl.gotoAndPlay("跳招3");
            return;
        }// end function

        frame202()
        {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame210()
        {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }// end function

        frame214()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame216()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1("招12");
            return;
        }// end function

        frame221()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame228()
        {
            this.mc.parent._mcctrl.movePercent(0.3, 0);
            return;
        }// end function

        frame235()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame236()
        {
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setSkill1("砍技14");
            this.mc.parent._mcctrl.setZhao1("招12");
            return;
        }// end function

        frame243()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame246()
        {
            this.mc.parent._mcctrl.movePercent(3, 0);
            return;
        }// end function

        frame250()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame257()
        {
            this.mc.parent._mcctrl.setAttack("砍4");
            this.mc.parent._mcctrl.setZhao1("招12");
            this.mc.parent._mcctrl.setSkill2("砍技22");
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaSUPER();
            return;
        }// end function

        frame265()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame276()
        {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }// end function

        frame279()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame284()
        {
            this.mc.parent._mcctrl.setBishaUP();
            return;
        }// end function

        frame287()
        {
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao1("招12");
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame294()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame297()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame303()
        {
            this.mc.parent._mcctrl.setSkill1("砍技12");
            return;
        }// end function

        frame304()
        {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._mcctrl.gotoAndPlay("砍技14");
            return;
        }// end function

        frame307()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame321()
        {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }// end function

        frame361()
        {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame372()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame381()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame382()
        {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }// end function

        frame408()
        {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill2("砍技22");
            this.mc.parent._mcctrl.setZhao1("招12");
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame418()
        {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame452()
        {
            return;
        }// end function

        frame464()
        {
            this.mc.parent._FighterCtrler.moveToTarget(18, 0, true);
            this.mc.parent._mcctrl.gotoAndPlay("砍技22");
            return;
        }// end function

        frame465()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._EffectCtrl.shadow(0, 0, 255);
            return;
        }// end function

        frame468()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame469()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame481()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame485()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame510()
        {
            this.mc.parent._mcctrl.movePercent(-1, 0);
            this.mc.parent._EffectCtrl.shadow(0, 0, 255);
            return;
        }// end function

        frame511()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame515()
        {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.endShadow();
            this.mc.parent._mcctrl.gotoAndPlay("招12");
            return;
        }// end function

        frame524()
        {
            let shuilong_mc = this.mc.parent._mcctrl.addAttacker("zh1", { x: { moveToTarget: false, offset: 0 }, y: { moveToTarget: false, offset: 0 }, applyG: false });
            if (!shuilong_mc) {
                 return;
            }
            let shuilong = new Timeline_16(this.mc.parent._mcctrl.getAttacker("zh1", shuilong_mc.hashCode))
            return;
        }// end function

        frame542()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame547()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame552()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame567()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }// end function

        frame575()
        {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame592()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame595()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame612()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame614()
        {
            this.mc.parent._mcctrl.movePercent(0.5, -1);
            return;
        }// end function

        frame615()
        {
            this.mc.parent._mcctrl.movePercent(1, -0.8);
            this.mc.parent._EffectCtrl.shadow(0, 0, 255);
            return;
        }// end function

        frame623()
        {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.endShadow();
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }// end function

        frame628()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame632()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame642()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame661()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame672()
        {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        frame677()
        {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._FighterCtrler.setCross(true);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }// end function

        frame682()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame685()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame692()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame707()
        {
            return;
        }// end function

        frame710()
        {
            this.mc.parent._EffectCtrl.bisha(false, "路飞1");
            return;
        }// end function

        frame747()
        {
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }// end function

        frame748()
        {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._FighterCtrler.moveToTarget(0, -85, true);
            return;
        }// end function

        frame771()
        {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }// end function

        frame780()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame786()
        {
            this.mc.parent._EffectCtrl.bisha(false, "路飞2");
            return;
        }// end function

        frame821()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame822()
        {
            this.mc.parent._mcctrl.movePercent(3, 0);
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }// end function

        frame826()
        {
            this.mc.parent._mcctrl.stopMove();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame845()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame848()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame944()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }// end function

        frame949()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame969()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1042()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1083()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1111()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1121()
        {
            this.mc.parent._EffectCtrl.bisha(false, "路飞3");
            return;
        }// end function

        frame1184()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame1275()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame1276()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1284()
        {
            this.mc.parent._EffectCtrl.bisha(false, "路飞3");
            return;
        }// end function

        frame1317()
        {
            this.mc.parent._mcctrl.isApplyG(false);
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame1318()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }// end function

        frame1320()
        {
            this.mc.parent._EffectCtrl.shadow(255, 0, 0);
            return;
        }// end function

        frame1324()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame1329()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame1347()
        {
            this.mc.parent._mcctrl.idle();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function
    }
}
