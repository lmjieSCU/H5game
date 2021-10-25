/*
*主骨骼动画形态1对应的帧事件
*/
namespace hero_sasuke {
    export class Timeline_1 {

        public mc: any;                     //zmovie.ZMovieClip

        constructor(_mc: zmovie.ZMovieClip) {
            this.mc = _mc;
            this.mc.addFrameScript(this, [
                13, this.frame14, 19, this.frame20, 22, this.frame23, 32, this.frame33, 43, this.frame44, 46, this.frame47, 77, this.frame78, 84, this.frame85, 92, this.frame93, 96, this.frame97, 112, this.frame113, 124, this.frame125, 125, this.frame126, 132, this.frame133, 139, this.frame140, 146, this.frame147, 164, this.frame165, 168, this.frame169, 174, this.frame175, 177, this.frame178, 189, this.frame190, 198, this.frame199, 202, this.frame203, 209, this.frame210, 212, this.frame213, 226, this.frame227, 232, this.frame233, 239, this.frame240, 246, this.frame247, 269, this.frame270, 276, this.frame277, 278, this.frame279, 286, this.frame287, 288, this.frame289, 299, this.frame300, 306, this.frame307, 308, this.frame309, 318, this.frame319, 326, this.frame327, 339, this.frame340, 355, this.frame356, 360, this.frame361, 365, this.frame366, 377, this.frame378, 383, this.frame384, 388, this.frame389, 416, this.frame417, 427, this.frame428, 431, this.frame432, 441, this.frame442, 454, this.frame455, 455, this.frame456, 464, this.frame465, 472, this.frame473, 476, this.frame477, 487, this.frame488, 491, this.frame492, 501, this.frame502, 507, this.frame508, 511, this.frame512, 513, this.frame514, 529, this.frame530, 533, this.frame534, 540, this.frame541, 557, this.frame558, 573, this.frame574, 574, this.frame575, 576, this.frame577, 588, this.frame589, 599, this.frame600, 612, this.frame613, 624, this.frame625, 626, this.frame627, 627, this.frame628, 642, this.frame643, 650, this.frame651, 652, this.frame653, 653, this.frame654, 665, this.frame666, 668, this.frame669, 675, this.frame676, 682, this.frame683, 683, this.frame684, 687, this.frame688, 690, this.frame691, 699, this.frame700, 708, this.frame709, 731, this.frame732, 738, this.frame739, 752, this.frame753, 849, this.frame850, 874, this.frame875, 949, this.frame950, 990, this.frame991, 1018, this.frame1019, 1033, this.frame1034, 1059, this.frame1060, 1061, this.frame1062, 1118, this.frame1119, 1132, this.frame1133, 1170, this.frame1171
                ]);
        }

        frame14()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame20()
        {
            this.mc.parent._EffectCtrl.walk();
            return;
        }// end function

        frame23()
        {
            this.mc.parent._mcctrl.loop("走");
            return;
        }// end function

        frame33()
        {
            this.mc.parent._mcctrl.dash(2.3);
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._EffectCtrl.shadow(28, 99, 207);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame44()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        frame47()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame78()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame85()
        {
            this.mc.parent._mcctrl.setAirMove(true);
            return;
        }// end function

        frame93()
        {
            this.mc.parent._mcctrl.setSkillAIR("跳招");
            return;
        }// end function

        frame97()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame113()
        {
            this.mc.parent._mcctrl.movePercent(0, 1.5);
            this.mc.parent._mcctrl.setTouchFloor("跳招3", true);
            this.mc.parent._EffectCtrl.shadow(28, 99, 207);
            return;
        }// end function

        frame125()
        {
            //gotoAndPlay("跳招2");
            this.mc.parent._mcctrl.loop("跳招2");
            return;
        }// end function

        frame126()
        {
            this.mc.parent._EffectCtrl.shake(0, 3);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame133()
        {
            this.mc.parent._mcctrl.setAttack("砍1");
            return;
        }// end function

        frame140()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame147()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame165()
        {
            this.mc.parent._mcctrl.movePercent(1.2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.12, 0);
            return;
        }// end function

        frame169()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setBisha();
            return;
        }// end function

        frame175()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame178()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame190()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            return;
        }// end function

        frame199()
        {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame203()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill2();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setAttack("砍3");
            return;
        }// end function

        frame210()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame213()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame227()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        frame233()
        {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setSkill1();
            return;
        }// end function

        frame240()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame247()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame270()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame277()
        {
            this.mc.parent._mcctrl.movePercent(2.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.shadow(28, 99, 207);
            return;
        }// end function

        frame279()
        {
            this.mc.parent._EffectCtrl.shine(648163);
            return;
        }// end function

        frame287()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame289()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame300()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame307()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame309()
        {
            this.mc.parent._mcctrl.movePercent(1.7, 0);
            this.mc.parent._mcctrl.dampingPercent(0.3, 0);
            return;
        }// end function

        frame319()
        {
            this.mc.parent._mcctrl.movePercent(1.7, 0);
            this.mc.parent._mcctrl.dampingPercent(0.3, 0);
            return;
        }// end function

        frame327()
        {
            this.mc.parent._mcctrl.movePercent(-1.7, 0);
            this.mc.parent._mcctrl.dampingPercent(0.5, 0);
            return;
        }// end function

        frame340()
        {
            this.mc.parent._mcctrl.movePercent(1.7, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            this.mc.parent._EffectCtrl.shine(648163);
            return;
        }// end function

        frame356()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame361()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame366()
        {
            this.mc.parent._FighterCtrler.moveToTarget(-30, 0, true);
            return;
        }// end function

        frame378()
        {
            this.mc.parent._mcctrl.movePercent(0.7, -0.7);
            return;
        }// end function

        frame384()
        {
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.dampingPercent(0.05, 0.05);
            return;
        }// end function

        frame389()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame417()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame428()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        frame432()
        {
            this.mc.parent._EffectCtrl.shine(648163);
            return;
        }// end function

        frame442()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame455()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame456()
        {
            this.mc.parent._mcctrl.movePercent(1.7, -1);
            this.mc.parent._EffectCtrl.shadow(28, 99, 207);
            return;
        }// end function

        frame465()
        {
            this.mc.parent._mcctrl.dampingPercent(0.05, 0.05);
            return;
        }// end function

        frame473()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame477()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame488()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame492()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        frame502()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame508()
        {
            this.mc.parent._mcctrl.addQi(20);
            return;
        }// end function

        frame512()
        {
            this.mc.parent._EffectCtrl.shadow(110, -50, 255);
            return;
        }// end function

        frame514()
        {
            this.mc.parent._mcctrl.movePercent(3.2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame530()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame534()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame541()
        {
            this.mc.parent._EffectCtrl.bisha(false, "佐助2");
            return;
        }// end function

        frame558()
        {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._mcctrl.setHitTarget("bs10atm", "必杀2");
            this.mc.parent._mcctrl.movePercent(3, 0);
            this.mc.parent._EffectCtrl.shadow(28, 99, 207);
            return;
        }// end function

        frame574()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame575()
        {
            this.mc.parent._mcctrl.dampingPercent(0.3, 0);
            return;
        }// end function

        frame577()
        {
            this.mc.parent._EffectCtrl.shine(648163);
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame589()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame600()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame613()
        {
            this.mc.parent._EffectCtrl.bisha(false, "佐助1");
            return;
        }// end function

        frame625()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame627()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame628()
        {
            this.mc.parent._EffectCtrl.shine(648163);
            return;
        }// end function

        frame643()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame651()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame653()
        {
            this.mc.parent._EffectCtrl.shine(648163);
            return;
        }// end function

        frame654()
        {
            this.mc.parent._EffectCtrl.bisha(true, "佐助1");
            return;
        }// end function

        frame666()
        {
            this.mc.parent._EffectCtrl.endBisha();
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        frame669()
        {
            this.mc.parent._EffectCtrl.shine(648163);
            return;
        }// end function

        frame676()
        {
            this.mc.parent._mcctrl.justHitToPlay("cbs1", "超必杀1", false);
            return;
        }// end function

        frame683()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame684()
        {
            this.mc.parent._mcctrl.isApplyG(false);
            return;
        }// end function

        frame688()
        {
            this.mc.parent._FighterCtrler.moveToTarget(-30, 30, true);
            this.mc.parent._mcctrl.movePercent(0.5, -0.7);
            this.mc.parent._mcctrl.dampingPercent(0.01, 0.01);
            this.mc.parent._EffectCtrl.shadow(28, 99, 207);
            return;
        }// end function

        frame691()
        {
            this.mc.parent._EffectCtrl.shine(648163);
            return;
        }// end function

        frame700()
        {
            this.mc.parent._EffectCtrl.shine(648163);
            return;
        }// end function

        frame709()
        {
            this.mc.parent._EffectCtrl.shine(648163);
            return;
        }// end function

        frame732()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame739()
        {
            this.mc.parent._mcctrl.movePercent(-2, -2.5);
            this.mc.parent._mcctrl.dampingPercent(0.5, 0.5);
            this.mc.parent._EffectCtrl.shine(16711680);
            let shuilong_mc = this.mc.parent._mcctrl.addAttacker("huo", { applyG: false });
            if (!shuilong_mc) {
                 return;
            }
            let shuilong = new Timeline_9(this.mc.parent._mcctrl.getAttacker("huo", shuilong_mc.hashCode))

            return;
        }// end function

        frame753()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame850()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame875()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame950()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame991()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1019()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1034()
        {
            this.mc.parent._EffectCtrl.startWanKai("佐助2");
            return;
        }// end function

        frame1060()
        {
            this.mc.parent._EffectCtrl.shine(7870688);
            return;
        }// end function

        frame1062()
        {
            this.mc.parent._EffectCtrl.startShake(0, 3);
            return;
        }// end function

        frame1119()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame1133()
        {
            this.mc.parent._EffectCtrl.shine(7870688);
            return;
        }// end function

        frame1171()
        {
            this.mc.parent._FighterCtrler.doWanKai();
            return;
        }// end function

    }
}