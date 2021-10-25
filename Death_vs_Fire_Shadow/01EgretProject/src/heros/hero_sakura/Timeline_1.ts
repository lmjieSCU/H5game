/*
*主骨骼动画形态1对应的帧事件
*/
namespace hero_sakura {
    export class Timeline_1 {

        public mc: any;                     //zmovie.ZMovieClip

        constructor(_mc: zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [13, this.frame14, 21, this.frame22, 23, this.frame24, 28, this.frame29, 39, this.frame40, 42, this.frame43, 73, this.frame74, 79, this.frame80, 86, this.frame87, 91, this.frame92, 114, this.frame115, 119, this.frame120, 127, this.frame128, 129, this.frame130, 147, this.frame148, 159, this.frame160, 163, this.frame164, 169, this.frame170, 172, this.frame173, 181, this.frame182, 187, this.frame188, 193, this.frame194, 197, this.frame198, 215, this.frame216, 224, this.frame225, 235, this.frame236, 242, this.frame243, 262, this.frame263, 271, this.frame272, 283, this.frame284, 291, this.frame292, 309, this.frame310, 312, this.frame313, 328, this.frame329, 335, this.frame336, 341, this.frame342, 346, this.frame347, 358, this.frame359, 359, this.frame360, 366, this.frame367, 376, this.frame377, 379, this.frame380, 390, this.frame391, 395, this.frame396, 411, this.frame412, 420, this.frame421, 422, this.frame423, 428, this.frame429, 435, this.frame436, 465, this.frame466, 474, this.frame475, 491, this.frame492, 498, this.frame499, 511, this.frame512, 526, this.frame527, 544, this.frame545, 559, this.frame560, 582, this.frame583, 587, this.frame588, 592, this.frame593, 599, this.frame600, 602, this.frame603, 604, this.frame605, 615, this.frame616, 631, this.frame632, 639, this.frame640, 658, this.frame659, 662, this.frame663, 663, this.frame664, 664, this.frame665, 665, this.frame666, 666, this.frame667, 668, this.frame669, 675, this.frame676, 676, this.frame677, 677, this.frame678, 678, this.frame679, 693, this.frame694, 712, this.frame713, 724, this.frame725, 725, this.frame726, 732, this.frame733, 733, this.frame734, 734, this.frame735, 735, this.frame736, 741, this.frame742, 750, this.frame751, 766, this.frame767, 787, this.frame788, 788, this.frame789, 801, this.frame802, 802, this.frame803, 820, this.frame821, 865, this.frame866, 874, this.frame875, 894, this.frame895, 981, this.frame982, 1002, this.frame1003, 1077, this.frame1078, 1118, this.frame1119, 1146, this.frame1147
            ]);
        }

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

        frame29()
        {
            this.mc.parent._mcctrl.dash(3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(150, 0, 150);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame40()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        frame43()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame74()
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
            this.mc.parent._mcctrl.setBishaAIR();
            return;
        }// end function

        frame92()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame115()
        {
            this.mc.parent._mcctrl.movePercent(0, -1);
            this.mc.parent._EffectCtrl.shadow(150, 0, 150);
            return;
        }// end function

        frame120()
        {
            this.mc.parent._mcctrl.movePercent(1.5, 2);
            this.mc.parent._mcctrl.setTouchFloor("跳招3", true);
            //
            this.mc.parent._mcctrl.gotoAndPlay("跳招2");
            return;
        }// end function

        frame128()
        {
            this.mc.parent._mcctrl.loop("跳招2");
            return;
        }// end function

        frame130()
        {
            this.mc.parent._EffectCtrl.shake(0, 3);
            this.mc.parent._EffectCtrl.endShadow();
            this.mc.parent._EffectCtrl.shake(0, 3);
            return;
        }// end function

        frame148()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame160()
        {
            this.mc.parent._mcctrl.movePercent(0.8, 0);
            this.mc.parent._mcctrl.dampingPercent(0.08, 0);
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
            this.mc.parent._mcctrl.movePercent(1.2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame188()
        {
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }// end function

        frame194()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame198()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame216()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame225()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._mcctrl.setZhao2();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        frame236()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame243()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame263()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame272()
        {
            let shuilong_mc = this.mc.parent._mcctrl.addAttacker("stone");
            if (!shuilong_mc) {
                 return;
            }
            let shuilong = new Timeline_6(this.mc.parent._mcctrl.getAttacker("stone", shuilong_mc.hashCode))
            return;
        }// end function

        frame284()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame292()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame310()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame313()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._EffectCtrl.shadow(150, 0, 150);
            return;
        }// end function

        frame329()
        {
            this.mc.parent._mcctrl.movePercent(1.5, -2);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0.1);
            return;
        }// end function

        frame336()
        {
            this.mc.parent._mcctrl.setBishaAIR();
            this.mc.parent._mcctrl.setSkillAIR();
            return;
        }// end function

        frame342()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame347()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame359()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame360()
        {
            this.mc.parent._mcctrl.movePercent(-2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.shadow(150, 0, 150);
            return;
        }// end function

        frame367()
        {
            this.mc.parent._mcctrl.fire("zh1atm", {x:{start:15, hit:3}, y:0, hold:2, hits:1, hp:30});
            return;
        }// end function

        frame377()
        {
            this.mc.parent._mcctrl.fire("zh1atm", {x:{start:15, hit:3}, y:0, hold:2, hits:3, hp:70});
            return;
        }// end function

        frame380()
        {
            this.mc.parent._mcctrl.setSkill1();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame391()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame396()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame412()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame421()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.3, 0);
            return;
        }// end function

        frame423()
        {
            this.mc.parent._EffectCtrl.shake(0, 5);
            return;
        }// end function

        frame429()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        frame436()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame466()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame475()
        {
            this.mc.parent._mcctrl.fire("zh3atm", {x:20, y:-20, hold:2, hits:1});
            this.mc.parent._mcctrl.fire("zh31atm", {x:15, y:-25, hold:2, hits:1});
            this.mc.parent._mcctrl.fire("zh32atm", {x:25, y:-15, hold:2, hits:1});
            return;
        }// end function

        frame492()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame499()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame512()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame527()
        {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        frame545()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame560()
        {
            this.mc.parent._EffectCtrl.bisha(false, "樱1");
            return;
        }// end function

        frame583()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame588()
        {
            this.mc.parent._mcctrl.setHitTarget("bs10atm", "必杀2");
            this.mc.parent._mcctrl.movePercent(3, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame593()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame600()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame603()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame605()
        {
            this.mc.parent._EffectCtrl.shine(16718656);
            return;
        }// end function

        frame616()
        {
            this.mc.parent._mcctrl.movePercent(-2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame632()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame640()
        {
            this.mc.parent._EffectCtrl.bisha(false, "樱1");
            return;
        }// end function

        frame659()
        {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._mcctrl.movePercent(5, 0);
            this.mc.parent._EffectCtrl.shadow(150, 0, 150);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame663()
        {
            this.mc.parent._mcctrl.move(0, 0);
            return;
        }// end function

        frame664()
        {
            this.mc.parent._FighterCtrler.moveToTarget(0, -80, false);
            return;
        }// end function

        frame665()
        {
            this.mc.parent._FighterCtrler.moveToTarget(0, -80, false);
            return;
        }// end function

        frame666()
        {
            this.mc.parent._FighterCtrler.moveToTarget(0, -80, false);
            return;
        }// end function

        frame667()
        {
            this.mc.parent._FighterCtrler.moveToTarget(0, -80, false);
            return;
        }// end function

        frame669()
        {
            this.mc.parent._mcctrl.movePercent(0, 1.5);
            this.mc.parent._mcctrl.setTouchFloor("上必杀2", true);
            return;
        }// end function

        frame676()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame677()
        {
            this.mc.parent._EffectCtrl.shake(0, 5);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame678()
        {
            this.mc.parent._EffectCtrl.shine(12591104);
            return;
        }// end function

        frame679()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame694()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame713()
        {
            this.mc.parent._EffectCtrl.bisha(false, "樱1");
            return;
        }// end function

        frame725()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame726()
        {
            this.mc.parent._mcctrl.movePercent(0, 1.5);
            this.mc.parent._mcctrl.setTouchFloor("空中必杀2", true);
            this.mc.parent._EffectCtrl.shadow(150, 0, 150);
            return;
        }// end function

        frame733()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame734()
        {
            this.mc.parent._EffectCtrl.shake(0, 5);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame735()
        {
            this.mc.parent._EffectCtrl.shine(12591104);
            return;
        }// end function

        frame736()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame742()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame751()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame767()
        {
            this.mc.parent._EffectCtrl.bisha(true, "樱2");
            return;
        }// end function

        frame788()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame789()
        {
            this.mc.parent._mcctrl.setHitTarget("cbs0atm", "超必杀1");
            this.mc.parent._mcctrl.movePercent(5, 0);
            this.mc.parent._EffectCtrl.shadow(150, 0, 150);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame802()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame803()
        {
            this.mc.parent._EffectCtrl.shadow(150, 0, 150);
            return;
        }// end function

        frame821()
        {
            this.mc.parent._EffectCtrl.shine(14917603);
            return;
        }// end function

        frame866()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame875()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame895()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame982()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1003()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1078()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1119()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1147()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function
    }
}