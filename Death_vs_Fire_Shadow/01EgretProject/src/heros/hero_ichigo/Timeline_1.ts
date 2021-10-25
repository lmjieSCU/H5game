/*
*主骨骼形态1动画对应的帧事件
*/
namespace hero_ichigo {
    export class Timeline_1 {

        public mc: any;                     //zmovie.ZMovieClip

        constructor(_mc: zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [11, this.frame12, 19, this.frame20, 25, this.frame26, 34, this.frame35, 45, this.frame46, 48, this.frame49, 78, this.frame79, 86, this.frame87, 93, this.frame94, 97, this.frame98, 102, this.frame103, 109, this.frame110, 118, this.frame119, 128, this.frame129, 134, this.frame135, 138, this.frame139, 145, this.frame146, 151, this.frame152, 159, this.frame160, 161, this.frame162, 165, this.frame166, 172, this.frame173, 183, this.frame184, 186, this.frame187, 199, this.frame200, 211, this.frame212, 226, this.frame227, 238, this.frame239, 249, this.frame250, 253, this.frame254, 258, this.frame259, 264, this.frame265, 274, this.frame275, 279, this.frame280, 280, this.frame281, 283, this.frame284, 298, this.frame299, 306, this.frame307, 307, this.frame308, 318, this.frame319, 319, this.frame320, 322, this.frame323, 327, this.frame328, 335, this.frame336, 363, this.frame364, 367, this.frame368, 369, this.frame370, 377, this.frame378, 385, this.frame386, 400, this.frame401, 405, this.frame406, 417, this.frame418, 442, this.frame443, 447, this.frame448, 460, this.frame461, 482, this.frame483, 510, this.frame511, 511, this.frame512, 513, this.frame514, 521, this.frame522, 524, this.frame525, 543, this.frame544, 545, this.frame546, 574, this.frame575, 594, this.frame595, 613, this.frame614, 625, this.frame626, 631, this.frame632, 645, this.frame646, 655, this.frame656, 668, this.frame669, 684, this.frame685, 689, this.frame690, 714, this.frame715, 722, this.frame723, 826, this.frame827, 846, this.frame847, 916, this.frame917, 957, this.frame958, 985, this.frame986, 1000, this.frame1001, 1065, this.frame1066, 1085, this.frame1086]);
        }


        public frame12() {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        public frame20() {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        public frame26() {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        public frame35() {
            this.mc.parent._mcctrl.dash(2.5);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        public frame46() {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        public frame49() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame79() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame87() {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }// end function

        public frame94() {
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            return;
        }// end function

        public frame98() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame103() {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.move(0, -5);
            this.mc.parent._mcctrl.damping(0, 0.5);
            return;
        }// end function

        public frame110() {
            this.mc.parent._mcctrl.fire("tzatm", { x: { start: 5, add: 1, max: 15 }, y: { start: 5, add: 1, max: 15 }, hold: 60, hits: 1 });
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }// end function

        public frame119() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame129() {
            this.mc.parent._mcctrl.movePercent(0.25, 0);
            return;
        }// end function

        public frame135() {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        public frame139() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame146() {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }// end function

        public frame152() {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        public frame160() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame162() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame166() {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        public frame173() {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        public frame184() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame187() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame200() {
            this.mc.parent._EffectCtrl.shake(0, 2);
            return;
        }// end function

        public frame212() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame227() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame239() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame250() {
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }// end function

        public frame254() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame259() {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setJump();
            return;
        }// end function

        public frame265() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame275() {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        public frame280() {
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }// end function

        public frame281() {
            this.mc.parent._mcctrl.fire("zh1atm", { x: { start: 10, add: 1, max: 20 }, y: 0, hold: 60, hits: 1 });
            return;
        }// end function

        public frame284() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame299() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame307() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame308() {
            this.mc.parent._mcctrl.movePercent(1.5);
            this.mc.parent._mcctrl.setHitTarget("zh20atm", "招21");
            this.mc.parent._EffectCtrl.dash();
            this.mc.parent._EffectCtrl.shadow(-200, -200, -200);
            return;
        }// end function

        public frame319() {
            this.mc.parent._mcctrl.gotoAndPlay("招21");
        }

        public frame320() {
            this.mc.parent._mcctrl.dampingPercent(0.6);
            return;
        }// end function

        public frame323() {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        public frame328() {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        public frame336() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame364() {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        public frame368() {
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }// end function

        public frame370() {
            this.mc.parent._mcctrl.fire("zh3atm", { x: { start: 5, add: 1, max: 15 }, y: { start: -2, add: -0.5, max: -15 }, hold: 60, hits: 1 });
            return;
        }// end function

        public frame378() {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._mcctrl.setDash();
            this.mc.parent._mcctrl.setJump();
            return;
        }// end function

        public frame386() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame401() {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        public frame406() {
            this.mc.parent._mcctrl.movePercent(1);
            this.mc.parent._mcctrl.dampingPercent(0.2);
            return;
        }// end function

        public frame418() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame443() {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        public frame448() {
            this.mc.parent._mcctrl.movePercent(1);
            this.mc.parent._mcctrl.dampingPercent(0.2);
            return;
        }// end function

        public frame461() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame483() {
            this.mc.parent._EffectCtrl.bisha(false, "一户1");
            return;
        }// end function

        public frame511() {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame512() {
            this.mc.parent._mcctrl.movePercent(0.5);
            this.mc.parent._mcctrl.dampingPercent(0.05);
            return;
        }// end function

        public frame514() {
            this.mc.parent._mcctrl.fire("bs1atm", { x: { start: 10, add: 1, max: 20 }, y: 0, hold: 60, hits: 1 });
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }// end function

        public frame522() {
            this.mc.parent._mcctrl.movePercent(0.5);
            this.mc.parent._mcctrl.dampingPercent(0.05);
            return;
        }// end function

        public frame525() {
            this.mc.parent._mcctrl.fire("bs1atm", { x: { start: 10, add: 1, max: 20 }, y: 0, hold: 60, hits: 1 });
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }// end function

        public frame544() {
            this.mc.parent._mcctrl.movePercent(0.5);
            this.mc.parent._mcctrl.dampingPercent(0.05);
            return;
        }// end function

        public frame546() {
            this.mc.parent._mcctrl.fire("bsatm", { x: { start: 20, add: 2, max: 30 }, y: 0, hold: 60, hits: 1, hp: 300 });
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }// end function

        public frame575() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame595() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame614() {
            this.mc.parent._EffectCtrl.bisha(false, "一户1");
            return;
        }// end function

        public frame626() {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame632() {
            this.mc.parent._EffectCtrl.shine(9697014);
            return;
        }// end function

        public frame646() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame656() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame669() {
            this.mc.parent._EffectCtrl.bisha(true, "一户2");
            return;
        }// end function

        public frame685() {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        public frame690() {
            this.mc.parent._EffectCtrl.shine(9697014);
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        public frame715() {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        public frame723() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame827() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame847() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame917() {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        public frame958() {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        public frame986() {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        public frame1001() {
            this.mc.parent._EffectCtrl.startWanKai("一户万解");
            return;
        }// end function

        public frame1066() {
            this.mc.parent._EffectCtrl.shine(9697014);
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }// end function

        public frame1086() {
            this.mc.parent._FighterCtrler.doWanKai();
            return;
        }// end function

    }
}

