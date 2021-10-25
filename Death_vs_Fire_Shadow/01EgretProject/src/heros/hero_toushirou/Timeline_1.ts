namespace hero_toushirou {
    export class Timeline_1 {

        public mc: any;                     //zmovie.ZMovieClip

       constructor(_mc: zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [12, this.frame13, 19, this.frame20, 26, this.frame27, 36, this.frame37, 44, this.frame45, 47, this.frame48, 77, this.frame78, 88, this.frame89, 93, this.frame94, 97, this.frame98, 102, this.frame103, 103, this.frame104, 108, this.frame109, 115, this.frame116, 117, this.frame118, 119, this.frame120, 126, this.frame127, 141, this.frame142, 149, this.frame150, 155, this.frame156, 160, this.frame161, 164, this.frame165, 171, this.frame172, 175, this.frame176, 181, this.frame182, 190, this.frame191, 194, this.frame195, 200, this.frame201, 207, this.frame208, 212, this.frame213, 215, this.frame216, 221, this.frame222, 237, this.frame238, 246, this.frame247, 249, this.frame250, 254, this.frame255, 261, this.frame262, 268, this.frame269, 276, this.frame277, 281, this.frame282, 282, this.frame283, 296, this.frame297, 301, this.frame302, 315, this.frame316, 318, this.frame319, 325, this.frame326, 336, this.frame337, 345, this.frame346, 375, this.frame376, 394, this.frame395, 398, this.frame399, 408, this.frame409, 415, this.frame416, 432, this.frame433, 439, this.frame440, 457, this.frame458, 469, this.frame470, 473, this.frame474, 480, this.frame481, 488, this.frame489, 496, this.frame497, 507, this.frame508, 520, this.frame521, 533, this.frame534, 536, this.frame537, 561, this.frame562, 573, this.frame574, 582, this.frame583, 598, this.frame599, 599, this.frame600, 645, this.frame646, 655, this.frame656, 700, this.frame701, 701, this.frame702, 703, this.frame704, 704, this.frame705, 793, this.frame794, 833, this.frame834, 840, this.frame841, 926, this.frame927, 947, this.frame948, 1017, this.frame1018, 1060, this.frame1061, 1086, this.frame1087, 1146, this.frame1147, 1178, this.frame1179, 1206, this.frame1207]);
            return;
        }// end 

         frame13()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end 

         frame20()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end 

         frame27()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end 

         frame37()
        {
            this.mc.parent._mcctrl.dash(3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end 

         frame45()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end 

         frame48()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame78()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame89()
        {
            this.mc.parent._mcctrl.movePercent(1.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.15, 0);
            return;
        }// end 

         frame94()
        {
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }// end 

         frame98()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame103()
        {
            this.mc.parent._mcctrl.move(0, -1);
            return;
        }// end 

         frame104()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end 

         frame109()
        {
            this.mc.parent._mcctrl.move(-1, -1);
            return;
        }// end 

         frame116()
        {
            this.mc.parent._EffectCtrl.shine(4312815);
            this.mc.parent._mcctrl.fire("tzatm", {x:13, y:7, hold:2, hits:1});
            return;
        }// end 

         frame118()
        {
            this.mc.parent._mcctrl.fire("tz1atm", {x:10, y:10, hold:2, hits:1});
            return;
        }// end 

         frame120()
        {
            this.mc.parent._mcctrl.fire("tz2atm", {x:7, y:13, hold:2, hits:1});
            return;
        }// end 

         frame127()
        {
            this.mc.parent._mcctrl.damping(0.1, 0.1);
            return;
        }// end 

         frame142()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame150()
        {
            this.mc.parent._mcctrl.movePercent(0.3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.03, 0);
            return;
        }// end 

         frame156()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end 

         frame161()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame165()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame172()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end 

         frame176()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }// end 

         frame182()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame191()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame195()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.02, 0);
            return;
        }// end 

         frame201()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end 

         frame208()
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

         frame222()
        {
            this.mc.parent._EffectCtrl.shine(4312815);
            return;
        }// end 

         frame238()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame247()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame250()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end 

         frame255()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end 

         frame262()
        {
            this.mc.parent._mcctrl.setSkill2("砍技22");
            return;
        }// end 

         frame269()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame277()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame282()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end 

         frame283()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end 

         frame297()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame302()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame316()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end 

         frame319()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._FighterCtrler.setCross(true);
            this.mc.parent._EffectCtrl.shine(11593976);
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            return;
        }// end 

         frame326()
        {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._FighterCtrler.setCross(false);
            return;
        }// end 

         frame337()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end 

         frame346()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame376()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end 

         frame395()
        {
            this.mc.parent._EffectCtrl.shine();
            this.mc.parent._EffectCtrl.shine(4312815);
            return;
        }// end 

         frame399()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end 

         frame409()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame416()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame433()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end 

         frame440()
        {
            this.mc.parent._mcctrl.movePercent(1.5, -2);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0.05);
            this.mc.parent._EffectCtrl.shadow(0, 100, 255);
            return;
        }// end 

         frame458()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame470()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end 

         frame474()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end 

         frame481()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame489()
        {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end 

         frame497()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end 

         frame508()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame521()
        {
            this.mc.parent._EffectCtrl.bisha(false, "日番谷2");
            return;
        }// end 

         frame534()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end 

         frame537()
        {
            this.mc.parent._EffectCtrl.shine(6867176);
            return;
        }// end 

         frame562()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame574()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame583()
        {
            this.mc.parent._EffectCtrl.bisha(false, "日番谷1");
            return;
        }// end 

         frame599()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end 

         frame600()
        {
            this.mc.parent._EffectCtrl.shine(6867176);
            return;
        }// end 

         frame646()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame656()
        {
            this.mc.parent._EffectCtrl.bisha(true, "日番谷3");
            return;
        }// end 

         frame701()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end 

         frame702()
        {
            this.mc.parent._EffectCtrl.slowDown(0.5);
            return;
        }// end 

         frame704()
        {
            this.mc.parent._EffectCtrl.shine();
            let bsmc = this.mc.parent._mcctrl.addAttacker("bsmc", {x:{moveToTarget:true, offset:10, range:[0, 400]}, y:{moveToTarget:true, offset:-30, range:[-200, 200]}, applyG:false});
            if (!bsmc) {
                return;
            }
            let shuilong = new Timeline_6(this.mc.parent._mcctrl.getAttacker("bsmc", bsmc.hashCode))
            return;
        }// end 

         frame705()
        {
            this.mc.parent._EffectCtrl.shine(6867176);
            return;
        }// end 

         frame794()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end 

         frame834()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame841()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end 

         frame927()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame948()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame1018()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end 

         frame1061()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end 

         frame1087()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end 

         frame1147()
        {
            this.mc.parent._EffectCtrl.startWanKai("日番谷万解");
            return;
        }// end 

         frame1179()
        {
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }// end 

         frame1207()
        {
            this.mc.parent._FighterCtrler.doWanKai();
            return;
        }// end 

    }
}
