namespace hero_toushirou {
    export class Timeline_8 {

        public mc: any;                     //zmovie.ZMovieClip

       constructor(_mc: zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [11, this.frame12, 14, this.frame15, 20, this.frame21, 26, this.frame27, 29, this.frame30, 59, this.frame60, 76, this.frame77, 81, this.frame82, 85, this.frame86, 90, this.frame91, 94, this.frame95, 95, this.frame96, 102, this.frame103, 128, this.frame129, 151, this.frame152, 157, this.frame158, 162, this.frame163, 166, this.frame167, 169, this.frame170, 174, this.frame175, 177, this.frame178, 183, this.frame184, 187, this.frame188, 189, this.frame190, 195, this.frame196, 198, this.frame199, 205, this.frame206, 212, this.frame213, 215, this.frame216, 231, this.frame232, 238, this.frame239, 239, this.frame240, 253, this.frame254, 257, this.frame258, 264, this.frame265, 279, this.frame280, 288, this.frame289, 296, this.frame297, 302, this.frame303, 306, this.frame307, 314, this.frame315, 327, this.frame328, 341, this.frame342, 344, this.frame345, 346, this.frame347, 350, this.frame351, 355, this.frame356, 356, this.frame357, 365, this.frame366, 383, this.frame384, 413, this.frame414, 430, this.frame431, 445, this.frame446, 448, this.frame449, 456, this.frame457, 462, this.frame463, 470, this.frame471, 479, this.frame480, 490, this.frame491, 499, this.frame500, 518, this.frame519, 529, this.frame530, 533, this.frame534, 552, this.frame553, 553, this.frame554, 582, this.frame583, 593, this.frame594, 605, this.frame606, 606, this.frame607, 611, this.frame612, 637, this.frame638, 646, this.frame647, 661, this.frame662, 663, this.frame664, 666, this.frame667, 697, this.frame698, 712, this.frame713, 714, this.frame715, 751, this.frame752, 757, this.frame758, 803, this.frame804, 804, this.frame805, 806, this.frame807, 857, this.frame858, 866, this.frame867, 886, this.frame887, 889, this.frame890, 931, this.frame932, 936, this.frame937, 964, this.frame965, 993, this.frame994, 1091, this.frame1092, 1111, this.frame1112, 1119, this.frame1120, 1167, this.frame1168, 1186, this.frame1187, 1229, this.frame1230, 1255, this.frame1256]);
            return;
        }// end 

         frame12()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end 

         frame15()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end 

         frame21()
        {
            this.mc.parent._mcctrl.dash(3.2);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end 

         frame27()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end 

         frame30()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame60()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame77()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end 

         frame82()
        {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }// end 

         frame86()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame91()
        {
            this.mc.parent._mcctrl.move(0, -1);
            return;
        }// end 

         frame95()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end 

         frame96()
        {
            this.mc.parent._mcctrl.movePercent(0, 3);
            this.mc.parent._mcctrl.setTouchFloor("跳招2", true);
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            return;
        }// end 

         frame103()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end 

         frame129()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame152()
        {
            this.mc.parent._mcctrl.move(5, 0);
            this.mc.parent._mcctrl.damping(0.3, 0);
            return;
        }// end 

         frame158()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end 

         frame163()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame167()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame170()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }// end 

         frame175()
        {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end 

         frame178()
        {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }// end 

         frame184()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame188()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame190()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }// end 

         frame196()
        {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end 

         frame199()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end 

         frame206()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame213()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame216()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end 

         frame232()
        {
            this.mc.parent._mcctrl.setHitTarget("kj10atm", "砍技12");
            this.mc.parent._mcctrl.move(20, 0);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end 

         frame239()
        {
            this.mc.parent._mcctrl.damping(4, 0);
            return;
        }// end 

         frame240()
        {
            this.mc.parent._EffectCtrl.shine(10125310);
            return;
        }// end 

         frame254()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame258()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame265()
        {
            this.mc.parent._mcctrl.addQi(10);
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end 

         frame280()
        {
            this.mc.parent._mcctrl.setSkill2("砍技21");
            this.mc.parent._mcctrl.setBishaUP();
            return;
        }// end 

         frame289()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame297()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame303()
        {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.move(15, -20);
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            return;
        }// end 

         frame307()
        {
            this.mc.parent._mcctrl.damping(1, 1);
            return;
        }// end 

         frame315()
        {
            this.mc.parent._mcctrl.endAct();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end 

         frame328()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame342()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end 

         frame345()
        {
            this.mc.parent._mcctrl.movePercent(3, 0);
            this.mc.parent._FighterCtrler.setCross(true);
            this.mc.parent._EffectCtrl.shine(11593976);
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            return;
        }// end 

         frame347()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            return;
        }// end 

         frame351()
        {
            this.mc.parent._mcctrl.dampingPercent(0.6, 0);
            this.mc.parent._FighterCtrler.setCross(false);
            return;
        }// end 

         frame356()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end 

         frame357()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame366()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame384()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end 

         frame414()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame431()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame446()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end 

         frame449()
        {
            this.mc.parent._mcctrl.move(10, -18);
            this.mc.parent._FighterCtrler.setCross(true);
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            return;
        }// end 

         frame457()
        {
            this.mc.parent._mcctrl.damping(1.3, 1.8);
            this.mc.parent._FighterCtrler.setCross(false);
            return;
        }// end 

         frame463()
        {
            this.mc.parent._mcctrl.setBishaAIR();
            this.mc.parent._mcctrl.setSkillAIR();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end 

         frame471()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame480()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end 

         frame491()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame500()
        {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end 

         frame519()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 
        frame530()
        {
            this.mc.parent._mcctrl.gotoAndPlay("空中必杀");
            return;
        }// end 

         frame534()
        {
            this.mc.parent._EffectCtrl.bisha(false, "日番谷2");
            return;
        }// end 

         frame553()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end 

         frame554()
        {
            this.mc.parent._mcctrl.setHitTarget("bs0atm", "必杀1");
            this.mc.parent._mcctrl.move(35, 0);
            this.mc.parent._EffectCtrl.dash();
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            return;
        }// end 

         frame583()
        {
            this.mc.parent._mcctrl.damping(8, 0);
            return;
        }// end 

         frame594()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame606()
        {
            this.mc.parent._mcctrl.damping(10, 0);
            return;
        }// end 

         frame607()
        {
            this.mc.parent._EffectCtrl.shine(6867176);
            return;
        }// end 

         frame612()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame638()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame647()
        {
            this.mc.parent._EffectCtrl.bisha(false, "日番谷3");
            return;
        }// end 

         frame662()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end 

         frame664()
        {
            this.mc.parent._mcctrl.move(50, -50);
            this.mc.parent._EffectCtrl.shine(6867176);
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }// end 

         frame667()
        {
            this.mc.parent._mcctrl.move(5, -5);
            this.mc.parent._mcctrl.damping(0.12, 0.12);
            return;
        }// end 

         frame698()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame713()
        {
            this.mc.parent._EffectCtrl.shine(6867176);
            this.mc.parent._EffectCtrl.bisha(true, "日番谷3");
            return;
        }// end 

         frame715()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end 

         frame752()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end 

         frame758()
        {
            let shuilong_mc = this.mc.parent._mcctrl.addAttacker("cbsmc", {x:{moveToTarget:true, offset:0, range:[0, 500]}, y:{moveToTarget:true, offset:0, range:[-250, 250]}, applyG:false});
            if (!shuilong_mc) {
                return;
            }
            let shuilong = new Timeline_18(this.mc.parent._mcctrl.getAttacker("cbsmc", shuilong_mc.hashCode))
            return;
        }// end 
        frame804()
        {
            this.mc.parent._mcctrl.gotoAndPlay("超必杀2");
        }

         frame805()
        {
            this.mc.parent._EffectCtrl.shine(6867176);
            return;
        }// end 

         frame807()
        {
            this.mc.parent._EffectCtrl.bisha(true, "日番谷3");
            return;
        }// end 

         frame858()
        {
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end 

         frame867()
        {
            this.mc.parent._FighterCtrler.moveToTarget(0, -100, false);
            return;
        }// end 

         frame887()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end 

         frame890()
        {
            this.mc.parent._mcctrl.move(0, 25);
            this.mc.parent._mcctrl.setTouchFloor("超必杀1", true);
            return;
        }// end 

         frame932()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end 

         frame937()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end 

         frame965()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame994()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame1092()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame1112()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame1120()
        {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.endShake();
            //
            this.mc.parent._mcctrl.ClearState();
            return;
        }// end 

         frame1168()
        {
            this.mc.parent._EffectCtrl.endWanKai();
            return;
        }// end 

         frame1187()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame1230()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end 

         frame1256()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end 

    }
}
