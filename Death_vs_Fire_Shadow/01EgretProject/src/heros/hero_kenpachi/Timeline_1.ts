/*
*kenpachi主骨骼动画对应的帧事件
*/
namespace hero_kenpachi{
    export class Timeline_1 {

    public mc :any;                     //zmovie.ZMovieClip

    constructor(_mc:zmovie.ZMovieClip) {
        this.mc = _mc;
        this.mc.addFrameScript(this,[11, this.frame12, 15, this.frame16, 18, this.frame19, 23, this.frame24, 25, this.frame26, 29, this.frame30, 34, this.frame35, 67, this.frame68, 79, this.frame80, 86, this.frame87, 93, this.frame94, 97, this.frame98, 98, this.frame99, 103, this.frame104, 104, this.frame105, 112, this.frame113, 114, this.frame115, 116, this.frame117, 120, this.frame121, 131, this.frame132, 136, this.frame137, 141, this.frame142, 146, this.frame147, 148, this.frame149, 153, this.frame154, 159, this.frame160, 164, this.frame165, 169, this.frame170, 176, this.frame177, 185, this.frame186, 192, this.frame193, 200, this.frame201, 210, this.frame211, 216, this.frame217, 227, this.frame228, 241, this.frame242, 246, this.frame247, 249, this.frame250, 252, this.frame253, 255, this.frame256, 256, this.frame257, 257, this.frame258, 268, this.frame269, 270, this.frame271, 275, this.frame276, 282, this.frame283, 287, this.frame288, 300, this.frame301, 308, this.frame309, 318, this.frame319, 333, this.frame334, 337, this.frame338, 338, this.frame339, 347, this.frame348, 349, this.frame350, 353, this.frame354, 360, this.frame361, 373, this.frame374, 391, this.frame392, 398, this.frame399, 407, this.frame408, 434, this.frame435, 458, this.frame459, 460, this.frame461, 461, this.frame462, 467, this.frame468, 476, this.frame477, 479, this.frame480, 503, this.frame504, 572, this.frame573, 586, this.frame587, 605, this.frame606, 609, this.frame610, 610, this.frame611, 621, this.frame622, 638, this.frame639, 646, this.frame647, 662, this.frame663, 664, this.frame665, 666, this.frame667, 667, this.frame668, 719, this.frame720, 726, this.frame727, 733, this.frame734, 751, this.frame752, 759, this.frame760, 803, this.frame804, 804, this.frame805, 818, this.frame819, 827, this.frame828, 831, this.frame832, 836, this.frame837, 869, this.frame870, 875, this.frame876, 891, this.frame892, 912, this.frame913, 983, this.frame984, 998, this.frame999, 1017, this.frame1018, 1103, this.frame1104, 1106, this.frame1107, 1110, this.frame1111, 1132, this.frame1133, 1189, this.frame1190, 1219, this.frame1220, 1245, this.frame1246]);
    }
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

        frame24()
        {
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame26()
        {
            this.mc.parent._mcctrl.dash(5);
            return;
        }// end function

        frame30()
        {
            this.mc.parent._mcctrl.dashStop();
            return;
        }// end function

        frame35()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame68()
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
            return;
        }// end function

        frame94()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame98()
        {
            this.mc.parent._mcctrl.move(0, -3);
            this.mc.parent._EffectCtrl.shadow(200, 200, 0);
            return;
        }// end function

        frame99()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame104()
        {
            this.mc.parent._mcctrl.gotoAndPlay("跳招20");
            return;
        }// end function

        frame105()
        {
            this.mc.parent._mcctrl.move(0, 30);
            this.mc.parent._mcctrl.setTouchFloor("跳招3", true);
            return;
        }// end function

        frame113()
        {
            this.mc.parent._mcctrl.loop("跳招20");
            return;
        }// end function

        frame115()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame117()
        {
            this.mc.parent._EffectCtrl.shine();
            return;
        }// end function

        frame121()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame132()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame137()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame142()
        {
            this.mc.parent._mcctrl.setAttack("砍2");
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        frame147()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame149()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame154()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame160()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setAttack("砍3");
            this.mc.parent._mcctrl.setSkill2("砍技21");
            this.mc.parent._mcctrl.setSkill1();
            return;
        }// end function

        frame165()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame170()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame177()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame186()
        {
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setZhao1();
            this.mc.parent._mcctrl.setDash();
            return;
        }// end function

        frame193()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame201()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame211()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame217()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            this.mc.parent._EffectCtrl.shine(0);
            return;
        }// end function

        frame228()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame242()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame247()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame250()
        {
            this.mc.parent._EffectCtrl.shadow(200, 200, 0);
            return;
        }// end function

        frame253()
        {
            this.mc.parent._mcctrl.movePercent(3, 0);
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame256()
        {
            this.mc.parent._mcctrl.stopMove();
            return;
        }// end function

        frame257()
        {
            this.mc.parent._FighterCtrler.moveToTarget(150, 0, true);
            return;
        }// end function

         
        frame258()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.slowDown(0.5);
            this.mc.parent._mcctrl.gotoAndPlay("砍技21");
            return;
        }// end function

        frame269()
        {
            this.mc.parent._mcctrl.setBishaSUPER();
            this.mc.parent._mcctrl.setSkill2("砍技22");
            this.mc.parent._mcctrl.setAttack("砍技22");
            this.mc.parent._mcctrl.setBisha();
            this.mc.parent._mcctrl.setZhao1();
            return;
        }// end function

        frame271()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame276()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame283()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame288()
        {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.shadow(200, 200, 0);
            return;
        }// end function

        frame301()
        {
            this.mc.parent._mcctrl.setBishaUP();
            this.mc.parent._mcctrl.setZhao3();
            this.mc.parent._mcctrl.setJump();
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame309()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame319()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame334()
        {
            this.mc.parent._mcctrl.addQi(10);
            return;
        }// end function

        frame338()
        {
            this.mc.parent._EffectCtrl.shine(16776960);
            this.mc.parent._EffectCtrl.shadow(200, 200, 0);
            return;
        }// end function

        frame339()
        {
            this.mc.parent._mcctrl.movePercent(3, 0);
            return;
        }// end function

        frame348()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame350()
        {
            this.mc.parent._mcctrl.dampingPercent(0.2, 0);
            return;
        }// end function

        frame354()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame361()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame374()
        {
            this.mc.parent._mcctrl.addQi(5);
            this.mc.parent._mcctrl.setHurtAction("招21");
            return;
        }// end function

        frame392()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame399()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame408()
        {
            this.mc.parent._EffectCtrl.shine(16776960);
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame435()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame459()
        {
            this.mc.parent._mcctrl.addQi(5);
            return;
        }// end function

        frame461()
        {
            this.mc.parent._EffectCtrl.shine(16776960);
            this.mc.parent._EffectCtrl.shadow(200, 200, 0);
            return;
        }// end function

        frame462()
        {
            this.mc.parent._mcctrl.movePercent(0.5, -2);
            this.mc.parent._mcctrl.dampingPercent(0.02, 0.1);
            return;
        }// end function

        frame468()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame477()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame480()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame504()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame573()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame587()
        {
            this.mc.parent._EffectCtrl.bisha(false, "剑八1");
            return;
        }// end function

        frame606()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame610()
        {
            this.mc.parent._EffectCtrl.shine(16776960);
            return;
        }// end function

        frame611()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame622()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame639()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame647()
        {
            this.mc.parent._EffectCtrl.bisha(false, "剑八1");
            return;
        }// end function

        frame663()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame665()
        {
            this.mc.parent._EffectCtrl.dash();
            return;
        }// end function

        frame667()
        {
            this.mc.parent._FighterCtrler.moveToTarget(-50, 30, false);
            return;
        }// end function

        frame668()
        {
            this.mc.parent._mcctrl.move(2, -2);
            return;
        }// end function

        frame720()
        {
            this.mc.parent._mcctrl.damping(0.2, 0.2);
            return;
        }// end function

        frame727()
        {
            this.mc.parent._EffectCtrl.shine(16776960);
            return;
        }// end function

        frame734()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame752()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame760()
        {
            this.mc.parent._EffectCtrl.bisha(true, "剑八2");
            return;
        }// end function

        frame804()
        {
            this.mc.parent._EffectCtrl.endBisha();
            return;
        }// end function

        frame805()
        {
            this.mc.parent._mcctrl.movePercent(2, 0);
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            this.mc.parent._EffectCtrl.shadow(200, 200, 0);
            return;
        }// end function

        frame819()
        {
            this.mc.parent._mcctrl.justHitToPlay("cbs1", "超必杀1");
            return;
        }// end function

        frame828()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame832()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }// end function

        frame837()
        {
            this.mc.parent._mcctrl.movePercent(0.3, 0);
            return;
        }// end function

        frame870()
        {
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame876()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame892()
        {
            this.mc.parent._mcctrl.movePercent(1, 0);
            this.mc.parent._mcctrl.dampingPercent(0.05, 0);
            return;
        }// end function

        frame913()
        {
            this.mc.parent._EffectCtrl.endShadow();
            return;
        }// end function

        frame984()
        {
            this.mc.parent._EffectCtrl.shine(16776960);
            return;
        }// end function

        frame999()
        {
            this.mc.parent._mcctrl.endAct();
            return;
        }// end function

        frame1018()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1104()
        {
            this.mc.parent._mcctrl.movePercent(0.5, 0);
            return;
        }// end function

        frame1107()
        {
            this.mc.parent._mcctrl.dampingPercent(0.1, 0);
            return;
        }// end function

        frame1111()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1133()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1190()
        {
            this.mc.parent._mcctrl.idle();
            return;
        }// end function

        frame1220()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function

        frame1246()
        {
            this.mc.parent._mcctrl.stop();
            return;
        }// end function
    }
}